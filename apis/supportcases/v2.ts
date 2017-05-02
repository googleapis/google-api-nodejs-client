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

const createAPIRequest = require('../../lib/apirequest');
const utils = require('../../lib/utils');

/**
 * Google Support Cases Private API
 *
 * Support Cases API
 *
 * @example
 * const google = require('googleapis');
 * const supportcases = google.supportcases('v2');
 *
 * @namespace supportcases
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Supportcases
 */
function Supportcases(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.agentActivities = {

    /**
     * supportcases.agentActivities.create
     *
     * @desc Adds an agent activity.
     *
     * @alias supportcases.agentActivities.create
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).CreateAgentActivityRequest} params.resource Request body data
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/agentActivities',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.agentActivities.createFromHelpCenterDeepLink
     *
     * @desc Creates an agent activity from a help center deep link.
     *
     * @alias supportcases.agentActivities.createFromHelpCenterDeepLink
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).CreateFromHelpCenterDeepLinkRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createFromHelpCenterDeepLink: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/agentActivities:createFromHelpCenterDeepLink',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.agentActivities.list
     *
     * @desc Lists an agent activities.
     *
     * @alias supportcases.agentActivities.list
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.caseId 
     * @param {integer=} params.pageSize 
     * @param {string=} params.pageToken 
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/agentActivities',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.agentSettings = {

    /**
     * supportcases.agentSettings.get
     *
     * @desc Gets agent setting for the agent id in the resource name. If agent id is "me", get agent setting for the current logged in agent.
     *
     * @alias supportcases.agentSettings.get
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}',
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
     * supportcases.agentSettings.getPhoneSetting
     *
     * @desc Gets phone setting for the given agent id. If agent id is "me", gets phone setting for the agent currently logged in. This call is already deprecated.
     *
     * @alias supportcases.agentSettings.getPhoneSetting
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getPhoneSetting: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}',
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
     * supportcases.agentSettings.getRealTimeSetting
     *
     * @desc Gets agent's real time setting for the given agent id in the resource name. If agent id is "me", use the current logged in agent.
     *
     * @alias supportcases.agentSettings.getRealTimeSetting
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getRealTimeSetting: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}',
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
     * supportcases.agentSettings.getSearchSetting
     *
     * @desc Gets agent's search settings for the agent id in the resource name. If agent id is "me", use the current logged in agent.
     *
     * @alias supportcases.agentSettings.getSearchSetting
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getSearchSetting: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}',
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
     * supportcases.agentSettings.list
     *
     * @desc List all agent settings.
     *
     * @alias supportcases.agentSettings.list
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/agentSettings',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.agentSettings.listSettings
     *
     * @desc Lists settings for the agent id in the resource name. If agent id is "me", get agent setting for the current logged in agent.
     *
     * @alias supportcases.agentSettings.listSettings
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {string=} params.requestedSettingTypes 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listSettings: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:listSettings',
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
     * supportcases.agentSettings.updateSearchSetting
     *
     * @desc Updates search settings for the agent id in the resource name. If agent id is "me", use the current logged in agent.
     *
     * @alias supportcases.agentSettings.updateSearchSetting
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).SearchSetting} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateSearchSetting: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}',
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.attributes = {

    /**
     * supportcases.attributes.get
     *
     * @desc Gets the specified attribute.
     *
     * @alias supportcases.attributes.get
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.cases = {

    /**
     * supportcases.cases.assign
     *
     * @desc Assigns the specified case.
     *
     * @alias supportcases.cases.assign
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).AssignRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    assign: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:assign',
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
     * supportcases.cases.autoAssign
     *
     * @desc Auto assign a case to the calling user.
     *
     * @alias supportcases.cases.autoAssign
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).AutoAssignRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    autoAssign: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/cases:autoAssign',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.cases.block
     *
     * @desc Indicate the specified case is blocked by a bug/case/legal order, etc.
     *
     * @alias supportcases.cases.block
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).BlockRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    block: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:block',
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
     * supportcases.cases.callBack
     *
     * @desc Makes a callback. Deauthenticates customer.
     *
     * @alias supportcases.cases.callBack
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).CallBackRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    callBack: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:callBack',
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
     * supportcases.cases.createNewCase
     *
     * @desc Creates a new case (Note this is not a true CRUD method as no resource is being passed in).
     *
     * @alias supportcases.cases.createNewCase
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).CreateNewCaseRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createNewCase: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/cases:createNewCase',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.cases.createNoteConsult
     *
     * @desc Creates a consult case via note channel for this case.
     *
     * @alias supportcases.cases.createNoteConsult
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).CreateNoteConsultCaseRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createNoteConsult: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:createNoteConsult',
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
     * supportcases.cases.createRealTimeConsult
     *
     * @desc Creates a consult case via RealTime channel for this case.
     *
     * @alias supportcases.cases.createRealTimeConsult
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).CreateRealTimeConsultCaseRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createRealTimeConsult: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:createRealTimeConsult',
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
     * supportcases.cases.dedupe
     *
     * @desc Deduplicates a case by closing duplicates cases.
     *
     * @alias supportcases.cases.dedupe
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).DedupeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    dedupe: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:dedupe',
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
     * supportcases.cases.escalate
     *
     * @desc Escalates a case.
     *
     * @alias supportcases.cases.escalate
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).EscalateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    escalate: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:escalate',
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
     * supportcases.cases.finish
     *
     * @desc Sets the specified case to the finished state and triggers other finisher related workflows.
     *
     * @alias supportcases.cases.finish
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).FinishRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    finish: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:finish',
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
     * supportcases.cases.get
     *
     * @desc Gets the specified case.
     *
     * @alias supportcases.cases.get
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}',
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
     * supportcases.cases.getAgentSearchCount
     *
     * @desc Gets the search count for cases associated with the calling agent, and begin sending Tango notifications when the count changes.
     *
     * @alias supportcases.cases.getAgentSearchCount
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getAgentSearchCount: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/cases:getAgentSearchCount',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.cases.getAgentUnreadCasesInfo
     *
     * @desc Gets information about unread cases for the calling agent. Only intended for use by the Cases frontend.
     *
     * @alias supportcases.cases.getAgentUnreadCasesInfo
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getAgentUnreadCasesInfo: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/cases:GetAgentUnreadCasesInfo',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.cases.getConsultSla
     *
     * @desc Calculates the SLA due by time that a new consult case would have.
     *
     * @alias supportcases.cases.getConsultSla
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).GetConsultSlaRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getConsultSla: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:getConsultSla',
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
     * supportcases.cases.listByAgent
     *
     * @desc Lists cases associated with the agent. Only intended for use by the Cases frontend.
     *
     * @alias supportcases.cases.listByAgent
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.caseType 
     * @param {integer=} params.pageSize 
     * @param {string=} params.pageToken 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listByAgent: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/cases:listByAgent',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.cases.needsInfo
     *
     * @desc Sets the specified case to the needs info state.
     *
     * @alias supportcases.cases.needsInfo
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).NeedsInfoRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    needsInfo: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:needsInfo',
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
     * supportcases.cases.offeredSolution
     *
     * @desc Sets the specified case to the solution offered state indicating that a previous communication was a "solution".
     *
     * @alias supportcases.cases.offeredSolution
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).OfferedSolutionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    offeredSolution: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:offeredSolution',
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
     * supportcases.cases.read
     *
     * @desc Marks a case as read by the calling agent if they are the assignee.
     *
     * @alias supportcases.cases.read
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).ReadCaseRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    read: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:read',
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
     * supportcases.cases.release
     *
     * @desc Unassigns the specified case from the gaia user associated with this call.
     *
     * @alias supportcases.cases.release
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).ReleaseRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    release: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:release',
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
     * supportcases.cases.route
     *
     * @desc Routes the specified case to another product or team.
     *
     * @alias supportcases.cases.route
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).RouteRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    route: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:route',
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
     * supportcases.cases.spam
     *
     * @desc Marks the specified case as spam.
     *
     * @alias supportcases.cases.spam
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).SpamRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    spam: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:spam',
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
     * supportcases.cases.split
     *
     * @desc Move a case's communication into a new case.
     *
     * @alias supportcases.cases.split
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).SplitRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    split: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:split',
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
     * supportcases.cases.suggestNewEmailHeaders
     *
     * @desc Suggests a set of headers (like from aliases) for a new email on a case. Suppresses warning: GET requires method name starting with "Get" or "List"
     *
     * @alias supportcases.cases.suggestNewEmailHeaders
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    suggestNewEmailHeaders: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:suggestNewEmailHeaders',
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
     * supportcases.cases.suggestNoteHeaders
     *
     * @desc Suggests a set of headers (like from aliases) for a note Suppresses warning: GET requires method name starting with "Get" or "List"
     *
     * @alias supportcases.cases.suggestNoteHeaders
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    suggestNoteHeaders: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:suggestNoteHeaders',
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
     * supportcases.cases.take
     *
     * @desc Assigns the specified case to the gaia user associated with this call.
     *
     * @alias supportcases.cases.take
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).TakeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    take: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:take',
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
     * supportcases.cases.transfer
     *
     * @desc Transfers the specified case from the gaia user associated with this call to another user.
     *
     * @alias supportcases.cases.transfer
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).TransferRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    transfer: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:transfer',
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
     * supportcases.cases.unassign
     *
     * @desc Unassigns the specified case from its current assignee. Note that this also moves the case to the UNASSIGNED state.
     *
     * @alias supportcases.cases.unassign
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).UnassignRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    unassign: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:unassign',
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
     * supportcases.cases.unblock
     *
     * @desc Indicate the specified case is no longer blocked by a bug/case/ legal order, etc.
     *
     * @alias supportcases.cases.unblock
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).UnblockRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    unblock: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:unblock',
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
     * supportcases.cases.unspam
     *
     * @desc Unmark the specified case as spam.
     *
     * @alias supportcases.cases.unspam
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).UnspamRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    unspam: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:unspam',
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
     * supportcases.cases.updateDisconnectedChannel
     *
     * @desc Updates disconnected channel for the specified case.
     *
     * @alias supportcases.cases.updateDisconnectedChannel
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).UpdateDisconnectedChannelRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateDisconnectedChannel: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:updateDisconnectedChannel',
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
     * supportcases.cases.updateEligibleProgram
     *
     * @desc Update customer attributes indicating eligibility for opportunities.
     *
     * @alias supportcases.cases.updateEligibleProgram
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).UpdateEligibleProgramRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateEligibleProgram: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:updateEligibleProgram',
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
     * supportcases.cases.validateConsultForm
     *
     * @desc Validates that consult forms are properly configured.
     *
     * @alias supportcases.cases.validateConsultForm
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).ValidateConsultFormRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    validateConsultForm: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/cases:validateConsultForm',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.cases.waitForConsult
     *
     * @desc Sets a case with an active consult case to IN_CONSULT state.
     *
     * @alias supportcases.cases.waitForConsult
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).WaitForConsultRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    waitForConsult: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:WaitForConsult',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    attributes: {

      /**
       * supportcases.cases.attributes.batchUpdate
       *
       * @desc Updates attributes for a case in batch.
       *
       * @alias supportcases.cases.attributes.batchUpdate
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).BatchUpdateAttributesRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      batchUpdate: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:batchUpdate',
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
       * supportcases.cases.attributes.update
       *
       * @desc Updates attributes for the specified case. Note: This call adds the attributes that are not present on the case to the case. If attribute is already present on the case, the value is replaced.
       *
       * @alias supportcases.cases.attributes.update
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).UpdateAttributesRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:update',
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

    customer: {

      /**
       * supportcases.cases.customer.authenticate
       *
       * @desc Authenticates a customer for a case.
       *
       * @alias supportcases.cases.customer.authenticate
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).AuthenticateRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      authenticate: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:authenticate',
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
       * supportcases.cases.customer.billingAddresses
       *
       * @desc Lists customer billing addresses. Only intended for use by the Cases frontend.
       *
       * @alias supportcases.cases.customer.billingAddresses
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).ListBillingAddressesRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      billingAddresses: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}/customer/billingAddresses',
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
       * supportcases.cases.customer.checkWalletAccount
       *
       * @desc Check if a customer has a valid Wallet account. Suppresses warning: GET requires method name starting with "Get" or "List"
       *
       * @alias supportcases.cases.customer.checkWalletAccount
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.email 
       * @param {string} params.name 
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      checkWalletAccount: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:checkWalletAccount',
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
       * supportcases.cases.customer.deauthenticate
       *
       * @desc Deauthenticates a customer for a case.
       *
       * @alias supportcases.cases.customer.deauthenticate
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).DeauthenticateRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      deauthenticate: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:deauthenticate',
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
       * supportcases.cases.customer.getAuthenticationCreditCardTypes
       *
       * @desc Get credit card types for authentication.
       *
       * @alias supportcases.cases.customer.getAuthenticationCreditCardTypes
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).GetAuthenticationCreditCardTypesRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getAuthenticationCreditCardTypes: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:getAuthenticationCreditCardTypes',
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
       * supportcases.cases.customer.getAuthenticationQuestions
       *
       * @desc Get authentication options for a customer for a case.
       *
       * @alias supportcases.cases.customer.getAuthenticationQuestions
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).GetAuthenticationQuestionsRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getAuthenticationQuestions: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:getAuthenticationQuestions',
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
       * supportcases.cases.customer.getAuthenticationResult
       *
       * @desc Get authentication status for a customer of a case.
       *
       * @alias supportcases.cases.customer.getAuthenticationResult
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).GetAuthenticationResultRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getAuthenticationResult: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:getAuthenticationResult',
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
       * supportcases.cases.customer.getBusinessListings
       *
       * @desc Gets the business listings for a customer.
       *
       * @alias supportcases.cases.customer.getBusinessListings
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).GetBusinessListingsRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getBusinessListings: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:getBusinessListings',
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
       * supportcases.cases.customer.shippingAddresses
       *
       * @desc Lists customer shipping addresses. Only intended for use by the Cases frontend.
       *
       * @alias supportcases.cases.customer.shippingAddresses
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).ListShippingAddressesRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      shippingAddresses: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}/customer/shippingAddresses',
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
       * supportcases.cases.customer.updateContactEmail
       *
       * @desc Updates contact email for the specified case.
       *
       * @alias supportcases.cases.customer.updateContactEmail
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).UpdateContactEmailRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      updateContactEmail: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:updateContactEmail',
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
       * supportcases.cases.customer.updateContactName
       *
       * @desc Updates contact name for the specified case.
       *
       * @alias supportcases.cases.customer.updateContactName
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).UpdateContactNameRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      updateContactName: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:updateContactName',
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
       * supportcases.cases.customer.updateCustomerAttributes
       *
       * @desc Updates customer attributes for the specified case.
       *
       * @alias supportcases.cases.customer.updateCustomerAttributes
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).UpdateCustomerAttributesRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      updateCustomerAttributes: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:updateCustomerAttributes',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      contact: {

        /**
         * supportcases.cases.customer.contact.callbackNumber
         *
         * @desc Sets a callback phone number.
         *
         * @alias supportcases.cases.customer.contact.callbackNumber
         * @memberOf! supportcases(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name 
         * @param {supportcases(v2).SetCallbackNumberRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        callbackNumber: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: utils.extend({
              url: 'https://supportcases.googleapis.com/v2/{name}',
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
         * supportcases.cases.customer.contact.getCallbackNumber
         *
         * @desc Gets the callback phone number associated with a case.
         *
         * @alias supportcases.cases.customer.contact.getCallbackNumber
         * @memberOf! supportcases(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name 
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getCallbackNumber: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: utils.extend({
              url: 'https://supportcases.googleapis.com/v2/{name}',
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },

    issue: {

      /**
       * supportcases.cases.issue.updateAccounts
       *
       * @desc Updates case's accounts.
       *
       * @alias supportcases.cases.issue.updateAccounts
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).UpdateAccountsRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      updateAccounts: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}',
            method: 'PUT'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * supportcases.cases.issue.updateLocale
       *
       * @desc Updates the case's issue locale.
       *
       * @alias supportcases.cases.issue.updateLocale
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).UpdateLocaleRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      updateLocale: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:updateLocale',
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
       * supportcases.cases.issue.updateProduct
       *
       * @desc Updates product for the specified case.
       *
       * @alias supportcases.cases.issue.updateProduct
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).UpdateProductRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      updateProduct: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}',
            method: 'PUT'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * supportcases.cases.issue.updateSummary
       *
       * @desc Updates case's issue summary.
       *
       * @alias supportcases.cases.issue.updateSummary
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).UpdateSummaryRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      updateSummary: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:updateSummary',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      product: {

        /**
         * supportcases.cases.issue.product.updateAgentCategories
         *
         * @desc Updates agent categories for the specified case. Note: This call replaces categories on the case by new categories passed in the request.
         *
         * @alias supportcases.cases.issue.product.updateAgentCategories
         * @memberOf! supportcases(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name 
         * @param {supportcases(v2).UpdateAgentCategoriesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateAgentCategories: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: utils.extend({
              url: 'https://supportcases.googleapis.com/v2/{name}:updateAgentCategories',
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
    },

    workflows: {

      /**
       * supportcases.cases.workflows.get
       *
       * @desc Get workflow state.
       *
       * @alias supportcases.cases.workflows.get
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
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

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}',
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
       * supportcases.cases.workflows.post
       *
       * @desc Creates a new workflow state on a case.
       *
       * @alias supportcases.cases.workflows.post
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).CreateWorkflowRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      post: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}',
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
       * supportcases.cases.workflows.update
       *
       * @desc Updates workflow state.
       *
       * @alias supportcases.cases.workflows.update
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).UpdateWorkflowRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      update: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:update',
            method: 'PUT'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.categoryInfos = {

    /**
     * supportcases.categoryInfos.batchGet
     *
     * @desc Batch gets category info. (Best effort, returns valid category infos only) Suppresses warning: GET requires method name starting with "Get" or "List"
     *
     * @alias supportcases.categoryInfos.batchGet
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.names 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchGet: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/categoryInfos:batchGet',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.categoryInfos.get
     *
     * @desc Gets the specified category info.
     *
     * @alias supportcases.categoryInfos.get
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}',
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
     * supportcases.categoryInfos.listChildren
     *
     * @desc Lists children category info.
     *
     * @alias supportcases.categoryInfos.listChildren
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listChildren: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:listChildren',
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
     * supportcases.categoryInfos.listTopLevel
     *
     * @desc Lists gKMS top level category info.
     *
     * @alias supportcases.categoryInfos.listTopLevel
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listTopLevel: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/categoryInfos:listTopLevel',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.categoryInfos.search
     *
     * @desc Searches category info. Suppresses warning: GET requires method name starting with "Get" or "List"
     *
     * @alias supportcases.categoryInfos.search
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {boolean=} params.baselineOnly 
     * @param {integer=} params.filterByParentCategoryId 
     * @param {boolean=} params.filterConsultCategories 
     * @param {integer=} params.maximumResults 
     * @param {string=} params.productIds 
     * @param {string=} params.query 
     * @param {integer=} params.topCategoryPathNodeIds 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/categoryInfos:search',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.categoryInfos.searchMultiple
     *
     * @desc Searches multiple category info.
     *
     * @alias supportcases.categoryInfos.searchMultiple
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).SearchMultipleCategoryInfosRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    searchMultiple: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/categoryInfos:searchMultiple',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    properties: {

      /**
       * supportcases.categoryInfos.properties.list
       *
       * @desc Lists all properties associated with a category info.
       *
       * @alias supportcases.categoryInfos.properties.list
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
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

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}/properties',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.communications = {

    /**
     * supportcases.communications.buildNewEmail
     *
     * @desc Builds an email template for the first email on a case.
     *
     * @alias supportcases.communications.buildNewEmail
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).BuildNewEmailRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    buildNewEmail: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/communications:buildNewEmail',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.communications.buildReplyEmail
     *
     * @desc Builds an email template for a reply to an existing email.
     *
     * @alias supportcases.communications.buildReplyEmail
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).BuildReplyEmailRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    buildReplyEmail: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/communications:buildReplyEmail',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.communications.cancelSend
     *
     * @desc Cancel a pending send (for email only).
     *
     * @alias supportcases.communications.cancelSend
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).CancelSendRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancelSend: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:cancelSend',
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
     * supportcases.communications.createConsultNote
     *
     * @desc Creates a draft note that replies to a consult note.
     *
     * @alias supportcases.communications.createConsultNote
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).CreateConsultNoteRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createConsultNote: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/communications:createConsultNote',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.communications.createEmail
     *
     * @desc Creates a draft email and adds it to a case.
     *
     * @alias supportcases.communications.createEmail
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).CreateEmailRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createEmail: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/communications:createEmail',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.communications.createNote
     *
     * @desc Creates a note.
     *
     * @alias supportcases.communications.createNote
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).CreateNoteRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createNote: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/communications:createNote',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.communications.discardDraft
     *
     * @desc Discards a draft communication.
     *
     * @alias supportcases.communications.discardDraft
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).DiscardDraftRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    discardDraft: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:discardDraft',
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
     * supportcases.communications.finalizeConsultNote
     *
     * @desc Finalizes and sends a draft note for a consult case.
     *
     * @alias supportcases.communications.finalizeConsultNote
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).FinalizeConsultNoteRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    finalizeConsultNote: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:finalizeConsultNote',
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
     * supportcases.communications.finalizeNote
     *
     * @desc Finalize a note (a note cannot be updated after it is finalized).
     *
     * @alias supportcases.communications.finalizeNote
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).FinalizeNoteRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    finalizeNote: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:finalizeNote',
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
     * supportcases.communications.list
     *
     * @desc Lists communications that match the filter.
     *
     * @alias supportcases.communications.list
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.caseIds 
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/communications',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.communications.listRelated
     *
     * @desc Lists communications that are related to each other, including the communications on the requested case. Related communications include consult communications from target cases. Currently, only related communications from consult cases are supported.
     *
     * @alias supportcases.communications.listRelated
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.caseId 
     * @param {string=} params.contextCaseId 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listRelated: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/communications:listRelated',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.communications.send
     *
     * @desc Sends a draft email. This finalizes the email.
     *
     * @alias supportcases.communications.send
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).SendEmailRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    send: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:send',
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
     * supportcases.communications.suggestReplyEmailHeaders
     *
     * @desc Suggests a set of email headers for an email reply to another email. Suppresses warning: GET requires method name starting with "Get" or "List"
     *
     * @alias supportcases.communications.suggestReplyEmailHeaders
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.caseId 
     * @param {string=} params.messageId 
     * @param {string=} params.replyType 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    suggestReplyEmailHeaders: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/communications:suggestReplyEmailHeaders',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.communications.updateConsultNote
     *
     * @desc Updates a draft consult note with new content.
     *
     * @alias supportcases.communications.updateConsultNote
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).UpdateConsultNoteRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateConsultNote: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:updateConsultNote',
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
     * supportcases.communications.updateEmail
     *
     * @desc Updates a draft email.
     *
     * @alias supportcases.communications.updateEmail
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).UpdateEmailRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateEmail: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:updateEmail',
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
     * supportcases.communications.updateNote
     *
     * @desc Updates a draft note.
     *
     * @alias supportcases.communications.updateNote
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).UpdateNoteRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateNote: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:updateNote',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    attachments: {

      /**
       * supportcases.communications.attachments.delete
       *
       * @desc Deletes an attachment from a draft.
       *
       * @alias supportcases.communications.attachments.delete
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.caseId 
       * @param {string} params.name 
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

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}',
            method: 'DELETE'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.customerInteractions = {

    /**
     * supportcases.customerInteractions.list
     *
     * @desc List customer interactions.
     *
     * @alias supportcases.customerInteractions.list
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.adwordsCid 
     * @param {string=} params.caseId 
     * @param {string=} params.channels 
     * @param {string=} params.emailAddress 
     * @param {string=} params.excludeCases 
     * @param {integer=} params.pageSize 
     * @param {string=} params.pageToken 
     * @param {string=} params.products 
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/customerInteractions',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.customerInteractions.summarize
     *
     * @desc Summary statistics about the cutomer's interaction history. Suppresses warning: GET requires method name starting with "Get" or "List"
     *
     * @alias supportcases.customerInteractions.summarize
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.adwordsCid 
     * @param {string=} params.caseId 
     * @param {string=} params.emailAddress 
     * @param {string=} params.excludeCases 
     * @param {string=} params.startTime 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    summarize: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/customerInteractions:summarize',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.customerIssues = {

    /**
     * supportcases.customerIssues.list
     *
     * @desc List issues and their resolutions for a customer.
     *
     * @alias supportcases.customerIssues.list
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.caseId 
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/customerIssues:list',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.devices = {

    /**
     * supportcases.devices.getById
     *
     * @desc Gets the specified device by any device ID.
     *
     * @alias supportcases.devices.getById
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.caseId 
     * @param {string=} params.deviceId 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getById: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/devices:getById',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.devices.list
     *
     * @desc List devices.
     *
     * @alias supportcases.devices.list
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.caseId 
     * @param {string=} params.email 
     * @param {boolean=} params.excludeGoogleStoreOrders 
     * @param {boolean=} params.excludeRmaTypes 
     * @param {integer=} params.pageSize 
     * @param {string=} params.pageToken 
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/devices',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.devices.updateOwner
     *
     * @desc Updates the owner of a device. Suppresses warning: GET requires method name starting with "Get" or "List"
     *
     * @alias supportcases.devices.updateOwner
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.address.addressLine1 
     * @param {string=} params.address.addressLine2 
     * @param {string=} params.address.addressLine3 
     * @param {string=} params.address.addressee 
     * @param {string=} params.address.city 
     * @param {string=} params.address.countryCode 
     * @param {string=} params.address.postalCode 
     * @param {string=} params.address.stateProvinceCode 
     * @param {string=} params.deviceId 
     * @param {string=} params.email 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateOwner: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/devices:updateOwner',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.giftCards = {

    /**
     * supportcases.giftCards.checkRedeemer
     *
     * @desc If the card is already redeemed by somebody else, customer can try a few users.
     *
     * @alias supportcases.giftCards.checkRedeemer
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).CheckRedeemerRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    checkRedeemer: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/giftCards:checkRedeemer',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.giftCards.lookup
     *
     * @desc Finds a gift card based on its full redemption code or activation number. With full redemption code, returns redemption token on success.
     *
     * @alias supportcases.giftCards.lookup
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).LookupGiftCardRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    lookup: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/giftCards:lookup',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.giftCards.redeem
     *
     * @desc Redeems a gift card to a customer using the redemption token.
     *
     * @alias supportcases.giftCards.redeem
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).RedeemGiftCardRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    redeem: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/giftCards:redeem',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.giftCards.verify
     *
     * @desc Verifies ownership of a damaged GC by checking if the activation number and partial redemption code are valid and refers to the same card. Returns the redemption token on success.
     *
     * @alias supportcases.giftCards.verify
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).VerifyGiftCardRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    verify: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/giftCards:verify',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.ginlogs = {

    /**
     * supportcases.ginlogs.logDataAccess
     *
     * @desc Logs data access.
     *
     * @alias supportcases.ginlogs.logDataAccess
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).LogDataAccessRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    logDataAccess: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/ginlogs:logDataAccess',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.hardwareAuditor = {

    orders: {

      /**
       * supportcases.hardwareAuditor.orders.cancel
       *
       * @desc Cancels the hardware order.
       *
       * @alias supportcases.hardwareAuditor.orders.cancel
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).CancelHardwareOrderRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      cancel: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:cancel',
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
       * supportcases.hardwareAuditor.orders.getDetail
       *
       * @desc Gets detail for a hardware order.
       *
       * @alias supportcases.hardwareAuditor.orders.getDetail
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).GetHardwareOrderDetailRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getDetail: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:getDetail',
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
       * supportcases.hardwareAuditor.orders.getShippingAddress
       *
       * @desc Gets shipping address for a purchase. Get by orderId: /v2/hardwareAuditor/orders/ DEPRECATED TODO(b/34705382)
       *
       * @alias supportcases.hardwareAuditor.orders.getShippingAddress
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).GetShippingAddressRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getShippingAddress: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:getShippingAddress',
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
       * supportcases.hardwareAuditor.orders.getShippingCustomerName
       *
       * @desc Gets the shipping customer name for a hardware order Get by orderId: /v2/hardwareAuditor/orders/ DEPRECATED TODO(b/34705382)
       *
       * @alias supportcases.hardwareAuditor.orders.getShippingCustomerName
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).GetShippingCustomerNameRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getShippingCustomerName: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:getShippingCustomerName',
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
       * supportcases.hardwareAuditor.orders.getShippingCustomerPhoneNumber
       *
       * @desc Gets the shipping customer phone number for a hardware order Get by orderId: /v2/hardwareAuditor/orders/ DEPRECATED TODO(b/34705382)
       *
       * @alias supportcases.hardwareAuditor.orders.getShippingCustomerPhoneNumber
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).GetShippingCustomerPhoneNumberRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getShippingCustomerPhoneNumber: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:getShippingCustomerPhoneNumber',
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
       * supportcases.hardwareAuditor.orders.list
       *
       * @desc Lists hardware orders.
       *
       * @alias supportcases.hardwareAuditor.orders.list
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {supportcases(v2).ListHardwareOrdersRequest} params.resource Request body data
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

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/hardwareAuditor/orders:list',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * supportcases.hardwareAuditor.orders.refunds
       *
       * @desc Lists refunds for a hardware order.
       *
       * @alias supportcases.hardwareAuditor.orders.refunds
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).ListHardwareRefundsRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      refunds: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}/refunds',
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

    shipments: {

      /**
       * supportcases.hardwareAuditor.shipments.cancel
       *
       * @desc Cancels the hardware order by shipment id.
       *
       * @alias supportcases.hardwareAuditor.shipments.cancel
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).CancelHardwareOrderRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      cancel: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:cancel',
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
       * supportcases.hardwareAuditor.shipments.getShippingAddress
       *
       * @desc --------- Begin of shipment Id based calls ----------------- Gets shipping address for a purchase Get by shipmentId: /v2/hardwareAuditor/shipments/:
       *
       * @alias supportcases.hardwareAuditor.shipments.getShippingAddress
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).GetShippingAddressRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getShippingAddress: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:getShippingAddress',
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
       * supportcases.hardwareAuditor.shipments.getShippingCustomerName
       *
       * @desc Gets the shipping customer name for a hardware order Get by shipmentId: /v2/hardwareAuditor/shipments/:
       *
       * @alias supportcases.hardwareAuditor.shipments.getShippingCustomerName
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).GetShippingCustomerNameRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getShippingCustomerName: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:getShippingCustomerName',
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
       * supportcases.hardwareAuditor.shipments.getShippingCustomerPhoneNumber
       *
       * @desc Gets the shipping customer phone number for a hardware order Get by shipmentId: /v2/hardwareAuditor/shipments/:
       *
       * @alias supportcases.hardwareAuditor.shipments.getShippingCustomerPhoneNumber
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).GetShippingCustomerPhoneNumberRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getShippingCustomerPhoneNumber: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}:getShippingCustomerPhoneNumber',
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
       * supportcases.hardwareAuditor.shipments.refunds
       *
       * @desc Lists refunds for a hardware order. Get by shipmentId: /v2/hardwareAuditor/shipments/:
       *
       * @alias supportcases.hardwareAuditor.shipments.refunds
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name 
       * @param {supportcases(v2).ListHardwareRefundsRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      refunds: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/{name}/refunds',
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
  };

  self.hardwareOrders = {

    /**
     * supportcases.hardwareOrders.cancel
     *
     * @desc Cancels the hardware order.
     *
     * @alias supportcases.hardwareOrders.cancel
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).CancelHardwareOrderRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:cancel',
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
     * supportcases.hardwareOrders.getDetail
     *
     * @desc Gets detail for a hardware order.
     *
     * @alias supportcases.hardwareOrders.getDetail
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).GetHardwareOrderDetailRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getDetail: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:getDetail',
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
     * supportcases.hardwareOrders.getLostStolenRefundEligibility
     *
     * @desc Gets lost stolen refund eligibility for account Get by orderId: /v2/hardwareOrders/ DEPRECATED TODO(b/34705382)
     *
     * @alias supportcases.hardwareOrders.getLostStolenRefundEligibility
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).GetLostStolenRefundEligibilityRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getLostStolenRefundEligibility: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:getLostStolenRefundEligibility',
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
     * supportcases.hardwareOrders.getShippingAddress
     *
     * @desc Gets shipping address for a purchase Get by orderId: /v2/hardwareOrders/ DEPRECATED TODO(b/34705382)
     *
     * @alias supportcases.hardwareOrders.getShippingAddress
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).GetShippingAddressRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getShippingAddress: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:getShippingAddress',
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
     * supportcases.hardwareOrders.getShippingCustomerName
     *
     * @desc Gets the shipping customer name for a hardware order Get by orderId: /v2/hardwareOrders/ DEPRECATED TODO(b/34705382)
     *
     * @alias supportcases.hardwareOrders.getShippingCustomerName
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).GetShippingCustomerNameRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getShippingCustomerName: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:getShippingCustomerName',
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
     * supportcases.hardwareOrders.getShippingCustomerPhoneNumber
     *
     * @desc Gets the shipping customer phone number for a hardware order Get by orderId: /v2/hardwareOrders/ DEPRECATED TODO(b/34705382)
     *
     * @alias supportcases.hardwareOrders.getShippingCustomerPhoneNumber
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).GetShippingCustomerPhoneNumberRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getShippingCustomerPhoneNumber: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:getShippingCustomerPhoneNumber',
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
     * supportcases.hardwareOrders.hardwareSignals
     *
     * @desc Gets hardware signals based on the case and customer.
     *
     * @alias supportcases.hardwareOrders.hardwareSignals
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).GetHardwareSignalsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    hardwareSignals: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/hardwareOrders:hardwareSignals',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.hardwareOrders.list
     *
     * @desc Lists hardware orders.
     *
     * @alias supportcases.hardwareOrders.list
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).ListHardwareOrdersRequest} params.resource Request body data
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/hardwareOrders:list',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.hardwareOrders.listOtherDevices
     *
     * @desc Gets a user's devices that are not in the ListHardwareOrders result.
     *
     * @alias supportcases.hardwareOrders.listOtherDevices
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).ListOtherDevicesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listOtherDevices: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/hardwareOrders:listOtherDevices',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.hardwareOrders.refund
     *
     * @desc Refunds a hardware order
     *
     * @alias supportcases.hardwareOrders.refund
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).RefundHardwareOrderRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    refund: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:refund',
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
     * supportcases.hardwareOrders.refunds
     *
     * @desc Lists refunds for a hardware order. Get by orderId: /v2/hardwareOrders/ DEPRECATED TODO(b/34705382)
     *
     * @alias supportcases.hardwareOrders.refunds
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).ListHardwareRefundsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    refunds: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}/refunds',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.hardwareShipments = {

    /**
     * supportcases.hardwareShipments.cancel
     *
     * @desc Cancels the hardware shipment by shipment id.
     *
     * @alias supportcases.hardwareShipments.cancel
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).CancelHardwareOrderRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:cancel',
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
     * supportcases.hardwareShipments.getLostStolenRefundEligibility
     *
     * @desc Gets lost stolen refund eligibility for account Get by shipmentId: /v2/hardwareShipments/:
     *
     * @alias supportcases.hardwareShipments.getLostStolenRefundEligibility
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).GetLostStolenRefundEligibilityRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getLostStolenRefundEligibility: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:getLostStolenRefundEligibility',
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
     * supportcases.hardwareShipments.getShippingAddress
     *
     * @desc --------- Begin of shipment Id based calls ----------------- Gets shipping address for a purchase Get by shipmentId: /v2/hardwareShipments/:
     *
     * @alias supportcases.hardwareShipments.getShippingAddress
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).GetShippingAddressRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getShippingAddress: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:getShippingAddress',
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
     * supportcases.hardwareShipments.getShippingCustomerName
     *
     * @desc Gets the shipping customer name for a hardware order Get by shipmentId: /v2/hardwareShipments/:
     *
     * @alias supportcases.hardwareShipments.getShippingCustomerName
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).GetShippingCustomerNameRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getShippingCustomerName: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:getShippingCustomerName',
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
     * supportcases.hardwareShipments.getShippingCustomerPhoneNumber
     *
     * @desc Gets the shipping customer phone number for a hardware order Get by shipmentId: /v2/hardwareShipments/:
     *
     * @alias supportcases.hardwareShipments.getShippingCustomerPhoneNumber
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).GetShippingCustomerPhoneNumberRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getShippingCustomerPhoneNumber: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:getShippingCustomerPhoneNumber',
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
     * supportcases.hardwareShipments.refund
     *
     * @desc Refunds a hardware shipment by shipment id.
     *
     * @alias supportcases.hardwareShipments.refund
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).RefundHardwareOrderRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    refund: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:refund',
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
     * supportcases.hardwareShipments.refunds
     *
     * @desc Lists refunds for a hardware order. Get by shipmentId: /v2/hardwareShipments/:
     *
     * @alias supportcases.hardwareShipments.refunds
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).ListHardwareRefundsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    refunds: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}/refunds',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.opportunities = {

    /**
     * supportcases.opportunities.list
     *
     * @desc Lists opportunities.
     *
     * @alias supportcases.opportunities.list
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {boolean=} params.agentWhitelistedForApollo 
     * @param {string=} params.caseId 
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/opportunities',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    pitches: {

      /**
       * supportcases.opportunities.pitches.batchCreate
       *
       * @desc Batch creates pitches.
       *
       * @alias supportcases.opportunities.pitches.batchCreate
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {supportcases(v2).BatchCreatePitchRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      batchCreate: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/opportunities/pitches:batchCreate',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.play = {

    digitalContent: {

      /**
       * supportcases.play.digitalContent.getRefundStatus
       *
       * @desc Get refund status.
       *
       * @alias supportcases.play.digitalContent.getRefundStatus
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {supportcases(v2).GetRefundStatusRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getRefundStatus: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/play/digitalContent:getRefundStatus',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      orders: {

        /**
         * supportcases.play.digitalContent.orders.batchGet
         *
         * @desc Get a collection of orders.
         *
         * @alias supportcases.play.digitalContent.orders.batchGet
         * @memberOf! supportcases(v2)
         *
         * @param {object} params Parameters for request
         * @param {supportcases(v2).GetOrdersRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchGet: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: utils.extend({
              url: 'https://supportcases.googleapis.com/v2/play/digitalContent/orders:batchGet',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: [],
            pathParams: [],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * supportcases.play.digitalContent.orders.refund
         *
         * @desc Refund orders.
         *
         * @alias supportcases.play.digitalContent.orders.refund
         * @memberOf! supportcases(v2)
         *
         * @param {object} params Parameters for request
         * @param {supportcases(v2).RefundOrdersRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        refund: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: utils.extend({
              url: 'https://supportcases.googleapis.com/v2/play/digitalContent/orders:refund',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: [],
            pathParams: [],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * supportcases.play.digitalContent.orders.search
         *
         * @desc Search for orders.
         *
         * @alias supportcases.play.digitalContent.orders.search
         * @memberOf! supportcases(v2)
         *
         * @param {object} params Parameters for request
         * @param {supportcases(v2).SearchOrdersRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        search: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: utils.extend({
              url: 'https://supportcases.googleapis.com/v2/play/digitalContent/orders:search',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: [],
            pathParams: [],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      subscriptions: {

        /**
         * supportcases.play.digitalContent.subscriptions.batchGet
         *
         * @desc Get a collection of subscriptions.
         *
         * @alias supportcases.play.digitalContent.subscriptions.batchGet
         * @memberOf! supportcases(v2)
         *
         * @param {object} params Parameters for request
         * @param {supportcases(v2).GetSubscriptionsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchGet: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: utils.extend({
              url: 'https://supportcases.googleapis.com/v2/play/digitalContent/subscriptions:batchGet',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: [],
            pathParams: [],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * supportcases.play.digitalContent.subscriptions.cancel
         *
         * @desc Cancel subscription.
         *
         * @alias supportcases.play.digitalContent.subscriptions.cancel
         * @memberOf! supportcases(v2)
         *
         * @param {object} params Parameters for request
         * @param {supportcases(v2).CancelSubscriptionRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancel: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: utils.extend({
              url: 'https://supportcases.googleapis.com/v2/play/digitalContent/subscriptions:cancel',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: [],
            pathParams: [],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * supportcases.play.digitalContent.subscriptions.getCancellationStatus
         *
         * @desc Get cancellation status.
         *
         * @alias supportcases.play.digitalContent.subscriptions.getCancellationStatus
         * @memberOf! supportcases(v2)
         *
         * @param {object} params Parameters for request
         * @param {supportcases(v2).GetCancellationStatusRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getCancellationStatus: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: utils.extend({
              url: 'https://supportcases.googleapis.com/v2/play/digitalContent/subscriptions:getCancellationStatus',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: [],
            pathParams: [],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * supportcases.play.digitalContent.subscriptions.list
         *
         * @desc List subscriptions.
         *
         * @alias supportcases.play.digitalContent.subscriptions.list
         * @memberOf! supportcases(v2)
         *
         * @param {object} params Parameters for request
         * @param {supportcases(v2).ListSubscriptionsRequest} params.resource Request body data
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

          const parameters = {
            options: utils.extend({
              url: 'https://supportcases.googleapis.com/v2/play/digitalContent/subscriptions:list',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: [],
            pathParams: [],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };

  self.products = {

    /**
     * supportcases.products.get
     *
     * @desc Gets the specified product.
     *
     * @alias supportcases.products.get
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}',
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
     * supportcases.products.getEscalationTargets
     *
     * @desc Gets the available escalation targets.
     *
     * @alias supportcases.products.getEscalationTargets
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getEscalationTargets: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:getEscalationTargets',
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
     * supportcases.products.getRoutingTargets
     *
     * @desc Gets the available routing targets.
     *
     * @alias supportcases.products.getRoutingTargets
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getRoutingTargets: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:getRoutingTargets',
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
     * supportcases.products.getSettings
     *
     * @desc Gets the settings for a specified product.
     *
     * @alias supportcases.products.getSettings
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getSettings: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}',
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
     * supportcases.products.list
     *
     * @desc Lists products.
     *
     * @alias supportcases.products.list
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/products',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.products.listSettings
     *
     * @desc Lists product settings for an agent.
     *
     * @alias supportcases.products.listSettings
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listSettings: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:listSettings',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.resolutions = {

    /**
     * supportcases.resolutions.list
     *
     * @desc Query for resolutions.
     *
     * @alias supportcases.resolutions.list
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {boolean=} params.autocompleteResults 
     * @param {string=} params.caseId 
     * @param {integer=} params.pageSize 
     * @param {string=} params.pageToken 
     * @param {string=} params.q 
     * @param {string=} params.resultsToken 
     * @param {string=} params.searchSessionId 
     * @param {string=} params.type 
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/resolutions',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.resolutions.log
     *
     * @desc Log a resolution.
     *
     * @alias supportcases.resolutions.log
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).LogResolutionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    log: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/resolutions:log',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.resolutions.suggest
     *
     * @desc Suggest some resolutions to a case based on provided signals.
     *
     * @alias supportcases.resolutions.suggest
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).SuggestResolutionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    suggest: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/resolutions:suggest',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    cohorts: {

      /**
       * supportcases.resolutions.cohorts.assign
       *
       * @desc Query and assign cohorts for this case.
       *
       * @alias supportcases.resolutions.cohorts.assign
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {supportcases(v2).AssignCohortsRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      assign: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/resolutions/cohorts:assign',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.rma = {

    /**
     * supportcases.rma.save
     *
     * @desc Saves (Insert/Update) an RMA.
     *
     * @alias supportcases.rma.save
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).SaveRmaRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    save: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/rma:save',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.rma.submit
     *
     * @desc DEPRECATED: Use SendRma instead. Submit an RMA.
     *
     * @alias supportcases.rma.submit
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).SubmitRmaRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    submit: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/rma:submit',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.rmas = {

    /**
     * supportcases.rmas.cancel
     *
     * @desc Cancel an RMA.
     *
     * @alias supportcases.rmas.cancel
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).CancelRmaRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:cancel',
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
     * supportcases.rmas.cancelAuthHold
     *
     * @desc Cancels an auth hold for an advanced exchange RMA.
     *
     * @alias supportcases.rmas.cancelAuthHold
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).CancelAuthHoldRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancelAuthHold: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:cancelAuthHold',
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
     * supportcases.rmas.createExchangeWithoutReturn
     *
     * @desc Sends merchandise without expecting a return.
     *
     * @alias supportcases.rmas.createExchangeWithoutReturn
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).CreateExchangeWithoutReturnRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createExchangeWithoutReturn: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/rmas:createExchangeWithoutReturn',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.rmas.get
     *
     * @desc Gets the specified RMA.
     *
     * @alias supportcases.rmas.get
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.caseId 
     * @param {string} params.name 
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}',
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
     * supportcases.rmas.getLostStolenEligibility
     *
     * @desc Determines the eligibility of a lost/stolen RMA.
     *
     * @alias supportcases.rmas.getLostStolenEligibility
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).GetLostStolenEligibilityRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getLostStolenEligibility: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:getLostStolenEligibility',
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
     * supportcases.rmas.getMailingAddress
     *
     * @desc Get mailing address for an RMA
     *
     * @alias supportcases.rmas.getMailingAddress
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).GetMailingAddressRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getMailingAddress: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:getMailingAddress',
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
     * supportcases.rmas.getOrderDetail
     *
     * @desc Gets an RMA's order detail.
     *
     * @alias supportcases.rmas.getOrderDetail
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).GetRmaOrderDetailRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getOrderDetail: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:getOrderDetail',
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
     * supportcases.rmas.getReplacementDetail
     *
     * @desc Get details for a replacement device that is not associated with an order.
     *
     * @alias supportcases.rmas.getReplacementDetail
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).GetReplacementDetailRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getReplacementDetail: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:getReplacementDetail',
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
     * supportcases.rmas.list
     *
     * @desc Lists RMAs by Case ID and RMA state
     *
     * @alias supportcases.rmas.list
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.caseId 
     * @param {string=} params.state 
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/rmas',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.rmas.listBuyersRemorseCountryCodes
     *
     * @desc Lists two-character country codes valid for Buyer's Remorse RMAs.
     *
     * @alias supportcases.rmas.listBuyersRemorseCountryCodes
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listBuyersRemorseCountryCodes: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/rmas:listBuyersRemorseCountryCodes',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.rmas.markOriginalDeviceReceived
     *
     * @desc Marks an original device as received in a Standard Exchange.
     *
     * @alias supportcases.rmas.markOriginalDeviceReceived
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).MarkOriginalDeviceReceivedRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    markOriginalDeviceReceived: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:markOriginalDeviceReceived',
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
     * supportcases.rmas.runRmaSteps
     *
     * @desc Run the given RMA workflow steps.
     *
     * @alias supportcases.rmas.runRmaSteps
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).RunRmaStepsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    runRmaSteps: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:runRmaSteps',
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
     * supportcases.rmas.runWorkflow
     *
     * @desc DEPRECATED: Use RunRmaSteps instead. Run the given workflow for an RMA.
     *
     * @alias supportcases.rmas.runWorkflow
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).RunWorkflowRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    runWorkflow: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/rmas:runWorkflow',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.rmas.send
     *
     * @desc Initiates a new RMA.
     *
     * @alias supportcases.rmas.send
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).SendRmaRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    send: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/rmas:send',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.teams = {

    /**
     * supportcases.teams.getMyAssignStreamSearches
     *
     * @desc Gets assign-stream-enabled searches associated with the agent.
     *
     * @alias supportcases.teams.getMyAssignStreamSearches
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getMyAssignStreamSearches: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/teams:getMyAssignStreamSearches',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.troubleshooterSessions = {

    /**
     * supportcases.troubleshooterSessions.create
     *
     * @desc Start a new troubleshooter session.
     *
     * @alias supportcases.troubleshooterSessions.create
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).CreateTroubleshooterSessionRequest} params.resource Request body data
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

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/troubleshooterSessions:create',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.troubleshooterSessions.listDevices
     *
     * @desc Lists devices on a customer's account.
     *
     * @alias supportcases.troubleshooterSessions.listDevices
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).ListDevicesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listDevices: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/troubleshooterSessions:listDevices',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.troubleshooterSessions.listIssues
     *
     * @desc Lists issues.
     *
     * @alias supportcases.troubleshooterSessions.listIssues
     * @memberOf! supportcases(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.caseId 
     * @param {string=} params.issueId 
     * @param {string=} params.troubleshooterType 
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listIssues: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/troubleshooterSessions:listIssues',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.troubleshooterSessions.listPurchasedApps
     *
     * @desc Lists purchased apps on a customer's account.
     *
     * @alias supportcases.troubleshooterSessions.listPurchasedApps
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).ListPurchasedAppsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listPurchasedApps: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/troubleshooterSessions:listPurchasedApps',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.troubleshooterSessions.listPurchasedBooks
     *
     * @desc Lists purchased books on a customer's account.
     *
     * @alias supportcases.troubleshooterSessions.listPurchasedBooks
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).ListPurchasedBooksRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listPurchasedBooks: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/troubleshooterSessions:listPurchasedBooks',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.troubleshooterSessions.listPurchasedVideos
     *
     * @desc Lists purchased videos on a customer's account.
     *
     * @alias supportcases.troubleshooterSessions.listPurchasedVideos
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).ListPurchasedVideosRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listPurchasedVideos: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/troubleshooterSessions:listPurchasedVideos',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.troubleshooterSessions.log
     *
     * @desc Log troubleshooter activity.
     *
     * @alias supportcases.troubleshooterSessions.log
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).LogTroubleshooterActivityRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    log: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:log',
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
     * supportcases.troubleshooterSessions.troubleshootIssue
     *
     * @desc Troubleshoot issue.
     *
     * @alias supportcases.troubleshooterSessions.troubleshootIssue
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name 
     * @param {supportcases(v2).TroubleshootIssueRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    troubleshootIssue: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/{name}:troubleshootIssue',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.wallets = {

    /**
     * supportcases.wallets.bankAccountCountries
     *
     * @desc List supported Bank Account countries. Initially will only return supported Bank Account countries for Payment Method Hijacks (PMH). This is a POST API because it takes in a sso_ticket.
     *
     * @alias supportcases.wallets.bankAccountCountries
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).ListBankAccountCountriesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    bankAccountCountries: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/wallets/bankAccountCountries',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.wallets.creditCardTypes
     *
     * @desc List supported Credit Card types. Initially will only return supported credit cards for Payment Method Hijacks (PMH). This is a POST API because it takes in a sso_ticket.
     *
     * @alias supportcases.wallets.creditCardTypes
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).ListCreditCardTypesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    creditCardTypes: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/wallets/creditCardTypes',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.wallets.transactions
     *
     * @desc Query for transactions.
     *
     * @alias supportcases.wallets.transactions
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).ListTransactionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    transactions: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/wallets/transactions',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.wallets.troubleshootAccount
     *
     * @desc Troubleshoots a Wallet account for issues.
     *
     * @alias supportcases.wallets.troubleshootAccount
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).TroubleshootAccountRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    troubleshootAccount: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/wallets:troubleshootAccount',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.wallets.troubleshootTransaction
     *
     * @desc Troubleshoots a Wallet transaction for issues.
     *
     * @alias supportcases.wallets.troubleshootTransaction
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).TroubleshootTransactionRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    troubleshootTransaction: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/wallets:troubleshootTransaction',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    accounts: {

      /**
       * supportcases.wallets.accounts.getPaymentsInfo
       *
       * @desc Fetches Payments info, such as number of Payments accounts for the user.
       *
       * @alias supportcases.wallets.accounts.getPaymentsInfo
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {supportcases(v2).GetPaymentsInfoRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getPaymentsInfo: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/wallets/accounts:getPaymentsInfo',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * supportcases.wallets.accounts.getReviewStatus
       *
       * @desc Fetches the review status of a wallet account. This is a POST API because it takes in a sso_ticket.
       *
       * @alias supportcases.wallets.accounts.getReviewStatus
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {supportcases(v2).GetAccountReviewStatusRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getReviewStatus: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/wallets/accounts:getReviewStatus',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * supportcases.wallets.accounts.getSignals
       *
       * @desc Fetches Wallet account signals for troubleshooting Wallet issues.
       *
       * @alias supportcases.wallets.accounts.getSignals
       * @memberOf! supportcases(v2)
       *
       * @param {object=} params Parameters for request
       * @param {string=} params.accountSignals 
       * @param {string=} params.caseId 
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getSignals: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/wallets/accounts:getSignals',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * supportcases.wallets.accounts.searchReviews
       *
       * @desc Initiates a review on the Wallet account. This is a POST API because it takes in a sso_ticket. This API could lead to a review escalation (increase in priority).
       *
       * @alias supportcases.wallets.accounts.searchReviews
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {supportcases(v2).SearchAccountReviewsRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      searchReviews: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/wallets/accounts:searchReviews',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      paymentInstruments: {

        /**
         * supportcases.wallets.accounts.paymentInstruments.getHijackReviewsStatus
         *
         * @desc Retrieve status for Payment Method Hijack (PMH) reviews. This is a POST API because it takes in a sso_ticket.
         *
         * @alias supportcases.wallets.accounts.paymentInstruments.getHijackReviewsStatus
         * @memberOf! supportcases(v2)
         *
         * @param {object} params Parameters for request
         * @param {supportcases(v2).GetPaymentMethodHijackReviewsStatusRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getHijackReviewsStatus: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: utils.extend({
              url: 'https://supportcases.googleapis.com/v2/wallets/accounts/paymentInstruments:getHijackReviewsStatus',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: [],
            pathParams: [],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * supportcases.wallets.accounts.paymentInstruments.initiateHijackReviews
         *
         * @desc Initiate Payment Method Hijack (PMH) reviews.
         *
         * @alias supportcases.wallets.accounts.paymentInstruments.initiateHijackReviews
         * @memberOf! supportcases(v2)
         *
         * @param {object} params Parameters for request
         * @param {supportcases(v2).InitiatePaymentMethodHijackReviewsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        initiateHijackReviews: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const parameters = {
            options: utils.extend({
              url: 'https://supportcases.googleapis.com/v2/wallets/accounts/paymentInstruments:initiateHijackReviews',
              method: 'POST'
            }, options),
            params: params,
            requiredParams: [],
            pathParams: [],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },

    paymentInstrumentTypeInfos: {

      /**
       * supportcases.wallets.paymentInstrumentTypeInfos.list
       *
       * @desc List supported payment instrument types. This API is not customer contextual.
       *
       * @alias supportcases.wallets.paymentInstrumentTypeInfos.list
       * @memberOf! supportcases(v2)
       *
       * @param {object=} params Parameters for request
       * @param {string=} params.caseId 
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

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/wallets/paymentInstrumentTypeInfos',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    paymentInstruments: {

      /**
       * supportcases.wallets.paymentInstruments.suggestIssuer
       *
       * @desc Fetches suggestions for payment(credit card, bank, direct carrier billing) issuers.
       *
       * @alias supportcases.wallets.paymentInstruments.suggestIssuer
       * @memberOf! supportcases(v2)
       *
       * @param {object=} params Parameters for request
       * @param {string=} params.caseId 
       * @param {boolean=} params.includeDescription 
       * @param {string=} params.instrumentTypeToken 
       * @param {string=} params.searchKey 
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      suggestIssuer: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/wallets/paymentInstruments:suggestIssuer',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.youtube = {

    /**
     * supportcases.youtube.onetimepurchases
     *
     * @desc Gets a list of one time purchases.
     *
     * @alias supportcases.youtube.onetimepurchases
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).GetOneTimePurchasesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    onetimepurchases: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/youtube/onetimepurchases',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * supportcases.youtube.summary
     *
     * @desc Get Customer Summary Information for entitlements and refund history.
     *
     * @alias supportcases.youtube.summary
     * @memberOf! supportcases(v2)
     *
     * @param {object} params Parameters for request
     * @param {supportcases(v2).GetCustomerSummaryRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    summary: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const parameters = {
        options: utils.extend({
          url: 'https://supportcases.googleapis.com/v2/youtube/summary',
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    components: {

      /**
       * supportcases.youtube.components.cancel
       *
       * @desc Cancel/Downgrade component(s).
       *
       * @alias supportcases.youtube.components.cancel
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {supportcases(v2).CancelComponentsRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      cancel: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/youtube/components:cancel',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    entitlements: {

      /**
       * supportcases.youtube.entitlements.cancel
       *
       * @desc Cancel entitlement.
       *
       * @alias supportcases.youtube.entitlements.cancel
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {supportcases(v2).CancelEntitlementRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      cancel: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/youtube/entitlements:cancel',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    transactions: {

      /**
       * supportcases.youtube.transactions.listByEntitlements
       *
       * @desc Get all transactions for entitlements.
       *
       * @alias supportcases.youtube.transactions.listByEntitlements
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {supportcases(v2).ListTransactionsRequest1} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      listByEntitlements: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/youtube/transactions:listByEntitlements',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * supportcases.youtube.transactions.refund
       *
       * @desc Refund a batch of transactions.
       *
       * @alias supportcases.youtube.transactions.refund
       * @memberOf! supportcases(v2)
       *
       * @param {object} params Parameters for request
       * @param {supportcases(v2).RefundTransactionsRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      refund: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://supportcases.googleapis.com/v2/youtube/transactions:refund',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: [],
          pathParams: [],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * @typedef Account
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} accountId 
 * @property {string} productId 
 * @property {string} productName 
 */
/**
 * @typedef AccountLookupTool
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} productId 
 * @property {string} productName 
 * @property {string} urlTemplate 
 */
/**
 * @typedef AccountReview
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).ReviewKey} reviewKey 
 * @property {string} reviewState 
 * @property {string} reviewType 
 */
/**
 * @typedef AccountSignalResult
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CustomerDocsSubmissionStatus} bvidDocsSubmissionStatus 
 * @property {string} gaiaCheckoutServiceStatus 
 * @property {boolean} hasPositiveWalletBalance 
 * @property {boolean} isVip 
 * @property {string} mostRecentTransactionType 
 * @property {supportcases(v2).CustomerDocsSubmissionStatus} offlineCheckDocsSubmissionStatus 
 * @property {supportcases(v2).CustomerDocsSubmissionStatus} riskDocsSubmissionStatus 
 * @property {supportcases(v2).CustomerDocsSubmissionStatus} sanctionsDocsSubmissionStatus 
 * @property {string} type 
 */
/**
 * @typedef Action
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CannedResponseAction} cannedResponses 
 * @property {supportcases(v2).IssueCategoryAction} issueCategories 
 * @property {string} nextState 
 */
/**
 * @typedef Action1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} alertMessage 
 * @property {supportcases(v2).ConsultAction} consultAction 
 * @property {supportcases(v2).DifmAction} difmAction 
 * @property {integer} scriptId 
 * @property {supportcases(v2).ShowSummaryAction} showSummaryAction 
 * @property {supportcases(v2).TransferAction} transferAction 
 */
/**
 * @typedef Address
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} addressLine1 
 * @property {string} addressLine2 
 * @property {string} addressLine3 
 * @property {string} addressee 
 * @property {string} city 
 * @property {string} countryCode 
 * @property {string} postalCode 
 * @property {string} stateProvinceCode 
 */
/**
 * @typedef AfterSendSetting
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} stateAfterSend 
 */
/**
 * @typedef AgentActivity
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} agentActivityId 
 * @property {supportcases(v2).Assignee} assignee 
 * @property {string} caseId 
 * @property {supportcases(v2).CohortMetadataCollection} cohortMetadataCollection 
 * @property {string} description 
 * @property {supportcases(v2).DesktopScreenshareEvent} desktopScreenshareEvent 
 * @property {supportcases(v2).MobileScreenshareEvent} mobileScreenshareEvent 
 * @property {supportcases(v2).PhoneCall} phoneCall 
 * @property {supportcases(v2).Pitch} pitch 
 * @property {supportcases(v2).Relation} relation 
 * @property {supportcases(v2).RequestDeviceSignalsEvent} requestDeviceSignalsEvent 
 * @property {supportcases(v2).ResolutionOpened} resolutionOpened 
 * @property {string} startTime 
 */
/**
 * @typedef AgentActivitySource
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef AgentSetting
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} agentSettingId 
 * @property {supportcases(v2).AliasInfo} aliasInfo 
 * @property {string} defaultLocale 
 * @property {string} defaultProductId 
 * @property {supportcases(v2).EmploymentInfo} employmentInfo 
 * @property {string} firstName 
 * @property {supportcases(v2).FocusInfo} focusInfo 
 * @property {boolean} includeReassignedInAutoassign 
 * @property {string} languageCode 
 * @property {string} name 
 * @property {supportcases(v2).PhoneSetting} phoneSetting 
 * @property {string} preferredName 
 * @property {supportcases(v2).SidewinderRole} sidewinderRole 
 * @property {string} status 
 */
/**
 * @typedef AgentTransfer
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Identity} sourceAgent 
 * @property {supportcases(v2).Identity} targetAgent 
 */
/**
 * @typedef AgentUnreadCasesInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).UnreadCaseInfo[]} unreadCasesInfo 
 */
/**
 * @typedef AliasInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} externalName 
 * @property {string} personalAlias 
 */
/**
 * @typedef Answer
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} question 
 * @property {string} skipReason 
 * @property {string} text 
 */
/**
 * @typedef AnswerSet
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CustomerAnswer[]} customerAnswers 
 * @property {string} questionSetType 
 */
/**
 * @typedef AssignCohortsRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 */
/**
 * @typedef AssignCohortsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Cohort2[]} cohorts 
 */
/**
 * @typedef AssignRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} assignedByScreenPop 
 * @property {string} emailAddress 
 */
/**
 * @typedef AssignResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef Assignee
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} displayName 
 * @property {string} emailAddress 
 */
/**
 * @typedef Assignee1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} displayName 
 * @property {string} emailAddress 
 */
/**
 * @typedef Assignee2
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} ldap 
 * @property {string} name 
 */
/**
 * @typedef Attachment
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} attachmentId 
 * @property {string} communicationId 
 */
/**
 * @typedef Attachment1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} attachmentId 
 * @property {string} communicationId 
 */
/**
 * @typedef AttachmentInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} attachmentId 
 * @property {string} contentId 
 * @property {string} fileName 
 * @property {string} mimeType 
 */
/**
 * @typedef Attribute
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} attributeId 
 * @property {string} attributeName 
 * @property {string} description 
 * @property {supportcases(v2).EnumValue[]} enumValue 
 * @property {string} name 
 * @property {string} valueType 
 */
/**
 * @typedef Attribute1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} attributeId 
 * @property {string} attributeName 
 * @property {supportcases(v2).Entry[]} entries 
 */
/**
 * @typedef AuthenticateRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} agentSsoCookie 
 * @property {supportcases(v2).AnswerSet[]} answerSets 
 * @property {string} customerEmail 
 */
/**
 * @typedef AuthenticateResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Customer} customer 
 * @property {string} result 
 * @property {supportcases(v2).VerificationResult[]} verificationResults 
 */
/**
 * @typedef Authentication
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} authenticateTime 
 * @property {string} channel 
 * @property {string} emailAddress 
 * @property {string} result 
 */
/**
 * @typedef AuthenticationBankAccount
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} bankAccountTypeDisplayName 
 * @property {string} bankAccountTypeToken 
 */
/**
 * @typedef AuthenticationCreditCard
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} creditCardDisplayName 
 * @property {string} creditCardTypeToken 
 */
/**
 * @typedef AuthenticationCreditCard1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} creditCardDisplayName 
 * @property {string} creditCardTypeToken 
 */
/**
 * @typedef AuthenticationInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} status 
 */
/**
 * @typedef AuthenticationSettings
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} authenticationSupported 
 * @property {boolean} exemptFromAuthentication 
 */
/**
 * @typedef AutoAssignRequest
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef AutoAssignResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 * @property {string} searchName 
 */
/**
 * @typedef AutocheckResult
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} autocheckId 
 * @property {string} autocheckTime 
 * @property {string} descriptionId 
 * @property {string} scriptId 
 * @property {string} status 
 */
/**
 * @typedef AvailableQuestion
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AuthenticationCreditCard1[]} authenticationCreditCards 
 * @property {string} question 
 * @property {supportcases(v2).QuestionSource[]} questionSources 
 * @property {string} questionToken 
 */
/**
 * @typedef BankAccount
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} accountSuffix 
 * @property {string} bankAccountToken 
 * @property {string} countryName 
 */
/**
 * @typedef BankAccount1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} accountNumberSuffix 
 * @property {string} bankAccountTypeToken 
 */
/**
 * @typedef BankAccountCountry
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} bankAccountToken 
 * @property {string} countryName 
 */
/**
 * @typedef BatchCreatePitchRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} eventId 
 * @property {string[]} opportunityIds 
 * @property {supportcases(v2).Pitch1[]} pitches 
 */
/**
 * @typedef BatchCreatePitchResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CreatePitchResponse[]} responses 
 */
/**
 * @typedef BatchGetCategoryInfosResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CategoryInfo[]} categoryInfos 
 */
/**
 * @typedef BatchUpdateAttributesRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Attribute1[]} attributes 
 */
/**
 * @typedef BatchUpdateAttributesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef BlockRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} borgAlertId 
 * @property {string} buganizerId 
 * @property {string} orderId 
 * @property {integer} pcrId 
 */
/**
 * @typedef BlockResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef BuildNewEmailRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 */
/**
 * @typedef BuildNewEmailResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Email} emailTemplate 
 * @property {string[]} footerIds 
 * @property {string[]} headerIds 
 */
/**
 * @typedef BuildReplyEmailRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} messageId 
 * @property {string} replyType 
 * @property {string} timeZone 
 */
/**
 * @typedef BuildReplyEmailResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Email} emailTemplate 
 */
/**
 * @typedef Business
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Address} address 
 * @property {string} listingId 
 * @property {string} name 
 */
/**
 * @typedef CallBackRequest
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef CallBackResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} callbackStatus 
 * @property {supportcases(v2).Customer} customer 
 */
/**
 * @typedef Campaign
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} campaignId 
 * @property {string} campaignName 
 * @property {number} rank 
 */
/**
 * @typedef CancelAuthHoldRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 */
/**
 * @typedef CancelComponentsRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string[]} componentTokens 
 * @property {string} reason 
 * @property {boolean} revokeAccess 
 * @property {string} ssoCookie 
 */
/**
 * @typedef CancelComponentsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} componentTokens 
 * @property {string} result 
 */
/**
 * @typedef CancelEntitlementRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} entitlementToken 
 * @property {string[]} entitlementTokens 
 * @property {string} reason 
 * @property {boolean} revokeAccess 
 * @property {string} ssoCookie 
 */
/**
 * @typedef CancelEntitlementResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CancelResultInfo[]} cancelResultInfo 
 * @property {string} entitlementToken 
 * @property {string} result 
 */
/**
 * @typedef CancelHardwareOrderRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} ssoTicket 
 */
/**
 * @typedef CancelHistorySummaryInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} cancelResult 
 * @property {integer} numberOfCancels 
 * @property {string} productType 
 * @property {boolean} revoke 
 */
/**
 * @typedef CancelInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} cancelReason 
 * @property {string} cancelTime 
 */
/**
 * @typedef CancelResultInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} entitlementToken 
 * @property {string} result 
 */
/**
 * @typedef CancelRmaRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} reason 
 */
/**
 * @typedef CancelRmaResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} result 
 */
/**
 * @typedef CancelSendRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 */
/**
 * @typedef CancelSubscriptionRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} customerEmail 
 * @property {string} locale 
 * @property {string} reason 
 * @property {string} ssoCookie 
 * @property {supportcases(v2).Subscription} subscription 
 */
/**
 * @typedef CancelSubscriptionResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} cancelRejectionReason 
 */
/**
 * @typedef CannedResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} kmsId 
 * @property {string} locale 
 * @property {string} type 
 */
/**
 * @typedef CannedResponse1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} kmsId 
 * @property {string} locale 
 * @property {string} type 
 * @property {string} url 
 */
/**
 * @typedef CannedResponseAction
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer[]} cannedResponseIds 
 */
/**
 * @typedef CardLookupCriteria
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} activationNumber 
 * @property {string} redemptionCode 
 */
/**
 * @typedef Case
 * @memberOf! supportcases(v2)
 * @type object
 * @property {object} agentUpdateTimeMap 
 * @property {supportcases(v2).Assignee1} assignee 
 * @property {object} attributeMap 
 * @property {string} caseId 
 * @property {supportcases(v2).CommunicationInfo} communicationInfo 
 * @property {string} createTime 
 * @property {supportcases(v2).Source} creator 
 * @property {supportcases(v2).Customer} customer 
 * @property {string} dueByTime 
 * @property {supportcases(v2).Issue} issue 
 * @property {string} name 
 * @property {integer} priority 
 * @property {supportcases(v2).Relation1[]} relations 
 * @property {string} state 
 * @property {string} transitionTime 
 * @property {string} updateTime 
 * @property {supportcases(v2).WorkflowInfo} workflowInfo 
 */
/**
 * @typedef CaseData
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Assignee2} assignee 
 * @property {string} caseId 
 * @property {supportcases(v2).Category1[]} categories 
 * @property {string} productName 
 * @property {string} state 
 */
/**
 * @typedef CasesReviewKey
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} review3Id 
 * @property {string} reviewId 
 * @property {string} targetUnderReview 
 * @property {string} token 
 */
/**
 * @typedef CasesTransactionIdentifier
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} orderId 
 * @property {string} transactionId 
 * @property {string} transactionType 
 */
/**
 * @typedef CasesWorkflow
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).HardwareOrderWorkflow} hardwareOrderWorkflow 
 * @property {supportcases(v2).UnauthorizedChargesWorkflow} walletUnauthCharges 
 */
/**
 * @typedef Category
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} isBaseline 
 * @property {supportcases(v2).Path} path 
 */
/**
 * @typedef Category1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} isBaseline 
 * @property {supportcases(v2).Path1} path 
 */
/**
 * @typedef Category2
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Node2[]} nodes 
 */
/**
 * @typedef Category3
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Node3[]} nodes 
 */
/**
 * @typedef Category4
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Node4[]} nodes 
 */
/**
 * @typedef Category5
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Node5[]} nodes 
 */
/**
 * @typedef CategoryInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CategoryInfo[]} children 
 * @property {supportcases(v2).MatchDetail} matchDetail 
 * @property {string} name 
 * @property {integer} numChildren 
 * @property {integer[]} pathIds 
 * @property {string[]} pathNames 
 */
/**
 * @typedef CategoryPath
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer[]} pathIds 
 */
/**
 * @typedef CategoryPath1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer[]} nodes 
 */
/**
 * @typedef ChannelCount
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} channel 
 * @property {integer} count 
 */
/**
 * @typedef Charge
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} chargeTime 
 * @property {supportcases(v2).TransactionLineItem[]} lineItems 
 * @property {supportcases(v2).LocalizedTimestamp} localizedChargeTime 
 * @property {boolean} priceIncludesTax 
 * @property {boolean} prorated 
 * @property {supportcases(v2).Money} totalAmount 
 */
/**
 * @typedef Chat
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).ChatPool1[]} chatPools 
 */
/**
 * @typedef Chat1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).ChatPool2[]} chatPools 
 */
/**
 * @typedef ChatMessage
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} isAgent 
 * @property {string} payload 
 * @property {string} senderName 
 */
/**
 * @typedef ChatPool
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} chatPoolId 
 * @property {string} chatPoolName 
 */
/**
 * @typedef ChatPool1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} chatPoolId 
 * @property {string} locale 
 */
/**
 * @typedef ChatPool2
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} chatPoolId 
 * @property {string} locale 
 */
/**
 * @typedef ChatTransfer
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).ChatPool} sourceChatPool 
 * @property {supportcases(v2).ChatPool} targetChatPool 
 */
/**
 * @typedef CheckRedeemerRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} activationNumber 
 * @property {string} caseId 
 * @property {string} emailToCheck 
 * @property {string} redemptionCode 
 * @property {string} ssoCookie 
 */
/**
 * @typedef CheckRedeemerResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} emailToCheck 
 * @property {boolean} isRedeemer 
 */
/**
 * @typedef CheckWalletAccountResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} hasValidWalletAccount 
 */
/**
 * @typedef Cohort
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} canonicalName 
 * @property {string} displayName 
 * @property {string} treatmentsId 
 */
/**
 * @typedef Cohort1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} canonicalName 
 * @property {string} displayName 
 * @property {string} displayStateRestriction 
 */
/**
 * @typedef Cohort2
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} canonicalName 
 * @property {string} displayName 
 * @property {string} displayStateRestriction 
 * @property {string} formId 
 * @property {string} helpcenterName 
 * @property {string} treatmentsId 
 */
/**
 * @typedef CohortMetadataCollection
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Cohort} cohort 
 * @property {supportcases(v2).FormMetadata} formMetadata 
 */
/**
 * @typedef Communication
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} allowsCaseSplit 
 * @property {supportcases(v2).AttachmentInfo[]} attachments 
 * @property {supportcases(v2).AuthenticationInfo} authenticationInfo 
 * @property {string} caseId 
 * @property {string} communicationId 
 * @property {supportcases(v2).ConsultInfo} consultInfo 
 * @property {supportcases(v2).ContentInfo} contentInfo 
 * @property {supportcases(v2).DraftInfo} draftInfo 
 * @property {supportcases(v2).Email} email 
 * @property {supportcases(v2).EscalationInfo} escalationInfo 
 * @property {supportcases(v2).Form} form 
 * @property {string} inResponseTo 
 * @property {string} name 
 * @property {supportcases(v2).Note} note 
 * @property {supportcases(v2).PhoneInfo} phoneInfo 
 * @property {supportcases(v2).RealTime} realTime 
 * @property {supportcases(v2).Identity[]} recipients 
 * @property {supportcases(v2).RoutingInfo} routingInfo 
 * @property {supportcases(v2).Identity} sender 
 * @property {supportcases(v2).Source} source 
 * @property {string} subject 
 * @property {string} updateTime 
 */
/**
 * @typedef CommunicationInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} lastClosedTime 
 * @property {string} lastCommunicationTime 
 * @property {string} lastIncomingEmailTime 
 * @property {string} lastOutgoingCommunicationTime 
 * @property {string} lastOutgoingEmailTime 
 * @property {integer} numCommunications 
 * @property {integer} numConsults 
 * @property {integer} numIncomingEmails 
 * @property {integer} numOutgoingEmails 
 */
/**
 * @typedef ComponentData
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).SubscriptionComponent[]} components 
 */
/**
 * @typedef ComponentToken
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} token 
 */
/**
 * @typedef ConsultAction
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).DifmAction} consultDifm 
 * @property {string} postConsultAnswerHelpCenter 
 * @property {string} postConsultAnswerId 
 */
/**
 * @typedef ConsultInfo
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef ConsultSettings
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Category2} topCategory 
 */
/**
 * @typedef Contact
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} contactName 
 * @property {supportcases(v2).EmailAddress} emailAddress 
 */
/**
 * @typedef ContactInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).PhoneNumber} callbackNumber 
 * @property {string} contactName 
 * @property {string} emailAddress 
 */
/**
 * @typedef ContentInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} bodyCrIds 
 * @property {string[]} footerCrIds 
 * @property {string[]} headerCrIds 
 * @property {string[]} helpcenterLinkIds 
 */
/**
 * @typedef CreateAgentActivityRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AgentActivity} agentActivity 
 */
/**
 * @typedef CreateConsultNoteRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} body 
 * @property {string} caseId 
 * @property {string} inReplyTo 
 * @property {boolean} isHtml 
 * @property {string} subject 
 */
/**
 * @typedef CreateConsultNoteResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Communication} communication 
 */
/**
 * @typedef CreateEmailRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AfterSendSetting} afterSendSetting 
 * @property {string[]} bccAddresses 
 * @property {string} body 
 * @property {string[]} cannedResponseIds 
 * @property {string} caseId 
 * @property {string[]} ccAddresses 
 * @property {string[]} footerIds 
 * @property {string} fromAddress 
 * @property {string[]} headerIds 
 * @property {string} inReplyTo 
 * @property {boolean} isHtml 
 * @property {string} subject 
 * @property {string[]} toAddresses 
 */
/**
 * @typedef CreateEmailResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Communication} communication 
 */
/**
 * @typedef CreateExchangeWithoutReturnRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {supportcases(v2).LostStolenDevice} device 
 * @property {supportcases(v2).LostStolenShipment} shipment 
 * @property {boolean} skipAddressValidation 
 * @property {string} ssoCookie 
 * @property {supportcases(v2).MailingAddress} updatedAddress 
 */
/**
 * @typedef CreateExchangeWithoutReturnResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} failureType 
 * @property {supportcases(v2).RmaFailure[]} failures 
 * @property {string[]} rmaNumber 
 */
/**
 * @typedef CreateFromHelpCenterDeepLinkRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} url 
 */
/**
 * @typedef CreateNewCaseRequest
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef CreateNewCaseResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef CreateNoteConsultCaseRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Attachment[]} attachments 
 * @property {supportcases(v2).Attribute1[]} attributes 
 * @property {string} body 
 * @property {string} consultFormId 
 * @property {supportcases(v2).FormField1[]} formFields 
 * @property {supportcases(v2).Category3} issueCategory 
 * @property {string} subject 
 * @property {supportcases(v2).Category3[]} targetCaseCategories 
 * @property {string} targetTeamId 
 */
/**
 * @typedef CreateNoteConsultCaseResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} targetCaseId 
 */
/**
 * @typedef CreateNoteRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} body 
 * @property {string[]} cannedResponseIds 
 * @property {string} caseId 
 * @property {boolean} isHtml 
 * @property {string} noteType 
 * @property {string} subject 
 */
/**
 * @typedef CreateNoteResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Communication} communication 
 */
/**
 * @typedef CreatePitchResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} opportunityId 
 * @property {supportcases(v2).PitchId} pitchId 
 * @property {supportcases(v2).Status} status 
 */
/**
 * @typedef CreateRealTimeConsultCaseRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Attachment1[]} attachments 
 * @property {supportcases(v2).Attribute1[]} attributes 
 * @property {string} body 
 * @property {string} chatPoolId 
 * @property {string} consultFormId 
 * @property {supportcases(v2).FormField2[]} formFields 
 * @property {supportcases(v2).Category4} issueCategory 
 * @property {string} subject 
 * @property {supportcases(v2).Category4[]} targetCaseCategories 
 */
/**
 * @typedef CreateRealTimeConsultCaseResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} targetCaseId 
 */
/**
 * @typedef CreateTroubleshooterSessionRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} issueId 
 * @property {string} ssoCookie 
 */
/**
 * @typedef CreateWorkflowRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CasesWorkflow} workflow 
 */
/**
 * @typedef CreditCard
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} billingName 
 * @property {string} billingPostalCode 
 * @property {string} cardNumberSuffix 
 * @property {string} creditCardToken 
 * @property {supportcases(v2).CreditCardType} creditCardType 
 */
/**
 * @typedef CreditCard1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} creditCardSuffix 
 * @property {string} creditCardType 
 * @property {string} creditCardTypeToken 
 */
/**
 * @typedef CreditCardType
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} backgroundUrl 
 * @property {string} creditCardTypeToken 
 * @property {string} description 
 * @property {string} displayName 
 * @property {string} logoUrl 
 */
/**
 * @typedef Customer
 * @memberOf! supportcases(v2)
 * @type object
 * @property {object} attributeMap 
 * @property {supportcases(v2).Authentication} authentication 
 * @property {supportcases(v2).Cohort1[]} cohorts 
 * @property {supportcases(v2).ContactInfo} contact 
 * @property {string} gaiaAccountStatus 
 * @property {string} profileImageUrl 
 * @property {supportcases(v2).Timezone} timezone 
 */
/**
 * @typedef CustomerAnswer
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).BankAccount1} bankAccount 
 * @property {supportcases(v2).CreditCard1} creditCard 
 * @property {supportcases(v2).Dcb} dcb 
 * @property {supportcases(v2).Paypal1} paypal 
 * @property {supportcases(v2).PhoneNumber} phoneNumber 
 * @property {supportcases(v2).Money} playBalance 
 * @property {string} postalCode 
 * @property {string} questionToken 
 * @property {supportcases(v2).Money} walletBalance 
 */
/**
 * @typedef CustomerDocsSubmissionStatus
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} hasSubmittedDocs 
 * @property {string} submitTime 
 */
/**
 * @typedef CustomerIssue
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} description 
 * @property {string} displayName 
 * @property {supportcases(v2).IssueFailure[]} issueFailures 
 * @property {string} issueId 
 * @property {string} issueStatus 
 * @property {number} rank 
 */
/**
 * @typedef Date
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} day 
 * @property {integer} month 
 * @property {integer} year 
 */
/**
 * @typedef Dcb
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} phoneNumber 
 */
/**
 * @typedef DeauthenticateRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} customerEmail 
 */
/**
 * @typedef DeauthenticateResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Customer} customer 
 */
/**
 * @typedef DedupeRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} duplicateCaseIds 
 * @property {string} reason 
 */
/**
 * @typedef DedupeResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef DeliveryInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} deliveryStatus 
 */
/**
 * @typedef DesktopScreenshareAcceptEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef DesktopScreenshareAutoDeclineEvent
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} declineType 
 */
/**
 * @typedef DesktopScreenshareCancelEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef DesktopScreenshareCleanupEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef DesktopScreenshareConnectEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef DesktopScreenshareDeclineEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef DesktopScreenshareDisconnectEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef DesktopScreenshareEndEvent
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} agentEnded 
 */
/**
 * @typedef DesktopScreenshareEvent
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).DesktopScreenshareAcceptEvent} acceptEvent 
 * @property {supportcases(v2).DesktopScreenshareAutoDeclineEvent} autoDeclineEvent 
 * @property {supportcases(v2).DesktopScreenshareCancelEvent} cancelEvent 
 * @property {supportcases(v2).DesktopScreenshareCleanupEvent} cleanupEvent 
 * @property {supportcases(v2).DesktopScreenshareConnectEvent} connectEvent 
 * @property {supportcases(v2).DesktopScreenshareDeclineEvent} declineEvent 
 * @property {supportcases(v2).DesktopScreenshareDisconnectEvent} disconnectEvent 
 * @property {supportcases(v2).DesktopScreenshareEndEvent} endEvent 
 * @property {supportcases(v2).DesktopScreenshareInitiateEvent} initiateEvent 
 * @property {string} invitationId 
 * @property {supportcases(v2).DesktopScreenshareInviteEvent} inviteEvent 
 * @property {supportcases(v2).DesktopScreenshareJoinEvent} joinEvent 
 * @property {supportcases(v2).DesktopScreenshareLeaveEvent} leaveEvent 
 * @property {supportcases(v2).DesktopScreenshareReceivedEvent} receivedEvent 
 * @property {supportcases(v2).DesktopScreenshareRevivedEvent} revivedEvent 
 * @property {supportcases(v2).DesktopScreenshareStartingConnectEvent} startingConnectEvent 
 */
/**
 * @typedef DesktopScreenshareInitiateEvent
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} screensharingState 
 */
/**
 * @typedef DesktopScreenshareInviteEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef DesktopScreenshareJoinEvent
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} agentJoined 
 */
/**
 * @typedef DesktopScreenshareLeaveEvent
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} agentLeft 
 */
/**
 * @typedef DesktopScreenshareReceivedEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef DesktopScreenshareRevivedEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef DesktopScreenshareStartingConnectEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef Device
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} actions 
 * @property {string} countryOfPurchase 
 * @property {string} deviceClass 
 * @property {string} deviceId 
 * @property {string} displayName 
 * @property {string} doaEndDate 
 * @property {boolean} doaExpired 
 * @property {string} exchangeGpn 
 * @property {boolean} extendedWarrantyActive 
 * @property {string} extendedWarrantyContractId 
 * @property {string} extendedWarrantyEndDate 
 * @property {boolean} extendedWarrantyExpired 
 * @property {string} gpn 
 * @property {string} hashedFullDeviceId 
 * @property {string} noRmaTypeReason 
 * @property {string} orderNumber 
 * @property {string} pointOfPurchase 
 * @property {string} purchaseDate 
 * @property {string} remorseEndDate 
 * @property {boolean} remorseExpired 
 * @property {supportcases(v2).ReplacementDevice[]} replacementDevices 
 * @property {supportcases(v2).RmaType[]} rmaTypes 
 * @property {supportcases(v2).DeviceRma[]} rmas 
 * @property {string} shipDate 
 * @property {string} shipmentId 
 * @property {boolean} supportedBy3pr 
 * @property {string} warrantyEndDate 
 * @property {boolean} warrantyExpired 
 */
/**
 * @typedef Device1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} action 
 * @property {string} deviceId 
 * @property {string} displayName 
 * @property {string} hashedFullDeviceId 
 * @property {string} rmaNumber 
 * @property {string} state 
 */
/**
 * @typedef Device2
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} androidId 
 * @property {string} displayName 
 * @property {string} imei 
 * @property {string} lastUsedTime 
 * @property {string} manufacturer 
 * @property {string} modelName 
 * @property {string} registrationTime 
 */
/**
 * @typedef DeviceRma
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} authHold 
 * @property {string[]} availableFlows 
 * @property {boolean} cancelable 
 * @property {supportcases(v2).RmaIdentifier} identifier 
 * @property {string} state 
 */
/**
 * @typedef DifmAction
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} difmId 
 */
/**
 * @typedef DirectCarrierBilling
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} phoneNumber 
 */
/**
 * @typedef DiscardDraftRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 */
/**
 * @typedef DiscardDraftResponse
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef Docid
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} backend 
 * @property {string} backendDocid 
 * @property {string} type 
 */
/**
 * @typedef DraftInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} transitionToState 
 */
/**
 * @typedef Duplicate
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} sourceCaseId 
 * @property {string} targetCaseId 
 */
/**
 * @typedef EasterEggSettings
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} disableBoostCard 
 */
/**
 * @typedef Email
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} body 
 * @property {supportcases(v2).DeliveryInfo} deliveryInfo 
 * @property {supportcases(v2).Headers} headers 
 * @property {boolean} isHtml 
 * @property {string} type 
 */
/**
 * @typedef Email1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} sla 
 */
/**
 * @typedef Email2
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} locale 
 * @property {string} sla 
 */
/**
 * @typedef EmailAddress
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} type 
 * @property {string} value 
 */
/**
 * @typedef EmploymentInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} employmentType 
 * @property {string} location 
 * @property {string} tvcStaffingPartner 
 */
/**
 * @typedef Empty
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef Entitlement
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} actions 
 * @property {supportcases(v2).EntitlementBadge[]} badges 
 * @property {string} billingBackend 
 * @property {supportcases(v2).Period} billingPeriod 
 * @property {string} cancelTime 
 * @property {supportcases(v2).ComponentData} componentData 
 * @property {string} customerTimezone 
 * @property {string} entitlementToken 
 * @property {boolean} hasFuturePayments 
 * @property {boolean} inFreeTrial 
 * @property {boolean} isActive 
 * @property {boolean} isCancelable 
 * @property {boolean} isRevokable 
 * @property {supportcases(v2).LocalizedTimestamp} localizedCancelTime 
 * @property {supportcases(v2).LocalizedTimestamp} localizedPurchaseTime 
 * @property {string} name 
 * @property {string} orderId 
 * @property {string} productType 
 * @property {string} purchaseTime 
 * @property {supportcases(v2).RedSignals} redSignals 
 * @property {supportcases(v2).ShmoovieSignals} shmoovieSignals 
 * @property {string} state 
 * @property {supportcases(v2).UnpluggedSignals} unpluggedSignals 
 * @property {string} url 
 * @property {string} utcOffset 
 */
/**
 * @typedef EntitlementBadge
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} type 
 */
/**
 * @typedef EntitlementComponent
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} accessExpiryTime 
 * @property {string} accessStartTime 
 * @property {string[]} actions 
 * @property {string} cancelTime 
 * @property {string} componentToken 
 * @property {string} entitlementId 
 * @property {boolean} hasFuturePayments 
 * @property {supportcases(v2).Money} introductoryPrice 
 * @property {boolean} isActive 
 * @property {boolean} isBasePackage 
 * @property {boolean} isCancelable 
 * @property {boolean} isRevokable 
 * @property {string} itemId 
 * @property {string[]} lineItemKey 
 * @property {supportcases(v2).LocalizedTimestamp} localizedAccessExpiryTime 
 * @property {supportcases(v2).LocalizedTimestamp} localizedAccessStartTime 
 * @property {supportcases(v2).LocalizedTimestamp} localizedCancelTime 
 * @property {supportcases(v2).LocalizedTimestamp} localizedTrialEndTime 
 * @property {supportcases(v2).Money} monthlyPrice 
 * @property {string} state 
 * @property {string} title 
 * @property {string} trialEndTime 
 * @property {supportcases(v2).Period} trialPeriod 
 */
/**
 * @typedef Entry
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} boolValue 
 * @property {number} doubleValue 
 * @property {string} enumValue 
 * @property {string} int64Value 
 * @property {integer} intValue 
 * @property {supportcases(v2).Source[]} sources 
 * @property {string} stringValue 
 * @property {string} timeValue 
 */
/**
 * @typedef EnumValue
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} displayValue 
 * @property {string} value 
 */
/**
 * @typedef EscalateRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} escalationId 
 * @property {string} locale 
 * @property {string} productId 
 * @property {string} reason 
 */
/**
 * @typedef EscalateResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef EscalateSettings
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef EscalationInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AgentTransfer} agentTransfer 
 * @property {supportcases(v2).ChatTransfer} chatTransfer 
 * @property {string} escalationTargetName 
 * @property {supportcases(v2).LocaleTransfer} localeTransfer 
 */
/**
 * @typedef EscalationTarget
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Chat} chat 
 * @property {supportcases(v2).Email1} email 
 * @property {string} targetId 
 * @property {string} targetName 
 */
/**
 * @typedef ExtendedWarrantyInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} contractId 
 * @property {integer} lineItemId 
 * @property {supportcases(v2).Money} price 
 */
/**
 * @typedef ExternalToolSettings
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AccountLookupTool[]} accountLookupTools 
 */
/**
 * @typedef FinalizeConsultNoteRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 */
/**
 * @typedef FinalizeConsultNoteResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Communication} communication 
 */
/**
 * @typedef FinalizeNoteRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 */
/**
 * @typedef FinalizeNoteResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Communication} communication 
 */
/**
 * @typedef FinishRequest
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef FinishResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef FocusInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} profileImageUrl 
 */
/**
 * @typedef Form
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef FormField
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} label 
 * @property {string} name 
 * @property {supportcases(v2).FormFieldValue[]} values 
 */
/**
 * @typedef FormField1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).FormFieldValue1[]} formFieldDisplayValues 
 * @property {string} formFieldLabel 
 * @property {string} formFieldName 
 * @property {string[]} formFieldValues 
 */
/**
 * @typedef FormField2
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).FormFieldValue2[]} formFieldDisplayValues 
 * @property {string} formFieldLabel 
 * @property {string} formFieldName 
 * @property {string[]} formFieldValues 
 */
/**
 * @typedef FormFieldValue
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} displayValue 
 * @property {string} value 
 */
/**
 * @typedef FormFieldValue1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} displayValue 
 * @property {string} value 
 */
/**
 * @typedef FormFieldValue2
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} displayValue 
 * @property {string} value 
 */
/**
 * @typedef FormMetadata
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).FormField[]} formFields 
 * @property {string} formId 
 * @property {string} helpcenterName 
 */
/**
 * @typedef GetAccountReviewStatusRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {supportcases(v2).ReviewKey} reviewKey 
 * @property {string} ssoCookie 
 */
/**
 * @typedef GetAccountReviewStatusResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} reviewAction 
 * @property {supportcases(v2).ReviewKey} reviewKey 
 * @property {string} reviewState 
 */
/**
 * @typedef GetAccountSignalsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AccountSignalResult[]} results 
 */
/**
 * @typedef GetAgentSearchCountResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).SearchCount[]} searchCounts 
 */
/**
 * @typedef GetAgentUnreadCasesInfoResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AgentUnreadCasesInfo} agentUnreadCasesInfo 
 */
/**
 * @typedef GetAuthenticationCreditCardTypesRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} customerEmail 
 */
/**
 * @typedef GetAuthenticationCreditCardTypesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AuthenticationCreditCard[]} authenticationCreditCards 
 * @property {string[]} creditCardTypes 
 */
/**
 * @typedef GetAuthenticationQuestionsRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} agentSsoCookie 
 * @property {string} customerEmail 
 */
/**
 * @typedef GetAuthenticationQuestionsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).QuestionSet[]} questionSets 
 */
/**
 * @typedef GetAuthenticationResultRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} agentSsoCookie 
 * @property {string} customerEmail 
 */
/**
 * @typedef GetAuthenticationResultResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} result 
 */
/**
 * @typedef GetBusinessListingsRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} emailAddress 
 */
/**
 * @typedef GetBusinessListingsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Business[]} listings 
 */
/**
 * @typedef GetByDeviceIdResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Device} device 
 */
/**
 * @typedef GetCancellationStatusRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} ssoCookie 
 */
/**
 * @typedef GetCancellationStatusResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} reason 
 * @property {supportcases(v2).Subscription} subscription 
 */
/**
 * @typedef GetConsultSlaRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} channel 
 * @property {string} consultFormId 
 * @property {supportcases(v2).Attribute1[]} dynamicAttributes 
 * @property {supportcases(v2).Category5} issueCategory 
 * @property {supportcases(v2).Category5[]} targetCaseCategories 
 */
/**
 * @typedef GetConsultSlaResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} dueByDuration 
 */
/**
 * @typedef GetCustomerSummaryRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {boolean} disableEventHistory 
 * @property {string} email 
 * @property {string} historyCutoff 
 * @property {string} lastNumberDays 
 * @property {integer} pageSize 
 * @property {string} pageToken 
 * @property {string[]} productTypes 
 * @property {string} ssoCookie 
 */
/**
 * @typedef GetCustomerSummaryResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CancelHistorySummaryInfo[]} cancelHistory 
 * @property {supportcases(v2).Entitlement[]} entitlements 
 * @property {boolean} hasOneTimeContentPurchase 
 * @property {string} nextPageToken 
 * @property {number} offsetFromUtc 
 * @property {integer} oneTimeContentPurchaseCount 
 * @property {supportcases(v2).RefundHistorySummaryInfo[]} refundHistory 
 * @property {string} timezone 
 */
/**
 * @typedef GetEscalationTargetsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).EscalationTarget[]} escalationTargets 
 */
/**
 * @typedef GetHardwareOrderDetailRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} ssoTicket 
 */
/**
 * @typedef GetHardwareSignalsRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 */
/**
 * @typedef GetHardwareSignalsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} hasStandardExchange 
 */
/**
 * @typedef GetLostStolenEligibilityRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} ssoTicket 
 */
/**
 * @typedef GetLostStolenRefundEligibilityRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} ssoTicket 
 */
/**
 * @typedef GetMailingAddressRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {boolean} isRequiredAction 
 * @property {string} ssoTicket 
 */
/**
 * @typedef GetMyAssignStreamSearchesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Search[]} searches 
 * @property {supportcases(v2).Team[]} teams 
 */
/**
 * @typedef GetOneTimePurchasesRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} email 
 * @property {integer} pageSize 
 * @property {string} pageToken 
 * @property {string} ssoCookie 
 */
/**
 * @typedef GetOneTimePurchasesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} nextPageToken 
 * @property {supportcases(v2).Purchase[]} purchases 
 */
/**
 * @typedef GetOrdersRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} customerEmail 
 * @property {string[]} finskyPurchaseIds 
 * @property {string} locale 
 * @property {string} ssoCookie 
 */
/**
 * @typedef GetOrdersResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Order[]} orders 
 */
/**
 * @typedef GetPaymentMethodHijackReviewsStatusRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {supportcases(v2).ReviewKey[]} reviewKeys 
 * @property {string} ssoCookie 
 */
/**
 * @typedef GetPaymentMethodHijackReviewsStatusResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).TransactionsSummary[]} allTransactions 
 * @property {supportcases(v2).TransactionsSummary[]} alreadyRefundedTransactions 
 * @property {supportcases(v2).TransactionsSummary[]} chargedBackTransactions 
 * @property {supportcases(v2).TransactionsSummary[]} newlyRefundedTransactions 
 * @property {supportcases(v2).PaymentMethodHijackTransaction[]} notFoundTransactions 
 * @property {supportcases(v2).PaymentMethodHijackTransaction[]} notRefundedTransactions 
 * @property {supportcases(v2).TransactionsSummary[]} resolvedTransactions 
 * @property {string[]} reviewAgentLdaps 
 * @property {supportcases(v2).ReviewKey[]} reviewKeys 
 * @property {string} state 
 * @property {supportcases(v2).TransactionsSummary[]} underReviewTransactions 
 */
/**
 * @typedef GetPaymentsInfoRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} agentSso 
 * @property {string} caseId 
 */
/**
 * @typedef GetPaymentsInfoResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).PaymentsInfo} paymentsInfo 
 */
/**
 * @typedef GetPhoneSettingResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).PhoneSetting} phoneSetting 
 */
/**
 * @typedef GetRefundStatusRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} ssoCookie 
 */
/**
 * @typedef GetRefundStatusResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).OrderRefundStatusInfo[]} approvedOrderInfos 
 * @property {supportcases(v2).Order[]} approvedOrders 
 * @property {supportcases(v2).OrderRefundStatusInfo[]} escalateOrderInfos 
 * @property {supportcases(v2).Order[]} escalateOrders 
 * @property {supportcases(v2).OrderRefundStatusInfo[]} failedOrderInfos 
 * @property {supportcases(v2).Order[]} failedOrders 
 * @property {boolean} inProgress 
 * @property {supportcases(v2).OrderRefundStatusInfo[]} inProgressOrderInfos 
 * @property {supportcases(v2).Order[]} inProgressOrders 
 * @property {supportcases(v2).OrderRefundStatusInfo[]} optionalEscalateOrderInfos 
 * @property {supportcases(v2).Order[]} optionalEscalateOrders 
 * @property {supportcases(v2).OrderRefundStatusInfo[]} processLaterOrderInfos 
 * @property {supportcases(v2).Order[]} processLaterOrders 
 * @property {string} refundReason 
 * @property {supportcases(v2).OrderRefundStatusInfo[]} rejectedOrderInfos 
 * @property {supportcases(v2).Order[]} rejectedOrders 
 * @property {supportcases(v2).OrderRefundStatusInfo[]} sidewinderRejectedOrderInfos 
 */
/**
 * @typedef GetReplacementDetailRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} ssoTicket 
 */
/**
 * @typedef GetRmaOrderDetailRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} ssoTicket 
 */
/**
 * @typedef GetRoutingTargetsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Product2[]} products 
 */
/**
 * @typedef GetShippingAddressRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {boolean} isRequiredAction 
 * @property {string} ssoTicket 
 */
/**
 * @typedef GetShippingCustomerNameRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} ssoTicket 
 */
/**
 * @typedef GetShippingCustomerPhoneNumberRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} ssoTicket 
 */
/**
 * @typedef GetSubscriptionsRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} customerEmail 
 * @property {string} locale 
 * @property {string} ssoCookie 
 * @property {string[]} subscriptionIds 
 */
/**
 * @typedef GetSubscriptionsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Subscription[]} subscriptions 
 */
/**
 * @typedef GiftCard
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} activationNumber 
 * @property {supportcases(v2).Money} amount 
 * @property {supportcases(v2).Date} redemptionDate 
 * @property {supportcases(v2).RedemptionToken} redemptionToken 
 * @property {string} status 
 */
/**
 * @typedef HardwareDiscount
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} description 
 * @property {supportcases(v2).Money} totalAmount 
 */
/**
 * @typedef HardwareId
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} esn 
 * @property {string} imei 
 * @property {string} macAddress 
 * @property {string} meid 
 * @property {string} serialNumber 
 * @property {string} unknown 
 */
/**
 * @typedef HardwareOrderDetail
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} hasRefund 
 * @property {string} orderId 
 * @property {string} orderTime 
 * @property {supportcases(v2).HardwareShipment[]} shipments 
 * @property {supportcases(v2).Money} taxAmount 
 * @property {supportcases(v2).Money} totalAmount 
 * @property {supportcases(v2).Money} totalAmountExcludingTax 
 */
/**
 * @typedef HardwareOrderLineItem
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} description 
 * @property {supportcases(v2).HardwareDiscount[]} discounts 
 * @property {supportcases(v2).ExtendedWarrantyInfo} extendedWarrantyInfo 
 * @property {integer} finskyLineNumber 
 * @property {supportcases(v2).HardwareId} hardwareId 
 * @property {boolean} hasRefund 
 * @property {supportcases(v2).HardwareId} hashedFullHardwareId 
 * @property {string} lineItemId 
 * @property {supportcases(v2).Money} listPrice 
 * @property {supportcases(v2).Money} price 
 * @property {string} productSku 
 * @property {supportcases(v2).RmaInfo} rmaInfo 
 * @property {supportcases(v2).Money} totalWithDiscountsWithoutTax 
 */
/**
 * @typedef HardwareOrderLineItemRefund
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} description 
 * @property {supportcases(v2).HardwareId} hardwareId 
 * @property {string} lineItemId 
 * @property {string} shipmentId 
 * @property {supportcases(v2).ShippingInfo} shippingInfo 
 */
/**
 * @typedef HardwareOrderListItem
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} authHold 
 * @property {string} orderId 
 * @property {string} orderTime 
 * @property {boolean} replacement 
 * @property {string} rmaNumber 
 * @property {string} summary 
 */
/**
 * @typedef HardwareOrderRefund
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef HardwareOrderWorkflow
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).HardwareShipmentInvestigation} hardwareShipmentInvestigation 
 * @property {string} state 
 */
/**
 * @typedef HardwareRefund
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).HardwareOrderLineItemRefund} lineItemRefund 
 * @property {supportcases(v2).HardwareOrderRefund} orderRefund 
 * @property {supportcases(v2).PaymentDetail} paymentDetail 
 * @property {string[]} refundActions 
 * @property {string} refundReason 
 * @property {string} refundRequestTime 
 * @property {string} refundedTime 
 * @property {supportcases(v2).HardwareShipmentRefund} shipmentRefund 
 * @property {string} status 
 * @property {supportcases(v2).Money} totalAmount 
 */
/**
 * @typedef HardwareShipment
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} addressLastUpdated 
 * @property {boolean} addressUpdateable 
 * @property {boolean} authHold 
 * @property {supportcases(v2).CancelInfo} cancelInfo 
 * @property {string} financialStatus 
 * @property {supportcases(v2).HardwareOrderLineItem[]} lineItems 
 * @property {string[]} orderActions 
 * @property {supportcases(v2).PaymentDetail} paymentDetail 
 * @property {string} shipmentId 
 * @property {integer} shipmentNumber 
 * @property {string} shipmentState 
 * @property {supportcases(v2).ShippingInfo} shippingInfo 
 * @property {string} state 
 * @property {string} stuckOrderAlert 
 * @property {supportcases(v2).Money} totalAmount 
 */
/**
 * @typedef HardwareShipmentInvestigation
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} isOrderFromStore 
 * @property {string} issue 
 * @property {string} orderId 
 * @property {string} shipmentId 
 */
/**
 * @typedef HardwareShipmentRefund
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} shipmentId 
 */
/**
 * @typedef Headers
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} bccAddresses 
 * @property {string[]} ccAddresses 
 * @property {string} fromAddress 
 * @property {string} inReplyTo 
 * @property {string} subject 
 * @property {string[]} toAddresses 
 */
/**
 * @typedef HelpCenterContent
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} hcId 
 * @property {string} helpCenter 
 * @property {boolean} isPublic 
 * @property {string} locale 
 * @property {string} type 
 * @property {string} url 
 */
/**
 * @typedef HelpCenterContent1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} contentId 
 * @property {string} displayName 
 * @property {string} helpCenter 
 * @property {boolean} isPublic 
 * @property {string} locale 
 * @property {string} type 
 * @property {string} url 
 */
/**
 * @typedef HelpCenterContent2
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} hcId 
 * @property {string} helpCenter 
 * @property {boolean} isPublic 
 * @property {string} locale 
 * @property {string} type 
 * @property {string} url 
 */
/**
 * @typedef HelpCenterContent3
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} hcId 
 * @property {string} helpCenter 
 * @property {boolean} isPublic 
 * @property {string} locale 
 * @property {string[]} requirementTypes 
 * @property {string} requirementsSnippetId 
 * @property {string} title 
 * @property {string} type 
 * @property {string} url 
 */
/**
 * @typedef HelpCenterDeepLinkSource
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef Identity
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} displayName 
 * @property {string} emailAddress 
 * @property {string} profileImageUrl 
 * @property {string} teamId 
 */
/**
 * @typedef InitiatePaymentMethodHijackReviewsRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).BankAccount} bankAccount 
 * @property {string} caseId 
 * @property {supportcases(v2).CreditCard} creditCard 
 * @property {supportcases(v2).DirectCarrierBilling} dcb 
 * @property {string} instrumentIssuerToken 
 * @property {supportcases(v2).Paypal} paypal 
 * @property {string} ssoCookie 
 * @property {supportcases(v2).PaymentMethodHijackTransaction[]} transactions 
 */
/**
 * @typedef InitiatePaymentMethodHijackReviewsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} result 
 * @property {supportcases(v2).ReviewKey[]} reviewKeys 
 */
/**
 * @typedef Interaction
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CaseData} caseData 
 * @property {string} endTime 
 * @property {string[]} eventTypes 
 * @property {string} startTime 
 * @property {string} summary 
 */
/**
 * @typedef InteractionCount
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} count 
 * @property {string} startTime 
 */
/**
 * @typedef Issue
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Account[]} accounts 
 * @property {string} localeCode 
 * @property {string} previewText 
 * @property {supportcases(v2).Product} product 
 * @property {supportcases(v2).Product[]} subProducts 
 * @property {string} summary 
 */
/**
 * @typedef Issue1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} categoryPath 
 * @property {string} issueId 
 * @property {string} partialCategoryPath 
 * @property {string} title 
 * @property {string} unresolvedDifmId 
 */
/**
 * @typedef IssueCategoryAction
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CategoryPath1[]} issueCategories 
 */
/**
 * @typedef IssueCategorySettings
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} allowUncategorizedCases 
 * @property {string} categoryRootName 
 * @property {string} secondaryProductRequirementCategoryId 
 * @property {supportcases(v2).Category2[]} subProductTopCategories 
 * @property {supportcases(v2).Category2} topCategory 
 */
/**
 * @typedef IssueFailure
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} difmId 
 * @property {supportcases(v2).HelpCenterContent1} helpCenterContent 
 * @property {string} reason 
 * @property {string} reasonDescription 
 * @property {supportcases(v2).SupportLink[]} supportLinks 
 * @property {string} targetId 
 * @property {string} targetName 
 * @property {string} targetType 
 */
/**
 * @typedef LineItem
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} description 
 * @property {string} hardwareId 
 * @property {string} hashedHardwareId 
 * @property {string} productSku 
 * @property {string} rmaAction 
 * @property {string} rmaNumber 
 * @property {string} unmaskedHardwareId 
 */
/**
 * @typedef ListAgentActivitiesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AgentActivity[]} agentActivities 
 * @property {string} nextPageToken 
 */
/**
 * @typedef ListAgentSettingsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AgentSetting[]} agentSettings 
 */
/**
 * @typedef ListBankAccountCountriesRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} ssoCookie 
 */
/**
 * @typedef ListBankAccountCountriesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).BankAccountCountry[]} bankAccountCountries 
 */
/**
 * @typedef ListBillingAddressesRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} customerEmail 
 * @property {string} ssoCookie 
 */
/**
 * @typedef ListBillingAddressesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Address[]} billingAddresses 
 */
/**
 * @typedef ListBuyersRemorseCountryCodesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} countryCodes 
 */
/**
 * @typedef ListCasesByAgentResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case[]} cases 
 * @property {string} pageToken 
 * @property {integer} searchCount 
 */
/**
 * @typedef ListChildrenCategoryInfosResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CategoryInfo[]} categoryInfos 
 */
/**
 * @typedef ListCommunicationsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Communication[]} communications 
 */
/**
 * @typedef ListCreditCardTypesRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} ssoCookie 
 */
/**
 * @typedef ListCreditCardTypesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CreditCardType[]} creditCardTypes 
 */
/**
 * @typedef ListCustomerIssuesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CustomerIssue[]} customerIssues 
 * @property {supportcases(v2).SupportLink[]} supportLinks 
 */
/**
 * @typedef ListDevicesRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} ssoCookie 
 */
/**
 * @typedef ListDevicesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Device[]} devices 
 * @property {string} nextPageToken 
 */
/**
 * @typedef ListDevicesResponse1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Device2[]} devices 
 */
/**
 * @typedef ListHardwareOrdersRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} ssoTicket 
 */
/**
 * @typedef ListHardwareOrdersResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).HardwareOrderListItem[]} items 
 */
/**
 * @typedef ListHardwareRefundsRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} ssoTicket 
 */
/**
 * @typedef ListHardwareRefundsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).HardwareRefund[]} refunds 
 */
/**
 * @typedef ListInteractionsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Interaction[]} interactions 
 * @property {string} nextPageToken 
 */
/**
 * @typedef ListIssuesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Issue1[]} issues 
 */
/**
 * @typedef ListOpportunitiesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} eventId 
 * @property {string[]} ineligibleReasons 
 * @property {supportcases(v2).Opportunity1[]} opportunities 
 * @property {supportcases(v2).Program1} program 
 */
/**
 * @typedef ListOtherDevicesRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {integer} pageSize 
 * @property {string} pageToken 
 * @property {string} ssoTicket 
 */
/**
 * @typedef ListOtherDevicesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Device1[]} devices 
 * @property {string} nextPageToken 
 */
/**
 * @typedef ListPaymentInstrumentTypeInfosResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).PaymentInstrumentTypeInfo[]} paymentInstrumentTypes 
 */
/**
 * @typedef ListProductsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} allowedProductIds 
 * @property {supportcases(v2).Product1[]} products 
 */
/**
 * @typedef ListPropertiesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Property[]} properties 
 */
/**
 * @typedef ListPurchasedAppsRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} filter 
 * @property {string} ssoCookie 
 */
/**
 * @typedef ListPurchasedAppsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).PurchasedApp[]} apps 
 */
/**
 * @typedef ListPurchasedBooksRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} filter 
 * @property {string} ssoCookie 
 */
/**
 * @typedef ListPurchasedBooksResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).PurchasedBook[]} books 
 */
/**
 * @typedef ListPurchasedVideosRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} filter 
 * @property {string} ssoCookie 
 */
/**
 * @typedef ListPurchasedVideosResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).PurchasedVideo[]} videos 
 */
/**
 * @typedef ListRelatedCommunicationsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).RelatedCommunications[]} relatedCommunications 
 */
/**
 * @typedef ListResolutionsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} nextPageToken 
 * @property {supportcases(v2).Resolution[]} resolutions 
 * @property {string} resultsToken 
 */
/**
 * @typedef ListRmasResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Rma[]} rmas 
 */
/**
 * @typedef ListSettingsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AgentSetting} agentSetting 
 * @property {supportcases(v2).SearchSetting} searchSetting 
 */
/**
 * @typedef ListSettingsResponse1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} allowedProductIds 
 * @property {supportcases(v2).Settings[]} settings 
 */
/**
 * @typedef ListShippingAddressesRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} customerEmail 
 * @property {string} ssoCookie 
 */
/**
 * @typedef ListShippingAddressesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Address[]} shippingAddresses 
 */
/**
 * @typedef ListSubscriptionsRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} customerEmail 
 * @property {string} locale 
 * @property {string} ssoCookie 
 */
/**
 * @typedef ListSubscriptionsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Subscription[]} activeSubscriptions 
 * @property {supportcases(v2).Subscription[]} inactiveSubscriptions 
 */
/**
 * @typedef ListTopLevelCategoryInfosResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CategoryInfo[]} categoryInfos 
 * @property {supportcases(v2).CategoryInfo} consultCategoryInfo 
 */
/**
 * @typedef ListTransactionsRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} email 
 * @property {supportcases(v2).Money} endAmount 
 * @property {string} endDate 
 * @property {string} instrumentLastFourCharacters 
 * @property {integer} pageSize 
 * @property {string} pageToken 
 * @property {string} q 
 * @property {string} queryId 
 * @property {string[]} queryIds 
 * @property {string} ssoCookie 
 * @property {supportcases(v2).Money} startAmount 
 * @property {string} startDate 
 * @property {string[]} statuses 
 */
/**
 * @typedef ListTransactionsRequest1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} email 
 * @property {string} entitlementToken 
 * @property {string[]} entitlementTokens 
 * @property {boolean} includeUpcomingCharges 
 * @property {integer} pageSize 
 * @property {string} pageToken 
 * @property {string[]} productTypes 
 * @property {string} ssoCookie 
 * @property {string} timezone 
 */
/**
 * @typedef ListTransactionsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} nextPageToken 
 * @property {supportcases(v2).WalletTransaction[]} results 
 */
/**
 * @typedef ListTransactionsResponse1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} nextPageToken 
 * @property {supportcases(v2).Transaction[]} transactions 
 * @property {supportcases(v2).Charge[]} upcomingCharge 
 */
/**
 * @typedef LocaleTransfer
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} sourceLocale 
 * @property {string} targetLocale 
 */
/**
 * @typedef LocalizedTimestamp
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} timestamp 
 * @property {string} timezone 
 * @property {string} utcOffset 
 */
/**
 * @typedef LogDataAccessRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} event 
 */
/**
 * @typedef LogResolutionRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {supportcases(v2).ResolutionEvent} resolutionEvent 
 */
/**
 * @typedef LogTroubleshooterActivityRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).ResolutionActivity} activity 
 * @property {string} caseId 
 */
/**
 * @typedef LookupGiftCardRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {supportcases(v2).CardLookupCriteria} lookupCriteria 
 * @property {string} ssoCookie 
 */
/**
 * @typedef LookupGiftCardResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).GiftCard} giftCard 
 */
/**
 * @typedef LostStolenDevice
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} deviceId 
 * @property {string} deviceSku 
 * @property {string} originalOrderId 
 * @property {string} originalShipmentId 
 */
/**
 * @typedef LostStolenEligibility
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} reasons 
 */
/**
 * @typedef LostStolenRefundEligibility
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} isEligible 
 * @property {string[]} reasons 
 */
/**
 * @typedef LostStolenShipment
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} originalOrderId 
 * @property {string} originalShipmentId 
 */
/**
 * @typedef MailingAddress
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} addressLine1 
 * @property {string} addressLine2 
 * @property {string} addressLine3 
 * @property {string} addressee 
 * @property {string} city 
 * @property {string} countryCode 
 * @property {string} phoneNumber 
 * @property {string} postalCode 
 * @property {string} stateProvinceCode 
 */
/**
 * @typedef MarkOriginalDeviceReceivedRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} ssoCookie 
 */
/**
 * @typedef MatchDetail
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).MatchPair[]} matchPairs 
 */
/**
 * @typedef MatchPair
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} matchTypes 
 * @property {string} matchedTerm 
 * @property {string} queryTerm 
 */
/**
 * @typedef MobileScreenshareAcceptEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef MobileScreenshareAutoDeclineEvent
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} declineType 
 */
/**
 * @typedef MobileScreenshareCancelEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef MobileScreenshareCleanupEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef MobileScreenshareConnectEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef MobileScreenshareDeclineEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef MobileScreenshareDisconnectEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef MobileScreenshareEndEvent
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} agentEnded 
 */
/**
 * @typedef MobileScreenshareEvent
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).MobileScreenshareAcceptEvent} acceptEvent 
 * @property {supportcases(v2).MobileScreenshareAutoDeclineEvent} autoDeclineEvent 
 * @property {supportcases(v2).MobileScreenshareCancelEvent} cancelEvent 
 * @property {supportcases(v2).MobileScreenshareCleanupEvent} cleanupEvent 
 * @property {supportcases(v2).MobileScreenshareConnectEvent} connectEvent 
 * @property {supportcases(v2).MobileScreenshareDeclineEvent} declineEvent 
 * @property {supportcases(v2).MobileScreenshareDisconnectEvent} disconnectEvent 
 * @property {supportcases(v2).MobileScreenshareEndEvent} endEvent 
 * @property {supportcases(v2).MobileScreenshareInitiateEvent} initiateEvent 
 * @property {string} invitationId 
 * @property {supportcases(v2).MobileScreenshareInviteEvent} inviteEvent 
 * @property {supportcases(v2).MobileScreenshareReceivedEvent} receivedEvent 
 * @property {supportcases(v2).MobileScreenshareStartingConnectEvent} startingConnectEvent 
 */
/**
 * @typedef MobileScreenshareInitiateEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef MobileScreenshareInviteEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef MobileScreenshareReceivedEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef MobileScreenshareStartingConnectEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef Money
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} currencyCode 
 * @property {integer} nanos 
 * @property {string} units 
 */
/**
 * @typedef NeedsInfoRequest
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef NeedsInfoResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef Node
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} categoryId 
 * @property {string} categoryName 
 * @property {boolean} isInvalid 
 */
/**
 * @typedef Node1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} isValid 
 * @property {string} name 
 * @property {integer} nodeId 
 */
/**
 * @typedef Node2
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} categoryId 
 */
/**
 * @typedef Node3
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} categoryId 
 */
/**
 * @typedef Node4
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} categoryId 
 */
/**
 * @typedef Node5
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} categoryId 
 */
/**
 * @typedef Note
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Identity} author 
 * @property {string} inResponseTo 
 * @property {boolean} isHtml 
 * @property {string} noteType 
 * @property {string} payload 
 * @property {supportcases(v2).Identity[]} recipients 
 * @property {string} subject 
 */
/**
 * @typedef OfferedSolutionRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} communicationId 
 */
/**
 * @typedef OfferedSolutionResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef Opportunity
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} campaignName 
 * @property {string} opportunityName 
 * @property {string} opportunityType 
 * @property {integer} points 
 */
/**
 * @typedef Opportunity1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Campaign[]} campaigns 
 * @property {string} category 
 * @property {string} id 
 * @property {string} name 
 * @property {string} opportunityType 
 * @property {integer} points 
 * @property {number} rank 
 */
/**
 * @typedef Order
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} checkoutOrderId 
 * @property {string} finskyPurchaseId 
 * @property {boolean} isNotRefundable 
 * @property {string} name 
 * @property {string} orderId 
 * @property {supportcases(v2).OrderItem[]} orderItems 
 * @property {supportcases(v2).Money} orderValue 
 * @property {string} paymentMethod 
 * @property {string} paymentState 
 * @property {string} purchaseTime 
 * @property {string} vertical 
 */
/**
 * @typedef OrderItem
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} contentType 
 * @property {string} itemId 
 * @property {string} name 
 * @property {string} offerType 
 * @property {string} title 
 * @property {string} vertical 
 */
/**
 * @typedef OrderRefundStatusInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Order} order 
 * @property {string} statusMessage 
 */
/**
 * @typedef Path
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Node[]} nodes 
 */
/**
 * @typedef Path1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Node1[]} nodes 
 */
/**
 * @typedef Path2
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer[]} categoryIds 
 */
/**
 * @typedef PaymentDetail
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} instrumentDescription 
 * @property {string} instrumentType 
 */
/**
 * @typedef PaymentDetail1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} instrumentDescription 
 */
/**
 * @typedef PaymentInstrumentTypeInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} instrumentDescription 
 * @property {string} instrumentTypeToken 
 * @property {string} type 
 */
/**
 * @typedef PaymentMethodHijackTransaction
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Money} amount 
 * @property {integer} count 
 * @property {supportcases(v2).Date} date 
 */
/**
 * @typedef PaymentsInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} numPaymentsAccounts 
 */
/**
 * @typedef PaymentsSuggestion
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} description 
 * @property {string} displayName 
 * @property {string} token 
 */
/**
 * @typedef Paypal
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} email 
 */
/**
 * @typedef Paypal1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} account 
 */
/**
 * @typedef Period
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} count 
 * @property {string} units 
 */
/**
 * @typedef PhoneCall
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} callId 
 * @property {integer} countryCode 
 * @property {string} obfuscatedLineNumber 
 */
/**
 * @typedef PhoneInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} ucid 
 */
/**
 * @typedef PhoneNumber
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} countryCode 
 * @property {string} countryCodeSource 
 * @property {string} extension 
 * @property {boolean} isValid 
 * @property {string} lineNumber 
 * @property {string} nationalNumber 
 * @property {integer} numberOfLeadingZeros 
 * @property {string} preferredDomesticCarrierCode 
 * @property {string} rawInput 
 */
/**
 * @typedef PhoneSetting
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} agentId 
 * @property {string} extension 
 * @property {string} name 
 * @property {string} region 
 */
/**
 * @typedef PhysicalMailingAddress
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} addressLine1 
 * @property {string} addressLine2 
 * @property {string} addressLine3 
 * @property {string} addressee 
 * @property {string} city 
 * @property {string} countryCode 
 * @property {string} phoneNumber 
 * @property {string} postalCode 
 * @property {string} stateProvinceCode 
 */
/**
 * @typedef Pitch
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Opportunity[]} opportunities 
 * @property {string} opportunitiesDisplayType 
 * @property {supportcases(v2).Program} program 
 * @property {integer} totalPoints 
 */
/**
 * @typedef Pitch1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} campaignIndex 
 * @property {supportcases(v2).PitchId} id 
 * @property {integer} opportunityIndex 
 * @property {string} opportunityType 
 */
/**
 * @typedef PitchId
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} campaignId 
 * @property {string} opportunityId 
 */
/**
 * @typedef Product
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Category[]} agentCategories 
 * @property {string} productId 
 * @property {string} productName 
 * @property {supportcases(v2).Category} routingCategory 
 */
/**
 * @typedef Product1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} displayName 
 * @property {string} name 
 * @property {string} productId 
 * @property {string} productName 
 */
/**
 * @typedef Product2
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} isPinned 
 * @property {string[]} locales 
 * @property {string} productId 
 * @property {string} productName 
 * @property {supportcases(v2).RoutingTarget[]} routingTargets 
 */
/**
 * @typedef ProductCount
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} count 
 * @property {string} productName 
 */
/**
 * @typedef ProductTransfer
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Product} sourceProduct 
 * @property {supportcases(v2).Product} targetProduct 
 */
/**
 * @typedef Program
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} programName 
 * @property {integer} targetPoints 
 */
/**
 * @typedef Program1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} name 
 * @property {integer} targetPoints 
 */
/**
 * @typedef Property
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} name 
 * @property {string} value 
 */
/**
 * @typedef Purchase
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).LocalizedTimestamp} accessEndTime 
 * @property {supportcases(v2).LocalizedTimestamp} cancelTime 
 * @property {boolean} eligibleForSelfServeRefund 
 * @property {string} entitlementToken 
 * @property {boolean} isPreorder 
 * @property {boolean} isRefundable 
 * @property {boolean} isRefunded 
 * @property {boolean} isRevokable 
 * @property {string} name 
 * @property {string} orderId 
 * @property {string} paymentDescription 
 * @property {string} paymentMethod 
 * @property {string} productType 
 * @property {supportcases(v2).LocalizedTimestamp} purchaseTime 
 * @property {string} purchaseType 
 * @property {string} qualityCap 
 * @property {string} source 
 * @property {supportcases(v2).Money} transactionAmount 
 * @property {string} transactionStatus 
 * @property {supportcases(v2).LocalizedTimestamp} transactionTime 
 * @property {string} transactionToken 
 * @property {supportcases(v2).LocalizedTimestamp} viewTime 
 */
/**
 * @typedef PurchasedApp
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} appId 
 * @property {string} name 
 * @property {string} purchaseTime 
 */
/**
 * @typedef PurchasedBook
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} bookId 
 * @property {string} name 
 * @property {string} purchaseTime 
 */
/**
 * @typedef PurchasedVideo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} name 
 * @property {string} purchaseTime 
 * @property {string} videoId 
 */
/**
 * @typedef QuestionSet
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} attemptsRemaining 
 * @property {supportcases(v2).AuthenticationBankAccount[]} authenticationBankAccounts 
 * @property {supportcases(v2).AuthenticationCreditCard1[]} authenticationCreditCards 
 * @property {string[]} availableQuestions 
 * @property {string} questionSetType 
 * @property {supportcases(v2).AvailableQuestion[]} questions 
 * @property {string} result 
 * @property {integer} totalNumberOfAttempts 
 */
/**
 * @typedef QuestionSource
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} questionSourceType 
 * @property {string} token 
 */
/**
 * @typedef QuickResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} quickResponseName 
 * @property {string} value 
 */
/**
 * @typedef ReadCaseRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} readTime 
 */
/**
 * @typedef RealTime
 * @memberOf! supportcases(v2)
 * @type object
 * @property {object} attributeMap 
 * @property {string} issue 
 * @property {supportcases(v2).RealTimePool} pool 
 * @property {supportcases(v2).RealTimeEvent[]} realTimeEvents 
 * @property {supportcases(v2).Identity} requester 
 */
/**
 * @typedef RealTimeEvent
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).ChatMessage} chatMessage 
 * @property {string} createTime 
 */
/**
 * @typedef RealTimePool
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} poolId 
 * @property {string} poolName 
 */
/**
 * @typedef RealTimeSetting
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} agentSettingId 
 * @property {boolean} enableChatQueueSounds 
 * @property {boolean} enableModalChatNotifications 
 * @property {boolean} forceChatQueueNotifications 
 * @property {string} gaiaRobotEntityId 
 * @property {string} name 
 * @property {string} plusPageEntityId 
 * @property {supportcases(v2).QuickResponse[]} quickResponses 
 * @property {string} realTimeSettingId 
 * @property {string} supportIdentityType 
 * @property {boolean} switchCaseOnChatFocus 
 * @property {boolean} useSupportIdentity 
 */
/**
 * @typedef RecentlyViewedSource
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef RedSignals
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} source 
 * @property {supportcases(v2).SubscriptionSignals} subscriptionSignals 
 */
/**
 * @typedef RedeemGiftCardRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} activationNumber 
 * @property {string} caseId 
 * @property {supportcases(v2).RedemptionToken} redemptionToken 
 * @property {string} ssoCookie 
 */
/**
 * @typedef RedeemGiftCardResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Money} amountRedeemed 
 * @property {supportcases(v2).Money} availableBalance 
 * @property {string} redemptionStatus 
 */
/**
 * @typedef RedemptionToken
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} token 
 */
/**
 * @typedef RefundDetail
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).PaymentDetail1} paymentDetail 
 * @property {supportcases(v2).RefundEntry[]} refundEntries 
 * @property {string} refundReason 
 * @property {supportcases(v2).Money} refundTotal 
 */
/**
 * @typedef RefundEntry
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Money} refundAmount 
 * @property {string} refundDescription 
 * @property {string} refundRequestTime 
 * @property {string} refundTime 
 * @property {string} status 
 */
/**
 * @typedef RefundHardwareOrderRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} ssoTicket 
 */
/**
 * @typedef RefundHardwareOrderResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} reason 
 * @property {string} refundId 
 */
/**
 * @typedef RefundHistorySummaryInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} numberOfRefunds 
 * @property {string} productType 
 * @property {string} refundResult 
 */
/**
 * @typedef RefundOrdersRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} customerEmail 
 * @property {supportcases(v2).Order[]} orders 
 * @property {string} refundReason 
 * @property {string} ssoCookie 
 */
/**
 * @typedef RefundOrdersResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).OrderRefundStatusInfo[]} approvedOrderInfos 
 * @property {supportcases(v2).Order[]} approvedOrders 
 * @property {supportcases(v2).OrderRefundStatusInfo[]} escalateOrderInfos 
 * @property {supportcases(v2).Order[]} escalateOrders 
 * @property {supportcases(v2).OrderRefundStatusInfo[]} failedOrderInfos 
 * @property {supportcases(v2).Order[]} failedOrders 
 * @property {boolean} inProgress 
 * @property {supportcases(v2).OrderRefundStatusInfo[]} inProgressOrderInfos 
 * @property {supportcases(v2).Order[]} inProgressOrders 
 * @property {supportcases(v2).OrderRefundStatusInfo[]} optionalEscalateOrderInfos 
 * @property {supportcases(v2).Order[]} optionalEscalateOrders 
 * @property {supportcases(v2).OrderRefundStatusInfo[]} processLaterOrderInfos 
 * @property {supportcases(v2).Order[]} processLaterOrders 
 * @property {supportcases(v2).OrderRefundStatusInfo[]} rejectedOrderInfos 
 * @property {supportcases(v2).Order[]} rejectedOrders 
 * @property {supportcases(v2).OrderRefundStatusInfo[]} sidewinderRejectedOrderInfos 
 */
/**
 * @typedef RefundTransactionsRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {boolean} forceRefund 
 * @property {supportcases(v2).TransactionRefundRequestEntry[]} refundRequestEntries 
 * @property {string} ssoCookie 
 */
/**
 * @typedef RefundTransactionsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).TransactionRefundResponseStatus[]} refundStatuses 
 */
/**
 * @typedef RelatedCommunications
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {supportcases(v2).Communication[]} communications 
 * @property {supportcases(v2).Relation1[]} relations 
 * @property {string} slaTime 
 * @property {string} state 
 */
/**
 * @typedef Relation
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Duplicate} duplicate 
 */
/**
 * @typedef Relation1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} borgAlertId 
 * @property {string} buganizerId 
 * @property {string} caseId 
 * @property {string} legalId 
 * @property {string} orderId 
 * @property {integer} pcrId 
 * @property {string} sourceCaseId 
 * @property {string} sourceCommunicationId 
 * @property {string} spixerId 
 * @property {string} state 
 * @property {string} type 
 * @property {supportcases(v2).WalletPaymentMethodHijackReviewIds} walletPaymentMethodHijackReviewIds 
 * @property {supportcases(v2).WalletSignInReviewIds} walletSignInReviewIds 
 */
/**
 * @typedef ReleaseRequest
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef ReleaseResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef ReplacementDetail
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).ReplacementShipment[]} shipments 
 */
/**
 * @typedef ReplacementDevice
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} countryCode 
 * @property {boolean} countryExceptionEligible 
 * @property {string} device 
 * @property {string} gpn 
 * @property {string} rmaType 
 */
/**
 * @typedef ReplacementShipment
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} actions 
 * @property {string} actualDeliveryTime 
 * @property {supportcases(v2).Date} actualShipDate 
 * @property {string} carrierName 
 * @property {supportcases(v2).Date} estimatedDeliveryEndDate 
 * @property {supportcases(v2).Date} estimatedDeliveryStartDate 
 * @property {boolean} isPastEstimatedDeliveryDate 
 * @property {string} lastEventTime 
 * @property {supportcases(v2).LineItem[]} lineItems 
 * @property {string} state 
 * @property {string} trackingNumber 
 * @property {string} trackingUrl 
 */
/**
 * @typedef RequestDeviceSignalsAcceptEvent
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} deviceId 
 */
/**
 * @typedef RequestDeviceSignalsCancelEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef RequestDeviceSignalsCleanupEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef RequestDeviceSignalsDeclineEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef RequestDeviceSignalsEvent
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).RequestDeviceSignalsAcceptEvent} acceptEvent 
 * @property {supportcases(v2).RequestDeviceSignalsCancelEvent} cancelEvent 
 * @property {supportcases(v2).RequestDeviceSignalsCleanupEvent} cleanupEvent 
 * @property {supportcases(v2).RequestDeviceSignalsDeclineEvent} declineEvent 
 * @property {supportcases(v2).RequestDeviceSignalsInitiateEvent} initiateEvent 
 * @property {string} invitationId 
 * @property {supportcases(v2).RequestDeviceSignalsInviteEvent} inviteEvent 
 * @property {supportcases(v2).RequestDeviceSignalsReceivedEvent} receivedEvent 
 * @property {supportcases(v2).RequestDeviceSignalsTimeoutEvent} timeoutEvent 
 */
/**
 * @typedef RequestDeviceSignalsInitiateEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef RequestDeviceSignalsInviteEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef RequestDeviceSignalsReceivedEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef RequestDeviceSignalsTimeoutEvent
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef Requirement
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} requirementType 
 * @property {string} snippetId 
 */
/**
 * @typedef Resolution
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CannedResponse1} cannedResponse 
 * @property {supportcases(v2).HelpCenterContent2} helpCenter 
 * @property {string} matchReason 
 * @property {string[]} matchTerms 
 * @property {supportcases(v2).Action[]} postActions 
 * @property {supportcases(v2).Action[]} preActions 
 * @property {integer} score 
 * @property {string} snippet 
 * @property {string} title 
 * @property {supportcases(v2).TroubleShooter} troubleshooter 
 * @property {supportcases(v2).Workflow1} workflow 
 */
/**
 * @typedef Resolution1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).HelpCenterContent3} helpCenterContent 
 * @property {number} score 
 * @property {string} status 
 * @property {string} workflowId 
 */
/**
 * @typedef ResolutionActivity
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} helpCenterArticleId 
 * @property {string} status 
 * @property {string} workflowId 
 */
/**
 * @typedef ResolutionEvent
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} articleId 
 * @property {supportcases(v2).CategoryPath1[]} categories 
 * @property {string} description 
 * @property {string} resolutionId 
 * @property {string} troubleshooterId 
 */
/**
 * @typedef ResolutionOpened
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AgentActivitySource} agentActivitySource 
 * @property {supportcases(v2).CannedResponse} cannedResponse 
 * @property {supportcases(v2).HelpCenterDeepLinkSource} deepLinkSource 
 * @property {supportcases(v2).HelpCenterContent} helpCenterContent 
 * @property {supportcases(v2).RecentlyViewedSource} recentlyViewedSource 
 * @property {supportcases(v2).ResolutionSearchSource} searchSource 
 * @property {supportcases(v2).Workflow} workflow 
 */
/**
 * @typedef ResolutionSearchSource
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} query 
 */
/**
 * @typedef ReviewKey
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} review3Id 
 * @property {string} reviewId 
 * @property {string} targetUnderReview 
 * @property {string} token 
 */
/**
 * @typedef Rma
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} addressUpdateable 
 * @property {boolean} bizappSubmitted 
 * @property {string} caseId 
 * @property {string} deviceId 
 * @property {string} emailAddress 
 * @property {string} exchangeDeviceName 
 * @property {string} exchangeGpn 
 * @property {string} extendedWarrantyClaimId 
 * @property {string} failureReason 
 * @property {string} failureType 
 * @property {supportcases(v2).RmaFailure[]} failures 
 * @property {string} gpn 
 * @property {string} name 
 * @property {string} notes 
 * @property {string} orderNumber 
 * @property {boolean} packingLabelRequired 
 * @property {string} reasonCodeIdentifier 
 * @property {string} replacementCartLink 
 * @property {string} rmaAction 
 * @property {string} rmaCategory 
 * @property {string} rmaId 
 * @property {string} rmaNumber 
 * @property {string} rmaSubcategory 
 * @property {string} rmaType 
 * @property {string} shipmentId 
 * @property {supportcases(v2).MailingAddress} shippingAddress 
 * @property {boolean} shippingLabelRequired 
 * @property {string} shippingProvider 
 * @property {string} shippingTrackingNumber 
 * @property {string} state 
 * @property {string} submitTime 
 * @property {string} warrantyException 
 */
/**
 * @typedef RmaCategory
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} categoryName 
 * @property {boolean} disabled 
 * @property {supportcases(v2).RmaReasonCode[]} reasonCodes 
 * @property {string[]} subcategories 
 */
/**
 * @typedef RmaDescription
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} notes 
 * @property {string} rmaAction 
 * @property {string} rmaCategory 
 * @property {string} rmaSubcategory 
 * @property {string} rmaType 
 */
/**
 * @typedef RmaDevice
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} deviceId 
 * @property {string} deviceName 
 * @property {string} hashedFullDeviceId 
 * @property {supportcases(v2).ShippingInfo1} shipmentInfo 
 */
/**
 * @typedef RmaFailure
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} failureExceptionMessage 
 * @property {string} failureType 
 * @property {string} validationReason 
 */
/**
 * @typedef RmaIdentifier
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} rmaId 
 * @property {string} rmaNumber 
 */
/**
 * @typedef RmaInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} originalRmaNumber 
 * @property {string} originalRmaState 
 * @property {string} replacementRmaNumber 
 * @property {string} rmaAction 
 */
/**
 * @typedef RmaOrderDetail
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} actions 
 * @property {boolean} authHold 
 * @property {supportcases(v2).RmaDescription} description 
 * @property {supportcases(v2).RmaDevice} originalDevice 
 * @property {string} originalOrderId 
 * @property {string} originalShipmentId 
 * @property {supportcases(v2).RefundDetail} refundDetails 
 * @property {supportcases(v2).RmaDevice} replacementDevice 
 * @property {string} replacementOrderId 
 * @property {string} replacementShipmentId 
 * @property {string} status 
 */
/**
 * @typedef RmaReasonCode
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} id 
 * @property {string} subcategory 
 */
/**
 * @typedef RmaType
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} actions 
 * @property {supportcases(v2).RmaCategory[]} rmaCategories 
 * @property {string} typeName 
 */
/**
 * @typedef RouteRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} locale 
 * @property {string} productId 
 * @property {string} reason 
 * @property {string} routingId 
 */
/**
 * @typedef RouteResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef RoutingInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AgentTransfer} agentTransfer 
 * @property {supportcases(v2).ChatTransfer} chatTransfer 
 * @property {supportcases(v2).LocaleTransfer} localeTransfer 
 * @property {supportcases(v2).ProductTransfer} productTransfer 
 * @property {string} routingTargetName 
 */
/**
 * @typedef RoutingTarget
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Chat1} chat 
 * @property {supportcases(v2).Email2} email 
 * @property {string} targetId 
 * @property {string} targetName 
 */
/**
 * @typedef RunRmaStepsRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} action 
 * @property {string} caseId 
 * @property {string} draftMessageId 
 * @property {supportcases(v2).MailingAddress} shippingAddress 
 * @property {boolean} skipAddressValidation 
 * @property {string} ssoCookie 
 * @property {string[]} steps 
 */
/**
 * @typedef RunRmaStepsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} draftMessageId 
 * @property {supportcases(v2).Rma} rma 
 */
/**
 * @typedef RunWorkflowRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} draftMessageId 
 * @property {string} rmaId 
 * @property {string} rmaNumber 
 * @property {supportcases(v2).MailingAddress} shippingAddress 
 * @property {string} ssoCookie 
 * @property {string[]} steps 
 */
/**
 * @typedef RunWorkflowResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).WorkflowResult} result 
 */
/**
 * @typedef SaveRmaRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Rma} rma 
 */
/**
 * @typedef SaveRmaResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Rma} rma 
 */
/**
 * @typedef Search
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} displayName 
 * @property {string} name 
 * @property {string} searchId 
 * @property {string} teamId 
 */
/**
 * @typedef SearchAccountReviewsRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} ssoCookie 
 */
/**
 * @typedef SearchAccountReviewsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AccountReview[]} review 
 */
/**
 * @typedef SearchCategoryInfosResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CategoryInfo[]} categoryInfos 
 */
/**
 * @typedef SearchCount
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} casesType 
 * @property {string} dueByStatus 
 * @property {string} searchCount 
 */
/**
 * @typedef SearchMultipleCategoryInfosRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} filterConsultCategories 
 * @property {integer} maximumResults 
 * @property {string[]} productIds 
 * @property {string} query 
 * @property {supportcases(v2).CategoryPath[]} topCategoryPaths 
 */
/**
 * @typedef SearchOrdersRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} customerEmail 
 * @property {supportcases(v2).Money} endAmount 
 * @property {string} endDate 
 * @property {boolean} includeFreeOrders 
 * @property {string} instrumentLastFourCharacters 
 * @property {string} locale 
 * @property {integer} pageSize 
 * @property {string} pageToken 
 * @property {string} q 
 * @property {string} queryId 
 * @property {string} ssoCookie 
 * @property {supportcases(v2).Money} startAmount 
 * @property {string} startDate 
 * @property {string} subscriptionId 
 */
/**
 * @typedef SearchOrdersResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} nextPageToken 
 * @property {supportcases(v2).Order[]} orders 
 */
/**
 * @typedef SearchSetting
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).TeamSearches[]} activeTeamSearches 
 * @property {supportcases(v2).TeamSearches[]} disabledTeamSearches 
 * @property {boolean} enableAssignStream 
 * @property {string} name 
 */
/**
 * @typedef SendEmailRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} sendDelay 
 */
/**
 * @typedef SendEmailResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Communication} communication 
 */
/**
 * @typedef SendRmaRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} draftMessageId 
 * @property {supportcases(v2).Rma} rma 
 * @property {boolean} skipAddressValidation 
 * @property {string} ssoCookie 
 */
/**
 * @typedef SendRmaResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} draftMessageId 
 * @property {supportcases(v2).Rma} rma 
 */
/**
 * @typedef SetCallbackNumberRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).PhoneNumber} phoneNumber 
 */
/**
 * @typedef SetCallbackNumberResponse
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef Settings
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AuthenticationSettings} authenticationSettings 
 * @property {supportcases(v2).ConsultSettings} consultSettings 
 * @property {string} displayName 
 * @property {string} dueTimeCalculationMethod 
 * @property {supportcases(v2).EasterEggSettings} easterEggSettings 
 * @property {supportcases(v2).EscalateSettings} escalateSettings 
 * @property {supportcases(v2).ExternalToolSettings} externalToolSettings 
 * @property {string} feedbackProductId 
 * @property {supportcases(v2).IssueCategorySettings} issueCategorySettings 
 * @property {string} name 
 * @property {string} productId 
 * @property {string} productName 
 * @property {string[]} supportedLocales 
 */
/**
 * @typedef ShippingAddress
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).PhysicalMailingAddress} address 
 * @property {string[]} addressLines 
 */
/**
 * @typedef ShippingCustomerName
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} customerName 
 */
/**
 * @typedef ShippingCustomerPhoneNumber
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} phoneNumber 
 */
/**
 * @typedef ShippingInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} actualDeliveryTime 
 * @property {supportcases(v2).Date} actualShipDate 
 * @property {string} carrierName 
 * @property {supportcases(v2).Date} estimatedDeliveryEndDate 
 * @property {supportcases(v2).Date} estimatedDeliveryStartDate 
 * @property {supportcases(v2).Date} estimatedShipDate 
 * @property {boolean} isDelivered 
 * @property {boolean} isPastEstimatedDeliveryDate 
 * @property {string} lastEventTime 
 * @property {string} shippingType 
 * @property {supportcases(v2).Money} totalAmount 
 * @property {string} trackingNumber 
 */
/**
 * @typedef ShippingInfo1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} actualDeliveryTime 
 * @property {supportcases(v2).Date} actualShipDate 
 * @property {string} carrierName 
 * @property {supportcases(v2).Date} estimatedDeliveryEndDate 
 * @property {supportcases(v2).Date} estimatedDeliveryStartDate 
 * @property {supportcases(v2).Date} estimatedShipDate 
 * @property {string} shipmentState 
 * @property {string} trackingNumber 
 * @property {string} trackingUrl 
 */
/**
 * @typedef ShmoovieSignals
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} episode 
 * @property {string} expireTimeFromPurchaseTime 
 * @property {supportcases(v2).LocalizedTimestamp} localizedExpireTimeFromPurchaseTime 
 * @property {supportcases(v2).LocalizedTimestamp} localizedRentalExpireTime 
 * @property {supportcases(v2).LocalizedTimestamp} localizedRentalStartWatchByTime 
 * @property {supportcases(v2).LocalizedTimestamp} localizedRentalStartWatchTime 
 * @property {string} model 
 * @property {supportcases(v2).Money} price 
 * @property {string} rentalExpireTime 
 * @property {string} rentalStartWatchByTime 
 * @property {string} rentalStartWatchTime 
 * @property {string} season 
 * @property {string} source 
 */
/**
 * @typedef ShowSummaryAction
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} accountInfo 
 * @property {integer} declinedTxCount 
 * @property {integer} pendingTxCount 
 * @property {string} recentStartTime 
 * @property {integer} rejectedTxCount 
 * @property {string} searchContext 
 * @property {integer} transactionNotFoundDifmId 
 * @property {integer} transactionNotFoundScriptId 
 */
/**
 * @typedef SidewinderRole
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} isOnsite 
 */
/**
 * @typedef Source
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} agentEmailAddress 
 * @property {string} atlasProduct 
 * @property {string} casesService 
 * @property {string} externalService 
 * @property {string} robotEmailAddress 
 * @property {string} routingRuleId 
 */
/**
 * @typedef SpamRequest
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef SpamResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef SplitRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} communicationId 
 */
/**
 * @typedef SplitResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} sourceCase 
 * @property {supportcases(v2).Case} targetCase 
 */
/**
 * @typedef SplitTender
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Money} amount 
 * @property {string} instrument 
 * @property {string} status 
 */
/**
 * @typedef Status
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} code 
 * @property {object[]} details 
 * @property {string} message 
 */
/**
 * @typedef StepResult
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} errorMessage 
 * @property {string} status 
 * @property {string} step 
 */
/**
 * @typedef SubmitRmaRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} draftMessageId 
 * @property {supportcases(v2).Rma} rma 
 * @property {string} ssoCookie 
 */
/**
 * @typedef SubmitRmaResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} draftMessageId 
 * @property {boolean} isDraftMessageUpdated 
 * @property {supportcases(v2).Rma} rma 
 */
/**
 * @typedef Subscription
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Money} amount 
 * @property {string} billingPeriod 
 * @property {string} cancelDate 
 * @property {supportcases(v2).Docid} docid 
 * @property {string} firstChargedDate 
 * @property {string} id 
 * @property {boolean} isTrial 
 * @property {string} offerType 
 * @property {string} paymentDeclinedDate 
 * @property {string[]} purchaseIds 
 * @property {string} renewDate 
 * @property {string} state 
 * @property {string} terminateDate 
 * @property {string} title 
 * @property {string} vertical 
 */
/**
 * @typedef SubscriptionComponent
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).ComponentData} componentData 
 * @property {string} name 
 * @property {supportcases(v2).ComponentToken} token 
 */
/**
 * @typedef SubscriptionSignals
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} featureExpireTime 
 * @property {supportcases(v2).Period} freeTrialPeriod 
 * @property {supportcases(v2).Period} introductoryPeriod 
 * @property {supportcases(v2).Money} introductoryPrice 
 * @property {supportcases(v2).LocalizedTimestamp} localizedFeatureExpireTime 
 * @property {supportcases(v2).LocalizedTimestamp} localizedNextPaymentTime 
 * @property {string} nextPaymentTime 
 * @property {supportcases(v2).Money} pricePerMonth 
 */
/**
 * @typedef SuggestNewEmailHeadersResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Contact[]} fromHeaders 
 * @property {supportcases(v2).Contact[]} toHeaders 
 */
/**
 * @typedef SuggestNoteHeadersResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Contact[]} fromHeaders 
 * @property {supportcases(v2).Contact[]} toHeaders 
 */
/**
 * @typedef SuggestPaymentInstrumentIssuerResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).PaymentsSuggestion[]} suggestions 
 */
/**
 * @typedef SuggestReplyEmailHeadersResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Contact[]} ccHeaders 
 * @property {supportcases(v2).Contact[]} fromHeaders 
 * @property {supportcases(v2).Contact[]} toHeaders 
 */
/**
 * @typedef SuggestResolutionsRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 */
/**
 * @typedef SuggestResolutionsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).SuggestedResolution[]} resolutions 
 */
/**
 * @typedef SuggestedResolution
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} id 
 * @property {string} type 
 */
/**
 * @typedef SummarizeResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} adwordsCid 
 * @property {boolean} emailAddress 
 * @property {supportcases(v2).Summary} summary 
 */
/**
 * @typedef Summary
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).ChannelCount[]} casesByChannel 
 * @property {supportcases(v2).ProductCount[]} casesByProduct 
 * @property {supportcases(v2).Interaction} mostRecentClosedCase 
 * @property {supportcases(v2).Interaction} mostRecentOpenCase 
 * @property {supportcases(v2).InteractionCount} openCases 
 * @property {supportcases(v2).InteractionCount} totalCases 
 */
/**
 * @typedef SupportLink
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} displayName 
 * @property {string} linkUrl 
 */
/**
 * @typedef TakeRequest
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef TakeResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef Tax
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Money} amount 
 * @property {string} type 
 */
/**
 * @typedef Team
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} displayName 
 * @property {string} name 
 * @property {string} teamId 
 */
/**
 * @typedef TeamSearches
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} searchIds 
 * @property {string} teamId 
 */
/**
 * @typedef Timezone
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} utcOffset 
 */
/**
 * @typedef Transaction
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} billingBackend 
 * @property {boolean} isProratedCharge 
 * @property {boolean} isRefund 
 * @property {boolean} isRefundable 
 * @property {boolean} isRefunded 
 * @property {supportcases(v2).TransactionLineItem[]} lineItems 
 * @property {supportcases(v2).LocalizedTimestamp} localizedRefundTime 
 * @property {supportcases(v2).LocalizedTimestamp} localizedTransactionTime 
 * @property {string} name 
 * @property {string} orderCode 
 * @property {string} paymentDescription 
 * @property {string} paymentMethod 
 * @property {string} refundReason 
 * @property {string} refundTime 
 * @property {string} state 
 * @property {string} textDescription 
 * @property {supportcases(v2).Money} transactionAmount 
 * @property {string} transactionId 
 * @property {string} transactionStatus 
 * @property {string} transactionTime 
 * @property {string} transactionToken 
 */
/**
 * @typedef TransactionIdentifier
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} orderId 
 * @property {string} transactionId 
 * @property {string} transactionType 
 * @property {string} youtubeVideoId 
 */
/**
 * @typedef TransactionLineItem
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} componentKey 
 * @property {string} description 
 * @property {integer} lineItemIndex 
 * @property {string} name 
 * @property {supportcases(v2).Money} price 
 * @property {supportcases(v2).Tax[]} tax 
 */
/**
 * @typedef TransactionRefundRequestEntry
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} refundReason 
 * @property {string[]} transactionTokens 
 */
/**
 * @typedef TransactionRefundResponseStatus
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} refundResult 
 * @property {string} transactionToken 
 */
/**
 * @typedef TransactionsSummary
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Money} amount 
 * @property {integer} count 
 */
/**
 * @typedef TransferAction
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} resolutionId 
 */
/**
 * @typedef TransferRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} emailAddress 
 */
/**
 * @typedef TransferResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef TroubleShooter
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} hcId 
 * @property {string} helpCenter 
 * @property {boolean} isPublic 
 * @property {string} locale 
 * @property {string} url 
 */
/**
 * @typedef TroubleshootAccountRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} email 
 * @property {string} searchRecentStartTimestamp 
 * @property {string} ssoCookie 
 */
/**
 * @typedef TroubleshootAccountResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Action1} action 
 */
/**
 * @typedef TroubleshootIssueRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Answer[]} answers 
 * @property {string} caseId 
 * @property {string} ssoCookie 
 */
/**
 * @typedef TroubleshootIssueResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AutocheckResult[]} autocheckResults 
 * @property {supportcases(v2).Issue1[]} issues 
 * @property {string[]} questions 
 * @property {supportcases(v2).Requirement[]} requirements 
 * @property {supportcases(v2).Resolution1[]} resolutions 
 */
/**
 * @typedef TroubleshootTransactionRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {string} orderId 
 * @property {string} searchContext 
 * @property {string} ssoCookie 
 * @property {string} transactionId 
 * @property {supportcases(v2).TransactionIdentifier} transactionIdentifier 
 * @property {string} transactionType 
 */
/**
 * @typedef TroubleshootTransactionResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Action1} action 
 */
/**
 * @typedef TroubleshooterSession
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AutocheckResult[]} autocheckResults 
 * @property {string} caseId 
 * @property {string} issueId 
 * @property {string[]} questions 
 * @property {supportcases(v2).Requirement[]} requirements 
 * @property {supportcases(v2).Resolution1[]} resolutions 
 * @property {string} sessionId 
 * @property {supportcases(v2).Issue1[]} subIssues 
 */
/**
 * @typedef UnassignRequest
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef UnassignResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef UnauthorizedChargesWorkflow
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).CasesReviewKey[]} paymentMethodHijackReviewKeys 
 * @property {string} state 
 * @property {supportcases(v2).CasesTransactionIdentifier[]} userTransactionIds 
 */
/**
 * @typedef UnblockRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} borgAlertId 
 * @property {string} buganizerId 
 * @property {string} orderId 
 * @property {integer} pcrId 
 */
/**
 * @typedef UnblockResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef UnpluggedSignals
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).EntitlementComponent[]} components 
 * @property {string} source 
 * @property {supportcases(v2).SubscriptionSignals} subscriptionSignals 
 */
/**
 * @typedef UnreadCaseInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} caseId 
 * @property {boolean} isAssigned 
 * @property {string} unreadTime 
 */
/**
 * @typedef UnspamRequest
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef UnspamResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef UpdateAccountsRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Account[]} accounts 
 */
/**
 * @typedef UpdateAccountsResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Account[]} accounts 
 */
/**
 * @typedef UpdateAgentCategoriesRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Path2[]} paths 
 */
/**
 * @typedef UpdateAgentCategoriesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Product} product 
 * @property {supportcases(v2).Product[]} subProducts 
 */
/**
 * @typedef UpdateAttributesRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Attribute1[]} attributes 
 */
/**
 * @typedef UpdateAttributesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef UpdateConsultNoteRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} body 
 * @property {string} caseId 
 * @property {string} inReplyTo 
 * @property {boolean} isHtml 
 * @property {string} subject 
 */
/**
 * @typedef UpdateConsultNoteResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Communication} communication 
 */
/**
 * @typedef UpdateContactEmailRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} contactEmail 
 */
/**
 * @typedef UpdateContactEmailResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Customer} customer 
 */
/**
 * @typedef UpdateContactNameRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} contactName 
 */
/**
 * @typedef UpdateContactNameResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Customer} customer 
 */
/**
 * @typedef UpdateCustomerAttributesRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} adwordsExternalCid 
 * @property {string} adwordsInternalCid 
 * @property {string} emailAddress 
 * @property {string} phoneNumber 
 */
/**
 * @typedef UpdateCustomerAttributesResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Customer} customer 
 */
/**
 * @typedef UpdateDisconnectedChannelRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} channel 
 */
/**
 * @typedef UpdateEligibleProgramRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} programName 
 */
/**
 * @typedef UpdateEligibleProgramResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Customer} customer 
 */
/**
 * @typedef UpdateEmailRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).AfterSendSetting} afterSendSetting 
 * @property {string[]} bccAddresses 
 * @property {string} body 
 * @property {string[]} cannedResponseIds 
 * @property {string} caseId 
 * @property {string[]} ccAddresses 
 * @property {string[]} footerIds 
 * @property {string} fromAddress 
 * @property {string[]} headerIds 
 * @property {string} inReplyTo 
 * @property {boolean} isHtml 
 * @property {string} subject 
 * @property {string[]} toAddresses 
 */
/**
 * @typedef UpdateEmailResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Communication} communication 
 */
/**
 * @typedef UpdateLocaleRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} locale 
 */
/**
 * @typedef UpdateLocaleResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Issue} issue 
 */
/**
 * @typedef UpdateNoteRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} body 
 * @property {string[]} cannedResponseIds 
 * @property {string} caseId 
 * @property {boolean} isHtml 
 * @property {string} noteType 
 * @property {string} subject 
 */
/**
 * @typedef UpdateNoteResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Communication} communication 
 */
/**
 * @typedef UpdateOwnerResponse
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef UpdateProductRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} fieldMask 
 * @property {supportcases(v2).Product} product 
 */
/**
 * @typedef UpdateSummaryRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} summary 
 */
/**
 * @typedef UpdateSummaryResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Issue} issue 
 */
/**
 * @typedef UpdateWorkflowRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} fieldMask 
 * @property {supportcases(v2).CasesWorkflow} workflow 
 */
/**
 * @typedef ValidateConsultCategory
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).ValidateConsultNode[]} nodes 
 */
/**
 * @typedef ValidateConsultFormRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} consultFormHelpCenterName 
 * @property {string} consultFormId 
 * @property {supportcases(v2).ValidateConsultCategory} originatingCategory 
 * @property {string} poolId 
 * @property {string} productId 
 * @property {supportcases(v2).ValidateConsultCategory[]} targetCaseCategories 
 * @property {string} teamId 
 */
/**
 * @typedef ValidateConsultFormResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} validationErrors 
 */
/**
 * @typedef ValidateConsultNode
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer} categoryId 
 */
/**
 * @typedef VerificationResult
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} answerResults 
 * @property {integer} attemptsRemaining 
 * @property {string} questionSetType 
 * @property {supportcases(v2).Status[]} verificationResults 
 */
/**
 * @typedef VerifyGiftCardRequest
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} activationNumber 
 * @property {string} caseId 
 * @property {string} partialCode 
 * @property {string} ssoCookie 
 */
/**
 * @typedef VerifyGiftCardResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).RedemptionToken} redemptionToken 
 */
/**
 * @typedef WaitForConsultRequest
 * @memberOf! supportcases(v2)
 * @type object
 */
/**
 * @typedef WaitForConsultResponse
 * @memberOf! supportcases(v2)
 * @type object
 * @property {supportcases(v2).Case} case 
 */
/**
 * @typedef WalletPaymentMethodHijackReviewIds
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} ids 
 */
/**
 * @typedef WalletSignInReviewIds
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string[]} ids 
 */
/**
 * @typedef WalletTransaction
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} creationTime 
 * @property {string} description 
 * @property {string} instrument 
 * @property {boolean} isAuthorizationHold 
 * @property {supportcases(v2).Money} originalAmount 
 * @property {string} playSubscriptionId 
 * @property {string[]} productLinks 
 * @property {string} productVertical 
 * @property {string} qualityCap 
 * @property {supportcases(v2).SplitTender[]} splitTenders 
 * @property {string} status 
 * @property {supportcases(v2).TransactionIdentifier} transactionId 
 */
/**
 * @typedef Workflow
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} troubleshooterType 
 * @property {string} workflowId 
 */
/**
 * @typedef Workflow1
 * @memberOf! supportcases(v2)
 * @type object
 * @property {boolean} checkForDraft 
 * @property {string} troubleshooterType 
 * @property {string} url 
 * @property {string} workflowId 
 */
/**
 * @typedef WorkflowInfo
 * @memberOf! supportcases(v2)
 * @type object
 * @property {integer[]} workflowIds 
 */
/**
 * @typedef WorkflowResult
 * @memberOf! supportcases(v2)
 * @type object
 * @property {string} draftMessageId 
 * @property {supportcases(v2).Rma} rma 
 * @property {supportcases(v2).StepResult[]} stepResults 
 */
export = Supportcases;
