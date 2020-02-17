// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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

export namespace monitoring_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

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
   * Stackdriver Monitoring API
   *
   * Manages your Stackdriver Monitoring data and configurations. Most projects must be associated with a Stackdriver account, with a few exceptions as noted on the individual method pages. The table entries below are presented in alphabetical order, not in order of common use. For explanations of the concepts found in the table entries, read the Stackdriver Monitoring documentation.
   *
   * @example
   * const {google} = require('googleapis');
   * const monitoring = google.monitoring('v1');
   *
   * @namespace monitoring
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Monitoring
   */
  export class Monitoring {
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
   * Describes how to combine multiple time series to provide different views of the data. Aggregation consists of an alignment step on individual time series (alignment_period and per_series_aligner) followed by an optional reduction step of the data across the aligned time series (cross_series_reducer and group_by_fields). For more details, see Aggregation.
   */
  export interface Schema$Aggregation {
    /**
     * The alignment period for per-time series alignment. If present, alignmentPeriod must be at least 60 seconds. After per-time series alignment, each time series will contain data points only on the period boundaries. If perSeriesAligner is not specified or equals ALIGN_NONE, then this field is ignored. If perSeriesAligner is specified and does not equal ALIGN_NONE, then this field must be defined; otherwise an error is returned.
     */
    alignmentPeriod?: string | null;
    /**
     * The approach to be used to combine time series. Not all reducer functions may be applied to all time series, depending on the metric type and the value type of the original time series. Reduction may change the metric type of value type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If crossSeriesReducer is specified, then perSeriesAligner must be specified and not equal ALIGN_NONE and alignmentPeriod must be specified; otherwise, an error is returned.
     */
    crossSeriesReducer?: string | null;
    /**
     * The set of fields to preserve when crossSeriesReducer is specified. The groupByFields determine how the time series are partitioned into subsets prior to applying the aggregation function. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The crossSeriesReducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in groupByFields are aggregated away. If groupByFields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If crossSeriesReducer is not defined, this field is ignored.
     */
    groupByFields?: string[] | null;
    /**
     * The approach to be used to align individual time series. Not all alignment functions may be applied to all time series, depending on the metric type and value type of the original time series. Alignment may change the metric type or the value type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If crossSeriesReducer is specified, then perSeriesAligner must be specified and not equal ALIGN_NONE and alignmentPeriod must be specified; otherwise, an error is returned.
     */
    perSeriesAligner?: string | null;
  }
  /**
   * A chart axis.
   */
  export interface Schema$Axis {
    /**
     * The label of the axis.
     */
    label?: string | null;
    /**
     * The axis scale. By default, a linear scale is used.
     */
    scale?: string | null;
  }
  /**
   * Options to control visual rendering of a chart.
   */
  export interface Schema$ChartOptions {
    /**
     * The chart mode.
     */
    mode?: string | null;
  }
  /**
   * Defines the layout properties and content for a column.
   */
  export interface Schema$Column {
    /**
     * The relative weight of this column. The column weight is used to adjust the width of columns on the screen (relative to peers). Greater the weight, greater the width of the column on the screen. If omitted, a value of 1 is used while rendering.
     */
    weight?: string | null;
    /**
     * The display widgets arranged vertically in this column.
     */
    widgets?: Schema$Widget[];
  }
  /**
   * A simplified layout that divides the available space into vertical columns and arranges a set of widgets vertically in each column.
   */
  export interface Schema$ColumnLayout {
    /**
     * The columns of content to display.
     */
    columns?: Schema$Column[];
  }
  /**
   * A Google Stackdriver dashboard. Dashboards define the content and layout of pages in the Stackdriver web application.
   */
  export interface Schema$Dashboard {
    /**
     * The content is divided into equally spaced columns and the widgets are arranged vertically.
     */
    columnLayout?: Schema$ColumnLayout;
    /**
     * The mutable, human-readable name.
     */
    displayName?: string | null;
    /**
     * etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. An etag is returned in the response to GetDashboard, and users are expected to put that etag in the request to UpdateDashboard to ensure that their change will be applied to the same version of the Dashboard configuration. The field should not be passed during dashboard creation.
     */
    etag?: string | null;
    /**
     * Content is arranged with a basic layout that re-flows a simple list of informational elements like widgets or tiles.
     */
    gridLayout?: Schema$GridLayout;
    /**
     * The resource name of the dashboard.
     */
    name?: string | null;
    /**
     * The content is divided into equally spaced rows and the widgets are arranged horizontally.
     */
    rowLayout?: Schema$RowLayout;
  }
  /**
   * Groups a time series query definition with charting options.
   */
  export interface Schema$DataSet {
    /**
     * A template string for naming TimeSeries in the resulting data set. This should be a string with interpolations of the form ${label_name}, which will resolve to the label&#39;s value.
     */
    legendTemplate?: string | null;
    /**
     * Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query For example, if the data is published once every 10 minutes, the min_alignment_period should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals.
     */
    minAlignmentPeriod?: string | null;
    /**
     * How this data should be plotted on the chart.
     */
    plotType?: string | null;
    /**
     * Fields for querying time series data from the Stackdriver metrics API.
     */
    timeSeriesQuery?: Schema$TimeSeriesQuery;
  }
  /**
   * A set of (label, value) pairs which were dropped during aggregation, attached to google.api.Distribution.Exemplars in google.api.Distribution values during aggregation.These values are used in combination with the label values that remain on the aggregated Distribution timeseries to construct the full label set for the exemplar values. The resulting full label set may be used to identify the specific task/job/instance (for example) which may be contributing to a long-tail, while allowing the storage savings of only storing aggregated distribution values for a large group.Note that there are no guarantees on ordering of the labels from exemplar-to-exemplar and from distribution-to-distribution in the same stream, and there may be duplicates. It is up to clients to resolve any ambiguities.
   */
  export interface Schema$DroppedLabels {
    /**
     * Map from label to its value, for all labels dropped in any aggregation.
     */
    label?: {[key: string]: string} | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo {   rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for Empty is empty JSON object {}.
   */
  export interface Schema$Empty {}
  /**
   * A single field of a message type.
   */
  export interface Schema$Field {
    /**
     * The field cardinality.
     */
    cardinality?: string | null;
    /**
     * The string value of the default value of this field. Proto2 syntax only.
     */
    defaultValue?: string | null;
    /**
     * The field JSON name.
     */
    jsonName?: string | null;
    /**
     * The field type.
     */
    kind?: string | null;
    /**
     * The field name.
     */
    name?: string | null;
    /**
     * The field number.
     */
    number?: number | null;
    /**
     * The index of the field type in Type.oneofs, for message or enumeration types. The first type has index 1; zero means the type is not in the list.
     */
    oneofIndex?: number | null;
    /**
     * The protocol buffer options.
     */
    options?: Schema$Option[];
    /**
     * Whether to use alternative packed wire representation.
     */
    packed?: boolean | null;
    /**
     * The field type URL, without the scheme, for message or enumeration types. Example: &quot;type.googleapis.com/google.protobuf.Timestamp&quot;.
     */
    typeUrl?: string | null;
  }
  /**
   * A gauge chart shows where the current value sits within a pre-defined range. The upper and lower bounds should define the possible range of values for the scorecard&#39;s query (inclusive).
   */
  export interface Schema$GaugeView {
    /**
     * The lower bound for this gauge chart. The value of the chart should always be greater than or equal to this.
     */
    lowerBound?: number | null;
    /**
     * The upper bound for this gauge chart. The value of the chart should always be less than or equal to this.
     */
    upperBound?: number | null;
  }
  /**
   * A basic layout divides the available space into vertical columns of equal width and arranges a list of widgets using a row-first strategy.
   */
  export interface Schema$GridLayout {
    /**
     * The number of columns into which the view&#39;s width is divided. If omitted or set to zero, a system default will be used while rendering.
     */
    columns?: string | null;
    /**
     * The informational elements that are arranged into the columns row-first.
     */
    widgets?: Schema$Widget[];
  }
  /**
   * The ListDashboards request.
   */
  export interface Schema$ListDashboardsResponse {
    /**
     * The list of requested dashboards.
     */
    dashboards?: Schema$Dashboard[];
    /**
     * If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as pageToken in the next call to this method.
     */
    nextPageToken?: string | null;
  }
  /**
   * A protocol buffer option, which can be attached to a message, field, enumeration, etc.
   */
  export interface Schema$Option {
    /**
     * The option&#39;s name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, &quot;map_entry&quot;. For custom options, it should be the fully-qualified name. For example, &quot;google.api.http&quot;.
     */
    name?: string | null;
    /**
     * The option&#39;s value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type.
     */
    value?: {[key: string]: any} | null;
  }
  /**
   * Describes a ranking-based time series filter. Each input time series is ranked with an aligner. The filter lets through up to num_time_series time series, selecting them based on the relative ranking.
   */
  export interface Schema$PickTimeSeriesFilter {
    /**
     * How to use the ranking to select time series that pass through the filter.
     */
    direction?: string | null;
    /**
     * How many time series to return.
     */
    numTimeSeries?: number | null;
    /**
     * rankingMethod is applied to each time series independently to produce the value which will be used to compare the time series to other time series.
     */
    rankingMethod?: string | null;
  }
  /**
   * Describes a query to build the numerator or denominator of a TimeSeriesFilterRatio.
   */
  export interface Schema$RatioPart {
    /**
     * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
     */
    aggregation?: Schema$Aggregation;
    /**
     * Required. The monitoring filter that identifies the metric types, resources, and projects to query.
     */
    filter?: string | null;
  }
  /**
   * Defines the layout properties and content for a row.
   */
  export interface Schema$Row {
    /**
     * The relative weight of this row. The row weight is used to adjust the height of rows on the screen (relative to peers). Greater the weight, greater the height of the row on the screen. If omitted, a value of 1 is used while rendering.
     */
    weight?: string | null;
    /**
     * The display widgets arranged horizontally in this row.
     */
    widgets?: Schema$Widget[];
  }
  /**
   * A simplified layout that divides the available space into rows and arranges a set of widgets horizontally in each row.
   */
  export interface Schema$RowLayout {
    /**
     * The rows of content to display.
     */
    rows?: Schema$Row[];
  }
  /**
   * A widget showing the latest value of a metric, and how this value relates to one or more thresholds.
   */
  export interface Schema$Scorecard {
    /**
     * Will cause the scorecard to show a gauge chart.
     */
    gaugeView?: Schema$GaugeView;
    /**
     * Will cause the scorecard to show a spark chart.
     */
    sparkChartView?: Schema$SparkChartView;
    /**
     * The thresholds used to determine the state of the scorecard given the time series&#39; current value. For an actual value x, the scorecard is in a danger state if x is less than or equal to a danger threshold that triggers below, or greater than or equal to a danger threshold that triggers above. Similarly, if x is above/below a warning threshold that triggers above/below, then the scorecard is in a warning state - unless x also puts it in a danger state. (Danger trumps warning.)As an example, consider a scorecard with the following four thresholds: {  value: 90,  category: &#39;DANGER&#39;,  trigger: &#39;ABOVE&#39;, }, {  value: 70,  category: &#39;WARNING&#39;,  trigger: &#39;ABOVE&#39;, }, {  value: 10,  category: &#39;DANGER&#39;,  trigger: &#39;BELOW&#39;, }, {  value: 20,  category: &#39;WARNING&#39;,  trigger: &#39;BELOW&#39;, }Then: values less than or equal to 10 would put the scorecard in a DANGER state, values greater than 10 but less than or equal to 20 a WARNING state, values strictly between 20 and 70 an OK state, values greater than or equal to 70 but less than 90 a WARNING state, and values greater than or equal to 90 a DANGER state.
     */
    thresholds?: Schema$Threshold[];
    /**
     * Fields for querying time series data from the Stackdriver metrics API.
     */
    timeSeriesQuery?: Schema$TimeSeriesQuery;
  }
  /**
   * SourceContext represents information about the source of a protobuf element, like the file in which it is defined.
   */
  export interface Schema$SourceContext {
    /**
     * The path-qualified name of the .proto file that contained the associated protobuf element. For example: &quot;google/protobuf/source_context.proto&quot;.
     */
    fileName?: string | null;
  }
  /**
   * The context of a span, attached to google.api.Distribution.Exemplars in google.api.Distribution values during aggregation.It contains the name of a span with format:  projects/PROJECT_ID/traces/TRACE_ID/spans/SPAN_ID
   */
  export interface Schema$SpanContext {
    /**
     * The resource name of the span in the following format: projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/[SPAN_ID] TRACE_ID is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array.SPAN_ID is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array.
     */
    spanName?: string | null;
  }
  /**
   * A sparkChart is a small chart suitable for inclusion in a table-cell or inline in text. This message contains the configuration for a sparkChart to show up on a Scorecard, showing recent trends of the scorecard&#39;s timeseries.
   */
  export interface Schema$SparkChartView {
    /**
     * The lower bound on data point frequency in the chart implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes it would not make sense to fetch and align data at one minute intervals. This field is optional and exists only as a hint.
     */
    minAlignmentPeriod?: string | null;
    /**
     * The type of sparkchart to show in this chartView.
     */
    sparkChartType?: string | null;
  }
  /**
   * A filter that ranks streams based on their statistical relation to other streams in a request.
   */
  export interface Schema$StatisticalTimeSeriesFilter {
    /**
     * How many time series to output.
     */
    numTimeSeries?: number | null;
    /**
     * rankingMethod is applied to a set of time series, and then the produced value for each individual time series is used to compare a given time series to others. These are methods that cannot be applied stream-by-stream, but rather require the full context of a request to evaluate time series.
     */
    rankingMethod?: string | null;
  }
  /**
   * A widget that displays textual content.
   */
  export interface Schema$Text {
    /**
     * The text content to be displayed.
     */
    content?: string | null;
    /**
     * How the text content is formatted.
     */
    format?: string | null;
  }
  /**
   * Defines a threshold for categorizing time series values.
   */
  export interface Schema$Threshold {
    /**
     * The state color for this threshold. Color is not allowed in a XyChart.
     */
    color?: string | null;
    /**
     * The direction for the current threshold. Direction is not allowed in a XyChart.
     */
    direction?: string | null;
    /**
     * A label for the threshold.
     */
    label?: string | null;
    /**
     * The value of the threshold. The value should be defined in the native scale of the metric.
     */
    value?: number | null;
  }
  /**
   * A filter that defines a subset of time series data that is displayed in a widget. Time series data is fetched using the ListTimeSeries method.
   */
  export interface Schema$TimeSeriesFilter {
    /**
     * By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.
     */
    aggregation?: Schema$Aggregation;
    /**
     * Required. The monitoring filter that identifies the metric types, resources, and projects to query.
     */
    filter?: string | null;
    /**
     * Ranking based time series filter.
     */
    pickTimeSeriesFilter?: Schema$PickTimeSeriesFilter;
    /**
     * Statistics based time series filter.
     */
    statisticalTimeSeriesFilter?: Schema$StatisticalTimeSeriesFilter;
  }
  /**
   * A pair of time series filters that define a ratio computation. The output time series is the pair-wise division of each aligned element from the numerator and denominator time series.
   */
  export interface Schema$TimeSeriesFilterRatio {
    /**
     * The denominator of the ratio.
     */
    denominator?: Schema$RatioPart;
    /**
     * The numerator of the ratio.
     */
    numerator?: Schema$RatioPart;
    /**
     * Ranking based time series filter.
     */
    pickTimeSeriesFilter?: Schema$PickTimeSeriesFilter;
    /**
     * Apply a second aggregation after the ratio is computed.
     */
    secondaryAggregation?: Schema$Aggregation;
    /**
     * Statistics based time series filter.
     */
    statisticalTimeSeriesFilter?: Schema$StatisticalTimeSeriesFilter;
  }
  /**
   * TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API.
   */
  export interface Schema$TimeSeriesQuery {
    /**
     * Filter parameters to fetch time series.
     */
    timeSeriesFilter?: Schema$TimeSeriesFilter;
    /**
     * Parameters to fetch a ratio between two time series filters.
     */
    timeSeriesFilterRatio?: Schema$TimeSeriesFilterRatio;
    /**
     * The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the unit field in MetricDescriptor.
     */
    unitOverride?: string | null;
  }
  /**
   * A protocol buffer message type.
   */
  export interface Schema$Type {
    /**
     * The list of fields.
     */
    fields?: Schema$Field[];
    /**
     * The fully qualified message name.
     */
    name?: string | null;
    /**
     * The list of types appearing in oneof definitions in this type.
     */
    oneofs?: string[] | null;
    /**
     * The protocol buffer options.
     */
    options?: Schema$Option[];
    /**
     * The source context.
     */
    sourceContext?: Schema$SourceContext;
    /**
     * The source syntax.
     */
    syntax?: string | null;
  }
  /**
   * Widget contains a single dashboard component and configuration of how to present the component in the dashboard.
   */
  export interface Schema$Widget {
    /**
     * A blank space.
     */
    blank?: Schema$Empty;
    /**
     * A scorecard summarizing time series data.
     */
    scorecard?: Schema$Scorecard;
    /**
     * A raw string or markdown displaying textual content.
     */
    text?: Schema$Text;
    /**
     * Optional. The title of the widget.
     */
    title?: string | null;
    /**
     * A chart of time series data.
     */
    xyChart?: Schema$XyChart;
  }
  /**
   * A chart that displays data on a 2D (X and Y axes) plane.
   */
  export interface Schema$XyChart {
    /**
     * Display options for the chart.
     */
    chartOptions?: Schema$ChartOptions;
    /**
     * The data displayed in this chart.
     */
    dataSets?: Schema$DataSet[];
    /**
     * Threshold lines drawn horizontally across the chart.
     */
    thresholds?: Schema$Threshold[];
    /**
     * The duration used to display a comparison chart. A comparison chart simultaneously shows values from two similar-length time periods (e.g., week-over-week metrics). The duration must be positive, and it can only be applied to charts with data sets of LINE plot type.
     */
    timeshiftDuration?: string | null;
    /**
     * The properties applied to the X axis.
     */
    xAxis?: Schema$Axis;
    /**
     * The properties applied to the Y axis.
     */
    yAxis?: Schema$Axis;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    dashboards: Resource$Projects$Dashboards;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.dashboards = new Resource$Projects$Dashboards(this.context);
    }
  }

  export class Resource$Projects$Dashboards {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * monitoring.projects.dashboards.create
     * @desc Creates a new custom dashboard.This method requires the monitoring.dashboards.create permission on the specified project. For more information, see Google Cloud IAM (https://cloud.google.com/iam).
     * @alias monitoring.projects.dashboards.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project on which to execute the request. The format is "projects/{project_id_or_number}". The {project_id_or_number} must match the dashboard resource name.
     * @param {().Dashboard} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Dashboards$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dashboard>;
    create(
      params: Params$Resource$Projects$Dashboards$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Dashboard>,
      callback: BodyResponseCallback<Schema$Dashboard>
    ): void;
    create(
      params: Params$Resource$Projects$Dashboards$Create,
      callback: BodyResponseCallback<Schema$Dashboard>
    ): void;
    create(callback: BodyResponseCallback<Schema$Dashboard>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Dashboards$Create
        | BodyResponseCallback<Schema$Dashboard>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Dashboard>,
      callback?: BodyResponseCallback<Schema$Dashboard>
    ): void | GaxiosPromise<Schema$Dashboard> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Dashboards$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Dashboards$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dashboards').replace(
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
        createAPIRequest<Schema$Dashboard>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dashboard>(parameters);
      }
    }

    /**
     * monitoring.projects.dashboards.delete
     * @desc Deletes an existing custom dashboard.This method requires the monitoring.dashboards.delete permission on the specified dashboard. For more information, see Google Cloud IAM (https://cloud.google.com/iam).
     * @alias monitoring.projects.dashboards.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the Dashboard. The format is "projects/{project_id_or_number}/dashboards/{dashboard_id}".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Dashboards$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Dashboards$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Dashboards$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Dashboards$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Dashboards$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Dashboards$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * monitoring.projects.dashboards.get
     * @desc Fetches a specific dashboard.This method requires the monitoring.dashboards.get permission on the specified dashboard. For more information, see Google Cloud IAM (https://cloud.google.com/iam).
     * @alias monitoring.projects.dashboards.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the Dashboard. The format is one of "dashboards/{dashboard_id}" (for system dashboards) or "projects/{project_id_or_number}/dashboards/{dashboard_id}" (for custom dashboards).
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Dashboards$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dashboard>;
    get(
      params: Params$Resource$Projects$Dashboards$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Dashboard>,
      callback: BodyResponseCallback<Schema$Dashboard>
    ): void;
    get(
      params: Params$Resource$Projects$Dashboards$Get,
      callback: BodyResponseCallback<Schema$Dashboard>
    ): void;
    get(callback: BodyResponseCallback<Schema$Dashboard>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Dashboards$Get
        | BodyResponseCallback<Schema$Dashboard>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Dashboard>,
      callback?: BodyResponseCallback<Schema$Dashboard>
    ): void | GaxiosPromise<Schema$Dashboard> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Dashboards$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Dashboards$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
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
        createAPIRequest<Schema$Dashboard>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dashboard>(parameters);
      }
    }

    /**
     * monitoring.projects.dashboards.list
     * @desc Lists the existing dashboards.This method requires the monitoring.dashboards.list permission on the specified project. For more information, see Google Cloud IAM (https://cloud.google.com/iam).
     * @alias monitoring.projects.dashboards.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize A positive number that is the maximum number of results to return. If unspecified, a default of 1000 is used.
     * @param {string=} params.pageToken If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     * @param {string} params.parent Required. The scope of the dashboards to list. A project scope must be specified in the form of "projects/{project_id_or_number}".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Dashboards$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDashboardsResponse>;
    list(
      params: Params$Resource$Projects$Dashboards$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDashboardsResponse>,
      callback: BodyResponseCallback<Schema$ListDashboardsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Dashboards$List,
      callback: BodyResponseCallback<Schema$ListDashboardsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListDashboardsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Dashboards$List
        | BodyResponseCallback<Schema$ListDashboardsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDashboardsResponse>,
      callback?: BodyResponseCallback<Schema$ListDashboardsResponse>
    ): void | GaxiosPromise<Schema$ListDashboardsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Dashboards$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Dashboards$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/dashboards').replace(
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
        createAPIRequest<Schema$ListDashboardsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListDashboardsResponse>(parameters);
      }
    }

    /**
     * monitoring.projects.dashboards.patch
     * @desc Replaces an existing custom dashboard with a new definition.This method requires the monitoring.dashboards.update permission on the specified dashboard. For more information, see Google Cloud IAM (https://cloud.google.com/iam).
     * @alias monitoring.projects.dashboards.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the dashboard.
     * @param {().Dashboard} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Dashboards$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dashboard>;
    patch(
      params: Params$Resource$Projects$Dashboards$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Dashboard>,
      callback: BodyResponseCallback<Schema$Dashboard>
    ): void;
    patch(
      params: Params$Resource$Projects$Dashboards$Patch,
      callback: BodyResponseCallback<Schema$Dashboard>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Dashboard>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Dashboards$Patch
        | BodyResponseCallback<Schema$Dashboard>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Dashboard>,
      callback?: BodyResponseCallback<Schema$Dashboard>
    ): void | GaxiosPromise<Schema$Dashboard> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Dashboards$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Dashboards$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://monitoring.googleapis.com/';
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
        createAPIRequest<Schema$Dashboard>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dashboard>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Dashboards$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The project on which to execute the request. The format is "projects/{project_id_or_number}". The {project_id_or_number} must match the dashboard resource name.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Dashboard;
  }
  export interface Params$Resource$Projects$Dashboards$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the Dashboard. The format is "projects/{project_id_or_number}/dashboards/{dashboard_id}".
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Dashboards$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the Dashboard. The format is one of "dashboards/{dashboard_id}" (for system dashboards) or "projects/{project_id_or_number}/dashboards/{dashboard_id}" (for custom dashboards).
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Dashboards$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * A positive number that is the maximum number of results to return. If unspecified, a default of 1000 is used.
     */
    pageSize?: number;
    /**
     * If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     */
    pageToken?: string;
    /**
     * Required. The scope of the dashboards to list. A project scope must be specified in the form of "projects/{project_id_or_number}".
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Dashboards$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The resource name of the dashboard.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Dashboard;
  }
}
