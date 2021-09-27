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

export namespace retail_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
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
   * const retail = google.retail('v2');
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
     * Cloud Storage file path of the import source. Can be set for batch operation error.
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
   * Metadata related to the progress of the AddFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the AddFulfillmentPlaces method.
   */
  export interface Schema$GoogleCloudRetailV2AddFulfillmentPlacesMetadata {}
  /**
   * Request message for AddFulfillmentPlaces method.
   */
  export interface Schema$GoogleCloudRetailV2AddFulfillmentPlacesRequest {
    /**
     * The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.
     */
    addTime?: string | null;
    /**
     * If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, an INVALID_ARGUMENT error is returned if the Product is not found.
     */
    allowMissing?: boolean | null;
    /**
     * Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery" to be added for this type. Duplicate IDs will be automatically ignored. At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern [a-zA-Z0-9_-]+, such as "store1" or "REGION-2". Otherwise, an INVALID_ARGUMENT error is returned. If the total number of place IDs exceeds 2000 for this type after adding, then the update will be rejected.
     */
    placeIds?: string[] | null;
    /**
     * Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. This field directly corresponds to Product.fulfillment_info.type.
     */
    type?: string | null;
  }
  /**
   * Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the AddFulfillmentPlaces method.
   */
  export interface Schema$GoogleCloudRetailV2AddFulfillmentPlacesResponse {}
  /**
   * Metadata related to the progress of the AddFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the AddFulfillmentPlaces method.
   */
  export interface Schema$GoogleCloudRetailV2alphaAddFulfillmentPlacesMetadata {}
  /**
   * Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the AddFulfillmentPlaces method.
   */
  export interface Schema$GoogleCloudRetailV2alphaAddFulfillmentPlacesResponse {}
  /**
   * Metadata related to the EnrollSolution method. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudRetailV2alphaEnrollSolutionMetadata {}
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
   * Response of the ImportCompletionDataRequest. If the long running operation is done, this message is returned by the google.longrunning.Operations.response field if the operation is successful.
   */
  export interface Schema$GoogleCloudRetailV2alphaImportCompletionDataResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
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
     * Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification will be sent to specified Pub/Sub topic. The message data will be JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project\}/topics/{topic\}`.
     */
    notificationPubsubTopic?: string | null;
    /**
     * Id of the request / operation. This is parroting back the requestId that was passed in the request.
     */
    requestId?: string | null;
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
   * Metadata related to the progress of the RemoveFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the RemoveFulfillmentPlaces method.
   */
  export interface Schema$GoogleCloudRetailV2alphaRemoveFulfillmentPlacesMetadata {}
  /**
   * Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the RemoveFulfillmentPlaces method.
   */
  export interface Schema$GoogleCloudRetailV2alphaRemoveFulfillmentPlacesResponse {}
  /**
   * Metadata related to the progress of the SetInventory operation. Currently empty because there is no meaningful metadata populated from the SetInventory method.
   */
  export interface Schema$GoogleCloudRetailV2alphaSetInventoryMetadata {}
  /**
   * Response of the SetInventoryRequest. Currently empty because there is no meaningful response populated from the SetInventory method.
   */
  export interface Schema$GoogleCloudRetailV2alphaSetInventoryResponse {}
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
   * An intended audience of the Product for whom it's sold.
   */
  export interface Schema$GoogleCloudRetailV2Audience {
    /**
     * The age groups of the audience. Strongly encouraged to use the standard values: "newborn" (up to 3 months old), "infant" (3–12 months old), "toddler" (1–5 years old), "kids" (5–13 years old), "adult" (typically teens or older). At most 5 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [age_group](https://support.google.com/merchants/answer/6324463). Schema.org property [Product.audience.suggestedMinAge](https://schema.org/suggestedMinAge) and [Product.audience.suggestedMaxAge](https://schema.org/suggestedMaxAge).
     */
    ageGroups?: string[] | null;
    /**
     * The genders of the audience. Strongly encouraged to use the standard values: "male", "female", "unisex". At most 5 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [gender](https://support.google.com/merchants/answer/6324479). Schema.org property [Product.audience.suggestedGender](https://schema.org/suggestedGender).
     */
    genders?: string[] | null;
  }
  /**
   * Metadata related to the progress of the AddFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the AddFulfillmentPlaces method.
   */
  export interface Schema$GoogleCloudRetailV2betaAddFulfillmentPlacesMetadata {}
  /**
   * Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the AddFulfillmentPlaces method.
   */
  export interface Schema$GoogleCloudRetailV2betaAddFulfillmentPlacesResponse {}
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
   * Response of the ImportCompletionDataRequest. If the long running operation is done, this message is returned by the google.longrunning.Operations.response field if the operation is successful.
   */
  export interface Schema$GoogleCloudRetailV2betaImportCompletionDataResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
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
     * Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification will be sent to specified Pub/Sub topic. The message data will be JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project\}/topics/{topic\}`.
     */
    notificationPubsubTopic?: string | null;
    /**
     * Id of the request / operation. This is parroting back the requestId that was passed in the request.
     */
    requestId?: string | null;
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
   * Metadata related to the progress of the Purge operation. This will be returned by the google.longrunning.Operation.metadata field.
   */
  export interface Schema$GoogleCloudRetailV2betaPurgeMetadata {}
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
   * Response message for RejoinUserEvents method.
   */
  export interface Schema$GoogleCloudRetailV2betaRejoinUserEventsResponse {
    /**
     * Number of user events that were joined with latest product catalog.
     */
    rejoinedUserEventsCount?: string | null;
  }
  /**
   * Metadata related to the progress of the RemoveFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the RemoveFulfillmentPlaces method.
   */
  export interface Schema$GoogleCloudRetailV2betaRemoveFulfillmentPlacesMetadata {}
  /**
   * Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the RemoveFulfillmentPlaces method.
   */
  export interface Schema$GoogleCloudRetailV2betaRemoveFulfillmentPlacesResponse {}
  /**
   * Metadata related to the progress of the SetInventory operation. Currently empty because there is no meaningful metadata populated from the SetInventory method.
   */
  export interface Schema$GoogleCloudRetailV2betaSetInventoryMetadata {}
  /**
   * Response of the SetInventoryRequest. Currently empty because there is no meaningful response populated from the SetInventory method.
   */
  export interface Schema$GoogleCloudRetailV2betaSetInventoryResponse {}
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
   * BigQuery source import data from.
   */
  export interface Schema$GoogleCloudRetailV2BigQuerySource {
    /**
     * The schema to use when parsing the data from the source. Supported values for product imports: * `product` (default): One JSON Product per line. Each product must have a valid Product.id. * `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc). Supported values for user events imports: * `user_event` (default): One JSON UserEvent per line. * `user_event_ga360`: Using https://support.google.com/analytics/answer/3437719.
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
     * BigQuery time partitioned table's _PARTITIONDATE in YYYY-MM-DD format. Only supported when ImportProductsRequest.reconciliation_mode is set to `FULL`.
     */
    partitionDate?: Schema$GoogleTypeDate;
    /**
     * The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.
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
  export interface Schema$GoogleCloudRetailV2Catalog {
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
    productLevelConfig?: Schema$GoogleCloudRetailV2ProductLevelConfig;
  }
  /**
   * The color information of a Product.
   */
  export interface Schema$GoogleCloudRetailV2ColorInfo {
    /**
     * The standard color families. Strongly recommended to use the following standard color groups: "Red", "Pink", "Orange", "Yellow", "Purple", "Green", "Cyan", "Blue", "Brown", "White", "Gray", "Black" and "Mixed". Normally it is expected to have only 1 color family. May consider using single "Mixed" instead of multiple values. A maximum of 5 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [color](https://support.google.com/merchants/answer/6324487). Schema.org property [Product.color](https://schema.org/color).
     */
    colorFamilies?: string[] | null;
    /**
     * The color display names, which may be different from standard color family names, such as the color aliases used in the website frontend. Normally it is expected to have only 1 color. May consider using single "Mixed" instead of multiple values. A maximum of 25 colors are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [color](https://support.google.com/merchants/answer/6324487). Schema.org property [Product.color](https://schema.org/color).
     */
    colors?: string[] | null;
  }
  /**
   * Response of the auto-complete query.
   */
  export interface Schema$GoogleCloudRetailV2CompleteQueryResponse {
    /**
     * A unique complete token. This should be included in the SearchRequest resulting from this completion, which enables accurate attribution of complete model performance.
     */
    attributionToken?: string | null;
    /**
     * Results of the matching suggestions. The result list is ordered and the first result is top suggestion.
     */
    completionResults?: Schema$GoogleCloudRetailV2CompleteQueryResponseCompletionResult[];
    /**
     * Matched recent searches of this user. The maximum number of recent searches is 10. This field is a restricted feature. Contact Retail Search support team if you are interested in enabling it. This feature is only available when CompleteQueryRequest.visitor_id field is set and UserEvent is imported. The recent searches satisfy the follow rules: * They are ordered from latest to oldest. * They are matched with CompleteQueryRequest.query case insensitively. * They are transformed to lower cases. * They are UTF-8 safe. Recent searches are deduplicated. More recent searches will be reserved when duplication happens.
     */
    recentSearchResults?: Schema$GoogleCloudRetailV2CompleteQueryResponseRecentSearchResult[];
  }
  /**
   * Resource that represents completion results.
   */
  export interface Schema$GoogleCloudRetailV2CompleteQueryResponseCompletionResult {
    /**
     * Additional custom attributes ingested through BigQuery.
     */
    attributes?: {
      [key: string]: Schema$GoogleCloudRetailV2CustomAttribute;
    } | null;
    /**
     * The suggestion for the query.
     */
    suggestion?: string | null;
  }
  /**
   * Recent search of this user.
   */
  export interface Schema$GoogleCloudRetailV2CompleteQueryResponseRecentSearchResult {
    /**
     * The recent search query.
     */
    recentSearch?: string | null;
  }
  /**
   * The input config source for completion data.
   */
  export interface Schema$GoogleCloudRetailV2CompletionDataInputConfig {
    /**
     * Required. BigQuery input source. Add the IAM permission "BigQuery Data Viewer" for cloud-retail-customer-data-access@system.gserviceaccount.com before using this feature otherwise an error is thrown.
     */
    bigQuerySource?: Schema$GoogleCloudRetailV2BigQuerySource;
  }
  /**
   * Detailed completion information including completion attribution token and clicked completion info.
   */
  export interface Schema$GoogleCloudRetailV2CompletionDetail {
    /**
     * Completion attribution token in CompleteQueryResponse.attribution_token.
     */
    completionAttributionToken?: string | null;
    /**
     * End user selected CompleteQueryResponse.CompletionResult.suggestion position, starting from 0.
     */
    selectedPosition?: number | null;
    /**
     * End user selected CompleteQueryResponse.CompletionResult.suggestion.
     */
    selectedSuggestion?: string | null;
  }
  /**
   * A custom attribute that is not explicitly modeled in Product.
   */
  export interface Schema$GoogleCloudRetailV2CustomAttribute {
    /**
     * If true, custom attribute values are indexed, so that it can be filtered, faceted or boosted in SearchService.Search. This field is ignored in a UserEvent. See SearchRequest.filter, SearchRequest.facet_specs and SearchRequest.boost_spec for more details.
     */
    indexable?: boolean | null;
    /**
     * The numerical values of this custom attribute. For example, `[2.3, 15.4]` when the key is "lengths_cm". At most 400 values are allowed.Otherwise, an INVALID_ARGUMENT error is returned. Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    numbers?: number[] | null;
    /**
     * If true, custom attribute values are searchable by text queries in SearchService.Search. This field is ignored in a UserEvent. Only set if type text is set. Otherwise, a INVALID_ARGUMENT error is returned.
     */
    searchable?: boolean | null;
    /**
     * The textual values of this custom attribute. For example, `["yellow", "green"]` when the key is "color". At most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters. Otherwise, an INVALID_ARGUMENT error is returned. Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    text?: string[] | null;
  }
  /**
   * Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods.
   */
  export interface Schema$GoogleCloudRetailV2FulfillmentInfo {
    /**
     * The IDs for this type, such as the store IDs for FulfillmentInfo.type.pickup-in-store or the region IDs for FulfillmentInfo.type.same-day-delivery. A maximum of 3000 values are allowed. Each value must be a string with a length limit of 30 characters, matching the pattern [a-zA-Z0-9_-]+, such as "store1" or "REGION-2". Otherwise, an INVALID_ARGUMENT error is returned.
     */
    placeIds?: string[] | null;
    /**
     * The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Customers have to map custom types to their display names before rendering UI. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned.
     */
    type?: string | null;
  }
  /**
   * Google Cloud Storage location for input content. format.
   */
  export interface Schema$GoogleCloudRetailV2GcsSource {
    /**
     * The schema to use when parsing the data from the source. Supported values for product imports: * `product` (default): One JSON Product per line. Each product must have a valid Product.id. * `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc). Supported values for user events imports: * `user_event` (default): One JSON UserEvent per line. * `user_event_ga360`: Using https://support.google.com/analytics/answer/3437719.
     */
    dataSchema?: string | null;
    /**
     * Required. Google Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, `gs://bucket/directory/object.json`) or a pattern matching one or more files, such as `gs://bucket/directory/x.json`. A request can contain at most 100 files, and each file can be up to 2 GB. See [Importing product information](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog) for the expected file format and setup instructions.
     */
    inputUris?: string[] | null;
  }
  /**
   * Response message of CatalogService.GetDefaultBranch.
   */
  export interface Schema$GoogleCloudRetailV2GetDefaultBranchResponse {
    /**
     * Full resource name of the branch id currently set as default branch.
     */
    branch?: string | null;
    /**
     * This corresponds to SetDefaultBranchRequest.note field, when this branch was set as default.
     */
    note?: string | null;
    /**
     * The time when this branch is set to default.
     */
    setTime?: string | null;
  }
  /**
   * Product thumbnail/detail image.
   */
  export interface Schema$GoogleCloudRetailV2Image {
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
   * Request message for ImportCompletionData methods.
   */
  export interface Schema$GoogleCloudRetailV2ImportCompletionDataRequest {
    /**
     * Required. The desired input location of the data.
     */
    inputConfig?: Schema$GoogleCloudRetailV2CompletionDataInputConfig;
    /**
     * Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification will be sent to specified Pub/Sub topic. The message data will be JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project\}/topics/{topic\}`.
     */
    notificationPubsubTopic?: string | null;
  }
  /**
   * Response of the ImportCompletionDataRequest. If the long running operation is done, this message is returned by the google.longrunning.Operations.response field if the operation is successful.
   */
  export interface Schema$GoogleCloudRetailV2ImportCompletionDataResponse {
    /**
     * A sample of errors encountered while processing the request.
     */
    errorSamples?: Schema$GoogleRpcStatus[];
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
     * Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification will be sent to specified Pub/Sub topic. The message data will be JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project\}/topics/{topic\}`.
     */
    notificationPubsubTopic?: string | null;
    /**
     * Id of the request / operation. This is parroting back the requestId that was passed in the request.
     */
    requestId?: string | null;
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
  export interface Schema$GoogleCloudRetailV2ImportProductsRequest {
    /**
     * The desired location of errors incurred during the Import.
     */
    errorsConfig?: Schema$GoogleCloudRetailV2ImportErrorsConfig;
    /**
     * Required. The desired input location of the data.
     */
    inputConfig?: Schema$GoogleCloudRetailV2ProductInputConfig;
    /**
     * Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification will be sent to specified Pub/Sub topic. The message data will be JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project\}/topics/{topic\}`. Only supported when ImportProductsRequest.reconciliation_mode is set to `FULL`.
     */
    notificationPubsubTopic?: string | null;
    /**
     * The mode of reconciliation between existing products and the products to be imported. Defaults to ReconciliationMode.INCREMENTAL.
     */
    reconciliationMode?: string | null;
    /**
     * Unique identifier provided by client, within the ancestor dataset scope. Ensures idempotency and used for request deduplication. Server-generated if unspecified. Up to 128 characters long and must match the pattern: "[a-zA-Z0-9_]+". This is returned as Operation.name in ImportMetadata. Only supported when ImportProductsRequest.reconciliation_mode is set to `FULL`.
     */
    requestId?: string | null;
    /**
     * Indicates which fields in the provided imported 'products' to update. If not set, will by default update all fields.
     */
    updateMask?: string | null;
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
   * Request message for the ImportUserEvents request.
   */
  export interface Schema$GoogleCloudRetailV2ImportUserEventsRequest {
    /**
     * The desired location of errors incurred during the Import. Cannot be set for inline user event imports.
     */
    errorsConfig?: Schema$GoogleCloudRetailV2ImportErrorsConfig;
    /**
     * Required. The desired input location of the data.
     */
    inputConfig?: Schema$GoogleCloudRetailV2UserEventInputConfig;
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
   * A floating point interval.
   */
  export interface Schema$GoogleCloudRetailV2Interval {
    /**
     * Exclusive upper bound.
     */
    exclusiveMaximum?: number | null;
    /**
     * Exclusive lower bound.
     */
    exclusiveMinimum?: number | null;
    /**
     * Inclusive upper bound.
     */
    maximum?: number | null;
    /**
     * Inclusive lower bound.
     */
    minimum?: number | null;
  }
  /**
   * Response for CatalogService.ListCatalogs method.
   */
  export interface Schema$GoogleCloudRetailV2ListCatalogsResponse {
    /**
     * All the customer's Catalogs.
     */
    catalogs?: Schema$GoogleCloudRetailV2Catalog[];
    /**
     * A token that can be sent as ListCatalogsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ProductService.ListProducts method.
   */
  export interface Schema$GoogleCloudRetailV2ListProductsResponse {
    /**
     * A token that can be sent as ListProductsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The Products.
     */
    products?: Schema$GoogleCloudRetailV2Product[];
  }
  /**
   * Request message for Predict method.
   */
  export interface Schema$GoogleCloudRetailV2PredictRequest {
    /**
     * Filter for restricting prediction results with a length limit of 5,000 characters. Accepts values for tags and the `filterOutOfStockItems` flag. * Tag expressions. Restricts predictions to products that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1,000 characters. Note: "Recently viewed" models don't support tag filtering at the moment. * filterOutOfStockItems. Restricts predictions to products that do not have a stockState value of OUT_OF_STOCK. Examples: * tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional") * filterOutOfStockItems tag=(-"promotional") * filterOutOfStockItems If your filter blocks all prediction results, nothing will be returned. If you want generic (unfiltered) popular products to be returned instead, set `strictFiltering` to false in `PredictRequest.params`.
     */
    filter?: string | null;
    /**
     * The labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters, and cannot be empty. Values can be empty, and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.
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
     * Additional domain specific parameters for the predictions. Allowed values: * `returnProduct`: Boolean. If set to true, the associated product object will be returned in the `results.metadata` field in the prediction response. * `returnScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned product will be set in the `results.metadata` field in the prediction response. The given 'score' indicates the probability of an product being clicked/purchased given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular products instead of empty if your filter blocks all prediction results. * `priceRerankLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-price-reranking', 'low-price-reranking', 'medium-price-reranking', 'high-price-reranking'\}. This gives request-level control and adjusts prediction results based on product price. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-diversity', 'low-diversity', 'medium-diversity', 'high-diversity', 'auto-diversity'\}. This gives request-level control and adjusts prediction results based on product category.
     */
    params?: {[key: string]: any} | null;
    /**
     * Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging.
     */
    userEvent?: Schema$GoogleCloudRetailV2UserEvent;
    /**
     * Use validate only mode for this prediction query. If set to true, a dummy model will be used that returns arbitrary products. Note that the validate only mode should only be used for testing the API, or if the model is not ready.
     */
    validateOnly?: boolean | null;
  }
  /**
   * Response message for predict method.
   */
  export interface Schema$GoogleCloudRetailV2PredictResponse {
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
    results?: Schema$GoogleCloudRetailV2PredictResponsePredictionResult[];
    /**
     * True if the validateOnly property was set in the request.
     */
    validateOnly?: boolean | null;
  }
  /**
   * PredictionResult represents the recommendation prediction results.
   */
  export interface Schema$GoogleCloudRetailV2PredictResponsePredictionResult {
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
  export interface Schema$GoogleCloudRetailV2PriceInfo {
    /**
     * The costs associated with the sale of a particular product. Used for gross profit reporting. * Profit = price - cost Google Merchant Center property [cost_of_goods_sold](https://support.google.com/merchants/answer/9017895).
     */
    cost?: number | null;
    /**
     * The 3-letter currency code defined in [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html). If this field is an unrecognizable currency code, an INVALID_ARGUMENT error is returned. The Product.Type.VARIANT Products with the same Product.primary_product_id must share the same currency_code. Otherwise, a FAILED_PRECONDITION error is returned.
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
    /**
     * The timestamp when the price starts to be effective. This can be set as a future timestamp, and the price is only used for search after price_effective_time. If so, the original_price must be set and original_price is used before price_effective_time. Do not set if price is always effective because it will cause additional latency during search.
     */
    priceEffectiveTime?: string | null;
    /**
     * The timestamp when the price stops to be effective. The price is used for search before price_expire_time. If this field is set, the original_price must be set and original_price is used after price_expire_time. Do not set if price is always effective because it will cause additional latency during search.
     */
    priceExpireTime?: string | null;
    /**
     * Output only. The price range of all the child Product.Type.VARIANT Products grouped together on the Product.Type.PRIMARY Product. Only populated for Product.Type.PRIMARY Products. Note: This field is OUTPUT_ONLY for ProductService.GetProduct. Do not set this field in API requests.
     */
    priceRange?: Schema$GoogleCloudRetailV2PriceInfoPriceRange;
  }
  /**
   * The price range of all variant Product having the same Product.primary_product_id.
   */
  export interface Schema$GoogleCloudRetailV2PriceInfoPriceRange {
    /**
     * The inclusive Product.pricing_info.original_price internal of all variant Product having the same Product.primary_product_id.
     */
    originalPrice?: Schema$GoogleCloudRetailV2Interval;
    /**
     * The inclusive Product.pricing_info.price interval of all variant Product having the same Product.primary_product_id.
     */
    price?: Schema$GoogleCloudRetailV2Interval;
  }
  /**
   * Product captures all metadata information of items to be recommended or searched.
   */
  export interface Schema$GoogleCloudRetailV2Product {
    /**
     * Highly encouraged. Extra product attributes to be included. For example, for products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the attributes here. Features that can take on one of a limited number of possible values. Two types of features can be set are: Textual features. some examples would be the brand/maker of a product, or country of a customer. Numerical features. Some examples would be the height/weight of a product, or age of a customer. For example: `{ "vendor": {"text": ["vendor123", "vendor456"]\}, "lengths_cm": {"numbers":[2.3, 15.4]\}, "heights_cm": {"numbers":[8.1, 6.4]\} \}`. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * Max entries count: 200. * The key must be a UTF-8 encoded string with a length limit of 128 characters. * For indexable attribute, the key must match the pattern: a-zA-Z0-9*. For example, key0LikeThis or KEY_1_LIKE_THIS.
     */
    attributes?: {
      [key: string]: Schema$GoogleCloudRetailV2CustomAttribute;
    } | null;
    /**
     * The target group associated with a given audience (e.g. male, veterans, car owners, musicians, etc.) of the product.
     */
    audience?: Schema$GoogleCloudRetailV2Audience;
    /**
     * The online availability of the Product. Default to Availability.IN_STOCK. Google Merchant Center Property [availability](https://support.google.com/merchants/answer/6324448). Schema.org Property [Offer.availability](https://schema.org/availability).
     */
    availability?: string | null;
    /**
     * The available quantity of the item.
     */
    availableQuantity?: number | null;
    /**
     * The timestamp when this Product becomes available for SearchService.Search.
     */
    availableTime?: string | null;
    /**
     * The brands of the product. A maximum of 30 brands are allowed. Each brand must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [brand](https://support.google.com/merchants/answer/6324351). Schema.org property [Product.brand](https://schema.org/brand).
     */
    brands?: string[] | null;
    /**
     * Product categories. This field is repeated for supporting one product belonging to several parallel categories. Strongly recommended using the full path for better search / recommendation quality. To represent full path of category, use '\>' sign to separate different hierarchies. If '\>' is part of the category name, please replace it with other character(s). For example, if a shoes product belongs to both ["Shoes & Accessories" -\> "Shoes"] and ["Sports & Fitness" -\> "Athletic Clothing" -\> "Shoes"], it could be represented as: "categories": [ "Shoes & Accessories \> Shoes", "Sports & Fitness \> Athletic Clothing \> Shoes" ] Must be set for Type.PRIMARY Product otherwise an INVALID_ARGUMENT error is returned. At most 250 values are allowed per Product. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property google_product_category. Schema.org property [Product.category] (https://schema.org/category). [mc_google_product_category]: https://support.google.com/merchants/answer/6324436
     */
    categories?: string[] | null;
    /**
     * The id of the collection members when type is Type.COLLECTION. Should not set it for other types. A maximum of 1000 values are allowed. Otherwise, an INVALID_ARGUMENT error is return.
     */
    collectionMemberIds?: string[] | null;
    /**
     * The color of the product. Google Merchant Center property [color](https://support.google.com/merchants/answer/6324487). Schema.org property [Product.color](https://schema.org/color).
     */
    colorInfo?: Schema$GoogleCloudRetailV2ColorInfo;
    /**
     * The condition of the product. Strongly encouraged to use the standard values: "new", "refurbished", "used". A maximum of 5 values are allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [condition](https://support.google.com/merchants/answer/6324469). Schema.org property [Offer.itemCondition](https://schema.org/itemCondition).
     */
    conditions?: string[] | null;
    /**
     * Product description. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [description](https://support.google.com/merchants/answer/6324468). schema.org property [Product.description](https://schema.org/description).
     */
    description?: string | null;
    /**
     * The timestamp when this product becomes unavailable for SearchService.Search. If it is set, the Product is not available for SearchService.Search after expire_time. However, the product can still be retrieved by ProductService.GetProduct and ProductService.ListProducts. Google Merchant Center property [expiration_date](https://support.google.com/merchants/answer/6324499).
     */
    expireTime?: string | null;
    /**
     * Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods. All the elements must have distinct FulfillmentInfo.type. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    fulfillmentInfo?: Schema$GoogleCloudRetailV2FulfillmentInfo[];
    /**
     * The Global Trade Item Number (GTIN) of the product. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. This field must be a Unigram. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [gtin](https://support.google.com/merchants/answer/6324461). Schema.org property [Product.isbn](https://schema.org/isbn) or [Product.gtin8](https://schema.org/gtin8) or [Product.gtin12](https://schema.org/gtin12) or [Product.gtin13](https://schema.org/gtin13) or [Product.gtin14](https://schema.org/gtin14). If the value is not a valid GTIN, an INVALID_ARGUMENT error is returned.
     */
    gtin?: string | null;
    /**
     * Immutable. Product identifier, which is the final component of name. For example, this field is "id_1", if name is `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/id_1`. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [id](https://support.google.com/merchants/answer/6324405). Schema.org Property [Product.sku](https://schema.org/sku).
     */
    id?: string | null;
    /**
     * Product images for the product.Highly recommended to put the main image to the first. A maximum of 300 images are allowed. Google Merchant Center property [image_link](https://support.google.com/merchants/answer/6324350). Schema.org property [Product.image](https://schema.org/image).
     */
    images?: Schema$GoogleCloudRetailV2Image[];
    /**
     * Language of the title/description and other string attributes. Use language tags defined by BCP 47. For product prediction, this field is ignored and the model automatically detects the text language. The Product can include text in different languages, but duplicating Products to provide text in multiple languages can result in degraded model performance. For product search this field is in use. It defaults to "en-US" if unset.
     */
    languageCode?: string | null;
    /**
     * The material of the product. For example, "leather", "wooden". A maximum of 20 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [material](https://support.google.com/merchants/answer/6324410). Schema.org property [Product.material](https://schema.org/material).
     */
    materials?: string[] | null;
    /**
     * Immutable. Full resource name of the product, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`.
     */
    name?: string | null;
    /**
     * The pattern or graphic print of the product. For example, "striped", "polka dot", "paisley". A maximum of 20 values are allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [pattern](https://support.google.com/merchants/answer/6324483). Schema.org property [Product.pattern](https://schema.org/pattern).
     */
    patterns?: string[] | null;
    /**
     * Product price and cost information. Google Merchant Center property [price](https://support.google.com/merchants/answer/6324371).
     */
    priceInfo?: Schema$GoogleCloudRetailV2PriceInfo;
    /**
     * Variant group identifier. Must be an id, with the same parent branch with this product. Otherwise, an error is thrown. For Type.PRIMARY Products, this field can only be empty or set to the same value as id. For VARIANT Products, this field cannot be empty. A maximum of 2,000 products are allowed to share the same Type.PRIMARY Product. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center Property [item_group_id](https://support.google.com/merchants/answer/6324507). Schema.org Property [Product.inProductGroupWithID](https://schema.org/inProductGroupWithID). This field must be enabled before it can be used. [Learn more](/recommendations-ai/docs/catalog#item-group-id).
     */
    primaryProductId?: string | null;
    /**
     * The promotions applied to the product. A maximum of 10 values are allowed per Product.
     */
    promotions?: Schema$GoogleCloudRetailV2Promotion[];
    /**
     * The timestamp when the product is published by the retailer for the first time, which indicates the freshness of the products. Note that this field is different from available_time, given it purely describes product freshness regardless of when it is available on search and recommendation.
     */
    publishTime?: string | null;
    /**
     * The rating of this product.
     */
    rating?: Schema$GoogleCloudRetailV2Rating;
    /**
     * Indicates which fields in the Products are returned in SearchResponse. Supported fields for all types: * audience * availability * brands * color_info * conditions * gtin * materials * name * patterns * price_info * rating * sizes * title * uri Supported fields only for Type.PRIMARY and Type.COLLECTION: * categories * description * images Supported fields only for Type.VARIANT: * Only the first image in images To mark attributes as retrievable, include paths of the form "attributes.key" where "key" is the key of a custom attribute, as specified in attributes. For Type.PRIMARY and Type.COLLECTION, the following fields are always returned in SearchResponse by default: * name For Type.VARIANT, the following fields are always returned in by default: * name * color_info Maximum number of paths is 30. Otherwise, an INVALID_ARGUMENT error is returned. Note: Returning more fields in SearchResponse may increase response payload size and serving latency.
     */
    retrievableFields?: string | null;
    /**
     * The size of the product. To represent different size systems or size types, consider using this format: [[[size_system:]size_type:]size_value]. For example, in "US:MENS:M", "US" represents size system; "MENS" represents size type; "M" represents size value. In "GIRLS:27", size system is empty; "GIRLS" represents size type; "27" represents size value. In "32 inches", both size system and size type are empty, while size value is "32 inches". A maximum of 20 values are allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [size](https://support.google.com/merchants/answer/6324492), [size_type](https://support.google.com/merchants/answer/6324497) and [size_system](https://support.google.com/merchants/answer/6324502). Schema.org property [Product.size](https://schema.org/size).
     */
    sizes?: string[] | null;
    /**
     * Custom tags associated with the product. At most 250 values are allowed per Product. This value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This tag can be used for filtering recommendation results by passing the tag as part of the PredictRequest.filter. Google Merchant Center property [custom_label_0–4](https://support.google.com/merchants/answer/6324473).
     */
    tags?: string[] | null;
    /**
     * Required. Product title. This field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [title](https://support.google.com/merchants/answer/6324415). Schema.org property [Product.name](https://schema.org/name).
     */
    title?: string | null;
    /**
     * Input only. The TTL (time to live) of the product. If it is set, expire_time is set as current timestamp plus ttl. The derived expire_time is returned in the output and ttl is left blank when retrieving the Product. If it is set, the product is not available for SearchService.Search after current timestamp plus ttl. However, the product can still be retrieved by ProductService.GetProduct and ProductService.ListProducts.
     */
    ttl?: string | null;
    /**
     * Immutable. The type of the product. Default to Catalog.product_level_config.ingestion_product_type if unset.
     */
    type?: string | null;
    /**
     * Canonical URL directly linking to the product detail page. It is strongly recommended to provide a valid uri for the product, otherwise the service performance could be significantly degraded. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [link](https://support.google.com/merchants/answer/6324416). Schema.org property [Offer.url](https://schema.org/url).
     */
    uri?: string | null;
    /**
     * Output only. Product variants grouped together on primary product which share similar product attributes. It's automatically grouped by primary_product_id for all the product variants. Only populated for Type.PRIMARY Products. Note: This field is OUTPUT_ONLY for ProductService.GetProduct. Do not set this field in API requests.
     */
    variants?: Schema$GoogleCloudRetailV2Product[];
  }
  /**
   * Detailed product information associated with a user event.
   */
  export interface Schema$GoogleCloudRetailV2ProductDetail {
    /**
     * Required. Product information. Required field(s): * Product.id Optional override field(s): * Product.price_info If any supported optional fields are provided, we will treat them as a full override when looking up product information from the catalog. Thus, it is important to ensure that the overriding fields are accurate and complete. All other product fields are ignored and instead populated via catalog lookup after event ingestion.
     */
    product?: Schema$GoogleCloudRetailV2Product;
    /**
     * Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `purchase-complete` event. Required for `add-to-cart` and `purchase-complete` event types.
     */
    quantity?: number | null;
  }
  /**
   * The inline source for the input config for ImportProducts method.
   */
  export interface Schema$GoogleCloudRetailV2ProductInlineSource {
    /**
     * Required. A list of products to update/create. Each product must have a valid Product.id. Recommended max of 100 items.
     */
    products?: Schema$GoogleCloudRetailV2Product[];
  }
  /**
   * The input config source for products.
   */
  export interface Schema$GoogleCloudRetailV2ProductInputConfig {
    /**
     * BigQuery input source.
     */
    bigQuerySource?: Schema$GoogleCloudRetailV2BigQuerySource;
    /**
     * Google Cloud Storage location for the input content.
     */
    gcsSource?: Schema$GoogleCloudRetailV2GcsSource;
    /**
     * The Inline source for the input content for products.
     */
    productInlineSource?: Schema$GoogleCloudRetailV2ProductInlineSource;
  }
  /**
   * Configures what level the product should be uploaded with regards to how users will be send events and how predictions will be made.
   */
  export interface Schema$GoogleCloudRetailV2ProductLevelConfig {
    /**
     * The type of Products allowed to be ingested into the catalog. Acceptable values are: * `primary` (default): You can only ingest Product.Type.PRIMARY Products. This means Product.primary_product_id can only be empty or set to the same value as Product.id. * `variant`: You can only ingest Product.Type.VARIANT Products. This means Product.primary_product_id cannot be empty. If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. If this field is `variant` and merchant_center_product_id_field is `itemGroupId`, an INVALID_ARGUMENT error is returned. See [Using product levels](https://cloud.google.com/retail/recommendations-ai/docs/catalog#product-levels) for more details.
     */
    ingestionProductType?: string | null;
    /**
     * Which field of [Merchant Center Product](/bigquery-transfer/docs/merchant-center-products-schema) should be imported as Product.id. Acceptable values are: * `offerId` (default): Import `offerId` as the product ID. * `itemGroupId`: Import `itemGroupId` as the product ID. Notice that Retail API will choose one item from the ones with the same `itemGroupId`, and use it to represent the item group. If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. If this field is `itemGroupId` and ingestion_product_type is `variant`, an INVALID_ARGUMENT error is returned. See [Using product levels](https://cloud.google.com/retail/recommendations-ai/docs/catalog#product-levels) for more details.
     */
    merchantCenterProductIdField?: string | null;
  }
  /**
   * Promotion information.
   */
  export interface Schema$GoogleCloudRetailV2Promotion {
    /**
     * ID of the promotion. For example, "free gift". The value value must be a UTF-8 encoded string with a length limit of 128 characters, and match the pattern: a-zA-Z*. For example, id0LikeThis or ID_1_LIKE_THIS. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [promotion](https://support.google.com/merchants/answer/7050148).
     */
    promotionId?: string | null;
  }
  /**
   * A transaction represents the entire purchase transaction.
   */
  export interface Schema$GoogleCloudRetailV2PurchaseTransaction {
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
  export interface Schema$GoogleCloudRetailV2PurgeMetadata {}
  /**
   * Request message for PurgeUserEvents method.
   */
  export interface Schema$GoogleCloudRetailV2PurgeUserEventsRequest {
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
  export interface Schema$GoogleCloudRetailV2PurgeUserEventsResponse {
    /**
     * The total count of events purged as a result of the operation.
     */
    purgedEventsCount?: string | null;
  }
  /**
   * The rating of a Product.
   */
  export interface Schema$GoogleCloudRetailV2Rating {
    /**
     * The average rating of the Product. The rating is scaled at 1-5. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    averageRating?: number | null;
    /**
     * The total number of ratings. This value is independent of the value of rating_histogram. This value must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    ratingCount?: number | null;
    /**
     * List of rating counts per rating value (index = rating - 1). The list is empty if there is no rating. If the list is non-empty, its size is always 5. Otherwise, an INVALID_ARGUMENT error is returned. For example, [41, 14, 13, 47, 303]. It means that the Product got 41 ratings with 1 star, 14 ratings with 2 star, and so on.
     */
    ratingHistogram?: number[] | null;
  }
  /**
   * Metadata for RejoinUserEvents method.
   */
  export interface Schema$GoogleCloudRetailV2RejoinUserEventsMetadata {}
  /**
   * Request message for RejoinUserEvents method.
   */
  export interface Schema$GoogleCloudRetailV2RejoinUserEventsRequest {
    /**
     * The type of the user event rejoin to define the scope and range of the user events to be rejoined with the latest product catalog. Defaults to USER_EVENT_REJOIN_SCOPE_UNSPECIFIED if this field is not set, or set to an invalid integer value.
     */
    userEventRejoinScope?: string | null;
  }
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
   * Metadata related to the progress of the RemoveFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the RemoveFulfillmentPlaces method.
   */
  export interface Schema$GoogleCloudRetailV2RemoveFulfillmentPlacesMetadata {}
  /**
   * Request message for RemoveFulfillmentPlaces method.
   */
  export interface Schema$GoogleCloudRetailV2RemoveFulfillmentPlacesRequest {
    /**
     * If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, an INVALID_ARGUMENT error is returned if the Product is not found.
     */
    allowMissing?: boolean | null;
    /**
     * Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type. At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern [a-zA-Z0-9_-]+, such as "store1" or "REGION-2". Otherwise, an INVALID_ARGUMENT error is returned.
     */
    placeIds?: string[] | null;
    /**
     * The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.
     */
    removeTime?: string | null;
    /**
     * Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. This field directly corresponds to Product.fulfillment_info.type.
     */
    type?: string | null;
  }
  /**
   * Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the RemoveFulfillmentPlaces method.
   */
  export interface Schema$GoogleCloudRetailV2RemoveFulfillmentPlacesResponse {}
  /**
   * Request message for SearchService.Search method.
   */
  export interface Schema$GoogleCloudRetailV2SearchRequest {
    /**
     * Boost specification to boost certain products. See more details at this [user guide](https://cloud.google.com/retail/docs/boosting).
     */
    boostSpec?: Schema$GoogleCloudRetailV2SearchRequestBoostSpec;
    /**
     * The branch resource name, such as `projects/x/locations/global/catalogs/default_catalog/branches/0`. Use "default_branch" as the branch ID or leave this field empty, to search products under the default branch.
     */
    branch?: string | null;
    /**
     * The filter applied to every search request when quality improvement such as query expansion is needed. For example, if a query does not have enough results, an expanded query with SearchRequest.canonical_filter will be returned as a supplement of the original query. This field is strongly recommended to achieve high search quality. See SearchRequest.filter for more details about filter syntax.
     */
    canonicalFilter?: string | null;
    /**
     * The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. This feature requires additional allowlisting. Contact Retail Search support team if you are interested in using dynamic facet feature.
     */
    dynamicFacetSpec?: Schema$GoogleCloudRetailV2SearchRequestDynamicFacetSpec;
    /**
     * Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    facetSpecs?: Schema$GoogleCloudRetailV2SearchRequestFacetSpec[];
    /**
     * The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. Filter expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#filter). If this field is unrecognizable, an INVALID_ARGUMENT is returned.
     */
    filter?: string | null;
    /**
     * A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Products deemed by the API as relevant) in search results. This field is only considered if page_token is unset. If this field is negative, an INVALID_ARGUMENT is returned.
     */
    offset?: number | null;
    /**
     * The order in which products are returned. Products can be ordered by a field in an Product object. Leave it unset if ordered by relevance. OrderBy expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#order). If this field is unrecognizable, an INVALID_ARGUMENT is returned.
     */
    orderBy?: string | null;
    /**
     * The categories associated with a category page. Required for category navigation queries to achieve good search quality. The format should be the same as UserEvent.page_categories; To represent full path of category, use '\>' sign to separate different hierarchies. If '\>' is part of the category name, please replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : ["Sales \> 2017 Black Friday Deals"].
     */
    pageCategories?: string[] | null;
    /**
     * Maximum number of Products to return. If unspecified, defaults to a reasonable value. The maximum allowed value is 120. Values above 120 will be coerced to 120. If this field is negative, an INVALID_ARGUMENT is returned.
     */
    pageSize?: number | null;
    /**
     * A page token SearchResponse.next_page_token, received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    pageToken?: string | null;
    /**
     * Raw search query.
     */
    query?: string | null;
    /**
     * The query expansion specification that specifies the conditions under which query expansion will occur. See more details at this [user guide](https://cloud.google.com/retail/docs/result-size#query_expansion).
     */
    queryExpansionSpec?: Schema$GoogleCloudRetailV2SearchRequestQueryExpansionSpec;
    /**
     * User information.
     */
    userInfo?: Schema$GoogleCloudRetailV2UserInfo;
    /**
     * The keys to fetch and rollup the matching variant Products attributes. The attributes from all the matching variant Products are merged and de-duplicated. Notice that rollup variant Products attributes will lead to extra query latency. Maximum number of keys is 10. For FulfillmentInfo, a fulfillment type and a fulfillment ID must be provided in the format of "fulfillmentType.fulfillmentId". E.g., in "pickupInStore.store123", "pickupInStore" is fulfillment type and "store123" is the store ID. Supported keys are: * colorFamilies * price * originalPrice * discount * attributes.key, where key is any key in the Product.attributes map. * pickupInStore.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "pickup-in-store". * shipToStore.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "ship-to-store". * sameDayDelivery.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "same-day-delivery". * nextDayDelivery.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "next-day-delivery". * customFulfillment1.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-1". * customFulfillment2.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-2". * customFulfillment3.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-3". * customFulfillment4.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-4". * customFulfillment5.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-5". If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned.
     */
    variantRollupKeys?: string[] | null;
    /**
     * Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    visitorId?: string | null;
  }
  /**
   * Boost specification to boost certain items.
   */
  export interface Schema$GoogleCloudRetailV2SearchRequestBoostSpec {
    /**
     * Condition boost specifications. If a product matches multiple conditions in the specifictions, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 10.
     */
    conditionBoostSpecs?: Schema$GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec[];
  }
  /**
   * Boost applies to products which match a condition.
   */
  export interface Schema$GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec {
    /**
     * Strength of the condition boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the item a big promotion. However, it does not necessarily mean that the boosted item will be the top result at all times, nor that other items will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant items. Setting to -1.0 gives the item a big demotion. However, results that are deeply relevant might still be shown. The item will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored.
     */
    boost?: number | null;
    /**
     * An expression which specifies a boost condition. The syntax and supported fields are the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Examples: * To boost products with product ID "product_1" or "product_2", and color "Red" or "Blue": * (id: ANY("product_1", "product_2")) AND (colorFamilies: ANY("Red","Blue"))
     */
    condition?: string | null;
  }
  /**
   * The specifications of dynamically generated facets.
   */
  export interface Schema$GoogleCloudRetailV2SearchRequestDynamicFacetSpec {
    /**
     * Mode of the DynamicFacet feature. Defaults to Mode.DISABLED if it's unset.
     */
    mode?: string | null;
  }
  /**
   * A facet specification to perform faceted search.
   */
  export interface Schema$GoogleCloudRetailV2SearchRequestFacetSpec {
    /**
     * Enables dynamic position for this facet. If set to true, the position of this facet among all facets in the response is determined by Google Retail Search. It will be ordered together with dynamic facets if dynamic facets is enabled. If set to false, the position of this facet in the response will be the same as in the request, and it will be ranked before the facets with dynamic position enable and all dynamic facets. For example, you may always want to have rating facet returned in the response, but it's not necessarily to always display the rating facet at the top. In that case, you can set enable_dynamic_position to true so that the position of rating facet in response will be determined by Google Retail Search. Another example, assuming you have the following facets in the request: * "rating", enable_dynamic_position = true * "price", enable_dynamic_position = false * "brands", enable_dynamic_position = false And also you have a dynamic facets enable, which will generate a facet 'gender'. Then the final order of the facets in the response can be ("price", "brands", "rating", "gender") or ("price", "brands", "gender", "rating") depends on how Google Retail Search orders "gender" and "rating" facets. However, notice that "price" and "brands" will always be ranked at 1st and 2nd position since their enable_dynamic_position are false.
     */
    enableDynamicPosition?: boolean | null;
    /**
     * List of keys to exclude when faceting. By default, FacetKey.key is not excluded from the filter unless it is listed in this field. For example, suppose there are 100 products with color facet "Red" and 200 products with color facet "Blue". A query containing the filter "colorFamilies:ANY("Red")" and have "colorFamilies" as FacetKey.key will by default return the "Red" with count 100. If this field contains "colorFamilies", then the query returns both the "Red" with count 100 and "Blue" with count 200, because the "colorFamilies" key is now excluded from the filter. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    excludedFilterKeys?: string[] | null;
    /**
     * Required. The facet key specification.
     */
    facetKey?: Schema$GoogleCloudRetailV2SearchRequestFacetSpecFacetKey;
    /**
     * Maximum of facet values that should be returned for this facet. If unspecified, defaults to 20. The maximum allowed value is 300. Values above 300 will be coerced to 300. If this field is negative, an INVALID_ARGUMENT is returned.
     */
    limit?: number | null;
  }
  /**
   * Specifies how a facet is computed.
   */
  export interface Schema$GoogleCloudRetailV2SearchRequestFacetSpecFacetKey {
    /**
     * Only get facet values that contains the given strings. For example, suppose "categories" has three values "Women \> Shoe", "Women \> Dress" and "Men \> Shoe". If set "contains" to "Shoe", the "categories" facet will give only "Women \> Shoe" and "Men \> Shoe". Only supported on textual fields. Maximum is 10.
     */
    contains?: string[] | null;
    /**
     * Set only if values should be bucketized into intervals. Must be set for facets with numerical values. Must not be set for facet with text values. Maximum number of intervals is 30.
     */
    intervals?: Schema$GoogleCloudRetailV2Interval[];
    /**
     * Required. Supported textual and numerical facet keys in Product object, over which the facet values are computed. Facet key is case-sensitive. Allowed facet keys when FacetKey.query is not specified: * textual_field = * "brands" * "categories" * "genders" * "ageGroups" * "availability" * "colorFamilies" * "colors" * "sizes" * "materials" * "patterns" * "conditions" * "attributes.key" * "pickupInStore" * "shipToStore" * "sameDayDelivery" * "nextDayDelivery" * "customFulfillment1" * "customFulfillment2" * "customFulfillment3" * "customFulfillment4" * "customFulfillment5" * numerical_field = * "price" * "discount" * "rating" * "ratingCount" * "attributes.key"
     */
    key?: string | null;
    /**
     * The order in which Facet.values are returned. Allowed values are: * "count desc", which means order by Facet.FacetValue.count descending. * "value desc", which means order by Facet.FacetValue.value descending. Only applies to textual facets. If not set, textual values are sorted in [natural order](https://en.wikipedia.org/wiki/Natural_sort_order); numerical intervals are sorted in the order given by FacetSpec.FacetKey.intervals; FulfillmentInfo.place_ids are sorted in the order given by FacetSpec.FacetKey.restricted_values.
     */
    orderBy?: string | null;
    /**
     * Only get facet values that start with the given string prefix. For example, suppose "categories" has three values "Women \> Shoe", "Women \> Dress" and "Men \> Shoe". If set "prefixes" to "Women", the "categories" facet will give only "Women \> Shoe" and "Women \> Dress". Only supported on textual fields. Maximum is 10.
     */
    prefixes?: string[] | null;
    /**
     * The query that is used to compute facet for the given facet key. When provided, it will override the default behavior of facet computation. The query syntax is the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Notice that there is no limitation on FacetKey.key when query is specified. In the response, FacetValue.value will be always "1" and FacetValue.count will be the number of results that matches the query. For example, you can set a customized facet for "shipToStore", where FacetKey.key is "customizedShipToStore", and FacetKey.query is "availability: ANY(\"IN_STOCK\") AND shipToStore: ANY(\"123\")". Then the facet will count the products that are both in stock and ship to store "123".
     */
    query?: string | null;
    /**
     * Only get facet for the given restricted values. For example, when using "pickupInStore" as key and set restricted values to ["store123", "store456"], only facets for "store123" and "store456" are returned. Only supported on textual fields and fulfillments. Maximum is 20. Must be set for the fulfillment facet keys: * pickupInStore * shipToStore * sameDayDelivery * nextDayDelivery * customFulfillment1 * customFulfillment2 * customFulfillment3 * customFulfillment4 * customFulfillment5
     */
    restrictedValues?: string[] | null;
  }
  /**
   * Specification to determine under which conditions query expansion should occur.
   */
  export interface Schema$GoogleCloudRetailV2SearchRequestQueryExpansionSpec {
    /**
     * The condition under which query expansion should occur. Default to Condition.DISABLED.
     */
    condition?: string | null;
    /**
     * Whether to pin unexpanded results. If this field is set to true, unexpanded products are always at the top of the search results, followed by the expanded results.
     */
    pinUnexpandedResults?: boolean | null;
  }
  /**
   * Response message for SearchService.Search method.
   */
  export interface Schema$GoogleCloudRetailV2SearchResponse {
    /**
     * A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance.
     */
    attributionToken?: string | null;
    /**
     * If spell correction applies, the corrected query. Otherwise, empty.
     */
    correctedQuery?: string | null;
    /**
     * Results of facets requested by user.
     */
    facets?: Schema$GoogleCloudRetailV2SearchResponseFacet[];
    /**
     * A token that can be sent as SearchRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Query expansion information for the returned results.
     */
    queryExpansionInfo?: Schema$GoogleCloudRetailV2SearchResponseQueryExpansionInfo;
    /**
     * The URI of a customer-defined redirect page. If redirect action is triggered, no search will be performed, and only redirect_uri and attribution_token will be set in the response.
     */
    redirectUri?: string | null;
    /**
     * A list of matched items. The order represents the ranking.
     */
    results?: Schema$GoogleCloudRetailV2SearchResponseSearchResult[];
    /**
     * The estimated total count of matched items irrespective of pagination. The count of results returned by pagination may be less than the total_size that matches.
     */
    totalSize?: number | null;
  }
  /**
   * A facet result.
   */
  export interface Schema$GoogleCloudRetailV2SearchResponseFacet {
    /**
     * Whether the facet is dynamically generated.
     */
    dynamicFacet?: boolean | null;
    /**
     * The key for this facet. E.g., "colorFamilies" or "price" or "attributes.attr1".
     */
    key?: string | null;
    /**
     * The facet values for this field.
     */
    values?: Schema$GoogleCloudRetailV2SearchResponseFacetFacetValue[];
  }
  /**
   * A facet value which contains value names and their count.
   */
  export interface Schema$GoogleCloudRetailV2SearchResponseFacetFacetValue {
    /**
     * Number of items that have this facet value.
     */
    count?: string | null;
    /**
     * Interval value for a facet, such as [10, 20) for facet "price".
     */
    interval?: Schema$GoogleCloudRetailV2Interval;
    /**
     * Text value of a facet, such as "Black" for facet "colorFamilies".
     */
    value?: string | null;
  }
  /**
   * Information describing query expansion including whether expansion has occurred.
   */
  export interface Schema$GoogleCloudRetailV2SearchResponseQueryExpansionInfo {
    /**
     * Bool describing whether query expansion has occurred.
     */
    expandedQuery?: boolean | null;
    /**
     * Number of pinned results. This field will only be set when expansion happens and SearchRequest.QueryExpansionSpec.pin_unexpanded_results is set to true.
     */
    pinnedResultCount?: string | null;
  }
  /**
   * Represents the search results.
   */
  export interface Schema$GoogleCloudRetailV2SearchResponseSearchResult {
    /**
     * Product.id of the searched Product.
     */
    id?: string | null;
    /**
     * The count of matched variant Products.
     */
    matchingVariantCount?: number | null;
    /**
     * If a variant Product matches the search query, this map indicates which Product fields are matched. The key is the Product.name, the value is a field mask of the matched Product fields. If matched attributes cannot be determined, this map will be empty. For example, a key "sku1" with field mask "products.color_info" indicates there is a match between "sku1" ColorInfo and the query.
     */
    matchingVariantFields?: {[key: string]: string} | null;
    /**
     * The product data snippet in the search response. Only Product.name is guaranteed to be populated. Product.variants contains the product variants that match the search query. If there are multiple product variants matching the query, top 5 most relevant product variants are returned and ordered by relevancy. If relevancy can be deternmined, use matching_variant_fields to look up matched product variants fields. If relevancy cannot be determined, e.g. when searching "shoe" all products in a shoe product can be a match, 5 product variants are returned but order is meaningless.
     */
    product?: Schema$GoogleCloudRetailV2Product;
    /**
     * The rollup matching variant Product attributes. The key is one of the SearchRequest.variant_rollup_keys. The values are the merged and de-duplicated Product attributes. Notice that the rollup values are respect filter. For example, when filtering by "colorFamilies:ANY(\"red\")" and rollup "colorFamilies", only "red" is returned. For textual and numerical attributes, the rollup values is a list of string or double values with type google.protobuf.ListValue. For example, if there are two variants with colors "red" and "blue", the rollup values are { key: "colorFamilies" value { list_value { values { string_value: "red" \} values { string_value: "blue" \} \} \} \} For FulfillmentInfo, the rollup values is a double value with type google.protobuf.Value. For example, `{key: "pickupInStore.store1" value { number_value: 10 \}\}` means a there are 10 variants in this product are available in the store "store1".
     */
    variantRollupValues?: {[key: string]: any} | null;
  }
  /**
   * Request message to set a specified branch as new default_branch.
   */
  export interface Schema$GoogleCloudRetailV2SetDefaultBranchRequest {
    /**
     * The final component of the resource name of a branch. This field must be one of "0", "1" or "2". Otherwise, an INVALID_ARGUMENT error is returned.
     */
    branchId?: string | null;
    /**
     * Some note on this request, this can be retrieved by CatalogService.GetDefaultBranch before next valid default branch set occurs. This field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    note?: string | null;
  }
  /**
   * Metadata related to the progress of the SetInventory operation. Currently empty because there is no meaningful metadata populated from the SetInventory method.
   */
  export interface Schema$GoogleCloudRetailV2SetInventoryMetadata {}
  /**
   * Request message for SetInventory method.
   */
  export interface Schema$GoogleCloudRetailV2SetInventoryRequest {
    /**
     * If set to true, and the Product with name Product.name is not found, the inventory update will still be processed and retained for at most 1 day until the Product is created. If set to false, an INVALID_ARGUMENT error is returned if the Product is not found.
     */
    allowMissing?: boolean | null;
    /**
     * Required. The inventory information to update. The allowable fields to update are: * Product.price_info * Product.availability * Product.available_quantity * Product.fulfillment_info The updated inventory fields must be specified in SetInventoryRequest.set_mask. If SetInventoryRequest.inventory.name is empty or invalid, an INVALID_ARGUMENT error is returned. If the caller does not have permission to update the Product named in Product.name, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the Product to update does not have existing inventory information, the provided inventory information will be inserted. If the Product to update has existing inventory information, the provided inventory information will be merged while respecting the last update time for each inventory field, using the provided or default value for SetInventoryRequest.set_time. The last update time is recorded for the following inventory fields: * Product.price_info * Product.availability * Product.available_quantity * Product.fulfillment_info If a full overwrite of inventory information while ignoring timestamps is needed, UpdateProduct should be invoked instead.
     */
    inventory?: Schema$GoogleCloudRetailV2Product;
    /**
     * Indicates which inventory fields in the provided Product to update. If not set or set with empty paths, all inventory fields will be updated. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned and the entire update will be ignored.
     */
    setMask?: string | null;
    /**
     * The time when the request is issued, used to prevent out-of-order updates on inventory fields with the last update time recorded. If not provided, the internal system time will be used.
     */
    setTime?: string | null;
  }
  /**
   * Response of the SetInventoryRequest. Currently empty because there is no meaningful response populated from the SetInventory method.
   */
  export interface Schema$GoogleCloudRetailV2SetInventoryResponse {}
  /**
   * UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.
   */
  export interface Schema$GoogleCloudRetailV2UserEvent {
    /**
     * Extra user event features to include in the recommendation model. The key must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. For product recommendation, an example of extra user information is traffic_channel, i.e. how user arrives at the site. Users can arrive at the site by coming to the site directly, or coming through Google search, and etc.
     */
    attributes?: {
      [key: string]: Schema$GoogleCloudRetailV2CustomAttribute;
    } | null;
    /**
     * Highly recommended for user events that are the result of PredictionService.Predict. This field enables accurate attribution of recommendation model performance. The value must be a valid PredictResponse.attribution_token for user events that are the result of PredictionService.Predict. The value must be a valid SearchResponse.attribution_token for user events that are the result of SearchService.Search. This token enables us to accurately attribute page view or purchase back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass PredictResponse.attribution_token as a URL parameter to product K's page. When recording events on product K's page, log the PredictResponse.attribution_token to this field.
     */
    attributionToken?: string | null;
    /**
     * The ID or name of the associated shopping cart. This ID is used to associate multiple items added or present in the cart before purchase. This can only be set for `add-to-cart`, `purchase-complete`, or `shopping-cart-page-view` events.
     */
    cartId?: string | null;
    /**
     * The main completion details related to the event. In a `completion` event, this field represents the completions returned to the end user and the clicked completion by the end user. In a `search` event, it represents the search event happens after clicking completion.
     */
    completionDetail?: Schema$GoogleCloudRetailV2CompletionDetail;
    /**
     * Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened.
     */
    eventTime?: string | null;
    /**
     * Required. User event type. Allowed values are: * `add-to-cart`: Products being added to cart. * `category-page-view`: Special pages such as sale or promotion pages viewed. * `completion`: Completion query result showed/clicked. * `detail-page-view`: Products detail page viewed. * `home-page-view`: Homepage viewed. * `promotion-offered`: Promotion is offered to a user. * `promotion-not-offered`: Promotion is not offered to a user. * `purchase-complete`: User finishing a purchase. * `search`: Product search. * `shopping-cart-page-view`: User viewing a shopping cart.
     */
    eventType?: string | null;
    /**
     * A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups (e.g. using Retail API, using different recommendation models).
     */
    experimentIds?: string[] | null;
    /**
     * The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. See SearchRequest.filter for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    filter?: string | null;
    /**
     * An integer that specifies the current offset for pagination (the 0-indexed starting location, amongst the products deemed by the API as relevant). See SearchRequest.offset for definition. If this field is negative, an INVALID_ARGUMENT is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    offset?: number | null;
    /**
     * The order in which products are returned. See SearchRequest.order_by for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    orderBy?: string | null;
    /**
     * The categories associated with a category page. To represent full path of category, use '\>' sign to separate different hierarchies. If '\>' is part of the category name, please replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : ["Sales \> 2017 Black Friday Deals"]. Required for `category-page-view` events. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    pageCategories?: string[] | null;
    /**
     * A unique ID of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.
     */
    pageViewId?: string | null;
    /**
     * The main product details related to the event. This field is required for the following event types: * `add-to-cart` * `detail-page-view` * `purchase-complete` In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different product_details is desired. The end user may have not finished browsing the whole page yet.
     */
    productDetails?: Schema$GoogleCloudRetailV2ProductDetail[];
    /**
     * A transaction represents the entire purchase transaction. Required for `purchase-complete` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    purchaseTransaction?: Schema$GoogleCloudRetailV2PurchaseTransaction;
    /**
     * The referrer URL of the current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.
     */
    referrerUri?: string | null;
    /**
     * The user's search query. See SearchRequest.query for definition. The value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    searchQuery?: string | null;
    /**
     * A unique identifier for tracking a visitor session with a length limit of 128 bytes. A session is an aggregation of an end user behavior in a time span. A general guideline to populate the sesion_id: 1. If user has no activity for 30 min, a new session_id should be assigned. 2. The session_id should be unique across users, suggest use uuid or add visitor_id as prefix.
     */
    sessionId?: string | null;
    /**
     * Complete URL (window.location.href) of the user's current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. Maximum length 5,000 characters.
     */
    uri?: string | null;
    /**
     * User information.
     */
    userInfo?: Schema$GoogleCloudRetailV2UserInfo;
    /**
     * Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. The field should not contain PII or user-data. We recommend to use Google Analystics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field.
     */
    visitorId?: string | null;
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
   * The inline source for the input config for ImportUserEvents method.
   */
  export interface Schema$GoogleCloudRetailV2UserEventInlineSource {
    /**
     * Required. A list of user events to import. Recommended max of 10k items.
     */
    userEvents?: Schema$GoogleCloudRetailV2UserEvent[];
  }
  /**
   * The input config source for user events.
   */
  export interface Schema$GoogleCloudRetailV2UserEventInputConfig {
    /**
     * Required. BigQuery input source.
     */
    bigQuerySource?: Schema$GoogleCloudRetailV2BigQuerySource;
    /**
     * Required. Google Cloud Storage location for the input content.
     */
    gcsSource?: Schema$GoogleCloudRetailV2GcsSource;
    /**
     * Required. The Inline source for the input content for UserEvents.
     */
    userEventInlineSource?: Schema$GoogleCloudRetailV2UserEventInlineSource;
  }
  /**
   * Information of an end user.
   */
  export interface Schema$GoogleCloudRetailV2UserInfo {
    /**
     * True if the request is made directly from the end user, in which case the ip_address and user_agent can be populated from the HTTP request. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent.
     */
    directUserRequest?: boolean | null;
    /**
     * The end user's IP address. Required for getting SearchResponse.sponsored_results. This field is used to extract location information for personalization. This field must be either an IPv4 address (e.g. "104.133.9.80") or an IPv6 address (e.g. "2001:0db8:85a3:0000:0000:8a2e:0370:7334"). Otherwise, an INVALID_ARGUMENT error is returned. This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent or if direct_user_request is set.
     */
    ipAddress?: string | null;
    /**
     * User agent as included in the HTTP header. Required for getting SearchResponse.sponsored_results. The field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This should not be set when using the client side event reporting with GTM or JavaScript tag in UserEventService.CollectUserEvent or if direct_user_request is set.
     */
    userAgent?: string | null;
    /**
     * Highly recommended for logged-in users. Unique identifier for logged-in user, such as a user name. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    userId?: string | null;
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
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
   */
  export interface Schema$GoogleTypeDate {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
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
    completionData: Resource$Projects$Locations$Catalogs$Completiondata;
    operations: Resource$Projects$Locations$Catalogs$Operations;
    placements: Resource$Projects$Locations$Catalogs$Placements;
    userEvents: Resource$Projects$Locations$Catalogs$Userevents;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.branches = new Resource$Projects$Locations$Catalogs$Branches(
        this.context
      );
      this.completionData =
        new Resource$Projects$Locations$Catalogs$Completiondata(this.context);
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
     * Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Please submit a form [here](https://cloud.google.com/contact) to contact cloud sales if you are interested in using Retail Search.
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
     * const retail = google.retail('v2');
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
     *   const res = await retail.projects.locations.catalogs.completeQuery({
     *     // Required. Catalog for which the completion is performed. Full resource name of catalog, such as `projects/x/locations/global/catalogs/default_catalog`.
     *     catalog: 'projects/my-project/locations/my-location/catalogs/my-catalog',
     *     // Determines which dataset to use for fetching completion. "user-data" will use the imported dataset through CompletionService.ImportCompletionData. "cloud-retail" will use the dataset generated by cloud retail based on user events. If leave empty, it will use the "user-data". Current supported values: * user-data * cloud-retail This option requires additional allowlisting. Before using cloud-retail, contact Cloud Retail support team first.
     *     dataset: 'placeholder-value',
     *     // The device type context for completion suggestions. It is useful to apply different suggestions on different device types, e.g. DESKTOP, MOBILE. If it is empty, the suggestions are across all device types. Supported formats: * UNKNOWN_DEVICE_TYPE * DESKTOP * MOBILE * A customized string starts with OTHER_, e.g. OTHER_IPHONE.
     *     deviceType: 'placeholder-value',
     *     // The list of languages of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). The maximum number of allowed characters is 255. Only "en-US" is currently supported.
     *     languageCodes: 'placeholder-value',
     *     // Completion max suggestions. If left unset or set to 0, then will fallback to the configured value CompletionConfig.max_suggestions. The maximum allowed max suggestions is 20. If it is set higher, it will be capped by 20.
     *     maxSuggestions: 'placeholder-value',
     *     // Required. The query used to generate suggestions. The maximum number of allowed characters is 255.
     *     query: 'placeholder-value',
     *     // A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     *     visitorId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributionToken": "my_attributionToken",
     *   //   "completionResults": [],
     *   //   "recentSearchResults": []
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
    completeQuery(
      params: Params$Resource$Projects$Locations$Catalogs$Completequery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    completeQuery(
      params?: Params$Resource$Projects$Locations$Catalogs$Completequery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRetailV2CompleteQueryResponse>;
    completeQuery(
      params: Params$Resource$Projects$Locations$Catalogs$Completequery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    completeQuery(
      params: Params$Resource$Projects$Locations$Catalogs$Completequery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2CompleteQueryResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2CompleteQueryResponse>
    ): void;
    completeQuery(
      params: Params$Resource$Projects$Locations$Catalogs$Completequery,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2CompleteQueryResponse>
    ): void;
    completeQuery(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2CompleteQueryResponse>
    ): void;
    completeQuery(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Completequery
        | BodyResponseCallback<Schema$GoogleCloudRetailV2CompleteQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2CompleteQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2CompleteQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2CompleteQueryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Completequery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Completequery;
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
            url: (rootUrl + '/v2/{+catalog}:completeQuery').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['catalog'],
        pathParams: ['catalog'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudRetailV2CompleteQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2CompleteQueryResponse>(
          parameters
        );
      }
    }

    /**
     * Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog. This feature is only available for users who have Retail Search enabled. Please submit a form [here](https://cloud.google.com/contact) to contact cloud sales if you are interested in using Retail Search.
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
     * const retail = google.retail('v2');
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
     *   const res = await retail.projects.locations.catalogs.getDefaultBranch({
     *     // The parent catalog resource name, such as `projects/x/locations/global/catalogs/default_catalog`.
     *     catalog: 'projects/my-project/locations/my-location/catalogs/my-catalog',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "branch": "my_branch",
     *   //   "note": "my_note",
     *   //   "setTime": "my_setTime"
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
    getDefaultBranch(
      params: Params$Resource$Projects$Locations$Catalogs$Getdefaultbranch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getDefaultBranch(
      params?: Params$Resource$Projects$Locations$Catalogs$Getdefaultbranch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRetailV2GetDefaultBranchResponse>;
    getDefaultBranch(
      params: Params$Resource$Projects$Locations$Catalogs$Getdefaultbranch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getDefaultBranch(
      params: Params$Resource$Projects$Locations$Catalogs$Getdefaultbranch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2GetDefaultBranchResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2GetDefaultBranchResponse>
    ): void;
    getDefaultBranch(
      params: Params$Resource$Projects$Locations$Catalogs$Getdefaultbranch,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2GetDefaultBranchResponse>
    ): void;
    getDefaultBranch(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2GetDefaultBranchResponse>
    ): void;
    getDefaultBranch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Getdefaultbranch
        | BodyResponseCallback<Schema$GoogleCloudRetailV2GetDefaultBranchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2GetDefaultBranchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2GetDefaultBranchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2GetDefaultBranchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Getdefaultbranch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Getdefaultbranch;
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
            url: (rootUrl + '/v2/{+catalog}:getDefaultBranch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['catalog'],
        pathParams: ['catalog'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudRetailV2GetDefaultBranchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2GetDefaultBranchResponse>(
          parameters
        );
      }
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
     * const retail = google.retail('v2');
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
    ): GaxiosPromise<Schema$GoogleCloudRetailV2ListCatalogsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2ListCatalogsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2ListCatalogsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2ListCatalogsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2ListCatalogsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$List
        | BodyResponseCallback<Schema$GoogleCloudRetailV2ListCatalogsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2ListCatalogsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2ListCatalogsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2ListCatalogsResponse>
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
            url: (rootUrl + '/v2/{+parent}/catalogs').replace(
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
        createAPIRequest<Schema$GoogleCloudRetailV2ListCatalogsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2ListCatalogsResponse>(
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
     * const retail = google.retail('v2');
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
     *     // Indicates which fields in the provided Catalog to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
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
    ): GaxiosPromise<Schema$GoogleCloudRetailV2Catalog>;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2Catalog>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2Catalog>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2Catalog>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2Catalog>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Patch
        | BodyResponseCallback<Schema$GoogleCloudRetailV2Catalog>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2Catalog>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2Catalog>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2Catalog>
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRetailV2Catalog>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2Catalog>(parameters);
      }
    }

    /**
     * Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/x/locations/x/catalogs/x/branches/1` is set as default, setting SearchRequest.branch to `projects/x/locations/x/catalogs/x/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/x/locations/x/catalogs/x/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/x/locations/x/catalogs/x/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch\}. * SearchService will only return product IDs from branch {newBranch\} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch\}. This feature is only available for users who have Retail Search enabled. Please submit a form [here](https://cloud.google.com/contact) to contact cloud sales if you are interested in using Retail Search.
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
     * const retail = google.retail('v2');
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
     *   const res = await retail.projects.locations.catalogs.setDefaultBranch({
     *     // Full resource name of the catalog, such as `projects/x/locations/global/catalogs/default_catalog`.
     *     catalog: 'projects/my-project/locations/my-location/catalogs/my-catalog',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "branchId": "my_branchId",
     *       //   "note": "my_note"
     *       // }
     *     },
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
    setDefaultBranch(
      params: Params$Resource$Projects$Locations$Catalogs$Setdefaultbranch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setDefaultBranch(
      params?: Params$Resource$Projects$Locations$Catalogs$Setdefaultbranch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleProtobufEmpty>;
    setDefaultBranch(
      params: Params$Resource$Projects$Locations$Catalogs$Setdefaultbranch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setDefaultBranch(
      params: Params$Resource$Projects$Locations$Catalogs$Setdefaultbranch,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleProtobufEmpty>,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    setDefaultBranch(
      params: Params$Resource$Projects$Locations$Catalogs$Setdefaultbranch,
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    setDefaultBranch(
      callback: BodyResponseCallback<Schema$GoogleProtobufEmpty>
    ): void;
    setDefaultBranch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Setdefaultbranch
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
        {}) as Params$Resource$Projects$Locations$Catalogs$Setdefaultbranch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Setdefaultbranch;
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
            url: (rootUrl + '/v2/{+catalog}:setDefaultBranch').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['catalog'],
        pathParams: ['catalog'],
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
  }

  export interface Params$Resource$Projects$Locations$Catalogs$Completequery
    extends StandardParameters {
    /**
     * Required. Catalog for which the completion is performed. Full resource name of catalog, such as `projects/x/locations/global/catalogs/default_catalog`.
     */
    catalog?: string;
    /**
     * Determines which dataset to use for fetching completion. "user-data" will use the imported dataset through CompletionService.ImportCompletionData. "cloud-retail" will use the dataset generated by cloud retail based on user events. If leave empty, it will use the "user-data". Current supported values: * user-data * cloud-retail This option requires additional allowlisting. Before using cloud-retail, contact Cloud Retail support team first.
     */
    dataset?: string;
    /**
     * The device type context for completion suggestions. It is useful to apply different suggestions on different device types, e.g. DESKTOP, MOBILE. If it is empty, the suggestions are across all device types. Supported formats: * UNKNOWN_DEVICE_TYPE * DESKTOP * MOBILE * A customized string starts with OTHER_, e.g. OTHER_IPHONE.
     */
    deviceType?: string;
    /**
     * The list of languages of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). The maximum number of allowed characters is 255. Only "en-US" is currently supported.
     */
    languageCodes?: string[];
    /**
     * Completion max suggestions. If left unset or set to 0, then will fallback to the configured value CompletionConfig.max_suggestions. The maximum allowed max suggestions is 20. If it is set higher, it will be capped by 20.
     */
    maxSuggestions?: number;
    /**
     * Required. The query used to generate suggestions. The maximum number of allowed characters is 255.
     */
    query?: string;
    /**
     * A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    visitorId?: string;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Getdefaultbranch
    extends StandardParameters {
    /**
     * The parent catalog resource name, such as `projects/x/locations/global/catalogs/default_catalog`.
     */
    catalog?: string;
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
     * Indicates which fields in the provided Catalog to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2Catalog;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Setdefaultbranch
    extends StandardParameters {
    /**
     * Full resource name of the catalog, such as `projects/x/locations/global/catalogs/default_catalog`.
     */
    catalog?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2SetDefaultBranchRequest;
  }

  export class Resource$Projects$Locations$Catalogs$Branches {
    context: APIRequestContext;
    operations: Resource$Projects$Locations$Catalogs$Branches$Operations;
    products: Resource$Projects$Locations$Catalogs$Branches$Products;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.operations =
        new Resource$Projects$Locations$Catalogs$Branches$Operations(
          this.context
        );
      this.products =
        new Resource$Projects$Locations$Catalogs$Branches$Products(
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
     * const retail = google.retail('v2');
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
     *     name: 'projects/my-project/locations/my-location/catalogs/my-catalog/branches/my-branche/operations/my-operation',
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
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Branches$Operations$Get;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by GetProduct or ListProducts. This feature is only available for users who have Retail Search enabled. Please submit a form [here](https://cloud.google.com/contact) to contact cloud sales if you are interested in using Retail Search.
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
     * const retail = google.retail('v2');
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
     *   const res =
     *     await retail.projects.locations.catalogs.branches.products.addFulfillmentPlaces(
     *       {
     *         // Required. Full resource name of Product, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     *         product:
     *           'projects/my-project/locations/my-location/catalogs/my-catalog/branches/my-branche/products/.*',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "addTime": "my_addTime",
     *           //   "allowMissing": false,
     *           //   "placeIds": [],
     *           //   "type": "my_type"
     *           // }
     *         },
     *       }
     *     );
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
    addFulfillmentPlaces(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Addfulfillmentplaces,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    addFulfillmentPlaces(
      params?: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Addfulfillmentplaces,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    addFulfillmentPlaces(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Addfulfillmentplaces,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addFulfillmentPlaces(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Addfulfillmentplaces,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    addFulfillmentPlaces(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Addfulfillmentplaces,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    addFulfillmentPlaces(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    addFulfillmentPlaces(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Branches$Products$Addfulfillmentplaces
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
        {}) as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Addfulfillmentplaces;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Addfulfillmentplaces;
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
            url: (rootUrl + '/v2/{+product}:addFulfillmentPlaces').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['product'],
        pathParams: ['product'],
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
     * const retail = google.retail('v2');
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
     *         //   "audience": {},
     *         //   "availability": "my_availability",
     *         //   "availableQuantity": 0,
     *         //   "availableTime": "my_availableTime",
     *         //   "brands": [],
     *         //   "categories": [],
     *         //   "collectionMemberIds": [],
     *         //   "colorInfo": {},
     *         //   "conditions": [],
     *         //   "description": "my_description",
     *         //   "expireTime": "my_expireTime",
     *         //   "fulfillmentInfo": [],
     *         //   "gtin": "my_gtin",
     *         //   "id": "my_id",
     *         //   "images": [],
     *         //   "languageCode": "my_languageCode",
     *         //   "materials": [],
     *         //   "name": "my_name",
     *         //   "patterns": [],
     *         //   "priceInfo": {},
     *         //   "primaryProductId": "my_primaryProductId",
     *         //   "promotions": [],
     *         //   "publishTime": "my_publishTime",
     *         //   "rating": {},
     *         //   "retrievableFields": "my_retrievableFields",
     *         //   "sizes": [],
     *         //   "tags": [],
     *         //   "title": "my_title",
     *         //   "ttl": "my_ttl",
     *         //   "type": "my_type",
     *         //   "uri": "my_uri",
     *         //   "variants": []
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "audience": {},
     *   //   "availability": "my_availability",
     *   //   "availableQuantity": 0,
     *   //   "availableTime": "my_availableTime",
     *   //   "brands": [],
     *   //   "categories": [],
     *   //   "collectionMemberIds": [],
     *   //   "colorInfo": {},
     *   //   "conditions": [],
     *   //   "description": "my_description",
     *   //   "expireTime": "my_expireTime",
     *   //   "fulfillmentInfo": [],
     *   //   "gtin": "my_gtin",
     *   //   "id": "my_id",
     *   //   "images": [],
     *   //   "languageCode": "my_languageCode",
     *   //   "materials": [],
     *   //   "name": "my_name",
     *   //   "patterns": [],
     *   //   "priceInfo": {},
     *   //   "primaryProductId": "my_primaryProductId",
     *   //   "promotions": [],
     *   //   "publishTime": "my_publishTime",
     *   //   "rating": {},
     *   //   "retrievableFields": "my_retrievableFields",
     *   //   "sizes": [],
     *   //   "tags": [],
     *   //   "title": "my_title",
     *   //   "ttl": "my_ttl",
     *   //   "type": "my_type",
     *   //   "uri": "my_uri",
     *   //   "variants": []
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
    ): GaxiosPromise<Schema$GoogleCloudRetailV2Product>;
    create(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2Product>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Create,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Branches$Products$Create
        | BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2Product>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Create;
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
            url: (rootUrl + '/v2/{+parent}/products').replace(
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
        createAPIRequest<Schema$GoogleCloudRetailV2Product>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2Product>(parameters);
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
     * const retail = google.retail('v2');
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
     *       name: 'projects/my-project/locations/my-location/catalogs/my-catalog/branches/my-branche/products/.*',
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
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Delete;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * const retail = google.retail('v2');
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
     *     name: 'projects/my-project/locations/my-location/catalogs/my-catalog/branches/my-branche/products/.*',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "audience": {},
     *   //   "availability": "my_availability",
     *   //   "availableQuantity": 0,
     *   //   "availableTime": "my_availableTime",
     *   //   "brands": [],
     *   //   "categories": [],
     *   //   "collectionMemberIds": [],
     *   //   "colorInfo": {},
     *   //   "conditions": [],
     *   //   "description": "my_description",
     *   //   "expireTime": "my_expireTime",
     *   //   "fulfillmentInfo": [],
     *   //   "gtin": "my_gtin",
     *   //   "id": "my_id",
     *   //   "images": [],
     *   //   "languageCode": "my_languageCode",
     *   //   "materials": [],
     *   //   "name": "my_name",
     *   //   "patterns": [],
     *   //   "priceInfo": {},
     *   //   "primaryProductId": "my_primaryProductId",
     *   //   "promotions": [],
     *   //   "publishTime": "my_publishTime",
     *   //   "rating": {},
     *   //   "retrievableFields": "my_retrievableFields",
     *   //   "sizes": [],
     *   //   "tags": [],
     *   //   "title": "my_title",
     *   //   "ttl": "my_ttl",
     *   //   "type": "my_type",
     *   //   "uri": "my_uri",
     *   //   "variants": []
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
    ): GaxiosPromise<Schema$GoogleCloudRetailV2Product>;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2Product>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Branches$Products$Get
        | BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2Product>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Get;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRetailV2Product>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2Product>(parameters);
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
     * const retail = google.retail('v2');
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
     *         //   "notificationPubsubTopic": "my_notificationPubsubTopic",
     *         //   "reconciliationMode": "my_reconciliationMode",
     *         //   "requestId": "my_requestId",
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
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Import;
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
            url: (rootUrl + '/v2/{+parent}/products:import').replace(
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
     * Gets a list of Products.
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
     * const retail = google.retail('v2');
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
     *   const res = await retail.projects.locations.catalogs.branches.products.list({
     *     // A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. * List Product.Type.VARIANT Products sharing the same Product.Type.PRIMARY Product. For example: `primary_product_id = "some_product_id"` * List Products bundled in a Product.Type.COLLECTION Product. For example: `collection_product_id = "some_product_id"` * List Products with a partibular type. For example: `type = "PRIMARY"` `type = "VARIANT"` `type = "COLLECTION"` If the field is unrecognizable, an INVALID_ARGUMENT error is returned. If the specified Product.Type.PRIMARY Product or Product.Type.COLLECTION Product does not exist, a NOT_FOUND error is returned.
     *     filter: 'placeholder-value',
     *     // Maximum number of Products to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.
     *     pageSize: 'placeholder-value',
     *     // A page token ListProductsResponse.next_page_token, received from a previous ProductService.ListProducts call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ProductService.ListProducts must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent branch resource name, such as `projects/x/locations/global/catalogs/default_catalog/branches/0`. Use `default_branch` as the branch ID, to list products under the default branch. If the caller does not have permission to list Products under this branch, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned.
     *     parent:
     *       'projects/my-project/locations/my-location/catalogs/my-catalog/branches/my-branche',
     *     // The fields of Product to return in the responses. If not set or empty, the following fields are returned: * Product.name * Product.id * Product.title * Product.uri * Product.images * Product.price_info * Product.brands If "*" is provided, all fields are returned. Product.name is always returned no matter what mask is set. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     *     readMask: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "products": []
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
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Catalogs$Branches$Products$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRetailV2ListProductsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2ListProductsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2ListProductsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$List,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2ListProductsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2ListProductsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Branches$Products$List
        | BodyResponseCallback<Schema$GoogleCloudRetailV2ListProductsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2ListProductsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2ListProductsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2ListProductsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Branches$Products$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Branches$Products$List;
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
            url: (rootUrl + '/v2/{+parent}/products').replace(
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
        createAPIRequest<Schema$GoogleCloudRetailV2ListProductsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2ListProductsResponse>(
          parameters
        );
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
     * const retail = google.retail('v2');
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
     *     // Immutable. Full resource name of the product, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`.
     *     name: 'projects/my-project/locations/my-location/catalogs/my-catalog/branches/my-branche/products/.*',
     *     // Indicates which fields in the provided Product to update. The immutable and output only fields are NOT supported. If not set, all supported fields (the fields that are neither immutable nor output only) are updated. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attributes": {},
     *       //   "audience": {},
     *       //   "availability": "my_availability",
     *       //   "availableQuantity": 0,
     *       //   "availableTime": "my_availableTime",
     *       //   "brands": [],
     *       //   "categories": [],
     *       //   "collectionMemberIds": [],
     *       //   "colorInfo": {},
     *       //   "conditions": [],
     *       //   "description": "my_description",
     *       //   "expireTime": "my_expireTime",
     *       //   "fulfillmentInfo": [],
     *       //   "gtin": "my_gtin",
     *       //   "id": "my_id",
     *       //   "images": [],
     *       //   "languageCode": "my_languageCode",
     *       //   "materials": [],
     *       //   "name": "my_name",
     *       //   "patterns": [],
     *       //   "priceInfo": {},
     *       //   "primaryProductId": "my_primaryProductId",
     *       //   "promotions": [],
     *       //   "publishTime": "my_publishTime",
     *       //   "rating": {},
     *       //   "retrievableFields": "my_retrievableFields",
     *       //   "sizes": [],
     *       //   "tags": [],
     *       //   "title": "my_title",
     *       //   "ttl": "my_ttl",
     *       //   "type": "my_type",
     *       //   "uri": "my_uri",
     *       //   "variants": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributes": {},
     *   //   "audience": {},
     *   //   "availability": "my_availability",
     *   //   "availableQuantity": 0,
     *   //   "availableTime": "my_availableTime",
     *   //   "brands": [],
     *   //   "categories": [],
     *   //   "collectionMemberIds": [],
     *   //   "colorInfo": {},
     *   //   "conditions": [],
     *   //   "description": "my_description",
     *   //   "expireTime": "my_expireTime",
     *   //   "fulfillmentInfo": [],
     *   //   "gtin": "my_gtin",
     *   //   "id": "my_id",
     *   //   "images": [],
     *   //   "languageCode": "my_languageCode",
     *   //   "materials": [],
     *   //   "name": "my_name",
     *   //   "patterns": [],
     *   //   "priceInfo": {},
     *   //   "primaryProductId": "my_primaryProductId",
     *   //   "promotions": [],
     *   //   "publishTime": "my_publishTime",
     *   //   "rating": {},
     *   //   "retrievableFields": "my_retrievableFields",
     *   //   "sizes": [],
     *   //   "tags": [],
     *   //   "title": "my_title",
     *   //   "ttl": "my_ttl",
     *   //   "type": "my_type",
     *   //   "uri": "my_uri",
     *   //   "variants": []
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
    ): GaxiosPromise<Schema$GoogleCloudRetailV2Product>;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2Product>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Patch,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Branches$Products$Patch
        | BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2Product>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2Product>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Patch;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudRetailV2Product>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2Product>(parameters);
      }
    }

    /**
     * Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by GetProduct or ListProducts. This feature is only available for users who have Retail Search enabled. Please submit a form [here](https://cloud.google.com/contact) to contact cloud sales if you are interested in using Retail Search.
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
     * const retail = google.retail('v2');
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
     *   const res =
     *     await retail.projects.locations.catalogs.branches.products.removeFulfillmentPlaces(
     *       {
     *         // Required. Full resource name of Product, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     *         product:
     *           'projects/my-project/locations/my-location/catalogs/my-catalog/branches/my-branche/products/.*',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "allowMissing": false,
     *           //   "placeIds": [],
     *           //   "removeTime": "my_removeTime",
     *           //   "type": "my_type"
     *           // }
     *         },
     *       }
     *     );
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
    removeFulfillmentPlaces(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Removefulfillmentplaces,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    removeFulfillmentPlaces(
      params?: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Removefulfillmentplaces,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    removeFulfillmentPlaces(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Removefulfillmentplaces,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeFulfillmentPlaces(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Removefulfillmentplaces,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    removeFulfillmentPlaces(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Removefulfillmentplaces,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    removeFulfillmentPlaces(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    removeFulfillmentPlaces(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Branches$Products$Removefulfillmentplaces
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
        {}) as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Removefulfillmentplaces;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Removefulfillmentplaces;
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
            url: (rootUrl + '/v2/{+product}:removeFulfillmentPlaces').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['product'],
        pathParams: ['product'],
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
     * Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by GetProduct or ListProducts. When inventory is updated with CreateProduct and UpdateProduct, the specified inventory field value(s) will overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update time for the specified inventory fields will be overwritten to the time of the CreateProduct or UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product will be used. If no inventory fields are set in UpdateProductRequest.set_mask, then any existing inventory information will be preserved. Pre-existing inventory information can only be updated with SetInventory, AddFulfillmentPlaces, and RemoveFulfillmentPlaces. This feature is only available for users who have Retail Search enabled. Please submit a form [here](https://cloud.google.com/contact) to contact cloud sales if you are interested in using Retail Search.
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
     * const retail = google.retail('v2');
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
     *   const res =
     *     await retail.projects.locations.catalogs.branches.products.setInventory({
     *       // Immutable. Full resource name of the product, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`.
     *       name: 'projects/my-project/locations/my-location/catalogs/my-catalog/branches/my-branche/products/.*',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "allowMissing": false,
     *         //   "inventory": {},
     *         //   "setMask": "my_setMask",
     *         //   "setTime": "my_setTime"
     *         // }
     *       },
     *     });
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
    setInventory(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Setinventory,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setInventory(
      params?: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Setinventory,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    setInventory(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Setinventory,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setInventory(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Setinventory,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    setInventory(
      params: Params$Resource$Projects$Locations$Catalogs$Branches$Products$Setinventory,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    setInventory(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    setInventory(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Branches$Products$Setinventory
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
        {}) as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Setinventory;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Branches$Products$Setinventory;
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
            url: (rootUrl + '/v2/{+name}:setInventory').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Catalogs$Branches$Products$Addfulfillmentplaces
    extends StandardParameters {
    /**
     * Required. Full resource name of Product, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     */
    product?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2AddFulfillmentPlacesRequest;
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
    requestBody?: Schema$GoogleCloudRetailV2Product;
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
    requestBody?: Schema$GoogleCloudRetailV2ImportProductsRequest;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Branches$Products$List
    extends StandardParameters {
    /**
     * A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. * List Product.Type.VARIANT Products sharing the same Product.Type.PRIMARY Product. For example: `primary_product_id = "some_product_id"` * List Products bundled in a Product.Type.COLLECTION Product. For example: `collection_product_id = "some_product_id"` * List Products with a partibular type. For example: `type = "PRIMARY"` `type = "VARIANT"` `type = "COLLECTION"` If the field is unrecognizable, an INVALID_ARGUMENT error is returned. If the specified Product.Type.PRIMARY Product or Product.Type.COLLECTION Product does not exist, a NOT_FOUND error is returned.
     */
    filter?: string;
    /**
     * Maximum number of Products to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.
     */
    pageSize?: number;
    /**
     * A page token ListProductsResponse.next_page_token, received from a previous ProductService.ListProducts call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ProductService.ListProducts must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    pageToken?: string;
    /**
     * Required. The parent branch resource name, such as `projects/x/locations/global/catalogs/default_catalog/branches/0`. Use `default_branch` as the branch ID, to list products under the default branch. If the caller does not have permission to list Products under this branch, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned.
     */
    parent?: string;
    /**
     * The fields of Product to return in the responses. If not set or empty, the following fields are returned: * Product.name * Product.id * Product.title * Product.uri * Product.images * Product.price_info * Product.brands If "*" is provided, all fields are returned. Product.name is always returned no matter what mask is set. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     */
    readMask?: string;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Branches$Products$Patch
    extends StandardParameters {
    /**
     * If set to true, and the Product is not found, a new Product will be created. In this situation, `update_mask` is ignored.
     */
    allowMissing?: boolean;
    /**
     * Immutable. Full resource name of the product, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`.
     */
    name?: string;
    /**
     * Indicates which fields in the provided Product to update. The immutable and output only fields are NOT supported. If not set, all supported fields (the fields that are neither immutable nor output only) are updated. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2Product;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Branches$Products$Removefulfillmentplaces
    extends StandardParameters {
    /**
     * Required. Full resource name of Product, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     */
    product?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2RemoveFulfillmentPlacesRequest;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Branches$Products$Setinventory
    extends StandardParameters {
    /**
     * Immutable. Full resource name of the product, such as `projects/x/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2SetInventoryRequest;
  }

  export class Resource$Projects$Locations$Catalogs$Completiondata {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Bulk import of processed completion dataset. Request processing may be synchronous. Partial updating is not supported. This feature is only available for users who have Retail Search enabled. Please submit a form [here](https://cloud.google.com/contact) to contact cloud sales if you are interested in using Retail Search.
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
     * const retail = google.retail('v2');
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
     *   const res = await retail.projects.locations.catalogs.completionData.import({
     *     // Required. The catalog which the suggestions dataset belongs to. Format: `projects/1234/locations/global/catalogs/default_catalog`.
     *     parent: 'projects/my-project/locations/my-location/catalogs/my-catalog',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "inputConfig": {},
     *       //   "notificationPubsubTopic": "my_notificationPubsubTopic"
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
      params: Params$Resource$Projects$Locations$Catalogs$Completiondata$Import,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    import(
      params?: Params$Resource$Projects$Locations$Catalogs$Completiondata$Import,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Completiondata$Import,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Completiondata$Import,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      params: Params$Resource$Projects$Locations$Catalogs$Completiondata$Import,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    import(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Completiondata$Import
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
        {}) as Params$Resource$Projects$Locations$Catalogs$Completiondata$Import;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Completiondata$Import;
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
            url: (rootUrl + '/v2/{+parent}/completionData:import').replace(
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
  }

  export interface Params$Resource$Projects$Locations$Catalogs$Completiondata$Import
    extends StandardParameters {
    /**
     * Required. The catalog which the suggestions dataset belongs to. Format: `projects/1234/locations/global/catalogs/default_catalog`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2ImportCompletionDataRequest;
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
     * const retail = google.retail('v2');
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
     *     name: 'projects/my-project/locations/my-location/catalogs/my-catalog/operations/my-operation',
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
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Operations$Get;
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * const retail = google.retail('v2');
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
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Operations$List;
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
            url: (rootUrl + '/v2/{+name}/operations').replace(
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
     * const retail = google.retail('v2');
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
    ): GaxiosPromise<Schema$GoogleCloudRetailV2PredictResponse>;
    predict(
      params: Params$Resource$Projects$Locations$Catalogs$Placements$Predict,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    predict(
      params: Params$Resource$Projects$Locations$Catalogs$Placements$Predict,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2PredictResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2PredictResponse>
    ): void;
    predict(
      params: Params$Resource$Projects$Locations$Catalogs$Placements$Predict,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2PredictResponse>
    ): void;
    predict(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2PredictResponse>
    ): void;
    predict(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Placements$Predict
        | BodyResponseCallback<Schema$GoogleCloudRetailV2PredictResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2PredictResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2PredictResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2PredictResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Placements$Predict;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Placements$Predict;
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
            url: (rootUrl + '/v2/{+placement}:predict').replace(
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
        createAPIRequest<Schema$GoogleCloudRetailV2PredictResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2PredictResponse>(
          parameters
        );
      }
    }

    /**
     * Performs a search. This feature is only available for users who have Retail Search enabled. Please submit a form [here](https://cloud.google.com/contact) to contact cloud sales if you are interested in using Retail Search.
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
     * const retail = google.retail('v2');
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
     *   const res = await retail.projects.locations.catalogs.placements.search({
     *     // Required. The resource name of the search engine placement, such as `projects/x/locations/global/catalogs/default_catalog/placements/default_search`. This field is used to identify the set of models that will be used to make the search. We currently support one placement with the following ID: * `default_search`.
     *     placement:
     *       'projects/my-project/locations/my-location/catalogs/my-catalog/placements/my-placement',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "boostSpec": {},
     *       //   "branch": "my_branch",
     *       //   "canonicalFilter": "my_canonicalFilter",
     *       //   "dynamicFacetSpec": {},
     *       //   "facetSpecs": [],
     *       //   "filter": "my_filter",
     *       //   "offset": 0,
     *       //   "orderBy": "my_orderBy",
     *       //   "pageCategories": [],
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "query": "my_query",
     *       //   "queryExpansionSpec": {},
     *       //   "userInfo": {},
     *       //   "variantRollupKeys": [],
     *       //   "visitorId": "my_visitorId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attributionToken": "my_attributionToken",
     *   //   "correctedQuery": "my_correctedQuery",
     *   //   "facets": [],
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "queryExpansionInfo": {},
     *   //   "redirectUri": "my_redirectUri",
     *   //   "results": [],
     *   //   "totalSize": 0
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
    search(
      params: Params$Resource$Projects$Locations$Catalogs$Placements$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Projects$Locations$Catalogs$Placements$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudRetailV2SearchResponse>;
    search(
      params: Params$Resource$Projects$Locations$Catalogs$Placements$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Catalogs$Placements$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2SearchResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2SearchResponse>
    ): void;
    search(
      params: Params$Resource$Projects$Locations$Catalogs$Placements$Search,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2SearchResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2SearchResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Placements$Search
        | BodyResponseCallback<Schema$GoogleCloudRetailV2SearchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2SearchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2SearchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2SearchResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Placements$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Placements$Search;
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
            url: (rootUrl + '/v2/{+placement}:search').replace(
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
        createAPIRequest<Schema$GoogleCloudRetailV2SearchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2SearchResponse>(
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
    requestBody?: Schema$GoogleCloudRetailV2PredictRequest;
  }
  export interface Params$Resource$Projects$Locations$Catalogs$Placements$Search
    extends StandardParameters {
    /**
     * Required. The resource name of the search engine placement, such as `projects/x/locations/global/catalogs/default_catalog/placements/default_search`. This field is used to identify the set of models that will be used to make the search. We currently support one placement with the following ID: * `default_search`.
     */
    placement?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudRetailV2SearchRequest;
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
     * const retail = google.retail('v2');
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
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Userevents$Collect;
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
            url: (rootUrl + '/v2/{+parent}/userEvents:collect').replace(
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
     * const retail = google.retail('v2');
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
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Userevents$Import;
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
            url: (rootUrl + '/v2/{+parent}/userEvents:import').replace(
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
     * const retail = google.retail('v2');
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
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Userevents$Purge;
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
            url: (rootUrl + '/v2/{+parent}/userEvents:purge').replace(
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
     * const retail = google.retail('v2');
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
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Userevents$Rejoin;
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
            url: (rootUrl + '/v2/{+parent}/userEvents:rejoin').replace(
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
     * const retail = google.retail('v2');
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
     *       //   "completionDetail": {},
     *       //   "eventTime": "my_eventTime",
     *       //   "eventType": "my_eventType",
     *       //   "experimentIds": [],
     *       //   "filter": "my_filter",
     *       //   "offset": 0,
     *       //   "orderBy": "my_orderBy",
     *       //   "pageCategories": [],
     *       //   "pageViewId": "my_pageViewId",
     *       //   "productDetails": [],
     *       //   "purchaseTransaction": {},
     *       //   "referrerUri": "my_referrerUri",
     *       //   "searchQuery": "my_searchQuery",
     *       //   "sessionId": "my_sessionId",
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
     *   //   "completionDetail": {},
     *   //   "eventTime": "my_eventTime",
     *   //   "eventType": "my_eventType",
     *   //   "experimentIds": [],
     *   //   "filter": "my_filter",
     *   //   "offset": 0,
     *   //   "orderBy": "my_orderBy",
     *   //   "pageCategories": [],
     *   //   "pageViewId": "my_pageViewId",
     *   //   "productDetails": [],
     *   //   "purchaseTransaction": {},
     *   //   "referrerUri": "my_referrerUri",
     *   //   "searchQuery": "my_searchQuery",
     *   //   "sessionId": "my_sessionId",
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
    ): GaxiosPromise<Schema$GoogleCloudRetailV2UserEvent>;
    write(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Write,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Write,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2UserEvent>,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2UserEvent>
    ): void;
    write(
      params: Params$Resource$Projects$Locations$Catalogs$Userevents$Write,
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2UserEvent>
    ): void;
    write(
      callback: BodyResponseCallback<Schema$GoogleCloudRetailV2UserEvent>
    ): void;
    write(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Catalogs$Userevents$Write
        | BodyResponseCallback<Schema$GoogleCloudRetailV2UserEvent>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudRetailV2UserEvent>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudRetailV2UserEvent>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudRetailV2UserEvent>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Catalogs$Userevents$Write;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Catalogs$Userevents$Write;
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
            url: (rootUrl + '/v2/{+parent}/userEvents:write').replace(
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
        createAPIRequest<Schema$GoogleCloudRetailV2UserEvent>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudRetailV2UserEvent>(
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
    requestBody?: Schema$GoogleCloudRetailV2ImportUserEventsRequest;
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
    requestBody?: Schema$GoogleCloudRetailV2PurgeUserEventsRequest;
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
    requestBody?: Schema$GoogleCloudRetailV2RejoinUserEventsRequest;
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
    requestBody?: Schema$GoogleCloudRetailV2UserEvent;
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
     * const retail = google.retail('v2');
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
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * const retail = google.retail('v2');
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
            url: (rootUrl + '/v2/{+name}/operations').replace(
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
