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

export namespace sheets_v4 {
  export interface Options extends GlobalOptions {
    version: 'v4';
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
   * Google Sheets API
   *
   * Reads and writes Google Sheets.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const sheets = google.sheets('v4');
   * ```
   */
  export class Sheets {
    context: APIRequestContext;
    spreadsheets: Resource$Spreadsheets;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.spreadsheets = new Resource$Spreadsheets(this.context);
    }
  }

  /**
   * Adds a new banded range to the spreadsheet.
   */
  export interface Schema$AddBandingRequest {
    /**
     * The banded range to add. The bandedRangeId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a range that already exists.)
     */
    bandedRange?: Schema$BandedRange;
  }
  /**
   * The result of adding a banded range.
   */
  export interface Schema$AddBandingResponse {
    /**
     * The banded range that was added.
     */
    bandedRange?: Schema$BandedRange;
  }
  /**
   * Adds a chart to a sheet in the spreadsheet.
   */
  export interface Schema$AddChartRequest {
    /**
     * The chart that should be added to the spreadsheet, including the position where it should be placed. The chartId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of an embedded object that already exists.)
     */
    chart?: Schema$EmbeddedChart;
  }
  /**
   * The result of adding a chart to a spreadsheet.
   */
  export interface Schema$AddChartResponse {
    /**
     * The newly added chart.
     */
    chart?: Schema$EmbeddedChart;
  }
  /**
   * Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented.
   */
  export interface Schema$AddConditionalFormatRuleRequest {
    /**
     * The zero-based index where the rule should be inserted.
     */
    index?: number | null;
    /**
     * The rule to add.
     */
    rule?: Schema$ConditionalFormatRule;
  }
  /**
   * Adds a data source. After the data source is added successfully, an associated DATA_SOURCE sheet is created and an execution is triggered to refresh the sheet to read data from the data source. The request requires an additional `bigquery.readonly` OAuth scope if you are adding a BigQuery data source.
   */
  export interface Schema$AddDataSourceRequest {
    /**
     * The data source to add.
     */
    dataSource?: Schema$DataSource;
  }
  /**
   * The result of adding a data source.
   */
  export interface Schema$AddDataSourceResponse {
    /**
     * The data execution status.
     */
    dataExecutionStatus?: Schema$DataExecutionStatus;
    /**
     * The data source that was created.
     */
    dataSource?: Schema$DataSource;
  }
  /**
   * Creates a group over the specified range. If the requested range is a superset of the range of an existing group G, then the depth of G is incremented and this new group G' has the depth of that group. For example, a group [C:D, depth 1] + [B:E] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range is a subset of the range of an existing group G, then the depth of the new group G' becomes one greater than the depth of G. For example, a group [B:E, depth 1] + [C:D] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range starts before and ends within, or starts within and ends after, the range of an existing group G, then the range of the existing group G becomes the union of the ranges, and the new group G' has depth one greater than the depth of G and range as the intersection of the ranges. For example, a group [B:D, depth 1] + [C:E] results in groups [B:E, depth 1] and [C:D, depth 2].
   */
  export interface Schema$AddDimensionGroupRequest {
    /**
     * The range over which to create a group.
     */
    range?: Schema$DimensionRange;
  }
  /**
   * The result of adding a group.
   */
  export interface Schema$AddDimensionGroupResponse {
    /**
     * All groups of a dimension after adding a group to that dimension.
     */
    dimensionGroups?: Schema$DimensionGroup[];
  }
  /**
   * Adds a filter view.
   */
  export interface Schema$AddFilterViewRequest {
    /**
     * The filter to add. The filterViewId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a filter that already exists.)
     */
    filter?: Schema$FilterView;
  }
  /**
   * The result of adding a filter view.
   */
  export interface Schema$AddFilterViewResponse {
    /**
     * The newly added filter view.
     */
    filter?: Schema$FilterView;
  }
  /**
   * Adds a named range to the spreadsheet.
   */
  export interface Schema$AddNamedRangeRequest {
    /**
     * The named range to add. The namedRangeId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a range that already exists.)
     */
    namedRange?: Schema$NamedRange;
  }
  /**
   * The result of adding a named range.
   */
  export interface Schema$AddNamedRangeResponse {
    /**
     * The named range to add.
     */
    namedRange?: Schema$NamedRange;
  }
  /**
   * Adds a new protected range.
   */
  export interface Schema$AddProtectedRangeRequest {
    /**
     * The protected range to be added. The protectedRangeId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a range that already exists.)
     */
    protectedRange?: Schema$ProtectedRange;
  }
  /**
   * The result of adding a new protected range.
   */
  export interface Schema$AddProtectedRangeResponse {
    /**
     * The newly added protected range.
     */
    protectedRange?: Schema$ProtectedRange;
  }
  /**
   * Adds a new sheet. When a sheet is added at a given index, all subsequent sheets' indexes are incremented. To add an object sheet, use AddChartRequest instead and specify EmbeddedObjectPosition.sheetId or EmbeddedObjectPosition.newSheet.
   */
  export interface Schema$AddSheetRequest {
    /**
     * The properties the new sheet should have. All properties are optional. The sheetId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a sheet that already exists.)
     */
    properties?: Schema$SheetProperties;
  }
  /**
   * The result of adding a sheet.
   */
  export interface Schema$AddSheetResponse {
    /**
     * The properties of the newly added sheet.
     */
    properties?: Schema$SheetProperties;
  }
  /**
   * Adds a slicer to a sheet in the spreadsheet.
   */
  export interface Schema$AddSlicerRequest {
    /**
     * The slicer that should be added to the spreadsheet, including the position where it should be placed. The slicerId field is optional; if one is not set, an id will be randomly generated. (It is an error to specify the ID of a slicer that already exists.)
     */
    slicer?: Schema$Slicer;
  }
  /**
   * The result of adding a slicer to a spreadsheet.
   */
  export interface Schema$AddSlicerResponse {
    /**
     * The newly added slicer.
     */
    slicer?: Schema$Slicer;
  }
  /**
   * Adds a new table to the spreadsheet.
   */
  export interface Schema$AddTableRequest {
    /**
     * Required. The table to add.
     */
    table?: Schema$Table;
  }
  /**
   * The result of adding a table.
   */
  export interface Schema$AddTableResponse {
    /**
     * Output only. The table that was added.
     */
    table?: Schema$Table;
  }
  /**
   * Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary.
   */
  export interface Schema$AppendCellsRequest {
    /**
     * The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
    /**
     * The data to append.
     */
    rows?: Schema$RowData[];
    /**
     * The sheet ID to append the data to.
     */
    sheetId?: number | null;
    /**
     * The ID of the table to append data to. The data will be only appended to the table body. This field also takes precedence over the `sheet_id` field.
     */
    tableId?: string | null;
  }
  /**
   * Appends rows or columns to the end of a sheet.
   */
  export interface Schema$AppendDimensionRequest {
    /**
     * Whether rows or columns should be appended.
     */
    dimension?: string | null;
    /**
     * The number of rows or columns to append.
     */
    length?: number | null;
    /**
     * The sheet to append rows or columns to.
     */
    sheetId?: number | null;
  }
  /**
   * The response when updating a range of values in a spreadsheet.
   */
  export interface Schema$AppendValuesResponse {
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string | null;
    /**
     * The range (in A1 notation) of the table that values are being appended to (before the values were appended). Empty if no table was found.
     */
    tableRange?: string | null;
    /**
     * Information about the updates that were applied.
     */
    updates?: Schema$UpdateValuesResponse;
  }
  /**
   * Fills in more data based on existing data.
   */
  export interface Schema$AutoFillRequest {
    /**
     * The range to autofill. This will examine the range and detect the location that has data and automatically fill that data in to the rest of the range.
     */
    range?: Schema$GridRange;
    /**
     * The source and destination areas to autofill. This explicitly lists the source of the autofill and where to extend that data.
     */
    sourceAndDestination?: Schema$SourceAndDestination;
    /**
     * True if we should generate data with the "alternate" series. This differs based on the type and amount of source data.
     */
    useAlternateSeries?: boolean | null;
  }
  /**
   * Automatically resizes one or more dimensions based on the contents of the cells in that dimension.
   */
  export interface Schema$AutoResizeDimensionsRequest {
    /**
     * The dimensions on a data source sheet to automatically resize.
     */
    dataSourceSheetDimensions?: Schema$DataSourceSheetDimensionRange;
    /**
     * The dimensions to automatically resize.
     */
    dimensions?: Schema$DimensionRange;
  }
  /**
   * A banded (alternating colors) range in a sheet.
   */
  export interface Schema$BandedRange {
    /**
     * The ID of the banded range. If unset, refer to banded_range_reference.
     */
    bandedRangeId?: number | null;
    /**
     * Output only. The reference of the banded range, used to identify the ID that is not supported by the banded_range_id.
     */
    bandedRangeReference?: string | null;
    /**
     * Properties for column bands. These properties are applied on a column- by-column basis throughout all the columns in the range. At least one of row_properties or column_properties must be specified.
     */
    columnProperties?: Schema$BandingProperties;
    /**
     * The range over which these properties are applied.
     */
    range?: Schema$GridRange;
    /**
     * Properties for row bands. These properties are applied on a row-by-row basis throughout all the rows in the range. At least one of row_properties or column_properties must be specified.
     */
    rowProperties?: Schema$BandingProperties;
  }
  /**
   * Properties referring a single dimension (either row or column). If both BandedRange.row_properties and BandedRange.column_properties are set, the fill colors are applied to cells according to the following rules: * header_color and footer_color take priority over band colors. * first_band_color takes priority over second_band_color. * row_properties takes priority over column_properties. For example, the first row color takes priority over the first column color, but the first column color takes priority over the second row color. Similarly, the row header takes priority over the column header in the top left cell, but the column header takes priority over the first row color if the row header is not set.
   */
  export interface Schema$BandingProperties {
    /**
     * The first color that is alternating. (Required) Deprecated: Use first_band_color_style.
     */
    firstBandColor?: Schema$Color;
    /**
     * The first color that is alternating. (Required) If first_band_color is also set, this field takes precedence.
     */
    firstBandColorStyle?: Schema$ColorStyle;
    /**
     * The color of the last row or column. If this field is not set, the last row or column is filled with either first_band_color or second_band_color, depending on the color of the previous row or column. Deprecated: Use footer_color_style.
     */
    footerColor?: Schema$Color;
    /**
     * The color of the last row or column. If this field is not set, the last row or column is filled with either first_band_color or second_band_color, depending on the color of the previous row or column. If footer_color is also set, this field takes precedence.
     */
    footerColorStyle?: Schema$ColorStyle;
    /**
     * The color of the first row or column. If this field is set, the first row or column is filled with this color and the colors alternate between first_band_color and second_band_color starting from the second row or column. Otherwise, the first row or column is filled with first_band_color and the colors proceed to alternate as they normally would. Deprecated: Use header_color_style.
     */
    headerColor?: Schema$Color;
    /**
     * The color of the first row or column. If this field is set, the first row or column is filled with this color and the colors alternate between first_band_color and second_band_color starting from the second row or column. Otherwise, the first row or column is filled with first_band_color and the colors proceed to alternate as they normally would. If header_color is also set, this field takes precedence.
     */
    headerColorStyle?: Schema$ColorStyle;
    /**
     * The second color that is alternating. (Required) Deprecated: Use second_band_color_style.
     */
    secondBandColor?: Schema$Color;
    /**
     * The second color that is alternating. (Required) If second_band_color is also set, this field takes precedence.
     */
    secondBandColorStyle?: Schema$ColorStyle;
  }
  /**
   * Formatting options for baseline value.
   */
  export interface Schema$BaselineValueFormat {
    /**
     * The comparison type of key value with baseline value.
     */
    comparisonType?: string | null;
    /**
     * Description which is appended after the baseline value. This field is optional.
     */
    description?: string | null;
    /**
     * Color to be used, in case baseline value represents a negative change for key value. This field is optional. Deprecated: Use negative_color_style.
     */
    negativeColor?: Schema$Color;
    /**
     * Color to be used, in case baseline value represents a negative change for key value. This field is optional. If negative_color is also set, this field takes precedence.
     */
    negativeColorStyle?: Schema$ColorStyle;
    /**
     * Specifies the horizontal text positioning of baseline value. This field is optional. If not specified, default positioning is used.
     */
    position?: Schema$TextPosition;
    /**
     * Color to be used, in case baseline value represents a positive change for key value. This field is optional. Deprecated: Use positive_color_style.
     */
    positiveColor?: Schema$Color;
    /**
     * Color to be used, in case baseline value represents a positive change for key value. This field is optional. If positive_color is also set, this field takes precedence.
     */
    positiveColorStyle?: Schema$ColorStyle;
    /**
     * Text formatting options for baseline value. The link field is not supported.
     */
    textFormat?: Schema$TextFormat;
  }
  /**
   * An axis of the chart. A chart may not have more than one axis per axis position.
   */
  export interface Schema$BasicChartAxis {
    /**
     * The format of the title. Only valid if the axis is not associated with the domain. The link field is not supported.
     */
    format?: Schema$TextFormat;
    /**
     * The position of this axis.
     */
    position?: string | null;
    /**
     * The title of this axis. If set, this overrides any title inferred from headers of the data.
     */
    title?: string | null;
    /**
     * The axis title text position.
     */
    titleTextPosition?: Schema$TextPosition;
    /**
     * The view window options for this axis.
     */
    viewWindowOptions?: Schema$ChartAxisViewWindowOptions;
  }
  /**
   * The domain of a chart. For example, if charting stock prices over time, this would be the date.
   */
  export interface Schema$BasicChartDomain {
    /**
     * The data of the domain. For example, if charting stock prices over time, this is the data representing the dates.
     */
    domain?: Schema$ChartData;
    /**
     * True to reverse the order of the domain values (horizontal axis).
     */
    reversed?: boolean | null;
  }
  /**
   * A single series of data in a chart. For example, if charting stock prices over time, multiple series may exist, one for the "Open Price", "High Price", "Low Price" and "Close Price".
   */
  export interface Schema$BasicChartSeries {
    /**
     * The color for elements (such as bars, lines, and points) associated with this series. If empty, a default color is used. Deprecated: Use color_style.
     */
    color?: Schema$Color;
    /**
     * The color for elements (such as bars, lines, and points) associated with this series. If empty, a default color is used. If color is also set, this field takes precedence.
     */
    colorStyle?: Schema$ColorStyle;
    /**
     * Information about the data labels for this series.
     */
    dataLabel?: Schema$DataLabel;
    /**
     * The line style of this series. Valid only if the chartType is AREA, LINE, or SCATTER. COMBO charts are also supported if the series chart type is AREA or LINE.
     */
    lineStyle?: Schema$LineStyle;
    /**
     * The style for points associated with this series. Valid only if the chartType is AREA, LINE, or SCATTER. COMBO charts are also supported if the series chart type is AREA, LINE, or SCATTER. If empty, a default point style is used.
     */
    pointStyle?: Schema$PointStyle;
    /**
     * The data being visualized in this chart series.
     */
    series?: Schema$ChartData;
    /**
     * Style override settings for series data points.
     */
    styleOverrides?: Schema$BasicSeriesDataPointStyleOverride[];
    /**
     * The minor axis that will specify the range of values for this series. For example, if charting stocks over time, the "Volume" series may want to be pinned to the right with the prices pinned to the left, because the scale of trading volume is different than the scale of prices. It is an error to specify an axis that isn't a valid minor axis for the chart's type.
     */
    targetAxis?: string | null;
    /**
     * The type of this series. Valid only if the chartType is COMBO. Different types will change the way the series is visualized. Only LINE, AREA, and COLUMN are supported.
     */
    type?: string | null;
  }
  /**
   * The specification for a basic chart. See BasicChartType for the list of charts this supports.
   */
  export interface Schema$BasicChartSpec {
    /**
     * The axis on the chart.
     */
    axis?: Schema$BasicChartAxis[];
    /**
     * The type of the chart.
     */
    chartType?: string | null;
    /**
     * The behavior of tooltips and data highlighting when hovering on data and chart area.
     */
    compareMode?: string | null;
    /**
     * The domain of data this is charting. Only a single domain is supported.
     */
    domains?: Schema$BasicChartDomain[];
    /**
     * The number of rows or columns in the data that are "headers". If not set, Google Sheets will guess how many rows are headers based on the data. (Note that BasicChartAxis.title may override the axis title inferred from the header values.)
     */
    headerCount?: number | null;
    /**
     * If some values in a series are missing, gaps may appear in the chart (e.g, segments of lines in a line chart will be missing). To eliminate these gaps set this to true. Applies to Line, Area, and Combo charts.
     */
    interpolateNulls?: boolean | null;
    /**
     * The position of the chart legend.
     */
    legendPosition?: string | null;
    /**
     * Gets whether all lines should be rendered smooth or straight by default. Applies to Line charts.
     */
    lineSmoothing?: boolean | null;
    /**
     * The data this chart is visualizing.
     */
    series?: Schema$BasicChartSeries[];
    /**
     * The stacked type for charts that support vertical stacking. Applies to Area, Bar, Column, Combo, and Stepped Area charts.
     */
    stackedType?: string | null;
    /**
     * True to make the chart 3D. Applies to Bar and Column charts.
     */
    threeDimensional?: boolean | null;
    /**
     * Controls whether to display additional data labels on stacked charts which sum the total value of all stacked values at each value along the domain axis. These data labels can only be set when chart_type is one of AREA, BAR, COLUMN, COMBO or STEPPED_AREA and stacked_type is either STACKED or PERCENT_STACKED. In addition, for COMBO, this will only be supported if there is only one type of stackable series type or one type has more series than the others and each of the other types have no more than one series. For example, if a chart has two stacked bar series and one area series, the total data labels will be supported. If it has three bar series and two area series, total data labels are not allowed. Neither CUSTOM nor placement can be set on the total_data_label.
     */
    totalDataLabel?: Schema$DataLabel;
  }
  /**
   * The default filter associated with a sheet.
   */
  export interface Schema$BasicFilter {
    /**
     * The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs.
     */
    criteria?: {[key: string]: Schema$FilterCriteria} | null;
    /**
     * The filter criteria per column. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence.
     */
    filterSpecs?: Schema$FilterSpec[];
    /**
     * The range the filter covers.
     */
    range?: Schema$GridRange;
    /**
     * The sort order per column. Later specifications are used when values are equal in the earlier specifications.
     */
    sortSpecs?: Schema$SortSpec[];
    /**
     * The table this filter is backed by, if any. When writing, only one of range or table_id may be set.
     */
    tableId?: string | null;
  }
  /**
   * Style override settings for a single series data point.
   */
  export interface Schema$BasicSeriesDataPointStyleOverride {
    /**
     * Color of the series data point. If empty, the series default is used. Deprecated: Use color_style.
     */
    color?: Schema$Color;
    /**
     * Color of the series data point. If empty, the series default is used. If color is also set, this field takes precedence.
     */
    colorStyle?: Schema$ColorStyle;
    /**
     * The zero-based index of the series data point.
     */
    index?: number | null;
    /**
     * Point style of the series data point. Valid only if the chartType is AREA, LINE, or SCATTER. COMBO charts are also supported if the series chart type is AREA, LINE, or SCATTER. If empty, the series default is used.
     */
    pointStyle?: Schema$PointStyle;
  }
  /**
   * The request for clearing more than one range selected by a DataFilter in a spreadsheet.
   */
  export interface Schema$BatchClearValuesByDataFilterRequest {
    /**
     * The DataFilters used to determine which ranges to clear.
     */
    dataFilters?: Schema$DataFilter[];
  }
  /**
   * The response when clearing a range of values selected with DataFilters in a spreadsheet.
   */
  export interface Schema$BatchClearValuesByDataFilterResponse {
    /**
     * The ranges that were cleared, in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). If the requests are for an unbounded range or a ranger larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits.
     */
    clearedRanges?: string[] | null;
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string | null;
  }
  /**
   * The request for clearing more than one range of values in a spreadsheet.
   */
  export interface Schema$BatchClearValuesRequest {
    /**
     * The ranges to clear, in [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell).
     */
    ranges?: string[] | null;
  }
  /**
   * The response when clearing a range of values in a spreadsheet.
   */
  export interface Schema$BatchClearValuesResponse {
    /**
     * The ranges that were cleared, in A1 notation. If the requests are for an unbounded range or a ranger larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits.
     */
    clearedRanges?: string[] | null;
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string | null;
  }
  /**
   * The request for retrieving a range of values in a spreadsheet selected by a set of DataFilters.
   */
  export interface Schema$BatchGetValuesByDataFilterRequest {
    /**
     * The data filters used to match the ranges of values to retrieve. Ranges that match any of the specified data filters are included in the response.
     */
    dataFilters?: Schema$DataFilter[];
    /**
     * How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     */
    dateTimeRenderOption?: string | null;
    /**
     * The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then a request that selects that range and sets `majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas a request that sets `majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
     */
    majorDimension?: string | null;
    /**
     * How values should be represented in the output. The default render option is FORMATTED_VALUE.
     */
    valueRenderOption?: string | null;
  }
  /**
   * The response when retrieving more than one range of values in a spreadsheet selected by DataFilters.
   */
  export interface Schema$BatchGetValuesByDataFilterResponse {
    /**
     * The ID of the spreadsheet the data was retrieved from.
     */
    spreadsheetId?: string | null;
    /**
     * The requested values with the list of data filters that matched them.
     */
    valueRanges?: Schema$MatchedValueRange[];
  }
  /**
   * The response when retrieving more than one range of values in a spreadsheet.
   */
  export interface Schema$BatchGetValuesResponse {
    /**
     * The ID of the spreadsheet the data was retrieved from.
     */
    spreadsheetId?: string | null;
    /**
     * The requested values. The order of the ValueRanges is the same as the order of the requested ranges.
     */
    valueRanges?: Schema$ValueRange[];
  }
  /**
   * The request for updating any aspect of a spreadsheet.
   */
  export interface Schema$BatchUpdateSpreadsheetRequest {
    /**
     * Determines if the update response should include the spreadsheet resource.
     */
    includeSpreadsheetInResponse?: boolean | null;
    /**
     * A list of updates to apply to the spreadsheet. Requests will be applied in the order they are specified. If any request is not valid, no requests will be applied.
     */
    requests?: Schema$Request[];
    /**
     * True if grid data should be returned. Meaningful only if include_spreadsheet_in_response is 'true'. This parameter is ignored if a field mask was set in the request.
     */
    responseIncludeGridData?: boolean | null;
    /**
     * Limits the ranges included in the response spreadsheet. Meaningful only if include_spreadsheet_in_response is 'true'.
     */
    responseRanges?: string[] | null;
  }
  /**
   * The reply for batch updating a spreadsheet.
   */
  export interface Schema$BatchUpdateSpreadsheetResponse {
    /**
     * The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.
     */
    replies?: Schema$Response[];
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string | null;
    /**
     * The spreadsheet after updates were applied. This is only set if BatchUpdateSpreadsheetRequest.include_spreadsheet_in_response is `true`.
     */
    updatedSpreadsheet?: Schema$Spreadsheet;
  }
  /**
   * The request for updating more than one range of values in a spreadsheet.
   */
  export interface Schema$BatchUpdateValuesByDataFilterRequest {
    /**
     * The new values to apply to the spreadsheet. If more than one range is matched by the specified DataFilter the specified values are applied to all of those ranges.
     */
    data?: Schema$DataFilterValueRange[];
    /**
     * Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns).
     */
    includeValuesInResponse?: boolean | null;
    /**
     * Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     */
    responseDateTimeRenderOption?: string | null;
    /**
     * Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
     */
    responseValueRenderOption?: string | null;
    /**
     * How the input data should be interpreted.
     */
    valueInputOption?: string | null;
  }
  /**
   * The response when updating a range of values in a spreadsheet.
   */
  export interface Schema$BatchUpdateValuesByDataFilterResponse {
    /**
     * The response for each range updated.
     */
    responses?: Schema$UpdateValuesByDataFilterResponse[];
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string | null;
    /**
     * The total number of cells updated.
     */
    totalUpdatedCells?: number | null;
    /**
     * The total number of columns where at least one cell in the column was updated.
     */
    totalUpdatedColumns?: number | null;
    /**
     * The total number of rows where at least one cell in the row was updated.
     */
    totalUpdatedRows?: number | null;
    /**
     * The total number of sheets where at least one cell in the sheet was updated.
     */
    totalUpdatedSheets?: number | null;
  }
  /**
   * The request for updating more than one range of values in a spreadsheet.
   */
  export interface Schema$BatchUpdateValuesRequest {
    /**
     * The new values to apply to the spreadsheet.
     */
    data?: Schema$ValueRange[];
    /**
     * Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns).
     */
    includeValuesInResponse?: boolean | null;
    /**
     * Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     */
    responseDateTimeRenderOption?: string | null;
    /**
     * Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
     */
    responseValueRenderOption?: string | null;
    /**
     * How the input data should be interpreted.
     */
    valueInputOption?: string | null;
  }
  /**
   * The response when updating a range of values in a spreadsheet.
   */
  export interface Schema$BatchUpdateValuesResponse {
    /**
     * One UpdateValuesResponse per requested range, in the same order as the requests appeared.
     */
    responses?: Schema$UpdateValuesResponse[];
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string | null;
    /**
     * The total number of cells updated.
     */
    totalUpdatedCells?: number | null;
    /**
     * The total number of columns where at least one cell in the column was updated.
     */
    totalUpdatedColumns?: number | null;
    /**
     * The total number of rows where at least one cell in the row was updated.
     */
    totalUpdatedRows?: number | null;
    /**
     * The total number of sheets where at least one cell in the sheet was updated.
     */
    totalUpdatedSheets?: number | null;
  }
  /**
   * The specification of a BigQuery data source that's connected to a sheet.
   */
  export interface Schema$BigQueryDataSourceSpec {
    /**
     * The ID of a BigQuery enabled Google Cloud project with a billing account attached. For any queries executed against the data source, the project is charged.
     */
    projectId?: string | null;
    /**
     * A BigQueryQuerySpec.
     */
    querySpec?: Schema$BigQueryQuerySpec;
    /**
     * A BigQueryTableSpec.
     */
    tableSpec?: Schema$BigQueryTableSpec;
  }
  /**
   * Specifies a custom BigQuery query.
   */
  export interface Schema$BigQueryQuerySpec {
    /**
     * The raw query string.
     */
    rawQuery?: string | null;
  }
  /**
   * Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) are allowed.
   */
  export interface Schema$BigQueryTableSpec {
    /**
     * The BigQuery dataset id.
     */
    datasetId?: string | null;
    /**
     * The BigQuery table id.
     */
    tableId?: string | null;
    /**
     * The ID of a BigQuery project the table belongs to. If not specified, the project_id is assumed.
     */
    tableProjectId?: string | null;
  }
  /**
   * A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters.
   */
  export interface Schema$BooleanCondition {
    /**
     * The type of condition.
     */
    type?: string | null;
    /**
     * The values of the condition. The number of supported values depends on the condition type. Some support zero values, others one or two values, and ConditionType.ONE_OF_LIST supports an arbitrary number of values.
     */
    values?: Schema$ConditionValue[];
  }
  /**
   * A rule that may or may not match, depending on the condition.
   */
  export interface Schema$BooleanRule {
    /**
     * The condition of the rule. If the condition evaluates to true, the format is applied.
     */
    condition?: Schema$BooleanCondition;
    /**
     * The format to apply. Conditional formatting can only apply a subset of formatting: bold, italic, strikethrough, foreground color and, background color.
     */
    format?: Schema$CellFormat;
  }
  /**
   * A border along a cell.
   */
  export interface Schema$Border {
    /**
     * The color of the border. Deprecated: Use color_style.
     */
    color?: Schema$Color;
    /**
     * The color of the border. If color is also set, this field takes precedence.
     */
    colorStyle?: Schema$ColorStyle;
    /**
     * The style of the border.
     */
    style?: string | null;
    /**
     * The width of the border, in pixels. Deprecated; the width is determined by the "style" field.
     */
    width?: number | null;
  }
  /**
   * The borders of the cell.
   */
  export interface Schema$Borders {
    /**
     * The bottom border of the cell.
     */
    bottom?: Schema$Border;
    /**
     * The left border of the cell.
     */
    left?: Schema$Border;
    /**
     * The right border of the cell.
     */
    right?: Schema$Border;
    /**
     * The top border of the cell.
     */
    top?: Schema$Border;
  }
  /**
   * A bubble chart.
   */
  export interface Schema$BubbleChartSpec {
    /**
     * The bubble border color. Deprecated: Use bubble_border_color_style.
     */
    bubbleBorderColor?: Schema$Color;
    /**
     * The bubble border color. If bubble_border_color is also set, this field takes precedence.
     */
    bubbleBorderColorStyle?: Schema$ColorStyle;
    /**
     * The data containing the bubble labels. These do not need to be unique.
     */
    bubbleLabels?: Schema$ChartData;
    /**
     * The max radius size of the bubbles, in pixels. If specified, the field must be a positive value.
     */
    bubbleMaxRadiusSize?: number | null;
    /**
     * The minimum radius size of the bubbles, in pixels. If specific, the field must be a positive value.
     */
    bubbleMinRadiusSize?: number | null;
    /**
     * The opacity of the bubbles between 0 and 1.0. 0 is fully transparent and 1 is fully opaque.
     */
    bubbleOpacity?: number | null;
    /**
     * The data containing the bubble sizes. Bubble sizes are used to draw the bubbles at different sizes relative to each other. If specified, group_ids must also be specified. This field is optional.
     */
    bubbleSizes?: Schema$ChartData;
    /**
     * The format of the text inside the bubbles. Strikethrough, underline, and link are not supported.
     */
    bubbleTextStyle?: Schema$TextFormat;
    /**
     * The data containing the bubble x-values. These values locate the bubbles in the chart horizontally.
     */
    domain?: Schema$ChartData;
    /**
     * The data containing the bubble group IDs. All bubbles with the same group ID are drawn in the same color. If bubble_sizes is specified then this field must also be specified but may contain blank values. This field is optional.
     */
    groupIds?: Schema$ChartData;
    /**
     * Where the legend of the chart should be drawn.
     */
    legendPosition?: string | null;
    /**
     * The data containing the bubble y-values. These values locate the bubbles in the chart vertically.
     */
    series?: Schema$ChartData;
  }
  /**
   * Cancels one or multiple refreshes of data source objects in the spreadsheet by the specified references. The request requires an additional `bigquery.readonly` OAuth scope if you are cancelling a refresh on a BigQuery data source.
   */
  export interface Schema$CancelDataSourceRefreshRequest {
    /**
     * Reference to a DataSource. If specified, cancels all associated data source object refreshes for this data source.
     */
    dataSourceId?: string | null;
    /**
     * Cancels all existing data source object refreshes for all data sources in the spreadsheet.
     */
    isAll?: boolean | null;
    /**
     * References to data source objects whose refreshes are to be cancelled.
     */
    references?: Schema$DataSourceObjectReferences;
  }
  /**
   * The response from cancelling one or multiple data source object refreshes.
   */
  export interface Schema$CancelDataSourceRefreshResponse {
    /**
     * The cancellation statuses of refreshes of all data source objects specified in the request. If is_all is specified, the field contains only those in failure status. Refreshing and canceling refresh the same data source object is also not allowed in the same `batchUpdate`.
     */
    statuses?: Schema$CancelDataSourceRefreshStatus[];
  }
  /**
   * The status of cancelling a single data source object refresh.
   */
  export interface Schema$CancelDataSourceRefreshStatus {
    /**
     * Reference to the data source object whose refresh is being cancelled.
     */
    reference?: Schema$DataSourceObjectReference;
    /**
     * The cancellation status.
     */
    refreshCancellationStatus?: Schema$RefreshCancellationStatus;
  }
  /**
   * A candlestick chart.
   */
  export interface Schema$CandlestickChartSpec {
    /**
     * The Candlestick chart data. Only one CandlestickData is supported.
     */
    data?: Schema$CandlestickData[];
    /**
     * The domain data (horizontal axis) for the candlestick chart. String data will be treated as discrete labels, other data will be treated as continuous values.
     */
    domain?: Schema$CandlestickDomain;
  }
  /**
   * The Candlestick chart data, each containing the low, open, close, and high values for a series.
   */
  export interface Schema$CandlestickData {
    /**
     * The range data (vertical axis) for the close/final value for each candle. This is the top of the candle body. If greater than the open value the candle will be filled. Otherwise the candle will be hollow.
     */
    closeSeries?: Schema$CandlestickSeries;
    /**
     * The range data (vertical axis) for the high/maximum value for each candle. This is the top of the candle's center line.
     */
    highSeries?: Schema$CandlestickSeries;
    /**
     * The range data (vertical axis) for the low/minimum value for each candle. This is the bottom of the candle's center line.
     */
    lowSeries?: Schema$CandlestickSeries;
    /**
     * The range data (vertical axis) for the open/initial value for each candle. This is the bottom of the candle body. If less than the close value the candle will be filled. Otherwise the candle will be hollow.
     */
    openSeries?: Schema$CandlestickSeries;
  }
  /**
   * The domain of a CandlestickChart.
   */
  export interface Schema$CandlestickDomain {
    /**
     * The data of the CandlestickDomain.
     */
    data?: Schema$ChartData;
    /**
     * True to reverse the order of the domain values (horizontal axis).
     */
    reversed?: boolean | null;
  }
  /**
   * The series of a CandlestickData.
   */
  export interface Schema$CandlestickSeries {
    /**
     * The data of the CandlestickSeries.
     */
    data?: Schema$ChartData;
  }
  /**
   * Data about a specific cell.
   */
  export interface Schema$CellData {
    /**
     * Optional. Runs of chips applied to subsections of the cell. Properties of a run start at a specific index in the text and continue until the next run. When reading, all chipped and non-chipped runs are included. Non-chipped runs will have an empty Chip. When writing, only runs with chips are included. Runs containing chips are of length 1 and are represented in the user-entered text by an “@” placeholder symbol. New runs will overwrite any prior runs. Writing a new user_entered_value will erase previous runs.
     */
    chipRuns?: Schema$ChipRun[];
    /**
     * Output only. Information about a data source formula on the cell. The field is set if user_entered_value is a formula referencing some DATA_SOURCE sheet, e.g. `=SUM(DataSheet!Column)`.
     */
    dataSourceFormula?: Schema$DataSourceFormula;
    /**
     * A data source table anchored at this cell. The size of data source table itself is computed dynamically based on its configuration. Only the first cell of the data source table contains the data source table definition. The other cells will contain the display values of the data source table result in their effective_value fields.
     */
    dataSourceTable?: Schema$DataSourceTable;
    /**
     * A data validation rule on the cell, if any. When writing, the new data validation rule will overwrite any prior rule.
     */
    dataValidation?: Schema$DataValidationRule;
    /**
     * The effective format being used by the cell. This includes the results of applying any conditional formatting and, if the cell contains a formula, the computed number format. If the effective format is the default format, effective format will not be written. This field is read-only.
     */
    effectiveFormat?: Schema$CellFormat;
    /**
     * The effective value of the cell. For cells with formulas, this is the calculated value. For cells with literals, this is the same as the user_entered_value. This field is read-only.
     */
    effectiveValue?: Schema$ExtendedValue;
    /**
     * The formatted value of the cell. This is the value as it's shown to the user. This field is read-only.
     */
    formattedValue?: string | null;
    /**
     * A hyperlink this cell points to, if any. If the cell contains multiple hyperlinks, this field will be empty. This field is read-only. To set it, use a `=HYPERLINK` formula in the userEnteredValue.formulaValue field. A cell-level link can also be set from the userEnteredFormat.textFormat field. Alternatively, set a hyperlink in the textFormatRun.format.link field that spans the entire cell.
     */
    hyperlink?: string | null;
    /**
     * Any note on the cell.
     */
    note?: string | null;
    /**
     * A pivot table anchored at this cell. The size of pivot table itself is computed dynamically based on its data, grouping, filters, values, etc. Only the top-left cell of the pivot table contains the pivot table definition. The other cells will contain the calculated values of the results of the pivot in their effective_value fields.
     */
    pivotTable?: Schema$PivotTable;
    /**
     * Runs of rich text applied to subsections of the cell. Runs are only valid on user entered strings, not formulas, bools, or numbers. Properties of a run start at a specific index in the text and continue until the next run. Runs will inherit the properties of the cell unless explicitly changed. When writing, the new runs will overwrite any prior runs. When writing a new user_entered_value, previous runs are erased.
     */
    textFormatRuns?: Schema$TextFormatRun[];
    /**
     * The format the user entered for the cell. When writing, the new format will be merged with the existing format.
     */
    userEnteredFormat?: Schema$CellFormat;
    /**
     * The value the user entered in the cell. e.g., `1234`, `'Hello'`, or `=NOW()` Note: Dates, Times and DateTimes are represented as doubles in serial number format.
     */
    userEnteredValue?: Schema$ExtendedValue;
  }
  /**
   * The format of a cell.
   */
  export interface Schema$CellFormat {
    /**
     * The background color of the cell. Deprecated: Use background_color_style.
     */
    backgroundColor?: Schema$Color;
    /**
     * The background color of the cell. If background_color is also set, this field takes precedence.
     */
    backgroundColorStyle?: Schema$ColorStyle;
    /**
     * The borders of the cell.
     */
    borders?: Schema$Borders;
    /**
     * The horizontal alignment of the value in the cell.
     */
    horizontalAlignment?: string | null;
    /**
     * If one exists, how a hyperlink should be displayed in the cell.
     */
    hyperlinkDisplayType?: string | null;
    /**
     * A format describing how number values should be represented to the user.
     */
    numberFormat?: Schema$NumberFormat;
    /**
     * The padding of the cell.
     */
    padding?: Schema$Padding;
    /**
     * The direction of the text in the cell.
     */
    textDirection?: string | null;
    /**
     * The format of the text in the cell (unless overridden by a format run). Setting a cell-level link here clears the cell's existing links. Setting the link field in a TextFormatRun takes precedence over the cell-level link.
     */
    textFormat?: Schema$TextFormat;
    /**
     * The rotation applied to text in the cell.
     */
    textRotation?: Schema$TextRotation;
    /**
     * The vertical alignment of the value in the cell.
     */
    verticalAlignment?: string | null;
    /**
     * The wrap strategy for the value in the cell.
     */
    wrapStrategy?: string | null;
  }
  /**
   * The options that define a "view window" for a chart (such as the visible values in an axis).
   */
  export interface Schema$ChartAxisViewWindowOptions {
    /**
     * The maximum numeric value to be shown in this view window. If unset, will automatically determine a maximum value that looks good for the data.
     */
    viewWindowMax?: number | null;
    /**
     * The minimum numeric value to be shown in this view window. If unset, will automatically determine a minimum value that looks good for the data.
     */
    viewWindowMin?: number | null;
    /**
     * The view window's mode.
     */
    viewWindowMode?: string | null;
  }
  /**
   * Custom number formatting options for chart attributes.
   */
  export interface Schema$ChartCustomNumberFormatOptions {
    /**
     * Custom prefix to be prepended to the chart attribute. This field is optional.
     */
    prefix?: string | null;
    /**
     * Custom suffix to be appended to the chart attribute. This field is optional.
     */
    suffix?: string | null;
  }
  /**
   * The data included in a domain or series.
   */
  export interface Schema$ChartData {
    /**
     * The aggregation type for the series of a data source chart. Only supported for data source charts.
     */
    aggregateType?: string | null;
    /**
     * The reference to the data source column that the data reads from.
     */
    columnReference?: Schema$DataSourceColumnReference;
    /**
     * The rule to group the data by if the ChartData backs the domain of a data source chart. Only supported for data source charts.
     */
    groupRule?: Schema$ChartGroupRule;
    /**
     * The source ranges of the data.
     */
    sourceRange?: Schema$ChartSourceRange;
  }
  /**
   * Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values.
   */
  export interface Schema$ChartDateTimeRule {
    /**
     * The type of date-time grouping to apply.
     */
    type?: string | null;
  }
  /**
   * An optional setting on the ChartData of the domain of a data source chart that defines buckets for the values in the domain rather than breaking out each individual value. For example, when plotting a data source chart, you can specify a histogram rule on the domain (it should only contain numeric values), grouping its values into buckets. Any values of a chart series that fall into the same bucket are aggregated based on the aggregate_type.
   */
  export interface Schema$ChartGroupRule {
    /**
     * A ChartDateTimeRule.
     */
    dateTimeRule?: Schema$ChartDateTimeRule;
    /**
     * A ChartHistogramRule
     */
    histogramRule?: Schema$ChartHistogramRule;
  }
  /**
   * Allows you to organize numeric values in a source data column into buckets of constant size.
   */
  export interface Schema$ChartHistogramRule {
    /**
     * The size of the buckets that are created. Must be positive.
     */
    intervalSize?: number | null;
    /**
     * The maximum value at which items are placed into buckets. Values greater than the maximum are grouped into a single bucket. If omitted, it is determined by the maximum item value.
     */
    maxValue?: number | null;
    /**
     * The minimum value at which items are placed into buckets. Values that are less than the minimum are grouped into a single bucket. If omitted, it is determined by the minimum item value.
     */
    minValue?: number | null;
  }
  /**
   * Source ranges for a chart.
   */
  export interface Schema$ChartSourceRange {
    /**
     * The ranges of data for a series or domain. Exactly one dimension must have a length of 1, and all sources in the list must have the same dimension with length 1. The domain (if it exists) & all series must have the same number of source ranges. If using more than one source range, then the source range at a given offset must be in order and contiguous across the domain and series. For example, these are valid configurations: domain sources: A1:A5 series1 sources: B1:B5 series2 sources: D6:D10 domain sources: A1:A5, C10:C12 series1 sources: B1:B5, D10:D12 series2 sources: C1:C5, E10:E12
     */
    sources?: Schema$GridRange[];
  }
  /**
   * The specifications of a chart.
   */
  export interface Schema$ChartSpec {
    /**
     * The alternative text that describes the chart. This is often used for accessibility.
     */
    altText?: string | null;
    /**
     * The background color of the entire chart. Not applicable to Org charts. Deprecated: Use background_color_style.
     */
    backgroundColor?: Schema$Color;
    /**
     * The background color of the entire chart. Not applicable to Org charts. If background_color is also set, this field takes precedence.
     */
    backgroundColorStyle?: Schema$ColorStyle;
    /**
     * A basic chart specification, can be one of many kinds of charts. See BasicChartType for the list of all charts this supports.
     */
    basicChart?: Schema$BasicChartSpec;
    /**
     * A bubble chart specification.
     */
    bubbleChart?: Schema$BubbleChartSpec;
    /**
     * A candlestick chart specification.
     */
    candlestickChart?: Schema$CandlestickChartSpec;
    /**
     * If present, the field contains data source chart specific properties.
     */
    dataSourceChartProperties?: Schema$DataSourceChartProperties;
    /**
     * The filters applied to the source data of the chart. Only supported for data source charts.
     */
    filterSpecs?: Schema$FilterSpec[];
    /**
     * The name of the font to use by default for all chart text (e.g. title, axis labels, legend). If a font is specified for a specific part of the chart it will override this font name.
     */
    fontName?: string | null;
    /**
     * Determines how the charts will use hidden rows or columns.
     */
    hiddenDimensionStrategy?: string | null;
    /**
     * A histogram chart specification.
     */
    histogramChart?: Schema$HistogramChartSpec;
    /**
     * True to make a chart fill the entire space in which it's rendered with minimum padding. False to use the default padding. (Not applicable to Geo and Org charts.)
     */
    maximized?: boolean | null;
    /**
     * An org chart specification.
     */
    orgChart?: Schema$OrgChartSpec;
    /**
     * A pie chart specification.
     */
    pieChart?: Schema$PieChartSpec;
    /**
     * A scorecard chart specification.
     */
    scorecardChart?: Schema$ScorecardChartSpec;
    /**
     * The order to sort the chart data by. Only a single sort spec is supported. Only supported for data source charts.
     */
    sortSpecs?: Schema$SortSpec[];
    /**
     * The subtitle of the chart.
     */
    subtitle?: string | null;
    /**
     * The subtitle text format. Strikethrough, underline, and link are not supported.
     */
    subtitleTextFormat?: Schema$TextFormat;
    /**
     * The subtitle text position. This field is optional.
     */
    subtitleTextPosition?: Schema$TextPosition;
    /**
     * The title of the chart.
     */
    title?: string | null;
    /**
     * The title text format. Strikethrough, underline, and link are not supported.
     */
    titleTextFormat?: Schema$TextFormat;
    /**
     * The title text position. This field is optional.
     */
    titleTextPosition?: Schema$TextPosition;
    /**
     * A treemap chart specification.
     */
    treemapChart?: Schema$TreemapChartSpec;
    /**
     * A waterfall chart specification.
     */
    waterfallChart?: Schema$WaterfallChartSpec;
  }
  /**
   * The Smart Chip.
   */
  export interface Schema$Chip {
    /**
     * Properties of a linked person.
     */
    personProperties?: Schema$PersonProperties;
    /**
     * Properties of a rich link.
     */
    richLinkProperties?: Schema$RichLinkProperties;
  }
  /**
   * The run of a chip. The chip continues until the start index of the next run.
   */
  export interface Schema$ChipRun {
    /**
     * Optional. The chip of this run.
     */
    chip?: Schema$Chip;
    /**
     * Required. The zero-based character index where this run starts, in UTF-16 code units.
     */
    startIndex?: number | null;
  }
  /**
   * Clears the basic filter, if any exists on the sheet.
   */
  export interface Schema$ClearBasicFilterRequest {
    /**
     * The sheet ID on which the basic filter should be cleared.
     */
    sheetId?: number | null;
  }
  /**
   * The request for clearing a range of values in a spreadsheet.
   */
  export interface Schema$ClearValuesRequest {}
  /**
   * The response when clearing a range of values in a spreadsheet.
   */
  export interface Schema$ClearValuesResponse {
    /**
     * The range (in A1 notation) that was cleared. (If the request was for an unbounded range or a ranger larger than the bounds of the sheet, this will be the actual range that was cleared, bounded to the sheet's limits.)
     */
    clearedRange?: string | null;
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string | null;
  }
  /**
   * Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); \} public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); \} return resultBuilder.build(); \} // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; \} return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; \} static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; \} Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; \} [result autorelease]; return result; \} // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); \} var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); \}; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); \} resultBuilder.push(hexString); return resultBuilder.join(''); \}; // ...
   */
  export interface Schema$Color {
    /**
     * The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).
     */
    alpha?: number | null;
    /**
     * The amount of blue in the color as a value in the interval [0, 1].
     */
    blue?: number | null;
    /**
     * The amount of green in the color as a value in the interval [0, 1].
     */
    green?: number | null;
    /**
     * The amount of red in the color as a value in the interval [0, 1].
     */
    red?: number | null;
  }
  /**
   * A color value.
   */
  export interface Schema$ColorStyle {
    /**
     * RGB color. The [`alpha`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/other#Color.FIELDS.alpha) value in the [`Color`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/other#color) object isn't generally supported.
     */
    rgbColor?: Schema$Color;
    /**
     * Theme color.
     */
    themeColor?: string | null;
  }
  /**
   * A rule describing a conditional format.
   */
  export interface Schema$ConditionalFormatRule {
    /**
     * The formatting is either "on" or "off" according to the rule.
     */
    booleanRule?: Schema$BooleanRule;
    /**
     * The formatting will vary based on the gradients in the rule.
     */
    gradientRule?: Schema$GradientRule;
    /**
     * The ranges that are formatted if the condition is true. All the ranges must be on the same grid.
     */
    ranges?: Schema$GridRange[];
  }
  /**
   * The value of the condition.
   */
  export interface Schema$ConditionValue {
    /**
     * A relative date (based on the current date). Valid only if the type is DATE_BEFORE, DATE_AFTER, DATE_ON_OR_BEFORE or DATE_ON_OR_AFTER. Relative dates are not supported in data validation. They are supported only in conditional formatting and conditional filters.
     */
    relativeDate?: string | null;
    /**
     * A value the condition is based on. The value is parsed as if the user typed into a cell. Formulas are supported (and must begin with an `=` or a '+').
     */
    userEnteredValue?: string | null;
  }
  /**
   * Copies data from the source to the destination.
   */
  export interface Schema$CopyPasteRequest {
    /**
     * The location to paste to. If the range covers a span that's a multiple of the source's height or width, then the data will be repeated to fill in the destination range. If the range is smaller than the source range, the entire source data will still be copied (beyond the end of the destination range).
     */
    destination?: Schema$GridRange;
    /**
     * How that data should be oriented when pasting.
     */
    pasteOrientation?: string | null;
    /**
     * What kind of data to paste.
     */
    pasteType?: string | null;
    /**
     * The source range to copy.
     */
    source?: Schema$GridRange;
  }
  /**
   * The request to copy a sheet across spreadsheets.
   */
  export interface Schema$CopySheetToAnotherSpreadsheetRequest {
    /**
     * The ID of the spreadsheet to copy the sheet to.
     */
    destinationSpreadsheetId?: string | null;
  }
  /**
   * A request to create developer metadata.
   */
  export interface Schema$CreateDeveloperMetadataRequest {
    /**
     * The developer metadata to create.
     */
    developerMetadata?: Schema$DeveloperMetadata;
  }
  /**
   * The response from creating developer metadata.
   */
  export interface Schema$CreateDeveloperMetadataResponse {
    /**
     * The developer metadata that was created.
     */
    developerMetadata?: Schema$DeveloperMetadata;
  }
  /**
   * Moves data from the source to the destination.
   */
  export interface Schema$CutPasteRequest {
    /**
     * The top-left coordinate where the data should be pasted.
     */
    destination?: Schema$GridCoordinate;
    /**
     * What kind of data to paste. All the source data will be cut, regardless of what is pasted.
     */
    pasteType?: string | null;
    /**
     * The source data to cut.
     */
    source?: Schema$GridRange;
  }
  /**
   * The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects.
   */
  export interface Schema$DataExecutionStatus {
    /**
     * The error code.
     */
    errorCode?: string | null;
    /**
     * The error message, which may be empty.
     */
    errorMessage?: string | null;
    /**
     * Gets the time the data last successfully refreshed.
     */
    lastRefreshTime?: string | null;
    /**
     * The state of the data execution.
     */
    state?: string | null;
  }
  /**
   * Filter that describes what data should be selected or returned from a request.
   */
  export interface Schema$DataFilter {
    /**
     * Selects data that matches the specified A1 range.
     */
    a1Range?: string | null;
    /**
     * Selects data associated with the developer metadata matching the criteria described by this DeveloperMetadataLookup.
     */
    developerMetadataLookup?: Schema$DeveloperMetadataLookup;
    /**
     * Selects data that matches the range described by the GridRange.
     */
    gridRange?: Schema$GridRange;
  }
  /**
   * A range of values whose location is specified by a DataFilter.
   */
  export interface Schema$DataFilterValueRange {
    /**
     * The data filter describing the location of the values in the spreadsheet.
     */
    dataFilter?: Schema$DataFilter;
    /**
     * The major dimension of the values.
     */
    majorDimension?: string | null;
    /**
     * The data to be written. If the provided values exceed any of the ranges matched by the data filter then the request fails. If the provided values are less than the matched ranges only the specified values are written, existing values in the matched ranges remain unaffected.
     */
    values?: any[][] | null;
  }
  /**
   * Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph.
   */
  export interface Schema$DataLabel {
    /**
     * Data to use for custom labels. Only used if type is set to CUSTOM. This data must be the same length as the series or other element this data label is applied to. In addition, if the series is split into multiple source ranges, this source data must come from the next column in the source data. For example, if the series is B2:B4,E6:E8 then this data must come from C2:C4,F6:F8.
     */
    customLabelData?: Schema$ChartData;
    /**
     * The placement of the data label relative to the labeled data.
     */
    placement?: string | null;
    /**
     * The text format used for the data label. The link field is not supported.
     */
    textFormat?: Schema$TextFormat;
    /**
     * The type of the data label.
     */
    type?: string | null;
  }
  /**
   * Information about an external data source in the spreadsheet.
   */
  export interface Schema$DataSource {
    /**
     * All calculated columns in the data source.
     */
    calculatedColumns?: Schema$DataSourceColumn[];
    /**
     * The spreadsheet-scoped unique ID that identifies the data source. Example: 1080547365.
     */
    dataSourceId?: string | null;
    /**
     * The ID of the Sheet connected with the data source. The field cannot be changed once set. When creating a data source, an associated DATA_SOURCE sheet is also created, if the field is not specified, the ID of the created sheet will be randomly generated.
     */
    sheetId?: number | null;
    /**
     * The DataSourceSpec for the data source connected with this spreadsheet.
     */
    spec?: Schema$DataSourceSpec;
  }
  /**
   * Properties of a data source chart.
   */
  export interface Schema$DataSourceChartProperties {
    /**
     * Output only. The data execution status.
     */
    dataExecutionStatus?: Schema$DataExecutionStatus;
    /**
     * ID of the data source that the chart is associated with.
     */
    dataSourceId?: string | null;
  }
  /**
   * A column in a data source.
   */
  export interface Schema$DataSourceColumn {
    /**
     * The formula of the calculated column.
     */
    formula?: string | null;
    /**
     * The column reference.
     */
    reference?: Schema$DataSourceColumnReference;
  }
  /**
   * An unique identifier that references a data source column.
   */
  export interface Schema$DataSourceColumnReference {
    /**
     * The display name of the column. It should be unique within a data source.
     */
    name?: string | null;
  }
  /**
   * A data source formula.
   */
  export interface Schema$DataSourceFormula {
    /**
     * Output only. The data execution status.
     */
    dataExecutionStatus?: Schema$DataExecutionStatus;
    /**
     * The ID of the data source the formula is associated with.
     */
    dataSourceId?: string | null;
  }
  /**
   * Reference to a data source object.
   */
  export interface Schema$DataSourceObjectReference {
    /**
     * References to a data source chart.
     */
    chartId?: number | null;
    /**
     * References to a cell containing DataSourceFormula.
     */
    dataSourceFormulaCell?: Schema$GridCoordinate;
    /**
     * References to a data source PivotTable anchored at the cell.
     */
    dataSourcePivotTableAnchorCell?: Schema$GridCoordinate;
    /**
     * References to a DataSourceTable anchored at the cell.
     */
    dataSourceTableAnchorCell?: Schema$GridCoordinate;
    /**
     * References to a DATA_SOURCE sheet.
     */
    sheetId?: string | null;
  }
  /**
   * A list of references to data source objects.
   */
  export interface Schema$DataSourceObjectReferences {
    /**
     * The references.
     */
    references?: Schema$DataSourceObjectReference[];
  }
  /**
   * A parameter in a data source's query. The parameter allows the user to pass in values from the spreadsheet into a query.
   */
  export interface Schema$DataSourceParameter {
    /**
     * Named parameter. Must be a legitimate identifier for the DataSource that supports it. For example, [BigQuery identifier](https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#identifiers).
     */
    name?: string | null;
    /**
     * ID of a NamedRange. Its size must be 1x1.
     */
    namedRangeId?: string | null;
    /**
     * A range that contains the value of the parameter. Its size must be 1x1.
     */
    range?: Schema$GridRange;
  }
  /**
   * A schedule for data to refresh every day in a given time interval.
   */
  export interface Schema$DataSourceRefreshDailySchedule {
    /**
     * The start time of a time interval in which a data source refresh is scheduled. Only `hours` part is used. The time interval size defaults to that in the Sheets editor.
     */
    startTime?: Schema$TimeOfDay;
  }
  /**
   * A monthly schedule for data to refresh on specific days in the month in a given time interval.
   */
  export interface Schema$DataSourceRefreshMonthlySchedule {
    /**
     * Days of the month to refresh. Only 1-28 are supported, mapping to the 1st to the 28th day. At least one day must be specified.
     */
    daysOfMonth?: number[] | null;
    /**
     * The start time of a time interval in which a data source refresh is scheduled. Only `hours` part is used. The time interval size defaults to that in the Sheets editor.
     */
    startTime?: Schema$TimeOfDay;
  }
  /**
   * Schedule for refreshing the data source. Data sources in the spreadsheet are refreshed within a time interval. You can specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4 hours. For example, if you specify a start time of 8 AM , the refresh will take place between 8 AM and 12 PM every day.
   */
  export interface Schema$DataSourceRefreshSchedule {
    /**
     * Daily refresh schedule.
     */
    dailySchedule?: Schema$DataSourceRefreshDailySchedule;
    /**
     * True if the refresh schedule is enabled, or false otherwise.
     */
    enabled?: boolean | null;
    /**
     * Monthly refresh schedule.
     */
    monthlySchedule?: Schema$DataSourceRefreshMonthlySchedule;
    /**
     * Output only. The time interval of the next run.
     */
    nextRun?: Schema$Interval;
    /**
     * The scope of the refresh. Must be ALL_DATA_SOURCES.
     */
    refreshScope?: string | null;
    /**
     * Weekly refresh schedule.
     */
    weeklySchedule?: Schema$DataSourceRefreshWeeklySchedule;
  }
  /**
   * A weekly schedule for data to refresh on specific days in a given time interval.
   */
  export interface Schema$DataSourceRefreshWeeklySchedule {
    /**
     * Days of the week to refresh. At least one day must be specified.
     */
    daysOfWeek?: string[] | null;
    /**
     * The start time of a time interval in which a data source refresh is scheduled. Only `hours` part is used. The time interval size defaults to that in the Sheets editor.
     */
    startTime?: Schema$TimeOfDay;
  }
  /**
   * A range along a single dimension on a DATA_SOURCE sheet.
   */
  export interface Schema$DataSourceSheetDimensionRange {
    /**
     * The columns on the data source sheet.
     */
    columnReferences?: Schema$DataSourceColumnReference[];
    /**
     * The ID of the data source sheet the range is on.
     */
    sheetId?: number | null;
  }
  /**
   * Additional properties of a DATA_SOURCE sheet.
   */
  export interface Schema$DataSourceSheetProperties {
    /**
     * The columns displayed on the sheet, corresponding to the values in RowData.
     */
    columns?: Schema$DataSourceColumn[];
    /**
     * The data execution status.
     */
    dataExecutionStatus?: Schema$DataExecutionStatus;
    /**
     * ID of the DataSource the sheet is connected to.
     */
    dataSourceId?: string | null;
  }
  /**
   * This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source.
   */
  export interface Schema$DataSourceSpec {
    /**
     * A BigQueryDataSourceSpec.
     */
    bigQuery?: Schema$BigQueryDataSourceSpec;
    /**
     * A LookerDatasourceSpec.
     */
    looker?: Schema$LookerDataSourceSpec;
    /**
     * The parameters of the data source, used when querying the data source.
     */
    parameters?: Schema$DataSourceParameter[];
  }
  /**
   * A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as "Extract" in the Sheets editor.
   */
  export interface Schema$DataSourceTable {
    /**
     * Columns selected for the data source table. The column_selection_type must be SELECTED.
     */
    columns?: Schema$DataSourceColumnReference[];
    /**
     * The type to select columns for the data source table. Defaults to SELECTED.
     */
    columnSelectionType?: string | null;
    /**
     * Output only. The data execution status.
     */
    dataExecutionStatus?: Schema$DataExecutionStatus;
    /**
     * The ID of the data source the data source table is associated with.
     */
    dataSourceId?: string | null;
    /**
     * Filter specifications in the data source table.
     */
    filterSpecs?: Schema$FilterSpec[];
    /**
     * The limit of rows to return. If not set, a default limit is applied. Please refer to the Sheets editor for the default and max limit.
     */
    rowLimit?: number | null;
    /**
     * Sort specifications in the data source table. The result of the data source table is sorted based on the sort specifications in order.
     */
    sortSpecs?: Schema$SortSpec[];
  }
  /**
   * A data validation rule.
   */
  export interface Schema$DataValidationRule {
    /**
     * The condition that data in the cell must match.
     */
    condition?: Schema$BooleanCondition;
    /**
     * A message to show the user when adding data to the cell.
     */
    inputMessage?: string | null;
    /**
     * True if the UI should be customized based on the kind of condition. If true, "List" conditions will show a dropdown.
     */
    showCustomUi?: boolean | null;
    /**
     * True if invalid data should be rejected.
     */
    strict?: boolean | null;
  }
  /**
   * Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. For example, consider a pivot table showing sales transactions by date: +----------+--------------+ | Date | SUM of Sales | +----------+--------------+ | 1/1/2017 | $621.14 | | 2/3/2017 | $708.84 | | 5/8/2017 | $326.84 | ... +----------+--------------+ Applying a date-time group rule with a DateTimeRuleType of YEAR_MONTH results in the following pivot table. +--------------+--------------+ | Grouped Date | SUM of Sales | +--------------+--------------+ | 2017-Jan | $53,731.78 | | 2017-Feb | $83,475.32 | | 2017-Mar | $94,385.05 | ... +--------------+--------------+
   */
  export interface Schema$DateTimeRule {
    /**
     * The type of date-time grouping to apply.
     */
    type?: string | null;
  }
  /**
   * Removes the banded range with the given ID from the spreadsheet.
   */
  export interface Schema$DeleteBandingRequest {
    /**
     * The ID of the banded range to delete.
     */
    bandedRangeId?: number | null;
  }
  /**
   * Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented.
   */
  export interface Schema$DeleteConditionalFormatRuleRequest {
    /**
     * The zero-based index of the rule to be deleted.
     */
    index?: number | null;
    /**
     * The sheet the rule is being deleted from.
     */
    sheetId?: number | null;
  }
  /**
   * The result of deleting a conditional format rule.
   */
  export interface Schema$DeleteConditionalFormatRuleResponse {
    /**
     * The rule that was deleted.
     */
    rule?: Schema$ConditionalFormatRule;
  }
  /**
   * Deletes a data source. The request also deletes the associated data source sheet, and unlinks all associated data source objects.
   */
  export interface Schema$DeleteDataSourceRequest {
    /**
     * The ID of the data source to delete.
     */
    dataSourceId?: string | null;
  }
  /**
   * A request to delete developer metadata.
   */
  export interface Schema$DeleteDeveloperMetadataRequest {
    /**
     * The data filter describing the criteria used to select which developer metadata entry to delete.
     */
    dataFilter?: Schema$DataFilter;
  }
  /**
   * The response from deleting developer metadata.
   */
  export interface Schema$DeleteDeveloperMetadataResponse {
    /**
     * The metadata that was deleted.
     */
    deletedDeveloperMetadata?: Schema$DeveloperMetadata[];
  }
  /**
   * Deletes a group over the specified range by decrementing the depth of the dimensions in the range. For example, assume the sheet has a depth-1 group over B:E and a depth-2 group over C:D. Deleting a group over D:E leaves the sheet with a depth-1 group over B:D and a depth-2 group over C:C.
   */
  export interface Schema$DeleteDimensionGroupRequest {
    /**
     * The range of the group to be deleted.
     */
    range?: Schema$DimensionRange;
  }
  /**
   * The result of deleting a group.
   */
  export interface Schema$DeleteDimensionGroupResponse {
    /**
     * All groups of a dimension after deleting a group from that dimension.
     */
    dimensionGroups?: Schema$DimensionGroup[];
  }
  /**
   *  Deletes the dimensions from the sheet.
   */
  export interface Schema$DeleteDimensionRequest {
    /**
     * The dimensions to delete from the sheet.
     */
    range?: Schema$DimensionRange;
  }
  /**
   * Removes rows within this range that contain values in the specified columns that are duplicates of values in any previous row. Rows with identical values but different letter cases, formatting, or formulas are considered to be duplicates. This request also removes duplicate rows hidden from view (for example, due to a filter). When removing duplicates, the first instance of each duplicate row scanning from the top downwards is kept in the resulting range. Content outside of the specified range isn't removed, and rows considered duplicates do not have to be adjacent to each other in the range.
   */
  export interface Schema$DeleteDuplicatesRequest {
    /**
     * The columns in the range to analyze for duplicate values. If no columns are selected then all columns are analyzed for duplicates.
     */
    comparisonColumns?: Schema$DimensionRange[];
    /**
     * The range to remove duplicates rows from.
     */
    range?: Schema$GridRange;
  }
  /**
   * The result of removing duplicates in a range.
   */
  export interface Schema$DeleteDuplicatesResponse {
    /**
     * The number of duplicate rows removed.
     */
    duplicatesRemovedCount?: number | null;
  }
  /**
   * Deletes the embedded object with the given ID.
   */
  export interface Schema$DeleteEmbeddedObjectRequest {
    /**
     * The ID of the embedded object to delete.
     */
    objectId?: number | null;
  }
  /**
   * Deletes a particular filter view.
   */
  export interface Schema$DeleteFilterViewRequest {
    /**
     * The ID of the filter to delete.
     */
    filterId?: number | null;
  }
  /**
   * Removes the named range with the given ID from the spreadsheet.
   */
  export interface Schema$DeleteNamedRangeRequest {
    /**
     * The ID of the named range to delete.
     */
    namedRangeId?: string | null;
  }
  /**
   * Deletes the protected range with the given ID.
   */
  export interface Schema$DeleteProtectedRangeRequest {
    /**
     * The ID of the protected range to delete.
     */
    protectedRangeId?: number | null;
  }
  /**
   * Deletes a range of cells, shifting other cells into the deleted area.
   */
  export interface Schema$DeleteRangeRequest {
    /**
     * The range of cells to delete.
     */
    range?: Schema$GridRange;
    /**
     * The dimension from which deleted cells will be replaced with. If ROWS, existing cells will be shifted upward to replace the deleted cells. If COLUMNS, existing cells will be shifted left to replace the deleted cells.
     */
    shiftDimension?: string | null;
  }
  /**
   * Deletes the requested sheet.
   */
  export interface Schema$DeleteSheetRequest {
    /**
     * The ID of the sheet to delete. If the sheet is of DATA_SOURCE type, the associated DataSource is also deleted.
     */
    sheetId?: number | null;
  }
  /**
   * Removes the table with the given ID from the spreadsheet.
   */
  export interface Schema$DeleteTableRequest {
    /**
     * The ID of the table to delete.
     */
    tableId?: string | null;
  }
  /**
   * Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too.
   */
  export interface Schema$DeveloperMetadata {
    /**
     * The location where the metadata is associated.
     */
    location?: Schema$DeveloperMetadataLocation;
    /**
     * The spreadsheet-scoped unique ID that identifies the metadata. IDs may be specified when metadata is created, otherwise one will be randomly generated and assigned. Must be positive.
     */
    metadataId?: number | null;
    /**
     * The metadata key. There may be multiple metadata in a spreadsheet with the same key. Developer metadata must always have a key specified.
     */
    metadataKey?: string | null;
    /**
     * Data associated with the metadata's key.
     */
    metadataValue?: string | null;
    /**
     * The metadata visibility. Developer metadata must always have a visibility specified.
     */
    visibility?: string | null;
  }
  /**
   * A location where metadata may be associated in a spreadsheet.
   */
  export interface Schema$DeveloperMetadataLocation {
    /**
     * Represents the row or column when metadata is associated with a dimension. The specified DimensionRange must represent a single row or column; it cannot be unbounded or span multiple rows or columns.
     */
    dimensionRange?: Schema$DimensionRange;
    /**
     * The type of location this object represents. This field is read-only.
     */
    locationType?: string | null;
    /**
     * The ID of the sheet when metadata is associated with an entire sheet.
     */
    sheetId?: number | null;
    /**
     * True when metadata is associated with an entire spreadsheet.
     */
    spreadsheet?: boolean | null;
  }
  /**
   * Selects DeveloperMetadata that matches all of the specified fields. For example, if only a metadata ID is specified this considers the DeveloperMetadata with that particular unique ID. If a metadata key is specified, this considers all developer metadata with that key. If a key, visibility, and location type are all specified, this considers all developer metadata with that key and visibility that are associated with a location of that type. In general, this selects all DeveloperMetadata that matches the intersection of all the specified fields; any field or combination of fields may be specified.
   */
  export interface Schema$DeveloperMetadataLookup {
    /**
     * Determines how this lookup matches the location. If this field is specified as EXACT, only developer metadata associated on the exact location specified is matched. If this field is specified to INTERSECTING, developer metadata associated on intersecting locations is also matched. If left unspecified, this field assumes a default value of INTERSECTING. If this field is specified, a metadataLocation must also be specified.
     */
    locationMatchingStrategy?: string | null;
    /**
     * Limits the selected developer metadata to those entries which are associated with locations of the specified type. For example, when this field is specified as ROW this lookup only considers developer metadata associated on rows. If the field is left unspecified, all location types are considered. This field cannot be specified as SPREADSHEET when the locationMatchingStrategy is specified as INTERSECTING or when the metadataLocation is specified as a non-spreadsheet location: spreadsheet metadata cannot intersect any other developer metadata location. This field also must be left unspecified when the locationMatchingStrategy is specified as EXACT.
     */
    locationType?: string | null;
    /**
     * Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_id.
     */
    metadataId?: number | null;
    /**
     * Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_key.
     */
    metadataKey?: string | null;
    /**
     * Limits the selected developer metadata to those entries associated with the specified location. This field either matches exact locations or all intersecting locations according the specified locationMatchingStrategy.
     */
    metadataLocation?: Schema$DeveloperMetadataLocation;
    /**
     * Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_value.
     */
    metadataValue?: string | null;
    /**
     * Limits the selected developer metadata to that which has a matching DeveloperMetadata.visibility. If left unspecified, all developer metadata visible to the requesting project is considered.
     */
    visibility?: string | null;
  }
  /**
   * A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group can be collapsed or expanded as a unit on the sheet.
   */
  export interface Schema$DimensionGroup {
    /**
     * This field is true if this group is collapsed. A collapsed group remains collapsed if an overlapping group at a shallower depth is expanded. A true value does not imply that all dimensions within the group are hidden, since a dimension's visibility can change independently from this group property. However, when this property is updated, all dimensions within it are set to hidden if this field is true, or set to visible if this field is false.
     */
    collapsed?: boolean | null;
    /**
     * The depth of the group, representing how many groups have a range that wholly contains the range of this group.
     */
    depth?: number | null;
    /**
     * The range over which this group exists.
     */
    range?: Schema$DimensionRange;
  }
  /**
   * Properties about a dimension.
   */
  export interface Schema$DimensionProperties {
    /**
     * Output only. If set, this is a column in a data source sheet.
     */
    dataSourceColumnReference?: Schema$DataSourceColumnReference;
    /**
     * The developer metadata associated with a single row or column.
     */
    developerMetadata?: Schema$DeveloperMetadata[];
    /**
     * True if this dimension is being filtered. This field is read-only.
     */
    hiddenByFilter?: boolean | null;
    /**
     * True if this dimension is explicitly hidden.
     */
    hiddenByUser?: boolean | null;
    /**
     * The height (if a row) or width (if a column) of the dimension in pixels.
     */
    pixelSize?: number | null;
  }
  /**
   * A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.
   */
  export interface Schema$DimensionRange {
    /**
     * The dimension of the span.
     */
    dimension?: string | null;
    /**
     * The end (exclusive) of the span, or not set if unbounded.
     */
    endIndex?: number | null;
    /**
     * The sheet this span is on.
     */
    sheetId?: number | null;
    /**
     * The start (inclusive) of the span, or not set if unbounded.
     */
    startIndex?: number | null;
  }
  /**
   * Duplicates a particular filter view.
   */
  export interface Schema$DuplicateFilterViewRequest {
    /**
     * The ID of the filter being duplicated.
     */
    filterId?: number | null;
  }
  /**
   * The result of a filter view being duplicated.
   */
  export interface Schema$DuplicateFilterViewResponse {
    /**
     * The newly created filter.
     */
    filter?: Schema$FilterView;
  }
  /**
   * Duplicates the contents of a sheet.
   */
  export interface Schema$DuplicateSheetRequest {
    /**
     * The zero-based index where the new sheet should be inserted. The index of all sheets after this are incremented.
     */
    insertSheetIndex?: number | null;
    /**
     * If set, the ID of the new sheet. If not set, an ID is chosen. If set, the ID must not conflict with any existing sheet ID. If set, it must be non-negative.
     */
    newSheetId?: number | null;
    /**
     * The name of the new sheet. If empty, a new name is chosen for you.
     */
    newSheetName?: string | null;
    /**
     * The sheet to duplicate. If the source sheet is of DATA_SOURCE type, its backing DataSource is also duplicated and associated with the new copy of the sheet. No data execution is triggered, the grid data of this sheet is also copied over but only available after the batch request completes.
     */
    sourceSheetId?: number | null;
  }
  /**
   * The result of duplicating a sheet.
   */
  export interface Schema$DuplicateSheetResponse {
    /**
     * The properties of the duplicate sheet.
     */
    properties?: Schema$SheetProperties;
  }
  /**
   * The editors of a protected range.
   */
  export interface Schema$Editors {
    /**
     * True if anyone in the document's domain has edit access to the protected range. Domain protection is only supported on documents within a domain.
     */
    domainUsersCanEdit?: boolean | null;
    /**
     * The email addresses of groups with edit access to the protected range.
     */
    groups?: string[] | null;
    /**
     * The email addresses of users with edit access to the protected range.
     */
    users?: string[] | null;
  }
  /**
   * A chart embedded in a sheet.
   */
  export interface Schema$EmbeddedChart {
    /**
     * The border of the chart.
     */
    border?: Schema$EmbeddedObjectBorder;
    /**
     * The ID of the chart.
     */
    chartId?: number | null;
    /**
     * The position of the chart.
     */
    position?: Schema$EmbeddedObjectPosition;
    /**
     * The specification of the chart.
     */
    spec?: Schema$ChartSpec;
  }
  /**
   * A border along an embedded object.
   */
  export interface Schema$EmbeddedObjectBorder {
    /**
     * The color of the border. Deprecated: Use color_style.
     */
    color?: Schema$Color;
    /**
     * The color of the border. If color is also set, this field takes precedence.
     */
    colorStyle?: Schema$ColorStyle;
  }
  /**
   * The position of an embedded object such as a chart.
   */
  export interface Schema$EmbeddedObjectPosition {
    /**
     * If true, the embedded object is put on a new sheet whose ID is chosen for you. Used only when writing.
     */
    newSheet?: boolean | null;
    /**
     * The position at which the object is overlaid on top of a grid.
     */
    overlayPosition?: Schema$OverlayPosition;
    /**
     * The sheet this is on. Set only if the embedded object is on its own sheet. Must be non-negative.
     */
    sheetId?: number | null;
  }
  /**
   * An error in a cell.
   */
  export interface Schema$ErrorValue {
    /**
     * A message with more information about the error (in the spreadsheet's locale).
     */
    message?: string | null;
    /**
     * The type of error.
     */
    type?: string | null;
  }
  /**
   * The kinds of value that a cell in a spreadsheet can have.
   */
  export interface Schema$ExtendedValue {
    /**
     * Represents a boolean value.
     */
    boolValue?: boolean | null;
    /**
     * Represents an error. This field is read-only.
     */
    errorValue?: Schema$ErrorValue;
    /**
     * Represents a formula.
     */
    formulaValue?: string | null;
    /**
     * Represents a double value. Note: Dates, Times and DateTimes are represented as doubles in SERIAL_NUMBER format.
     */
    numberValue?: number | null;
    /**
     * Represents a string value. Leading single quotes are not included. For example, if the user typed `'123` into the UI, this would be represented as a `stringValue` of `"123"`.
     */
    stringValue?: string | null;
  }
  /**
   * Criteria for showing/hiding rows in a filter or filter view.
   */
  export interface Schema$FilterCriteria {
    /**
     * A condition that must be true for values to be shown. (This does not override hidden_values -- if a value is listed there, it will still be hidden.)
     */
    condition?: Schema$BooleanCondition;
    /**
     * Values that should be hidden.
     */
    hiddenValues?: string[] | null;
    /**
     * The background fill color to filter by; only cells with this fill color are shown. Mutually exclusive with visible_foreground_color. Deprecated: Use visible_background_color_style.
     */
    visibleBackgroundColor?: Schema$Color;
    /**
     * The background fill color to filter by; only cells with this fill color are shown. This field is mutually exclusive with visible_foreground_color, and must be set to an RGB-type color. If visible_background_color is also set, this field takes precedence.
     */
    visibleBackgroundColorStyle?: Schema$ColorStyle;
    /**
     * The foreground color to filter by; only cells with this foreground color are shown. Mutually exclusive with visible_background_color. Deprecated: Use visible_foreground_color_style.
     */
    visibleForegroundColor?: Schema$Color;
    /**
     * The foreground color to filter by; only cells with this foreground color are shown. This field is mutually exclusive with visible_background_color, and must be set to an RGB-type color. If visible_foreground_color is also set, this field takes precedence.
     */
    visibleForegroundColorStyle?: Schema$ColorStyle;
  }
  /**
   * The filter criteria associated with a specific column.
   */
  export interface Schema$FilterSpec {
    /**
     * The zero-based column index.
     */
    columnIndex?: number | null;
    /**
     * Reference to a data source column.
     */
    dataSourceColumnReference?: Schema$DataSourceColumnReference;
    /**
     * The criteria for the column.
     */
    filterCriteria?: Schema$FilterCriteria;
  }
  /**
   * A filter view.
   */
  export interface Schema$FilterView {
    /**
     * The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs.
     */
    criteria?: {[key: string]: Schema$FilterCriteria} | null;
    /**
     * The filter criteria for showing/hiding values per column. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence.
     */
    filterSpecs?: Schema$FilterSpec[];
    /**
     * The ID of the filter view.
     */
    filterViewId?: number | null;
    /**
     * The named range this filter view is backed by, if any. When writing, only one of range or named_range_id or table_id may be set.
     */
    namedRangeId?: string | null;
    /**
     * The range this filter view covers. When writing, only one of range or named_range_id or table_id may be set.
     */
    range?: Schema$GridRange;
    /**
     * The sort order per column. Later specifications are used when values are equal in the earlier specifications.
     */
    sortSpecs?: Schema$SortSpec[];
    /**
     * The table this filter view is backed by, if any. When writing, only one of range or named_range_id or table_id may be set.
     */
    tableId?: string | null;
    /**
     * The name of the filter view.
     */
    title?: string | null;
  }
  /**
   * Finds and replaces data in cells over a range, sheet, or all sheets.
   */
  export interface Schema$FindReplaceRequest {
    /**
     * True to find/replace over all sheets.
     */
    allSheets?: boolean | null;
    /**
     * The value to search.
     */
    find?: string | null;
    /**
     * True if the search should include cells with formulas. False to skip cells with formulas.
     */
    includeFormulas?: boolean | null;
    /**
     * True if the search is case sensitive.
     */
    matchCase?: boolean | null;
    /**
     * True if the find value should match the entire cell.
     */
    matchEntireCell?: boolean | null;
    /**
     * The range to find/replace over.
     */
    range?: Schema$GridRange;
    /**
     * The value to use as the replacement.
     */
    replacement?: string | null;
    /**
     * True if the find value is a regex. The regular expression and replacement should follow Java regex rules at https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html. The replacement string is allowed to refer to capturing groups. For example, if one cell has the contents `"Google Sheets"` and another has `"Google Docs"`, then searching for `"o.* (.*)"` with a replacement of `"$1 Rocks"` would change the contents of the cells to `"GSheets Rocks"` and `"GDocs Rocks"` respectively.
     */
    searchByRegex?: boolean | null;
    /**
     * The sheet to find/replace over.
     */
    sheetId?: number | null;
  }
  /**
   * The result of the find/replace.
   */
  export interface Schema$FindReplaceResponse {
    /**
     * The number of formula cells changed.
     */
    formulasChanged?: number | null;
    /**
     * The number of occurrences (possibly multiple within a cell) changed. For example, if replacing `"e"` with `"o"` in `"Google Sheets"`, this would be `"3"` because `"Google Sheets"` -\> `"Googlo Shoots"`.
     */
    occurrencesChanged?: number | null;
    /**
     * The number of rows changed.
     */
    rowsChanged?: number | null;
    /**
     * The number of sheets changed.
     */
    sheetsChanged?: number | null;
    /**
     * The number of non-formula cells changed.
     */
    valuesChanged?: number | null;
  }
  /**
   * The request for retrieving a Spreadsheet.
   */
  export interface Schema$GetSpreadsheetByDataFilterRequest {
    /**
     * The DataFilters used to select which ranges to retrieve from the spreadsheet.
     */
    dataFilters?: Schema$DataFilter[];
    /**
     * True if tables should be excluded in the banded ranges. False if not set.
     */
    excludeTablesInBandedRanges?: boolean | null;
    /**
     * True if grid data should be returned. This parameter is ignored if a field mask was set in the request.
     */
    includeGridData?: boolean | null;
  }
  /**
   * A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points.
   */
  export interface Schema$GradientRule {
    /**
     * The final interpolation point.
     */
    maxpoint?: Schema$InterpolationPoint;
    /**
     * An optional midway interpolation point.
     */
    midpoint?: Schema$InterpolationPoint;
    /**
     * The starting interpolation point.
     */
    minpoint?: Schema$InterpolationPoint;
  }
  /**
   * A coordinate in a sheet. All indexes are zero-based.
   */
  export interface Schema$GridCoordinate {
    /**
     * The column index of the coordinate.
     */
    columnIndex?: number | null;
    /**
     * The row index of the coordinate.
     */
    rowIndex?: number | null;
    /**
     * The sheet this coordinate is on.
     */
    sheetId?: number | null;
  }
  /**
   * Data in the grid, as well as metadata about the dimensions.
   */
  export interface Schema$GridData {
    /**
     * Metadata about the requested columns in the grid, starting with the column in start_column.
     */
    columnMetadata?: Schema$DimensionProperties[];
    /**
     * The data in the grid, one entry per row, starting with the row in startRow. The values in RowData will correspond to columns starting at start_column.
     */
    rowData?: Schema$RowData[];
    /**
     * Metadata about the requested rows in the grid, starting with the row in start_row.
     */
    rowMetadata?: Schema$DimensionProperties[];
    /**
     * The first column this GridData refers to, zero-based.
     */
    startColumn?: number | null;
    /**
     * The first row this GridData refers to, zero-based.
     */
    startRow?: number | null;
  }
  /**
   * Properties of a grid.
   */
  export interface Schema$GridProperties {
    /**
     * The number of columns in the grid.
     */
    columnCount?: number | null;
    /**
     * True if the column grouping control toggle is shown after the group.
     */
    columnGroupControlAfter?: boolean | null;
    /**
     * The number of columns that are frozen in the grid.
     */
    frozenColumnCount?: number | null;
    /**
     * The number of rows that are frozen in the grid.
     */
    frozenRowCount?: number | null;
    /**
     * True if the grid isn't showing gridlines in the UI.
     */
    hideGridlines?: boolean | null;
    /**
     * The number of rows in the grid.
     */
    rowCount?: number | null;
    /**
     * True if the row grouping control toggle is shown after the group.
     */
    rowGroupControlAfter?: boolean | null;
  }
  /**
   * A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`.
   */
  export interface Schema$GridRange {
    /**
     * The end column (exclusive) of the range, or not set if unbounded.
     */
    endColumnIndex?: number | null;
    /**
     * The end row (exclusive) of the range, or not set if unbounded.
     */
    endRowIndex?: number | null;
    /**
     * The sheet this range is on.
     */
    sheetId?: number | null;
    /**
     * The start column (inclusive) of the range, or not set if unbounded.
     */
    startColumnIndex?: number | null;
    /**
     * The start row (inclusive) of the range, or not set if unbounded.
     */
    startRowIndex?: number | null;
  }
  /**
   * A histogram chart. A histogram chart groups data items into bins, displaying each bin as a column of stacked items. Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those items fall. The number of bins can be chosen automatically or specified explicitly.
   */
  export interface Schema$HistogramChartSpec {
    /**
     * By default the bucket size (the range of values stacked in a single column) is chosen automatically, but it may be overridden here. E.g., A bucket size of 1.5 results in buckets from 0 - 1.5, 1.5 - 3.0, etc. Cannot be negative. This field is optional.
     */
    bucketSize?: number | null;
    /**
     * The position of the chart legend.
     */
    legendPosition?: string | null;
    /**
     * The outlier percentile is used to ensure that outliers do not adversely affect the calculation of bucket sizes. For example, setting an outlier percentile of 0.05 indicates that the top and bottom 5% of values when calculating buckets. The values are still included in the chart, they will be added to the first or last buckets instead of their own buckets. Must be between 0.0 and 0.5.
     */
    outlierPercentile?: number | null;
    /**
     * The series for a histogram may be either a single series of values to be bucketed or multiple series, each of the same length, containing the name of the series followed by the values to be bucketed for that series.
     */
    series?: Schema$HistogramSeries[];
    /**
     * Whether horizontal divider lines should be displayed between items in each column.
     */
    showItemDividers?: boolean | null;
  }
  /**
   * Allows you to organize the numeric values in a source data column into buckets of a constant size. All values from HistogramRule.start to HistogramRule.end are placed into groups of size HistogramRule.interval. In addition, all values below HistogramRule.start are placed in one group, and all values above HistogramRule.end are placed in another. Only HistogramRule.interval is required, though if HistogramRule.start and HistogramRule.end are both provided, HistogramRule.start must be less than HistogramRule.end. For example, a pivot table showing average purchase amount by age that has 50+ rows: +-----+-------------------+ | Age | AVERAGE of Amount | +-----+-------------------+ | 16 | $27.13 | | 17 | $5.24 | | 18 | $20.15 | ... +-----+-------------------+ could be turned into a pivot table that looks like the one below by applying a histogram group rule with a HistogramRule.start of 25, an HistogramRule.interval of 20, and an HistogramRule.end of 65. +-------------+-------------------+ | Grouped Age | AVERAGE of Amount | +-------------+-------------------+ | < 25 | $19.34 | | 25-45 | $31.43 | | 45-65 | $35.87 | | \> 65 | $27.55 | +-------------+-------------------+ | Grand Total | $29.12 | +-------------+-------------------+
   */
  export interface Schema$HistogramRule {
    /**
     * The maximum value at which items are placed into buckets of constant size. Values above end are lumped into a single bucket. This field is optional.
     */
    end?: number | null;
    /**
     * The size of the buckets that are created. Must be positive.
     */
    interval?: number | null;
    /**
     * The minimum value at which items are placed into buckets of constant size. Values below start are lumped into a single bucket. This field is optional.
     */
    start?: number | null;
  }
  /**
   * A histogram series containing the series color and data.
   */
  export interface Schema$HistogramSeries {
    /**
     * The color of the column representing this series in each bucket. This field is optional. Deprecated: Use bar_color_style.
     */
    barColor?: Schema$Color;
    /**
     * The color of the column representing this series in each bucket. This field is optional. If bar_color is also set, this field takes precedence.
     */
    barColorStyle?: Schema$ColorStyle;
    /**
     * The data for this histogram series.
     */
    data?: Schema$ChartData;
  }
  /**
   * Inserts rows or columns in a sheet at a particular index.
   */
  export interface Schema$InsertDimensionRequest {
    /**
     * Whether dimension properties should be extended from the dimensions before or after the newly inserted dimensions. True to inherit from the dimensions before (in which case the start index must be greater than 0), and false to inherit from the dimensions after. For example, if row index 0 has red background and row index 1 has a green background, then inserting 2 rows at index 1 can inherit either the green or red background. If `inheritFromBefore` is true, the two new rows will be red (because the row before the insertion point was red), whereas if `inheritFromBefore` is false, the two new rows will be green (because the row after the insertion point was green).
     */
    inheritFromBefore?: boolean | null;
    /**
     * The dimensions to insert. Both the start and end indexes must be bounded.
     */
    range?: Schema$DimensionRange;
  }
  /**
   * Inserts cells into a range, shifting the existing cells over or down.
   */
  export interface Schema$InsertRangeRequest {
    /**
     * The range to insert new cells into. The range is constrained to the current sheet boundaries.
     */
    range?: Schema$GridRange;
    /**
     * The dimension which will be shifted when inserting cells. If ROWS, existing cells will be shifted down. If COLUMNS, existing cells will be shifted right.
     */
    shiftDimension?: string | null;
  }
  /**
   * A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen.
   */
  export interface Schema$InterpolationPoint {
    /**
     * The color this interpolation point should use. Deprecated: Use color_style.
     */
    color?: Schema$Color;
    /**
     * The color this interpolation point should use. If color is also set, this field takes precedence.
     */
    colorStyle?: Schema$ColorStyle;
    /**
     * How the value should be interpreted.
     */
    type?: string | null;
    /**
     * The value this interpolation point uses. May be a formula. Unused if type is MIN or MAX.
     */
    value?: string | null;
  }
  /**
   * Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.
   */
  export interface Schema$Interval {
    /**
     * Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     */
    endTime?: string | null;
    /**
     * Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     */
    startTime?: string | null;
  }
  /**
   * Settings to control how circular dependencies are resolved with iterative calculation.
   */
  export interface Schema$IterativeCalculationSettings {
    /**
     * When iterative calculation is enabled and successive results differ by less than this threshold value, the calculation rounds stop.
     */
    convergenceThreshold?: number | null;
    /**
     * When iterative calculation is enabled, the maximum number of calculation rounds to perform.
     */
    maxIterations?: number | null;
  }
  /**
   * Formatting options for key value.
   */
  export interface Schema$KeyValueFormat {
    /**
     * Specifies the horizontal text positioning of key value. This field is optional. If not specified, default positioning is used.
     */
    position?: Schema$TextPosition;
    /**
     * Text formatting options for key value. The link field is not supported.
     */
    textFormat?: Schema$TextFormat;
  }
  /**
   * Properties that describe the style of a line.
   */
  export interface Schema$LineStyle {
    /**
     * The dash type of the line.
     */
    type?: string | null;
    /**
     * The thickness of the line, in px.
     */
    width?: number | null;
  }
  /**
   * An external or local reference.
   */
  export interface Schema$Link {
    /**
     * The link identifier.
     */
    uri?: string | null;
  }
  /**
   * The specification of a Looker data source.
   */
  export interface Schema$LookerDataSourceSpec {
    /**
     * Name of a Looker model explore.
     */
    explore?: string | null;
    /**
     * A Looker instance URL.
     */
    instanceUri?: string | null;
    /**
     * Name of a Looker model.
     */
    model?: string | null;
  }
  /**
   * Allows you to manually organize the values in a source data column into buckets with names of your choosing. For example, a pivot table that aggregates population by state: +-------+-------------------+ | State | SUM of Population | +-------+-------------------+ | AK | 0.7 | | AL | 4.8 | | AR | 2.9 | ... +-------+-------------------+ could be turned into a pivot table that aggregates population by time zone by providing a list of groups (for example, groupName = 'Central', items = ['AL', 'AR', 'IA', ...]) to a manual group rule. Note that a similar effect could be achieved by adding a time zone column to the source data and adjusting the pivot table. +-----------+-------------------+ | Time Zone | SUM of Population | +-----------+-------------------+ | Central | 106.3 | | Eastern | 151.9 | | Mountain | 17.4 | ... +-----------+-------------------+
   */
  export interface Schema$ManualRule {
    /**
     * The list of group names and the corresponding items from the source data that map to each group name.
     */
    groups?: Schema$ManualRuleGroup[];
  }
  /**
   * A group name and a list of items from the source data that should be placed in the group with this name.
   */
  export interface Schema$ManualRuleGroup {
    /**
     * The group name, which must be a string. Each group in a given ManualRule must have a unique group name.
     */
    groupName?: Schema$ExtendedValue;
    /**
     * The items in the source data that should be placed into this group. Each item may be a string, number, or boolean. Items may appear in at most one group within a given ManualRule. Items that do not appear in any group will appear on their own.
     */
    items?: Schema$ExtendedValue[];
  }
  /**
   * A developer metadata entry and the data filters specified in the original request that matched it.
   */
  export interface Schema$MatchedDeveloperMetadata {
    /**
     * All filters matching the returned developer metadata.
     */
    dataFilters?: Schema$DataFilter[];
    /**
     * The developer metadata matching the specified filters.
     */
    developerMetadata?: Schema$DeveloperMetadata;
  }
  /**
   * A value range that was matched by one or more data filers.
   */
  export interface Schema$MatchedValueRange {
    /**
     * The DataFilters from the request that matched the range of values.
     */
    dataFilters?: Schema$DataFilter[];
    /**
     * The values matched by the DataFilter.
     */
    valueRange?: Schema$ValueRange;
  }
  /**
   * Merges all cells in the range.
   */
  export interface Schema$MergeCellsRequest {
    /**
     * How the cells should be merged.
     */
    mergeType?: string | null;
    /**
     * The range of cells to merge.
     */
    range?: Schema$GridRange;
  }
  /**
   * Moves one or more rows or columns.
   */
  export interface Schema$MoveDimensionRequest {
    /**
     * The zero-based start index of where to move the source data to, based on the coordinates *before* the source data is removed from the grid. Existing data will be shifted down or right (depending on the dimension) to make room for the moved dimensions. The source dimensions are removed from the grid, so the the data may end up in a different index than specified. For example, given `A1..A5` of `0, 1, 2, 3, 4` and wanting to move `"1"` and `"2"` to between `"3"` and `"4"`, the source would be `ROWS [1..3)`,and the destination index would be `"4"` (the zero-based index of row 5). The end result would be `A1..A5` of `0, 3, 1, 2, 4`.
     */
    destinationIndex?: number | null;
    /**
     * The source dimensions to move.
     */
    source?: Schema$DimensionRange;
  }
  /**
   * A named range.
   */
  export interface Schema$NamedRange {
    /**
     * The name of the named range.
     */
    name?: string | null;
    /**
     * The ID of the named range.
     */
    namedRangeId?: string | null;
    /**
     * The range this represents.
     */
    range?: Schema$GridRange;
  }
  /**
   * The number format of a cell.
   */
  export interface Schema$NumberFormat {
    /**
     * Pattern string used for formatting. If not set, a default pattern based on the user's locale will be used if necessary for the given type. See the [Date and Number Formats guide](https://developers.google.com/workspace/sheets/api/guides/formats) for more information about the supported patterns.
     */
    pattern?: string | null;
    /**
     * The type of the number format. When writing, this field must be set.
     */
    type?: string | null;
  }
  /**
   * An org chart. Org charts require a unique set of labels in labels and may optionally include parent_labels and tooltips. parent_labels contain, for each node, the label identifying the parent node. tooltips contain, for each node, an optional tooltip. For example, to describe an OrgChart with Alice as the CEO, Bob as the President (reporting to Alice) and Cathy as VP of Sales (also reporting to Alice), have labels contain "Alice", "Bob", "Cathy", parent_labels contain "", "Alice", "Alice" and tooltips contain "CEO", "President", "VP Sales".
   */
  export interface Schema$OrgChartSpec {
    /**
     * The data containing the labels for all the nodes in the chart. Labels must be unique.
     */
    labels?: Schema$ChartData;
    /**
     * The color of the org chart nodes. Deprecated: Use node_color_style.
     */
    nodeColor?: Schema$Color;
    /**
     * The color of the org chart nodes. If node_color is also set, this field takes precedence.
     */
    nodeColorStyle?: Schema$ColorStyle;
    /**
     * The size of the org chart nodes.
     */
    nodeSize?: string | null;
    /**
     * The data containing the label of the parent for the corresponding node. A blank value indicates that the node has no parent and is a top-level node. This field is optional.
     */
    parentLabels?: Schema$ChartData;
    /**
     * The color of the selected org chart nodes. Deprecated: Use selected_node_color_style.
     */
    selectedNodeColor?: Schema$Color;
    /**
     * The color of the selected org chart nodes. If selected_node_color is also set, this field takes precedence.
     */
    selectedNodeColorStyle?: Schema$ColorStyle;
    /**
     * The data containing the tooltip for the corresponding node. A blank value results in no tooltip being displayed for the node. This field is optional.
     */
    tooltips?: Schema$ChartData;
  }
  /**
   * The location an object is overlaid on top of a grid.
   */
  export interface Schema$OverlayPosition {
    /**
     * The cell the object is anchored to.
     */
    anchorCell?: Schema$GridCoordinate;
    /**
     * The height of the object, in pixels. Defaults to 371.
     */
    heightPixels?: number | null;
    /**
     * The horizontal offset, in pixels, that the object is offset from the anchor cell.
     */
    offsetXPixels?: number | null;
    /**
     * The vertical offset, in pixels, that the object is offset from the anchor cell.
     */
    offsetYPixels?: number | null;
    /**
     * The width of the object, in pixels. Defaults to 600.
     */
    widthPixels?: number | null;
  }
  /**
   * The amount of padding around the cell, in pixels. When updating padding, every field must be specified.
   */
  export interface Schema$Padding {
    /**
     * The bottom padding of the cell.
     */
    bottom?: number | null;
    /**
     * The left padding of the cell.
     */
    left?: number | null;
    /**
     * The right padding of the cell.
     */
    right?: number | null;
    /**
     * The top padding of the cell.
     */
    top?: number | null;
  }
  /**
   * Inserts data into the spreadsheet starting at the specified coordinate.
   */
  export interface Schema$PasteDataRequest {
    /**
     * The coordinate at which the data should start being inserted.
     */
    coordinate?: Schema$GridCoordinate;
    /**
     * The data to insert.
     */
    data?: string | null;
    /**
     * The delimiter in the data.
     */
    delimiter?: string | null;
    /**
     * True if the data is HTML.
     */
    html?: boolean | null;
    /**
     * How the data should be pasted.
     */
    type?: string | null;
  }
  /**
   * Properties specific to a linked person.
   */
  export interface Schema$PersonProperties {
    /**
     * Optional. The display format of the person chip. If not set, the default display format is used.
     */
    displayFormat?: string | null;
    /**
     * Required. The email address linked to this person. This field is always present.
     */
    email?: string | null;
  }
  /**
   * A pie chart.
   */
  export interface Schema$PieChartSpec {
    /**
     * The data that covers the domain of the pie chart.
     */
    domain?: Schema$ChartData;
    /**
     * Where the legend of the pie chart should be drawn.
     */
    legendPosition?: string | null;
    /**
     * The size of the hole in the pie chart.
     */
    pieHole?: number | null;
    /**
     * The data that covers the one and only series of the pie chart.
     */
    series?: Schema$ChartData;
    /**
     * True if the pie is three dimensional.
     */
    threeDimensional?: boolean | null;
  }
  /**
   * Criteria for showing/hiding rows in a pivot table.
   */
  export interface Schema$PivotFilterCriteria {
    /**
     * A condition that must be true for values to be shown. (`visibleValues` does not override this -- even if a value is listed there, it is still hidden if it does not meet the condition.) Condition values that refer to ranges in A1-notation are evaluated relative to the pivot table sheet. References are treated absolutely, so are not filled down the pivot table. For example, a condition value of `=A1` on "Pivot Table 1" is treated as `'Pivot Table 1'!$A$1`. The source data of the pivot table can be referenced by column header name. For example, if the source data has columns named "Revenue" and "Cost" and a condition is applied to the "Revenue" column with type `NUMBER_GREATER` and value `=Cost`, then only columns where "Revenue" \> "Cost" are included.
     */
    condition?: Schema$BooleanCondition;
    /**
     * Whether values are visible by default. If true, the visible_values are ignored, all values that meet condition (if specified) are shown. If false, values that are both in visible_values and meet condition are shown.
     */
    visibleByDefault?: boolean | null;
    /**
     * Values that should be included. Values not listed here are excluded.
     */
    visibleValues?: string[] | null;
  }
  /**
   * The pivot table filter criteria associated with a specific source column offset.
   */
  export interface Schema$PivotFilterSpec {
    /**
     * The zero-based column offset of the source range.
     */
    columnOffsetIndex?: number | null;
    /**
     * The reference to the data source column.
     */
    dataSourceColumnReference?: Schema$DataSourceColumnReference;
    /**
     * The criteria for the column.
     */
    filterCriteria?: Schema$PivotFilterCriteria;
  }
  /**
   * A single grouping (either row or column) in a pivot table.
   */
  export interface Schema$PivotGroup {
    /**
     * The reference to the data source column this grouping is based on.
     */
    dataSourceColumnReference?: Schema$DataSourceColumnReference;
    /**
     * The count limit on rows or columns to apply to this pivot group.
     */
    groupLimit?: Schema$PivotGroupLimit;
    /**
     * The group rule to apply to this row/column group.
     */
    groupRule?: Schema$PivotGroupRule;
    /**
     * The labels to use for the row/column groups which can be customized. For example, in the following pivot table, the row label is `Region` (which could be renamed to `State`) and the column label is `Product` (which could be renamed `Item`). Pivot tables created before December 2017 do not have header labels. If you'd like to add header labels to an existing pivot table, please delete the existing pivot table and then create a new pivot table with same parameters. +--------------+---------+-------+ | SUM of Units | Product | | | Region | Pen | Paper | +--------------+---------+-------+ | New York | 345 | 98 | | Oregon | 234 | 123 | | Tennessee | 531 | 415 | +--------------+---------+-------+ | Grand Total | 1110 | 636 | +--------------+---------+-------+
     */
    label?: string | null;
    /**
     * True if the headings in this pivot group should be repeated. This is only valid for row groupings and is ignored by columns. By default, we minimize repetition of headings by not showing higher level headings where they are the same. For example, even though the third row below corresponds to "Q1 Mar", "Q1" is not shown because it is redundant with previous rows. Setting repeat_headings to true would cause "Q1" to be repeated for "Feb" and "Mar". +--------------+ | Q1 | Jan | | | Feb | | | Mar | +--------+-----+ | Q1 Total | +--------------+
     */
    repeatHeadings?: boolean | null;
    /**
     * True if the pivot table should include the totals for this grouping.
     */
    showTotals?: boolean | null;
    /**
     * The order the values in this group should be sorted.
     */
    sortOrder?: string | null;
    /**
     * The column offset of the source range that this grouping is based on. For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means this group refers to column `C`, whereas the offset `1` would refer to column `D`.
     */
    sourceColumnOffset?: number | null;
    /**
     * The bucket of the opposite pivot group to sort by. If not specified, sorting is alphabetical by this group's values.
     */
    valueBucket?: Schema$PivotGroupSortValueBucket;
    /**
     * Metadata about values in the grouping.
     */
    valueMetadata?: Schema$PivotGroupValueMetadata[];
  }
  /**
   * The count limit on rows or columns in the pivot group.
   */
  export interface Schema$PivotGroupLimit {
    /**
     * The order in which the group limit is applied to the pivot table. Pivot group limits are applied from lower to higher order number. Order numbers are normalized to consecutive integers from 0. For write request, to fully customize the applying orders, all pivot group limits should have this field set with an unique number. Otherwise, the order is determined by the index in the PivotTable.rows list and then the PivotTable.columns list.
     */
    applyOrder?: number | null;
    /**
     * The count limit.
     */
    countLimit?: number | null;
  }
  /**
   * An optional setting on a PivotGroup that defines buckets for the values in the source data column rather than breaking out each individual value. Only one PivotGroup with a group rule may be added for each column in the source data, though on any given column you may add both a PivotGroup that has a rule and a PivotGroup that does not.
   */
  export interface Schema$PivotGroupRule {
    /**
     * A DateTimeRule.
     */
    dateTimeRule?: Schema$DateTimeRule;
    /**
     * A HistogramRule.
     */
    histogramRule?: Schema$HistogramRule;
    /**
     * A ManualRule.
     */
    manualRule?: Schema$ManualRule;
  }
  /**
   * Information about which values in a pivot group should be used for sorting.
   */
  export interface Schema$PivotGroupSortValueBucket {
    /**
     * Determines the bucket from which values are chosen to sort. For example, in a pivot table with one row group & two column groups, the row group can list up to two values. The first value corresponds to a value within the first column group, and the second value corresponds to a value in the second column group. If no values are listed, this would indicate that the row should be sorted according to the "Grand Total" over the column groups. If a single value is listed, this would correspond to using the "Total" of that bucket.
     */
    buckets?: Schema$ExtendedValue[];
    /**
     * The offset in the PivotTable.values list which the values in this grouping should be sorted by.
     */
    valuesIndex?: number | null;
  }
  /**
   * Metadata about a value in a pivot grouping.
   */
  export interface Schema$PivotGroupValueMetadata {
    /**
     * True if the data corresponding to the value is collapsed.
     */
    collapsed?: boolean | null;
    /**
     * The calculated value the metadata corresponds to. (Note that formulaValue is not valid, because the values will be calculated.)
     */
    value?: Schema$ExtendedValue;
  }
  /**
   * A pivot table.
   */
  export interface Schema$PivotTable {
    /**
     * Each column grouping in the pivot table.
     */
    columns?: Schema$PivotGroup[];
    /**
     * An optional mapping of filters per source column offset. The filters are applied before aggregating data into the pivot table. The map's key is the column offset of the source range that you want to filter, and the value is the criteria for that column. For example, if the source was `C10:E15`, a key of `0` will have the filter for column `C`, whereas the key `1` is for column `D`. This field is deprecated in favor of filter_specs.
     */
    criteria?: {[key: string]: Schema$PivotFilterCriteria} | null;
    /**
     * Output only. The data execution status for data source pivot tables.
     */
    dataExecutionStatus?: Schema$DataExecutionStatus;
    /**
     * The ID of the data source the pivot table is reading data from.
     */
    dataSourceId?: string | null;
    /**
     * The filters applied to the source columns before aggregating data for the pivot table. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence.
     */
    filterSpecs?: Schema$PivotFilterSpec[];
    /**
     * Each row grouping in the pivot table.
     */
    rows?: Schema$PivotGroup[];
    /**
     * The range the pivot table is reading data from.
     */
    source?: Schema$GridRange;
    /**
     * Whether values should be listed horizontally (as columns) or vertically (as rows).
     */
    valueLayout?: string | null;
    /**
     * A list of values to include in the pivot table.
     */
    values?: Schema$PivotValue[];
  }
  /**
   * The definition of how a value in a pivot table should be calculated.
   */
  export interface Schema$PivotValue {
    /**
     * If specified, indicates that pivot values should be displayed as the result of a calculation with another pivot value. For example, if calculated_display_type is specified as PERCENT_OF_GRAND_TOTAL, all the pivot values are displayed as the percentage of the grand total. In the Sheets editor, this is referred to as "Show As" in the value section of a pivot table.
     */
    calculatedDisplayType?: string | null;
    /**
     * The reference to the data source column that this value reads from.
     */
    dataSourceColumnReference?: Schema$DataSourceColumnReference;
    /**
     * A custom formula to calculate the value. The formula must start with an `=` character.
     */
    formula?: string | null;
    /**
     * A name to use for the value.
     */
    name?: string | null;
    /**
     * The column offset of the source range that this value reads from. For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means this value refers to column `C`, whereas the offset `1` would refer to column `D`.
     */
    sourceColumnOffset?: number | null;
    /**
     * A function to summarize the value. If formula is set, the only supported values are SUM and CUSTOM. If sourceColumnOffset is set, then `CUSTOM` is not supported.
     */
    summarizeFunction?: string | null;
  }
  /**
   * The style of a point on the chart.
   */
  export interface Schema$PointStyle {
    /**
     * The point shape. If empty or unspecified, a default shape is used.
     */
    shape?: string | null;
    /**
     * The point size. If empty, a default size is used.
     */
    size?: number | null;
  }
  /**
   * A protected range.
   */
  export interface Schema$ProtectedRange {
    /**
     * The description of this protected range.
     */
    description?: string | null;
    /**
     * The users and groups with edit access to the protected range. This field is only visible to users with edit access to the protected range and the document. Editors are not supported with warning_only protection.
     */
    editors?: Schema$Editors;
    /**
     * The named range this protected range is backed by, if any. When writing, only one of range or named_range_id or table_id may be set.
     */
    namedRangeId?: string | null;
    /**
     * The ID of the protected range. This field is read-only.
     */
    protectedRangeId?: number | null;
    /**
     * The range that is being protected. The range may be fully unbounded, in which case this is considered a protected sheet. When writing, only one of range or named_range_id or table_id may be set.
     */
    range?: Schema$GridRange;
    /**
     * True if the user who requested this protected range can edit the protected area. This field is read-only.
     */
    requestingUserCanEdit?: boolean | null;
    /**
     * The table this protected range is backed by, if any. When writing, only one of range or named_range_id or table_id may be set.
     */
    tableId?: string | null;
    /**
     * The list of unprotected ranges within a protected sheet. Unprotected ranges are only supported on protected sheets.
     */
    unprotectedRanges?: Schema$GridRange[];
    /**
     * True if this protected range will show a warning when editing. Warning-based protection means that every user can edit data in the protected range, except editing will prompt a warning asking the user to confirm the edit. When writing: if this field is true, then editors are ignored. Additionally, if this field is changed from true to false and the `editors` field is not set (nor included in the field mask), then the editors will be set to all the editors in the document.
     */
    warningOnly?: boolean | null;
  }
  /**
   * Randomizes the order of the rows in a range.
   */
  export interface Schema$RandomizeRangeRequest {
    /**
     * The range to randomize.
     */
    range?: Schema$GridRange;
  }
  /**
   * The status of a refresh cancellation. You can send a cancel request to explicitly cancel one or multiple data source object refreshes.
   */
  export interface Schema$RefreshCancellationStatus {
    /**
     * The error code.
     */
    errorCode?: string | null;
    /**
     * The state of a call to cancel a refresh in Sheets.
     */
    state?: string | null;
  }
  /**
   * The execution status of refreshing one data source object.
   */
  export interface Schema$RefreshDataSourceObjectExecutionStatus {
    /**
     * The data execution status.
     */
    dataExecutionStatus?: Schema$DataExecutionStatus;
    /**
     * Reference to a data source object being refreshed.
     */
    reference?: Schema$DataSourceObjectReference;
  }
  /**
   * Refreshes one or multiple data source objects in the spreadsheet by the specified references. The request requires an additional `bigquery.readonly` OAuth scope if you are refreshing a BigQuery data source. If there are multiple refresh requests referencing the same data source objects in one batch, only the last refresh request is processed, and all those requests will have the same response accordingly.
   */
  export interface Schema$RefreshDataSourceRequest {
    /**
     * Reference to a DataSource. If specified, refreshes all associated data source objects for the data source.
     */
    dataSourceId?: string | null;
    /**
     * Refreshes the data source objects regardless of the current state. If not set and a referenced data source object was in error state, the refresh will fail immediately.
     */
    force?: boolean | null;
    /**
     * Refreshes all existing data source objects in the spreadsheet.
     */
    isAll?: boolean | null;
    /**
     * References to data source objects to refresh.
     */
    references?: Schema$DataSourceObjectReferences;
  }
  /**
   * The response from refreshing one or multiple data source objects.
   */
  export interface Schema$RefreshDataSourceResponse {
    /**
     * All the refresh status for the data source object references specified in the request. If is_all is specified, the field contains only those in failure status.
     */
    statuses?: Schema$RefreshDataSourceObjectExecutionStatus[];
  }
  /**
   * Updates all cells in the range to the values in the given Cell object. Only the fields listed in the fields field are updated; others are unchanged. If writing a cell with a formula, the formula's ranges will automatically increment for each field in the range. For example, if writing a cell with formula `=A1` into range B2:C4, B2 would be `=A1`, B3 would be `=A2`, B4 would be `=A3`, C2 would be `=B1`, C3 would be `=B2`, C4 would be `=B3`. To keep the formula's ranges static, use the `$` indicator. For example, use the formula `=$A$1` to prevent both the row and the column from incrementing.
   */
  export interface Schema$RepeatCellRequest {
    /**
     * The data to write.
     */
    cell?: Schema$CellData;
    /**
     * The fields that should be updated. At least one field must be specified. The root `cell` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
    /**
     * The range to repeat the cell in.
     */
    range?: Schema$GridRange;
  }
  /**
   * A single kind of update to apply to a spreadsheet.
   */
  export interface Schema$Request {
    /**
     * Adds a new banded range
     */
    addBanding?: Schema$AddBandingRequest;
    /**
     * Adds a chart.
     */
    addChart?: Schema$AddChartRequest;
    /**
     * Adds a new conditional format rule.
     */
    addConditionalFormatRule?: Schema$AddConditionalFormatRuleRequest;
    /**
     * Adds a data source.
     */
    addDataSource?: Schema$AddDataSourceRequest;
    /**
     * Creates a group over the specified range.
     */
    addDimensionGroup?: Schema$AddDimensionGroupRequest;
    /**
     * Adds a filter view.
     */
    addFilterView?: Schema$AddFilterViewRequest;
    /**
     * Adds a named range.
     */
    addNamedRange?: Schema$AddNamedRangeRequest;
    /**
     * Adds a protected range.
     */
    addProtectedRange?: Schema$AddProtectedRangeRequest;
    /**
     * Adds a sheet.
     */
    addSheet?: Schema$AddSheetRequest;
    /**
     * Adds a slicer.
     */
    addSlicer?: Schema$AddSlicerRequest;
    /**
     * Adds a table.
     */
    addTable?: Schema$AddTableRequest;
    /**
     * Appends cells after the last row with data in a sheet.
     */
    appendCells?: Schema$AppendCellsRequest;
    /**
     * Appends dimensions to the end of a sheet.
     */
    appendDimension?: Schema$AppendDimensionRequest;
    /**
     * Automatically fills in more data based on existing data.
     */
    autoFill?: Schema$AutoFillRequest;
    /**
     * Automatically resizes one or more dimensions based on the contents of the cells in that dimension.
     */
    autoResizeDimensions?: Schema$AutoResizeDimensionsRequest;
    /**
     * Cancels refreshes of one or multiple data sources and associated dbobjects.
     */
    cancelDataSourceRefresh?: Schema$CancelDataSourceRefreshRequest;
    /**
     * Clears the basic filter on a sheet.
     */
    clearBasicFilter?: Schema$ClearBasicFilterRequest;
    /**
     * Copies data from one area and pastes it to another.
     */
    copyPaste?: Schema$CopyPasteRequest;
    /**
     * Creates new developer metadata
     */
    createDeveloperMetadata?: Schema$CreateDeveloperMetadataRequest;
    /**
     * Cuts data from one area and pastes it to another.
     */
    cutPaste?: Schema$CutPasteRequest;
    /**
     * Removes a banded range
     */
    deleteBanding?: Schema$DeleteBandingRequest;
    /**
     * Deletes an existing conditional format rule.
     */
    deleteConditionalFormatRule?: Schema$DeleteConditionalFormatRuleRequest;
    /**
     * Deletes a data source.
     */
    deleteDataSource?: Schema$DeleteDataSourceRequest;
    /**
     * Deletes developer metadata
     */
    deleteDeveloperMetadata?: Schema$DeleteDeveloperMetadataRequest;
    /**
     * Deletes rows or columns in a sheet.
     */
    deleteDimension?: Schema$DeleteDimensionRequest;
    /**
     * Deletes a group over the specified range.
     */
    deleteDimensionGroup?: Schema$DeleteDimensionGroupRequest;
    /**
     * Removes rows containing duplicate values in specified columns of a cell range.
     */
    deleteDuplicates?: Schema$DeleteDuplicatesRequest;
    /**
     * Deletes an embedded object (e.g, chart, image) in a sheet.
     */
    deleteEmbeddedObject?: Schema$DeleteEmbeddedObjectRequest;
    /**
     * Deletes a filter view from a sheet.
     */
    deleteFilterView?: Schema$DeleteFilterViewRequest;
    /**
     * Deletes a named range.
     */
    deleteNamedRange?: Schema$DeleteNamedRangeRequest;
    /**
     * Deletes a protected range.
     */
    deleteProtectedRange?: Schema$DeleteProtectedRangeRequest;
    /**
     * Deletes a range of cells from a sheet, shifting the remaining cells.
     */
    deleteRange?: Schema$DeleteRangeRequest;
    /**
     * Deletes a sheet.
     */
    deleteSheet?: Schema$DeleteSheetRequest;
    /**
     * A request for deleting a table.
     */
    deleteTable?: Schema$DeleteTableRequest;
    /**
     * Duplicates a filter view.
     */
    duplicateFilterView?: Schema$DuplicateFilterViewRequest;
    /**
     * Duplicates a sheet.
     */
    duplicateSheet?: Schema$DuplicateSheetRequest;
    /**
     * Finds and replaces occurrences of some text with other text.
     */
    findReplace?: Schema$FindReplaceRequest;
    /**
     * Inserts new rows or columns in a sheet.
     */
    insertDimension?: Schema$InsertDimensionRequest;
    /**
     * Inserts new cells in a sheet, shifting the existing cells.
     */
    insertRange?: Schema$InsertRangeRequest;
    /**
     * Merges cells together.
     */
    mergeCells?: Schema$MergeCellsRequest;
    /**
     * Moves rows or columns to another location in a sheet.
     */
    moveDimension?: Schema$MoveDimensionRequest;
    /**
     * Pastes data (HTML or delimited) into a sheet.
     */
    pasteData?: Schema$PasteDataRequest;
    /**
     * Randomizes the order of the rows in a range.
     */
    randomizeRange?: Schema$RandomizeRangeRequest;
    /**
     * Refreshes one or multiple data sources and associated dbobjects.
     */
    refreshDataSource?: Schema$RefreshDataSourceRequest;
    /**
     * Repeats a single cell across a range.
     */
    repeatCell?: Schema$RepeatCellRequest;
    /**
     * Sets the basic filter on a sheet.
     */
    setBasicFilter?: Schema$SetBasicFilterRequest;
    /**
     * Sets data validation for one or more cells.
     */
    setDataValidation?: Schema$SetDataValidationRequest;
    /**
     * Sorts data in a range.
     */
    sortRange?: Schema$SortRangeRequest;
    /**
     * Converts a column of text into many columns of text.
     */
    textToColumns?: Schema$TextToColumnsRequest;
    /**
     * Trims cells of whitespace (such as spaces, tabs, or new lines).
     */
    trimWhitespace?: Schema$TrimWhitespaceRequest;
    /**
     * Unmerges merged cells.
     */
    unmergeCells?: Schema$UnmergeCellsRequest;
    /**
     * Updates a banded range
     */
    updateBanding?: Schema$UpdateBandingRequest;
    /**
     * Updates the borders in a range of cells.
     */
    updateBorders?: Schema$UpdateBordersRequest;
    /**
     * Updates many cells at once.
     */
    updateCells?: Schema$UpdateCellsRequest;
    /**
     * Updates a chart's specifications.
     */
    updateChartSpec?: Schema$UpdateChartSpecRequest;
    /**
     * Updates an existing conditional format rule.
     */
    updateConditionalFormatRule?: Schema$UpdateConditionalFormatRuleRequest;
    /**
     * Updates a data source.
     */
    updateDataSource?: Schema$UpdateDataSourceRequest;
    /**
     * Updates an existing developer metadata entry
     */
    updateDeveloperMetadata?: Schema$UpdateDeveloperMetadataRequest;
    /**
     * Updates the state of the specified group.
     */
    updateDimensionGroup?: Schema$UpdateDimensionGroupRequest;
    /**
     * Updates dimensions' properties.
     */
    updateDimensionProperties?: Schema$UpdateDimensionPropertiesRequest;
    /**
     * Updates an embedded object's border.
     */
    updateEmbeddedObjectBorder?: Schema$UpdateEmbeddedObjectBorderRequest;
    /**
     * Updates an embedded object's (e.g. chart, image) position.
     */
    updateEmbeddedObjectPosition?: Schema$UpdateEmbeddedObjectPositionRequest;
    /**
     * Updates the properties of a filter view.
     */
    updateFilterView?: Schema$UpdateFilterViewRequest;
    /**
     * Updates a named range.
     */
    updateNamedRange?: Schema$UpdateNamedRangeRequest;
    /**
     * Updates a protected range.
     */
    updateProtectedRange?: Schema$UpdateProtectedRangeRequest;
    /**
     * Updates a sheet's properties.
     */
    updateSheetProperties?: Schema$UpdateSheetPropertiesRequest;
    /**
     * Updates a slicer's specifications.
     */
    updateSlicerSpec?: Schema$UpdateSlicerSpecRequest;
    /**
     * Updates the spreadsheet's properties.
     */
    updateSpreadsheetProperties?: Schema$UpdateSpreadsheetPropertiesRequest;
    /**
     * Updates a table.
     */
    updateTable?: Schema$UpdateTableRequest;
  }
  /**
   * A single response from an update.
   */
  export interface Schema$Response {
    /**
     * A reply from adding a banded range.
     */
    addBanding?: Schema$AddBandingResponse;
    /**
     * A reply from adding a chart.
     */
    addChart?: Schema$AddChartResponse;
    /**
     * A reply from adding a data source.
     */
    addDataSource?: Schema$AddDataSourceResponse;
    /**
     * A reply from adding a dimension group.
     */
    addDimensionGroup?: Schema$AddDimensionGroupResponse;
    /**
     * A reply from adding a filter view.
     */
    addFilterView?: Schema$AddFilterViewResponse;
    /**
     * A reply from adding a named range.
     */
    addNamedRange?: Schema$AddNamedRangeResponse;
    /**
     * A reply from adding a protected range.
     */
    addProtectedRange?: Schema$AddProtectedRangeResponse;
    /**
     * A reply from adding a sheet.
     */
    addSheet?: Schema$AddSheetResponse;
    /**
     * A reply from adding a slicer.
     */
    addSlicer?: Schema$AddSlicerResponse;
    /**
     * A reply from adding a table.
     */
    addTable?: Schema$AddTableResponse;
    /**
     * A reply from cancelling data source object refreshes.
     */
    cancelDataSourceRefresh?: Schema$CancelDataSourceRefreshResponse;
    /**
     * A reply from creating a developer metadata entry.
     */
    createDeveloperMetadata?: Schema$CreateDeveloperMetadataResponse;
    /**
     * A reply from deleting a conditional format rule.
     */
    deleteConditionalFormatRule?: Schema$DeleteConditionalFormatRuleResponse;
    /**
     * A reply from deleting a developer metadata entry.
     */
    deleteDeveloperMetadata?: Schema$DeleteDeveloperMetadataResponse;
    /**
     * A reply from deleting a dimension group.
     */
    deleteDimensionGroup?: Schema$DeleteDimensionGroupResponse;
    /**
     * A reply from removing rows containing duplicate values.
     */
    deleteDuplicates?: Schema$DeleteDuplicatesResponse;
    /**
     * A reply from duplicating a filter view.
     */
    duplicateFilterView?: Schema$DuplicateFilterViewResponse;
    /**
     * A reply from duplicating a sheet.
     */
    duplicateSheet?: Schema$DuplicateSheetResponse;
    /**
     * A reply from doing a find/replace.
     */
    findReplace?: Schema$FindReplaceResponse;
    /**
     * A reply from refreshing data source objects.
     */
    refreshDataSource?: Schema$RefreshDataSourceResponse;
    /**
     * A reply from trimming whitespace.
     */
    trimWhitespace?: Schema$TrimWhitespaceResponse;
    /**
     * A reply from updating a conditional format rule.
     */
    updateConditionalFormatRule?: Schema$UpdateConditionalFormatRuleResponse;
    /**
     * A reply from updating a data source.
     */
    updateDataSource?: Schema$UpdateDataSourceResponse;
    /**
     * A reply from updating a developer metadata entry.
     */
    updateDeveloperMetadata?: Schema$UpdateDeveloperMetadataResponse;
    /**
     * A reply from updating an embedded object's position.
     */
    updateEmbeddedObjectPosition?: Schema$UpdateEmbeddedObjectPositionResponse;
  }
  /**
   * Properties of a link to a Google resource (such as a file in Drive, a YouTube video, a Maps address, or a Calendar event). Only Drive files can be written as chips. All other rich link types are read only. URIs cannot exceed 2000 bytes when writing. NOTE: Writing Drive file chips requires at least one of the `drive.file`, `drive.readonly`, or `drive` OAuth scopes.
   */
  export interface Schema$RichLinkProperties {
    /**
     * Output only. The [MIME type](https://developers.google.com/drive/api/v3/mime-types) of the link, if there's one (for example, when it's a file in Drive).
     */
    mimeType?: string | null;
    /**
     * Required. The URI to the link. This is always present.
     */
    uri?: string | null;
  }
  /**
   * Data about each cell in a row.
   */
  export interface Schema$RowData {
    /**
     * The values in the row, one per column.
     */
    values?: Schema$CellData[];
  }
  /**
   * A scorecard chart. Scorecard charts are used to highlight key performance indicators, known as KPIs, on the spreadsheet. A scorecard chart can represent things like total sales, average cost, or a top selling item. You can specify a single data value, or aggregate over a range of data. Percentage or absolute difference from a baseline value can be highlighted, like changes over time.
   */
  export interface Schema$ScorecardChartSpec {
    /**
     * The aggregation type for key and baseline chart data in scorecard chart. This field is not supported for data source charts. Use the ChartData.aggregateType field of the key_value_data or baseline_value_data instead for data source charts. This field is optional.
     */
    aggregateType?: string | null;
    /**
     * The data for scorecard baseline value. This field is optional.
     */
    baselineValueData?: Schema$ChartData;
    /**
     * Formatting options for baseline value. This field is needed only if baseline_value_data is specified.
     */
    baselineValueFormat?: Schema$BaselineValueFormat;
    /**
     * Custom formatting options for numeric key/baseline values in scorecard chart. This field is used only when number_format_source is set to CUSTOM. This field is optional.
     */
    customFormatOptions?: Schema$ChartCustomNumberFormatOptions;
    /**
     * The data for scorecard key value.
     */
    keyValueData?: Schema$ChartData;
    /**
     * Formatting options for key value.
     */
    keyValueFormat?: Schema$KeyValueFormat;
    /**
     * The number format source used in the scorecard chart. This field is optional.
     */
    numberFormatSource?: string | null;
    /**
     * Value to scale scorecard key and baseline value. For example, a factor of 10 can be used to divide all values in the chart by 10. This field is optional.
     */
    scaleFactor?: number | null;
  }
  /**
   * A request to retrieve all developer metadata matching the set of specified criteria.
   */
  export interface Schema$SearchDeveloperMetadataRequest {
    /**
     * The data filters describing the criteria used to determine which DeveloperMetadata entries to return. DeveloperMetadata matching any of the specified filters are included in the response.
     */
    dataFilters?: Schema$DataFilter[];
  }
  /**
   * A reply to a developer metadata search request.
   */
  export interface Schema$SearchDeveloperMetadataResponse {
    /**
     * The metadata matching the criteria of the search request.
     */
    matchedDeveloperMetadata?: Schema$MatchedDeveloperMetadata[];
  }
  /**
   * Sets the basic filter associated with a sheet.
   */
  export interface Schema$SetBasicFilterRequest {
    /**
     * The filter to set.
     */
    filter?: Schema$BasicFilter;
  }
  /**
   * Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule specified.
   */
  export interface Schema$SetDataValidationRequest {
    /**
     * Optional. If true, the data validation rule will be applied to the filtered rows as well.
     */
    filteredRowsIncluded?: boolean | null;
    /**
     * The range the data validation rule should apply to.
     */
    range?: Schema$GridRange;
    /**
     * The data validation rule to set on each cell in the range, or empty to clear the data validation in the range.
     */
    rule?: Schema$DataValidationRule;
  }
  /**
   * A sheet in a spreadsheet.
   */
  export interface Schema$Sheet {
    /**
     * The banded (alternating colors) ranges on this sheet.
     */
    bandedRanges?: Schema$BandedRange[];
    /**
     * The filter on this sheet, if any.
     */
    basicFilter?: Schema$BasicFilter;
    /**
     * The specifications of every chart on this sheet.
     */
    charts?: Schema$EmbeddedChart[];
    /**
     * All column groups on this sheet, ordered by increasing range start index, then by group depth.
     */
    columnGroups?: Schema$DimensionGroup[];
    /**
     * The conditional format rules in this sheet.
     */
    conditionalFormats?: Schema$ConditionalFormatRule[];
    /**
     * Data in the grid, if this is a grid sheet. The number of GridData objects returned is dependent on the number of ranges requested on this sheet. For example, if this is representing `Sheet1`, and the spreadsheet was requested with ranges `Sheet1!A1:C10` and `Sheet1!D15:E20`, then the first GridData will have a startRow/startColumn of `0`, while the second one will have `startRow 14` (zero-based row 15), and `startColumn 3` (zero-based column D). For a DATA_SOURCE sheet, you can not request a specific range, the GridData contains all the values.
     */
    data?: Schema$GridData[];
    /**
     * The developer metadata associated with a sheet.
     */
    developerMetadata?: Schema$DeveloperMetadata[];
    /**
     * The filter views in this sheet.
     */
    filterViews?: Schema$FilterView[];
    /**
     * The ranges that are merged together.
     */
    merges?: Schema$GridRange[];
    /**
     * The properties of the sheet.
     */
    properties?: Schema$SheetProperties;
    /**
     * The protected ranges in this sheet.
     */
    protectedRanges?: Schema$ProtectedRange[];
    /**
     * All row groups on this sheet, ordered by increasing range start index, then by group depth.
     */
    rowGroups?: Schema$DimensionGroup[];
    /**
     * The slicers on this sheet.
     */
    slicers?: Schema$Slicer[];
    /**
     * The tables on this sheet.
     */
    tables?: Schema$Table[];
  }
  /**
   * Properties of a sheet.
   */
  export interface Schema$SheetProperties {
    /**
     * Output only. If present, the field contains DATA_SOURCE sheet specific properties.
     */
    dataSourceSheetProperties?: Schema$DataSourceSheetProperties;
    /**
     * Additional properties of the sheet if this sheet is a grid. (If the sheet is an object sheet, containing a chart or image, then this field will be absent.) When writing it is an error to set any grid properties on non-grid sheets. If this sheet is a DATA_SOURCE sheet, this field is output only but contains the properties that reflect how a data source sheet is rendered in the UI, e.g. row_count.
     */
    gridProperties?: Schema$GridProperties;
    /**
     * True if the sheet is hidden in the UI, false if it's visible.
     */
    hidden?: boolean | null;
    /**
     * The index of the sheet within the spreadsheet. When adding or updating sheet properties, if this field is excluded then the sheet is added or moved to the end of the sheet list. When updating sheet indices or inserting sheets, movement is considered in "before the move" indexes. For example, if there were three sheets (S1, S2, S3) in order to move S1 ahead of S2 the index would have to be set to 2. A sheet index update request is ignored if the requested index is identical to the sheets current index or if the requested new index is equal to the current sheet index + 1.
     */
    index?: number | null;
    /**
     * True if the sheet is an RTL sheet instead of an LTR sheet.
     */
    rightToLeft?: boolean | null;
    /**
     * The ID of the sheet. Must be non-negative. This field cannot be changed once set.
     */
    sheetId?: number | null;
    /**
     * The type of sheet. Defaults to GRID. This field cannot be changed once set.
     */
    sheetType?: string | null;
    /**
     * The color of the tab in the UI. Deprecated: Use tab_color_style.
     */
    tabColor?: Schema$Color;
    /**
     * The color of the tab in the UI. If tab_color is also set, this field takes precedence.
     */
    tabColorStyle?: Schema$ColorStyle;
    /**
     * The name of the sheet.
     */
    title?: string | null;
  }
  /**
   * A slicer in a sheet.
   */
  export interface Schema$Slicer {
    /**
     * The position of the slicer. Note that slicer can be positioned only on existing sheet. Also, width and height of slicer can be automatically adjusted to keep it within permitted limits.
     */
    position?: Schema$EmbeddedObjectPosition;
    /**
     * The ID of the slicer.
     */
    slicerId?: number | null;
    /**
     * The specification of the slicer.
     */
    spec?: Schema$SlicerSpec;
  }
  /**
   * The specifications of a slicer.
   */
  export interface Schema$SlicerSpec {
    /**
     * True if the filter should apply to pivot tables. If not set, default to `True`.
     */
    applyToPivotTables?: boolean | null;
    /**
     * The background color of the slicer. Deprecated: Use background_color_style.
     */
    backgroundColor?: Schema$Color;
    /**
     * The background color of the slicer. If background_color is also set, this field takes precedence.
     */
    backgroundColorStyle?: Schema$ColorStyle;
    /**
     * The zero-based column index in the data table on which the filter is applied to.
     */
    columnIndex?: number | null;
    /**
     * The data range of the slicer.
     */
    dataRange?: Schema$GridRange;
    /**
     * The filtering criteria of the slicer.
     */
    filterCriteria?: Schema$FilterCriteria;
    /**
     * The horizontal alignment of title in the slicer. If unspecified, defaults to `LEFT`
     */
    horizontalAlignment?: string | null;
    /**
     * The text format of title in the slicer. The link field is not supported.
     */
    textFormat?: Schema$TextFormat;
    /**
     * The title of the slicer.
     */
    title?: string | null;
  }
  /**
   * Sorts data in rows based on a sort order per column.
   */
  export interface Schema$SortRangeRequest {
    /**
     * The range to sort.
     */
    range?: Schema$GridRange;
    /**
     * The sort order per column. Later specifications are used when values are equal in the earlier specifications.
     */
    sortSpecs?: Schema$SortSpec[];
  }
  /**
   * A sort order associated with a specific column or row.
   */
  export interface Schema$SortSpec {
    /**
     * The background fill color to sort by; cells with this fill color are sorted to the top. Mutually exclusive with foreground_color. Deprecated: Use background_color_style.
     */
    backgroundColor?: Schema$Color;
    /**
     * The background fill color to sort by; cells with this fill color are sorted to the top. Mutually exclusive with foreground_color, and must be an RGB-type color. If background_color is also set, this field takes precedence.
     */
    backgroundColorStyle?: Schema$ColorStyle;
    /**
     * Reference to a data source column.
     */
    dataSourceColumnReference?: Schema$DataSourceColumnReference;
    /**
     * The dimension the sort should be applied to.
     */
    dimensionIndex?: number | null;
    /**
     * The foreground color to sort by; cells with this foreground color are sorted to the top. Mutually exclusive with background_color. Deprecated: Use foreground_color_style.
     */
    foregroundColor?: Schema$Color;
    /**
     * The foreground color to sort by; cells with this foreground color are sorted to the top. Mutually exclusive with background_color, and must be an RGB-type color. If foreground_color is also set, this field takes precedence.
     */
    foregroundColorStyle?: Schema$ColorStyle;
    /**
     * The order data should be sorted.
     */
    sortOrder?: string | null;
  }
  /**
   * A combination of a source range and how to extend that source.
   */
  export interface Schema$SourceAndDestination {
    /**
     * The dimension that data should be filled into.
     */
    dimension?: string | null;
    /**
     * The number of rows or columns that data should be filled into. Positive numbers expand beyond the last row or last column of the source. Negative numbers expand before the first row or first column of the source.
     */
    fillLength?: number | null;
    /**
     * The location of the data to use as the source of the autofill.
     */
    source?: Schema$GridRange;
  }
  /**
   * Resource that represents a spreadsheet.
   */
  export interface Schema$Spreadsheet {
    /**
     * A list of external data sources connected with the spreadsheet.
     */
    dataSources?: Schema$DataSource[];
    /**
     * Output only. A list of data source refresh schedules.
     */
    dataSourceSchedules?: Schema$DataSourceRefreshSchedule[];
    /**
     * The developer metadata associated with a spreadsheet.
     */
    developerMetadata?: Schema$DeveloperMetadata[];
    /**
     * The named ranges defined in a spreadsheet.
     */
    namedRanges?: Schema$NamedRange[];
    /**
     * Overall properties of a spreadsheet.
     */
    properties?: Schema$SpreadsheetProperties;
    /**
     * The sheets that are part of a spreadsheet.
     */
    sheets?: Schema$Sheet[];
    /**
     * The ID of the spreadsheet. This field is read-only.
     */
    spreadsheetId?: string | null;
    /**
     * The url of the spreadsheet. This field is read-only.
     */
    spreadsheetUrl?: string | null;
  }
  /**
   * Properties of a spreadsheet.
   */
  export interface Schema$SpreadsheetProperties {
    /**
     * The amount of time to wait before volatile functions are recalculated.
     */
    autoRecalc?: string | null;
    /**
     * The default format of all cells in the spreadsheet. CellData.effectiveFormat will not be set if the cell's format is equal to this default format. This field is read-only.
     */
    defaultFormat?: Schema$CellFormat;
    /**
     * Whether to allow external URL access for image and import functions. Read only when true. When false, you can set to true. This value will be bypassed and always return true if the admin has enabled the [allowlisting feature](https://support.google.com/a?p=url_allowlist).
     */
    importFunctionsExternalUrlAccessAllowed?: boolean | null;
    /**
     * Determines whether and how circular references are resolved with iterative calculation. Absence of this field means that circular references result in calculation errors.
     */
    iterativeCalculationSettings?: Schema$IterativeCalculationSettings;
    /**
     * The locale of the spreadsheet in one of the following formats: * an ISO 639-1 language code such as `en` * an ISO 639-2 language code such as `fil`, if no 639-1 code exists * a combination of the ISO language code and country code, such as `en_US` Note: when updating this field, not all locales/languages are supported.
     */
    locale?: string | null;
    /**
     * Theme applied to the spreadsheet.
     */
    spreadsheetTheme?: Schema$SpreadsheetTheme;
    /**
     * The time zone of the spreadsheet, in CLDR format such as `America/New_York`. If the time zone isn't recognized, this may be a custom time zone such as `GMT-07:00`.
     */
    timeZone?: string | null;
    /**
     * The title of the spreadsheet.
     */
    title?: string | null;
  }
  /**
   * Represents spreadsheet theme
   */
  export interface Schema$SpreadsheetTheme {
    /**
     * Name of the primary font family.
     */
    primaryFontFamily?: string | null;
    /**
     * The spreadsheet theme color pairs. To update you must provide all theme color pairs.
     */
    themeColors?: Schema$ThemeColorPair[];
  }
  /**
   * A table.
   */
  export interface Schema$Table {
    /**
     * The table column properties.
     */
    columnProperties?: Schema$TableColumnProperties[];
    /**
     * The table name. This is unique to all tables in the same spreadsheet.
     */
    name?: string | null;
    /**
     * The table range.
     */
    range?: Schema$GridRange;
    /**
     * The table rows properties.
     */
    rowsProperties?: Schema$TableRowsProperties;
    /**
     * The id of the table.
     */
    tableId?: string | null;
  }
  /**
   * A data validation rule for a column in a table.
   */
  export interface Schema$TableColumnDataValidationRule {
    /**
     * The condition that data in the cell must match. Valid only if the [BooleanCondition.type] is ONE_OF_LIST.
     */
    condition?: Schema$BooleanCondition;
  }
  /**
   * The table column.
   */
  export interface Schema$TableColumnProperties {
    /**
     * The 0-based column index. This index is relative to its position in the table and is not necessarily the same as the column index in the sheet.
     */
    columnIndex?: number | null;
    /**
     * The column name.
     */
    columnName?: string | null;
    /**
     * The column type.
     */
    columnType?: string | null;
    /**
     * The column data validation rule. Only set for dropdown column type.
     */
    dataValidationRule?: Schema$TableColumnDataValidationRule;
  }
  /**
   * The table row properties.
   */
  export interface Schema$TableRowsProperties {
    /**
     * The first color that is alternating. If this field is set, the first banded row is filled with the specified color. Otherwise, the first banded row is filled with a default color.
     */
    firstBandColorStyle?: Schema$ColorStyle;
    /**
     * The color of the last row. If this field is not set a footer is not added, the last row is filled with either first_band_color_style or second_band_color_style, depending on the color of the previous row. If updating an existing table without a footer to have a footer, the range will be expanded by 1 row. If updating an existing table with a footer and removing a footer, the range will be shrunk by 1 row.
     */
    footerColorStyle?: Schema$ColorStyle;
    /**
     * The color of the header row. If this field is set, the header row is filled with the specified color. Otherwise, the header row is filled with a default color.
     */
    headerColorStyle?: Schema$ColorStyle;
    /**
     * The second color that is alternating. If this field is set, the second banded row is filled with the specified color. Otherwise, the second banded row is filled with a default color.
     */
    secondBandColorStyle?: Schema$ColorStyle;
  }
  /**
   * The format of a run of text in a cell. Absent values indicate that the field isn't specified.
   */
  export interface Schema$TextFormat {
    /**
     * True if the text is bold.
     */
    bold?: boolean | null;
    /**
     * The font family.
     */
    fontFamily?: string | null;
    /**
     * The size of the font.
     */
    fontSize?: number | null;
    /**
     * The foreground color of the text. Deprecated: Use foreground_color_style.
     */
    foregroundColor?: Schema$Color;
    /**
     * The foreground color of the text. If foreground_color is also set, this field takes precedence.
     */
    foregroundColorStyle?: Schema$ColorStyle;
    /**
     * True if the text is italicized.
     */
    italic?: boolean | null;
    /**
     * The link destination of the text, if any. Setting the link field in a TextFormatRun will clear the cell's existing links or a cell-level link set in the same request. When a link is set, the text foreground color will be set to the default link color and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults.
     */
    link?: Schema$Link;
    /**
     * True if the text has a strikethrough.
     */
    strikethrough?: boolean | null;
    /**
     * True if the text is underlined.
     */
    underline?: boolean | null;
  }
  /**
   * A run of a text format. The format of this run continues until the start index of the next run. When updating, all fields must be set.
   */
  export interface Schema$TextFormatRun {
    /**
     * The format of this run. Absent values inherit the cell's format.
     */
    format?: Schema$TextFormat;
    /**
     * The zero-based character index where this run starts, in UTF-16 code units.
     */
    startIndex?: number | null;
  }
  /**
   * Position settings for text.
   */
  export interface Schema$TextPosition {
    /**
     * Horizontal alignment setting for the piece of text.
     */
    horizontalAlignment?: string | null;
  }
  /**
   * The rotation applied to text in a cell.
   */
  export interface Schema$TextRotation {
    /**
     * The angle between the standard orientation and the desired orientation. Measured in degrees. Valid values are between -90 and 90. Positive angles are angled upwards, negative are angled downwards. Note: For LTR text direction positive angles are in the counterclockwise direction, whereas for RTL they are in the clockwise direction
     */
    angle?: number | null;
    /**
     * If true, text reads top to bottom, but the orientation of individual characters is unchanged. For example: | V | | e | | r | | t | | i | | c | | a | | l |
     */
    vertical?: boolean | null;
  }
  /**
   * Splits a column of text into multiple columns, based on a delimiter in each cell.
   */
  export interface Schema$TextToColumnsRequest {
    /**
     * The delimiter to use. Used only if delimiterType is CUSTOM.
     */
    delimiter?: string | null;
    /**
     * The delimiter type to use.
     */
    delimiterType?: string | null;
    /**
     * The source data range. This must span exactly one column.
     */
    source?: Schema$GridRange;
  }
  /**
   * A pair mapping a spreadsheet theme color type to the concrete color it represents.
   */
  export interface Schema$ThemeColorPair {
    /**
     * The concrete color corresponding to the theme color type.
     */
    color?: Schema$ColorStyle;
    /**
     * The type of the spreadsheet theme color.
     */
    colorType?: string | null;
  }
  /**
   * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    hours?: number | null;
    /**
     * Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.
     */
    minutes?: number | null;
    /**
     * Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.
     */
    nanos?: number | null;
    /**
     * Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    seconds?: number | null;
  }
  /**
   * A color scale for a treemap chart.
   */
  export interface Schema$TreemapChartColorScale {
    /**
     * The background color for cells with a color value greater than or equal to maxValue. Defaults to #109618 if not specified. Deprecated: Use max_value_color_style.
     */
    maxValueColor?: Schema$Color;
    /**
     * The background color for cells with a color value greater than or equal to maxValue. Defaults to #109618 if not specified. If max_value_color is also set, this field takes precedence.
     */
    maxValueColorStyle?: Schema$ColorStyle;
    /**
     * The background color for cells with a color value at the midpoint between minValue and maxValue. Defaults to #efe6dc if not specified. Deprecated: Use mid_value_color_style.
     */
    midValueColor?: Schema$Color;
    /**
     * The background color for cells with a color value at the midpoint between minValue and maxValue. Defaults to #efe6dc if not specified. If mid_value_color is also set, this field takes precedence.
     */
    midValueColorStyle?: Schema$ColorStyle;
    /**
     * The background color for cells with a color value less than or equal to minValue. Defaults to #dc3912 if not specified. Deprecated: Use min_value_color_style.
     */
    minValueColor?: Schema$Color;
    /**
     * The background color for cells with a color value less than or equal to minValue. Defaults to #dc3912 if not specified. If min_value_color is also set, this field takes precedence.
     */
    minValueColorStyle?: Schema$ColorStyle;
    /**
     * The background color for cells that have no color data associated with them. Defaults to #000000 if not specified. Deprecated: Use no_data_color_style.
     */
    noDataColor?: Schema$Color;
    /**
     * The background color for cells that have no color data associated with them. Defaults to #000000 if not specified. If no_data_color is also set, this field takes precedence.
     */
    noDataColorStyle?: Schema$ColorStyle;
  }
  /**
   * A Treemap chart.
   */
  export interface Schema$TreemapChartSpec {
    /**
     * The data that determines the background color of each treemap data cell. This field is optional. If not specified, size_data is used to determine background colors. If specified, the data is expected to be numeric. color_scale will determine how the values in this data map to data cell background colors.
     */
    colorData?: Schema$ChartData;
    /**
     * The color scale for data cells in the treemap chart. Data cells are assigned colors based on their color values. These color values come from color_data, or from size_data if color_data is not specified. Cells with color values less than or equal to min_value will have minValueColor as their background color. Cells with color values greater than or equal to max_value will have maxValueColor as their background color. Cells with color values between min_value and max_value will have background colors on a gradient between minValueColor and maxValueColor, the midpoint of the gradient being midValueColor. Cells with missing or non-numeric color values will have noDataColor as their background color.
     */
    colorScale?: Schema$TreemapChartColorScale;
    /**
     * The background color for header cells. Deprecated: Use header_color_style.
     */
    headerColor?: Schema$Color;
    /**
     * The background color for header cells. If header_color is also set, this field takes precedence.
     */
    headerColorStyle?: Schema$ColorStyle;
    /**
     * True to hide tooltips.
     */
    hideTooltips?: boolean | null;
    /**
     * The number of additional data levels beyond the labeled levels to be shown on the treemap chart. These levels are not interactive and are shown without their labels. Defaults to 0 if not specified.
     */
    hintedLevels?: number | null;
    /**
     * The data that contains the treemap cell labels.
     */
    labels?: Schema$ChartData;
    /**
     * The number of data levels to show on the treemap chart. These levels are interactive and are shown with their labels. Defaults to 2 if not specified.
     */
    levels?: number | null;
    /**
     * The maximum possible data value. Cells with values greater than this will have the same color as cells with this value. If not specified, defaults to the actual maximum value from color_data, or the maximum value from size_data if color_data is not specified.
     */
    maxValue?: number | null;
    /**
     * The minimum possible data value. Cells with values less than this will have the same color as cells with this value. If not specified, defaults to the actual minimum value from color_data, or the minimum value from size_data if color_data is not specified.
     */
    minValue?: number | null;
    /**
     * The data the contains the treemap cells' parent labels.
     */
    parentLabels?: Schema$ChartData;
    /**
     * The data that determines the size of each treemap data cell. This data is expected to be numeric. The cells corresponding to non-numeric or missing data will not be rendered. If color_data is not specified, this data is used to determine data cell background colors as well.
     */
    sizeData?: Schema$ChartData;
    /**
     * The text format for all labels on the chart. The link field is not supported.
     */
    textFormat?: Schema$TextFormat;
  }
  /**
   * Trims the whitespace (such as spaces, tabs, or new lines) in every cell in the specified range. This request removes all whitespace from the start and end of each cell's text, and reduces any subsequence of remaining whitespace characters to a single space. If the resulting trimmed text starts with a '+' or '=' character, the text remains as a string value and isn't interpreted as a formula.
   */
  export interface Schema$TrimWhitespaceRequest {
    /**
     * The range whose cells to trim.
     */
    range?: Schema$GridRange;
  }
  /**
   * The result of trimming whitespace in cells.
   */
  export interface Schema$TrimWhitespaceResponse {
    /**
     * The number of cells that were trimmed of whitespace.
     */
    cellsChangedCount?: number | null;
  }
  /**
   * Unmerges cells in the given range.
   */
  export interface Schema$UnmergeCellsRequest {
    /**
     * The range within which all cells should be unmerged. If the range spans multiple merges, all will be unmerged. The range must not partially span any merge.
     */
    range?: Schema$GridRange;
  }
  /**
   * Updates properties of the supplied banded range.
   */
  export interface Schema$UpdateBandingRequest {
    /**
     * The banded range to update with the new properties.
     */
    bandedRange?: Schema$BandedRange;
    /**
     * The fields that should be updated. At least one field must be specified. The root `bandedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
  }
  /**
   * Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE \}` 2. range: A1:A5 `{ left: BLUE \}` That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE \}`. If you want to clear a border, explicitly set the style to NONE.
   */
  export interface Schema$UpdateBordersRequest {
    /**
     * The border to put at the bottom of the range.
     */
    bottom?: Schema$Border;
    /**
     * The horizontal border to put within the range.
     */
    innerHorizontal?: Schema$Border;
    /**
     * The vertical border to put within the range.
     */
    innerVertical?: Schema$Border;
    /**
     * The border to put at the left of the range.
     */
    left?: Schema$Border;
    /**
     * The range whose borders should be updated.
     */
    range?: Schema$GridRange;
    /**
     * The border to put at the right of the range.
     */
    right?: Schema$Border;
    /**
     * The border to put at the top of the range.
     */
    top?: Schema$Border;
  }
  /**
   * Updates all cells in a range with new data.
   */
  export interface Schema$UpdateCellsRequest {
    /**
     * The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
    /**
     * The range to write data to. If the data in rows does not cover the entire requested range, the fields matching those set in fields will be cleared.
     */
    range?: Schema$GridRange;
    /**
     * The data to write.
     */
    rows?: Schema$RowData[];
    /**
     * The coordinate to start writing data at. Any number of rows and columns (including a different number of columns per row) may be written.
     */
    start?: Schema$GridCoordinate;
  }
  /**
   * Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use UpdateEmbeddedObjectPositionRequest.)
   */
  export interface Schema$UpdateChartSpecRequest {
    /**
     * The ID of the chart to update.
     */
    chartId?: number | null;
    /**
     * The specification to apply to the chart.
     */
    spec?: Schema$ChartSpec;
  }
  /**
   * Updates a conditional format rule at the given index, or moves a conditional format rule to another index.
   */
  export interface Schema$UpdateConditionalFormatRuleRequest {
    /**
     * The zero-based index of the rule that should be replaced or moved.
     */
    index?: number | null;
    /**
     * The zero-based new index the rule should end up at.
     */
    newIndex?: number | null;
    /**
     * The rule that should replace the rule at the given index.
     */
    rule?: Schema$ConditionalFormatRule;
    /**
     * The sheet of the rule to move. Required if new_index is set, unused otherwise.
     */
    sheetId?: number | null;
  }
  /**
   * The result of updating a conditional format rule.
   */
  export interface Schema$UpdateConditionalFormatRuleResponse {
    /**
     * The index of the new rule.
     */
    newIndex?: number | null;
    /**
     * The new rule that replaced the old rule (if replacing), or the rule that was moved (if moved)
     */
    newRule?: Schema$ConditionalFormatRule;
    /**
     * The old index of the rule. Not set if a rule was replaced (because it is the same as new_index).
     */
    oldIndex?: number | null;
    /**
     * The old (deleted) rule. Not set if a rule was moved (because it is the same as new_rule).
     */
    oldRule?: Schema$ConditionalFormatRule;
  }
  /**
   * Updates a data source. After the data source is updated successfully, an execution is triggered to refresh the associated DATA_SOURCE sheet to read data from the updated data source. The request requires an additional `bigquery.readonly` OAuth scope if you are updating a BigQuery data source.
   */
  export interface Schema$UpdateDataSourceRequest {
    /**
     * The data source to update.
     */
    dataSource?: Schema$DataSource;
    /**
     * The fields that should be updated. At least one field must be specified. The root `dataSource` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
  }
  /**
   * The response from updating data source.
   */
  export interface Schema$UpdateDataSourceResponse {
    /**
     * The data execution status.
     */
    dataExecutionStatus?: Schema$DataExecutionStatus;
    /**
     * The updated data source.
     */
    dataSource?: Schema$DataSource;
  }
  /**
   * A request to update properties of developer metadata. Updates the properties of the developer metadata selected by the filters to the values provided in the DeveloperMetadata resource. Callers must specify the properties they wish to update in the fields parameter, as well as specify at least one DataFilter matching the metadata they wish to update.
   */
  export interface Schema$UpdateDeveloperMetadataRequest {
    /**
     * The filters matching the developer metadata entries to update.
     */
    dataFilters?: Schema$DataFilter[];
    /**
     * The value that all metadata matched by the data filters will be updated to.
     */
    developerMetadata?: Schema$DeveloperMetadata;
    /**
     * The fields that should be updated. At least one field must be specified. The root `developerMetadata` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
  }
  /**
   * The response from updating developer metadata.
   */
  export interface Schema$UpdateDeveloperMetadataResponse {
    /**
     * The updated developer metadata.
     */
    developerMetadata?: Schema$DeveloperMetadata[];
  }
  /**
   * Updates the state of the specified group.
   */
  export interface Schema$UpdateDimensionGroupRequest {
    /**
     * The group whose state should be updated. The range and depth of the group should specify a valid group on the sheet, and all other fields updated.
     */
    dimensionGroup?: Schema$DimensionGroup;
    /**
     * The fields that should be updated. At least one field must be specified. The root `dimensionGroup` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
  }
  /**
   * Updates properties of dimensions within the specified range.
   */
  export interface Schema$UpdateDimensionPropertiesRequest {
    /**
     * The columns on a data source sheet to update.
     */
    dataSourceSheetRange?: Schema$DataSourceSheetDimensionRange;
    /**
     * The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
    /**
     * Properties to update.
     */
    properties?: Schema$DimensionProperties;
    /**
     * The rows or columns to update.
     */
    range?: Schema$DimensionRange;
  }
  /**
   * Updates an embedded object's border property.
   */
  export interface Schema$UpdateEmbeddedObjectBorderRequest {
    /**
     * The border that applies to the embedded object.
     */
    border?: Schema$EmbeddedObjectBorder;
    /**
     * The fields that should be updated. At least one field must be specified. The root `border` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
    /**
     * The ID of the embedded object to update.
     */
    objectId?: number | null;
  }
  /**
   * Update an embedded object's position (such as a moving or resizing a chart or image).
   */
  export interface Schema$UpdateEmbeddedObjectPositionRequest {
    /**
     * The fields of OverlayPosition that should be updated when setting a new position. Used only if newPosition.overlayPosition is set, in which case at least one field must be specified. The root `newPosition.overlayPosition` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
    /**
     * An explicit position to move the embedded object to. If newPosition.sheetId is set, a new sheet with that ID will be created. If newPosition.newSheet is set to true, a new sheet will be created with an ID that will be chosen for you.
     */
    newPosition?: Schema$EmbeddedObjectPosition;
    /**
     * The ID of the object to moved.
     */
    objectId?: number | null;
  }
  /**
   * The result of updating an embedded object's position.
   */
  export interface Schema$UpdateEmbeddedObjectPositionResponse {
    /**
     * The new position of the embedded object.
     */
    position?: Schema$EmbeddedObjectPosition;
  }
  /**
   * Updates properties of the filter view.
   */
  export interface Schema$UpdateFilterViewRequest {
    /**
     * The fields that should be updated. At least one field must be specified. The root `filter` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
    /**
     * The new properties of the filter view.
     */
    filter?: Schema$FilterView;
  }
  /**
   * Updates properties of the named range with the specified namedRangeId.
   */
  export interface Schema$UpdateNamedRangeRequest {
    /**
     * The fields that should be updated. At least one field must be specified. The root `namedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
    /**
     * The named range to update with the new properties.
     */
    namedRange?: Schema$NamedRange;
  }
  /**
   * Updates an existing protected range with the specified protectedRangeId.
   */
  export interface Schema$UpdateProtectedRangeRequest {
    /**
     * The fields that should be updated. At least one field must be specified. The root `protectedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
    /**
     * The protected range to update with the new properties.
     */
    protectedRange?: Schema$ProtectedRange;
  }
  /**
   * Updates properties of the sheet with the specified sheetId.
   */
  export interface Schema$UpdateSheetPropertiesRequest {
    /**
     * The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
    /**
     * The properties to update.
     */
    properties?: Schema$SheetProperties;
  }
  /**
   * Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use UpdateEmbeddedObjectPositionRequest.
   */
  export interface Schema$UpdateSlicerSpecRequest {
    /**
     * The fields that should be updated. At least one field must be specified. The root `SlicerSpec` is implied and should not be specified. A single "*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
    /**
     * The id of the slicer to update.
     */
    slicerId?: number | null;
    /**
     * The specification to apply to the slicer.
     */
    spec?: Schema$SlicerSpec;
  }
  /**
   * Updates properties of a spreadsheet.
   */
  export interface Schema$UpdateSpreadsheetPropertiesRequest {
    /**
     * The fields that should be updated. At least one field must be specified. The root 'properties' is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
    /**
     * The properties to update.
     */
    properties?: Schema$SpreadsheetProperties;
  }
  /**
   * Updates a table in the spreadsheet.
   */
  export interface Schema$UpdateTableRequest {
    /**
     * Required. The fields that should be updated. At least one field must be specified. The root `table` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
     */
    fields?: string | null;
    /**
     * Required. The table to update.
     */
    table?: Schema$Table;
  }
  /**
   * The response when updating a range of values by a data filter in a spreadsheet.
   */
  export interface Schema$UpdateValuesByDataFilterResponse {
    /**
     * The data filter that selected the range that was updated.
     */
    dataFilter?: Schema$DataFilter;
    /**
     * The number of cells updated.
     */
    updatedCells?: number | null;
    /**
     * The number of columns where at least one cell in the column was updated.
     */
    updatedColumns?: number | null;
    /**
     * The values of the cells in the range matched by the dataFilter after all updates were applied. This is only included if the request's `includeValuesInResponse` field was `true`.
     */
    updatedData?: Schema$ValueRange;
    /**
     * The range (in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell)) that updates were applied to.
     */
    updatedRange?: string | null;
    /**
     * The number of rows where at least one cell in the row was updated.
     */
    updatedRows?: number | null;
  }
  /**
   * The response when updating a range of values in a spreadsheet.
   */
  export interface Schema$UpdateValuesResponse {
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string | null;
    /**
     * The number of cells updated.
     */
    updatedCells?: number | null;
    /**
     * The number of columns where at least one cell in the column was updated.
     */
    updatedColumns?: number | null;
    /**
     * The values of the cells after updates were applied. This is only included if the request's `includeValuesInResponse` field was `true`.
     */
    updatedData?: Schema$ValueRange;
    /**
     * The range (in A1 notation) that updates were applied to.
     */
    updatedRange?: string | null;
    /**
     * The number of rows where at least one cell in the row was updated.
     */
    updatedRows?: number | null;
  }
  /**
   * Data within a range of the spreadsheet.
   */
  export interface Schema$ValueRange {
    /**
     * The major dimension of the values. For output, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return `[[1,3],[2,4]]`. For input, with `range=A1:B2,majorDimension=ROWS` then `[[1,2],[3,4]]` will set `A1=1,B1=2,A2=3,B2=4`. With `range=A1:B2,majorDimension=COLUMNS` then `[[1,2],[3,4]]` will set `A1=1,B1=3,A2=2,B2=4`. When writing, if this field is not set, it defaults to ROWS.
     */
    majorDimension?: string | null;
    /**
     * The range the values cover, in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). For output, this range indicates the entire requested range, even though the values will exclude trailing rows and columns. When appending values, this field represents the range to search for a table, after which values will be appended.
     */
    range?: string | null;
    /**
     * The data that was read or to be written. This is an array of arrays, the outer array representing all the data and each inner array representing a major dimension. Each item in the inner array corresponds with one cell. For output, empty trailing rows and columns will not be included. For input, supported value types are: bool, string, and double. Null values will be skipped. To set a cell to an empty value, set the string value to an empty string.
     */
    values?: any[][] | null;
  }
  /**
   * Styles for a waterfall chart column.
   */
  export interface Schema$WaterfallChartColumnStyle {
    /**
     * The color of the column. Deprecated: Use color_style.
     */
    color?: Schema$Color;
    /**
     * The color of the column. If color is also set, this field takes precedence.
     */
    colorStyle?: Schema$ColorStyle;
    /**
     * The label of the column's legend.
     */
    label?: string | null;
  }
  /**
   * A custom subtotal column for a waterfall chart series.
   */
  export interface Schema$WaterfallChartCustomSubtotal {
    /**
     * True if the data point at subtotal_index is the subtotal. If false, the subtotal will be computed and appear after the data point.
     */
    dataIsSubtotal?: boolean | null;
    /**
     * A label for the subtotal column.
     */
    label?: string | null;
    /**
     * The zero-based index of a data point within the series. If data_is_subtotal is true, the data point at this index is the subtotal. Otherwise, the subtotal appears after the data point with this index. A series can have multiple subtotals at arbitrary indices, but subtotals do not affect the indices of the data points. For example, if a series has three data points, their indices will always be 0, 1, and 2, regardless of how many subtotals exist on the series or what data points they are associated with.
     */
    subtotalIndex?: number | null;
  }
  /**
   * The domain of a waterfall chart.
   */
  export interface Schema$WaterfallChartDomain {
    /**
     * The data of the WaterfallChartDomain.
     */
    data?: Schema$ChartData;
    /**
     * True to reverse the order of the domain values (horizontal axis).
     */
    reversed?: boolean | null;
  }
  /**
   * A single series of data for a waterfall chart.
   */
  export interface Schema$WaterfallChartSeries {
    /**
     * Custom subtotal columns appearing in this series. The order in which subtotals are defined is not significant. Only one subtotal may be defined for each data point.
     */
    customSubtotals?: Schema$WaterfallChartCustomSubtotal[];
    /**
     * The data being visualized in this series.
     */
    data?: Schema$ChartData;
    /**
     * Information about the data labels for this series.
     */
    dataLabel?: Schema$DataLabel;
    /**
     * True to hide the subtotal column from the end of the series. By default, a subtotal column will appear at the end of each series. Setting this field to true will hide that subtotal column for this series.
     */
    hideTrailingSubtotal?: boolean | null;
    /**
     * Styles for all columns in this series with negative values.
     */
    negativeColumnsStyle?: Schema$WaterfallChartColumnStyle;
    /**
     * Styles for all columns in this series with positive values.
     */
    positiveColumnsStyle?: Schema$WaterfallChartColumnStyle;
    /**
     * Styles for all subtotal columns in this series.
     */
    subtotalColumnsStyle?: Schema$WaterfallChartColumnStyle;
  }
  /**
   * A waterfall chart.
   */
  export interface Schema$WaterfallChartSpec {
    /**
     * The line style for the connector lines.
     */
    connectorLineStyle?: Schema$LineStyle;
    /**
     * The domain data (horizontal axis) for the waterfall chart.
     */
    domain?: Schema$WaterfallChartDomain;
    /**
     * True to interpret the first value as a total.
     */
    firstValueIsTotal?: boolean | null;
    /**
     * True to hide connector lines between columns.
     */
    hideConnectorLines?: boolean | null;
    /**
     * The data this waterfall chart is visualizing.
     */
    series?: Schema$WaterfallChartSeries[];
    /**
     * The stacked type.
     */
    stackedType?: string | null;
    /**
     * Controls whether to display additional data labels on stacked charts which sum the total value of all stacked values at each value along the domain axis. stacked_type must be STACKED and neither CUSTOM nor placement can be set on the total_data_label.
     */
    totalDataLabel?: Schema$DataLabel;
  }

  export class Resource$Spreadsheets {
    context: APIRequestContext;
    developerMetadata: Resource$Spreadsheets$Developermetadata;
    sheets: Resource$Spreadsheets$Sheets;
    values: Resource$Spreadsheets$Values;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.developerMetadata = new Resource$Spreadsheets$Developermetadata(
        this.context
      );
      this.sheets = new Resource$Spreadsheets$Sheets(this.context);
      this.values = new Resource$Spreadsheets$Values(this.context);
    }

    /**
     * Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.batchUpdate({
     *     // The spreadsheet to apply the updates to.
     *     spreadsheetId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "includeSpreadsheetInResponse": false,
     *       //   "requests": [],
     *       //   "responseIncludeGridData": false,
     *       //   "responseRanges": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "replies": [],
     *   //   "spreadsheetId": "my_spreadsheetId",
     *   //   "updatedSpreadsheet": {}
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
    batchUpdate(
      params: Params$Resource$Spreadsheets$Batchupdate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchUpdate(
      params?: Params$Resource$Spreadsheets$Batchupdate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchUpdateSpreadsheetResponse>>;
    batchUpdate(
      params: Params$Resource$Spreadsheets$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Spreadsheets$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchUpdateSpreadsheetResponse>,
      callback: BodyResponseCallback<Schema$BatchUpdateSpreadsheetResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Spreadsheets$Batchupdate,
      callback: BodyResponseCallback<Schema$BatchUpdateSpreadsheetResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$BatchUpdateSpreadsheetResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Batchupdate
        | BodyResponseCallback<Schema$BatchUpdateSpreadsheetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchUpdateSpreadsheetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchUpdateSpreadsheetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchUpdateSpreadsheetResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheets$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spreadsheets$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v4/spreadsheets/{spreadsheetId}:batchUpdate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchUpdateSpreadsheetResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchUpdateSpreadsheetResponse>(
          parameters
        );
      }
    }

    /**
     * Creates a spreadsheet, returning the newly created spreadsheet.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.create({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataSourceSchedules": [],
     *       //   "dataSources": [],
     *       //   "developerMetadata": [],
     *       //   "namedRanges": [],
     *       //   "properties": {},
     *       //   "sheets": [],
     *       //   "spreadsheetId": "my_spreadsheetId",
     *       //   "spreadsheetUrl": "my_spreadsheetUrl"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSourceSchedules": [],
     *   //   "dataSources": [],
     *   //   "developerMetadata": [],
     *   //   "namedRanges": [],
     *   //   "properties": {},
     *   //   "sheets": [],
     *   //   "spreadsheetId": "my_spreadsheetId",
     *   //   "spreadsheetUrl": "my_spreadsheetUrl"
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
      params: Params$Resource$Spreadsheets$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Spreadsheets$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Spreadsheet>>;
    create(
      params: Params$Resource$Spreadsheets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Spreadsheets$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Spreadsheet>,
      callback: BodyResponseCallback<Schema$Spreadsheet>
    ): void;
    create(
      params: Params$Resource$Spreadsheets$Create,
      callback: BodyResponseCallback<Schema$Spreadsheet>
    ): void;
    create(callback: BodyResponseCallback<Schema$Spreadsheet>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Create
        | BodyResponseCallback<Schema$Spreadsheet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Spreadsheet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Spreadsheet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Spreadsheet>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spreadsheets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/spreadsheets').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Spreadsheet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Spreadsheet>(parameters);
      }
    }

    /**
     * Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids is not returned. You can include grid data in one of 2 ways: * Specify a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *       'https://www.googleapis.com/auth/spreadsheets.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.get({
     *     // True if tables should be excluded in the banded ranges. False if not set.
     *     excludeTablesInBandedRanges: 'placeholder-value',
     *     // True if grid data should be returned. This parameter is ignored if a field mask was set in the request.
     *     includeGridData: 'placeholder-value',
     *     // The ranges to retrieve from the spreadsheet.
     *     ranges: 'placeholder-value',
     *     // The spreadsheet to request.
     *     spreadsheetId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSourceSchedules": [],
     *   //   "dataSources": [],
     *   //   "developerMetadata": [],
     *   //   "namedRanges": [],
     *   //   "properties": {},
     *   //   "sheets": [],
     *   //   "spreadsheetId": "my_spreadsheetId",
     *   //   "spreadsheetUrl": "my_spreadsheetUrl"
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
      params: Params$Resource$Spreadsheets$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Spreadsheets$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Spreadsheet>>;
    get(
      params: Params$Resource$Spreadsheets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Spreadsheets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Spreadsheet>,
      callback: BodyResponseCallback<Schema$Spreadsheet>
    ): void;
    get(
      params: Params$Resource$Spreadsheets$Get,
      callback: BodyResponseCallback<Schema$Spreadsheet>
    ): void;
    get(callback: BodyResponseCallback<Schema$Spreadsheet>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Get
        | BodyResponseCallback<Schema$Spreadsheet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Spreadsheet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Spreadsheet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Spreadsheet>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Spreadsheets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spreadsheets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v4/spreadsheets/{spreadsheetId}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Spreadsheet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Spreadsheet>(parameters);
      }
    }

    /**
     * Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids is not returned. You can include grid data one of 2 ways: * Specify a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.getByDataFilter({
     *     // The spreadsheet to request.
     *     spreadsheetId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataFilters": [],
     *       //   "excludeTablesInBandedRanges": false,
     *       //   "includeGridData": false
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSourceSchedules": [],
     *   //   "dataSources": [],
     *   //   "developerMetadata": [],
     *   //   "namedRanges": [],
     *   //   "properties": {},
     *   //   "sheets": [],
     *   //   "spreadsheetId": "my_spreadsheetId",
     *   //   "spreadsheetUrl": "my_spreadsheetUrl"
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
    getByDataFilter(
      params: Params$Resource$Spreadsheets$Getbydatafilter,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getByDataFilter(
      params?: Params$Resource$Spreadsheets$Getbydatafilter,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Spreadsheet>>;
    getByDataFilter(
      params: Params$Resource$Spreadsheets$Getbydatafilter,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getByDataFilter(
      params: Params$Resource$Spreadsheets$Getbydatafilter,
      options: MethodOptions | BodyResponseCallback<Schema$Spreadsheet>,
      callback: BodyResponseCallback<Schema$Spreadsheet>
    ): void;
    getByDataFilter(
      params: Params$Resource$Spreadsheets$Getbydatafilter,
      callback: BodyResponseCallback<Schema$Spreadsheet>
    ): void;
    getByDataFilter(callback: BodyResponseCallback<Schema$Spreadsheet>): void;
    getByDataFilter(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Getbydatafilter
        | BodyResponseCallback<Schema$Spreadsheet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Spreadsheet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Spreadsheet>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Spreadsheet>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheets$Getbydatafilter;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spreadsheets$Getbydatafilter;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v4/spreadsheets/{spreadsheetId}:getByDataFilter'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Spreadsheet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Spreadsheet>(parameters);
      }
    }
  }

  export interface Params$Resource$Spreadsheets$Batchupdate
    extends StandardParameters {
    /**
     * The spreadsheet to apply the updates to.
     */
    spreadsheetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdateSpreadsheetRequest;
  }
  export interface Params$Resource$Spreadsheets$Create
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$Spreadsheet;
  }
  export interface Params$Resource$Spreadsheets$Get extends StandardParameters {
    /**
     * True if tables should be excluded in the banded ranges. False if not set.
     */
    excludeTablesInBandedRanges?: boolean;
    /**
     * True if grid data should be returned. This parameter is ignored if a field mask was set in the request.
     */
    includeGridData?: boolean;
    /**
     * The ranges to retrieve from the spreadsheet.
     */
    ranges?: string[];
    /**
     * The spreadsheet to request.
     */
    spreadsheetId?: string;
  }
  export interface Params$Resource$Spreadsheets$Getbydatafilter
    extends StandardParameters {
    /**
     * The spreadsheet to request.
     */
    spreadsheetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GetSpreadsheetByDataFilterRequest;
  }

  export class Resource$Spreadsheets$Developermetadata {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.developerMetadata.get({
     *     // The ID of the developer metadata to retrieve.
     *     metadataId: 'placeholder-value',
     *     // The ID of the spreadsheet to retrieve metadata from.
     *     spreadsheetId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "location": {},
     *   //   "metadataId": 0,
     *   //   "metadataKey": "my_metadataKey",
     *   //   "metadataValue": "my_metadataValue",
     *   //   "visibility": "my_visibility"
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
      params: Params$Resource$Spreadsheets$Developermetadata$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Spreadsheets$Developermetadata$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$DeveloperMetadata>>;
    get(
      params: Params$Resource$Spreadsheets$Developermetadata$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Spreadsheets$Developermetadata$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DeveloperMetadata>,
      callback: BodyResponseCallback<Schema$DeveloperMetadata>
    ): void;
    get(
      params: Params$Resource$Spreadsheets$Developermetadata$Get,
      callback: BodyResponseCallback<Schema$DeveloperMetadata>
    ): void;
    get(callback: BodyResponseCallback<Schema$DeveloperMetadata>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Developermetadata$Get
        | BodyResponseCallback<Schema$DeveloperMetadata>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DeveloperMetadata>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DeveloperMetadata>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$DeveloperMetadata>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheets$Developermetadata$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spreadsheets$Developermetadata$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['spreadsheetId', 'metadataId'],
        pathParams: ['metadataId', 'spreadsheetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DeveloperMetadata>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DeveloperMetadata>(parameters);
      }
    }

    /**
     * Returns all developer metadata matching the specified DataFilter. If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.developerMetadata.search({
     *     // The ID of the spreadsheet to retrieve metadata from.
     *     spreadsheetId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataFilters": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "matchedDeveloperMetadata": []
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
      params: Params$Resource$Spreadsheets$Developermetadata$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Spreadsheets$Developermetadata$Search,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SearchDeveloperMetadataResponse>>;
    search(
      params: Params$Resource$Spreadsheets$Developermetadata$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Spreadsheets$Developermetadata$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchDeveloperMetadataResponse>,
      callback: BodyResponseCallback<Schema$SearchDeveloperMetadataResponse>
    ): void;
    search(
      params: Params$Resource$Spreadsheets$Developermetadata$Search,
      callback: BodyResponseCallback<Schema$SearchDeveloperMetadataResponse>
    ): void;
    search(
      callback: BodyResponseCallback<Schema$SearchDeveloperMetadataResponse>
    ): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Developermetadata$Search
        | BodyResponseCallback<Schema$SearchDeveloperMetadataResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchDeveloperMetadataResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchDeveloperMetadataResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SearchDeveloperMetadataResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheets$Developermetadata$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spreadsheets$Developermetadata$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v4/spreadsheets/{spreadsheetId}/developerMetadata:search'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SearchDeveloperMetadataResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchDeveloperMetadataResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Spreadsheets$Developermetadata$Get
    extends StandardParameters {
    /**
     * The ID of the developer metadata to retrieve.
     */
    metadataId?: number;
    /**
     * The ID of the spreadsheet to retrieve metadata from.
     */
    spreadsheetId?: string;
  }
  export interface Params$Resource$Spreadsheets$Developermetadata$Search
    extends StandardParameters {
    /**
     * The ID of the spreadsheet to retrieve metadata from.
     */
    spreadsheetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchDeveloperMetadataRequest;
  }

  export class Resource$Spreadsheets$Sheets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.sheets.copyTo({
     *     // The ID of the sheet to copy.
     *     sheetId: 'placeholder-value',
     *     // The ID of the spreadsheet containing the sheet to copy.
     *     spreadsheetId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "destinationSpreadsheetId": "my_destinationSpreadsheetId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "dataSourceSheetProperties": {},
     *   //   "gridProperties": {},
     *   //   "hidden": false,
     *   //   "index": 0,
     *   //   "rightToLeft": false,
     *   //   "sheetId": 0,
     *   //   "sheetType": "my_sheetType",
     *   //   "tabColor": {},
     *   //   "tabColorStyle": {},
     *   //   "title": "my_title"
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
    copyTo(
      params: Params$Resource$Spreadsheets$Sheets$Copyto,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    copyTo(
      params?: Params$Resource$Spreadsheets$Sheets$Copyto,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SheetProperties>>;
    copyTo(
      params: Params$Resource$Spreadsheets$Sheets$Copyto,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    copyTo(
      params: Params$Resource$Spreadsheets$Sheets$Copyto,
      options: MethodOptions | BodyResponseCallback<Schema$SheetProperties>,
      callback: BodyResponseCallback<Schema$SheetProperties>
    ): void;
    copyTo(
      params: Params$Resource$Spreadsheets$Sheets$Copyto,
      callback: BodyResponseCallback<Schema$SheetProperties>
    ): void;
    copyTo(callback: BodyResponseCallback<Schema$SheetProperties>): void;
    copyTo(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Sheets$Copyto
        | BodyResponseCallback<Schema$SheetProperties>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SheetProperties>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SheetProperties>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SheetProperties>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheets$Sheets$Copyto;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spreadsheets$Sheets$Copyto;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['spreadsheetId', 'sheetId'],
        pathParams: ['sheetId', 'spreadsheetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SheetProperties>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SheetProperties>(parameters);
      }
    }
  }

  export interface Params$Resource$Spreadsheets$Sheets$Copyto
    extends StandardParameters {
    /**
     * The ID of the sheet to copy.
     */
    sheetId?: number;
    /**
     * The ID of the spreadsheet containing the sheet to copy.
     */
    spreadsheetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CopySheetToAnotherSpreadsheetRequest;
  }

  export class Resource$Spreadsheets$Values {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](https://developers.google.com/workspace/sheets/api/guides/values#appending_values) and [sample code](https://developers.google.com/workspace/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.values.append({
     *     // Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values.
     *     includeValuesInResponse: 'placeholder-value',
     *     // How the input data should be inserted.
     *     insertDataOption: 'placeholder-value',
     *     // The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of a range to search for a logical table of data. Values are appended after the last row of the table.
     *     range: 'placeholder-value',
     *     // Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     *     responseDateTimeRenderOption: 'placeholder-value',
     *     // Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
     *     responseValueRenderOption: 'placeholder-value',
     *     // The ID of the spreadsheet to update.
     *     spreadsheetId: 'placeholder-value',
     *     // How the input data should be interpreted.
     *     valueInputOption: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "majorDimension": "my_majorDimension",
     *       //   "range": "my_range",
     *       //   "values": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "spreadsheetId": "my_spreadsheetId",
     *   //   "tableRange": "my_tableRange",
     *   //   "updates": {}
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
    append(
      params: Params$Resource$Spreadsheets$Values$Append,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    append(
      params?: Params$Resource$Spreadsheets$Values$Append,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AppendValuesResponse>>;
    append(
      params: Params$Resource$Spreadsheets$Values$Append,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    append(
      params: Params$Resource$Spreadsheets$Values$Append,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$AppendValuesResponse>,
      callback: BodyResponseCallback<Schema$AppendValuesResponse>
    ): void;
    append(
      params: Params$Resource$Spreadsheets$Values$Append,
      callback: BodyResponseCallback<Schema$AppendValuesResponse>
    ): void;
    append(callback: BodyResponseCallback<Schema$AppendValuesResponse>): void;
    append(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Values$Append
        | BodyResponseCallback<Schema$AppendValuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AppendValuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AppendValuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AppendValuesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheets$Values$Append;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spreadsheets$Values$Append;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v4/spreadsheets/{spreadsheetId}/values/{range}:append'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['spreadsheetId', 'range'],
        pathParams: ['range', 'spreadsheetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AppendValuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AppendValuesResponse>(parameters);
      }
    }

    /**
     * Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting and data validation) are kept.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.values.batchClear({
     *     // The ID of the spreadsheet to update.
     *     spreadsheetId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "ranges": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clearedRanges": [],
     *   //   "spreadsheetId": "my_spreadsheetId"
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
    batchClear(
      params: Params$Resource$Spreadsheets$Values$Batchclear,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchClear(
      params?: Params$Resource$Spreadsheets$Values$Batchclear,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchClearValuesResponse>>;
    batchClear(
      params: Params$Resource$Spreadsheets$Values$Batchclear,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchClear(
      params: Params$Resource$Spreadsheets$Values$Batchclear,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchClearValuesResponse>,
      callback: BodyResponseCallback<Schema$BatchClearValuesResponse>
    ): void;
    batchClear(
      params: Params$Resource$Spreadsheets$Values$Batchclear,
      callback: BodyResponseCallback<Schema$BatchClearValuesResponse>
    ): void;
    batchClear(
      callback: BodyResponseCallback<Schema$BatchClearValuesResponse>
    ): void;
    batchClear(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Values$Batchclear
        | BodyResponseCallback<Schema$BatchClearValuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchClearValuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchClearValuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchClearValuesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheets$Values$Batchclear;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spreadsheets$Values$Batchclear;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v4/spreadsheets/{spreadsheetId}/values:batchClear'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchClearValuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchClearValuesResponse>(parameters);
      }
    }

    /**
     * Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.values.batchClearByDataFilter({
     *     // The ID of the spreadsheet to update.
     *     spreadsheetId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataFilters": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clearedRanges": [],
     *   //   "spreadsheetId": "my_spreadsheetId"
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
    batchClearByDataFilter(
      params: Params$Resource$Spreadsheets$Values$Batchclearbydatafilter,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchClearByDataFilter(
      params?: Params$Resource$Spreadsheets$Values$Batchclearbydatafilter,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$BatchClearValuesByDataFilterResponse>
    >;
    batchClearByDataFilter(
      params: Params$Resource$Spreadsheets$Values$Batchclearbydatafilter,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchClearByDataFilter(
      params: Params$Resource$Spreadsheets$Values$Batchclearbydatafilter,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchClearValuesByDataFilterResponse>,
      callback: BodyResponseCallback<Schema$BatchClearValuesByDataFilterResponse>
    ): void;
    batchClearByDataFilter(
      params: Params$Resource$Spreadsheets$Values$Batchclearbydatafilter,
      callback: BodyResponseCallback<Schema$BatchClearValuesByDataFilterResponse>
    ): void;
    batchClearByDataFilter(
      callback: BodyResponseCallback<Schema$BatchClearValuesByDataFilterResponse>
    ): void;
    batchClearByDataFilter(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Values$Batchclearbydatafilter
        | BodyResponseCallback<Schema$BatchClearValuesByDataFilterResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchClearValuesByDataFilterResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchClearValuesByDataFilterResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$BatchClearValuesByDataFilterResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheets$Values$Batchclearbydatafilter;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Spreadsheets$Values$Batchclearbydatafilter;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchClearValuesByDataFilterResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchClearValuesByDataFilterResponse>(
          parameters
        );
      }
    }

    /**
     * Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *       'https://www.googleapis.com/auth/spreadsheets.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.values.batchGet({
     *     // How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     *     dateTimeRenderOption: 'placeholder-value',
     *     // The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `ranges=["A1:B2"],majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `ranges=["A1:B2"],majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
     *     majorDimension: 'placeholder-value',
     *     // The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the range to retrieve values from.
     *     ranges: 'placeholder-value',
     *     // The ID of the spreadsheet to retrieve data from.
     *     spreadsheetId: 'placeholder-value',
     *     // How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.
     *     valueRenderOption: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "spreadsheetId": "my_spreadsheetId",
     *   //   "valueRanges": []
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
      params: Params$Resource$Spreadsheets$Values$Batchget,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchGet(
      params?: Params$Resource$Spreadsheets$Values$Batchget,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchGetValuesResponse>>;
    batchGet(
      params: Params$Resource$Spreadsheets$Values$Batchget,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGet(
      params: Params$Resource$Spreadsheets$Values$Batchget,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchGetValuesResponse>,
      callback: BodyResponseCallback<Schema$BatchGetValuesResponse>
    ): void;
    batchGet(
      params: Params$Resource$Spreadsheets$Values$Batchget,
      callback: BodyResponseCallback<Schema$BatchGetValuesResponse>
    ): void;
    batchGet(
      callback: BodyResponseCallback<Schema$BatchGetValuesResponse>
    ): void;
    batchGet(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Values$Batchget
        | BodyResponseCallback<Schema$BatchGetValuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchGetValuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchGetValuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchGetValuesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheets$Values$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spreadsheets$Values$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v4/spreadsheets/{spreadsheetId}/values:batchGet'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchGetValuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchGetValuesResponse>(parameters);
      }
    }

    /**
     * Returns one or more ranges of values that match the specified data filters. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.values.batchGetByDataFilter({
     *     // The ID of the spreadsheet to retrieve data from.
     *     spreadsheetId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "dataFilters": [],
     *       //   "dateTimeRenderOption": "my_dateTimeRenderOption",
     *       //   "majorDimension": "my_majorDimension",
     *       //   "valueRenderOption": "my_valueRenderOption"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "spreadsheetId": "my_spreadsheetId",
     *   //   "valueRanges": []
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
    batchGetByDataFilter(
      params: Params$Resource$Spreadsheets$Values$Batchgetbydatafilter,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchGetByDataFilter(
      params?: Params$Resource$Spreadsheets$Values$Batchgetbydatafilter,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$BatchGetValuesByDataFilterResponse>
    >;
    batchGetByDataFilter(
      params: Params$Resource$Spreadsheets$Values$Batchgetbydatafilter,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchGetByDataFilter(
      params: Params$Resource$Spreadsheets$Values$Batchgetbydatafilter,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchGetValuesByDataFilterResponse>,
      callback: BodyResponseCallback<Schema$BatchGetValuesByDataFilterResponse>
    ): void;
    batchGetByDataFilter(
      params: Params$Resource$Spreadsheets$Values$Batchgetbydatafilter,
      callback: BodyResponseCallback<Schema$BatchGetValuesByDataFilterResponse>
    ): void;
    batchGetByDataFilter(
      callback: BodyResponseCallback<Schema$BatchGetValuesByDataFilterResponse>
    ): void;
    batchGetByDataFilter(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Values$Batchgetbydatafilter
        | BodyResponseCallback<Schema$BatchGetValuesByDataFilterResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchGetValuesByDataFilterResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchGetValuesByDataFilterResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$BatchGetValuesByDataFilterResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheets$Values$Batchgetbydatafilter;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spreadsheets$Values$Batchgetbydatafilter;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchGetValuesByDataFilterResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchGetValuesByDataFilterResponse>(
          parameters
        );
      }
    }

    /**
     * Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.values.batchUpdate({
     *     // The ID of the spreadsheet to update.
     *     spreadsheetId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "data": [],
     *       //   "includeValuesInResponse": false,
     *       //   "responseDateTimeRenderOption": "my_responseDateTimeRenderOption",
     *       //   "responseValueRenderOption": "my_responseValueRenderOption",
     *       //   "valueInputOption": "my_valueInputOption"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "responses": [],
     *   //   "spreadsheetId": "my_spreadsheetId",
     *   //   "totalUpdatedCells": 0,
     *   //   "totalUpdatedColumns": 0,
     *   //   "totalUpdatedRows": 0,
     *   //   "totalUpdatedSheets": 0
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
    batchUpdate(
      params: Params$Resource$Spreadsheets$Values$Batchupdate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchUpdate(
      params?: Params$Resource$Spreadsheets$Values$Batchupdate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$BatchUpdateValuesResponse>>;
    batchUpdate(
      params: Params$Resource$Spreadsheets$Values$Batchupdate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdate(
      params: Params$Resource$Spreadsheets$Values$Batchupdate,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchUpdateValuesResponse>,
      callback: BodyResponseCallback<Schema$BatchUpdateValuesResponse>
    ): void;
    batchUpdate(
      params: Params$Resource$Spreadsheets$Values$Batchupdate,
      callback: BodyResponseCallback<Schema$BatchUpdateValuesResponse>
    ): void;
    batchUpdate(
      callback: BodyResponseCallback<Schema$BatchUpdateValuesResponse>
    ): void;
    batchUpdate(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Values$Batchupdate
        | BodyResponseCallback<Schema$BatchUpdateValuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchUpdateValuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchUpdateValuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$BatchUpdateValuesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheets$Values$Batchupdate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spreadsheets$Values$Batchupdate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v4/spreadsheets/{spreadsheetId}/values:batchUpdate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchUpdateValuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchUpdateValuesResponse>(parameters);
      }
    }

    /**
     * Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.values.batchUpdateByDataFilter({
     *     // The ID of the spreadsheet to update.
     *     spreadsheetId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "data": [],
     *       //   "includeValuesInResponse": false,
     *       //   "responseDateTimeRenderOption": "my_responseDateTimeRenderOption",
     *       //   "responseValueRenderOption": "my_responseValueRenderOption",
     *       //   "valueInputOption": "my_valueInputOption"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "responses": [],
     *   //   "spreadsheetId": "my_spreadsheetId",
     *   //   "totalUpdatedCells": 0,
     *   //   "totalUpdatedColumns": 0,
     *   //   "totalUpdatedRows": 0,
     *   //   "totalUpdatedSheets": 0
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
    batchUpdateByDataFilter(
      params: Params$Resource$Spreadsheets$Values$Batchupdatebydatafilter,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    batchUpdateByDataFilter(
      params?: Params$Resource$Spreadsheets$Values$Batchupdatebydatafilter,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$BatchUpdateValuesByDataFilterResponse>
    >;
    batchUpdateByDataFilter(
      params: Params$Resource$Spreadsheets$Values$Batchupdatebydatafilter,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    batchUpdateByDataFilter(
      params: Params$Resource$Spreadsheets$Values$Batchupdatebydatafilter,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$BatchUpdateValuesByDataFilterResponse>,
      callback: BodyResponseCallback<Schema$BatchUpdateValuesByDataFilterResponse>
    ): void;
    batchUpdateByDataFilter(
      params: Params$Resource$Spreadsheets$Values$Batchupdatebydatafilter,
      callback: BodyResponseCallback<Schema$BatchUpdateValuesByDataFilterResponse>
    ): void;
    batchUpdateByDataFilter(
      callback: BodyResponseCallback<Schema$BatchUpdateValuesByDataFilterResponse>
    ): void;
    batchUpdateByDataFilter(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Values$Batchupdatebydatafilter
        | BodyResponseCallback<Schema$BatchUpdateValuesByDataFilterResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$BatchUpdateValuesByDataFilterResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$BatchUpdateValuesByDataFilterResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$BatchUpdateValuesByDataFilterResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheets$Values$Batchupdatebydatafilter;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Spreadsheets$Values$Batchupdatebydatafilter;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$BatchUpdateValuesByDataFilterResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$BatchUpdateValuesByDataFilterResponse>(
          parameters
        );
      }
    }

    /**
     * Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.values.clear({
     *     // The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the values to clear.
     *     range: 'placeholder-value',
     *     // The ID of the spreadsheet to update.
     *     spreadsheetId: 'placeholder-value',
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
     *   //   "clearedRange": "my_clearedRange",
     *   //   "spreadsheetId": "my_spreadsheetId"
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
    clear(
      params: Params$Resource$Spreadsheets$Values$Clear,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    clear(
      params?: Params$Resource$Spreadsheets$Values$Clear,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ClearValuesResponse>>;
    clear(
      params: Params$Resource$Spreadsheets$Values$Clear,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    clear(
      params: Params$Resource$Spreadsheets$Values$Clear,
      options: MethodOptions | BodyResponseCallback<Schema$ClearValuesResponse>,
      callback: BodyResponseCallback<Schema$ClearValuesResponse>
    ): void;
    clear(
      params: Params$Resource$Spreadsheets$Values$Clear,
      callback: BodyResponseCallback<Schema$ClearValuesResponse>
    ): void;
    clear(callback: BodyResponseCallback<Schema$ClearValuesResponse>): void;
    clear(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Values$Clear
        | BodyResponseCallback<Schema$ClearValuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ClearValuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ClearValuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ClearValuesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheets$Values$Clear;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spreadsheets$Values$Clear;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v4/spreadsheets/{spreadsheetId}/values/{range}:clear'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['spreadsheetId', 'range'],
        pathParams: ['range', 'spreadsheetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ClearValuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ClearValuesResponse>(parameters);
      }
    }

    /**
     * Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/drive.readonly',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *       'https://www.googleapis.com/auth/spreadsheets.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.values.get({
     *     // How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     *     dateTimeRenderOption: 'placeholder-value',
     *     // The major dimension that results should use. For example, if the spreadsheet data in Sheet1 is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=Sheet1!A1:B2?majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `range=Sheet1!A1:B2?majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
     *     majorDimension: 'placeholder-value',
     *     // The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the range to retrieve values from.
     *     range: 'placeholder-value',
     *     // The ID of the spreadsheet to retrieve data from.
     *     spreadsheetId: 'placeholder-value',
     *     // How values should be represented in the output. The default render option is FORMATTED_VALUE.
     *     valueRenderOption: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "majorDimension": "my_majorDimension",
     *   //   "range": "my_range",
     *   //   "values": []
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
      params: Params$Resource$Spreadsheets$Values$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Spreadsheets$Values$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ValueRange>>;
    get(
      params: Params$Resource$Spreadsheets$Values$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Spreadsheets$Values$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ValueRange>,
      callback: BodyResponseCallback<Schema$ValueRange>
    ): void;
    get(
      params: Params$Resource$Spreadsheets$Values$Get,
      callback: BodyResponseCallback<Schema$ValueRange>
    ): void;
    get(callback: BodyResponseCallback<Schema$ValueRange>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Values$Get
        | BodyResponseCallback<Schema$ValueRange>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ValueRange>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ValueRange>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ValueRange>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheets$Values$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spreadsheets$Values$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v4/spreadsheets/{spreadsheetId}/values/{range}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['spreadsheetId', 'range'],
        pathParams: ['range', 'spreadsheetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ValueRange>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ValueRange>(parameters);
      }
    }

    /**
     * Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/sheets.googleapis.com
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
     * const sheets = google.sheets('v4');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/drive',
     *       'https://www.googleapis.com/auth/drive.file',
     *       'https://www.googleapis.com/auth/spreadsheets',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await sheets.spreadsheets.values.update({
     *     // Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns).
     *     includeValuesInResponse: 'placeholder-value',
     *     // The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the values to update.
     *     range: 'placeholder-value',
     *     // Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     *     responseDateTimeRenderOption: 'placeholder-value',
     *     // Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
     *     responseValueRenderOption: 'placeholder-value',
     *     // The ID of the spreadsheet to update.
     *     spreadsheetId: 'placeholder-value',
     *     // How the input data should be interpreted.
     *     valueInputOption: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "majorDimension": "my_majorDimension",
     *       //   "range": "my_range",
     *       //   "values": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "spreadsheetId": "my_spreadsheetId",
     *   //   "updatedCells": 0,
     *   //   "updatedColumns": 0,
     *   //   "updatedData": {},
     *   //   "updatedRange": "my_updatedRange",
     *   //   "updatedRows": 0
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
    update(
      params: Params$Resource$Spreadsheets$Values$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Spreadsheets$Values$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UpdateValuesResponse>>;
    update(
      params: Params$Resource$Spreadsheets$Values$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Spreadsheets$Values$Update,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UpdateValuesResponse>,
      callback: BodyResponseCallback<Schema$UpdateValuesResponse>
    ): void;
    update(
      params: Params$Resource$Spreadsheets$Values$Update,
      callback: BodyResponseCallback<Schema$UpdateValuesResponse>
    ): void;
    update(callback: BodyResponseCallback<Schema$UpdateValuesResponse>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Spreadsheets$Values$Update
        | BodyResponseCallback<Schema$UpdateValuesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UpdateValuesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UpdateValuesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UpdateValuesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Spreadsheets$Values$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Spreadsheets$Values$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sheets.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v4/spreadsheets/{spreadsheetId}/values/{range}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['spreadsheetId', 'range'],
        pathParams: ['range', 'spreadsheetId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$UpdateValuesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UpdateValuesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Spreadsheets$Values$Append
    extends StandardParameters {
    /**
     * Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values.
     */
    includeValuesInResponse?: boolean;
    /**
     * How the input data should be inserted.
     */
    insertDataOption?: string;
    /**
     * The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of a range to search for a logical table of data. Values are appended after the last row of the table.
     */
    range?: string;
    /**
     * Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     */
    responseDateTimeRenderOption?: string;
    /**
     * Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
     */
    responseValueRenderOption?: string;
    /**
     * The ID of the spreadsheet to update.
     */
    spreadsheetId?: string;
    /**
     * How the input data should be interpreted.
     */
    valueInputOption?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ValueRange;
  }
  export interface Params$Resource$Spreadsheets$Values$Batchclear
    extends StandardParameters {
    /**
     * The ID of the spreadsheet to update.
     */
    spreadsheetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchClearValuesRequest;
  }
  export interface Params$Resource$Spreadsheets$Values$Batchclearbydatafilter
    extends StandardParameters {
    /**
     * The ID of the spreadsheet to update.
     */
    spreadsheetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchClearValuesByDataFilterRequest;
  }
  export interface Params$Resource$Spreadsheets$Values$Batchget
    extends StandardParameters {
    /**
     * How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     */
    dateTimeRenderOption?: string;
    /**
     * The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `ranges=["A1:B2"],majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `ranges=["A1:B2"],majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
     */
    majorDimension?: string;
    /**
     * The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the range to retrieve values from.
     */
    ranges?: string[];
    /**
     * The ID of the spreadsheet to retrieve data from.
     */
    spreadsheetId?: string;
    /**
     * How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.
     */
    valueRenderOption?: string;
  }
  export interface Params$Resource$Spreadsheets$Values$Batchgetbydatafilter
    extends StandardParameters {
    /**
     * The ID of the spreadsheet to retrieve data from.
     */
    spreadsheetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchGetValuesByDataFilterRequest;
  }
  export interface Params$Resource$Spreadsheets$Values$Batchupdate
    extends StandardParameters {
    /**
     * The ID of the spreadsheet to update.
     */
    spreadsheetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdateValuesRequest;
  }
  export interface Params$Resource$Spreadsheets$Values$Batchupdatebydatafilter
    extends StandardParameters {
    /**
     * The ID of the spreadsheet to update.
     */
    spreadsheetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdateValuesByDataFilterRequest;
  }
  export interface Params$Resource$Spreadsheets$Values$Clear
    extends StandardParameters {
    /**
     * The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the values to clear.
     */
    range?: string;
    /**
     * The ID of the spreadsheet to update.
     */
    spreadsheetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ClearValuesRequest;
  }
  export interface Params$Resource$Spreadsheets$Values$Get
    extends StandardParameters {
    /**
     * How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     */
    dateTimeRenderOption?: string;
    /**
     * The major dimension that results should use. For example, if the spreadsheet data in Sheet1 is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=Sheet1!A1:B2?majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `range=Sheet1!A1:B2?majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
     */
    majorDimension?: string;
    /**
     * The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the range to retrieve values from.
     */
    range?: string;
    /**
     * The ID of the spreadsheet to retrieve data from.
     */
    spreadsheetId?: string;
    /**
     * How values should be represented in the output. The default render option is FORMATTED_VALUE.
     */
    valueRenderOption?: string;
  }
  export interface Params$Resource$Spreadsheets$Values$Update
    extends StandardParameters {
    /**
     * Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns).
     */
    includeValuesInResponse?: boolean;
    /**
     * The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the values to update.
     */
    range?: string;
    /**
     * Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     */
    responseDateTimeRenderOption?: string;
    /**
     * Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
     */
    responseValueRenderOption?: string;
    /**
     * The ID of the spreadsheet to update.
     */
    spreadsheetId?: string;
    /**
     * How the input data should be interpreted.
     */
    valueInputOption?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ValueRange;
  }
}
