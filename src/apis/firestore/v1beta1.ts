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

export namespace firestore_v1beta1 {
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
   * Cloud Firestore API
   *
   * Accesses the NoSQL document database built for automatic scaling, high performance, and ease of application development.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const firestore = google.firestore('v1beta1');
   * ```
   */
  export class Firestore {
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
   * An array value.
   */
  export interface Schema$ArrayValue {
    /**
     * Values in the array.
     */
    values?: Schema$Value[];
  }
  /**
   * The request for Firestore.BatchGetDocuments.
   */
  export interface Schema$BatchGetDocumentsRequest {
    /**
     * The names of the documents to retrieve. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. The request will fail if any of the document is not a child resource of the given `database`. Duplicate names will be elided.
     */
    documents?: string[] | null;
    /**
     * The fields to return. If not set, returns all fields. If a document has a field that is not present in this mask, that field will not be returned in the response.
     */
    mask?: Schema$DocumentMask;
    /**
     * Starts a new transaction and reads the documents. Defaults to a read-only transaction. The new transaction ID will be returned as the first response in the stream.
     */
    newTransaction?: Schema$TransactionOptions;
    /**
     * Reads documents as they were at the given time. This may not be older than 270 seconds.
     */
    readTime?: string | null;
    /**
     * Reads documents in a transaction.
     */
    transaction?: string | null;
  }
  /**
   * The streamed response for Firestore.BatchGetDocuments.
   */
  export interface Schema$BatchGetDocumentsResponse {
    /**
     * A document that was requested.
     */
    found?: Schema$Document;
    /**
     * A document name that was requested but does not exist. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     */
    missing?: string | null;
    /**
     * The time at which the document was read. This may be monotically increasing, in this case the previous documents in the result stream are guaranteed not to have changed between their read_time and this one.
     */
    readTime?: string | null;
    /**
     * The transaction that was started as part of this request. Will only be set in the first response, and only if BatchGetDocumentsRequest.new_transaction was set in the request.
     */
    transaction?: string | null;
  }
  /**
   * The request for Firestore.BatchWrite.
   */
  export interface Schema$BatchWriteRequest {
    /**
     * Labels associated with this batch write.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The writes to apply. Method does not apply writes atomically and does not guarantee ordering. Each write succeeds or fails independently. You cannot write to the same document more than once per request.
     */
    writes?: Schema$Write[];
  }
  /**
   * The response from Firestore.BatchWrite.
   */
  export interface Schema$BatchWriteResponse {
    /**
     * The status of applying the writes. This i-th write status corresponds to the i-th write in the request.
     */
    status?: Schema$Status[];
    /**
     * The result of applying the writes. This i-th write result corresponds to the i-th write in the request.
     */
    writeResults?: Schema$WriteResult[];
  }
  /**
   * The request for Firestore.BeginTransaction.
   */
  export interface Schema$BeginTransactionRequest {
    /**
     * The options for the transaction. Defaults to a read-write transaction.
     */
    options?: Schema$TransactionOptions;
  }
  /**
   * The response for Firestore.BeginTransaction.
   */
  export interface Schema$BeginTransactionResponse {
    /**
     * The transaction that was started.
     */
    transaction?: string | null;
  }
  /**
   * A selection of a collection, such as `messages as m1`.
   */
  export interface Schema$CollectionSelector {
    /**
     * When false, selects only collections that are immediate children of the `parent` specified in the containing `RunQueryRequest`. When true, selects all descendant collections.
     */
    allDescendants?: boolean | null;
    /**
     * The collection ID. When set, selects only collections with this ID.
     */
    collectionId?: string | null;
  }
  /**
   * The request for Firestore.Commit.
   */
  export interface Schema$CommitRequest {
    /**
     * If set, applies all writes in this transaction, and commits it.
     */
    transaction?: string | null;
    /**
     * The writes to apply. Always executed atomically and in order.
     */
    writes?: Schema$Write[];
  }
  /**
   * The response for Firestore.Commit.
   */
  export interface Schema$CommitResponse {
    /**
     * The time at which the commit occurred. Any read with an equal or greater `read_time` is guaranteed to see the effects of the commit.
     */
    commitTime?: string | null;
    /**
     * The result of applying the writes. This i-th write result corresponds to the i-th write in the request.
     */
    writeResults?: Schema$WriteResult[];
  }
  /**
   * A filter that merges multiple other filters using the given operator.
   */
  export interface Schema$CompositeFilter {
    /**
     * The list of filters to combine. Must contain at least one filter.
     */
    filters?: Schema$Filter[];
    /**
     * The operator for combining multiple filters.
     */
    op?: string | null;
  }
  /**
   * A position in a query result set.
   */
  export interface Schema$Cursor {
    /**
     * If the position is just before or just after the given values, relative to the sort order defined by the query.
     */
    before?: boolean | null;
    /**
     * The values that represent a position, in the order they appear in the order by clause of a query. Can contain fewer values than specified in the order by clause.
     */
    values?: Schema$Value[];
  }
  /**
   * A Firestore document. Must not exceed 1 MiB - 4 bytes.
   */
  export interface Schema$Document {
    /**
     * Output only. The time at which the document was created. This value increases monotonically when a document is deleted then recreated. It can also be compared to values from other documents and the `read_time` of a query.
     */
    createTime?: string | null;
    /**
     * The document's fields. The map keys represent field names. A simple field name contains only characters `a` to `z`, `A` to `Z`, `0` to `9`, or `_`, and must not start with `0` to `9`. For example, `foo_bar_17`. Field names matching the regular expression `__.*__` are reserved. Reserved field names are forbidden except in certain documented contexts. The map keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty. Field paths may be used in other contexts to refer to structured fields defined here. For `map_value`, the field path is represented by the simple or quoted field names of the containing fields, delimited by `.`. For example, the structured field `"foo" : { map_value: { "x&y" : { string_value: "hello" \}\}\}` would be represented by the field path `foo.x&y`. Within a field path, a quoted field name starts and ends with `` ` `` and may contain any character. Some characters, including `` ` ``, must be escaped using a `\`. For example, `` `x&y` `` represents `x&y` and `` `bak\`tik` `` represents `` bak`tik ``.
     */
    fields?: {[key: string]: Schema$Value} | null;
    /**
     * The resource name of the document, for example `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     */
    name?: string | null;
    /**
     * Output only. The time at which the document was last changed. This value is initially set to the `create_time` then increases monotonically with each change to the document. It can also be compared to values from other documents and the `read_time` of a query.
     */
    updateTime?: string | null;
  }
  /**
   * A Document has changed. May be the result of multiple writes, including deletes, that ultimately resulted in a new value for the Document. Multiple DocumentChange messages may be returned for the same logical change, if multiple targets are affected.
   */
  export interface Schema$DocumentChange {
    /**
     * The new state of the Document. If `mask` is set, contains only fields that were updated or added.
     */
    document?: Schema$Document;
    /**
     * A set of target IDs for targets that no longer match this document.
     */
    removedTargetIds?: number[] | null;
    /**
     * A set of target IDs of targets that match this document.
     */
    targetIds?: number[] | null;
  }
  /**
   * A Document has been deleted. May be the result of multiple writes, including updates, the last of which deleted the Document. Multiple DocumentDelete messages may be returned for the same logical delete, if multiple targets are affected.
   */
  export interface Schema$DocumentDelete {
    /**
     * The resource name of the Document that was deleted.
     */
    document?: string | null;
    /**
     * The read timestamp at which the delete was observed. Greater or equal to the `commit_time` of the delete.
     */
    readTime?: string | null;
    /**
     * A set of target IDs for targets that previously matched this entity.
     */
    removedTargetIds?: number[] | null;
  }
  /**
   * A set of field paths on a document. Used to restrict a get or update operation on a document to a subset of its fields. This is different from standard field masks, as this is always scoped to a Document, and takes in account the dynamic nature of Value.
   */
  export interface Schema$DocumentMask {
    /**
     * The list of field paths in the mask. See Document.fields for a field path syntax reference.
     */
    fieldPaths?: string[] | null;
  }
  /**
   * A Document has been removed from the view of the targets. Sent if the document is no longer relevant to a target and is out of view. Can be sent instead of a DocumentDelete or a DocumentChange if the server can not send the new value of the document. Multiple DocumentRemove messages may be returned for the same logical write or delete, if multiple targets are affected.
   */
  export interface Schema$DocumentRemove {
    /**
     * The resource name of the Document that has gone out of view.
     */
    document?: string | null;
    /**
     * The read timestamp at which the remove was observed. Greater or equal to the `commit_time` of the change/delete/remove.
     */
    readTime?: string | null;
    /**
     * A set of target IDs for targets that previously matched this document.
     */
    removedTargetIds?: number[] | null;
  }
  /**
   * A target specified by a set of documents names.
   */
  export interface Schema$DocumentsTarget {
    /**
     * The names of the documents to retrieve. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. The request will fail if any of the document is not a child resource of the given `database`. Duplicate names will be elided.
     */
    documents?: string[] | null;
  }
  /**
   * A transformation of a document.
   */
  export interface Schema$DocumentTransform {
    /**
     * The name of the document to transform.
     */
    document?: string | null;
    /**
     * The list of transformations to apply to the fields of the document, in order. This must not be empty.
     */
    fieldTransforms?: Schema$FieldTransform[];
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
   */
  export interface Schema$Empty {}
  /**
   * A digest of all the documents that match a given target.
   */
  export interface Schema$ExistenceFilter {
    /**
     * The total count of documents that match target_id. If different from the count of documents in the client that match, the client must manually determine which documents no longer match the target.
     */
    count?: number | null;
    /**
     * The target ID to which this filter applies.
     */
    targetId?: number | null;
  }
  /**
   * A filter on a specific field.
   */
  export interface Schema$FieldFilter {
    /**
     * The field to filter by.
     */
    field?: Schema$FieldReference;
    /**
     * The operator to filter by.
     */
    op?: string | null;
    /**
     * The value to compare to.
     */
    value?: Schema$Value;
  }
  /**
   * A reference to a field, such as `max(messages.time) as max_time`.
   */
  export interface Schema$FieldReference {
    fieldPath?: string | null;
  }
  /**
   * A transformation of a field of the document.
   */
  export interface Schema$FieldTransform {
    /**
     * Append the given elements in order if they are not already present in the current field value. If the field is not an array, or if the field does not yet exist, it is first set to the empty array. Equivalent numbers of different types (e.g. 3L and 3.0) are considered equal when checking if a value is missing. NaN is equal to NaN, and Null is equal to Null. If the input contains multiple equivalent values, only the first will be considered. The corresponding transform_result will be the null value.
     */
    appendMissingElements?: Schema$ArrayValue;
    /**
     * The path of the field. See Document.fields for the field path syntax reference.
     */
    fieldPath?: string | null;
    /**
     * Adds the given value to the field's current value. This must be an integer or a double value. If the field is not an integer or double, or if the field does not yet exist, the transformation will set the field to the given value. If either of the given value or the current field value are doubles, both values will be interpreted as doubles. Double arithmetic and representation of double values follow IEEE 754 semantics. If there is positive/negative integer overflow, the field is resolved to the largest magnitude positive/negative integer.
     */
    increment?: Schema$Value;
    /**
     * Sets the field to the maximum of its current value and the given value. This must be an integer or a double value. If the field is not an integer or double, or if the field does not yet exist, the transformation will set the field to the given value. If a maximum operation is applied where the field and the input value are of mixed types (that is - one is an integer and one is a double) the field takes on the type of the larger operand. If the operands are equivalent (e.g. 3 and 3.0), the field does not change. 0, 0.0, and -0.0 are all zero. The maximum of a zero stored value and zero input value is always the stored value. The maximum of any numeric value x and NaN is NaN.
     */
    maximum?: Schema$Value;
    /**
     * Sets the field to the minimum of its current value and the given value. This must be an integer or a double value. If the field is not an integer or double, or if the field does not yet exist, the transformation will set the field to the input value. If a minimum operation is applied where the field and the input value are of mixed types (that is - one is an integer and one is a double) the field takes on the type of the smaller operand. If the operands are equivalent (e.g. 3 and 3.0), the field does not change. 0, 0.0, and -0.0 are all zero. The minimum of a zero stored value and zero input value is always the stored value. The minimum of any numeric value x and NaN is NaN.
     */
    minimum?: Schema$Value;
    /**
     * Remove all of the given elements from the array in the field. If the field is not an array, or if the field does not yet exist, it is set to the empty array. Equivalent numbers of the different types (e.g. 3L and 3.0) are considered equal when deciding whether an element should be removed. NaN is equal to NaN, and Null is equal to Null. This will remove all equivalent values if there are duplicates. The corresponding transform_result will be the null value.
     */
    removeAllFromArray?: Schema$ArrayValue;
    /**
     * Sets the field to the given server value.
     */
    setToServerValue?: string | null;
  }
  /**
   * A filter.
   */
  export interface Schema$Filter {
    /**
     * A composite filter.
     */
    compositeFilter?: Schema$CompositeFilter;
    /**
     * A filter on a document field.
     */
    fieldFilter?: Schema$FieldFilter;
    /**
     * A filter that takes exactly one argument.
     */
    unaryFilter?: Schema$UnaryFilter;
  }
  /**
   * Metadata for ExportDocuments operations.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1ExportDocumentsMetadata {
    /**
     * Which collection ids are being exported.
     */
    collectionIds?: string[] | null;
    /**
     * The time the operation ended, either successfully or otherwise. Unset if the operation is still active.
     */
    endTime?: string | null;
    /**
     * The state of the export operation.
     */
    operationState?: string | null;
    /**
     * Where the entities are being exported to.
     */
    outputUriPrefix?: string | null;
    /**
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleFirestoreAdminV1beta1Progress;
    /**
     * An estimate of the number of documents processed.
     */
    progressDocuments?: Schema$GoogleFirestoreAdminV1beta1Progress;
    /**
     * The time that work began on the operation.
     */
    startTime?: string | null;
  }
  /**
   * The request for FirestoreAdmin.ExportDocuments.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1ExportDocumentsRequest {
    /**
     * Which collection ids to export. Unspecified means all collections.
     */
    collectionIds?: string[] | null;
    /**
     * The output URI. Currently only supports Google Cloud Storage URIs of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time.
     */
    outputUriPrefix?: string | null;
  }
  /**
   * Returned in the google.longrunning.Operation response field.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1ExportDocumentsResponse {
    /**
     * Location of the output files. This can be used to begin an import into Cloud Firestore (this project or another project) after the operation completes successfully.
     */
    outputUriPrefix?: string | null;
  }
  /**
   * Metadata for ImportDocuments operations.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1ImportDocumentsMetadata {
    /**
     * Which collection ids are being imported.
     */
    collectionIds?: string[] | null;
    /**
     * The time the operation ended, either successfully or otherwise. Unset if the operation is still active.
     */
    endTime?: string | null;
    /**
     * The location of the documents being imported.
     */
    inputUriPrefix?: string | null;
    /**
     * The state of the import operation.
     */
    operationState?: string | null;
    /**
     * An estimate of the number of bytes processed.
     */
    progressBytes?: Schema$GoogleFirestoreAdminV1beta1Progress;
    /**
     * An estimate of the number of documents processed.
     */
    progressDocuments?: Schema$GoogleFirestoreAdminV1beta1Progress;
    /**
     * The time that work began on the operation.
     */
    startTime?: string | null;
  }
  /**
   * The request for FirestoreAdmin.ImportDocuments.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1ImportDocumentsRequest {
    /**
     * Which collection ids to import. Unspecified means all collections included in the import.
     */
    collectionIds?: string[] | null;
    /**
     * Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1beta1.ExportDocumentsResponse.output_uri_prefix.
     */
    inputUriPrefix?: string | null;
  }
  /**
   * An index definition.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1Index {
    /**
     * The collection ID to which this index applies. Required.
     */
    collectionId?: string | null;
    /**
     * The fields to index.
     */
    fields?: Schema$GoogleFirestoreAdminV1beta1IndexField[];
    /**
     * The resource name of the index. Output only.
     */
    name?: string | null;
    /**
     * The state of the index. Output only.
     */
    state?: string | null;
  }
  /**
   * A field of an index.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1IndexField {
    /**
     * The path of the field. Must match the field path specification described by google.firestore.v1beta1.Document.fields. Special field path `__name__` may be used by itself or at the end of a path. `__type__` may be used only at the end of path.
     */
    fieldPath?: string | null;
    /**
     * The field's mode.
     */
    mode?: string | null;
  }
  /**
   * Metadata for index operations. This metadata populates the metadata field of google.longrunning.Operation.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1IndexOperationMetadata {
    /**
     * True if the [google.longrunning.Operation] was cancelled. If the cancellation is in progress, cancelled will be true but google.longrunning.Operation.done will be false.
     */
    cancelled?: boolean | null;
    /**
     * Progress of the existing operation, measured in number of documents.
     */
    documentProgress?: Schema$GoogleFirestoreAdminV1beta1Progress;
    /**
     * The time the operation ended, either successfully or otherwise. Unset if the operation is still active.
     */
    endTime?: string | null;
    /**
     * The index resource that this operation is acting on. For example: `projects/{project_id\}/databases/{database_id\}/indexes/{index_id\}`
     */
    index?: string | null;
    /**
     * The type of index operation.
     */
    operationType?: string | null;
    /**
     * The time that work began on the operation.
     */
    startTime?: string | null;
  }
  /**
   * The response for FirestoreAdmin.ListIndexes.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse {
    /**
     * The indexes.
     */
    indexes?: Schema$GoogleFirestoreAdminV1beta1Index[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * The metadata message for google.cloud.location.Location.metadata.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1LocationMetadata {}
  /**
   * Measures the progress of a particular metric.
   */
  export interface Schema$GoogleFirestoreAdminV1beta1Progress {
    /**
     * An estimate of how much work has been completed. Note that this may be greater than `work_estimated`.
     */
    workCompleted?: string | null;
    /**
     * An estimate of how much work needs to be performed. Zero if the work estimate is unavailable. May change as work progresses.
     */
    workEstimated?: string | null;
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
   * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
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
   * The request for Firestore.ListCollectionIds.
   */
  export interface Schema$ListCollectionIdsRequest {
    /**
     * The maximum number of results to return.
     */
    pageSize?: number | null;
    /**
     * A page token. Must be a value from ListCollectionIdsResponse.
     */
    pageToken?: string | null;
  }
  /**
   * The response from Firestore.ListCollectionIds.
   */
  export interface Schema$ListCollectionIdsResponse {
    /**
     * The collection ids.
     */
    collectionIds?: string[] | null;
    /**
     * A page token that may be used to continue the list.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response for Firestore.ListDocuments.
   */
  export interface Schema$ListDocumentsResponse {
    /**
     * The Documents found.
     */
    documents?: Schema$Document[];
    /**
     * The next page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * A request for Firestore.Listen
   */
  export interface Schema$ListenRequest {
    /**
     * A target to add to this stream.
     */
    addTarget?: Schema$Target;
    /**
     * Labels associated with this target change.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The ID of a target to remove from this stream.
     */
    removeTarget?: number | null;
  }
  /**
   * The response for Firestore.Listen.
   */
  export interface Schema$ListenResponse {
    /**
     * A Document has changed.
     */
    documentChange?: Schema$DocumentChange;
    /**
     * A Document has been deleted.
     */
    documentDelete?: Schema$DocumentDelete;
    /**
     * A Document has been removed from a target (because it is no longer relevant to that target).
     */
    documentRemove?: Schema$DocumentRemove;
    /**
     * A filter to apply to the set of documents previously returned for the given target. Returned when documents may have been removed from the given target, but the exact documents are unknown.
     */
    filter?: Schema$ExistenceFilter;
    /**
     * Targets have changed.
     */
    targetChange?: Schema$TargetChange;
  }
  /**
   * A map value.
   */
  export interface Schema$MapValue {
    /**
     * The map's fields. The map keys represent field names. Field names matching the regular expression `__.*__` are reserved. Reserved field names are forbidden except in certain documented contexts. The map keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty.
     */
    fields?: {[key: string]: Schema$Value} | null;
  }
  /**
   * An order on a field.
   */
  export interface Schema$Order {
    /**
     * The direction to order by. Defaults to `ASCENDING`.
     */
    direction?: string | null;
    /**
     * The field to order by.
     */
    field?: Schema$FieldReference;
  }
  /**
   * The request for Firestore.PartitionQuery.
   */
  export interface Schema$PartitionQueryRequest {
    /**
     * The maximum number of partitions to return in this call, subject to `partition_count`. For example, if `partition_count` = 10 and `page_size` = 8, the first call to PartitionQuery will return up to 8 partitions and a `next_page_token` if more results exist. A second call to PartitionQuery will return up to 2 partitions, to complete the total of 10 specified in `partition_count`.
     */
    pageSize?: number | null;
    /**
     * The `next_page_token` value returned from a previous call to PartitionQuery that may be used to get an additional set of results. There are no ordering guarantees between sets of results. Thus, using multiple sets of results will require merging the different result sets. For example, two subsequent calls using a page_token may return: * cursor B, cursor M, cursor Q * cursor A, cursor U, cursor W To obtain a complete result set ordered with respect to the results of the query supplied to PartitionQuery, the results sets should be merged: cursor A, cursor B, cursor M, cursor Q, cursor U, cursor W
     */
    pageToken?: string | null;
    /**
     * The desired maximum number of partition points. The partitions may be returned across multiple pages of results. The number must be positive. The actual number of partitions returned may be fewer. For example, this may be set to one fewer than the number of parallel queries to be run, or in running a data pipeline job, one fewer than the number of workers or compute instances available.
     */
    partitionCount?: string | null;
    /**
     * A structured query. Query must specify collection with all descendants and be ordered by name ascending. Other filters, order bys, limits, offsets, and start/end cursors are not supported.
     */
    structuredQuery?: Schema$StructuredQuery;
  }
  /**
   * The response for Firestore.PartitionQuery.
   */
  export interface Schema$PartitionQueryResponse {
    /**
     * A page token that may be used to request an additional set of results, up to the number specified by `partition_count` in the PartitionQuery request. If blank, there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * Partition results. Each partition is a split point that can be used by RunQuery as a starting or end point for the query results. The RunQuery requests must be made with the same query supplied to this PartitionQuery request. The partition cursors will be ordered according to same ordering as the results of the query supplied to PartitionQuery. For example, if a PartitionQuery request returns partition cursors A and B, running the following three queries will return the entire result set of the original query: * query, end_at A * query, start_at A, end_at B * query, start_at B An empty result may indicate that the query has too few results to be partitioned.
     */
    partitions?: Schema$Cursor[];
  }
  /**
   * A precondition on a document, used for conditional operations.
   */
  export interface Schema$Precondition {
    /**
     * When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     */
    exists?: boolean | null;
    /**
     * When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
     */
    updateTime?: string | null;
  }
  /**
   * The projection of document's fields to return.
   */
  export interface Schema$Projection {
    /**
     * The fields to return. If empty, all fields are returned. To only return the name of the document, use `['__name__']`.
     */
    fields?: Schema$FieldReference[];
  }
  /**
   * A target specified by a query.
   */
  export interface Schema$QueryTarget {
    /**
     * The parent resource name. In the format: `projects/{project_id\}/databases/{database_id\}/documents` or `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string | null;
    /**
     * A structured query.
     */
    structuredQuery?: Schema$StructuredQuery;
  }
  /**
   * Options for a transaction that can only be used to read documents.
   */
  export interface Schema$ReadOnly {
    /**
     * Reads documents at the given time. This may not be older than 60 seconds.
     */
    readTime?: string | null;
  }
  /**
   * Options for a transaction that can be used to read and write documents.
   */
  export interface Schema$ReadWrite {
    /**
     * An optional transaction to retry.
     */
    retryTransaction?: string | null;
  }
  /**
   * The request for Firestore.Rollback.
   */
  export interface Schema$RollbackRequest {
    /**
     * Required. The transaction to roll back.
     */
    transaction?: string | null;
  }
  /**
   * The request for Firestore.RunQuery.
   */
  export interface Schema$RunQueryRequest {
    /**
     * Starts a new transaction and reads the documents. Defaults to a read-only transaction. The new transaction ID will be returned as the first response in the stream.
     */
    newTransaction?: Schema$TransactionOptions;
    /**
     * Reads documents as they were at the given time. This may not be older than 270 seconds.
     */
    readTime?: string | null;
    /**
     * A structured query.
     */
    structuredQuery?: Schema$StructuredQuery;
    /**
     * Reads documents in a transaction.
     */
    transaction?: string | null;
  }
  /**
   * The response for Firestore.RunQuery.
   */
  export interface Schema$RunQueryResponse {
    /**
     * A query result. Not set when reporting partial progress.
     */
    document?: Schema$Document;
    /**
     * The time at which the document was read. This may be monotonically increasing; in this case, the previous documents in the result stream are guaranteed not to have changed between their `read_time` and this one. If the query returns no results, a response with `read_time` and no `document` will be sent, and this represents the time at which the query was run.
     */
    readTime?: string | null;
    /**
     * The number of results that have been skipped due to an offset between the last response and the current response.
     */
    skippedResults?: number | null;
    /**
     * The transaction that was started as part of this request. Can only be set in the first response, and only if RunQueryRequest.new_transaction was set in the request. If set, no other fields will be set in this response.
     */
    transaction?: string | null;
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
   * A Firestore query.
   */
  export interface Schema$StructuredQuery {
    /**
     * A end point for the query results.
     */
    endAt?: Schema$Cursor;
    /**
     * The collections to query.
     */
    from?: Schema$CollectionSelector[];
    /**
     * The maximum number of results to return. Applies after all other constraints. Must be \>= 0 if specified.
     */
    limit?: number | null;
    /**
     * The number of results to skip. Applies before limit, but after all other constraints. Must be \>= 0 if specified.
     */
    offset?: number | null;
    /**
     * The order to apply to the query results. Firestore guarantees a stable ordering through the following rules: * Any field required to appear in `order_by`, that is not already specified in `order_by`, is appended to the order in field name order by default. * If an order on `__name__` is not specified, it is appended by default. Fields are appended with the same sort direction as the last order specified, or 'ASCENDING' if no order was specified. For example: * `SELECT * FROM Foo ORDER BY A` becomes `SELECT * FROM Foo ORDER BY A, __name__` * `SELECT * FROM Foo ORDER BY A DESC` becomes `SELECT * FROM Foo ORDER BY A DESC, __name__ DESC` * `SELECT * FROM Foo WHERE A \> 1` becomes `SELECT * FROM Foo WHERE A \> 1 ORDER BY A, __name__`
     */
    orderBy?: Schema$Order[];
    /**
     * The projection to return.
     */
    select?: Schema$Projection;
    /**
     * A starting point for the query results.
     */
    startAt?: Schema$Cursor;
    /**
     * The filter to apply.
     */
    where?: Schema$Filter;
  }
  /**
   * A specification of a set of documents to listen to.
   */
  export interface Schema$Target {
    /**
     * A target specified by a set of document names.
     */
    documents?: Schema$DocumentsTarget;
    /**
     * If the target should be removed once it is current and consistent.
     */
    once?: boolean | null;
    /**
     * A target specified by a query.
     */
    query?: Schema$QueryTarget;
    /**
     * Start listening after a specific `read_time`. The client must know the state of matching documents at this time.
     */
    readTime?: string | null;
    /**
     * A resume token from a prior TargetChange for an identical target. Using a resume token with a different target is unsupported and may fail.
     */
    resumeToken?: string | null;
    /**
     * The target ID that identifies the target on the stream. Must be a positive number and non-zero.
     */
    targetId?: number | null;
  }
  /**
   * Targets being watched have changed.
   */
  export interface Schema$TargetChange {
    /**
     * The error that resulted in this change, if applicable.
     */
    cause?: Schema$Status;
    /**
     * The consistent `read_time` for the given `target_ids` (omitted when the target_ids are not at a consistent snapshot). The stream is guaranteed to send a `read_time` with `target_ids` empty whenever the entire stream reaches a new consistent snapshot. ADD, CURRENT, and RESET messages are guaranteed to (eventually) result in a new consistent snapshot (while NO_CHANGE and REMOVE messages are not). For a given stream, `read_time` is guaranteed to be monotonically increasing.
     */
    readTime?: string | null;
    /**
     * A token that can be used to resume the stream for the given `target_ids`, or all targets if `target_ids` is empty. Not set on every target change.
     */
    resumeToken?: string | null;
    /**
     * The type of change that occurred.
     */
    targetChangeType?: string | null;
    /**
     * The target IDs of targets that have changed. If empty, the change applies to all targets. The order of the target IDs is not defined.
     */
    targetIds?: number[] | null;
  }
  /**
   * Options for creating a new transaction.
   */
  export interface Schema$TransactionOptions {
    /**
     * The transaction can only be used for read operations.
     */
    readOnly?: Schema$ReadOnly;
    /**
     * The transaction can be used for both read and write operations.
     */
    readWrite?: Schema$ReadWrite;
  }
  /**
   * A filter with a single operand.
   */
  export interface Schema$UnaryFilter {
    /**
     * The field to which to apply the operator.
     */
    field?: Schema$FieldReference;
    /**
     * The unary operator to apply.
     */
    op?: string | null;
  }
  /**
   * A message that can hold any of the supported value types.
   */
  export interface Schema$Value {
    /**
     * An array value. Cannot directly contain another array value, though can contain an map which contains another array.
     */
    arrayValue?: Schema$ArrayValue;
    /**
     * A boolean value.
     */
    booleanValue?: boolean | null;
    /**
     * A bytes value. Must not exceed 1 MiB - 89 bytes. Only the first 1,500 bytes are considered by queries.
     */
    bytesValue?: string | null;
    /**
     * A double value.
     */
    doubleValue?: number | null;
    /**
     * A geo point value representing a point on the surface of Earth.
     */
    geoPointValue?: Schema$LatLng;
    /**
     * An integer value.
     */
    integerValue?: string | null;
    /**
     * A map value.
     */
    mapValue?: Schema$MapValue;
    /**
     * A null value.
     */
    nullValue?: string | null;
    /**
     * A reference to a document. For example: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     */
    referenceValue?: string | null;
    /**
     * A string value. The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes. Only the first 1,500 bytes of the UTF-8 representation are considered by queries.
     */
    stringValue?: string | null;
    /**
     * A timestamp value. Precise only to microseconds. When stored, any additional precision is rounded down.
     */
    timestampValue?: string | null;
  }
  /**
   * A write on a document.
   */
  export interface Schema$Write {
    /**
     * An optional precondition on the document. The write will fail if this is set and not met by the target document.
     */
    currentDocument?: Schema$Precondition;
    /**
     * A document name to delete. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     */
    delete?: string | null;
    /**
     * Applies a transformation to a document.
     */
    transform?: Schema$DocumentTransform;
    /**
     * A document to write.
     */
    update?: Schema$Document;
    /**
     * The fields to update in this write. This field can be set only when the operation is `update`. If the mask is not set for an `update` and the document exists, any existing data will be overwritten. If the mask is set and the document on the server has fields not covered by the mask, they are left unchanged. Fields referenced in the mask, but not present in the input document, are deleted from the document on the server. The field paths in this mask must not contain a reserved field name.
     */
    updateMask?: Schema$DocumentMask;
    /**
     * The transforms to perform after update. This field can be set only when the operation is `update`. If present, this write is equivalent to performing `update` and `transform` to the same document atomically and in order.
     */
    updateTransforms?: Schema$FieldTransform[];
  }
  /**
   * The request for Firestore.Write. The first request creates a stream, or resumes an existing one from a token. When creating a new stream, the server replies with a response containing only an ID and a token, to use in the next request. When resuming a stream, the server first streams any responses later than the given token, then a response containing only an up-to-date token, to use in the next request.
   */
  export interface Schema$WriteRequest {
    /**
     * Labels associated with this write request.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The ID of the write stream to resume. This may only be set in the first message. When left empty, a new write stream will be created.
     */
    streamId?: string | null;
    /**
     * A stream token that was previously sent by the server. The client should set this field to the token from the most recent WriteResponse it has received. This acknowledges that the client has received responses up to this token. After sending this token, earlier tokens may not be used anymore. The server may close the stream if there are too many unacknowledged responses. Leave this field unset when creating a new stream. To resume a stream at a specific point, set this field and the `stream_id` field. Leave this field unset when creating a new stream.
     */
    streamToken?: string | null;
    /**
     * The writes to apply. Always executed atomically and in order. This must be empty on the first request. This may be empty on the last request. This must not be empty on all other requests.
     */
    writes?: Schema$Write[];
  }
  /**
   * The response for Firestore.Write.
   */
  export interface Schema$WriteResponse {
    /**
     * The time at which the commit occurred. Any read with an equal or greater `read_time` is guaranteed to see the effects of the write.
     */
    commitTime?: string | null;
    /**
     * The ID of the stream. Only set on the first message, when a new stream was created.
     */
    streamId?: string | null;
    /**
     * A token that represents the position of this response in the stream. This can be used by a client to resume the stream at this point. This field is always set.
     */
    streamToken?: string | null;
    /**
     * The result of applying the writes. This i-th write result corresponds to the i-th write in the request.
     */
    writeResults?: Schema$WriteResult[];
  }
  /**
   * The result of applying a write.
   */
  export interface Schema$WriteResult {
    /**
     * The results of applying each DocumentTransform.FieldTransform, in the same order.
     */
    transformResults?: Schema$Value[];
    /**
     * The last update time of the document after applying the write. Not set after a `delete`. If the write did not actually change the document, this will be the previous update_time.
     */
    updateTime?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    databases: Resource$Projects$Databases;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.databases = new Resource$Projects$Databases(this.context);
    }
  }

  export class Resource$Projects$Databases {
    context: APIRequestContext;
    documents: Resource$Projects$Databases$Documents;
    indexes: Resource$Projects$Databases$Indexes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.documents = new Resource$Projects$Databases$Documents(this.context);
      this.indexes = new Resource$Projects$Databases$Indexes(this.context);
    }

    /**
     * Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.exportDocuments({
     *     // Database to export. Should be of the form: `projects/{project_id\}/databases/{database_id\}`.
     *     name: 'projects/my-project/databases/my-database',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "collectionIds": [],
     *       //   "outputUriPrefix": "my_outputUriPrefix"
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
    exportDocuments(
      params: Params$Resource$Projects$Databases$Exportdocuments,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    exportDocuments(
      params?: Params$Resource$Projects$Databases$Exportdocuments,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    exportDocuments(
      params: Params$Resource$Projects$Databases$Exportdocuments,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    exportDocuments(
      params: Params$Resource$Projects$Databases$Exportdocuments,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    exportDocuments(
      params: Params$Resource$Projects$Databases$Exportdocuments,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    exportDocuments(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    exportDocuments(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Exportdocuments
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
        {}) as Params$Resource$Projects$Databases$Exportdocuments;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Exportdocuments;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:exportDocuments').replace(
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

    /**
     * Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.importDocuments({
     *     // Database to import into. Should be of the form: `projects/{project_id\}/databases/{database_id\}`.
     *     name: 'projects/my-project/databases/my-database',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "collectionIds": [],
     *       //   "inputUriPrefix": "my_inputUriPrefix"
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
    importDocuments(
      params: Params$Resource$Projects$Databases$Importdocuments,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    importDocuments(
      params?: Params$Resource$Projects$Databases$Importdocuments,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    importDocuments(
      params: Params$Resource$Projects$Databases$Importdocuments,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    importDocuments(
      params: Params$Resource$Projects$Databases$Importdocuments,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    importDocuments(
      params: Params$Resource$Projects$Databases$Importdocuments,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    importDocuments(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    importDocuments(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Importdocuments
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
        {}) as Params$Resource$Projects$Databases$Importdocuments;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Importdocuments;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}:importDocuments').replace(
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

  export interface Params$Resource$Projects$Databases$Exportdocuments
    extends StandardParameters {
    /**
     * Database to export. Should be of the form: `projects/{project_id\}/databases/{database_id\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1beta1ExportDocumentsRequest;
  }
  export interface Params$Resource$Projects$Databases$Importdocuments
    extends StandardParameters {
    /**
     * Database to import into. Should be of the form: `projects/{project_id\}/databases/{database_id\}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1beta1ImportDocumentsRequest;
  }

  export class Resource$Projects$Databases$Documents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.documents.batchGet({
     *     // Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     *     database: 'projects/my-project/databases/my-database',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "documents": [],
     *       //   "mask": {},
     *       //   "newTransaction": {},
     *       //   "readTime": "my_readTime",
     *       //   "transaction": "my_transaction"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "found": {},
     *   //   "missing": "my_missing",
     *   //   "readTime": "my_readTime",
     *   //   "transaction": "my_transaction"
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
    batchGet(
      params: Params$Resource$Projects$Databases$Documents$Batchget,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchGet(
      params?: Params$Resource$Projects$Databases$Documents$Batchget,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchGetDocumentsResponse>;
    batchGet(
      params: Params$Resource$Projects$Databases$Documents$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Databases$Documents$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchGetDocumentsResponse>,
      callback: BodyResponseCallback<Schema$BatchGetDocumentsResponse>
    ): void;
    batchGet(
      params: Params$Resource$Projects$Databases$Documents$Batchget,
      callback: BodyResponseCallback<Schema$BatchGetDocumentsResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$BatchGetDocumentsResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Batchget
        | BodyResponseCallback<Schema$BatchGetDocumentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchGetDocumentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchGetDocumentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BatchGetDocumentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+database}/documents:batchGet').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchGetDocumentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchGetDocumentsResponse>(parameters);
      }
    }

    /**
     * Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.documents.batchWrite({
     *     // Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     *     database: 'projects/my-project/databases/my-database',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "labels": {},
     *       //   "writes": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "status": [],
     *   //   "writeResults": []
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
    batchWrite(
      params: Params$Resource$Projects$Databases$Documents$Batchwrite,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    batchWrite(
      params?: Params$Resource$Projects$Databases$Documents$Batchwrite,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BatchWriteResponse>;
    batchWrite(
      params: Params$Resource$Projects$Databases$Documents$Batchwrite,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchWrite(
      params: Params$Resource$Projects$Databases$Documents$Batchwrite,
      options: MethodOptions | BodyResponseCallback<Schema$BatchWriteResponse>,
      callback: BodyResponseCallback<Schema$BatchWriteResponse>
    ): void;
    batchWrite(
      params: Params$Resource$Projects$Databases$Documents$Batchwrite,
      callback: BodyResponseCallback<Schema$BatchWriteResponse>
    ): void;
    batchWrite(callback: BodyResponseCallback<Schema$BatchWriteResponse>): void;
    batchWrite(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Batchwrite
        | BodyResponseCallback<Schema$BatchWriteResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchWriteResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchWriteResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BatchWriteResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Batchwrite;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Batchwrite;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+database}/documents:batchWrite'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchWriteResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchWriteResponse>(parameters);
      }
    }

    /**
     * Starts a new transaction.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.documents.beginTransaction({
     *     // Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     *     database: 'projects/my-project/databases/my-database',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "options": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "transaction": "my_transaction"
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
    beginTransaction(
      params: Params$Resource$Projects$Databases$Documents$Begintransaction,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    beginTransaction(
      params?: Params$Resource$Projects$Databases$Documents$Begintransaction,
      options?: MethodOptions
    ): GaxiosPromise<Schema$BeginTransactionResponse>;
    beginTransaction(
      params: Params$Resource$Projects$Databases$Documents$Begintransaction,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    beginTransaction(
      params: Params$Resource$Projects$Databases$Documents$Begintransaction,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BeginTransactionResponse>,
      callback: BodyResponseCallback<Schema$BeginTransactionResponse>
    ): void;
    beginTransaction(
      params: Params$Resource$Projects$Databases$Documents$Begintransaction,
      callback: BodyResponseCallback<Schema$BeginTransactionResponse>
    ): void;
    beginTransaction(
      callback: BodyResponseCallback<Schema$BeginTransactionResponse>
    ): void;
    beginTransaction(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Begintransaction
        | BodyResponseCallback<Schema$BeginTransactionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BeginTransactionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BeginTransactionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$BeginTransactionResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Begintransaction;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Documents$Begintransaction;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1beta1/{+database}/documents:beginTransaction'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BeginTransactionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BeginTransactionResponse>(parameters);
      }
    }

    /**
     * Commits a transaction, while optionally updating documents.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.documents.commit({
     *     // Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     *     database: 'projects/my-project/databases/my-database',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "transaction": "my_transaction",
     *       //   "writes": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "commitTime": "my_commitTime",
     *   //   "writeResults": []
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
    commit(
      params: Params$Resource$Projects$Databases$Documents$Commit,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    commit(
      params?: Params$Resource$Projects$Databases$Documents$Commit,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CommitResponse>;
    commit(
      params: Params$Resource$Projects$Databases$Documents$Commit,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    commit(
      params: Params$Resource$Projects$Databases$Documents$Commit,
      options: MethodOptions | BodyResponseCallback<Schema$CommitResponse>,
      callback: BodyResponseCallback<Schema$CommitResponse>
    ): void;
    commit(
      params: Params$Resource$Projects$Databases$Documents$Commit,
      callback: BodyResponseCallback<Schema$CommitResponse>
    ): void;
    commit(callback: BodyResponseCallback<Schema$CommitResponse>): void;
    commit(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Commit
        | BodyResponseCallback<Schema$CommitResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommitResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommitResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CommitResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Commit;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Commit;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+database}/documents:commit').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommitResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CommitResponse>(parameters);
      }
    }

    /**
     * Creates a new document.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.documents.createDocument({
     *     // Required. The collection ID, relative to `parent`, to list. For example: `chatrooms`.
     *     collectionId: 'placeholder-value',
     *     // The client-assigned document ID to use for this document. Optional. If not specified, an ID will be assigned by the service.
     *     documentId: 'placeholder-value',
     *     // The list of field paths in the mask. See Document.fields for a field path syntax reference.
     *     'mask.fieldPaths': 'placeholder-value',
     *     // Required. The parent resource. For example: `projects/{project_id\}/databases/{database_id\}/documents` or `projects/{project_id\}/databases/{database_id\}/documents/chatrooms/{chatroom_id\}`
     *     parent: 'projects/my-project/databases/my-database/documents/.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "fields": {},
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "fields": {},
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
    createDocument(
      params: Params$Resource$Projects$Databases$Documents$Createdocument,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    createDocument(
      params?: Params$Resource$Projects$Databases$Documents$Createdocument,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Document>;
    createDocument(
      params: Params$Resource$Projects$Databases$Documents$Createdocument,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    createDocument(
      params: Params$Resource$Projects$Databases$Documents$Createdocument,
      options: MethodOptions | BodyResponseCallback<Schema$Document>,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    createDocument(
      params: Params$Resource$Projects$Databases$Documents$Createdocument,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    createDocument(callback: BodyResponseCallback<Schema$Document>): void;
    createDocument(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Createdocument
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Document> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Createdocument;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Documents$Createdocument;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/{collectionId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'collectionId'],
        pathParams: ['collectionId', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Document>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Document>(parameters);
      }
    }

    /**
     * Deletes a document.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.documents.delete({
     *     // When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     *     'currentDocument.exists': 'placeholder-value',
     *     // When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
     *     'currentDocument.updateTime': 'placeholder-value',
     *     // Required. The resource name of the Document to delete. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     *     name: 'projects/my-project/databases/my-database/documents/my-document/.*',
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
      params: Params$Resource$Projects$Databases$Documents$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Databases$Documents$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Databases$Documents$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Databases$Documents$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Databases$Documents$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Delete
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
        {}) as Params$Resource$Projects$Databases$Documents$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets a single document.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.documents.get({
     *     // The list of field paths in the mask. See Document.fields for a field path syntax reference.
     *     'mask.fieldPaths': 'placeholder-value',
     *     // Required. The resource name of the Document to get. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     *     name: 'projects/my-project/databases/my-database/documents/my-document/.*',
     *     // Reads the version of the document at the given time. This may not be older than 270 seconds.
     *     readTime: 'placeholder-value',
     *     // Reads the document in a transaction.
     *     transaction: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "fields": {},
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Databases$Documents$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Databases$Documents$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Document>;
    get(
      params: Params$Resource$Projects$Databases$Documents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Databases$Documents$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Document>,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    get(
      params: Params$Resource$Projects$Databases$Documents$Get,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    get(callback: BodyResponseCallback<Schema$Document>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Get
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Document> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Document>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Document>(parameters);
      }
    }

    /**
     * Lists documents.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.documents.list({
     *     // Required. The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`.
     *     collectionId: 'placeholder-value',
     *     // The list of field paths in the mask. See Document.fields for a field path syntax reference.
     *     'mask.fieldPaths': 'placeholder-value',
     *     // The order to sort results by. For example: `priority desc, name`.
     *     orderBy: 'placeholder-value',
     *     // The maximum number of documents to return.
     *     pageSize: 'placeholder-value',
     *     // The `next_page_token` value returned from a previous List request, if any.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent resource name. In the format: `projects/{project_id\}/databases/{database_id\}/documents` or `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     *     parent:
     *       'projects/my-project/databases/my-database/documents/my-document/.*',
     *     // Reads documents as they were at the given time. This may not be older than 270 seconds.
     *     readTime: 'placeholder-value',
     *     // If the list should show missing documents. A missing document is a document that does not exist but has sub-documents. These documents will be returned with a key but will not have fields, Document.create_time, or Document.update_time set. Requests with `show_missing` may not specify `where` or `order_by`.
     *     showMissing: 'placeholder-value',
     *     // Reads documents in a transaction.
     *     transaction: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "documents": [],
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
      params: Params$Resource$Projects$Databases$Documents$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Databases$Documents$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDocumentsResponse>;
    list(
      params: Params$Resource$Projects$Databases$Documents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Databases$Documents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDocumentsResponse>,
      callback: BodyResponseCallback<Schema$ListDocumentsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Databases$Documents$List,
      callback: BodyResponseCallback<Schema$ListDocumentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDocumentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$List
        | BodyResponseCallback<Schema$ListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDocumentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDocumentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDocumentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/{collectionId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent', 'collectionId'],
        pathParams: ['collectionId', 'parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDocumentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDocumentsResponse>(parameters);
      }
    }

    /**
     * Lists all the collection IDs underneath a document.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.documents.listCollectionIds({
     *     // Required. The parent document. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. For example: `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     *     parent:
     *       'projects/my-project/databases/my-database/documents/my-document/.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "collectionIds": [],
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
    listCollectionIds(
      params: Params$Resource$Projects$Databases$Documents$Listcollectionids,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listCollectionIds(
      params?: Params$Resource$Projects$Databases$Documents$Listcollectionids,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCollectionIdsResponse>;
    listCollectionIds(
      params: Params$Resource$Projects$Databases$Documents$Listcollectionids,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listCollectionIds(
      params: Params$Resource$Projects$Databases$Documents$Listcollectionids,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCollectionIdsResponse>,
      callback: BodyResponseCallback<Schema$ListCollectionIdsResponse>
    ): void;
    listCollectionIds(
      params: Params$Resource$Projects$Databases$Documents$Listcollectionids,
      callback: BodyResponseCallback<Schema$ListCollectionIdsResponse>
    ): void;
    listCollectionIds(
      callback: BodyResponseCallback<Schema$ListCollectionIdsResponse>
    ): void;
    listCollectionIds(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Listcollectionids
        | BodyResponseCallback<Schema$ListCollectionIdsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCollectionIdsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCollectionIdsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCollectionIdsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Listcollectionids;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Documents$Listcollectionids;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}:listCollectionIds').replace(
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
        createAPIRequest<Schema$ListCollectionIdsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCollectionIdsResponse>(parameters);
      }
    }

    /**
     * Listens to changes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.documents.listen({
     *     // Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     *     database: 'projects/my-project/databases/my-database',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "addTarget": {},
     *       //   "labels": {},
     *       //   "removeTarget": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "documentChange": {},
     *   //   "documentDelete": {},
     *   //   "documentRemove": {},
     *   //   "filter": {},
     *   //   "targetChange": {}
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
    listen(
      params: Params$Resource$Projects$Databases$Documents$Listen,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    listen(
      params?: Params$Resource$Projects$Databases$Documents$Listen,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListenResponse>;
    listen(
      params: Params$Resource$Projects$Databases$Documents$Listen,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    listen(
      params: Params$Resource$Projects$Databases$Documents$Listen,
      options: MethodOptions | BodyResponseCallback<Schema$ListenResponse>,
      callback: BodyResponseCallback<Schema$ListenResponse>
    ): void;
    listen(
      params: Params$Resource$Projects$Databases$Documents$Listen,
      callback: BodyResponseCallback<Schema$ListenResponse>
    ): void;
    listen(callback: BodyResponseCallback<Schema$ListenResponse>): void;
    listen(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Listen
        | BodyResponseCallback<Schema$ListenResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListenResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListenResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ListenResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Listen;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Listen;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+database}/documents:listen').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListenResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListenResponse>(parameters);
      }
    }

    /**
     * Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.documents.partitionQuery({
     *     // Required. The parent resource name. In the format: `projects/{project_id\}/databases/{database_id\}/documents`. Document resource names are not supported; only database resource names can be specified.
     *     parent:
     *       'projects/my-project/databases/my-database/documents/my-document/.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "partitionCount": "my_partitionCount",
     *       //   "structuredQuery": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "partitions": []
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
    partitionQuery(
      params: Params$Resource$Projects$Databases$Documents$Partitionquery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    partitionQuery(
      params?: Params$Resource$Projects$Databases$Documents$Partitionquery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PartitionQueryResponse>;
    partitionQuery(
      params: Params$Resource$Projects$Databases$Documents$Partitionquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    partitionQuery(
      params: Params$Resource$Projects$Databases$Documents$Partitionquery,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PartitionQueryResponse>,
      callback: BodyResponseCallback<Schema$PartitionQueryResponse>
    ): void;
    partitionQuery(
      params: Params$Resource$Projects$Databases$Documents$Partitionquery,
      callback: BodyResponseCallback<Schema$PartitionQueryResponse>
    ): void;
    partitionQuery(
      callback: BodyResponseCallback<Schema$PartitionQueryResponse>
    ): void;
    partitionQuery(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Partitionquery
        | BodyResponseCallback<Schema$PartitionQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PartitionQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PartitionQueryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PartitionQueryResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Partitionquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Databases$Documents$Partitionquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}:partitionQuery').replace(
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
        createAPIRequest<Schema$PartitionQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PartitionQueryResponse>(parameters);
      }
    }

    /**
     * Updates or inserts a document.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.documents.patch({
     *     // When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     *     'currentDocument.exists': 'placeholder-value',
     *     // When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
     *     'currentDocument.updateTime': 'placeholder-value',
     *     // The list of field paths in the mask. See Document.fields for a field path syntax reference.
     *     'mask.fieldPaths': 'placeholder-value',
     *     // The resource name of the document, for example `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     *     name: 'projects/my-project/databases/my-database/documents/my-document/.*',
     *     // The list of field paths in the mask. See Document.fields for a field path syntax reference.
     *     'updateMask.fieldPaths': 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "createTime": "my_createTime",
     *       //   "fields": {},
     *       //   "name": "my_name",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "fields": {},
     *   //   "name": "my_name",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Databases$Documents$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Databases$Documents$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Document>;
    patch(
      params: Params$Resource$Projects$Databases$Documents$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Databases$Documents$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Document>,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    patch(
      params: Params$Resource$Projects$Databases$Documents$Patch,
      callback: BodyResponseCallback<Schema$Document>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Document>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Patch
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Document>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Document> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Document>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Document>(parameters);
      }
    }

    /**
     * Rolls back a transaction.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.documents.rollback({
     *     // Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     *     database: 'projects/my-project/databases/my-database',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "transaction": "my_transaction"
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
    rollback(
      params: Params$Resource$Projects$Databases$Documents$Rollback,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rollback(
      params?: Params$Resource$Projects$Databases$Documents$Rollback,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    rollback(
      params: Params$Resource$Projects$Databases$Documents$Rollback,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    rollback(
      params: Params$Resource$Projects$Databases$Documents$Rollback,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    rollback(
      params: Params$Resource$Projects$Databases$Documents$Rollback,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    rollback(callback: BodyResponseCallback<Schema$Empty>): void;
    rollback(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Rollback
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
        {}) as Params$Resource$Projects$Databases$Documents$Rollback;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Rollback;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+database}/documents:rollback').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
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
     * Runs a query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.documents.runQuery({
     *     // Required. The parent resource name. In the format: `projects/{project_id\}/databases/{database_id\}/documents` or `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     *     parent:
     *       'projects/my-project/databases/my-database/documents/my-document/.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "newTransaction": {},
     *       //   "readTime": "my_readTime",
     *       //   "structuredQuery": {},
     *       //   "transaction": "my_transaction"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "document": {},
     *   //   "readTime": "my_readTime",
     *   //   "skippedResults": 0,
     *   //   "transaction": "my_transaction"
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
    runQuery(
      params: Params$Resource$Projects$Databases$Documents$Runquery,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    runQuery(
      params?: Params$Resource$Projects$Databases$Documents$Runquery,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RunQueryResponse>;
    runQuery(
      params: Params$Resource$Projects$Databases$Documents$Runquery,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    runQuery(
      params: Params$Resource$Projects$Databases$Documents$Runquery,
      options: MethodOptions | BodyResponseCallback<Schema$RunQueryResponse>,
      callback: BodyResponseCallback<Schema$RunQueryResponse>
    ): void;
    runQuery(
      params: Params$Resource$Projects$Databases$Documents$Runquery,
      callback: BodyResponseCallback<Schema$RunQueryResponse>
    ): void;
    runQuery(callback: BodyResponseCallback<Schema$RunQueryResponse>): void;
    runQuery(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Runquery
        | BodyResponseCallback<Schema$RunQueryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RunQueryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RunQueryResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RunQueryResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Runquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Runquery;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}:runQuery').replace(
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
        createAPIRequest<Schema$RunQueryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RunQueryResponse>(parameters);
      }
    }

    /**
     * Streams batches of document updates and deletes, in order.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.documents.write({
     *     // Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`. This is only required in the first message.
     *     database: 'projects/my-project/databases/my-database',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "labels": {},
     *       //   "streamId": "my_streamId",
     *       //   "streamToken": "my_streamToken",
     *       //   "writes": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "commitTime": "my_commitTime",
     *   //   "streamId": "my_streamId",
     *   //   "streamToken": "my_streamToken",
     *   //   "writeResults": []
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
      params: Params$Resource$Projects$Databases$Documents$Write,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    write(
      params?: Params$Resource$Projects$Databases$Documents$Write,
      options?: MethodOptions
    ): GaxiosPromise<Schema$WriteResponse>;
    write(
      params: Params$Resource$Projects$Databases$Documents$Write,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    write(
      params: Params$Resource$Projects$Databases$Documents$Write,
      options: MethodOptions | BodyResponseCallback<Schema$WriteResponse>,
      callback: BodyResponseCallback<Schema$WriteResponse>
    ): void;
    write(
      params: Params$Resource$Projects$Databases$Documents$Write,
      callback: BodyResponseCallback<Schema$WriteResponse>
    ): void;
    write(callback: BodyResponseCallback<Schema$WriteResponse>): void;
    write(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Documents$Write
        | BodyResponseCallback<Schema$WriteResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$WriteResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$WriteResponse>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$WriteResponse> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Documents$Write;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Documents$Write;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+database}/documents:write').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['database'],
        pathParams: ['database'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$WriteResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$WriteResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Databases$Documents$Batchget
    extends StandardParameters {
    /**
     * Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchGetDocumentsRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Batchwrite
    extends StandardParameters {
    /**
     * Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchWriteRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Begintransaction
    extends StandardParameters {
    /**
     * Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BeginTransactionRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Commit
    extends StandardParameters {
    /**
     * Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommitRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Createdocument
    extends StandardParameters {
    /**
     * Required. The collection ID, relative to `parent`, to list. For example: `chatrooms`.
     */
    collectionId?: string;
    /**
     * The client-assigned document ID to use for this document. Optional. If not specified, an ID will be assigned by the service.
     */
    documentId?: string;
    /**
     * The list of field paths in the mask. See Document.fields for a field path syntax reference.
     */
    'mask.fieldPaths'?: string[];
    /**
     * Required. The parent resource. For example: `projects/{project_id\}/databases/{database_id\}/documents` or `projects/{project_id\}/databases/{database_id\}/documents/chatrooms/{chatroom_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Document;
  }
  export interface Params$Resource$Projects$Databases$Documents$Delete
    extends StandardParameters {
    /**
     * When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     */
    'currentDocument.exists'?: boolean;
    /**
     * When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
     */
    'currentDocument.updateTime'?: string;
    /**
     * Required. The resource name of the Document to delete. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Documents$Get
    extends StandardParameters {
    /**
     * The list of field paths in the mask. See Document.fields for a field path syntax reference.
     */
    'mask.fieldPaths'?: string[];
    /**
     * Required. The resource name of the Document to get. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     */
    name?: string;
    /**
     * Reads the version of the document at the given time. This may not be older than 270 seconds.
     */
    readTime?: string;
    /**
     * Reads the document in a transaction.
     */
    transaction?: string;
  }
  export interface Params$Resource$Projects$Databases$Documents$List
    extends StandardParameters {
    /**
     * Required. The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`.
     */
    collectionId?: string;
    /**
     * The list of field paths in the mask. See Document.fields for a field path syntax reference.
     */
    'mask.fieldPaths'?: string[];
    /**
     * The order to sort results by. For example: `priority desc, name`.
     */
    orderBy?: string;
    /**
     * The maximum number of documents to return.
     */
    pageSize?: number;
    /**
     * The `next_page_token` value returned from a previous List request, if any.
     */
    pageToken?: string;
    /**
     * Required. The parent resource name. In the format: `projects/{project_id\}/databases/{database_id\}/documents` or `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string;
    /**
     * Reads documents as they were at the given time. This may not be older than 270 seconds.
     */
    readTime?: string;
    /**
     * If the list should show missing documents. A missing document is a document that does not exist but has sub-documents. These documents will be returned with a key but will not have fields, Document.create_time, or Document.update_time set. Requests with `show_missing` may not specify `where` or `order_by`.
     */
    showMissing?: boolean;
    /**
     * Reads documents in a transaction.
     */
    transaction?: string;
  }
  export interface Params$Resource$Projects$Databases$Documents$Listcollectionids
    extends StandardParameters {
    /**
     * Required. The parent document. In the format: `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. For example: `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ListCollectionIdsRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Listen
    extends StandardParameters {
    /**
     * Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ListenRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Partitionquery
    extends StandardParameters {
    /**
     * Required. The parent resource name. In the format: `projects/{project_id\}/databases/{database_id\}/documents`. Document resource names are not supported; only database resource names can be specified.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PartitionQueryRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Patch
    extends StandardParameters {
    /**
     * When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     */
    'currentDocument.exists'?: boolean;
    /**
     * When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
     */
    'currentDocument.updateTime'?: string;
    /**
     * The list of field paths in the mask. See Document.fields for a field path syntax reference.
     */
    'mask.fieldPaths'?: string[];
    /**
     * The resource name of the document, for example `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`.
     */
    name?: string;
    /**
     * The list of field paths in the mask. See Document.fields for a field path syntax reference.
     */
    'updateMask.fieldPaths'?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$Document;
  }
  export interface Params$Resource$Projects$Databases$Documents$Rollback
    extends StandardParameters {
    /**
     * Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RollbackRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Runquery
    extends StandardParameters {
    /**
     * Required. The parent resource name. In the format: `projects/{project_id\}/databases/{database_id\}/documents` or `projects/{project_id\}/databases/{database_id\}/documents/{document_path\}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunQueryRequest;
  }
  export interface Params$Resource$Projects$Databases$Documents$Write
    extends StandardParameters {
    /**
     * Required. The database name. In the format: `projects/{project_id\}/databases/{database_id\}`. This is only required in the first message.
     */
    database?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WriteRequest;
  }

  export class Resource$Projects$Databases$Indexes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single field cannot be created.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.indexes.create({
     *     // The name of the database this index will apply to. For example: `projects/{project_id\}/databases/{database_id\}`
     *     parent: 'projects/my-project/databases/my-database',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "collectionId": "my_collectionId",
     *       //   "fields": [],
     *       //   "name": "my_name",
     *       //   "state": "my_state"
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
    create(
      params: Params$Resource$Projects$Databases$Indexes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Databases$Indexes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Databases$Indexes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Databases$Indexes$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Databases$Indexes$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Indexes$Create
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
        {}) as Params$Resource$Projects$Databases$Indexes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Indexes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/indexes').replace(
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
     * Deletes an index.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.indexes.delete({
     *     // The index name. For example: `projects/{project_id\}/databases/{database_id\}/indexes/{index_id\}`
     *     name: 'projects/my-project/databases/my-database/indexes/my-indexe',
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
      params: Params$Resource$Projects$Databases$Indexes$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Databases$Indexes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Databases$Indexes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Databases$Indexes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Databases$Indexes$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Indexes$Delete
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
        {}) as Params$Resource$Projects$Databases$Indexes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Indexes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets an index.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.indexes.get({
     *     // The name of the index. For example: `projects/{project_id\}/databases/{database_id\}/indexes/{index_id\}`
     *     name: 'projects/my-project/databases/my-database/indexes/my-indexe',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "collectionId": "my_collectionId",
     *   //   "fields": [],
     *   //   "name": "my_name",
     *   //   "state": "my_state"
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
      params: Params$Resource$Projects$Databases$Indexes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Databases$Indexes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleFirestoreAdminV1beta1Index>;
    get(
      params: Params$Resource$Projects$Databases$Indexes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Databases$Indexes$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1Index>,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1Index>
    ): void;
    get(
      params: Params$Resource$Projects$Databases$Indexes$Get,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1Index>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1Index>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Indexes$Get
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1Index>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1Index>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1Index>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleFirestoreAdminV1beta1Index>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Indexes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Indexes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleFirestoreAdminV1beta1Index>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1beta1Index>(
          parameters
        );
      }
    }

    /**
     * Lists the indexes that match the specified filters.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/datastore',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await firestore.projects.databases.indexes.list({
     *     filter: 'placeholder-value',
     *     // The standard List page size.
     *     pageSize: 'placeholder-value',
     *     // The standard List page token.
     *     pageToken: 'placeholder-value',
     *     // The database name. For example: `projects/{project_id\}/databases/{database_id\}`
     *     parent: 'projects/my-project/databases/my-database',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "indexes": [],
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
      params: Params$Resource$Projects$Databases$Indexes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Databases$Indexes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>;
    list(
      params: Params$Resource$Projects$Databases$Indexes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Databases$Indexes$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Databases$Indexes$List,
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Databases$Indexes$List
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Databases$Indexes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Databases$Indexes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://firestore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/indexes').replace(
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
        createAPIRequest<Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleFirestoreAdminV1beta1ListIndexesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Databases$Indexes$Create
    extends StandardParameters {
    /**
     * The name of the database this index will apply to. For example: `projects/{project_id\}/databases/{database_id\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleFirestoreAdminV1beta1Index;
  }
  export interface Params$Resource$Projects$Databases$Indexes$Delete
    extends StandardParameters {
    /**
     * The index name. For example: `projects/{project_id\}/databases/{database_id\}/indexes/{index_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Indexes$Get
    extends StandardParameters {
    /**
     * The name of the index. For example: `projects/{project_id\}/databases/{database_id\}/indexes/{index_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Databases$Indexes$List
    extends StandardParameters {
    /**
     *
     */
    filter?: string;
    /**
     * The standard List page size.
     */
    pageSize?: number;
    /**
     * The standard List page token.
     */
    pageToken?: string;
    /**
     * The database name. For example: `projects/{project_id\}/databases/{database_id\}`
     */
    parent?: string;
  }
}
