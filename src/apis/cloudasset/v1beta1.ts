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

import {GaxiosPromise} from 'gaxios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {APIRequestContext, BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace cloudasset_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
  }

  let context: APIRequestContext;

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
     * API key. Your API key identifies your project and provides you with API
     * access, quota, and reports. Required unless you provide an OAuth 2.0
     * token.
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
     * Available to use for quota purposes for server-side applications. Can be
     * any arbitrary string assigned to a user, but should not exceed 40
     * characters.
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
   * Cloud Asset API
   *
   * The cloud asset API manages the history and inventory of cloud resources.
   *
   * @example
   * const {google} = require('googleapis');
   * const cloudasset = google.cloudasset('v1beta1');
   *
   * @namespace cloudasset
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Cloudasset
   */
  export class Cloudasset {
    organizations: Resource$Organizations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      context = {_options: options || {}, google};

      this.organizations = new Resource$Organizations();
      this.projects = new Resource$Projects();
    }
  }

  /**
   * Cloud asset. This includes all Google Cloud Platform resources, Cloud IAM
   * policies, and other non-GCP assets.
   */
  export interface Schema$Asset {
    /**
     * Type of the asset. Example: &quot;google.compute.Disk&quot;.
     */
    assetType?: string;
    /**
     * Representation of the actual Cloud IAM policy set on a cloud resource.
     * For each resource, there must be at most one Cloud IAM policy set on it.
     */
    iamPolicy?: Schema$Policy;
    /**
     * The full name of the asset. For example:
     * `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.
     * See [Resource
     * Names](https://cloud.google.com/apis/design/resource_names#full_resource_name)
     * for more information.
     */
    name?: string;
    /**
     * Representation of the resource.
     */
    resource?: Schema$Resource;
  }
  /**
   * Specifies the audit configuration for a service. The configuration
   * determines which permission types are logged, and what identities, if any,
   * are exempted from logging. An AuditConfig must have one or more
   * AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a
   * specific service, the union of the two AuditConfigs is used for that
   * service: the log_types specified in each AuditConfig are enabled, and the
   * exempted_members in each AuditLogConfig are exempted.  Example Policy with
   * multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {
   * &quot;service&quot;: &quot;allServices&quot; &quot;audit_log_configs&quot;:
   * [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,
   * &quot;exempted_members&quot;: [ &quot;user:foo@gmail.com&quot; ] }, {
   * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {
   * &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ] },
   * {           &quot;service&quot;: &quot;fooservice.googleapis.com&quot;
   * &quot;audit_log_configs&quot;: [             { &quot;log_type&quot;:
   * &quot;DATA_READ&quot;,             },             { &quot;log_type&quot;:
   * &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [
   * &quot;user:bar@gmail.com&quot;               ]             }           ] }
   * ]     }  For fooservice, this policy enables DATA_READ, DATA_WRITE and
   * ADMIN_READ logging. It also exempts foo@gmail.com from DATA_READ logging,
   * and bar@gmail.com from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example,
     * `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a
     * special value that covers all services.
     */
    service?: string;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: {
   * &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;:
   * &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [
   * &quot;user:foo@gmail.com&quot;           ]         },         {
   * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This
   * enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while
   * exempting foo@gmail.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of
     * permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[];
    /**
     * The log type that this config enables.
     */
    logType?: string;
  }
  /**
   * Batch get assets history response.
   */
  export interface Schema$BatchGetAssetsHistoryResponse {
    /**
     * A list of assets with valid time windows.
     */
    assets?: Schema$TemporalAsset[];
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * Unimplemented. The condition that is associated with this binding. NOTE:
     * an unsatisfied condition will not allow user access via current binding.
     * Different bindings, including their conditions, are examined
     * independently.
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource.
     * `members` can have the following values:  * `allUsers`: A special
     * identifier that represents anyone who is    on the internet; with or
     * without a Google account.  * `allAuthenticatedUsers`: A special
     * identifier that represents anyone    who is authenticated with a Google
     * account or a service account.  * `user:{emailid}`: An email address that
     * represents a specific Google    account. For example, `alice@gmail.com` .
     * * `serviceAccount:{emailid}`: An email address that represents a service
     * account. For example, `my-other-app@appspot.gserviceaccount.com`.  *
     * `group:{emailid}`: An email address that represents a Google group. For
     * example, `admins@example.com`.   * `domain:{domain}`: A Google Apps
     * domain name that represents all the    users of that domain. For example,
     * `google.com` or `example.com`.
     */
    members?: string[];
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`,
     * `roles/editor`, or `roles/owner`.
     */
    role?: string;
  }
  /**
   * Export asset request.
   */
  export interface Schema$ExportAssetsRequest {
    /**
     * A list of asset types of which to take a snapshot for. For example:
     * &quot;google.compute.Disk&quot;. If specified, only matching assets will
     * be returned. See [Introduction to Cloud Asset
     * Inventory](https://cloud.google.com/resource-manager/docs/cloud-asset-inventory/overview)
     * for all supported asset types.
     */
    assetTypes?: string[];
    /**
     * Asset content type. If not specified, no content but the asset name will
     * be returned.
     */
    contentType?: string;
    /**
     * Required. Output configuration indicating where the results will be
     * output to. All results will be in newline delimited JSON format.
     */
    outputConfig?: Schema$OutputConfig;
    /**
     * Timestamp to take an asset snapshot. This can only be set to a timestamp
     * between 2018-10-02 UTC (inclusive) and the current time. If not
     * specified, the current time will be used. Due to delays in resource data
     * collection and indexing, there is a volatile window during which running
     * the same query may get different results.
     */
    readTime?: string;
  }
  /**
   * Represents an expression text. Example:      title: &quot;User account
   * presence&quot;     description: &quot;Determines whether the request has a
   * user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$Expr {
    /**
     * An optional description of the expression. This is a longer text which
     * describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string;
    /**
     * Textual representation of an expression in Common Expression Language
     * syntax.  The application context of the containing message determines
     * which well-known feature set of CEL is supported.
     */
    expression?: string;
    /**
     * An optional string indicating the location of the expression for error
     * reporting, e.g. a file name and a position in the file.
     */
    location?: string;
    /**
     * An optional title for the expression, i.e. a short string describing its
     * purpose. This can be used e.g. in UIs which allow to enter the
     * expression.
     */
    title?: string;
  }
  /**
   * A Cloud Storage location.
   */
  export interface Schema$GcsDestination {
    /**
     * The uri of the Cloud Storage object. It&#39;s the same uri that is used
     * by gsutil. For example: &quot;gs://bucket_name/object_name&quot;. See
     * [Viewing and Editing Object
     * Metadata](https://cloud.google.com/storage/docs/viewing-editing-metadata)
     * for more information.
     */
    uri?: string;
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
    metadata?: {[key: string]: any;};
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
    response?: {[key: string]: any;};
  }
  /**
   * Output configuration for export assets destination.
   */
  export interface Schema$OutputConfig {
    /**
     * Destination on Cloud Storage.
     */
    gcsDestination?: Schema$GcsDestination;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to
   * specify access control policies for Cloud Platform resources.   A `Policy`
   * consists of a list of `bindings`. A `binding` binds a list of `members` to
   * a `role`, where the members can be user accounts, Google groups, Google
   * domains, and service accounts. A `role` is a named list of permissions
   * defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [ {
   * &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [
   * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
   * &quot;domain:google.com&quot;,
   * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot; ] }, {
   * &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;:
   * [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML
   * Example**      bindings:     - members:       - user:mike@example.com -
   * group:admins@example.com       - domain:google.com       -
   * serviceAccount:my-other-app@appspot.gserviceaccount.com       role:
   * roles/owner     - members:       - user:sean@example.com       role:
   * roles/viewer   For a description of IAM and its features, see the [IAM
   * developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members
     * will result in an error.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help
     * prevent simultaneous updates of a policy from overwriting each other. It
     * is strongly suggested that systems make use of the `etag` in the
     * read-modify-write cycle to perform policy updates in order to avoid race
     * conditions: An `etag` is returned in the response to `getIamPolicy`, and
     * systems are expected to put that etag in the request to `setIamPolicy` to
     * ensure that their change will be applied to the same version of the
     * policy.  If no `etag` is provided in the call to `setIamPolicy`, then the
     * existing policy is overwritten blindly.
     */
    etag?: string;
    /**
     * Deprecated.
     */
    version?: number;
  }
  /**
   * Representation of a cloud resource.
   */
  export interface Schema$Resource {
    /**
     * The content of the resource, in which some sensitive fields are scrubbed
     * away and may not be present.
     */
    data?: {[key: string]: any;};
    /**
     * The URL of the discovery document containing the resource&#39;s JSON
     * schema. For example:
     * `&quot;https://www.googleapis.com/discovery/v1/apis/compute/v1/rest&quot;`.
     * It will be left unspecified for resources without a discovery-based API,
     * such as Cloud Bigtable.
     */
    discoveryDocumentUri?: string;
    /**
     * The JSON schema name listed in the discovery document. Example:
     * &quot;Project&quot;. It will be left unspecified for resources (such as
     * Cloud Bigtable) without a discovery-based API.
     */
    discoveryName?: string;
    /**
     * The full name of the immediate parent of this resource. See [Resource
     * Names](https://cloud.google.com/apis/design/resource_names#full_resource_name)
     * for more information.  For GCP assets, it is the parent resource defined
     * in the [Cloud IAM policy
     * hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy).
     * For example:
     * `&quot;//cloudresourcemanager.googleapis.com/projects/my_project_123&quot;`.
     * For third-party assets, it is up to the users to define.
     */
    parent?: string;
    /**
     * The REST URL for accessing the resource. An HTTP GET operation using this
     * URL returns the resource itself. Example:
     * `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123`.
     * It will be left unspecified for resources without a REST API.
     */
    resourceUrl?: string;
    /**
     * The API version. Example: &quot;v1&quot;.
     */
    version?: string;
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
    details?: Array<{[key: string]: any;}>;
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }
  /**
   * Temporal asset. In addition to the asset, the temporal asset includes the
   * status of the asset and valid from and to time of it.
   */
  export interface Schema$TemporalAsset {
    /**
     * Asset.
     */
    asset?: Schema$Asset;
    /**
     * If the asset is deleted or not.
     */
    deleted?: boolean;
    /**
     * The time window when the asset data and state was observed.
     */
    window?: Schema$TimeWindow;
  }
  /**
   * A time window of (start_time, end_time].
   */
  export interface Schema$TimeWindow {
    /**
     * End time of the time window (inclusive). Current timestamp if not
     * specified.
     */
    endTime?: string;
    /**
     * Start time of the time window (exclusive).
     */
    startTime?: string;
  }


  export class Resource$Organizations {
    operations: Resource$Organizations$Operations;
    constructor() {
      this.operations = new Resource$Organizations$Operations();
    }


    /**
     * cloudasset.organizations.batchGetAssetsHistory
     * @desc Batch gets the update history of assets that overlap a time window.
     * For RESOURCE content, this API outputs history with asset in both
     * non-delete or deleted status. For IAM_POLICY content, this API outputs
     * history when the asset and its attached IAM POLICY both exist. This can
     * create gaps in the output history.
     * @alias cloudasset.organizations.batchGetAssetsHistory
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.assetNames A list of the full names of the assets. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more info.  The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request.
     * @param {string=} params.contentType Required. The content type.
     * @param {string} params.parent Required. The relative name of the root asset. It can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345").
     * @param {string=} params.readTimeWindow.endTime End time of the time window (inclusive). Current timestamp if not specified.
     * @param {string=} params.readTimeWindow.startTime Start time of the time window (exclusive).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchGetAssetsHistory(
        params?: Params$Resource$Organizations$Batchgetassetshistory,
        options?: MethodOptions):
        GaxiosPromise<Schema$BatchGetAssetsHistoryResponse>;
    batchGetAssetsHistory(
        params: Params$Resource$Organizations$Batchgetassetshistory,
        options: MethodOptions|
        BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>,
        callback: BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>):
        void;
    batchGetAssetsHistory(
        params: Params$Resource$Organizations$Batchgetassetshistory,
        callback: BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>):
        void;
    batchGetAssetsHistory(
        callback: BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>):
        void;
    batchGetAssetsHistory(
        paramsOrCallback?: Params$Resource$Organizations$Batchgetassetshistory|
        BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>,
        callback?: BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>):
        void|GaxiosPromise<Schema$BatchGetAssetsHistoryResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Organizations$Batchgetassetshistory;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Batchgetassetshistory;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudasset.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}:batchGetAssetsHistory')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$BatchGetAssetsHistoryResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$BatchGetAssetsHistoryResponse>(
            parameters);
      }
    }


    /**
     * cloudasset.organizations.exportAssets
     * @desc Exports assets with time and resource types to a given Cloud
     * Storage location. The output format is newline-delimited JSON. This API
     * implements the google.longrunning.Operation API allowing you to keep
     * track of the export.
     * @alias cloudasset.organizations.exportAssets
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The relative name of the root asset. This can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345").
     * @param {().ExportAssetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    exportAssets(
        params?: Params$Resource$Organizations$Exportassets,
        options?: MethodOptions): GaxiosPromise<Schema$Operation>;
    exportAssets(
        params: Params$Resource$Organizations$Exportassets,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    exportAssets(
        params: Params$Resource$Organizations$Exportassets,
        callback: BodyResponseCallback<Schema$Operation>): void;
    exportAssets(callback: BodyResponseCallback<Schema$Operation>): void;
    exportAssets(
        paramsOrCallback?: Params$Resource$Organizations$Exportassets|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Organizations$Exportassets;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Exportassets;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudasset.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}:exportAssets')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Batchgetassetshistory extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A list of the full names of the assets. For example:
     * `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.
     * See [Resource
     * Names](https://cloud.google.com/apis/design/resource_names#full_resource_name)
     * for more info.  The request becomes a no-op if the asset name list is
     * empty, and the max size of the asset name list is 100 in one request.
     */
    assetNames?: string[];
    /**
     * Required. The content type.
     */
    contentType?: string;
    /**
     * Required. The relative name of the root asset. It can only be an
     * organization number (such as "organizations/123"), a project ID (such as
     * "projects/my-project-id")", or a project number (such as
     * "projects/12345").
     */
    parent?: string;
    /**
     * End time of the time window (inclusive). Current timestamp if not
     * specified.
     */
    'readTimeWindow.endTime'?: string;
    /**
     * Start time of the time window (exclusive).
     */
    'readTimeWindow.startTime'?: string;
  }
  export interface Params$Resource$Organizations$Exportassets extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The relative name of the root asset. This can only be an
     * organization number (such as "organizations/123"), a project ID (such as
     * "projects/my-project-id"), or a project number (such as
     * "projects/12345").
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExportAssetsRequest;
  }

  export class Resource$Organizations$Operations {
    constructor() {}


    /**
     * cloudasset.organizations.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias cloudasset.organizations.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Organizations$Operations$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Operation>;
    get(params: Params$Resource$Organizations$Operations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(params: Params$Resource$Organizations$Operations$Get,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(paramsOrCallback?: Params$Resource$Organizations$Operations$Get|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Organizations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudasset.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Operations$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }



  export class Resource$Projects {
    operations: Resource$Projects$Operations;
    constructor() {
      this.operations = new Resource$Projects$Operations();
    }


    /**
     * cloudasset.projects.batchGetAssetsHistory
     * @desc Batch gets the update history of assets that overlap a time window.
     * For RESOURCE content, this API outputs history with asset in both
     * non-delete or deleted status. For IAM_POLICY content, this API outputs
     * history when the asset and its attached IAM POLICY both exist. This can
     * create gaps in the output history.
     * @alias cloudasset.projects.batchGetAssetsHistory
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.assetNames A list of the full names of the assets. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more info.  The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request.
     * @param {string=} params.contentType Required. The content type.
     * @param {string} params.parent Required. The relative name of the root asset. It can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345").
     * @param {string=} params.readTimeWindow.endTime End time of the time window (inclusive). Current timestamp if not specified.
     * @param {string=} params.readTimeWindow.startTime Start time of the time window (exclusive).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchGetAssetsHistory(
        params?: Params$Resource$Projects$Batchgetassetshistory,
        options?: MethodOptions):
        GaxiosPromise<Schema$BatchGetAssetsHistoryResponse>;
    batchGetAssetsHistory(
        params: Params$Resource$Projects$Batchgetassetshistory,
        options: MethodOptions|
        BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>,
        callback: BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>):
        void;
    batchGetAssetsHistory(
        params: Params$Resource$Projects$Batchgetassetshistory,
        callback: BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>):
        void;
    batchGetAssetsHistory(
        callback: BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>):
        void;
    batchGetAssetsHistory(
        paramsOrCallback?: Params$Resource$Projects$Batchgetassetshistory|
        BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>,
        callback?: BodyResponseCallback<Schema$BatchGetAssetsHistoryResponse>):
        void|GaxiosPromise<Schema$BatchGetAssetsHistoryResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Batchgetassetshistory;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Batchgetassetshistory;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudasset.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}:batchGetAssetsHistory')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$BatchGetAssetsHistoryResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$BatchGetAssetsHistoryResponse>(
            parameters);
      }
    }


    /**
     * cloudasset.projects.exportAssets
     * @desc Exports assets with time and resource types to a given Cloud
     * Storage location. The output format is newline-delimited JSON. This API
     * implements the google.longrunning.Operation API allowing you to keep
     * track of the export.
     * @alias cloudasset.projects.exportAssets
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The relative name of the root asset. This can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345").
     * @param {().ExportAssetsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    exportAssets(
        params?: Params$Resource$Projects$Exportassets,
        options?: MethodOptions): GaxiosPromise<Schema$Operation>;
    exportAssets(
        params: Params$Resource$Projects$Exportassets,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    exportAssets(
        params: Params$Resource$Projects$Exportassets,
        callback: BodyResponseCallback<Schema$Operation>): void;
    exportAssets(callback: BodyResponseCallback<Schema$Operation>): void;
    exportAssets(
        paramsOrCallback?: Params$Resource$Projects$Exportassets|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|GaxiosPromise<Schema$Operation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Exportassets;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Exportassets;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudasset.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+parent}:exportAssets')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Batchgetassetshistory extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * A list of the full names of the assets. For example:
     * `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.
     * See [Resource
     * Names](https://cloud.google.com/apis/design/resource_names#full_resource_name)
     * for more info.  The request becomes a no-op if the asset name list is
     * empty, and the max size of the asset name list is 100 in one request.
     */
    assetNames?: string[];
    /**
     * Required. The content type.
     */
    contentType?: string;
    /**
     * Required. The relative name of the root asset. It can only be an
     * organization number (such as "organizations/123"), a project ID (such as
     * "projects/my-project-id")", or a project number (such as
     * "projects/12345").
     */
    parent?: string;
    /**
     * End time of the time window (inclusive). Current timestamp if not
     * specified.
     */
    'readTimeWindow.endTime'?: string;
    /**
     * Start time of the time window (exclusive).
     */
    'readTimeWindow.startTime'?: string;
  }
  export interface Params$Resource$Projects$Exportassets extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Required. The relative name of the root asset. This can only be an
     * organization number (such as "organizations/123"), a project ID (such as
     * "projects/my-project-id"), or a project number (such as
     * "projects/12345").
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ExportAssetsRequest;
  }

  export class Resource$Projects$Operations {
    constructor() {}


    /**
     * cloudasset.projects.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use
     * this method to poll the operation result at intervals as recommended by
     * the API service.
     * @alias cloudasset.projects.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Operations$Get,
        options?: MethodOptions): GaxiosPromise<Schema$Operation>;
    get(params: Params$Resource$Projects$Operations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(params: Params$Resource$Projects$Operations$Get,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Operations$Get|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|GaxiosPromise<Schema$Operation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Operations$Get;
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

      const rootUrl = options.rootUrl || 'https://cloudasset.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Operations$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the operation resource.
     */
    name?: string;
  }
}
