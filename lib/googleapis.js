/**
 * Copyright 2012 Google Inc. All Rights Reserved.
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

'use strict';

/**
 * A module for interacting with Google APIs
 * @module google
 */

/**
 * Load the apis from apis index file
 * This file holds all version information
 * @private
 */
var requireAPI = require('../apis');
var lazyApi = require('lazy-api');

/**
 * APIs to be exported
 * @type {Object}
 * @private
 */
var APIs = {
  'adexchangebuyer': 'adexchangebuyer',
  'adexchangeseller': 'adexchangeseller',
  'admin': 'admin',
  'adsense': 'adsense',
  'adsensehost': 'adsensehost',
  'analytics': 'analytics',
  'androidpublisher': 'androidpublisher',
  'appsactivity': 'appsactivity',
  'appstate': 'appstate',
  'audit': 'audit',
  'autoscaler': 'autoscaler',
  'bigquery': 'bigquery',
  'blogger': 'blogger',
  'books': 'books',
  'calendar': 'calendar',
  'civicinfo': 'civicinfo',
  'cloudmonitoring': 'cloudmonitoring',
  'compute': 'compute',
  'container': 'container',
  'content': 'content',
  'coordinate': 'coordinate',
  'customsearch': 'customsearch',
  'datastore': 'datastore',
  'dfareporting': 'dfareporting',
  'discovery': 'discovery',
  'dns': 'dns',
  'doubleclickbidmanager': 'doubleclickbidmanager',
  'doubleclicksearch': 'doubleclicksearch',
  'drive': 'drive',
  'fitness': 'fitness',
  'freebase': 'freebase',
  'fusiontables': 'fusiontables',
  'games': 'games',
  'gamesManagement': 'gamesManagement',
  'gan': 'gan',
  'genomics': 'genomics',
  'gmail': 'gmail',
  'groupsmigration': 'groupsmigration',
  'groupssettings': 'groupssettings',
  'identitytoolkit': 'identitytoolkit',
  'licensing': 'licensing',
  'manager': 'manager',
  'mapsengine': 'mapsengine',
  'mirror': 'mirror',
  'oauth2': 'oauth2',
  'pagespeedonline': 'pagespeedonline',
  'plus': 'plus',
  'plusDomains': 'plusDomains',
  'prediction': 'prediction',
  'pubsub': 'pubsub',
  'qpxExpress': 'qpxExpress',
  'replicapool': 'replicapool',
  'replicapoolupdater': 'replicapoolupdater',
  'reseller': 'reseller',
  'resourceviews': 'resourceviews',
  'siteVerification': 'siteVerification',
  'spectrum': 'spectrum',
  'sqladmin': 'sqladmin',
  'storage': 'storage',
  'tagmanager': 'tagmanager',
  'taskqueue': 'taskqueue',
  'tasks': 'tasks',
  'translate': 'translate',
  'urlshortener': 'urlshortener',
  'webfonts': 'webfonts',
  'webmasters': 'webmasters',
  'youtube': 'youtube',
  'youtubeAnalytics': 'youtubeAnalytics'
};

lazyApi.returnHandler = function (apiName, name, scope) {
    return requireAPI(apiName).bind(scope);
};

/**
 * GoogleApis constructor.
 * @param {object} options Options to be passed in
 * @constructor
 */
function GoogleApis(options) {
  this.options(options);
  this.addAPIs(APIs);
  this.auth = {
    Compute: require('./auth/computeclient.js'),
    JWT: require('./auth/jwtclient.js'),
    OAuth2: require('./auth/oauth2client.js')
  };
  this.GoogleApis = GoogleApis;
}

/**
 * Set options
 * @param  {Object} opts Options to set
 */
GoogleApis.prototype.options = function(opts) {
  this._options = opts || {};
};

/**
 * Add APIs endpoints to googleapis object
 * E.g. googleapis.drive and googleapis.datastore
 *
 * @param {Array} apis Apis to be added
 * @private
 */
GoogleApis.prototype.addAPIs = function(apis) {
  for (var apiName in apis) {
    lazyApi(this, apiName, APIs[apiName]);
  }
};

var google = new GoogleApis();

/**
 * Exports googleapis.
 */
module.exports = google;
