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

import {createAPIRequest} from '../../lib/apirequest';

/**
 * Google Apps Script API
 *
 * An API for managing and executing Google Apps Script projects.
 *
 * @example
 * const google = require('googleapis');
 * const script = google.script('v1');
 *
 * @namespace script
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Script
 */
function Script(options) {
  const self = this;
  self._options = options || {};
  self.processes = {
    /**
     * script.processes.list
     * @desc List information about processes made by or on behalf of a user,
     * such as process type and current status.
     * @alias script.processes.list
     * @memberOf! script(v1)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize The maximum number of returned processes per page of results. Defaults to 50.
     * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
     * @param {string=} params.userProcessFilter.deploymentId Optional field used to limit returned processes to those originating from projects with a specific deployment ID.
     * @param {string=} params.userProcessFilter.endTime Optional field used to limit returned processes to those that completed on or before the given timestamp.
     * @param {string=} params.userProcessFilter.functionName Optional field used to limit returned processes to those originating from a script function with the given function name.
     * @param {string=} params.userProcessFilter.projectName Optional field used to limit returned processes to those originating from projects with a specific project name.
     * @param {string=} params.userProcessFilter.scriptId Optional field used to limit returned processes to those originating from projects with a specific script ID.
     * @param {string=} params.userProcessFilter.startTime Optional field used to limit returned processes to those that were started on or after the given timestamp.
     * @param {string=} params.userProcessFilter.statuses Optional field used to limit returned processes to those having one of the specified process statuses.
     * @param {string=} params.userProcessFilter.types Optional field used to limit returned processes to those having one of the specified process types.
     * @param {string=} params.userProcessFilter.userAccessLevels Optional field used to limit returned processes to those having one of the specified user access levels.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/processes').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * script.processes.listScriptProcesses
        * @desc List information about a script's executed processes, such as
        * process type and current status.
        * @alias script.processes.listScriptProcesses
        * @memberOf! script(v1)
        *
        * @param {object} params Parameters for request
        * @param {integer=} params.pageSize The maximum number of returned processes per page of results. Defaults to 50.
        * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
        * @param {string=} params.scriptId The script ID of the project whose processes are listed.
        * @param {string=} params.scriptProcessFilter.deploymentId Optional field used to limit returned processes to those originating from projects with a specific deployment ID.
        * @param {string=} params.scriptProcessFilter.endTime Optional field used to limit returned processes to those that completed on or before the given timestamp.
        * @param {string=} params.scriptProcessFilter.functionName Optional field used to limit returned processes to those originating from a script function with the given function name.
        * @param {string=} params.scriptProcessFilter.startTime Optional field used to limit returned processes to those that were started on or after the given timestamp.
        * @param {string=} params.scriptProcessFilter.statuses Optional field used to limit returned processes to those having one of the specified process statuses.
        * @param {string=} params.scriptProcessFilter.types Optional field used to limit returned processes to those having one of the specified process types.
        * @param {string=} params.scriptProcessFilter.userAccessLevels Optional field used to limit returned processes to those having one of the specified user access levels.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    listScriptProcesses(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/processes:listScriptProcesses')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.projects = {
    /**
     * script.projects.create
     * @desc Creates a new, empty script project with no script files and a base
     * manifest file.
     * @alias script.projects.create
     * @memberOf! script(v1)
     *
     * @param {object} params Parameters for request
     * @param {script(v1).CreateProjectRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * script.projects.get
        * @desc Gets a script project's metadata.
        * @alias script.projects.get
        * @memberOf! script(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.scriptId The script project's Drive ID.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    get(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{scriptId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['scriptId'],
        pathParams: ['scriptId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * script.projects.getContent
        * @desc Gets the content of the script project, including the code
        * source and metadata for each script file.
        * @alias script.projects.getContent
        * @memberOf! script(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.scriptId The script project's Drive ID.
        * @param {integer=} params.versionNumber The version number of the project to retrieve. If not provided, the project's HEAD version is returned.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    getContent(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{scriptId}/content')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['scriptId'],
        pathParams: ['scriptId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * script.projects.getMetrics
        * @desc Get metrics data for scripts, such as number of executions and
        * active users.
        * @alias script.projects.getMetrics
        * @memberOf! script(v1)
        *
        * @param {object} params Parameters for request
        * @param {string=} params.metricsFilter.deploymentId Optional field indicating a specific deployment to retrieve metrics from.
        * @param {string=} params.metricsGranularity Required field indicating what granularity of metrics are returned.
        * @param {string} params.scriptId Required field indicating the script to get metrics for.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    getMetrics(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{scriptId}/metrics')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['scriptId'],
        pathParams: ['scriptId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * script.projects.updateContent
        * @desc Updates the content of the specified script project. This
        * content is stored as the HEAD version, and is used when the script is
        * executed as a trigger, in the script editor, in add-on preview mode,
        * or as a web app or Apps Script API in development mode. This clears
        * all the existing files in the project.
        * @alias script.projects.updateContent
        * @memberOf! script(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.scriptId The script project's Drive ID.
        * @param {script(v1).Content} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    updateContent(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/projects/{scriptId}/content')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['scriptId'],
        pathParams: ['scriptId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    },
    deployments: {
      /**
       * script.projects.deployments.create
       * @desc Creates a deployment of an Apps Script project.
       * @alias script.projects.deployments.create
       * @memberOf! script(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.scriptId The script project's Drive ID.
       * @param {script(v1).DeploymentConfig} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/projects/{scriptId}/deployments')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['scriptId'],
          pathParams: ['scriptId'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * script.projects.deployments.delete
          * @desc Deletes a deployment of an Apps Script project.
          * @alias script.projects.deployments.delete
          * @memberOf! script(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.deploymentId The deployment ID to be undeployed.
          * @param {string} params.scriptId The script project's Drive ID.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      delete (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/v1/projects/{scriptId}/deployments/{deploymentId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['scriptId', 'deploymentId'],
          pathParams: ['deploymentId', 'scriptId'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * script.projects.deployments.get
          * @desc Gets a deployment of an Apps Script project.
          * @alias script.projects.deployments.get
          * @memberOf! script(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.deploymentId The deployment ID.
          * @param {string} params.scriptId The script project's Drive ID.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      get(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/v1/projects/{scriptId}/deployments/{deploymentId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['scriptId', 'deploymentId'],
          pathParams: ['deploymentId', 'scriptId'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * script.projects.deployments.list
          * @desc Lists the deployments of an Apps Script project.
          * @alias script.projects.deployments.list
          * @memberOf! script(v1)
          *
          * @param {object} params Parameters for request
          * @param {integer=} params.pageSize The maximum number of deployments on each returned page. Defaults to 50.
          * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
          * @param {string} params.scriptId The script project's Drive ID.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/projects/{scriptId}/deployments')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['scriptId'],
          pathParams: ['scriptId'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * script.projects.deployments.update
          * @desc Updates a deployment of an Apps Script project.
          * @alias script.projects.deployments.update
          * @memberOf! script(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.deploymentId The deployment ID for this deployment.
          * @param {string} params.scriptId The script project's Drive ID.
          * @param {script(v1).UpdateDeploymentRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      update(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/v1/projects/{scriptId}/deployments/{deploymentId}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['scriptId', 'deploymentId'],
          pathParams: ['deploymentId', 'scriptId'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    },
    versions: {
      /**
       * script.projects.versions.create
       * @desc Creates a new immutable version using the current code, with a
       * unique version number.
       * @alias script.projects.versions.create
       * @memberOf! script(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.scriptId The script project's Drive ID.
       * @param {script(v1).Version} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/projects/{scriptId}/versions')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['scriptId'],
          pathParams: ['scriptId'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * script.projects.versions.get
          * @desc Gets a version of a script project.
          * @alias script.projects.versions.get
          * @memberOf! script(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.scriptId The script project's Drive ID.
          * @param {integer} params.versionNumber The version number.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      get(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/v1/projects/{scriptId}/versions/{versionNumber}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['scriptId', 'versionNumber'],
          pathParams: ['scriptId', 'versionNumber'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * script.projects.versions.list
          * @desc List the versions of a script project.
          * @alias script.projects.versions.list
          * @memberOf! script(v1)
          *
          * @param {object} params Parameters for request
          * @param {integer=} params.pageSize The maximum number of versions on each returned page. Defaults to 50.
          * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
          * @param {string} params.scriptId The script project's Drive ID.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/projects/{scriptId}/versions')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['scriptId'],
          pathParams: ['scriptId'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    }
  };
  self.scripts = {
    /**
     * script.scripts.run
     * @desc Runs a function in an Apps Script project. The project must be
     * deployed for use with the Apps Script API.  This method requires
     * authorization with an OAuth 2.0 token that includes at least one of the
     * scopes listed in the [Authorization](#authorization) section; script
     * projects that do not require authorization cannot be executed through
     * this API. To find the correct scopes to include in the authentication
     * token, open the project in the script editor, then select **File >
     * Project properties** and click the **Scopes** tab.
     * @alias script.scripts.run
     * @memberOf! script(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.scriptId The script ID of the script to be executed. To find the script ID, open the project in the script editor and select **File > Project properties**.
     * @param {script(v1).ExecutionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    run(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://script.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/scripts/{scriptId}:run')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['scriptId'],
        pathParams: ['scriptId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
}
/**
 * @typedef Content
 * @memberOf! script(v1)
 * @type object
 * @property {script(v1).File[]} files The list of script project files. One of the files is a script manifest; it must be named &quot;appsscript&quot;, must have type of JSON, and include the manifest configurations for the project.
 * @property {string} scriptId The script project&#39;s Drive ID.
 */
/**
 * @typedef CreateProjectRequest
 * @memberOf! script(v1)
 * @type object
 * @property {string} parentId The Drive ID of a parent file that the created script project is bound to. This is usually the ID of a Google Doc, Google Sheet, Google Form, or Google Slides file. If not set, a standalone script project is created.
 * @property {string} title The title for the project.
 */
/**
 * @typedef Deployment
 * @memberOf! script(v1)
 * @type object
 * @property {script(v1).DeploymentConfig} deploymentConfig The deployment configuration.
 * @property {string} deploymentId The deployment ID for this deployment.
 * @property {script(v1).EntryPoint[]} entryPoints The deployment&#39;s entry points.
 * @property {script(v1).GoogleAppsScriptTypeFunctionSet} functionSet Script&#39;s defined set of functions.
 * @property {script(v1).GoogleAppsScriptTypeScopeSet} scopeSet Set of scopes required by the deployment.
 * @property {string} updateTime Last modified date time stamp.
 */
/**
 * @typedef DeploymentConfig
 * @memberOf! script(v1)
 * @type object
 * @property {string} description The description for this deployment.
 * @property {string} manifestFileName The manifest file name for this deployment.
 * @property {string} scriptId The script project&#39;s Drive ID.
 * @property {integer} versionNumber The version number on which this deployment is based.
 */
/**
 * @typedef Empty
 * @memberOf! script(v1)
 * @type object
 */
/**
 * @typedef EntryPoint
 * @memberOf! script(v1)
 * @type object
 * @property {script(v1).GoogleAppsScriptTypeAddOnEntryPoint} addOn Add-on properties.
 * @property {string} entryPointType The type of the entry point.
 * @property {script(v1).GoogleAppsScriptTypeExecutionApiEntryPoint} executionApi An entry point specification for Apps Script API execution calls.
 * @property {script(v1).GoogleAppsScriptTypeWebAppEntryPoint} webApp An entry point specification for web apps.
 */
/**
 * @typedef ExecutionError
 * @memberOf! script(v1)
 * @type object
 * @property {string} errorMessage The error message thrown by Apps Script, usually localized into the user&#39;s language.
 * @property {string} errorType The error type, for example `TypeError` or `ReferenceError`. If the error type is unavailable, this field is not included.
 * @property {script(v1).ScriptStackTraceElement[]} scriptStackTraceElements An array of objects that provide a stack trace through the script to show where the execution failed, with the deepest call first.
 */
/**
 * @typedef ExecutionRequest
 * @memberOf! script(v1)
 * @type object
 * @property {boolean} devMode If `true` and the user is an owner of the script, the script runs at the most recently saved version rather than the version deployed for use with the Apps Script API. Optional; default is `false`.
 * @property {string} function The name of the function to execute in the given script. The name does not include parentheses or parameters.
 * @property {any[]} parameters The parameters to be passed to the function being executed. The object type for each parameter should match the expected type in Apps Script. Parameters cannot be Apps Script-specific object types (such as a `Document` or a `Calendar`); they can only be primitive types such as `string`, `number`, `array`, `object`, or `boolean`. Optional.
 * @property {string} sessionState For Android add-ons only. An ID that represents the user&#39;s current session in the Android app for Google Docs or Sheets, included as extra data in the [Intent](https://developer.android.com/guide/components/intents-filters.html) that launches the add-on. When an Android add-on is run with a session state, it gains the privileges of a [bound](https://developers.google.com/apps-script/guides/bound) script&amp;mdash;that is, it can access information like the user&#39;s current cursor position (in Docs) or selected cell (in Sheets). To retrieve the state, call `Intent.getStringExtra(&quot;com.google.android.apps.docs.addons.SessionState&quot;)`. Optional.
 */
/**
 * @typedef ExecutionResponse
 * @memberOf! script(v1)
 * @type object
 * @property {any} result The return value of the script function. The type matches the object type returned in Apps Script. Functions called using the Apps Script API cannot return Apps Script-specific objects (such as a `Document` or a `Calendar`); they can only return primitive types such as a `string`, `number`, `array`, `object`, or `boolean`.
 */
/**
 * @typedef File
 * @memberOf! script(v1)
 * @type object
 * @property {string} createTime Creation date timestamp. This read-only field is only visible to users who have WRITER permission for the script project.
 * @property {script(v1).GoogleAppsScriptTypeFunctionSet} functionSet The defined set of functions in the script file, if any.
 * @property {script(v1).GoogleAppsScriptTypeUser} lastModifyUser The user who modified the file most recently. This read-only field is only visible to users who have WRITER permission for the script project.
 * @property {string} name The name of the file. The file extension is not part of the file name, which can be identified from the type field.
 * @property {string} source The file content.
 * @property {string} type The type of the file.
 * @property {string} updateTime Last modified date timestamp. This read-only field is only visible to users who have WRITER permission for the script project.
 */
/**
 * @typedef GoogleAppsScriptTypeAddOnEntryPoint
 * @memberOf! script(v1)
 * @type object
 * @property {string} addOnType The add-on&#39;s required list of supported container types.
 * @property {string} description The add-on&#39;s optional description.
 * @property {string} helpUrl The add-on&#39;s optional help URL.
 * @property {string} postInstallTipUrl The add-on&#39;s required post install tip URL.
 * @property {string} reportIssueUrl The add-on&#39;s optional report issue URL.
 * @property {string} title The add-on&#39;s required title.
 */
/**
 * @typedef GoogleAppsScriptTypeExecutionApiConfig
 * @memberOf! script(v1)
 * @type object
 * @property {string} access Who has permission to run the API executable.
 */
/**
 * @typedef GoogleAppsScriptTypeExecutionApiEntryPoint
 * @memberOf! script(v1)
 * @type object
 * @property {script(v1).GoogleAppsScriptTypeExecutionApiConfig} entryPointConfig The entry point&#39;s configuration.
 */
/**
 * @typedef GoogleAppsScriptTypeFunction
 * @memberOf! script(v1)
 * @type object
 * @property {string} name The function name in the script project.
 */
/**
 * @typedef GoogleAppsScriptTypeFunctionSet
 * @memberOf! script(v1)
 * @type object
 * @property {script(v1).GoogleAppsScriptTypeFunction[]} values A list of functions composing the set.
 */
/**
 * @typedef GoogleAppsScriptTypeProcess
 * @memberOf! script(v1)
 * @type object
 * @property {string} duration Duration the execution spent executing.
 * @property {string} executingUser User-facing name for the user executing the script.
 * @property {string} functionName Name of the function the started the execution.
 * @property {string} processStatus The executions status.
 * @property {string} processType The executions type.
 * @property {string} projectName Name of the script being executed.
 * @property {string} startTime Time the execution started.
 * @property {string} userAccessLevel The executing users access level to the script.
 */
/**
 * @typedef GoogleAppsScriptTypeScope
 * @memberOf! script(v1)
 * @type object
 * @property {string} authorizer Who authorized the scope.
 * @property {string} name The scope&#39;s identifying string.
 */
/**
 * @typedef GoogleAppsScriptTypeScopeSet
 * @memberOf! script(v1)
 * @type object
 * @property {script(v1).GoogleAppsScriptTypeScope[]} values List of scope values in the set.
 */
/**
 * @typedef GoogleAppsScriptTypeUser
 * @memberOf! script(v1)
 * @type object
 * @property {string} domain The user&#39;s domain.
 * @property {string} email The user&#39;s identifying email address.
 * @property {string} name The user&#39;s display name.
 * @property {string} photoUrl The user&#39;s photo.
 */
/**
 * @typedef GoogleAppsScriptTypeWebAppConfig
 * @memberOf! script(v1)
 * @type object
 * @property {string} access Who has permission to run the web app.
 * @property {string} executeAs Who to execute the web app as.
 */
/**
 * @typedef GoogleAppsScriptTypeWebAppEntryPoint
 * @memberOf! script(v1)
 * @type object
 * @property {script(v1).GoogleAppsScriptTypeWebAppConfig} entryPointConfig The entry point&#39;s configuration.
 * @property {string} url The URL for the web application.
 */
/**
 * @typedef ListDeploymentsResponse
 * @memberOf! script(v1)
 * @type object
 * @property {script(v1).Deployment[]} deployments The list of deployments.
 * @property {string} nextPageToken The token that can be used in the next call to get the next page of results.
 */
/**
 * @typedef ListScriptProcessesResponse
 * @memberOf! script(v1)
 * @type object
 * @property {string} nextPageToken Token for the next page of results. If empty, there are no more pages remaining.
 * @property {script(v1).GoogleAppsScriptTypeProcess[]} processes List of processes matching request parameters.
 */
/**
 * @typedef ListUserProcessesResponse
 * @memberOf! script(v1)
 * @type object
 * @property {string} nextPageToken Token for the next page of results. If empty, there are no more pages remaining.
 * @property {script(v1).GoogleAppsScriptTypeProcess[]} processes List of processes matching request parameters.
 */
/**
 * @typedef ListVersionsResponse
 * @memberOf! script(v1)
 * @type object
 * @property {string} nextPageToken The token use to fetch the next page of records. if not exist in the response, that means no more versions to list.
 * @property {script(v1).Version[]} versions The list of versions.
 */
/**
 * @typedef Metrics
 * @memberOf! script(v1)
 * @type object
 * @property {script(v1).MetricsValue[]} activeUsers Number of active users.
 * @property {script(v1).MetricsValue[]} failedExecutions Number of failed executions.
 * @property {script(v1).MetricsValue[]} totalExecutions Number of total executions.
 */
/**
 * @typedef MetricsValue
 * @memberOf! script(v1)
 * @type object
 * @property {string} endTime Required field indicating the end time of the interval.
 * @property {string} startTime Required field indicating the start time of the interval.
 * @property {string} value Indicates the number of executions counted.
 */
/**
 * @typedef Operation
 * @memberOf! script(v1)
 * @type object
 * @property {boolean} done This field indicates whether the script execution has completed. A completed execution has a populated `response` field containing the ExecutionResponse from function that was executed.
 * @property {script(v1).Status} error If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, this field contains a Status object. The `Status` object&#39;s `details` field contains an array with a single ExecutionError object that provides information about the nature of the error.
 * @property {object} response If the script function returns successfully, this field contains an ExecutionResponse object with the function&#39;s return value.
 */
/**
 * @typedef Project
 * @memberOf! script(v1)
 * @type object
 * @property {string} createTime When the script was created.
 * @property {script(v1).GoogleAppsScriptTypeUser} creator User who originally created the script.
 * @property {script(v1).GoogleAppsScriptTypeUser} lastModifyUser User who last modified the script.
 * @property {string} parentId The parent&#39;s Drive ID that the script will be attached to. This is usually the ID of a Google Document or Google Sheet. This filed is optional, and if not set, a stand-alone script will be created.
 * @property {string} scriptId The script project&#39;s Drive ID.
 * @property {string} title The title for the project.
 * @property {string} updateTime When the script was last updated.
 */
/**
 * @typedef ScriptStackTraceElement
 * @memberOf! script(v1)
 * @type object
 * @property {string} function The name of the function that failed.
 * @property {integer} lineNumber The line number where the script failed.
 */
/**
 * @typedef Status
 * @memberOf! script(v1)
 * @type object
 * @property {integer} code The status code. For this API, this value either: &lt;ul&gt; &lt;li&gt; 3, indicating an `INVALID_ARGUMENT` error, or&lt;/li&gt; &lt;li&gt; 1, indicating a `CANCELLED` execution.&lt;/li&gt; &lt;/ul&gt;
 * @property {object[]} details An array that contains a single ExecutionError object that provides information about the nature of the error.
 * @property {string} message A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the [google.rpc.Status.details](google.rpc.Status.details) field, or localized by the client.
 */
/**
 * @typedef UpdateDeploymentRequest
 * @memberOf! script(v1)
 * @type object
 * @property {script(v1).DeploymentConfig} deploymentConfig The deployment configuration.
 */
/**
 * @typedef Version
 * @memberOf! script(v1)
 * @type object
 * @property {string} createTime When the version was created.
 * @property {string} description The description for this version.
 * @property {string} scriptId The script project&#39;s Drive ID.
 * @property {integer} versionNumber The incremental ID that is created by Apps Script when a version is created. This is system assigned number and is immutable once created.
 */

export = Script;
