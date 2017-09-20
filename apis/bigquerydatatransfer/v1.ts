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

import createAPIRequest from '../../lib/apirequest';

/**
 * BigQuery Data Transfer API
 *
 * Transfers data from partner SaaS applications to Google BigQuery on a scheduled, managed basis.
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
function Bigquerydatatransfer(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.projects = {
    dataSources: {

      /**
       * bigquerydatatransfer.projects.dataSources.checkValidCreds
       *
       * @desc Returns true if valid credentials exist for the given data source and requesting user. Some data sources doesn't support service account, so we need to talk to them on behalf of the end user. This API just checks whether we have OAuth token for the particular user, which is a pre-requisite before user can create a transfer config.
       *
       * @alias bigquerydatatransfer.projects.dataSources.checkValidCreds
       * @memberOf! bigquerydatatransfer(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The data source in the form: `projects/{project_id}/dataSources/{data_source_id}`
       * @param {bigquerydatatransfer(v1).CheckValidCredsRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      checkValidCreds: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}:checkValidCreds').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * bigquerydatatransfer.projects.dataSources.get
       *
       * @desc Retrieves a supported data source and returns its settings, which can be used for UI rendering.
       *
       * @alias bigquerydatatransfer.projects.dataSources.get
       * @memberOf! bigquerydatatransfer(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/dataSources/{data_source_id}`
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * bigquerydatatransfer.projects.dataSources.list
       *
       * @desc Lists supported data sources and returns their settings, which can be used for UI rendering.
       *
       * @alias bigquerydatatransfer.projects.dataSources.list
       * @memberOf! bigquerydatatransfer(v1)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
       * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
       * @param {string} params.parent The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}`
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}/dataSources').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },
    locations: {

      /**
       * bigquerydatatransfer.projects.locations.get
       *
       * @desc Get information about a location.
       *
       * @alias bigquerydatatransfer.projects.locations.get
       * @memberOf! bigquerydatatransfer(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name for the location.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * bigquerydatatransfer.projects.locations.list
       *
       * @desc Lists information about the supported locations for this service.
       *
       * @alias bigquerydatatransfer.projects.locations.list
       * @memberOf! bigquerydatatransfer(v1)
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
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}/locations').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },
      dataSources: {

        /**
         * bigquerydatatransfer.projects.locations.dataSources.checkValidCreds
         *
         * @desc Returns true if valid credentials exist for the given data source and requesting user. Some data sources doesn't support service account, so we need to talk to them on behalf of the end user. This API just checks whether we have OAuth token for the particular user, which is a pre-requisite before user can create a transfer config.
         *
         * @alias bigquerydatatransfer.projects.locations.dataSources.checkValidCreds
         * @memberOf! bigquerydatatransfer(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The data source in the form: `projects/{project_id}/dataSources/{data_source_id}`
         * @param {bigquerydatatransfer(v1).CheckValidCredsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        checkValidCreds: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{name}:checkValidCreds').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * bigquerydatatransfer.projects.locations.dataSources.get
         *
         * @desc Retrieves a supported data source and returns its settings, which can be used for UI rendering.
         *
         * @alias bigquerydatatransfer.projects.locations.dataSources.get
         * @memberOf! bigquerydatatransfer(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/dataSources/{data_source_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * bigquerydatatransfer.projects.locations.dataSources.list
         *
         * @desc Lists supported data sources and returns their settings, which can be used for UI rendering.
         *
         * @alias bigquerydatatransfer.projects.locations.dataSources.list
         * @memberOf! bigquerydatatransfer(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
         * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
         * @param {string} params.parent The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{parent}/dataSources').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },
      transferConfigs: {

        /**
         * bigquerydatatransfer.projects.locations.transferConfigs.create
         *
         * @desc Creates a new data transfer configuration.
         *
         * @alias bigquerydatatransfer.projects.locations.transferConfigs.create
         * @memberOf! bigquerydatatransfer(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. This is required if new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
         * @param {string} params.parent The BigQuery project id where the transfer configuration should be created. Must be in the format /projects/{project_id}/locations/{location_id} or /projects/{project_id}/locations/- In case when '-' is specified as location_id, location is infered from the destination dataset region.
         * @param {bigquerydatatransfer(v1).TransferConfig} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{parent}/transferConfigs').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * bigquerydatatransfer.projects.locations.transferConfigs.delete
         *
         * @desc Deletes a data transfer configuration, including any associated transfer runs and logs.
         *
         * @alias bigquerydatatransfer.projects.locations.transferConfigs.delete
         * @memberOf! bigquerydatatransfer(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * bigquerydatatransfer.projects.locations.transferConfigs.get
         *
         * @desc Returns information about a data transfer config.
         *
         * @alias bigquerydatatransfer.projects.locations.transferConfigs.get
         * @memberOf! bigquerydatatransfer(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * bigquerydatatransfer.projects.locations.transferConfigs.list
         *
         * @desc Returns information about all data transfers in the project.
         *
         * @alias bigquerydatatransfer.projects.locations.transferConfigs.list
         * @memberOf! bigquerydatatransfer(v1)
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
        list: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{parent}/transferConfigs').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * bigquerydatatransfer.projects.locations.transferConfigs.patch
         *
         * @desc Updates a data transfer configuration. All fields must be set, even if they are not updated.
         *
         * @alias bigquerydatatransfer.projects.locations.transferConfigs.patch
         * @memberOf! bigquerydatatransfer(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the gaia id of the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
         * @param {string} params.name The resource name of the transfer config. Transfer config names have the form `projects/{project_id}/transferConfigs/{config_id}`. Where `config_id` is usually a uuid, even though it is not guaranteed or required. The name is ignored when creating a transfer config.
         * @param {string=} params.updateMask Required list of fields to be updated in this request.
         * @param {bigquerydatatransfer(v1).TransferConfig} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * bigquerydatatransfer.projects.locations.transferConfigs.scheduleRuns
         *
         * @desc Creates transfer runs for a time range [range_start_time, range_end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range.
         *
         * @alias bigquerydatatransfer.projects.locations.transferConfigs.scheduleRuns
         * @memberOf! bigquerydatatransfer(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}`.
         * @param {bigquerydatatransfer(v1).ScheduleTransferRunsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        scheduleRuns: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{parent}:scheduleRuns').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },
        runs: {

          /**
           * bigquerydatatransfer.projects.locations.transferConfigs.runs.delete
           *
           * @desc Deletes the specified transfer run.
           *
           * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.delete
           * @memberOf! bigquerydatatransfer(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          delete: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              }, options),
              params: params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * bigquerydatatransfer.projects.locations.transferConfigs.runs.get
           *
           * @desc Returns information about the particular transfer run.
           *
           * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.get
           * @memberOf! bigquerydatatransfer(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          get: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * bigquerydatatransfer.projects.locations.transferConfigs.runs.list
           *
           * @desc Returns information about running and completed jobs.
           *
           * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.list
           * @memberOf! bigquerydatatransfer(v1)
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
          list: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1/{parent}/runs').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },
          transferLogs: {

            /**
             * bigquerydatatransfer.projects.locations.transferConfigs.runs.transferLogs.list
             *
             * @desc Returns user facing log messages for the data transfer run.
             *
             * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.transferLogs.list
             * @memberOf! bigquerydatatransfer(v1)
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
            list: function (params, options, callback) {
              if (typeof options === 'function') {
                callback = options;
                options = {};
              }
              options || (options = {});

              const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

              const parameters = {
                options: Object.assign({
                  url: (rootUrl + '/v1/{parent}/transferLogs').replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                }, options),
                params: params,
                requiredParams: ['parent'],
                pathParams: ['parent'],
                context: self
              };

              return createAPIRequest(parameters, callback);
            }
          }
        }
      }
    },
    transferConfigs: {

      /**
       * bigquerydatatransfer.projects.transferConfigs.create
       *
       * @desc Creates a new data transfer configuration.
       *
       * @alias bigquerydatatransfer.projects.transferConfigs.create
       * @memberOf! bigquerydatatransfer(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. This is required if new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
       * @param {string} params.parent The BigQuery project id where the transfer configuration should be created. Must be in the format /projects/{project_id}/locations/{location_id} or /projects/{project_id}/locations/- In case when '-' is specified as location_id, location is infered from the destination dataset region.
       * @param {bigquerydatatransfer(v1).TransferConfig} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}/transferConfigs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * bigquerydatatransfer.projects.transferConfigs.delete
       *
       * @desc Deletes a data transfer configuration, including any associated transfer runs and logs.
       *
       * @alias bigquerydatatransfer.projects.transferConfigs.delete
       * @memberOf! bigquerydatatransfer(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * bigquerydatatransfer.projects.transferConfigs.get
       *
       * @desc Returns information about a data transfer config.
       *
       * @alias bigquerydatatransfer.projects.transferConfigs.get
       * @memberOf! bigquerydatatransfer(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}`
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * bigquerydatatransfer.projects.transferConfigs.list
       *
       * @desc Returns information about all data transfers in the project.
       *
       * @alias bigquerydatatransfer.projects.transferConfigs.list
       * @memberOf! bigquerydatatransfer(v1)
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
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}/transferConfigs').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * bigquerydatatransfer.projects.transferConfigs.patch
       *
       * @desc Updates a data transfer configuration. All fields must be set, even if they are not updated.
       *
       * @alias bigquerydatatransfer.projects.transferConfigs.patch
       * @memberOf! bigquerydatatransfer(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the gaia id of the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
       * @param {string} params.name The resource name of the transfer config. Transfer config names have the form `projects/{project_id}/transferConfigs/{config_id}`. Where `config_id` is usually a uuid, even though it is not guaranteed or required. The name is ignored when creating a transfer config.
       * @param {string=} params.updateMask Required list of fields to be updated in this request.
       * @param {bigquerydatatransfer(v1).TransferConfig} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      patch: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * bigquerydatatransfer.projects.transferConfigs.scheduleRuns
       *
       * @desc Creates transfer runs for a time range [range_start_time, range_end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range.
       *
       * @alias bigquerydatatransfer.projects.transferConfigs.scheduleRuns
       * @memberOf! bigquerydatatransfer(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent Transfer configuration name in the form: `projects/{project_id}/transferConfigs/{config_id}`.
       * @param {bigquerydatatransfer(v1).ScheduleTransferRunsRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      scheduleRuns: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}:scheduleRuns').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },
      runs: {

        /**
         * bigquerydatatransfer.projects.transferConfigs.runs.delete
         *
         * @desc Deletes the specified transfer run.
         *
         * @alias bigquerydatatransfer.projects.transferConfigs.runs.delete
         * @memberOf! bigquerydatatransfer(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * bigquerydatatransfer.projects.transferConfigs.runs.get
         *
         * @desc Returns information about the particular transfer run.
         *
         * @alias bigquerydatatransfer.projects.transferConfigs.runs.get
         * @memberOf! bigquerydatatransfer(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The field will contain name of the resource requested, for example: `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * bigquerydatatransfer.projects.transferConfigs.runs.list
         *
         * @desc Returns information about running and completed jobs.
         *
         * @alias bigquerydatatransfer.projects.transferConfigs.runs.list
         * @memberOf! bigquerydatatransfer(v1)
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
        list: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{parent}/runs').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },
        transferLogs: {

          /**
           * bigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list
           *
           * @desc Returns user facing log messages for the data transfer run.
           *
           * @alias bigquerydatatransfer.projects.transferConfigs.runs.transferLogs.list
           * @memberOf! bigquerydatatransfer(v1)
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
          list: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1/{parent}/transferLogs').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        }
      }
    }
  };
}

/**
 * @typedef CheckValidCredsRequest
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
 */

/**
 * @typedef CheckValidCredsResponse
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
 * @property {boolean} hasValidCreds If set to `true`, the credentials exist and are valid.
 */

/**
 * @typedef DataSource
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
* @property {string} authorizationType Indicates the type of authorization.
* @property {string} clientId Data source client id which should be used to receive refresh token.
When not supplied, no offline credentials are populated for data transfer.
* @property {string} dataRefreshType Specifies whether the data source supports automatic data refresh for the
past few days, and how it&#39;s supported.
For some data sources, data might not be complete until a few days later,
so it&#39;s useful to refresh data automatically.
* @property {string} dataSourceId Data source id.
* @property {integer} defaultDataRefreshWindowDays Default data refresh window on days.
Only meaningful when `data_refresh_type` = `SLIDING_WINDOW`.
* @property {string} defaultSchedule Default data transfer schedule.
Examples of valid schedules include:
`1st,3rd monday of month 15:30`,
`every wed,fri of jan,jun 13:15`, and
`first sunday of quarter 00:00`.
* @property {string} description User friendly data source description string.
* @property {string} displayName User friendly data source name.
* @property {string} helpUrl Url for the help document for this data source.
* @property {boolean} manualRunsDisabled Disables backfilling and manual run scheduling
for the data source.
* @property {string} minimumScheduleInterval The minimum interval between two consecutive scheduled runs.
* @property {string} name Data source resource name.
* @property {bigquerydatatransfer(v1).DataSourceParameter[]} parameters Data source parameters.
* @property {string[]} scopes Api auth scopes for which refresh token needs to be obtained. Only valid
when `client_id` is specified. Ignored otherwise. These are scopes needed
by a data source to prepare data and ingest them into BigQuery,
e.g., https://www.googleapis.com/auth/bigquery
* @property {boolean} supportsCustomSchedule Specifies whether the data source supports a user defined schedule, or
operates on the default schedule.
When set to `true`, user can override default schedule.
* @property {boolean} supportsMultipleTransfers Indicates whether the data source supports multiple transfers
to different BigQuery targets.
* @property {string} transferType Transfer type. Currently supports only batch transfers,
which are transfers that use the BigQuery batch APIs (load or
query) to ingest the data.
* @property {integer} updateDeadlineSeconds The number of seconds to wait for an update from the data source
before BigQuery marks the transfer as failed.
*/

/**
 * @typedef DataSourceParameter
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
* @property {string[]} allowedValues All possible values for the parameter.
* @property {string} description Parameter description.
* @property {string} displayName Parameter display name in the user interface.
* @property {bigquerydatatransfer(v1).DataSourceParameter[]} fields When parameter is a record, describes child fields.
* @property {boolean} immutable Cannot be changed after initial creation.
* @property {number} maxValue For integer and double values specifies maxminum allowed value.
* @property {number} minValue For integer and double values specifies minimum allowed value.
* @property {string} paramId Parameter identifier.
* @property {boolean} recurse If set to true, schema should be taken from the parent with the same
parameter_id. Only applicable when parameter type is RECORD.
* @property {boolean} repeated Can parameter have multiple values.
* @property {boolean} required Is parameter required.
* @property {string} type Parameter type.
* @property {string} validationDescription Description of the requirements for this field, in case the user input does
not fulfill the regex pattern or min/max values.
* @property {string} validationHelpUrl URL to a help document to further explain the naming requirements.
* @property {string} validationRegex Regular expression which can be used for parameter validation.
*/

/**
 * @typedef Empty
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
 */

/**
 * @typedef ListDataSourcesResponse
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
* @property {bigquerydatatransfer(v1).DataSource[]} dataSources List of supported data sources and their transfer settings.
* @property {string} nextPageToken The next-pagination token. For multiple-page list results,
this token can be used as the
`ListDataSourcesRequest.page_token`
to request the next page of list results.
Output only.
*/

/**
 * @typedef ListLocationsResponse
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
 * @property {bigquerydatatransfer(v1).Location[]} locations A list of locations that matches the specified filter in the request.
 * @property {string} nextPageToken The standard List next-page token.
 */

/**
 * @typedef ListTransferConfigsResponse
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
* @property {string} nextPageToken The next-pagination token. For multiple-page list results,
this token can be used as the
`ListTransferConfigsRequest.page_token`
to request the next page of list results.
Output only.
* @property {bigquerydatatransfer(v1).TransferConfig[]} transferConfigs The stored pipeline transfer configurations.
Output only.
*/

/**
 * @typedef ListTransferLogsResponse
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
* @property {string} nextPageToken The next-pagination token. For multiple-page list results,
this token can be used as the
`GetTransferRunLogRequest.page_token`
to request the next page of list results.
Output only.
* @property {bigquerydatatransfer(v1).TransferMessage[]} transferMessages The stored pipeline transfer messages.
Output only.
*/

/**
 * @typedef ListTransferRunsResponse
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
* @property {string} nextPageToken The next-pagination token. For multiple-page list results,
this token can be used as the
`ListTransferRunsRequest.page_token`
to request the next page of list results.
Output only.
* @property {bigquerydatatransfer(v1).TransferRun[]} transferRuns The stored pipeline transfer runs.
Output only.
*/

/**
 * @typedef Location
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
* @property {object} labels Cross-service attributes for the location. For example

    {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
* @property {string} locationId The canonical id for this location. For example: `&quot;us-east1&quot;`.
* @property {object} metadata Service-specific metadata. For example the available capacity at the given
location.
* @property {string} name Resource name for the location, which may vary between implementations.
For example: `&quot;projects/example-project/locations/us-east1&quot;`
*/

/**
 * @typedef ScheduleTransferRunsRequest
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
* @property {string} endTime End time of the range of transfer runs. For example,
`&quot;2017-05-30T00:00:00+00:00&quot;`.
* @property {string} startTime Start time of the range of transfer runs. For example,
`&quot;2017-05-25T00:00:00+00:00&quot;`.
*/

/**
 * @typedef ScheduleTransferRunsResponse
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
 * @property {bigquerydatatransfer(v1).TransferRun[]} runs The transfer runs that were scheduled.
 */

/**
 * @typedef TransferConfig
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
* @property {integer} dataRefreshWindowDays The number of days to look back to automatically refresh the data.
For example, if `data_refresh_window_days = 10`, then every day
BigQuery reingests data for [today-10, today-1], rather than ingesting data
for just [today-1].
Only valid if the data source supports the feature. Set the value to  0
to use the default value.
* @property {string} dataSourceId Data source id. Cannot be changed once data transfer is created.
* @property {string} datasetRegion Region in which BigQuery dataset is located. Currently possible values are:
&quot;US&quot; and &quot;EU&quot;.
Output only.
* @property {string} destinationDatasetId The BigQuery target dataset id.
* @property {boolean} disabled Is this config disabled. When set to true, no runs are scheduled
for a given transfer.
* @property {string} displayName User specified display name for the data transfer.
* @property {string} name The resource name of the transfer config.
Transfer config names have the form
`projects/{project_id}/transferConfigs/{config_id}`.
Where `config_id` is usually a uuid, even though it is not
guaranteed or required. The name is ignored when creating a transfer
config.
* @property {string} nextRunTime Next time when data transfer will run.
Output only.
* @property {object} params Data transfer specific parameters.
* @property {string} schedule Data transfer schedule.
If the data source does not support a custom schedule, this should be
empty. If it is empty, the default value for the data source will be
used.
The specified times are in UTC.
Examples of valid format:
`1st,3rd monday of month 15:30`,
`every wed,fri of jan,jun 13:15`, and
`first sunday of quarter 00:00`.
See more explanation about the format here:
https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
NOTE: the granularity should be at least 8 hours, or less frequent.
* @property {string} state State of the most recently updated transfer run.
Output only.
* @property {string} updateTime Data transfer modification time. Ignored by server on input.
Output only.
* @property {string} userId Unique ID of the user on whose behalf transfer is done. Applicable only
to data sources that do not support service accounts. When set to 0,
the data source service account credentials are used.
Output only.
*/

/**
 * @typedef TransferMessage
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
 * @property {string} messageText Message text.
 * @property {string} messageTime Time when message was logged.
 * @property {string} severity Message severity.
 */

/**
 * @typedef TransferRun
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
* @property {string} dataSourceId Data source id.
Output only.
* @property {string} datasetRegion Region in which BigQuery dataset is located. Currently possible values are:
&quot;US&quot; and &quot;EU&quot;.
Output only.
* @property {string} destinationDatasetId The BigQuery target dataset id.
* @property {string} endTime Time when transfer run ended. Parameter ignored by server for input
requests.
Output only.
* @property {string} name The resource name of the transfer run.
Transfer run names have the form
`projects/{project_id}/locations/{location}/transferConfigs/{config_id}/runs/{run_id}`.
The name is ignored when creating a transfer run.
* @property {object} params Data transfer specific parameters.
* @property {string} runTime For batch transfer runs, specifies the date and time that
data should be ingested.
* @property {string} schedule Describes the schedule of this transfer run if it was created as part of
a regular schedule. For batch transfer runs that are directly created,
this is empty.
NOTE: the system might choose to delay the schedule depending on the
current load, so `schedule_time` doesn&#39;t always matches this.
Output only.
* @property {string} scheduleTime Minimum time after which a transfer run can be started.
* @property {string} startTime Time when transfer run was started. Parameter ignored by server for input
requests.
Output only.
* @property {string} state Data transfer run state. Ignored for input requests.
Output only.
* @property {string} updateTime Last time the data transfer run state was updated.
Output only.
* @property {string} userId Unique ID of the user on whose behalf transfer is done. Applicable only
to data sources that do not support service accounts. When set to 0,
the data source service account credentials are used.
Output only.
*/
export = Bigquerydatatransfer;
