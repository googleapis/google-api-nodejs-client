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
 * Google App Engine Admin API
 *
 * The App Engine Admin API enables developers to provision and manage their App
 * Engine applications.
 *
 * @example
 * const google = require('googleapis');
 * const appengine = google.appengine('v1');
 *
 * @namespace appengine
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Appengine
 */
function Appengine(options) {
  const self = this;
  self._options = options || {};
  self.apps =
      {
        /**
         * appengine.apps.create
         * @desc Creates an App Engine application for a Google Cloud Platform
         * project. Required fields: id - The ID of the target Cloud Platform
         * project. location - The region
         * (https://cloud.google.com/appengine/docs/locations) where you want
         * the App Engine application located.For more information about App
         * Engine applications, see Managing Projects, Applications, and Billing
         * (https://cloud.google.com/appengine/docs/python/console/).
         * @alias appengine.apps.create
         * @memberOf! appengine(v1)
         *
         * @param {object} params Parameters for request
         * @param {appengine(v1).Application} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://appengine.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1/apps').replace(/([^:]\/)\/+/g, '$1'),
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
            * appengine.apps.get
            * @desc Gets information about an application.
            * @alias appengine.apps.get
            * @memberOf! appengine(v1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.appsId Part of `name`. Name of the Application resource to get. Example: apps/myapp.
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
          const rootUrl =
              options.rootUrl || 'https://appengine.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1/apps/{appsId}')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['appsId'],
            pathParams: ['appsId'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * appengine.apps.patch
            * @desc Updates the specified Application resource. You can update
            * the following fields: auth_domain - Google authentication domain
            * for controlling user access to the application.
            * default_cookie_expiration - Cookie expiration policy for the
            * application.
            * @alias appengine.apps.patch
            * @memberOf! appengine(v1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.appsId Part of `name`. Name of the Application resource to update. Example: apps/myapp.
            * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
            * @param {appengine(v1).Application} params.resource Request body data
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
          const rootUrl =
              options.rootUrl || 'https://appengine.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1/apps/{appsId}')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'PATCH'
                },
                options),
            params,
            requiredParams: ['appsId'],
            pathParams: ['appsId'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * appengine.apps.repair
            * @desc Recreates the required App Engine features for the specified
            * App Engine application, for example a Cloud Storage bucket or App
            * Engine service account. Use this method if you receive an error
            * message about a missing feature, for example, Error retrieving the
            * App Engine service account.
            * @alias appengine.apps.repair
            * @memberOf! appengine(v1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.appsId Part of `name`. Name of the application to repair. Example: apps/myapp
            * @param {appengine(v1).RepairApplicationRequest} params.resource Request body data
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        repair(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl =
              options.rootUrl || 'https://appengine.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1/apps/{appsId}:repair')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['appsId'],
            pathParams: ['appsId'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        },
        authorizedCertificates: {
          /**
           * appengine.apps.authorizedCertificates.create
           * @desc Uploads the specified SSL certificate.
           * @alias appengine.apps.authorizedCertificates.create
           * @memberOf! appengine(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
           * @param {appengine(v1).AuthorizedCertificate} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          create(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v1/apps/{appsId}/authorizedCertificates')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                  },
                  options),
              params,
              requiredParams: ['appsId'],
              pathParams: ['appsId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * appengine.apps.authorizedCertificates.delete
              * @desc Deletes the specified SSL certificate.
              * @alias appengine.apps.authorizedCertificates.delete
              * @memberOf! appengine(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.appsId Part of `name`. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.
              * @param {string} params.authorizedCertificatesId Part of `name`. See documentation of `appsId`.
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url:
                        (rootUrl +
                         '/v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                  },
                  options),
              params,
              requiredParams: ['appsId', 'authorizedCertificatesId'],
              pathParams: ['appsId', 'authorizedCertificatesId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * appengine.apps.authorizedCertificates.get
              * @desc Gets the specified SSL certificate.
              * @alias appengine.apps.authorizedCertificates.get
              * @memberOf! appengine(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.
              * @param {string} params.authorizedCertificatesId Part of `name`. See documentation of `appsId`.
              * @param {string=} params.view Controls the set of fields returned in the GET response.
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url:
                        (rootUrl +
                         '/v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['appsId', 'authorizedCertificatesId'],
              pathParams: ['appsId', 'authorizedCertificatesId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * appengine.apps.authorizedCertificates.list
              * @desc Lists all SSL certificates the user is authorized to
              * administer.
              * @alias appengine.apps.authorizedCertificates.list
              * @memberOf! appengine(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
              * @param {integer=} params.pageSize Maximum results to return per page.
              * @param {string=} params.pageToken Continuation token for fetching the next page of results.
              * @param {string=} params.view Controls the set of fields returned in the LIST response.
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v1/apps/{appsId}/authorizedCertificates')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['appsId'],
              pathParams: ['appsId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * appengine.apps.authorizedCertificates.patch
              * @desc Updates the specified SSL certificate. To renew a
              * certificate and maintain its existing domain mappings, update
              * certificate_data with a new certificate. The new certificate
              * must be applicable to the same domains as the original
              * certificate. The certificate display_name may also be updated.
              * @alias appengine.apps.authorizedCertificates.patch
              * @memberOf! appengine(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.appsId Part of `name`. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.
              * @param {string} params.authorizedCertificatesId Part of `name`. See documentation of `appsId`.
              * @param {string=} params.updateMask Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.
              * @param {appengine(v1).AuthorizedCertificate} params.resource Request body data
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url:
                        (rootUrl +
                         '/v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}')
                            .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                  },
                  options),
              params,
              requiredParams: ['appsId', 'authorizedCertificatesId'],
              pathParams: ['appsId', 'authorizedCertificatesId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }

        },
        authorizedDomains: {
          /**
           * appengine.apps.authorizedDomains.list
           * @desc Lists all domains the user is authorized to administer.
           * @alias appengine.apps.authorizedDomains.list
           * @memberOf! appengine(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
           * @param {integer=} params.pageSize Maximum results to return per page.
           * @param {string=} params.pageToken Continuation token for fetching the next page of results.
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v1/apps/{appsId}/authorizedDomains')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['appsId'],
              pathParams: ['appsId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }

        },
        domainMappings: {
          /**
           * appengine.apps.domainMappings.create
           * @desc Maps a domain to an application. A user must be authorized to
           * administer a domain in order to map it to an application. For a
           * list of available authorized domains, see
           * AuthorizedDomains.ListAuthorizedDomains.
           * @alias appengine.apps.domainMappings.create
           * @memberOf! appengine(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
           * @param {string=} params.overrideStrategy Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
           * @param {appengine(v1).DomainMapping} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          create(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v1/apps/{appsId}/domainMappings')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                  },
                  options),
              params,
              requiredParams: ['appsId'],
              pathParams: ['appsId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * appengine.apps.domainMappings.delete
              * @desc Deletes the specified domain mapping. A user must be
              * authorized to administer the associated domain in order to
              * delete a DomainMapping resource.
              * @alias appengine.apps.domainMappings.delete
              * @memberOf! appengine(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.appsId Part of `name`. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com.
              * @param {string} params.domainMappingsId Part of `name`. See documentation of `appsId`.
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl +
                          '/v1/apps/{appsId}/domainMappings/{domainMappingsId}')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                  },
                  options),
              params,
              requiredParams: ['appsId', 'domainMappingsId'],
              pathParams: ['appsId', 'domainMappingsId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * appengine.apps.domainMappings.get
              * @desc Gets the specified domain mapping.
              * @alias appengine.apps.domainMappings.get
              * @memberOf! appengine(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.
              * @param {string} params.domainMappingsId Part of `name`. See documentation of `appsId`.
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl +
                          '/v1/apps/{appsId}/domainMappings/{domainMappingsId}')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['appsId', 'domainMappingsId'],
              pathParams: ['appsId', 'domainMappingsId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * appengine.apps.domainMappings.list
              * @desc Lists the domain mappings on an application.
              * @alias appengine.apps.domainMappings.list
              * @memberOf! appengine(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
              * @param {integer=} params.pageSize Maximum results to return per page.
              * @param {string=} params.pageToken Continuation token for fetching the next page of results.
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v1/apps/{appsId}/domainMappings')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['appsId'],
              pathParams: ['appsId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * appengine.apps.domainMappings.patch
              * @desc Updates the specified domain mapping. To map an SSL
              * certificate to a domain mapping, update certificate_id to point
              * to an AuthorizedCertificate resource. A user must be authorized
              * to administer the associated domain in order to update a
              * DomainMapping resource.
              * @alias appengine.apps.domainMappings.patch
              * @memberOf! appengine(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.appsId Part of `name`. Name of the resource to update. Example: apps/myapp/domainMappings/example.com.
              * @param {string} params.domainMappingsId Part of `name`. See documentation of `appsId`.
              * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
              * @param {appengine(v1).DomainMapping} params.resource Request body data
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl +
                          '/v1/apps/{appsId}/domainMappings/{domainMappingsId}')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                  },
                  options),
              params,
              requiredParams: ['appsId', 'domainMappingsId'],
              pathParams: ['appsId', 'domainMappingsId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }

        },
        firewall: {
          ingressRules: {
            /**
             * appengine.apps.firewall.ingressRules.batchUpdate
             * @desc Replaces the entire firewall ruleset in one bulk operation.
             * This overrides and replaces the rules of an existing firewall
             * with the new rules.If the final rule does not match traffic with
             * the '*' wildcard IP range, then an "allow all" rule is explicitly
             * added to the end of the list.
             * @alias appengine.apps.firewall.ingressRules.batchUpdate
             * @memberOf! appengine(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `name`. Name of the Firewall collection to set. Example: apps/myapp/firewall/ingressRules.
             * @param {appengine(v1).BatchUpdateIngressRulesRequest} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            batchUpdate(params, options, callback) {
              if (typeof options === 'function') {
                callback = options;
                options = {};
              }
              options = options || {};
              const rootUrl =
                  options.rootUrl || 'https://appengine.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url:
                          (rootUrl +
                           '/v1/apps/{appsId}/firewall/ingressRules:batchUpdate')
                              .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'POST'
                    },
                    options),
                params,
                requiredParams: ['appsId'],
                pathParams: ['appsId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }, /**
                * appengine.apps.firewall.ingressRules.create
                * @desc Creates a firewall rule for the application.
                * @alias appengine.apps.firewall.ingressRules.create
                * @memberOf! appengine(v1)
                *
                * @param {object} params Parameters for request
                * @param {string} params.appsId Part of `parent`. Name of the parent Firewall collection in which to create a new rule. Example: apps/myapp/firewall/ingressRules.
                * @param {appengine(v1).FirewallRule} params.resource Request body data
                * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
                * @param {callback} callback The callback that handles the response.
                * @return {object} Request object
                */
            create(params, options, callback) {
              if (typeof options === 'function') {
                callback = options;
                options = {};
              }
              options = options || {};
              const rootUrl =
                  options.rootUrl || 'https://appengine.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url: (rootUrl + '/v1/apps/{appsId}/firewall/ingressRules')
                               .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'POST'
                    },
                    options),
                params,
                requiredParams: ['appsId'],
                pathParams: ['appsId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }, /**
                * appengine.apps.firewall.ingressRules.delete
                * @desc Deletes the specified firewall rule.
                * @alias appengine.apps.firewall.ingressRules.delete
                * @memberOf! appengine(v1)
                *
                * @param {object} params Parameters for request
                * @param {string} params.appsId Part of `name`. Name of the Firewall resource to delete. Example: apps/myapp/firewall/ingressRules/100.
                * @param {string} params.ingressRulesId Part of `name`. See documentation of `appsId`.
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
              const rootUrl =
                  options.rootUrl || 'https://appengine.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url:
                          (rootUrl +
                           '/v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}')
                              .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'DELETE'
                    },
                    options),
                params,
                requiredParams: ['appsId', 'ingressRulesId'],
                pathParams: ['appsId', 'ingressRulesId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }, /**
                * appengine.apps.firewall.ingressRules.get
                * @desc Gets the specified firewall rule.
                * @alias appengine.apps.firewall.ingressRules.get
                * @memberOf! appengine(v1)
                *
                * @param {object} params Parameters for request
                * @param {string} params.appsId Part of `name`. Name of the Firewall resource to retrieve. Example: apps/myapp/firewall/ingressRules/100.
                * @param {string} params.ingressRulesId Part of `name`. See documentation of `appsId`.
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
              const rootUrl =
                  options.rootUrl || 'https://appengine.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url:
                          (rootUrl +
                           '/v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}')
                              .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'GET'
                    },
                    options),
                params,
                requiredParams: ['appsId', 'ingressRulesId'],
                pathParams: ['appsId', 'ingressRulesId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }, /**
                * appengine.apps.firewall.ingressRules.list
                * @desc Lists the firewall rules of an application.
                * @alias appengine.apps.firewall.ingressRules.list
                * @memberOf! appengine(v1)
                *
                * @param {object} params Parameters for request
                * @param {string} params.appsId Part of `parent`. Name of the Firewall collection to retrieve. Example: apps/myapp/firewall/ingressRules.
                * @param {string=} params.matchingAddress A valid IP Address. If set, only rules matching this address will be returned. The first returned rule will be the rule that fires on requests from this IP.
                * @param {integer=} params.pageSize Maximum results to return per page.
                * @param {string=} params.pageToken Continuation token for fetching the next page of results.
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
              const rootUrl =
                  options.rootUrl || 'https://appengine.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url: (rootUrl + '/v1/apps/{appsId}/firewall/ingressRules')
                               .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'GET'
                    },
                    options),
                params,
                requiredParams: ['appsId'],
                pathParams: ['appsId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }, /**
                * appengine.apps.firewall.ingressRules.patch
                * @desc Updates the specified firewall rule.
                * @alias appengine.apps.firewall.ingressRules.patch
                * @memberOf! appengine(v1)
                *
                * @param {object} params Parameters for request
                * @param {string} params.appsId Part of `name`. Name of the Firewall resource to update. Example: apps/myapp/firewall/ingressRules/100.
                * @param {string} params.ingressRulesId Part of `name`. See documentation of `appsId`.
                * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
                * @param {appengine(v1).FirewallRule} params.resource Request body data
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
              const rootUrl =
                  options.rootUrl || 'https://appengine.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url:
                          (rootUrl +
                           '/v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}')
                              .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'PATCH'
                    },
                    options),
                params,
                requiredParams: ['appsId', 'ingressRulesId'],
                pathParams: ['appsId', 'ingressRulesId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }

          }
        },
        locations: {
          /**
           * appengine.apps.locations.get
           * @desc Get information about a location.
           * @alias appengine.apps.locations.get
           * @memberOf! appengine(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.appsId Part of `name`. Resource name for the location.
           * @param {string} params.locationsId Part of `name`. See documentation of `appsId`.
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v1/apps/{appsId}/locations/{locationsId}')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['appsId', 'locationsId'],
              pathParams: ['appsId', 'locationsId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * appengine.apps.locations.list
              * @desc Lists information about the supported locations for this
              * service.
              * @alias appengine.apps.locations.list
              * @memberOf! appengine(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.appsId Part of `name`. The resource that owns the locations collection, if applicable.
              * @param {string=} params.filter The standard list filter.
              * @param {integer=} params.pageSize The standard list page size.
              * @param {string=} params.pageToken The standard list page token.
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v1/apps/{appsId}/locations')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['appsId'],
              pathParams: ['appsId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }

        },
        operations: {
          /**
           * appengine.apps.operations.get
           * @desc Gets the latest state of a long-running operation. Clients
           * can use this method to poll the operation result at intervals as
           * recommended by the API service.
           * @alias appengine.apps.operations.get
           * @memberOf! appengine(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.appsId Part of `name`. The name of the operation resource.
           * @param {string} params.operationsId Part of `name`. See documentation of `appsId`.
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl +
                          '/v1/apps/{appsId}/operations/{operationsId}')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['appsId', 'operationsId'],
              pathParams: ['appsId', 'operationsId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * appengine.apps.operations.list
              * @desc Lists operations that match the specified filter in the
              * request. If the server doesn't support this method, it returns
              * UNIMPLEMENTED.NOTE: the name binding allows API services to
              * override the binding to use different resource name schemes,
              * such as users/x/operations. To override the binding, API
              * services can add a binding such as
              * "/v1/{name=users/x}/operations" to their service configuration.
              * For backwards compatibility, the default name includes the
              * operations collection id, however overriding users must ensure
              * the name binding is the parent resource, without the operations
              * collection id.
              * @alias appengine.apps.operations.list
              * @memberOf! appengine(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.appsId Part of `name`. The name of the operation's parent resource.
              * @param {string=} params.filter The standard list filter.
              * @param {integer=} params.pageSize The standard list page size.
              * @param {string=} params.pageToken The standard list page token.
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v1/apps/{appsId}/operations')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['appsId'],
              pathParams: ['appsId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }

        },
        services: {
          /**
           * appengine.apps.services.delete
           * @desc Deletes the specified service and all enclosed versions.
           * @alias appengine.apps.services.delete
           * @memberOf! appengine(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
           * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v1/apps/{appsId}/services/{servicesId}')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                  },
                  options),
              params,
              requiredParams: ['appsId', 'servicesId'],
              pathParams: ['appsId', 'servicesId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * appengine.apps.services.get
              * @desc Gets the current configuration of the specified service.
              * @alias appengine.apps.services.get
              * @memberOf! appengine(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
              * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v1/apps/{appsId}/services/{servicesId}')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['appsId', 'servicesId'],
              pathParams: ['appsId', 'servicesId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * appengine.apps.services.list
              * @desc Lists all the services in the application.
              * @alias appengine.apps.services.list
              * @memberOf! appengine(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
              * @param {integer=} params.pageSize Maximum results to return per page.
              * @param {string=} params.pageToken Continuation token for fetching the next page of results.
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v1/apps/{appsId}/services')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['appsId'],
              pathParams: ['appsId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * appengine.apps.services.patch
              * @desc Updates the configuration of the specified service.
              * @alias appengine.apps.services.patch
              * @memberOf! appengine(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.appsId Part of `name`. Name of the resource to update. Example: apps/myapp/services/default.
              * @param {boolean=} params.migrateTraffic Set to true to gradually shift traffic to one or more versions that you specify. By default, traffic is shifted immediately. For gradual traffic migration, the target versions must be located within instances that are configured for both warmup requests (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#inboundservicetype) and automatic scaling (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#automaticscaling). You must specify the shardBy (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services#shardby) field in the Service resource. Gradual traffic migration is not supported in the App Engine flexible environment. For examples, see Migrating and Splitting Traffic (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).
              * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
              * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
              * @param {appengine(v1).Service} params.resource Request body data
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
            const rootUrl =
                options.rootUrl || 'https://appengine.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v1/apps/{appsId}/services/{servicesId}')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PATCH'
                  },
                  options),
              params,
              requiredParams: ['appsId', 'servicesId'],
              pathParams: ['appsId', 'servicesId'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          },
          versions: {
            /**
             * appengine.apps.services.versions.create
             * @desc Deploys code and resource files to a new version.
             * @alias appengine.apps.services.versions.create
             * @memberOf! appengine(v1)
             *
             * @param {object} params Parameters for request
             * @param {string} params.appsId Part of `parent`. Name of the parent resource to create this version under. Example: apps/myapp/services/default.
             * @param {string} params.servicesId Part of `parent`. See documentation of `appsId`.
             * @param {appengine(v1).Version} params.resource Request body data
             * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
             * @param {callback} callback The callback that handles the response.
             * @return {object} Request object
             */
            create(params, options, callback) {
              if (typeof options === 'function') {
                callback = options;
                options = {};
              }
              options = options || {};
              const rootUrl =
                  options.rootUrl || 'https://appengine.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url: (rootUrl +
                            '/v1/apps/{appsId}/services/{servicesId}/versions')
                               .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'POST'
                    },
                    options),
                params,
                requiredParams: ['appsId', 'servicesId'],
                pathParams: ['appsId', 'servicesId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }, /**
                * appengine.apps.services.versions.delete
                * @desc Deletes an existing Version resource.
                * @alias appengine.apps.services.versions.delete
                * @memberOf! appengine(v1)
                *
                * @param {object} params Parameters for request
                * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
                * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
                * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
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
              const rootUrl =
                  options.rootUrl || 'https://appengine.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url:
                          (rootUrl +
                           '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}')
                              .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'DELETE'
                    },
                    options),
                params,
                requiredParams: ['appsId', 'servicesId', 'versionsId'],
                pathParams: ['appsId', 'servicesId', 'versionsId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }, /**
                * appengine.apps.services.versions.get
                * @desc Gets the specified Version resource. By default, only a
                * BASIC_VIEW will be returned. Specify the FULL_VIEW parameter
                * to get the full resource.
                * @alias appengine.apps.services.versions.get
                * @memberOf! appengine(v1)
                *
                * @param {object} params Parameters for request
                * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
                * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
                * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
                * @param {string=} params.view Controls the set of fields returned in the Get response.
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
              const rootUrl =
                  options.rootUrl || 'https://appengine.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url:
                          (rootUrl +
                           '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}')
                              .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'GET'
                    },
                    options),
                params,
                requiredParams: ['appsId', 'servicesId', 'versionsId'],
                pathParams: ['appsId', 'servicesId', 'versionsId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }, /**
                * appengine.apps.services.versions.list
                * @desc Lists the versions of a service.
                * @alias appengine.apps.services.versions.list
                * @memberOf! appengine(v1)
                *
                * @param {object} params Parameters for request
                * @param {string} params.appsId Part of `parent`. Name of the parent Service resource. Example: apps/myapp/services/default.
                * @param {integer=} params.pageSize Maximum results to return per page.
                * @param {string=} params.pageToken Continuation token for fetching the next page of results.
                * @param {string} params.servicesId Part of `parent`. See documentation of `appsId`.
                * @param {string=} params.view Controls the set of fields returned in the List response.
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
              const rootUrl =
                  options.rootUrl || 'https://appengine.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url: (rootUrl +
                            '/v1/apps/{appsId}/services/{servicesId}/versions')
                               .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'GET'
                    },
                    options),
                params,
                requiredParams: ['appsId', 'servicesId'],
                pathParams: ['appsId', 'servicesId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }, /**
                * appengine.apps.services.versions.patch
                * @desc Updates the specified Version resource. You can specify
                * the following fields depending on the App Engine environment
                * and type of scaling that the version resource uses:
                * serving_status
                * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status):
                * For Version resources that use basic scaling, manual scaling,
                * or run in  the App Engine flexible environment. instance_class
                * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class):
                * For Version resources that run in the App Engine standard
                * environment. automatic_scaling.min_idle_instances
                * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling):
                * For Version resources that use automatic scaling and run in
                * the App  Engine standard environment.
                * automatic_scaling.max_idle_instances
                * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling):
                * For Version resources that use automatic scaling and run in
                * the App  Engine standard environment.
                * automatic_scaling.min_total_instances
                * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling):
                * For Version resources that use automatic scaling and run in
                * the App  Engine Flexible environment.
                * automatic_scaling.max_total_instances
                * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling):
                * For Version resources that use automatic scaling and run in
                * the App  Engine Flexible environment.
                * automatic_scaling.cool_down_period_sec
                * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling):
                * For Version resources that use automatic scaling and run in
                * the App  Engine Flexible environment.
                * automatic_scaling.cpu_utilization.target_utilization
                * (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling):
                * For Version resources that use automatic scaling and run in
                * the App  Engine Flexible environment.
                * @alias appengine.apps.services.versions.patch
                * @memberOf! appengine(v1)
                *
                * @param {object} params Parameters for request
                * @param {string} params.appsId Part of `name`. Name of the resource to update. Example: apps/myapp/services/default/versions/1.
                * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
                * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
                * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
                * @param {appengine(v1).Version} params.resource Request body data
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
              const rootUrl =
                  options.rootUrl || 'https://appengine.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url:
                          (rootUrl +
                           '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}')
                              .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'PATCH'
                    },
                    options),
                params,
                requiredParams: ['appsId', 'servicesId', 'versionsId'],
                pathParams: ['appsId', 'servicesId', 'versionsId'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            },
            instances: {
              /**
               * appengine.apps.services.versions.instances.debug
               * @desc Enables debugging on a VM instance. This allows you to
               * use the SSH command to connect to the virtual machine where the
               * instance lives. While in "debug mode", the instance continues
               * to serve live traffic. You should delete the instance when you
               * are done debugging and then allow the system to take over and
               * determine if another instance should be started.Only applicable
               * for instances in App Engine flexible environment.
               * @alias appengine.apps.services.versions.instances.debug
               * @memberOf! appengine(v1)
               *
               * @param {object} params Parameters for request
               * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
               * @param {string} params.instancesId Part of `name`. See documentation of `appsId`.
               * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
               * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
               * @param {appengine(v1).DebugInstanceRequest} params.resource Request body data
               * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
               * @param {callback} callback The callback that handles the response.
               * @return {object} Request object
               */
              debug(params, options, callback) {
                if (typeof options === 'function') {
                  callback = options;
                  options = {};
                }
                options = options || {};
                const rootUrl =
                    options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                  options: Object.assign(
                      {
                        url:
                            (rootUrl +
                             '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}:debug')
                                .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'POST'
                      },
                      options),
                  params,
                  requiredParams:
                      ['appsId', 'servicesId', 'versionsId', 'instancesId'],
                  pathParams:
                      ['appsId', 'instancesId', 'servicesId', 'versionsId'],
                  context: self
                };
                return createAPIRequest(parameters, callback);
              }, /**
                  * appengine.apps.services.versions.instances.delete
                  * @desc Stops a running instance.
                  * @alias appengine.apps.services.versions.instances.delete
                  * @memberOf! appengine(v1)
                  *
                  * @param {object} params Parameters for request
                  * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
                  * @param {string} params.instancesId Part of `name`. See documentation of `appsId`.
                  * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
                  * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
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
                const rootUrl =
                    options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                  options: Object.assign(
                      {
                        url:
                            (rootUrl +
                             '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'DELETE'
                      },
                      options),
                  params,
                  requiredParams:
                      ['appsId', 'servicesId', 'versionsId', 'instancesId'],
                  pathParams:
                      ['appsId', 'instancesId', 'servicesId', 'versionsId'],
                  context: self
                };
                return createAPIRequest(parameters, callback);
              }, /**
                  * appengine.apps.services.versions.instances.get
                  * @desc Gets instance information.
                  * @alias appengine.apps.services.versions.instances.get
                  * @memberOf! appengine(v1)
                  *
                  * @param {object} params Parameters for request
                  * @param {string} params.appsId Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
                  * @param {string} params.instancesId Part of `name`. See documentation of `appsId`.
                  * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
                  * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
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
                const rootUrl =
                    options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                  options: Object.assign(
                      {
                        url:
                            (rootUrl +
                             '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}')
                                .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                      },
                      options),
                  params,
                  requiredParams:
                      ['appsId', 'servicesId', 'versionsId', 'instancesId'],
                  pathParams:
                      ['appsId', 'instancesId', 'servicesId', 'versionsId'],
                  context: self
                };
                return createAPIRequest(parameters, callback);
              }, /**
                  * appengine.apps.services.versions.instances.list
                  * @desc Lists the instances of a version.Tip: To aggregate
                  * details about instances over time, see the Stackdriver
                  * Monitoring API
                  * (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
                  * @alias appengine.apps.services.versions.instances.list
                  * @memberOf! appengine(v1)
                  *
                  * @param {object} params Parameters for request
                  * @param {string} params.appsId Part of `parent`. Name of the parent Version resource. Example: apps/myapp/services/default/versions/v1.
                  * @param {integer=} params.pageSize Maximum results to return per page.
                  * @param {string=} params.pageToken Continuation token for fetching the next page of results.
                  * @param {string} params.servicesId Part of `parent`. See documentation of `appsId`.
                  * @param {string} params.versionsId Part of `parent`. See documentation of `appsId`.
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
                const rootUrl =
                    options.rootUrl || 'https://appengine.googleapis.com/';
                const parameters = {
                  options: Object.assign(
                      {
                        url:
                            (rootUrl +
                             '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances')
                                .replace(/([^:]\/)\/+/g, '$1'),
                        method: 'GET'
                      },
                      options),
                  params,
                  requiredParams: ['appsId', 'servicesId', 'versionsId'],
                  pathParams: ['appsId', 'servicesId', 'versionsId'],
                  context: self
                };
                return createAPIRequest(parameters, callback);
              }

            }
          }
        }
      };
}
/**
 * @typedef ApiConfigHandler
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} authFailAction Action to take when users access resources that require authentication. Defaults to redirect.
 * @property {string} login Level of login required to access this resource. Defaults to optional.
 * @property {string} script Path to the script from the application root directory.
 * @property {string} securityLevel Security (HTTPS) enforcement for this URL.
 * @property {string} url URL to serve the endpoint at.
 */
/**
 * @typedef ApiEndpointHandler
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} scriptPath Path to the script from the application root directory.
 */
/**
 * @typedef Application
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} authDomain Google Apps authentication domain that controls which users can access this application.Defaults to open access for any Google Account.
 * @property {string} codeBucket Google Cloud Storage bucket that can be used for storing files associated with this application. This bucket is associated with the application and can be used by the gcloud deployment commands.@OutputOnly
 * @property {string} defaultBucket Google Cloud Storage bucket that can be used by this application to store content.@OutputOnly
 * @property {string} defaultCookieExpiration Cookie expiration policy for this application.
 * @property {string} defaultHostname Hostname used to reach this application, as resolved by App Engine.@OutputOnly
 * @property {appengine(v1).UrlDispatchRule[]} dispatchRules HTTP path dispatch rules for requests to the application that do not explicitly target a service or version. Rules are order-dependent. Up to 20 dispatch rules can be supported.@OutputOnly
 * @property {appengine(v1).FeatureSettings} featureSettings The feature specific settings to be used in the application.
 * @property {string} gcrDomain The Google Container Registry domain used for storing managed build docker images for this application.
 * @property {appengine(v1).IdentityAwareProxy} iap
 * @property {string} id Identifier of the Application resource. This identifier is equivalent to the project ID of the Google Cloud Platform project where you want to deploy your application. Example: myapp.
 * @property {string} locationId Location from which this application will be run. Application instances will run out of data centers in the chosen location, which is also where all of the application&#39;s end user content is stored.Defaults to us-central.Options are:us-central - Central USeurope-west - Western Europeus-east1 - Eastern US
 * @property {string} name Full path to the Application resource in the API. Example: apps/myapp.@OutputOnly
 * @property {string} servingStatus Serving status of this application.
 */
/**
 * @typedef AuthorizedCertificate
 * @memberOf! appengine(v1)
 * @type object
 * @property {appengine(v1).CertificateRawData} certificateRawData The SSL certificate serving the AuthorizedCertificate resource. This must be obtained independently from a certificate authority.
 * @property {string} displayName The user-specified display name of the certificate. This is not guaranteed to be unique. Example: My Certificate.
 * @property {integer} domainMappingsCount Aggregate count of the domain mappings with this certificate mapped. This count includes domain mappings on applications for which the user does not have VIEWER permissions.Only returned by GET or LIST requests when specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly
 * @property {string[]} domainNames Topmost applicable domains of this certificate. This certificate applies to these domains and their subdomains. Example: example.com.@OutputOnly
 * @property {string} expireTime The time when this certificate expires. To update the renewal time on this certificate, upload an SSL certificate with a different expiration time using AuthorizedCertificates.UpdateAuthorizedCertificate.@OutputOnly
 * @property {string} id Relative name of the certificate. This is a unique value autogenerated on AuthorizedCertificate resource creation. Example: 12345.@OutputOnly
 * @property {string} name Full path to the AuthorizedCertificate resource in the API. Example: apps/myapp/authorizedCertificates/12345.@OutputOnly
 * @property {string[]} visibleDomainMappings The full paths to user visible Domain Mapping resources that have this certificate mapped. Example: apps/myapp/domainMappings/example.com.This may not represent the full list of mapped domain mappings if the user does not have VIEWER permissions on all of the applications that have this certificate mapped. See domain_mappings_count for a complete count.Only returned by GET or LIST requests when specifically requested by the view=FULL_CERTIFICATE option.@OutputOnly
 */
/**
 * @typedef AuthorizedDomain
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} id Fully qualified domain name of the domain authorized for use. Example: example.com.
 * @property {string} name Full path to the AuthorizedDomain resource in the API. Example: apps/myapp/authorizedDomains/example.com.@OutputOnly
 */
/**
 * @typedef AutomaticScaling
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} coolDownPeriod Amount of time that the Autoscaler (https://cloud.google.com/compute/docs/autoscaler/) should wait between changes to the number of virtual machines. Only applicable in the App Engine flexible environment.
 * @property {appengine(v1).CpuUtilization} cpuUtilization Target scaling by CPU usage.
 * @property {appengine(v1).DiskUtilization} diskUtilization Target scaling by disk usage.
 * @property {integer} maxConcurrentRequests Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.Defaults to a runtime-specific value.
 * @property {integer} maxIdleInstances Maximum number of idle instances that should be maintained for this version.
 * @property {string} maxPendingLatency Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.
 * @property {integer} maxTotalInstances Maximum number of instances that should be started to handle requests.
 * @property {integer} minIdleInstances Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.
 * @property {string} minPendingLatency Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
 * @property {integer} minTotalInstances Minimum number of instances that should be maintained for this version.
 * @property {appengine(v1).NetworkUtilization} networkUtilization Target scaling by network usage.
 * @property {appengine(v1).RequestUtilization} requestUtilization Target scaling by request utilization.
 * @property {appengine(v1).StandardSchedulerSettings} standardSchedulerSettings Scheduler settings for standard environment.
 */
/**
 * @typedef BasicScaling
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} idleTimeout Duration of time after the last request that an instance must wait before the instance is shut down.
 * @property {integer} maxInstances Maximum number of instances to create for this version.
 */
/**
 * @typedef BatchUpdateIngressRulesRequest
 * @memberOf! appengine(v1)
 * @type object
 * @property {appengine(v1).FirewallRule[]} ingressRules A list of FirewallRules to replace the existing set.
 */
/**
 * @typedef BatchUpdateIngressRulesResponse
 * @memberOf! appengine(v1)
 * @type object
 * @property {appengine(v1).FirewallRule[]} ingressRules The full list of ingress FirewallRules for this application.
 */
/**
 * @typedef CertificateRawData
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} privateKey Unencrypted PEM encoded RSA private key. This field is set once on certificate creation and then encrypted. The key size must be 2048 bits or fewer. Must include the header and footer. Example: &lt;pre&gt; -----BEGIN RSA PRIVATE KEY----- &lt;unencrypted_key_value&gt; -----END RSA PRIVATE KEY----- &lt;/pre&gt; @InputOnly
 * @property {string} publicCertificate PEM encoded x.509 public key certificate. This field is set once on certificate creation. Must include the header and footer. Example: &lt;pre&gt; -----BEGIN CERTIFICATE----- &lt;certificate_value&gt; -----END CERTIFICATE----- &lt;/pre&gt;
 */
/**
 * @typedef ContainerInfo
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} image URI to the hosted container image in Google Container Registry. The URI must be fully qualified and include a tag or digest. Examples: &quot;gcr.io/my-project/image:tag&quot; or &quot;gcr.io/my-project/image@digest&quot;
 */
/**
 * @typedef CpuUtilization
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} aggregationWindowLength Period of time over which CPU utilization is calculated.
 * @property {number} targetUtilization Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.
 */
/**
 * @typedef CreateVersionMetadataV1Alpha
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} cloudBuildId The Cloud Build ID if one was created as part of the version create. @OutputOnly
 */
/**
 * @typedef CreateVersionMetadataV1Beta
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} cloudBuildId The Cloud Build ID if one was created as part of the version create. @OutputOnly
 */
/**
 * @typedef DebugInstanceRequest
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} sshKey Public SSH key to add to the instance. Examples: [USERNAME]:ssh-rsa [KEY_VALUE] [USERNAME] [USERNAME]:ssh-rsa [KEY_VALUE] google-ssh {&quot;userName&quot;:&quot;[USERNAME]&quot;,&quot;expireOn&quot;:&quot;[EXPIRE_TIME]&quot;}For more information, see Adding and Removing SSH Keys (https://cloud.google.com/compute/docs/instances/adding-removing-ssh-keys).
 */
/**
 * @typedef Deployment
 * @memberOf! appengine(v1)
 * @type object
 * @property {appengine(v1).ContainerInfo} container The Docker image for the container that runs the version. Only applicable for instances running in the App Engine flexible environment.
 * @property {object} files Manifest of the files stored in Google Cloud Storage that are included as part of this version. All files must be readable using the credentials supplied with this call.
 * @property {appengine(v1).ZipInfo} zip The zip file for this deployment, if this is a zip deployment.
 */
/**
 * @typedef DiskUtilization
 * @memberOf! appengine(v1)
 * @type object
 * @property {integer} targetReadBytesPerSecond Target bytes read per second.
 * @property {integer} targetReadOpsPerSecond Target ops read per seconds.
 * @property {integer} targetWriteBytesPerSecond Target bytes written per second.
 * @property {integer} targetWriteOpsPerSecond Target ops written per second.
 */
/**
 * @typedef DomainMapping
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} id Relative name of the domain serving the application. Example: example.com.
 * @property {string} name Full path to the DomainMapping resource in the API. Example: apps/myapp/domainMapping/example.com.@OutputOnly
 * @property {appengine(v1).ResourceRecord[]} resourceRecords The resource records required to configure this domain mapping. These records must be added to the domain&#39;s DNS configuration in order to serve the application via this domain mapping.@OutputOnly
 * @property {appengine(v1).SslSettings} sslSettings SSL configuration for this domain. If unconfigured, this domain will not serve with SSL.
 */
/**
 * @typedef Empty
 * @memberOf! appengine(v1)
 * @type object
 */
/**
 * @typedef EndpointsApiService
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} configId Endpoints service configuration id as specified by the Service Management API. For example &quot;2016-09-19r1&quot;
 * @property {string} name Endpoints service name which is the name of the &quot;service&quot; resource in the Service Management API. For example &quot;myapi.endpoints.myproject.cloud.goog&quot;
 */
/**
 * @typedef ErrorHandler
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} errorCode Error condition this handler applies to.
 * @property {string} mimeType MIME type of file. Defaults to text/html.
 * @property {string} staticFile Static file content to be served for this error.
 */
/**
 * @typedef FeatureSettings
 * @memberOf! appengine(v1)
 * @type object
 * @property {boolean} splitHealthChecks Boolean value indicating if split health checks should be used instead of the legacy health checks. At an app.yaml level, this means defaulting to &#39;readiness_check&#39; and &#39;liveness_check&#39; values instead of &#39;health_check&#39; ones. Once the legacy &#39;health_check&#39; behavior is deprecated, and this value is always true, this setting can be removed.
 */
/**
 * @typedef FileInfo
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} mimeType The MIME type of the file.Defaults to the value from Google Cloud Storage.
 * @property {string} sha1Sum The SHA1 hash of the file, in hex.
 * @property {string} sourceUrl URL source to use to fetch this file. Must be a URL to a resource in Google Cloud Storage in the form &#39;http(s)://storage.googleapis.com/&lt;bucket&gt;/&lt;object&gt;&#39;.
 */
/**
 * @typedef FirewallRule
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} action The action to take on matched requests.
 * @property {string} description An optional string description of this rule. This field has a maximum length of 100 characters.
 * @property {integer} priority A positive integer between 1, Int32.MaxValue-1 that defines the order of rule evaluation. Rules with the lowest priority are evaluated first.A default rule at priority Int32.MaxValue matches all IPv4 and IPv6 traffic when no previous rule matches. Only the action of this rule can be modified by the user.
 * @property {string} sourceRange IP address or range, defined using CIDR notation, of requests that this rule applies to. You can use the wildcard character &quot;*&quot; to match all IPs equivalent to &quot;0/0&quot; and &quot;::/0&quot; together. Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32  or 2001:0db8:0000:0042:0000:8a2e:0370:7334.&lt;p&gt;Truncation will be silently performed on addresses which are not properly truncated. For example, 1.2.3.4/24 is accepted as the same address as 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 is accepted as the same address as 2001:db8::/32.
 */
/**
 * @typedef HealthCheck
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} checkInterval Interval between health checks.
 * @property {boolean} disableHealthCheck Whether to explicitly disable health checks for this instance.
 * @property {integer} healthyThreshold Number of consecutive successful health checks required before receiving traffic.
 * @property {string} host Host header to send when performing an HTTP health check. Example: &quot;myapp.appspot.com&quot;
 * @property {integer} restartThreshold Number of consecutive failed health checks required before an instance is restarted.
 * @property {string} timeout Time before the health check is considered failed.
 * @property {integer} unhealthyThreshold Number of consecutive failed health checks required before removing traffic.
 */
/**
 * @typedef IdentityAwareProxy
 * @memberOf! appengine(v1)
 * @type object
 * @property {boolean} enabled Whether the serving infrastructure will authenticate and authorize all incoming requests.If true, the oauth2_client_id and oauth2_client_secret fields must be non-empty.
 * @property {string} oauth2ClientId OAuth2 client ID to use for the authentication flow.
 * @property {string} oauth2ClientSecret OAuth2 client secret to use for the authentication flow.For security reasons, this value cannot be retrieved via the API. Instead, the SHA-256 hash of the value is returned in the oauth2_client_secret_sha256 field.@InputOnly
 * @property {string} oauth2ClientSecretSha256 Hex-encoded SHA-256 hash of the client secret.@OutputOnly
 */
/**
 * @typedef Instance
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} appEngineRelease App Engine release this instance is running on.@OutputOnly
 * @property {string} availability Availability of the instance.@OutputOnly
 * @property {integer} averageLatency Average latency (ms) over the last minute.@OutputOnly
 * @property {integer} errors Number of errors since this instance was started.@OutputOnly
 * @property {string} id Relative name of the instance within the version. Example: instance-1.@OutputOnly
 * @property {string} memoryUsage Total memory in use (bytes).@OutputOnly
 * @property {string} name Full path to the Instance resource in the API. Example: apps/myapp/services/default/versions/v1/instances/instance-1.@OutputOnly
 * @property {number} qps Average queries per second (QPS) over the last minute.@OutputOnly
 * @property {integer} requests Number of requests since this instance was started.@OutputOnly
 * @property {string} startTime Time that this instance was started.@OutputOnly
 * @property {boolean} vmDebugEnabled Whether this instance is in debug mode. Only applicable for instances in App Engine flexible environment.@OutputOnly
 * @property {string} vmId Virtual machine ID of this instance. Only applicable for instances in App Engine flexible environment.@OutputOnly
 * @property {string} vmIp The IP address of this instance. Only applicable for instances in App Engine flexible environment.@OutputOnly
 * @property {string} vmName Name of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.@OutputOnly
 * @property {string} vmStatus Status of the virtual machine where this instance lives. Only applicable for instances in App Engine flexible environment.@OutputOnly
 * @property {string} vmZoneName Zone where the virtual machine is located. Only applicable for instances in App Engine flexible environment.@OutputOnly
 */
/**
 * @typedef Library
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} name Name of the library. Example: &quot;django&quot;.
 * @property {string} version Version of the library to select, or &quot;latest&quot;.
 */
/**
 * @typedef ListAuthorizedCertificatesResponse
 * @memberOf! appengine(v1)
 * @type object
 * @property {appengine(v1).AuthorizedCertificate[]} certificates The SSL certificates the user is authorized to administer.
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 */
/**
 * @typedef ListAuthorizedDomainsResponse
 * @memberOf! appengine(v1)
 * @type object
 * @property {appengine(v1).AuthorizedDomain[]} domains The authorized domains belonging to the user.
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 */
/**
 * @typedef ListDomainMappingsResponse
 * @memberOf! appengine(v1)
 * @type object
 * @property {appengine(v1).DomainMapping[]} domainMappings The domain mappings for the application.
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 */
/**
 * @typedef ListIngressRulesResponse
 * @memberOf! appengine(v1)
 * @type object
 * @property {appengine(v1).FirewallRule[]} ingressRules The ingress FirewallRules for this application.
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 */
/**
 * @typedef ListInstancesResponse
 * @memberOf! appengine(v1)
 * @type object
 * @property {appengine(v1).Instance[]} instances The instances belonging to the requested version.
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 */
/**
 * @typedef ListLocationsResponse
 * @memberOf! appengine(v1)
 * @type object
 * @property {appengine(v1).Location[]} locations A list of locations that matches the specified filter in the request.
 * @property {string} nextPageToken The standard List next-page token.
 */
/**
 * @typedef ListOperationsResponse
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} nextPageToken The standard List next-page token.
 * @property {appengine(v1).Operation[]} operations A list of operations that matches the specified filter in the request.
 */
/**
 * @typedef ListServicesResponse
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 * @property {appengine(v1).Service[]} services The services belonging to the requested application.
 */
/**
 * @typedef ListVersionsResponse
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} nextPageToken Continuation token for fetching the next page of results.
 * @property {appengine(v1).Version[]} versions The versions belonging to the requested service.
 */
/**
 * @typedef LivenessCheck
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} checkInterval Interval between health checks.
 * @property {integer} failureThreshold Number of consecutive failed checks required before considering the VM unhealthy.
 * @property {string} host Host header to send when performing a HTTP Liveness check. Example: &quot;myapp.appspot.com&quot;
 * @property {string} initialDelay The initial delay before starting to execute the checks.
 * @property {string} path The request path.
 * @property {integer} successThreshold Number of consecutive successful checks required before considering the VM healthy.
 * @property {string} timeout Time before the check is considered failed.
 */
/**
 * @typedef Location
 * @memberOf! appengine(v1)
 * @type object
 * @property {object} labels Cross-service attributes for the location. For example {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
 * @property {string} locationId The canonical id for this location. For example: &quot;us-east1&quot;.
 * @property {object} metadata Service-specific metadata. For example the available capacity at the given location.
 * @property {string} name Resource name for the location, which may vary between implementations. For example: &quot;projects/example-project/locations/us-east1&quot;
 */
/**
 * @typedef LocationMetadata
 * @memberOf! appengine(v1)
 * @type object
 * @property {boolean} flexibleEnvironmentAvailable App Engine Flexible Environment is available in the given location.@OutputOnly
 * @property {boolean} standardEnvironmentAvailable App Engine Standard Environment is available in the given location.@OutputOnly
 */
/**
 * @typedef ManualScaling
 * @memberOf! appengine(v1)
 * @type object
 * @property {integer} instances Number of instances to assign to the service at the start. This number can later be altered by using the Modules API (https://cloud.google.com/appengine/docs/python/modules/functions) set_num_instances() function.
 */
/**
 * @typedef Network
 * @memberOf! appengine(v1)
 * @type object
 * @property {string[]} forwardedPorts List of ports, or port pairs, to forward from the virtual machine to the application container. Only applicable in the App Engine flexible environment.
 * @property {string} instanceTag Tag to apply to the VM instance during creation. for Only applicable in the App Engine flexible environment.
 * @property {string} name Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.Defaults to default.
 * @property {string} subnetworkName Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.If a subnetwork name is specified, a network name will also be required unless it is for the default network. If the network the VM instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range. If the network the VM instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetwork_name) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network. If the network the VM instance is being created in is a custom Subnet Mode Network, then the subnetwork_name must be specified and the IP address is created from the IPCidrRange of the subnetwork.If specified, the subnetwork must exist in the same region as the App Engine flexible environment application.
 */
/**
 * @typedef NetworkUtilization
 * @memberOf! appengine(v1)
 * @type object
 * @property {integer} targetReceivedBytesPerSecond Target bytes received per second.
 * @property {integer} targetReceivedPacketsPerSecond Target packets received per second.
 * @property {integer} targetSentBytesPerSecond Target bytes sent per second.
 * @property {integer} targetSentPacketsPerSecond Target packets sent per second.
 */
/**
 * @typedef Operation
 * @memberOf! appengine(v1)
 * @type object
 * @property {boolean} done If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
 * @property {appengine(v1).Status} error The error result of the operation in case of failure or cancellation.
 * @property {object} metadata Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
 * @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should have the format of operations/some/unique/name.
 * @property {object} response The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.
 */
/**
 * @typedef OperationMetadata
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} endTime Timestamp that this operation completed.@OutputOnly
 * @property {string} insertTime Timestamp that this operation was created.@OutputOnly
 * @property {string} method API method that initiated this operation. Example: google.appengine.v1beta4.Version.CreateVersion.@OutputOnly
 * @property {string} operationType Type of this operation. Deprecated, use method field instead. Example: &quot;create_version&quot;.@OutputOnly
 * @property {string} target Name of the resource that this operation is acting on. Example: apps/myapp/modules/default.@OutputOnly
 * @property {string} user User who requested this operation.@OutputOnly
 */
/**
 * @typedef OperationMetadataV1
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} endTime Time that this operation completed.@OutputOnly
 * @property {string} ephemeralMessage Ephemeral message that may change every time the operation is polled. @OutputOnly
 * @property {string} insertTime Time that this operation was created.@OutputOnly
 * @property {string} method API method that initiated this operation. Example: google.appengine.v1.Versions.CreateVersion.@OutputOnly
 * @property {string} target Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
 * @property {string} user User who requested this operation.@OutputOnly
 * @property {string[]} warning Durable messages that persist on every operation poll. @OutputOnly
 */
/**
 * @typedef OperationMetadataV1Alpha
 * @memberOf! appengine(v1)
 * @type object
 * @property {appengine(v1).CreateVersionMetadataV1Alpha} createVersionMetadata
 * @property {string} endTime Time that this operation completed.@OutputOnly
 * @property {string} ephemeralMessage Ephemeral message that may change every time the operation is polled. @OutputOnly
 * @property {string} insertTime Time that this operation was created.@OutputOnly
 * @property {string} method API method that initiated this operation. Example: google.appengine.v1alpha.Versions.CreateVersion.@OutputOnly
 * @property {string} target Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
 * @property {string} user User who requested this operation.@OutputOnly
 * @property {string[]} warning Durable messages that persist on every operation poll. @OutputOnly
 */
/**
 * @typedef OperationMetadataV1Beta
 * @memberOf! appengine(v1)
 * @type object
 * @property {appengine(v1).CreateVersionMetadataV1Beta} createVersionMetadata
 * @property {string} endTime Time that this operation completed.@OutputOnly
 * @property {string} ephemeralMessage Ephemeral message that may change every time the operation is polled. @OutputOnly
 * @property {string} insertTime Time that this operation was created.@OutputOnly
 * @property {string} method API method that initiated this operation. Example: google.appengine.v1beta.Versions.CreateVersion.@OutputOnly
 * @property {string} target Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
 * @property {string} user User who requested this operation.@OutputOnly
 * @property {string[]} warning Durable messages that persist on every operation poll. @OutputOnly
 */
/**
 * @typedef OperationMetadataV1Beta5
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} endTime Timestamp that this operation completed.@OutputOnly
 * @property {string} insertTime Timestamp that this operation was created.@OutputOnly
 * @property {string} method API method name that initiated this operation. Example: google.appengine.v1beta5.Version.CreateVersion.@OutputOnly
 * @property {string} target Name of the resource that this operation is acting on. Example: apps/myapp/services/default.@OutputOnly
 * @property {string} user User who requested this operation.@OutputOnly
 */
/**
 * @typedef ReadinessCheck
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} appStartTimeout A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic.
 * @property {string} checkInterval Interval between health checks.
 * @property {integer} failureThreshold Number of consecutive failed checks required before removing traffic.
 * @property {string} host Host header to send when performing a HTTP Readiness check. Example: &quot;myapp.appspot.com&quot;
 * @property {string} path The request path.
 * @property {integer} successThreshold Number of consecutive successful checks required before receiving traffic.
 * @property {string} timeout Time before the check is considered failed.
 */
/**
 * @typedef RepairApplicationRequest
 * @memberOf! appengine(v1)
 * @type object
 */
/**
 * @typedef RequestUtilization
 * @memberOf! appengine(v1)
 * @type object
 * @property {integer} targetConcurrentRequests Target number of concurrent requests.
 * @property {integer} targetRequestCountPerSecond Target requests per second.
 */
/**
 * @typedef ResourceRecord
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} name Relative name of the object affected by this record. Only applicable for CNAME records. Example: &#39;www&#39;.
 * @property {string} rrdata Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
 * @property {string} type Resource record type. Example: AAAA.
 */
/**
 * @typedef Resources
 * @memberOf! appengine(v1)
 * @type object
 * @property {number} cpu Number of CPU cores needed.
 * @property {number} diskGb Disk size (GB) needed.
 * @property {number} memoryGb Memory (GB) needed.
 * @property {appengine(v1).Volume[]} volumes User specified volumes.
 */
/**
 * @typedef ScriptHandler
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} scriptPath Path to the script from the application root directory.
 */
/**
 * @typedef Service
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} id Relative name of the service within the application. Example: default.@OutputOnly
 * @property {string} name Full path to the Service resource in the API. Example: apps/myapp/services/default.@OutputOnly
 * @property {appengine(v1).TrafficSplit} split Mapping that defines fractional HTTP traffic diversion to different versions within the service.
 */
/**
 * @typedef SslSettings
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} certificateId ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will remove SSL support. Example: 12345.
 */
/**
 * @typedef StandardSchedulerSettings
 * @memberOf! appengine(v1)
 * @type object
 * @property {integer} maxInstances Maximum number of instances for an app version. Set to zero to disable max_instances configuration.
 * @property {integer} minInstances Minimum number of instances for an app version. Set to zero to disable min_instances configuration.
 * @property {number} targetCpuUtilization Target CPU utilization ratio to maintain when scaling.
 * @property {number} targetThroughputUtilization Target throughput utilization ratio to maintain when scaling
 */
/**
 * @typedef StaticFilesHandler
 * @memberOf! appengine(v1)
 * @type object
 * @property {boolean} applicationReadable Whether files should also be uploaded as code data. By default, files declared in static file handlers are uploaded as static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged against both your code and static data storage resource quotas.
 * @property {string} expiration Time a static file served by this handler should be cached by web proxies and browsers.
 * @property {object} httpHeaders HTTP headers to use for all responses from these URLs.
 * @property {string} mimeType MIME type used to serve all files served by this handler.Defaults to file-specific MIME types, which are derived from each file&#39;s filename extension.
 * @property {string} path Path to the static files matched by the URL pattern, from the application root directory. The path can refer to text matched in groupings in the URL pattern.
 * @property {boolean} requireMatchingFile Whether this handler should match the request if the file referenced by the handler does not exist.
 * @property {string} uploadPathRegex Regular expression that matches the file paths for all files that should be referenced by this handler.
 */
/**
 * @typedef Status
 * @memberOf! appengine(v1)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {object[]} details A list of messages that carry the error details. There is a common set of message types for APIs to use.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 */
/**
 * @typedef TrafficSplit
 * @memberOf! appengine(v1)
 * @type object
 * @property {object} allocations Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.
 * @property {string} shardBy Mechanism used to determine which version a request is sent to. The traffic selection algorithm will be stable for either type until allocations are changed.
 */
/**
 * @typedef UrlDispatchRule
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} domain Domain name to match against. The wildcard &quot;*&quot; is supported if specified before a period: &quot;*.&quot;.Defaults to matching all domains: &quot;*&quot;.
 * @property {string} path Pathname within the host. Must start with a &quot;/&quot;. A single &quot;*&quot; can be included at the end of the path.The sum of the lengths of the domain and path may not exceed 100 characters.
 * @property {string} service Resource ID of a service in this application that should serve the matched request. The service must already exist. Example: default.
 */
/**
 * @typedef UrlMap
 * @memberOf! appengine(v1)
 * @type object
 * @property {appengine(v1).ApiEndpointHandler} apiEndpoint Uses API Endpoints to handle requests.
 * @property {string} authFailAction Action to take when users access resources that require authentication. Defaults to redirect.
 * @property {string} login Level of login required to access this resource.
 * @property {string} redirectHttpResponseCode 30x code to use when performing redirects for the secure field. Defaults to 302.
 * @property {appengine(v1).ScriptHandler} script Executes a script to handle the request that matches this URL pattern.
 * @property {string} securityLevel Security (HTTPS) enforcement for this URL.
 * @property {appengine(v1).StaticFilesHandler} staticFiles Returns the contents of a file, such as an image, as the response.
 * @property {string} urlRegex URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings. All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.
 */
/**
 * @typedef Version
 * @memberOf! appengine(v1)
 * @type object
 * @property {appengine(v1).ApiConfigHandler} apiConfig Serving configuration for Google Cloud Endpoints (https://cloud.google.com/appengine/docs/python/endpoints/).Only returned in GET requests if view=FULL is set.
 * @property {appengine(v1).AutomaticScaling} automaticScaling Automatic scaling is based on request rate, response latencies, and other application metrics.
 * @property {appengine(v1).BasicScaling} basicScaling A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.
 * @property {object} betaSettings Metadata settings that are supplied to this version to enable beta runtime features.
 * @property {string} createdBy Email address of the user who created this version.@OutputOnly
 * @property {string} createTime Time that this version was created.@OutputOnly
 * @property {string} defaultExpiration Duration that static files should be cached by web proxies and browsers. Only applicable if the corresponding StaticFilesHandler (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#staticfileshandler) does not specify its own expiration time.Only returned in GET requests if view=FULL is set.
 * @property {appengine(v1).Deployment} deployment Code and application artifacts that make up this version.Only returned in GET requests if view=FULL is set.
 * @property {string} diskUsageBytes Total size in bytes of all the files that are included in this version and currently hosted on the App Engine disk.@OutputOnly
 * @property {appengine(v1).EndpointsApiService} endpointsApiService Cloud Endpoints configuration.If endpoints_api_service is set, the Cloud Endpoints Extensible Service Proxy will be provided to serve the API implemented by the app.
 * @property {string} env App Engine execution environment for this version.Defaults to standard.
 * @property {object} envVariables Environment variables available to the application.Only returned in GET requests if view=FULL is set.
 * @property {appengine(v1).ErrorHandler[]} errorHandlers Custom static error pages. Limited to 10KB per page.Only returned in GET requests if view=FULL is set.
 * @property {appengine(v1).UrlMap[]} handlers An ordered list of URL-matching patterns that should be applied to incoming requests. The first matching URL handles the request and other request handlers are not attempted.Only returned in GET requests if view=FULL is set.
 * @property {appengine(v1).HealthCheck} healthCheck Configures health checking for VM instances. Unhealthy instances are stopped and replaced with new instances. Only applicable in the App Engine flexible environment.Only returned in GET requests if view=FULL is set.
 * @property {string} id Relative name of the version within the service. Example: v1. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names: &quot;default&quot;, &quot;latest&quot;, and any name with the prefix &quot;ah-&quot;.
 * @property {string[]} inboundServices Before an application can receive email or XMPP messages, the application must be configured to enable the service.
 * @property {string} instanceClass Instance class that is used to run this version. Valid values are: AutomaticScaling: F1, F2, F4, F4_1G ManualScaling or BasicScaling: B1, B2, B4, B8, B4_1GDefaults to F1 for AutomaticScaling and B1 for ManualScaling or BasicScaling.
 * @property {appengine(v1).Library[]} libraries Configuration for third-party Python runtime libraries that are required by the application.Only returned in GET requests if view=FULL is set.
 * @property {appengine(v1).LivenessCheck} livenessCheck Configures liveness health checking for VM instances. Unhealthy instances are stopped and replaced with new instancesOnly returned in GET requests if view=FULL is set.
 * @property {appengine(v1).ManualScaling} manualScaling A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
 * @property {string} name Full path to the Version resource in the API. Example: apps/myapp/services/default/versions/v1.@OutputOnly
 * @property {appengine(v1).Network} network Extra network settings. Only applicable in the App Engine flexible environment.
 * @property {string} nobuildFilesRegex Files that match this pattern will not be built into this version. Only applicable for Go runtimes.Only returned in GET requests if view=FULL is set.
 * @property {appengine(v1).ReadinessCheck} readinessCheck Configures readiness health checking for VM instances. Unhealthy instances are not put into the backend traffic rotation.Only returned in GET requests if view=FULL is set.
 * @property {appengine(v1).Resources} resources Machine resources for this version. Only applicable for VM runtimes.
 * @property {string} runtime Desired runtime. Example: python27.
 * @property {string} runtimeApiVersion The version of the API in the given runtime environment. Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard/&lt;language&gt;/config/appref
 * @property {string} servingStatus Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.SERVING_STATUS_UNSPECIFIED is an invalid value. Defaults to SERVING.
 * @property {boolean} threadsafe Whether multiple requests can be dispatched to this version at once.
 * @property {string} versionUrl Serving URL for this version. Example: &quot;https://myversion-dot-myservice-dot-myapp.appspot.com&quot;@OutputOnly
 * @property {boolean} vm Whether to deploy this version in a container on a virtual machine.
 * @property {string[]} zones The choice of gce zones to use for this App Engine Flexible version.
 */
/**
 * @typedef Volume
 * @memberOf! appengine(v1)
 * @type object
 * @property {string} name Unique name for the volume.
 * @property {number} sizeGb Volume size in gigabytes.
 * @property {string} volumeType Underlying volume type, e.g. &#39;tmpfs&#39;.
 */
/**
 * @typedef ZipInfo
 * @memberOf! appengine(v1)
 * @type object
 * @property {integer} filesCount An estimate of the number of files in a zip for a zip deployment. If set, must be greater than or equal to the actual number of files. Used for optimizing performance; if not provided, deployment may be slow.
 * @property {string} sourceUrl URL of the zip file to deploy from. Must be a URL to a resource in Google Cloud Storage in the form &#39;http(s)://storage.googleapis.com/&lt;bucket&gt;/&lt;object&gt;&#39;.
 */

export = Appengine;
