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

var assert = require('assert');

var googleapis = require('../lib/googleapis.js');

describe('Compute auth client', function() {
  it('should get an initial access token', function(done) {
    var compute = new googleapis.auth.Compute();
    compute.transporter = {
      request: function(opts, opt_callback) {
        opt_callback(null, {
          'access_token': 'initial-access-token',
          'token_type': 'Bearer'
        }, {});
      }
    };
    compute.authorize(function() {
      assert.equal('initial-access-token', compute.credentials.access_token);
      assert.equal('compute-placeholder', compute.credentials.refresh_token);
      done();
    });
  });
  it('should refresh token when request fails', function(done) {
    var compute = new googleapis.auth.Compute();
    compute.credentials = {
      access_token: 'initial-access-token',
      refresh_token: 'compute-placeholder'
    };
    compute.transporter = {
      request: function(opts, opt_callback) {
        opt_callback({}, {}, { statusCode: 401 });
      }
    };
    compute.refreshToken_ = function(token, callback) {
      callback(null, {
        'access_token': 'another-access-token',
        'token_type': 'Bearer'
      });
    };
    compute.request({}, function() {
      assert.equal('another-access-token', compute.credentials.access_token);
      done();
    });
  });
});
