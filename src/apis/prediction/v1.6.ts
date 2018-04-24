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

import {AxiosPromise} from 'axios';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace prediction_v1_6 {
  /**
   * Prediction API
   *
   * Lets you access a cloud hosted machine learning service that makes it easy
   * to build smart apps
   *
   * @example
   * const google = require('googleapis');
   * const prediction = google.prediction('v1.6');
   *
   * @namespace prediction
   * @type {Function}
   * @version v1.6
   * @variation v1.6
   * @param {object=} options Options for Prediction
   */
  export class Prediction {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    hostedmodels: Resource$Hostedmodels;
    trainedmodels: Resource$Trainedmodels;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.hostedmodels = new Resource$Hostedmodels(this);
      this.trainedmodels = new Resource$Trainedmodels(this);
    }

    getRoot() {
      return this.root;
    }
  }

  export interface Schema$Analyze {
    /**
     * Description of the data the model was trained on.
     */
    dataDescription: any;
    /**
     * List of errors with the data.
     */
    errors: any[];
    /**
     * The unique name for the predictive model.
     */
    id: string;
    /**
     * What kind of resource this is.
     */
    kind: string;
    /**
     * Description of the model.
     */
    modelDescription: any;
    /**
     * A URL to re-request this resource.
     */
    selfLink: string;
  }
  export interface Schema$Input {
    /**
     * Input to the model for a prediction.
     */
    input: any;
  }
  export interface Schema$Insert {
    /**
     * The unique name for the predictive model.
     */
    id: string;
    /**
     * Type of predictive model (classification or regression).
     */
    modelType: string;
    /**
     * The Id of the model to be copied over.
     */
    sourceModel: string;
    /**
     * Google storage location of the training data file.
     */
    storageDataLocation: string;
    /**
     * Google storage location of the preprocessing pmml file.
     */
    storagePMMLLocation: string;
    /**
     * Google storage location of the pmml model file.
     */
    storagePMMLModelLocation: string;
    /**
     * Instances to train model on.
     */
    trainingInstances: any[];
    /**
     * A class weighting function, which allows the importance weights for class
     * labels to be specified (Categorical models only).
     */
    utility: any[];
  }
  export interface Schema$Insert2 {
    /**
     * Insert time of the model (as a RFC 3339 timestamp).
     */
    created: string;
    /**
     * The unique name for the predictive model.
     */
    id: string;
    /**
     * What kind of resource this is.
     */
    kind: string;
    /**
     * Model metadata.
     */
    modelInfo: any;
    /**
     * Type of predictive model (CLASSIFICATION or REGRESSION).
     */
    modelType: string;
    /**
     * A URL to re-request this resource.
     */
    selfLink: string;
    /**
     * Google storage location of the training data file.
     */
    storageDataLocation: string;
    /**
     * Google storage location of the preprocessing pmml file.
     */
    storagePMMLLocation: string;
    /**
     * Google storage location of the pmml model file.
     */
    storagePMMLModelLocation: string;
    /**
     * Training completion time (as a RFC 3339 timestamp).
     */
    trainingComplete: string;
    /**
     * The current status of the training job. This can be one of following:
     * RUNNING; DONE; ERROR; ERROR: TRAINING JOB NOT FOUND
     */
    trainingStatus: string;
  }
  export interface Schema$List {
    /**
     * List of models.
     */
    items: Schema$Insert2[];
    /**
     * What kind of resource this is.
     */
    kind: string;
    /**
     * Pagination token to fetch the next page, if one exists.
     */
    nextPageToken: string;
    /**
     * A URL to re-request this resource.
     */
    selfLink: string;
  }
  export interface Schema$Output {
    /**
     * The unique name for the predictive model.
     */
    id: string;
    /**
     * What kind of resource this is.
     */
    kind: string;
    /**
     * The most likely class label (Categorical models only).
     */
    outputLabel: string;
    /**
     * A list of class labels with their estimated probabilities (Categorical
     * models only).
     */
    outputMulti: any[];
    /**
     * The estimated regression value (Regression models only).
     */
    outputValue: string;
    /**
     * A URL to re-request this resource.
     */
    selfLink: string;
  }
  export interface Schema$Update {
    /**
     * The input features for this instance.
     */
    csvInstance: any[];
    /**
     * The generic output value - could be regression or class label.
     */
    output: string;
  }

  export class Resource$Hostedmodels {
    root: Prediction;
    constructor(root: Prediction) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * prediction.hostedmodels.predict
     * @desc Submit input and request an output against a hosted model.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Prediction API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/prediction
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var prediction = google.prediction('v1.6');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project associated with the model.
     *     project: 'my-project',  // TODO: Update placeholder value.
     *
     *     // The name of a hosted model.
     *     hostedModelName: 'my-hosted-model-name',  // TODO: Update placeholder
     * value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   prediction.hostedmodels.predict(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias prediction.hostedmodels.predict
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.hostedModelName The name of a hosted model.
     * @param {string} params.project The project associated with the model.
     * @param {().Input} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    predict(params?: any, options?: MethodOptions): AxiosPromise<Schema$Output>;
    predict(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Output>,
        callback?: BodyResponseCallback<Schema$Output>): void;
    predict(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Output>,
        callback?: BodyResponseCallback<Schema$Output>):
        void|AxiosPromise<Schema$Output> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/prediction/v1.6/projects/{project}/hostedmodels/{hostedModelName}/predict')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'hostedModelName'],
        pathParams: ['hostedModelName', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Output>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Output>(parameters);
      }
    }
  }

  export class Resource$Trainedmodels {
    root: Prediction;
    constructor(root: Prediction) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * prediction.trainedmodels.analyze
     * @desc Get analysis of the model and the data the model was trained on.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Prediction API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/prediction
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var prediction = google.prediction('v1.6');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project associated with the model.
     *     project: 'my-project',  // TODO: Update placeholder value.
     *
     *     // The unique name for the predictive model.
     *     id: 'my-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   prediction.trainedmodels.analyze(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias prediction.trainedmodels.analyze
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {string} params.project The project associated with the model.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    analyze(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Analyze>;
    analyze(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Analyze>,
        callback?: BodyResponseCallback<Schema$Analyze>): void;
    analyze(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Analyze>,
        callback?: BodyResponseCallback<Schema$Analyze>):
        void|AxiosPromise<Schema$Analyze> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/prediction/v1.6/projects/{project}/trainedmodels/{id}/analyze')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'id'],
        pathParams: ['id', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Analyze>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Analyze>(parameters);
      }
    }


    /**
     * prediction.trainedmodels.delete
     * @desc Delete a trained model.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Prediction API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/prediction
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var prediction = google.prediction('v1.6');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project associated with the model.
     *     project: 'my-project',  // TODO: Update placeholder value.
     *
     *     // The unique name for the predictive model.
     *     id: 'my-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   prediction.trainedmodels.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias prediction.trainedmodels.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {string} params.project The project associated with the model.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(params?: any, options?: MethodOptions): AxiosPromise<void>;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void;
    delete(
        params?: any, options?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/prediction/v1.6/projects/{project}/trainedmodels/{id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['project', 'id'],
        pathParams: ['id', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * prediction.trainedmodels.get
     * @desc Check training status of your model.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Prediction API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/prediction
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var prediction = google.prediction('v1.6');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project associated with the model.
     *     project: 'my-project',  // TODO: Update placeholder value.
     *
     *     // The unique name for the predictive model.
     *     id: 'my-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   prediction.trainedmodels.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias prediction.trainedmodels.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {string} params.project The project associated with the model.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Insert2>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Insert2>,
        callback?: BodyResponseCallback<Schema$Insert2>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Insert2>,
        callback?: BodyResponseCallback<Schema$Insert2>):
        void|AxiosPromise<Schema$Insert2> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/prediction/v1.6/projects/{project}/trainedmodels/{id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'id'],
        pathParams: ['id', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Insert2>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Insert2>(parameters);
      }
    }


    /**
     * prediction.trainedmodels.insert
     * @desc Train a Prediction API model.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Prediction API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/prediction
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var prediction = google.prediction('v1.6');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project associated with the model.
     *     project: 'my-project',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   prediction.trainedmodels.insert(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias prediction.trainedmodels.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project associated with the model.
     * @param {().Insert} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(params?: any, options?: MethodOptions): AxiosPromise<Schema$Insert2>;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Insert2>,
        callback?: BodyResponseCallback<Schema$Insert2>): void;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Insert2>,
        callback?: BodyResponseCallback<Schema$Insert2>):
        void|AxiosPromise<Schema$Insert2> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/prediction/v1.6/projects/{project}/trainedmodels')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Insert2>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Insert2>(parameters);
      }
    }


    /**
     * prediction.trainedmodels.list
     * @desc List available models.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Prediction API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/prediction
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var prediction = google.prediction('v1.6');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project associated with the model.
     *     project: 'my-project',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var itemsPage = response['items'];
     *     if (!itemsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < itemsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `itemsPage`:
     *       console.log(JSON.stringify(itemsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       prediction.trainedmodels.list(request, handlePage);
     *     }
     *   };
     *
     *   prediction.trainedmodels.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias prediction.trainedmodels.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Pagination token.
     * @param {string} params.project The project associated with the model.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: any, options?: MethodOptions): AxiosPromise<Schema$List>;
    list(
        params?: any, options?: MethodOptions|BodyResponseCallback<Schema$List>,
        callback?: BodyResponseCallback<Schema$List>): void;
    list(
        params?: any, options?: MethodOptions|BodyResponseCallback<Schema$List>,
        callback?: BodyResponseCallback<Schema$List>):
        void|AxiosPromise<Schema$List> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/prediction/v1.6/projects/{project}/trainedmodels/list')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$List>(parameters, callback);
      } else {
        return createAPIRequest<Schema$List>(parameters);
      }
    }


    /**
     * prediction.trainedmodels.predict
     * @desc Submit model id and request a prediction.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Prediction API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/prediction
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var prediction = google.prediction('v1.6');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project associated with the model.
     *     project: 'my-project',  // TODO: Update placeholder value.
     *
     *     // The unique name for the predictive model.
     *     id: 'my-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   prediction.trainedmodels.predict(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias prediction.trainedmodels.predict
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {string} params.project The project associated with the model.
     * @param {().Input} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    predict(params?: any, options?: MethodOptions): AxiosPromise<Schema$Output>;
    predict(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Output>,
        callback?: BodyResponseCallback<Schema$Output>): void;
    predict(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Output>,
        callback?: BodyResponseCallback<Schema$Output>):
        void|AxiosPromise<Schema$Output> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/prediction/v1.6/projects/{project}/trainedmodels/{id}/predict')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'id'],
        pathParams: ['id', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Output>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Output>(parameters);
      }
    }


    /**
     * prediction.trainedmodels.update
     * @desc Add new data to a trained model.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Prediction API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/prediction
     * // 2. This sample uses Application Default Credentials for
     * authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //
     * https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var prediction = google.prediction('v1.6');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project associated with the model.
     *     project: 'my-project',  // TODO: Update placeholder value.
     *
     *     // The unique name for the predictive model.
     *     id: 'my-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing
     * properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   prediction.trainedmodels.update(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient) {
     *     if (err) {
     *       console.error('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired &&
     * authClient.createScopedRequired()) { var scopes =
     * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
     * authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     * @alias prediction.trainedmodels.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {string} params.project The project associated with the model.
     * @param {().Update} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions): AxiosPromise<Schema$Insert2>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Insert2>,
        callback?: BodyResponseCallback<Schema$Insert2>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Insert2>,
        callback?: BodyResponseCallback<Schema$Insert2>):
        void|AxiosPromise<Schema$Insert2> {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      if (typeof params === 'function') {
        callback = params;
        params = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/prediction/v1.6/projects/{project}/trainedmodels/{id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['project', 'id'],
        pathParams: ['id', 'project'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Insert2>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Insert2>(parameters);
      }
    }
  }
}
