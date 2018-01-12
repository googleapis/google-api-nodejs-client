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

const google = require('googleapis');
const OAuth2Client = google.auth.OAuth2;
const http = require('http');
const url = require('url');
const querystring = require('querystring');
const opn = require('opn');
const nconf = require('nconf');
const path = require('path');

nconf.argv().env()
   .file(path.join(__dirname, 'oauth2.keys.json'));
const keys = nconf.get('web');

class SampleClient {
  constructor (options) {
    this._options = options || { scopes: [] };

    // create an oAuth client to authorize the API call
    this.oAuth2Client = new OAuth2Client(
      keys.client_id,
      keys.client_secret,
      keys.redirect_uris[0]
    );
  }

  // Open an http server to accept the oauth callback. In this
  // simple example, the only request to our webserver is to
  // /callback?code=<code>
  authenticate (scopes, callback) {
    // grab the url that will be used for authorization
    this.authorizeUrl = this.oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes.join(' ')
    });
    const server = http.createServer((req, res) => {
      if (req.url.indexOf('/oauth2callback') > -1) {
        const qs = querystring.parse(url.parse(req.url).query);
        this.oAuth2Client.getToken(qs.code, (err, tokens) => {
          if (err) {
            console.error('Error getting oAuth tokens: ' + err);
            return callback(err);
          }
          this.oAuth2Client.credentials = tokens;
          res.end('Authentication successful! Please return to the console.');
          callback(null, this.oAuth2Client);
          server.close();
        });
      }
    }).listen(3000, () => {
      // open the browser to the authorize url to start the workflow
      opn(this.authorizeUrl);
    });
  }
}

module.exports = new SampleClient();
