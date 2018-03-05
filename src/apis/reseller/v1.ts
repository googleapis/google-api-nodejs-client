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
 * Enterprise Apps Reseller API
 *
 * Creates and manages your customers and their subscriptions.
 *
 * @example
 * const google = require('googleapis');
 * const reseller = google.reseller('v1');
 *
 * @namespace reseller
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Reseller
 */
function Reseller(options) {
  const self = this;
  self._options = options || {};
  self.customers = {
    /**
     * reseller.customers.get
     * @desc Get a customer account.
     * @alias reseller.customers.get
     * @memberOf! reseller(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
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
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/apps/reseller/v1/customers/{customerId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * reseller.customers.insert
        * @desc Order a new customer's account.
        * @alias reseller.customers.insert
        * @memberOf! reseller(v1)
        *
        * @param {object} params Parameters for request
        * @param {string=} params.customerAuthToken The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
        * @param {reseller(v1).Customer} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    insert(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/apps/reseller/v1/customers')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * reseller.customers.patch
        * @desc Update a customer account's settings. This method supports patch
        * semantics.
        * @alias reseller.customers.patch
        * @memberOf! reseller(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
        * @param {reseller(v1).Customer} params.resource Request body data
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
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/apps/reseller/v1/customers/{customerId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * reseller.customers.update
        * @desc Update a customer account's settings.
        * @alias reseller.customers.update
        * @memberOf! reseller(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
        * @param {reseller(v1).Customer} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    update(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/apps/reseller/v1/customers/{customerId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['customerId'],
        pathParams: ['customerId'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.resellernotify = {
    /**
     * reseller.resellernotify.getwatchdetails
     * @desc Returns all the details of the watch corresponding to the reseller.
     * @alias reseller.resellernotify.getwatchdetails
     * @memberOf! reseller(v1)
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getwatchdetails(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/apps/reseller/v1/resellernotify/getwatchdetails')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * reseller.resellernotify.register
        * @desc Registers a Reseller for receiving notifications.
        * @alias reseller.resellernotify.register
        * @memberOf! reseller(v1)
        *
        * @param {object=} params Parameters for request
        * @param {string=} params.serviceAccountEmailAddress The service account which will own the created Cloud-PubSub topic.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    register(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/apps/reseller/v1/resellernotify/register')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * reseller.resellernotify.unregister
        * @desc Unregisters a Reseller for receiving notifications.
        * @alias reseller.resellernotify.unregister
        * @memberOf! reseller(v1)
        *
        * @param {object=} params Parameters for request
        * @param {string=} params.serviceAccountEmailAddress The service account which owns the Cloud-PubSub topic.
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    unregister(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/apps/reseller/v1/resellernotify/unregister')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }

  };
  self.subscriptions =
      {
        /**
         * reseller.subscriptions.activate
         * @desc Activates a subscription previously suspended by the reseller
         * @alias reseller.subscriptions.activate
         * @memberOf! reseller(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
         * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        activate(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url:
                      (rootUrl +
                       '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/activate')
                          .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['customerId', 'subscriptionId'],
            pathParams: ['customerId', 'subscriptionId'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * reseller.subscriptions.changePlan
            * @desc Update a subscription plan. Use this method to update a plan
            * for a 30-day trial or a flexible plan subscription to an annual
            * commitment plan with monthly or yearly payments.
            * @alias reseller.subscriptions.changePlan
            * @memberOf! reseller(v1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
            * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
            * @param {reseller(v1).ChangePlanRequest} params.resource Request body data
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        changePlan(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url:
                      (rootUrl +
                       '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changePlan')
                          .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['customerId', 'subscriptionId'],
            pathParams: ['customerId', 'subscriptionId'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * reseller.subscriptions.changeRenewalSettings
            * @desc Update a user license's renewal settings. This is applicable
            * for accounts with annual commitment plans only.
            * @alias reseller.subscriptions.changeRenewalSettings
            * @memberOf! reseller(v1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
            * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
            * @param {reseller(v1).RenewalSettings} params.resource Request body data
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        changeRenewalSettings(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url:
                      (rootUrl +
                       '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeRenewalSettings')
                          .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['customerId', 'subscriptionId'],
            pathParams: ['customerId', 'subscriptionId'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * reseller.subscriptions.changeSeats
            * @desc Update a subscription's user license settings.
            * @alias reseller.subscriptions.changeSeats
            * @memberOf! reseller(v1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
            * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
            * @param {reseller(v1).Seats} params.resource Request body data
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        changeSeats(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url:
                      (rootUrl +
                       '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeSeats')
                          .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['customerId', 'subscriptionId'],
            pathParams: ['customerId', 'subscriptionId'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * reseller.subscriptions.delete
            * @desc Cancel, suspend or transfer a subscription to direct.
            * @alias reseller.subscriptions.delete
            * @memberOf! reseller(v1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
            * @param {string} params.deletionType The deletionType query string enables the cancellation, downgrade, or suspension of a subscription.
            * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
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
          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url:
                      (rootUrl +
                       '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}')
                          .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'DELETE'
                },
                options),
            params,
            requiredParams: ['customerId', 'subscriptionId', 'deletionType'],
            pathParams: ['customerId', 'subscriptionId'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * reseller.subscriptions.get
            * @desc Get a specific subscription.
            * @alias reseller.subscriptions.get
            * @memberOf! reseller(v1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
            * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
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
          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url:
                      (rootUrl +
                       '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}')
                          .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['customerId', 'subscriptionId'],
            pathParams: ['customerId', 'subscriptionId'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * reseller.subscriptions.insert
            * @desc Create or transfer a subscription.
            * @alias reseller.subscriptions.insert
            * @memberOf! reseller(v1)
            *
            * @param {object} params Parameters for request
            * @param {string=} params.customerAuthToken The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
            * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
            * @param {reseller(v1).Subscription} params.resource Request body data
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        insert(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url:
                      (rootUrl +
                       '/apps/reseller/v1/customers/{customerId}/subscriptions')
                          .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['customerId'],
            pathParams: ['customerId'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * reseller.subscriptions.list
            * @desc List of subscriptions managed by the reseller. The list can
            * be all subscriptions, all of a customer's subscriptions, or all of
            * a customer's transferable subscriptions.
            * @alias reseller.subscriptions.list
            * @memberOf! reseller(v1)
            *
            * @param {object=} params Parameters for request
            * @param {string=} params.customerAuthToken The customerAuthToken query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the administrator help center.
            * @param {string=} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
            * @param {string=} params.customerNamePrefix When retrieving all of your subscriptions and filtering for specific customers, you can enter a prefix for a customer name. Using an example customer group that includes exam.com, example20.com and example.com:   - exa -- Returns all customer names that start with 'exa' which could include exam.com, example20.com, and example.com. A name prefix is similar to using a regular expression's asterisk, exa*.  - example -- Returns example20.com and example.com.
            * @param {integer=} params.maxResults When retrieving a large list, the maxResults is the maximum number of results per page. The nextPageToken value takes you to the next page. The default is 20.
            * @param {string=} params.pageToken Token to specify next page in the list
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
          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/apps/reseller/v1/subscriptions')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: [],
            pathParams: [],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * reseller.subscriptions.startPaidService
            * @desc Immediately move a 30-day free trial subscription to a paid
            * service subscription.
            * @alias reseller.subscriptions.startPaidService
            * @memberOf! reseller(v1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
            * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        startPaidService(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url:
                      (rootUrl +
                       '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/startPaidService')
                          .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['customerId', 'subscriptionId'],
            pathParams: ['customerId', 'subscriptionId'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * reseller.subscriptions.suspend
            * @desc Suspends an active subscription.
            * @alias reseller.subscriptions.suspend
            * @memberOf! reseller(v1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.customerId Either the customer's primary domain name or the customer's unique identifier. If using the domain name, we do not recommend using a customerId as a key for persistent data. If the domain name for a customerId is changed, the Google system automatically updates.
            * @param {string} params.subscriptionId This is a required property. The subscriptionId is the subscription identifier and is unique for each customer. Since a subscriptionId changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the subscriptionId can be found using the retrieve all reseller subscriptions method.
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        suspend(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url:
                      (rootUrl +
                       '/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/suspend')
                          .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['customerId', 'subscriptionId'],
            pathParams: ['customerId', 'subscriptionId'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }

      };
}
/**
 * @typedef Address
 * @memberOf! reseller(v1)
 * @type object
 * @property {string} addressLine1 A customer&#39;s physical address. An address can be composed of one to three lines. The addressline2 and addressLine3 are optional.
 * @property {string} addressLine2 Line 2 of the address.
 * @property {string} addressLine3 Line 3 of the address.
 * @property {string} contactName The customer contact&#39;s name. This is required.
 * @property {string} countryCode For countryCode information, see the ISO 3166 country code elements. Verify that country is approved for resale of Google products. This property is required when creating a new customer.
 * @property {string} kind Identifies the resource as a customer address. Value: customers#address
 * @property {string} locality An example of a locality value is the city of San Francisco.
 * @property {string} organizationName The company or company division name. This is required.
 * @property {string} postalCode A postalCode example is a postal zip code such as 94043. This property is required when creating a new customer.
 * @property {string} region An example of a region value is CA for the state of California.
 */
/**
 * @typedef ChangePlanRequest
 * @memberOf! reseller(v1)
 * @type object
 * @property {string} dealCode Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in changePlan request in order to receive discounted rate. This property is optional. If a deal code has already been added to a subscription, this property may be left empty and the existing discounted rate will still apply (if not empty, only provide the deal code that is already present on the subscription). If a deal code has never been added to a subscription and this property is left blank, regular pricing will apply.
 * @property {string} kind Identifies the resource as a subscription change plan request. Value: subscriptions#changePlanRequest
 * @property {string} planName The planName property is required. This is the name of the subscription&#39;s payment plan. For more information about the Google payment plans, see API concepts.  Possible values are:   - ANNUAL_MONTHLY_PAY - The annual commitment plan with monthly payments   - ANNUAL_YEARLY_PAY - The annual commitment plan with yearly payments   - FLEXIBLE - The flexible plan   - TRIAL - The 30-day free trial plan
 * @property {string} purchaseOrderId This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters.
 * @property {reseller(v1).Seats} seats This is a required property. The seats property is the number of user seat licenses.
 */
/**
 * @typedef Customer
 * @memberOf! reseller(v1)
 * @type object
 * @property {string} alternateEmail Like the &quot;Customer email&quot; in the reseller tools, this email is the secondary contact used if something happens to the customer&#39;s service such as service outage or a security issue. This property is required when creating a new customer and should not use the same domain as customerDomain.
 * @property {string} customerDomain The customer&#39;s primary domain name string. customerDomain is required when creating a new customer. Do not include the www prefix in the domain when adding a customer.
 * @property {boolean} customerDomainVerified Whether the customer&#39;s primary domain has been verified.
 * @property {string} customerId This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google.
 * @property {string} kind Identifies the resource as a customer. Value: reseller#customer
 * @property {string} phoneNumber Customer contact phone number. This can be continuous numbers, with spaces, etc. But it must be a real phone number and not, for example, &quot;123&quot;. See phone  local format conventions.
 * @property {reseller(v1).Address} postalAddress A customer&#39;s address information. Each field has a limit of 255 charcters.
 * @property {string} resourceUiUrl URL to customer&#39;s Admin console dashboard. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task in the Admin console.
 */
/**
 * @typedef RenewalSettings
 * @memberOf! reseller(v1)
 * @type object
 * @property {string} kind Identifies the resource as a subscription renewal setting. Value: subscriptions#renewalSettings
 * @property {string} renewalType Renewal settings for the annual commitment plan. For more detailed information, see renewal options in the administrator help center. When renewing a subscription, the renewalType is a required property.
 */
/**
 * @typedef ResellernotifyGetwatchdetailsResponse
 * @memberOf! reseller(v1)
 * @type object
 * @property {string[]} serviceAccountEmailAddresses List of registered service accounts.
 * @property {string} topicName Topic name of the PubSub
 */
/**
 * @typedef ResellernotifyResource
 * @memberOf! reseller(v1)
 * @type object
 * @property {string} topicName Topic name of the PubSub
 */
/**
 * @typedef Seats
 * @memberOf! reseller(v1)
 * @type object
 * @property {string} kind Identifies the resource as a subscription change plan request. Value: subscriptions#seats
 * @property {integer} licensedNumberOfSeats Read-only field containing the current number of licensed seats for FLEXIBLE Google-Apps subscriptions and secondary subscriptions such as Google-Vault and Drive-storage.
 * @property {integer} maximumNumberOfSeats The maximumNumberOfSeats property is the maximum number of licenses that the customer can purchase. This property applies to plans other than the annual commitment plan. How a user&#39;s licenses are managed depends on the subscription&#39;s payment plan:   - annual commitment plan (with monthly or yearly payments) — For this plan, a reseller is invoiced on the number of user licenses in the numberOfSeats property. The maximumNumberOfSeats property is a read-only property in the API&#39;s response.   - flexible plan — For this plan, a reseller is invoiced on the actual number of users which is capped by the maximumNumberOfSeats. This is the maximum number of user licenses a customer has for user license provisioning. This quantity can be increased up to the maximum limit defined in the reseller&#39;s contract. And the minimum quantity is the current number of users in the customer account.   - 30-day free trial plan — A subscription in a 30-day free trial is restricted to maximum 10 seats.
 * @property {integer} numberOfSeats The numberOfSeats property holds the customer&#39;s number of user licenses. How a user&#39;s licenses are managed depends on the subscription&#39;s plan:   - annual commitment plan (with monthly or yearly pay) — For this plan, a reseller is invoiced on the number of user licenses in the numberOfSeats property. This is the maximum number of user licenses that a reseller&#39;s customer can create. The reseller can add more licenses, but once set, the numberOfSeats can not be reduced until renewal. The reseller is invoiced based on the numberOfSeats value regardless of how many of these user licenses are provisioned users.   - flexible plan — For this plan, a reseller is invoiced on the actual number of users which is capped by the maximumNumberOfSeats. The numberOfSeats property is not used in the request or response for flexible plan customers.   - 30-day free trial plan — The numberOfSeats property is not used in the request or response for an account in a 30-day trial.
 */
/**
 * @typedef Subscription
 * @memberOf! reseller(v1)
 * @type object
 * @property {string} billingMethod Read-only field that returns the current billing method for a subscription.
 * @property {string} creationTime The creationTime property is the date when subscription was created. It is in milliseconds using the Epoch format. See an example Epoch converter.
 * @property {string} customerDomain Primary domain name of the customer
 * @property {string} customerId This property will always be returned in a response as the unique identifier generated by Google. In a request, this property can be either the primary domain or the unique identifier generated by Google.
 * @property {string} dealCode Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in insert requests in order to receive discounted rate. This property is optional, regular pricing applies if left empty.
 * @property {string} kind Identifies the resource as a Subscription. Value: reseller#subscription
 * @property {object} plan The plan property is required. In this version of the API, the G Suite plans are the flexible plan, annual commitment plan, and the 30-day free trial plan. For more information about the API&quot;s payment plans, see the API concepts.
 * @property {string} purchaseOrderId This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters.
 * @property {reseller(v1).RenewalSettings} renewalSettings Renewal settings for the annual commitment plan. For more detailed information, see renewal options in the administrator help center.
 * @property {string} resourceUiUrl URL to customer&#39;s Subscriptions page in the Admin console. The read-only URL is generated by the API service. This is used if your client application requires the customer to complete a task using the Subscriptions page in the Admin console.
 * @property {reseller(v1).Seats} seats This is a required property. The number and limit of user seat licenses in the plan.
 * @property {string} skuId A required property. The skuId is a unique system identifier for a product&#39;s SKU assigned to a customer in the subscription. For products and SKUs available in this version of the API, see  Product and SKU IDs.
 * @property {string} skuName Read-only external display name for a product&#39;s SKU assigned to a customer in the subscription. SKU names are subject to change at Google&#39;s discretion. For products and SKUs available in this version of the API, see  Product and SKU IDs.
 * @property {string} status This is an optional property.
 * @property {string} subscriptionId The subscriptionId is the subscription identifier and is unique for each customer. This is a required property. Since a subscriptionId changes when a subscription is updated, we recommend not using this ID as a key for persistent data. Use the subscriptionId as described in retrieve all reseller subscriptions.
 * @property {string[]} suspensionReasons Read-only field containing an enumerable of all the current suspension reasons for a subscription. It is possible for a subscription to have many concurrent, overlapping suspension reasons. A subscription&#39;s STATUS is SUSPENDED until all pending suspensions are removed.  Possible options include:   - PENDING_TOS_ACCEPTANCE - The customer has not logged in and accepted the G Suite Resold Terms of Services.   - RENEWAL_WITH_TYPE_CANCEL - The customer&#39;s commitment ended and their service was cancelled at the end of their term.   - RESELLER_INITIATED - A manual suspension invoked by a Reseller.   - TRIAL_ENDED - The customer&#39;s trial expired without a plan selected.   - OTHER - The customer is suspended for an internal Google reason (e.g. abuse or otherwise).
 * @property {object} transferInfo Read-only transfer related information for the subscription. For more information, see retrieve transferable subscriptions for a customer.
 * @property {object} trialSettings The G Suite annual commitment and flexible payment plans can be in a 30-day free trial. For more information, see the API concepts.
 */
/**
 * @typedef Subscriptions
 * @memberOf! reseller(v1)
 * @type object
 * @property {string} kind Identifies the resource as a collection of subscriptions. Value: reseller#subscriptions
 * @property {string} nextPageToken The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
 * @property {reseller(v1).Subscription[]} subscriptions The subscriptions in this page of results.
 */

export = Reseller;
