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
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace sheets_v4 {
  export interface Options extends GlobalOptions {
    version: 'v4';
  }

  /**
   * Google Sheets API
   *
   * Reads and writes Google Sheets.
   *
   * @example
   * const {google} = require('googleapis');
   * const sheets = google.sheets('v4');
   *
   * @namespace sheets
   * @type {Function}
   * @version v4
   * @variation v4
   * @param {object=} options Options for Sheets
   */
  export class Sheets {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    spreadsheets: Resource$Spreadsheets;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.spreadsheets = new Resource$Spreadsheets(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Adds a new banded range to the spreadsheet.
   */
  export interface Schema$AddBandingRequest {
    /**
     * The banded range to add. The bandedRangeId field is optional; if one is
     * not set, an id will be randomly generated. (It is an error to specify the
     * ID of a range that already exists.)
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
     * The chart that should be added to the spreadsheet, including the position
     * where it should be placed. The chartId field is optional; if one is not
     * set, an id will be randomly generated. (It is an error to specify the ID
     * of a chart that already exists.)
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
   * Adds a new conditional format rule at the given index. All subsequent
   * rules&#39; indexes are incremented.
   */
  export interface Schema$AddConditionalFormatRuleRequest {
    /**
     * The zero-based index where the rule should be inserted.
     */
    index?: number;
    /**
     * The rule to add.
     */
    rule?: Schema$ConditionalFormatRule;
  }
  /**
   * Creates a group over the specified range.  If the requested range is a
   * superset of the range of an existing group G, then the depth of G is
   * incremented and this new group G&#39; has the depth of that group. For
   * example, a group [C:D, depth 1] + [B:E] results in groups [B:E, depth 1]
   * and [C:D, depth 2]. If the requested range is a subset of the range of an
   * existing group G, then the depth of the new group G&#39; becomes one
   * greater than the depth of G. For example, a group [B:E, depth 1] + [C:D]
   * results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range
   * starts before and ends within, or starts within and ends after, the range
   * of an existing group G, then the range of the existing group G becomes the
   * union of the ranges, and the new group G&#39; has depth one greater than
   * the depth of G and range as the intersection of the ranges. For example, a
   * group [B:D, depth 1] + [C:E] results in groups [B:E, depth 1] and [C:D,
   * depth 2].
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
     * The filter to add. The filterViewId field is optional; if one is not set,
     * an id will be randomly generated. (It is an error to specify the ID of a
     * filter that already exists.)
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
     * The named range to add. The namedRangeId field is optional; if one is not
     * set, an id will be randomly generated. (It is an error to specify the ID
     * of a range that already exists.)
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
     * The protected range to be added. The protectedRangeId field is optional;
     * if one is not set, an id will be randomly generated. (It is an error to
     * specify the ID of a range that already exists.)
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
   * Adds a new sheet. When a sheet is added at a given index, all subsequent
   * sheets&#39; indexes are incremented. To add an object sheet, use
   * AddChartRequest instead and specify EmbeddedObjectPosition.sheetId or
   * EmbeddedObjectPosition.newSheet.
   */
  export interface Schema$AddSheetRequest {
    /**
     * The properties the new sheet should have. All properties are optional.
     * The sheetId field is optional; if one is not set, an id will be randomly
     * generated. (It is an error to specify the ID of a sheet that already
     * exists.)
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
   * Adds new cells after the last row with data in a sheet, inserting new rows
   * into the sheet if necessary.
   */
  export interface Schema$AppendCellsRequest {
    /**
     * The fields of CellData that should be updated. At least one field must be
     * specified. The root is the CellData; &#39;row.values.&#39; should not be
     * specified. A single `&quot;*&quot;` can be used as short-hand for listing
     * every field.
     */
    fields?: string;
    /**
     * The data to append.
     */
    rows?: Schema$RowData[];
    /**
     * The sheet ID to append the data to.
     */
    sheetId?: number;
  }
  /**
   * Appends rows or columns to the end of a sheet.
   */
  export interface Schema$AppendDimensionRequest {
    /**
     * Whether rows or columns should be appended.
     */
    dimension?: string;
    /**
     * The number of rows or columns to append.
     */
    length?: number;
    /**
     * The sheet to append rows or columns to.
     */
    sheetId?: number;
  }
  /**
   * The response when updating a range of values in a spreadsheet.
   */
  export interface Schema$AppendValuesResponse {
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string;
    /**
     * The range (in A1 notation) of the table that values are being appended to
     * (before the values were appended). Empty if no table was found.
     */
    tableRange?: string;
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
     * The range to autofill. This will examine the range and detect the
     * location that has data and automatically fill that data in to the rest of
     * the range.
     */
    range?: Schema$GridRange;
    /**
     * The source and destination areas to autofill. This explicitly lists the
     * source of the autofill and where to extend that data.
     */
    sourceAndDestination?: Schema$SourceAndDestination;
    /**
     * True if we should generate data with the &quot;alternate&quot; series.
     * This differs based on the type and amount of source data.
     */
    useAlternateSeries?: boolean;
  }
  /**
   * Automatically resizes one or more dimensions based on the contents of the
   * cells in that dimension.
   */
  export interface Schema$AutoResizeDimensionsRequest {
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
     * The id of the banded range.
     */
    bandedRangeId?: number;
    /**
     * Properties for column bands. These properties are applied on a column-
     * by-column basis throughout all the columns in the range. At least one of
     * row_properties or column_properties must be specified.
     */
    columnProperties?: Schema$BandingProperties;
    /**
     * The range over which these properties are applied.
     */
    range?: Schema$GridRange;
    /**
     * Properties for row bands. These properties are applied on a row-by-row
     * basis throughout all the rows in the range. At least one of
     * row_properties or column_properties must be specified.
     */
    rowProperties?: Schema$BandingProperties;
  }
  /**
   * Properties referring a single dimension (either row or column). If both
   * BandedRange.row_properties and BandedRange.column_properties are set, the
   * fill colors are applied to cells according to the following rules:  *
   * header_color and footer_color take priority over band colors. *
   * first_band_color takes priority over second_band_color. * row_properties
   * takes priority over column_properties.  For example, the first row color
   * takes priority over the first column color, but the first column color
   * takes priority over the second row color. Similarly, the row header takes
   * priority over the column header in the top left cell, but the column header
   * takes priority over the first row color if the row header is not set.
   */
  export interface Schema$BandingProperties {
    /**
     * The first color that is alternating. (Required)
     */
    firstBandColor?: Schema$Color;
    /**
     * The color of the last row or column. If this field is not set, the last
     * row or column will be filled with either first_band_color or
     * second_band_color, depending on the color of the previous row or column.
     */
    footerColor?: Schema$Color;
    /**
     * The color of the first row or column. If this field is set, the first row
     * or column will be filled with this color and the colors will alternate
     * between first_band_color and second_band_color starting from the second
     * row or column. Otherwise, the first row or column will be filled with
     * first_band_color and the colors will proceed to alternate as they
     * normally would.
     */
    headerColor?: Schema$Color;
    /**
     * The second color that is alternating. (Required)
     */
    secondBandColor?: Schema$Color;
  }
  /**
   * An axis of the chart. A chart may not have more than one axis per axis
   * position.
   */
  export interface Schema$BasicChartAxis {
    /**
     * The format of the title. Only valid if the axis is not associated with
     * the domain.
     */
    format?: Schema$TextFormat;
    /**
     * The position of this axis.
     */
    position?: string;
    /**
     * The title of this axis. If set, this overrides any title inferred from
     * headers of the data.
     */
    title?: string;
    /**
     * The axis title text position.
     */
    titleTextPosition?: Schema$TextPosition;
  }
  /**
   * The domain of a chart. For example, if charting stock prices over time,
   * this would be the date.
   */
  export interface Schema$BasicChartDomain {
    /**
     * The data of the domain. For example, if charting stock prices over time,
     * this is the data representing the dates.
     */
    domain?: Schema$ChartData;
    /**
     * True to reverse the order of the domain values (horizontal axis).
     */
    reversed?: boolean;
  }
  /**
   * A single series of data in a chart. For example, if charting stock prices
   * over time, multiple series may exist, one for the &quot;Open Price&quot;,
   * &quot;High Price&quot;, &quot;Low Price&quot; and &quot;Close Price&quot;.
   */
  export interface Schema$BasicChartSeries {
    /**
     * The color for elements (i.e. bars, lines, points) associated with this
     * series.  If empty, a default color is used.
     */
    color?: Schema$Color;
    /**
     * The line style of this series. Valid only if the chartType is AREA, LINE,
     * or SCATTER. COMBO charts are also supported if the series chart type is
     * AREA or LINE.
     */
    lineStyle?: Schema$LineStyle;
    /**
     * The data being visualized in this chart series.
     */
    series?: Schema$ChartData;
    /**
     * The minor axis that will specify the range of values for this series. For
     * example, if charting stocks over time, the &quot;Volume&quot; series may
     * want to be pinned to the right with the prices pinned to the left,
     * because the scale of trading volume is different than the scale of
     * prices. It is an error to specify an axis that isn&#39;t a valid minor
     * axis for the chart&#39;s type.
     */
    targetAxis?: string;
    /**
     * The type of this series. Valid only if the chartType is COMBO. Different
     * types will change the way the series is visualized. Only LINE, AREA, and
     * COLUMN are supported.
     */
    type?: string;
  }
  /**
   * The specification for a basic chart.  See BasicChartType for the list of
   * charts this supports.
   */
  export interface Schema$BasicChartSpec {
    /**
     * The axis on the chart.
     */
    axis?: Schema$BasicChartAxis[];
    /**
     * The type of the chart.
     */
    chartType?: string;
    /**
     * The behavior of tooltips and data highlighting when hovering on data and
     * chart area.
     */
    compareMode?: string;
    /**
     * The domain of data this is charting. Only a single domain is supported.
     */
    domains?: Schema$BasicChartDomain[];
    /**
     * The number of rows or columns in the data that are &quot;headers&quot;.
     * If not set, Google Sheets will guess how many rows are headers based on
     * the data.  (Note that BasicChartAxis.title may override the axis title
     * inferred from the header values.)
     */
    headerCount?: number;
    /**
     * If some values in a series are missing, gaps may appear in the chart
     * (e.g, segments of lines in a line chart will be missing).  To eliminate
     * these gaps set this to true. Applies to Line, Area, and Combo charts.
     */
    interpolateNulls?: boolean;
    /**
     * The position of the chart legend.
     */
    legendPosition?: string;
    /**
     * Gets whether all lines should be rendered smooth or straight by default.
     * Applies to Line charts.
     */
    lineSmoothing?: boolean;
    /**
     * The data this chart is visualizing.
     */
    series?: Schema$BasicChartSeries[];
    /**
     * The stacked type for charts that support vertical stacking. Applies to
     * Area, Bar, Column, Combo, and Stepped Area charts.
     */
    stackedType?: string;
    /**
     * True to make the chart 3D. Applies to Bar and Column charts.
     */
    threeDimensional?: boolean;
  }
  /**
   * The default filter associated with a sheet.
   */
  export interface Schema$BasicFilter {
    /**
     * The criteria for showing/hiding values per column. The map&#39;s key is
     * the column index, and the value is the criteria for that column.
     */
    criteria?: any;
    /**
     * The range the filter covers.
     */
    range?: Schema$GridRange;
    /**
     * The sort order per column. Later specifications are used when values are
     * equal in the earlier specifications.
     */
    sortSpecs?: Schema$SortSpec[];
  }
  /**
   * The request for clearing more than one range selected by a DataFilter in a
   * spreadsheet.
   */
  export interface Schema$BatchClearValuesByDataFilterRequest {
    /**
     * The DataFilters used to determine which ranges to clear.
     */
    dataFilters?: Schema$DataFilter[];
  }
  /**
   * The response when clearing a range of values selected with DataFilters in a
   * spreadsheet.
   */
  export interface Schema$BatchClearValuesByDataFilterResponse {
    /**
     * The ranges that were cleared, in A1 notation. (If the requests were for
     * an unbounded range or a ranger larger  than the bounds of the sheet, this
     * will be the actual ranges  that were cleared, bounded to the sheet&#39;s
     * limits.)
     */
    clearedRanges?: string[];
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string;
  }
  /**
   * The request for clearing more than one range of values in a spreadsheet.
   */
  export interface Schema$BatchClearValuesRequest {
    /**
     * The ranges to clear, in A1 notation.
     */
    ranges?: string[];
  }
  /**
   * The response when clearing a range of values in a spreadsheet.
   */
  export interface Schema$BatchClearValuesResponse {
    /**
     * The ranges that were cleared, in A1 notation. (If the requests were for
     * an unbounded range or a ranger larger  than the bounds of the sheet, this
     * will be the actual ranges  that were cleared, bounded to the sheet&#39;s
     * limits.)
     */
    clearedRanges?: string[];
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string;
  }
  /**
   * The request for retrieving a range of values in a spreadsheet selected by a
   * set of DataFilters.
   */
  export interface Schema$BatchGetValuesByDataFilterRequest {
    /**
     * The data filters used to match the ranges of values to retrieve.  Ranges
     * that match any of the specified data filters will be included in the
     * response.
     */
    dataFilters?: Schema$DataFilter[];
    /**
     * How dates, times, and durations should be represented in the output. This
     * is ignored if value_render_option is FORMATTED_VALUE. The default
     * dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
     */
    dateTimeRenderOption?: string;
    /**
     * The major dimension that results should use.  For example, if the
     * spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then a request that selects
     * that range and sets `majorDimension=ROWS` will return `[[1,2],[3,4]]`,
     * whereas a request that sets `majorDimension=COLUMNS` will return
     * `[[1,3],[2,4]]`.
     */
    majorDimension?: string;
    /**
     * How values should be represented in the output. The default render option
     * is ValueRenderOption.FORMATTED_VALUE.
     */
    valueRenderOption?: string;
  }
  /**
   * The response when retrieving more than one range of values in a spreadsheet
   * selected by DataFilters.
   */
  export interface Schema$BatchGetValuesByDataFilterResponse {
    /**
     * The ID of the spreadsheet the data was retrieved from.
     */
    spreadsheetId?: string;
    /**
     * The requested values with the list of data filters that matched them.
     */
    valueRanges?: Schema$MatchedValueRange[];
  }
  /**
   * The response when retrieving more than one range of values in a
   * spreadsheet.
   */
  export interface Schema$BatchGetValuesResponse {
    /**
     * The ID of the spreadsheet the data was retrieved from.
     */
    spreadsheetId?: string;
    /**
     * The requested values. The order of the ValueRanges is the same as the
     * order of the requested ranges.
     */
    valueRanges?: Schema$ValueRange[];
  }
  /**
   * The request for updating any aspect of a spreadsheet.
   */
  export interface Schema$BatchUpdateSpreadsheetRequest {
    /**
     * Determines if the update response should include the spreadsheet
     * resource.
     */
    includeSpreadsheetInResponse?: boolean;
    /**
     * A list of updates to apply to the spreadsheet. Requests will be applied
     * in the order they are specified. If any request is not valid, no requests
     * will be applied.
     */
    requests?: Schema$Request[];
    /**
     * True if grid data should be returned. Meaningful only if if
     * include_spreadsheet_in_response is &#39;true&#39;. This parameter is
     * ignored if a field mask was set in the request.
     */
    responseIncludeGridData?: boolean;
    /**
     * Limits the ranges included in the response spreadsheet. Meaningful only
     * if include_spreadsheet_response is &#39;true&#39;.
     */
    responseRanges?: string[];
  }
  /**
   * The reply for batch updating a spreadsheet.
   */
  export interface Schema$BatchUpdateSpreadsheetResponse {
    /**
     * The reply of the updates.  This maps 1:1 with the updates, although
     * replies to some requests may be empty.
     */
    replies?: Schema$Response[];
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string;
    /**
     * The spreadsheet after updates were applied. This is only set if
     * [BatchUpdateSpreadsheetRequest.include_spreadsheet_in_response] is
     * `true`.
     */
    updatedSpreadsheet?: Schema$Spreadsheet;
  }
  /**
   * The request for updating more than one range of values in a spreadsheet.
   */
  export interface Schema$BatchUpdateValuesByDataFilterRequest {
    /**
     * The new values to apply to the spreadsheet.  If more than one range is
     * matched by the specified DataFilter the specified values will be applied
     * to all of those ranges.
     */
    data?: Schema$DataFilterValueRange[];
    /**
     * Determines if the update response should include the values of the cells
     * that were updated. By default, responses do not include the updated
     * values. The `updatedData` field within each of the
     * BatchUpdateValuesResponse.responses will contain the updated values. If
     * the range to write was larger than than the range actually written, the
     * response will include all values in the requested range (excluding
     * trailing empty rows and columns).
     */
    includeValuesInResponse?: boolean;
    /**
     * Determines how dates, times, and durations in the response should be
     * rendered. This is ignored if response_value_render_option is
     * FORMATTED_VALUE. The default dateTime render option is
     * DateTimeRenderOption.SERIAL_NUMBER.
     */
    responseDateTimeRenderOption?: string;
    /**
     * Determines how values in the response should be rendered. The default
     * render option is ValueRenderOption.FORMATTED_VALUE.
     */
    responseValueRenderOption?: string;
    /**
     * How the input data should be interpreted.
     */
    valueInputOption?: string;
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
    spreadsheetId?: string;
    /**
     * The total number of cells updated.
     */
    totalUpdatedCells?: number;
    /**
     * The total number of columns where at least one cell in the column was
     * updated.
     */
    totalUpdatedColumns?: number;
    /**
     * The total number of rows where at least one cell in the row was updated.
     */
    totalUpdatedRows?: number;
    /**
     * The total number of sheets where at least one cell in the sheet was
     * updated.
     */
    totalUpdatedSheets?: number;
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
     * Determines if the update response should include the values of the cells
     * that were updated. By default, responses do not include the updated
     * values. The `updatedData` field within each of the
     * BatchUpdateValuesResponse.responses will contain the updated values. If
     * the range to write was larger than than the range actually written, the
     * response will include all values in the requested range (excluding
     * trailing empty rows and columns).
     */
    includeValuesInResponse?: boolean;
    /**
     * Determines how dates, times, and durations in the response should be
     * rendered. This is ignored if response_value_render_option is
     * FORMATTED_VALUE. The default dateTime render option is
     * DateTimeRenderOption.SERIAL_NUMBER.
     */
    responseDateTimeRenderOption?: string;
    /**
     * Determines how values in the response should be rendered. The default
     * render option is ValueRenderOption.FORMATTED_VALUE.
     */
    responseValueRenderOption?: string;
    /**
     * How the input data should be interpreted.
     */
    valueInputOption?: string;
  }
  /**
   * The response when updating a range of values in a spreadsheet.
   */
  export interface Schema$BatchUpdateValuesResponse {
    /**
     * One UpdateValuesResponse per requested range, in the same order as the
     * requests appeared.
     */
    responses?: Schema$UpdateValuesResponse[];
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string;
    /**
     * The total number of cells updated.
     */
    totalUpdatedCells?: number;
    /**
     * The total number of columns where at least one cell in the column was
     * updated.
     */
    totalUpdatedColumns?: number;
    /**
     * The total number of rows where at least one cell in the row was updated.
     */
    totalUpdatedRows?: number;
    /**
     * The total number of sheets where at least one cell in the sheet was
     * updated.
     */
    totalUpdatedSheets?: number;
  }
  /**
   * A condition that can evaluate to true or false. BooleanConditions are used
   * by conditional formatting, data validation, and the criteria in filters.
   */
  export interface Schema$BooleanCondition {
    /**
     * The type of condition.
     */
    type?: string;
    /**
     * The values of the condition. The number of supported values depends on
     * the condition type.  Some support zero values, others one or two values,
     * and ConditionType.ONE_OF_LIST supports an arbitrary number of values.
     */
    values?: Schema$ConditionValue[];
  }
  /**
   * A rule that may or may not match, depending on the condition.
   */
  export interface Schema$BooleanRule {
    /**
     * The condition of the rule. If the condition evaluates to true, the format
     * is applied.
     */
    condition?: Schema$BooleanCondition;
    /**
     * The format to apply. Conditional formatting can only apply a subset of
     * formatting: bold, italic, strikethrough, foreground color &amp;
     * background color.
     */
    format?: Schema$CellFormat;
  }
  /**
   * A border along a cell.
   */
  export interface Schema$Border {
    /**
     * The color of the border.
     */
    color?: Schema$Color;
    /**
     * The style of the border.
     */
    style?: string;
    /**
     * The width of the border, in pixels. Deprecated; the width is determined
     * by the &quot;style&quot; field.
     */
    width?: number;
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
   * A &lt;a
   * href=&quot;/chart/interactive/docs/gallery/bubblechart&quot;&gt;bubble
   * chart&lt;/a&gt;.
   */
  export interface Schema$BubbleChartSpec {
    /**
     * The bubble border color.
     */
    bubbleBorderColor?: Schema$Color;
    /**
     * The data containing the bubble labels.  These do not need to be unique.
     */
    bubbleLabels?: Schema$ChartData;
    /**
     * The max radius size of the bubbles, in pixels. If specified, the field
     * must be a positive value.
     */
    bubbleMaxRadiusSize?: number;
    /**
     * The minimum radius size of the bubbles, in pixels. If specific, the field
     * must be a positive value.
     */
    bubbleMinRadiusSize?: number;
    /**
     * The opacity of the bubbles between 0 and 1.0. 0 is fully transparent and
     * 1 is fully opaque.
     */
    bubbleOpacity?: number;
    /**
     * The data contianing the bubble sizes.  Bubble sizes are used to draw the
     * bubbles at different sizes relative to each other. If specified,
     * group_ids must also be specified.  This field is optional.
     */
    bubbleSizes?: Schema$ChartData;
    /**
     * The format of the text inside the bubbles. Underline and Strikethrough
     * are not supported.
     */
    bubbleTextStyle?: Schema$TextFormat;
    /**
     * The data containing the bubble x-values.  These values locate the bubbles
     * in the chart horizontally.
     */
    domain?: Schema$ChartData;
    /**
     * The data containing the bubble group IDs. All bubbles with the same group
     * ID are drawn in the same color. If bubble_sizes is specified then this
     * field must also be specified but may contain blank values. This field is
     * optional.
     */
    groupIds?: Schema$ChartData;
    /**
     * Where the legend of the chart should be drawn.
     */
    legendPosition?: string;
    /**
     * The data contianing the bubble y-values.  These values locate the bubbles
     * in the chart vertically.
     */
    series?: Schema$ChartData;
  }
  /**
   * A &lt;a
   * href=&quot;/chart/interactive/docs/gallery/candlestickchart&quot;&gt;candlestick
   * chart&lt;/a&gt;.
   */
  export interface Schema$CandlestickChartSpec {
    /**
     * The Candlestick chart data. Only one CandlestickData is supported.
     */
    data?: Schema$CandlestickData[];
    /**
     * The domain data (horizontal axis) for the candlestick chart.  String data
     * will be treated as discrete labels, other data will be treated as
     * continuous values.
     */
    domain?: Schema$CandlestickDomain;
  }
  /**
   * The Candlestick chart data, each containing the low, open, close, and high
   * values for a series.
   */
  export interface Schema$CandlestickData {
    /**
     * The range data (vertical axis) for the close/final value for each candle.
     * This is the top of the candle body.  If greater than the open value the
     * candle will be filled.  Otherwise the candle will be hollow.
     */
    closeSeries?: Schema$CandlestickSeries;
    /**
     * The range data (vertical axis) for the high/maximum value for each
     * candle. This is the top of the candle&#39;s center line.
     */
    highSeries?: Schema$CandlestickSeries;
    /**
     * The range data (vertical axis) for the low/minimum value for each candle.
     * This is the bottom of the candle&#39;s center line.
     */
    lowSeries?: Schema$CandlestickSeries;
    /**
     * The range data (vertical axis) for the open/initial value for each
     * candle. This is the bottom of the candle body.  If less than the close
     * value the candle will be filled.  Otherwise the candle will be hollow.
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
    reversed?: boolean;
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
     * A data validation rule on the cell, if any.  When writing, the new data
     * validation rule will overwrite any prior rule.
     */
    dataValidation?: Schema$DataValidationRule;
    /**
     * The effective format being used by the cell. This includes the results of
     * applying any conditional formatting and, if the cell contains a formula,
     * the computed number format. If the effective format is the default
     * format, effective format will not be written. This field is read-only.
     */
    effectiveFormat?: Schema$CellFormat;
    /**
     * The effective value of the cell. For cells with formulas, this is the
     * calculated value.  For cells with literals, this is the same as the
     * user_entered_value. This field is read-only.
     */
    effectiveValue?: Schema$ExtendedValue;
    /**
     * The formatted value of the cell. This is the value as it&#39;s shown to
     * the user. This field is read-only.
     */
    formattedValue?: string;
    /**
     * A hyperlink this cell points to, if any. This field is read-only.  (To
     * set it, use a `=HYPERLINK` formula in the userEnteredValue.formulaValue
     * field.)
     */
    hyperlink?: string;
    /**
     * Any note on the cell.
     */
    note?: string;
    /**
     * A pivot table anchored at this cell. The size of pivot table itself is
     * computed dynamically based on its data, grouping, filters, values, etc.
     * Only the top-left cell of the pivot table contains the pivot table
     * definition. The other cells will contain the calculated values of the
     * results of the pivot in their effective_value fields.
     */
    pivotTable?: Schema$PivotTable;
    /**
     * Runs of rich text applied to subsections of the cell.  Runs are only
     * valid on user entered strings, not formulas, bools, or numbers. Runs
     * start at specific indexes in the text and continue until the next run.
     * Properties of a run will continue unless explicitly changed in a
     * subsequent run (and properties of the first run will continue the
     * properties of the cell unless explicitly changed).  When writing, the new
     * runs will overwrite any prior runs.  When writing a new
     * user_entered_value, previous runs are erased.
     */
    textFormatRuns?: Schema$TextFormatRun[];
    /**
     * The format the user entered for the cell.  When writing, the new format
     * will be merged with the existing format.
     */
    userEnteredFormat?: Schema$CellFormat;
    /**
     * The value the user entered in the cell. e.g, `1234`, `&#39;Hello&#39;`,
     * or `=NOW()` Note: Dates, Times and DateTimes are represented as doubles
     * in serial number format.
     */
    userEnteredValue?: Schema$ExtendedValue;
  }
  /**
   * The format of a cell.
   */
  export interface Schema$CellFormat {
    /**
     * The background color of the cell.
     */
    backgroundColor?: Schema$Color;
    /**
     * The borders of the cell.
     */
    borders?: Schema$Borders;
    /**
     * The horizontal alignment of the value in the cell.
     */
    horizontalAlignment?: string;
    /**
     * How a hyperlink, if it exists, should be displayed in the cell.
     */
    hyperlinkDisplayType?: string;
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
    textDirection?: string;
    /**
     * The format of the text in the cell (unless overridden by a format run).
     */
    textFormat?: Schema$TextFormat;
    /**
     * The rotation applied to text in a cell
     */
    textRotation?: Schema$TextRotation;
    /**
     * The vertical alignment of the value in the cell.
     */
    verticalAlignment?: string;
    /**
     * The wrap strategy for the value in the cell.
     */
    wrapStrategy?: string;
  }
  /**
   * The data included in a domain or series.
   */
  export interface Schema$ChartData {
    /**
     * The source ranges of the data.
     */
    sourceRange?: Schema$ChartSourceRange;
  }
  /**
   * Source ranges for a chart.
   */
  export interface Schema$ChartSourceRange {
    /**
     * The ranges of data for a series or domain. Exactly one dimension must
     * have a length of 1, and all sources in the list must have the same
     * dimension with length 1. The domain (if it exists) &amp; all series must
     * have the same number of source ranges. If using more than one source
     * range, then the source range at a given offset must be in order and
     * contiguous across the domain and series.  For example, these are valid
     * configurations:      domain sources: A1:A5     series1 sources: B1:B5
     * series2 sources: D6:D10      domain sources: A1:A5, C10:C12     series1
     * sources: B1:B5, D10:D12     series2 sources: C1:C5, E10:E12
     */
    sources?: Schema$GridRange[];
  }
  /**
   * The specifications of a chart.
   */
  export interface Schema$ChartSpec {
    /**
     * The alternative text that describes the chart.  This is often used for
     * accessibility.
     */
    altText?: string;
    /**
     * The background color of the entire chart. Not applicable to Org charts.
     */
    backgroundColor?: Schema$Color;
    /**
     * A basic chart specification, can be one of many kinds of charts. See
     * BasicChartType for the list of all charts this supports.
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
     * The name of the font to use by default for all chart text (e.g. title,
     * axis labels, legend).  If a font is specified for a specific part of the
     * chart it will override this font name.
     */
    fontName?: string;
    /**
     * Determines how the charts will use hidden rows or columns.
     */
    hiddenDimensionStrategy?: string;
    /**
     * A histogram chart specification.
     */
    histogramChart?: Schema$HistogramChartSpec;
    /**
     * True to make a chart fill the entire space in which it&#39;s rendered
     * with minimum padding.  False to use the default padding. (Not applicable
     * to Geo and Org charts.)
     */
    maximized?: boolean;
    /**
     * An org chart specification.
     */
    orgChart?: Schema$OrgChartSpec;
    /**
     * A pie chart specification.
     */
    pieChart?: Schema$PieChartSpec;
    /**
     * The subtitle of the chart.
     */
    subtitle?: string;
    /**
     * The subtitle text format. Strikethrough and underline are not supported.
     */
    subtitleTextFormat?: Schema$TextFormat;
    /**
     * The subtitle text position. This field is optional.
     */
    subtitleTextPosition?: Schema$TextPosition;
    /**
     * The title of the chart.
     */
    title?: string;
    /**
     * The title text format. Strikethrough and underline are not supported.
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
   * Clears the basic filter, if any exists on the sheet.
   */
  export interface Schema$ClearBasicFilterRequest {
    /**
     * The sheet ID on which the basic filter should be cleared.
     */
    sheetId?: number;
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
     * The range (in A1 notation) that was cleared. (If the request was for an
     * unbounded range or a ranger larger  than the bounds of the sheet, this
     * will be the actual range  that was cleared, bounded to the sheet&#39;s
     * limits.)
     */
    clearedRange?: string;
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string;
  }
  /**
   * Represents a color in the RGBA color space. This representation is designed
   * for simplicity of conversion to/from color representations in various
   * languages over compactness; for example, the fields of this representation
   * can be trivially provided to the constructor of &quot;java.awt.Color&quot;
   * in Java; it can also be trivially provided to UIColor&#39;s
   * &quot;+colorWithRed:green:blue:alpha&quot; method in iOS; and, with just a
   * little work, it can be easily formatted into a CSS &quot;rgba()&quot;
   * string in JavaScript, as well. Here are some examples:  Example (Java):
   * import com.google.type.Color;       // ...      public static
   * java.awt.Color fromProto(Color protocolor) {        float alpha =
   * protocolor.hasAlpha()            ? protocolor.getAlpha().getValue() : 1.0;
   * return new java.awt.Color(            protocolor.getRed(),
   * protocolor.getGreen(),            protocolor.getBlue(),            alpha);
   * }       public static Color toProto(java.awt.Color color) {        float
   * red = (float) color.getRed();        float green = (float)
   * color.getGreen();        float blue = (float) color.getBlue();        float
   * denominator = 255.0;        Color.Builder resultBuilder =            Color
   * .newBuilder()                .setRed(red / denominator) .setGreen(green /
   * denominator)                .setBlue(blue / denominator);        int alpha
   * = color.getAlpha();        if (alpha != 255) {          result.setAlpha(
   * FloatValue                  .newBuilder() .setValue(((float) alpha) /
   * denominator)                  .build());        }        return
   * resultBuilder.build();      }      // ...  Example (iOS / Obj-C):       //
   * ...      static UIColor* fromProto(Color* protocolor) {         float red =
   * [protocolor red];         float green = [protocolor green];         float
   * blue = [protocolor blue];         FloatValue* alpha_wrapper = [protocolor
   * alpha];         float alpha = 1.0;         if (alpha_wrapper != nil) {
   * alpha = [alpha_wrapper value];         }         return [UIColor
   * colorWithRed:red green:green blue:blue alpha:alpha];      }       static
   * Color* toProto(UIColor* color) {          CGFloat red, green, blue, alpha;
   * if (![color getRed:&amp;red green:&amp;green blue:&amp;blue
   * alpha:&amp;alpha]) {            return nil;          }          Color*
   * result = [Color alloc] init];          [result setRed:red]; [result
   * setGreen:green];          [result setBlue:blue];          if (alpha &lt;=
   * 0.9999) {            [result setAlpha:floatWrapperWithValue(alpha)]; }
   * [result autorelease];          return result;     }     // ...   Example
   * (JavaScript):      // ...      var protoToCssColor = function(rgb_color) {
   * var redFrac = rgb_color.red || 0.0;        var greenFrac = rgb_color.green
   * || 0.0;        var blueFrac = rgb_color.blue || 0.0;        var red =
   * Math.floor(redFrac * 255);        var green = Math.floor(greenFrac * 255);
   * var blue = Math.floor(blueFrac * 255);         if (!(&#39;alpha&#39; in
   * rgb_color)) {           return rgbToCssColor_(red, green, blue);        }
   * var alphaFrac = rgb_color.alpha.value || 0.0;        var rgbParams = [red,
   * green, blue].join(&#39;,&#39;);        return [&#39;rgba(&#39;, rgbParams,
   * &#39;,&#39;, alphaFrac, &#39;)&#39;].join(&#39;&#39;);     };      var
   * rgbToCssColor_ = function(red, green, blue) {       var rgbNumber = new
   * Number((red &lt;&lt; 16) | (green &lt;&lt; 8) | blue);       var hexString
   * = rgbNumber.toString(16);       var missingZeros = 6 - hexString.length;
   * var resultBuilder = [&#39;#&#39;];       for (var i = 0; i &lt;
   * missingZeros; i++) {          resultBuilder.push(&#39;0&#39;);       }
   * resultBuilder.push(hexString);       return resultBuilder.join(&#39;&#39;);
   * };      // ...
   */
  export interface Schema$Color {
    /**
     * The fraction of this color that should be applied to the pixel. That is,
     * the final pixel color is defined by the equation:    pixel color = alpha
     * * (this color) + (1.0 - alpha) * (background color)  This means that a
     * value of 1.0 corresponds to a solid color, whereas a value of 0.0
     * corresponds to a completely transparent color. This uses a wrapper
     * message rather than a simple float scalar so that it is possible to
     * distinguish between a default value and the value being unset. If
     * omitted, this color object is to be rendered as a solid color (as if the
     * alpha value had been explicitly given with a value of 1.0).
     */
    alpha?: number;
    /**
     * The amount of blue in the color as a value in the interval [0, 1].
     */
    blue?: number;
    /**
     * The amount of green in the color as a value in the interval [0, 1].
     */
    green?: number;
    /**
     * The amount of red in the color as a value in the interval [0, 1].
     */
    red?: number;
  }
  /**
   * A rule describing a conditional format.
   */
  export interface Schema$ConditionalFormatRule {
    /**
     * The formatting is either &quot;on&quot; or &quot;off&quot; according to
     * the rule.
     */
    booleanRule?: Schema$BooleanRule;
    /**
     * The formatting will vary based on the gradients in the rule.
     */
    gradientRule?: Schema$GradientRule;
    /**
     * The ranges that are formatted if the condition is true. All the ranges
     * must be on the same grid.
     */
    ranges?: Schema$GridRange[];
  }
  /**
   * The value of the condition.
   */
  export interface Schema$ConditionValue {
    /**
     * A relative date (based on the current date). Valid only if the type is
     * DATE_BEFORE, DATE_AFTER, DATE_ON_OR_BEFORE or DATE_ON_OR_AFTER.  Relative
     * dates are not supported in data validation. They are supported only in
     * conditional formatting and conditional filters.
     */
    relativeDate?: string;
    /**
     * A value the condition is based on. The value is parsed as if the user
     * typed into a cell. Formulas are supported (and must begin with an `=` or
     * a &#39;+&#39;).
     */
    userEnteredValue?: string;
  }
  /**
   * Copies data from the source to the destination.
   */
  export interface Schema$CopyPasteRequest {
    /**
     * The location to paste to. If the range covers a span that&#39;s a
     * multiple of the source&#39;s height or width, then the data will be
     * repeated to fill in the destination range. If the range is smaller than
     * the source range, the entire source data will still be copied (beyond the
     * end of the destination range).
     */
    destination?: Schema$GridRange;
    /**
     * How that data should be oriented when pasting.
     */
    pasteOrientation?: string;
    /**
     * What kind of data to paste.
     */
    pasteType?: string;
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
    destinationSpreadsheetId?: string;
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
     * What kind of data to paste.  All the source data will be cut, regardless
     * of what is pasted.
     */
    pasteType?: string;
    /**
     * The source data to cut.
     */
    source?: Schema$GridRange;
  }
  /**
   * Filter that describes what data should be selected or returned from a
   * request.
   */
  export interface Schema$DataFilter {
    /**
     * Selects data that matches the specified A1 range.
     */
    a1Range?: string;
    /**
     * Selects data associated with the developer metadata matching the criteria
     * described by this DeveloperMetadataLookup.
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
    majorDimension?: string;
    /**
     * The data to be written.  If the provided values exceed any of the ranges
     * matched by the data filter then the request will fail.  If the provided
     * values are less than the matched ranges only the specified values will be
     * written, existing values in the matched ranges will remain unaffected.
     */
    values?: any[][];
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
    inputMessage?: string;
    /**
     * True if the UI should be customized based on the kind of condition. If
     * true, &quot;List&quot; conditions will show a dropdown.
     */
    showCustomUi?: boolean;
    /**
     * True if invalid data should be rejected.
     */
    strict?: boolean;
  }
  /**
   * Allows you to organize the date-time values in a source data column into
   * buckets based on selected parts of their date or time values. For example,
   * consider a pivot table showing sales transactions by date:
   * +----------+--------------+     | Date     | SUM of Sales |
   * +----------+--------------+     | 1/1/2017 |      $621.14 |     | 2/3/2017
   * |      $708.84 |     | 5/8/2017 |      $326.84 |     ...
   * +----------+--------------+ Applying a date-time group rule with a
   * DateTimeRuleType of YEAR_MONTH results in the following pivot table.
   * +--------------+--------------+     | Grouped Date | SUM of Sales |
   * +--------------+--------------+     | 2017-Jan     |   $53,731.78 |     |
   * 2017-Feb     |   $83,475.32 |     | 2017-Mar     |   $94,385.05 |     ...
   * +--------------+--------------+
   */
  export interface Schema$DateTimeRule {
    /**
     * The type of date-time grouping to apply.
     */
    type?: string;
  }
  /**
   * Removes the banded range with the given ID from the spreadsheet.
   */
  export interface Schema$DeleteBandingRequest {
    /**
     * The ID of the banded range to delete.
     */
    bandedRangeId?: number;
  }
  /**
   * Deletes a conditional format rule at the given index. All subsequent
   * rules&#39; indexes are decremented.
   */
  export interface Schema$DeleteConditionalFormatRuleRequest {
    /**
     * The zero-based index of the rule to be deleted.
     */
    index?: number;
    /**
     * The sheet the rule is being deleted from.
     */
    sheetId?: number;
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
   * A request to delete developer metadata.
   */
  export interface Schema$DeleteDeveloperMetadataRequest {
    /**
     * The data filter describing the criteria used to select which developer
     * metadata entry to delete.
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
   * Deletes a group over the specified range by decrementing the depth of the
   * dimensions in the range.  For example, assume the sheet has a depth-1 group
   * over B:E and a depth-2 group over C:D. Deleting a group over D:E leaves the
   * sheet with a depth-1 group over B:D and a depth-2 group over C:C.
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
   * Deletes the dimensions from the sheet.
   */
  export interface Schema$DeleteDimensionRequest {
    /**
     * The dimensions to delete from the sheet.
     */
    range?: Schema$DimensionRange;
  }
  /**
   * Deletes the embedded object with the given ID.
   */
  export interface Schema$DeleteEmbeddedObjectRequest {
    /**
     * The ID of the embedded object to delete.
     */
    objectId?: number;
  }
  /**
   * Deletes a particular filter view.
   */
  export interface Schema$DeleteFilterViewRequest {
    /**
     * The ID of the filter to delete.
     */
    filterId?: number;
  }
  /**
   * Removes the named range with the given ID from the spreadsheet.
   */
  export interface Schema$DeleteNamedRangeRequest {
    /**
     * The ID of the named range to delete.
     */
    namedRangeId?: string;
  }
  /**
   * Deletes the protected range with the given ID.
   */
  export interface Schema$DeleteProtectedRangeRequest {
    /**
     * The ID of the protected range to delete.
     */
    protectedRangeId?: number;
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
     * The dimension from which deleted cells will be replaced with. If ROWS,
     * existing cells will be shifted upward to replace the deleted cells. If
     * COLUMNS, existing cells will be shifted left to replace the deleted
     * cells.
     */
    shiftDimension?: string;
  }
  /**
   * Deletes the requested sheet.
   */
  export interface Schema$DeleteSheetRequest {
    /**
     * The ID of the sheet to delete.
     */
    sheetId?: number;
  }
  /**
   * Developer metadata associated with a location or object in a spreadsheet.
   * Developer metadata may be used to associate arbitrary data with various
   * parts of a spreadsheet and will remain associated at those locations as
   * they move around and the spreadsheet is edited.  For example, if developer
   * metadata is associated with row 5 and another row is then subsequently
   * inserted above row 5, that original metadata will still be associated with
   * the row it was first associated with (what is now row 6). If the associated
   * object is deleted its metadata is deleted too.
   */
  export interface Schema$DeveloperMetadata {
    /**
     * The location where the metadata is associated.
     */
    location?: Schema$DeveloperMetadataLocation;
    /**
     * The spreadsheet-scoped unique ID that identifies the metadata. IDs may be
     * specified when metadata is created, otherwise one will be randomly
     * generated and assigned. Must be positive.
     */
    metadataId?: number;
    /**
     * The metadata key. There may be multiple metadata in a spreadsheet with
     * the same key.  Developer metadata must always have a key specified.
     */
    metadataKey?: string;
    /**
     * Data associated with the metadata&#39;s key.
     */
    metadataValue?: string;
    /**
     * The metadata visibility.  Developer metadata must always have a
     * visibility specified.
     */
    visibility?: string;
  }
  /**
   * A location where metadata may be associated in a spreadsheet.
   */
  export interface Schema$DeveloperMetadataLocation {
    /**
     * Represents the row or column when metadata is associated with a
     * dimension. The specified DimensionRange must represent a single row or
     * column; it cannot be unbounded or span multiple rows or columns.
     */
    dimensionRange?: Schema$DimensionRange;
    /**
     * The type of location this object represents.  This field is read-only.
     */
    locationType?: string;
    /**
     * The ID of the sheet when metadata is associated with an entire sheet.
     */
    sheetId?: number;
    /**
     * True when metadata is associated with an entire spreadsheet.
     */
    spreadsheet?: boolean;
  }
  /**
   * Selects DeveloperMetadata that matches all of the specified fields.  For
   * example, if only a metadata ID is specified this considers the
   * DeveloperMetadata with that particular unique ID. If a metadata key is
   * specified, this considers all developer metadata with that key.  If a key,
   * visibility, and location type are all specified, this considers all
   * developer metadata with that key and visibility that are associated with a
   * location of that type.  In general, this selects all DeveloperMetadata that
   * matches the intersection of all the specified fields; any field or
   * combination of fields may be specified.
   */
  export interface Schema$DeveloperMetadataLookup {
    /**
     * Determines how this lookup matches the location.  If this field is
     * specified as EXACT, only developer metadata associated on the exact
     * location specified is matched.  If this field is specified to
     * INTERSECTING, developer metadata associated on intersecting locations is
     * also matched.  If left unspecified, this field assumes a default value of
     * INTERSECTING. If this field is specified, a metadataLocation must also be
     * specified.
     */
    locationMatchingStrategy?: string;
    /**
     * Limits the selected developer metadata to those entries which are
     * associated with locations of the specified type.  For example, when this
     * field is specified as ROW this lookup only considers developer metadata
     * associated on rows.  If the field is left unspecified, all location types
     * are considered.  This field cannot be specified as SPREADSHEET when the
     * locationMatchingStrategy is specified as INTERSECTING or when the
     * metadataLocation is specified as a non-spreadsheet location: spreadsheet
     * metadata cannot intersect any other developer metadata location.  This
     * field also must be left unspecified when the locationMatchingStrategy is
     * specified as EXACT.
     */
    locationType?: string;
    /**
     * Limits the selected developer metadata to that which has a matching
     * DeveloperMetadata.metadata_id.
     */
    metadataId?: number;
    /**
     * Limits the selected developer metadata to that which has a matching
     * DeveloperMetadata.metadata_key.
     */
    metadataKey?: string;
    /**
     * Limits the selected developer metadata to those entries associated with
     * the specified location.  This field either matches exact locations or all
     * intersecting locations according the specified locationMatchingStrategy.
     */
    metadataLocation?: Schema$DeveloperMetadataLocation;
    /**
     * Limits the selected developer metadata to that which has a matching
     * DeveloperMetadata.metadata_value.
     */
    metadataValue?: string;
    /**
     * Limits the selected developer metadata to that which has a matching
     * DeveloperMetadata.visibility.  If left unspecified, all developer
     * metadata visibile to the requesting project is considered.
     */
    visibility?: string;
  }
  /**
   * A group over an interval of rows or columns on a sheet, which can contain
   * or be contained within other groups. A group can be collapsed or expanded
   * as a unit on the sheet.
   */
  export interface Schema$DimensionGroup {
    /**
     * This field is true if this group is collapsed. A collapsed group remains
     * collapsed if an overlapping group at a shallower depth is expanded.  A
     * true value does not imply that all dimensions within the group are
     * hidden, since a dimension&#39;s visibility can change independently from
     * this group property. However, when this property is updated, all
     * dimensions within it are set to hidden if this field is true, or set to
     * visible if this field is false.
     */
    collapsed?: boolean;
    /**
     * The depth of the group, representing how many groups have a range that
     * wholly contains the range of this group.
     */
    depth?: number;
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
     * The developer metadata associated with a single row or column.
     */
    developerMetadata?: Schema$DeveloperMetadata[];
    /**
     * True if this dimension is being filtered. This field is read-only.
     */
    hiddenByFilter?: boolean;
    /**
     * True if this dimension is explicitly hidden.
     */
    hiddenByUser?: boolean;
    /**
     * The height (if a row) or width (if a column) of the dimension in pixels.
     */
    pixelSize?: number;
  }
  /**
   * A range along a single dimension on a sheet. All indexes are zero-based.
   * Indexes are half open: the start index is inclusive and the end index is
   * exclusive. Missing indexes indicate the range is unbounded on that side.
   */
  export interface Schema$DimensionRange {
    /**
     * The dimension of the span.
     */
    dimension?: string;
    /**
     * The end (exclusive) of the span, or not set if unbounded.
     */
    endIndex?: number;
    /**
     * The sheet this span is on.
     */
    sheetId?: number;
    /**
     * The start (inclusive) of the span, or not set if unbounded.
     */
    startIndex?: number;
  }
  /**
   * Duplicates a particular filter view.
   */
  export interface Schema$DuplicateFilterViewRequest {
    /**
     * The ID of the filter being duplicated.
     */
    filterId?: number;
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
     * The zero-based index where the new sheet should be inserted. The index of
     * all sheets after this are incremented.
     */
    insertSheetIndex?: number;
    /**
     * If set, the ID of the new sheet. If not set, an ID is chosen. If set, the
     * ID must not conflict with any existing sheet ID. If set, it must be
     * non-negative.
     */
    newSheetId?: number;
    /**
     * The name of the new sheet.  If empty, a new name is chosen for you.
     */
    newSheetName?: string;
    /**
     * The sheet to duplicate.
     */
    sourceSheetId?: number;
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
     * True if anyone in the document&#39;s domain has edit access to the
     * protected range.  Domain protection is only supported on documents within
     * a domain.
     */
    domainUsersCanEdit?: boolean;
    /**
     * The email addresses of groups with edit access to the protected range.
     */
    groups?: string[];
    /**
     * The email addresses of users with edit access to the protected range.
     */
    users?: string[];
  }
  /**
   * A chart embedded in a sheet.
   */
  export interface Schema$EmbeddedChart {
    /**
     * The ID of the chart.
     */
    chartId?: number;
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
   * The position of an embedded object such as a chart.
   */
  export interface Schema$EmbeddedObjectPosition {
    /**
     * If true, the embedded object is put on a new sheet whose ID is chosen for
     * you. Used only when writing.
     */
    newSheet?: boolean;
    /**
     * The position at which the object is overlaid on top of a grid.
     */
    overlayPosition?: Schema$OverlayPosition;
    /**
     * The sheet this is on. Set only if the embedded object is on its own
     * sheet. Must be non-negative.
     */
    sheetId?: number;
  }
  /**
   * An error in a cell.
   */
  export interface Schema$ErrorValue {
    /**
     * A message with more information about the error (in the spreadsheet&#39;s
     * locale).
     */
    message?: string;
    /**
     * The type of error.
     */
    type?: string;
  }
  /**
   * The kinds of value that a cell in a spreadsheet can have.
   */
  export interface Schema$ExtendedValue {
    /**
     * Represents a boolean value.
     */
    boolValue?: boolean;
    /**
     * Represents an error. This field is read-only.
     */
    errorValue?: Schema$ErrorValue;
    /**
     * Represents a formula.
     */
    formulaValue?: string;
    /**
     * Represents a double value. Note: Dates, Times and DateTimes are
     * represented as doubles in &quot;serial number&quot; format.
     */
    numberValue?: number;
    /**
     * Represents a string value. Leading single quotes are not included. For
     * example, if the user typed `&#39;123` into the UI, this would be
     * represented as a `stringValue` of `&quot;123&quot;`.
     */
    stringValue?: string;
  }
  /**
   * Criteria for showing/hiding rows in a filter or filter view.
   */
  export interface Schema$FilterCriteria {
    /**
     * A condition that must be true for values to be shown. (This does not
     * override hiddenValues -- if a value is listed there,  it will still be
     * hidden.)
     */
    condition?: Schema$BooleanCondition;
    /**
     * Values that should be hidden.
     */
    hiddenValues?: string[];
  }
  /**
   * A filter view.
   */
  export interface Schema$FilterView {
    /**
     * The criteria for showing/hiding values per column. The map&#39;s key is
     * the column index, and the value is the criteria for that column.
     */
    criteria?: any;
    /**
     * The ID of the filter view.
     */
    filterViewId?: number;
    /**
     * The named range this filter view is backed by, if any.  When writing,
     * only one of range or named_range_id may be set.
     */
    namedRangeId?: string;
    /**
     * The range this filter view covers.  When writing, only one of range or
     * named_range_id may be set.
     */
    range?: Schema$GridRange;
    /**
     * The sort order per column. Later specifications are used when values are
     * equal in the earlier specifications.
     */
    sortSpecs?: Schema$SortSpec[];
    /**
     * The name of the filter view.
     */
    title?: string;
  }
  /**
   * Finds and replaces data in cells over a range, sheet, or all sheets.
   */
  export interface Schema$FindReplaceRequest {
    /**
     * True to find/replace over all sheets.
     */
    allSheets?: boolean;
    /**
     * The value to search.
     */
    find?: string;
    /**
     * True if the search should include cells with formulas. False to skip
     * cells with formulas.
     */
    includeFormulas?: boolean;
    /**
     * True if the search is case sensitive.
     */
    matchCase?: boolean;
    /**
     * True if the find value should match the entire cell.
     */
    matchEntireCell?: boolean;
    /**
     * The range to find/replace over.
     */
    range?: Schema$GridRange;
    /**
     * The value to use as the replacement.
     */
    replacement?: string;
    /**
     * True if the find value is a regex. The regular expression and replacement
     * should follow Java regex rules at
     * https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html.
     * The replacement string is allowed to refer to capturing groups. For
     * example, if one cell has the contents `&quot;Google Sheets&quot;` and
     * another has `&quot;Google Docs&quot;`, then searching for `&quot;o.*
     * (.*)&quot;` with a replacement of `&quot;$1 Rocks&quot;` would change the
     * contents of the cells to `&quot;GSheets Rocks&quot;` and `&quot;GDocs
     * Rocks&quot;` respectively.
     */
    searchByRegex?: boolean;
    /**
     * The sheet to find/replace over.
     */
    sheetId?: number;
  }
  /**
   * The result of the find/replace.
   */
  export interface Schema$FindReplaceResponse {
    /**
     * The number of formula cells changed.
     */
    formulasChanged?: number;
    /**
     * The number of occurrences (possibly multiple within a cell) changed. For
     * example, if replacing `&quot;e&quot;` with `&quot;o&quot;` in
     * `&quot;Google Sheets&quot;`, this would be `&quot;3&quot;` because
     * `&quot;Google Sheets&quot;` -&gt; `&quot;Googlo Shoots&quot;`.
     */
    occurrencesChanged?: number;
    /**
     * The number of rows changed.
     */
    rowsChanged?: number;
    /**
     * The number of sheets changed.
     */
    sheetsChanged?: number;
    /**
     * The number of non-formula cells changed.
     */
    valuesChanged?: number;
  }
  /**
   * The request for retrieving a Spreadsheet.
   */
  export interface Schema$GetSpreadsheetByDataFilterRequest {
    /**
     * The DataFilters used to select which ranges to retrieve from the
     * spreadsheet.
     */
    dataFilters?: Schema$DataFilter[];
    /**
     * True if grid data should be returned. This parameter is ignored if a
     * field mask was set in the request.
     */
    includeGridData?: boolean;
  }
  /**
   * A rule that applies a gradient color scale format, based on the
   * interpolation points listed. The format of a cell will vary based on its
   * contents as compared to the values of the interpolation points.
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
    columnIndex?: number;
    /**
     * The row index of the coordinate.
     */
    rowIndex?: number;
    /**
     * The sheet this coordinate is on.
     */
    sheetId?: number;
  }
  /**
   * Data in the grid, as well as metadata about the dimensions.
   */
  export interface Schema$GridData {
    /**
     * Metadata about the requested columns in the grid, starting with the
     * column in start_column.
     */
    columnMetadata?: Schema$DimensionProperties[];
    /**
     * The data in the grid, one entry per row, starting with the row in
     * startRow. The values in RowData will correspond to columns starting at
     * start_column.
     */
    rowData?: Schema$RowData[];
    /**
     * Metadata about the requested rows in the grid, starting with the row in
     * start_row.
     */
    rowMetadata?: Schema$DimensionProperties[];
    /**
     * The first column this GridData refers to, zero-based.
     */
    startColumn?: number;
    /**
     * The first row this GridData refers to, zero-based.
     */
    startRow?: number;
  }
  /**
   * Properties of a grid.
   */
  export interface Schema$GridProperties {
    /**
     * The number of columns in the grid.
     */
    columnCount?: number;
    /**
     * True if the column grouping control toggle is shown after the group.
     */
    columnGroupControlAfter?: boolean;
    /**
     * The number of columns that are frozen in the grid.
     */
    frozenColumnCount?: number;
    /**
     * The number of rows that are frozen in the grid.
     */
    frozenRowCount?: number;
    /**
     * True if the grid isn&#39;t showing gridlines in the UI.
     */
    hideGridlines?: boolean;
    /**
     * The number of rows in the grid.
     */
    rowCount?: number;
    /**
     * True if the row grouping control toggle is shown after the group.
     */
    rowGroupControlAfter?: boolean;
  }
  /**
   * A range on a sheet. All indexes are zero-based. Indexes are half open, e.g
   * the start index is inclusive and the end index is exclusive --
   * [start_index, end_index). Missing indexes indicate the range is unbounded
   * on that side.  For example, if `&quot;Sheet1&quot;` is sheet ID 0, then:
   * `Sheet1!A1:A1 == sheet_id: 0,                   start_row_index: 0,
   * end_row_index: 1,                   start_column_index: 0,
   * end_column_index: 1`    `Sheet1!A3:B4 == sheet_id: 0, start_row_index: 2,
   * end_row_index: 4,                   start_column_index: 0,
   * end_column_index: 2`    `Sheet1!A:B == sheet_id: 0, start_column_index: 0,
   * end_column_index: 2`    `Sheet1!A5:B == sheet_id: 0, start_row_index: 4,
   * start_column_index: 0, end_column_index: 2`    `Sheet1 == sheet_id:0`  The
   * start index must always be less than or equal to the end index. If the
   * start index equals the end index, then the range is empty. Empty ranges are
   * typically not meaningful and are usually rendered in the UI as `#REF!`.
   */
  export interface Schema$GridRange {
    /**
     * The end column (exclusive) of the range, or not set if unbounded.
     */
    endColumnIndex?: number;
    /**
     * The end row (exclusive) of the range, or not set if unbounded.
     */
    endRowIndex?: number;
    /**
     * The sheet this range is on.
     */
    sheetId?: number;
    /**
     * The start column (inclusive) of the range, or not set if unbounded.
     */
    startColumnIndex?: number;
    /**
     * The start row (inclusive) of the range, or not set if unbounded.
     */
    startRowIndex?: number;
  }
  /**
   * A &lt;a
   * href=&quot;/chart/interactive/docs/gallery/histogram&quot;&gt;histogram
   * chart&lt;/a&gt;. A histogram chart groups data items into bins, displaying
   * each bin as a column of stacked items.  Histograms are used to display the
   * distribution of a dataset.  Each column of items represents a range into
   * which those items fall.  The number of bins can be chosen automatically or
   * specified explicitly.
   */
  export interface Schema$HistogramChartSpec {
    /**
     * By default the bucket size (the range of values stacked in a single
     * column) is chosen automatically, but it may be overridden here. E.g., A
     * bucket size of 1.5 results in buckets from 0 - 1.5, 1.5 - 3.0, etc.
     * Cannot be negative. This field is optional.
     */
    bucketSize?: number;
    /**
     * The position of the chart legend.
     */
    legendPosition?: string;
    /**
     * The outlier percentile is used to ensure that outliers do not adversely
     * affect the calculation of bucket sizes.  For example, setting an outlier
     * percentile of 0.05 indicates that the top and bottom 5% of values when
     * calculating buckets.  The values are still included in the chart, they
     * will be added to the first or last buckets instead of their own buckets.
     * Must be between 0.0 and 0.5.
     */
    outlierPercentile?: number;
    /**
     * The series for a histogram may be either a single series of values to be
     * bucketed or multiple series, each of the same length, containing the name
     * of the series followed by the values to be bucketed for that series.
     */
    series?: Schema$HistogramSeries[];
    /**
     * Whether horizontal divider lines should be displayed between items in
     * each column.
     */
    showItemDividers?: boolean;
  }
  /**
   * Allows you to organize the numeric values in a source data column into
   * buckets of a constant size. All values from HistogramRule.start to
   * HistogramRule.end are placed into groups of size HistogramRule.interval. In
   * addition, all values below HistogramRule.start are placed in one group, and
   * all values above HistogramRule.end are placed in another. Only
   * HistogramRule.interval is required, though if HistogramRule.start and
   * HistogramRule.end are both provided, HistogramRule.start must be less than
   * HistogramRule.end. For example, a pivot table showing average purchase
   * amount by age that has 50+ rows:      +-----+-------------------+     | Age
   * | AVERAGE of Amount |     +-----+-------------------+     | 16  | $27.13 |
   * | 17  |             $5.24 |     | 18  |            $20.15 |     ...
   * +-----+-------------------+ could be turned into a pivot table that looks
   * like the one below by applying a histogram group rule with a
   * HistogramRule.start of 25, an HistogramRule.interval of 20, and an
   * HistogramRule.end of 65.      +-------------+-------------------+     |
   * Grouped Age | AVERAGE of Amount |     +-------------+-------------------+
   * | &lt; 25        |            $19.34 |     | 25-45       | $31.43 |     |
   * 45-65       |            $35.87 |     | &gt; 65        |            $27.55
   * |     +-------------+-------------------+     | Grand Total | $29.12 |
   * +-------------+-------------------+
   */
  export interface Schema$HistogramRule {
    /**
     * The maximum value at which items are placed into buckets of constant
     * size. Values above end are lumped into a single bucket. This field is
     * optional.
     */
    end?: number;
    /**
     * The size of the buckets that are created. Must be positive.
     */
    interval?: number;
    /**
     * The minimum value at which items are placed into buckets of constant
     * size. Values below start are lumped into a single bucket. This field is
     * optional.
     */
    start?: number;
  }
  /**
   * A histogram series containing the series color and data.
   */
  export interface Schema$HistogramSeries {
    /**
     * The color of the column representing this series in each bucket. This
     * field is optional.
     */
    barColor?: Schema$Color;
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
     * Whether dimension properties should be extended from the dimensions
     * before or after the newly inserted dimensions. True to inherit from the
     * dimensions before (in which case the start index must be greater than 0),
     * and false to inherit from the dimensions after.  For example, if row
     * index 0 has red background and row index 1 has a green background, then
     * inserting 2 rows at index 1 can inherit either the green or red
     * background.  If `inheritFromBefore` is true, the two new rows will be red
     * (because the row before the insertion point was red), whereas if
     * `inheritFromBefore` is false, the two new rows will be green (because the
     * row after the insertion point was green).
     */
    inheritFromBefore?: boolean;
    /**
     * The dimensions to insert.  Both the start and end indexes must be
     * bounded.
     */
    range?: Schema$DimensionRange;
  }
  /**
   * Inserts cells into a range, shifting the existing cells over or down.
   */
  export interface Schema$InsertRangeRequest {
    /**
     * The range to insert new cells into.
     */
    range?: Schema$GridRange;
    /**
     * The dimension which will be shifted when inserting cells. If ROWS,
     * existing cells will be shifted down. If COLUMNS, existing cells will be
     * shifted right.
     */
    shiftDimension?: string;
  }
  /**
   * A single interpolation point on a gradient conditional format. These pin
   * the gradient color scale according to the color, type and value chosen.
   */
  export interface Schema$InterpolationPoint {
    /**
     * The color this interpolation point should use.
     */
    color?: Schema$Color;
    /**
     * How the value should be interpreted.
     */
    type?: string;
    /**
     * The value this interpolation point uses.  May be a formula. Unused if
     * type is MIN or MAX.
     */
    value?: string;
  }
  /**
   * Settings to control how circular dependencies are resolved with iterative
   * calculation.
   */
  export interface Schema$IterativeCalculationSettings {
    /**
     * When iterative calculation is enabled and successive results differ by
     * less than this threshold value, the calculation rounds stop.
     */
    convergenceThreshold?: number;
    /**
     * When iterative calculation is enabled, the maximum number of calculation
     * rounds to perform.
     */
    maxIterations?: number;
  }
  /**
   * Properties that describe the style of a line.
   */
  export interface Schema$LineStyle {
    /**
     * The dash type of the line.
     */
    type?: string;
    /**
     * The thickness of the line, in px.
     */
    width?: number;
  }
  /**
   * Allows you to manually organize the values in a source data column into
   * buckets with names of your choosing. For example, a pivot table that
   * aggregates population by state:      +-------+-------------------+     |
   * State | SUM of Population |     +-------+-------------------+     | AK    |
   * 0.7 |     | AL    |               4.8 |     | AR    |               2.9 |
   * ...     +-------+-------------------+ could be turned into a pivot table
   * that aggregates population by time zone by providing a list of groups (for
   * example, groupName = &#39;Central&#39;, items = [&#39;AL&#39;,
   * &#39;AR&#39;, &#39;IA&#39;, ...]) to a manual group rule. Note that a
   * similar effect could be achieved by adding a time zone column to the source
   * data and adjusting the pivot table.      +-----------+-------------------+
   * | Time Zone | SUM of Population |     +-----------+-------------------+ |
   * Central   |             106.3 |     | Eastern   |             151.9 |     |
   * Mountain  |              17.4 |     ... +-----------+-------------------+
   */
  export interface Schema$ManualRule {
    /**
     * The list of group names and the corresponding items from the source data
     * that map to each group name.
     */
    groups?: Schema$ManualRuleGroup[];
  }
  /**
   * A group name and a list of items from the source data that should be placed
   * in the group with this name.
   */
  export interface Schema$ManualRuleGroup {
    /**
     * The group name, which must be a string. Each group in a given ManualRule
     * must have a unique group name.
     */
    groupName?: Schema$ExtendedValue;
    /**
     * The items in the source data that should be placed into this group. Each
     * item may be a string, number, or boolean. Items may appear in at most one
     * group within a given ManualRule. Items that do not appear in any group
     * will appear on their own.
     */
    items?: Schema$ExtendedValue[];
  }
  /**
   * A developer metadata entry and the data filters specified in the original
   * request that matched it.
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
    mergeType?: string;
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
     * The zero-based start index of where to move the source data to, based on
     * the coordinates *before* the source data is removed from the grid.
     * Existing data will be shifted down or right (depending on the dimension)
     * to make room for the moved dimensions. The source dimensions are removed
     * from the grid, so the the data may end up in a different index than
     * specified.  For example, given `A1..A5` of `0, 1, 2, 3, 4` and wanting to
     * move `&quot;1&quot;` and `&quot;2&quot;` to between `&quot;3&quot;` and
     * `&quot;4&quot;`, the source would be `ROWS [1..3)`,and the destination
     * index would be `&quot;4&quot;` (the zero-based index of row 5). The end
     * result would be `A1..A5` of `0, 3, 1, 2, 4`.
     */
    destinationIndex?: number;
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
    name?: string;
    /**
     * The ID of the named range.
     */
    namedRangeId?: string;
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
     * Pattern string used for formatting.  If not set, a default pattern based
     * on the user&#39;s locale will be used if necessary for the given type.
     * See the [Date and Number Formats guide](/sheets/api/guides/formats) for
     * more information about the supported patterns.
     */
    pattern?: string;
    /**
     * The type of the number format. When writing, this field must be set.
     */
    type?: string;
  }
  /**
   * An &lt;a href=&quot;/chart/interactive/docs/gallery/orgchart&quot;&gt;org
   * chart&lt;/a&gt;. Org charts require a unique set of labels in labels and
   * may optionally include parent_labels and tooltips. parent_labels contain,
   * for each node, the label identifying the parent node.  tooltips contain,
   * for each node, an optional tooltip.  For example, to describe an OrgChart
   * with Alice as the CEO, Bob as the President (reporting to Alice) and Cathy
   * as VP of Sales (also reporting to Alice), have labels contain
   * &quot;Alice&quot;, &quot;Bob&quot;, &quot;Cathy&quot;, parent_labels
   * contain &quot;&quot;, &quot;Alice&quot;, &quot;Alice&quot; and tooltips
   * contain &quot;CEO&quot;, &quot;President&quot;, &quot;VP Sales&quot;.
   */
  export interface Schema$OrgChartSpec {
    /**
     * The data containing the labels for all the nodes in the chart.  Labels
     * must be unique.
     */
    labels?: Schema$ChartData;
    /**
     * The color of the org chart nodes.
     */
    nodeColor?: Schema$Color;
    /**
     * The size of the org chart nodes.
     */
    nodeSize?: string;
    /**
     * The data containing the label of the parent for the corresponding node. A
     * blank value indicates that the node has no parent and is a top-level
     * node. This field is optional.
     */
    parentLabels?: Schema$ChartData;
    /**
     * The color of the selected org chart nodes.
     */
    selectedNodeColor?: Schema$Color;
    /**
     * The data containing the tooltip for the corresponding node.  A blank
     * value results in no tooltip being displayed for the node. This field is
     * optional.
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
    heightPixels?: number;
    /**
     * The horizontal offset, in pixels, that the object is offset from the
     * anchor cell.
     */
    offsetXPixels?: number;
    /**
     * The vertical offset, in pixels, that the object is offset from the anchor
     * cell.
     */
    offsetYPixels?: number;
    /**
     * The width of the object, in pixels. Defaults to 600.
     */
    widthPixels?: number;
  }
  /**
   * The amount of padding around the cell, in pixels. When updating padding,
   * every field must be specified.
   */
  export interface Schema$Padding {
    /**
     * The bottom padding of the cell.
     */
    bottom?: number;
    /**
     * The left padding of the cell.
     */
    left?: number;
    /**
     * The right padding of the cell.
     */
    right?: number;
    /**
     * The top padding of the cell.
     */
    top?: number;
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
    data?: string;
    /**
     * The delimiter in the data.
     */
    delimiter?: string;
    /**
     * True if the data is HTML.
     */
    html?: boolean;
    /**
     * How the data should be pasted.
     */
    type?: string;
  }
  /**
   * A &lt;a href=&quot;/chart/interactive/docs/gallery/piechart&quot;&gt;pie
   * chart&lt;/a&gt;.
   */
  export interface Schema$PieChartSpec {
    /**
     * The data that covers the domain of the pie chart.
     */
    domain?: Schema$ChartData;
    /**
     * Where the legend of the pie chart should be drawn.
     */
    legendPosition?: string;
    /**
     * The size of the hole in the pie chart.
     */
    pieHole?: number;
    /**
     * The data that covers the one and only series of the pie chart.
     */
    series?: Schema$ChartData;
    /**
     * True if the pie is three dimensional.
     */
    threeDimensional?: boolean;
  }
  /**
   * Criteria for showing/hiding rows in a pivot table.
   */
  export interface Schema$PivotFilterCriteria {
    /**
     * Values that should be included.  Values not listed here are excluded.
     */
    visibleValues?: string[];
  }
  /**
   * A single grouping (either row or column) in a pivot table.
   */
  export interface Schema$PivotGroup {
    /**
     * The group rule to apply to this row/column group.
     */
    groupRule?: Schema$PivotGroupRule;
    /**
     * The labels to use for the row/column groups which can be customized. For
     * example, in the following pivot table, the row label is `Region` (which
     * could be renamed to `State`) and the column label is `Product` (which
     * could be renamed `Item`). Pivot tables created before December 2017 do
     * not have header labels. If you&#39;d like to add header labels to an
     * existing pivot table, please delete the existing pivot table and then
     * create a new pivot table with same parameters.
     * +--------------+---------+-------+     | SUM of Units | Product |       |
     * | Region       | Pen     | Paper |     +--------------+---------+-------+
     * | New York     |     345 |    98 |     | Oregon       |     234 |   123 |
     * | Tennessee    |     531 |   415 |     +--------------+---------+-------+
     * | Grand Total  |    1110 |   636 |     +--------------+---------+-------+
     */
    label?: string;
    /**
     * True if the headings in this pivot group should be repeated. This is only
     * valid for row groupings and is ignored by columns.  By default, we
     * minimize repitition of headings by not showing higher level headings
     * where they are the same. For example, even though the third row below
     * corresponds to &quot;Q1 Mar&quot;, &quot;Q1&quot; is not shown because it
     * is redundant with previous rows. Setting repeat_headings to true would
     * cause &quot;Q1&quot; to be repeated for &quot;Feb&quot; and
     * &quot;Mar&quot;.      +--------------+     | Q1     | Jan |     | | Feb |
     * |        | Mar |     +--------+-----+     | Q1 Total     |
     * +--------------+
     */
    repeatHeadings?: boolean;
    /**
     * True if the pivot table should include the totals for this grouping.
     */
    showTotals?: boolean;
    /**
     * The order the values in this group should be sorted.
     */
    sortOrder?: string;
    /**
     * The column offset of the source range that this grouping is based on. For
     * example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means
     * this group refers to column `C`, whereas the offset `1` would refer to
     * column `D`.
     */
    sourceColumnOffset?: number;
    /**
     * The bucket of the opposite pivot group to sort by. If not specified,
     * sorting is alphabetical by this group&#39;s values.
     */
    valueBucket?: Schema$PivotGroupSortValueBucket;
    /**
     * Metadata about values in the grouping.
     */
    valueMetadata?: Schema$PivotGroupValueMetadata[];
  }
  /**
   * An optional setting on a PivotGroup that defines buckets for the values in
   * the source data column rather than breaking out each individual value. Only
   * one PivotGroup with a group rule may be added for each column in the source
   * data, though on any given column you may add both a PivotGroup that has a
   * rule and a PivotGroup that does not.
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
     * Determines the bucket from which values are chosen to sort.  For example,
     * in a pivot table with one row group &amp; two column groups, the row
     * group can list up to two values. The first value corresponds to a value
     * within the first column group, and the second value corresponds to a
     * value in the second column group.  If no values are listed, this would
     * indicate that the row should be sorted according to the &quot;Grand
     * Total&quot; over the column groups. If a single value is listed, this
     * would correspond to using the &quot;Total&quot; of that bucket.
     */
    buckets?: Schema$ExtendedValue[];
    /**
     * The offset in the PivotTable.values list which the values in this
     * grouping should be sorted by.
     */
    valuesIndex?: number;
  }
  /**
   * Metadata about a value in a pivot grouping.
   */
  export interface Schema$PivotGroupValueMetadata {
    /**
     * True if the data corresponding to the value is collapsed.
     */
    collapsed?: boolean;
    /**
     * The calculated value the metadata corresponds to. (Note that formulaValue
     * is not valid,  because the values will be calculated.)
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
     * An optional mapping of filters per source column offset.  The filters are
     * applied before aggregating data into the pivot table. The map&#39;s key
     * is the column offset of the source range that you want to filter, and the
     * value is the criteria for that column.  For example, if the source was
     * `C10:E15`, a key of `0` will have the filter for column `C`, whereas the
     * key `1` is for column `D`.
     */
    criteria?: any;
    /**
     * Each row grouping in the pivot table.
     */
    rows?: Schema$PivotGroup[];
    /**
     * The range the pivot table is reading data from.
     */
    source?: Schema$GridRange;
    /**
     * Whether values should be listed horizontally (as columns) or vertically
     * (as rows).
     */
    valueLayout?: string;
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
     * If specified, indicates that pivot values should be displayed as the
     * result of a calculation with another pivot value. For example, if
     * calculated_display_type is specified as PERCENT_OF_GRAND_TOTAL, all the
     * pivot values are displayed as the percentage of the grand total. In the
     * Sheets UI, this is referred to as &quot;Show As&quot; in the value
     * section of a pivot table.
     */
    calculatedDisplayType?: string;
    /**
     * A custom formula to calculate the value.  The formula must start with an
     * `=` character.
     */
    formula?: string;
    /**
     * A name to use for the value.
     */
    name?: string;
    /**
     * The column offset of the source range that this value reads from.  For
     * example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means
     * this value refers to column `C`, whereas the offset `1` would refer to
     * column `D`.
     */
    sourceColumnOffset?: number;
    /**
     * A function to summarize the value. If formula is set, the only supported
     * values are SUM and CUSTOM. If sourceColumnOffset is set, then `CUSTOM` is
     * not supported.
     */
    summarizeFunction?: string;
  }
  /**
   * A protected range.
   */
  export interface Schema$ProtectedRange {
    /**
     * The description of this protected range.
     */
    description?: string;
    /**
     * The users and groups with edit access to the protected range. This field
     * is only visible to users with edit access to the protected range and the
     * document. Editors are not supported with warning_only protection.
     */
    editors?: Schema$Editors;
    /**
     * The named range this protected range is backed by, if any.  When writing,
     * only one of range or named_range_id may be set.
     */
    namedRangeId?: string;
    /**
     * The ID of the protected range. This field is read-only.
     */
    protectedRangeId?: number;
    /**
     * The range that is being protected. The range may be fully unbounded, in
     * which case this is considered a protected sheet.  When writing, only one
     * of range or named_range_id may be set.
     */
    range?: Schema$GridRange;
    /**
     * True if the user who requested this protected range can edit the
     * protected area. This field is read-only.
     */
    requestingUserCanEdit?: boolean;
    /**
     * The list of unprotected ranges within a protected sheet. Unprotected
     * ranges are only supported on protected sheets.
     */
    unprotectedRanges?: Schema$GridRange[];
    /**
     * True if this protected range will show a warning when editing.
     * Warning-based protection means that every user can edit data in the
     * protected range, except editing will prompt a warning asking the user to
     * confirm the edit.  When writing: if this field is true, then editors is
     * ignored. Additionally, if this field is changed from true to false and
     * the `editors` field is not set (nor included in the field mask), then the
     * editors will be set to all the editors in the document.
     */
    warningOnly?: boolean;
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
   * Updates all cells in the range to the values in the given Cell object. Only
   * the fields listed in the fields field are updated; others are unchanged. If
   * writing a cell with a formula, the formula&#39;s ranges will automatically
   * increment for each field in the range. For example, if writing a cell with
   * formula `=A1` into range B2:C4, B2 would be `=A1`, B3 would be `=A2`, B4
   * would be `=A3`, C2 would be `=B1`, C3 would be `=B2`, C4 would be `=B3`. To
   * keep the formula&#39;s ranges static, use the `$` indicator. For example,
   * use the formula `=$A$1` to prevent both the row and the column from
   * incrementing.
   */
  export interface Schema$RepeatCellRequest {
    /**
     * The data to write.
     */
    cell?: Schema$CellData;
    /**
     * The fields that should be updated.  At least one field must be specified.
     * The root `cell` is implied and should not be specified. A single
     * `&quot;*&quot;` can be used as short-hand for listing every field.
     */
    fields?: string;
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
     * Automatically resizes one or more dimensions based on the contents of the
     * cells in that dimension.
     */
    autoResizeDimensions?: Schema$AutoResizeDimensionsRequest;
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
     * Updates a chart&#39;s specifications.
     */
    updateChartSpec?: Schema$UpdateChartSpecRequest;
    /**
     * Updates an existing conditional format rule.
     */
    updateConditionalFormatRule?: Schema$UpdateConditionalFormatRuleRequest;
    /**
     * Updates an existing developer metadata entry
     */
    updateDeveloperMetadata?: Schema$UpdateDeveloperMetadataRequest;
    /**
     * Updates the state of the specified group.
     */
    updateDimensionGroup?: Schema$UpdateDimensionGroupRequest;
    /**
     * Updates dimensions&#39; properties.
     */
    updateDimensionProperties?: Schema$UpdateDimensionPropertiesRequest;
    /**
     * Updates an embedded object&#39;s (e.g. chart, image) position.
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
     * Updates a sheet&#39;s properties.
     */
    updateSheetProperties?: Schema$UpdateSheetPropertiesRequest;
    /**
     * Updates the spreadsheet&#39;s properties.
     */
    updateSpreadsheetProperties?: Schema$UpdateSpreadsheetPropertiesRequest;
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
     * A reply from updating a conditional format rule.
     */
    updateConditionalFormatRule?: Schema$UpdateConditionalFormatRuleResponse;
    /**
     * A reply from updating a developer metadata entry.
     */
    updateDeveloperMetadata?: Schema$UpdateDeveloperMetadataResponse;
    /**
     * A reply from updating an embedded object&#39;s position.
     */
    updateEmbeddedObjectPosition?: Schema$UpdateEmbeddedObjectPositionResponse;
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
   * A request to retrieve all developer metadata matching the set of specified
   * criteria.
   */
  export interface Schema$SearchDeveloperMetadataRequest {
    /**
     * The data filters describing the criteria used to determine which
     * DeveloperMetadata entries to return.  DeveloperMetadata matching any of
     * the specified filters will be included in the response.
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
   * Sets a data validation rule to every cell in the range. To clear validation
   * in a range, call this with no rule specified.
   */
  export interface Schema$SetDataValidationRequest {
    /**
     * The range the data validation rule should apply to.
     */
    range?: Schema$GridRange;
    /**
     * The data validation rule to set on each cell in the range, or empty to
     * clear the data validation in the range.
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
     * All column groups on this sheet, ordered by increasing range start index,
     * then by group depth.
     */
    columnGroups?: Schema$DimensionGroup[];
    /**
     * The conditional format rules in this sheet.
     */
    conditionalFormats?: Schema$ConditionalFormatRule[];
    /**
     * Data in the grid, if this is a grid sheet. The number of GridData objects
     * returned is dependent on the number of ranges requested on this sheet.
     * For example, if this is representing `Sheet1`, and the spreadsheet was
     * requested with ranges `Sheet1!A1:C10` and `Sheet1!D15:E20`, then the
     * first GridData will have a startRow/startColumn of `0`, while the second
     * one will have `startRow 14` (zero-based row 15), and `startColumn 3`
     * (zero-based column D).
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
     * All row groups on this sheet, ordered by increasing range start index,
     * then by group depth.
     */
    rowGroups?: Schema$DimensionGroup[];
  }
  /**
   * Properties of a sheet.
   */
  export interface Schema$SheetProperties {
    /**
     * Additional properties of the sheet if this sheet is a grid. (If the sheet
     * is an object sheet, containing a chart or image, then this field will be
     * absent.) When writing it is an error to set any grid properties on
     * non-grid sheets.
     */
    gridProperties?: Schema$GridProperties;
    /**
     * True if the sheet is hidden in the UI, false if it&#39;s visible.
     */
    hidden?: boolean;
    /**
     * The index of the sheet within the spreadsheet. When adding or updating
     * sheet properties, if this field is excluded then the sheet is added or
     * moved to the end of the sheet list. When updating sheet indices or
     * inserting sheets, movement is considered in &quot;before the move&quot;
     * indexes. For example, if there were 3 sheets (S1, S2, S3) in order to
     * move S1 ahead of S2 the index would have to be set to 2. A sheet index
     * update request is ignored if the requested index is identical to the
     * sheets current index or if the requested new index is equal to the
     * current sheet index + 1.
     */
    index?: number;
    /**
     * True if the sheet is an RTL sheet instead of an LTR sheet.
     */
    rightToLeft?: boolean;
    /**
     * The ID of the sheet. Must be non-negative. This field cannot be changed
     * once set.
     */
    sheetId?: number;
    /**
     * The type of sheet. Defaults to GRID. This field cannot be changed once
     * set.
     */
    sheetType?: string;
    /**
     * The color of the tab in the UI.
     */
    tabColor?: Schema$Color;
    /**
     * The name of the sheet.
     */
    title?: string;
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
     * The sort order per column. Later specifications are used when values are
     * equal in the earlier specifications.
     */
    sortSpecs?: Schema$SortSpec[];
  }
  /**
   * A sort order associated with a specific column or row.
   */
  export interface Schema$SortSpec {
    /**
     * The dimension the sort should be applied to.
     */
    dimensionIndex?: number;
    /**
     * The order data should be sorted.
     */
    sortOrder?: string;
  }
  /**
   * A combination of a source range and how to extend that source.
   */
  export interface Schema$SourceAndDestination {
    /**
     * The dimension that data should be filled into.
     */
    dimension?: string;
    /**
     * The number of rows or columns that data should be filled into. Positive
     * numbers expand beyond the last row or last column of the source. Negative
     * numbers expand before the first row or first column of the source.
     */
    fillLength?: number;
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
    spreadsheetId?: string;
    /**
     * The url of the spreadsheet. This field is read-only.
     */
    spreadsheetUrl?: string;
  }
  /**
   * Properties of a spreadsheet.
   */
  export interface Schema$SpreadsheetProperties {
    /**
     * The amount of time to wait before volatile functions are recalculated.
     */
    autoRecalc?: string;
    /**
     * The default format of all cells in the spreadsheet.
     * CellData.effectiveFormat will not be set if the cell&#39;s format is
     * equal to this default format. This field is read-only.
     */
    defaultFormat?: Schema$CellFormat;
    /**
     * Determines whether and how circular references are resolved with
     * iterative calculation.  Absence of this field means that circular
     * references will result in calculation errors.
     */
    iterativeCalculationSettings?: Schema$IterativeCalculationSettings;
    /**
     * The locale of the spreadsheet in one of the following formats:  * an ISO
     * 639-1 language code such as `en`  * an ISO 639-2 language code such as
     * `fil`, if no 639-1 code exists  * a combination of the ISO language code
     * and country code, such as `en_US`  Note: when updating this field, not
     * all locales/languages are supported.
     */
    locale?: string;
    /**
     * The time zone of the spreadsheet, in CLDR format such as
     * `America/New_York`. If the time zone isn&#39;t recognized, this may be a
     * custom time zone such as `GMT-07:00`.
     */
    timeZone?: string;
    /**
     * The title of the spreadsheet.
     */
    title?: string;
  }
  /**
   * The format of a run of text in a cell. Absent values indicate that the
   * field isn&#39;t specified.
   */
  export interface Schema$TextFormat {
    /**
     * True if the text is bold.
     */
    bold?: boolean;
    /**
     * The font family.
     */
    fontFamily?: string;
    /**
     * The size of the font.
     */
    fontSize?: number;
    /**
     * The foreground color of the text.
     */
    foregroundColor?: Schema$Color;
    /**
     * True if the text is italicized.
     */
    italic?: boolean;
    /**
     * True if the text has a strikethrough.
     */
    strikethrough?: boolean;
    /**
     * True if the text is underlined.
     */
    underline?: boolean;
  }
  /**
   * A run of a text format. The format of this run continues until the start
   * index of the next run. When updating, all fields must be set.
   */
  export interface Schema$TextFormatRun {
    /**
     * The format of this run.  Absent values inherit the cell&#39;s format.
     */
    format?: Schema$TextFormat;
    /**
     * The character index where this run starts.
     */
    startIndex?: number;
  }
  /**
   * Position settings for text.
   */
  export interface Schema$TextPosition {
    /**
     * Horizontal alignment setting for the piece of text.
     */
    horizontalAlignment?: string;
  }
  /**
   * The rotation applied to text in a cell.
   */
  export interface Schema$TextRotation {
    /**
     * The angle between the standard orientation and the desired orientation.
     * Measured in degrees. Valid values are between -90 and 90. Positive angles
     * are angled upwards, negative are angled downwards.  Note: For LTR text
     * direction positive angles are in the counterclockwise direction, whereas
     * for RTL they are in the clockwise direction
     */
    angle?: number;
    /**
     * If true, text reads top to bottom, but the orientation of individual
     * characters is unchanged. For example:      | V |     | e |     | r | | t
     * |     | i |     | c |     | a |     | l |
     */
    vertical?: boolean;
  }
  /**
   * Splits a column of text into multiple columns, based on a delimiter in each
   * cell.
   */
  export interface Schema$TextToColumnsRequest {
    /**
     * The delimiter to use. Used only if delimiterType is CUSTOM.
     */
    delimiter?: string;
    /**
     * The delimiter type to use.
     */
    delimiterType?: string;
    /**
     * The source data range.  This must span exactly one column.
     */
    source?: Schema$GridRange;
  }
  /**
   * A color scale for a treemap chart.
   */
  export interface Schema$TreemapChartColorScale {
    /**
     * The background color for cells with a color value greater than or equal
     * to maxValue. Defaults to #109618 if not specified.
     */
    maxValueColor?: Schema$Color;
    /**
     * The background color for cells with a color value at the midpoint between
     * minValue and maxValue. Defaults to #efe6dc if not specified.
     */
    midValueColor?: Schema$Color;
    /**
     * The background color for cells with a color value less than or equal to
     * minValue. Defaults to #dc3912 if not specified.
     */
    minValueColor?: Schema$Color;
    /**
     * The background color for cells that have no color data associated with
     * them. Defaults to #000000 if not specified.
     */
    noDataColor?: Schema$Color;
  }
  /**
   * A &lt;a href=&quot;/chart/interactive/docs/gallery/treemap&quot;&gt;Treemap
   * chart&lt;/a&gt;.
   */
  export interface Schema$TreemapChartSpec {
    /**
     * The data that determines the background color of each treemap data cell.
     * This field is optional. If not specified, size_data is used to determine
     * background colors. If specified, the data is expected to be numeric.
     * color_scale will determine how the values in this data map to data cell
     * background colors.
     */
    colorData?: Schema$ChartData;
    /**
     * The color scale for data cells in the treemap chart. Data cells are
     * assigned colors based on their color values. These color values come from
     * color_data, or from size_data if color_data is not specified. Cells with
     * color values less than or equal to min_value will have minValueColor as
     * their background color. Cells with color values greater than or equal to
     * max_value will have maxValueColor as their background color. Cells with
     * color values between min_value and max_value will have background colors
     * on a gradient between minValueColor and maxValueColor, the midpoint of
     * the gradient being midValueColor. Cells with missing or non-numeric color
     * values will have noDataColor as their background color.
     */
    colorScale?: Schema$TreemapChartColorScale;
    /**
     * The background color for header cells.
     */
    headerColor?: Schema$Color;
    /**
     * True to hide tooltips.
     */
    hideTooltips?: boolean;
    /**
     * The number of additional data levels beyond the labeled levels to be
     * shown on the treemap chart. These levels are not interactive and are
     * shown without their labels. Defaults to 0 if not specified.
     */
    hintedLevels?: number;
    /**
     * The data that contains the treemap cell labels.
     */
    labels?: Schema$ChartData;
    /**
     * The number of data levels to show on the treemap chart. These levels are
     * interactive and are shown with their labels. Defaults to 2 if not
     * specified.
     */
    levels?: number;
    /**
     * The maximum possible data value. Cells with values greater than this will
     * have the same color as cells with this value. If not specified, defaults
     * to the actual maximum value from color_data, or the maximum value from
     * size_data if color_data is not specified.
     */
    maxValue?: number;
    /**
     * The minimum possible data value. Cells with values less than this will
     * have the same color as cells with this value. If not specified, defaults
     * to the actual minimum value from color_data, or the minimum value from
     * size_data if color_data is not specified.
     */
    minValue?: number;
    /**
     * The data the contains the treemap cells&#39; parent labels.
     */
    parentLabels?: Schema$ChartData;
    /**
     * The data that determines the size of each treemap data cell. This data is
     * expected to be numeric. The cells corresponding to non-numeric or missing
     * data will not be rendered. If color_data is not specified, this data is
     * used to determine data cell background colors as well.
     */
    sizeData?: Schema$ChartData;
    /**
     * The text format for all labels on the chart.
     */
    textFormat?: Schema$TextFormat;
  }
  /**
   * Unmerges cells in the given range.
   */
  export interface Schema$UnmergeCellsRequest {
    /**
     * The range within which all cells should be unmerged. If the range spans
     * multiple merges, all will be unmerged. The range must not partially span
     * any merge.
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
     * The fields that should be updated.  At least one field must be specified.
     * The root `bandedRange` is implied and should not be specified. A single
     * `&quot;*&quot;` can be used as short-hand for listing every field.
     */
    fields?: string;
  }
  /**
   * Updates the borders of a range. If a field is not set in the request, that
   * means the border remains as-is. For example, with two subsequent
   * UpdateBordersRequest:   1. range: A1:A5 `{ top: RED, bottom: WHITE }`  2.
   * range: A1:A5 `{ left: BLUE }`  That would result in A1:A5 having a borders
   * of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a
   * border, explicitly set the style to NONE.
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
     * The fields of CellData that should be updated. At least one field must be
     * specified. The root is the CellData; &#39;row.values.&#39; should not be
     * specified. A single `&quot;*&quot;` can be used as short-hand for listing
     * every field.
     */
    fields?: string;
    /**
     * The range to write data to.  If the data in rows does not cover the
     * entire requested range, the fields matching those set in fields will be
     * cleared.
     */
    range?: Schema$GridRange;
    /**
     * The data to write.
     */
    rows?: Schema$RowData[];
    /**
     * The coordinate to start writing data at. Any number of rows and columns
     * (including a different number of columns per row) may be written.
     */
    start?: Schema$GridCoordinate;
  }
  /**
   * Updates a chart&#39;s specifications. (This does not move or resize a
   * chart. To move or resize a chart, use UpdateEmbeddedObjectPositionRequest.)
   */
  export interface Schema$UpdateChartSpecRequest {
    /**
     * The ID of the chart to update.
     */
    chartId?: number;
    /**
     * The specification to apply to the chart.
     */
    spec?: Schema$ChartSpec;
  }
  /**
   * Updates a conditional format rule at the given index, or moves a
   * conditional format rule to another index.
   */
  export interface Schema$UpdateConditionalFormatRuleRequest {
    /**
     * The zero-based index of the rule that should be replaced or moved.
     */
    index?: number;
    /**
     * The zero-based new index the rule should end up at.
     */
    newIndex?: number;
    /**
     * The rule that should replace the rule at the given index.
     */
    rule?: Schema$ConditionalFormatRule;
    /**
     * The sheet of the rule to move.  Required if new_index is set, unused
     * otherwise.
     */
    sheetId?: number;
  }
  /**
   * The result of updating a conditional format rule.
   */
  export interface Schema$UpdateConditionalFormatRuleResponse {
    /**
     * The index of the new rule.
     */
    newIndex?: number;
    /**
     * The new rule that replaced the old rule (if replacing), or the rule that
     * was moved (if moved)
     */
    newRule?: Schema$ConditionalFormatRule;
    /**
     * The old index of the rule. Not set if a rule was replaced (because it is
     * the same as new_index).
     */
    oldIndex?: number;
    /**
     * The old (deleted) rule. Not set if a rule was moved (because it is the
     * same as new_rule).
     */
    oldRule?: Schema$ConditionalFormatRule;
  }
  /**
   * A request to update properties of developer metadata. Updates the
   * properties of the developer metadata selected by the filters to the values
   * provided in the DeveloperMetadata resource.  Callers must specify the
   * properties they wish to update in the fields parameter, as well as specify
   * at least one DataFilter matching the metadata they wish to update.
   */
  export interface Schema$UpdateDeveloperMetadataRequest {
    /**
     * The filters matching the developer metadata entries to update.
     */
    dataFilters?: Schema$DataFilter[];
    /**
     * The value that all metadata matched by the data filters will be updated
     * to.
     */
    developerMetadata?: Schema$DeveloperMetadata;
    /**
     * The fields that should be updated.  At least one field must be specified.
     * The root `developerMetadata` is implied and should not be specified. A
     * single `&quot;*&quot;` can be used as short-hand for listing every field.
     */
    fields?: string;
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
     * The group whose state should be updated. The range and depth of the group
     * should specify a valid group on the sheet, and all other fields updated.
     */
    dimensionGroup?: Schema$DimensionGroup;
    /**
     * The fields that should be updated.  At least one field must be specified.
     * The root `dimensionGroup` is implied and should not be specified. A
     * single `&quot;*&quot;` can be used as short-hand for listing every field.
     */
    fields?: string;
  }
  /**
   * Updates properties of dimensions within the specified range.
   */
  export interface Schema$UpdateDimensionPropertiesRequest {
    /**
     * The fields that should be updated.  At least one field must be specified.
     * The root `properties` is implied and should not be specified. A single
     * `&quot;*&quot;` can be used as short-hand for listing every field.
     */
    fields?: string;
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
   * Update an embedded object&#39;s position (such as a moving or resizing a
   * chart or image).
   */
  export interface Schema$UpdateEmbeddedObjectPositionRequest {
    /**
     * The fields of OverlayPosition that should be updated when setting a new
     * position. Used only if newPosition.overlayPosition is set, in which case
     * at least one field must be specified.  The root
     * `newPosition.overlayPosition` is implied and should not be specified. A
     * single `&quot;*&quot;` can be used as short-hand for listing every field.
     */
    fields?: string;
    /**
     * An explicit position to move the embedded object to. If
     * newPosition.sheetId is set, a new sheet with that ID will be created. If
     * newPosition.newSheet is set to true, a new sheet will be created with an
     * ID that will be chosen for you.
     */
    newPosition?: Schema$EmbeddedObjectPosition;
    /**
     * The ID of the object to moved.
     */
    objectId?: number;
  }
  /**
   * The result of updating an embedded object&#39;s position.
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
     * The fields that should be updated.  At least one field must be specified.
     * The root `filter` is implied and should not be specified. A single
     * `&quot;*&quot;` can be used as short-hand for listing every field.
     */
    fields?: string;
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
     * The fields that should be updated.  At least one field must be specified.
     * The root `namedRange` is implied and should not be specified. A single
     * `&quot;*&quot;` can be used as short-hand for listing every field.
     */
    fields?: string;
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
     * The fields that should be updated.  At least one field must be specified.
     * The root `protectedRange` is implied and should not be specified. A
     * single `&quot;*&quot;` can be used as short-hand for listing every field.
     */
    fields?: string;
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
     * The fields that should be updated.  At least one field must be specified.
     * The root `properties` is implied and should not be specified. A single
     * `&quot;*&quot;` can be used as short-hand for listing every field.
     */
    fields?: string;
    /**
     * The properties to update.
     */
    properties?: Schema$SheetProperties;
  }
  /**
   * Updates properties of a spreadsheet.
   */
  export interface Schema$UpdateSpreadsheetPropertiesRequest {
    /**
     * The fields that should be updated.  At least one field must be specified.
     * The root &#39;properties&#39; is implied and should not be specified. A
     * single `&quot;*&quot;` can be used as short-hand for listing every field.
     */
    fields?: string;
    /**
     * The properties to update.
     */
    properties?: Schema$SpreadsheetProperties;
  }
  /**
   * The response when updating a range of values by a data filter in a
   * spreadsheet.
   */
  export interface Schema$UpdateValuesByDataFilterResponse {
    /**
     * The data filter that selected the range that was updated.
     */
    dataFilter?: Schema$DataFilter;
    /**
     * The number of cells updated.
     */
    updatedCells?: number;
    /**
     * The number of columns where at least one cell in the column was updated.
     */
    updatedColumns?: number;
    /**
     * The values of the cells in the range matched by the dataFilter after all
     * updates were applied. This is only included if the request&#39;s
     * `includeValuesInResponse` field was `true`.
     */
    updatedData?: Schema$ValueRange;
    /**
     * The range (in A1 notation) that updates were applied to.
     */
    updatedRange?: string;
    /**
     * The number of rows where at least one cell in the row was updated.
     */
    updatedRows?: number;
  }
  /**
   * The response when updating a range of values in a spreadsheet.
   */
  export interface Schema$UpdateValuesResponse {
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string;
    /**
     * The number of cells updated.
     */
    updatedCells?: number;
    /**
     * The number of columns where at least one cell in the column was updated.
     */
    updatedColumns?: number;
    /**
     * The values of the cells after updates were applied. This is only included
     * if the request&#39;s `includeValuesInResponse` field was `true`.
     */
    updatedData?: Schema$ValueRange;
    /**
     * The range (in A1 notation) that updates were applied to.
     */
    updatedRange?: string;
    /**
     * The number of rows where at least one cell in the row was updated.
     */
    updatedRows?: number;
  }
  /**
   * Data within a range of the spreadsheet.
   */
  export interface Schema$ValueRange {
    /**
     * The major dimension of the values.  For output, if the spreadsheet data
     * is: `A1=1,B1=2,A2=3,B2=4`, then requesting
     * `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas
     * requesting `range=A1:B2,majorDimension=COLUMNS` will return
     * `[[1,3],[2,4]]`.  For input, with `range=A1:B2,majorDimension=ROWS` then
     * `[[1,2],[3,4]]` will set `A1=1,B1=2,A2=3,B2=4`. With
     * `range=A1:B2,majorDimension=COLUMNS` then `[[1,2],[3,4]]` will set
     * `A1=1,B1=3,A2=2,B2=4`.  When writing, if this field is not set, it
     * defaults to ROWS.
     */
    majorDimension?: string;
    /**
     * The range the values cover, in A1 notation. For output, this range
     * indicates the entire requested range, even though the values will exclude
     * trailing rows and columns. When appending values, this field represents
     * the range to search for a table, after which values will be appended.
     */
    range?: string;
    /**
     * The data that was read or to be written.  This is an array of arrays, the
     * outer array representing all the data and each inner array representing a
     * major dimension. Each item in the inner array corresponds with one cell.
     * For output, empty trailing rows and columns will not be included.  For
     * input, supported value types are: bool, string, and double. Null values
     * will be skipped. To set a cell to an empty value, set the string value to
     * an empty string.
     */
    values?: any[][];
  }
  /**
   * Styles for a waterfall chart column.
   */
  export interface Schema$WaterfallChartColumnStyle {
    /**
     * The color of the column.
     */
    color?: Schema$Color;
    /**
     * The label of the column&#39;s legend.
     */
    label?: string;
  }
  /**
   * A custom subtotal column for a waterfall chart series.
   */
  export interface Schema$WaterfallChartCustomSubtotal {
    /**
     * True if the data point at subtotal_index is the subtotal. If false, the
     * subtotal will be computed and appear after the data point.
     */
    dataIsSubtotal?: boolean;
    /**
     * A label for the subtotal column.
     */
    label?: string;
    /**
     * The 0-based index of a data point within the series. If data_is_subtotal
     * is true, the data point at this index is the subtotal. Otherwise, the
     * subtotal appears after the data point with this index. A series can have
     * multiple subtotals at arbitrary indices, but subtotals do not affect the
     * indices of the data points. For example, if a series has three data
     * points, their indices will always be 0, 1, and 2, regardless of how many
     * subtotals exist on the series or what data points they are associated
     * with.
     */
    subtotalIndex?: number;
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
    reversed?: boolean;
  }
  /**
   * A single series of data for a waterfall chart.
   */
  export interface Schema$WaterfallChartSeries {
    /**
     * Custom subtotal columns appearing in this series. The order in which
     * subtotals are defined is not significant. Only one subtotal may be
     * defined for each data point.
     */
    customSubtotals?: Schema$WaterfallChartCustomSubtotal[];
    /**
     * The data being visualized in this series.
     */
    data?: Schema$ChartData;
    /**
     * True to hide the subtotal column from the end of the series. By default,
     * a subtotal column will appear at the end of each series. Setting this
     * field to true will hide that subtotal column for this series.
     */
    hideTrailingSubtotal?: boolean;
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
    firstValueIsTotal?: boolean;
    /**
     * True to hide connector lines between columns.
     */
    hideConnectorLines?: boolean;
    /**
     * The data this waterfall chart is visualizing.
     */
    series?: Schema$WaterfallChartSeries[];
    /**
     * The stacked type.
     */
    stackedType?: string;
  }


  export class Resource$Spreadsheets {
    root: Sheets;
    developerMetadata: Resource$Spreadsheets$Developermetadata;
    sheets: Resource$Spreadsheets$Sheets;
    values: Resource$Spreadsheets$Values;
    constructor(root: Sheets) {
      this.root = root;
      this.getRoot.bind(this);
      this.developerMetadata =
          new Resource$Spreadsheets$Developermetadata(root);
      this.sheets = new Resource$Spreadsheets$Sheets(root);
      this.values = new Resource$Spreadsheets$Values(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * sheets.spreadsheets.batchUpdate
     * @desc Applies one or more updates to the spreadsheet.  Each request is
     * validated before being applied. If any request is not valid then the
     * entire request will fail and nothing will be applied.  Some requests have
     * replies to give you some information about how they are applied. The
     * replies will mirror the requests.  For example, if you applied 4 updates
     * and the 3rd one had a reply, then the response will have 2 empty replies,
     * the actual reply, and another empty reply, in that order.  Due to the
     * collaborative nature of spreadsheets, it is not guaranteed that the
     * spreadsheet will reflect exactly your changes after this completes,
     * however it is guaranteed that the updates in the request will be applied
     * together atomically. Your changes may be altered with respect to
     * collaborator changes. If there are no collaborators, the spreadsheet
     * should reflect your changes.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The spreadsheet to apply the updates to.
     *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
     * value.
     *
     *     resource: {
     *       // A list of updates to apply to the spreadsheet.
     *       // Requests will be applied in the order they are specified.
     *       // If any request is not valid, no requests will be applied.
     *       requests: [],  // TODO: Update placeholder value.
     *
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.batchUpdate(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.batchUpdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.spreadsheetId The spreadsheet to apply the updates to.
     * @param {().BatchUpdateSpreadsheetRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchUpdate(
        params?: Params$Resource$Spreadsheets$Batchupdate,
        options?: MethodOptions):
        AxiosPromise<Schema$BatchUpdateSpreadsheetResponse>;
    batchUpdate(
        params: Params$Resource$Spreadsheets$Batchupdate,
        options: MethodOptions|
        BodyResponseCallback<Schema$BatchUpdateSpreadsheetResponse>,
        callback: BodyResponseCallback<Schema$BatchUpdateSpreadsheetResponse>):
        void;
    batchUpdate(
        params: Params$Resource$Spreadsheets$Batchupdate,
        callback: BodyResponseCallback<Schema$BatchUpdateSpreadsheetResponse>):
        void;
    batchUpdate(
        callback: BodyResponseCallback<Schema$BatchUpdateSpreadsheetResponse>):
        void;
    batchUpdate(
        paramsOrCallback?: Params$Resource$Spreadsheets$Batchupdate|
        BodyResponseCallback<Schema$BatchUpdateSpreadsheetResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BatchUpdateSpreadsheetResponse>,
        callback?: BodyResponseCallback<Schema$BatchUpdateSpreadsheetResponse>):
        void|AxiosPromise<Schema$BatchUpdateSpreadsheetResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Spreadsheets$Batchupdate;
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
              url: (rootUrl + '/v4/spreadsheets/{spreadsheetId}:batchUpdate')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BatchUpdateSpreadsheetResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$BatchUpdateSpreadsheetResponse>(
            parameters);
      }
    }


    /**
     * sheets.spreadsheets.create
     * @desc Creates a spreadsheet, returning the newly created spreadsheet.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.create(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Spreadsheet} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Spreadsheets$Create,
        options?: MethodOptions): AxiosPromise<Schema$Spreadsheet>;
    create(
        params: Params$Resource$Spreadsheets$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Spreadsheet>,
        callback: BodyResponseCallback<Schema$Spreadsheet>): void;
    create(
        params: Params$Resource$Spreadsheets$Create,
        callback: BodyResponseCallback<Schema$Spreadsheet>): void;
    create(callback: BodyResponseCallback<Schema$Spreadsheet>): void;
    create(
        paramsOrCallback?: Params$Resource$Spreadsheets$Create|
        BodyResponseCallback<Schema$Spreadsheet>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Spreadsheet>,
        callback?: BodyResponseCallback<Schema$Spreadsheet>):
        void|AxiosPromise<Schema$Spreadsheet> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Spreadsheets$Create;
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
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Spreadsheet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Spreadsheet>(parameters);
      }
    }


    /**
     * sheets.spreadsheets.get
     * @desc Returns the spreadsheet at the given ID. The caller must specify
     * the spreadsheet ID.  By default, data within grids will not be returned.
     * You can include grid data one of two ways:  * Specify a field mask
     * listing your desired fields using the `fields` URL parameter in HTTP  *
     * Set the includeGridData URL parameter to true.  If a field mask is set,
     * the `includeGridData` parameter is ignored  For large spreadsheets, it is
     * recommended to retrieve only the specific fields of the spreadsheet that
     * you want.  To retrieve only subsets of the spreadsheet, use the ranges
     * URL parameter. Multiple ranges can be specified.  Limiting the range will
     * return only the portions of the spreadsheet that intersect the requested
     * ranges. Ranges are specified using A1 notation.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The spreadsheet to request.
     *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
     * value.
     *
     *     // The ranges to retrieve from the spreadsheet.
     *     ranges: [],  // TODO: Update placeholder value.
     *
     *     // True if grid data should be returned.
     *     // This parameter is ignored if a field mask was set in the request.
     *     includeGridData: false,  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/drive.readonly'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   //   'https://www.googleapis.com/auth/spreadsheets.readonly'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.includeGridData True if grid data should be returned. This parameter is ignored if a field mask was set in the request.
     * @param {string=} params.ranges The ranges to retrieve from the spreadsheet.
     * @param {string} params.spreadsheetId The spreadsheet to request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Spreadsheets$Get,
        options?: MethodOptions): AxiosPromise<Schema$Spreadsheet>;
    get(params: Params$Resource$Spreadsheets$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Spreadsheet>,
        callback: BodyResponseCallback<Schema$Spreadsheet>): void;
    get(params: Params$Resource$Spreadsheets$Get,
        callback: BodyResponseCallback<Schema$Spreadsheet>): void;
    get(callback: BodyResponseCallback<Schema$Spreadsheet>): void;
    get(paramsOrCallback?: Params$Resource$Spreadsheets$Get|
        BodyResponseCallback<Schema$Spreadsheet>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Spreadsheet>,
        callback?: BodyResponseCallback<Schema$Spreadsheet>):
        void|AxiosPromise<Schema$Spreadsheet> {
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
              url: (rootUrl + '/v4/spreadsheets/{spreadsheetId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Spreadsheet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Spreadsheet>(parameters);
      }
    }


    /**
     * sheets.spreadsheets.getByDataFilter
     * @desc Returns the spreadsheet at the given ID. The caller must specify
     * the spreadsheet ID.  This method differs from GetSpreadsheet in that it
     * allows selecting which subsets of spreadsheet data to return by
     * specifying a dataFilters parameter. Multiple DataFilters can be
     * specified.  Specifying one or more data filters will return the portions
     * of the spreadsheet that intersect ranges matched by any of the filters.
     * By default, data within grids will not be returned. You can include grid
     * data one of two ways:  * Specify a field mask listing your desired fields
     * using the `fields` URL parameter in HTTP  * Set the includeGridData
     * parameter to true.  If a field mask is set, the `includeGridData`
     * parameter is ignored  For large spreadsheets, it is recommended to
     * retrieve only the specific fields of the spreadsheet that you want.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The spreadsheet to request.
     *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
     * value.
     *
     *     resource: {
     *       // The DataFilters used to select which ranges to retrieve from
     *       // the spreadsheet.
     *       dataFilters: [],  // TODO: Update placeholder value.
     *
     *       // True if grid data should be returned.
     *       // This parameter is ignored if a field mask was set in the
     * request. includeGridData: false,  // TODO: Update placeholder value.
     *
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.getByDataFilter(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.getByDataFilter
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.spreadsheetId The spreadsheet to request.
     * @param {().GetSpreadsheetByDataFilterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getByDataFilter(
        params?: Params$Resource$Spreadsheets$Getbydatafilter,
        options?: MethodOptions): AxiosPromise<Schema$Spreadsheet>;
    getByDataFilter(
        params: Params$Resource$Spreadsheets$Getbydatafilter,
        options: MethodOptions|BodyResponseCallback<Schema$Spreadsheet>,
        callback: BodyResponseCallback<Schema$Spreadsheet>): void;
    getByDataFilter(
        params: Params$Resource$Spreadsheets$Getbydatafilter,
        callback: BodyResponseCallback<Schema$Spreadsheet>): void;
    getByDataFilter(callback: BodyResponseCallback<Schema$Spreadsheet>): void;
    getByDataFilter(
        paramsOrCallback?: Params$Resource$Spreadsheets$Getbydatafilter|
        BodyResponseCallback<Schema$Spreadsheet>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Spreadsheet>,
        callback?: BodyResponseCallback<Schema$Spreadsheet>):
        void|AxiosPromise<Schema$Spreadsheet> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Spreadsheets$Getbydatafilter;
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
              url:
                  (rootUrl + '/v4/spreadsheets/{spreadsheetId}:getByDataFilter')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Spreadsheet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Spreadsheet>(parameters);
      }
    }
  }

  export interface Params$Resource$Spreadsheets$Batchupdate {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The spreadsheet to apply the updates to.
     */
    spreadsheetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdateSpreadsheetRequest;
  }
  export interface Params$Resource$Spreadsheets$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$Spreadsheet;
  }
  export interface Params$Resource$Spreadsheets$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * True if grid data should be returned. This parameter is ignored if a
     * field mask was set in the request.
     */
    includeGridData?: boolean;
    /**
     * The ranges to retrieve from the spreadsheet.
     */
    ranges?: string;
    /**
     * The spreadsheet to request.
     */
    spreadsheetId?: string;
  }
  export interface Params$Resource$Spreadsheets$Getbydatafilter {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    root: Sheets;
    constructor(root: Sheets) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * sheets.spreadsheets.developerMetadata.get
     * @desc Returns the developer metadata with the specified ID. The caller
     * must specify the spreadsheet ID and the developer metadata's unique
     * metadataId.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the spreadsheet to retrieve metadata from.
     *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
     * value.
     *
     *     // The ID of the developer metadata to retrieve.
     *     metadataId: 0,  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.developerMetadata.get(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.developerMetadata.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.metadataId The ID of the developer metadata to retrieve.
     * @param {string} params.spreadsheetId The ID of the spreadsheet to retrieve metadata from.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Spreadsheets$Developermetadata$Get,
        options?: MethodOptions): AxiosPromise<Schema$DeveloperMetadata>;
    get(params: Params$Resource$Spreadsheets$Developermetadata$Get,
        options: MethodOptions|BodyResponseCallback<Schema$DeveloperMetadata>,
        callback: BodyResponseCallback<Schema$DeveloperMetadata>): void;
    get(params: Params$Resource$Spreadsheets$Developermetadata$Get,
        callback: BodyResponseCallback<Schema$DeveloperMetadata>): void;
    get(callback: BodyResponseCallback<Schema$DeveloperMetadata>): void;
    get(paramsOrCallback?: Params$Resource$Spreadsheets$Developermetadata$Get|
        BodyResponseCallback<Schema$DeveloperMetadata>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$DeveloperMetadata>,
        callback?: BodyResponseCallback<Schema$DeveloperMetadata>):
        void|AxiosPromise<Schema$DeveloperMetadata> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Spreadsheets$Developermetadata$Get;
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
              url:
                  (rootUrl +
                   '/v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['spreadsheetId', 'metadataId'],
        pathParams: ['metadataId', 'spreadsheetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$DeveloperMetadata>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DeveloperMetadata>(parameters);
      }
    }


    /**
     * sheets.spreadsheets.developerMetadata.search
     * @desc Returns all developer metadata matching the specified DataFilter.
     * If the provided DataFilter represents a DeveloperMetadataLookup object,
     * this will return all DeveloperMetadata entries selected by it. If the
     * DataFilter represents a location in a spreadsheet, this will return all
     * developer metadata associated with locations intersecting that region.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the spreadsheet to retrieve metadata from.
     *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
     * value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.developerMetadata.search(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.developerMetadata.search
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.spreadsheetId The ID of the spreadsheet to retrieve metadata from.
     * @param {().SearchDeveloperMetadataRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search(
        params?: Params$Resource$Spreadsheets$Developermetadata$Search,
        options?: MethodOptions):
        AxiosPromise<Schema$SearchDeveloperMetadataResponse>;
    search(
        params: Params$Resource$Spreadsheets$Developermetadata$Search,
        options: MethodOptions|
        BodyResponseCallback<Schema$SearchDeveloperMetadataResponse>,
        callback: BodyResponseCallback<Schema$SearchDeveloperMetadataResponse>):
        void;
    search(
        params: Params$Resource$Spreadsheets$Developermetadata$Search,
        callback: BodyResponseCallback<Schema$SearchDeveloperMetadataResponse>):
        void;
    search(callback:
               BodyResponseCallback<Schema$SearchDeveloperMetadataResponse>):
        void;
    search(
        paramsOrCallback?:
            Params$Resource$Spreadsheets$Developermetadata$Search|
        BodyResponseCallback<Schema$SearchDeveloperMetadataResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SearchDeveloperMetadataResponse>,
        callback?:
            BodyResponseCallback<Schema$SearchDeveloperMetadataResponse>):
        void|AxiosPromise<Schema$SearchDeveloperMetadataResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Spreadsheets$Developermetadata$Search;
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
              url: (rootUrl +
                    '/v4/spreadsheets/{spreadsheetId}/developerMetadata:search')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SearchDeveloperMetadataResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchDeveloperMetadataResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Spreadsheets$Developermetadata$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the developer metadata to retrieve.
     */
    metadataId?: number;
    /**
     * The ID of the spreadsheet to retrieve metadata from.
     */
    spreadsheetId?: string;
  }
  export interface Params$Resource$Spreadsheets$Developermetadata$Search {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    root: Sheets;
    constructor(root: Sheets) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * sheets.spreadsheets.sheets.copyTo
     * @desc Copies a single sheet from a spreadsheet to another spreadsheet.
     * Returns the properties of the newly created sheet.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the spreadsheet containing the sheet to copy.
     *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
     * value.
     *
     *     // The ID of the sheet to copy.
     *     sheetId: 0,  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // The ID of the spreadsheet to copy the sheet to.
     *       destinationSpreadsheetId: '',  // TODO: Update placeholder value.
     *
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.sheets.copyTo(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.sheets.copyTo
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.sheetId The ID of the sheet to copy.
     * @param {string} params.spreadsheetId The ID of the spreadsheet containing the sheet to copy.
     * @param {().CopySheetToAnotherSpreadsheetRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    copyTo(
        params?: Params$Resource$Spreadsheets$Sheets$Copyto,
        options?: MethodOptions): AxiosPromise<Schema$SheetProperties>;
    copyTo(
        params: Params$Resource$Spreadsheets$Sheets$Copyto,
        options: MethodOptions|BodyResponseCallback<Schema$SheetProperties>,
        callback: BodyResponseCallback<Schema$SheetProperties>): void;
    copyTo(
        params: Params$Resource$Spreadsheets$Sheets$Copyto,
        callback: BodyResponseCallback<Schema$SheetProperties>): void;
    copyTo(callback: BodyResponseCallback<Schema$SheetProperties>): void;
    copyTo(
        paramsOrCallback?: Params$Resource$Spreadsheets$Sheets$Copyto|
        BodyResponseCallback<Schema$SheetProperties>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$SheetProperties>,
        callback?: BodyResponseCallback<Schema$SheetProperties>):
        void|AxiosPromise<Schema$SheetProperties> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Spreadsheets$Sheets$Copyto;
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
              url: (rootUrl +
                    '/v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['spreadsheetId', 'sheetId'],
        pathParams: ['sheetId', 'spreadsheetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$SheetProperties>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SheetProperties>(parameters);
      }
    }
  }

  export interface Params$Resource$Spreadsheets$Sheets$Copyto {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

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
    root: Sheets;
    constructor(root: Sheets) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * sheets.spreadsheets.values.append
     * @desc Appends values to a spreadsheet. The input range is used to search
     * for existing data and find a "table" within that range. Values will be
     * appended to the next row of the table, starting with the first column of
     * the table. See the [guide](/sheets/api/guides/values#appending_values)
     * and [sample code](/sheets/api/samples/writing#append_values) for specific
     * details of how tables are detected and data is appended.  The caller must
     * specify the spreadsheet ID, range, and a valueInputOption.  The
     * `valueInputOption` only controls how the input data will be added to the
     * sheet (column-wise or row-wise), it does not influence what cell the data
     * starts being written to.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the spreadsheet to update.
     *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
     * value.
     *
     *     // The A1 notation of a range to search for a logical table of data.
     *     // Values will be appended after the last row of the table.
     *     range: 'my-range',  // TODO: Update placeholder value.
     *
     *     // How the input data should be interpreted.
     *     valueInputOption: '',  // TODO: Update placeholder value.
     *
     *     // How the input data should be inserted.
     *     insertDataOption: '',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.values.append(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.values.append
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.includeValuesInResponse Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values.
     * @param {string=} params.insertDataOption How the input data should be inserted.
     * @param {string} params.range The A1 notation of a range to search for a logical table of data. Values will be appended after the last row of the table.
     * @param {string=} params.responseDateTimeRenderOption Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
     * @param {string=} params.responseValueRenderOption Determines how values in the response should be rendered. The default render option is ValueRenderOption.FORMATTED_VALUE.
     * @param {string} params.spreadsheetId The ID of the spreadsheet to update.
     * @param {string=} params.valueInputOption How the input data should be interpreted.
     * @param {().ValueRange} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    append(
        params?: Params$Resource$Spreadsheets$Values$Append,
        options?: MethodOptions): AxiosPromise<Schema$AppendValuesResponse>;
    append(
        params: Params$Resource$Spreadsheets$Values$Append,
        options: MethodOptions|
        BodyResponseCallback<Schema$AppendValuesResponse>,
        callback: BodyResponseCallback<Schema$AppendValuesResponse>): void;
    append(
        params: Params$Resource$Spreadsheets$Values$Append,
        callback: BodyResponseCallback<Schema$AppendValuesResponse>): void;
    append(callback: BodyResponseCallback<Schema$AppendValuesResponse>): void;
    append(
        paramsOrCallback?: Params$Resource$Spreadsheets$Values$Append|
        BodyResponseCallback<Schema$AppendValuesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AppendValuesResponse>,
        callback?: BodyResponseCallback<Schema$AppendValuesResponse>):
        void|AxiosPromise<Schema$AppendValuesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Spreadsheets$Values$Append;
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
              url: (rootUrl +
                    '/v4/spreadsheets/{spreadsheetId}/values/{range}:append')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['spreadsheetId', 'range'],
        pathParams: ['range', 'spreadsheetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AppendValuesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AppendValuesResponse>(parameters);
      }
    }


    /**
     * sheets.spreadsheets.values.batchClear
     * @desc Clears one or more ranges of values from a spreadsheet. The caller
     * must specify the spreadsheet ID and one or more ranges. Only values are
     * cleared -- all other properties of the cell (such as formatting, data
     * validation, etc..) are kept.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the spreadsheet to update.
     *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
     * value.
     *
     *     resource: {
     *       // The ranges to clear, in A1 notation.
     *       ranges: [],  // TODO: Update placeholder value.
     *
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.values.batchClear(request, function(err, response)
     * { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.values.batchClear
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.spreadsheetId The ID of the spreadsheet to update.
     * @param {().BatchClearValuesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchClear(
        params?: Params$Resource$Spreadsheets$Values$Batchclear,
        options?: MethodOptions): AxiosPromise<Schema$BatchClearValuesResponse>;
    batchClear(
        params: Params$Resource$Spreadsheets$Values$Batchclear,
        options: MethodOptions|
        BodyResponseCallback<Schema$BatchClearValuesResponse>,
        callback: BodyResponseCallback<Schema$BatchClearValuesResponse>): void;
    batchClear(
        params: Params$Resource$Spreadsheets$Values$Batchclear,
        callback: BodyResponseCallback<Schema$BatchClearValuesResponse>): void;
    batchClear(callback: BodyResponseCallback<Schema$BatchClearValuesResponse>):
        void;
    batchClear(
        paramsOrCallback?: Params$Resource$Spreadsheets$Values$Batchclear|
        BodyResponseCallback<Schema$BatchClearValuesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BatchClearValuesResponse>,
        callback?: BodyResponseCallback<Schema$BatchClearValuesResponse>):
        void|AxiosPromise<Schema$BatchClearValuesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Spreadsheets$Values$Batchclear;
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
              url: (rootUrl +
                    '/v4/spreadsheets/{spreadsheetId}/values:batchClear')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BatchClearValuesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BatchClearValuesResponse>(parameters);
      }
    }


    /**
     * sheets.spreadsheets.values.batchClearByDataFilter
     * @desc Clears one or more ranges of values from a spreadsheet. The caller
     * must specify the spreadsheet ID and one or more DataFilters. Ranges
     * matching any of the specified data filters will be cleared.  Only values
     * are cleared -- all other properties of the cell (such as formatting, data
     * validation, etc..) are kept.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the spreadsheet to update.
     *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
     * value.
     *
     *     resource: {
     *       // The DataFilters used to determine which ranges to clear.
     *       dataFilters: [],  // TODO: Update placeholder value.
     *
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.values.batchClearByDataFilter(request,
     * function(err, response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.values.batchClearByDataFilter
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.spreadsheetId The ID of the spreadsheet to update.
     * @param {().BatchClearValuesByDataFilterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchClearByDataFilter(
        params?: Params$Resource$Spreadsheets$Values$Batchclearbydatafilter,
        options?: MethodOptions):
        AxiosPromise<Schema$BatchClearValuesByDataFilterResponse>;
    batchClearByDataFilter(
        params: Params$Resource$Spreadsheets$Values$Batchclearbydatafilter,
        options: MethodOptions|
        BodyResponseCallback<Schema$BatchClearValuesByDataFilterResponse>,
        callback:
            BodyResponseCallback<Schema$BatchClearValuesByDataFilterResponse>):
        void;
    batchClearByDataFilter(
        params: Params$Resource$Spreadsheets$Values$Batchclearbydatafilter,
        callback:
            BodyResponseCallback<Schema$BatchClearValuesByDataFilterResponse>):
        void;
    batchClearByDataFilter(
        callback:
            BodyResponseCallback<Schema$BatchClearValuesByDataFilterResponse>):
        void;
    batchClearByDataFilter(
        paramsOrCallback?:
            Params$Resource$Spreadsheets$Values$Batchclearbydatafilter|
        BodyResponseCallback<Schema$BatchClearValuesByDataFilterResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BatchClearValuesByDataFilterResponse>,
        callback?:
            BodyResponseCallback<Schema$BatchClearValuesByDataFilterResponse>):
        void|AxiosPromise<Schema$BatchClearValuesByDataFilterResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Spreadsheets$Values$Batchclearbydatafilter;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Spreadsheets$Values$Batchclearbydatafilter;
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
              url:
                  (rootUrl +
                   '/v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BatchClearValuesByDataFilterResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$BatchClearValuesByDataFilterResponse>(
            parameters);
      }
    }


    /**
     * sheets.spreadsheets.values.batchGet
     * @desc Returns one or more ranges of values from a spreadsheet. The caller
     * must specify the spreadsheet ID and one or more ranges.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the spreadsheet to retrieve data from.
     *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
     * value.
     *
     *     // The A1 notation of the values to retrieve.
     *     ranges: [],  // TODO: Update placeholder value.
     *
     *     // How values should be represented in the output.
     *     // The default render option is ValueRenderOption.FORMATTED_VALUE.
     *     valueRenderOption: '',  // TODO: Update placeholder value.
     *
     *     // How dates, times, and durations should be represented in the
     * output.
     *     // This is ignored if value_render_option is
     *     // FORMATTED_VALUE.
     *     // The default dateTime render option is
     * [DateTimeRenderOption.SERIAL_NUMBER]. dateTimeRenderOption: '',  // TODO:
     * Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.values.batchGet(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/drive.readonly'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   //   'https://www.googleapis.com/auth/spreadsheets.readonly'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.values.batchGet
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.dateTimeRenderOption How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
     * @param {string=} params.majorDimension The major dimension that results should use.  For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return `[[1,3],[2,4]]`.
     * @param {string=} params.ranges The A1 notation of the values to retrieve.
     * @param {string} params.spreadsheetId The ID of the spreadsheet to retrieve data from.
     * @param {string=} params.valueRenderOption How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchGet(
        params?: Params$Resource$Spreadsheets$Values$Batchget,
        options?: MethodOptions): AxiosPromise<Schema$BatchGetValuesResponse>;
    batchGet(
        params: Params$Resource$Spreadsheets$Values$Batchget,
        options: MethodOptions|
        BodyResponseCallback<Schema$BatchGetValuesResponse>,
        callback: BodyResponseCallback<Schema$BatchGetValuesResponse>): void;
    batchGet(
        params: Params$Resource$Spreadsheets$Values$Batchget,
        callback: BodyResponseCallback<Schema$BatchGetValuesResponse>): void;
    batchGet(callback: BodyResponseCallback<Schema$BatchGetValuesResponse>):
        void;
    batchGet(
        paramsOrCallback?: Params$Resource$Spreadsheets$Values$Batchget|
        BodyResponseCallback<Schema$BatchGetValuesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BatchGetValuesResponse>,
        callback?: BodyResponseCallback<Schema$BatchGetValuesResponse>):
        void|AxiosPromise<Schema$BatchGetValuesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Spreadsheets$Values$Batchget;
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
              url:
                  (rootUrl + '/v4/spreadsheets/{spreadsheetId}/values:batchGet')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BatchGetValuesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BatchGetValuesResponse>(parameters);
      }
    }


    /**
     * sheets.spreadsheets.values.batchGetByDataFilter
     * @desc Returns one or more ranges of values that match the specified data
     * filters. The caller must specify the spreadsheet ID and one or more
     * DataFilters.  Ranges that match any of the data filters in the request
     * will be returned.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the spreadsheet to retrieve data from.
     *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
     * value.
     *
     *     resource: {
     *       // How values should be represented in the output.
     *       // The default render option is ValueRenderOption.FORMATTED_VALUE.
     *       valueRenderOption: '',  // TODO: Update placeholder value.
     *
     *       // The data filters used to match the ranges of values to retrieve.
     * Ranges
     *       // that match any of the specified data filters will be included in
     * the
     *       // response.
     *       dataFilters: [],  // TODO: Update placeholder value.
     *
     *       // How dates, times, and durations should be represented in the
     * output.
     *       // This is ignored if value_render_option is
     *       // FORMATTED_VALUE.
     *       // The default dateTime render option is
     * [DateTimeRenderOption.SERIAL_NUMBER]. dateTimeRenderOption: '',  // TODO:
     * Update placeholder value.
     *
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.values.batchGetByDataFilter(request, function(err,
     * response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.values.batchGetByDataFilter
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.spreadsheetId The ID of the spreadsheet to retrieve data from.
     * @param {().BatchGetValuesByDataFilterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchGetByDataFilter(
        params?: Params$Resource$Spreadsheets$Values$Batchgetbydatafilter,
        options?: MethodOptions):
        AxiosPromise<Schema$BatchGetValuesByDataFilterResponse>;
    batchGetByDataFilter(
        params: Params$Resource$Spreadsheets$Values$Batchgetbydatafilter,
        options: MethodOptions|
        BodyResponseCallback<Schema$BatchGetValuesByDataFilterResponse>,
        callback:
            BodyResponseCallback<Schema$BatchGetValuesByDataFilterResponse>):
        void;
    batchGetByDataFilter(
        params: Params$Resource$Spreadsheets$Values$Batchgetbydatafilter,
        callback:
            BodyResponseCallback<Schema$BatchGetValuesByDataFilterResponse>):
        void;
    batchGetByDataFilter(
        callback:
            BodyResponseCallback<Schema$BatchGetValuesByDataFilterResponse>):
        void;
    batchGetByDataFilter(
        paramsOrCallback?:
            Params$Resource$Spreadsheets$Values$Batchgetbydatafilter|
        BodyResponseCallback<Schema$BatchGetValuesByDataFilterResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BatchGetValuesByDataFilterResponse>,
        callback?:
            BodyResponseCallback<Schema$BatchGetValuesByDataFilterResponse>):
        void|AxiosPromise<Schema$BatchGetValuesByDataFilterResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Spreadsheets$Values$Batchgetbydatafilter;
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
              url:
                  (rootUrl +
                   '/v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BatchGetValuesByDataFilterResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$BatchGetValuesByDataFilterResponse>(
            parameters);
      }
    }


    /**
     * sheets.spreadsheets.values.batchUpdate
     * @desc Sets values in one or more ranges of a spreadsheet. The caller must
     * specify the spreadsheet ID, a valueInputOption, and one or more
     * ValueRanges.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the spreadsheet to update.
     *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
     * value.
     *
     *     resource: {
     *       // How the input data should be interpreted.
     *       valueInputOption: '',  // TODO: Update placeholder value.
     *
     *       // The new values to apply to the spreadsheet.
     *       data: [],  // TODO: Update placeholder value.
     *
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.values.batchUpdate(request, function(err, response)
     * { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.values.batchUpdate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.spreadsheetId The ID of the spreadsheet to update.
     * @param {().BatchUpdateValuesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchUpdate(
        params?: Params$Resource$Spreadsheets$Values$Batchupdate,
        options?: MethodOptions):
        AxiosPromise<Schema$BatchUpdateValuesResponse>;
    batchUpdate(
        params: Params$Resource$Spreadsheets$Values$Batchupdate,
        options: MethodOptions|
        BodyResponseCallback<Schema$BatchUpdateValuesResponse>,
        callback: BodyResponseCallback<Schema$BatchUpdateValuesResponse>): void;
    batchUpdate(
        params: Params$Resource$Spreadsheets$Values$Batchupdate,
        callback: BodyResponseCallback<Schema$BatchUpdateValuesResponse>): void;
    batchUpdate(
        callback: BodyResponseCallback<Schema$BatchUpdateValuesResponse>): void;
    batchUpdate(
        paramsOrCallback?: Params$Resource$Spreadsheets$Values$Batchupdate|
        BodyResponseCallback<Schema$BatchUpdateValuesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BatchUpdateValuesResponse>,
        callback?: BodyResponseCallback<Schema$BatchUpdateValuesResponse>):
        void|AxiosPromise<Schema$BatchUpdateValuesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Spreadsheets$Values$Batchupdate;
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
              url: (rootUrl +
                    '/v4/spreadsheets/{spreadsheetId}/values:batchUpdate')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BatchUpdateValuesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$BatchUpdateValuesResponse>(parameters);
      }
    }


    /**
     * sheets.spreadsheets.values.batchUpdateByDataFilter
     * @desc Sets values in one or more ranges of a spreadsheet. The caller must
     * specify the spreadsheet ID, a valueInputOption, and one or more
     * DataFilterValueRanges.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the spreadsheet to update.
     *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
     * value.
     *
     *     resource: {
     *       // How the input data should be interpreted.
     *       valueInputOption: '',  // TODO: Update placeholder value.
     *
     *       // The new values to apply to the spreadsheet.  If more than one
     * range is
     *       // matched by the specified DataFilter the specified values will be
     *       // applied to all of those ranges.
     *       data: [],  // TODO: Update placeholder value.
     *
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.values.batchUpdateByDataFilter(request,
     * function(err, response) { if (err) { console.error(err); return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.values.batchUpdateByDataFilter
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.spreadsheetId The ID of the spreadsheet to update.
     * @param {().BatchUpdateValuesByDataFilterRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchUpdateByDataFilter(
        params?: Params$Resource$Spreadsheets$Values$Batchupdatebydatafilter,
        options?: MethodOptions):
        AxiosPromise<Schema$BatchUpdateValuesByDataFilterResponse>;
    batchUpdateByDataFilter(
        params: Params$Resource$Spreadsheets$Values$Batchupdatebydatafilter,
        options: MethodOptions|
        BodyResponseCallback<Schema$BatchUpdateValuesByDataFilterResponse>,
        callback:
            BodyResponseCallback<Schema$BatchUpdateValuesByDataFilterResponse>):
        void;
    batchUpdateByDataFilter(
        params: Params$Resource$Spreadsheets$Values$Batchupdatebydatafilter,
        callback:
            BodyResponseCallback<Schema$BatchUpdateValuesByDataFilterResponse>):
        void;
    batchUpdateByDataFilter(
        callback:
            BodyResponseCallback<Schema$BatchUpdateValuesByDataFilterResponse>):
        void;
    batchUpdateByDataFilter(
        paramsOrCallback?:
            Params$Resource$Spreadsheets$Values$Batchupdatebydatafilter|
        BodyResponseCallback<Schema$BatchUpdateValuesByDataFilterResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BatchUpdateValuesByDataFilterResponse>,
        callback?:
            BodyResponseCallback<Schema$BatchUpdateValuesByDataFilterResponse>):
        void|AxiosPromise<Schema$BatchUpdateValuesByDataFilterResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Spreadsheets$Values$Batchupdatebydatafilter;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Spreadsheets$Values$Batchupdatebydatafilter;
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
              url:
                  (rootUrl +
                   '/v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$BatchUpdateValuesByDataFilterResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$BatchUpdateValuesByDataFilterResponse>(
            parameters);
      }
    }


    /**
     * sheets.spreadsheets.values.clear
     * @desc Clears values from a spreadsheet. The caller must specify the
     * spreadsheet ID and range. Only values are cleared -- all other properties
     * of the cell (such as formatting, data validation, etc..) are kept.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the spreadsheet to update.
     *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
     * value.
     *
     *     // The A1 notation of the values to clear.
     *     range: 'my-range',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.values.clear(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.values.clear
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.range The A1 notation of the values to clear.
     * @param {string} params.spreadsheetId The ID of the spreadsheet to update.
     * @param {().ClearValuesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    clear(
        params?: Params$Resource$Spreadsheets$Values$Clear,
        options?: MethodOptions): AxiosPromise<Schema$ClearValuesResponse>;
    clear(
        params: Params$Resource$Spreadsheets$Values$Clear,
        options: MethodOptions|BodyResponseCallback<Schema$ClearValuesResponse>,
        callback: BodyResponseCallback<Schema$ClearValuesResponse>): void;
    clear(
        params: Params$Resource$Spreadsheets$Values$Clear,
        callback: BodyResponseCallback<Schema$ClearValuesResponse>): void;
    clear(callback: BodyResponseCallback<Schema$ClearValuesResponse>): void;
    clear(
        paramsOrCallback?: Params$Resource$Spreadsheets$Values$Clear|
        BodyResponseCallback<Schema$ClearValuesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ClearValuesResponse>,
        callback?: BodyResponseCallback<Schema$ClearValuesResponse>):
        void|AxiosPromise<Schema$ClearValuesResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Spreadsheets$Values$Clear;
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
              url: (rootUrl +
                    '/v4/spreadsheets/{spreadsheetId}/values/{range}:clear')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['spreadsheetId', 'range'],
        pathParams: ['range', 'spreadsheetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ClearValuesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ClearValuesResponse>(parameters);
      }
    }


    /**
     * sheets.spreadsheets.values.get
     * @desc Returns a range of values from a spreadsheet. The caller must
     * specify the spreadsheet ID and a range.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the spreadsheet to retrieve data from.
     *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
     * value.
     *
     *     // The A1 notation of the values to retrieve.
     *     range: 'my-range',  // TODO: Update placeholder value.
     *
     *     // How values should be represented in the output.
     *     // The default render option is ValueRenderOption.FORMATTED_VALUE.
     *     valueRenderOption: '',  // TODO: Update placeholder value.
     *
     *     // How dates, times, and durations should be represented in the
     * output.
     *     // This is ignored if value_render_option is
     *     // FORMATTED_VALUE.
     *     // The default dateTime render option is
     * [DateTimeRenderOption.SERIAL_NUMBER]. dateTimeRenderOption: '',  // TODO:
     * Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.values.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/drive.readonly'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   //   'https://www.googleapis.com/auth/spreadsheets.readonly'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.values.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.dateTimeRenderOption How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
     * @param {string=} params.majorDimension The major dimension that results should use.  For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return `[[1,3],[2,4]]`.
     * @param {string} params.range The A1 notation of the values to retrieve.
     * @param {string} params.spreadsheetId The ID of the spreadsheet to retrieve data from.
     * @param {string=} params.valueRenderOption How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Spreadsheets$Values$Get,
        options?: MethodOptions): AxiosPromise<Schema$ValueRange>;
    get(params: Params$Resource$Spreadsheets$Values$Get,
        options: MethodOptions|BodyResponseCallback<Schema$ValueRange>,
        callback: BodyResponseCallback<Schema$ValueRange>): void;
    get(params: Params$Resource$Spreadsheets$Values$Get,
        callback: BodyResponseCallback<Schema$ValueRange>): void;
    get(callback: BodyResponseCallback<Schema$ValueRange>): void;
    get(paramsOrCallback?: Params$Resource$Spreadsheets$Values$Get|
        BodyResponseCallback<Schema$ValueRange>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ValueRange>,
        callback?: BodyResponseCallback<Schema$ValueRange>):
        void|AxiosPromise<Schema$ValueRange> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Spreadsheets$Values$Get;
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
              url: (rootUrl + '/v4/spreadsheets/{spreadsheetId}/values/{range}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['spreadsheetId', 'range'],
        pathParams: ['range', 'spreadsheetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ValueRange>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ValueRange>(parameters);
      }
    }


    /**
     * sheets.spreadsheets.values.update
     * @desc Sets values in a range of a spreadsheet. The caller must specify
     * the spreadsheet ID, range, and a valueInputOption.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Sheets API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/sheets
     * // 2. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var sheets = google.sheets('v4');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The ID of the spreadsheet to update.
     *     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder
     * value.
     *
     *     // The A1 notation of the values to update.
     *     range: 'my-range',  // TODO: Update placeholder value.
     *
     *     // How the input data should be interpreted.
     *     valueInputOption: '',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing
     * properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   sheets.spreadsheets.values.update(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   // TODO: Change placeholder below to generate authentication
     * credentials. See
     *   //
     * https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
     *   //
     *   // Authorize using one of the following scopes:
     *   //   'https://www.googleapis.com/auth/drive'
     *   //   'https://www.googleapis.com/auth/drive.file'
     *   //   'https://www.googleapis.com/auth/spreadsheets'
     *   var authClient = null;
     *
     *   if (authClient == null) {
     *     console.log('authentication failed');
     *     return;
     *   }
     *   callback(authClient);
     * }
     * @alias sheets.spreadsheets.values.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.includeValuesInResponse Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. If the range to write was larger than than the range actually written, the response will include all values in the requested range (excluding trailing empty rows and columns).
     * @param {string} params.range The A1 notation of the values to update.
     * @param {string=} params.responseDateTimeRenderOption Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is DateTimeRenderOption.SERIAL_NUMBER.
     * @param {string=} params.responseValueRenderOption Determines how values in the response should be rendered. The default render option is ValueRenderOption.FORMATTED_VALUE.
     * @param {string} params.spreadsheetId The ID of the spreadsheet to update.
     * @param {string=} params.valueInputOption How the input data should be interpreted.
     * @param {().ValueRange} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Spreadsheets$Values$Update,
        options?: MethodOptions): AxiosPromise<Schema$UpdateValuesResponse>;
    update(
        params: Params$Resource$Spreadsheets$Values$Update,
        options: MethodOptions|
        BodyResponseCallback<Schema$UpdateValuesResponse>,
        callback: BodyResponseCallback<Schema$UpdateValuesResponse>): void;
    update(
        params: Params$Resource$Spreadsheets$Values$Update,
        callback: BodyResponseCallback<Schema$UpdateValuesResponse>): void;
    update(callback: BodyResponseCallback<Schema$UpdateValuesResponse>): void;
    update(
        paramsOrCallback?: Params$Resource$Spreadsheets$Values$Update|
        BodyResponseCallback<Schema$UpdateValuesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$UpdateValuesResponse>,
        callback?: BodyResponseCallback<Schema$UpdateValuesResponse>):
        void|AxiosPromise<Schema$UpdateValuesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Spreadsheets$Values$Update;
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
              url: (rootUrl + '/v4/spreadsheets/{spreadsheetId}/values/{range}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['spreadsheetId', 'range'],
        pathParams: ['range', 'spreadsheetId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$UpdateValuesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UpdateValuesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Spreadsheets$Values$Append {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Determines if the update response should include the values of the cells
     * that were appended. By default, responses do not include the updated
     * values.
     */
    includeValuesInResponse?: boolean;
    /**
     * How the input data should be inserted.
     */
    insertDataOption?: string;
    /**
     * The A1 notation of a range to search for a logical table of data. Values
     * will be appended after the last row of the table.
     */
    range?: string;
    /**
     * Determines how dates, times, and durations in the response should be
     * rendered. This is ignored if response_value_render_option is
     * FORMATTED_VALUE. The default dateTime render option is
     * [DateTimeRenderOption.SERIAL_NUMBER].
     */
    responseDateTimeRenderOption?: string;
    /**
     * Determines how values in the response should be rendered. The default
     * render option is ValueRenderOption.FORMATTED_VALUE.
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
  export interface Params$Resource$Spreadsheets$Values$Batchclear {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the spreadsheet to update.
     */
    spreadsheetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchClearValuesRequest;
  }
  export interface Params$Resource$Spreadsheets$Values$Batchclearbydatafilter {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the spreadsheet to update.
     */
    spreadsheetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchClearValuesByDataFilterRequest;
  }
  export interface Params$Resource$Spreadsheets$Values$Batchget {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * How dates, times, and durations should be represented in the output. This
     * is ignored if value_render_option is FORMATTED_VALUE. The default
     * dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
     */
    dateTimeRenderOption?: string;
    /**
     * The major dimension that results should use.  For example, if the
     * spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting
     * `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas
     * requesting `range=A1:B2,majorDimension=COLUMNS` will return
     * `[[1,3],[2,4]]`.
     */
    majorDimension?: string;
    /**
     * The A1 notation of the values to retrieve.
     */
    ranges?: string;
    /**
     * The ID of the spreadsheet to retrieve data from.
     */
    spreadsheetId?: string;
    /**
     * How values should be represented in the output. The default render option
     * is ValueRenderOption.FORMATTED_VALUE.
     */
    valueRenderOption?: string;
  }
  export interface Params$Resource$Spreadsheets$Values$Batchgetbydatafilter {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the spreadsheet to retrieve data from.
     */
    spreadsheetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchGetValuesByDataFilterRequest;
  }
  export interface Params$Resource$Spreadsheets$Values$Batchupdate {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the spreadsheet to update.
     */
    spreadsheetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdateValuesRequest;
  }
  export interface Params$Resource$Spreadsheets$Values$Batchupdatebydatafilter {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the spreadsheet to update.
     */
    spreadsheetId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchUpdateValuesByDataFilterRequest;
  }
  export interface Params$Resource$Spreadsheets$Values$Clear {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The A1 notation of the values to clear.
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
  export interface Params$Resource$Spreadsheets$Values$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * How dates, times, and durations should be represented in the output. This
     * is ignored if value_render_option is FORMATTED_VALUE. The default
     * dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
     */
    dateTimeRenderOption?: string;
    /**
     * The major dimension that results should use.  For example, if the
     * spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting
     * `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas
     * requesting `range=A1:B2,majorDimension=COLUMNS` will return
     * `[[1,3],[2,4]]`.
     */
    majorDimension?: string;
    /**
     * The A1 notation of the values to retrieve.
     */
    range?: string;
    /**
     * The ID of the spreadsheet to retrieve data from.
     */
    spreadsheetId?: string;
    /**
     * How values should be represented in the output. The default render option
     * is ValueRenderOption.FORMATTED_VALUE.
     */
    valueRenderOption?: string;
  }
  export interface Params$Resource$Spreadsheets$Values$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Determines if the update response should include the values of the cells
     * that were updated. By default, responses do not include the updated
     * values. If the range to write was larger than than the range actually
     * written, the response will include all values in the requested range
     * (excluding trailing empty rows and columns).
     */
    includeValuesInResponse?: boolean;
    /**
     * The A1 notation of the values to update.
     */
    range?: string;
    /**
     * Determines how dates, times, and durations in the response should be
     * rendered. This is ignored if response_value_render_option is
     * FORMATTED_VALUE. The default dateTime render option is
     * DateTimeRenderOption.SERIAL_NUMBER.
     */
    responseDateTimeRenderOption?: string;
    /**
     * Determines how values in the response should be rendered. The default
     * render option is ValueRenderOption.FORMATTED_VALUE.
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
