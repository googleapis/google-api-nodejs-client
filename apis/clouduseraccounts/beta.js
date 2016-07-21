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
 * Cloud User Accounts API
 *
 * Creates and manages users and groups for accessing Google Compute Engine virtual machines.
 *
 * @example
 * var google = require('googleapis');
 * var clouduseraccounts = google.clouduseraccounts('beta');
 *
 * @namespace clouduseraccounts
 * @type {Function}
 * @version beta
 * @variation beta
 * @param {object=} options Options for Clouduseraccounts
 */
function Clouduseraccounts(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.globalAccountsOperations = {

    /**
     * clouduseraccounts.globalAccountsOperations.delete
     *
     * @desc Deletes the specified operation resource.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     // Name of the Operations resource to delete.
     *     operation: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   clouduseraccounts.globalAccountsOperations.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias clouduseraccounts.globalAccountsOperations.delete
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation Name of the Operations resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/operations/{operation}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'operation'],
        pathParams: ['operation', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * clouduseraccounts.globalAccountsOperations.get
     *
     * @desc Retrieves the specified operation resource.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     // Name of the Operations resource to return.
     *     operation: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   clouduseraccounts.globalAccountsOperations.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias clouduseraccounts.globalAccountsOperations.get
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation Name of the Operations resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/operations/{operation}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'operation'],
        pathParams: ['operation', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * clouduseraccounts.globalAccountsOperations.list
     *
     * @desc Retrieves the list of operation resources contained within the specified project.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         clouduseraccounts.globalAccountsOperations.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   clouduseraccounts.globalAccountsOperations.list(request, recur);
     * });
     *
     * @alias clouduseraccounts.globalAccountsOperations.list
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.  The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/operations',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.groups = {

    /**
     * clouduseraccounts.groups.addMember
     *
     * @desc Adds users to the specified group.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'addMember' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     // Name of the group for this request.
     *     groupName: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   clouduseraccounts.groups.addMember(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias clouduseraccounts.groups.addMember
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.groupName Name of the group for this request.
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addMember: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/groups/{groupName}/addMember',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'groupName'],
        pathParams: ['groupName', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * clouduseraccounts.groups.delete
     *
     * @desc Deletes the specified Group resource.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     // Name of the Group resource to delete.
     *     groupName: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   clouduseraccounts.groups.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias clouduseraccounts.groups.delete
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.groupName Name of the Group resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/groups/{groupName}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'groupName'],
        pathParams: ['groupName', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * clouduseraccounts.groups.get
     *
     * @desc Returns the specified Group resource.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     // Name of the Group resource to return.
     *     groupName: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   clouduseraccounts.groups.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias clouduseraccounts.groups.get
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.groupName Name of the Group resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/groups/{groupName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'groupName'],
        pathParams: ['groupName', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * clouduseraccounts.groups.insert
     *
     * @desc Creates a Group resource in the specified project using the data included in the request.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   clouduseraccounts.groups.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias clouduseraccounts.groups.insert
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/groups',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * clouduseraccounts.groups.list
     *
     * @desc Retrieves the list of groups contained within the specified project.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         clouduseraccounts.groups.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   clouduseraccounts.groups.list(request, recur);
     * });
     *
     * @alias clouduseraccounts.groups.list
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.  The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/groups',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * clouduseraccounts.groups.removeMember
     *
     * @desc Removes users from the specified group.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'removeMember' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     // Name of the group for this request.
     *     groupName: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   clouduseraccounts.groups.removeMember(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias clouduseraccounts.groups.removeMember
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.groupName Name of the group for this request.
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removeMember: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/groups/{groupName}/removeMember',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'groupName'],
        pathParams: ['groupName', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.linux = {

    /**
     * clouduseraccounts.linux.getAuthorizedKeysView
     *
     * @desc Returns a list of authorized public keys for a specific user account.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'getAuthorizedKeysView' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     // Name of the zone for this request.
     *     zone: "",
     *     // The user account for which you want to get a list of authorized public keys.
     *     user: "",
     *     // The fully-qualified URL of the virtual machine requesting the view.
     *     instance: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   clouduseraccounts.linux.getAuthorizedKeysView(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias clouduseraccounts.linux.getAuthorizedKeysView
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance The fully-qualified URL of the virtual machine requesting the view.
     * @param {boolean=} params.login Whether the view was requested as part of a user-initiated login.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.user The user account for which you want to get a list of authorized public keys.
     * @param {string} params.zone Name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getAuthorizedKeysView: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/zones/{zone}/authorizedKeysView/{user}',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'user', 'instance'],
        pathParams: ['project', 'user', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * clouduseraccounts.linux.getLinuxAccountViews
     *
     * @desc Retrieves a list of user accounts for an instance within a specific project.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'getLinuxAccountViews' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     // Name of the zone for this request.
     *     zone: "",
     *     // The fully-qualified URL of the virtual machine requesting the views.
     *     instance: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   clouduseraccounts.linux.getLinuxAccountViews(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias clouduseraccounts.linux.getLinuxAccountViews
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.  The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {string} params.instance The fully-qualified URL of the virtual machine requesting the views.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getLinuxAccountViews: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/zones/{zone}/linuxAccountViews',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.users = {

    /**
     * clouduseraccounts.users.addPublicKey
     *
     * @desc Adds a public key to the specified User resource with the data included in the request.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'addPublicKey' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     // Name of the user for this request.
     *     user: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   clouduseraccounts.users.addPublicKey(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias clouduseraccounts.users.addPublicKey
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.user Name of the user for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addPublicKey: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/users/{user}/addPublicKey',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'user'],
        pathParams: ['project', 'user'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * clouduseraccounts.users.delete
     *
     * @desc Deletes the specified User resource.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     // Name of the user resource to delete.
     *     user: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   clouduseraccounts.users.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias clouduseraccounts.users.delete
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.user Name of the user resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/users/{user}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'user'],
        pathParams: ['project', 'user'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * clouduseraccounts.users.get
     *
     * @desc Returns the specified User resource.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     // Name of the user resource to return.
     *     user: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   clouduseraccounts.users.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias clouduseraccounts.users.get
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.user Name of the user resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/users/{user}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'user'],
        pathParams: ['project', 'user'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * clouduseraccounts.users.insert
     *
     * @desc Creates a User resource in the specified project using the data included in the request.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   clouduseraccounts.users.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias clouduseraccounts.users.insert
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/users',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * clouduseraccounts.users.list
     *
     * @desc Retrieves a list of users contained within the specified project.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         clouduseraccounts.users.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   clouduseraccounts.users.list(request, recur);
     * });
     *
     * @alias clouduseraccounts.users.list
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  Compute Engine Beta API Only: If you use filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. In particular, use filtering on nested fields to take advantage of instance labels to organize and filter results based on label values.  The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/users',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * clouduseraccounts.users.removePublicKey
     *
     * @desc Removes the specified public key from the user.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Cloud User Accounts API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/clouduseraccounts
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var clouduseraccounts = google.clouduseraccounts('beta');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'removePublicKey' method:
     *
     *     // Project ID for this request.
     *     project: "",
     *     // Name of the user for this request.
     *     user: "",
     *     // The fingerprint of the public key to delete. Public keys are identified by their fingerprint, which
     *     // is defined by RFC4716 to be the MD5 digest of the public key.
     *     fingerprint: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   clouduseraccounts.users.removePublicKey(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias clouduseraccounts.users.removePublicKey
     * @memberOf! clouduseraccounts(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.fingerprint The fingerprint of the public key to delete. Public keys are identified by their fingerprint, which is defined by RFC4716 to be the MD5 digest of the public key.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.user Name of the user for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removePublicKey: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/clouduseraccounts/beta/projects/{project}/global/users/{user}/removePublicKey',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'user', 'fingerprint'],
        pathParams: ['project', 'user'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Clouduseraccounts;
