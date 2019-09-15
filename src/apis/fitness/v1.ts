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

export namespace fitness_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Fitness
   *
   * Stores and accesses user data in the fitness store from apps on any platform.
   *
   * @example
   * const {google} = require('googleapis');
   * const fitness = google.fitness('v1');
   *
   * @namespace fitness
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Fitness
   */
  export class Fitness {
    context: APIRequestContext;
    users: Resource$Users;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.users = new Resource$Users(this.context);
    }
  }

  export interface Schema$AggregateBucket {
    /**
     * Available for Bucket.Type.ACTIVITY_TYPE, Bucket.Type.ACTIVITY_SEGMENT
     */
    activity?: number | null;
    /**
     * There will be one dataset per AggregateBy in the request.
     */
    dataset?: Schema$Dataset[];
    /**
     * The end time for the aggregated data, in milliseconds since epoch, inclusive.
     */
    endTimeMillis?: string | null;
    /**
     * Available for Bucket.Type.SESSION
     */
    session?: Schema$Session;
    /**
     * The start time for the aggregated data, in milliseconds since epoch, inclusive.
     */
    startTimeMillis?: string | null;
    /**
     * The type of a bucket signifies how the data aggregation is performed in the bucket.
     */
    type?: string | null;
  }
  /**
   * The specification of which data to aggregate.
   */
  export interface Schema$AggregateBy {
    /**
     * A data source ID to aggregate. Mutually exclusive of dataTypeName. Only data from the specified data source ID will be included in the aggregation. The dataset in the response will have the same data source ID.
     */
    dataSourceId?: string | null;
    /**
     * The data type to aggregate. All data sources providing this data type will contribute data to the aggregation. The response will contain a single dataset for this data type name. The dataset will have a data source ID of derived:com.google.:com.google.android.gms:aggregated
     */
    dataTypeName?: string | null;
  }
  /**
   * Next id: 10
   */
  export interface Schema$AggregateRequest {
    /**
     * The specification of data to be aggregated. At least one aggregateBy spec must be provided. All data that is specified will be aggregated using the same bucketing criteria. There will be one dataset in the response for every aggregateBy spec.
     */
    aggregateBy?: Schema$AggregateBy[];
    /**
     * Specifies that data be aggregated each activity segment recored for a user. Similar to bucketByActivitySegment, but bucketing is done for each activity segment rather than all segments of the same type. Mutually exclusive of other bucketing specifications.
     */
    bucketByActivitySegment?: Schema$BucketByActivity;
    /**
     * Specifies that data be aggregated by the type of activity being performed when the data was recorded. All data that was recorded during a certain activity type (for the given time range) will be aggregated into the same bucket. Data that was recorded while the user was not active will not be included in the response. Mutually exclusive of other bucketing specifications.
     */
    bucketByActivityType?: Schema$BucketByActivity;
    /**
     * Specifies that data be aggregated by user sessions. Data that does not fall within the time range of a session will not be included in the response. Mutually exclusive of other bucketing specifications.
     */
    bucketBySession?: Schema$BucketBySession;
    /**
     * Specifies that data be aggregated by a single time interval. Mutually exclusive of other bucketing specifications.
     */
    bucketByTime?: Schema$BucketByTime;
    /**
     * The end of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive.
     */
    endTimeMillis?: string | null;
    /**
     * DO NOT POPULATE THIS FIELD. It is ignored.
     */
    filteredDataQualityStandard?: string[] | null;
    /**
     * The start of a window of time. Data that intersects with this time window will be aggregated. The time is in milliseconds since epoch, inclusive.
     */
    startTimeMillis?: string | null;
  }
  export interface Schema$AggregateResponse {
    /**
     * A list of buckets containing the aggregated data.
     */
    bucket?: Schema$AggregateBucket[];
  }
  export interface Schema$Application {
    /**
     * An optional URI that can be used to link back to the application.
     */
    detailsUrl?: string | null;
    /**
     * The name of this application. This is required for REST clients, but we do not enforce uniqueness of this name. It is provided as a matter of convenience for other developers who would like to identify which REST created an Application or Data Source.
     */
    name?: string | null;
    /**
     * Package name for this application. This is used as a unique identifier when created by Android applications, but cannot be specified by REST clients. REST clients will have their developer project number reflected into the Data Source data stream IDs, instead of the packageName.
     */
    packageName?: string | null;
    /**
     * Version of the application. You should update this field whenever the application changes in a way that affects the computation of the data.
     */
    version?: string | null;
  }
  export interface Schema$BucketByActivity {
    /**
     * The default activity stream will be used if a specific activityDataSourceId is not specified.
     */
    activityDataSourceId?: string | null;
    /**
     * Specifies that only activity segments of duration longer than minDurationMillis are considered and used as a container for aggregated data.
     */
    minDurationMillis?: string | null;
  }
  export interface Schema$BucketBySession {
    /**
     * Specifies that only sessions of duration longer than minDurationMillis are considered and used as a container for aggregated data.
     */
    minDurationMillis?: string | null;
  }
  export interface Schema$BucketByTime {
    /**
     * Specifies that result buckets aggregate data by exactly durationMillis time frames. Time frames that contain no data will be included in the response with an empty dataset.
     */
    durationMillis?: string | null;
    period?: Schema$BucketByTimePeriod;
  }
  export interface Schema$BucketByTimePeriod {
    /**
     * org.joda.timezone.DateTimeZone
     */
    timeZoneId?: string | null;
    type?: string | null;
    value?: number | null;
  }
  /**
   * Represents a single data point, generated by a particular data source. A data point holds a value for each field, an end timestamp and an optional start time. The exact semantics of each of these attributes are specified in the documentation for the particular data type.  A data point can represent an instantaneous measurement, reading or input observation, as well as averages or aggregates over a time interval. Check the data type documentation to determine which is the case for a particular data type.  Data points always contain one value for each field of the data type.
   */
  export interface Schema$DataPoint {
    /**
     * DO NOT USE THIS FIELD. It is ignored, and not stored.
     */
    computationTimeMillis?: string | null;
    /**
     * The data type defining the format of the values in this data point.
     */
    dataTypeName?: string | null;
    /**
     * The end time of the interval represented by this data point, in nanoseconds since epoch.
     */
    endTimeNanos?: string | null;
    /**
     * Indicates the last time this data point was modified. Useful only in contexts where we are listing the data changes, rather than representing the current state of the data.
     */
    modifiedTimeMillis?: string | null;
    /**
     * If the data point is contained in a dataset for a derived data source, this field will be populated with the data source stream ID that created the data point originally.  WARNING: do not rely on this field for anything other than debugging. The value of this field, if it is set at all, is an implementation detail and is not guaranteed to remain consistent.
     */
    originDataSourceId?: string | null;
    /**
     * The raw timestamp from the original SensorEvent.
     */
    rawTimestampNanos?: string | null;
    /**
     * The start time of the interval represented by this data point, in nanoseconds since epoch.
     */
    startTimeNanos?: string | null;
    /**
     * Values of each data type field for the data point. It is expected that each value corresponding to a data type field will occur in the same order that the field is listed with in the data type specified in a data source.  Only one of integer and floating point fields will be populated, depending on the format enum value within data source&#39;s type field.
     */
    value?: Schema$Value[];
  }
  /**
   * A dataset represents a projection container for data points. They do not carry any info of their own. Datasets represent a set of data points from a particular data source. A data point can be found in more than one dataset.
   */
  export interface Schema$Dataset {
    /**
     * The data stream ID of the data source that created the points in this dataset.
     */
    dataSourceId?: string | null;
    /**
     * The largest end time of all data points in this possibly partial representation of the dataset. Time is in nanoseconds from epoch. This should also match the second part of the dataset identifier.
     */
    maxEndTimeNs?: string | null;
    /**
     * The smallest start time of all data points in this possibly partial representation of the dataset. Time is in nanoseconds from epoch. This should also match the first part of the dataset identifier.
     */
    minStartTimeNs?: string | null;
    /**
     * This token will be set when a dataset is received in response to a GET request and the dataset is too large to be included in a single response. Provide this value in a subsequent GET request to return the next page of data points within this dataset.
     */
    nextPageToken?: string | null;
    /**
     * A partial list of data points contained in the dataset, ordered by largest endTimeNanos first. This list is considered complete when retrieving a small dataset and partial when patching a dataset or retrieving a dataset that is too large to include in a single response.
     */
    point?: Schema$DataPoint[];
  }
  /**
   * Definition of a unique source of sensor data. Data sources can expose raw data coming from hardware sensors on local or companion devices. They can also expose derived data, created by transforming or merging other data sources. Multiple data sources can exist for the same data type. Every data point inserted into or read from this service has an associated data source.  The data source contains enough information to uniquely identify its data, including the hardware device and the application that collected and/or transformed the data. It also holds useful metadata, such as the hardware and application versions, and the device type.  Each data source produces a unique stream of data, with a unique identifier. Not all changes to data source affect the stream identifier, so that data collected by updated versions of the same application/device can still be considered to belong to the same data stream.
   */
  export interface Schema$DataSource {
    /**
     * Information about an application which feeds sensor data into the platform.
     */
    application?: Schema$Application;
    /**
     * DO NOT POPULATE THIS FIELD. It is never populated in responses from the platform, and is ignored in queries. It will be removed in a future version entirely.
     */
    dataQualityStandard?: string[] | null;
    /**
     * A unique identifier for the data stream produced by this data source. The identifier includes:    - The physical device&#39;s manufacturer, model, and serial number (UID).  - The application&#39;s package name or name. Package name is used when the data source was created by an Android application. The developer project number is used when the data source was created by a REST client.  - The data source&#39;s type.  - The data source&#39;s stream name.  Note that not all attributes of the data source are used as part of the stream identifier. In particular, the version of the hardware/the application isn&#39;t used. This allows us to preserve the same stream through version updates. This also means that two DataSource objects may represent the same data stream even if they&#39;re not equal.  The exact format of the data stream ID created by an Android application is: type:dataType.name:application.packageName:device.manufacturer:device.model:device.uid:dataStreamName   The exact format of the data stream ID created by a REST client is: type:dataType.name:developer project number:device.manufacturer:device.model:device.uid:dataStreamName   When any of the optional fields that make up the data stream ID are absent, they will be omitted from the data stream ID. The minimum viable data stream ID would be: type:dataType.name:developer project number  Finally, the developer project number is obfuscated when read by any REST or Android client that did not create the data source. Only the data source creator will see the developer project number in clear and normal form.
     */
    dataStreamId?: string | null;
    /**
     * The stream name uniquely identifies this particular data source among other data sources of the same type from the same underlying producer. Setting the stream name is optional, but should be done whenever an application exposes two streams for the same data type, or when a device has two equivalent sensors.
     */
    dataStreamName?: string | null;
    /**
     * The data type defines the schema for a stream of data being collected by, inserted into, or queried from the Fitness API.
     */
    dataType?: Schema$DataType;
    /**
     * Representation of an integrated device (such as a phone or a wearable) that can hold sensors.
     */
    device?: Schema$Device;
    /**
     * An end-user visible name for this data source.
     */
    name?: string | null;
    /**
     * A constant describing the type of this data source. Indicates whether this data source produces raw or derived data.
     */
    type?: string | null;
  }
  export interface Schema$DataType {
    /**
     * A field represents one dimension of a data type.
     */
    field?: Schema$DataTypeField[];
    /**
     * Each data type has a unique, namespaced, name. All data types in the com.google namespace are shared as part of the platform.
     */
    name?: string | null;
  }
  /**
   * In case of multi-dimensional data (such as an accelerometer with x, y, and z axes) each field represents one dimension. Each data type field has a unique name which identifies it. The field also defines the format of the data (int, float, etc.).  This message is only instantiated in code and not used for wire comms or stored in any way.
   */
  export interface Schema$DataTypeField {
    /**
     * The different supported formats for each field in a data type.
     */
    format?: string | null;
    /**
     * Defines the name and format of data. Unlike data type names, field names are not namespaced, and only need to be unique within the data type.
     */
    name?: string | null;
    optional?: boolean | null;
  }
  /**
   * Representation of an integrated device (such as a phone or a wearable) that can hold sensors. Each sensor is exposed as a data source.  The main purpose of the device information contained in this class is to identify the hardware of a particular data source. This can be useful in different ways, including:   - Distinguishing two similar sensors on different devices (the step counter on two nexus 5 phones, for instance) - Display the source of data to the user (by using the device make / model) - Treat data differently depending on sensor type (accelerometers on a watch may give different patterns than those on a phone) - Build different analysis models for each device/version.
   */
  export interface Schema$Device {
    /**
     * Manufacturer of the product/hardware.
     */
    manufacturer?: string | null;
    /**
     * End-user visible model name for the device.
     */
    model?: string | null;
    /**
     * A constant representing the type of the device.
     */
    type?: string | null;
    /**
     * The serial number or other unique ID for the hardware. This field is obfuscated when read by any REST or Android client that did not create the data source. Only the data source creator will see the uid field in clear and normal form.
     */
    uid?: string | null;
    /**
     * Version string for the device hardware/software.
     */
    version?: string | null;
  }
  export interface Schema$ListDataPointChangesResponse {
    /**
     * The data stream ID of the data source with data point changes.
     */
    dataSourceId?: string | null;
    /**
     * Deleted data points for the user. Note, for modifications this should be parsed before handling insertions.
     */
    deletedDataPoint?: Schema$DataPoint[];
    /**
     * Inserted data points for the user.
     */
    insertedDataPoint?: Schema$DataPoint[];
    /**
     * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListDataSourcesResponse {
    /**
     * A previously created data source.
     */
    dataSource?: Schema$DataSource[];
  }
  export interface Schema$ListSessionsResponse {
    /**
     * If includeDeleted is set to true in the request, this list will contain sessions deleted with original end times that are within the startTime and endTime frame.
     */
    deletedSession?: Schema$Session[];
    /**
     * Flag to indicate server has more data to transfer
     */
    hasMoreData?: boolean | null;
    /**
     * The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * Sessions with an end time that is between startTime and endTime of the request.
     */
    session?: Schema$Session[];
  }
  /**
   * Holder object for the value of an entry in a map field of a data point.  A map value supports a subset of the formats that the regular Value supports.
   */
  export interface Schema$MapValue {
    /**
     * Floating point value.
     */
    fpVal?: number | null;
  }
  /**
   * Sessions contain metadata, such as a user-friendly name and time interval information.
   */
  export interface Schema$Session {
    /**
     * Session active time. While start_time_millis and end_time_millis define the full session time, the active time can be shorter and specified by active_time_millis. If the inactive time during the session is known, it should also be inserted via a com.google.activity.segment data point with a STILL activity value
     */
    activeTimeMillis?: string | null;
    /**
     * The type of activity this session represents.
     */
    activityType?: number | null;
    /**
     * The application that created the session.
     */
    application?: Schema$Application;
    /**
     * A description for this session.
     */
    description?: string | null;
    /**
     * An end time, in milliseconds since epoch, inclusive.
     */
    endTimeMillis?: string | null;
    /**
     * A client-generated identifier that is unique across all sessions owned by this particular user.
     */
    id?: string | null;
    /**
     * A timestamp that indicates when the session was last modified.
     */
    modifiedTimeMillis?: string | null;
    /**
     * A human readable name of the session.
     */
    name?: string | null;
    /**
     * A start time, in milliseconds since epoch, inclusive.
     */
    startTimeMillis?: string | null;
  }
  /**
   * Holder object for the value of a single field in a data point.  A field value has a particular format and is only ever set to one of an integer or a floating point value. LINT.IfChange
   */
  export interface Schema$Value {
    /**
     * Floating point value. When this is set, other values must not be set.
     */
    fpVal?: number | null;
    /**
     * Integer value. When this is set, other values must not be set.
     */
    intVal?: number | null;
    /**
     * Map value. The valid key space and units for the corresponding value of each entry should be documented as part of the data type definition. Keys should be kept small whenever possible. Data streams with large keys and high data frequency may be down sampled.
     */
    mapVal?: Schema$ValueMapValEntry[];
    /**
     * String value. When this is set, other values must not be set. Strings should be kept small whenever possible. Data streams with large string values and high data frequency may be down sampled.
     */
    stringVal?: string | null;
  }
  export interface Schema$ValueMapValEntry {
    key?: string | null;
    value?: Schema$MapValue;
  }

  export class Resource$Users {
    context: APIRequestContext;
    dataset: Resource$Users$Dataset;
    dataSources: Resource$Users$Datasources;
    sessions: Resource$Users$Sessions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataset = new Resource$Users$Dataset(this.context);
      this.dataSources = new Resource$Users$Datasources(this.context);
      this.sessions = new Resource$Users$Sessions(this.context);
    }
  }

  export class Resource$Users$Dataset {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * fitness.users.dataset.aggregate
     * @desc Aggregates data of a certain type or stream into buckets divided by a given type of boundary. Multiple data sets of multiple types and from multiple sources can be aggreated into exactly one bucket type per request.
     * @alias fitness.users.dataset.aggregate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId Aggregate data for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     * @param {().AggregateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregate(
      params?: Params$Resource$Users$Dataset$Aggregate,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AggregateResponse>;
    aggregate(
      params: Params$Resource$Users$Dataset$Aggregate,
      options: MethodOptions | BodyResponseCallback<Schema$AggregateResponse>,
      callback: BodyResponseCallback<Schema$AggregateResponse>
    ): void;
    aggregate(
      params: Params$Resource$Users$Dataset$Aggregate,
      callback: BodyResponseCallback<Schema$AggregateResponse>
    ): void;
    aggregate(callback: BodyResponseCallback<Schema$AggregateResponse>): void;
    aggregate(
      paramsOrCallback?:
        | Params$Resource$Users$Dataset$Aggregate
        | BodyResponseCallback<Schema$AggregateResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$AggregateResponse>,
      callback?: BodyResponseCallback<Schema$AggregateResponse>
    ): void | GaxiosPromise<Schema$AggregateResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Dataset$Aggregate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Dataset$Aggregate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/fitness/v1/users/{userId}/dataset:aggregate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AggregateResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AggregateResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Dataset$Aggregate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Aggregate data for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AggregateRequest;
  }

  export class Resource$Users$Datasources {
    context: APIRequestContext;
    dataPointChanges: Resource$Users$Datasources$Datapointchanges;
    datasets: Resource$Users$Datasources$Datasets;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dataPointChanges = new Resource$Users$Datasources$Datapointchanges(
        this.context
      );
      this.datasets = new Resource$Users$Datasources$Datasets(this.context);
    }

    /**
     * fitness.users.dataSources.create
     * @desc Creates a new data source that is unique across all data sources belonging to this user. The data stream ID field can be omitted and will be generated by the server with the correct format. The data stream ID is an ordered combination of some fields from the data source. In addition to the data source fields reflected into the data source ID, the developer project number that is authenticated when creating the data source is included. This developer project number is obfuscated when read by any other developer reading public data types.
     * @alias fitness.users.dataSources.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.userId Create the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     * @param {().DataSource} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Users$Datasources$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DataSource>;
    create(
      params: Params$Resource$Users$Datasources$Create,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    create(
      params: Params$Resource$Users$Datasources$Create,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    create(callback: BodyResponseCallback<Schema$DataSource>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$Create
        | BodyResponseCallback<Schema$DataSource>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DataSource>,
      callback?: BodyResponseCallback<Schema$DataSource>
    ): void | GaxiosPromise<Schema$DataSource> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/fitness/v1/users/{userId}/dataSources').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DataSource>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }

    /**
     * fitness.users.dataSources.delete
     * @desc Deletes the specified data source. The request will fail if the data source contains any data points.
     * @alias fitness.users.dataSources.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dataSourceId The data stream ID of the data source to delete.
     * @param {string} params.userId Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Users$Datasources$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DataSource>;
    delete(
      params: Params$Resource$Users$Datasources$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    delete(
      params: Params$Resource$Users$Datasources$Delete,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    delete(callback: BodyResponseCallback<Schema$DataSource>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$Delete
        | BodyResponseCallback<Schema$DataSource>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DataSource>,
      callback?: BodyResponseCallback<Schema$DataSource>
    ): void | GaxiosPromise<Schema$DataSource> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/fitness/v1/users/{userId}/dataSources/{dataSourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'dataSourceId'],
        pathParams: ['dataSourceId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DataSource>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }

    /**
     * fitness.users.dataSources.get
     * @desc Returns the specified data source.
     * @alias fitness.users.dataSources.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dataSourceId The data stream ID of the data source to retrieve.
     * @param {string} params.userId Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Users$Datasources$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DataSource>;
    get(
      params: Params$Resource$Users$Datasources$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(
      params: Params$Resource$Users$Datasources$Get,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    get(callback: BodyResponseCallback<Schema$DataSource>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$Get
        | BodyResponseCallback<Schema$DataSource>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DataSource>,
      callback?: BodyResponseCallback<Schema$DataSource>
    ): void | GaxiosPromise<Schema$DataSource> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/fitness/v1/users/{userId}/dataSources/{dataSourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'dataSourceId'],
        pathParams: ['dataSourceId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DataSource>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }

    /**
     * fitness.users.dataSources.list
     * @desc Lists all data sources that are visible to the developer, using the OAuth scopes provided. The list is not exhaustive; the user may have private data sources that are only visible to other developers, or calls using other scopes.
     * @alias fitness.users.dataSources.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.dataTypeName The names of data types to include in the list. If not specified, all data sources will be returned.
     * @param {string} params.userId List data sources for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Users$Datasources$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDataSourcesResponse>;
    list(
      params: Params$Resource$Users$Datasources$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataSourcesResponse>,
      callback: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void;
    list(
      params: Params$Resource$Users$Datasources$List,
      callback: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDataSourcesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$List
        | BodyResponseCallback<Schema$ListDataSourcesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataSourcesResponse>,
      callback?: BodyResponseCallback<Schema$ListDataSourcesResponse>
    ): void | GaxiosPromise<Schema$ListDataSourcesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/fitness/v1/users/{userId}/dataSources').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDataSourcesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListDataSourcesResponse>(parameters);
      }
    }

    /**
     * fitness.users.dataSources.update
     * @desc Updates the specified data source. The dataStreamId, dataType, type, dataStreamName, and device properties with the exception of version, cannot be modified.  Data sources are identified by their dataStreamId.
     * @alias fitness.users.dataSources.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dataSourceId The data stream ID of the data source to update.
     * @param {string} params.userId Update the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     * @param {().DataSource} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Users$Datasources$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DataSource>;
    update(
      params: Params$Resource$Users$Datasources$Update,
      options: MethodOptions | BodyResponseCallback<Schema$DataSource>,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    update(
      params: Params$Resource$Users$Datasources$Update,
      callback: BodyResponseCallback<Schema$DataSource>
    ): void;
    update(callback: BodyResponseCallback<Schema$DataSource>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$Update
        | BodyResponseCallback<Schema$DataSource>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DataSource>,
      callback?: BodyResponseCallback<Schema$DataSource>
    ): void | GaxiosPromise<Schema$DataSource> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/fitness/v1/users/{userId}/dataSources/{dataSourceId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'dataSourceId'],
        pathParams: ['dataSourceId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DataSource>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DataSource>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Datasources$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Create the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataSource;
  }
  export interface Params$Resource$Users$Datasources$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The data stream ID of the data source to delete.
     */
    dataSourceId?: string;
    /**
     * Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Datasources$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The data stream ID of the data source to retrieve.
     */
    dataSourceId?: string;
    /**
     * Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Datasources$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The names of data types to include in the list. If not specified, all data sources will be returned.
     */
    dataTypeName?: string[];
    /**
     * List data sources for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Datasources$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The data stream ID of the data source to update.
     */
    dataSourceId?: string;
    /**
     * Update the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DataSource;
  }

  export class Resource$Users$Datasources$Datapointchanges {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * fitness.users.dataSources.dataPointChanges.list
     * @desc Queries for user's data point changes for a particular data source.
     * @alias fitness.users.dataSources.dataPointChanges.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.dataSourceId The data stream ID of the data source that created the dataset.
     * @param {integer=} params.limit If specified, no more than this many data point changes will be included in the response.
     * @param {string=} params.pageToken The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
     * @param {string} params.userId List data points for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Users$Datasources$Datapointchanges$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDataPointChangesResponse>;
    list(
      params: Params$Resource$Users$Datasources$Datapointchanges$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataPointChangesResponse>,
      callback: BodyResponseCallback<Schema$ListDataPointChangesResponse>
    ): void;
    list(
      params: Params$Resource$Users$Datasources$Datapointchanges$List,
      callback: BodyResponseCallback<Schema$ListDataPointChangesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDataPointChangesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$Datapointchanges$List
        | BodyResponseCallback<Schema$ListDataPointChangesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDataPointChangesResponse>,
      callback?: BodyResponseCallback<Schema$ListDataPointChangesResponse>
    ): void | GaxiosPromise<Schema$ListDataPointChangesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$Datapointchanges$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$Datapointchanges$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/fitness/v1/users/{userId}/dataSources/{dataSourceId}/dataPointChanges'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'dataSourceId'],
        pathParams: ['dataSourceId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListDataPointChangesResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ListDataPointChangesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Users$Datasources$Datapointchanges$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The data stream ID of the data source that created the dataset.
     */
    dataSourceId?: string;
    /**
     * If specified, no more than this many data point changes will be included in the response.
     */
    limit?: number;
    /**
     * The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
     */
    pageToken?: string;
    /**
     * List data points for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;
  }

  export class Resource$Users$Datasources$Datasets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * fitness.users.dataSources.datasets.delete
     * @desc Performs an inclusive delete of all data points whose start and end times have any overlap with the time range specified by the dataset ID. For most data types, the entire data point will be deleted. For data types where the time span represents a consistent value (such as com.google.activity.segment), and a data point straddles either end point of the dataset, only the overlapping portion of the data point will be deleted.
     * @alias fitness.users.dataSources.datasets.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.currentTimeMillis The client's current time in milliseconds since epoch.
     * @param {string} params.datasetId Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
     * @param {string} params.dataSourceId The data stream ID of the data source that created the dataset.
     * @param {string=} params.modifiedTimeMillis When the operation was performed on the client.
     * @param {string} params.userId Delete a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Users$Datasources$Datasets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Users$Datasources$Datasets$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Datasources$Datasets$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$Datasets$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$Datasets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$Datasets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/fitness/v1/users/{userId}/dataSources/{dataSourceId}/datasets/{datasetId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'dataSourceId', 'datasetId'],
        pathParams: ['datasetId', 'dataSourceId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * fitness.users.dataSources.datasets.get
     * @desc Returns a dataset containing all data points whose start and end times overlap with the specified range of the dataset minimum start time and maximum end time. Specifically, any data point whose start time is less than or equal to the dataset end time and whose end time is greater than or equal to the dataset start time.
     * @alias fitness.users.dataSources.datasets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
     * @param {string} params.dataSourceId The data stream ID of the data source that created the dataset.
     * @param {integer=} params.limit If specified, no more than this many data points will be included in the dataset. If there are more data points in the dataset, nextPageToken will be set in the dataset response.
     * @param {string=} params.pageToken The continuation token, which is used to page through large datasets. To get the next page of a dataset, set this parameter to the value of nextPageToken from the previous response. Each subsequent call will yield a partial dataset with data point end timestamps that are strictly smaller than those in the previous partial response.
     * @param {string} params.userId Retrieve a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Users$Datasources$Datasets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dataset>;
    get(
      params: Params$Resource$Users$Datasources$Datasets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    get(
      params: Params$Resource$Users$Datasources$Datasets$Get,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    get(callback: BodyResponseCallback<Schema$Dataset>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$Datasets$Get
        | BodyResponseCallback<Schema$Dataset>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback?: BodyResponseCallback<Schema$Dataset>
    ): void | GaxiosPromise<Schema$Dataset> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$Datasets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$Datasets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/fitness/v1/users/{userId}/dataSources/{dataSourceId}/datasets/{datasetId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'dataSourceId', 'datasetId'],
        pathParams: ['datasetId', 'dataSourceId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }

    /**
     * fitness.users.dataSources.datasets.patch
     * @desc Adds data points to a dataset. The dataset need not be previously created. All points within the given dataset will be returned with subsquent calls to retrieve this dataset. Data points can belong to more than one dataset. This method does not use patch semantics.
     * @alias fitness.users.dataSources.datasets.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.currentTimeMillis The client's current time in milliseconds since epoch. Note that the minStartTimeNs and maxEndTimeNs properties in the request body are in nanoseconds instead of milliseconds.
     * @param {string} params.datasetId Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
     * @param {string} params.dataSourceId The data stream ID of the data source that created the dataset.
     * @param {string} params.userId Patch a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     * @param {().Dataset} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Users$Datasources$Datasets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dataset>;
    patch(
      params: Params$Resource$Users$Datasources$Datasets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    patch(
      params: Params$Resource$Users$Datasources$Datasets$Patch,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Dataset>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Users$Datasources$Datasets$Patch
        | BodyResponseCallback<Schema$Dataset>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback?: BodyResponseCallback<Schema$Dataset>
    ): void | GaxiosPromise<Schema$Dataset> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Datasources$Datasets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Datasources$Datasets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/fitness/v1/users/{userId}/dataSources/{dataSourceId}/datasets/{datasetId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'dataSourceId', 'datasetId'],
        pathParams: ['datasetId', 'dataSourceId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Datasources$Datasets$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The client's current time in milliseconds since epoch.
     */
    currentTimeMillis?: string;
    /**
     * Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
     */
    datasetId?: string;
    /**
     * The data stream ID of the data source that created the dataset.
     */
    dataSourceId?: string;
    /**
     * When the operation was performed on the client.
     */
    modifiedTimeMillis?: string;
    /**
     * Delete a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Datasources$Datasets$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
     */
    datasetId?: string;
    /**
     * The data stream ID of the data source that created the dataset.
     */
    dataSourceId?: string;
    /**
     * If specified, no more than this many data points will be included in the dataset. If there are more data points in the dataset, nextPageToken will be set in the dataset response.
     */
    limit?: number;
    /**
     * The continuation token, which is used to page through large datasets. To get the next page of a dataset, set this parameter to the value of nextPageToken from the previous response. Each subsequent call will yield a partial dataset with data point end timestamps that are strictly smaller than those in the previous partial response.
     */
    pageToken?: string;
    /**
     * Retrieve a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Datasources$Datasets$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The client's current time in milliseconds since epoch. Note that the minStartTimeNs and maxEndTimeNs properties in the request body are in nanoseconds instead of milliseconds.
     */
    currentTimeMillis?: string;
    /**
     * Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
     */
    datasetId?: string;
    /**
     * The data stream ID of the data source that created the dataset.
     */
    dataSourceId?: string;
    /**
     * Patch a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Dataset;
  }

  export class Resource$Users$Sessions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * fitness.users.sessions.delete
     * @desc Deletes a session specified by the given session ID.
     * @alias fitness.users.sessions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.currentTimeMillis The client's current time in milliseconds since epoch.
     * @param {string} params.sessionId The ID of the session to be deleted.
     * @param {string} params.userId Delete a session for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Users$Sessions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Users$Sessions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Users$Sessions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Users$Sessions$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Sessions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Sessions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/fitness/v1/users/{userId}/sessions/{sessionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'sessionId'],
        pathParams: ['sessionId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * fitness.users.sessions.list
     * @desc Lists sessions previously created.
     * @alias fitness.users.sessions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.endTime An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response.
     * @param {boolean=} params.includeDeleted If true, deleted sessions will be returned. When set to true, sessions returned in this response will only have an ID and will not have any other fields.
     * @param {string=} params.pageToken The continuation token, which is used for incremental syncing. To get the next batch of changes, set this parameter to the value of nextPageToken from the previous response. This token is treated as a timestamp (in millis since epoch). If specified, the API returns sessions modified since this time. The page token is ignored if either start or end time is specified. If none of start time, end time, and the page token is specified, sessions modified in the last 30 days are returned.
     * @param {string=} params.startTime An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response.
     * @param {string} params.userId List sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Users$Sessions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListSessionsResponse>;
    list(
      params: Params$Resource$Users$Sessions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSessionsResponse>,
      callback: BodyResponseCallback<Schema$ListSessionsResponse>
    ): void;
    list(
      params: Params$Resource$Users$Sessions$List,
      callback: BodyResponseCallback<Schema$ListSessionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSessionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Users$Sessions$List
        | BodyResponseCallback<Schema$ListSessionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSessionsResponse>,
      callback?: BodyResponseCallback<Schema$ListSessionsResponse>
    ): void | GaxiosPromise<Schema$ListSessionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Sessions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Sessions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/fitness/v1/users/{userId}/sessions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['userId'],
        pathParams: ['userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListSessionsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListSessionsResponse>(parameters);
      }
    }

    /**
     * fitness.users.sessions.update
     * @desc Updates or insert a given session.
     * @alias fitness.users.sessions.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.currentTimeMillis The client's current time in milliseconds since epoch.
     * @param {string} params.sessionId The ID of the session to be created.
     * @param {string} params.userId Create sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     * @param {().Session} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Users$Sessions$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Session>;
    update(
      params: Params$Resource$Users$Sessions$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Session>,
      callback: BodyResponseCallback<Schema$Session>
    ): void;
    update(
      params: Params$Resource$Users$Sessions$Update,
      callback: BodyResponseCallback<Schema$Session>
    ): void;
    update(callback: BodyResponseCallback<Schema$Session>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Users$Sessions$Update
        | BodyResponseCallback<Schema$Session>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Session>,
      callback?: BodyResponseCallback<Schema$Session>
    ): void | GaxiosPromise<Schema$Session> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Users$Sessions$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Users$Sessions$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/fitness/v1/users/{userId}/sessions/{sessionId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['userId', 'sessionId'],
        pathParams: ['sessionId', 'userId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Session>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Session>(parameters);
      }
    }
  }

  export interface Params$Resource$Users$Sessions$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The client's current time in milliseconds since epoch.
     */
    currentTimeMillis?: string;
    /**
     * The ID of the session to be deleted.
     */
    sessionId?: string;
    /**
     * Delete a session for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Sessions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response.
     */
    endTime?: string;
    /**
     * If true, deleted sessions will be returned. When set to true, sessions returned in this response will only have an ID and will not have any other fields.
     */
    includeDeleted?: boolean;
    /**
     * The continuation token, which is used for incremental syncing. To get the next batch of changes, set this parameter to the value of nextPageToken from the previous response. This token is treated as a timestamp (in millis since epoch). If specified, the API returns sessions modified since this time. The page token is ignored if either start or end time is specified. If none of start time, end time, and the page token is specified, sessions modified in the last 30 days are returned.
     */
    pageToken?: string;
    /**
     * An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response.
     */
    startTime?: string;
    /**
     * List sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;
  }
  export interface Params$Resource$Users$Sessions$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The client's current time in milliseconds since epoch.
     */
    currentTimeMillis?: string;
    /**
     * The ID of the session to be created.
     */
    sessionId?: string;
    /**
     * Create sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Session;
  }
}
