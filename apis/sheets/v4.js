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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Google Sheets API
 *
 * Reads and writes Google Sheets.
 *
 * @example
 * var google = require('googleapis');
 * var sheets = google.sheets('v4');
 *
 * @namespace sheets
 * @type {Function}
 * @version v4
 * @variation v4
 * @param {object=} options Options for Sheets
 */
function Sheets(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.spreadsheets = {

    /**
     * sheets.spreadsheets.create
     *
     * @desc Creates a spreadsheet, returning the newly created spreadsheet.
     *
     * @alias sheets.spreadsheets.create
     * @memberOf! sheets(v4)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://sheets.googleapis.com/v4/spreadsheets',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * sheets.spreadsheets.get
     *
     * @desc Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID.  By default, data within grids will not be returned. You can include grid data one of two ways:  * Specify a field mask listing your desired fields using the `fields` URL parameter in HTTP  * Set the includeGridData URL parameter to true.  If a field mask is set, the `includeGridData` parameter is ignored  For large spreadsheets, it is recommended to retrieve only the specific fields of the spreadsheet that you want.  To retrieve only subsets of the spreadsheet, use the ranges URL parameter. Multiple ranges can be specified.  Limiting the range will return only the portions of the spreadsheet that intersect the requested ranges. Ranges are specified using A1 notation.
     *
     * @alias sheets.spreadsheets.get
     * @memberOf! sheets(v4)
     *
     * @param {object} params Parameters for request
     * @param {string} params.spreadsheetId The spreadsheet to request.
     * @param {string=} params.ranges The ranges to retrieve from the spreadsheet.
     * @param {boolean=} params.includeGridData True if grid data should be returned. This parameter is ignored if a field mask was set in the request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * sheets.spreadsheets.batchUpdate
     *
     * @desc Applies one or more updates to the spreadsheet.  Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied.  Some requests have replies to give you some information about how they are applied. The replies will mirror the requests.  For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order.  Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.
     *
     * @alias sheets.spreadsheets.batchUpdate
     * @memberOf! sheets(v4)
     *
     * @param {object} params Parameters for request
     * @param {string} params.spreadsheetId The spreadsheet to apply the updates to.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchUpdate: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}:batchUpdate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['spreadsheetId'],
        pathParams: ['spreadsheetId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    values: {

      /**
       * sheets.spreadsheets.values.update
       *
       * @desc Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.
       *
       * @alias sheets.spreadsheets.values.update
       * @memberOf! sheets(v4)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.valueInputOption How the input data should be interpreted.
       * @param {string} params.spreadsheetId The ID of the spreadsheet to update.
       * @param {string} params.range The A1 notation of the values to update.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['spreadsheetId', 'range'],
          pathParams: ['spreadsheetId', 'range'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * sheets.spreadsheets.values.get
       *
       * @desc Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.
       *
       * @alias sheets.spreadsheets.values.get
       * @memberOf! sheets(v4)
       *
       * @param {object} params Parameters for request
       * @param {string} params.spreadsheetId The ID of the spreadsheet to retrieve data from.
       * @param {string=} params.valueRenderOption How values should be represented in the output.
       * @param {string=} params.dateTimeRenderOption How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE.
       * @param {string} params.range The A1 notation of the values to retrieve.
       * @param {string=} params.majorDimension The major dimension that results should use.  For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return `[[1,3],[2,4]]`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{range}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['spreadsheetId', 'range'],
          pathParams: ['spreadsheetId', 'range'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * sheets.spreadsheets.values.batchGet
       *
       * @desc Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.
       *
       * @alias sheets.spreadsheets.values.batchGet
       * @memberOf! sheets(v4)
       *
       * @param {object} params Parameters for request
       * @param {string} params.spreadsheetId The ID of the spreadsheet to retrieve data from.
       * @param {string=} params.ranges The A1 notation of the values to retrieve.
       * @param {string=} params.valueRenderOption How values should be represented in the output.
       * @param {string=} params.dateTimeRenderOption How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE.
       * @param {string=} params.majorDimension The major dimension that results should use.  For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return `[[1,3],[2,4]]`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      batchGet: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchGet',
            method: 'GET'
          },
          params: params,
          requiredParams: ['spreadsheetId'],
          pathParams: ['spreadsheetId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * sheets.spreadsheets.values.batchUpdate
       *
       * @desc Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.
       *
       * @alias sheets.spreadsheets.values.batchUpdate
       * @memberOf! sheets(v4)
       *
       * @param {object} params Parameters for request
       * @param {string} params.spreadsheetId The ID of the spreadsheet to update.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      batchUpdate: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchUpdate',
            method: 'POST'
          },
          params: params,
          requiredParams: ['spreadsheetId'],
          pathParams: ['spreadsheetId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    sheets: {

      /**
       * sheets.spreadsheets.sheets.copyTo
       *
       * @desc Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.
       *
       * @alias sheets.spreadsheets.sheets.copyTo
       * @memberOf! sheets(v4)
       *
       * @param {object} params Parameters for request
       * @param {integer} params.sheetId The ID of the sheet to copy.
       * @param {string} params.spreadsheetId The ID of the spreadsheet containing the sheet to copy.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      copyTo: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo',
            method: 'POST'
          },
          params: params,
          requiredParams: ['spreadsheetId', 'sheetId'],
          pathParams: ['sheetId', 'spreadsheetId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

module.exports = Sheets;
