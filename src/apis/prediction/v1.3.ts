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

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Prediction API
 *
 * Lets you access a cloud hosted machine learning service that makes it easy to
 * build smart apps
 *
 * @example
 * const google = require('googleapis');
 * const prediction = google.prediction('v1.3');
 *
 * @namespace prediction
 * @type {Function}
 * @version v1.3
 * @variation v1.3
 * @param {object=} options Options for Prediction
 */
export class Prediction {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  hostedmodels: Resource$Hostedmodels;
  training: Resource$Training;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;

    this.hostedmodels = new Resource$Hostedmodels(this);
    this.training = new Resource$Training(this);
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
   * The most likely class [Categorical models only].
   */
  outputLabel: string;
  /**
   * A list of classes with their estimated probabilities [Categorical models
   * only].
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
   * The current status of the training job. This can be one of following:
   * RUNNING; DONE; ERROR; ERROR: TRAINING JOB NOT FOUND
   */
  trainingStatus: string;
  /**
   * A class weighting function, which allows the importance weights for classes
   * to be specified [Categorical models only].
   */
  utility: any[];
}
export interface Schema$Update {
  /**
   * The true class label of this instance
   */
  classLabel: string;
  /**
   * The input features for this instance
   */
  csvInstance: any[];
}

export class Resource$Hostedmodels {
  root: Prediction;
  constructor(root: Prediction) {
    this.root = root;
  }

  /**
   * prediction.hostedmodels.predict
   * @desc Submit input and request an output against a hosted model
   * @alias prediction.hostedmodels.predict
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.hostedModelName The name of a hosted model
   * @param {().Input} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  predict =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Output>,
       callback?: BodyResponseCallback<Schema$Output>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/prediction/v1.3/hostedmodels/{hostedModelName}/predict')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['hostedModelName'],
          pathParams: ['hostedModelName'],
          context: this.root
        };
        createAPIRequest<Schema$Output>(parameters, callback!);
      };
}

export class Resource$Training {
  root: Prediction;
  constructor(root: Prediction) {
    this.root = root;
  }

  /**
   * prediction.training.delete
   * @desc Delete a trained model
   * @alias prediction.training.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.data mybucket/mydata resource in Google Storage
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete =
      (params: any, options: MethodOptions|BodyResponseCallback<void>,
       callback?: BodyResponseCallback<void>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/prediction/v1.3/training/{data}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['data'],
          pathParams: ['data'],
          context: this.root
        };
        createAPIRequest<void>(parameters, callback!);
      };


  /**
   * prediction.training.get
   * @desc Check training status of your model
   * @alias prediction.training.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.data mybucket/mydata resource in Google Storage
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Training>,
       callback?: BodyResponseCallback<Schema$Training>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/prediction/v1.3/training/{data}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['data'],
          pathParams: ['data'],
          context: this.root
        };
        createAPIRequest<Schema$Training>(parameters, callback!);
      };


  /**
   * prediction.training.insert
   * @desc Begin training your model
   * @alias prediction.training.insert
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {().Training} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  insert =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Training>,
       callback?: BodyResponseCallback<Schema$Training>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/prediction/v1.3/training')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Training>(parameters, callback!);
      };


  /**
   * prediction.training.predict
   * @desc Submit data and request a prediction
   * @alias prediction.training.predict
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.data mybucket/mydata resource in Google Storage
   * @param {().Input} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  predict =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Output>,
       callback?: BodyResponseCallback<Schema$Output>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/prediction/v1.3/training/{data}/predict')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['data'],
          pathParams: ['data'],
          context: this.root
        };
        createAPIRequest<Schema$Output>(parameters, callback!);
      };


  /**
   * prediction.training.update
   * @desc Add new data to a trained model
   * @alias prediction.training.update
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.data mybucket/mydata resource in Google Storage
   * @param {().Update} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  update =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Training>,
       callback?: BodyResponseCallback<Schema$Training>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/prediction/v1.3/training/{data}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['data'],
          pathParams: ['data'],
          context: this.root
        };
        createAPIRequest<Schema$Training>(parameters, callback!);
      };
}
