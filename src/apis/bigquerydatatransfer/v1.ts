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

export namespace bigquerydatatransfer_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
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
   * BigQuery Data Transfer API
   *
   * Schedule queries or transfer external data from SaaS applications to Google BigQuery on a regular basis.
   *
   * @example
   * const {google} = require('googleapis');
   * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
   *
   * @namespace bigquerydatatransfer
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Bigquerydatatransfer
   */
  export class Bigquerydatatransfer {
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
   * A request to determine whether the user has valid credentials. This method is used to limit the number of OAuth popups in the user interface. The user id is inferred from the API call context. If the data source has the Google+ authorization type, this method returns false, as it cannot be determined whether the credentials are already valid merely based on the user id.
   */
  export interface Schema$CheckValidCredsRequest {}
  /**
   * A response indicating whether the credentials exist and are valid.
   */
  export interface Schema$CheckValidCredsResponse {
    /**
     * If set to `true`, the credentials exist and are valid.
     */
    hasValidCreds?: boolean | null;
  }
  /**
   * Represents data source metadata. Metadata is sufficient to render UI and request proper OAuth tokens.
   */
  export interface Schema$DataSource {
    /**
     * Indicates the type of authorization.
     */
    authorizationType?: string | null;
    /**
     * Data source client id which should be used to receive refresh token.
     */
    clientId?: string | null;
    /**
     * Specifies whether the data source supports automatic data refresh for the past few days, and how it&#39;s supported. For some data sources, data might not be complete until a few days later, so it&#39;s useful to refresh data automatically.
     */
    dataRefreshType?: string | null;
    /**
     * Data source id.
     */
    dataSourceId?: string | null;
    /**
     * Default data refresh window on days. Only meaningful when `data_refresh_type` = `SLIDING_WINDOW`.
     */
    defaultDataRefreshWindowDays?: number | null;
    /**
     * Default data transfer schedule. Examples of valid schedules include: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`.
     */
    defaultSchedule?: string | null;
    /**
     * User friendly data source description string.
     */
    description?: string | null;
    /**
     * User friendly data source name.
     */
    displayName?: string | null;
    /**
     * Url for the help document for this data source.
     */
    helpUrl?: string | null;
    /**
     * Disables backfilling and manual run scheduling for the data source.
     */
    manualRunsDisabled?: boolean | null;
    /**
     * The minimum interval for scheduler to schedule runs.
     */
    minimumScheduleInterval?: string | null;
    /**
     * Output only. Data source resource name.
     */
    name?: string | null;
    /**
     * Data source parameters.
     */
    parameters?: Schema$DataSourceParameter[];
    /**
     * Api auth scopes for which refresh token needs to be obtained. These are scopes needed by a data source to prepare data and ingest them into BigQuery, e.g., https://www.googleapis.com/auth/bigquery
     */
    scopes?: string[] | null;
    /**
     * Specifies whether the data source supports a user defined schedule, or operates on the default schedule. When set to `true`, user can override default schedule.
     */
    supportsCustomSchedule?: boolean | null;
    /**
     * Deprecated. This field has no effect.
     */
    supportsMultipleTransfers?: boolean | null;
    /**
     * Deprecated. This field has no effect.
     */
    transferType?: string | null;
    /**
     * The number of seconds to wait for an update from the data source before the Data Transfer Service marks the transfer as FAILED.
     */
    updateDeadlineSeconds?: number | null;
  }
  /**
   * Represents a data source parameter with validation rules, so that parameters can be rendered in the UI. These parameters are given to us by supported data sources, and include all needed information for rendering and validation. Thus, whoever uses this api can decide to generate either generic ui, or custom data source specific forms.
   */
  export interface Schema$DataSourceParameter {
    /**
     * All possible values for the parameter.
     */
    allowedValues?: string[] | null;
    /**
     * If true, it should not be used in new transfers, and it should not be visible to users.
     */
    deprecated?: boolean | null;
    /**
     * Parameter description.
     */
    description?: string | null;
    /**
     * Parameter display name in the user interface.
     */
    displayName?: string | null;
    /**
     * Deprecated. This field has no effect.
     */
    fields?: Schema$DataSourceParameter[];
    /**
     * Cannot be changed after initial creation.
     */
    immutable?: boolean | null;
    /**
     * For integer and double values specifies maxminum allowed value.
     */
    maxValue?: number | null;
    /**
     * For integer and double values specifies minimum allowed value.
     */
    minValue?: number | null;
    /**
     * Parameter identifier.
     */
    paramId?: string | null;
    /**
     * Deprecated. This field has no effect.
     */
    recurse?: boolean | null;
    /**
     * Deprecated. This field has no effect.
     */
    repeated?: boolean | null;
    /**
     * Is parameter required.
     */
    required?: boolean | null;
    /**
     * Parameter type.
     */
    type?: string | null;
    /**
     * Description of the requirements for this field, in case the user input does not fulfill the regex pattern or min/max values.
     */
    validationDescription?: string | null;
    /**
     * URL to a help document to further explain the naming requirements.
     */
    validationHelpUrl?: string | null;
    /**
     * Regular expression which can be used for parameter validation.
     */
    validationRegex?: string | null;
  }
  /**
   * Represents preferences for sending email notifications for transfer run events.
   */
  export interface Schema$EmailPreferences {
    /**
     * If true, email notifications will be sent on transfer run failures.
     */
    enableFailureEmail?: boolean | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Returns list of supported data sources and their metadata.
   */
  export interface Schema$ListDataSourcesResponse {
    /**
     * List of supported data sources and their transfer settings.
     */
    dataSources?: Schema$DataSource[];
    /**
     * Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListDataSourcesRequest.page_token` to request the next page of list results.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * The returned list of pipelines in the project.
   */
  export interface Schema$ListTransferConfigsResponse {
    /**
     * Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListTransferConfigsRequest.page_token` to request the next page of list results.
     */
    nextPageToken?: string | null;
    /**
     * Output only. The stored pipeline transfer configurations.
     */
    transferConfigs?: Schema$TransferConfig[];
  }
  /**
   * The returned list transfer run messages.
   */
  export interface Schema$ListTransferLogsResponse {
    /**
     * Output only. The next-pagination token. For multiple-page list results, this token can be used as the `GetTransferRunLogRequest.page_token` to request the next page of list results.
     */
    nextPageToken?: string | null;
    /**
     * Output only. The stored pipeline transfer messages.
     */
    transferMessages?: Schema$TransferMessage[];
  }
  /**
   * The returned list of pipelines in the project.
   */
  export interface Schema$ListTransferRunsResponse {
    /**
     * Output only. The next-pagination token. For multiple-page list results, this token can be used as the `ListTransferRunsRequest.page_token` to request the next page of list results.
     */
    nextPageToken?: string | null;
    /**
     * Output only. The stored pipeline transfer runs.
     */
    transferRuns?: Schema$TransferRun[];
  }
  /**
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, &quot;Tokyo&quot;.
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example      {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string | null;
  }
  /**
   * Options customizing the data transfer schedule.
   */
  export interface Schema$ScheduleOptions {
    /**
     * If true, automatic scheduling of data transfer runs for this configuration will be disabled. The runs can be started on ad-hoc basis using StartManualTransferRuns API. When automatic scheduling is disabled, the TransferConfig.schedule field will be ignored.
     */
    disableAutoScheduling?: boolean | null;
    /**
     * Defines time to stop scheduling transfer runs. A transfer run cannot be scheduled at or after the end time. The end time can be changed at any moment. The time when a data transfer can be trigerred manually is not limited by this option.
     */
    endTime?: string | null;
    /**
     * Specifies time to start scheduling transfer runs. The first run will be scheduled at or after the start time according to a recurrence pattern defined in the schedule string. The start time can be changed at any moment. The time when a data transfer can be trigerred manually is not limited by this option.
     */
    startTime?: string | null;
  }
  /**
   * A request to schedule transfer runs for a time range.
   */
  export interface Schema$ScheduleTransferRunsRequest {
    /**
     * Required. End time of the range of transfer runs. For example, `&quot;2017-05-30T00:00:00+00:00&quot;`.
     */
    endTime?: string | null;
    /**
     * Required. Start time of the range of transfer runs. For example, `&quot;2017-05-25T00:00:00+00:00&quot;`.
     */
    startTime?: string | null;
  }
  /**
   * A response to schedule transfer runs for a time range.
   */
  export interface Schema$ScheduleTransferRunsResponse {
    /**
     * The transfer runs that were scheduled.
     */
    runs?: Schema$TransferRun[];
  }
  /**
   * A request to start manual transfer runs.
   */
  export interface Schema$StartManualTransferRunsRequest {
    /**
     * Specific run_time for a transfer run to be started. The requested_run_time must not be in the future.
     */
    requestedRunTime?: string | null;
    /**
     * Time range for the transfer runs that should be started.
     */
    requestedTimeRange?: Schema$TimeRange;
  }
  /**
   * A response to start manual transfer runs.
   */
  export interface Schema$StartManualTransferRunsResponse {
    /**
     * The transfer runs that were created.
     */
    runs?: Schema$TransferRun[];
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
   * A specification for a time range, this will request transfer runs with run_time between start_time (inclusive) and end_time (exclusive).
   */
  export interface Schema$TimeRange {
    /**
     * End time of the range of transfer runs. For example, `&quot;2017-05-30T00:00:00+00:00&quot;`. The end_time must not be in the future. Creates transfer runs where run_time is in the range between start_time (inclusive) and end_time (exclusive).
     */
    endTime?: string | null;
    /**
     * Start time of the range of transfer runs. For example, `&quot;2017-05-25T00:00:00+00:00&quot;`. The start_time must be strictly less than the end_time. Creates transfer runs where run_time is in the range between start_time (inclusive) and end_time (exclusive).
     */
    startTime?: string | null;
  }
  /**
   * Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.
   */
  export interface Schema$TransferConfig {
    /**
     * The number of days to look back to automatically refresh the data. For example, if `data_refresh_window_days = 10`, then every day BigQuery reingests data for [today-10, today-1], rather than ingesting data for just [today-1]. Only valid if the data source supports the feature. Set the value to  0 to use the default value.
     */
    dataRefreshWindowDays?: number | null;
    /**
     * Output only. Region in which BigQuery dataset is located.
     */
    datasetRegion?: string | null;
    /**
     * Data source id. Cannot be changed once data transfer is created.
     */
    dataSourceId?: string | null;
    /**
     * The BigQuery target dataset id.
     */
    destinationDatasetId?: string | null;
    /**
     * Is this config disabled. When set to true, no runs are scheduled for a given transfer.
     */
    disabled?: boolean | null;
    /**
     * User specified display name for the data transfer.
     */
    displayName?: string | null;
    /**
     * Email notifications will be sent according to these preferences to the email address of the user who owns this transfer config.
     */
    emailPreferences?: Schema$EmailPreferences;
    /**
     * The resource name of the transfer config. Transfer config names have the form of `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. The name is automatically generated based on the config_id specified in CreateTransferConfigRequest along with project_id and region. If config_id is not provided, usually a uuid, even though it is not guaranteed or required, will be generated for config_id.
     */
    name?: string | null;
    /**
     * Output only. Next time when data transfer will run.
     */
    nextRunTime?: string | null;
    /**
     * Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish.
     */
    notificationPubsubTopic?: string | null;
    /**
     * Data transfer specific parameters.
     */
    params?: {[key: string]: any} | null;
    /**
     * Data transfer schedule. If the data source does not support a custom schedule, this should be empty. If it is empty, the default value for the data source will be used. The specified times are in UTC. Examples of valid format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and `first sunday of quarter 00:00`. See more explanation about the format here: https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format NOTE: the granularity should be at least 8 hours, or less frequent.
     */
    schedule?: string | null;
    /**
     * Options customizing the data transfer schedule.
     */
    scheduleOptions?: Schema$ScheduleOptions;
    /**
     * Output only. State of the most recently updated transfer run.
     */
    state?: string | null;
    /**
     * Output only. Data transfer modification time. Ignored by server on input.
     */
    updateTime?: string | null;
    /**
     * Deprecated. Unique ID of the user on whose behalf transfer is done.
     */
    userId?: string | null;
  }
  /**
   * Represents a user facing message for a particular data transfer run.
   */
  export interface Schema$TransferMessage {
    /**
     * Message text.
     */
    messageText?: string | null;
    /**
     * Time when message was logged.
     */
    messageTime?: string | null;
    /**
     * Message severity.
     */
    severity?: string | null;
  }
  /**
   * Represents a data transfer run.
   */
  export interface Schema$TransferRun {
    /**
     * Output only. Data source id.
     */
    dataSourceId?: string | null;
    /**
     * Output only. The BigQuery target dataset id.
     */
    destinationDatasetId?: string | null;
    /**
     * Output only. Email notifications will be sent according to these preferences to the email address of the user who owns the transfer config this run was derived from.
     */
    emailPreferences?: Schema$EmailPreferences;
    /**
     * Output only. Time when transfer run ended. Parameter ignored by server for input requests.
     */
    endTime?: string | null;
    /**
     * Status of the transfer run.
     */
    errorStatus?: Schema$Status;
    /**
     * The resource name of the transfer run. Transfer run names have the form `projects/{project_id}/locations/{location}/transferConfigs/{config_id}/runs/{run_id}`. The name is ignored when creating a transfer run.
     */
    name?: string | null;
    /**
     * Output only. Pub/Sub topic where a notification will be sent after this transfer run finishes
     */
    notificationPubsubTopic?: string | null;
    /**
     * Output only. Data transfer specific parameters.
     */
    params?: {[key: string]: any} | null;
    /**
     * For batch transfer runs, specifies the date and time of the data should be ingested.
     */
    runTime?: string | null;
    /**
     * Output only. Describes the schedule of this transfer run if it was created as part of a regular schedule. For batch transfer runs that are scheduled manually, this is empty. NOTE: the system might choose to delay the schedule depending on the current load, so `schedule_time` doesn&#39;t always match this.
     */
    schedule?: string | null;
    /**
     * Minimum time after which a transfer run can be started.
     */
    scheduleTime?: string | null;
    /**
     * Output only. Time when transfer run was started. Parameter ignored by server for input requests.
     */
    startTime?: string | null;
    /**
     * Data transfer run state. Ignored for input requests.
     */
    state?: string | null;
    /**
     * Output only. Last time the data transfer run state was updated.
     */
    updateTime?: string | null;
    /**
     * Deprecated. Unique ID of the user on whose behalf transfer is done.
     */
    userId?: string | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    dataSources: Resource$Projects$Datasources;
    locations: Resource$Projects$Locations;
    transferConfigs: Resource$Projects$Transferconfigs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataSources = new Resource$Projects$Datasources(this.context);
      this.locations = new Resource$Projects$Locations(this.context);
      this.transferConfigs = new Resource$Projects$Transferconfigs(
        this.context
      );
    }
  }

  export class Resource$Projects$Datasources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigquerydatatransfer.projects.dataSources.checkValidCreds
     * @desc Returns true if valid credentials exist for the given data source and requesting user. Some data sources doesn't support service account, so we need to talk to them on behalf of the end user. This API just checks whether we have OAuth token for the particular user, which is a pre-requisite before user can create a transfer config.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.dataSources.checkValidCreds({
     *     // Required. The data source in the form:
     *     // `projects/{project_id}/dataSources/{data_source_id}` or
     *     // `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.
     *     name: 'projects/my-project/dataSources/my-dataSource',
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
     *   //   "hasValidCreds": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.dataSources.checkValidCreds
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The data source in the form: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.
     * @param {().CheckValidCredsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    checkValidCreds(
      params: Params$Resource$Projects$Datasources$Checkvalidcreds,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    checkValidCreds(
      params?: Params$Resource$Projects$Datasources$Checkvalidcreds,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CheckValidCredsResponse>;
    checkValidCreds(
      params: Params$Resource$Projects$Datasources$Checkvalidcreds,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    checkValidCreds(
      params: Params$Resource$Projects$Datasources$Checkvalidcreds,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckValidCredsResponse>,
      callback: BodyResponseCallback<Schema$CheckValidCredsResponse>
    ): void;
    checkValidCreds(
      params: Params$Resource$Projects$Datasources$Checkvalidcreds,
      callback: BodyResponseCallback<Schema$CheckValidCredsResponse>
    ): void;
    checkValidCreds(
      callback: BodyResponseCallback<Schema$CheckValidCredsResponse>
    ): void;
    checkValidCreds(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasources$Checkvalidcreds
        | BodyResponseCallback<Schema$CheckValidCredsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckValidCredsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckValidCredsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CheckValidCredsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasources$Checkvalidcreds;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasources$Checkvalidcreds;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:checkValidCreds').replace(
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
        createAPIRequest<Schema$CheckValidCredsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$CheckValidCredsResponse>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.dataSources.get
     * @desc Retrieves a supported data source and returns its settings, which can be used for UI rendering.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.dataSources.get({
     *     // Required. The field will contain name of the resource requested, for example:
     *     // `projects/{project_id}/dataSources/{data_source_id}` or
     *     // `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`
     *     name: 'projects/my-project/dataSources/my-dataSource',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authorizationType": "my_authorizationType",
     *   //   "clientId": "my_clientId",
     *   //   "dataRefreshType": "my_dataRefreshType",
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "defaultDataRefreshWindowDays": 0,
     *   //   "defaultSchedule": "my_defaultSchedule",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "helpUrl": "my_helpUrl",
     *   //   "manualRunsDisabled": false,
     *   //   "minimumScheduleInterval": "my_minimumScheduleInterval",
     *   //   "name": "my_name",
     *   //   "parameters": [],
     *   //   "scopes": [],
     *   //   "supportsCustomSchedule": false,
     *   //   "supportsMultipleTransfers": false,
     *   //   "transferType": "my_transferType",
     *   //   "updateDeadlineSeconds": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.dataSources.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The field will contain name of the resource requested, for example: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Datasources$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Datasources$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DataSource>;
    get(
      params: Params$Resource$Projects$Datasources$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Datasources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(
      params: Params$Resource$Projects$Datasources$Get,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(callback: BodyResponseCallback<Schema$DataSource>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasources$Get
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DataSource> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
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
        createAPIRequest<Schema$DataSource>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.dataSources.list
     * @desc Lists supported data sources and returns their settings, which can be used for UI rendering.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.dataSources.list({
     *     // Page size. The default page size is the maximum value of 1000 results.
     *     pageSize: 'placeholder-value',
     *     // Pagination token, which can be used to request a specific page
     *     // of `ListDataSourcesRequest` list results. For multiple-page
     *     // results, `ListDataSourcesResponse` outputs
     *     // a `next_page` token, which can be used as the
     *     // `page_token` value to request the next page of list results.
     *     pageToken: 'placeholder-value',
     *     // Required. The BigQuery project id for which data sources should be returned.
     *     // Must be in the form: `projects/{project_id}` or
     *     // `projects/{project_id}/locations/{location_id}
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSources": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.dataSources.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent Required. The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Datasources$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Datasources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDataSourcesResponse>;
    list(
      params: Params$Resource$Projects$Datasources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Datasources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataSourcesResponse>,
      callback: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Datasources$List,
      callback: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDataSourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Datasources$List
        | BodyResponseCallback<Schema$ListDataSourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDataSourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDataSourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDataSourcesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Datasources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Datasources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dataSources').replace(
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
        createAPIRequest<Schema$ListDataSourcesResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListDataSourcesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Datasources$Checkvalidcreds
    extends StandardParameters {
    /**
     * Required. The data source in the form: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CheckValidCredsRequest;
  }
  export interface Params$Resource$Projects$Datasources$Get
    extends StandardParameters {
    /**
     * Required. The field will contain name of the resource requested, for example: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Datasources$List
    extends StandardParameters {
    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * Required. The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    dataSources: Resource$Projects$Locations$Datasources;
    transferConfigs: Resource$Projects$Locations$Transferconfigs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataSources = new Resource$Projects$Locations$Datasources(
        this.context
      );
      this.transferConfigs = new Resource$Projects$Locations$Transferconfigs(
        this.context
      );
    }

    /**
     * bigquerydatatransfer.projects.locations.get
     * @desc Gets information about a location.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.locations.get({
     *     // Resource name for the location.
     *     name: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "labels": {},
     *   //   "locationId": "my_locationId",
     *   //   "metadata": {},
     *   //   "name": "my_name"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name for the location.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$Location>
    ): void;
    get(callback: BodyResponseCallback<Schema$Location>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Location> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
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
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.locations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The resource that owns the locations collection, if applicable.
     *     name: 'projects/my-project',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "locations": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.locations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The resource that owns the locations collection, if applicable.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListLocationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
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
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
    /**
     * The standard list filter.
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
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

  export class Resource$Projects$Locations$Datasources {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigquerydatatransfer.projects.locations.dataSources.checkValidCreds
     * @desc Returns true if valid credentials exist for the given data source and requesting user. Some data sources doesn't support service account, so we need to talk to them on behalf of the end user. This API just checks whether we have OAuth token for the particular user, which is a pre-requisite before user can create a transfer config.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.locations.dataSources.checkValidCreds(
     *     {
     *       // Required. The data source in the form:
     *       // `projects/{project_id}/dataSources/{data_source_id}` or
     *       // `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.
     *       name:
     *         'projects/my-project/locations/my-location/dataSources/my-dataSource',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "hasValidCreds": false
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.locations.dataSources.checkValidCreds
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The data source in the form: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.
     * @param {().CheckValidCredsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    checkValidCreds(
      params: Params$Resource$Projects$Locations$Datasources$Checkvalidcreds,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    checkValidCreds(
      params?: Params$Resource$Projects$Locations$Datasources$Checkvalidcreds,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CheckValidCredsResponse>;
    checkValidCreds(
      params: Params$Resource$Projects$Locations$Datasources$Checkvalidcreds,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    checkValidCreds(
      params: Params$Resource$Projects$Locations$Datasources$Checkvalidcreds,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckValidCredsResponse>,
      callback: BodyResponseCallback<Schema$CheckValidCredsResponse>
    ): void;
    checkValidCreds(
      params: Params$Resource$Projects$Locations$Datasources$Checkvalidcreds,
      callback: BodyResponseCallback<Schema$CheckValidCredsResponse>
    ): void;
    checkValidCreds(
      callback: BodyResponseCallback<Schema$CheckValidCredsResponse>
    ): void;
    checkValidCreds(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasources$Checkvalidcreds
        | BodyResponseCallback<Schema$CheckValidCredsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckValidCredsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckValidCredsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CheckValidCredsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasources$Checkvalidcreds;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasources$Checkvalidcreds;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:checkValidCreds').replace(
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
        createAPIRequest<Schema$CheckValidCredsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$CheckValidCredsResponse>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.dataSources.get
     * @desc Retrieves a supported data source and returns its settings, which can be used for UI rendering.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.locations.dataSources.get({
     *     // Required. The field will contain name of the resource requested, for example:
     *     // `projects/{project_id}/dataSources/{data_source_id}` or
     *     // `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`
     *     name: 'projects/my-project/locations/my-location/dataSources/my-dataSource',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authorizationType": "my_authorizationType",
     *   //   "clientId": "my_clientId",
     *   //   "dataRefreshType": "my_dataRefreshType",
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "defaultDataRefreshWindowDays": 0,
     *   //   "defaultSchedule": "my_defaultSchedule",
     *   //   "description": "my_description",
     *   //   "displayName": "my_displayName",
     *   //   "helpUrl": "my_helpUrl",
     *   //   "manualRunsDisabled": false,
     *   //   "minimumScheduleInterval": "my_minimumScheduleInterval",
     *   //   "name": "my_name",
     *   //   "parameters": [],
     *   //   "scopes": [],
     *   //   "supportsCustomSchedule": false,
     *   //   "supportsMultipleTransfers": false,
     *   //   "transferType": "my_transferType",
     *   //   "updateDeadlineSeconds": 0
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.locations.dataSources.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The field will contain name of the resource requested, for example: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Locations$Datasources$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Datasources$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DataSource>;
    get(
      params: Params$Resource$Projects$Locations$Datasources$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Datasources$Get,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(callback: BodyResponseCallback<Schema$DataSource>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasources$Get
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DataSource>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DataSource> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
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
        createAPIRequest<Schema$DataSource>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.dataSources.list
     * @desc Lists supported data sources and returns their settings, which can be used for UI rendering.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.locations.dataSources.list({
     *     // Page size. The default page size is the maximum value of 1000 results.
     *     pageSize: 'placeholder-value',
     *     // Pagination token, which can be used to request a specific page
     *     // of `ListDataSourcesRequest` list results. For multiple-page
     *     // results, `ListDataSourcesResponse` outputs
     *     // a `next_page` token, which can be used as the
     *     // `page_token` value to request the next page of list results.
     *     pageToken: 'placeholder-value',
     *     // Required. The BigQuery project id for which data sources should be returned.
     *     // Must be in the form: `projects/{project_id}` or
     *     // `projects/{project_id}/locations/{location_id}
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSources": [],
     *   //   "nextPageToken": "my_nextPageToken"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.locations.dataSources.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent Required. The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Locations$Datasources$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Datasources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDataSourcesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Datasources$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataSourcesResponse>,
      callback: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Datasources$List,
      callback: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDataSourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Datasources$List
        | BodyResponseCallback<Schema$ListDataSourcesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDataSourcesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDataSourcesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDataSourcesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Datasources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Datasources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dataSources').replace(
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
        createAPIRequest<Schema$ListDataSourcesResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListDataSourcesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Datasources$Checkvalidcreds
    extends StandardParameters {
    /**
     * Required. The data source in the form: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CheckValidCredsRequest;
  }
  export interface Params$Resource$Projects$Locations$Datasources$Get
    extends StandardParameters {
    /**
     * Required. The field will contain name of the resource requested, for example: `projects/{project_id}/dataSources/{data_source_id}` or `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Datasources$List
    extends StandardParameters {
    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * Required. The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Transferconfigs {
    context: APIRequestContext;
    runs: Resource$Projects$Locations$Transferconfigs$Runs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.runs = new Resource$Projects$Locations$Transferconfigs$Runs(
        this.context
      );
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.create
     * @desc Creates a new data transfer configuration.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
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
     *   const res = await bigquerydatatransfer.projects.locations.transferConfigs.create(
     *     {
     *       // Optional OAuth2 authorization code to use with this transfer configuration.
     *       // This is required if new credentials are needed, as indicated by
     *       // `CheckValidCreds`.
     *       // In order to obtain authorization_code, please make a
     *       // request to
     *       // https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
     *       //
     *       // * client_id should be OAuth client_id of BigQuery DTS API for the given
     *       //   data source returned by ListDataSources method.
     *       // * data_source_scopes are the scopes returned by ListDataSources method.
     *       // * redirect_uri is an optional parameter. If not specified, then
     *       //   authorization code is posted to the opener of authorization flow window.
     *       //   Otherwise it will be sent to the redirect uri. A special value of
     *       //   urn:ietf:wg:oauth:2.0:oob means that authorization code should be
     *       //   returned in the title bar of the browser, with the page text prompting
     *       //   the user to copy the code and paste it in the application.
     *       authorizationCode: 'placeholder-value',
     *       // Required. The BigQuery project id where the transfer configuration should be created.
     *       // Must be in the format projects/{project_id}/locations/{location_id} or
     *       // projects/{project_id}. If specified location and location of the
     *       // destination bigquery dataset do not match - the request will fail.
     *       parent: 'projects/my-project/locations/my-location',
     *       // Optional service account name. If this field is set, transfer config will
     *       // be created with this service account credentials. It requires that
     *       // requesting user calling this API has permissions to act as this service
     *       // account.
     *       serviceAccountName: 'placeholder-value',
     *       // Optional version info. If users want to find a very recent access token,
     *       // that is, immediately after approving access, users have to set the
     *       // version_info claim in the token request. To obtain the version_info, users
     *       // must use the "none+gsession" response type. which be return a
     *       // version_info back in the authorization response which be be put in a JWT
     *       // claim in the token request.
     *       versionInfo: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "dataRefreshWindowDays": 0,
     *         //   "dataSourceId": "my_dataSourceId",
     *         //   "datasetRegion": "my_datasetRegion",
     *         //   "destinationDatasetId": "my_destinationDatasetId",
     *         //   "disabled": false,
     *         //   "displayName": "my_displayName",
     *         //   "emailPreferences": {},
     *         //   "name": "my_name",
     *         //   "nextRunTime": "my_nextRunTime",
     *         //   "notificationPubsubTopic": "my_notificationPubsubTopic",
     *         //   "params": {},
     *         //   "schedule": "my_schedule",
     *         //   "scheduleOptions": {},
     *         //   "state": "my_state",
     *         //   "updateTime": "my_updateTime",
     *         //   "userId": "my_userId"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataRefreshWindowDays": 0,
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "datasetRegion": "my_datasetRegion",
     *   //   "destinationDatasetId": "my_destinationDatasetId",
     *   //   "disabled": false,
     *   //   "displayName": "my_displayName",
     *   //   "emailPreferences": {},
     *   //   "name": "my_name",
     *   //   "nextRunTime": "my_nextRunTime",
     *   //   "notificationPubsubTopic": "my_notificationPubsubTopic",
     *   //   "params": {},
     *   //   "schedule": "my_schedule",
     *   //   "scheduleOptions": {},
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. This is required if new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
     * @param {string} params.parent Required. The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} or projects/{project_id}. If specified location and location of the destination bigquery dataset do not match - the request will fail.
     * @param {string=} params.serviceAccountName Optional service account name. If this field is set, transfer config will be created with this service account credentials. It requires that requesting user calling this API has permissions to act as this service account.
     * @param {string=} params.versionInfo Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the "none+gsession" response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
     * @param {().TransferConfig} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Projects$Locations$Transferconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferConfig>;
    create(
      params: Params$Resource$Projects$Locations$Transferconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Transferconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$TransferConfig>,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Transferconfigs$Create,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    create(callback: BodyResponseCallback<Schema$TransferConfig>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Create
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransferConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferConfigs').replace(
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
        createAPIRequest<Schema$TransferConfig>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$TransferConfig>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.delete
     * @desc Deletes a data transfer configuration, including any associated transfer runs and logs.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.locations.transferConfigs.delete(
     *     {
     *       // Required. The field will contain name of the resource requested, for example:
     *       // `projects/{project_id}/transferConfigs/{config_id}` or
     *       // `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     *       name:
     *         'projects/my-project/locations/my-location/transferConfigs/my-transferConfig',
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
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Projects$Locations$Transferconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Transferconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Transferconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Transferconfigs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Delete
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
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.get
     * @desc Returns information about a data transfer config.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.locations.transferConfigs.get(
     *     {
     *       // Required. The field will contain name of the resource requested, for example:
     *       // `projects/{project_id}/transferConfigs/{config_id}` or
     *       // `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     *       name:
     *         'projects/my-project/locations/my-location/transferConfigs/my-transferConfig',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataRefreshWindowDays": 0,
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "datasetRegion": "my_datasetRegion",
     *   //   "destinationDatasetId": "my_destinationDatasetId",
     *   //   "disabled": false,
     *   //   "displayName": "my_displayName",
     *   //   "emailPreferences": {},
     *   //   "name": "my_name",
     *   //   "nextRunTime": "my_nextRunTime",
     *   //   "notificationPubsubTopic": "my_notificationPubsubTopic",
     *   //   "params": {},
     *   //   "schedule": "my_schedule",
     *   //   "scheduleOptions": {},
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Locations$Transferconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferConfig>;
    get(
      params: Params$Resource$Projects$Locations$Transferconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Transferconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TransferConfig>,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Transferconfigs$Get,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$TransferConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Get
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransferConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
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
        createAPIRequest<Schema$TransferConfig>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$TransferConfig>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.list
     * @desc Returns information about all data transfers in the project.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.locations.transferConfigs.list(
     *     {
     *       // When specified, only configurations of requested data sources are returned.
     *       dataSourceIds: 'placeholder-value',
     *       // Page size. The default page size is the maximum value of 1000 results.
     *       pageSize: 'placeholder-value',
     *       // Pagination token, which can be used to request a specific page
     *       // of `ListTransfersRequest` list results. For multiple-page
     *       // results, `ListTransfersResponse` outputs
     *       // a `next_page` token, which can be used as the
     *       // `page_token` value to request the next page of list results.
     *       pageToken: 'placeholder-value',
     *       // Required. The BigQuery project id for which data sources
     *       // should be returned: `projects/{project_id}` or
     *       // `projects/{project_id}/locations/{location_id}`
     *       parent: 'projects/my-project/locations/my-location',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "transferConfigs": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.dataSourceIds When specified, only configurations of requested data sources are returned.
     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent Required. The BigQuery project id for which data sources should be returned: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Transferconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTransferConfigsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListTransferConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$List,
      callback: BodyResponseCallback<Schema$ListTransferConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListTransferConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$List
        | BodyResponseCallback<Schema$ListTransferConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTransferConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTransferConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTransferConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferConfigs').replace(
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
        createAPIRequest<Schema$ListTransferConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListTransferConfigsResponse>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.patch
     * @desc Updates a data transfer configuration. All fields must be set, even if they are not updated.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
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
     *   const res = await bigquerydatatransfer.projects.locations.transferConfigs.patch(
     *     {
     *       // Optional OAuth2 authorization code to use with this transfer configuration.
     *       // If it is provided, the transfer configuration will be associated with the
     *       // authorizing user.
     *       // In order to obtain authorization_code, please make a
     *       // request to
     *       // https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
     *       //
     *       // * client_id should be OAuth client_id of BigQuery DTS API for the given
     *       //   data source returned by ListDataSources method.
     *       // * data_source_scopes are the scopes returned by ListDataSources method.
     *       // * redirect_uri is an optional parameter. If not specified, then
     *       //   authorization code is posted to the opener of authorization flow window.
     *       //   Otherwise it will be sent to the redirect uri. A special value of
     *       //   urn:ietf:wg:oauth:2.0:oob means that authorization code should be
     *       //   returned in the title bar of the browser, with the page text prompting
     *       //   the user to copy the code and paste it in the application.
     *       authorizationCode: 'placeholder-value',
     *       // The resource name of the transfer config.
     *       // Transfer config names have the form of
     *       // `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`.
     *       // The name is automatically generated based on the config_id specified in
     *       // CreateTransferConfigRequest along with project_id and region. If config_id
     *       // is not provided, usually a uuid, even though it is not guaranteed or
     *       // required, will be generated for config_id.
     *       name:
     *         'projects/my-project/locations/my-location/transferConfigs/my-transferConfig',
     *       // Optional service account name. If this field is set and
     *       // "service_account_name" is set in update_mask, transfer config will be
     *       // updated to use this service account credentials. It requires that
     *       // requesting user calling this API has permissions to act as this service
     *       // account.
     *       serviceAccountName: 'placeholder-value',
     *       // Required. Required list of fields to be updated in this request.
     *       updateMask: 'placeholder-value',
     *       // Optional version info. If users want to find a very recent access token,
     *       // that is, immediately after approving access, users have to set the
     *       // version_info claim in the token request. To obtain the version_info, users
     *       // must use the "none+gsession" response type. which be return a
     *       // version_info back in the authorization response which be be put in a JWT
     *       // claim in the token request.
     *       versionInfo: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "dataRefreshWindowDays": 0,
     *         //   "dataSourceId": "my_dataSourceId",
     *         //   "datasetRegion": "my_datasetRegion",
     *         //   "destinationDatasetId": "my_destinationDatasetId",
     *         //   "disabled": false,
     *         //   "displayName": "my_displayName",
     *         //   "emailPreferences": {},
     *         //   "name": "my_name",
     *         //   "nextRunTime": "my_nextRunTime",
     *         //   "notificationPubsubTopic": "my_notificationPubsubTopic",
     *         //   "params": {},
     *         //   "schedule": "my_schedule",
     *         //   "scheduleOptions": {},
     *         //   "state": "my_state",
     *         //   "updateTime": "my_updateTime",
     *         //   "userId": "my_userId"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataRefreshWindowDays": 0,
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "datasetRegion": "my_datasetRegion",
     *   //   "destinationDatasetId": "my_destinationDatasetId",
     *   //   "disabled": false,
     *   //   "displayName": "my_displayName",
     *   //   "emailPreferences": {},
     *   //   "name": "my_name",
     *   //   "nextRunTime": "my_nextRunTime",
     *   //   "notificationPubsubTopic": "my_notificationPubsubTopic",
     *   //   "params": {},
     *   //   "schedule": "my_schedule",
     *   //   "scheduleOptions": {},
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
     * @param {string} params.name The resource name of the transfer config. Transfer config names have the form of `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. The name is automatically generated based on the config_id specified in CreateTransferConfigRequest along with project_id and region. If config_id is not provided, usually a uuid, even though it is not guaranteed or required, will be generated for config_id.
     * @param {string=} params.serviceAccountName Optional service account name. If this field is set and "service_account_name" is set in update_mask, transfer config will be updated to use this service account credentials. It requires that requesting user calling this API has permissions to act as this service account.
     * @param {string=} params.updateMask Required. Required list of fields to be updated in this request.
     * @param {string=} params.versionInfo Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the "none+gsession" response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
     * @param {().TransferConfig} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params: Params$Resource$Projects$Locations$Transferconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferConfig>;
    patch(
      params: Params$Resource$Projects$Locations$Transferconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Transferconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$TransferConfig>,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Transferconfigs$Patch,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    patch(callback: BodyResponseCallback<Schema$TransferConfig>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Patch
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransferConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
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
        createAPIRequest<Schema$TransferConfig>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$TransferConfig>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.scheduleRuns
     * @desc Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.locations.transferConfigs.scheduleRuns(
     *     {
     *       // Required. Transfer configuration name in the form:
     *       // `projects/{project_id}/transferConfigs/{config_id}` or
     *       // `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/transferConfigs/my-transferConfig',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "endTime": "my_endTime",
     *         //   "startTime": "my_startTime"
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "runs": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.scheduleRuns
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     * @param {().ScheduleTransferRunsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    scheduleRuns(
      params: Params$Resource$Projects$Locations$Transferconfigs$Scheduleruns,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    scheduleRuns(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Scheduleruns,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ScheduleTransferRunsResponse>;
    scheduleRuns(
      params: Params$Resource$Projects$Locations$Transferconfigs$Scheduleruns,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    scheduleRuns(
      params: Params$Resource$Projects$Locations$Transferconfigs$Scheduleruns,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ScheduleTransferRunsResponse>,
      callback: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
    ): void;
    scheduleRuns(
      params: Params$Resource$Projects$Locations$Transferconfigs$Scheduleruns,
      callback: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
    ): void;
    scheduleRuns(
      callback: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
    ): void;
    scheduleRuns(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Scheduleruns
        | BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ScheduleTransferRunsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Scheduleruns;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Scheduleruns;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:scheduleRuns').replace(
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
        createAPIRequest<Schema$ScheduleTransferRunsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ScheduleTransferRunsResponse>(
          parameters
        );
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.startManualRuns
     * @desc Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.locations.transferConfigs.startManualRuns(
     *     {
     *       // Transfer configuration name in the form:
     *       // `projects/{project_id}/transferConfigs/{config_id}` or
     *       // `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/transferConfigs/my-transferConfig',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "requestedRunTime": "my_requestedRunTime",
     *         //   "requestedTimeRange": {}
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "runs": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.startManualRuns
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     * @param {().StartManualTransferRunsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    startManualRuns(
      params: Params$Resource$Projects$Locations$Transferconfigs$Startmanualruns,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    startManualRuns(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Startmanualruns,
      options?: MethodOptions
    ): GaxiosPromise<Schema$StartManualTransferRunsResponse>;
    startManualRuns(
      params: Params$Resource$Projects$Locations$Transferconfigs$Startmanualruns,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    startManualRuns(
      params: Params$Resource$Projects$Locations$Transferconfigs$Startmanualruns,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$StartManualTransferRunsResponse>,
      callback: BodyResponseCallback<Schema$StartManualTransferRunsResponse>
    ): void;
    startManualRuns(
      params: Params$Resource$Projects$Locations$Transferconfigs$Startmanualruns,
      callback: BodyResponseCallback<Schema$StartManualTransferRunsResponse>
    ): void;
    startManualRuns(
      callback: BodyResponseCallback<Schema$StartManualTransferRunsResponse>
    ): void;
    startManualRuns(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Startmanualruns
        | BodyResponseCallback<Schema$StartManualTransferRunsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StartManualTransferRunsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StartManualTransferRunsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$StartManualTransferRunsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Startmanualruns;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Startmanualruns;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:startManualRuns').replace(
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
        createAPIRequest<Schema$StartManualTransferRunsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$StartManualTransferRunsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Transferconfigs$Create
    extends StandardParameters {
    /**
     * Optional OAuth2 authorization code to use with this transfer configuration. This is required if new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
     */
    authorizationCode?: string;
    /**
     * Required. The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} or projects/{project_id}. If specified location and location of the destination bigquery dataset do not match - the request will fail.
     */
    parent?: string;
    /**
     * Optional service account name. If this field is set, transfer config will be created with this service account credentials. It requires that requesting user calling this API has permissions to act as this service account.
     */
    serviceAccountName?: string;
    /**
     * Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the "none+gsession" response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
     */
    versionInfo?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TransferConfig;
  }
  export interface Params$Resource$Projects$Locations$Transferconfigs$Delete
    extends StandardParameters {
    /**
     * Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Transferconfigs$Get
    extends StandardParameters {
    /**
     * Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Transferconfigs$List
    extends StandardParameters {
    /**
     * When specified, only configurations of requested data sources are returned.
     */
    dataSourceIds?: string[];
    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * Required. The BigQuery project id for which data sources should be returned: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Transferconfigs$Patch
    extends StandardParameters {
    /**
     * Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
     */
    authorizationCode?: string;
    /**
     * The resource name of the transfer config. Transfer config names have the form of `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. The name is automatically generated based on the config_id specified in CreateTransferConfigRequest along with project_id and region. If config_id is not provided, usually a uuid, even though it is not guaranteed or required, will be generated for config_id.
     */
    name?: string;
    /**
     * Optional service account name. If this field is set and "service_account_name" is set in update_mask, transfer config will be updated to use this service account credentials. It requires that requesting user calling this API has permissions to act as this service account.
     */
    serviceAccountName?: string;
    /**
     * Required. Required list of fields to be updated in this request.
     */
    updateMask?: string;
    /**
     * Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the "none+gsession" response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
     */
    versionInfo?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TransferConfig;
  }
  export interface Params$Resource$Projects$Locations$Transferconfigs$Scheduleruns
    extends StandardParameters {
    /**
     * Required. Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ScheduleTransferRunsRequest;
  }
  export interface Params$Resource$Projects$Locations$Transferconfigs$Startmanualruns
    extends StandardParameters {
    /**
     * Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartManualTransferRunsRequest;
  }

  export class Resource$Projects$Locations$Transferconfigs$Runs {
    context: APIRequestContext;
    transferLogs: Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.transferLogs = new Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs(
        this.context
      );
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.runs.delete
     * @desc Deletes the specified transfer run.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.locations.transferConfigs.runs.delete(
     *     {
     *       // Required. The field will contain name of the resource requested, for example:
     *       // `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or
     *       // `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     *       name:
     *         'projects/my-project/locations/my-location/transferConfigs/my-transferConfig/runs/my-run',
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
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Runs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Runs$Delete
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
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Runs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Runs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.runs.get
     * @desc Returns information about the particular transfer run.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.locations.transferConfigs.runs.get(
     *     {
     *       // Required. The field will contain name of the resource requested, for example:
     *       // `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or
     *       // `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     *       name:
     *         'projects/my-project/locations/my-location/transferConfigs/my-transferConfig/runs/my-run',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "destinationDatasetId": "my_destinationDatasetId",
     *   //   "emailPreferences": {},
     *   //   "endTime": "my_endTime",
     *   //   "errorStatus": {},
     *   //   "name": "my_name",
     *   //   "notificationPubsubTopic": "my_notificationPubsubTopic",
     *   //   "params": {},
     *   //   "runTime": "my_runTime",
     *   //   "schedule": "my_schedule",
     *   //   "scheduleTime": "my_scheduleTime",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Runs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferRun>;
    get(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TransferRun>,
      callback: BodyResponseCallback<Schema$TransferRun>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Get,
      callback: BodyResponseCallback<Schema$TransferRun>
    ): void;
    get(callback: BodyResponseCallback<Schema$TransferRun>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Runs$Get
        | BodyResponseCallback<Schema$TransferRun>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransferRun>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransferRun>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransferRun> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Runs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Runs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
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
        createAPIRequest<Schema$TransferRun>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$TransferRun>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.runs.list
     * @desc Returns information about running and completed jobs.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.locations.transferConfigs.runs.list(
     *     {
     *       // Page size. The default page size is the maximum value of 1000 results.
     *       pageSize: 'placeholder-value',
     *       // Pagination token, which can be used to request a specific page
     *       // of `ListTransferRunsRequest` list results. For multiple-page
     *       // results, `ListTransferRunsResponse` outputs
     *       // a `next_page` token, which can be used as the
     *       // `page_token` value to request the next page of list results.
     *       pageToken: 'placeholder-value',
     *       // Required. Name of transfer configuration for which transfer runs should be retrieved.
     *       // Format of transfer configuration resource name is:
     *       // `projects/{project_id}/transferConfigs/{config_id}` or
     *       // `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     *       parent:
     *         'projects/my-project/locations/my-location/transferConfigs/my-transferConfig',
     *       // Indicates how run attempts are to be pulled.
     *       runAttempt: 'placeholder-value',
     *       // When specified, only transfer runs with requested states are returned.
     *       states: 'placeholder-value',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "transferRuns": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent Required. Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     * @param {string=} params.runAttempt Indicates how run attempts are to be pulled.
     * @param {string=} params.states When specified, only transfer runs with requested states are returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Runs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTransferRunsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferRunsResponse>,
      callback: BodyResponseCallback<Schema$ListTransferRunsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$List,
      callback: BodyResponseCallback<Schema$ListTransferRunsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTransferRunsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Runs$List
        | BodyResponseCallback<Schema$ListTransferRunsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTransferRunsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTransferRunsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTransferRunsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Runs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Runs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/runs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListTransferRunsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListTransferRunsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Transferconfigs$Runs$Delete
    extends StandardParameters {
    /**
     * Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Transferconfigs$Runs$Get
    extends StandardParameters {
    /**
     * Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Transferconfigs$Runs$List
    extends StandardParameters {
    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * Required. Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     */
    parent?: string;
    /**
     * Indicates how run attempts are to be pulled.
     */
    runAttempt?: string;
    /**
     * When specified, only transfer runs with requested states are returned.
     */
    states?: string[];
  }

  export class Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigquerydatatransfer.projects.locations.transferConfigs.runs.transferLogs.list
     * @desc Returns user facing log messages for the data transfer run.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.locations.transferConfigs.runs.transferLogs.list(
     *     {
     *       // Message types to return. If not populated - INFO, WARNING and ERROR
     *       // messages are returned.
     *       messageTypes: 'placeholder-value',
     *       // Page size. The default page size is the maximum value of 1000 results.
     *       pageSize: 'placeholder-value',
     *       // Pagination token, which can be used to request a specific page
     *       // of `ListTransferLogsRequest` list results. For multiple-page
     *       // results, `ListTransferLogsResponse` outputs
     *       // a `next_page` token, which can be used as the
     *       // `page_token` value to request the next page of list results.
     *       pageToken: 'placeholder-value',
     *       // Required. Transfer run name in the form:
     *       // `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or
     *       // `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     *       parent:
     *         'projects/my-project/locations/my-location/transferConfigs/my-transferConfig/runs/my-run',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "transferMessages": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.transferLogs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.messageTypes Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent Required. Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTransferLogsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferLogsResponse>,
      callback: BodyResponseCallback<Schema$ListTransferLogsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs$List,
      callback: BodyResponseCallback<Schema$ListTransferLogsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTransferLogsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs$List
        | BodyResponseCallback<Schema$ListTransferLogsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTransferLogsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTransferLogsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTransferLogsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferLogs').replace(
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
        createAPIRequest<Schema$ListTransferLogsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListTransferLogsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs$List
    extends StandardParameters {
    /**
     * Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
     */
    messageTypes?: string[];
    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * Required. Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     */
    parent?: string;
  }

  export class Resource$Projects$Transferconfigs {
    context: APIRequestContext;
    runs: Resource$Projects$Transferconfigs$Runs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.runs = new Resource$Projects$Transferconfigs$Runs(this.context);
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.create
     * @desc Creates a new data transfer configuration.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
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
     *   const res = await bigquerydatatransfer.projects.transferConfigs.create({
     *     // Optional OAuth2 authorization code to use with this transfer configuration.
     *     // This is required if new credentials are needed, as indicated by
     *     // `CheckValidCreds`.
     *     // In order to obtain authorization_code, please make a
     *     // request to
     *     // https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
     *     //
     *     // * client_id should be OAuth client_id of BigQuery DTS API for the given
     *     //   data source returned by ListDataSources method.
     *     // * data_source_scopes are the scopes returned by ListDataSources method.
     *     // * redirect_uri is an optional parameter. If not specified, then
     *     //   authorization code is posted to the opener of authorization flow window.
     *     //   Otherwise it will be sent to the redirect uri. A special value of
     *     //   urn:ietf:wg:oauth:2.0:oob means that authorization code should be
     *     //   returned in the title bar of the browser, with the page text prompting
     *     //   the user to copy the code and paste it in the application.
     *     authorizationCode: 'placeholder-value',
     *     // Required. The BigQuery project id where the transfer configuration should be created.
     *     // Must be in the format projects/{project_id}/locations/{location_id} or
     *     // projects/{project_id}. If specified location and location of the
     *     // destination bigquery dataset do not match - the request will fail.
     *     parent: 'projects/my-project',
     *     // Optional service account name. If this field is set, transfer config will
     *     // be created with this service account credentials. It requires that
     *     // requesting user calling this API has permissions to act as this service
     *     // account.
     *     serviceAccountName: 'placeholder-value',
     *     // Optional version info. If users want to find a very recent access token,
     *     // that is, immediately after approving access, users have to set the
     *     // version_info claim in the token request. To obtain the version_info, users
     *     // must use the "none+gsession" response type. which be return a
     *     // version_info back in the authorization response which be be put in a JWT
     *     // claim in the token request.
     *     versionInfo: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataRefreshWindowDays": 0,
     *       //   "dataSourceId": "my_dataSourceId",
     *       //   "datasetRegion": "my_datasetRegion",
     *       //   "destinationDatasetId": "my_destinationDatasetId",
     *       //   "disabled": false,
     *       //   "displayName": "my_displayName",
     *       //   "emailPreferences": {},
     *       //   "name": "my_name",
     *       //   "nextRunTime": "my_nextRunTime",
     *       //   "notificationPubsubTopic": "my_notificationPubsubTopic",
     *       //   "params": {},
     *       //   "schedule": "my_schedule",
     *       //   "scheduleOptions": {},
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime",
     *       //   "userId": "my_userId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataRefreshWindowDays": 0,
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "datasetRegion": "my_datasetRegion",
     *   //   "destinationDatasetId": "my_destinationDatasetId",
     *   //   "disabled": false,
     *   //   "displayName": "my_displayName",
     *   //   "emailPreferences": {},
     *   //   "name": "my_name",
     *   //   "nextRunTime": "my_nextRunTime",
     *   //   "notificationPubsubTopic": "my_notificationPubsubTopic",
     *   //   "params": {},
     *   //   "schedule": "my_schedule",
     *   //   "scheduleOptions": {},
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.transferConfigs.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. This is required if new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
     * @param {string} params.parent Required. The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} or projects/{project_id}. If specified location and location of the destination bigquery dataset do not match - the request will fail.
     * @param {string=} params.serviceAccountName Optional service account name. If this field is set, transfer config will be created with this service account credentials. It requires that requesting user calling this API has permissions to act as this service account.
     * @param {string=} params.versionInfo Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the "none+gsession" response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
     * @param {().TransferConfig} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Projects$Transferconfigs$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Transferconfigs$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferConfig>;
    create(
      params: Params$Resource$Projects$Transferconfigs$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Transferconfigs$Create,
      options: MethodOptions | BodyResponseCallback<Schema$TransferConfig>,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    create(
      params: Params$Resource$Projects$Transferconfigs$Create,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    create(callback: BodyResponseCallback<Schema$TransferConfig>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Create
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransferConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferConfigs').replace(
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
        createAPIRequest<Schema$TransferConfig>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$TransferConfig>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.delete
     * @desc Deletes a data transfer configuration, including any associated transfer runs and logs.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.transferConfigs.delete({
     *     // Required. The field will contain name of the resource requested, for example:
     *     // `projects/{project_id}/transferConfigs/{config_id}` or
     *     // `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     *     name: 'projects/my-project/transferConfigs/my-transferConfig',
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
     * @alias bigquerydatatransfer.projects.transferConfigs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Projects$Transferconfigs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Transferconfigs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Transferconfigs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Transferconfigs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Transferconfigs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Delete
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
        {}) as Params$Resource$Projects$Transferconfigs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.get
     * @desc Returns information about a data transfer config.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.transferConfigs.get({
     *     // Required. The field will contain name of the resource requested, for example:
     *     // `projects/{project_id}/transferConfigs/{config_id}` or
     *     // `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     *     name: 'projects/my-project/transferConfigs/my-transferConfig',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataRefreshWindowDays": 0,
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "datasetRegion": "my_datasetRegion",
     *   //   "destinationDatasetId": "my_destinationDatasetId",
     *   //   "disabled": false,
     *   //   "displayName": "my_displayName",
     *   //   "emailPreferences": {},
     *   //   "name": "my_name",
     *   //   "nextRunTime": "my_nextRunTime",
     *   //   "notificationPubsubTopic": "my_notificationPubsubTopic",
     *   //   "params": {},
     *   //   "schedule": "my_schedule",
     *   //   "scheduleOptions": {},
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.transferConfigs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Transferconfigs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Transferconfigs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferConfig>;
    get(
      params: Params$Resource$Projects$Transferconfigs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Transferconfigs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TransferConfig>,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Transferconfigs$Get,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$TransferConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Get
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransferConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
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
        createAPIRequest<Schema$TransferConfig>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$TransferConfig>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.list
     * @desc Returns information about all data transfers in the project.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.transferConfigs.list({
     *     // When specified, only configurations of requested data sources are returned.
     *     dataSourceIds: 'placeholder-value',
     *     // Page size. The default page size is the maximum value of 1000 results.
     *     pageSize: 'placeholder-value',
     *     // Pagination token, which can be used to request a specific page
     *     // of `ListTransfersRequest` list results. For multiple-page
     *     // results, `ListTransfersResponse` outputs
     *     // a `next_page` token, which can be used as the
     *     // `page_token` value to request the next page of list results.
     *     pageToken: 'placeholder-value',
     *     // Required. The BigQuery project id for which data sources
     *     // should be returned: `projects/{project_id}` or
     *     // `projects/{project_id}/locations/{location_id}`
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "transferConfigs": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.transferConfigs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.dataSourceIds When specified, only configurations of requested data sources are returned.
     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent Required. The BigQuery project id for which data sources should be returned: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Transferconfigs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Transferconfigs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTransferConfigsResponse>;
    list(
      params: Params$Resource$Projects$Transferconfigs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Transferconfigs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferConfigsResponse>,
      callback: BodyResponseCallback<Schema$ListTransferConfigsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Transferconfigs$List,
      callback: BodyResponseCallback<Schema$ListTransferConfigsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListTransferConfigsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$List
        | BodyResponseCallback<Schema$ListTransferConfigsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTransferConfigsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTransferConfigsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTransferConfigsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferConfigs').replace(
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
        createAPIRequest<Schema$ListTransferConfigsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListTransferConfigsResponse>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.patch
     * @desc Updates a data transfer configuration. All fields must be set, even if they are not updated.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
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
     *   const res = await bigquerydatatransfer.projects.transferConfigs.patch({
     *     // Optional OAuth2 authorization code to use with this transfer configuration.
     *     // If it is provided, the transfer configuration will be associated with the
     *     // authorizing user.
     *     // In order to obtain authorization_code, please make a
     *     // request to
     *     // https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
     *     //
     *     // * client_id should be OAuth client_id of BigQuery DTS API for the given
     *     //   data source returned by ListDataSources method.
     *     // * data_source_scopes are the scopes returned by ListDataSources method.
     *     // * redirect_uri is an optional parameter. If not specified, then
     *     //   authorization code is posted to the opener of authorization flow window.
     *     //   Otherwise it will be sent to the redirect uri. A special value of
     *     //   urn:ietf:wg:oauth:2.0:oob means that authorization code should be
     *     //   returned in the title bar of the browser, with the page text prompting
     *     //   the user to copy the code and paste it in the application.
     *     authorizationCode: 'placeholder-value',
     *     // The resource name of the transfer config.
     *     // Transfer config names have the form of
     *     // `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`.
     *     // The name is automatically generated based on the config_id specified in
     *     // CreateTransferConfigRequest along with project_id and region. If config_id
     *     // is not provided, usually a uuid, even though it is not guaranteed or
     *     // required, will be generated for config_id.
     *     name: 'projects/my-project/transferConfigs/my-transferConfig',
     *     // Optional service account name. If this field is set and
     *     // "service_account_name" is set in update_mask, transfer config will be
     *     // updated to use this service account credentials. It requires that
     *     // requesting user calling this API has permissions to act as this service
     *     // account.
     *     serviceAccountName: 'placeholder-value',
     *     // Required. Required list of fields to be updated in this request.
     *     updateMask: 'placeholder-value',
     *     // Optional version info. If users want to find a very recent access token,
     *     // that is, immediately after approving access, users have to set the
     *     // version_info claim in the token request. To obtain the version_info, users
     *     // must use the "none+gsession" response type. which be return a
     *     // version_info back in the authorization response which be be put in a JWT
     *     // claim in the token request.
     *     versionInfo: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataRefreshWindowDays": 0,
     *       //   "dataSourceId": "my_dataSourceId",
     *       //   "datasetRegion": "my_datasetRegion",
     *       //   "destinationDatasetId": "my_destinationDatasetId",
     *       //   "disabled": false,
     *       //   "displayName": "my_displayName",
     *       //   "emailPreferences": {},
     *       //   "name": "my_name",
     *       //   "nextRunTime": "my_nextRunTime",
     *       //   "notificationPubsubTopic": "my_notificationPubsubTopic",
     *       //   "params": {},
     *       //   "schedule": "my_schedule",
     *       //   "scheduleOptions": {},
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime",
     *       //   "userId": "my_userId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataRefreshWindowDays": 0,
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "datasetRegion": "my_datasetRegion",
     *   //   "destinationDatasetId": "my_destinationDatasetId",
     *   //   "disabled": false,
     *   //   "displayName": "my_displayName",
     *   //   "emailPreferences": {},
     *   //   "name": "my_name",
     *   //   "nextRunTime": "my_nextRunTime",
     *   //   "notificationPubsubTopic": "my_notificationPubsubTopic",
     *   //   "params": {},
     *   //   "schedule": "my_schedule",
     *   //   "scheduleOptions": {},
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.transferConfigs.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
     * @param {string} params.name The resource name of the transfer config. Transfer config names have the form of `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. The name is automatically generated based on the config_id specified in CreateTransferConfigRequest along with project_id and region. If config_id is not provided, usually a uuid, even though it is not guaranteed or required, will be generated for config_id.
     * @param {string=} params.serviceAccountName Optional service account name. If this field is set and "service_account_name" is set in update_mask, transfer config will be updated to use this service account credentials. It requires that requesting user calling this API has permissions to act as this service account.
     * @param {string=} params.updateMask Required. Required list of fields to be updated in this request.
     * @param {string=} params.versionInfo Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the "none+gsession" response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
     * @param {().TransferConfig} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params: Params$Resource$Projects$Transferconfigs$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Transferconfigs$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferConfig>;
    patch(
      params: Params$Resource$Projects$Transferconfigs$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Transferconfigs$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$TransferConfig>,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    patch(
      params: Params$Resource$Projects$Transferconfigs$Patch,
      callback: BodyResponseCallback<Schema$TransferConfig>
    ): void;
    patch(callback: BodyResponseCallback<Schema$TransferConfig>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Patch
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransferConfig>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransferConfig> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
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
        createAPIRequest<Schema$TransferConfig>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$TransferConfig>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.scheduleRuns
     * @desc Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.transferConfigs.scheduleRuns({
     *     // Required. Transfer configuration name in the form:
     *     // `projects/{project_id}/transferConfigs/{config_id}` or
     *     // `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     *     parent: 'projects/my-project/transferConfigs/my-transferConfig',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "endTime": "my_endTime",
     *       //   "startTime": "my_startTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "runs": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.transferConfigs.scheduleRuns
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     * @param {().ScheduleTransferRunsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    scheduleRuns(
      params: Params$Resource$Projects$Transferconfigs$Scheduleruns,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    scheduleRuns(
      params?: Params$Resource$Projects$Transferconfigs$Scheduleruns,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ScheduleTransferRunsResponse>;
    scheduleRuns(
      params: Params$Resource$Projects$Transferconfigs$Scheduleruns,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    scheduleRuns(
      params: Params$Resource$Projects$Transferconfigs$Scheduleruns,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ScheduleTransferRunsResponse>,
      callback: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
    ): void;
    scheduleRuns(
      params: Params$Resource$Projects$Transferconfigs$Scheduleruns,
      callback: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
    ): void;
    scheduleRuns(
      callback: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
    ): void;
    scheduleRuns(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Scheduleruns
        | BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ScheduleTransferRunsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ScheduleTransferRunsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Scheduleruns;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Scheduleruns;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:scheduleRuns').replace(
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
        createAPIRequest<Schema$ScheduleTransferRunsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ScheduleTransferRunsResponse>(
          parameters
        );
      }
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.startManualRuns
     * @desc Start manual transfer runs to be executed now with schedule_time equal to current time. The transfer runs can be created for a time range where the run_time is between start_time (inclusive) and end_time (exclusive), or for a specific run_time.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.transferConfigs.startManualRuns(
     *     {
     *       // Transfer configuration name in the form:
     *       // `projects/{project_id}/transferConfigs/{config_id}` or
     *       // `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     *       parent: 'projects/my-project/transferConfigs/my-transferConfig',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "requestedRunTime": "my_requestedRunTime",
     *         //   "requestedTimeRange": {}
     *         // }
     *       },
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "runs": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.transferConfigs.startManualRuns
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     * @param {().StartManualTransferRunsRequest} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    startManualRuns(
      params: Params$Resource$Projects$Transferconfigs$Startmanualruns,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    startManualRuns(
      params?: Params$Resource$Projects$Transferconfigs$Startmanualruns,
      options?: MethodOptions
    ): GaxiosPromise<Schema$StartManualTransferRunsResponse>;
    startManualRuns(
      params: Params$Resource$Projects$Transferconfigs$Startmanualruns,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    startManualRuns(
      params: Params$Resource$Projects$Transferconfigs$Startmanualruns,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$StartManualTransferRunsResponse>,
      callback: BodyResponseCallback<Schema$StartManualTransferRunsResponse>
    ): void;
    startManualRuns(
      params: Params$Resource$Projects$Transferconfigs$Startmanualruns,
      callback: BodyResponseCallback<Schema$StartManualTransferRunsResponse>
    ): void;
    startManualRuns(
      callback: BodyResponseCallback<Schema$StartManualTransferRunsResponse>
    ): void;
    startManualRuns(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Startmanualruns
        | BodyResponseCallback<Schema$StartManualTransferRunsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StartManualTransferRunsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StartManualTransferRunsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$StartManualTransferRunsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Startmanualruns;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Startmanualruns;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:startManualRuns').replace(
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
        createAPIRequest<Schema$StartManualTransferRunsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$StartManualTransferRunsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Transferconfigs$Create
    extends StandardParameters {
    /**
     * Optional OAuth2 authorization code to use with this transfer configuration. This is required if new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
     */
    authorizationCode?: string;
    /**
     * Required. The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} or projects/{project_id}. If specified location and location of the destination bigquery dataset do not match - the request will fail.
     */
    parent?: string;
    /**
     * Optional service account name. If this field is set, transfer config will be created with this service account credentials. It requires that requesting user calling this API has permissions to act as this service account.
     */
    serviceAccountName?: string;
    /**
     * Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the "none+gsession" response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
     */
    versionInfo?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TransferConfig;
  }
  export interface Params$Resource$Projects$Transferconfigs$Delete
    extends StandardParameters {
    /**
     * Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Transferconfigs$Get
    extends StandardParameters {
    /**
     * Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Transferconfigs$List
    extends StandardParameters {
    /**
     * When specified, only configurations of requested data sources are returned.
     */
    dataSourceIds?: string[];
    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * Required. The BigQuery project id for which data sources should be returned: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Transferconfigs$Patch
    extends StandardParameters {
    /**
     * Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
     */
    authorizationCode?: string;
    /**
     * The resource name of the transfer config. Transfer config names have the form of `projects/{project_id}/locations/{region}/transferConfigs/{config_id}`. The name is automatically generated based on the config_id specified in CreateTransferConfigRequest along with project_id and region. If config_id is not provided, usually a uuid, even though it is not guaranteed or required, will be generated for config_id.
     */
    name?: string;
    /**
     * Optional service account name. If this field is set and "service_account_name" is set in update_mask, transfer config will be updated to use this service account credentials. It requires that requesting user calling this API has permissions to act as this service account.
     */
    serviceAccountName?: string;
    /**
     * Required. Required list of fields to be updated in this request.
     */
    updateMask?: string;
    /**
     * Optional version info. If users want to find a very recent access token, that is, immediately after approving access, users have to set the version_info claim in the token request. To obtain the version_info, users must use the "none+gsession" response type. which be return a version_info back in the authorization response which be be put in a JWT claim in the token request.
     */
    versionInfo?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TransferConfig;
  }
  export interface Params$Resource$Projects$Transferconfigs$Scheduleruns
    extends StandardParameters {
    /**
     * Required. Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ScheduleTransferRunsRequest;
  }
  export interface Params$Resource$Projects$Transferconfigs$Startmanualruns
    extends StandardParameters {
    /**
     * Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StartManualTransferRunsRequest;
  }

  export class Resource$Projects$Transferconfigs$Runs {
    context: APIRequestContext;
    transferLogs: Resource$Projects$Transferconfigs$Runs$Transferlogs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.transferLogs = new Resource$Projects$Transferconfigs$Runs$Transferlogs(
        this.context
      );
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.runs.delete
     * @desc Deletes the specified transfer run.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.transferConfigs.runs.delete({
     *     // Required. The field will contain name of the resource requested, for example:
     *     // `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or
     *     // `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     *     name: 'projects/my-project/transferConfigs/my-transferConfig/runs/my-run',
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
     * @alias bigquerydatatransfer.projects.transferConfigs.runs.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Projects$Transferconfigs$Runs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Transferconfigs$Runs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Transferconfigs$Runs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Transferconfigs$Runs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Transferconfigs$Runs$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Runs$Delete
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
        {}) as Params$Resource$Projects$Transferconfigs$Runs$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Runs$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.runs.get
     * @desc Returns information about the particular transfer run.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.transferConfigs.runs.get({
     *     // Required. The field will contain name of the resource requested, for example:
     *     // `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or
     *     // `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     *     name: 'projects/my-project/transferConfigs/my-transferConfig/runs/my-run',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSourceId": "my_dataSourceId",
     *   //   "destinationDatasetId": "my_destinationDatasetId",
     *   //   "emailPreferences": {},
     *   //   "endTime": "my_endTime",
     *   //   "errorStatus": {},
     *   //   "name": "my_name",
     *   //   "notificationPubsubTopic": "my_notificationPubsubTopic",
     *   //   "params": {},
     *   //   "runTime": "my_runTime",
     *   //   "schedule": "my_schedule",
     *   //   "scheduleTime": "my_scheduleTime",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "updateTime": "my_updateTime",
     *   //   "userId": "my_userId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.transferConfigs.runs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params: Params$Resource$Projects$Transferconfigs$Runs$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Transferconfigs$Runs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TransferRun>;
    get(
      params: Params$Resource$Projects$Transferconfigs$Runs$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Transferconfigs$Runs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$TransferRun>,
      callback: BodyResponseCallback<Schema$TransferRun>
    ): void;
    get(
      params: Params$Resource$Projects$Transferconfigs$Runs$Get,
      callback: BodyResponseCallback<Schema$TransferRun>
    ): void;
    get(callback: BodyResponseCallback<Schema$TransferRun>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Runs$Get
        | BodyResponseCallback<Schema$TransferRun>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TransferRun>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TransferRun>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TransferRun> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Runs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Runs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
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
        createAPIRequest<Schema$TransferRun>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$TransferRun>(parameters);
      }
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.runs.list
     * @desc Returns information about running and completed jobs.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.transferConfigs.runs.list({
     *     // Page size. The default page size is the maximum value of 1000 results.
     *     pageSize: 'placeholder-value',
     *     // Pagination token, which can be used to request a specific page
     *     // of `ListTransferRunsRequest` list results. For multiple-page
     *     // results, `ListTransferRunsResponse` outputs
     *     // a `next_page` token, which can be used as the
     *     // `page_token` value to request the next page of list results.
     *     pageToken: 'placeholder-value',
     *     // Required. Name of transfer configuration for which transfer runs should be retrieved.
     *     // Format of transfer configuration resource name is:
     *     // `projects/{project_id}/transferConfigs/{config_id}` or
     *     // `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     *     parent: 'projects/my-project/transferConfigs/my-transferConfig',
     *     // Indicates how run attempts are to be pulled.
     *     runAttempt: 'placeholder-value',
     *     // When specified, only transfer runs with requested states are returned.
     *     states: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "transferRuns": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.transferConfigs.runs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent Required. Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     * @param {string=} params.runAttempt Indicates how run attempts are to be pulled.
     * @param {string=} params.states When specified, only transfer runs with requested states are returned.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Transferconfigs$Runs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Transferconfigs$Runs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTransferRunsResponse>;
    list(
      params: Params$Resource$Projects$Transferconfigs$Runs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Transferconfigs$Runs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferRunsResponse>,
      callback: BodyResponseCallback<Schema$ListTransferRunsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Transferconfigs$Runs$List,
      callback: BodyResponseCallback<Schema$ListTransferRunsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTransferRunsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Runs$List
        | BodyResponseCallback<Schema$ListTransferRunsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTransferRunsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTransferRunsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTransferRunsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Runs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Runs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/runs').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListTransferRunsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListTransferRunsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Transferconfigs$Runs$Delete
    extends StandardParameters {
    /**
     * Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Transferconfigs$Runs$Get
    extends StandardParameters {
    /**
     * Required. The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Transferconfigs$Runs$List
    extends StandardParameters {
    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * Required. Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
     */
    parent?: string;
    /**
     * Indicates how run attempts are to be pulled.
     */
    runAttempt?: string;
    /**
     * When specified, only transfer runs with requested states are returned.
     */
    states?: string[];
  }

  export class Resource$Projects$Transferconfigs$Runs$Transferlogs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list
     * @desc Returns user facing log messages for the data transfer run.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/bigquerydatatransfer.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/bigquery',
     *       'https://www.googleapis.com/auth/bigquery.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *       'https://www.googleapis.com/auth/cloud-platform.read-only',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await bigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list(
     *     {
     *       // Message types to return. If not populated - INFO, WARNING and ERROR
     *       // messages are returned.
     *       messageTypes: 'placeholder-value',
     *       // Page size. The default page size is the maximum value of 1000 results.
     *       pageSize: 'placeholder-value',
     *       // Pagination token, which can be used to request a specific page
     *       // of `ListTransferLogsRequest` list results. For multiple-page
     *       // results, `ListTransferLogsResponse` outputs
     *       // a `next_page` token, which can be used as the
     *       // `page_token` value to request the next page of list results.
     *       pageToken: 'placeholder-value',
     *       // Required. Transfer run name in the form:
     *       // `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or
     *       // `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     *       parent:
     *         'projects/my-project/transferConfigs/my-transferConfig/runs/my-run',
     *     }
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "transferMessages": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias bigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.messageTypes Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
     * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
     * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent Required. Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Projects$Transferconfigs$Runs$Transferlogs$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Transferconfigs$Runs$Transferlogs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTransferLogsResponse>;
    list(
      params: Params$Resource$Projects$Transferconfigs$Runs$Transferlogs$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Transferconfigs$Runs$Transferlogs$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListTransferLogsResponse>,
      callback: BodyResponseCallback<Schema$ListTransferLogsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Transferconfigs$Runs$Transferlogs$List,
      callback: BodyResponseCallback<Schema$ListTransferLogsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTransferLogsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Transferconfigs$Runs$Transferlogs$List
        | BodyResponseCallback<Schema$ListTransferLogsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTransferLogsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTransferLogsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTransferLogsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Transferconfigs$Runs$Transferlogs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Transferconfigs$Runs$Transferlogs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferLogs').replace(
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
        createAPIRequest<Schema$ListTransferLogsResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ListTransferLogsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Transferconfigs$Runs$Transferlogs$List
    extends StandardParameters {
    /**
     * Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
     */
    messageTypes?: string[];
    /**
     * Page size. The default page size is the maximum value of 1000 results.
     */
    pageSize?: number;
    /**
     * Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     */
    pageToken?: string;
    /**
     * Required. Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` or `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     */
    parent?: string;
  }
}
