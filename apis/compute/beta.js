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
 * Compute Engine API
 *
 * Creates and runs virtual machines on Google Cloud Platform.
 *
 * @example
 * var google = require('googleapis');
 * var compute = google.compute('beta');
 *
 * @namespace compute
 * @type {Function}
 * @version beta
 * @variation beta
 * @param {object=} options Options for Compute
 */
function Compute(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.addresses = {

    /**
     * compute.addresses.aggregatedList
     *
     * @desc Retrieves an aggregated list of addresses.
     *
     * @alias compute.addresses.aggregatedList
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/aggregated/addresses',
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
     * compute.addresses.delete
     *
     * @desc Deletes the specified address resource.
     *
     * @alias compute.addresses.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.address Name of the address resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/addresses/{address}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'address'],
        pathParams: ['address', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.addresses.get
     *
     * @desc Returns the specified address resource.
     *
     * @alias compute.addresses.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.address Name of the address resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/addresses/{address}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'address'],
        pathParams: ['address', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.addresses.insert
     *
     * @desc Creates an address resource in the specified project using the data included in the request.
     *
     * @alias compute.addresses.insert
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/addresses',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.addresses.list
     *
     * @desc Retrieves a list of addresses contained within the specified region.
     *
     * @alias compute.addresses.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/addresses',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.addresses.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.addresses.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region The name of the region for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/addresses/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'resource'],
        pathParams: ['project', 'region', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.autoscalers = {

    /**
     * compute.autoscalers.aggregatedList
     *
     * @desc Retrieves an aggregated list of autoscalers.
     *
     * @alias compute.autoscalers.aggregatedList
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/aggregated/autoscalers',
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
     * compute.autoscalers.delete
     *
     * @desc Deletes the specified autoscaler.
     *
     * @alias compute.autoscalers.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.autoscaler Name of the autoscaler to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/autoscalers/{autoscaler}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'autoscaler'],
        pathParams: ['autoscaler', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.autoscalers.get
     *
     * @desc Returns the specified autoscaler resource. Get a list of available autoscalers by making a list() request.
     *
     * @alias compute.autoscalers.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.autoscaler Name of the autoscaler to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/autoscalers/{autoscaler}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'autoscaler'],
        pathParams: ['autoscaler', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.autoscalers.insert
     *
     * @desc Creates an autoscaler in the specified project using the data included in the request.
     *
     * @alias compute.autoscalers.insert
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/autoscalers',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.autoscalers.list
     *
     * @desc Retrieves a list of autoscalers contained within the specified zone.
     *
     * @alias compute.autoscalers.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/autoscalers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.autoscalers.patch
     *
     * @desc Updates an autoscaler in the specified project using the data included in the request. This method supports patch semantics.
     *
     * @alias compute.autoscalers.patch
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.autoscaler Name of the autoscaler to update.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/autoscalers',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'zone', 'autoscaler'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.autoscalers.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.autoscalers.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/autoscalers/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'resource'],
        pathParams: ['project', 'resource', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.autoscalers.update
     *
     * @desc Updates an autoscaler in the specified project using the data included in the request.
     *
     * @alias compute.autoscalers.update
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.autoscaler Name of the autoscaler to update.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/autoscalers',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.backendServices = {

    /**
     * compute.backendServices.delete
     *
     * @desc Deletes the specified BackendService resource.
     *
     * @alias compute.backendServices.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.backendService Name of the BackendService resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/backendServices/{backendService}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'backendService'],
        pathParams: ['backendService', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.backendServices.get
     *
     * @desc Returns the specified BackendService resource. Get a list of available backend services by making a list() request.
     *
     * @alias compute.backendServices.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.backendService Name of the BackendService resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/backendServices/{backendService}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'backendService'],
        pathParams: ['backendService', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.backendServices.getHealth
     *
     * @desc Gets the most recent health check results for this BackendService.
     *
     * @alias compute.backendServices.getHealth
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.backendService Name of the BackendService resource to which the queried instance belongs.
     * @param {string} params.project 
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getHealth: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/backendServices/{backendService}/getHealth',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'backendService'],
        pathParams: ['backendService', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.backendServices.insert
     *
     * @desc Creates a BackendService resource in the specified project using the data included in the request. There are several restrictions and guidelines to keep in mind when creating a backend service. Read  Restrictions and Guidelines for more information.
     *
     * @alias compute.backendServices.insert
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/backendServices',
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
     * compute.backendServices.list
     *
     * @desc Retrieves the list of BackendService resources available to the specified project.
     *
     * @alias compute.backendServices.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/backendServices',
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
     * compute.backendServices.patch
     *
     * @desc Updates the entire content of the BackendService resource. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information. This method supports patch semantics.
     *
     * @alias compute.backendServices.patch
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.backendService Name of the BackendService resource to update.
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/backendServices/{backendService}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'backendService'],
        pathParams: ['backendService', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.backendServices.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.backendServices.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/backendServices/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.backendServices.update
     *
     * @desc Updates the entire content of the BackendService resource. There are several restrictions and guidelines to keep in mind when updating a backend service. Read  Restrictions and Guidelines for more information.
     *
     * @alias compute.backendServices.update
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.backendService Name of the BackendService resource to update.
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/backendServices/{backendService}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'backendService'],
        pathParams: ['backendService', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.diskTypes = {

    /**
     * compute.diskTypes.aggregatedList
     *
     * @desc Retrieves an aggregated list of disk types.
     *
     * @alias compute.diskTypes.aggregatedList
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/aggregated/diskTypes',
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
     * compute.diskTypes.get
     *
     * @desc Returns the specified disk type. Get a list of available disk types by making a list() request.
     *
     * @alias compute.diskTypes.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.diskType Name of the disk type to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/diskTypes/{diskType}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'diskType'],
        pathParams: ['diskType', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.diskTypes.list
     *
     * @desc Retrieves a list of disk types available to the specified project.
     *
     * @alias compute.diskTypes.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/diskTypes',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.disks = {

    /**
     * compute.disks.aggregatedList
     *
     * @desc Retrieves an aggregated list of persistent disks.
     *
     * @alias compute.disks.aggregatedList
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/aggregated/disks',
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
     * compute.disks.createSnapshot
     *
     * @desc Creates a snapshot of a specified persistent disk.
     *
     * @alias compute.disks.createSnapshot
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.disk Name of the persistent disk to snapshot.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createSnapshot: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/disks/{disk}/createSnapshot',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'disk'],
        pathParams: ['disk', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.disks.delete
     *
     * @desc Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any snapshots previously made from the disk. You must separately delete snapshots.
     *
     * @alias compute.disks.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.disk Name of the persistent disk to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/disks/{disk}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'disk'],
        pathParams: ['disk', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.disks.get
     *
     * @desc Returns a specified persistent disk. Get a list of available persistent disks by making a list() request.
     *
     * @alias compute.disks.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.disk Name of the persistent disk to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/disks/{disk}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'disk'],
        pathParams: ['disk', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.disks.insert
     *
     * @desc Creates a persistent disk in the specified project using the data in the request. You can create a disk with a sourceImage, a sourceSnapshot, or create an empty 500 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb property.
     *
     * @alias compute.disks.insert
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string=} params.sourceImage Optional. Source image to restore onto a disk.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/disks',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.disks.list
     *
     * @desc Retrieves a list of persistent disks contained within the specified zone.
     *
     * @alias compute.disks.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/disks',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.disks.resize
     *
     * @desc Resizes the specified persistent disk.
     *
     * @alias compute.disks.resize
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.disk The name of the persistent disk.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resize: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/disks/{disk}/resize',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'disk'],
        pathParams: ['disk', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.disks.setLabels
     *
     * @desc Sets the labels on a disk. To learn more about labels, read the Labeling or Tagging Resources documentation.
     *
     * @alias compute.disks.setLabels
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setLabels: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/disks/{resource}/setLabels',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'resource'],
        pathParams: ['project', 'resource', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.disks.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.disks.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/disks/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'resource'],
        pathParams: ['project', 'resource', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.firewalls = {

    /**
     * compute.firewalls.delete
     *
     * @desc Deletes the specified firewall.
     *
     * @alias compute.firewalls.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.firewall Name of the firewall rule to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/firewalls/{firewall}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'firewall'],
        pathParams: ['firewall', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.firewalls.get
     *
     * @desc Returns the specified firewall.
     *
     * @alias compute.firewalls.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.firewall Name of the firewall rule to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/firewalls/{firewall}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'firewall'],
        pathParams: ['firewall', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.firewalls.insert
     *
     * @desc Creates a firewall rule in the specified project using the data included in the request.
     *
     * @alias compute.firewalls.insert
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/firewalls',
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
     * compute.firewalls.list
     *
     * @desc Retrieves the list of firewall rules available to the specified project.
     *
     * @alias compute.firewalls.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/firewalls',
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
     * compute.firewalls.patch
     *
     * @desc Updates the specified firewall rule with the data included in the request. This method supports patch semantics.
     *
     * @alias compute.firewalls.patch
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.firewall Name of the firewall rule to update.
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/firewalls/{firewall}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'firewall'],
        pathParams: ['firewall', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.firewalls.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.firewalls.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/firewalls/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.firewalls.update
     *
     * @desc Updates the specified firewall rule with the data included in the request.
     *
     * @alias compute.firewalls.update
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.firewall Name of the firewall rule to update.
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/firewalls/{firewall}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'firewall'],
        pathParams: ['firewall', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.forwardingRules = {

    /**
     * compute.forwardingRules.aggregatedList
     *
     * @desc Retrieves an aggregated list of forwarding rules.
     *
     * @alias compute.forwardingRules.aggregatedList
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/aggregated/forwardingRules',
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
     * compute.forwardingRules.delete
     *
     * @desc Deletes the specified ForwardingRule resource.
     *
     * @alias compute.forwardingRules.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.forwardingRule Name of the ForwardingRule resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/forwardingRules/{forwardingRule}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.forwardingRules.get
     *
     * @desc Returns the specified ForwardingRule resource.
     *
     * @alias compute.forwardingRules.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.forwardingRule Name of the ForwardingRule resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/forwardingRules/{forwardingRule}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.forwardingRules.insert
     *
     * @desc Creates a ForwardingRule resource in the specified project and region using the data included in the request.
     *
     * @alias compute.forwardingRules.insert
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/forwardingRules',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.forwardingRules.list
     *
     * @desc Retrieves a list of ForwardingRule resources available to the specified project and region.
     *
     * @alias compute.forwardingRules.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/forwardingRules',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.forwardingRules.setTarget
     *
     * @desc Changes target URL for forwarding rule. The new target should be of the same type as the old target.
     *
     * @alias compute.forwardingRules.setTarget
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.forwardingRule Name of the ForwardingRule resource in which target is to be set.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setTarget: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/forwardingRules/{forwardingRule}/setTarget',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.forwardingRules.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.forwardingRules.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region The name of the region for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/forwardingRules/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'resource'],
        pathParams: ['project', 'region', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.globalAddresses = {

    /**
     * compute.globalAddresses.delete
     *
     * @desc Deletes the specified address resource.
     *
     * @alias compute.globalAddresses.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.address Name of the address resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/addresses/{address}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'address'],
        pathParams: ['address', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.globalAddresses.get
     *
     * @desc Returns the specified address resource. Get a list of available addresses by making a list() request.
     *
     * @alias compute.globalAddresses.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.address Name of the address resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/addresses/{address}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'address'],
        pathParams: ['address', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.globalAddresses.insert
     *
     * @desc Creates an address resource in the specified project using the data included in the request.
     *
     * @alias compute.globalAddresses.insert
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/addresses',
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
     * compute.globalAddresses.list
     *
     * @desc Retrieves a list of global addresses.
     *
     * @alias compute.globalAddresses.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/addresses',
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
     * compute.globalAddresses.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.globalAddresses.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/addresses/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.globalForwardingRules = {

    /**
     * compute.globalForwardingRules.delete
     *
     * @desc Deletes the specified ForwardingRule resource.
     *
     * @alias compute.globalForwardingRules.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.forwardingRule Name of the ForwardingRule resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/forwardingRules/{forwardingRule}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.globalForwardingRules.get
     *
     * @desc Returns the specified ForwardingRule resource. Get a list of available forwarding rules by making a list() request.
     *
     * @alias compute.globalForwardingRules.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.forwardingRule Name of the ForwardingRule resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/forwardingRules/{forwardingRule}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.globalForwardingRules.insert
     *
     * @desc Creates a ForwardingRule resource in the specified project and region using the data included in the request.
     *
     * @alias compute.globalForwardingRules.insert
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/forwardingRules',
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
     * compute.globalForwardingRules.list
     *
     * @desc Retrieves a list of ForwardingRule resources available to the specified project.
     *
     * @alias compute.globalForwardingRules.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/forwardingRules',
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
     * compute.globalForwardingRules.setTarget
     *
     * @desc Changes target URL for forwarding rule. The new target should be of the same type as the old target.
     *
     * @alias compute.globalForwardingRules.setTarget
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.forwardingRule Name of the ForwardingRule resource in which target is to be set.
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setTarget: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/forwardingRules/{forwardingRule}/setTarget',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'forwardingRule'],
        pathParams: ['forwardingRule', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.globalForwardingRules.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.globalForwardingRules.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/forwardingRules/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.globalOperations = {

    /**
     * compute.globalOperations.aggregatedList
     *
     * @desc Retrieves an aggregated list of all operations.
     *
     * @alias compute.globalOperations.aggregatedList
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/aggregated/operations',
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
     * compute.globalOperations.delete
     *
     * @desc Deletes the specified Operations resource.
     *
     * @alias compute.globalOperations.delete
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/operations/{operation}',
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
     * compute.globalOperations.get
     *
     * @desc Retrieves the specified Operations resource. Get a list of operations by making a list() request.
     *
     * @alias compute.globalOperations.get
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/operations/{operation}',
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
     * compute.globalOperations.list
     *
     * @desc Retrieves a list of Operation resources contained within the specified project.
     *
     * @alias compute.globalOperations.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/operations',
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

  self.healthChecks = {

    /**
     * compute.healthChecks.delete
     *
     * @desc Deletes the specified HealthCheck resource.
     *
     * @alias compute.healthChecks.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.healthCheck Name of the HealthCheck resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/healthChecks/{healthCheck}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'healthCheck'],
        pathParams: ['healthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.healthChecks.get
     *
     * @desc Returns the specified HealthCheck resource. Get a list of available health checks by making a list() request.
     *
     * @alias compute.healthChecks.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.healthCheck Name of the HealthCheck resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/healthChecks/{healthCheck}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'healthCheck'],
        pathParams: ['healthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.healthChecks.insert
     *
     * @desc Creates a HealthCheck resource in the specified project using the data included in the request.
     *
     * @alias compute.healthChecks.insert
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/healthChecks',
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
     * compute.healthChecks.list
     *
     * @desc Retrieves the list of HealthCheck resources available to the specified project.
     *
     * @alias compute.healthChecks.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/healthChecks',
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
     * compute.healthChecks.patch
     *
     * @desc Updates a HealthCheck resource in the specified project using the data included in the request. This method supports patch semantics.
     *
     * @alias compute.healthChecks.patch
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.healthCheck Name of the HealthCheck resource to update.
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/healthChecks/{healthCheck}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'healthCheck'],
        pathParams: ['healthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.healthChecks.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.healthChecks.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/healthChecks/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.healthChecks.update
     *
     * @desc Updates a HealthCheck resource in the specified project using the data included in the request.
     *
     * @alias compute.healthChecks.update
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.healthCheck Name of the HealthCheck resource to update.
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/healthChecks/{healthCheck}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'healthCheck'],
        pathParams: ['healthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.httpHealthChecks = {

    /**
     * compute.httpHealthChecks.delete
     *
     * @desc Deletes the specified HttpHealthCheck resource.
     *
     * @alias compute.httpHealthChecks.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.httpHealthCheck Name of the HttpHealthCheck resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/httpHealthChecks/{httpHealthCheck}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'httpHealthCheck'],
        pathParams: ['httpHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpHealthChecks.get
     *
     * @desc Returns the specified HttpHealthCheck resource. Get a list of available HTTP health checks by making a list() request.
     *
     * @alias compute.httpHealthChecks.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.httpHealthCheck Name of the HttpHealthCheck resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/httpHealthChecks/{httpHealthCheck}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'httpHealthCheck'],
        pathParams: ['httpHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpHealthChecks.insert
     *
     * @desc Creates a HttpHealthCheck resource in the specified project using the data included in the request.
     *
     * @alias compute.httpHealthChecks.insert
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/httpHealthChecks',
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
     * compute.httpHealthChecks.list
     *
     * @desc Retrieves the list of HttpHealthCheck resources available to the specified project.
     *
     * @alias compute.httpHealthChecks.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/httpHealthChecks',
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
     * compute.httpHealthChecks.patch
     *
     * @desc Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports patch semantics.
     *
     * @alias compute.httpHealthChecks.patch
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.httpHealthCheck Name of the HttpHealthCheck resource to update.
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/httpHealthChecks/{httpHealthCheck}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'httpHealthCheck'],
        pathParams: ['httpHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpHealthChecks.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.httpHealthChecks.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/httpHealthChecks/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpHealthChecks.update
     *
     * @desc Updates a HttpHealthCheck resource in the specified project using the data included in the request.
     *
     * @alias compute.httpHealthChecks.update
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.httpHealthCheck Name of the HttpHealthCheck resource to update.
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/httpHealthChecks/{httpHealthCheck}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'httpHealthCheck'],
        pathParams: ['httpHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.httpsHealthChecks = {

    /**
     * compute.httpsHealthChecks.delete
     *
     * @desc Deletes the specified HttpsHealthCheck resource.
     *
     * @alias compute.httpsHealthChecks.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.httpsHealthCheck Name of the HttpsHealthCheck resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'httpsHealthCheck'],
        pathParams: ['httpsHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpsHealthChecks.get
     *
     * @desc Returns the specified HttpsHealthCheck resource. Get a list of available HTTPS health checks by making a list() request.
     *
     * @alias compute.httpsHealthChecks.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.httpsHealthCheck Name of the HttpsHealthCheck resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'httpsHealthCheck'],
        pathParams: ['httpsHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpsHealthChecks.insert
     *
     * @desc Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
     *
     * @alias compute.httpsHealthChecks.insert
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/httpsHealthChecks',
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
     * compute.httpsHealthChecks.list
     *
     * @desc Retrieves the list of HttpsHealthCheck resources available to the specified project.
     *
     * @alias compute.httpsHealthChecks.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/httpsHealthChecks',
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
     * compute.httpsHealthChecks.patch
     *
     * @desc Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports patch semantics.
     *
     * @alias compute.httpsHealthChecks.patch
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.httpsHealthCheck Name of the HttpsHealthCheck resource to update.
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'httpsHealthCheck'],
        pathParams: ['httpsHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpsHealthChecks.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.httpsHealthChecks.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/httpsHealthChecks/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.httpsHealthChecks.update
     *
     * @desc Updates a HttpsHealthCheck resource in the specified project using the data included in the request.
     *
     * @alias compute.httpsHealthChecks.update
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.httpsHealthCheck Name of the HttpsHealthCheck resource to update.
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'httpsHealthCheck'],
        pathParams: ['httpsHealthCheck', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.images = {

    /**
     * compute.images.delete
     *
     * @desc Deletes the specified image.
     *
     * @alias compute.images.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.image Name of the image resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/images/{image}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'image'],
        pathParams: ['image', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.images.deprecate
     *
     * @desc Sets the deprecation status of an image.  If an empty request body is given, clears the deprecation status instead.
     *
     * @alias compute.images.deprecate
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.image Image name.
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deprecate: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/images/{image}/deprecate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'image'],
        pathParams: ['image', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.images.get
     *
     * @desc Returns the specified image. Get a list of available images by making a list() request.
     *
     * @alias compute.images.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.image Name of the image resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/images/{image}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'image'],
        pathParams: ['image', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.images.getFromFamily
     *
     * @desc Returns the latest image that is part of an image family and is not deprecated.
     *
     * @alias compute.images.getFromFamily
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.family Name of the image family to search for.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getFromFamily: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/images/family/{family}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'family'],
        pathParams: ['family', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.images.insert
     *
     * @desc Creates an image in the specified project using the data included in the request.
     *
     * @alias compute.images.insert
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/images',
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
     * compute.images.list
     *
     * @desc Retrieves the list of private images available to the specified project. Private images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.
     *
     * @alias compute.images.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/images',
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
     * compute.images.setLabels
     *
     * @desc Sets the labels on an image. To learn more about labels, read the Labeling or Tagging Resources documentation.
     *
     * @alias compute.images.setLabels
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setLabels: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/images/{resource}/setLabels',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.images.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.images.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/images/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.instanceGroupManagers = {

    /**
     * compute.instanceGroupManagers.abandonInstances
     *
     * @desc Schedules a group action to remove the specified instances from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.
     *
     * @alias compute.instanceGroupManagers.abandonInstances
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    abandonInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/abandonInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.aggregatedList
     *
     * @desc Retrieves the list of managed instance groups and groups them by zone.
     *
     * @alias compute.instanceGroupManagers.aggregatedList
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/aggregated/instanceGroupManagers',
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
     * compute.instanceGroupManagers.delete
     *
     * @desc Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service. Read  Deleting an instance group for more information.
     *
     * @alias compute.instanceGroupManagers.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.deleteInstances
     *
     * @desc Schedules a group action to delete the specified instances in the managed instance group. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method.
     *
     * @alias compute.instanceGroupManagers.deleteInstances
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/deleteInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.get
     *
     * @desc Returns all of the details about the specified managed instance group. Get a list of available managed instance groups by making a list() request.
     *
     * @alias compute.instanceGroupManagers.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.insert
     *
     * @desc Creates a managed instance group using the information that you specify in the request. After the group is created, it schedules an action to create instances in the group using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.
     *
     * @alias compute.instanceGroupManagers.insert
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where you want to create the managed instance group.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroupManagers',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.list
     *
     * @desc Retrieves a list of managed instance groups that are contained within the specified project and zone.
     *
     * @alias compute.instanceGroupManagers.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroupManagers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.listManagedInstances
     *
     * @desc Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous action failed, the list displays the errors for that failed action.
     *
     * @alias compute.instanceGroupManagers.listManagedInstances
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listManagedInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/listManagedInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.recreateInstances
     *
     * @desc Schedules a group action to recreate the specified instances in the managed instance group. The instances are deleted and recreated using the current instance template for the managed instance group. This operation is marked as DONE when the action is scheduled even if the instances have not yet been recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.
     *
     * @alias compute.instanceGroupManagers.recreateInstances
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    recreateInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/recreateInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.resize
     *
     * @desc Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.
     *
     * @alias compute.instanceGroupManagers.resize
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {integer} params.size The number of running instances that the managed instance group should maintain at any given time. The group automatically adds or removes instances to maintain the number of instances specified by this parameter.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resize: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resize',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager', 'size'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.resizeAdvanced
     *
     * @desc Resizes the managed instance group with advanced configuration options like disabling creation retries. This is an extended version of the resize method.  If you increase the size of the instance group, the group creates new instances using the current instance template. If you decrease the size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating, creatingWithoutRetries, or deleting actions with the get or listmanagedinstances method.
     *
     * @alias compute.instanceGroupManagers.resizeAdvanced
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resizeAdvanced: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeAdvanced',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.setAutoHealingPolicies
     *
     * @desc Modifies the autohealing policies.
     *
     * @alias compute.instanceGroupManagers.setAutoHealingPolicies
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the instance group manager.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setAutoHealingPolicies: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setAutoHealingPolicies',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.setInstanceTemplate
     *
     * @desc Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change unless you recreate them.
     *
     * @alias compute.instanceGroupManagers.setInstanceTemplate
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setInstanceTemplate: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setInstanceTemplate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.setTargetPools
     *
     * @desc Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.
     *
     * @alias compute.instanceGroupManagers.setTargetPools
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the managed instance group is located.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setTargetPools: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setTargetPools',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroupManagers.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.instanceGroupManagers.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroupManagers/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'resource'],
        pathParams: ['project', 'resource', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.instanceGroups = {

    /**
     * compute.instanceGroups.addInstances
     *
     * @desc Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read  Adding instances for more information.
     *
     * @alias compute.instanceGroups.addInstances
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroup The name of the instance group where you are adding instances.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the instance group is located.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/addInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroup'],
        pathParams: ['instanceGroup', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroups.aggregatedList
     *
     * @desc Retrieves the list of instance groups and sorts them by zone.
     *
     * @alias compute.instanceGroups.aggregatedList
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/aggregated/instanceGroups',
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
     * compute.instanceGroups.delete
     *
     * @desc Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read  Deleting an instance group for more information.
     *
     * @alias compute.instanceGroups.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroup The name of the instance group to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the instance group is located.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroup'],
        pathParams: ['instanceGroup', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroups.get
     *
     * @desc Returns the specified instance group. Get a list of available instance groups by making a list() request.
     *
     * @alias compute.instanceGroups.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroup The name of the instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the instance group is located.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroup'],
        pathParams: ['instanceGroup', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroups.insert
     *
     * @desc Creates an instance group in the specified project using the parameters that are included in the request.
     *
     * @alias compute.instanceGroups.insert
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where you want to create the instance group.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroups',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroups.list
     *
     * @desc Retrieves the list of instance groups that are located in the specified project and zone.
     *
     * @alias compute.instanceGroups.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the instance group is located.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroups',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroups.listInstances
     *
     * @desc Lists the instances in the specified instance group.
     *
     * @alias compute.instanceGroups.listInstances
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {string} params.instanceGroup The name of the instance group from which you want to generate a list of included instances.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the instance group is located.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/listInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroup'],
        pathParams: ['instanceGroup', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroups.removeInstances
     *
     * @desc Removes one or more instances from the specified instance group, but does not delete those instances.
     *
     * @alias compute.instanceGroups.removeInstances
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroup The name of the instance group where the specified instances will be removed.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the instance group is located.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removeInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/removeInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroup'],
        pathParams: ['instanceGroup', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroups.setNamedPorts
     *
     * @desc Sets the named ports for the specified instance group.
     *
     * @alias compute.instanceGroups.setNamedPorts
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroup The name of the instance group where the named ports are updated.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone where the instance group is located.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setNamedPorts: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/setNamedPorts',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instanceGroup'],
        pathParams: ['instanceGroup', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceGroups.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.instanceGroups.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instanceGroups/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'resource'],
        pathParams: ['project', 'resource', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.instanceTemplates = {

    /**
     * compute.instanceTemplates.delete
     *
     * @desc Deletes the specified instance template. If you delete an instance template that is being referenced from another instance group, the instance group will not be able to create or recreate virtual machine instances. Deleting an instance template is permanent and cannot be undone.
     *
     * @alias compute.instanceTemplates.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceTemplate The name of the instance template to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/instanceTemplates/{instanceTemplate}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'instanceTemplate'],
        pathParams: ['instanceTemplate', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceTemplates.get
     *
     * @desc Returns the specified instance template. Get a list of available instance templates by making a list() request.
     *
     * @alias compute.instanceTemplates.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceTemplate The name of the instance template.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/instanceTemplates/{instanceTemplate}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'instanceTemplate'],
        pathParams: ['instanceTemplate', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instanceTemplates.insert
     *
     * @desc Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.
     *
     * @alias compute.instanceTemplates.insert
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/instanceTemplates',
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
     * compute.instanceTemplates.list
     *
     * @desc Retrieves a list of instance templates that are contained within the specified project and zone.
     *
     * @alias compute.instanceTemplates.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/instanceTemplates',
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
     * compute.instanceTemplates.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.instanceTemplates.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/instanceTemplates/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.instances = {

    /**
     * compute.instances.addAccessConfig
     *
     * @desc Adds an access config to an instance's network interface.
     *
     * @alias compute.instances.addAccessConfig
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance The instance name for this request.
     * @param {string} params.networkInterface The name of the network interface to add to this instance.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addAccessConfig: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}/addAccessConfig',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance', 'networkInterface'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.aggregatedList
     *
     * @desc Retrieves aggregated list of instances.
     *
     * @alias compute.instances.aggregatedList
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/aggregated/instances',
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
     * compute.instances.attachDisk
     *
     * @desc Attaches a Disk resource to an instance.
     *
     * @alias compute.instances.attachDisk
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance The instance name for this request.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    attachDisk: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}/attachDisk',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.delete
     *
     * @desc Deletes the specified Instance resource. For more information, see Stopping or Deleting an Instance.
     *
     * @alias compute.instances.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.deleteAccessConfig
     *
     * @desc Deletes an access config from an instance's network interface.
     *
     * @alias compute.instances.deleteAccessConfig
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.accessConfig The name of the access config to delete.
     * @param {string} params.instance The instance name for this request.
     * @param {string} params.networkInterface The name of the network interface.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteAccessConfig: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}/deleteAccessConfig',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance', 'accessConfig', 'networkInterface'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.detachDisk
     *
     * @desc Detaches a disk from an instance.
     *
     * @alias compute.instances.detachDisk
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deviceName Disk device name to detach.
     * @param {string} params.instance Instance name.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    detachDisk: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}/detachDisk',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance', 'deviceName'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.get
     *
     * @desc Returns the specified Instance resource. Get a list of available instances by making a list() request.
     *
     * @alias compute.instances.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.getSerialPortOutput
     *
     * @desc Returns the specified instance's serial port output.
     *
     * @alias compute.instances.getSerialPortOutput
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance scoping this request.
     * @param {integer=} params.port Specifies which COM or serial port to retrieve data from.
     * @param {string} params.project Project ID for this request.
     * @param {string=} params.start For the initial request, leave this field unspecified. For subsequent calls, this field should be set to the next value that was returned in the previous call.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getSerialPortOutput: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}/serialPort',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.insert
     *
     * @desc Creates an instance resource in the specified project using the data included in the request.
     *
     * @alias compute.instances.insert
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.list
     *
     * @desc Retrieves the list of instances contained within the specified zone.
     *
     * @alias compute.instances.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.reset
     *
     * @desc Performs a hard reset on the instance.
     *
     * @alias compute.instances.reset
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance scoping this request.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reset: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}/reset',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.setDiskAutoDelete
     *
     * @desc Sets the auto-delete flag for a disk attached to an instance.
     *
     * @alias compute.instances.setDiskAutoDelete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {boolean} params.autoDelete Whether to auto-delete the disk when the instance is deleted.
     * @param {string} params.deviceName The device name of the disk to modify.
     * @param {string} params.instance The instance name.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setDiskAutoDelete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}/setDiskAutoDelete',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance', 'autoDelete', 'deviceName'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.setLabels
     *
     * @desc Sets labels on an instance. To learn more about labels, read the Labeling or Tagging Resources documentation.
     *
     * @alias compute.instances.setLabels
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance scoping this request.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setLabels: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}/setLabels',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.setMachineType
     *
     * @desc Changes the machine type for a stopped instance to the machine type specified in the request.
     *
     * @alias compute.instances.setMachineType
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance scoping this request.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setMachineType: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}/setMachineType',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.setMetadata
     *
     * @desc Sets metadata for the specified instance to the data included in the request.
     *
     * @alias compute.instances.setMetadata
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance scoping this request.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setMetadata: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}/setMetadata',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.setScheduling
     *
     * @desc Sets an instance's scheduling options.
     *
     * @alias compute.instances.setScheduling
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Instance name.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setScheduling: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}/setScheduling',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.setTags
     *
     * @desc Sets tags for the specified instance to the data included in the request.
     *
     * @alias compute.instances.setTags
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance scoping this request.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setTags: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}/setTags',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.start
     *
     * @desc Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.
     *
     * @alias compute.instances.start
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance resource to start.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    start: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}/start',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.startWithEncryptionKey
     *
     * @desc Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.
     *
     * @alias compute.instances.startWithEncryptionKey
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance resource to start.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    startWithEncryptionKey: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}/startWithEncryptionKey',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.stop
     *
     * @desc Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur per-minute, virtual machine usage charges while they are stopped, but any resources that the virtual machine is using, such as persistent disks and static IP addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.
     *
     * @alias compute.instances.stop
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instance Name of the instance resource to stop.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stop: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{instance}/stop',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'instance'],
        pathParams: ['instance', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.instances.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.instances.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/instances/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'resource'],
        pathParams: ['project', 'resource', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.licenses = {

    /**
     * compute.licenses.get
     *
     * @desc Returns the specified License resource. Get a list of available licenses by making a list() request.
     *
     * @alias compute.licenses.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.license Name of the License resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/licenses/{license}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'license'],
        pathParams: ['license', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.machineTypes = {

    /**
     * compute.machineTypes.aggregatedList
     *
     * @desc Retrieves an aggregated list of machine types.
     *
     * @alias compute.machineTypes.aggregatedList
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/aggregated/machineTypes',
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
     * compute.machineTypes.get
     *
     * @desc Returns the specified machine type. Get a list of available machine types by making a list() request.
     *
     * @alias compute.machineTypes.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.machineType Name of the machine type to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/machineTypes/{machineType}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'machineType'],
        pathParams: ['machineType', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.machineTypes.list
     *
     * @desc Retrieves a list of machine types available to the specified project.
     *
     * @alias compute.machineTypes.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/machineTypes',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.networks = {

    /**
     * compute.networks.delete
     *
     * @desc Deletes the specified network.
     *
     * @alias compute.networks.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.network Name of the network to delete.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/networks/{network}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'network'],
        pathParams: ['network', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.networks.get
     *
     * @desc Returns the specified network. Get a list of available networks by making a list() request.
     *
     * @alias compute.networks.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.network Name of the network to return.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/networks/{network}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'network'],
        pathParams: ['network', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.networks.insert
     *
     * @desc Creates a network in the specified project using the data included in the request.
     *
     * @alias compute.networks.insert
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/networks',
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
     * compute.networks.list
     *
     * @desc Retrieves the list of networks available to the specified project.
     *
     * @alias compute.networks.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/networks',
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
     * compute.networks.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.networks.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/networks/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.projects = {

    /**
     * compute.projects.get
     *
     * @desc Returns the specified Project resource.
     *
     * @alias compute.projects.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}',
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
     * compute.projects.moveDisk
     *
     * @desc Moves a persistent disk from one zone to another.
     *
     * @alias compute.projects.moveDisk
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    moveDisk: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/moveDisk',
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
     * compute.projects.moveInstance
     *
     * @desc Moves an instance and its attached persistent disks from one zone to another.
     *
     * @alias compute.projects.moveInstance
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    moveInstance: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/moveInstance',
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
     * compute.projects.setCommonInstanceMetadata
     *
     * @desc Sets metadata common to all instances within the specified project using the data included in the request.
     *
     * @alias compute.projects.setCommonInstanceMetadata
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setCommonInstanceMetadata: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/setCommonInstanceMetadata',
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
     * compute.projects.setUsageExportBucket
     *
     * @desc Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.
     *
     * @alias compute.projects.setUsageExportBucket
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setUsageExportBucket: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/setUsageExportBucket',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.regionAutoscalers = {

    /**
     * compute.regionAutoscalers.delete
     *
     * @desc Deletes the specified autoscaler.
     *
     * @alias compute.regionAutoscalers.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.autoscaler Name of the autoscaler to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/autoscalers/{autoscaler}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'autoscaler'],
        pathParams: ['autoscaler', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionAutoscalers.get
     *
     * @desc Returns the specified autoscaler.
     *
     * @alias compute.regionAutoscalers.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.autoscaler Name of the autoscaler to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/autoscalers/{autoscaler}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'autoscaler'],
        pathParams: ['autoscaler', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionAutoscalers.insert
     *
     * @desc Creates an autoscaler in the specified project using the data included in the request.
     *
     * @alias compute.regionAutoscalers.insert
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/autoscalers',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionAutoscalers.list
     *
     * @desc Retrieves a list of autoscalers contained within the specified region.
     *
     * @alias compute.regionAutoscalers.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/autoscalers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionAutoscalers.patch
     *
     * @desc Updates a autoscaler in the specified project using the data included in the request. This method supports patch semantics.
     *
     * @alias compute.regionAutoscalers.patch
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.autoscaler Name of the autoscaler to update.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/autoscalers',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'region', 'autoscaler'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionAutoscalers.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.regionAutoscalers.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region The name of the region for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/autoscalers/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'resource'],
        pathParams: ['project', 'region', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionAutoscalers.update
     *
     * @desc Updates a autoscaler in the specified project using the data included in the request.
     *
     * @alias compute.regionAutoscalers.update
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.autoscaler Name of the autoscaler to update.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/autoscalers',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.regionInstanceGroupManagers = {

    /**
     * compute.regionInstanceGroupManagers.abandonInstances
     *
     * @desc Schedules a group action to remove the specified instances from the managed instance group. Abandoning an instance does not delete the instance, but it does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.
     *
     * @alias compute.regionInstanceGroupManagers.abandonInstances
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager Name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    abandonInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/abandonInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionInstanceGroupManagers.delete
     *
     * @desc Deletes the specified managed instance group and all of the instances in that group.
     *
     * @alias compute.regionInstanceGroupManagers.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager Name of the managed instance group to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionInstanceGroupManagers.deleteInstances
     *
     * @desc Schedules a group action to delete the specified instances in the managed instance group. The instances are also removed from any target pools of which they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action with the listmanagedinstances method.
     *
     * @alias compute.regionInstanceGroupManagers.deleteInstances
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager Name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/deleteInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionInstanceGroupManagers.get
     *
     * @desc Returns all of the details for the specified managed instance group.
     *
     * @alias compute.regionInstanceGroupManagers.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager Name of the managed instance group to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionInstanceGroupManagers.insert
     *
     * @desc Creates a managed instance group using the information that you specify in the request. After the group is created, it schedules an action to create instances in the group using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.
     *
     * @alias compute.regionInstanceGroupManagers.insert
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroupManagers',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionInstanceGroupManagers.list
     *
     * @desc Retrieves the list of managed instance groups that are contained within the specified region.
     *
     * @alias compute.regionInstanceGroupManagers.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroupManagers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionInstanceGroupManagers.listManagedInstances
     *
     * @desc Lists the instances in the managed instance group and instances that are scheduled to be created. The list includes any current actions that the group has scheduled for its instances.
     *
     * @alias compute.regionInstanceGroupManagers.listManagedInstances
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listManagedInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/listManagedInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionInstanceGroupManagers.recreateInstances
     *
     * @desc Schedules a group action to recreate the specified instances in the managed instance group. The instances are deleted and recreated using the current instance template for the managed instance group. This operation is marked as DONE when the action is scheduled even if the instances have not yet been recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.
     *
     * @alias compute.regionInstanceGroupManagers.recreateInstances
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager Name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    recreateInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/recreateInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionInstanceGroupManagers.resize
     *
     * @desc Changes the intended size for the managed instance group. If you increase the size, the group schedules actions to create new instances using the current instance template. If you decrease the size, the group schedules delete actions on one or more instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.
     *
     * @alias compute.regionInstanceGroupManagers.resize
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager Name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {integer} params.size Number of instances that should exist in this instance group manager.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resize: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resize',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'instanceGroupManager', 'size'],
        pathParams: ['instanceGroupManager', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionInstanceGroupManagers.setAutoHealingPolicies
     *
     * @desc Modifies the autohealing policy for the instances in this managed instance group.
     *
     * @alias compute.regionInstanceGroupManagers.setAutoHealingPolicies
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager Name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setAutoHealingPolicies: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/setAutoHealingPolicies',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionInstanceGroupManagers.setInstanceTemplate
     *
     * @desc Sets the instance template to use when creating new instances in this group. Existing instances are not affected.
     *
     * @alias compute.regionInstanceGroupManagers.setInstanceTemplate
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setInstanceTemplate: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/setInstanceTemplate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionInstanceGroupManagers.setTargetPools
     *
     * @desc Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.
     *
     * @alias compute.regionInstanceGroupManagers.setTargetPools
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager Name of the managed instance group.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setTargetPools: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/setTargetPools',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionInstanceGroupManagers.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.regionInstanceGroupManagers.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region The name of the region for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroupManagers/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'resource'],
        pathParams: ['project', 'region', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.regionInstanceGroups = {

    /**
     * compute.regionInstanceGroups.get
     *
     * @desc Returns the specified instance group resource.
     *
     * @alias compute.regionInstanceGroups.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroup Name of the instance group resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroups/{instanceGroup}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'instanceGroup'],
        pathParams: ['instanceGroup', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionInstanceGroups.list
     *
     * @desc Retrieves the list of instance group resources contained within the specified region.
     *
     * @alias compute.regionInstanceGroups.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroups',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionInstanceGroups.listInstances
     *
     * @desc Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running.
     *
     * @alias compute.regionInstanceGroups.listInstances
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {string} params.instanceGroup Name of the regional instance group for which we want to list the instances.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listInstances: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroups/{instanceGroup}/listInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'instanceGroup'],
        pathParams: ['instanceGroup', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionInstanceGroups.setNamedPorts
     *
     * @desc Sets the named ports for the specified regional instance group.
     *
     * @alias compute.regionInstanceGroups.setNamedPorts
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroup The name of the regional instance group where the named ports are updated.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setNamedPorts: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroups/{instanceGroup}/setNamedPorts',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'instanceGroup'],
        pathParams: ['instanceGroup', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionInstanceGroups.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.regionInstanceGroups.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region The name of the region for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/instanceGroups/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'resource'],
        pathParams: ['project', 'region', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.regionOperations = {

    /**
     * compute.regionOperations.delete
     *
     * @desc Deletes the specified region-specific Operations resource.
     *
     * @alias compute.regionOperations.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation Name of the Operations resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/operations/{operation}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'operation'],
        pathParams: ['operation', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionOperations.get
     *
     * @desc Retrieves the specified region-specific Operations resource.
     *
     * @alias compute.regionOperations.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation Name of the Operations resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/operations/{operation}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'operation'],
        pathParams: ['operation', 'project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regionOperations.list
     *
     * @desc Retrieves a list of Operation resources contained within the specified region.
     *
     * @alias compute.regionOperations.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/operations',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.regions = {

    /**
     * compute.regions.get
     *
     * @desc Returns the specified Region resource. Get a list of available regions by making a list() request.
     *
     * @alias compute.regions.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.regions.list
     *
     * @desc Retrieves the list of region resources available to the specified project.
     *
     * @alias compute.regions.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions',
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

  self.routers = {

    /**
     * compute.routers.aggregatedList
     *
     * @desc Retrieves an aggregated list of routers.
     *
     * @alias compute.routers.aggregatedList
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/aggregated/routers',
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
     * compute.routers.delete
     *
     * @desc Deletes the specified Router resource.
     *
     * @alias compute.routers.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.router Name of the Router resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/routers/{router}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'router'],
        pathParams: ['project', 'region', 'router'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routers.get
     *
     * @desc Returns the specified Router resource. Get a list of available routers by making a list() request.
     *
     * @alias compute.routers.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.router Name of the Router resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/routers/{router}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'router'],
        pathParams: ['project', 'region', 'router'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routers.getRouterStatus
     *
     * @desc Retrieves runtime information of the specified router.
     *
     * @alias compute.routers.getRouterStatus
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.router Name of the Router resource to query.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getRouterStatus: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/routers/{router}/getRouterStatus',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'router'],
        pathParams: ['project', 'region', 'router'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routers.insert
     *
     * @desc Creates a Router resource in the specified project and region using the data included in the request.
     *
     * @alias compute.routers.insert
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/routers',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routers.list
     *
     * @desc Retrieves a list of Router resources available to the specified project.
     *
     * @alias compute.routers.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/routers',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routers.patch
     *
     * @desc Updates the entire content of the Router resource. This method supports patch semantics.
     *
     * @alias compute.routers.patch
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.router Name of the Router resource to update.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/routers/{router}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'region', 'router'],
        pathParams: ['project', 'region', 'router'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routers.preview
     *
     * @desc Preview fields auto-generated during router create and update operations. Calling this method does NOT create or update the router.
     *
     * @alias compute.routers.preview
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.router Name of the Router resource to query.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    preview: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/routers/{router}/preview',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'router'],
        pathParams: ['project', 'region', 'router'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routers.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.routers.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region The name of the region for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/routers/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'resource'],
        pathParams: ['project', 'region', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routers.update
     *
     * @desc Updates the entire content of the Router resource.
     *
     * @alias compute.routers.update
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.router Name of the Router resource to update.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/routers/{router}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'region', 'router'],
        pathParams: ['project', 'region', 'router'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.routes = {

    /**
     * compute.routes.delete
     *
     * @desc Deletes the specified Route resource.
     *
     * @alias compute.routes.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.route Name of the Route resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/routes/{route}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'route'],
        pathParams: ['project', 'route'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routes.get
     *
     * @desc Returns the specified Route resource. Get a list of available routes by making a list() request.
     *
     * @alias compute.routes.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.route Name of the Route resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/routes/{route}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'route'],
        pathParams: ['project', 'route'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.routes.insert
     *
     * @desc Creates a Route resource in the specified project using the data included in the request.
     *
     * @alias compute.routes.insert
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/routes',
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
     * compute.routes.list
     *
     * @desc Retrieves the list of Route resources available to the specified project.
     *
     * @alias compute.routes.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/routes',
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
     * compute.routes.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.routes.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/routes/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.snapshots = {

    /**
     * compute.snapshots.delete
     *
     * @desc Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot.  For more information, see Deleting snaphots.
     *
     * @alias compute.snapshots.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.snapshot Name of the Snapshot resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/snapshots/{snapshot}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'snapshot'],
        pathParams: ['project', 'snapshot'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.snapshots.get
     *
     * @desc Returns the specified Snapshot resource. Get a list of available snapshots by making a list() request.
     *
     * @alias compute.snapshots.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.snapshot Name of the Snapshot resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/snapshots/{snapshot}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'snapshot'],
        pathParams: ['project', 'snapshot'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.snapshots.list
     *
     * @desc Retrieves the list of Snapshot resources contained within the specified project.
     *
     * @alias compute.snapshots.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/snapshots',
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
     * compute.snapshots.setLabels
     *
     * @desc Sets the labels on a snapshot. To learn more about labels, read the Labeling or Tagging Resources documentation.
     *
     * @alias compute.snapshots.setLabels
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setLabels: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/snapshots/{resource}/setLabels',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.snapshots.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.snapshots.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/snapshots/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.sslCertificates = {

    /**
     * compute.sslCertificates.delete
     *
     * @desc Deletes the specified SslCertificate resource.
     *
     * @alias compute.sslCertificates.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.sslCertificate Name of the SslCertificate resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/sslCertificates/{sslCertificate}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'sslCertificate'],
        pathParams: ['project', 'sslCertificate'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.sslCertificates.get
     *
     * @desc Returns the specified SslCertificate resource. Get a list of available SSL certificates by making a list() request.
     *
     * @alias compute.sslCertificates.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.sslCertificate Name of the SslCertificate resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/sslCertificates/{sslCertificate}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'sslCertificate'],
        pathParams: ['project', 'sslCertificate'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.sslCertificates.insert
     *
     * @desc Creates a SslCertificate resource in the specified project using the data included in the request.
     *
     * @alias compute.sslCertificates.insert
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/sslCertificates',
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
     * compute.sslCertificates.list
     *
     * @desc Retrieves the list of SslCertificate resources available to the specified project.
     *
     * @alias compute.sslCertificates.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/sslCertificates',
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
     * compute.sslCertificates.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.sslCertificates.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/sslCertificates/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.subnetworks = {

    /**
     * compute.subnetworks.aggregatedList
     *
     * @desc Retrieves an aggregated list of subnetworks.
     *
     * @alias compute.subnetworks.aggregatedList
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/aggregated/subnetworks',
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
     * compute.subnetworks.delete
     *
     * @desc Deletes the specified subnetwork.
     *
     * @alias compute.subnetworks.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.subnetwork Name of the Subnetwork resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/subnetworks/{subnetwork}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'subnetwork'],
        pathParams: ['project', 'region', 'subnetwork'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.subnetworks.get
     *
     * @desc Returns the specified subnetwork. Get a list of available subnetworks list() request.
     *
     * @alias compute.subnetworks.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.subnetwork Name of the Subnetwork resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/subnetworks/{subnetwork}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'subnetwork'],
        pathParams: ['project', 'region', 'subnetwork'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.subnetworks.insert
     *
     * @desc Creates a subnetwork in the specified project using the data included in the request.
     *
     * @alias compute.subnetworks.insert
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/subnetworks',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.subnetworks.list
     *
     * @desc Retrieves a list of subnetworks available to the specified project.
     *
     * @alias compute.subnetworks.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/subnetworks',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.subnetworks.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.subnetworks.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region The name of the region for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/subnetworks/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'resource'],
        pathParams: ['project', 'region', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.targetHttpProxies = {

    /**
     * compute.targetHttpProxies.delete
     *
     * @desc Deletes the specified TargetHttpProxy resource.
     *
     * @alias compute.targetHttpProxies.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetHttpProxy Name of the TargetHttpProxy resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetHttpProxies/{targetHttpProxy}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'targetHttpProxy'],
        pathParams: ['project', 'targetHttpProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetHttpProxies.get
     *
     * @desc Returns the specified TargetHttpProxy resource. Get a list of available target HTTP proxies by making a list() request.
     *
     * @alias compute.targetHttpProxies.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetHttpProxy Name of the TargetHttpProxy resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetHttpProxies/{targetHttpProxy}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'targetHttpProxy'],
        pathParams: ['project', 'targetHttpProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetHttpProxies.insert
     *
     * @desc Creates a TargetHttpProxy resource in the specified project using the data included in the request.
     *
     * @alias compute.targetHttpProxies.insert
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetHttpProxies',
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
     * compute.targetHttpProxies.list
     *
     * @desc Retrieves the list of TargetHttpProxy resources available to the specified project.
     *
     * @alias compute.targetHttpProxies.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetHttpProxies',
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
     * compute.targetHttpProxies.setUrlMap
     *
     * @desc Changes the URL map for TargetHttpProxy.
     *
     * @alias compute.targetHttpProxies.setUrlMap
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetHttpProxy Name of the TargetHttpProxy to set a URL map for.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setUrlMap: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/targetHttpProxies/{targetHttpProxy}/setUrlMap',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'targetHttpProxy'],
        pathParams: ['project', 'targetHttpProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetHttpProxies.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.targetHttpProxies.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetHttpProxies/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.targetHttpsProxies = {

    /**
     * compute.targetHttpsProxies.delete
     *
     * @desc Deletes the specified TargetHttpsProxy resource.
     *
     * @alias compute.targetHttpsProxies.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetHttpsProxy Name of the TargetHttpsProxy resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'targetHttpsProxy'],
        pathParams: ['project', 'targetHttpsProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetHttpsProxies.get
     *
     * @desc Returns the specified TargetHttpsProxy resource. Get a list of available target HTTPS proxies by making a list() request.
     *
     * @alias compute.targetHttpsProxies.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetHttpsProxy Name of the TargetHttpsProxy resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'targetHttpsProxy'],
        pathParams: ['project', 'targetHttpsProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetHttpsProxies.insert
     *
     * @desc Creates a TargetHttpsProxy resource in the specified project using the data included in the request.
     *
     * @alias compute.targetHttpsProxies.insert
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetHttpsProxies',
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
     * compute.targetHttpsProxies.list
     *
     * @desc Retrieves the list of TargetHttpsProxy resources available to the specified project.
     *
     * @alias compute.targetHttpsProxies.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetHttpsProxies',
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
     * compute.targetHttpsProxies.setSslCertificates
     *
     * @desc Replaces SslCertificates for TargetHttpsProxy.
     *
     * @alias compute.targetHttpsProxies.setSslCertificates
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetHttpsProxy Name of the TargetHttpsProxy resource to set an SslCertificates resource for.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setSslCertificates: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/targetHttpsProxies/{targetHttpsProxy}/setSslCertificates',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'targetHttpsProxy'],
        pathParams: ['project', 'targetHttpsProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetHttpsProxies.setUrlMap
     *
     * @desc Changes the URL map for TargetHttpsProxy.
     *
     * @alias compute.targetHttpsProxies.setUrlMap
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetHttpsProxy Name of the TargetHttpsProxy resource whose URL map is to be set.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setUrlMap: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/targetHttpsProxies/{targetHttpsProxy}/setUrlMap',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'targetHttpsProxy'],
        pathParams: ['project', 'targetHttpsProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetHttpsProxies.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.targetHttpsProxies.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetHttpsProxies/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.targetInstances = {

    /**
     * compute.targetInstances.aggregatedList
     *
     * @desc Retrieves an aggregated list of target instances.
     *
     * @alias compute.targetInstances.aggregatedList
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/aggregated/targetInstances',
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
     * compute.targetInstances.delete
     *
     * @desc Deletes the specified TargetInstance resource.
     *
     * @alias compute.targetInstances.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetInstance Name of the TargetInstance resource to delete.
     * @param {string} params.zone Name of the zone scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/targetInstances/{targetInstance}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'targetInstance'],
        pathParams: ['project', 'targetInstance', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetInstances.get
     *
     * @desc Returns the specified TargetInstance resource. Get a list of available target instances by making a list() request.
     *
     * @alias compute.targetInstances.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetInstance Name of the TargetInstance resource to return.
     * @param {string} params.zone Name of the zone scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/targetInstances/{targetInstance}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'targetInstance'],
        pathParams: ['project', 'targetInstance', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetInstances.insert
     *
     * @desc Creates a TargetInstance resource in the specified project and zone using the data included in the request.
     *
     * @alias compute.targetInstances.insert
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/targetInstances',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetInstances.list
     *
     * @desc Retrieves a list of TargetInstance resources available to the specified project and zone.
     *
     * @alias compute.targetInstances.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/targetInstances',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetInstances.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.targetInstances.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {string} params.zone The name of the zone for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/targetInstances/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'zone', 'resource'],
        pathParams: ['project', 'resource', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.targetPools = {

    /**
     * compute.targetPools.addHealthCheck
     *
     * @desc Adds health check URLs to a target pool.
     *
     * @alias compute.targetPools.addHealthCheck
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.targetPool Name of the target pool to add a health check to.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addHealthCheck: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/targetPools/{targetPool}/addHealthCheck',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.addInstance
     *
     * @desc Adds an instance to a target pool.
     *
     * @alias compute.targetPools.addInstance
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.targetPool Name of the TargetPool resource to add instances to.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addInstance: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/targetPools/{targetPool}/addInstance',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.aggregatedList
     *
     * @desc Retrieves an aggregated list of target pools.
     *
     * @alias compute.targetPools.aggregatedList
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/aggregated/targetPools',
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
     * compute.targetPools.delete
     *
     * @desc Deletes the specified target pool.
     *
     * @alias compute.targetPools.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.targetPool Name of the TargetPool resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/targetPools/{targetPool}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.get
     *
     * @desc Returns the specified target pool. Get a list of available target pools by making a list() request.
     *
     * @alias compute.targetPools.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.targetPool Name of the TargetPool resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/targetPools/{targetPool}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.getHealth
     *
     * @desc Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.
     *
     * @alias compute.targetPools.getHealth
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.targetPool Name of the TargetPool resource to which the queried instance belongs.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getHealth: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/targetPools/{targetPool}/getHealth',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.insert
     *
     * @desc Creates a target pool in the specified project and region using the data included in the request.
     *
     * @alias compute.targetPools.insert
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/targetPools',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.list
     *
     * @desc Retrieves a list of target pools available to the specified project and region.
     *
     * @alias compute.targetPools.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/targetPools',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.removeHealthCheck
     *
     * @desc Removes health check URL from a target pool.
     *
     * @alias compute.targetPools.removeHealthCheck
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.targetPool Name of the target pool to remove health checks from.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removeHealthCheck: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/targetPools/{targetPool}/removeHealthCheck',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.removeInstance
     *
     * @desc Removes instance URL from a target pool.
     *
     * @alias compute.targetPools.removeInstance
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.targetPool Name of the TargetPool resource to remove instances from.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    removeInstance: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/targetPools/{targetPool}/removeInstance',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.setBackup
     *
     * @desc Changes a backup target pool's configurations.
     *
     * @alias compute.targetPools.setBackup
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {number=} params.failoverRatio New failoverRatio value for the target pool.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region scoping this request.
     * @param {string} params.targetPool Name of the TargetPool resource to set a backup pool for.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setBackup: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/targetPools/{targetPool}/setBackup',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetPool'],
        pathParams: ['project', 'region', 'targetPool'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetPools.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.targetPools.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region The name of the region for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/targetPools/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'resource'],
        pathParams: ['project', 'region', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.targetSslProxies = {

    /**
     * compute.targetSslProxies.delete
     *
     * @desc Deletes the specified TargetSslProxy resource.
     *
     * @alias compute.targetSslProxies.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetSslProxy Name of the TargetSslProxy resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetSslProxies/{targetSslProxy}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'targetSslProxy'],
        pathParams: ['project', 'targetSslProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetSslProxies.get
     *
     * @desc Returns the specified TargetSslProxy resource. Get a list of available target SSL proxies by making a list() request.
     *
     * @alias compute.targetSslProxies.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetSslProxy Name of the TargetSslProxy resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetSslProxies/{targetSslProxy}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'targetSslProxy'],
        pathParams: ['project', 'targetSslProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetSslProxies.insert
     *
     * @desc Creates a TargetSslProxy resource in the specified project using the data included in the request.
     *
     * @alias compute.targetSslProxies.insert
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetSslProxies',
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
     * compute.targetSslProxies.list
     *
     * @desc Retrieves the list of TargetSslProxy resources available to the specified project.
     *
     * @alias compute.targetSslProxies.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetSslProxies',
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
     * compute.targetSslProxies.setBackendService
     *
     * @desc Changes the BackendService for TargetSslProxy.
     *
     * @alias compute.targetSslProxies.setBackendService
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetSslProxy Name of the TargetSslProxy resource whose BackendService resource is to be set.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setBackendService: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetSslProxies/{targetSslProxy}/setBackendService',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'targetSslProxy'],
        pathParams: ['project', 'targetSslProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetSslProxies.setProxyHeader
     *
     * @desc Changes the ProxyHeaderType for TargetSslProxy.
     *
     * @alias compute.targetSslProxies.setProxyHeader
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetSslProxy Name of the TargetSslProxy resource whose ProxyHeader is to be set.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setProxyHeader: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetSslProxies/{targetSslProxy}/setProxyHeader',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'targetSslProxy'],
        pathParams: ['project', 'targetSslProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetSslProxies.setSslCertificates
     *
     * @desc Changes SslCertificates for TargetSslProxy.
     *
     * @alias compute.targetSslProxies.setSslCertificates
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.targetSslProxy Name of the TargetSslProxy resource whose SslCertificate resource is to be set.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setSslCertificates: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetSslProxies/{targetSslProxy}/setSslCertificates',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'targetSslProxy'],
        pathParams: ['project', 'targetSslProxy'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetSslProxies.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.targetSslProxies.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/targetSslProxies/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.targetVpnGateways = {

    /**
     * compute.targetVpnGateways.aggregatedList
     *
     * @desc Retrieves an aggregated list of target VPN gateways.
     *
     * @alias compute.targetVpnGateways.aggregatedList
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/aggregated/targetVpnGateways',
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
     * compute.targetVpnGateways.delete
     *
     * @desc Deletes the specified target VPN gateway.
     *
     * @alias compute.targetVpnGateways.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.targetVpnGateway Name of the target VPN gateway to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/targetVpnGateways/{targetVpnGateway}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetVpnGateway'],
        pathParams: ['project', 'region', 'targetVpnGateway'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetVpnGateways.get
     *
     * @desc Returns the specified target VPN gateway. Get a list of available target VPN gateways by making a list() request.
     *
     * @alias compute.targetVpnGateways.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.targetVpnGateway Name of the target VPN gateway to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/targetVpnGateways/{targetVpnGateway}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'targetVpnGateway'],
        pathParams: ['project', 'region', 'targetVpnGateway'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetVpnGateways.insert
     *
     * @desc Creates a target VPN gateway in the specified project and region using the data included in the request.
     *
     * @alias compute.targetVpnGateways.insert
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/targetVpnGateways',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetVpnGateways.list
     *
     * @desc Retrieves a list of target VPN gateways available to the specified project and region.
     *
     * @alias compute.targetVpnGateways.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/targetVpnGateways',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.targetVpnGateways.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.targetVpnGateways.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region The name of the region for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/targetVpnGateways/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'resource'],
        pathParams: ['project', 'region', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.urlMaps = {

    /**
     * compute.urlMaps.delete
     *
     * @desc Deletes the specified UrlMap resource.
     *
     * @alias compute.urlMaps.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.urlMap Name of the UrlMap resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/urlMaps/{urlMap}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.urlMaps.get
     *
     * @desc Returns the specified UrlMap resource. Get a list of available URL maps by making a list() request.
     *
     * @alias compute.urlMaps.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.urlMap Name of the UrlMap resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/urlMaps/{urlMap}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.urlMaps.insert
     *
     * @desc Creates a UrlMap resource in the specified project using the data included in the request.
     *
     * @alias compute.urlMaps.insert
     * @memberOf! compute(beta)
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/urlMaps',
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
     * compute.urlMaps.invalidateCache
     *
     * @desc Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap.
     *
     * @alias compute.urlMaps.invalidateCache
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.urlMap Name of the UrlMap scoping this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    invalidateCache: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/urlMaps/{urlMap}/invalidateCache',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.urlMaps.list
     *
     * @desc Retrieves the list of UrlMap resources available to the specified project.
     *
     * @alias compute.urlMaps.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/urlMaps',
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
     * compute.urlMaps.patch
     *
     * @desc Updates the entire content of the UrlMap resource. This method supports patch semantics.
     *
     * @alias compute.urlMaps.patch
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.urlMap Name of the UrlMap resource to update.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/urlMaps/{urlMap}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.urlMaps.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.urlMaps.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/urlMaps/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.urlMaps.update
     *
     * @desc Updates the entire content of the UrlMap resource.
     *
     * @alias compute.urlMaps.update
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.urlMap Name of the UrlMap resource to update.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/urlMaps/{urlMap}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.urlMaps.validate
     *
     * @desc Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.
     *
     * @alias compute.urlMaps.validate
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.urlMap Name of the UrlMap resource to be validated as.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    validate: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/global/urlMaps/{urlMap}/validate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'urlMap'],
        pathParams: ['project', 'urlMap'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.vpnTunnels = {

    /**
     * compute.vpnTunnels.aggregatedList
     *
     * @desc Retrieves an aggregated list of VPN tunnels.
     *
     * @alias compute.vpnTunnels.aggregatedList
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    aggregatedList: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/aggregated/vpnTunnels',
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
     * compute.vpnTunnels.delete
     *
     * @desc Deletes the specified VpnTunnel resource.
     *
     * @alias compute.vpnTunnels.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.vpnTunnel Name of the VpnTunnel resource to delete.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/vpnTunnels/{vpnTunnel}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'region', 'vpnTunnel'],
        pathParams: ['project', 'region', 'vpnTunnel'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.vpnTunnels.get
     *
     * @desc Returns the specified VpnTunnel resource. Get a list of available VPN tunnels by making a list() request.
     *
     * @alias compute.vpnTunnels.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {string} params.vpnTunnel Name of the VpnTunnel resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/vpnTunnels/{vpnTunnel}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region', 'vpnTunnel'],
        pathParams: ['project', 'region', 'vpnTunnel'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.vpnTunnels.insert
     *
     * @desc Creates a VpnTunnel resource in the specified project and region using the data included in the request.
     *
     * @alias compute.vpnTunnels.insert
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/vpnTunnels',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.vpnTunnels.list
     *
     * @desc Retrieves a list of VpnTunnel resources contained in the specified project and region.
     *
     * @alias compute.vpnTunnels.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region Name of the region for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/vpnTunnels',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'region'],
        pathParams: ['project', 'region'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.vpnTunnels.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias compute.vpnTunnels.testIamPermissions
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.region The name of the region for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/regions/{region}/vpnTunnels/{resource}/testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'region', 'resource'],
        pathParams: ['project', 'region', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.zoneOperations = {

    /**
     * compute.zoneOperations.delete
     *
     * @desc Deletes the specified zone-specific Operations resource.
     *
     * @alias compute.zoneOperations.delete
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation Name of the Operations resource to delete.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/operations/{operation}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'zone', 'operation'],
        pathParams: ['operation', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.zoneOperations.get
     *
     * @desc Retrieves the specified zone-specific Operations resource.
     *
     * @alias compute.zoneOperations.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation Name of the Operations resource to return.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/operations/{operation}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone', 'operation'],
        pathParams: ['operation', 'project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.zoneOperations.list
     *
     * @desc Retrieves a list of Operation resources contained within the specified zone.
     *
     * @alias compute.zoneOperations.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone for request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}/operations',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.zones = {

    /**
     * compute.zones.get
     *
     * @desc Returns the specified Zone resource. Get a list of available zones by making a list() request.
     *
     * @alias compute.zones.get
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.zone Name of the zone resource to return.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones/{zone}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * compute.zones.list
     *
     * @desc Retrieves the list of Zone resources available to the specified project.
     *
     * @alias compute.zones.list
     * @memberOf! compute(beta)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
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
          url: 'https://www.googleapis.com/compute/beta/projects/{project}/zones',
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

module.exports = Compute;
