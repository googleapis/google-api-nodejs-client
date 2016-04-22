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
 * Google Cloud Service Registry API
 *
 * Manages service endpoints in Service Registry and provides integration with DNS for service discovery and name resolution.
 *
 * @example
 * var google = require('googleapis');
 * var serviceregistry = google.serviceregistry('alpha');
 *
 * @namespace serviceregistry
 * @type {Function}
 * @version alpha
 * @variation alpha
 * @param {object=} options Options for Serviceregistry
 */
function Serviceregistry(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.endpoints = {

    /**
     * serviceregistry.endpoints.delete
     *
     * @desc Deletes an endpoint.
     *
     * @alias serviceregistry.endpoints.delete
     * @memberOf! serviceregistry(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.endpoint The name of the endpoint for this request.
     * @param {string} params.project The project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/serviceregistry/alpha/projects/{project}/global/endpoints/{endpoint}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'endpoint'],
        pathParams: ['endpoint', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * serviceregistry.endpoints.get
     *
     * @desc Gets an endpoint.
     *
     * @alias serviceregistry.endpoints.get
     * @memberOf! serviceregistry(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.endpoint The name of the endpoint for this request.
     * @param {string} params.project The project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/serviceregistry/alpha/projects/{project}/global/endpoints/{endpoint}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'endpoint'],
        pathParams: ['endpoint', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * serviceregistry.endpoints.insert
     *
     * @desc Creates an endpoint.
     *
     * @alias serviceregistry.endpoints.insert
     * @memberOf! serviceregistry(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/serviceregistry/alpha/projects/{project}/global/endpoints',
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
     * serviceregistry.endpoints.list
     *
     * @desc Lists endpoints for a project.
     *
     * @alias serviceregistry.endpoints.list
     * @memberOf! serviceregistry(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  Compute Engine Beta API Only: When filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project The project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/serviceregistry/alpha/projects/{project}/global/endpoints',
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
     * serviceregistry.endpoints.patch
     *
     * @desc Updates an endpoint. This method supports patch semantics.
     *
     * @alias serviceregistry.endpoints.patch
     * @memberOf! serviceregistry(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.endpoint The name of the endpoint for this request.
     * @param {string} params.project The project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/serviceregistry/alpha/projects/{project}/global/endpoints/{endpoint}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'endpoint'],
        pathParams: ['endpoint', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * serviceregistry.endpoints.update
     *
     * @desc Updates an endpoint.
     *
     * @alias serviceregistry.endpoints.update
     * @memberOf! serviceregistry(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.endpoint The name of the endpoint for this request.
     * @param {string} params.project The project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/serviceregistry/alpha/projects/{project}/global/endpoints/{endpoint}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'endpoint'],
        pathParams: ['endpoint', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.operations = {

    /**
     * serviceregistry.operations.get
     *
     * @desc Gets information about a specific operation.
     *
     * @alias serviceregistry.operations.get
     * @memberOf! serviceregistry(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation The name of the operation for this request.
     * @param {string} params.project The project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/serviceregistry/alpha/projects/{project}/global/operations/{operation}',
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
     * serviceregistry.operations.list
     *
     * @desc Lists all operations for a project.
     *
     * @alias serviceregistry.operations.list
     * @memberOf! serviceregistry(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  Compute Engine Beta API Only: When filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project The project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/serviceregistry/alpha/projects/{project}/global/operations',
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
}

module.exports = Serviceregistry;
