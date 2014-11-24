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
var googleAuth = require('../lib/auth/googleauth.js');
var nock = require('nock');
var fs = require('fs');

nock.disableNetConnect();

// Creates a standard JSON auth object for testing.
function createJSON() {
  return {
    'private_key_id': 'key123',
    'private_key': 'privatekey',
    'client_email': 'hello@youarecool.com',
    'client_id': 'client123',
    'type': 'service_account'
  };
}

// Matches the ending of a string.
function stringEndsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

// Simulates a path join.
function pathJoin(item1, item2) {
  return item1 + ':' + item2;
}

// Returns the value.
function returns(value) {
  return function() {
    return value;
  };
}

function callsBack(value) {
  return function(callback) {
    callback(value);
  };
}

// Blocks the GOOGLE_APPLICATION_CREDENTIALS by default. This is necessary in case it is actually
// set on the host machine executing the test.
function blockGoogleApplicationCredentialEnvironmentVariable(ga) {
    return insertEnvironmentVariableIntoGA(ga, 'GOOGLE_APPLICATION_CREDENTIALS', null);
}

// Intercepts the specified environment variable, returning the specified value.
function insertEnvironmentVariableIntoGA(ga, environmentVariableName, environmentVariableValue) {
  var originalGetEnvironmentVariableFunction = ga._getEnv;

  ga._getEnv = function(name) {
    if (name === environmentVariableName) {
      return environmentVariableValue;
    }

    return originalGetEnvironmentVariableFunction(name);
  };
}

// Intercepts the specified file path and inserts the mock file path.
function insertWellKnownFilePathIntoGA(ga, filePath, mockFilePath) {
  var originalMockWellKnownFilePathFunction = ga._mockWellKnownFilePath;

  ga._mockWellKnownFilePath = function(path) {
    if (path === filePath) {
      return mockFilePath;
    }

    return originalMockWellKnownFilePathFunction(filePath);
  };
}

// Nothing.
function noop() { }

// Executes the doneCallback after the nTH call.
function doneWhen(doneCallback, count) {
  var i = 0;

  return function() {
    ++i;

    if (i === count) {
      doneCallback();
    } else if (i > count) {
      throw new Error('Called too many times. Test error?');
    }
  };
}

describe('googleAuth', function() {
  describe('.fromJson', function () {

    it('should error on null json', function () {
      googleapis.auth.fromJSON(null, function (err) {
        assert.equal(true, err instanceof Error);
      });
    });

    it('should error on empty json', function () {
      googleapis.auth.fromJSON({}, function (err) {
        assert.equal(true, err instanceof Error);
      });
    });

    it('should error on missing client_email', function () {
      var json = createJSON();
      delete json.client_email;

      googleapis.auth.fromJSON(json, function (err) {
        assert.equal(true, err instanceof Error);
      });
    });

    it('should error on missing private_key', function () {
      var json = createJSON();
      delete json.private_key;

      googleapis.auth.fromJSON(json, function (err) {
        assert.equal(true, err instanceof Error);
      });
    });

    it('should create JWT with client_email', function () {
      var json = createJSON();
      googleapis.auth.fromJSON(json, function (err, result) {
        assert.equal(null, err);
        assert.equal(json.client_email, result.email);
      });
    });

    it('should create JWT with private_key', function () {
      var json = createJSON();
      googleapis.auth.fromJSON(json, function (err, result) {
        assert.equal(null, err);
        assert.equal(json.private_key, result.key);
      });
    });

    it('should create JWT with null scopes', function () {
      var json = createJSON();
      googleapis.auth.fromJSON(json, function (err, result) {
        assert.equal(null, err);
        assert.equal(null, result.scopes);
      });
    });

    it('should create JWT with null subject', function () {
      var json = createJSON();
      googleapis.auth.fromJSON(json, function (err, result) {
        assert.equal(null, err);
        assert.equal(null, result.subject);
      });
    });

    it('should create JWT with null keyFile', function () {
      var json = createJSON();
      googleapis.auth.fromJSON(json, function (err, result) {
        assert.equal(null, err);
        assert.equal(null, result.keyFile);
      });
    });
  });

  describe('.fromStream', function () {

    it('should error on null stream', function (done) {
      googleapis.auth.fromStream(null, function (err) {
        assert.equal(true, err instanceof Error);
        done();
      });
    });

    it('should read the stream and create a jwt', function (done) {
      // Read the contents of the file into a json object.
      var fileContents = fs.readFileSync('./test/fixtures/private.json', 'utf-8');
      var json = JSON.parse(fileContents);

      // Now open a stream on the same file.
      var stream = fs.createReadStream('./test/fixtures/private.json');

      // And pass it into the fromStream method.
      googleapis.auth.fromStream(stream, function (err, result) {
        assert.equal(null, err);

        // Ensure that the correct bits were pulled from the stream.
        assert.equal(json.private_key, result.key);
        assert.equal(json.client_email, result.email);
        assert.equal(null, result.keyFile);
        assert.equal(null, result.subject);
        assert.equal(null, result.scope);

        done();
      });
    });
  });

  describe('._getApplicationCredentialsFromFilePath', function () {

    it('should error on null file path', function (done) {
      googleapis.auth._getApplicationCredentialsFromFilePath(null, function (err) {
        assert.equal(true, err instanceof Error);
        done();
      });
    });

    it('should error on empty file path', function (done) {
      googleapis.auth._getApplicationCredentialsFromFilePath('', function (err) {
        assert.equal(true, err instanceof Error);
        done();
      });
    });

    it('should error on non-string file path', function (done) {
      googleapis.auth._getApplicationCredentialsFromFilePath(2, function (err) {
        assert.equal(true, err instanceof Error);
        done();
      });
    });

    it('should error on invalid file path', function (done) {
      googleapis.auth._getApplicationCredentialsFromFilePath('./nonexistantfile.json',
        function (err) {

        assert.equal(true, err instanceof Error);
        done();
      });
    });

    it('should error on directory', function (done) {
      // Make sure that the following path actually does point to a directory.
      var directory = './test/fixtures';
      assert.equal(true, fs.lstatSync(directory).isDirectory());

      // Execute.
      googleapis.auth._getApplicationCredentialsFromFilePath(directory,
        function (err) {

        assert.equal(true, err instanceof Error);
        done();
      });
    });

    it('should handle errors thrown from createReadStream', function (done) {
      // Set up a mock to throw from the createReadStream method.
      var ga = new googleAuth();
      ga._createReadStream = function () {
        throw new Error('Hans and Chewbacca');
      };

      // Execute.
      ga._getApplicationCredentialsFromFilePath('./test/fixtures/private.json', function (err) {

        assert.equal(true, stringEndsWith(err.message, 'Hans and Chewbacca'));
        done();
      });
    });

    it('should handle errors thrown from fromStream', function (done) {
      // Set up a mock to throw from the fromStream method.
      var ga = new googleAuth();
      ga.fromStream = function () {
        throw new Error('Darth Maul');
      };

      // Execute.
      ga._getApplicationCredentialsFromFilePath('./test/fixtures/private.json', function (err) {

        assert.equal(true, stringEndsWith(err.message, 'Darth Maul'));
        done();
      });
    });

    it('should handle errors passed from fromStream', function (done) {
      // Set up a mock to return an error from the fromStream method.
      var ga = new googleAuth();
      ga.fromStream = function (stream, callback) {
        callback(new Error('Princess Leia'));
      };

      // Execute.
      ga._getApplicationCredentialsFromFilePath('./test/fixtures/private.json', function (err) {

        assert.equal(true, stringEndsWith(err.message, 'Princess Leia'));
        done();
      });
    });

    it('should correctly read the file and create a valid JWT', function (done) {
      // Read the contents of the file into a json object.
      var fileContents = fs.readFileSync('./test/fixtures/private.json', 'utf-8');
      var json = JSON.parse(fileContents);

      // Now pass the same path to the auth loader.
      googleapis.auth._getApplicationCredentialsFromFilePath('./test/fixtures/private.json',
        function (err, result) {

        assert.equal(null, err);
        assert.equal(json.private_key, result.key);
        assert.equal(json.client_email, result.email);
        assert.equal(null, result.keyFile);
        assert.equal(null, result.subject);
        assert.equal(null, result.scope);
        done();
      });
    });
  });

  describe('._tryGetApplicationCredentialsFromEnvironmentVariable', function () {

    it('should return false when env var is not set', function (done) {
      // Set up a mock to return a null path string.
      var ga = new googleAuth();
      insertEnvironmentVariableIntoGA(ga, 'GOOGLE_APPLICATION_CREDENTIALS', null);

      // The test ends successfully after 1 step has completed.
      var step = doneWhen(done, 1);

      // Execute.
      var handled = ga._tryGetApplicationCredentialsFromEnvironmentVariable(function () {
        step(); // This should not get called.
      });

      assert.equal(false, handled);
      step(); // This should get called.
    });

    it('should return false when env var is empty string', function (done) {
      // Set up a mock to return an empty path string.
      var ga = new googleAuth();
      insertEnvironmentVariableIntoGA(ga, 'GOOGLE_APPLICATION_CREDENTIALS', '');

      // The test ends successfully after 1 step has completed.
      var step = doneWhen(done, 1);

      // Execute.
      var handled = ga._tryGetApplicationCredentialsFromEnvironmentVariable(function () {
        step(); // This should not get called.
      });

      assert.equal(false, handled);
      step(); // This should get called.
    });

    it('should handle invalid environment variable', function (done) {
      // Set up a mock to return a path to an invalid file.
      var ga = new googleAuth();
      insertEnvironmentVariableIntoGA(ga, 'GOOGLE_APPLICATION_CREDENTIALS',
        './nonexistantfile.json');

      // The test ends successfully after 2 steps have completed.
      var step = doneWhen(done, 2);

      // Execute.
      var handled = ga._tryGetApplicationCredentialsFromEnvironmentVariable(function (err) {
        assert.equal(true, err instanceof Error);
        step();
      });

      assert.equal(true, handled);
      step();
    });

    it('should handle valid environment variable', function (done) {
      // Set up a mock to return path to a valid credentials file.
      var ga = new googleAuth();
      insertEnvironmentVariableIntoGA(ga, 'GOOGLE_APPLICATION_CREDENTIALS',
        './test/fixtures/private.json');

      // Read the contents of the file into a json object.
      var fileContents = fs.readFileSync('./test/fixtures/private.json', 'utf-8');
      var json = JSON.parse(fileContents);

      // The test ends successfully after 2 steps have completed.
      var step = doneWhen(done, 2);

      // Execute.
      var handled = ga._tryGetApplicationCredentialsFromEnvironmentVariable(function (err, result) {
        assert.equal(null, err);
        assert.equal(json.private_key, result.key);
        assert.equal(json.client_email, result.email);
        assert.equal(null, result.keyFile);
        assert.equal(null, result.subject);
        assert.equal(null, result.scope);
        step();
      });

      assert.equal(true, handled);
      step();
    });
  });

  describe('._tryGetApplicationCredentialsFromWellKnownFile', function () {

    it('should build the correct directory for Windows', function () {
      var correctLocation = false;

      // Set up mocks.
      var ga = new googleAuth();
      blockGoogleApplicationCredentialEnvironmentVariable(ga);
      insertEnvironmentVariableIntoGA(ga, 'APPDATA', 'foo');
      ga._pathJoin = pathJoin;
      ga._osPlatform = returns('win32');
      ga._fileExists = returns(true);

      ga._getApplicationCredentialsFromFilePath = function (filePath) {
        if (filePath === 'foo:gcloud:application_default_credentials.json') {
          correctLocation = true;
        }
      };

      // Execute.
      var handled = ga._tryGetApplicationCredentialsFromWellKnownFile();

      assert.equal(true, handled);
      assert.equal(true, correctLocation);
    });

    it('should build the correct directory for non-Windows', function () {
      var correctLocation = false;

      // Set up mocks.
      var ga = new googleAuth();
      blockGoogleApplicationCredentialEnvironmentVariable(ga);
      insertEnvironmentVariableIntoGA(ga, 'HOME', 'foo');
      ga._pathJoin = pathJoin;
      ga._osPlatform = returns('linux');
      ga._fileExists = returns(true);


      ga._getApplicationCredentialsFromFilePath = function (filePath) {
        if (filePath === 'foo:.config:gcloud:application_default_credentials.json') {
          correctLocation = true;
        }
      };

      // Execute.
      var handled = ga._tryGetApplicationCredentialsFromWellKnownFile();

      assert.equal(true, handled);
      assert.equal(true, correctLocation);
    });

    it('should fail on Windows when APPDATA is not defined', function (done) {
      // Set up mocks.
      var ga = new googleAuth();
      blockGoogleApplicationCredentialEnvironmentVariable(ga);
      insertEnvironmentVariableIntoGA(ga, 'APPDATA', null);
      ga._pathJoin = pathJoin;
      ga._osPlatform = returns('win32');
      ga._fileExists = returns(true);
      ga._getApplicationCredentialsFromFilePath = noop;

      // The test ends successfully after 1 step has completed.
      var step = doneWhen(done, 1);

      // Execute.
      var handled = ga._tryGetApplicationCredentialsFromWellKnownFile(function () {
        step(); // Should not get called.
      });

      assert.equal(false, handled);
      step(); // Should get called.
    });

    it('should fail on non-Windows when HOME is not defined', function (done) {
      // Set up mocks.
      var ga = new googleAuth();
      blockGoogleApplicationCredentialEnvironmentVariable(ga);
      insertEnvironmentVariableIntoGA(ga, 'HOME', null);
      ga._pathJoin = pathJoin;
      ga._osPlatform = returns('linux');
      ga._fileExists = returns(true);
      ga._getApplicationCredentialsFromFilePath = noop;

      // The test ends successfully after 1 step has completed.
      var step = doneWhen(done, 1);

      // Execute.
      var handled = ga._tryGetApplicationCredentialsFromWellKnownFile(function () {
        step(); // Should not get called.
      });

      assert.equal(false, handled);
      step(); // Should get called.
    });

    it('should fail on Windows when file does not exist', function (done) {
      // Set up mocks.
      var ga = new googleAuth();
      blockGoogleApplicationCredentialEnvironmentVariable(ga);
      insertEnvironmentVariableIntoGA(ga, 'APPDATA', 'foo');
      ga._pathJoin = pathJoin;
      ga._osPlatform = returns('win32');
      ga._fileExists = returns(false);
      ga._getApplicationCredentialsFromFilePath = noop;

      // The test ends successfully after 1 step has completed.
      var step = doneWhen(done, 1);

      // Execute.
      var handled = ga._tryGetApplicationCredentialsFromWellKnownFile(function () {
        step(); // Should not get called.
      });

      assert.equal(false, handled);
      step(); // Should get called.
    });

    it('should fail on non-Windows when file does not exist', function (done) {
      // Set up mocks.
      var ga = new googleAuth();
      blockGoogleApplicationCredentialEnvironmentVariable(ga);
      insertEnvironmentVariableIntoGA(ga, 'HOME', 'foo');
      ga._pathJoin = pathJoin;
      ga._osPlatform = returns('linux');
      ga._fileExists = returns(false);
      ga._getApplicationCredentialsFromFilePath = noop;

      // The test ends successfully after 1 step has completed.
      var step = doneWhen(done, 1);

      // Execute.
      var handled = ga._tryGetApplicationCredentialsFromWellKnownFile(function () {
        step(); // Should not get called.
      });

      assert.equal(false, handled);
      step(); // Should get called.
    });
  });

  it('should succeeds on Windows', function (done) {
    // Set up mocks.
    var ga = new googleAuth();
    blockGoogleApplicationCredentialEnvironmentVariable(ga);
    insertEnvironmentVariableIntoGA(ga, 'APPDATA', 'foo');
    ga._pathJoin = pathJoin;
    ga._osPlatform = returns('win32');
    ga._fileExists = returns(true);

    ga._getApplicationCredentialsFromFilePath = function (filePath, callback) {
      callback(null, 'hello');
    };

    // The test ends successfully after 2 steps have completed.
    var step = doneWhen(done, 2);

    // Execute.
    var handled = ga._tryGetApplicationCredentialsFromWellKnownFile(function (err, result) {
      assert.equal(null, err);
      assert.equal('hello', result);
      step();
    });

    assert.equal(true, handled);
    step();
  });

  it('should succeeds on non-Windows', function (done) {
    // Set up mocks.
    var ga = new googleAuth();
    blockGoogleApplicationCredentialEnvironmentVariable(ga);
    insertEnvironmentVariableIntoGA(ga, 'HOME', 'foo');
    ga._pathJoin = pathJoin;
    ga._osPlatform = returns('linux');
    ga._fileExists = returns(true);

    ga._getApplicationCredentialsFromFilePath = function (filePath, callback) {
      callback(null, 'hello');
    };

    // The test ends successfully after 2 steps have completed.
    var step = doneWhen(done, 2);

    // Execute.
    var handled = ga._tryGetApplicationCredentialsFromWellKnownFile(function (err, result) {
      assert.equal(null, err);
      assert.equal('hello', result);
      step();
    });

    assert.equal(true, handled);
    step();
  });

  it('should pass along a failure on Windows', function (done) {
    // Set up mocks.
    var ga = new googleAuth();
    blockGoogleApplicationCredentialEnvironmentVariable(ga);
    insertEnvironmentVariableIntoGA(ga, 'APPDATA', 'foo');
    ga._pathJoin = pathJoin;
    ga._osPlatform = returns('win32');
    ga._fileExists = returns(true);

    ga._getApplicationCredentialsFromFilePath = function (filePath, callback) {
      callback(new Error('hello'));
    };

    // The test ends successfully after 2 steps have completed.
    var step = doneWhen(done, 2);

    // Execute.
    var handled = ga._tryGetApplicationCredentialsFromWellKnownFile(function (err, result) {
      assert.equal('hello', err.message);
      assert.equal(null, result);
      step();
    });

    assert.equal(true, handled);
    step();
  });

  it('should pass along a failure on non-Windows', function (done) {
    // Set up mocks.
    var ga = new googleAuth();
    blockGoogleApplicationCredentialEnvironmentVariable(ga);
    insertEnvironmentVariableIntoGA(ga, 'HOME', 'foo');
    ga._pathJoin = pathJoin;
    ga._osPlatform = returns('linux');
    ga._fileExists = returns(true);

    ga._getApplicationCredentialsFromFilePath = function (filePath, callback) {
      callback(new Error('hello'));
    };

    // The test ends successfully after 2 steps have completed.
    var step = doneWhen(done, 2);

    // Execute.
    var handled = ga._tryGetApplicationCredentialsFromWellKnownFile(function (err, result) {
      assert.equal('hello', err.message);
      assert.equal(null, result);
      step();
    });

    assert.equal(true, handled);
    step();
  });

  describe('.getApplicationDefault', function () {

    it('should return a new credential the first time and a cached credential the second time',
      function (done) {

      // The test ends successfully after 3 steps have completed.
      var step = doneWhen(done, 3);

      // Create a function which will set up a GoogleAuth instance to match on
      // an environment variable json file, but not on anything else.
      var setUpGAForEnvironmentVariable = function(creds) {
        insertEnvironmentVariableIntoGA(creds, 'GOOGLE_APPLICATION_CREDENTIALS',
          './test/fixtures/private.json');

        creds._fileExists = returns(false);
        creds._checkIsGCE = callsBack(false);
      };

      // Set up a new GoogleAuth and prepare it for local environment variable handling.
      var ga = new googleAuth();
      setUpGAForEnvironmentVariable(ga);

      // Ask for credentials, the first time.
      ga.getApplicationDefault(function (err, result) {
        assert.equal(null, err);
        assert.notEqual(null, result);

        // Capture the returned credential.
        var cachedCredential = result;

        // Make sure our special test bit is not set yet, indicating that this is a new
        // credentials instance.
        assert.equal(null, cachedCredential.specialTestBit);

        // Now set the special test bit.
        cachedCredential.specialTestBit = 'monkey';

        // Step 1 has completed.
        step();

        // Ask for credentials again, from the same ga instance. We expect a cached instance
        // this time.
        ga.getApplicationDefault(function (err2, result2) {
          assert.equal(null, err2);
          assert.notEqual(null, result2);

          // Make sure the special test bit is set on the credentials we got back, indicating
          // that we got cached credentials. Also make sure the object instance is the same.
          assert.equal('monkey', result2.specialTestBit);
          assert.equal(cachedCredential, result2);

          // Now create a second GoogleAuth instance, and ask for credentials. We should
          // get a new credentials instance this time.
          var ga2 = new googleAuth();
          setUpGAForEnvironmentVariable(ga2);

          // Step 2 has completed.
          step();

          ga2.getApplicationDefault(function (err3, result3) {
            assert.equal(null, err3);
            assert.notEqual(null, result3);

            // Make sure we get a new (non-cached) credential instance back.
            assert.equal(null, result3.specialTestBit);
            assert.notEqual(cachedCredential, result3);

            // Step 3 has completed.
            step();
          });
        });
      });
    });

    it('should use environment variable when it is set', function (done) {
      // We expect private.json to be the file that is used.
      var fileContents = fs.readFileSync('./test/fixtures/private.json', 'utf-8');
      var json = JSON.parse(fileContents);

      // Set up the creds.
      // * Environment variable is set up to point to private.json
      // * Well-known file is set up to point to private2.json
      // * Running on GCE is set to true.
      var ga = new googleAuth();
      insertEnvironmentVariableIntoGA(ga, 'GOOGLE_APPLICATION_CREDENTIALS',
        './test/fixtures/private.json');
      insertEnvironmentVariableIntoGA(ga, 'APPDATA', 'foo');
      ga._pathJoin = pathJoin;
      ga._osPlatform = returns('win32');
      ga._fileExists = returns(true);
      ga._checkIsGCE = callsBack(true);
      insertWellKnownFilePathIntoGA(ga, 'foo:gcloud:application_default_credentials.json',
        './test/fixtures/private2.json');

      // Execute.
      ga.getApplicationDefault(function (err, result) {
        assert.equal(null, err);
        assert.equal(json.private_key, result.key);
        assert.equal(json.client_email, result.email);
        assert.equal(null, result.keyFile);
        assert.equal(null, result.subject);
        assert.equal(null, result.scope);
        done();
      });
    });

    it('should use well-known file when it is available and env var is not set', function (done) {
      // We expect private2.json to be the file that is used.
      var fileContents = fs.readFileSync('./test/fixtures/private2.json', 'utf-8');
      var json = JSON.parse(fileContents);

      // Set up the creds.
      // * Environment variable is not set.
      // * Well-known file is set up to point to private2.json
      // * Running on GCE is set to true.
      var ga = new googleAuth();
      blockGoogleApplicationCredentialEnvironmentVariable(ga);
      insertEnvironmentVariableIntoGA(ga, 'APPDATA', 'foo');
      ga._pathJoin = pathJoin;
      ga._osPlatform = returns('win32');
      ga._fileExists = returns(true);
      ga._checkIsGCE = callsBack(true);
      insertWellKnownFilePathIntoGA(ga, 'foo:gcloud:application_default_credentials.json',
        './test/fixtures/private2.json');

      // Execute.
      ga.getApplicationDefault(function (err, result) {
        assert.equal(null, err);
        assert.equal(json.private_key, result.key);
        assert.equal(json.client_email, result.email);
        assert.equal(null, result.keyFile);
        assert.equal(null, result.subject);
        assert.equal(null, result.scope);
        done();
      });
    });

    it('should use GCE when well-known file and env var are not set', function (done) {
      // Set up the creds.
      // * Environment variable is not set.
      // * Well-known file is not set.
      // * Running on GCE is set to true.
      var ga = new googleAuth();
      blockGoogleApplicationCredentialEnvironmentVariable(ga);
      insertEnvironmentVariableIntoGA(ga, 'APPDATA', 'foo');
      ga._pathJoin = pathJoin;
      ga._osPlatform = returns('win32');
      ga._fileExists = returns(false);
      ga._checkIsGCE = callsBack(true);

      // Execute.
      ga.getApplicationDefault(function (err, result) {
        assert.equal(null, err);

        // This indicates that we got a ComputeClient instance back, rather than a JWTClient.
        assert.equal('compute-placeholder', result.credentials.refresh_token);
        done();
      });
    });
  });

  describe('._checkIsGCE', function () {

    it('should set the _isGCE flag when running on GCE', function (done) {
      var ga = new googleAuth();

      // Mock the transport layer to return the correct header indicating that
      // we're running on GCE.
      ga.transporter = new MockTransporter(true);

      // Assert on the initial values.
      assert.notEqual(true, ga._isGCE);
      assert.notEqual(true, ga._checked_isGCE);

      // Execute.
      ga._checkIsGCE(function () {
        // Assert that the flags are set.
        assert.equal(true, ga._isGCE);
        assert.equal(true, ga._checked_isGCE);

        done();
      });
    });

    it('should not set the _isGCE flag when not running on GCE', function (done) {
      var ga = new googleAuth();

      // Mock the transport layer to indicate that we're not running on GCE.
      ga.transporter = new MockTransporter(false);

      // Assert on the initial values.
      assert.notEqual(true, ga._isGCE);
      assert.notEqual(true, ga._checked_isGCE);

      // Execute.
      ga._checkIsGCE(function () {
        // Assert that the flags are set.
        assert.equal(false, ga._isGCE);
        assert.equal(true, ga._checked_isGCE);

        done();
      });
    });

    it('Does not execute the second time when running on GCE', function (done) {
      var ga = new googleAuth();

      // Mock the transport layer to indicate that we're not running on GCE.
      ga.transporter = new MockTransporter(true);

      // Assert on the initial values.
      assert.notEqual(true, ga._checked_isGCE);
      assert.notEqual(true, ga._isGCE);
      assert.equal(0, ga.transporter.executionCount);

      // Execute.
      ga._checkIsGCE(function () {
        // Assert.
        assert.equal(true, ga._checked_isGCE);
        assert.equal(true, ga._isGCE);
        assert.equal(1, ga.transporter.executionCount);

        // Execute a second time, check that we still get the correct values back,
        // but the execution count has not rev'd again, indicating that we
        // got the cached values this time.
        ga._checkIsGCE(function () {
          assert.equal(true, ga._checked_isGCE);
          assert.equal(true, ga._isGCE);
          assert.equal(1, ga.transporter.executionCount);
        });

        done();
      });
    });

    it('Does not execute the second time when not running on GCE', function (done) {
      var ga = new googleAuth();

      // Mock the transport layer to indicate that we're not running on GCE.
      ga.transporter = new MockTransporter(false);

      // Assert on the initial values.
      assert.notEqual(true, ga._checked_isGCE);
      assert.notEqual(true, ga._isGCE);
      assert.equal(0, ga.transporter.executionCount);

      // Execute.
      ga._checkIsGCE(function () {
        // Assert.
        assert.equal(true, ga._checked_isGCE);
        assert.equal(false, ga._isGCE);
        assert.equal(1, ga.transporter.executionCount);

        // Execute a second time, check that we still get the correct values back,
        // but the execution count has not rev'd again, indicating that we
        // got the cached values this time.
        ga._checkIsGCE(function () {
          assert.equal(true, ga._checked_isGCE);
          assert.equal(false, ga._isGCE);
          assert.equal(1, ga.transporter.executionCount);
        });

        done();
      });

      it('Returns false on transport error', function (done) {
        var ga = new googleAuth();

        // Mock the transport layer to indicate that we're not running on GCE, but also to
        // throw an error.
        ga.transporter = new MockTransporter(true, true);

        // Assert on the initial values.
        assert.notEqual(true, ga._checked_isGCE);
        assert.notEqual(true, ga._isGCE);

        // Execute.
        ga._checkIsGCE(function () {
          // Assert that _isGCE is set to false due to the error.
          assert.equal(true, ga._checked_isGCE);
          assert.equal(false, ga._isGCE);

          done();
        });
      });
    });
  });
});

// Mocks the transporter class to simulate GCE.
function MockTransporter(simulate_gce, throw_error) {
  this.isGCE = false;

  if (simulate_gce) {
    this.isGCE = true;
  }

  this.throw_error = throw_error;
  this.executionCount = 0;
}

MockTransporter.prototype.request = function(options, callback) {
  if (options.method === 'GET' && options.uri === 'http://metadata.google.internal') {

    this.executionCount += 1;

    var err = null;
    var response = { headers: { } };

    if (this.throw_error) {
      err = new Error('blah');
    } else if (this.isGCE) {
      response.headers['metadata-flavor'] = 'Google';
    }

    callback(err, null, response);
  } else {
    throw new Error('unexpected request');
  }
};