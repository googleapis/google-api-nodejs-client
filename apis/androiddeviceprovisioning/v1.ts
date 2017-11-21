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

import {
  createAPIRequest
} from '../../lib/apirequest';

/**
 * Android Device Provisioning Partner API
 *
 * Automates reseller integration into zero-touch enrollment by assigning devices to customers and creating device reports.
 *
 * @example
 * const google = require('googleapis');
 * const androiddeviceprovisioning = google.androiddeviceprovisioning('v1');
 *
 * @namespace androiddeviceprovisioning
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Androiddeviceprovisioning
 */
function Androiddeviceprovisioning(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.operations = {

    /**
     * androiddeviceprovisioning.operations.get
     *
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @alias androiddeviceprovisioning.operations.get
     * @memberOf! androiddeviceprovisioning(v1)
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

      const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';

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

  };

  self.partners = {
    customers: {

      /**
       * androiddeviceprovisioning.partners.customers.create
       *
       * @desc Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The API doesn't notify the customer that they have access.
       *
       * @alias androiddeviceprovisioning.partners.customers.create
       * @memberOf! androiddeviceprovisioning(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent Required. The parent resource ID in the format `partners/[PARTNER_ID]` that identifies the reseller.
       * @param {androiddeviceprovisioning(v1).CreateCustomerRequest} params.resource Request body data
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

        const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/{parent}/customers').replace(/([^:]\/)\/+/g, '$1'),
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
       * androiddeviceprovisioning.partners.customers.list
       *
       * @desc Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
       *
       * @alias androiddeviceprovisioning.partners.customers.list
       * @memberOf! androiddeviceprovisioning(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.partnerId The ID of the partner.
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

        const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/partners/{partnerId}/customers').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['partnerId'],
          pathParams: ['partnerId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },
    devices: {

      /**
       * androiddeviceprovisioning.partners.devices.claim
       *
       * @desc Claim the device identified by device identifier.
       *
       * @alias androiddeviceprovisioning.partners.devices.claim
       * @memberOf! androiddeviceprovisioning(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.partnerId ID of the partner.
       * @param {androiddeviceprovisioning(v1).ClaimDeviceRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      claim: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/partners/{partnerId}/devices:claim').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['partnerId'],
          pathParams: ['partnerId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androiddeviceprovisioning.partners.devices.claimAsync
       *
       * @desc Claim devices asynchronously.
       *
       * @alias androiddeviceprovisioning.partners.devices.claimAsync
       * @memberOf! androiddeviceprovisioning(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.partnerId Partner ID.
       * @param {androiddeviceprovisioning(v1).ClaimDevicesRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      claimAsync: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/partners/{partnerId}/devices:claimAsync').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['partnerId'],
          pathParams: ['partnerId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androiddeviceprovisioning.partners.devices.findByIdentifier
       *
       * @desc Find devices by device identifier.
       *
       * @alias androiddeviceprovisioning.partners.devices.findByIdentifier
       * @memberOf! androiddeviceprovisioning(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.partnerId ID of the partner.
       * @param {androiddeviceprovisioning(v1).FindDevicesByDeviceIdentifierRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      findByIdentifier: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/partners/{partnerId}/devices:findByIdentifier').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['partnerId'],
          pathParams: ['partnerId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androiddeviceprovisioning.partners.devices.findByOwner
       *
       * @desc Find devices by ownership.
       *
       * @alias androiddeviceprovisioning.partners.devices.findByOwner
       * @memberOf! androiddeviceprovisioning(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.partnerId ID of the partner.
       * @param {androiddeviceprovisioning(v1).FindDevicesByOwnerRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      findByOwner: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/partners/{partnerId}/devices:findByOwner').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['partnerId'],
          pathParams: ['partnerId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androiddeviceprovisioning.partners.devices.get
       *
       * @desc Get a device.
       *
       * @alias androiddeviceprovisioning.partners.devices.get
       * @memberOf! androiddeviceprovisioning(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name in `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
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

        const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';

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
       * androiddeviceprovisioning.partners.devices.metadata
       *
       * @desc Update the metadata.
       *
       * @alias androiddeviceprovisioning.partners.devices.metadata
       * @memberOf! androiddeviceprovisioning(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.deviceId ID of the partner.
       * @param {string} params.metadataOwnerId The owner of the newly set metadata. Set this to the partner ID.
       * @param {androiddeviceprovisioning(v1).UpdateDeviceMetadataRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      metadata: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/partners/{metadataOwnerId}/devices/{deviceId}/metadata').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['metadataOwnerId', 'deviceId'],
          pathParams: ['deviceId', 'metadataOwnerId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androiddeviceprovisioning.partners.devices.unclaim
       *
       * @desc Unclaim the device identified by the `device_id` or the `deviceIdentifier`.
       *
       * @alias androiddeviceprovisioning.partners.devices.unclaim
       * @memberOf! androiddeviceprovisioning(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.partnerId ID of the partner.
       * @param {androiddeviceprovisioning(v1).UnclaimDeviceRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      unclaim: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/partners/{partnerId}/devices:unclaim').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['partnerId'],
          pathParams: ['partnerId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androiddeviceprovisioning.partners.devices.unclaimAsync
       *
       * @desc Unclaim devices asynchronously.
       *
       * @alias androiddeviceprovisioning.partners.devices.unclaimAsync
       * @memberOf! androiddeviceprovisioning(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.partnerId Partner ID.
       * @param {androiddeviceprovisioning(v1).UnclaimDevicesRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      unclaimAsync: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/partners/{partnerId}/devices:unclaimAsync').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['partnerId'],
          pathParams: ['partnerId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * androiddeviceprovisioning.partners.devices.updateMetadataAsync
       *
       * @desc Set metadata in batch asynchronously.
       *
       * @alias androiddeviceprovisioning.partners.devices.updateMetadataAsync
       * @memberOf! androiddeviceprovisioning(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.partnerId Partner ID.
       * @param {androiddeviceprovisioning(v1).UpdateDeviceMetadataInBatchRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      updateMetadataAsync: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://androiddeviceprovisioning.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v1/partners/{partnerId}/devices:updateMetadataAsync').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['partnerId'],
          pathParams: ['partnerId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * @typedef ClaimDeviceRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} customerId The customer to claim for.
 * @property {androiddeviceprovisioning(v1).DeviceIdentifier} deviceIdentifier The device identifier of the device to claim.
 * @property {string} sectionType The section to claim.
 */

/**
 * @typedef ClaimDeviceResponse
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
* @property {string} deviceId The device ID of the claimed device.
* @property {string} deviceName The resource name of the device in the format
`partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
*/

/**
 * @typedef ClaimDevicesRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).PartnerClaim[]} claims List of claims.
 */

/**
 * @typedef Company
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
* @property {string[]} adminEmails Input only. Optional. Email address of customer&#39;s users in the admin role.
Each email address must be associated with a Google Account.
* @property {string} companyId Output only. The ID of the company. Assigned by the server.
* @property {string} companyName Required. The name of the company. For example _XYZ Corp_. Characters
allowed are: Latin letters, numerals, hyphens, and spaces. Displayed to the
customer&#39;s employees in the zero-touch enrollment portal.
* @property {string} name Output only. The API resource name of the company in the format
`partners/[PARTNER_ID]/customers/[CUSTOMER_ID]`. Assigned by the server.
* @property {string[]} ownerEmails Input only. Email address of customer&#39;s users in the owner role. At least
one `owner_email` is required. Each email address must be associated with a
Google Account. Owners share the same access as admins but can also add,
delete, and edit your organization&#39;s portal users.
*/

/**
 * @typedef CreateCustomerRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
* @property {androiddeviceprovisioning(v1).Company} customer Required. The company data to populate the new customer. Must contain a
value for `companyName` and at least one `owner_email` that&#39;s associated
with a Google Account. The values for `companyId` and `name` must be empty.
*/

/**
 * @typedef Device
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
* @property {androiddeviceprovisioning(v1).DeviceClaim[]} claims Output only. The provisioning claims for a device. Devices claimed for
zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`.
Call
`partners.devices.unclaim`
or
`partners.devices.unclaimAsync`
to remove the device from zero-touch enrollment.
* @property {string} configuration Not available to resellers.
* @property {string} deviceId Output only. The ID of the device. Assigned by the server.
* @property {androiddeviceprovisioning(v1).DeviceIdentifier} deviceIdentifier The hardware IDs that identify a manufactured device. To learn more, read
[Identifiers](/zero-touch/guides/identifiers).
* @property {androiddeviceprovisioning(v1).DeviceMetadata} deviceMetadata The metadata attached to the device. Structured as key-value pairs. To
learn more, read [Device metadata](/zero-touch/guides/metadata).
* @property {string} name Output only. The API resource name in the format
`partners/[PARTNER_ID]/devices/[DEVICE_ID]`. Assigned by the server.
*/

/**
 * @typedef DeviceClaim
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} ownerCompanyId The ID of the Customer that purchased the device.
 * @property {string} sectionType Output only. The type of claim made on the device.
 */

/**
 * @typedef DeviceIdentifier
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
* @property {string} imei The device’s IMEI number. Validated on input.
* @property {string} manufacturer Required. The device manufacturer’s name. Matches the device&#39;s built-in
value returned from `android.os.Build.MANUFACTURER`. Allowed values are
listed in [manufacturer names](/zero-touch/resources/manufacturer-names).
* @property {string} meid The device’s MEID number.
* @property {string} serialNumber The manufacturer&#39;s serial number for the device. This value might not be
unique.
*/

/**
 * @typedef DeviceMetadata
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {object} entries Metadata entries recorded as key-value pairs.
 */

/**
 * @typedef DevicesLongRunningOperationMetadata
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {integer} devicesCount Number of devices parsed in your requests.
 * @property {string} processingStatus The overall processing status.
 * @property {integer} progress Processing progress from 0 to 100.
 */

/**
 * @typedef DevicesLongRunningOperationResponse
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
* @property {androiddeviceprovisioning(v1).OperationPerDevice[]} perDeviceStatus Processing status for each device.
One `PerDeviceStatus` per device. The order is the same as in your requests.
* @property {integer} successCount Number of succeesfully processed ones.
*/

/**
 * @typedef Empty
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 */

/**
 * @typedef FindDevicesByDeviceIdentifierRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).DeviceIdentifier} deviceIdentifier The device identifier to search.
 * @property {string} limit Number of devices to show.
 * @property {string} pageToken Page token.
 */

/**
 * @typedef FindDevicesByDeviceIdentifierResponse
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).Device[]} devices Found devices.
 * @property {string} nextPageToken Page token of the next page.
 */

/**
 * @typedef FindDevicesByOwnerRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string[]} customerId List of customer IDs to search for.
 * @property {string} limit The number of devices to show in the result.
 * @property {string} pageToken Page token.
 * @property {string} sectionType The section type.
 */

/**
 * @typedef FindDevicesByOwnerResponse
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).Device[]} devices Devices found.
 * @property {string} nextPageToken Page token of the next page.
 */

/**
 * @typedef ListCustomersResponse
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).Company[]} customers List of customers related to this partner.
 */

/**
 * @typedef Operation
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
* @property {boolean} done If the value is `false`, it means the operation is still in progress.
If `true`, the operation is completed, and either `error` or `response` is
available.
* @property {androiddeviceprovisioning(v1).Status} error This field will always be not set if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`. In this case, error information for each device is set in `response.perDeviceStatus.result.status`.
* @property {object} metadata This field will contain a `DevicesLongRunningOperationMetadata` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`.
* @property {string} name The server-assigned name, which is only unique within the same service that
originally returns it. If you use the default HTTP mapping, the
`name` should have the format of `operations/some/unique/name`.
* @property {object} response This field will contain a `DevicesLongRunningOperationResponse` object if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`.
*/

/**
 * @typedef OperationPerDevice
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).PartnerClaim} claim Request to claim a device.
 * @property {androiddeviceprovisioning(v1).PerDeviceStatusInBatch} result Processing result for every device.
 * @property {androiddeviceprovisioning(v1).PartnerUnclaim} unclaim Request to unclaim a device.
 * @property {androiddeviceprovisioning(v1).UpdateMetadataArguments} updateMetadata Request to set metadata for a device.
 */

/**
 * @typedef PartnerClaim
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} customerId Customer ID to claim for.
 * @property {androiddeviceprovisioning(v1).DeviceIdentifier} deviceIdentifier Device identifier of the device.
 * @property {androiddeviceprovisioning(v1).DeviceMetadata} deviceMetadata Metadata to set at claim.
 * @property {string} sectionType Section type to claim.
 */

/**
 * @typedef PartnerUnclaim
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} deviceId Device ID of the device.
 * @property {androiddeviceprovisioning(v1).DeviceIdentifier} deviceIdentifier Device identifier of the device.
 * @property {string} sectionType Section type to unclaim.
 */

/**
 * @typedef PerDeviceStatusInBatch
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} deviceId Device ID of the device if process succeeds.
 * @property {string} errorIdentifier Error identifier.
 * @property {string} errorMessage Error message.
 * @property {string} status Process result.
 */

/**
 * @typedef Status
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {object[]} details A list of messages that carry the error details.  There is a common set of
message types for APIs to use.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
*/

/**
 * @typedef UnclaimDeviceRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} deviceId The device ID returned by `ClaimDevice`.
 * @property {androiddeviceprovisioning(v1).DeviceIdentifier} deviceIdentifier The device identifier you used when you claimed this device.
 * @property {string} sectionType The section type to unclaim for.
 */

/**
 * @typedef UnclaimDevicesRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).PartnerUnclaim[]} unclaims List of devices to unclaim.
 */

/**
 * @typedef UpdateDeviceMetadataInBatchRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).UpdateMetadataArguments[]} updates List of metadata updates.
 */

/**
 * @typedef UpdateDeviceMetadataRequest
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {androiddeviceprovisioning(v1).DeviceMetadata} deviceMetadata The metdata to set.
 */

/**
 * @typedef UpdateMetadataArguments
 * @memberOf! androiddeviceprovisioning(v1)
 * @type object
 * @property {string} deviceId Device ID of the device.
 * @property {androiddeviceprovisioning(v1).DeviceIdentifier} deviceIdentifier Device identifier.
 * @property {androiddeviceprovisioning(v1).DeviceMetadata} deviceMetadata The metadata to update.
 */
export = Androiddeviceprovisioning;
