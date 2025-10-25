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
  GaxiosResponseWithHTTP2,
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

export namespace chromewebstore_v2 {
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
   * Chrome Web Store API
   *
   * The Chrome Web Store API provides access to data about apps and extensions, as well as developer tools for managing them.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const chromewebstore = google.chromewebstore('v2');
   * ```
   */
  export class Chromewebstore {
    context: APIRequestContext;
    media: Resource$Media;
    publishers: Resource$Publishers;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.media = new Resource$Media(this.context);
      this.publishers = new Resource$Publishers(this.context);
    }
  }

  /**
   * Information to read/write to blobstore2.
   */
  export interface Schema$Blobstore2Info {
    /**
     * The blob generation id.
     */
    blobGeneration?: string | null;
    /**
     * The blob id, e.g., /blobstore/prod/playground/scotty
     */
    blobId?: string | null;
    /**
     * Read handle passed from Bigstore -\> Scotty for a GCS download. This is a signed, serialized blobstore2.ReadHandle proto which must never be set outside of Bigstore, and is not applicable to non-GCS media downloads.
     */
    downloadReadHandle?: string | null;
    /**
     * The blob read token. Needed to read blobs that have not been replicated. Might not be available until the final call.
     */
    readToken?: string | null;
    /**
     * Metadata passed from Blobstore -\> Scotty for a new GCS upload. This is a signed, serialized blobstore2.BlobMetadataContainer proto which must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads.
     */
    uploadMetadataContainer?: string | null;
  }
  /**
   * Request message for CancelSubmission.
   */
  export interface Schema$CancelSubmissionRequest {}
  /**
   * Response message for `CancelSubmission`.
   */
  export interface Schema$CancelSubmissionResponse {}
  /**
   * A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites.
   */
  export interface Schema$CompositeMedia {
    /**
     * Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef.
     */
    blobRef?: string | null;
    /**
     * Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob.
     */
    blobstore2Info?: Schema$Blobstore2Info;
    /**
     * A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field.
     */
    cosmoBinaryReference?: string | null;
    /**
     * crc32.c hash for the payload.
     */
    crc32cHash?: number | null;
    /**
     * Media data, set if reference_type is INLINE
     */
    inline?: string | null;
    /**
     * Size of the data, in bytes
     */
    length?: string | null;
    /**
     * MD5 hash for the payload.
     */
    md5Hash?: string | null;
    /**
     * Reference to a TI Blob, set if reference_type is BIGSTORE_REF.
     */
    objectId?: Schema$ObjectId;
    /**
     * Path to the data, set if reference_type is PATH
     */
    path?: string | null;
    /**
     * Describes what the field reference contains.
     */
    referenceType?: string | null;
    /**
     * SHA-1 hash for the payload.
     */
    sha1Hash?: string | null;
  }
  /**
   * Detailed Content-Type information from Scotty. The Content-Type of the media will typically be filled in by the header or Scotty's best_guess, but this extended information provides the backend with more information so that it can make a better decision if needed. This is only used on media upload requests from Scotty.
   */
  export interface Schema$ContentTypeInfo {
    /**
     * Scotty's best guess of what the content type of the file is.
     */
    bestGuess?: string | null;
    /**
     * The content type of the file derived by looking at specific bytes (i.e. "magic bytes") of the actual file.
     */
    fromBytes?: string | null;
    /**
     * The content type of the file derived from the file extension of the original file name used by the client.
     */
    fromFileName?: string | null;
    /**
     * The content type of the file as specified in the request headers, multipart headers, or RUPIO start request.
     */
    fromHeader?: string | null;
    /**
     * The content type of the file derived from the file extension of the URL path. The URL path is assumed to represent a file name (which is typically only true for agents that are providing a REST API).
     */
    fromUrlPath?: string | null;
  }
  /**
   * Deployment information for a specific release channel. Used in requests to update deployment parameters.
   */
  export interface Schema$DeployInfo {
    /**
     * Required. The current deploy percentage for the release channel (nonnegative number between 0 and 100).
     */
    deployPercentage?: number | null;
  }
  /**
   * Backend response for a Diff get checksums response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
   */
  export interface Schema$DiffChecksumsResponse {
    /**
     * Exactly one of these fields must be populated. If checksums_location is filled, the server will return the corresponding contents to the user. If object_location is filled, the server will calculate the checksums based on the content there and return that to the user. For details on the format of the checksums, see http://go/scotty-diff-protocol.
     */
    checksumsLocation?: Schema$CompositeMedia;
    /**
     * The chunk size of checksums. Must be a multiple of 256KB.
     */
    chunkSizeBytes?: string | null;
    /**
     * If set, calculate the checksums based on the contents and return them to the caller.
     */
    objectLocation?: Schema$CompositeMedia;
    /**
     * The total size of the server object.
     */
    objectSizeBytes?: string | null;
    /**
     * The object version of the object the checksums are being returned for.
     */
    objectVersion?: string | null;
  }
  /**
   * Backend response for a Diff download response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
   */
  export interface Schema$DiffDownloadResponse {
    /**
     * The original object location.
     */
    objectLocation?: Schema$CompositeMedia;
  }
  /**
   * A Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
   */
  export interface Schema$DiffUploadRequest {
    /**
     * The location of the checksums for the new object. Agents must clone the object located here, as the upload server will delete the contents once a response is received. For details on the format of the checksums, see http://go/scotty-diff-protocol.
     */
    checksumsInfo?: Schema$CompositeMedia;
    /**
     * The location of the new object. Agents must clone the object located here, as the upload server will delete the contents once a response is received.
     */
    objectInfo?: Schema$CompositeMedia;
    /**
     * The object version of the object that is the base version the incoming diff script will be applied to. This field will always be filled in.
     */
    objectVersion?: string | null;
  }
  /**
   * Backend response for a Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
   */
  export interface Schema$DiffUploadResponse {
    /**
     * The object version of the object at the server. Must be included in the end notification response. The version in the end notification response must correspond to the new version of the object that is now stored at the server, after the upload.
     */
    objectVersion?: string | null;
    /**
     * The location of the original file for a diff upload request. Must be filled in if responding to an upload start notification.
     */
    originalObject?: Schema$CompositeMedia;
  }
  /**
   * Backend response for a Diff get version response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.
   */
  export interface Schema$DiffVersionResponse {
    /**
     * The total size of the server object.
     */
    objectSizeBytes?: string | null;
    /**
     * The version of the object stored at the server.
     */
    objectVersion?: string | null;
  }
  /**
   * Deployment information for a specific release channel
   */
  export interface Schema$DistributionChannel {
    /**
     * The extension version provided in the manifest of the uploaded package.
     */
    crxVersion?: string | null;
    /**
     * The current deploy percentage for the release channel (nonnegative number between 0 and 100).
     */
    deployPercentage?: number | null;
  }
  /**
   * Parameters specific to media downloads.
   */
  export interface Schema$DownloadParameters {
    /**
     * A boolean to be returned in the response to Scotty. Allows/disallows gzip encoding of the payload content when the server thinks it's advantageous (hence, does not guarantee compression) which allows Scotty to GZip the response to the client.
     */
    allowGzipCompression?: boolean | null;
    /**
     * Determining whether or not Apiary should skip the inclusion of any Content-Range header on its response to Scotty.
     */
    ignoreRange?: boolean | null;
  }
  /**
   * Response message for `FetchItemStatus`.
   */
  export interface Schema$FetchItemStatusResponse {
    /**
     * Output only. The ID of the item.
     */
    itemId?: string | null;
    /**
     * Output only. The state of the last async upload for an item. Only set when there has been an async upload for the item in the past 24 hours.
     */
    lastAsyncUploadState?: string | null;
    /**
     * The name of the requested item.
     */
    name?: string | null;
    /**
     * The public key of the item, which may be generated by the store.
     */
    publicKey?: string | null;
    /**
     * Output only. Status of the current published revision of the item. Will be unset if the item is not published.
     */
    publishedItemRevisionStatus?: Schema$ItemRevisionStatus;
    /**
     * Status of the item revision submitted to be published. Will be unset if the item has not been submitted for publishing since the last successful publish.
     */
    submittedItemRevisionStatus?: Schema$ItemRevisionStatus;
    /**
     * If true, the item has been taken down for a policy violation. Check the developer dashboard for details.
     */
    takenDown?: boolean | null;
    /**
     * If true, the item has been warned for a policy violation and will be taken down if not resolved. Check the developer dashboard for details.
     */
    warned?: boolean | null;
  }
  /**
   * Details on the status of an item revision.
   */
  export interface Schema$ItemRevisionStatus {
    /**
     * Details on the package of the item
     */
    distributionChannels?: Schema$DistributionChannel[];
    /**
     * Output only. Current state of the item
     */
    state?: string | null;
  }
  /**
   * A reference to data stored on the filesystem, on GFS or in blobstore.
   */
  export interface Schema$Media {
    /**
     * Deprecated, use one of explicit hash type fields instead. Algorithm used for calculating the hash. As of 2011/01/21, "MD5" is the only possible value for this field. New values may be added at any time.
     */
    algorithm?: string | null;
    /**
     * Use object_id instead.
     */
    bigstoreObjectRef?: string | null;
    /**
     * Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef.
     */
    blobRef?: string | null;
    /**
     * Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob.
     */
    blobstore2Info?: Schema$Blobstore2Info;
    /**
     * A composite media composed of one or more media objects, set if reference_type is COMPOSITE_MEDIA. The media length field must be set to the sum of the lengths of all composite media objects. Note: All composite media must have length specified.
     */
    compositeMedia?: Schema$CompositeMedia[];
    /**
     * MIME type of the data
     */
    contentType?: string | null;
    /**
     * Extended content type information provided for Scotty uploads.
     */
    contentTypeInfo?: Schema$ContentTypeInfo;
    /**
     * A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field.
     */
    cosmoBinaryReference?: string | null;
    /**
     * For Scotty Uploads: Scotty-provided hashes for uploads For Scotty Downloads: (WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM.) A Hash provided by the agent to be used to verify the data being downloaded. Currently only supported for inline payloads. Further, only crc32c_hash is currently supported.
     */
    crc32cHash?: number | null;
    /**
     * Set if reference_type is DIFF_CHECKSUMS_RESPONSE.
     */
    diffChecksumsResponse?: Schema$DiffChecksumsResponse;
    /**
     * Set if reference_type is DIFF_DOWNLOAD_RESPONSE.
     */
    diffDownloadResponse?: Schema$DiffDownloadResponse;
    /**
     * Set if reference_type is DIFF_UPLOAD_REQUEST.
     */
    diffUploadRequest?: Schema$DiffUploadRequest;
    /**
     * Set if reference_type is DIFF_UPLOAD_RESPONSE.
     */
    diffUploadResponse?: Schema$DiffUploadResponse;
    /**
     * Set if reference_type is DIFF_VERSION_RESPONSE.
     */
    diffVersionResponse?: Schema$DiffVersionResponse;
    /**
     * Parameters for a media download.
     */
    downloadParameters?: Schema$DownloadParameters;
    /**
     * Original file name
     */
    filename?: string | null;
    /**
     * Deprecated, use one of explicit hash type fields instead. These two hash related fields will only be populated on Scotty based media uploads and will contain the content of the hash group in the NotificationRequest: http://cs/#google3/blobstore2/api/scotty/service/proto/upload_listener.proto&q=class:Hash Hex encoded hash value of the uploaded media.
     */
    hash?: string | null;
    /**
     * For Scotty uploads only. If a user sends a hash code and the backend has requested that Scotty verify the upload against the client hash, Scotty will perform the check on behalf of the backend and will reject it if the hashes don't match. This is set to true if Scotty performed this verification.
     */
    hashVerified?: boolean | null;
    /**
     * Media data, set if reference_type is INLINE
     */
    inline?: string | null;
    /**
     * |is_potential_retry| is set false only when Scotty is certain that it has not sent the request before. When a client resumes an upload, this field must be set true in agent calls, because Scotty cannot be certain that it has never sent the request before due to potential failure in the session state persistence.
     */
    isPotentialRetry?: boolean | null;
    /**
     * Size of the data, in bytes
     */
    length?: string | null;
    /**
     * Scotty-provided MD5 hash for an upload.
     */
    md5Hash?: string | null;
    /**
     * Media id to forward to the operation GetMedia. Can be set if reference_type is GET_MEDIA.
     */
    mediaId?: string | null;
    /**
     * Reference to a TI Blob, set if reference_type is BIGSTORE_REF.
     */
    objectId?: Schema$ObjectId;
    /**
     * Path to the data, set if reference_type is PATH
     */
    path?: string | null;
    /**
     * Describes what the field reference contains.
     */
    referenceType?: string | null;
    /**
     * Scotty-provided SHA1 hash for an upload.
     */
    sha1Hash?: string | null;
    /**
     * Scotty-provided SHA256 hash for an upload.
     */
    sha256Hash?: string | null;
    /**
     * Time at which the media data was last updated, in milliseconds since UNIX epoch
     */
    timestamp?: string | null;
    /**
     * A unique fingerprint/version id for the media data
     */
    token?: string | null;
  }
  /**
   * Extra information added to operations that support Scotty media requests.
   */
  export interface Schema$MediaRequestInfo {
    /**
     * The number of current bytes uploaded or downloaded.
     */
    currentBytes?: string | null;
    /**
     * Data to be copied to backend requests. Custom data is returned to Scotty in the agent_state field, which Scotty will then provide in subsequent upload notifications.
     */
    customData?: string | null;
    /**
     * Set if the http request info is diff encoded. The value of this field is the version number of the base revision. This is corresponding to Apiary's mediaDiffObjectVersion (//depot/google3/java/com/google/api/server/media/variable/DiffObjectVersionVariable.java). See go/esf-scotty-diff-upload for more information.
     */
    diffObjectVersion?: string | null;
    /**
     * The existence of the final_status field indicates that this is the last call to the agent for this request_id. http://google3/uploader/agent/scotty_agent.proto?l=737&rcl=347601929
     */
    finalStatus?: number | null;
    /**
     * The type of notification received from Scotty.
     */
    notificationType?: string | null;
    /**
     * The physical headers provided by RequestReceivedParameters in Scotty request. type is uploader_service.KeyValuePairs.
     */
    physicalHeaders?: string | null;
    /**
     * The Scotty request ID.
     */
    requestId?: string | null;
    /**
     * The partition of the Scotty server handling this request. type is uploader_service.RequestReceivedParamsServingInfo LINT.IfChange(request_received_params_serving_info_annotations) LINT.ThenChange()
     */
    requestReceivedParamsServingInfo?: string | null;
    /**
     * The total size of the file.
     */
    totalBytes?: string | null;
    /**
     * Whether the total bytes field contains an estimated data.
     */
    totalBytesIsEstimated?: boolean | null;
  }
  /**
   * This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues with JavaScript support; see http://b/8801763.
   */
  export interface Schema$ObjectId {
    /**
     * The name of the bucket to which this object belongs.
     */
    bucketName?: string | null;
    /**
     * Generation of the object. Generations are monotonically increasing across writes, allowing them to be be compared to determine which generation is newer. If this is omitted in a request, then you are requesting the live object. See http://go/bigstore-versions
     */
    generation?: string | null;
    /**
     * The name of the object.
     */
    objectName?: string | null;
  }
  /**
   * Request message for PublishItem.
   */
  export interface Schema$PublishItemRequest {
    /**
     * Optional. Additional deploy information including the desired initial percentage rollout. Defaults to the current value saved in the developer dashboard if unset.
     */
    deployInfos?: Schema$DeployInfo[];
    /**
     * Optional. Use this to control if the item is published immediately on approval or staged for publishing in the future. Defaults to `DEFAULT_PUBLISH` if unset.
     */
    publishType?: string | null;
    /**
     * Optional. Whether to attempt to skip item review. The API will validate if the item qualifies and return a validation error if the item requires review. Defaults to `false` if unset.
     */
    skipReview?: boolean | null;
  }
  /**
   * Response message for `PublishItem`.
   */
  export interface Schema$PublishItemResponse {
    /**
     * Output only. The ID of the item.
     */
    itemId?: string | null;
    /**
     * The name of the item that was submitted
     */
    name?: string | null;
    /**
     * Output only. The current state of the submission.
     */
    state?: string | null;
  }
  /**
   * Request message for SetPublishedDeployPercentage.
   */
  export interface Schema$SetPublishedDeployPercentageRequest {
    /**
     * Required. Unscaled percentage value for the publised revision (nonnegative number between 0 and 100). It must be larger than the existing target percentage.
     */
    deployPercentage?: number | null;
  }
  /**
   * Response message for `SetPublishedDeployPercentage`.
   */
  export interface Schema$SetPublishedDeployPercentageResponse {}
  /**
   * Request message for UploadItemPackage.
   */
  export interface Schema$UploadItemPackageRequest {
    /**
     * Reference to the uploaded media.
     */
    blob?: Schema$Media;
    /**
     * Info about the media upload request.
     */
    mediaRequestInfo?: Schema$MediaRequestInfo;
  }
  /**
   * Response message for `UploadItemPackage`.
   */
  export interface Schema$UploadItemPackageResponse {
    /**
     * The extension version provided in the manifest of the uploaded package. This will not be set if the upload is still in progress (`upload_state` is `UPLOAD_IN_PROGRESS`).
     */
    crxVersion?: string | null;
    /**
     * Output only. The ID of the item the package was uploaded to.
     */
    itemId?: string | null;
    /**
     * The name of the item the package was uploaded to.
     */
    name?: string | null;
    /**
     * Output only. The state of the upload. If `upload_state` is `UPLOAD_IN_PROGRESS`, you can poll for updates using the fetchStatus method.
     */
    uploadState?: string | null;
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Upload a new package to an existing item.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromewebstore.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const chromewebstore = google.chromewebstore('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/chromewebstore'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromewebstore.media.upload({
     *     // Required. Name of the item to upload the new package to in the form `publishers/{publisherId\}/items/{itemId\}`
     *     name: 'publishers/my-publisher/items/my-item',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "blob": {},
     *       //   "mediaRequestInfo": {}
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "crxVersion": "my_crxVersion",
     *   //   "itemId": "my_itemId",
     *   //   "name": "my_name",
     *   //   "uploadState": "my_uploadState"
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
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    upload(
      params?: Params$Resource$Media$Upload,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UploadItemPackageResponse>>;
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UploadItemPackageResponse>,
      callback: BodyResponseCallback<Schema$UploadItemPackageResponse>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      callback: BodyResponseCallback<Schema$UploadItemPackageResponse>
    ): void;
    upload(
      callback: BodyResponseCallback<Schema$UploadItemPackageResponse>
    ): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Media$Upload
        | BodyResponseCallback<Schema$UploadItemPackageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UploadItemPackageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UploadItemPackageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UploadItemPackageResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Upload;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromewebstore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:upload').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/v2/{+name}:upload').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UploadItemPackageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UploadItemPackageResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Media$Upload extends StandardParameters {
    /**
     * Required. Name of the item to upload the new package to in the form `publishers/{publisherId\}/items/{itemId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UploadItemPackageRequest;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }

  export class Resource$Publishers {
    context: APIRequestContext;
    items: Resource$Publishers$Items;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.items = new Resource$Publishers$Items(this.context);
    }
  }

  export class Resource$Publishers$Items {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Cancel the current active submission of an item if present. This can be used to cancel the review of a pending submission.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromewebstore.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const chromewebstore = google.chromewebstore('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/chromewebstore'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromewebstore.publishers.items.cancelSubmission({
     *     // Required. Name of the item to cancel the submission of in the form `publishers/{publisherId\}/items/{itemId\}`
     *     name: 'publishers/my-publisher/items/my-item',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
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
    cancelSubmission(
      params: Params$Resource$Publishers$Items$Cancelsubmission,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancelSubmission(
      params?: Params$Resource$Publishers$Items$Cancelsubmission,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CancelSubmissionResponse>>;
    cancelSubmission(
      params: Params$Resource$Publishers$Items$Cancelsubmission,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancelSubmission(
      params: Params$Resource$Publishers$Items$Cancelsubmission,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CancelSubmissionResponse>,
      callback: BodyResponseCallback<Schema$CancelSubmissionResponse>
    ): void;
    cancelSubmission(
      params: Params$Resource$Publishers$Items$Cancelsubmission,
      callback: BodyResponseCallback<Schema$CancelSubmissionResponse>
    ): void;
    cancelSubmission(
      callback: BodyResponseCallback<Schema$CancelSubmissionResponse>
    ): void;
    cancelSubmission(
      paramsOrCallback?:
        | Params$Resource$Publishers$Items$Cancelsubmission
        | BodyResponseCallback<Schema$CancelSubmissionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CancelSubmissionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CancelSubmissionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CancelSubmissionResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publishers$Items$Cancelsubmission;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Publishers$Items$Cancelsubmission;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromewebstore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:cancelSubmission').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CancelSubmissionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CancelSubmissionResponse>(parameters);
      }
    }

    /**
     * Fetch the status of an item.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromewebstore.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const chromewebstore = google.chromewebstore('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/chromewebstore',
     *       'https://www.googleapis.com/auth/chromewebstore.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromewebstore.publishers.items.fetchStatus({
     *     // Required. Name of the item to retrieve the status of in the form `publishers/{publisherId\}/items/{itemId\}`
     *     name: 'publishers/my-publisher/items/my-item',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "itemId": "my_itemId",
     *   //   "lastAsyncUploadState": "my_lastAsyncUploadState",
     *   //   "name": "my_name",
     *   //   "publicKey": "my_publicKey",
     *   //   "publishedItemRevisionStatus": {},
     *   //   "submittedItemRevisionStatus": {},
     *   //   "takenDown": false,
     *   //   "warned": false
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
    fetchStatus(
      params: Params$Resource$Publishers$Items$Fetchstatus,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    fetchStatus(
      params?: Params$Resource$Publishers$Items$Fetchstatus,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$FetchItemStatusResponse>>;
    fetchStatus(
      params: Params$Resource$Publishers$Items$Fetchstatus,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    fetchStatus(
      params: Params$Resource$Publishers$Items$Fetchstatus,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$FetchItemStatusResponse>,
      callback: BodyResponseCallback<Schema$FetchItemStatusResponse>
    ): void;
    fetchStatus(
      params: Params$Resource$Publishers$Items$Fetchstatus,
      callback: BodyResponseCallback<Schema$FetchItemStatusResponse>
    ): void;
    fetchStatus(
      callback: BodyResponseCallback<Schema$FetchItemStatusResponse>
    ): void;
    fetchStatus(
      paramsOrCallback?:
        | Params$Resource$Publishers$Items$Fetchstatus
        | BodyResponseCallback<Schema$FetchItemStatusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$FetchItemStatusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$FetchItemStatusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$FetchItemStatusResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publishers$Items$Fetchstatus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Publishers$Items$Fetchstatus;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromewebstore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:fetchStatus').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$FetchItemStatusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$FetchItemStatusResponse>(parameters);
      }
    }

    /**
     * Submit the item to be published in the store. The item will be submitted for review unless `skip_review` is set to true, or the item is staged from a previous submission with `publish_type` set to `STAGED_PUBLISH`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromewebstore.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const chromewebstore = google.chromewebstore('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/chromewebstore'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await chromewebstore.publishers.items.publish({
     *     // Required. Name of the item in the form `publishers/{publisherId\}/items/{itemId\}`
     *     name: 'publishers/my-publisher/items/my-item',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "deployInfos": [],
     *       //   "publishType": "my_publishType",
     *       //   "skipReview": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "itemId": "my_itemId",
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
    publish(
      params: Params$Resource$Publishers$Items$Publish,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    publish(
      params?: Params$Resource$Publishers$Items$Publish,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PublishItemResponse>>;
    publish(
      params: Params$Resource$Publishers$Items$Publish,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    publish(
      params: Params$Resource$Publishers$Items$Publish,
      options: MethodOptions | BodyResponseCallback<Schema$PublishItemResponse>,
      callback: BodyResponseCallback<Schema$PublishItemResponse>
    ): void;
    publish(
      params: Params$Resource$Publishers$Items$Publish,
      callback: BodyResponseCallback<Schema$PublishItemResponse>
    ): void;
    publish(callback: BodyResponseCallback<Schema$PublishItemResponse>): void;
    publish(
      paramsOrCallback?:
        | Params$Resource$Publishers$Items$Publish
        | BodyResponseCallback<Schema$PublishItemResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PublishItemResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PublishItemResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PublishItemResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publishers$Items$Publish;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Publishers$Items$Publish;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromewebstore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:publish').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PublishItemResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PublishItemResponse>(parameters);
      }
    }

    /**
     * Set a higher target deploy percentage for the item's published revision. This will be updated without the item being submitted for review. This is only available to items with over 10,000 seven-day active users.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/chromewebstore.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const chromewebstore = google.chromewebstore('v2');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/chromewebstore'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res =
     *     await chromewebstore.publishers.items.setPublishedDeployPercentage({
     *       // Required. Name of the item to update the published revision of in the form `publishers/{publisherId\}/items/{itemId\}`
     *       name: 'publishers/my-publisher/items/my-item',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "deployPercentage": 0
     *         // }
     *       },
     *     });
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
    setPublishedDeployPercentage(
      params: Params$Resource$Publishers$Items$Setpublisheddeploypercentage,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    setPublishedDeployPercentage(
      params?: Params$Resource$Publishers$Items$Setpublisheddeploypercentage,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$SetPublishedDeployPercentageResponse>
    >;
    setPublishedDeployPercentage(
      params: Params$Resource$Publishers$Items$Setpublisheddeploypercentage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setPublishedDeployPercentage(
      params: Params$Resource$Publishers$Items$Setpublisheddeploypercentage,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SetPublishedDeployPercentageResponse>,
      callback: BodyResponseCallback<Schema$SetPublishedDeployPercentageResponse>
    ): void;
    setPublishedDeployPercentage(
      params: Params$Resource$Publishers$Items$Setpublisheddeploypercentage,
      callback: BodyResponseCallback<Schema$SetPublishedDeployPercentageResponse>
    ): void;
    setPublishedDeployPercentage(
      callback: BodyResponseCallback<Schema$SetPublishedDeployPercentageResponse>
    ): void;
    setPublishedDeployPercentage(
      paramsOrCallback?:
        | Params$Resource$Publishers$Items$Setpublisheddeploypercentage
        | BodyResponseCallback<Schema$SetPublishedDeployPercentageResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SetPublishedDeployPercentageResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SetPublishedDeployPercentageResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$SetPublishedDeployPercentageResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Publishers$Items$Setpublisheddeploypercentage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Publishers$Items$Setpublisheddeploypercentage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://chromewebstore.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}:setPublishedDeployPercentage').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SetPublishedDeployPercentageResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SetPublishedDeployPercentageResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Publishers$Items$Cancelsubmission
    extends StandardParameters {
    /**
     * Required. Name of the item to cancel the submission of in the form `publishers/{publisherId\}/items/{itemId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelSubmissionRequest;
  }
  export interface Params$Resource$Publishers$Items$Fetchstatus
    extends StandardParameters {
    /**
     * Required. Name of the item to retrieve the status of in the form `publishers/{publisherId\}/items/{itemId\}`
     */
    name?: string;
  }
  export interface Params$Resource$Publishers$Items$Publish
    extends StandardParameters {
    /**
     * Required. Name of the item in the form `publishers/{publisherId\}/items/{itemId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PublishItemRequest;
  }
  export interface Params$Resource$Publishers$Items$Setpublisheddeploypercentage
    extends StandardParameters {
    /**
     * Required. Name of the item to update the published revision of in the form `publishers/{publisherId\}/items/{itemId\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetPublishedDeployPercentageRequest;
  }
}
