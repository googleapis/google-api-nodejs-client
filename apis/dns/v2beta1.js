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
 * Configures and serves authoritative DNS records.
 *
 * @example
 * var google = require('googleapis');
 * var dns = google.dns('v2beta1');
 *
 * @namespace dns
 * @type {Function}
 * @version v2beta1
 * @variation v2beta1
 * @param {object=} options Options for Dns
 */
function Dns(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.changes = {

    /**
     * dns.changes.create
     *
     * @desc Atomically update the ResourceRecordSet collection.
     *
     * @alias dns.changes.create
     * @memberOf! dns(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}/changes',
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
     * @memberOf! dns(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.changeId The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
     * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}/changes/{changeId}',
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
     * @memberOf! dns(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param {integer=} params.maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
     * @param {string=} params.pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {string=} params.sortBy Sorting criterion. The only supported value is change sequence.
     * @param {string=} params.sortOrder Sorting order direction: 'ascending' or 'descending'.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}/changes',
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

  self.dnskeys = {

    /**
     * dns.dnskeys.get
     *
     * @desc Fetch the representation of an existing DnsKey.
     *
     * @alias dns.dnskeys.get
     * @memberOf! dns(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string=} params.digestType An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type will be computed and displayed.
     * @param {string} params.dnsKeyId The identifier of the requested DnsKey.
     * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}/dnsKeys/{dnsKeyId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'managedZone', 'dnsKeyId'],
        pathParams: ['dnsKeyId', 'managedZone', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dns.dnskeys.list
     *
     * @desc Enumerate DnsKeys to a ResourceRecordSet collection.
     *
     * @alias dns.dnskeys.list
     * @memberOf! dns(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.digestType An optional comma-separated list of digest types to compute and display for key signing keys. If omitted, the recommended digest type will be computed and displayed.
     * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param {integer=} params.maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
     * @param {string=} params.pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}/dnsKeys',
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

  self.managedZoneOperations = {

    /**
     * dns.managedZoneOperations.get
     *
     * @desc Fetch the representation of an existing Operation.
     *
     * @alias dns.managedZoneOperations.get
     * @memberOf! dns(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone Identifies the managed zone addressed by this request.
     * @param {string} params.operation Identifies the operation addressed by this request.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}/operations/{operation}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'managedZone', 'operation'],
        pathParams: ['managedZone', 'operation', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dns.managedZoneOperations.list
     *
     * @desc Enumerate Operations for the given ManagedZone.
     *
     * @alias dns.managedZoneOperations.list
     * @memberOf! dns(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.managedZone Identifies the managed zone addressed by this request.
     * @param {integer=} params.maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
     * @param {string=} params.pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {string=} params.sortBy Sorting criterion. The only supported values are START_TIME and ID.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}/operations',
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

  self.managedZones = {

    /**
     * dns.managedZones.create
     *
     * @desc Create a new ManagedZone.
     *
     * @alias dns.managedZones.create
     * @memberOf! dns(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones',
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
     * @memberOf! dns(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}',
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
     * @memberOf! dns(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}',
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
     * @memberOf! dns(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.dnsName Restricts the list to return only zones with this domain name.
     * @param {integer=} params.maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
     * @param {string=} params.pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones',
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
     * dns.managedZones.patch
     *
     * @desc Update an existing ManagedZone. This method supports patch semantics.
     *
     * @alias dns.managedZones.patch
     * @memberOf! dns(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * dns.managedZones.update
     *
     * @desc Update an existing ManagedZone.
     *
     * @alias dns.managedZones.update
     * @memberOf! dns(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'managedZone'],
        pathParams: ['managedZone', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.projects = {

    /**
     * dns.projects.get
     *
     * @desc Fetch the representation of an existing Project.
     *
     * @alias dns.projects.get
     * @memberOf! dns(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.clientOperationId For mutating operation requests only. An optional identifier specified by the client. Must be unique for operation resources in the Operations collection.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}',
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

  self.resourceRecordSets = {

    /**
     * dns.resourceRecordSets.list
     *
     * @desc Enumerate ResourceRecordSets that have been created but not yet deleted.
     *
     * @alias dns.resourceRecordSets.list
     * @memberOf! dns(v2beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param {integer=} params.maxResults Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
     * @param {string=} params.name Restricts the list to return only records with this fully qualified domain name.
     * @param {string=} params.pageToken Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {string=} params.type Restricts the list to return only records of this type. If present, the "name" parameter must also be present.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/dns/v2beta1/projects/{project}/managedZones/{managedZone}/rrsets',
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

module.exports = Dns;
