/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

var path = require('path');

/**
 * Return a Function that requires an API from the disk
 * @param  {String} filename Filename of API
 * @return {function}        function used to require the API from disk
 * @private
 */
function requireAPI(filename) {
  return function(options) {
    var type = typeof options;
    var version;
    if (type === 'string') {
      version = options;
      options = {};
    } else if (type === 'object') {
      version = options.version;
      delete options.version;
    } else {
      throw new Error('Argument error: Accepts only string or object');
    }
    try {
      var Endpoint = require(__dirname + '/' + filename + '/' + path.basename(version));
      var ep = new Endpoint(options);
      ep.google = this; // for drive.google.transporter
      return Object.freeze(ep); // create new & freeze
    } catch (e) {
      console.log(e);
      throw new Error('Error: Version \"' + version + '\" not found.');
    }
  }
}
/**
 * APIs to be exported
 * @type {Object}
 * @private
 */
var APIs = {
  'adexchangebuyer': requireAPI('adexchangebuyer'),
  'adexchangeseller': requireAPI('adexchangeseller'),
  'admin': requireAPI('admin'),
  'adsense': requireAPI('adsense'),
  'adsensehost': requireAPI('adsensehost'),
  'analytics': requireAPI('analytics'),
  'androidpublisher': requireAPI('androidpublisher'),
  'appsactivity': requireAPI('appsactivity'),
  'appstate': requireAPI('appstate'),
  'audit': requireAPI('audit'),
  'autoscaler': requireAPI('autoscaler'),
  'bigquery': requireAPI('bigquery'),
  'blogger': requireAPI('blogger'),
  'books': requireAPI('books'),
  'calendar': requireAPI('calendar'),
  'civicinfo': requireAPI('civicinfo'),
  'cloudmonitoring': requireAPI('cloudmonitoring'),
  'compute': requireAPI('compute'),
  'content': requireAPI('content'),
  'coordinate': requireAPI('coordinate'),
  'customsearch': requireAPI('customsearch'),
  'datastore': requireAPI('datastore'),
  'dfareporting': requireAPI('dfareporting'),
  'discovery': requireAPI('discovery'),
  'dns': requireAPI('dns'),
  'doubleclickbidmanager': requireAPI('doubleclickbidmanager'),
  'doubleclicksearch': requireAPI('doubleclicksearch'),
  'drive': requireAPI('drive'),
  'freebase': requireAPI('freebase'),
  'fusiontables': requireAPI('fusiontables'),
  'games': requireAPI('games'),
  'gamesManagement': requireAPI('gamesManagement'),
  'gan': requireAPI('gan'),
  'genomics': requireAPI('genomics'),
  'gmail': requireAPI('gmail'),
  'groupsmigration': requireAPI('groupsmigration'),
  'groupssettings': requireAPI('groupssettings'),
  'identitytoolkit': requireAPI('identitytoolkit'),
  'licensing': requireAPI('licensing'),
  'manager': requireAPI('manager'),
  'mapsengine': requireAPI('mapsengine'),
  'mirror': requireAPI('mirror'),
  'oauth2': requireAPI('oauth2'),
  'orkut': requireAPI('orkut'),
  'pagespeedonline': requireAPI('pagespeedonline'),
  'plus': requireAPI('plus'),
  'plusDomains': requireAPI('plusDomains'),
  'prediction': requireAPI('prediction'),
  'pubsub': requireAPI('pubsub'),
  'qpxExpress': requireAPI('qpxExpress'),
  'replicapool': requireAPI('replicapool'),
  'reseller': requireAPI('reseller'),
  'resourceviews': requireAPI('resourceviews'),
  'siteVerification': requireAPI('siteVerification'),
  'spectrum': requireAPI('spectrum'),
  'sqladmin': requireAPI('sqladmin'),
  'storage': requireAPI('storage'),
  'taskqueue': requireAPI('taskqueue'),
  'tasks': requireAPI('tasks'),
  'translate': requireAPI('translate'),
  'urlshortener': requireAPI('urlshortener'),
  'webfonts': requireAPI('webfonts'),
  'youtube': requireAPI('youtube'),
  'youtubeAnalytics': requireAPI('youtubeAnalytics')
};

/**
 * Exports the APIs
 * @type {Object}
 */
module.exports = APIs;

/**
 * @callback callback
 * @param {Error} err Error object if an error occurred.
 * @param {object} data Response data object.
 */