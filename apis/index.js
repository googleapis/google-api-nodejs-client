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
var util = require('util');
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
        var endpointPath = path.join(__dirname, filename, path.basename(version));
        var Endpoint = require(endpointPath);
        var ep = new Endpoint(options);
        ep.google = this; // for drive.google.transporter
        return Object.freeze(ep); // create new & freeze
      } catch (e) {
        throw new Error(util.format('Unable to load endpoint %s("%s"): %s',
          filename, version, e.message));
      }
    };
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
  'container': requireAPI('container'),
  'content': requireAPI('content'),
  'coordinate': requireAPI('coordinate'),
  'customsearch': requireAPI('customsearch'),
  'dataflow': requireAPI('dataflow'),
  'datastore': requireAPI('datastore'),
  'deploymentmanager': requireAPI('deploymentmanager'),
  'dfareporting': requireAPI('dfareporting'),
  'discovery': requireAPI('discovery'),
  'dns': requireAPI('dns'),
  'doubleclickbidmanager': requireAPI('doubleclickbidmanager'),
  'doubleclicksearch': requireAPI('doubleclicksearch'),
  'drive': requireAPI('drive'),
  'fitness': requireAPI('fitness'),
  'freebase': requireAPI('freebase'),
  'fusiontables': requireAPI('fusiontables'),
  'games': requireAPI('games'),
  'gamesConfiguration': requireAPI('gamesConfiguration'),
  'gamesManagement': requireAPI('gamesManagement'),
  'gan': requireAPI('gan'),
  'genomics': requireAPI('genomics'),
  'gmail': requireAPI('gmail'),
  'groupsmigration': requireAPI('groupsmigration'),
  'groupssettings': requireAPI('groupssettings'),
  'cloudlatencytest': requireAPI('cloudlatencytest'),
  'pubsub': requireAPI('pubsub'),
  'identitytoolkit': requireAPI('identitytoolkit'),
  'licensing': requireAPI('licensing'),
  'manager': requireAPI('manager'),
  'mapsengine': requireAPI('mapsengine'),
  'mirror': requireAPI('mirror'),
  'oauth2': requireAPI('oauth2'),
  'pagespeedonline': requireAPI('pagespeedonline'),
  'plus': requireAPI('plus'),
  'plusDomains': requireAPI('plusDomains'),
  'prediction': requireAPI('prediction'),
  'qpxExpress': requireAPI('qpxExpress'),
  'replicapool': requireAPI('replicapool'),
  'replicapoolupdater': requireAPI('replicapoolupdater'),
  'reseller': requireAPI('reseller'),
  'resourceviews': requireAPI('resourceviews'),
  'siteVerification': requireAPI('siteVerification'),
  'spectrum': requireAPI('spectrum'),
  'sqladmin': requireAPI('sqladmin'),
  'storage': requireAPI('storage'),
  'tagmanager': requireAPI('tagmanager'),
  'taskqueue': requireAPI('taskqueue'),
  'tasks': requireAPI('tasks'),
  'translate': requireAPI('translate'),
  'urlshortener': requireAPI('urlshortener'),
  'webfonts': requireAPI('webfonts'),
  'webmasters': requireAPI('webmasters'),
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