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
 * Dialogflow API
 *
 * An end-to-end development suite for conversational interfaces (e.g.,
 * chatbots, voice-powered apps and devices).
 *
 * @example
 * const google = require('googleapis');
 * const dialogflow = google.dialogflow('v2beta1');
 *
 * @namespace dialogflow
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Dialogflow
 */
function Dialogflow(options) {
  const self = this;
  self._options = options || {};
  self.projects = {
    /**
     * dialogflow.projects.getAgent
     * @desc Retrieves the specified agent.
     * @alias dialogflow.projects.getAgent
     * @memberOf! dialogflow(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent Required. The project that the agent to fetch is associated with. Format: `projects/<Project ID>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getAgent(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{parent}/agent')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    },
    agent: {
      /**
       * dialogflow.projects.agent.export
       * @desc Exports the specified agent to a ZIP file.   Operation <response:
       * ExportAgentResponse,            metadata: google.protobuf.Struct>
       * @alias dialogflow.projects.agent.export
       * @memberOf! dialogflow(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent Required. The project that the agent to export is associated with. Format: `projects/<Project ID>`.
       * @param {dialogflow(v2beta1).ExportAgentRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      export(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/agent:export')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dialogflow.projects.agent.import
          * @desc Imports the specified agent from a ZIP file.  Uploads new
          * intents and entity types without deleting the existing ones. Intents
          * and entity types with the same name are replaced with the new
          * versions from ImportAgentRequest.   Operation <response:
          * google.protobuf.Empty,            metadata: google.protobuf.Struct>
          * @alias dialogflow.projects.agent.import
          * @memberOf! dialogflow(v2beta1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.parent Required. The project that the agent to import is associated with. Format: `projects/<Project ID>`.
          * @param {dialogflow(v2beta1).ImportAgentRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      import(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/agent:import')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dialogflow.projects.agent.restore
          * @desc Restores the specified agent from a ZIP file.  Replaces the
          * current agent version with a new one. All the intents and entity
          * types in the older version are deleted.   Operation <response:
          * google.protobuf.Empty,            metadata: google.protobuf.Struct>
          * @alias dialogflow.projects.agent.restore
          * @memberOf! dialogflow(v2beta1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.parent Required. The project that the agent to restore is associated with. Format: `projects/<Project ID>`.
          * @param {dialogflow(v2beta1).RestoreAgentRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      restore(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/agent:restore')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dialogflow.projects.agent.search
          * @desc Returns the list of agents.  Since there is at most one
          * conversational agent per project, this method is useful primarily
          * for listing all agents across projects the caller has access to. One
          * can achieve that with a wildcard project collection id "-". Refer to
          * [List
          * Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
          * @alias dialogflow.projects.agent.search
          * @memberOf! dialogflow(v2beta1)
          *
          * @param {object} params Parameters for request
          * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
          * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
          * @param {string} params.parent Required. The project to list agents from. Format: `projects/<Project ID or '-'>`.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      search(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/agent:search')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dialogflow.projects.agent.train
          * @desc Trains the specified agent.   Operation <response:
          * google.protobuf.Empty,            metadata: google.protobuf.Struct>
          * @alias dialogflow.projects.agent.train
          * @memberOf! dialogflow(v2beta1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.parent Required. The project that the agent to train is associated with. Format: `projects/<Project ID>`.
          * @param {dialogflow(v2beta1).TrainAgentRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      train(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta1/{parent}/agent:train')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      },
      entityTypes: {
        /**
         * dialogflow.projects.agent.entityTypes.batchDelete
         * @desc Deletes entity types in the specified agent.  Operation
         * <response: google.protobuf.Empty,            metadata:
         * google.protobuf.Struct>
         * @alias dialogflow.projects.agent.entityTypes.batchDelete
         * @memberOf! dialogflow(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent Required. The name of the agent to delete all entities types for. Format: `projects/<Project ID>/agent`.
         * @param {dialogflow(v2beta1).BatchDeleteEntityTypesRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchDelete(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://dialogflow.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{parent}/entityTypes:batchDelete')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * dialogflow.projects.agent.entityTypes.batchUpdate
            * @desc Updates/Creates multiple entity types in the specified
            * agent.  Operation <response: BatchUpdateEntityTypesResponse,
            * metadata: google.protobuf.Struct>
            * @alias dialogflow.projects.agent.entityTypes.batchUpdate
            * @memberOf! dialogflow(v2beta1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.parent Required. The name of the agent to update or create entity types in. Format: `projects/<Project ID>/agent`.
            * @param {dialogflow(v2beta1).BatchUpdateEntityTypesRequest} params.resource Request body data
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        batchUpdate(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://dialogflow.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{parent}/entityTypes:batchUpdate')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * dialogflow.projects.agent.entityTypes.create
            * @desc Creates an entity type in the specified agent.
            * @alias dialogflow.projects.agent.entityTypes.create
            * @memberOf! dialogflow(v2beta1)
            *
            * @param {object} params Parameters for request
            * @param {string=} params.languageCode Optional. The language of entity synonyms defined in `entity_type`. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
            * @param {string} params.parent Required. The agent to create a entity type for. Format: `projects/<Project ID>/agent`.
            * @param {dialogflow(v2beta1).EntityType} params.resource Request body data
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
          const rootUrl =
              options.rootUrl || 'https://dialogflow.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{parent}/entityTypes')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * dialogflow.projects.agent.entityTypes.delete
            * @desc Deletes the specified entity type.
            * @alias dialogflow.projects.agent.entityTypes.delete
            * @memberOf! dialogflow(v2beta1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.name Required. The name of the entity type to delete. Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
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
          const rootUrl =
              options.rootUrl || 'https://dialogflow.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{name}')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'DELETE'
                },
                options),
            params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * dialogflow.projects.agent.entityTypes.get
            * @desc Retrieves the specified entity type.
            * @alias dialogflow.projects.agent.entityTypes.get
            * @memberOf! dialogflow(v2beta1)
            *
            * @param {object} params Parameters for request
            * @param {string=} params.languageCode Optional. The language to retrieve entity synonyms for. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
            * @param {string} params.name Required. The name of the entity type. Format: `projects/<Project ID>/agent/entityTypes/<EntityType ID>`.
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
          const rootUrl =
              options.rootUrl || 'https://dialogflow.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{name}')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * dialogflow.projects.agent.entityTypes.list
            * @desc Returns the list of all entity types in the specified agent.
            * @alias dialogflow.projects.agent.entityTypes.list
            * @memberOf! dialogflow(v2beta1)
            *
            * @param {object} params Parameters for request
            * @param {string=} params.languageCode Optional. The language to list entity synonyms for. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
            * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
            * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
            * @param {string} params.parent Required. The agent to list all entity types from. Format: `projects/<Project ID>/agent`.
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
          const rootUrl =
              options.rootUrl || 'https://dialogflow.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{parent}/entityTypes')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * dialogflow.projects.agent.entityTypes.patch
            * @desc Updates the specified entity type.
            * @alias dialogflow.projects.agent.entityTypes.patch
            * @memberOf! dialogflow(v2beta1)
            *
            * @param {object} params Parameters for request
            * @param {string=} params.languageCode Optional. The language of entity synonyms defined in `entity_type`. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
            * @param {string} params.name Required for all methods except `create` (`create` populates the name automatically. The unique identifier of the entity type. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
            * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
            * @param {dialogflow(v2beta1).EntityType} params.resource Request body data
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        patch(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://dialogflow.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{name}')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'PATCH'
                },
                options),
            params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        },
        entities: {
          /**
           * dialogflow.projects.agent.entityTypes.entities.batchCreate
           * @desc Creates multiple new entities in the specified entity type
           * (extends the existing collection of entries).  Operation <response:
           * google.protobuf.Empty>
           * @alias dialogflow.projects.agent.entityTypes.entities.batchCreate
           * @memberOf! dialogflow(v2beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.parent Required. The name of the entity type to create entities in. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
           * @param {dialogflow(v2beta1).BatchCreateEntitiesRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          batchCreate(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://dialogflow.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/{parent}/entities:batchCreate')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                  },
                  options),
              params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * dialogflow.projects.agent.entityTypes.entities.batchDelete
              * @desc Deletes entities in the specified entity type.  Operation
              * <response: google.protobuf.Empty,            metadata:
              * google.protobuf.Struct>
              * @alias
              * dialogflow.projects.agent.entityTypes.entities.batchDelete
              * @memberOf! dialogflow(v2beta1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.parent Required. The name of the entity type to delete entries for. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
              * @param {dialogflow(v2beta1).BatchDeleteEntitiesRequest} params.resource Request body data
              * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
              * @param {callback} callback The callback that handles the response.
              * @return {object} Request object
              */
          batchDelete(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://dialogflow.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/{parent}/entities:batchDelete')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                  },
                  options),
              params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * dialogflow.projects.agent.entityTypes.entities.batchUpdate
              * @desc Updates entities in the specified entity type (replaces
              * the existing collection of entries).  Operation <response:
              * google.protobuf.Empty,            metadata:
              * google.protobuf.Struct>
              * @alias
              * dialogflow.projects.agent.entityTypes.entities.batchUpdate
              * @memberOf! dialogflow(v2beta1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.parent Required. The name of the entity type to update the entities in. Format: `projects/<Project ID>/agent/entityTypes/<Entity Type ID>`.
              * @param {dialogflow(v2beta1).BatchUpdateEntitiesRequest} params.resource Request body data
              * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
              * @param {callback} callback The callback that handles the response.
              * @return {object} Request object
              */
          batchUpdate(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://dialogflow.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/{parent}/entities:batchUpdate')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                  },
                  options),
              params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }

        }
      },
      intents: {
        /**
         * dialogflow.projects.agent.intents.batchDelete
         * @desc Deletes intents in the specified agent.  Operation <response:
         * google.protobuf.Empty>
         * @alias dialogflow.projects.agent.intents.batchDelete
         * @memberOf! dialogflow(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent Required. The name of the agent to delete all entities types for. Format: `projects/<Project ID>/agent`.
         * @param {dialogflow(v2beta1).BatchDeleteIntentsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        batchDelete(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://dialogflow.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{parent}/intents:batchDelete')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * dialogflow.projects.agent.intents.batchUpdate
            * @desc Updates/Creates multiple intents in the specified agent.
            * Operation <response: BatchUpdateIntentsResponse>
            * @alias dialogflow.projects.agent.intents.batchUpdate
            * @memberOf! dialogflow(v2beta1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.parent Required. The name of the agent to update or create intents in. Format: `projects/<Project ID>/agent`.
            * @param {dialogflow(v2beta1).BatchUpdateIntentsRequest} params.resource Request body data
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        batchUpdate(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://dialogflow.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{parent}/intents:batchUpdate')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * dialogflow.projects.agent.intents.create
            * @desc Creates an intent in the specified agent.
            * @alias dialogflow.projects.agent.intents.create
            * @memberOf! dialogflow(v2beta1)
            *
            * @param {object} params Parameters for request
            * @param {string=} params.intentView Optional. The resource view to apply to the returned intent.
            * @param {string=} params.languageCode Optional. The language of training phrases, parameters and rich messages defined in `intent`. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
            * @param {string} params.parent Required. The agent to create a intent for. Format: `projects/<Project ID>/agent`.
            * @param {dialogflow(v2beta1).Intent} params.resource Request body data
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
          const rootUrl =
              options.rootUrl || 'https://dialogflow.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{parent}/intents')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * dialogflow.projects.agent.intents.delete
            * @desc Deletes the specified intent.
            * @alias dialogflow.projects.agent.intents.delete
            * @memberOf! dialogflow(v2beta1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.name Required. The name of the intent to delete. Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
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
          const rootUrl =
              options.rootUrl || 'https://dialogflow.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{name}')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'DELETE'
                },
                options),
            params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * dialogflow.projects.agent.intents.get
            * @desc Retrieves the specified intent.
            * @alias dialogflow.projects.agent.intents.get
            * @memberOf! dialogflow(v2beta1)
            *
            * @param {object} params Parameters for request
            * @param {string=} params.intentView Optional. The resource view to apply to the returned intent.
            * @param {string=} params.languageCode Optional. The language to retrieve training phrases, parameters and rich messages for. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
            * @param {string} params.name Required. The name of the intent. Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
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
          const rootUrl =
              options.rootUrl || 'https://dialogflow.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{name}')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * dialogflow.projects.agent.intents.list
            * @desc Returns the list of all intents in the specified agent.
            * @alias dialogflow.projects.agent.intents.list
            * @memberOf! dialogflow(v2beta1)
            *
            * @param {object} params Parameters for request
            * @param {string=} params.intentView Optional. The resource view to apply to the returned intent.
            * @param {string=} params.languageCode Optional. The language to list training phrases, parameters and rich messages for. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
            * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
            * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
            * @param {string} params.parent Required. The agent to list all intents from. Format: `projects/<Project ID>/agent`.
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
          const rootUrl =
              options.rootUrl || 'https://dialogflow.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{parent}/intents')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * dialogflow.projects.agent.intents.patch
            * @desc Updates the specified intent.
            * @alias dialogflow.projects.agent.intents.patch
            * @memberOf! dialogflow(v2beta1)
            *
            * @param {object} params Parameters for request
            * @param {string=} params.intentView Optional. The resource view to apply to the returned intent.
            * @param {string=} params.languageCode Optional. The language of training phrases, parameters and rich messages defined in `intent`. If not specified, the agent's default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
            * @param {string} params.name Required for all methods except `create` (`create` populates the name automatically. The unique identifier of this intent. Format: `projects/<Project ID>/agent/intents/<Intent ID>`.
            * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
            * @param {dialogflow(v2beta1).Intent} params.resource Request body data
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        patch(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://dialogflow.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{name}')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'PATCH'
                },
                options),
            params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }

      },
      sessions: {
        /**
         * dialogflow.projects.agent.sessions.deleteContexts
         * @desc Deletes all active contexts in the specified session.
         * @alias dialogflow.projects.agent.sessions.deleteContexts
         * @memberOf! dialogflow(v2beta1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent Required. The name of the session to delete all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        deleteContexts(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://dialogflow.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{parent}/contexts')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'DELETE'
                },
                options),
            params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * dialogflow.projects.agent.sessions.detectIntent
            * @desc Processes a natural language query and returns structured,
            * actionable data as a result. This method is not idempotent,
            * because it may cause contexts and session entity types to be
            * updated, which in turn might affect results of future queries.
            * @alias dialogflow.projects.agent.sessions.detectIntent
            * @memberOf! dialogflow(v2beta1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.session Required. The name of the session this query is sent to. Format: `projects/<Project ID>/agent/sessions/<Session ID>`. It's up to the API caller to choose an appropriate session ID. It can be a random number or some type of user identifier (preferably hashed). The length of the session ID must not exceed 36 bytes.
            * @param {dialogflow(v2beta1).DetectIntentRequest} params.resource Request body data
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        detectIntent(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://dialogflow.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v2beta1/{session}:detectIntent')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['session'],
            pathParams: ['session'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        },
        contexts: {
          /**
           * dialogflow.projects.agent.sessions.contexts.create
           * @desc Creates a context.
           * @alias dialogflow.projects.agent.sessions.contexts.create
           * @memberOf! dialogflow(v2beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.parent Required. The session to create a context for. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
           * @param {dialogflow(v2beta1).Context} params.resource Request body data
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
            const rootUrl =
                options.rootUrl || 'https://dialogflow.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/{parent}/contexts')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                  },
                  options),
              params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * dialogflow.projects.agent.sessions.contexts.delete
              * @desc Deletes the specified context.
              * @alias dialogflow.projects.agent.sessions.contexts.delete
              * @memberOf! dialogflow(v2beta1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.name Required. The name of the context to delete. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`.
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
            const rootUrl =
                options.rootUrl || 'https://dialogflow.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/{name}')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                  },
                  options),
              params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * dialogflow.projects.agent.sessions.contexts.get
              * @desc Retrieves the specified context.
              * @alias dialogflow.projects.agent.sessions.contexts.get
              * @memberOf! dialogflow(v2beta1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.name Required. The name of the context. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`.
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
            const rootUrl =
                options.rootUrl || 'https://dialogflow.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/{name}')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * dialogflow.projects.agent.sessions.contexts.list
              * @desc Returns the list of all contexts in the specified session.
              * @alias dialogflow.projects.agent.sessions.contexts.list
              * @memberOf! dialogflow(v2beta1)
              *
              * @param {object} params Parameters for request
              * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
              * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
              * @param {string} params.parent Required. The session to list all contexts from. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
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
            const rootUrl =
                options.rootUrl || 'https://dialogflow.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/{parent}/contexts')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * dialogflow.projects.agent.sessions.contexts.patch
              * @desc Updates the specified context.
              * @alias dialogflow.projects.agent.sessions.contexts.patch
              * @memberOf! dialogflow(v2beta1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.name Required. The unique identifier of the context. Format: `projects/<Project ID>/agent/sessions/<Session ID>/contexts/<Context ID>`. Note: The Context ID is always converted to lowercase.
              * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
              * @param {dialogflow(v2beta1).Context} params.resource Request body data
              * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
              * @param {callback} callback The callback that handles the response.
              * @return {object} Request object
              */
          patch(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://dialogflow.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/{name}')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                  },
                  options),
              params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }

        },
        entityTypes: {
          /**
           * dialogflow.projects.agent.sessions.entityTypes.create
           * @desc Creates a session entity type.
           * @alias dialogflow.projects.agent.sessions.entityTypes.create
           * @memberOf! dialogflow(v2beta1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.parent Required. The session to create a session entity type for. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
           * @param {dialogflow(v2beta1).SessionEntityType} params.resource Request body data
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
            const rootUrl =
                options.rootUrl || 'https://dialogflow.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/{parent}/entityTypes')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                  },
                  options),
              params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * dialogflow.projects.agent.sessions.entityTypes.delete
              * @desc Deletes the specified session entity type.
              * @alias dialogflow.projects.agent.sessions.entityTypes.delete
              * @memberOf! dialogflow(v2beta1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.name Required. The name of the entity type to delete. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`.
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
            const rootUrl =
                options.rootUrl || 'https://dialogflow.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/{name}')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                  },
                  options),
              params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * dialogflow.projects.agent.sessions.entityTypes.get
              * @desc Retrieves the specified session entity type.
              * @alias dialogflow.projects.agent.sessions.entityTypes.get
              * @memberOf! dialogflow(v2beta1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.name Required. The name of the session entity type. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`.
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
            const rootUrl =
                options.rootUrl || 'https://dialogflow.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/{name}')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * dialogflow.projects.agent.sessions.entityTypes.list
              * @desc Returns the list of all session entity types in the
              * specified session.
              * @alias dialogflow.projects.agent.sessions.entityTypes.list
              * @memberOf! dialogflow(v2beta1)
              *
              * @param {object} params Parameters for request
              * @param {integer=} params.pageSize Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
              * @param {string=} params.pageToken Optional. The next_page_token value returned from a previous list request.
              * @param {string} params.parent Required. The session to list all session entity types from. Format: `projects/<Project ID>/agent/sessions/<Session ID>`.
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
            const rootUrl =
                options.rootUrl || 'https://dialogflow.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/{parent}/entityTypes')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * dialogflow.projects.agent.sessions.entityTypes.patch
              * @desc Updates the specified session entity type.
              * @alias dialogflow.projects.agent.sessions.entityTypes.patch
              * @memberOf! dialogflow(v2beta1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.name Required. The unique identifier of this session entity type. Format: `projects/<Project ID>/agent/sessions/<Session ID>/entityTypes/<Entity Type Display Name>`.
              * @param {string=} params.updateMask Optional. The mask to control which fields get updated.
              * @param {dialogflow(v2beta1).SessionEntityType} params.resource Request body data
              * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
              * @param {callback} callback The callback that handles the response.
              * @return {object} Request object
              */
          patch(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://dialogflow.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v2beta1/{name}')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                  },
                  options),
              params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }

        }
      }
    },
    operations: {
      /**
       * dialogflow.projects.operations.get
       * @desc Gets the latest state of a long-running operation.  Clients can
       * use this method to poll the operation result at intervals as
       * recommended by the API service.
       * @alias dialogflow.projects.operations.get
       * @memberOf! dialogflow(v2beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the operation resource.
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
        const rootUrl = options.rootUrl || 'https://dialogflow.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    }
  };
}
/**
 * @typedef Agent
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} avatarUri Optional. The URI of the agent&#39;s avatar. Avatars are used throughout API.AI console and in the self-hosted [Web Demo](https://dialogflow.com/docs/integrations/web-demo) integration.
 * @property {number} classificationThreshold Optional. To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. If the returned score value is less than the threshold value, then a fallback intent is be triggered or, if there are no fallback intents defined, no intent will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.
 * @property {string} defaultLanguageCode Required. The default language of the agent as a language tag. See [Language Support](https://dialogflow.com/docs/reference/language) for a list of the currently supported language codes. This field cannot be set by the `Update` method.
 * @property {string} description Optional. The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.
 * @property {string} displayName Required. The name of this agent.
 * @property {boolean} enableLogging Optional. Determines whether this agent should log conversation queries.
 * @property {string} matchMode Optional. Determines how intents are detected from user queries.
 * @property {string} parent Required. The project of this agent. Format: `projects/&lt;Project ID&gt;`.
 * @property {string[]} supportedLanguageCodes Optional. The list of all languages supported by this agent (except for the `default_language_code`).
 * @property {string} timeZone Required. The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.
 */
/**
 * @typedef BatchCreateEntitiesRequest
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).EntityTypeEntity[]} entities Required. The collection of entities to create.
 * @property {string} languageCode Optional. The language of entity synonyms defined in `entities`. If not specified, the agent&#39;s default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
 */
/**
 * @typedef BatchDeleteEntitiesRequest
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string[]} entityValues Required. The canonical `values` of the entities to delete. Note that these are not fully-qualified names, i.e. they don&#39;t start with `projects/&lt;Project ID&gt;`.
 * @property {string} languageCode Optional. The language of entity synonyms defined in `entities`. If not specified, the agent&#39;s default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
 */
/**
 * @typedef BatchDeleteEntityTypesRequest
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string[]} entityTypeNames Required. The names entity types to delete. All names must point to the same agent as `parent`.
 */
/**
 * @typedef BatchDeleteIntentsRequest
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).Intent[]} intents Required. The collection of intents to delete. Only intent `name` must be filled in.
 */
/**
 * @typedef BatchUpdateEntitiesRequest
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).EntityTypeEntity[]} entities Required. The collection of new entities to replace the existing entities.
 * @property {string} languageCode Optional. The language of entity synonyms defined in `entities`. If not specified, the agent&#39;s default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
 * @property {string} updateMask Optional. The mask to control which fields get updated.
 */
/**
 * @typedef BatchUpdateEntityTypesRequest
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).EntityTypeBatch} entityTypeBatchInline The collection of entity type to update or create.
 * @property {string} entityTypeBatchUri Warning: Importing entity types from a URI is not implemented yet. This feature is coming soon. The URI to a Google Cloud Storage file containing entity types to update or create. The file format can either be a serialized proto (of EntityBatch type) or a JSON object. Note: The URI must start with &quot;gs://&quot;.
 * @property {string} languageCode Optional. The language of entity synonyms defined in `entity_types`. If not specified, the agent&#39;s default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
 * @property {string} updateMask Optional. The mask to control which fields get updated.
 */
/**
 * @typedef BatchUpdateEntityTypesResponse
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).EntityType[]} entityTypes The collection of updated or created entity types.
 */
/**
 * @typedef BatchUpdateIntentsRequest
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).IntentBatch} intentBatchInline The collection of intents to update or create.
 * @property {string} intentBatchUri Warning: Importing intents from a URI is not implemented yet. This feature is coming soon. The URI to a Google Cloud Storage file containing intents to update or create. The file format can either be a serialized proto (of IntentBatch type) or JSON object. Note: The URI must start with &quot;gs://&quot;.
 * @property {string} intentView Optional. The resource view to apply to the returned intent.
 * @property {string} languageCode Optional. The language of training phrases, parameters and rich messages defined in `intents`. If not specified, the agent&#39;s default language is used. [More than a dozen languages](https://dialogflow.com/docs/reference/language) are supported. Note: languages must be enabled in the agent, before they can be used.
 * @property {string} updateMask Optional. The mask to control which fields get updated.
 */
/**
 * @typedef BatchUpdateIntentsResponse
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).Intent[]} intents The collection of updated or created intents.
 */
/**
 * @typedef Context
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {integer} lifespanCount Optional. The number of conversational query requests after which the context expires. If set to `0` (the default) the context expires immediately. Contexts expire automatically after 10 minutes even if there are no matching queries.
 * @property {string} name Required. The unique identifier of the context. Format: `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;/contexts/&lt;Context ID&gt;`. Note: The Context ID is always converted to lowercase.
 * @property {object} parameters Optional. The collection of parameters associated with this context. Refer to [this doc](https://dialogflow.com/docs/actions-and-parameters) for syntax.
 */
/**
 * @typedef DetectIntentRequest
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} inputAudio Optional. The natural language speech audio to be processed. This field should be populated iff `query_input` is set to an input audio config. A single request can contain up to 1 minute of speech audio data.
 * @property {dialogflow(v2beta1).QueryInput} queryInput Required. The input specification. It can be set to:  1.  an audio config     which instructs the speech recognizer how to process the speech audio,  2.  a conversational query in the form of text, or  3.  an event that specifies which intent to trigger.
 * @property {dialogflow(v2beta1).QueryParameters} queryParams Optional. The parameters of this query.
 */
/**
 * @typedef DetectIntentResponse
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).QueryResult} queryResult The results of the conversational query or event processing.
 * @property {string} responseId The unique identifier of the response. It can be used to locate a response in the training example set or for reporting issues.
 * @property {dialogflow(v2beta1).Status} webhookStatus Specifies the status of the webhook request. `webhook_status` is never populated in webhook requests.
 */
/**
 * @typedef Empty
 * @memberOf! dialogflow(v2beta1)
 * @type object
 */
/**
 * @typedef EntityType
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} autoExpansionMode Optional. Indicates whether the entity type can be automatically expanded.
 * @property {string} displayName Required. The name of the entity.
 * @property {dialogflow(v2beta1).EntityTypeEntity[]} entities Optional. The collection of entities associated with the entity type.
 * @property {string} kind Required. Indicates the kind of entity type.
 * @property {string} name Required for all methods except `create` (`create` populates the name automatically. The unique identifier of the entity type. Format: `projects/&lt;Project ID&gt;/agent/entityTypes/&lt;Entity Type ID&gt;`.
 */
/**
 * @typedef EntityTypeBatch
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).EntityType[]} entityTypes A collection of entity types.
 */
/**
 * @typedef EntityTypeEntity
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string[]} synonyms Required. A collection of synonyms. For `KIND_LIST` entity types this must contain exactly one synonym equal to `value`.
 * @property {string} value Required. For `KIND_MAP` entity types:   A canonical name to be used in place of synonyms. For `KIND_LIST` entity types:   A string that can contain references to other entity types (with or   without aliases).
 */
/**
 * @typedef EventInput
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} languageCode Required. The language of this query. See [Language Support](https://dialogflow.com/docs/languages) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
 * @property {string} name Required. The unique identifier of the event.
 * @property {object} parameters Optional. The collection of parameters associated with the event.
 */
/**
 * @typedef ExportAgentRequest
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} agentUri Warning: Exporting agents to a URI is not implemented yet. This feature is coming soon.  Optional. The Google Cloud Storage URI to export the agent to. Note: The URI must start with &quot;gs://&quot;. If left unspecified, the serialized agent is returned inline.
 */
/**
 * @typedef ExportAgentResponse
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} agentContent The exported agent.  Example for how to export an agent to a zip file via a command line:  curl \   &#39;https://dialogflow.googleapis.com/v2beta1/projects/&lt;project_name&gt;/agent:export&#39;\   -X POST \   -H &#39;Authorization: Bearer &#39;$(gcloud auth print-access-token) \   -H &#39;Accept: application/json&#39; \   -H &#39;Content-Type: application/json&#39; \   --compressed \   --data-binary &#39;{}&#39; \ | grep agentContent | sed -e &#39;s/.*&quot;agentContent&quot;: &quot;\([^&quot;]*\)&quot;.&ast;/\1 /&#39;\ |base64-- decode &gt; &lt;agent zip file&gt;
 * @property {string} agentUri The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in `ExportAgentRequest`.
 */
/**
 * @typedef ImportAgentRequest
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} agentContent The agent to import.
 * Example for how to import an agent via the command line:  curl \   &#39;
 * https://
 * dialogflow.googleapis.com/v2beta1/projects/&lt;project_name&gt;/agent:import\
 *        // -X POST \    -H &#39;Authorization: Bearer &#39;$(gcloud auth
 *        // print-access-token) \    -H &#39;Accept: application/json&#39; \
 *        // -H &#39;Content-Type: application/json&#39; \    --compressed \
 *        // --data-binary &quot;{       &#39;agentContent&#39;: &#39;$(cat
 *        // &lt;agent zip file&gt; | base64 -w 0)&#39;    }&quot;
 * @property{string} agentUri Warning: Importing agents from a URI is not implemented yet.This feature is coming soon.The URI to a Google Cloud Storage file containing the agent to import.Note: The URI must start with&quot;gs://&quot;.
 */
/**
 * @typedef InputAudioConfig
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} audioEncoding Required. Audio encoding of the audio content to process.
 * @property {string} languageCode Required. The language of the supplied audio. Dialogflow does not do translations. See [Language Support](https://dialogflow.com/docs/languages) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
 * @property {string[]} phraseHints Optional. The collection of phrase hints which are used to boost accuracy of speech recognition. Refer to [Cloud Speech API documentation](/speech/docs/basics#phrase-hints) for more details.
 * @property {integer} sampleRateHertz Required. Sample rate (in Hertz) of the audio content sent in the query. Refer to [Cloud Speech API documentation](/speech/docs/basics) for more details.
 */
/**
 * @typedef Intent
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} action Optional. The name of the action associated with the intent.
 * @property {string[]} defaultResponsePlatforms Optional. The list of platforms for which the first response will be taken from among the messages assigned to the DEFAULT_PLATFORM.
 * @property {string} displayName Required. The name of this intent.
 * @property {string[]} events Optional. The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of the contexts must be present in the active user session for an event to trigger this intent.
 * @property {dialogflow(v2beta1).IntentFollowupIntentInfo[]} followupIntentInfo Optional. Collection of information about all followup intents that have name of this intent as a root_name.
 * @property {string[]} inputContextNames Optional. The list of context names required for this intent to be triggered. Format: `projects/&lt;Project ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
 * @property {boolean} isFallback Optional. Indicates whether this is a fallback intent.
 * @property {dialogflow(v2beta1).IntentMessage[]} messages Optional. The collection of rich messages corresponding to the `Response` field in API.AI console.
 * @property {boolean} mlEnabled Optional. Indicates whether Machine Learning is enabled for the intent. Note: If `ml_enabled` setting is set to false, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off.
 * @property {string} name Required for all methods except `create` (`create` populates the name automatically. The unique identifier of this intent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
 * @property {dialogflow(v2beta1).Context[]} outputContexts Optional. The collection of contexts that are activated when the intent is matched. Context messages in this collection should not set the parameters field. Setting the `lifespan_count` to 0 will reset the context when the intent is matched. Format: `projects/&lt;Project ID&gt;/agent/sessions/-/contexts/&lt;Context ID&gt;`.
 * @property {dialogflow(v2beta1).IntentParameter[]} parameters Optional. The collection of parameters associated with the intent.
 * @property {string} parentFollowupIntentName The unique identifier of the parent intent in the chain of followup intents. It identifies the parent followup intent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
 * @property {integer} priority Optional. The priority of this intent. Higher numbers represent higher priorities. Zero or negative numbers mean that the intent is disabled.
 * @property {boolean} resetContexts Optional. Indicates whether to delete all contexts in the current session when this intent is matched.
 * @property {string} rootFollowupIntentName The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup intents chain for this intent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
 * @property {dialogflow(v2beta1).IntentTrainingPhrase[]} trainingPhrases Optional. The collection of examples/templates that the agent is trained on.
 * @property {string} webhookState Required. Indicates whether webhooks are enabled for the intent.
 */
/**
 * @typedef IntentBatch
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).Intent[]} intents A collection of intents.
 */
/**
 * @typedef IntentFollowupIntentInfo
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} followupIntentName The unique identifier of the followup intent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
 * @property {string} parentFollowupIntentName The unique identifier of the followup intent parent. Format: `projects/&lt;Project ID&gt;/agent/intents/&lt;Intent ID&gt;`.
 */
/**
 * @typedef IntentMessage
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).IntentMessageBasicCard} basicCard The basic card response for Actions on Google.
 * @property {dialogflow(v2beta1).IntentMessageCard} card The card response.
 * @property {dialogflow(v2beta1).IntentMessageCarouselSelect} carouselSelect The carousel card response for Actions on Google.
 * @property {dialogflow(v2beta1).IntentMessageImage} image The image response.
 * @property {dialogflow(v2beta1).IntentMessageLinkOutSuggestion} linkOutSuggestion The link out suggestion chip for Actions on Google.
 * @property {dialogflow(v2beta1).IntentMessageListSelect} listSelect The list card response for Actions on Google.
 * @property {object} payload The response containing a custom payload.
 * @property {string} platform Optional. The platform that this message is intended for.
 * @property {dialogflow(v2beta1).IntentMessageQuickReplies} quickReplies The quick replies response.
 * @property {dialogflow(v2beta1).IntentMessageSimpleResponses} simpleResponses The voice and text-only responses for Actions on Google.
 * @property {dialogflow(v2beta1).IntentMessageSuggestions} suggestions The suggestion chips for Actions on Google.
 * @property {dialogflow(v2beta1).IntentMessageText} text The text response.
 */
/**
 * @typedef IntentMessageBasicCard
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).IntentMessageBasicCardButton[]} buttons Optional. The collection of card buttons.
 * @property {string} formattedText Required, unless image is present. The body text of the card.
 * @property {dialogflow(v2beta1).IntentMessageImage} image Optional. The image for the card.
 * @property {string} subtitle Optional. The subtitle of the card.
 * @property {string} title Optional. The title of the card.
 */
/**
 * @typedef IntentMessageBasicCardButton
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).IntentMessageBasicCardButtonOpenUriAction} openUriAction Required. Action to take when a user taps on the button.
 * @property {string} title Required. The title of the button.
 */
/**
 * @typedef IntentMessageBasicCardButtonOpenUriAction
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} uri Required. The HTTP or HTTPS scheme URI.
 */
/**
 * @typedef IntentMessageCard
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).IntentMessageCardButton[]} buttons Optional. The collection of card buttons.
 * @property {string} imageUri Optional. The public URI to an image file for the card.
 * @property {string} subtitle Optional. The subtitle of the card.
 * @property {string} title Optional. The title of the card.
 */
/**
 * @typedef IntentMessageCardButton
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} postback Optional. The text to send back to the Dialogflow API or a URI to open.
 * @property {string} text Optional. The text to show on the button.
 */
/**
 * @typedef IntentMessageCarouselSelect
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).IntentMessageCarouselSelectItem[]} items Required. Carousel items.
 */
/**
 * @typedef IntentMessageCarouselSelectItem
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} description Optional. The body text of the card.
 * @property {dialogflow(v2beta1).IntentMessageImage} image Optional. The image to display.
 * @property {dialogflow(v2beta1).IntentMessageSelectItemInfo} info Required. Additional info about the option item.
 * @property {string} title Required. Title of the carousel item.
 */
/**
 * @typedef IntentMessageImage
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} accessibilityText Optional. A text description of the image to be used for accessibility, e.g., screen readers.
 * @property {string} imageUri Optional. The public URI to an image file.
 */
/**
 * @typedef IntentMessageLinkOutSuggestion
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} destinationName Required. The name of the app or site this chip is linking to.
 * @property {string} uri Required. The URI of the app or site to open when the user taps the suggestion chip.
 */
/**
 * @typedef IntentMessageListSelect
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).IntentMessageListSelectItem[]} items Required. List items.
 * @property {string} title Optional. The overall title of the list.
 */
/**
 * @typedef IntentMessageListSelectItem
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} description Optional. The main text describing the item.
 * @property {dialogflow(v2beta1).IntentMessageImage} image Optional. The image to display.
 * @property {dialogflow(v2beta1).IntentMessageSelectItemInfo} info Required. Additional information about this option.
 * @property {string} title Required. The title of the list item.
 */
/**
 * @typedef IntentMessageQuickReplies
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string[]} quickReplies Optional. The collection of quick replies.
 * @property {string} title Optional. The title of the collection of quick replies.
 */
/**
 * @typedef IntentMessageSelectItemInfo
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} key Required. A unique key that will be sent back to the agent if this response is given.
 * @property {string[]} synonyms Optional. A list of synonyms that can also be used to trigger this item in dialog.
 */
/**
 * @typedef IntentMessageSimpleResponse
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} displayText Optional. The text to display.
 * @property {string} ssml One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech.
 * @property {string} textToSpeech One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml.
 */
/**
 * @typedef IntentMessageSimpleResponses
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).IntentMessageSimpleResponse[]} simpleResponses Required. The list of simple responses.
 */
/**
 * @typedef IntentMessageSuggestion
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} title Required. The text shown the in the suggestion chip.
 */
/**
 * @typedef IntentMessageSuggestions
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).IntentMessageSuggestion[]} suggestions Required. The list of suggested replies.
 */
/**
 * @typedef IntentMessageText
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string[]} text Optional. The collection of the agent&#39;s responses.
 */
/**
 * @typedef IntentParameter
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} defaultValue Optional. The default value to use when the `value` yields an empty result. Default values can be extracted from contexts by using the following syntax: `#context_name.parameter_name`.
 * @property {string} displayName Required. The name of the parameter.
 * @property {string} entityTypeDisplayName Optional. The name of the entity type, prefixed with `@`, that describes values of the parameter. If the parameter is required, this must be provided.
 * @property {boolean} isList Optional. Indicates whether the parameter represents a list of values.
 * @property {boolean} mandatory Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value.
 * @property {string} name The unique identifier of this parameter.
 * @property {string[]} prompts Optional. The collection of prompts that the agent can present to the user in order to collect value for the parameter.
 * @property {string} value Optional. The definition of the parameter value. It can be: - a constant string, - a parameter value defined as `$parameter_name`, - an original parameter value defined as `$parameter_name.original`, - a parameter value from some context defined as   `#context_name.parameter_name`.
 */
/**
 * @typedef IntentTrainingPhrase
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} name Required. The unique identifier of this training phrase.
 * @property {dialogflow(v2beta1).IntentTrainingPhrasePart[]} parts Required. The collection of training phrase parts (can be annotated). Fields: `entity_type`, `alias` and `user_defined` should be populated only for the annotated parts of the training phrase.
 * @property {integer} timesAddedCount Optional. Indicates how many times this example or template was added to the intent. Each time a developer adds an existing sample by editing an intent or training, this counter is increased.
 * @property {string} type Required. The type of the training phrase.
 */
/**
 * @typedef IntentTrainingPhrasePart
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} alias Optional. The parameter name for the value extracted from the annotated part of the example.
 * @property {string} entityType Optional. The entity type name prefixed with `@`. This field is required for the annotated part of the text and applies only to examples.
 * @property {string} text Required. The text corresponding to the example or template, if there are no annotations. For annotated examples, it is the text for one of the example&#39;s parts.
 * @property {boolean} userDefined Optional. Indicates whether the text was manually annotated by the developer.
 */
/**
 * @typedef LatLng
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {number} latitude The latitude in degrees. It must be in the range [-90.0, +90.0].
 * @property {number} longitude The longitude in degrees. It must be in the range [-180.0, +180.0].
 */
/**
 * @typedef ListContextsResponse
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).Context[]} contexts The list of contexts. There will be a maximum number of items returned based on the page_size field in the request.
 * @property {string} nextPageToken Token to retrieve the next page of results, or empty if there are no more results in the list.
 */
/**
 * @typedef ListEntityTypesResponse
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).EntityType[]} entityTypes The list of agent entity types. There will be a maximum number of items returned based on the page_size field in the request.
 * @property {string} nextPageToken Token to retrieve the next page of results, or empty if there are no more results in the list.
 */
/**
 * @typedef ListIntentsResponse
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).Intent[]} intents The list of agent intents. There will be a maximum number of items returned based on the page_size field in the request.
 * @property {string} nextPageToken Token to retrieve the next page of results, or empty if there are no more results in the list.
 */
/**
 * @typedef ListSessionEntityTypesResponse
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} nextPageToken Token to retrieve the next page of results, or empty if there are no more results in the list.
 * @property {dialogflow(v2beta1).SessionEntityType[]} sessionEntityTypes The list of session entity types. There will be a maximum number of items returned based on the page_size field in the request.
 */
/**
 * @typedef Operation
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {boolean} done If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
 * @property {dialogflow(v2beta1).Status} error The error result of the operation in case of failure or cancellation.
 * @property {object} metadata Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
 * @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should have the format of `operations/some/unique/name`.
 * @property {object} response The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
 */
/**
 * @typedef OriginalDetectIntentRequest
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {object} payload Optional. This field is set to the value of `QueryParameters.payload` field passed in the request.
 * @property {string} source The source of this request, e.g., `google`, `facebook`, `slack`. It is set by Dialogflow-owned servers. Possible values of this field correspond to Intent.Message.Platform.
 */
/**
 * @typedef QueryInput
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).InputAudioConfig} audioConfig Instructs the speech recognizer how to process the speech audio.
 * @property {dialogflow(v2beta1).EventInput} event The event to be processed.
 * @property {dialogflow(v2beta1).TextInput} text The natural language text to be processed.
 */
/**
 * @typedef QueryParameters
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).Context[]} contexts Optional. The collection of contexts to be activated before this query is executed.
 * @property {dialogflow(v2beta1).LatLng} geoLocation Optional. The geo location of this conversational query.
 * @property {object} payload Optional. This field can be used to pass custom data into the webhook associated with the agent. Arbitrary JSON objects are supported.
 * @property {boolean} resetContexts Optional. Specifies whether to delete all contexts in the current session before the new ones are activated.
 * @property {dialogflow(v2beta1).SessionEntityType[]} sessionEntityTypes Optional. The collection of session entity types to replace or extend developer entities with for this query only. The entity synonyms apply to all languages.
 * @property {string} timeZone Optional. The time zone of this conversational query from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. If not provided, the time zone specified in agent settings is used.
 */
/**
 * @typedef QueryResult
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} action The action name from the matched intent.
 * @property {boolean} allRequiredParamsPresent This field is set to: - `false` if the matched intent has required parameters and not all of    the required parameter values have been collected. - `true` if all required parameter values have been collected, or if the    matched intent doesn&#39;t contain any required parameters.
 * @property {object} diagnosticInfo The free-form diagnostic info. For example, this field could contain webhook call latency.
 * @property {dialogflow(v2beta1).IntentMessage[]} fulfillmentMessages The collection of rich messages to present to the user.
 * @property {string} fulfillmentText The text to be pronounced to the user or shown on the screen.
 * @property {dialogflow(v2beta1).Intent} intent The intent that matched the conversational query. Some, not all fields are filled in this message, including but not limited to: `name`, `display_name` and `webhook_state`.
 * @property {number} intentDetectionConfidence The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain).
 * @property {string} languageCode The language that was triggered during intent detection. See [Language Support](https://dialogflow.com/docs/reference/language) for a list of the currently supported language codes.
 * @property {dialogflow(v2beta1).Context[]} outputContexts The collection of output contexts. If applicable, `output_contexts.parameters` contains entries with name `&lt;parameter name&gt;.original` containing the original parameter values before the query.
 * @property {object} parameters The collection of extracted parameters.
 * @property {string} queryText The original conversational query text: - If natural language text was provided as input, `query_text` contains   a copy of the input. - If natural language speech audio was provided as input, `query_text`   contains the speech recognition result. If speech recognizer produced   multiple alternatives, a particular one is picked. - If an event was provided as input, `query_text` is not set.
 * @property {number} speechRecognitionConfidence The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. The default of 0.0 is a sentinel value indicating that confidence was not set. This field is populated if natural speech audio was provided as input.
 * @property {object} webhookPayload If the query was fulfilled by a webhook call, this field is set to the value of the `payload` field returned in the webhook response.
 * @property {string} webhookSource If the query was fulfilled by a webhook call, this field is set to the value of the `source` field returned in the webhook response.
 */
/**
 * @typedef RestoreAgentRequest
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} agentContent The agent to restore.  Example for how to restore an agent via the command line:  curl \   &#39;https://dialogflow.googleapis.com/v2beta1/projects/&lt;project_name&gt;/agent:restore\    -X POST \    -H &#39;Authorization: Bearer &#39;$(gcloud auth print-access-token) \    -H &#39;Accept: application/json&#39; \    -H &#39;Content-Type: application/json&#39; \    --compressed \    --data-binary &quot;{        &#39;agentContent&#39;: &#39;$(cat &lt;agent zip file&gt; | base64 -w 0)&#39;    }&quot; \
 * @property {string} agentUri Warning: Restoring agents from a URI is not implemented yet. This feature is coming soon.  The URI to a Google Cloud Storage file containing the agent to restore. Note: The URI must start with &quot;gs://&quot;.
 */
/**
 * @typedef SearchAgentsResponse
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).Agent[]} agents The list of agents. There will be a maximum number of items returned based on the page_size field in the request.
 * @property {string} nextPageToken Token to retrieve the next page of results, or empty if there are no more results in the list.
 */
/**
 * @typedef SessionEntityType
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).EntityTypeEntity[]} entities Required. The collection of entities associated with this session entity type.
 * @property {string} entityOverrideMode Required. Indicates whether the additional data should override or supplement the developer entity type definition.
 * @property {string} name Required. The unique identifier of this session entity type. Format: `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;/entityTypes/&lt;Entity Type Display Name&gt;`.
 */
/**
 * @typedef Status
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {object[]} details A list of messages that carry the error details.  There is a common set of message types for APIs to use.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 */
/**
 * @typedef TextInput
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {string} languageCode Required. The language of this conversational query. See [Language Support](https://dialogflow.com/docs/languages) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
 * @property {string} text Required. The UTF-8 encoded natural language text to be processed. Text length must not exceed 256 bytes.
 */
/**
 * @typedef TrainAgentRequest
 * @memberOf! dialogflow(v2beta1)
 * @type object
 */
/**
 * @typedef WebhookRequest
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).OriginalDetectIntentRequest} originalDetectIntentRequest Optional. The contents of the original request that was passed to `[Streaming]DetectIntent` call.
 * @property {dialogflow(v2beta1).QueryResult} queryResult The result of the conversational query or event processing. Contains the same value as `[Streaming]DetectIntentResponse.query_result`.
 * @property {string} responseId The unique identifier of the response. Contains the same value as `[Streaming]DetectIntentResponse.response_id`.
 * @property {string} session The unique identifier of detectIntent request session. Can be used to identify end-user inside webhook implementation. Format: `projects/&lt;Project ID&gt;/agent/sessions/&lt;Session ID&gt;`.
 */
/**
 * @typedef WebhookResponse
 * @memberOf! dialogflow(v2beta1)
 * @type object
 * @property {dialogflow(v2beta1).EventInput} followupEventInput Optional. Makes the platform immediately invoke another `DetectIntent` call internally with the specified event as input.
 * @property {dialogflow(v2beta1).IntentMessage[]} fulfillmentMessages Optional. The collection of rich messages to present to the user. This value is passed directly to `QueryResult.fulfillment_messages`.
 * @property {string} fulfillmentText Optional. The text to be shown on the screen. This value is passed directly to `QueryResult.fulfillment_text`.
 * @property {dialogflow(v2beta1).Context[]} outputContexts Optional. The collection of output contexts. This value is passed directly to `QueryResult.output_contexts`.
 * @property {object} payload Optional. This value is passed directly to `QueryResult.webhook_payload`.
 * @property {string} source Optional. This value is passed directly to `QueryResult.webhook_source`.
 */

export = Dialogflow;
