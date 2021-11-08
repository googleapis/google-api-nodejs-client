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

export namespace cloudsupport_v2beta {
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
   * Google Cloud Support API
   *
   * Manages Google Cloud technical support cases for Customer Care support offerings.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const cloudsupport = google.cloudsupport('v2beta');
   * ```
   */
  export class Cloudsupport {
    context: APIRequestContext;
    attachments: Resource$Attachments;
    caseClassifications: Resource$Caseclassifications;
    cases: Resource$Cases;
    media: Resource$Media;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.attachments = new Resource$Attachments(this.context);
      this.caseClassifications = new Resource$Caseclassifications(this.context);
      this.cases = new Resource$Cases(this.context);
      this.media = new Resource$Media(this.context);
    }
  }

  /**
   * An object containing information about the effective user and authenticated principal responsible for an action.
   */
  export interface Schema$Actor {
    /**
     * The name to display for the actor. If not provided, it is inferred from credentials supplied during case creation. When an email is provided, a display name must also be provided. This will be obfuscated if the user is a Google Support agent.
     */
    displayName?: string | null;
    /**
     * The email address of the actor. If not provided, it is inferred from credentials supplied during case creation. If the authenticated principal does not have an email address, one must be provided. When a name is provided, an email must also be provided. This will be obfuscated if the user is a Google Support agent.
     */
    email?: string | null;
    /**
     * Output only. Whether the actor is a Google support actor.
     */
    googleSupport?: boolean | null;
    /**
     * Output only. An ID representing the user that was authenticated when the corresponding action was taken. This will be an email address, if one is available, or some other unique ID. See https://cloud.google.com/docs/authentication for more information on types of authentication.
     */
    principalId?: string | null;
  }
  /**
   * Represents a file attached to a support case.
   */
  export interface Schema$Attachment {
    /**
     * Output only. The time at which the attachment was created.
     */
    createTime?: string | null;
    /**
     * Output only. The user who uploaded the attachment. Note, the name and email will be obfuscated if the attachment was uploaded by Google support.
     */
    creator?: Schema$Actor;
    /**
     * The filename of the attachment (e.g. `"graph.jpg"`).
     */
    filename?: string | null;
    /**
     * Output only. The MIME type of the attachment (e.g. text/plain).
     */
    mimeType?: string | null;
    /**
     * Output only. The resource name of the attachment.
     */
    name?: string | null;
    /**
     * Output only. The size of the attachment in bytes.
     */
    sizeBytes?: string | null;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$Blobstore2Info {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    blobGeneration?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    blobId?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    downloadReadHandle?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    readToken?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    uploadMetadataContainer?: string | null;
  }
  /**
   * A support case.
   */
  export interface Schema$Case {
    /**
     * The issue classification applicable to this case.
     */
    classification?: Schema$CaseClassification;
    /**
     * Output only. The time this case was created.
     */
    createTime?: string | null;
    /**
     * The user who created the case. Note: The name and email will be obfuscated if the case was created by Google Support.
     */
    creator?: Schema$Actor;
    /**
     * A broad description of the issue.
     */
    description?: string | null;
    /**
     * The short summary of the issue reported in this case.
     */
    displayName?: string | null;
    /**
     * Whether the case is currently escalated.
     */
    escalated?: boolean | null;
    /**
     * The resource name for the case.
     */
    name?: string | null;
    /**
     * The severity of this case.
     */
    severity?: string | null;
    /**
     * Output only. The current status of the support case.
     */
    state?: string | null;
    /**
     * The email addresses to receive updates on this case.
     */
    subscriberEmailAddresses?: string[] | null;
    /**
     * Whether this case was created for internal API testing and should not be acted on by the support team.
     */
    testCase?: boolean | null;
    /**
     * The timezone of the user who created the support case. It should be in a format IANA recognizes: https://www.iana.org/time-zones. There is no additional validation done by the API.
     */
    timeZone?: string | null;
    /**
     * Output only. The time this case was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * A classification object with a product type and value.
   */
  export interface Schema$CaseClassification {
    /**
     * The display name of the classification.
     */
    displayName?: string | null;
    /**
     * The unique ID for a classification. Must be specified for case creation.
     */
    id?: string | null;
  }
  /**
   * The request message for the CloseCase endpoint.
   */
  export interface Schema$CloseCaseRequest {}
  /**
   * A comment associated with a support case.
   */
  export interface Schema$Comment {
    /**
     * The full comment body. Maximum of 120000 characters. This can contain rich text syntax.
     */
    body?: string | null;
    /**
     * Output only. The time when this comment was created.
     */
    createTime?: string | null;
    /**
     * Output only. The user or Google Support agent created this comment.
     */
    creator?: Schema$Actor;
    /**
     * Output only. The resource name for the comment.
     */
    name?: string | null;
    /**
     * Output only. An automatically generated plain text version of body with all rich text syntax stripped.
     */
    plainTextBody?: string | null;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$CompositeMedia {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    blobRef?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    blobstore2Info?: Schema$Blobstore2Info;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    cosmoBinaryReference?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    crc32cHash?: number | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    inline?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    length?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    md5Hash?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectId?: Schema$ObjectId;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    path?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    referenceType?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    sha1Hash?: string | null;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$ContentTypeInfo {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    bestGuess?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    fromBytes?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    fromFileName?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    fromHeader?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    fromUrlPath?: string | null;
  }
  /**
   * The request message for the CreateAttachment endpoint.
   */
  export interface Schema$CreateAttachmentRequest {
    /**
     * Required. The attachment to be created.
     */
    attachment?: Schema$Attachment;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$DiffChecksumsResponse {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    checksumsLocation?: Schema$CompositeMedia;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    chunkSizeBytes?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectLocation?: Schema$CompositeMedia;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectSizeBytes?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectVersion?: string | null;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$DiffDownloadResponse {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectLocation?: Schema$CompositeMedia;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$DiffUploadRequest {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    checksumsInfo?: Schema$CompositeMedia;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectInfo?: Schema$CompositeMedia;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectVersion?: string | null;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$DiffUploadResponse {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectVersion?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    originalObject?: Schema$CompositeMedia;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$DiffVersionResponse {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectSizeBytes?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectVersion?: string | null;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$DownloadParameters {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    allowGzipCompression?: boolean | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    ignoreRange?: boolean | null;
  }
  /**
   * The request message for the EscalateCase endpoint.
   */
  export interface Schema$EscalateCaseRequest {
    /**
     * The escalation object to be sent with the escalation request.
     */
    escalation?: Schema$Escalation;
  }
  /**
   * An escalation of a support case.
   */
  export interface Schema$Escalation {
    /**
     * Output only. The user or Google Support agent initiated this escalation.
     */
    actor?: Schema$Actor;
    /**
     * Output only. The time when this escalation event was created.
     */
    createTime?: string | null;
    /**
     * Required. A free text description to accompany the `reason` field above. Provides additional context on why the case is being escalated.
     */
    justification?: string | null;
    /**
     * Output only. The resource name for the escalation event.
     */
    name?: string | null;
    /**
     * Required. The reason why the Case is being escalated.
     */
    reason?: string | null;
  }
  /**
   * The response message for the ListAttachments endpoint.
   */
  export interface Schema$ListAttachmentsResponse {
    /**
     * The list of attachments associated with the given case.
     */
    attachments?: Schema$Attachment[];
    /**
     * A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `cases.attachments.list` requests. If unspecified, there are no more results to retrieve.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for the ListCases endpoint.
   */
  export interface Schema$ListCasesResponse {
    /**
     * The list of cases associated with the cloud resource, after any filters have been applied.
     */
    cases?: Schema$Case[];
    /**
     * A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `ListCasesRequest` message that is issued. If unspecified, there are no more results to retrieve.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for the ListComments endpoint.
   */
  export interface Schema$ListCommentsResponse {
    /**
     * The list of Comments associated with the given Case.
     */
    comments?: Schema$Comment[];
    /**
     * A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `ListCommentsRequest` message that is issued. If unspecified, there are no more results to retrieve.
     */
    nextPageToken?: string | null;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$Media {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    algorithm?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    bigstoreObjectRef?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    blobRef?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    blobstore2Info?: Schema$Blobstore2Info;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    compositeMedia?: Schema$CompositeMedia[];
    /**
     * # gdata.* are outside protos with mising documentation
     */
    contentType?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    contentTypeInfo?: Schema$ContentTypeInfo;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    cosmoBinaryReference?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    crc32cHash?: number | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    diffChecksumsResponse?: Schema$DiffChecksumsResponse;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    diffDownloadResponse?: Schema$DiffDownloadResponse;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    diffUploadRequest?: Schema$DiffUploadRequest;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    diffUploadResponse?: Schema$DiffUploadResponse;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    diffVersionResponse?: Schema$DiffVersionResponse;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    downloadParameters?: Schema$DownloadParameters;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    filename?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    hash?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    hashVerified?: boolean | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    inline?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    isPotentialRetry?: boolean | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    length?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    md5Hash?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    mediaId?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectId?: Schema$ObjectId;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    path?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    referenceType?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    sha1Hash?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    sha256Hash?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    timestamp?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    token?: string | null;
  }
  /**
   * # gdata.* are outside protos with mising documentation
   */
  export interface Schema$ObjectId {
    /**
     * # gdata.* are outside protos with mising documentation
     */
    bucketName?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    generation?: string | null;
    /**
     * # gdata.* are outside protos with mising documentation
     */
    objectName?: string | null;
  }
  /**
   * The response message for SearchCaseClassifications endpoint.
   */
  export interface Schema$SearchCaseClassificationsResponse {
    /**
     * The classifications retrieved.
     */
    caseClassifications?: Schema$CaseClassification[];
    /**
     * A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `SearchCaseClassificationsRequest` message that is issued. If unspecified, there are no more results to retrieve.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for the SearchCases endpoint.
   */
  export interface Schema$SearchCasesResponse {
    /**
     * The list of Case associated with the cloud resource, after any filters have been applied.
     */
    cases?: Schema$Case[];
    /**
     * A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `SearchCaseRequest` message that is issued. If unspecified, there are no more results to retrieve.
     */
    nextPageToken?: string | null;
  }
  /**
   * Metadata about the operation. Used to lookup the current status.
   */
  export interface Schema$WorkflowOperationMetadata {
    /**
     * The namespace that the job was scheduled in. Must be included in the workflow metadata so the workflow status can be retrieved.
     */
    namespace?: string | null;
    /**
     * The type of action the operation is classified as.
     */
    operationAction?: string | null;
    /**
     * Which version of the workflow service this operation came from.
     */
    workflowOperationType?: string | null;
  }

  export class Resource$Attachments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a file attachment on a case or Cloud resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.attachments.create({
     *     // Required. The resource name of the case to which attachment should be attached.
     *     parent: '[^/]+/[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attachment": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "filename": "my_filename",
     *   //   "mimeType": "my_mimeType",
     *   //   "name": "my_name",
     *   //   "sizeBytes": "my_sizeBytes"
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
      params: Params$Resource$Attachments$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Attachments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Attachment>;
    create(
      params: Params$Resource$Attachments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Attachments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Attachment>,
      callback: BodyResponseCallback<Schema$Attachment>
    ): void;
    create(
      params: Params$Resource$Attachments$Create,
      callback: BodyResponseCallback<Schema$Attachment>
    ): void;
    create(callback: BodyResponseCallback<Schema$Attachment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Attachments$Create
        | BodyResponseCallback<Schema$Attachment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Attachment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Attachment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Attachment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Attachments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Attachments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/attachments').replace(
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
        createAPIRequest<Schema$Attachment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Attachment>(parameters);
      }
    }
  }

  export interface Params$Resource$Attachments$Create
    extends StandardParameters {
    /**
     * Required. The resource name of the case to which attachment should be attached.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateAttachmentRequest;
  }

  export class Resource$Caseclassifications {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieve valid classifications to be used when creating a support case. The classications are hierarchical, with each classification containing all levels of the hierarchy, separated by " \> ". For example "Technical Issue \> Compute \> Compute Engine".
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.caseClassifications.search({
     *     // The maximum number of cases fetched with each request.
     *     pageSize: 'placeholder-value',
     *     // A token identifying the page of results to return. If unspecified, the first page is retrieved.
     *     pageToken: 'placeholder-value',
     *     // An expression written in the Cloud filter language. If non-empty, then only cases whose fields match the filter are returned. If empty, then no messages are filtered out.
     *     query: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "caseClassifications": [],
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
    search(
      params: Params$Resource$Caseclassifications$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Caseclassifications$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchCaseClassificationsResponse>;
    search(
      params: Params$Resource$Caseclassifications$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Caseclassifications$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchCaseClassificationsResponse>,
      callback: BodyResponseCallback<Schema$SearchCaseClassificationsResponse>
    ): void;
    search(
      params: Params$Resource$Caseclassifications$Search,
      callback: BodyResponseCallback<Schema$SearchCaseClassificationsResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$SearchCaseClassificationsResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Caseclassifications$Search
        | BodyResponseCallback<Schema$SearchCaseClassificationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchCaseClassificationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchCaseClassificationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchCaseClassificationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Caseclassifications$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Caseclassifications$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/caseClassifications:search').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$SearchCaseClassificationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchCaseClassificationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Caseclassifications$Search
    extends StandardParameters {
    /**
     * The maximum number of cases fetched with each request.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return. If unspecified, the first page is retrieved.
     */
    pageToken?: string;
    /**
     * An expression written in the Cloud filter language. If non-empty, then only cases whose fields match the filter are returned. If empty, then no messages are filtered out.
     */
    query?: string;
  }

  export class Resource$Cases {
    context: APIRequestContext;
    attachments: Resource$Cases$Attachments;
    comments: Resource$Cases$Comments;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.attachments = new Resource$Cases$Attachments(this.context);
      this.comments = new Resource$Cases$Comments(this.context);
    }

    /**
     * Close the specified case.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.close({
     *     // Required. The fully qualified name of the case resource to be closed.
     *     name: '[^/]+/[^/]+/cases/my-case',
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
     *   // {
     *   //   "classification": {},
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "escalated": false,
     *   //   "name": "my_name",
     *   //   "severity": "my_severity",
     *   //   "state": "my_state",
     *   //   "subscriberEmailAddresses": [],
     *   //   "testCase": false,
     *   //   "timeZone": "my_timeZone",
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
    close(
      params: Params$Resource$Cases$Close,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    close(
      params?: Params$Resource$Cases$Close,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Case>;
    close(
      params: Params$Resource$Cases$Close,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    close(
      params: Params$Resource$Cases$Close,
      options: MethodOptions | BodyResponseCallback<Schema$Case>,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    close(
      params: Params$Resource$Cases$Close,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    close(callback: BodyResponseCallback<Schema$Case>): void;
    close(
      paramsOrCallback?:
        | Params$Resource$Cases$Close
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Case> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cases$Close;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Close;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}:close').replace(
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
        createAPIRequest<Schema$Case>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Case>(parameters);
      }
    }

    /**
     * Create a new case and associate it with the given Cloud resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.create({
     *     // Required. The name of the Cloud resource under which the case should be created.
     *     parent: '[^/]+/[^/]+',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "classification": {},
     *       //   "createTime": "my_createTime",
     *       //   "creator": {},
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "escalated": false,
     *       //   "name": "my_name",
     *       //   "severity": "my_severity",
     *       //   "state": "my_state",
     *       //   "subscriberEmailAddresses": [],
     *       //   "testCase": false,
     *       //   "timeZone": "my_timeZone",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "classification": {},
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "escalated": false,
     *   //   "name": "my_name",
     *   //   "severity": "my_severity",
     *   //   "state": "my_state",
     *   //   "subscriberEmailAddresses": [],
     *   //   "testCase": false,
     *   //   "timeZone": "my_timeZone",
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
    create(
      params: Params$Resource$Cases$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Cases$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Case>;
    create(
      params: Params$Resource$Cases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Cases$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Case>,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    create(
      params: Params$Resource$Cases$Create,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    create(callback: BodyResponseCallback<Schema$Case>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Cases$Create
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Case> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/cases').replace(
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
        createAPIRequest<Schema$Case>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Case>(parameters);
      }
    }

    /**
     * Escalate a case. Escalating a case will initiate the Cloud Support escalation management process. This operation is only available to certain Customer Care tiers. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which tiers are able to perform escalations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.escalate({
     *     // Required. The fully qualified name of the Case resource to be escalated.
     *     name: '[^/]+/[^/]+/cases/my-case',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "escalation": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "classification": {},
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "escalated": false,
     *   //   "name": "my_name",
     *   //   "severity": "my_severity",
     *   //   "state": "my_state",
     *   //   "subscriberEmailAddresses": [],
     *   //   "testCase": false,
     *   //   "timeZone": "my_timeZone",
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
    escalate(
      params: Params$Resource$Cases$Escalate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    escalate(
      params?: Params$Resource$Cases$Escalate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Case>;
    escalate(
      params: Params$Resource$Cases$Escalate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    escalate(
      params: Params$Resource$Cases$Escalate,
      options: MethodOptions | BodyResponseCallback<Schema$Case>,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    escalate(
      params: Params$Resource$Cases$Escalate,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    escalate(callback: BodyResponseCallback<Schema$Case>): void;
    escalate(
      paramsOrCallback?:
        | Params$Resource$Cases$Escalate
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Case> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cases$Escalate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Escalate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}:escalate').replace(
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
        createAPIRequest<Schema$Case>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Case>(parameters);
      }
    }

    /**
     * Retrieve the specified case.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.get({
     *     // Required. The fully qualified name of a case to be retrieved.
     *     name: '[^/]+/[^/]+/cases/my-case',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "classification": {},
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "escalated": false,
     *   //   "name": "my_name",
     *   //   "severity": "my_severity",
     *   //   "state": "my_state",
     *   //   "subscriberEmailAddresses": [],
     *   //   "testCase": false,
     *   //   "timeZone": "my_timeZone",
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
      params: Params$Resource$Cases$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Cases$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Case>;
    get(
      params: Params$Resource$Cases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Cases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Case>,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    get(
      params: Params$Resource$Cases$Get,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    get(callback: BodyResponseCallback<Schema$Case>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Cases$Get
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Case> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
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
        createAPIRequest<Schema$Case>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Case>(parameters);
      }
    }

    /**
     * Retrieve all cases under the specified parent.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.list({
     *     // An expression written in the Cloud filter language. If non-empty, then only cases whose fields match the filter are returned. If empty, then no messages are filtered out. Filter strings can use the following fields: - status (Accepted values: OPEN or CLOSED) - severity (Accepted values: S0, S1, S2, S3, or S4) - creator.email with the operators equals (=) and AND. Additionally, a global restriction (with no operator) can be used to search across displayName, description, and comments (e.g. "my search").
     *     filter: 'placeholder-value',
     *     // A comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant. Example: `name asc,update_time, create_time desc`
     *     orderBy: 'placeholder-value',
     *     // The maximum number of cases fetched with each request. Defaults to 10.
     *     pageSize: 'placeholder-value',
     *     // A token identifying the page of results to return. If unspecified, the first page is retrieved.
     *     pageToken: 'placeholder-value',
     *     // Required. The fully qualified name of parent resource to list cases under.
     *     parent: '[^/]+/[^/]+',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cases": [],
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
      params: Params$Resource$Cases$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Cases$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCasesResponse>;
    list(
      params: Params$Resource$Cases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Cases$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListCasesResponse>,
      callback: BodyResponseCallback<Schema$ListCasesResponse>
    ): void;
    list(
      params: Params$Resource$Cases$List,
      callback: BodyResponseCallback<Schema$ListCasesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCasesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Cases$List
        | BodyResponseCallback<Schema$ListCasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCasesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/cases').replace(
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
        createAPIRequest<Schema$ListCasesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCasesResponse>(parameters);
      }
    }

    /**
     * Update the specified case. Only a subset of fields (display_name, description, time_zone, subscriber_email_addresses, related_resources, severity, primary_contact, and labels) can be updated.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.patch({
     *     // The resource name for the case.
     *     name: '[^/]+/[^/]+/cases/my-case',
     *     // A field that represents attributes of a case object that should be updated as part of this request. Supported values are severity, display_name, and subscriber_email_addresses. If no fields are specified, all supported fields will be updated. WARNING: If you do not provide a field mask then you may accidentally clear some fields. For example, if you leave field mask empty and do not provide a value for subscriber_email_addresses then subscriber_email_addresses will be updated to empty.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "classification": {},
     *       //   "createTime": "my_createTime",
     *       //   "creator": {},
     *       //   "description": "my_description",
     *       //   "displayName": "my_displayName",
     *       //   "escalated": false,
     *       //   "name": "my_name",
     *       //   "severity": "my_severity",
     *       //   "state": "my_state",
     *       //   "subscriberEmailAddresses": [],
     *       //   "testCase": false,
     *       //   "timeZone": "my_timeZone",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "classification": {},
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "escalated": false,
     *   //   "name": "my_name",
     *   //   "severity": "my_severity",
     *   //   "state": "my_state",
     *   //   "subscriberEmailAddresses": [],
     *   //   "testCase": false,
     *   //   "timeZone": "my_timeZone",
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
      params: Params$Resource$Cases$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Cases$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Case>;
    patch(
      params: Params$Resource$Cases$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Cases$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Case>,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    patch(
      params: Params$Resource$Cases$Patch,
      callback: BodyResponseCallback<Schema$Case>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Case>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Cases$Patch
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Case>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Case> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cases$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
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
        createAPIRequest<Schema$Case>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Case>(parameters);
      }
    }

    /**
     * Search cases using the specified query.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.search({
     *     // The maximum number of cases fetched with each request. The default page size is 10.
     *     pageSize: 'placeholder-value',
     *     // A token identifying the page of results to return. If unspecified, the first page is retrieved.
     *     pageToken: 'placeholder-value',
     *     // An expression written in the Cloud filter language. Filter strings can use the following fields: - organization (A name of the form organizations/) - project (A name of the form projects/) - customer (A name of the form customers/) - state (Accepted values: OPEN or CLOSED) - severity (Accepted values: S0, S1, S2, S3, or S4) - creator.email with the operators equals (=) and AND. Additionally, a global restriction (with no key/operator) can be used to search across display_name, description, and comments (e.g. "my search"). One of organization, project, or customer field must be specified.
     *     query: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cases": [],
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
    search(
      params: Params$Resource$Cases$Search,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    search(
      params?: Params$Resource$Cases$Search,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchCasesResponse>;
    search(
      params: Params$Resource$Cases$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Cases$Search,
      options: MethodOptions | BodyResponseCallback<Schema$SearchCasesResponse>,
      callback: BodyResponseCallback<Schema$SearchCasesResponse>
    ): void;
    search(
      params: Params$Resource$Cases$Search,
      callback: BodyResponseCallback<Schema$SearchCasesResponse>
    ): void;
    search(callback: BodyResponseCallback<Schema$SearchCasesResponse>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Cases$Search
        | BodyResponseCallback<Schema$SearchCasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchCasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchCasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchCasesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Cases$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/cases:search').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$SearchCasesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchCasesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Cases$Close extends StandardParameters {
    /**
     * Required. The fully qualified name of the case resource to be closed.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CloseCaseRequest;
  }
  export interface Params$Resource$Cases$Create extends StandardParameters {
    /**
     * Required. The name of the Cloud resource under which the case should be created.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Case;
  }
  export interface Params$Resource$Cases$Escalate extends StandardParameters {
    /**
     * Required. The fully qualified name of the Case resource to be escalated.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EscalateCaseRequest;
  }
  export interface Params$Resource$Cases$Get extends StandardParameters {
    /**
     * Required. The fully qualified name of a case to be retrieved.
     */
    name?: string;
  }
  export interface Params$Resource$Cases$List extends StandardParameters {
    /**
     * An expression written in the Cloud filter language. If non-empty, then only cases whose fields match the filter are returned. If empty, then no messages are filtered out. Filter strings can use the following fields: - status (Accepted values: OPEN or CLOSED) - severity (Accepted values: S0, S1, S2, S3, or S4) - creator.email with the operators equals (=) and AND. Additionally, a global restriction (with no operator) can be used to search across displayName, description, and comments (e.g. "my search").
     */
    filter?: string;
    /**
     * A comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant. Example: `name asc,update_time, create_time desc`
     */
    orderBy?: string;
    /**
     * The maximum number of cases fetched with each request. Defaults to 10.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return. If unspecified, the first page is retrieved.
     */
    pageToken?: string;
    /**
     * Required. The fully qualified name of parent resource to list cases under.
     */
    parent?: string;
  }
  export interface Params$Resource$Cases$Patch extends StandardParameters {
    /**
     * The resource name for the case.
     */
    name?: string;
    /**
     * A field that represents attributes of a case object that should be updated as part of this request. Supported values are severity, display_name, and subscriber_email_addresses. If no fields are specified, all supported fields will be updated. WARNING: If you do not provide a field mask then you may accidentally clear some fields. For example, if you leave field mask empty and do not provide a value for subscriber_email_addresses then subscriber_email_addresses will be updated to empty.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Case;
  }
  export interface Params$Resource$Cases$Search extends StandardParameters {
    /**
     * The maximum number of cases fetched with each request. The default page size is 10.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return. If unspecified, the first page is retrieved.
     */
    pageToken?: string;
    /**
     * An expression written in the Cloud filter language. Filter strings can use the following fields: - organization (A name of the form organizations/) - project (A name of the form projects/) - customer (A name of the form customers/) - state (Accepted values: OPEN or CLOSED) - severity (Accepted values: S0, S1, S2, S3, or S4) - creator.email with the operators equals (=) and AND. Additionally, a global restriction (with no key/operator) can be used to search across display_name, description, and comments (e.g. "my search"). One of organization, project, or customer field must be specified.
     */
    query?: string;
  }

  export class Resource$Cases$Attachments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieve all attachments associated with a support case.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.attachments.list({
     *     // The maximum number of attachments fetched with each request. If not provided, the default is 10. The maximum page size that will be returned is 100.
     *     pageSize: 'placeholder-value',
     *     // A token identifying the page of results to return. If unspecified, the first page is retrieved.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of Case object for which attachments should be listed.
     *     parent: '[^/]+/[^/]+/cases/my-case',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "attachments": [],
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
      params: Params$Resource$Cases$Attachments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Cases$Attachments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAttachmentsResponse>;
    list(
      params: Params$Resource$Cases$Attachments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Cases$Attachments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAttachmentsResponse>,
      callback: BodyResponseCallback<Schema$ListAttachmentsResponse>
    ): void;
    list(
      params: Params$Resource$Cases$Attachments$List,
      callback: BodyResponseCallback<Schema$ListAttachmentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAttachmentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Cases$Attachments$List
        | BodyResponseCallback<Schema$ListAttachmentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAttachmentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAttachmentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAttachmentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Cases$Attachments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Attachments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/attachments').replace(
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
        createAPIRequest<Schema$ListAttachmentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAttachmentsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Cases$Attachments$List
    extends StandardParameters {
    /**
     * The maximum number of attachments fetched with each request. If not provided, the default is 10. The maximum page size that will be returned is 100.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return. If unspecified, the first page is retrieved.
     */
    pageToken?: string;
    /**
     * Required. The resource name of Case object for which attachments should be listed.
     */
    parent?: string;
  }

  export class Resource$Cases$Comments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Add a new comment to the specified Case.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.comments.create({
     *     // Required. The resource name of Case to which this comment should be added.
     *     parent: '[^/]+/[^/]+/cases/my-case',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "body": "my_body",
     *       //   "createTime": "my_createTime",
     *       //   "creator": {},
     *       //   "name": "my_name",
     *       //   "plainTextBody": "my_plainTextBody"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "body": "my_body",
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "name": "my_name",
     *   //   "plainTextBody": "my_plainTextBody"
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
      params: Params$Resource$Cases$Comments$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Cases$Comments$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Comment>;
    create(
      params: Params$Resource$Cases$Comments$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Cases$Comments$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    create(
      params: Params$Resource$Cases$Comments$Create,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    create(callback: BodyResponseCallback<Schema$Comment>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Cases$Comments$Create
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Comment> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Cases$Comments$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Comments$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/comments').replace(
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
        createAPIRequest<Schema$Comment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }

    /**
     * Retrieve all Comments associated with the Case object.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.cases.comments.list({
     *     // The maximum number of comments fetched with each request. Defaults to 10.
     *     pageSize: 'placeholder-value',
     *     // A token identifying the page of results to return. If unspecified, the first page is retrieved.
     *     pageToken: 'placeholder-value',
     *     // Required. The resource name of Case object for which comments should be listed.
     *     parent: '[^/]+/[^/]+/cases/my-case',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "comments": [],
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
      params: Params$Resource$Cases$Comments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Cases$Comments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListCommentsResponse>;
    list(
      params: Params$Resource$Cases$Comments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Cases$Comments$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListCommentsResponse>,
      callback: BodyResponseCallback<Schema$ListCommentsResponse>
    ): void;
    list(
      params: Params$Resource$Cases$Comments$List,
      callback: BodyResponseCallback<Schema$ListCommentsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListCommentsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Cases$Comments$List
        | BodyResponseCallback<Schema$ListCommentsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListCommentsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListCommentsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListCommentsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Cases$Comments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Cases$Comments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/comments').replace(
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
        createAPIRequest<Schema$ListCommentsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListCommentsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Cases$Comments$Create
    extends StandardParameters {
    /**
     * Required. The resource name of Case to which this comment should be added.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Comment;
  }
  export interface Params$Resource$Cases$Comments$List
    extends StandardParameters {
    /**
     * The maximum number of comments fetched with each request. Defaults to 10.
     */
    pageSize?: number;
    /**
     * A token identifying the page of results to return. If unspecified, the first page is retrieved.
     */
    pageToken?: string;
    /**
     * Required. The resource name of Case object for which comments should be listed.
     */
    parent?: string;
  }

  export class Resource$Media {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Download a file attachment on a case. Note: HTTP requests must append "?alt=media" to the URL.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.media.download({
     *     // The resource name of the attachment to be downloaded.
     *     name: '[^/]+/[^/]+/cases/my-case/attachments/my-attachment',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "algorithm": "my_algorithm",
     *   //   "bigstoreObjectRef": "my_bigstoreObjectRef",
     *   //   "blobRef": "my_blobRef",
     *   //   "blobstore2Info": {},
     *   //   "compositeMedia": [],
     *   //   "contentType": "my_contentType",
     *   //   "contentTypeInfo": {},
     *   //   "cosmoBinaryReference": "my_cosmoBinaryReference",
     *   //   "crc32cHash": 0,
     *   //   "diffChecksumsResponse": {},
     *   //   "diffDownloadResponse": {},
     *   //   "diffUploadRequest": {},
     *   //   "diffUploadResponse": {},
     *   //   "diffVersionResponse": {},
     *   //   "downloadParameters": {},
     *   //   "filename": "my_filename",
     *   //   "hash": "my_hash",
     *   //   "hashVerified": false,
     *   //   "inline": "my_inline",
     *   //   "isPotentialRetry": false,
     *   //   "length": "my_length",
     *   //   "md5Hash": "my_md5Hash",
     *   //   "mediaId": "my_mediaId",
     *   //   "objectId": {},
     *   //   "path": "my_path",
     *   //   "referenceType": "my_referenceType",
     *   //   "sha1Hash": "my_sha1Hash",
     *   //   "sha256Hash": "my_sha256Hash",
     *   //   "timestamp": "my_timestamp",
     *   //   "token": "my_token"
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
    download(
      params: Params$Resource$Media$Download,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    download(
      params?: Params$Resource$Media$Download,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Media>;
    download(
      params: Params$Resource$Media$Download,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    download(
      params: Params$Resource$Media$Download,
      options: MethodOptions | BodyResponseCallback<Schema$Media>,
      callback: BodyResponseCallback<Schema$Media>
    ): void;
    download(
      params: Params$Resource$Media$Download,
      callback: BodyResponseCallback<Schema$Media>
    ): void;
    download(callback: BodyResponseCallback<Schema$Media>): void;
    download(
      paramsOrCallback?:
        | Params$Resource$Media$Download
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Media>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Media> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback || {}) as Params$Resource$Media$Download;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Media$Download;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+name}:download').replace(
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
        createAPIRequest<Schema$Media>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Media>(parameters);
      }
    }

    /**
     * Create a file attachment on a case or Cloud resource.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudsupport.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const cloudsupport = google.cloudsupport('v2beta');
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
     *   const res = await cloudsupport.media.upload({
     *     // Required. The resource name of the case to which attachment should be attached.
     *     parent: '[^/]+/[^/]+/cases/my-case',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "attachment": {}
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
     *   //   "createTime": "my_createTime",
     *   //   "creator": {},
     *   //   "filename": "my_filename",
     *   //   "mimeType": "my_mimeType",
     *   //   "name": "my_name",
     *   //   "sizeBytes": "my_sizeBytes"
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
    ): GaxiosPromise<Readable>;
    upload(
      params?: Params$Resource$Media$Upload,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Attachment>;
    upload(
      params: Params$Resource$Media$Upload,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      options: MethodOptions | BodyResponseCallback<Schema$Attachment>,
      callback: BodyResponseCallback<Schema$Attachment>
    ): void;
    upload(
      params: Params$Resource$Media$Upload,
      callback: BodyResponseCallback<Schema$Attachment>
    ): void;
    upload(callback: BodyResponseCallback<Schema$Attachment>): void;
    upload(
      paramsOrCallback?:
        | Params$Resource$Media$Upload
        | BodyResponseCallback<Schema$Attachment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Attachment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Attachment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Attachment> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://cloudsupport.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v2beta/{+parent}/attachments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/v2beta/{+parent}/attachments').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Attachment>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Attachment>(parameters);
      }
    }
  }

  export interface Params$Resource$Media$Download extends StandardParameters {
    /**
     * The resource name of the attachment to be downloaded.
     */
    name?: string;
  }
  export interface Params$Resource$Media$Upload extends StandardParameters {
    /**
     * Required. The resource name of the case to which attachment should be attached.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateAttachmentRequest;

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
}
