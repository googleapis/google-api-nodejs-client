// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/**
 * This is used by several samples to easily provide
 * an oauth2 workflow.
 */

var google = require('../lib/googleapis');
var OAuth2Client = google.auth.OAuth2;
var http = require('http');
var spawn = require('child_process').spawn;
var url = require('url');
var querystring = require('querystring');
var secrets = require('./secrets.json');

function SampleClient (options) {
  var self = this;
  self.isAuthenticated = false;
  this._options = options || { scopes: [] };

  // create an oAuth client to authorize the API call
  this.oAuth2Client = new OAuth2Client(
    secrets.web.client_id,
    secrets.web.client_secret,
    secrets.web.redirect_uris[0]
  );

  // Open an http server to accept the oauth callback. In this
  // simple example, the only request to our webserver is to
  // /callback?code=<code>
  this._authenticate = function (scopes, callback) {
    // grab the url that will be used for authorization
    self.authorizeUrl = self.oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes.join(' ')
    });
    var server = http.createServer(function (request, response) {
      var qs = querystring.parse(url.parse(request.url).query);
      self.oAuth2Client.getToken(qs.code, function (err, tokens) {
        if (err) {
          console.error('Error getting oAuth tokens: ' + err);
        }
        self.oAuth2Client.setCredentials(tokens);
        self.isAuthenticated = true;
        response.end('Authentication successful! Please return to the console.');
        callback.apply();
        server.close();
      });
    }).listen(8080, function () {
      // open the browser to the authorize url to start the workflow
      spawn('open', [self.authorizeUrl]);
    });
  };

  self.execute = function (scopes, callback) {
    self._callback = callback;
    if (self.isAuthenticated) {
      callback.apply();
    } else {
      self._authenticate(scopes, callback);
    }
  };

  return self;
}

module.exports = new SampleClient();
