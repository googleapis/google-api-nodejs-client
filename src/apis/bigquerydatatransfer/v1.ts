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

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * BigQuery Data Transfer API
 *
 * Transfers data from partner SaaS applications to Google BigQuery on a
 * scheduled, managed basis.
 *
 * @example
 * const google = require('googleapis');
 * const bigquerydatatransfer = google.bigquerydatatransfer('v1');
 *
 * @namespace bigquerydatatransfer
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Bigquerydatatransfer
 */
export class Bigquerydatatransfer {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  projects: Resource$Projects;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.projects = new Resource$Projects(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * A request to determine whether the user has valid credentials. This method is
 * used to limit the number of OAuth popups in the user interface. The user id
 * is inferred from the API call context. If the data source has the Google+
 * authorization type, this method returns false, as it cannot be determined
 * whether the credentials are already valid merely based on the user id.
 */
export interface Schema$CheckValidCredsRequest {}
/**
 * A response indicating whether the credentials exist and are valid.
 */
export interface Schema$CheckValidCredsResponse {
  /**
   * If set to `true`, the credentials exist and are valid.
   */
  hasValidCreds: boolean;
}
/**
 * Represents data source metadata. Metadata is sufficient to render UI and
 * request proper OAuth tokens.
 */
export interface Schema$DataSource {
  /**
   * Indicates the type of authorization.
   */
  authorizationType: string;
  /**
   * Data source client id which should be used to receive refresh token. When
   * not supplied, no offline credentials are populated for data transfer.
   */
  clientId: string;
  /**
   * Specifies whether the data source supports automatic data refresh for the
   * past few days, and how it&#39;s supported. For some data sources, data
   * might not be complete until a few days later, so it&#39;s useful to refresh
   * data automatically.
   */
  dataRefreshType: string;
  /**
   * Data source id.
   */
  dataSourceId: string;
  /**
   * Default data refresh window on days. Only meaningful when
   * `data_refresh_type` = `SLIDING_WINDOW`.
   */
  defaultDataRefreshWindowDays: number;
  /**
   * Default data transfer schedule. Examples of valid schedules include:
   * `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`, and
   * `first sunday of quarter 00:00`.
   */
  defaultSchedule: string;
  /**
   * User friendly data source description string.
   */
  description: string;
  /**
   * User friendly data source name.
   */
  displayName: string;
  /**
   * Url for the help document for this data source.
   */
  helpUrl: string;
  /**
   * Disables backfilling and manual run scheduling for the data source.
   */
  manualRunsDisabled: boolean;
  /**
   * The minimum interval for scheduler to schedule runs.
   */
  minimumScheduleInterval: string;
  /**
   * Output only. Data source resource name.
   */
  name: string;
  /**
   * Data source parameters.
   */
  parameters: Schema$DataSourceParameter[];
  /**
   * Api auth scopes for which refresh token needs to be obtained. Only valid
   * when `client_id` is specified. Ignored otherwise. These are scopes needed
   * by a data source to prepare data and ingest them into BigQuery, e.g.,
   * https://www.googleapis.com/auth/bigquery
   */
  scopes: string[];
  /**
   * Specifies whether the data source supports a user defined schedule, or
   * operates on the default schedule. When set to `true`, user can override
   * default schedule.
   */
  supportsCustomSchedule: boolean;
  /**
   * Indicates whether the data source supports multiple transfers to different
   * BigQuery targets.
   */
  supportsMultipleTransfers: boolean;
  /**
   * Deprecated. This field has no effect.
   */
  transferType: string;
  /**
   * The number of seconds to wait for an update from the data source before
   * BigQuery marks the transfer as failed.
   */
  updateDeadlineSeconds: number;
}
/**
 * Represents a data source parameter with validation rules, so that parameters
 * can be rendered in the UI. These parameters are given to us by supported data
 * sources, and include all needed information for rendering and validation.
 * Thus, whoever uses this api can decide to generate either generic ui, or
 * custom data source specific forms.
 */
export interface Schema$DataSourceParameter {
  /**
   * All possible values for the parameter.
   */
  allowedValues: string[];
  /**
   * Parameter description.
   */
  description: string;
  /**
   * Parameter display name in the user interface.
   */
  displayName: string;
  /**
   * When parameter is a record, describes child fields.
   */
  fields: Schema$DataSourceParameter[];
  /**
   * Cannot be changed after initial creation.
   */
  immutable: boolean;
  /**
   * For integer and double values specifies maxminum allowed value.
   */
  maxValue: number;
  /**
   * For integer and double values specifies minimum allowed value.
   */
  minValue: number;
  /**
   * Parameter identifier.
   */
  paramId: string;
  /**
   * If set to true, schema should be taken from the parent with the same
   * parameter_id. Only applicable when parameter type is RECORD.
   */
  recurse: boolean;
  /**
   * Can parameter have multiple values.
   */
  repeated: boolean;
  /**
   * Is parameter required.
   */
  required: boolean;
  /**
   * Parameter type.
   */
  type: string;
  /**
   * Description of the requirements for this field, in case the user input does
   * not fulfill the regex pattern or min/max values.
   */
  validationDescription: string;
  /**
   * URL to a help document to further explain the naming requirements.
   */
  validationHelpUrl: string;
  /**
   * Regular expression which can be used for parameter validation.
   */
  validationRegex: string;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo { rpc
 * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
 * representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$Empty {}
/**
 * Returns list of supported data sources and their metadata.
 */
export interface Schema$ListDataSourcesResponse {
  /**
   * List of supported data sources and their transfer settings.
   */
  dataSources: Schema$DataSource[];
  /**
   * Output only. The next-pagination token. For multiple-page list results,
   * this token can be used as the `ListDataSourcesRequest.page_token` to
   * request the next page of list results.
   */
  nextPageToken: string;
}
/**
 * The response message for Locations.ListLocations.
 */
export interface Schema$ListLocationsResponse {
  /**
   * A list of locations that matches the specified filter in the request.
   */
  locations: Schema$Location[];
  /**
   * The standard List next-page token.
   */
  nextPageToken: string;
}
/**
 * The returned list of pipelines in the project.
 */
export interface Schema$ListTransferConfigsResponse {
  /**
   * Output only. The next-pagination token. For multiple-page list results,
   * this token can be used as the `ListTransferConfigsRequest.page_token` to
   * request the next page of list results.
   */
  nextPageToken: string;
  /**
   * Output only. The stored pipeline transfer configurations.
   */
  transferConfigs: Schema$TransferConfig[];
}
/**
 * The returned list transfer run messages.
 */
export interface Schema$ListTransferLogsResponse {
  /**
   * Output only. The next-pagination token. For multiple-page list results,
   * this token can be used as the `GetTransferRunLogRequest.page_token` to
   * request the next page of list results.
   */
  nextPageToken: string;
  /**
   * Output only. The stored pipeline transfer messages.
   */
  transferMessages: Schema$TransferMessage[];
}
/**
 * The returned list of pipelines in the project.
 */
export interface Schema$ListTransferRunsResponse {
  /**
   * Output only. The next-pagination token. For multiple-page list results,
   * this token can be used as the `ListTransferRunsRequest.page_token` to
   * request the next page of list results.
   */
  nextPageToken: string;
  /**
   * Output only. The stored pipeline transfer runs.
   */
  transferRuns: Schema$TransferRun[];
}
/**
 * A resource that represents Google Cloud Platform location.
 */
export interface Schema$Location {
  /**
   * The friendly name for this location, typically a nearby city name. For
   * example, &quot;Tokyo&quot;.
   */
  displayName: string;
  /**
   * Cross-service attributes for the location. For example
   * {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
   */
  labels: any;
  /**
   * The canonical id for this location. For example: `&quot;us-east1&quot;`.
   */
  locationId: string;
  /**
   * Service-specific metadata. For example the available capacity at the given
   * location.
   */
  metadata: any;
  /**
   * Resource name for the location, which may vary between implementations. For
   * example: `&quot;projects/example-project/locations/us-east1&quot;`
   */
  name: string;
}
/**
 * A request to schedule transfer runs for a time range.
 */
export interface Schema$ScheduleTransferRunsRequest {
  /**
   * End time of the range of transfer runs. For example,
   * `&quot;2017-05-30T00:00:00+00:00&quot;`.
   */
  endTime: string;
  /**
   * Start time of the range of transfer runs. For example,
   * `&quot;2017-05-25T00:00:00+00:00&quot;`.
   */
  startTime: string;
}
/**
 * A response to schedule transfer runs for a time range.
 */
export interface Schema$ScheduleTransferRunsResponse {
  /**
   * The transfer runs that were scheduled.
   */
  runs: Schema$TransferRun[];
}
/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). The error model is designed to be:
 * - Simple to use and understand for most users - Flexible enough to meet
 * unexpected needs  # Overview  The `Status` message contains three pieces of
 * data: error code, error message, and error details. The error code should be
 * an enum value of google.rpc.Code, but it may accept additional error codes if
 * needed.  The error message should be a developer-facing English message that
 * helps developers *understand* and *resolve* the error. If a localized
 * user-facing error message is needed, put the localized message in the error
 * details or localize it in the client. The optional error details may contain
 * arbitrary information about the error. There is a predefined set of error
 * detail types in the package `google.rpc` that can be used for common error
 * conditions.  # Language mapping  The `Status` message is the logical
 * representation of the error model, but it is not necessarily the actual wire
 * format. When the `Status` message is exposed in different client libraries
 * and different wire protocols, it can be mapped differently. For example, it
 * will likely be mapped to some exceptions in Java, but more likely mapped to
 * some error codes in C.  # Other uses  The error model and the `Status`
 * message can be used in a variety of environments, either with or without
 * APIs, to provide a consistent developer experience across different
 * environments.  Example uses of this error model include:  - Partial errors.
 * If a service needs to return partial errors to the client,     it may embed
 * the `Status` in the normal response to indicate the partial     errors.  -
 * Workflow errors. A typical workflow has multiple steps. Each step may have a
 * `Status` message for error reporting.  - Batch operations. If a client uses
 * batch request and batch response, the     `Status` message should be used
 * directly inside batch response, one for     each error sub-response.  -
 * Asynchronous operations. If an API call embeds asynchronous operation results
 * in its response, the status of those operations should be     represented
 * directly using the `Status` message.  - Logging. If some API errors are
 * stored in logs, the message `Status` could     be used directly after any
 * stripping needed for security/privacy reasons.
 */
export interface Schema$Status {
  /**
   * The status code, which should be an enum value of google.rpc.Code.
   */
  code: number;
  /**
   * A list of messages that carry the error details.  There is a common set of
   * message types for APIs to use.
   */
  details: any[];
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * google.rpc.Status.details field, or localized by the client.
   */
  message: string;
}
/**
 * Represents a data transfer configuration. A transfer configuration contains
 * all metadata needed to perform a data transfer. For example,
 * `destination_dataset_id` specifies where data should be stored. When a new
 * transfer configuration is created, the specified `destination_dataset_id` is
 * created when needed and shared with the appropriate data source service
 * account.
 */
export interface Schema$TransferConfig {
  /**
   * The number of days to look back to automatically refresh the data. For
   * example, if `data_refresh_window_days = 10`, then every day BigQuery
   * reingests data for [today-10, today-1], rather than ingesting data for just
   * [today-1]. Only valid if the data source supports the feature. Set the
   * value to  0 to use the default value.
   */
  dataRefreshWindowDays: number;
  /**
   * Output only. Region in which BigQuery dataset is located.
   */
  datasetRegion: string;
  /**
   * Data source id. Cannot be changed once data transfer is created.
   */
  dataSourceId: string;
  /**
   * The BigQuery target dataset id.
   */
  destinationDatasetId: string;
  /**
   * Is this config disabled. When set to true, no runs are scheduled for a
   * given transfer.
   */
  disabled: boolean;
  /**
   * User specified display name for the data transfer.
   */
  displayName: string;
  /**
   * The resource name of the transfer config. Transfer config names have the
   * form `projects/{project_id}/transferConfigs/{config_id}`. Where `config_id`
   * is usually a uuid, even though it is not guaranteed or required. The name
   * is ignored when creating a transfer config.
   */
  name: string;
  /**
   * Output only. Next time when data transfer will run.
   */
  nextRunTime: string;
  /**
   * Data transfer specific parameters.
   */
  params: any;
  /**
   * Data transfer schedule. If the data source does not support a custom
   * schedule, this should be empty. If it is empty, the default value for the
   * data source will be used. The specified times are in UTC. Examples of valid
   * format: `1st,3rd monday of month 15:30`, `every wed,fri of jan,jun 13:15`,
   * and `first sunday of quarter 00:00`. See more explanation about the format
   * here:
   * https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
   * NOTE: the granularity should be at least 8 hours, or less frequent.
   */
  schedule: string;
  /**
   * Output only. State of the most recently updated transfer run.
   */
  state: string;
  /**
   * Output only. Data transfer modification time. Ignored by server on input.
   */
  updateTime: string;
  /**
   * Output only. Unique ID of the user on whose behalf transfer is done.
   * Applicable only to data sources that do not support service accounts. When
   * set to 0, the data source service account credentials are used. May be
   * negative. Note, that this identifier is not stable. It may change over time
   * even for the same user.
   */
  userId: string;
}
/**
 * Represents a user facing message for a particular data transfer run.
 */
export interface Schema$TransferMessage {
  /**
   * Message text.
   */
  messageText: string;
  /**
   * Time when message was logged.
   */
  messageTime: string;
  /**
   * Message severity.
   */
  severity: string;
}
/**
 * Represents a data transfer run.
 */
export interface Schema$TransferRun {
  /**
   * Output only. Data source id.
   */
  dataSourceId: string;
  /**
   * Output only. The BigQuery target dataset id.
   */
  destinationDatasetId: string;
  /**
   * Output only. Time when transfer run ended. Parameter ignored by server for
   * input requests.
   */
  endTime: string;
  /**
   * Status of the transfer run.
   */
  errorStatus: Schema$Status;
  /**
   * The resource name of the transfer run. Transfer run names have the form
   * `projects/{project_id}/locations/{location}/transferConfigs/{config_id}/runs/{run_id}`.
   * The name is ignored when creating a transfer run.
   */
  name: string;
  /**
   * Output only. Data transfer specific parameters.
   */
  params: any;
  /**
   * For batch transfer runs, specifies the date and time that data should be
   * ingested.
   */
  runTime: string;
  /**
   * Output only. Describes the schedule of this transfer run if it was created
   * as part of a regular schedule. For batch transfer runs that are scheduled
   * manually, this is empty. NOTE: the system might choose to delay the
   * schedule depending on the current load, so `schedule_time` doesn&#39;t
   * always matches this.
   */
  schedule: string;
  /**
   * Minimum time after which a transfer run can be started.
   */
  scheduleTime: string;
  /**
   * Output only. Time when transfer run was started. Parameter ignored by
   * server for input requests.
   */
  startTime: string;
  /**
   * Data transfer run state. Ignored for input requests.
   */
  state: string;
  /**
   * Output only. Last time the data transfer run state was updated.
   */
  updateTime: string;
  /**
   * Output only. Unique ID of the user on whose behalf transfer is done.
   * Applicable only to data sources that do not support service accounts. When
   * set to 0, the data source service account credentials are used. May be
   * negative. Note, that this identifier is not stable. It may change over time
   * even for the same user.
   */
  userId: string;
}

export class Resource$Projects {
  root: Bigquerydatatransfer;
  dataSources: Resource$Projects$Datasources;
  locations: Resource$Projects$Locations;
  transferConfigs: Resource$Projects$Transferconfigs;
  constructor(root: Bigquerydatatransfer) {
    this.root = root;
    this.getRoot.bind(this);
    this.dataSources = new Resource$Projects$Datasources(root);
    this.locations = new Resource$Projects$Locations(root);
    this.transferConfigs = new Resource$Projects$Transferconfigs(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Projects$Datasources {
  root: Bigquerydatatransfer;
  constructor(root: Bigquerydatatransfer) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * bigquerydatatransfer.projects.dataSources.checkValidCreds
   * @desc Returns true if valid credentials exist for the given data source and
   * requesting user. Some data sources doesn't support service account, so we
   * need to talk to them on behalf of the end user. This API just checks
   * whether we have OAuth token for the particular user, which is a
   * pre-requisite before user can create a transfer config.
   * @alias bigquerydatatransfer.projects.dataSources.checkValidCreds
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The data source in the form: `projects/{project_id}/dataSources/{data_source_id}`
   * @param {().CheckValidCredsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  checkValidCreds(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CheckValidCredsResponse>;
  checkValidCreds(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$CheckValidCredsResponse>,
      callback?: BodyResponseCallback<Schema$CheckValidCredsResponse>): void;
  checkValidCreds(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$CheckValidCredsResponse>,
      callback?: BodyResponseCallback<Schema$CheckValidCredsResponse>):
      void|AxiosPromise<Schema$CheckValidCredsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:checkValidCreds')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CheckValidCredsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CheckValidCredsResponse>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.dataSources.get
   * @desc Retrieves a supported data source and returns its settings, which can
   * be used for UI rendering.
   * @alias bigquerydatatransfer.projects.dataSources.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/dataSources/{data_source_id}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$DataSource>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DataSource>,
      callback?: BodyResponseCallback<Schema$DataSource>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DataSource>,
      callback?: BodyResponseCallback<Schema$DataSource>):
      void|AxiosPromise<Schema$DataSource> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DataSource>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DataSource>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.dataSources.list
   * @desc Lists supported data sources and returns their settings, which can be
   * used for UI rendering.
   * @alias bigquerydatatransfer.projects.dataSources.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
   * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
   * @param {string} params.parent The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListDataSourcesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListDataSourcesResponse>,
      callback?: BodyResponseCallback<Schema$ListDataSourcesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListDataSourcesResponse>,
      callback?: BodyResponseCallback<Schema$ListDataSourcesResponse>):
      void|AxiosPromise<Schema$ListDataSourcesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dataSources')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListDataSourcesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListDataSourcesResponse>(parameters);
    }
  }
}

export class Resource$Projects$Locations {
  root: Bigquerydatatransfer;
  dataSources: Resource$Projects$Locations$Datasources;
  transferConfigs: Resource$Projects$Locations$Transferconfigs;
  constructor(root: Bigquerydatatransfer) {
    this.root = root;
    this.getRoot.bind(this);
    this.dataSources = new Resource$Projects$Locations$Datasources(root);
    this.transferConfigs =
        new Resource$Projects$Locations$Transferconfigs(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * bigquerydatatransfer.projects.locations.get
   * @desc Gets information about a location.
   * @alias bigquerydatatransfer.projects.locations.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name for the location.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Location>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Location>,
      callback?: BodyResponseCallback<Schema$Location>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Location>,
      callback?: BodyResponseCallback<Schema$Location>):
      void|AxiosPromise<Schema$Location> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Location>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Location>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.locations.list
   * @desc Lists information about the supported locations for this service.
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
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListLocationsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListLocationsResponse>,
      callback?: BodyResponseCallback<Schema$ListLocationsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListLocationsResponse>,
      callback?: BodyResponseCallback<Schema$ListLocationsResponse>):
      void|AxiosPromise<Schema$ListLocationsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListLocationsResponse>(parameters);
    }
  }
}
export class Resource$Projects$Locations$Datasources {
  root: Bigquerydatatransfer;
  constructor(root: Bigquerydatatransfer) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * bigquerydatatransfer.projects.locations.dataSources.checkValidCreds
   * @desc Returns true if valid credentials exist for the given data source and
   * requesting user. Some data sources doesn't support service account, so we
   * need to talk to them on behalf of the end user. This API just checks
   * whether we have OAuth token for the particular user, which is a
   * pre-requisite before user can create a transfer config.
   * @alias bigquerydatatransfer.projects.locations.dataSources.checkValidCreds
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The data source in the form: `projects/{project_id}/dataSources/{data_source_id}`
   * @param {().CheckValidCredsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  checkValidCreds(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$CheckValidCredsResponse>;
  checkValidCreds(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$CheckValidCredsResponse>,
      callback?: BodyResponseCallback<Schema$CheckValidCredsResponse>): void;
  checkValidCreds(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$CheckValidCredsResponse>,
      callback?: BodyResponseCallback<Schema$CheckValidCredsResponse>):
      void|AxiosPromise<Schema$CheckValidCredsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:checkValidCreds')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$CheckValidCredsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$CheckValidCredsResponse>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.locations.dataSources.get
   * @desc Retrieves a supported data source and returns its settings, which can
   * be used for UI rendering.
   * @alias bigquerydatatransfer.projects.locations.dataSources.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/dataSources/{data_source_id}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$DataSource>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DataSource>,
      callback?: BodyResponseCallback<Schema$DataSource>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$DataSource>,
      callback?: BodyResponseCallback<Schema$DataSource>):
      void|AxiosPromise<Schema$DataSource> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$DataSource>(parameters, callback);
    } else {
      return createAPIRequest<Schema$DataSource>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.locations.dataSources.list
   * @desc Lists supported data sources and returns their settings, which can be
   * used for UI rendering.
   * @alias bigquerydatatransfer.projects.locations.dataSources.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
   * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
   * @param {string} params.parent The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListDataSourcesResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListDataSourcesResponse>,
      callback?: BodyResponseCallback<Schema$ListDataSourcesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListDataSourcesResponse>,
      callback?: BodyResponseCallback<Schema$ListDataSourcesResponse>):
      void|AxiosPromise<Schema$ListDataSourcesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dataSources')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListDataSourcesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListDataSourcesResponse>(parameters);
    }
  }
}

export class Resource$Projects$Locations$Transferconfigs {
  root: Bigquerydatatransfer;
  runs: Resource$Projects$Locations$Transferconfigs$Runs;
  constructor(root: Bigquerydatatransfer) {
    this.root = root;
    this.getRoot.bind(this);
    this.runs = new Resource$Projects$Locations$Transferconfigs$Runs(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * bigquerydatatransfer.projects.locations.transferConfigs.create
   * @desc Creates a new data transfer configuration.
   * @alias bigquerydatatransfer.projects.locations.transferConfigs.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. This is required if new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
   * @param {string} params.parent The BigQuery project id where the transfer configuration should be created. Must be in the format /projects/{project_id}/locations/{location_id} If specified location and location of the destination bigquery dataset do not match - the request will fail.
   * @param {().TransferConfig} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TransferConfig>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>):
      void|AxiosPromise<Schema$TransferConfig> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferConfigs')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TransferConfig>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TransferConfig>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.locations.transferConfigs.delete
   * @desc Deletes a data transfer configuration, including any associated
   * transfer runs and logs.
   * @alias bigquerydatatransfer.projects.locations.transferConfigs.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.locations.transferConfigs.get
   * @desc Returns information about a data transfer config.
   * @alias bigquerydatatransfer.projects.locations.transferConfigs.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$TransferConfig>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>):
      void|AxiosPromise<Schema$TransferConfig> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TransferConfig>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TransferConfig>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.locations.transferConfigs.list
   * @desc Returns information about all data transfers in the project.
   * @alias bigquerydatatransfer.projects.locations.transferConfigs.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.dataSourceIds When specified, only configurations of requested data sources are returned.
   * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
   * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
   * @param {string} params.parent The BigQuery project id for which data sources should be returned: `projects/{project_id}`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListTransferConfigsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListTransferConfigsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferConfigsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListTransferConfigsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferConfigsResponse>):
      void|AxiosPromise<Schema$ListTransferConfigsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferConfigs')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListTransferConfigsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListTransferConfigsResponse>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.locations.transferConfigs.patch
   * @desc Updates a data transfer configuration. All fields must be set, even
   * if they are not updated.
   * @alias bigquerydatatransfer.projects.locations.transferConfigs.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
   * @param {string} params.name The resource name of the transfer config. Transfer config names have the form `projects/{project_id}/transferConfigs/{config_id}`. Where `config_id` is usually a uuid, even though it is not guaranteed or required. The name is ignored when creating a transfer config.
   * @param {string=} params.updateMask Required list of fields to be updated in this request.
   * @param {().TransferConfig} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TransferConfig>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>):
      void|AxiosPromise<Schema$TransferConfig> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TransferConfig>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TransferConfig>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.locations.transferConfigs.scheduleRuns
   * @desc Creates transfer runs for a time range [start_time, end_time]. For
   * each date - or whatever granularity the data source supports - in the
   * range, one transfer run is created. Note that runs are created per UTC time
   * in the time range.
   * @alias bigquerydatatransfer.projects.locations.transferConfigs.scheduleRuns
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}`.
   * @param {().ScheduleTransferRunsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  scheduleRuns(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ScheduleTransferRunsResponse>;
  scheduleRuns(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ScheduleTransferRunsResponse>,
      callback?: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>):
      void;
  scheduleRuns(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ScheduleTransferRunsResponse>,
      callback?: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>):
      void|AxiosPromise<Schema$ScheduleTransferRunsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:scheduleRuns')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ScheduleTransferRunsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ScheduleTransferRunsResponse>(parameters);
    }
  }
}
export class Resource$Projects$Locations$Transferconfigs$Runs {
  root: Bigquerydatatransfer;
  transferLogs: Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs;
  constructor(root: Bigquerydatatransfer) {
    this.root = root;
    this.getRoot.bind(this);
    this.transferLogs =
        new Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * bigquerydatatransfer.projects.locations.transferConfigs.runs.delete
   * @desc Deletes the specified transfer run.
   * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.locations.transferConfigs.runs.get
   * @desc Returns information about the particular transfer run.
   * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$TransferRun>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TransferRun>,
      callback?: BodyResponseCallback<Schema$TransferRun>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TransferRun>,
      callback?: BodyResponseCallback<Schema$TransferRun>):
      void|AxiosPromise<Schema$TransferRun> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TransferRun>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TransferRun>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.locations.transferConfigs.runs.list
   * @desc Returns information about running and completed jobs.
   * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
   * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
   * @param {string} params.parent Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}`.
   * @param {string=} params.runAttempt Indicates how run attempts are to be pulled.
   * @param {string=} params.states When specified, only transfer runs with requested states are returned.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListTransferRunsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListTransferRunsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferRunsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListTransferRunsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferRunsResponse>):
      void|AxiosPromise<Schema$ListTransferRunsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/runs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListTransferRunsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListTransferRunsResponse>(parameters);
    }
  }
}
export class Resource$Projects$Locations$Transferconfigs$Runs$Transferlogs {
  root: Bigquerydatatransfer;
  constructor(root: Bigquerydatatransfer) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * bigquerydatatransfer.projects.locations.transferConfigs.runs.transferLogs.list
   * @desc Returns user facing log messages for the data transfer run.
   * @alias
   * bigquerydatatransfer.projects.locations.transferConfigs.runs.transferLogs.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.messageTypes Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
   * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
   * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
   * @param {string} params.parent Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_Id}/runs/{run_id}`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListTransferLogsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListTransferLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferLogsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListTransferLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferLogsResponse>):
      void|AxiosPromise<Schema$ListTransferLogsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferLogs')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListTransferLogsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListTransferLogsResponse>(parameters);
    }
  }
}



export class Resource$Projects$Transferconfigs {
  root: Bigquerydatatransfer;
  runs: Resource$Projects$Transferconfigs$Runs;
  constructor(root: Bigquerydatatransfer) {
    this.root = root;
    this.getRoot.bind(this);
    this.runs = new Resource$Projects$Transferconfigs$Runs(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * bigquerydatatransfer.projects.transferConfigs.create
   * @desc Creates a new data transfer configuration.
   * @alias bigquerydatatransfer.projects.transferConfigs.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. This is required if new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
   * @param {string} params.parent The BigQuery project id where the transfer configuration should be created. Must be in the format /projects/{project_id}/locations/{location_id} If specified location and location of the destination bigquery dataset do not match - the request will fail.
   * @param {().TransferConfig} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TransferConfig>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>):
      void|AxiosPromise<Schema$TransferConfig> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferConfigs')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TransferConfig>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TransferConfig>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.transferConfigs.delete
   * @desc Deletes a data transfer configuration, including any associated
   * transfer runs and logs.
   * @alias bigquerydatatransfer.projects.transferConfigs.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.transferConfigs.get
   * @desc Returns information about a data transfer config.
   * @alias bigquerydatatransfer.projects.transferConfigs.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any,
      options?: MethodOptions): AxiosPromise<Schema$TransferConfig>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>):
      void|AxiosPromise<Schema$TransferConfig> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TransferConfig>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TransferConfig>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.transferConfigs.list
   * @desc Returns information about all data transfers in the project.
   * @alias bigquerydatatransfer.projects.transferConfigs.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.dataSourceIds When specified, only configurations of requested data sources are returned.
   * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
   * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
   * @param {string} params.parent The BigQuery project id for which data sources should be returned: `projects/{project_id}`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListTransferConfigsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListTransferConfigsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferConfigsResponse>):
      void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListTransferConfigsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferConfigsResponse>):
      void|AxiosPromise<Schema$ListTransferConfigsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferConfigs')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListTransferConfigsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ListTransferConfigsResponse>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.transferConfigs.patch
   * @desc Updates a data transfer configuration. All fields must be set, even
   * if they are not updated.
   * @alias bigquerydatatransfer.projects.transferConfigs.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
   * @param {string} params.name The resource name of the transfer config. Transfer config names have the form `projects/{project_id}/transferConfigs/{config_id}`. Where `config_id` is usually a uuid, even though it is not guaranteed or required. The name is ignored when creating a transfer config.
   * @param {string=} params.updateMask Required list of fields to be updated in this request.
   * @param {().TransferConfig} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TransferConfig>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TransferConfig>,
      callback?: BodyResponseCallback<Schema$TransferConfig>):
      void|AxiosPromise<Schema$TransferConfig> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TransferConfig>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TransferConfig>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.transferConfigs.scheduleRuns
   * @desc Creates transfer runs for a time range [start_time, end_time]. For
   * each date - or whatever granularity the data source supports - in the
   * range, one transfer run is created. Note that runs are created per UTC time
   * in the time range.
   * @alias bigquerydatatransfer.projects.transferConfigs.scheduleRuns
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}`.
   * @param {().ScheduleTransferRunsRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  scheduleRuns(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ScheduleTransferRunsResponse>;
  scheduleRuns(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ScheduleTransferRunsResponse>,
      callback?: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>):
      void;
  scheduleRuns(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ScheduleTransferRunsResponse>,
      callback?: BodyResponseCallback<Schema$ScheduleTransferRunsResponse>):
      void|AxiosPromise<Schema$ScheduleTransferRunsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:scheduleRuns')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ScheduleTransferRunsResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$ScheduleTransferRunsResponse>(parameters);
    }
  }
}
export class Resource$Projects$Transferconfigs$Runs {
  root: Bigquerydatatransfer;
  transferLogs: Resource$Projects$Transferconfigs$Runs$Transferlogs;
  constructor(root: Bigquerydatatransfer) {
    this.root = root;
    this.getRoot.bind(this);
    this.transferLogs =
        new Resource$Projects$Transferconfigs$Runs$Transferlogs(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * bigquerydatatransfer.projects.transferConfigs.runs.delete
   * @desc Deletes the specified transfer run.
   * @alias bigquerydatatransfer.projects.transferConfigs.runs.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.transferConfigs.runs.get
   * @desc Returns information about the particular transfer run.
   * @alias bigquerydatatransfer.projects.transferConfigs.runs.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$TransferRun>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TransferRun>,
      callback?: BodyResponseCallback<Schema$TransferRun>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TransferRun>,
      callback?: BodyResponseCallback<Schema$TransferRun>):
      void|AxiosPromise<Schema$TransferRun> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TransferRun>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TransferRun>(parameters);
    }
  }


  /**
   * bigquerydatatransfer.projects.transferConfigs.runs.list
   * @desc Returns information about running and completed jobs.
   * @alias bigquerydatatransfer.projects.transferConfigs.runs.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
   * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
   * @param {string} params.parent Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}`.
   * @param {string=} params.runAttempt Indicates how run attempts are to be pulled.
   * @param {string=} params.states When specified, only transfer runs with requested states are returned.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListTransferRunsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListTransferRunsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferRunsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListTransferRunsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferRunsResponse>):
      void|AxiosPromise<Schema$ListTransferRunsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/runs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListTransferRunsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListTransferRunsResponse>(parameters);
    }
  }
}
export class Resource$Projects$Transferconfigs$Runs$Transferlogs {
  root: Bigquerydatatransfer;
  constructor(root: Bigquerydatatransfer) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * bigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list
   * @desc Returns user facing log messages for the data transfer run.
   * @alias bigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.messageTypes Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
   * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
   * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
   * @param {string} params.parent Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_Id}/runs/{run_id}`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListTransferLogsResponse>;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListTransferLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferLogsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ListTransferLogsResponse>,
      callback?: BodyResponseCallback<Schema$ListTransferLogsResponse>):
      void|AxiosPromise<Schema$ListTransferLogsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl =
        options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/transferLogs')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ListTransferLogsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListTransferLogsResponse>(parameters);
    }
  }
}
