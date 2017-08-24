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
 * Cloud Spanner API
 *
 * Cloud Spanner is a managed, mission-critical, globally consistent and scalable relational database service.
 *
 * @example
 * const google = require('googleapis');
 * const spanner = google.spanner('v1');
 *
 * @namespace spanner
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Spanner
 */
function Spanner(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.projects = {
    instanceConfigs: {

      /**
       * spanner.projects.instanceConfigs.get
       *
       * @desc Gets information about a particular instance configuration.
       *
       * @alias spanner.projects.instanceConfigs.get
       * @memberOf! spanner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Required. The name of the requested instance configuration. Values are of the form `projects/<project>/instanceConfigs/<config>`.
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

        const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

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
       * spanner.projects.instanceConfigs.list
       *
       * @desc Lists the supported instance configurations for a given project.
       *
       * @alias spanner.projects.instanceConfigs.list
       * @memberOf! spanner(v1)
       *
       * @param {object} params Parameters for request
       * @param {integer=} params.pageSize Number of instance configurations to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
       * @param {string=} params.pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListInstanceConfigsResponse.
       * @param {string} params.parent Required. The name of the project for which a list of supported instance configurations is requested. Values are of the form `projects/<project>`.
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

        const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}/instanceConfigs').replace(/([^:]\/)\/+/g, '$1'),
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
    instances: {

      /**
       * spanner.projects.instances.create
       *
       * @desc Creates an instance and begins preparing it to begin serving. The returned long-running operation can be used to track the progress of preparing the new instance. The instance name is assigned by the caller. If the named instance already exists, `CreateInstance` returns `ALREADY_EXISTS`.  Immediately upon completion of this request:    * The instance is readable via the API, with all requested attributes     but no allocated resources. Its state is `CREATING`.  Until completion of the returned operation:    * Cancelling the operation renders the instance immediately unreadable     via the API.   * The instance can be deleted.   * All other attempts to modify the instance are rejected.  Upon completion of the returned operation:    * Billing for all successfully-allocated resources begins (some types     may have lower than the requested levels).   * Databases can be created in the instance.   * The instance's allocated resource levels are readable via the API.   * The instance's state becomes `READY`.  The returned long-running operation will have a name of the format `<instance_name>/operations/<operation_id>` and can be used to track creation of the instance.  The metadata field type is CreateInstanceMetadata. The response field type is Instance, if successful.
       *
       * @alias spanner.projects.instances.create
       * @memberOf! spanner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent Required. The name of the project in which to create the instance. Values are of the form `projects/<project>`.
       * @param {spanner(v1).CreateInstanceRequest} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}/instances').replace(/([^:]\/)\/+/g, '$1'),
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
       * spanner.projects.instances.delete
       *
       * @desc Deletes an instance.  Immediately upon completion of the request:    * Billing ceases for all of the instance's reserved resources.  Soon afterward:    * The instance and *all of its databases* immediately and     irrevocably disappear from the API. All data in the databases     is permanently deleted.
       *
       * @alias spanner.projects.instances.delete
       * @memberOf! spanner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Required. The name of the instance to be deleted. Values are of the form `projects/<project>/instances/<instance>`
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

        const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

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
       * spanner.projects.instances.get
       *
       * @desc Gets information about a particular instance.
       *
       * @alias spanner.projects.instances.get
       * @memberOf! spanner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Required. The name of the requested instance. Values are of the form `projects/<project>/instances/<instance>`.
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

        const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

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
       * spanner.projects.instances.getIamPolicy
       *
       * @desc Gets the access control policy for an instance resource. Returns an empty policy if an instance exists but does not have a policy set.  Authorization requires `spanner.instances.getIamPolicy` on resource.
       *
       * @alias spanner.projects.instances.getIamPolicy
       * @memberOf! spanner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
       * @param {spanner(v1).GetIamPolicyRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      getIamPolicy: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * spanner.projects.instances.list
       *
       * @desc Lists all instances in the given project.
       *
       * @alias spanner.projects.instances.list
       * @memberOf! spanner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.filter An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are:    * name   * display_name   * labels.key where key is the name of a label  Some examples of using filters are:    * name:* --> The instance has a name.   * name:Howl --> The instance's name contains the string "howl".   * name:HOWL --> Equivalent to above.   * NAME:howl --> Equivalent to above.   * labels.env:* --> The instance has the label "env".   * labels.env:dev --> The instance has the label "env" and the value of                        the label contains the string "dev".   * name:howl labels.env:dev --> The instance's name contains "howl" and                                  it has the label "env" with its value                                  containing "dev".
       * @param {integer=} params.pageSize Number of instances to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
       * @param {string=} params.pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListInstancesResponse.
       * @param {string} params.parent Required. The name of the project for which a list of instances is requested. Values are of the form `projects/<project>`.
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

        const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}/instances').replace(/([^:]\/)\/+/g, '$1'),
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
       * spanner.projects.instances.patch
       *
       * @desc Updates an instance, and begins allocating or releasing resources as requested. The returned long-running operation can be used to track the progress of updating the instance. If the named instance does not exist, returns `NOT_FOUND`.  Immediately upon completion of this request:    * For resource types for which a decrease in the instance's allocation     has been requested, billing is based on the newly-requested level.  Until completion of the returned operation:    * Cancelling the operation sets its metadata's     cancel_time, and begins     restoring resources to their pre-request values. The operation     is guaranteed to succeed at undoing all resource changes,     after which point it terminates with a `CANCELLED` status.   * All other attempts to modify the instance are rejected.   * Reading the instance via the API continues to give the pre-request     resource levels.  Upon completion of the returned operation:    * Billing begins for all successfully-allocated resources (some types     may have lower than the requested levels).   * All newly-reserved resources are available for serving the instance's     tables.   * The instance's new resource levels are readable via the API.  The returned long-running operation will have a name of the format `<instance_name>/operations/<operation_id>` and can be used to track the instance modification.  The metadata field type is UpdateInstanceMetadata. The response field type is Instance, if successful.  Authorization requires `spanner.instances.update` permission on resource name.
       *
       * @alias spanner.projects.instances.patch
       * @memberOf! spanner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects/<project>/instances/a-z*[a-z0-9]`. The final segment of the name must be between 6 and 30 characters in length.
       * @param {spanner(v1).UpdateInstanceRequest} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

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
       * spanner.projects.instances.setIamPolicy
       *
       * @desc Sets the access control policy on an instance resource. Replaces any existing policy.  Authorization requires `spanner.instances.setIamPolicy` on resource.
       *
       * @alias spanner.projects.instances.setIamPolicy
       * @memberOf! spanner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for databases resources.
       * @param {spanner(v1).SetIamPolicyRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      setIamPolicy: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * spanner.projects.instances.testIamPermissions
       *
       * @desc Returns permissions that the caller has on the specified instance resource.  Attempting this RPC on a non-existent Cloud Spanner instance resource will result in a NOT_FOUND error if the user has `spanner.instances.list` permission on the containing Google Cloud Project. Otherwise returns an empty set of permissions.
       *
       * @alias spanner.projects.instances.testIamPermissions
       * @memberOf! spanner(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
       * @param {spanner(v1).TestIamPermissionsRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      testIamPermissions: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },
      databases: {

        /**
         * spanner.projects.instances.databases.create
         *
         * @desc Creates a new Cloud Spanner database and starts to prepare it for serving. The returned long-running operation will have a name of the format `<database_name>/operations/<operation_id>` and can be used to track preparation of the database. The metadata field type is CreateDatabaseMetadata. The response field type is Database, if successful.
         *
         * @alias spanner.projects.instances.databases.create
         * @memberOf! spanner(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent Required. The name of the instance that will serve the new database. Values are of the form `projects/<project>/instances/<instance>`.
         * @param {spanner(v1).CreateDatabaseRequest} params.resource Request body data
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

          const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{parent}/databases').replace(/([^:]\/)\/+/g, '$1'),
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
         * spanner.projects.instances.databases.dropDatabase
         *
         * @desc Drops (aka deletes) a Cloud Spanner database.
         *
         * @alias spanner.projects.instances.databases.dropDatabase
         * @memberOf! spanner(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.database Required. The database to be dropped.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        dropDatabase: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{database}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            }, options),
            params: params,
            requiredParams: ['database'],
            pathParams: ['database'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * spanner.projects.instances.databases.get
         *
         * @desc Gets the state of a Cloud Spanner database.
         *
         * @alias spanner.projects.instances.databases.get
         * @memberOf! spanner(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Required. The name of the requested database. Values are of the form `projects/<project>/instances/<instance>/databases/<database>`.
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

          const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

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
         * spanner.projects.instances.databases.getDdl
         *
         * @desc Returns the schema of a Cloud Spanner database as a list of formatted DDL statements. This method does not show pending schema updates, those may be queried using the Operations API.
         *
         * @alias spanner.projects.instances.databases.getDdl
         * @memberOf! spanner(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.database Required. The database whose schema we wish to get.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getDdl: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{database}/ddl').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['database'],
            pathParams: ['database'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * spanner.projects.instances.databases.getIamPolicy
         *
         * @desc Gets the access control policy for a database resource. Returns an empty policy if a database exists but does not have a policy set.  Authorization requires `spanner.databases.getIamPolicy` permission on resource.
         *
         * @alias spanner.projects.instances.databases.getIamPolicy
         * @memberOf! spanner(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
         * @param {spanner(v1).GetIamPolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getIamPolicy: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['resource'],
            pathParams: ['resource'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * spanner.projects.instances.databases.list
         *
         * @desc Lists Cloud Spanner databases.
         *
         * @alias spanner.projects.instances.databases.list
         * @memberOf! spanner(v1)
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize Number of databases to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
         * @param {string=} params.pageToken If non-empty, `page_token` should contain a next_page_token from a previous ListDatabasesResponse.
         * @param {string} params.parent Required. The instance whose databases should be listed. Values are of the form `projects/<project>/instances/<instance>`.
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

          const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{parent}/databases').replace(/([^:]\/)\/+/g, '$1'),
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
         * spanner.projects.instances.databases.setIamPolicy
         *
         * @desc Sets the access control policy on a database resource. Replaces any existing policy.  Authorization requires `spanner.databases.setIamPolicy` permission on resource.
         *
         * @alias spanner.projects.instances.databases.setIamPolicy
         * @memberOf! spanner(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for databases resources.
         * @param {spanner(v1).SetIamPolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setIamPolicy: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['resource'],
            pathParams: ['resource'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * spanner.projects.instances.databases.testIamPermissions
         *
         * @desc Returns permissions that the caller has on the specified database resource.  Attempting this RPC on a non-existent Cloud Spanner database will result in a NOT_FOUND error if the user has `spanner.databases.list` permission on the containing Cloud Spanner instance. Otherwise returns an empty set of permissions.
         *
         * @alias spanner.projects.instances.databases.testIamPermissions
         * @memberOf! spanner(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects/<project ID>/instances/<instance ID>` for instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
         * @param {spanner(v1).TestIamPermissionsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        testIamPermissions: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['resource'],
            pathParams: ['resource'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * spanner.projects.instances.databases.updateDdl
         *
         * @desc Updates the schema of a Cloud Spanner database by creating/altering/dropping tables, columns, indexes, etc. The returned long-running operation will have a name of the format `<database_name>/operations/<operation_id>` and can be used to track execution of the schema change(s). The metadata field type is UpdateDatabaseDdlMetadata.  The operation has no response.
         *
         * @alias spanner.projects.instances.databases.updateDdl
         * @memberOf! spanner(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.database Required. The database to update.
         * @param {spanner(v1).UpdateDatabaseDdlRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateDdl: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{database}/ddl').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            }, options),
            params: params,
            requiredParams: ['database'],
            pathParams: ['database'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },
        operations: {

          /**
           * spanner.projects.instances.databases.operations.cancel
           *
           * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
           *
           * @alias spanner.projects.instances.databases.operations.cancel
           * @memberOf! spanner(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name The name of the operation resource to be cancelled.
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

            const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1/{name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
           * spanner.projects.instances.databases.operations.delete
           *
           * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
           *
           * @alias spanner.projects.instances.databases.operations.delete
           * @memberOf! spanner(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name The name of the operation resource to be deleted.
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

            const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

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
           * spanner.projects.instances.databases.operations.get
           *
           * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
           *
           * @alias spanner.projects.instances.databases.operations.get
           * @memberOf! spanner(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name The name of the operation resource.
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

            const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

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
           * spanner.projects.instances.databases.operations.list
           *
           * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
           *
           * @alias spanner.projects.instances.databases.operations.list
           * @memberOf! spanner(v1)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.filter The standard list filter.
           * @param {string} params.name The name of the operation's parent resource.
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

            const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

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
          }
        },
        sessions: {

          /**
           * spanner.projects.instances.databases.sessions.beginTransaction
           *
           * @desc Begins a new transaction. This step can often be skipped: Read, ExecuteSql and Commit can begin a new transaction as a side-effect.
           *
           * @alias spanner.projects.instances.databases.sessions.beginTransaction
           * @memberOf! spanner(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.session Required. The session in which the transaction runs.
           * @param {spanner(v1).BeginTransactionRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          beginTransaction: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1/{session}:beginTransaction').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['session'],
              pathParams: ['session'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * spanner.projects.instances.databases.sessions.commit
           *
           * @desc Commits a transaction. The request includes the mutations to be applied to rows in the database.  `Commit` might return an `ABORTED` error. This can occur at any time; commonly, the cause is conflicts with concurrent transactions. However, it can also happen for a variety of other reasons. If `Commit` returns `ABORTED`, the caller should re-attempt the transaction from the beginning, re-using the same session.
           *
           * @alias spanner.projects.instances.databases.sessions.commit
           * @memberOf! spanner(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.session Required. The session in which the transaction to be committed is running.
           * @param {spanner(v1).CommitRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          commit: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1/{session}:commit').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['session'],
              pathParams: ['session'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * spanner.projects.instances.databases.sessions.create
           *
           * @desc Creates a new session. A session can be used to perform transactions that read and/or modify data in a Cloud Spanner database. Sessions are meant to be reused for many consecutive transactions.  Sessions can only execute one transaction at a time. To execute multiple concurrent read-write/write-only transactions, create multiple sessions. Note that standalone reads and queries use a transaction internally, and count toward the one transaction limit.  Cloud Spanner limits the number of sessions that can exist at any given time; thus, it is a good idea to delete idle and/or unneeded sessions. Aside from explicit deletes, Cloud Spanner can delete sessions for which no operations are sent for more than an hour. If a session is deleted, requests to it return `NOT_FOUND`.  Idle sessions can be kept alive by sending a trivial SQL query periodically, e.g., `"SELECT 1"`.
           *
           * @alias spanner.projects.instances.databases.sessions.create
           * @memberOf! spanner(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.database Required. The database in which the new session is created.
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

            const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1/{database}/sessions').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['database'],
              pathParams: ['database'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * spanner.projects.instances.databases.sessions.delete
           *
           * @desc Ends a session, releasing server resources associated with it.
           *
           * @alias spanner.projects.instances.databases.sessions.delete
           * @memberOf! spanner(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name Required. The name of the session to delete.
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

            const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

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
           * spanner.projects.instances.databases.sessions.executeSql
           *
           * @desc Executes an SQL query, returning all rows in a single reply. This method cannot be used to return a result set larger than 10 MiB; if the query yields more data than that, the query fails with a `FAILED_PRECONDITION` error.  Queries inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details.  Larger result sets can be fetched in streaming fashion by calling ExecuteStreamingSql instead.
           *
           * @alias spanner.projects.instances.databases.sessions.executeSql
           * @memberOf! spanner(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.session Required. The session in which the SQL query should be performed.
           * @param {spanner(v1).ExecuteSqlRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          executeSql: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1/{session}:executeSql').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['session'],
              pathParams: ['session'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * spanner.projects.instances.databases.sessions.executeStreamingSql
           *
           * @desc Like ExecuteSql, except returns the result set as a stream. Unlike ExecuteSql, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.
           *
           * @alias spanner.projects.instances.databases.sessions.executeStreamingSql
           * @memberOf! spanner(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.session Required. The session in which the SQL query should be performed.
           * @param {spanner(v1).ExecuteSqlRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          executeStreamingSql: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1/{session}:executeStreamingSql').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['session'],
              pathParams: ['session'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * spanner.projects.instances.databases.sessions.get
           *
           * @desc Gets a session. Returns `NOT_FOUND` if the session does not exist. This is mainly useful for determining whether a session is still alive.
           *
           * @alias spanner.projects.instances.databases.sessions.get
           * @memberOf! spanner(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name Required. The name of the session to retrieve.
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

            const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

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
           * spanner.projects.instances.databases.sessions.read
           *
           * @desc Reads rows from the database using key lookups and scans, as a simple key/value style alternative to ExecuteSql.  This method cannot be used to return a result set larger than 10 MiB; if the read matches more data than that, the read fails with a `FAILED_PRECONDITION` error.  Reads inside read-write transactions might return `ABORTED`. If this occurs, the application should restart the transaction from the beginning. See Transaction for more details.  Larger result sets can be yielded in streaming fashion by calling StreamingRead instead.
           *
           * @alias spanner.projects.instances.databases.sessions.read
           * @memberOf! spanner(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.session Required. The session in which the read should be performed.
           * @param {spanner(v1).ReadRequest} params.resource Request body data
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

            const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1/{session}:read').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['session'],
              pathParams: ['session'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * spanner.projects.instances.databases.sessions.rollback
           *
           * @desc Rolls back a transaction, releasing any locks it holds. It is a good idea to call this for any transaction that includes one or more Read or ExecuteSql requests and ultimately decides not to commit.  `Rollback` returns `OK` if it successfully aborts the transaction, the transaction was already aborted, or the transaction is not found. `Rollback` never returns `ABORTED`.
           *
           * @alias spanner.projects.instances.databases.sessions.rollback
           * @memberOf! spanner(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.session Required. The session in which the transaction to roll back is running.
           * @param {spanner(v1).RollbackRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          rollback: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1/{session}:rollback').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['session'],
              pathParams: ['session'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * spanner.projects.instances.databases.sessions.streamingRead
           *
           * @desc Like Read, except returns the result set as a stream. Unlike Read, there is no limit on the size of the returned result set. However, no individual row in the result set can exceed 100 MiB, and no column value can exceed 10 MiB.
           *
           * @alias spanner.projects.instances.databases.sessions.streamingRead
           * @memberOf! spanner(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.session Required. The session in which the read should be performed.
           * @param {spanner(v1).ReadRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          streamingRead: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v1/{session}:streamingRead').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['session'],
              pathParams: ['session'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        }
      },
      operations: {

        /**
         * spanner.projects.instances.operations.cancel
         *
         * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
         *
         * @alias spanner.projects.instances.operations.cancel
         * @memberOf! spanner(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be cancelled.
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

          const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v1/{name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
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
         * spanner.projects.instances.operations.delete
         *
         * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
         *
         * @alias spanner.projects.instances.operations.delete
         * @memberOf! spanner(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be deleted.
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

          const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

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
         * spanner.projects.instances.operations.get
         *
         * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
         *
         * @alias spanner.projects.instances.operations.get
         * @memberOf! spanner(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource.
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

          const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

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
         * spanner.projects.instances.operations.list
         *
         * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
         *
         * @alias spanner.projects.instances.operations.list
         * @memberOf! spanner(v1)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter The standard list filter.
         * @param {string} params.name The name of the operation's parent resource.
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

          const rootUrl = options.rootUrl || 'https://spanner.googleapis.com/';

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
        }
      }
    }
  };
}

/**
 * @typedef AuditConfig
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).AuditLogConfig[]} auditLogConfigs The configuration for logging of each type of permission.
Next ID: 4
* @property {string[]} exemptedMembers 
* @property {string} service Specifies a service that will be enabled for audit logging.
For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
`allServices` is a special value that covers all services.
*/

/**
 * @typedef AuditLogConfig
 * @memberOf! spanner(v1)
 * @type object
* @property {string[]} exemptedMembers Specifies the identities that do not cause logging for this type of
permission.
Follows the same format of Binding.members.
* @property {string} logType The log type that this config enables.
*/

/**
 * @typedef AuthorizationLoggingOptions
 * @memberOf! spanner(v1)
 * @type object
 * @property {string} permissionType The type of the permission that was checked.
 */

/**
 * @typedef BeginTransactionRequest
 * @memberOf! spanner(v1)
 * @type object
 * @property {spanner(v1).TransactionOptions} options Required. Options for the new transaction.
 */

/**
 * @typedef Binding
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).Expr} condition The condition that is associated with this binding.
NOTE: an unsatisfied condition will not allow user access via current
binding. Different bindings, including their conditions, are examined
independently.
This field is GOOGLE_INTERNAL.
* @property {string[]} members Specifies the identities requesting access for a Cloud Platform resource.
`members` can have the following values:

* `allUsers`: A special identifier that represents anyone who is
   on the internet; with or without a Google account.

* `allAuthenticatedUsers`: A special identifier that represents anyone
   who is authenticated with a Google account or a service account.

* `user:{emailid}`: An email address that represents a specific Google
   account. For example, `alice@gmail.com` or `joe@example.com`.


* `serviceAccount:{emailid}`: An email address that represents a service
   account. For example, `my-other-app@appspot.gserviceaccount.com`.

* `group:{emailid}`: An email address that represents a Google group.
   For example, `admins@example.com`.


* `domain:{domain}`: A Google Apps domain name that represents all the
   users of that domain. For example, `google.com` or `example.com`.


* @property {string} role Role that is assigned to `members`.
For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
Required
*/

/**
 * @typedef ChildLink
 * @memberOf! spanner(v1)
 * @type object
* @property {integer} childIndex The node to which the link points.
* @property {string} type The type of the link. For example, in Hash Joins this could be used to
distinguish between the build child and the probe child, or in the case
of the child being an output variable, to represent the tag associated
with the output variable.
* @property {string} variable Only present if the child node is SCALAR and corresponds
to an output variable of the parent node. The field carries the name of
the output variable.
For example, a `TableScan` operator that reads rows from a table will
have child links to the `SCALAR` nodes representing the output variables
created for each column that is read by the operator. The corresponding
`variable` fields will be set to the variable names assigned to the
columns.
*/

/**
 * @typedef CloudAuditOptions
 * @memberOf! spanner(v1)
 * @type object
 * @property {spanner(v1).AuthorizationLoggingOptions} authorizationLoggingOptions Information used by the Cloud Audit Logging pipeline.
 * @property {string} logName The log_name to populate in the Cloud Audit Record.
 */

/**
 * @typedef CommitRequest
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).Mutation[]} mutations The mutations to be executed when this transaction commits. All
mutations are applied atomically, in the order they appear in
this list.
* @property {spanner(v1).TransactionOptions} singleUseTransaction Execute mutations in a temporary transaction. Note that unlike
commit of a previously-started transaction, commit with a
temporary transaction is non-idempotent. That is, if the
`CommitRequest` is sent to Cloud Spanner more than once (for
instance, due to retries in the application, or in the
transport library), it is possible that the mutations are
executed more than once. If this is undesirable, use
BeginTransaction and
Commit instead.
* @property {string} transactionId Commit a previously-started transaction.
*/

/**
 * @typedef CommitResponse
 * @memberOf! spanner(v1)
 * @type object
 * @property {string} commitTimestamp The Cloud Spanner timestamp at which the transaction committed.
 */

/**
 * @typedef Condition
 * @memberOf! spanner(v1)
 * @type object
* @property {string} iam Trusted attributes supplied by the IAM system.
* @property {string} op An operator to apply the subject with.
* @property {string} svc Trusted attributes discharged by the service.
* @property {string} sys Trusted attributes supplied by any service that owns resources and uses
the IAM system for access control.
* @property {string} value DEPRECATED. Use &#39;values&#39; instead.
* @property {string[]} values The objects of the condition. This is mutually exclusive with &#39;value&#39;.
*/

/**
 * @typedef CounterOptions
 * @memberOf! spanner(v1)
 * @type object
 * @property {string} field The field value to attribute.
 * @property {string} metric The metric to update.
 */

/**
 * @typedef CreateDatabaseMetadata
 * @memberOf! spanner(v1)
 * @type object
 * @property {string} database The database being created.
 */

/**
 * @typedef CreateDatabaseRequest
 * @memberOf! spanner(v1)
 * @type object
* @property {string} createStatement Required. A `CREATE DATABASE` statement, which specifies the ID of the
new database.  The database ID must conform to the regular expression
`a-z*[a-z0-9]` and be between 2 and 30 characters in length.
If the database ID is a reserved word or if it contains a hyphen, the
database ID must be enclosed in backticks (`` ` ``).
* @property {string[]} extraStatements An optional list of DDL statements to run inside the newly created
database. Statements can create tables, indexes, etc. These
statements execute atomically with the creation of the database:
if there is an error in any statement, the database is not created.
*/

/**
 * @typedef CreateInstanceMetadata
 * @memberOf! spanner(v1)
 * @type object
* @property {string} cancelTime The time at which this operation was cancelled. If set, this operation is
in the process of undoing itself (which is guaranteed to succeed) and
cannot be cancelled again.
* @property {string} endTime The time at which this operation failed or was completed successfully.
* @property {spanner(v1).Instance} instance The instance being created.
* @property {string} startTime The time at which the
CreateInstance request was
received.
*/

/**
 * @typedef CreateInstanceRequest
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).Instance} instance Required. The instance to create.  The name may be omitted, but if
specified must be `&lt;parent&gt;/instances/&lt;instance_id&gt;`.
* @property {string} instanceId Required. The ID of the instance to create.  Valid identifiers are of the
form `a-z*[a-z0-9]` and must be between 6 and 30 characters in
length.
*/

/**
 * @typedef DataAccessOptions
 * @memberOf! spanner(v1)
 * @type object
 */

/**
 * @typedef Database
 * @memberOf! spanner(v1)
 * @type object
* @property {string} name Required. The name of the database. Values are of the form
`projects/&lt;project&gt;/instances/&lt;instance&gt;/databases/&lt;database&gt;`,
where `&lt;database&gt;` is as specified in the `CREATE DATABASE`
statement. This name can be passed to other API methods to
identify the database.
* @property {string} state Output only. The current database state.
*/

/**
 * @typedef Delete
 * @memberOf! spanner(v1)
 * @type object
 * @property {spanner(v1).KeySet} keySet Required. The primary keys of the rows within table to delete.
 * @property {string} table Required. The table whose rows will be deleted.
 */

/**
 * @typedef Empty
 * @memberOf! spanner(v1)
 * @type object
 */

/**
 * @typedef ExecuteSqlRequest
 * @memberOf! spanner(v1)
 * @type object
* @property {object} paramTypes It is not always possible for Cloud Spanner to infer the right SQL type
from a JSON value.  For example, values of type `BYTES` and values
of type `STRING` both appear in params as JSON strings.

In these cases, `param_types` can be used to specify the exact
SQL type for some or all of the SQL query parameters. See the
definition of Type for more information
about SQL types.
* @property {object} params The SQL query string can contain parameter placeholders. A parameter
placeholder consists of `&#39;@&#39;` followed by the parameter
name. Parameter names consist of any combination of letters,
numbers, and underscores.

Parameters can appear anywhere that a literal value is expected.  The same
parameter name can be used more than once, for example:
  `&quot;WHERE id &gt; @msg_id AND id &lt; @msg_id + 100&quot;`

It is an error to execute an SQL query with unbound parameters.

Parameter values are specified using `params`, which is a JSON
object whose keys are parameter names, and whose values are the
corresponding parameter values.
* @property {string} queryMode Used to control the amount of debugging information returned in
ResultSetStats.
* @property {string} resumeToken If this request is resuming a previously interrupted SQL query
execution, `resume_token` should be copied from the last
PartialResultSet yielded before the interruption. Doing this
enables the new SQL query execution to resume where the last one left
off. The rest of the request parameters must exactly match the
request that yielded this token.
* @property {string} sql Required. The SQL query string.
* @property {spanner(v1).TransactionSelector} transaction The transaction to use. If none is provided, the default is a
temporary read-only transaction with strong concurrency.
*/

/**
 * @typedef Expr
 * @memberOf! spanner(v1)
 * @type object
* @property {string} description An optional description of the expression. This is a longer text which
describes the expression, e.g. when hovered over it in a UI.
* @property {string} expression Textual representation of an expression in
Common Expression Language syntax.

The application context of the containing message determines which
well-known feature set of CEL is supported.
* @property {string} location An optional string indicating the location of the expression for error
reporting, e.g. a file name and a position in the file.
* @property {string} title An optional title for the expression, i.e. a short string describing
its purpose. This can be used e.g. in UIs which allow to enter the
expression.
*/

/**
 * @typedef Field
 * @memberOf! spanner(v1)
 * @type object
* @property {string} name The name of the field. For reads, this is the column name. For
SQL queries, it is the column alias (e.g., `&quot;Word&quot;` in the
query `&quot;SELECT &#39;hello&#39; AS Word&quot;`), or the column name (e.g.,
`&quot;ColName&quot;` in the query `&quot;SELECT ColName FROM Table&quot;`). Some
columns might have an empty name (e.g., !&quot;SELECT
UPPER(ColName)&quot;`). Note that a query result can contain
multiple fields with the same name.
* @property {spanner(v1).Type} type The type of the field.
*/

/**
 * @typedef GetDatabaseDdlResponse
 * @memberOf! spanner(v1)
 * @type object
* @property {string[]} statements A list of formatted DDL statements defining the schema of the database
specified in the request.
*/

/**
 * @typedef GetIamPolicyRequest
 * @memberOf! spanner(v1)
 * @type object
 */

/**
 * @typedef Instance
 * @memberOf! spanner(v1)
 * @type object
* @property {string} config Required. The name of the instance&#39;s configuration. Values are of the form
`projects/&lt;project&gt;/instanceConfigs/&lt;configuration&gt;`. See
also InstanceConfig and
ListInstanceConfigs.
* @property {string} displayName Required. The descriptive name for this instance as it appears in UIs.
Must be unique per project and between 4 and 30 characters in length.
* @property {object} labels Cloud Labels are a flexible and lightweight mechanism for organizing cloud
resources into groups that reflect a customer&#39;s organizational needs and
deployment strategies. Cloud Labels can be used to filter collections of
resources. They can be used to control how resource metrics are aggregated.
And they can be used as arguments to policy management rules (e.g. route,
firewall, load balancing, etc.).

 * Label keys must be between 1 and 63 characters long and must conform to
   the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`.
 * Label values must be between 0 and 63 characters long and must conform
   to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.
 * No more than 64 labels can be associated with a given resource.

See https://goo.gl/xmQnxf for more information on and examples of labels.

If you plan to use labels in your own code, please note that additional
characters may be allowed in the future. And so you are advised to use an
internal label representation, such as JSON, which doesn&#39;t rely upon
specific characters being disallowed.  For example, representing labels
as the string:  name + &quot;_&quot; + value  would prove problematic if we were to
allow &quot;_&quot; in a future release.
* @property {string} name Required. A unique identifier for the instance, which cannot be changed
after the instance is created. Values are of the form
`projects/&lt;project&gt;/instances/a-z*[a-z0-9]`. The final
segment of the name must be between 6 and 30 characters in length.
* @property {integer} nodeCount Required. The number of nodes allocated to this instance. This may be zero
in API responses for instances that are not yet in state `READY`.

Each Spanner node can provide up to 10,000 QPS of reads or 2000 QPS of
writes (writing single rows at 1KB data per row), and 2 TiB storage.

For optimal performance, we recommend provisioning enough nodes to keep
overall CPU utilization under 75%.

A minimum of 3 nodes is recommended for production environments.  This
minimum is required for SLAs to apply to your instance.

Note that Cloud Spanner performance is highly dependent on workload, schema
design, and dataset characteristics. The performance numbers above are
estimates, and assume [best practices](https://cloud.google.com/spanner/docs/bulk-loading)
are followed.
* @property {string} state Output only. The current instance state. For
CreateInstance, the state must be
either omitted or set to `CREATING`. For
UpdateInstance, the state must be
either omitted or set to `READY`.
*/

/**
 * @typedef InstanceConfig
 * @memberOf! spanner(v1)
 * @type object
* @property {string} displayName The name of this instance configuration as it appears in UIs.
* @property {string} name A unique identifier for the instance configuration.  Values
are of the form
`projects/&lt;project&gt;/instanceConfigs/a-z*`
*/

/**
 * @typedef KeyRange
 * @memberOf! spanner(v1)
 * @type object
* @property {any[]} endClosed If the end is closed, then the range includes all rows whose
first `len(end_closed)` key columns exactly match `end_closed`.
* @property {any[]} endOpen If the end is open, then the range excludes rows whose first
`len(end_open)` key columns exactly match `end_open`.
* @property {any[]} startClosed If the start is closed, then the range includes all rows whose
first `len(start_closed)` key columns exactly match `start_closed`.
* @property {any[]} startOpen If the start is open, then the range excludes rows whose first
`len(start_open)` key columns exactly match `start_open`.
*/

/**
 * @typedef KeySet
 * @memberOf! spanner(v1)
 * @type object
* @property {boolean} all For convenience `all` can be set to `true` to indicate that this
`KeySet` matches all keys in the table or index. Note that any keys
specified in `keys` or `ranges` are only yielded once.
* @property {array[]} keys A list of specific keys. Entries in `keys` should have exactly as
many elements as there are columns in the primary or index key
with which this `KeySet` is used.  Individual key values are
encoded as described here.
* @property {spanner(v1).KeyRange[]} ranges A list of key ranges. See KeyRange for more information about
key range specifications.
*/

/**
 * @typedef ListDatabasesResponse
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).Database[]} databases Databases that matched the request.
* @property {string} nextPageToken `next_page_token` can be sent in a subsequent
ListDatabases call to fetch more
of the matching databases.
*/

/**
 * @typedef ListInstanceConfigsResponse
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).InstanceConfig[]} instanceConfigs The list of requested instance configurations.
* @property {string} nextPageToken `next_page_token` can be sent in a subsequent
ListInstanceConfigs call to
fetch more of the matching instance configurations.
*/

/**
 * @typedef ListInstancesResponse
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).Instance[]} instances The list of requested instances.
* @property {string} nextPageToken `next_page_token` can be sent in a subsequent
ListInstances call to fetch more
of the matching instances.
*/

/**
 * @typedef ListOperationsResponse
 * @memberOf! spanner(v1)
 * @type object
 * @property {string} nextPageToken The standard List next-page token.
 * @property {spanner(v1).Operation[]} operations A list of operations that matches the specified filter in the request.
 */

/**
 * @typedef LogConfig
 * @memberOf! spanner(v1)
 * @type object
 * @property {spanner(v1).CloudAuditOptions} cloudAudit Cloud audit options.
 * @property {spanner(v1).CounterOptions} counter Counter options.
 * @property {spanner(v1).DataAccessOptions} dataAccess Data access options.
 */

/**
 * @typedef Mutation
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).Delete} delete Delete rows from a table. Succeeds whether or not the named
rows were present.
* @property {spanner(v1).Write} insert Insert new rows in a table. If any of the rows already exist,
the write or transaction fails with error `ALREADY_EXISTS`.
* @property {spanner(v1).Write} insertOrUpdate Like insert, except that if the row already exists, then
its column values are overwritten with the ones provided. Any
column values not explicitly written are preserved.
* @property {spanner(v1).Write} replace Like insert, except that if the row already exists, it is
deleted, and the column values provided are inserted
instead. Unlike insert_or_update, this means any values not
explicitly written become `NULL`.
* @property {spanner(v1).Write} update Update existing rows in a table. If any of the rows does not
already exist, the transaction fails with error `NOT_FOUND`.
*/

/**
 * @typedef Operation
 * @memberOf! spanner(v1)
 * @type object
* @property {boolean} done If the value is `false`, it means the operation is still in progress.
If true, the operation is completed, and either `error` or `response` is
available.
* @property {spanner(v1).Status} error The error result of the operation in case of failure or cancellation.
* @property {object} metadata Service-specific metadata associated with the operation.  It typically
contains progress information and common metadata such as create time.
Some services might not provide such metadata.  Any method that returns a
long-running operation should document the metadata type, if any.
* @property {string} name The server-assigned name, which is only unique within the same service that
originally returns it. If you use the default HTTP mapping, the
`name` should have the format of `operations/some/unique/name`.
* @property {object} response The normal response of the operation in case of success.  If the original
method returns no data on success, such as `Delete`, the response is
`google.protobuf.Empty`.  If the original method is standard
`Get`/`Create`/`Update`, the response should be the resource.  For other
methods, the response should have the type `XxxResponse`, where `Xxx`
is the original method name.  For example, if the original method name
is `TakeSnapshot()`, the inferred response type is
`TakeSnapshotResponse`.
*/

/**
 * @typedef PartialResultSet
 * @memberOf! spanner(v1)
 * @type object
* @property {boolean} chunkedValue If true, then the final value in values is chunked, and must
be combined with more values from subsequent `PartialResultSet`s
to obtain a complete field value.
* @property {spanner(v1).ResultSetMetadata} metadata Metadata about the result set, such as row type information.
Only present in the first response.
* @property {string} resumeToken Streaming calls might be interrupted for a variety of reasons, such
as TCP connection loss. If this occurs, the stream of results can
be resumed by re-sending the original request and including
`resume_token`. Note that executing any other transaction in the
same session invalidates the token.
* @property {spanner(v1).ResultSetStats} stats Query plan and execution statistics for the query that produced this
streaming result set. These can be requested by setting
ExecuteSqlRequest.query_mode and are sent
only once with the last response in the stream.
* @property {any[]} values A streamed result set consists of a stream of values, which might
be split into many `PartialResultSet` messages to accommodate
large rows and/or large values. Every N complete values defines a
row, where N is equal to the number of entries in
metadata.row_type.fields.

Most values are encoded based on type as described
here.

It is possible that the last value in values is &quot;chunked&quot;,
meaning that the rest of the value is sent in subsequent
`PartialResultSet`(s). This is denoted by the chunked_value
field. Two or more chunked values can be merged to form a
complete value as follows:

  * `bool/number/null`: cannot be chunked
  * `string`: concatenate the strings
  * `list`: concatenate the lists. If the last element in a list is a
    `string`, `list`, or `object`, merge it with the first element in
    the next list by applying these rules recursively.
  * `object`: concatenate the (field name, field value) pairs. If a
    field name is duplicated, then apply these rules recursively
    to merge the field values.

Some examples of merging:

    # Strings are concatenated.
    &quot;foo&quot;, &quot;bar&quot; =&gt; &quot;foobar&quot;

    # Lists of non-strings are concatenated.
    [2, 3], [4] =&gt; [2, 3, 4]

    # Lists are concatenated, but the last and first elements are merged
    # because they are strings.
    [&quot;a&quot;, &quot;b&quot;], [&quot;c&quot;, &quot;d&quot;] =&gt; [&quot;a&quot;, &quot;bc&quot;, &quot;d&quot;]

    # Lists are concatenated, but the last and first elements are merged
    # because they are lists. Recursively, the last and first elements
    # of the inner lists are merged because they are strings.
    [&quot;a&quot;, [&quot;b&quot;, &quot;c&quot;]], [[&quot;d&quot;], &quot;e&quot;] =&gt; [&quot;a&quot;, [&quot;b&quot;, &quot;cd&quot;], &quot;e&quot;]

    # Non-overlapping object fields are combined.
    {&quot;a&quot;: &quot;1&quot;}, {&quot;b&quot;: &quot;2&quot;} =&gt; {&quot;a&quot;: &quot;1&quot;, &quot;b&quot;: 2&quot;}

    # Overlapping object fields are merged.
    {&quot;a&quot;: &quot;1&quot;}, {&quot;a&quot;: &quot;2&quot;} =&gt; {&quot;a&quot;: &quot;12&quot;}

    # Examples of merging objects containing lists of strings.
    {&quot;a&quot;: [&quot;1&quot;]}, {&quot;a&quot;: [&quot;2&quot;]} =&gt; {&quot;a&quot;: [&quot;12&quot;]}

For a more complete example, suppose a streaming SQL query is
yielding a result set whose rows contain a single string
field. The following `PartialResultSet`s might be yielded:

    {
      &quot;metadata&quot;: { ... }
      &quot;values&quot;: [&quot;Hello&quot;, &quot;W&quot;]
      &quot;chunked_value&quot;: true
      &quot;resume_token&quot;: &quot;Af65...&quot;
    }
    {
      &quot;values&quot;: [&quot;orl&quot;]
      &quot;chunked_value&quot;: true
      &quot;resume_token&quot;: &quot;Bqp2...&quot;
    }
    {
      &quot;values&quot;: [&quot;d&quot;]
      &quot;resume_token&quot;: &quot;Zx1B...&quot;
    }

This sequence of `PartialResultSet`s encodes two rows, one
containing the field value `&quot;Hello&quot;`, and a second containing the
field value `&quot;World&quot; = &quot;W&quot; + &quot;orl&quot; + &quot;d&quot;`.
*/

/**
 * @typedef PlanNode
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).ChildLink[]} childLinks List of child node `index`es and their relationship to this parent.
* @property {string} displayName The display name for the node.
* @property {object} executionStats The execution statistics associated with the node, contained in a group of
key-value pairs. Only present if the plan was returned as a result of a
profile query. For example, number of executions, number of rows/time per
execution etc.
* @property {integer} index The `PlanNode`&#39;s index in node list.
* @property {string} kind Used to determine the type of node. May be needed for visualizing
different kinds of nodes differently. For example, If the node is a
SCALAR node, it will have a condensed representation
which can be used to directly embed a description of the node in its
parent.
* @property {object} metadata Attributes relevant to the node contained in a group of key-value pairs.
For example, a Parameter Reference node could have the following
information in its metadata:

    {
      &quot;parameter_reference&quot;: &quot;param1&quot;,
      &quot;parameter_type&quot;: &quot;array&quot;
    }
* @property {spanner(v1).ShortRepresentation} shortRepresentation Condensed representation for SCALAR nodes.
*/

/**
 * @typedef Policy
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).AuditConfig[]} auditConfigs Specifies cloud audit logging configuration for this policy.
* @property {spanner(v1).Binding[]} bindings Associates a list of `members` to a `role`.
`bindings` with no members will result in an error.
* @property {string} etag `etag` is used for optimistic concurrency control as a way to help
prevent simultaneous updates of a policy from overwriting each other.
It is strongly suggested that systems make use of the `etag` in the
read-modify-write cycle to perform policy updates in order to avoid race
conditions: An `etag` is returned in the response to `getIamPolicy`, and
systems are expected to put that etag in the request to `setIamPolicy` to
ensure that their change will be applied to the same version of the policy.

If no `etag` is provided in the call to `setIamPolicy`, then the existing
policy is overwritten blindly.
* @property {boolean} iamOwned 
* @property {spanner(v1).Rule[]} rules If more than one rule is specified, the rules are applied in the following
manner:
- All matching LOG rules are always applied.
- If any DENY/DENY_WITH_LOG rule matches, permission is denied.
  Logging will be applied if one or more matching rule requires logging.
- Otherwise, if any ALLOW/ALLOW_WITH_LOG rule matches, permission is
  granted.
  Logging will be applied if one or more matching rule requires logging.
- Otherwise, if no rule applies, permission is denied.
* @property {integer} version Version of the `Policy`. The default version is 0.
*/

/**
 * @typedef QueryPlan
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).PlanNode[]} planNodes The nodes in the query plan. Plan nodes are returned in pre-order starting
with the plan root. Each PlanNode&#39;s `id` corresponds to its index in
`plan_nodes`.
*/

/**
 * @typedef ReadOnly
 * @memberOf! spanner(v1)
 * @type object
* @property {string} exactStaleness Executes all reads at a timestamp that is `exact_staleness`
old. The timestamp is chosen soon after the read is started.

Guarantees that all writes that have committed more than the
specified number of seconds ago are visible. Because Cloud Spanner
chooses the exact timestamp, this mode works even if the client&#39;s
local clock is substantially skewed from Cloud Spanner commit
timestamps.

Useful for reading at nearby replicas without the distributed
timestamp negotiation overhead of `max_staleness`.
* @property {string} maxStaleness Read data at a timestamp &gt;= `NOW - max_staleness`
seconds. Guarantees that all writes that have committed more
than the specified number of seconds ago are visible. Because
Cloud Spanner chooses the exact timestamp, this mode works even if
the client&#39;s local clock is substantially skewed from Cloud Spanner
commit timestamps.

Useful for reading the freshest data available at a nearby
replica, while bounding the possible staleness if the local
replica has fallen behind.

Note that this option can only be used in single-use
transactions.
* @property {string} minReadTimestamp Executes all reads at a timestamp &gt;= `min_read_timestamp`.

This is useful for requesting fresher data than some previous
read, or data that is fresh enough to observe the effects of some
previously committed transaction whose timestamp is known.

Note that this option can only be used in single-use transactions.
* @property {string} readTimestamp Executes all reads at the given timestamp. Unlike other modes,
reads at a specific timestamp are repeatable; the same read at
the same timestamp always returns the same data. If the
timestamp is in the future, the read will block until the
specified timestamp, modulo the read&#39;s deadline.

Useful for large scale consistent reads such as mapreduces, or
for coordinating many reads against a consistent snapshot of the
data.
* @property {boolean} returnReadTimestamp If true, the Cloud Spanner-selected read timestamp is included in
the Transaction message that describes the transaction.
* @property {boolean} strong Read at a timestamp where all previously committed transactions
are visible.
*/

/**
 * @typedef ReadRequest
 * @memberOf! spanner(v1)
 * @type object
* @property {string[]} columns The columns of table to be returned for each row matching
this request.
* @property {string} index If non-empty, the name of an index on table. This index is
used instead of the table primary key when interpreting key_set
and sorting result rows. See key_set for further information.
* @property {spanner(v1).KeySet} keySet Required. `key_set` identifies the rows to be yielded. `key_set` names the
primary keys of the rows in table to be yielded, unless index
is present. If index is present, then key_set instead names
index keys in index.

Rows are yielded in table primary key order (if index is empty)
or index key order (if index is non-empty).

It is not an error for the `key_set` to name rows that do not
exist in the database. Read yields nothing for nonexistent rows.
* @property {string} limit If greater than zero, only the first `limit` rows are yielded. If `limit`
is zero, the default is no limit.
* @property {string} resumeToken If this request is resuming a previously interrupted read,
`resume_token` should be copied from the last
PartialResultSet yielded before the interruption. Doing this
enables the new read to resume where the last read left off. The
rest of the request parameters must exactly match the request
that yielded this token.
* @property {string} table Required. The name of the table in the database to be read.
* @property {spanner(v1).TransactionSelector} transaction The transaction to use. If none is provided, the default is a
temporary read-only transaction with strong concurrency.
*/

/**
 * @typedef ReadWrite
 * @memberOf! spanner(v1)
 * @type object
 */

/**
 * @typedef ResultSet
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).ResultSetMetadata} metadata Metadata about the result set, such as row type information.
* @property {array[]} rows Each element in `rows` is a row whose format is defined by
metadata.row_type. The ith element
in each row matches the ith field in
metadata.row_type. Elements are
encoded based on type as described
here.
* @property {spanner(v1).ResultSetStats} stats Query plan and execution statistics for the query that produced this
result set. These can be requested by setting
ExecuteSqlRequest.query_mode.
*/

/**
 * @typedef ResultSetMetadata
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).StructType} rowType Indicates the field names and types for the rows in the result
set.  For example, a SQL query like `&quot;SELECT UserId, UserName FROM
Users&quot;` could return a `row_type` value like:

    &quot;fields&quot;: [
      { &quot;name&quot;: &quot;UserId&quot;, &quot;type&quot;: { &quot;code&quot;: &quot;INT64&quot; } },
      { &quot;name&quot;: &quot;UserName&quot;, &quot;type&quot;: { &quot;code&quot;: &quot;STRING&quot; } },
    ]
* @property {spanner(v1).Transaction} transaction If the read or SQL query began a transaction as a side-effect, the
information about the new transaction is yielded here.
*/

/**
 * @typedef ResultSetStats
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).QueryPlan} queryPlan QueryPlan for the query associated with this result.
* @property {object} queryStats Aggregated statistics from the execution of the query. Only present when
the query is profiled. For example, a query could return the statistics as
follows:

    {
      &quot;rows_returned&quot;: &quot;3&quot;,
      &quot;elapsed_time&quot;: &quot;1.22 secs&quot;,
      &quot;cpu_time&quot;: &quot;1.19 secs&quot;
    }
*/

/**
 * @typedef RollbackRequest
 * @memberOf! spanner(v1)
 * @type object
 * @property {string} transactionId Required. The transaction to roll back.
 */

/**
 * @typedef Rule
 * @memberOf! spanner(v1)
 * @type object
* @property {string} action Required
* @property {spanner(v1).Condition[]} conditions Additional restrictions that must be met
* @property {string} description Human-readable description of the rule.
* @property {string[]} in If one or more &#39;in&#39; clauses are specified, the rule matches if
the PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries.
* @property {spanner(v1).LogConfig[]} logConfig The config returned to callers of tech.iam.IAM.CheckPolicy for any entries
that match the LOG action.
* @property {string[]} notIn If one or more &#39;not_in&#39; clauses are specified, the rule matches
if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries.
The format for in and not_in entries is the same as for members in a
Binding (see google/iam/v1/policy.proto).
* @property {string[]} permissions A permission is a string of form &#39;&lt;service&gt;.&lt;resource type&gt;.&lt;verb&gt;&#39;
(e.g., &#39;storage.buckets.list&#39;). A value of &#39;*&#39; matches all permissions,
and a verb part of &#39;*&#39; (e.g., &#39;storage.buckets.*&#39;) matches all verbs.
*/

/**
 * @typedef Session
 * @memberOf! spanner(v1)
 * @type object
 * @property {string} name Required. The name of the session.
 */

/**
 * @typedef SetIamPolicyRequest
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).Policy} policy REQUIRED: The complete policy to be applied to the `resource`. The size of
the policy is limited to a few 10s of KB. An empty policy is a
valid policy but certain Cloud Platform services (such as Projects)
might reject them.
* @property {string} updateMask OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
the fields in the mask will be modified. If no mask is provided, the
following default mask is used:
paths: &quot;bindings, etag&quot;
This field is only used by Cloud IAM.
*/

/**
 * @typedef ShortRepresentation
 * @memberOf! spanner(v1)
 * @type object
* @property {string} description A string representation of the expression subtree rooted at this node.
* @property {object} subqueries A mapping of (subquery variable name) -&gt; (subquery node id) for cases
where the `description` string of this node references a `SCALAR`
subquery contained in the expression subtree rooted at this node. The
referenced `SCALAR` subquery may not necessarily be a direct child of
this node.
*/

/**
 * @typedef Status
 * @memberOf! spanner(v1)
 * @type object
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {object[]} details A list of messages that carry the error details.  There is a common set of
message types for APIs to use.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
*/

/**
 * @typedef StructType
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).Field[]} fields The list of fields that make up this struct. Order is
significant, because values of this struct type are represented as
lists, where the order of field values matches the order of
fields in the StructType. In turn, the order of fields
matches the order of columns in a read request, or the order of
fields in the `SELECT` clause of a query.
*/

/**
 * @typedef TestIamPermissionsRequest
 * @memberOf! spanner(v1)
 * @type object
* @property {string[]} permissions REQUIRED: The set of permissions to check for &#39;resource&#39;.
Permissions with wildcards (such as &#39;*&#39;, &#39;spanner.*&#39;, &#39;spanner.instances.*&#39;) are not allowed.
*/

/**
 * @typedef TestIamPermissionsResponse
 * @memberOf! spanner(v1)
 * @type object
* @property {string[]} permissions A subset of `TestPermissionsRequest.permissions` that the caller is
allowed.
*/

/**
 * @typedef Transaction
 * @memberOf! spanner(v1)
 * @type object
* @property {string} id `id` may be used to identify the transaction in subsequent
Read,
ExecuteSql,
Commit, or
Rollback calls.

Single-use read-only transactions do not have IDs, because
single-use transactions do not support multiple requests.
* @property {string} readTimestamp For snapshot read-only transactions, the read timestamp chosen
for the transaction. Not returned by default: see
TransactionOptions.ReadOnly.return_read_timestamp.
*/

/**
 * @typedef TransactionOptions
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).ReadOnly} readOnly Transaction will not write.

Authorization to begin a read-only transaction requires
`spanner.databases.beginReadOnlyTransaction` permission
on the `session` resource.
* @property {spanner(v1).ReadWrite} readWrite Transaction may write.

Authorization to begin a read-write transaction requires
`spanner.databases.beginOrRollbackReadWriteTransaction` permission
on the `session` resource.
*/

/**
 * @typedef TransactionSelector
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).TransactionOptions} begin Begin a new transaction and execute this read or SQL query in
it. The transaction ID of the new transaction is returned in
ResultSetMetadata.transaction, which is a Transaction.
* @property {string} id Execute the read or SQL query in a previously-started transaction.
* @property {spanner(v1).TransactionOptions} singleUse Execute the read or SQL query in a temporary transaction.
This is the most efficient way to execute a transaction that
consists of a single SQL query.
*/

/**
 * @typedef Type
 * @memberOf! spanner(v1)
 * @type object
* @property {spanner(v1).Type} arrayElementType If code == ARRAY, then `array_element_type`
is the type of the array elements.
* @property {string} code Required. The TypeCode for this type.
* @property {spanner(v1).StructType} structType If code == STRUCT, then `struct_type`
provides type information for the struct&#39;s fields.
*/

/**
 * @typedef UpdateDatabaseDdlMetadata
 * @memberOf! spanner(v1)
 * @type object
* @property {string[]} commitTimestamps Reports the commit timestamps of all statements that have
succeeded so far, where `commit_timestamps[i]` is the commit
timestamp for the statement `statements[i]`.
* @property {string} database The database being modified.
* @property {string[]} statements For an update this list contains all the statements. For an
individual statement, this list contains only that statement.
*/

/**
 * @typedef UpdateDatabaseDdlRequest
 * @memberOf! spanner(v1)
 * @type object
* @property {string} operationId If empty, the new update request is assigned an
automatically-generated operation ID. Otherwise, `operation_id`
is used to construct the name of the resulting
Operation.

Specifying an explicit operation ID simplifies determining
whether the statements were executed in the event that the
UpdateDatabaseDdl call is replayed,
or the return value is otherwise lost: the database and
`operation_id` fields can be combined to form the
name of the resulting
longrunning.Operation: `&lt;database&gt;/operations/&lt;operation_id&gt;`.

`operation_id` should be unique within the database, and must be
a valid identifier: `a-z*`. Note that
automatically-generated operation IDs always begin with an
underscore. If the named operation already exists,
UpdateDatabaseDdl returns
`ALREADY_EXISTS`.
* @property {string[]} statements DDL statements to be applied to the database.
*/

/**
 * @typedef UpdateInstanceMetadata
 * @memberOf! spanner(v1)
 * @type object
* @property {string} cancelTime The time at which this operation was cancelled. If set, this operation is
in the process of undoing itself (which is guaranteed to succeed) and
cannot be cancelled again.
* @property {string} endTime The time at which this operation failed or was completed successfully.
* @property {spanner(v1).Instance} instance The desired end state of the update.
* @property {string} startTime The time at which UpdateInstance
request was received.
*/

/**
 * @typedef UpdateInstanceRequest
 * @memberOf! spanner(v1)
 * @type object
* @property {string} fieldMask Required. A mask specifying which fields in [][google.spanner.admin.instance.v1.UpdateInstanceRequest.instance] should be updated.
The field mask must always be specified; this prevents any future fields in
[][google.spanner.admin.instance.v1.Instance] from being erased accidentally by clients that do not know
about them.
* @property {spanner(v1).Instance} instance Required. The instance to update, which must always include the instance
name.  Otherwise, only fields mentioned in [][google.spanner.admin.instance.v1.UpdateInstanceRequest.field_mask] need be included.
*/

/**
 * @typedef Write
 * @memberOf! spanner(v1)
 * @type object
* @property {string[]} columns The names of the columns in table to be written.

The list of columns must contain enough columns to allow
Cloud Spanner to derive values for all primary key columns in the
row(s) to be modified.
* @property {string} table Required. The table whose rows will be written.
* @property {array[]} values The values to be written. `values` can contain more than one
list of values. If it does, then multiple rows are written, one
for each entry in `values`. Each list in `values` must have
exactly as many entries as there are entries in columns
above. Sending multiple lists is equivalent to sending multiple
`Mutation`s, each containing one `values` entry and repeating
table and columns. Individual values in each list are
encoded as described here.
*/
export = Spanner;
