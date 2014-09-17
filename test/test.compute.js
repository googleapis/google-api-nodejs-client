/**
 * Copyright 2013 Google Inc. All Rights Reserved.
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
var nock = require('nock');

nock.disableNetConnect();

describe('Compute auth client', function() {

  it('should get an access token for the first request', function(done) {
    var scope = nock('http://metadata')
        .get('/computeMetadata/v1beta1/instance/service-accounts/default/token')
        .reply(200, { access_token: 'abc123', expires_in: 10000 });
    var compute = new googleapis.auth.Compute();
    compute.request({}, function() {
      assert.equal(compute.credentials.access_token, 'abc123');
      scope.done();
      done();
    });
  });

  it('should refresh if access token has expired', function(done) {
    var scope = nock('http://metadata')
        .get('/computeMetadata/v1beta1/instance/service-accounts/default/token')
        .reply(200, { access_token: 'abc123', expires_in: 10000 });
    var compute = new googleapis.auth.Compute();
    compute.credentials.access_token = 'initial-access-token';
    compute.credentials.expiry_date = (new Date()).getTime() - 10000;
    compute.request({}, function() {
      assert.equal(compute.credentials.access_token, 'abc123');
      scope.done();
      done();
    });
  });

  it('should not refresh if access token has not expired', function(done) {
    var scope = nock('http://metadata')
        .get('/computeMetadata/v1beta1/instance/service-accounts/default/token')
        .reply(200, { access_token: 'abc123', expires_in: 10000 });
    var compute = new googleapis.auth.Compute();
    compute.credentials.access_token = 'initial-access-token';
    compute.credentials.expiry_date = (new Date()).getTime() + 10000;
    compute.request({}, function() {
      assert.equal(compute.credentials.access_token, 'initial-access-token');
      assert.equal(false, scope.isDone());
      nock.cleanAll();
      done();
    });
  });
});
