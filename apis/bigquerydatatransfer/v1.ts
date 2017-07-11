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
 * BigQuery Data Transfer Service API
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

    /**
     * bigquerydatatransfer.projects.isEnabled
     *
     * @desc Returns true if data transfer is enabled for a project.
     *
     * @alias bigquerydatatransfer.projects.isEnabled
     * @memberOf! bigquerydatatransfer(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the project resource in the form: `projects/{project_id}`
     * @param {bigquerydatatransfer(v1).IsEnabledRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    isEnabled: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{name}:isEnabled').replace(/([^:]\/)\/+/g, '$1'),
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
     * bigquerydatatransfer.projects.setEnabled
     *
     * @desc Enables or disables data transfer for a project. This method requires the additional scope of 'https://www.googleapis.com/auth/cloudplatformprojects' to manage the cloud project permissions.
     *
     * @alias bigquerydatatransfer.projects.setEnabled
     * @memberOf! bigquerydatatransfer(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the project resource in the form: `projects/{project_id}`
     * @param {bigquerydatatransfer(v1).SetEnabledRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setEnabled: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{name}:setEnabled').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
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
       * @param {string} params.parent The BigQuery project id where the transfer configuration should be created. Must be in the format /projects/{project_id}/locations/{location_id} or /projects/{project_id}/locations/- In case when '-' is specified as location_id, location is infered from the destination dataset region.
       * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. This is required if new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
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

      /**
       * bigquerydatatransfer.projects.transferConfigs.patch
       *
       * @desc Updates a data transfer configuration. All fields must be set, even if they are not updated.
       *
       * @alias bigquerydatatransfer.projects.transferConfigs.patch
       * @memberOf! bigquerydatatransfer(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The resource name of the transfer run. Transfer run names have the form `projects/{project_id}/transferConfigs/{config_id}`. Where `config_id` is usually a uuid, even though it is not guaranteed or required. The name is ignored when creating a transfer run.
       * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the gaia id of the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
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
       * bigquerydatatransfer.projects.transferConfigs.list
       *
       * @desc Returns information about all data transfers in the project.
       *
       * @alias bigquerydatatransfer.projects.transferConfigs.list
       * @memberOf! bigquerydatatransfer(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.dataSourceIds When specified, only configurations of requested data sources are returned.
       * @param {string} params.parent The BigQuery project id for which data sources should be returned: `projects/{project_id}`.
       * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
       * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
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
         * bigquerydatatransfer.projects.transferConfigs.runs.list
         *
         * @desc Returns information about running and completed jobs.
         *
         * @alias bigquerydatatransfer.projects.transferConfigs.runs.list
         * @memberOf! bigquerydatatransfer(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
         * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
         * @param {string=} params.statuses When specified, only transfer runs with requested statuses are returned.
         * @param {string=} params.runAttempt Indicates how run attempts are to be pulled.
         * @param {string} params.parent Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}`.
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
           * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
           * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
           * @param {string=} params.messageTypes Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
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
    },

    dataSources: {

      /**
       * bigquerydatatransfer.projects.dataSources.list
       *
       * @desc Lists supported data sources and returns their settings, which can be used for UI rendering.
       *
       * @alias bigquerydatatransfer.projects.dataSources.list
       * @memberOf! bigquerydatatransfer(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}`
       * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
       * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
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
       * bigquerydatatransfer.projects.dataSources.checkValidCreds
       *
       * @desc Returns true if valid credentials exist for the given data source and requesting user.
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
      }
    },

    locations: {

      /**
       * bigquerydatatransfer.projects.locations.isEnabled
       *
       * @desc Returns true if data transfer is enabled for a project.
       *
       * @alias bigquerydatatransfer.projects.locations.isEnabled
       * @memberOf! bigquerydatatransfer(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the project resource in the form: `projects/{project_id}`
       * @param {bigquerydatatransfer(v1).IsEnabledRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      isEnabled: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}:isEnabled').replace(/([^:]\/)\/+/g, '$1'),
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
       * bigquerydatatransfer.projects.locations.setEnabled
       *
       * @desc Enables or disables data transfer for a project. This method requires the additional scope of 'https://www.googleapis.com/auth/cloudplatformprojects' to manage the cloud project permissions.
       *
       * @alias bigquerydatatransfer.projects.locations.setEnabled
       * @memberOf! bigquerydatatransfer(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the project resource in the form: `projects/{project_id}`
       * @param {bigquerydatatransfer(v1).SetEnabledRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      setEnabled: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://bigquerydatatransfer.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{name}:setEnabled').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      transferConfigs: {

        /**
         * bigquerydatatransfer.projects.locations.transferConfigs.patch
         *
         * @desc Updates a data transfer configuration. All fields must be set, even if they are not updated.
         *
         * @alias bigquerydatatransfer.projects.locations.transferConfigs.patch
         * @memberOf! bigquerydatatransfer(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name of the transfer run. Transfer run names have the form `projects/{project_id}/transferConfigs/{config_id}`. Where `config_id` is usually a uuid, even though it is not guaranteed or required. The name is ignored when creating a transfer run.
         * @param {string=} params.authorizationCode Optional OAuth2 authorization code to use with this transfer configuration. If it is provided, the transfer configuration will be associated with the gaia id of the authorizing user. In order to obtain authorization_code, please make a request to https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>  * client_id should be OAuth client_id of BigQuery DTS API for the given   data source returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. * redirect_uri is an optional parameter. If not specified, then   authorization code is posted to the opener of authorization flow window.   Otherwise it will be sent to the redirect uri. A special value of   urn:ietf:wg:oauth:2.0:oob means that authorization code should be   returned in the title bar of the browser, with the page text prompting   the user to copy the code and paste it in the application.
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
         * bigquerydatatransfer.projects.locations.transferConfigs.list
         *
         * @desc Returns information about all data transfers in the project.
         *
         * @alias bigquerydatatransfer.projects.locations.transferConfigs.list
         * @memberOf! bigquerydatatransfer(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.dataSourceIds When specified, only configurations of requested data sources are returned.
         * @param {string} params.parent The BigQuery project id for which data sources should be returned: `projects/{project_id}`.
         * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
         * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
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
           * bigquerydatatransfer.projects.locations.transferConfigs.runs.list
           *
           * @desc Returns information about running and completed jobs.
           *
           * @alias bigquerydatatransfer.projects.locations.transferConfigs.runs.list
           * @memberOf! bigquerydatatransfer(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.parent Name of transfer configuration for which transfer runs should be retrieved. Format of transfer configuration resource name is: `projects/{project_id}/transferConfigs/{config_id}`.
           * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
           * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
           * @param {string=} params.statuses When specified, only transfer runs with requested statuses are returned.
           * @param {string=} params.runAttempt Indicates how run attempts are to be pulled.
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
             * @param {string} params.parent Transfer run name in the form: `projects/{project_id}/transferConfigs/{config_Id}/runs/{run_id}`.
             * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
             * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
             * @param {string=} params.messageTypes Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
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
      },

      dataSources: {

        /**
         * bigquerydatatransfer.projects.locations.dataSources.list
         *
         * @desc Lists supported data sources and returns their settings, which can be used for UI rendering.
         *
         * @alias bigquerydatatransfer.projects.locations.dataSources.list
         * @memberOf! bigquerydatatransfer(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.pageToken Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
         * @param {integer=} params.pageSize Page size. The default page size is the maximum value of 1000 results.
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
         * bigquerydatatransfer.projects.locations.dataSources.checkValidCreds
         *
         * @desc Returns true if valid credentials exist for the given data source and requesting user.
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
        }
      }
    }
  };
}

/**
 * @typedef Empty
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
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
* @property {string} status Status of the most recently updated transfer run.
@OutputOnly
* @property {string} userId GaiaID of the user on whose behalf transfer is done. Applicable only
to data sources that do not support service accounts. When set to 0,
the data source service account credentials are used.
@OutputOnly
* @property {string} name The resource name of the transfer run.
Transfer run names have the form
`projects/{project_id}/transferConfigs/{config_id}`.
Where `config_id` is usually a uuid, even though it is not
guaranteed or required. The name is ignored when creating a transfer run.
* @property {string} destinationDatasetId The BigQuery target dataset id.
* @property {object} params Data transfer specific parameters.
* @property {string} datasetRegion Region in which BigQuery dataset is located. Currently possible values are:
&quot;US&quot; and &quot;EU&quot;.
@OutputOnly
* @property {string} displayName User specified display name for the data transfer.
* @property {string} nextRunTime Next time when data transfer will run. Output only. Applicable
only for batch data transfers.
@OutputOnly
* @property {boolean} disabled Is this config disabled. When set to true, no runs are scheduled
for a given transfer.
* @property {string} schedule Data transfer schedule in GROC format.
If the data source does not support a custom schedule, this should be
empty. If it is empty, the default value for the data source will be
used.
The specified times are in UTC.
Examples of valid GROC include:
`1st,3rd monday of month 15:30`,
`every wed,fri of jan,jun 13:15`, and
`first sunday of quarter 00:00`.
* @property {string} updateTime Data transfer modification time. Ignored by server on input.
@OutputOnly
*/
/**
 * @typedef TransferRun
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
* @property {string} dataSourceId Data source id.
@OutputOnly
* @property {string} status Data transfer run status. Ignored for input requests.
@OutputOnly
* @property {string} userId The user id for this transfer run.
@OutputOnly
* @property {string} name The resource name of the transfer run.
Transfer run names have the form
`projects/{project_id}/locations/{location}/transferConfigs/{config_id}/runs/{run_id}`.
The name is ignored when creating a transfer run.
* @property {string} destinationDatasetId The BigQuery target dataset id.
* @property {object} params Data transfer specific parameters.
* @property {string} endTime Time when transfer run ended. Parameter ignored by server for input
requests.
@OutputOnly
* @property {string} startTime Time when transfer run was started. Parameter ignored by server for input
requests.
@OutputOnly
* @property {string} datasetRegion Region in which BigQuery dataset is located. Currently possible values are:
&quot;US&quot; and &quot;EU&quot;.
@OutputOnly
* @property {string} scheduleTime Minimum time after which a transfer run can be started.
* @property {string} schedule Describes the schedule of this transfer run if it was created as part of
a regular schedule. For batch transfer runs that are directly created,
this is empty.
NOTE: the system might choose to delay the schedule depending on the
current load, so `schedule_time` doesn&#39;t always matches this.
@OutputOnly
* @property {string} updateTime Last time the data transfer run status was updated.
@OutputOnly
* @property {string} runTime For batch transfer runs, specifies the date and time that
data should be ingested.
*/
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
 * @typedef ScheduleTransferRunsResponse
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
 * @property {bigquerydatatransfer(v1).TransferRun[]} createdRuns The transfer runs that were created.
 */
/**
 * @typedef TransferMessage
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
 * @property {string} messageText Message text.
 * @property {string} severity Message severity.
 * @property {string} messageTime Time when message was logged.
 */
/**
 * @typedef ListTransferLogsResponse
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
* @property {bigquerydatatransfer(v1).TransferMessage[]} transferMessages The stored pipeline transfer messages.
@OutputOnly
* @property {string} nextPageToken The next-pagination token. For multiple-page list results,
this token can be used as the
`GetTransferRunLogRequest.page_token`
to request the next page of list results.
@OutputOnly
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
@OutputOnly
*/
/**
 * @typedef DataSourceParameter
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
* @property {boolean} recurse If set to true, schema should be taken from the parent with the same
parameter_id. Only applicable when parameter type is RECORD.
* @property {string} description Parameter description.
* @property {string[]} allowedValues All possible values for the parameter.
* @property {string} validationHelpUrl URL to a help document to further explain the naming requirements.
* @property {number} minValue For integer and double values specifies minimum allowed value.
* @property {string} validationRegex Regular expression which can be used for parameter validation.
* @property {string} paramId Parameter identifier.
* @property {boolean} required Is parameter required.
* @property {boolean} repeated Can parameter have multiple values.
* @property {string} displayName Parameter display name in the user interface.
* @property {string} validationDescription Description of the requirements for this field, in case the user input does
not fulfill the regex pattern or min/max values.
* @property {boolean} immutable Cannot be changed after initial creation.
* @property {bigquerydatatransfer(v1).DataSourceParameter[]} fields When parameter is a record, describes child fields.
* @property {number} maxValue For integer and double values specifies maxminum allowed value.
* @property {string} type Parameter type.
*/
/**
 * @typedef ListTransferRunsResponse
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
* @property {bigquerydatatransfer(v1).TransferRun[]} transferRuns The stored pipeline transfer runs.
@OutputOnly
* @property {string} nextPageToken The next-pagination token. For multiple-page list results,
this token can be used as the
`ListTransferRunsRequest.page_token`
to request the next page of list results.
@OutputOnly
*/
/**
 * @typedef IsEnabledRequest
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
 */
/**
 * @typedef SetEnabledRequest
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
 * @property {boolean} enabled Whether data transfer should be enabled or disabled for the project.
 */
/**
 * @typedef ListTransferConfigsResponse
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
* @property {bigquerydatatransfer(v1).TransferConfig[]} transferConfigs The stored pipeline transfer configurations.
@OutputOnly
* @property {string} nextPageToken The next-pagination token. For multiple-page list results,
this token can be used as the
`ListTransferConfigsRequest.page_token`
to request the next page of list results.
@OutputOnly
*/
/**
 * @typedef IsEnabledResponse
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
 * @property {boolean} enabled Indicates whether the project is enabled.
 */
/**
 * @typedef DataSource
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
* @property {bigquerydatatransfer(v1).DataSourceParameter[]} parameters Data source parameters.
* @property {string} helpUrl Url for the help document for this data source.
* @property {string} defaultSchedule Default data transfer schedule.
Examples of valid schedules include:
`1st,3rd monday of month 15:30`,
`every wed,fri of jan,jun 13:15`, and
`first sunday of quarter 00:00`.
* @property {integer} statusUpdateDeadlineSeconds The number of seconds to wait for a status update from the data source
before BigQuery marks the transfer as failed.
* @property {boolean} supportsMultipleTransfers Indicates whether the data source supports multiple transfers
to different BigQuery targets.
* @property {boolean} manualRunsDisabled Disables backfilling and manual run scheduling
for the data source.
* @property {integer} defaultDataRefreshWindowDays Default data refresh window on days.
Only meaningful when `data_refresh_type` = `SLIDING_WINDOW`.
* @property {string} transferType Transfer type. Currently supports only batch transfers,
which are transfers that use the BigQuery batch APIs (load or
query) to ingest the data.
* @property {string} description User friendly data source description string.
* @property {string} dataSourceId Data source id.
* @property {string[]} scopes Api auth scopes for which refresh token needs to be obtained. Only valid
when `client_id` is specified. Ignored otherwise. These are scopes needed
by a data source to prepare data and ingest them into BigQuery,
e.g., https://www.googleapis.com/auth/bigquery
* @property {string} name Data source resource name.
* @property {string} clientId Data source client id which should be used to receive refresh token.
When not supplied, no offline credentials are populated for data transfer.
* @property {string} authorizationType Indicates the type of authorization.
* @property {boolean} supportsCustomSchedule Specifies whether the data source supports a user defined schedule, or
operates on the default schedule.
When set to `true`, user can override default schedule.
* @property {string} displayName User friendly data source name.
* @property {string} dataRefreshType Specifies whether the data source supports automatic data refresh for the
past few days, and how it&#39;s supported.
For some data sources, data might not be complete until a few days later,
so it&#39;s useful to refresh data automatically.
*/
/**
 * @typedef ScheduleTransferRunsRequest
 * @memberOf! bigquerydatatransfer(v1)
 * @type object
 * @property {string} rangeEndTime End time of the range of transfer runs.
 * @property {string} rangeStartTime Start time of the range of transfer runs.
 */
export = Bigquerydatatransfer;
