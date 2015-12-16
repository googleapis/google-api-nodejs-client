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
 * Google Cloud DNS API
 *
 * @classdesc The Google Cloud DNS API provides services for configuring and serving authoritative DNS records.
 * @namespace dns
 * @version  v1
 * @variation v1
 * @this Dns
 * @param {object=} options Options for Dns
 */
function Dns(options) {

  var self = this;
  this._options = options || {};

  this.changes = {

    /**
     * dns.changes.create
     *
     * @desc Atomically update the ResourceRecordSet collection.
     *
     * @alias dns.changes.create
     * @memberOf! dns(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.managedZone - Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param  {string} params.project - Identifies the project addressed by this request.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v1/projects/{project}/managedZones/{managedZone}/changes',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dns.changes.get
     *
     * @desc Fetch the representation of an existing Change.
     *
     * @alias dns.changes.get
     * @memberOf! dns(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.changeId - The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
     * @param  {string} params.managedZone - Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param  {string} params.project - Identifies the project addressed by this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v1/projects/{project}/managedZones/{managedZone}/changes/{changeId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'managedZone', 'changeId'],
        pathParams: ['changeId', 'managedZone', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dns.changes.list
     *
     * @desc Enumerate Changes to a ResourceRecordSet collection.
     *
     * @alias dns.changes.list
     * @memberOf! dns(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.managedZone - Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param  {integer=} params.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
     * @param  {string=} params.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param  {string} params.project - Identifies the project addressed by this request.
     * @param  {string=} params.sortBy - Sorting criterion. The only supported value is change sequence.
     * @param  {string=} params.sortOrder - Sorting order direction: 'ascending' or 'descending'.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v1/projects/{project}/managedZones/{managedZone}/changes',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.managedZones = {

    /**
     * dns.managedZones.create
     *
     * @desc Create a new ManagedZone.
     *
     * @alias dns.managedZones.create
     * @memberOf! dns(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Identifies the project addressed by this request.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v1/projects/{project}/managedZones',
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
     * dns.managedZones.delete
     *
     * @desc Delete a previously created ManagedZone.
     *
     * @alias dns.managedZones.delete
     * @memberOf! dns(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.managedZone - Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param  {string} params.project - Identifies the project addressed by this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v1/projects/{project}/managedZones/{managedZone}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dns.managedZones.get
     *
     * @desc Fetch the representation of an existing ManagedZone.
     *
     * @alias dns.managedZones.get
     * @memberOf! dns(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.managedZone - Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param  {string} params.project - Identifies the project addressed by this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v1/projects/{project}/managedZones/{managedZone}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dns.managedZones.list
     *
     * @desc Enumerate ManagedZones that have been created but not yet deleted.
     *
     * @alias dns.managedZones.list
     * @memberOf! dns(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.dnsName - Restricts the list to return only zones with this domain name.
     * @param  {integer=} params.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
     * @param  {string=} params.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param  {string} params.project - Identifies the project addressed by this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v1/projects/{project}/managedZones',
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

  this.projects = {

    /**
     * dns.projects.get
     *
     * @desc Fetch the representation of an existing Project.
     *
     * @alias dns.projects.get
     * @memberOf! dns(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.project - Identifies the project addressed by this request.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v1/projects/{project}',
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

  this.resourceRecordSets = {

    /**
     * dns.resourceRecordSets.list
     *
     * @desc Enumerate ResourceRecordSets that have been created but not yet deleted.
     *
     * @alias dns.resourceRecordSets.list
     * @memberOf! dns(v1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.managedZone - Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param  {integer=} params.maxResults - Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
     * @param  {string=} params.name - Restricts the list to return only records with this fully qualified domain name.
     * @param  {string=} params.pageToken - Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param  {string} params.project - Identifies the project addressed by this request.
     * @param  {string=} params.type - Restricts the list to return only records of this type. If present, the "name" parameter must also be present.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v1/projects/{project}/managedZones/{managedZone}/rrsets',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Dns object
 * @type Dns
 */
module.exports = Dns;