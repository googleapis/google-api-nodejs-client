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
 * Google Proximity Beacon API
 *
 * Registers, manages, indexes, and searches beacons.
 *
 * @example
 * var google = require('googleapis');
 * var proximitybeacon = google.proximitybeacon('v1beta1');
 *
 * @namespace proximitybeacon
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Proximitybeacon
 */
function Proximitybeacon(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.beacons = {

    /**
     * proximitybeacon.beacons.register
     *
     * @desc Registers a previously unregistered beacon given its `advertisedId`. These IDs are unique within the system. An ID can be registered only once. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
     *
     * @alias proximitybeacon.beacons.register
     * @memberOf! proximitybeacon(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.projectId The project id of the project the beacon will be registered to. If the project id is not specified then the project making the request is used. Optional.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    register: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://proximitybeacon.googleapis.com/v1beta1/beacons:register',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * proximitybeacon.beacons.decommission
     *
     * @desc Decommissions the specified beacon in the service. This beacon will no longer be returned from `beaconinfo.getforobserved`. This operation is permanent -- you will not be able to re-register a beacon with this ID again. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
     *
     * @alias proximitybeacon.beacons.decommission
     * @memberOf! proximitybeacon(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.beaconName Beacon that should be decommissioned. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID of the beacon's "stable" UID. Required.
     * @param {string=} params.projectId The project id of the beacon to decommission. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    decommission: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://proximitybeacon.googleapis.com/v1beta1/{beaconName}:decommission',
          method: 'POST'
        },
        params: params,
        requiredParams: ['beaconName'],
        pathParams: ['beaconName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * proximitybeacon.beacons.get
     *
     * @desc Returns detailed information about the specified beacon. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project. Requests may supply an Eddystone-EID beacon name in the form: `beacons/4!beaconId` where the `beaconId` is the base16 ephemeral ID broadcast by the beacon. The returned `Beacon` object will contain the beacon's stable Eddystone-UID. Clients not authorized to resolve the beacon's ephemeral Eddystone-EID broadcast will receive an error.
     *
     * @alias proximitybeacon.beacons.get
     * @memberOf! proximitybeacon(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.beaconName Resource name of this beacon. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
     * @param {string=} params.projectId The project id of the beacon to request. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://proximitybeacon.googleapis.com/v1beta1/{beaconName}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['beaconName'],
        pathParams: ['beaconName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * proximitybeacon.beacons.list
     *
     * @desc Searches the beacon registry for beacons that match the given search criteria. Only those beacons that the client has permission to list will be returned. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
     *
     * @alias proximitybeacon.beacons.list
     * @memberOf! proximitybeacon(v1beta1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.q Filter query string that supports the following field filters: * `description:""` For example: `description:"Room 3"` Returns beacons whose description matches tokens in the string "Room 3" (not necessarily that exact string). The string must be double-quoted. * `status:` For example: `status:active` Returns beacons whose status matches the given value. Values must be one of the Beacon.Status enum values (case insensitive). Accepts multiple filters which will be combined with OR logic. * `stability:` For example: `stability:mobile` Returns beacons whose expected stability matches the given value. Values must be one of the Beacon.Stability enum values (case insensitive). Accepts multiple filters which will be combined with OR logic. * `place_id:""` For example: `place_id:"ChIJVSZzVR8FdkgRXGmmm6SslKw="` Returns beacons explicitly registered at the given place, expressed as a Place ID obtained from [Google Places API](/places/place-id). Does not match places inside the given place. Does not consider the beacon's actual location (which may be different from its registered place). Accepts multiple filters that will be combined with OR logic. The place ID must be double-quoted. * `registration_time[|=]` For example: `registration_time>=1433116800` Returns beacons whose registration time matches the given filter. Supports the operators: , =. Timestamp must be expressed as an integer number of seconds since midnight January 1, 1970 UTC. Accepts at most two filters that will be combined with AND logic, to support "between" semantics. If more than two are supplied, the latter ones are ignored. * `lat: lng: radius:` For example: `lat:51.1232343 lng:-1.093852 radius:1000` Returns beacons whose registered location is within the given circle. When any of these fields are given, all are required. Latitude and longitude must be decimal degrees between -90.0 and 90.0 and between -180.0 and 180.0 respectively. Radius must be an integer number of meters between 10 and 1,000,000 (1000 km). * `property:"="` For example: `property:"battery-type=CR2032"` Returns beacons which have a property of the given name and value. Supports multiple filters which will be combined with OR logic. The entire name=value string must be double-quoted as one string. * `attachment_type:""` For example: `attachment_type:"my-namespace/my-type"` Returns beacons having at least one attachment of the given namespaced type. Supports "any within this namespace" via the partial wildcard syntax: "my-namespace/x". Supports multiple filters which will be combined with OR logic. The string must be double-quoted. Multiple filters on the same field are combined with OR logic (except registration_time which is combined with AND logic). Multiple filters on different fields are combined with AND logic. Filters should be separated by spaces. As with any HTTP query string parameter, the whole filter expression must be URL-encoded. Example REST request: `GET /v1beta1/beacons?q=status:active%20lat:51.123%20lng:-1.095%20radius:1000`
     * @param {string=} params.pageToken A pagination token obtained from a previous request to list beacons.
     * @param {integer=} params.pageSize The maximum number of records to return for this request, up to a server-defined upper limit.
     * @param {string=} params.projectId The project id to list beacons under. If not present then the project credential that made the request is used as the project. Optional.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://proximitybeacon.googleapis.com/v1beta1/beacons',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * proximitybeacon.beacons.update
     *
     * @desc Updates the information about the specified beacon. **Any field that you do not populate in the submitted beacon will be permanently erased**, so you should follow the "read, modify, write" pattern to avoid inadvertently destroying data. Changes to the beacon status via this method will be silently ignored. To update beacon status, use the separate methods on this API for activation, deactivation, and decommissioning. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
     *
     * @alias proximitybeacon.beacons.update
     * @memberOf! proximitybeacon(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.beaconName Resource name of this beacon. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon. This field must be left empty when registering. After reading a beacon, clients can use the name for future operations.
     * @param {string=} params.projectId The project id of the beacon to update. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://proximitybeacon.googleapis.com/v1beta1/{beaconName}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['beaconName'],
        pathParams: ['beaconName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * proximitybeacon.beacons.activate
     *
     * @desc Activates a beacon. A beacon that is active will return information and attachment data when queried via `beaconinfo.getforobserved`. Calling this method on an already active beacon will do nothing (but will return a successful response code). Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
     *
     * @alias proximitybeacon.beacons.activate
     * @memberOf! proximitybeacon(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.beaconName Beacon that should be activated. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
     * @param {string=} params.projectId The project id of the beacon to activate. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    activate: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://proximitybeacon.googleapis.com/v1beta1/{beaconName}:activate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['beaconName'],
        pathParams: ['beaconName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * proximitybeacon.beacons.deactivate
     *
     * @desc Deactivates a beacon. Once deactivated, the API will not return information nor attachment data for the beacon when queried via `beaconinfo.getforobserved`. Calling this method on an already inactive beacon will do nothing (but will return a successful response code). Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
     *
     * @alias proximitybeacon.beacons.deactivate
     * @memberOf! proximitybeacon(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.beaconName Beacon that should be deactivated. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
     * @param {string=} params.projectId The project id of the beacon to deactivate. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deactivate: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://proximitybeacon.googleapis.com/v1beta1/{beaconName}:deactivate',
          method: 'POST'
        },
        params: params,
        requiredParams: ['beaconName'],
        pathParams: ['beaconName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    attachments: {

      /**
       * proximitybeacon.beacons.attachments.create
       *
       * @desc Associates the given data with the specified beacon. Attachment data must contain two parts:   - A namespaced type.  - The actual attachment data itself.  The namespaced type consists of two parts, the namespace and the type. The namespace must be one of the values returned by the `namespaces` endpoint, while the type can be a string of any characters except for the forward slash (`/`) up to 100 characters in length. Attachment data can be up to 1024 bytes long. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
       *
       * @alias proximitybeacon.beacons.attachments.create
       * @memberOf! proximitybeacon(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.beaconName Beacon on which the attachment should be created. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
       * @param {string=} params.projectId The project id of the project the attachment will belong to. If the project id is not specified then the project making the request is used. Optional.
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://proximitybeacon.googleapis.com/v1beta1/{beaconName}/attachments',
            method: 'POST'
          },
          params: params,
          requiredParams: ['beaconName'],
          pathParams: ['beaconName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * proximitybeacon.beacons.attachments.list
       *
       * @desc Returns the attachments for the specified beacon that match the specified namespaced-type pattern. To control which namespaced types are returned, you add the `namespacedType` query parameter to the request. You must either use `x/x`, to return all attachments, or the namespace must be one of the ones returned from the `namespaces` endpoint. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
       *
       * @alias proximitybeacon.beacons.attachments.list
       * @memberOf! proximitybeacon(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.beaconName Beacon whose attachments should be fetched. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
       * @param {string=} params.namespacedType Specifies the namespace and type of attachment to include in response in namespace/type format. Accepts `x/x` to specify "all types in all namespaces".
       * @param {string=} params.projectId The project id to list beacon attachments under. This field can be used when "*" is specified to mean all attachment namespaces. Projects may have multiple attachments with multiple namespaces. If "*" is specified and the projectId string is empty, then the project making the request is used. Optional.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://proximitybeacon.googleapis.com/v1beta1/{beaconName}/attachments',
            method: 'GET'
          },
          params: params,
          requiredParams: ['beaconName'],
          pathParams: ['beaconName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * proximitybeacon.beacons.attachments.delete
       *
       * @desc Deletes the specified attachment for the given beacon. Each attachment has a unique attachment name (`attachmentName`) which is returned when you fetch the attachment data via this API. You specify this with the delete request to control which attachment is removed. This operation cannot be undone. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
       *
       * @alias proximitybeacon.beacons.attachments.delete
       * @memberOf! proximitybeacon(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.attachmentName The attachment name (`attachmentName`) of the attachment to remove. For example: `beacons/3!893737abc9/attachments/c5e937-af0-494-959-ec49d12738`. For Eddystone-EID beacons, the beacon ID portion (`3!893737abc9`) may be the beacon's current EID, or its "stable" Eddystone-UID. Required.
       * @param {string=} params.projectId The project id of the attachment to delete. If not provided, the project that is making the request is used. Optional.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://proximitybeacon.googleapis.com/v1beta1/{attachmentName}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['attachmentName'],
          pathParams: ['attachmentName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * proximitybeacon.beacons.attachments.batchDelete
       *
       * @desc Deletes multiple attachments on a given beacon. This operation is permanent and cannot be undone. You can optionally specify `namespacedType` to choose which attachments should be deleted. If you do not specify `namespacedType`, all your attachments on the given beacon will be deleted. You also may explicitly specify `x/x` to delete all. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **Is owner** or **Can edit** permissions in the Google Developers Console project.
       *
       * @alias proximitybeacon.beacons.attachments.batchDelete
       * @memberOf! proximitybeacon(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.beaconName The beacon whose attachments should be deleted. A beacon name has the format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by the beacon and N is a code for the beacon's type. Possible values are `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5` for AltBeacon. For Eddystone-EID beacons, you may use either the current EID or the beacon's "stable" UID. Required.
       * @param {string=} params.namespacedType Specifies the namespace and type of attachments to delete in `namespace/type` format. Accepts `x/x` to specify "all types in all namespaces". Optional.
       * @param {string=} params.projectId The project id to delete beacon attachments under. This field can be used when "*" is specified to mean all attachment namespaces. Projects may have multiple attachments with multiple namespaces. If "*" is specified and the projectId string is empty, then the project making the request is used. Optional.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      batchDelete: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://proximitybeacon.googleapis.com/v1beta1/{beaconName}/attachments:batchDelete',
            method: 'POST'
          },
          params: params,
          requiredParams: ['beaconName'],
          pathParams: ['beaconName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    diagnostics: {

      /**
       * proximitybeacon.beacons.diagnostics.list
       *
       * @desc List the diagnostics for a single beacon. You can also list diagnostics for all the beacons owned by your Google Developers Console project by using the beacon name `beacons/-`. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
       *
       * @alias proximitybeacon.beacons.diagnostics.list
       * @memberOf! proximitybeacon(v1beta1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.beaconName Beacon that the diagnostics are for.
       * @param {integer=} params.pageSize Specifies the maximum number of results to return. Defaults to 10. Maximum 1000. Optional.
       * @param {string=} params.pageToken Requests results that occur after the `page_token`, obtained from the response to a previous request. Optional.
       * @param {string=} params.alertFilter Requests only beacons that have the given alert. For example, to find beacons that have low batteries use `alert_filter=LOW_BATTERY`.
       * @param {string=} params.projectId Requests only diagnostic records for the given project id. If not set, then the project making the request will be used for looking up diagnostic records. Optional.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://proximitybeacon.googleapis.com/v1beta1/{beaconName}/diagnostics',
            method: 'GET'
          },
          params: params,
          requiredParams: ['beaconName'],
          pathParams: ['beaconName'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.namespaces = {

    /**
     * proximitybeacon.namespaces.list
     *
     * @desc Lists all attachment namespaces owned by your Google Developers Console project. Attachment data associated with a beacon must include a namespaced type, and the namespace must be owned by your project. Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2) from a signed-in user with **viewer**, **Is owner** or **Can edit** permissions in the Google Developers Console project.
     *
     * @alias proximitybeacon.namespaces.list
     * @memberOf! proximitybeacon(v1beta1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.projectId The project id to list namespaces under. Optional.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://proximitybeacon.googleapis.com/v1beta1/namespaces',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * proximitybeacon.namespaces.update
     *
     * @desc Updates the information about the specified namespace. Only the namespace visibility can be updated.
     *
     * @alias proximitybeacon.namespaces.update
     * @memberOf! proximitybeacon(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.namespaceName Resource name of this namespace. Namespaces names have the format: namespaces/namespace.
     * @param {string=} params.projectId The project id of the namespace to update. If the project id is not specified then the project making the request is used. The project id must match the project that owns the beacon. Optional.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://proximitybeacon.googleapis.com/v1beta1/{namespaceName}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['namespaceName'],
        pathParams: ['namespaceName'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.v1beta1 = {

    /**
     * proximitybeacon.getEidparams
     *
     * @desc Gets the Proximity Beacon API's current public key and associated parameters used to initiate the Diffie-Hellman key exchange required to register a beacon that broadcasts the Eddystone-EID format. This key changes periodically; clients may cache it and re-use the same public key to provision and register multiple beacons. However, clients should be prepared to refresh this key when they encounter an error registering an Eddystone-EID beacon.
     *
     * @alias proximitybeacon.getEidparams
     * @memberOf! proximitybeacon(v1beta1)
     *
     * @param {object=} params Parameters for request
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getEidparams: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://proximitybeacon.googleapis.com/v1beta1/eidparams',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.beaconinfo = {

    /**
     * proximitybeacon.beaconinfo.getforobserved
     *
     * @desc Given one or more beacon observations, returns any beacon information and attachments accessible to your application. Authorize by using the [API key](https://developers.google.com/beacons/proximity/how-tos/authorizing#APIKey) for the application.
     *
     * @alias proximitybeacon.beaconinfo.getforobserved
     * @memberOf! proximitybeacon(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getforobserved: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://proximitybeacon.googleapis.com/v1beta1/beaconinfo:getforobserved',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Proximitybeacon;
