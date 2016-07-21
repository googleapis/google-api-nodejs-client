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
 * Prediction API
 *
 * Lets you access a cloud hosted machine learning service that makes it easy to build smart apps
 *
 * @example
 * var google = require('googleapis');
 * var prediction = google.prediction('v1.6');
 *
 * @namespace prediction
 * @type {Function}
 * @version v1.6
 * @variation v1.6
 * @param {object=} options Options for Prediction
 */
function Prediction(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.hostedmodels = {

    /**
     * prediction.hostedmodels.predict
     *
     * @desc Submit input and request an output against a hosted model.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Prediction API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/prediction
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var prediction = google.prediction('v1.6');
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
     *     // TODO: Change placeholders below to appropriate parameter values for the 'predict' method:
     *
     *     // The project associated with the model.
     *     project: "",
     *     // The name of a hosted model.
     *     hostedModelName: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   prediction.hostedmodels.predict(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias prediction.hostedmodels.predict
     * @memberOf! prediction(v1.6)
     *
     * @param {object} params Parameters for request
     * @param {string} params.hostedModelName The name of a hosted model.
     * @param {string} params.project The project associated with the model.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    predict: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.6/projects/{project}/hostedmodels/{hostedModelName}/predict',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'hostedModelName'],
        pathParams: ['hostedModelName', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.trainedmodels = {

    /**
     * prediction.trainedmodels.analyze
     *
     * @desc Get analysis of the model and the data the model was trained on.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Prediction API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/prediction
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var prediction = google.prediction('v1.6');
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
     *     // TODO: Change placeholders below to appropriate parameter values for the 'analyze' method:
     *
     *     // The project associated with the model.
     *     project: "",
     *     // The unique name for the predictive model.
     *     id: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   prediction.trainedmodels.analyze(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias prediction.trainedmodels.analyze
     * @memberOf! prediction(v1.6)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {string} params.project The project associated with the model.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    analyze: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.6/projects/{project}/trainedmodels/{id}/analyze',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'id'],
        pathParams: ['id', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * prediction.trainedmodels.delete
     *
     * @desc Delete a trained model.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Prediction API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/prediction
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var prediction = google.prediction('v1.6');
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
     *     // The project associated with the model.
     *     project: "",
     *     // The unique name for the predictive model.
     *     id: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   prediction.trainedmodels.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias prediction.trainedmodels.delete
     * @memberOf! prediction(v1.6)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {string} params.project The project associated with the model.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.6/projects/{project}/trainedmodels/{id}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['project', 'id'],
        pathParams: ['id', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * prediction.trainedmodels.get
     *
     * @desc Check training status of your model.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Prediction API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/prediction
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var prediction = google.prediction('v1.6');
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
     *     // The project associated with the model.
     *     project: "",
     *     // The unique name for the predictive model.
     *     id: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   prediction.trainedmodels.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias prediction.trainedmodels.get
     * @memberOf! prediction(v1.6)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {string} params.project The project associated with the model.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.6/projects/{project}/trainedmodels/{id}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'id'],
        pathParams: ['id', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * prediction.trainedmodels.insert
     *
     * @desc Train a Prediction API model.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Prediction API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/prediction
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var prediction = google.prediction('v1.6');
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
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // The project associated with the model.
     *     project: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   prediction.trainedmodels.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias prediction.trainedmodels.insert
     * @memberOf! prediction(v1.6)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project associated with the model.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.6/projects/{project}/trainedmodels',
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
     * prediction.trainedmodels.list
     *
     * @desc List available models.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Prediction API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/prediction
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var prediction = google.prediction('v1.6');
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
     *     // The project associated with the model.
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
     *         prediction.trainedmodels.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   prediction.trainedmodels.list(request, recur);
     * });
     *
     * @alias prediction.trainedmodels.list
     * @memberOf! prediction(v1.6)
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of results to return.
     * @param {string=} params.pageToken Pagination token.
     * @param {string} params.project The project associated with the model.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.6/projects/{project}/trainedmodels/list',
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
     * prediction.trainedmodels.predict
     *
     * @desc Submit model id and request a prediction.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Prediction API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/prediction
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var prediction = google.prediction('v1.6');
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
     *     // TODO: Change placeholders below to appropriate parameter values for the 'predict' method:
     *
     *     // The project associated with the model.
     *     project: "",
     *     // The unique name for the predictive model.
     *     id: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   prediction.trainedmodels.predict(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias prediction.trainedmodels.predict
     * @memberOf! prediction(v1.6)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {string} params.project The project associated with the model.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    predict: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.6/projects/{project}/trainedmodels/{id}/predict',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'id'],
        pathParams: ['id', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * prediction.trainedmodels.update
     *
     * @desc Add new data to a trained model.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Prediction API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/prediction
     * // 2. This sample uses Application Default Credentials for Auth.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var prediction = google.prediction('v1.6');
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
     *     // TODO: Change placeholders below to appropriate parameter values for the 'update' method:
     *
     *     // The project associated with the model.
     *     project: "",
     *     // The unique name for the predictive model.
     *     id: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   prediction.trainedmodels.update(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias prediction.trainedmodels.update
     * @memberOf! prediction(v1.6)
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The unique name for the predictive model.
     * @param {string} params.project The project associated with the model.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/prediction/v1.6/projects/{project}/trainedmodels/{id}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['project', 'id'],
        pathParams: ['id', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Prediction;
