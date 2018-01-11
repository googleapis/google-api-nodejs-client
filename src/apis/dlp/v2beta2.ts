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
 * DLP API
 *
 * The Google Data Loss Prevention API provides methods for detection of
 * privacy-sensitive fragments in text, images, and Google Cloud Platform
 * storage repositories.
 *
 * @example
 * const google = require('googleapis');
 * const dlp = google.dlp('v2beta2');
 *
 * @namespace dlp
 * @type {Function}
 * @version v2beta2
 * @variation v2beta2
 * @param {object=} options Options for Dlp
 */
function Dlp(options) {
  const self = this;
  self._options = options || {};
  self.infoTypes = {
    /**
     * dlp.infoTypes.list
     * @desc Returns sensitive information types DLP supports.
     * @alias dlp.infoTypes.list
     * @memberOf! dlp(v2beta2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT.
     * @param {string=} params.languageCode Optional BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
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
      const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta2/infoTypes')
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
    }

  };
  self.organizations = {
    deidentifyTemplates: {
      /**
       * dlp.organizations.deidentifyTemplates.create
       * @desc Creates an Deidentify template for re-using frequently used
       * configuration for Deidentifying content, images, and storage.
       * @alias dlp.organizations.deidentifyTemplates.create
       * @memberOf! dlp(v2beta2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
       * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2CreateDeidentifyTemplateRequest} params.resource Request body data
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/deidentifyTemplates')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.organizations.deidentifyTemplates.delete
          * @desc Deletes inspect templates.
          * @alias dlp.organizations.deidentifyTemplates.delete
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Resource name of the organization and deidentify template to be deleted, for example `organizations/433245324/deidentifyTemplates/432452342`.
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.organizations.deidentifyTemplates.get
          * @desc Gets an inspect template.
          * @alias dlp.organizations.deidentifyTemplates.get
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Resource name of the organization and deidentify template to be read, for example `organizations/433245324/deidentifyTemplates/432452342`.
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.organizations.deidentifyTemplates.list
          * @desc Lists inspect templates.
          * @alias dlp.organizations.deidentifyTemplates.list
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {integer=} params.pageSize Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
          * @param {string=} params.pageToken Optional page token to continue retrieval. Comes from previous call to `ListDeidentifyTemplates`.
          * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/deidentifyTemplates')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.organizations.deidentifyTemplates.patch
          * @desc Updates the inspect template.
          * @alias dlp.organizations.deidentifyTemplates.patch
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Resource name of organization and deidentify template to be updated, for example `organizations/433245324/deidentifyTemplates/432452342`.
          * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2UpdateDeidentifyTemplateRequest} params.resource Request body data
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    },
    inspectTemplates: {
      /**
       * dlp.organizations.inspectTemplates.create
       * @desc Creates an inspect template for re-using frequently used
       * configuration for inspecting content, images, and storage.
       * @alias dlp.organizations.inspectTemplates.create
       * @memberOf! dlp(v2beta2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
       * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2CreateInspectTemplateRequest} params.resource Request body data
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/inspectTemplates')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.organizations.inspectTemplates.delete
          * @desc Deletes inspect templates.
          * @alias dlp.organizations.inspectTemplates.delete
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Resource name of the organization and inspectTemplate to be deleted, for example `organizations/433245324/inspectTemplates/432452342`.
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.organizations.inspectTemplates.get
          * @desc Gets an inspect template.
          * @alias dlp.organizations.inspectTemplates.get
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Resource name of the organization and inspectTemplate to be read, for example `organizations/433245324/inspectTemplates/432452342`.
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.organizations.inspectTemplates.list
          * @desc Lists inspect templates.
          * @alias dlp.organizations.inspectTemplates.list
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {integer=} params.pageSize Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
          * @param {string=} params.pageToken Optional page token to continue retrieval. Comes from previous call to `ListInspectTemplates`.
          * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/inspectTemplates')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.organizations.inspectTemplates.patch
          * @desc Updates the inspect template.
          * @alias dlp.organizations.inspectTemplates.patch
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Resource name of organization and inspectTemplate to be updated, for example `organizations/433245324/inspectTemplates/432452342`.
          * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2UpdateInspectTemplateRequest} params.resource Request body data
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    }
  };
  self.projects = {
    content: {
      /**
       * dlp.projects.content.deidentify
       * @desc De-identifies potentially sensitive info from a ContentItem. This
       * method has limits on input size and output size. [How-to
       * guide](/dlp/docs/deidentify-sensitive-data)
       * @alias dlp.projects.content.deidentify
       * @memberOf! dlp(v2beta2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent The parent resource name, for example projects/my-project-id.
       * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2DeidentifyContentRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      deidentify(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/content:deidentify')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.projects.content.inspect
          * @desc Finds potentially sensitive info in content. This method has
          * limits on input size, processing time, and output size. [How-to
          * guide for text](/dlp/docs/inspecting-text), [How-to guide for
          * images](/dlp/docs/inspecting-images)
          * @alias dlp.projects.content.inspect
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.parent The parent resource name, for example projects/my-project-id.
          * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2InspectContentRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      inspect(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/content:inspect')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.projects.content.reidentify
          * @desc Re-identify content that has been de-identified.
          * @alias dlp.projects.content.reidentify
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.parent The parent resource name.
          * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2ReidentifyContentRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      reidentify(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/content:reidentify')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    },
    dataSource: {
      /**
       * dlp.projects.dataSource.analyze
       * @desc Schedules a job to compute risk analysis metrics over content in
       * a Google Cloud Platform repository. [How-to
       * guide}(/dlp/docs/compute-risk-analysis)
       * @alias dlp.projects.dataSource.analyze
       * @memberOf! dlp(v2beta2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent The parent resource name, for example projects/my-project-id.
       * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2AnalyzeDataSourceRiskRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      analyze(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/dataSource:analyze')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.projects.dataSource.inspect
          * @desc Schedules a job scanning content in a Google Cloud Platform
          * data repository. [How-to guide](/dlp/docs/inspecting-storage)
          * @alias dlp.projects.dataSource.inspect
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.parent The parent resource name, for example projects/my-project-id.
          * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2InspectDataSourceRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      inspect(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/dataSource:inspect')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    },
    deidentifyTemplates: {
      /**
       * dlp.projects.deidentifyTemplates.create
       * @desc Creates an Deidentify template for re-using frequently used
       * configuration for Deidentifying content, images, and storage.
       * @alias dlp.projects.deidentifyTemplates.create
       * @memberOf! dlp(v2beta2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
       * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2CreateDeidentifyTemplateRequest} params.resource Request body data
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/deidentifyTemplates')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.projects.deidentifyTemplates.delete
          * @desc Deletes inspect templates.
          * @alias dlp.projects.deidentifyTemplates.delete
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Resource name of the organization and deidentify template to be deleted, for example `organizations/433245324/deidentifyTemplates/432452342`.
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.projects.deidentifyTemplates.get
          * @desc Gets an inspect template.
          * @alias dlp.projects.deidentifyTemplates.get
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Resource name of the organization and deidentify template to be read, for example `organizations/433245324/deidentifyTemplates/432452342`.
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.projects.deidentifyTemplates.list
          * @desc Lists inspect templates.
          * @alias dlp.projects.deidentifyTemplates.list
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {integer=} params.pageSize Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
          * @param {string=} params.pageToken Optional page token to continue retrieval. Comes from previous call to `ListDeidentifyTemplates`.
          * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/deidentifyTemplates')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.projects.deidentifyTemplates.patch
          * @desc Updates the inspect template.
          * @alias dlp.projects.deidentifyTemplates.patch
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Resource name of organization and deidentify template to be updated, for example `organizations/433245324/deidentifyTemplates/432452342`.
          * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2UpdateDeidentifyTemplateRequest} params.resource Request body data
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    },
    dlpJobs: {
      /**
       * dlp.projects.dlpJobs.cancel
       * @desc Starts asynchronous cancellation on a long-running DlpJob.  The
       * server makes a best effort to cancel the DlpJob, but success is not
       * guaranteed.
       * @alias dlp.projects.dlpJobs.cancel
       * @memberOf! dlp(v2beta2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the DlpJob resource to be cancelled.
       * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2CancelDlpJobRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      cancel(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{name}:cancel')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.projects.dlpJobs.delete
          * @desc Deletes a long-running DlpJob. This method indicates that the
          * client is no longer interested in the DlpJob result. The job will be
          * cancelled if possible.
          * @alias dlp.projects.dlpJobs.delete
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name The name of the DlpJob resource to be deleted.
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.projects.dlpJobs.get
          * @desc Gets the latest state of a long-running DlpJob.
          * @alias dlp.projects.dlpJobs.get
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name The name of the DlpJob resource.
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.projects.dlpJobs.list
          * @desc Lists DlpJobs that match the specified filter in the request.
          * @alias dlp.projects.dlpJobs.list
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string=} params.filter Optional. Allows filtering.  Supported syntax:  * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `<field> <operator> <value>`. * Supported fields/values for inspect jobs:     - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED     - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY * Supported fields for risk analysis jobs:     - `state` - RUNNING|CANCELED|FINISHED|FAILED * The operator must be `=` or `!=`.  Examples:  * inspected_storage = cloud_storage AND state = done * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = done OR state = canceled)  The length of this field should be no more than 500 characters.
          * @param {integer=} params.pageSize The standard list page size.
          * @param {string=} params.pageToken The standard list page token.
          * @param {string} params.parent The parent resource name, for example projects/my-project-id.
          * @param {string=} params.type The type of job. Defaults to `DlpJobType.INSPECT`
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/dlpJobs')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    },
    image: {
      /**
       * dlp.projects.image.redact
       * @desc Redacts potentially sensitive info from an image. This method has
       * limits on input size, processing time, and output size. [How-to
       * guide](/dlp/docs/redacting-sensitive-data-images)
       * @alias dlp.projects.image.redact
       * @memberOf! dlp(v2beta2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent The parent resource name, for example projects/my-project-id.
       * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2RedactImageRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      redact(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/image:redact')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    },
    inspectTemplates: {
      /**
       * dlp.projects.inspectTemplates.create
       * @desc Creates an inspect template for re-using frequently used
       * configuration for inspecting content, images, and storage.
       * @alias dlp.projects.inspectTemplates.create
       * @memberOf! dlp(v2beta2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
       * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2CreateInspectTemplateRequest} params.resource Request body data
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/inspectTemplates')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.projects.inspectTemplates.delete
          * @desc Deletes inspect templates.
          * @alias dlp.projects.inspectTemplates.delete
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Resource name of the organization and inspectTemplate to be deleted, for example `organizations/433245324/inspectTemplates/432452342`.
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.projects.inspectTemplates.get
          * @desc Gets an inspect template.
          * @alias dlp.projects.inspectTemplates.get
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Resource name of the organization and inspectTemplate to be read, for example `organizations/433245324/inspectTemplates/432452342`.
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.projects.inspectTemplates.list
          * @desc Lists inspect templates.
          * @alias dlp.projects.inspectTemplates.list
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {integer=} params.pageSize Optional size of the page, can be limited by server. If zero server returns a page of max size 100.
          * @param {string=} params.pageToken Optional page token to continue retrieval. Comes from previous call to `ListInspectTemplates`.
          * @param {string} params.parent The parent resource name, for example projects/my-project-id or organizations/my-org-id.
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v2beta2/{parent}/inspectTemplates')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * dlp.projects.inspectTemplates.patch
          * @desc Updates the inspect template.
          * @alias dlp.projects.inspectTemplates.patch
          * @memberOf! dlp(v2beta2)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Resource name of organization and inspectTemplate to be updated, for example `organizations/433245324/inspectTemplates/432452342`.
          * @param {dlp(v2beta2).GooglePrivacyDlpV2beta2UpdateInspectTemplateRequest} params.resource Request body data
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
        const rootUrl = options.rootUrl || 'https://dlp.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    }
  };
}
/**
 * @typedef GooglePrivacyDlpV2beta1AuxiliaryTable
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1QuasiIdField[]} quasiIds Quasi-identifier columns. [required]
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1FieldId} relativeFrequency The relative frequency column must contain a floating-point number between 0 and 1 (inclusive). Null values are assumed to be zero. [required]
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1BigQueryTable} table Auxiliary table location. [required]
 */
/**
 * @typedef GooglePrivacyDlpV2beta1BigQueryOptions
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1FieldId[]} identifyingFields References to fields uniquely identifying rows within the table. Nested fields in the format, like `person.birthdate.year`, are allowed.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1BigQueryTable} tableReference Complete BigQuery table reference.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1BigQueryTable
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} datasetId Dataset ID of the table.
 * @property {string} projectId The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
 * @property {string} tableId Name of the table.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1CategoricalStatsConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1FieldId} field Field to compute categorical stats on. All column types are supported except for arrays and structs. However, it may be more informative to use NumericalStats when the field type is supported, depending on the data.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} bucketSize Total number of records in this bucket.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1ValueFrequency[]} bucketValues Sample of value frequencies in this bucket. The total number of values returned per bucket is capped at 20.
 * @property {string} valueFrequencyLowerBound Lower bound on the value frequency of the values in this bucket.
 * @property {string} valueFrequencyUpperBound Upper bound on the value frequency of the values in this bucket.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1CategoricalStatsResult
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket[]} valueFrequencyHistogramBuckets Histogram of value frequencies in the column.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1CloudStorageOptions
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1FileSet} fileSet
 */
/**
 * @typedef GooglePrivacyDlpV2beta1CloudStoragePath
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} path The url, in the format of `gs://bucket/&lt;path&gt;`.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1CustomInfoType
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1Dictionary} dictionary Dictionary-based custom info type.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1InfoType} infoType Info type configuration. All custom info types must have configurations that do not conflict with built-in info types or other custom info types.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1SurrogateType} surrogateType Surrogate info type.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1DatastoreOptions
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1KindExpression} kind The kind to process.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1PartitionId} partitionId A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1Projection[]} projection Properties to scan. If none are specified, all properties will be scanned by default.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1Dictionary
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1WordList} wordList List of words or phrases to search for.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1EntityId
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1FieldId} field Composite key indicating which field contains the entity identifier.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1FieldId
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} columnName Name describing the field.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1FileSet
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} url The url, in the format `gs://&lt;bucket&gt;/&lt;path&gt;`. Trailing wildcard in the path is allowed.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1InfoType
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} name Name of the information type.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1InfoTypeLimit
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1InfoType} infoType Type of information the findings limit applies to. Only one limit per info_type should be provided. If InfoTypeLimit does not have an info_type, the DLP API applies the limit against all info_types that are found but not specified in another InfoTypeLimit.
 * @property {integer} maxFindings Max findings limit for the given infoType.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1InfoTypeStatistics
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} count Number of findings for this info type.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1InfoType} infoType The type of finding this stat is for.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1InspectConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1CustomInfoType[]} customInfoTypes Custom info types provided by the user.
 * @property {boolean} excludeTypes When true, excludes type information of the findings.
 * @property {boolean} includeQuote When true, a contextual quote from the data that triggered a finding is included in the response; see Finding.quote.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1InfoTypeLimit[]} infoTypeLimits Configuration of findings limit given for specified info types.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1InfoType[]} infoTypes Restricts what info_types to look for. The values must correspond to InfoType values returned by ListInfoTypes or found in documentation. Empty info_types runs all enabled detectors.
 * @property {integer} maxFindings Limits the number of findings per content item or long running operation.
 * @property {string} minLikelihood Only returns findings equal or above this threshold.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1InspectOperationMetadata
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} createTime The time which this request was started.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1InfoTypeStatistics[]} infoTypeStats
 * @property {string} processedBytes Total size in bytes that were processed.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1InspectConfig} requestInspectConfig The inspect config used to create the Operation.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1OutputStorageConfig} requestOutputConfig Optional location to store findings.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1StorageConfig} requestStorageConfig The storage config used to create the Operation.
 * @property {string} totalEstimatedBytes Estimate of the number of bytes to process.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1InspectOperationResult
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should have the format of `inspect/results/{id}`.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1KAnonymityConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1EntityId} entityId Optional message indicating that each distinct entity_id should not contribute to the k-anonymity count more than once per equivalence class. If an entity_id appears on several rows with different quasi-identifier tuples, it will contribute to each count exactly once.  This can lead to unexpected results. Consider a table where ID 1 is associated to quasi-identifier &quot;foo&quot;, ID 2 to &quot;bar&quot;, and ID 3 to *both* quasi-identifiers &quot;foo&quot; and &quot;bar&quot; (on separate rows), and where this ID is used as entity_id. Then, the anonymity value associated to ID 3 will be 2, even if it is the only ID to be associated to both values &quot;foo&quot; and &quot;bar&quot;.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1FieldId[]} quasiIds Set of fields to compute k-anonymity over. When multiple fields are specified, they are considered a single composite key. Structs and repeated data types are not supported; however, nested fields are supported so long as they are not structs themselves or nested within a repeated field.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} equivalenceClassSize Size of the equivalence class, for example number of rows with the above set of values.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1Value[]} quasiIdsValues Set of values defining the equivalence class. One value per quasi-identifier column in the original KAnonymity metric message. The order is always the same as the original request.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1KAnonymityHistogramBucket
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} bucketSize Total number of records in this bucket.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass[]} bucketValues Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20.
 * @property {string} equivalenceClassSizeLowerBound Lower bound on the size of the equivalence classes in this bucket.
 * @property {string} equivalenceClassSizeUpperBound Upper bound on the size of the equivalence classes in this bucket.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1KAnonymityResult
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1KAnonymityHistogramBucket[]} equivalenceClassHistogramBuckets Histogram of k-anonymity equivalence classes.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1KindExpression
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} name The name of the kind.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1KMapEstimationConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1AuxiliaryTable[]} auxiliaryTables Several auxiliary tables can be used in the analysis. Each custom_tag used to tag a quasi-identifiers column must appear in exactly one column of one auxiliary table.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1TaggedField[]} quasiIds Fields considered to be quasi-identifiers. No two columns can have the same tag. [required]
 * @property {string} regionCode ISO 3166-1 alpha-2 region code to use in the statistical modeling. Required if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1KMapEstimationHistogramBucket
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} bucketSize Number of records within these anonymity bounds.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1KMapEstimationQuasiIdValues[]} bucketValues Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20.
 * @property {string} maxAnonymity Always greater than or equal to min_anonymity.
 * @property {string} minAnonymity Always positive.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1KMapEstimationQuasiIdValues
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} estimatedAnonymity The estimated anonymity for these quasi-identifier values.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1Value[]} quasiIdsValues The quasi-identifier values.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1KMapEstimationResult
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1KMapEstimationHistogramBucket[]} kMapEstimationHistogram The intervals [min_anonymity, max_anonymity] do not overlap. If a value doesn&#39;t correspond to any such interval, the associated frequency is zero. For example, the following records:   {min_anonymity: 1, max_anonymity: 1, frequency: 17}   {min_anonymity: 2, max_anonymity: 3, frequency: 42}   {min_anonymity: 5, max_anonymity: 10, frequency: 99} mean that there are no record with an estimated anonymity of 4, 5, or larger than 10.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1LDiversityConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1FieldId[]} quasiIds Set of quasi-identifiers indicating how equivalence classes are defined for the l-diversity computation. When multiple fields are specified, they are considered a single composite key.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1FieldId} sensitiveAttribute Sensitive field for computing the l-value.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1LDiversityEquivalenceClass
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} equivalenceClassSize Size of the k-anonymity equivalence class.
 * @property {string} numDistinctSensitiveValues Number of distinct sensitive values in this equivalence class.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1Value[]} quasiIdsValues Quasi-identifier values defining the k-anonymity equivalence class. The order is always the same as the original request.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1ValueFrequency[]} topSensitiveValues Estimated frequencies of top sensitive values.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1LDiversityHistogramBucket
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} bucketSize Total number of records in this bucket.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1LDiversityEquivalenceClass[]} bucketValues Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20.
 * @property {string} sensitiveValueFrequencyLowerBound Lower bound on the sensitive value frequencies of the equivalence classes in this bucket.
 * @property {string} sensitiveValueFrequencyUpperBound Upper bound on the sensitive value frequencies of the equivalence classes in this bucket.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1LDiversityResult
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1LDiversityHistogramBucket[]} sensitiveValueFrequencyHistogramBuckets Histogram of l-diversity equivalence class sensitive value frequencies.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1NumericalStatsConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1FieldId} field Field to compute numerical stats on. Supported types are integer, float, date, datetime, timestamp, time.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1NumericalStatsResult
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1Value} maxValue Maximum value appearing in the column.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1Value} minValue Minimum value appearing in the column.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1Value[]} quantileValues List of 99 values that partition the set of field values into 100 equal sized buckets.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1OutputStorageConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1CloudStoragePath} storagePath The path to a Google Cloud Storage location to store output. The bucket must already exist and the Google APIs service account for DLP must have write permission to write to the given bucket. Results are split over multiple csv files with each file name matching the pattern &quot;[operation_id]_[count].csv&quot;, for example `3094877188788974909_1.csv`. The `operation_id` matches the identifier for the Operation, and the `count` is a counter used for tracking the number of files written.  The CSV file(s) contain the following columns regardless of storage type scanned: - id - info_type - likelihood - byte size of finding - quote - timestamp  For Cloud Storage the next columns are:  - file_path - start_offset  For Cloud Datastore the next columns are:  - project_id - namespace_id - path - column_name - offset  For BigQuery the next columns are:  - row_number - project_id - dataset_id - table_id
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1BigQueryTable} table Store findings in a new table in the dataset.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1PartitionId
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} namespaceId If not empty, the ID of the namespace to which the entities belong.
 * @property {string} projectId The ID of the project to which the entities belong.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1PrivacyMetric
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1CategoricalStatsConfig} categoricalStatsConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1KAnonymityConfig} kAnonymityConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1KMapEstimationConfig} kMapEstimationConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1LDiversityConfig} lDiversityConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1NumericalStatsConfig} numericalStatsConfig
 */
/**
 * @typedef GooglePrivacyDlpV2beta1Projection
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1PropertyReference} property The property to project.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1PropertyReference
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} name The name of the property. If name includes &quot;.&quot;s, it may be interpreted as a property name path.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1QuasiIdField
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} customTag
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1FieldId} field
 */
/**
 * @typedef GooglePrivacyDlpV2beta1RiskAnalysisOperationMetadata
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} createTime The time which this request was started.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1PrivacyMetric} requestedPrivacyMetric Privacy metric to compute.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1BigQueryTable} requestedSourceTable Input dataset to compute metrics over.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1RiskAnalysisOperationResult
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1CategoricalStatsResult} categoricalStatsResult
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1KAnonymityResult} kAnonymityResult
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1KMapEstimationResult} kMapEstimationResult
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1LDiversityResult} lDiversityResult
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1NumericalStatsResult} numericalStatsResult
 */
/**
 * @typedef GooglePrivacyDlpV2beta1StorageConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1BigQueryOptions} bigQueryOptions BigQuery options specification.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1CloudStorageOptions} cloudStorageOptions Google Cloud Storage options specification.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1DatastoreOptions} datastoreOptions Google Cloud Datastore options specification.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1SurrogateType
 * @memberOf! dlp(v2beta2)
 * @type object
 */
/**
 * @typedef GooglePrivacyDlpV2beta1TaggedField
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} customTag A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below).
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1FieldId} field Identifies the column. [required]
 * @property {dlp(v2beta2).GoogleProtobufEmpty} inferred If no semantic tag is indicated, we infer the statistical model from the distribution of values in the input data
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1InfoType} infoType A column can be tagged with a InfoType to use the relevant public dataset as a statistical model of population, if available. We currently support US ZIP codes, region codes, ages and genders.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1Value
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {boolean} booleanValue
 * @property {dlp(v2beta2).GoogleTypeDate} dateValue
 * @property {number} floatValue
 * @property {string} integerValue
 * @property {string} stringValue
 * @property {string} timestampValue
 * @property {dlp(v2beta2).GoogleTypeTimeOfDay} timeValue
 */
/**
 * @typedef GooglePrivacyDlpV2beta1ValueFrequency
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} count How many times the value is contained in the field.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta1Value} value A value contained in the field in question.
 */
/**
 * @typedef GooglePrivacyDlpV2beta1WordList
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string[]} words Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required]
 */
/**
 * @typedef GooglePrivacyDlpV2beta2AnalyzeDataSourceRiskDetails
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2CategoricalStatsResult} categoricalStatsResult
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2KAnonymityResult} kAnonymityResult
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2KMapEstimationResult} kMapEstimationResult
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2LDiversityResult} lDiversityResult
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2NumericalStatsResult} numericalStatsResult
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2PrivacyMetric} requestedPrivacyMetric Privacy metric to compute.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2BigQueryTable} requestedSourceTable Input dataset to compute metrics over.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2AnalyzeDataSourceRiskRequest
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2RiskAnalysisJobConfig} jobConfig Configuration for this risk analysis job.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2AuxiliaryTable
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2QuasiIdField[]} quasiIds Quasi-identifier columns. [required]
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldId} relativeFrequency The relative frequency column must contain a floating-point number between 0 and 1 (inclusive). Null values are assumed to be zero. [required]
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2BigQueryTable} table Auxiliary table location. [required]
 */
/**
 * @typedef GooglePrivacyDlpV2beta2BigQueryOptions
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldId[]} identifyingFields References to fields uniquely identifying rows within the table. Nested fields in the format, like `person.birthdate.year`, are allowed.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2BigQueryTable} tableReference Complete BigQuery table reference.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2BigQueryTable
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} datasetId Dataset ID of the table.
 * @property {string} projectId The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
 * @property {string} tableId Name of the table.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2Bucket
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Value} max Upper bound of the range, exclusive; type must match min.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Value} min Lower bound of the range, inclusive. Type should be the same as max if used.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Value} replacementValue Replacement value for this bucket. If not provided the default behavior will be to hyphenate the min-max range.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2BucketingConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Bucket[]} buckets Set of buckets. Ranges must be non-overlapping.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2CancelDlpJobRequest
 * @memberOf! dlp(v2beta2)
 * @type object
 */
/**
 * @typedef GooglePrivacyDlpV2beta2CategoricalStatsConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldId} field Field to compute categorical stats on. All column types are supported except for arrays and structs. However, it may be more informative to use NumericalStats when the field type is supported, depending on the data.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2CategoricalStatsHistogramBucket
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} bucketSize Total number of values in this bucket.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2ValueFrequency[]} bucketValues Sample of value frequencies in this bucket. The total number of values returned per bucket is capped at 20.
 * @property {string} valueFrequencyLowerBound Lower bound on the value frequency of the values in this bucket.
 * @property {string} valueFrequencyUpperBound Upper bound on the value frequency of the values in this bucket.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2CategoricalStatsResult
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2CategoricalStatsHistogramBucket[]} valueFrequencyHistogramBuckets Histogram of value frequencies in the column.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2CharacterMaskConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2CharsToIgnore[]} charactersToIgnore When masking a string, items in this list will be skipped when replacing. For example, if your string is 555-555-5555 and you ask us to skip `-` and mask 5 chars with * we would produce ***-*55-5555.
 * @property {string} maskingCharacter Character to mask the sensitive values&amp;mdash;for example, &quot;*&quot; for an alphabetic string such as name, or &quot;0&quot; for a numeric string such as ZIP code or credit card number. String must have length 1. If not supplied, we will default to &quot;*&quot; for strings, 0 for digits.
 * @property {integer} numberToMask Number of characters to mask. If not set, all matching chars will be masked. Skipped characters do not count towards this tally.
 * @property {boolean} reverseOrder Mask characters in reverse order. For example, if `masking_character` is &#39;0&#39;, number_to_mask is 14, and `reverse_order` is false, then 1234-5678-9012-3456 -&gt; 00000000000000-3456 If `masking_character` is &#39;*&#39;, `number_to_mask` is 3, and `reverse_order` is true, then 12345 -&gt; 12***
 */
/**
 * @typedef GooglePrivacyDlpV2beta2CharsToIgnore
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} charactersToSkip
 * @property {string} commonCharactersToIgnore
 */
/**
 * @typedef GooglePrivacyDlpV2beta2CloudStorageKey
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} filePath Path to the file.
 * @property {string} startOffset Byte offset of the referenced data in the file.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2CloudStorageOptions
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FileSet} fileSet
 */
/**
 * @typedef GooglePrivacyDlpV2beta2Color
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {number} blue The amount of blue in the color as a value in the interval [0, 1].
 * @property {number} green The amount of green in the color as a value in the interval [0, 1].
 * @property {number} red The amount of red in the color as a value in the interval [0, 1].
 */
/**
 * @typedef GooglePrivacyDlpV2beta2Condition
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldId} field Field within the record this condition is evaluated against. [required]
 * @property {string} operator Operator used to compare the field or infoType to the value. [required]
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Value} value Value to compare against. [Required, except for `EXISTS` tests.]
 */
/**
 * @typedef GooglePrivacyDlpV2beta2Conditions
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Condition[]} conditions
 */
/**
 * @typedef GooglePrivacyDlpV2beta2ContentItem
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} data Content data to inspect or redact.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Table} table Structured content for inspection.
 * @property {string} type Type of the content, as defined in Content-Type HTTP header. Supported types are: all &quot;text&quot; types, octet streams, PNG images, JPEG images.
 * @property {string} value String data to inspect or redact.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2CreateDeidentifyTemplateRequest
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2DeidentifyTemplate} deidentifyTemplate The DeidentifyTemplate to create.
 * @property {string} templateId The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\\d-]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2CreateInspectTemplateRequest
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InspectTemplate} inspectTemplate The InspectTemplate to create.
 * @property {string} templateId The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\\d-]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2CryptoHashConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2CryptoKey} cryptoKey The key used by the hash function.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2CryptoKey
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2KmsWrappedCryptoKey} kmsWrapped
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2TransientCryptoKey} transient
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2UnwrappedCryptoKey} unwrapped
 */
/**
 * @typedef GooglePrivacyDlpV2beta2CryptoReplaceFfxFpeConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} commonAlphabet
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldId} context The &#39;tweak&#39;, a context may be used for higher security since the same identifier in two different contexts won&#39;t be given the same surrogate. If the context is not set, a default tweak will be used.  If the context is set but:  1. there is no record present when transforming a given value or 1. the field is not present when transforming a given value,  a default tweak will be used.  Note that case (1) is expected when an `InfoTypeTransformation` is applied to both structured and non-structured `ContentItem`s. Currently, the referenced field may be of value type integer or string.  The tweak is constructed as a sequence of bytes in big endian byte order such that:  - a 64 bit integer is encoded followed by a single byte of value 1 - a string is encoded in UTF-8 format followed by a single byte of value  å 2
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2CryptoKey} cryptoKey The key used by the encryption algorithm. [required]
 * @property {string} customAlphabet This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range [2, 62]. This must be encoded as ASCII. The order of characters does not matter.
 * @property {integer} radix The native way to select the alphabet. Must be in the range [2, 62].
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InfoType} surrogateInfoType The custom infoType to annotate the surrogate with. This annotation will be applied to the surrogate by prefixing it with the name of the custom infoType followed by the number of characters comprising the surrogate. The following scheme defines the format: info_type_name(surrogate_character_count):surrogate  For example, if the name of custom infoType is &#39;MY_TOKEN_INFO_TYPE&#39; and the surrogate is &#39;abc&#39;, the full replacement value will be: &#39;MY_TOKEN_INFO_TYPE(3):abc&#39;  This annotation identifies the surrogate when inspecting content using the custom infoType [`SurrogateType`](/dlp/docs/reference/rest/v2beta2/InspectConfig#surrogatetype). This facilitates reversal of the surrogate when it occurs in free text.  In order for inspection to work properly, the name of this infoType must not occur naturally anywhere in your data; otherwise, inspection may find a surrogate that does not correspond to an actual identifier. Therefore, choose your custom infoType name carefully after considering what your data looks like. One way to select a name that has a high chance of yielding reliable detection is to include one or more unicode characters that are highly improbable to exist in your data. For example, assuming your data is entered from a regular ASCII keyboard, the symbol with the hex code point 29DD might be used like so: ⧝MY_TOKEN_TYPE
 */
/**
 * @typedef GooglePrivacyDlpV2beta2CustomInfoType
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Dictionary} dictionary Dictionary-based custom info type.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InfoType} infoType Info type configuration. All custom info types must have configurations that do not conflict with built-in info types or other custom info types.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2SurrogateType} surrogateType Surrogate info type.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2DatastoreKey
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Key} entityKey Datastore entity key.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2DatastoreOptions
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2KindExpression} kind The kind to process.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2PartitionId} partitionId A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2DeidentifyConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InfoTypeTransformations} infoTypeTransformations Treat the dataset as free-form text and apply the same free text transformation everywhere.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2RecordTransformations} recordTransformations Treat the dataset as structured. Transformations can be applied to specific locations within structured datasets, such as transforming a column within a table.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2DeidentifyContentRequest
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2DeidentifyConfig} deidentifyConfig Configuration for the de-identification of the content item. Items specified here will override the template referenced by the deidentify_template_name argument.
 * @property {string} deidentifyTemplateName Optional template to use. Any configuration directly specified in deidentify_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InspectConfig} inspectConfig Configuration for the inspector. Items specified here will override the template referenced by the inspect_template_name argument.
 * @property {string} inspectTemplateName Optional template to use. Any configuration directly specified in inspect_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2ContentItem} item The item to de-identify. Will be treated as text.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2DeidentifyContentResponse
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2ContentItem} item The de-identified item.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2TransformationOverview} overview An overview of the changes that were made on the `item`.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2DeidentifyTemplate
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} createTime The creation timestamp of a inspectTemplate, output only field.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2DeidentifyConfig} deidentifyConfig ///////////// // The core content of the template  // ///////////////
 * @property {string} description Short description (max 256 chars).
 * @property {string} displayName Display name (max 256 chars).
 * @property {string} name The template name. Output only.  The template will have one of the following formats: `projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID`
 * @property {string} updateTime The last update timestamp of a inspectTemplate, output only field.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2Dictionary
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2WordList} wordList List of words or phrases to search for.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2DlpJob
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} createTime Time when the job was created.
 * @property {string} endTime Time when the job finished.
 * @property {dlp(v2beta2).GoogleRpcStatus[]} errorResults A stream of errors encountered running the job.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InspectDataSourceDetails} inspectDetails Results from inspecting a data source.
 * @property {string} name The server-assigned name.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2AnalyzeDataSourceRiskDetails} riskDetails Results from analyzing risk of a data source.
 * @property {string} startTime Time when the job started.
 * @property {string} state State of a job.
 * @property {string} type The type of job.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2EntityId
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldId} field Composite key indicating which field contains the entity identifier.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2Expressions
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Conditions} conditions
 * @property {string} logicalOperator The operator to apply to the result of conditions. Default and currently only supported value is `AND`.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2FieldId
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} name Name describing the field.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2FieldTransformation
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2RecordCondition} condition Only apply the transformation if the condition evaluates to true for the given `RecordCondition`. The conditions are allowed to reference fields that are not used in the actual transformation. [optional]  Example Use Cases:  - Apply a different bucket transformation to an age column if the zip code column for the same record is within a specific range. - Redact a field if the date of birth field is greater than 85.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldId[]} fields Input field(s) to apply the transformation to. [required]
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InfoTypeTransformations} infoTypeTransformations Treat the contents of the field as free text, and selectively transform content that matches an `InfoType`.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2PrimitiveTransformation} primitiveTransformation Apply the transformation to the entire field.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2FileSet
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} url The url, in the format `gs://&lt;bucket&gt;/&lt;path&gt;`. Trailing wildcard in the path is allowed.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2Finding
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} createTime Timestamp when finding was detected.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InfoType} infoType The type of content that might have been found. Provided if requested by the `InspectConfig`.
 * @property {string} likelihood Estimate of how likely it is that the `info_type` is correct.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Location} location Where the content was found.
 * @property {string} quote The content that was found. Even if the content is not textual, it may be converted to a textual representation here. Provided if requested by the `InspectConfig`.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2FindingLimits
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InfoTypeLimit[]} maxFindingsPerInfoType Configuration of findings limit given for specified infoTypes.
 * @property {integer} maxFindingsPerItem Max number of findings that will be returned for each item scanned.
 * @property {integer} maxFindingsPerRequest Max total number of findings that will be returned per request/job.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2FixedSizeBucketingConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {number} bucketSize Size of each bucket (except for minimum and maximum buckets). So if `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works. [Required].
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Value} lowerBound Lower bound value of buckets. All values less than `lower_bound` are grouped together into a single bucket; for example if `lower_bound` = 10, then all values less than 10 are replaced with the value “-10”. [Required].
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Value} upperBound Upper bound value of buckets. All values greater than upper_bound are grouped together into a single bucket; for example if `upper_bound` = 89, then all values greater than 89 are replaced with the value “89+”. [Required].
 */
/**
 * @typedef GooglePrivacyDlpV2beta2ImageLocation
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {integer} height Height of the bounding box in pixels.
 * @property {integer} left Left coordinate of the bounding box. (0,0) is upper left.
 * @property {integer} top Top coordinate of the bounding box. (0,0) is upper left.
 * @property {integer} width Width of the bounding box in pixels.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2ImageRedactionConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InfoType} infoType Only one per info_type should be provided per request. If not specified, and redact_all_text is false, the DLP API will redact all text that it matches against all info_types that are found, but not specified in another ImageRedactionConfig.
 * @property {boolean} redactAllText If true, all text found in the image, regardless whether it matches an info_type, is redacted.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Color} redactionColor The color to use when redacting content from an image. If not specified, the default is black.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2InfoType
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} name Name of the information type.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2InfoTypeDescription
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} displayName Human readable form of the infoType name.
 * @property {string} name Internal name of the infoType.
 * @property {string[]} supportedBy Which parts of the API supports this InfoType.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2InfoTypeLimit
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InfoType} infoType Type of information the findings limit applies to. Only one limit per info_type should be provided. If InfoTypeLimit does not have an info_type, the DLP API applies the limit against all info_types that are found but not specified in another InfoTypeLimit.
 * @property {integer} maxFindings Max findings limit for the given infoType.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2InfoTypeStatistics
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} count Number of findings for this infoType.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InfoType} infoType The type of finding this stat is for.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2InfoTypeTransformation
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InfoType[]} infoTypes InfoTypes to apply the transformation to. Empty list will match all available infoTypes for this transformation.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2PrimitiveTransformation} primitiveTransformation Primitive transformation to apply to the infoType. [required]
 */
/**
 * @typedef GooglePrivacyDlpV2beta2InfoTypeTransformations
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InfoTypeTransformation[]} transformations Transformation for each infoType. Cannot specify more than one for a given infoType. [required]
 */
/**
 * @typedef GooglePrivacyDlpV2beta2InspectConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2CustomInfoType[]} customInfoTypes Custom infoTypes provided by the user.
 * @property {boolean} excludeInfoTypes When true, excludes type information of the findings.
 * @property {boolean} includeQuote When true, a contextual quote from the data that triggered a finding is included in the response; see Finding.quote.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InfoType[]} infoTypes Restricts what info_types to look for. The values must correspond to InfoType values returned by ListInfoTypes or found in documentation. Empty info_types runs all enabled detectors.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FindingLimits} limits
 * @property {string} minLikelihood Only returns findings equal or above this threshold. The default is POSSIBLE.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2InspectContentRequest
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InspectConfig} inspectConfig Configuration for the inspector. What specified here will override the template referenced by the inspect_template_name argument.
 * @property {string} inspectTemplateName Optional template to use. Any configuration directly specified in inspect_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2ContentItem} item The item to inspect.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2InspectContentResponse
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InspectResult} result The findings.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2InspectDataSourceDetails
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2RequestedOptions} requestedOptions The configuration used for this job.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Result} result A summary of the outcome of this inspect job.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2InspectDataSourceRequest
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InspectJobConfig} jobConfig A configuration for the job.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2InspectJobConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InspectConfig} inspectConfig How and what to scan for.
 * @property {string} inspectTemplateName If provided, will be used as the default for all values in InspectConfig. `inspect_config` will be merged into the values persisted as part of the template.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2OutputStorageConfig} outputConfig Where to put the findings.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2StorageConfig} storageConfig The data to scan.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2InspectResult
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Finding[]} findings List of findings for an item.
 * @property {boolean} findingsTruncated If true, then this item might have more findings than were returned, and the findings returned are an arbitrary subset of all findings. The findings list might be truncated because the input items were too large, or because the server reached the maximum amount of resources allowed for a single API call. For best results, divide the input into smaller batches.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2InspectTemplate
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} createTime The creation timestamp of a inspectTemplate, output only field.
 * @property {string} description Short description (max 256 chars).
 * @property {string} displayName Display name (max 256 chars).
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InspectConfig} inspectConfig The core content of the template. Configuration of the scanning process.
 * @property {string} name The template name. Output only.  The template will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`
 * @property {string} updateTime The last update timestamp of a inspectTemplate, output only field.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2KAnonymityConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2EntityId} entityId Optional message indicating that each distinct entity_id should not contribute to the k-anonymity count more than once per equivalence class. If an entity_id appears on several rows with different quasi-identifier tuples, it will contribute to each count exactly once.  This can lead to unexpected results. Consider a table where ID 1 is associated to quasi-identifier &quot;foo&quot;, ID 2 to &quot;bar&quot;, and ID 3 to *both* quasi-identifiers &quot;foo&quot; and &quot;bar&quot; (on separate rows), and where this ID is used as entity_id. Then, the anonymity value associated to ID 3 will be 2, even if it is the only ID to be associated to both values &quot;foo&quot; and &quot;bar&quot;.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldId[]} quasiIds Set of fields to compute k-anonymity over. When multiple fields are specified, they are considered a single composite key. Structs and repeated data types are not supported; however, nested fields are supported so long as they are not structs themselves or nested within a repeated field.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2KAnonymityEquivalenceClass
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} equivalenceClassSize Size of the equivalence class, for example number of rows with the above set of values.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Value[]} quasiIdsValues Set of values defining the equivalence class. One value per quasi-identifier column in the original KAnonymity metric message. The order is always the same as the original request.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2KAnonymityHistogramBucket
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} bucketSize Total number of equivalence classes in this bucket.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2KAnonymityEquivalenceClass[]} bucketValues Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20.
 * @property {string} equivalenceClassSizeLowerBound Lower bound on the size of the equivalence classes in this bucket.
 * @property {string} equivalenceClassSizeUpperBound Upper bound on the size of the equivalence classes in this bucket.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2KAnonymityResult
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2KAnonymityHistogramBucket[]} equivalenceClassHistogramBuckets Histogram of k-anonymity equivalence classes.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2Key
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2PartitionId} partitionId Entities are partitioned into subsets, currently identified by a project ID and namespace ID. Queries are scoped to a single partition.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2PathElement[]} path The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a _root entity_, the second element identifies a _child_ of the root entity, the third element identifies a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element&#39;s _ancestors_.  A path can never be empty, and a path can have at most 100 elements.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2KindExpression
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} name The name of the kind.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2KMapEstimationConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2AuxiliaryTable[]} auxiliaryTables Several auxiliary tables can be used in the analysis. Each custom_tag used to tag a quasi-identifiers column must appear in exactly one column of one auxiliary table.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2TaggedField[]} quasiIds Fields considered to be quasi-identifiers. No two columns can have the same tag. [required]
 * @property {string} regionCode ISO 3166-1 alpha-2 region code to use in the statistical modeling. Required if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2KMapEstimationHistogramBucket
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} bucketSize Number of records within these anonymity bounds.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2KMapEstimationQuasiIdValues[]} bucketValues Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20.
 * @property {string} maxAnonymity Always greater than or equal to min_anonymity.
 * @property {string} minAnonymity Always positive.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2KMapEstimationQuasiIdValues
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} estimatedAnonymity The estimated anonymity for these quasi-identifier values.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Value[]} quasiIdsValues The quasi-identifier values.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2KMapEstimationResult
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2KMapEstimationHistogramBucket[]} kMapEstimationHistogram The intervals [min_anonymity, max_anonymity] do not overlap. If a value doesn&#39;t correspond to any such interval, the associated frequency is zero. For example, the following records:   {min_anonymity: 1, max_anonymity: 1, frequency: 17}   {min_anonymity: 2, max_anonymity: 3, frequency: 42}   {min_anonymity: 5, max_anonymity: 10, frequency: 99} mean that there are no record with an estimated anonymity of 4, 5, or larger than 10.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2KmsWrappedCryptoKey
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} cryptoKeyName The resource name of the KMS CryptoKey to use for unwrapping. [required]
 * @property {string} wrappedKey The wrapped data crypto key. [required]
 */
/**
 * @typedef GooglePrivacyDlpV2beta2LDiversityConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldId[]} quasiIds Set of quasi-identifiers indicating how equivalence classes are defined for the l-diversity computation. When multiple fields are specified, they are considered a single composite key.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldId} sensitiveAttribute Sensitive field for computing the l-value.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2LDiversityEquivalenceClass
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} equivalenceClassSize Size of the k-anonymity equivalence class.
 * @property {string} numDistinctSensitiveValues Number of distinct sensitive values in this equivalence class.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Value[]} quasiIdsValues Quasi-identifier values defining the k-anonymity equivalence class. The order is always the same as the original request.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2ValueFrequency[]} topSensitiveValues Estimated frequencies of top sensitive values.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2LDiversityHistogramBucket
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} bucketSize Total number of equivalence classes in this bucket.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2LDiversityEquivalenceClass[]} bucketValues Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20.
 * @property {string} sensitiveValueFrequencyLowerBound Lower bound on the sensitive value frequencies of the equivalence classes in this bucket.
 * @property {string} sensitiveValueFrequencyUpperBound Upper bound on the sensitive value frequencies of the equivalence classes in this bucket.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2LDiversityResult
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2LDiversityHistogramBucket[]} sensitiveValueFrequencyHistogramBuckets Histogram of l-diversity equivalence class sensitive value frequencies.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2ListDeidentifyTemplatesResponse
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2DeidentifyTemplate[]} deidentifyTemplates List of deidentify templates, up to page_size in ListDeidentifyTemplatesRequest.
 * @property {string} nextPageToken If the next page is available then the next page token to be used in following ListDeidentifyTemplates request.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2ListDlpJobsResponse
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2DlpJob[]} jobs A list of DlpJobs that matches the specified filter in the request.
 * @property {string} nextPageToken The standard List next-page token.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2ListInfoTypesResponse
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InfoTypeDescription[]} infoTypes Set of sensitive infoTypes.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2ListInspectTemplatesResponse
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InspectTemplate[]} inspectTemplates List of inspectTemplates, up to page_size in ListInspectTemplatesRequest.
 * @property {string} nextPageToken If the next page is available then the next page token to be used in following ListInspectTemplates request.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2Location
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Range} byteRange Zero-based byte offsets delimiting the finding. These are relative to the finding&#39;s containing element. Note that when the content is not textual, this references the UTF-8 encoded textual representation of the content. Omitted if content is an image.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Range} codepointRange Unicode character offsets delimiting the finding. These are relative to the finding&#39;s containing element. Provided when the content is text.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldId} fieldId The pointer to the property or cell that contained the finding. Provided when the finding&#39;s containing element is a cell in a table or a property of storage object.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2ImageLocation[]} imageBoxes The area within the image that contained the finding. Provided when the content is an image.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2RecordKey} recordKey The pointer to the record in storage that contained the field the finding was found in. Provided when the finding&#39;s containing element is a property of a storage object.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2TableLocation} tableLocation The pointer to the row of the table that contained the finding. Provided when the finding&#39;s containing element is a cell of a table.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2NumericalStatsConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldId} field Field to compute numerical stats on. Supported types are integer, float, date, datetime, timestamp, time.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2NumericalStatsResult
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Value} maxValue Maximum value appearing in the column.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Value} minValue Minimum value appearing in the column.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Value[]} quantileValues List of 99 values that partition the set of field values into 100 equal sized buckets.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2OutputStorageConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2BigQueryTable} table Store findings in a new table in an existing dataset. If table_id is not set a new one will be generated for you with the following format: dlp_googleapis_yyyy_mm_dd_[dlp_job_id]. Pacific timezone will be used for generating the date details.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2PartitionId
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} namespaceId If not empty, the ID of the namespace to which the entities belong.
 * @property {string} projectId The ID of the project to which the entities belong.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2PathElement
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} id The auto-allocated ID of the entity. Never equal to zero. Values less than zero are discouraged and may not be supported in the future.
 * @property {string} kind The kind of the entity. A kind matching regex `__.*__` is reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8 encoded. Cannot be `&quot;&quot;`.
 * @property {string} name The name of the entity. A name matching regex `__.*__` is reserved/read-only. A name must not be more than 1500 bytes when UTF-8 encoded. Cannot be `&quot;&quot;`.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2PrimitiveTransformation
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2BucketingConfig} bucketingConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2CharacterMaskConfig} characterMaskConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2CryptoHashConfig} cryptoHashConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2CryptoReplaceFfxFpeConfig} cryptoReplaceFfxFpeConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FixedSizeBucketingConfig} fixedSizeBucketingConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2RedactConfig} redactConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2ReplaceValueConfig} replaceConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2ReplaceWithInfoTypeConfig} replaceWithInfoTypeConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2TimePartConfig} timePartConfig
 */
/**
 * @typedef GooglePrivacyDlpV2beta2PrivacyMetric
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2CategoricalStatsConfig} categoricalStatsConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2KAnonymityConfig} kAnonymityConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2KMapEstimationConfig} kMapEstimationConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2LDiversityConfig} lDiversityConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2NumericalStatsConfig} numericalStatsConfig
 */
/**
 * @typedef GooglePrivacyDlpV2beta2QuasiIdField
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} customTag
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldId} field
 */
/**
 * @typedef GooglePrivacyDlpV2beta2Range
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} end Index of the last character of the range (exclusive).
 * @property {string} start Index of the first character of the range (inclusive).
 */
/**
 * @typedef GooglePrivacyDlpV2beta2RecordCondition
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Expressions} expressions An expression.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2RecordKey
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2CloudStorageKey} cloudStorageKey
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2DatastoreKey} datastoreKey
 */
/**
 * @typedef GooglePrivacyDlpV2beta2RecordSuppression
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2RecordCondition} condition A condition that when it evaluates to true will result in the record being evaluated to be suppressed from the transformed content.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2RecordTransformations
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldTransformation[]} fieldTransformations Transform the record by applying various field transformations.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2RecordSuppression[]} recordSuppressions Configuration defining which records get suppressed entirely. Records that match any suppression rule are omitted from the output [optional].
 */
/**
 * @typedef GooglePrivacyDlpV2beta2RedactConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 */
/**
 * @typedef GooglePrivacyDlpV2beta2RedactImageRequest
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} imageData The bytes of the image to redact.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2ImageRedactionConfig[]} imageRedactionConfigs The configuration for specifying what content to redact from images.
 * @property {string} imageType Type of the content, as defined in Content-Type HTTP header. Supported types are: PNG, JPEG, SVG, &amp; BMP.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InspectConfig} inspectConfig Configuration for the inspector.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2RedactImageResponse
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} extractedText If an image was being inspected and the InspectConfig&#39;s include_quote was set to true, then this field will include all text, if any, that was found in the image.
 * @property {string} redactedImage The redacted image. The type will be the same as the original image.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2ReidentifyContentRequest
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InspectConfig} inspectConfig Configuration for the inspector.
 * @property {string} inspectTemplateName Optional template to use. Any configuration directly specified in `inspect_config` will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2ContentItem} item The item to re-identify. Will be treated as text.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2DeidentifyConfig} reidentifyConfig Configuration for the re-identification of the content item. This field shares the same proto message type that is used for de-identification, however its usage here is for the reversal of the previous de-identification. Re-identification is performed by examining the transformations used to de-identify the items and executing the reverse. This requires that only reversible transformations be provided here. The reversible transformations are:   - `CryptoReplaceFfxFpeConfig`
 * @property {string} reidentifyTemplateName Optional template to use. References an instance of `DeidentifyTemplate`. Any configuration directly specified in `reidentify_config` or `inspect_config` will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2ReidentifyContentResponse
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2ContentItem} item The re-identified item.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2TransformationOverview} overview An overview of the changes that were made to the `item`.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2ReplaceValueConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Value} newValue Value to replace it with.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2ReplaceWithInfoTypeConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 */
/**
 * @typedef GooglePrivacyDlpV2beta2RequestedOptions
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InspectJobConfig} jobConfig
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InspectTemplate} snapshotInspectTemplate If run with an inspect template, a snapshot of it&#39;s state at the time of this run.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2Result
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InfoTypeStatistics[]} infoTypeStats Statistics of how many instances of each info type were found during inspect job.
 * @property {string} processedBytes Total size in bytes that were processed.
 * @property {string} totalEstimatedBytes Estimate of the number of bytes to process.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2RiskAnalysisJobConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2PrivacyMetric} privacyMetric Privacy metric to compute.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2BigQueryTable} sourceTable Input dataset to compute metrics over.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2Row
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Value[]} values
 */
/**
 * @typedef GooglePrivacyDlpV2beta2StorageConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2BigQueryOptions} bigQueryOptions BigQuery options specification.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2CloudStorageOptions} cloudStorageOptions Google Cloud Storage options specification.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2DatastoreOptions} datastoreOptions Google Cloud Datastore options specification.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2SummaryResult
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} code
 * @property {string} count
 * @property {string} details A place for warnings or errors to show up if a transformation didn&#39;t work as expected.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2SurrogateType
 * @memberOf! dlp(v2beta2)
 * @type object
 */
/**
 * @typedef GooglePrivacyDlpV2beta2Table
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldId[]} headers
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Row[]} rows
 */
/**
 * @typedef GooglePrivacyDlpV2beta2TableLocation
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} rowIndex The zero-based index of the row where the finding is located.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2TaggedField
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} customTag A column can be tagged with a custom tag. In this case, the user must indicate an auxiliary table that contains statistical information on the possible values of this column (below).
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldId} field Identifies the column. [required]
 * @property {dlp(v2beta2).GoogleProtobufEmpty} inferred If no semantic tag is indicated, we infer the statistical model from the distribution of values in the input data
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InfoType} infoType A column can be tagged with a InfoType to use the relevant public dataset as a statistical model of population, if available. We currently support US ZIP codes, region codes, ages and genders.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2TimePartConfig
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} partToExtract
 */
/**
 * @typedef GooglePrivacyDlpV2beta2TransformationOverview
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2TransformationSummary[]} transformationSummaries Transformations applied to the dataset.
 * @property {string} transformedBytes Total size in bytes that were transformed in some way.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2TransformationSummary
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldId} field Set if the transformation was limited to a specific FieldId.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2FieldTransformation[]} fieldTransformations The field transformation that was applied. If multiple field transformations are requested for a single field, this list will contain all of them; otherwise, only one is supplied.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InfoType} infoType Set if the transformation was limited to a specific info_type.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2RecordSuppression} recordSuppress The specific suppression option these stats apply to.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2SummaryResult[]} results
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2PrimitiveTransformation} transformation The specific transformation these stats apply to.
 * @property {string} transformedBytes Total size in bytes that were transformed in some way.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2TransientCryptoKey
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} name Name of the key. [required] This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate `TransientCryptoKey` protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated).
 */
/**
 * @typedef GooglePrivacyDlpV2beta2UnwrappedCryptoKey
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} key The AES 128/192/256 bit key. [required]
 */
/**
 * @typedef GooglePrivacyDlpV2beta2UpdateDeidentifyTemplateRequest
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2DeidentifyTemplate} deidentifyTemplate New DeidentifyTemplate value.
 * @property {string} updateMask Mask to control which fields get updated.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2UpdateInspectTemplateRequest
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2InspectTemplate} inspectTemplate New InspectTemplate value.
 * @property {string} updateMask Mask to control which fields get updated.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2Value
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {boolean} booleanValue
 * @property {dlp(v2beta2).GoogleTypeDate} dateValue
 * @property {number} floatValue
 * @property {string} integerValue
 * @property {string} stringValue
 * @property {string} timestampValue
 * @property {dlp(v2beta2).GoogleTypeTimeOfDay} timeValue
 */
/**
 * @typedef GooglePrivacyDlpV2beta2ValueFrequency
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string} count How many times the value is contained in the field.
 * @property {dlp(v2beta2).GooglePrivacyDlpV2beta2Value} value A value contained in the field in question.
 */
/**
 * @typedef GooglePrivacyDlpV2beta2WordList
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {string[]} words Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits. [required]
 */
/**
 * @typedef GoogleProtobufEmpty
 * @memberOf! dlp(v2beta2)
 * @type object
 */
/**
 * @typedef GoogleRpcStatus
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {object[]} details A list of messages that carry the error details.  There is a common set of message types for APIs to use.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 */
/**
 * @typedef GoogleTypeDate
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {integer} day Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year/month where the day is not significant.
 * @property {integer} month Month of year. Must be from 1 to 12.
 * @property {integer} year Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.
 */
/**
 * @typedef GoogleTypeTimeOfDay
 * @memberOf! dlp(v2beta2)
 * @type object
 * @property {integer} hours Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value &quot;24:00:00&quot; for scenarios like business closing time.
 * @property {integer} minutes Minutes of hour of day. Must be from 0 to 59.
 * @property {integer} nanos Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
 * @property {integer} seconds Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
 */

export = Dlp;
