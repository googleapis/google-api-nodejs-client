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
 * var dns = google.dns('v1');
 *
 * @namespace dns
 * @type {Function}
 * @version v1
 * @variation v1
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud DNS API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/dns_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var dns = google.dns('v1');
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
     *     // TODO: Change placeholders below to appropriate parameter values for the 'create' method:
     *
     *     // Identifies the project addressed by this request.
     *     project: "",
     *     // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     *     managedZone: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   dns.changes.create(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias dns.changes.create
     * @memberOf! dns(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create: function (params, callback) {
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud DNS API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/dns_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var dns = google.dns('v1');
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
     *     // Identifies the project addressed by this request.
     *     project: "",
     *     // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     *     managedZone: "",
     *     // The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
     *     changeId: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   dns.changes.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias dns.changes.get
     * @memberOf! dns(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.changeId The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
     * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud DNS API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/dns_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var dns = google.dns('v1');
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
     *     // Identifies the project addressed by this request.
     *     project: "",
     *     // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     *     managedZone: "",
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
     *         dns.changes.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   dns.changes.list(request, recur);
     * });
     *
     * @alias dns.changes.list
     * @memberOf! dns(v1)
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

  self.managedZones = {

    /**
     * dns.managedZones.create
     *
     * @desc Create a new ManagedZone.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud DNS API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/dns_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var dns = google.dns('v1');
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
     *     // TODO: Change placeholders below to appropriate parameter values for the 'create' method:
     *
     *     // Identifies the project addressed by this request.
     *     project: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   dns.managedZones.create(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias dns.managedZones.create
     * @memberOf! dns(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create: function (params, callback) {
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud DNS API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/dns_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var dns = google.dns('v1');
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
     *     // Identifies the project addressed by this request.
     *     project: "",
     *     // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     *     managedZone: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   dns.managedZones.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias dns.managedZones.delete
     * @memberOf! dns(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud DNS API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/dns_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var dns = google.dns('v1');
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
     *     // Identifies the project addressed by this request.
     *     project: "",
     *     // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     *     managedZone: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   dns.managedZones.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias dns.managedZones.get
     * @memberOf! dns(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.managedZone Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud DNS API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/dns_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var dns = google.dns('v1');
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
     *     // Identifies the project addressed by this request.
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
     *         dns.managedZones.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   dns.managedZones.list(request, recur);
     * });
     *
     * @alias dns.managedZones.list
     * @memberOf! dns(v1)
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

  self.projects = {

    /**
     * dns.projects.get
     *
     * @desc Fetch the representation of an existing Project.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud DNS API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/dns_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var dns = google.dns('v1');
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
     *     // Identifies the project addressed by this request.
     *     project: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   dns.projects.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias dns.projects.get
     * @memberOf! dns(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Identifies the project addressed by this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
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

  self.resourceRecordSets = {

    /**
     * dns.resourceRecordSets.list
     *
     * @desc Enumerate ResourceRecordSets that have been created but not yet deleted.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud DNS API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/dns_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var dns = google.dns('v1');
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
     *     // Identifies the project addressed by this request.
     *     project: "",
     *     // Identifies the managed zone addressed by this request. Can be the managed zone name or id.
     *     managedZone: "",
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
     *         dns.resourceRecordSets.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   dns.resourceRecordSets.list(request, recur);
     * });
     *
     * @alias dns.resourceRecordSets.list
     * @memberOf! dns(v1)
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

module.exports = Dns;
