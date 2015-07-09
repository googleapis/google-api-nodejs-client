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
var google, drive, authClient, OAuth2, gmail;

describe('Query params', function() {

  function noop() {}

  beforeEach(function() {
    google = new googleapis.GoogleApis();
    OAuth2 = google.auth.OAuth2;
    authClient = new OAuth2('CLIENT_ID', 'CLIENT_SECRET', 'REDIRECT_URL');
    authClient.setCredentials({ access_token: 'abc123' });
    drive = google.drive('v2');
    gmail = google.gmail('v1');
  });

  it('should not append ? with no query parameters', function() {
    var uri = drive.files.get({ fileId: 'ID' }, noop).uri;
    assert.equal(-1, uri.href.indexOf('?'));
  });

  it('should be null if no object passed', function() {
    var req = drive.files.list(noop);
    assert.equal(req.uri.query, null);
  });

  it('should be null if params passed are in path', function() {
    var req = drive.files.get({ fileId: '123' }, noop);
    assert.equal(req.uri.query, null);
  });

  it('should be set if params passed are optional query params', function() {
    var req = drive.files.get({ fileId: '123', updateViewedDate: true }, noop);
    assert.equal(req.uri.query, 'updateViewedDate=true');
  });

  it('should be set if params passed are unknown params', function() {
    var req = drive.files.get({ fileId: '123', madeThisUp: 'hello' }, noop);
    assert.equal(req.uri.query, 'madeThisUp=hello');
  });

  it('should be set if params passed are aliased names', function() {
    var req = drive.files.get({ fileId: '123', resource_: 'hello' }, noop);
    assert.equal(req.uri.query, 'resource=hello');
  });
  
  it('should chain together with & in order', function() {
    var req = drive.files.get({
      fileId: '123',
      madeThisUp: 'hello',
      thisToo: 'world'
    }, noop);
    assert.equal(req.uri.query, 'madeThisUp=hello&thisToo=world');
  });

  it('should not include auth if auth is an OAuth2Client object', function() {
    var req = drive.files.get({
      fileId: '123',
      auth: authClient
    }, noop);
    assert.equal(req.uri.query, null);
  });

  it('should handle multi-value query params properly', function() {
    var req = gmail.users.messages.get({
      userId: 'me',
      id: 'abc123',
      metadataHeaders: ['To', 'Date']
    }, noop);
    assert.equal(req.uri.query, 'metadataHeaders=To&metadataHeaders=Date');
  });
});
