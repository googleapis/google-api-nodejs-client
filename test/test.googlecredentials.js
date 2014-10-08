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
var nock = require('nock');

nock.disableNetConnect();

function createJSON() {
  return {
    "private_key_id": "key123",
    "private_key": "privatekey",
    "client_email": "hello@youarecool.com",
    "client_id": "client123",
    "type": "service_account"
  };
}

function fromJSONShouldError(json) {
  googleapis.credentials.fromJSON(json, function(err, result) {
    assert.equal(true, err instanceof Error);
  });
}

describe('googleCredentials', function() {
  describe('.fromJson', function () {

    it('should error on null json', function () {
      fromJSONShouldError(null);
    });

    it('should error on empty json', function () {
      fromJSONShouldError({});
    });

    it('should error on missing client_email', function () {
      var json = createJSON();
      delete json.client_email;

      fromJSONShouldError(json);
    });

    it('should error on missing private_key', function () {
      var json = createJSON();
      delete json.private_key;

      fromJSONShouldError(json);
    });

    it('should create JWT with client_email', function () {
      var json = createJSON();
      var auth = googleapis.credentials.fromJSON(json, function(err, result) {
        assert.equal(true, err == null);
        assert.equal(json.client_email, result.email);
      });
    });

    it('should create JWT with private_key', function () {
      var json = createJSON();
      var auth = googleapis.credentials.fromJSON(json, function(err, result) {
        assert.equal(true, err == null);
        assert.equal(json.private_key, result.key);
      });
    });

    it('should create JWT with null scopes', function () {
      var json = createJSON();
      var auth = googleapis.credentials.fromJSON(json, function(err, result) {
        assert.equal(true, err == null);
        assert.equal(true, result.scopes == null);
      });
    });

    it('should create JWT with null subject', function () {
      var json = createJSON();
      var auth = googleapis.credentials.fromJSON(json, function(err, result) {
        assert.equal(true, err == null);
        assert.equal(true, result.subject == null);
      });
    });

    it('should create JWT with null keyFile', function () {
      var json = createJSON();
      var auth = googleapis.credentials.fromJSON(json, function(err, result) {
        assert.equal(true, err == null);
        assert.equal(true, result.keyFile == null);
      });
    });
  });
});