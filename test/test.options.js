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

describe('Options', function() {

  beforeEach(function() {
    google = new googleapis.GoogleApis();
    drive = google.drive('v2');
  });

  it('should be a function', function() {
    assert.equal(typeof google.options, 'function');
  });

  it('should expose _options', function() {
    google.options({ hello: 'world' });
    assert.equal(JSON.stringify(google._options), JSON.stringify({ hello: 'world' }));
  });

  it('should expose _options values', function() {
    google.options({ hello: 'world' });
    assert.equal(google._options.hello, 'world');
  });

  it('should promote endpoint options over global options', function() {
    google.options({ hello: 'world' });
    var drive = google.drive({ version: 'v2', hello: 'changed' });
    var req = drive.files.get({ fileId: '123' });
    assert.equal(req.hello, 'changed');
  });

  it('should promote auth apikey options on request basis', function() {
    google.options({ auth: 'apikey1' });
    var drive = google.drive({ version: 'v2', auth: 'apikey2' });
    var req = drive.files.get({ auth: 'apikey3', fileId: 'woot' });
    assert.equal(req.url.query, 'key=apikey3');
  });

  it('should apply google options to request object like proxy', function() {
    google.options({ proxy: 'http://proxy.example.com' });
    var drive = google.drive({ version: 'v2', auth: 'apikey2' });
    var req = drive.files.get({ auth: 'apikey3', fileId: 'woot' });
    assert.equal(req.proxy.host, 'proxy.example.com');
    assert.equal(req.proxy.protocol, 'http:');
  });

  it('should apply endpoint options to request object like proxy', function() {
    var drive = google.drive({ version: 'v2', auth: 'apikey2', proxy: 'http://proxy.example.com' });
    var req = drive.files.get({ auth: 'apikey3', fileId: 'woot' });
    assert.equal(req.proxy.host, 'proxy.example.com');
    assert.equal(req.proxy.protocol, 'http:');
  });
});
