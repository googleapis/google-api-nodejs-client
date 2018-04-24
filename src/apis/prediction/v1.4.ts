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

export namespace prediction_v1_4 {
  /**
   * Prediction API
   *
   * Lets you access a cloud hosted machine learning service that makes it easy
   * to build smart apps
   *
   * @example
   * const google = require('googleapis');
   * const prediction = google.prediction('v1.4');
   *
   * @namespace prediction
   * @type {Function}
   * @version v1.4
   * @variation v1.4
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

  export interface Schema$Input {
    /**
     * Input to the model for a prediction
     */
    input: any;
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
     * The most likely class label [Categorical models only].
     */
    outputLabel: string;
    /**
     * A list of class labels with their estimated probabilities [Categorical
     * models only].
     */
    outputMulti: any[];
    /**
     * The estimated regression value [Regression models only].
     */
    outputValue: number;
    /**
     * A URL to re-request this resource.
     */
    selfLink: string;
  }
  export interface Schema$Training {
    /**
     * Data Analysis.
     */
    dataAnalysis: any;
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
     * The current status of the training job. This can be one of following:
     * RUNNING; DONE; ERROR; ERROR: TRAINING JOB NOT FOUND
     */
    trainingStatus: string;
    /**
     * A class weighting function, which allows the importance weights for class
     * labels to be specified [Categorical models only].
     */
    utility: any[];
  }
  export interface Schema$Update {
    /**
     * The input features for this instance
     */
    csvInstance: any[];
    /**
     * The class label of this instance
     */
    label: string;
    /**
     * The generic output value - could be regression value or class label
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
     * @alias prediction.hostedmodels.predict
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.hostedModelName The name of a hosted model.
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
              url: (rootUrl +
                    '/prediction/v1.4/hostedmodels/{hostedModelName}/predict')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['hostedModelName'],
        pathParams: ['hostedModelName'],
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
     * prediction.trainedmodels.delete
     * @desc Delete a trained model.
     * @alias prediction.trainedmodels.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
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
              url: (rootUrl + '/prediction/v1.4/trainedmodels/{id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
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
     * @alias prediction.trainedmodels.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Training>;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Training>,
        callback?: BodyResponseCallback<Schema$Training>): void;
    get(params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Training>,
        callback?: BodyResponseCallback<Schema$Training>):
        void|AxiosPromise<Schema$Training> {
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
              url: (rootUrl + '/prediction/v1.4/trainedmodels/{id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Training>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Training>(parameters);
      }
    }


    /**
     * prediction.trainedmodels.insert
     * @desc Begin training your model.
     * @alias prediction.trainedmodels.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Training} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Training>;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Training>,
        callback?: BodyResponseCallback<Schema$Training>): void;
    insert(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Training>,
        callback?: BodyResponseCallback<Schema$Training>):
        void|AxiosPromise<Schema$Training> {
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
              url: (rootUrl + '/prediction/v1.4/trainedmodels')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Training>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Training>(parameters);
      }
    }


    /**
     * prediction.trainedmodels.predict
     * @desc Submit model id and request a prediction
     * @alias prediction.trainedmodels.predict
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
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
              url: (rootUrl + '/prediction/v1.4/trainedmodels/{id}/predict')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
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
     * @alias prediction.trainedmodels.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {().Update} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(params?: any, options?: MethodOptions):
        AxiosPromise<Schema$Training>;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Training>,
        callback?: BodyResponseCallback<Schema$Training>): void;
    update(
        params?: any,
        options?: MethodOptions|BodyResponseCallback<Schema$Training>,
        callback?: BodyResponseCallback<Schema$Training>):
        void|AxiosPromise<Schema$Training> {
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
              url: (rootUrl + '/prediction/v1.4/trainedmodels/{id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['id'],
        pathParams: ['id'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Training>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Training>(parameters);
      }
    }
  }
}
