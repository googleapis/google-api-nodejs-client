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

describe('JWT auth client', function() {
  it('should get an initial access token', function(done) {
    var jwt = new googleapis.auth.JWT(
        'foo@serviceaccount.com',
        '/path/to/key.pem',
        null,
        ['http://bar', 'http://foo']);
    jwt.GAPI = function(opts, callback) {
      assert.equal('foo@serviceaccount.com', opts.iss);
      assert.equal('/path/to/key.pem', opts.keyFile);
      assert.equal('http://bar http://foo', opts.scope);
      setTimeout(function() {
        callback(null);
      }, 0);
      return {
        getToken: function(opt_callback) {
          opt_callback(null, 'initial-access-token');
        }
      }
    };
    jwt.authorize(function() {
      assert.equal('initial-access-token', jwt.credentials.access_token);
      assert.equal('jwt-placeholder', jwt.credentials.refresh_token);
      done();
    });
  });
  it('should refresh token when request fails', function(done) {
    var jwt = new googleapis.auth.JWT(
        'foo@serviceaccount.com',
        '/path/to/key.pem',
        ['http://bar', 'http://foo']);
    jwt.credentials = {
      access_token: 'initial-access-token',
      refresh_token: 'jwt-placeholder'
    };
    jwt.transporter = {
      request: function(opts, opt_callback) {
        opt_callback(null, null, {statusCode: 401});
      }
    };
    jwt.refreshToken_ = function(token, callback) {
      callback(null, {
        'access_token': 'another-access-token',
        'token_type': 'Bearer'
      });
    };
    jwt.request({}, function() {
      assert.equal('another-access-token', jwt.credentials.access_token);
      done();
    });
  });
});
