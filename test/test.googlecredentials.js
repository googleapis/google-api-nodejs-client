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

function fromJSONShouldThrow(json) {
  var thrown = false;
  try {
    googleapis.auth.googleCredentials.fromJSON(json);
  }
  catch (err) {
    thrown = true;
  }

  assert.equal(true, thrown);
}

describe('googleCredentials', function() {
  describe('.fromJson', function () {

    it('should throw on null json', function () {
      fromJSONShouldThrow(null);
    });

    it('should throw on empty json', function () {
      var json = {
      };

      fromJSONShouldThrow(json);
    });

    it('should throw on missing client_email', function () {
      var json = createJSON();
      delete json.client_email;

      fromJSONShouldThrow(json);
    });

    it('should throw on missing private_key', function () {
      var json = createJSON();
      delete json.private_key;

      fromJSONShouldThrow(json);
    });

    it('should create JWT with client_email', function () {
      var json = createJSON();
      var auth = googleapis.auth.googleCredentials.fromJSON(json);

      assert.equal(json.client_email, auth.email);
    });

    it('should create JWT with private_key', function () {
      var json = createJSON();
      var auth = googleapis.auth.googleCredentials.fromJSON(json);

      assert.equal(json.private_key, auth.key);
    });

    it('should create JWT with createScoped method', function () {
      var json = createJSON();
      var auth = googleapis.auth.googleCredentials.fromJSON(json);

      assert.equal(true, auth.hasOwnProperty("createScoped"));
      assert.equal('function', typeof auth.createScoped);
    });

    it('should create JWT with null scopes', function () {
      var json = createJSON();
      var auth = googleapis.auth.googleCredentials.fromJSON(json);

      assert.equal(true, auth.hasOwnProperty("scopes"));
      assert.equal(null, auth.scopes);
    });

    it('should create JWT with null subject', function () {
      var json = createJSON();
      var auth = googleapis.auth.googleCredentials.fromJSON(json);

      assert.equal(true, auth.hasOwnProperty("subject"));
      assert.equal(null, auth.subject);
    });

    it('should create JWT with null keyFile', function () {
      var json = createJSON();
      var auth = googleapis.auth.googleCredentials.fromJSON(json);

      assert.equal(true, auth.hasOwnProperty("keyFile"));
      assert.equal(null, auth.keyFile);
    });
  });
});