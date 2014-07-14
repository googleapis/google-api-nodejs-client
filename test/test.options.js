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
var google = require('../lib/googleapis.js');

describe('google', function() {
  describe('.options()', function() {
    it('should be a function', function() {
      assert.equal(typeof google.options, 'function');
    });

    it('should not let transporter get set to null', function() {
      google.options({ transporter: null });
      assert.notEqual(google.transporter, null);
      assert.equal(typeof google.transporter, 'object');
    });

    it('should expose _options', function() {
      google.options({ hello: 'world' });
      assert.equal(JSON.stringify(google._options), JSON.stringify({ hello: 'world' }));
    });

    it('should remove transporter if passed in', function() {
      google.options({ hello: 'world', transporter: 'transporter' });
      assert.equal(google._options.transporter, undefined);
      assert.equal(google._options.hello, 'world');
    });

    it('should expose _options values', function() {
      google.options({ hello: 'world' });
      assert.equal(google._options.hello, 'world');
    });

    it('should promote endpoint options over global options', function() {
      var g = new google.GoogleApis();
      g.options({ hello: 'world' });
      var drive = g.drive({ version: 'v2', hello: 'changed' });
      var req = drive.files.get({});
      assert.equal(req.hello, 'changed');
    });
  });
});
