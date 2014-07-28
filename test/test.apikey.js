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

var assert = require('assert');
var googleapis = require('../lib/googleapis.js');
var google, drive, authClient, OAuth2;

describe('API key', function() {

  function noop() {}

  beforeEach(function() {
    google = new googleapis.GoogleApis();
    OAuth2 = google.auth.OAuth2;
    authClient = new OAuth2('CLIENT_ID', 'CLIENT_SECRET', 'REDIRECT_URL');
    authClient.setCredentials({ access_token: 'abc123' });
    drive = google.drive('v2');
  });

  it('should include auth APIKEY as key=<APIKEY>', function() {
    var req = drive.files.get({
      fileId: '123',
      auth: 'APIKEY'
    }, noop);
    assert.equal(req.uri.query, 'key=APIKEY');
  });

  it('should properly escape params E.g. API KEY to API%20KEY', function() {
    var req = drive.files.get({
      fileId: '123',
      auth: 'API KEY'
    }, noop);
    assert.equal(req.uri.query, 'key=API%20KEY');
  });

  it('should use key param over auth apikey param if both provided and', function() {
    var req = drive.files.get({
      fileId: '123',
      auth: 'API KEY',
      key: 'abc123'
    }, noop);
    assert.equal(req.uri.query, 'key=abc123');
  });

  it('should set API key parameter if it is presented', function() {
    var req = google.urlshortener('v1').url.list({ auth: 'YOUR API KEY' }, noop);
    assert.equal(req.uri.href.indexOf('key=YOUR%20API%20KEY') > 0, true);
  });
});
