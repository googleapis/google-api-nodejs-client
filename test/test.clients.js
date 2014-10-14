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
var fs = require('fs');
var googleapis = require('../lib/googleapis.js');

function noop() {}

describe('Clients', function() {

  it('should create request helpers according to resource on discovery API response', function() {
      var plus = googleapis.plus('v1');
      assert.equal(typeof plus.people.get, 'function');
      assert.equal(typeof plus.activities.search, 'function');
      assert.equal(typeof plus.comments.list, 'function');
  });

  it('should be able to gen top level methods', function() {
    assert.equal(typeof googleapis.oauth2('v2').tokeninfo, 'function');
    assert.equal(typeof googleapis.freebase('v1').reconcile, 'function');
  });

  it('should be able to gen top level methods and resources', function() {
    var oauth2 = googleapis.oauth2('v2');
    assert.equal(typeof oauth2.tokeninfo, 'function');
    assert.equal(typeof oauth2.userinfo, 'object');
  });

  it('should be able to gen nested resources and methods', function() {
    var oauth2 = googleapis.oauth2('v2');
    assert.equal(typeof oauth2.userinfo, 'object');
    assert.equal(typeof oauth2.userinfo.v2, 'object');
    assert.equal(typeof oauth2.userinfo.v2.me, 'object');
    assert.equal(typeof oauth2.userinfo.v2.me.get, 'function');
  });

  it('should be able to require all api files without error', function() {
    function getFiles(dir, files_) {
      files_ = files_ || [];
      if (typeof files_ === 'undefined') {
        files_ = [];
      }
      var files = fs.readdirSync(dir);
      for (var i in files) {
          if (!files.hasOwnProperty(i)) {
            continue;
          }
          var name = dir + '/' + files[i];
          if (fs.statSync(name).isDirectory()) {
              getFiles(name, files_);
          } else {
              files_.push(name);
          }
      }
      return files_;
    }

    var api_files = getFiles(__dirname + '/../apis');

    assert.doesNotThrow(function() {
      for (var i in api_files) {
        require(api_files[i]);
      }
    });
  });

  it('should support default params', function() {
    var store = googleapis.datastore({ version: 'v1beta2', params: { myParam: '123' } });
    var req = store.datasets.lookup({ datasetId: '123' }, noop);
    // If the default param handling is broken, query might be undefined, thus concealing the
    // assertion message with some generic "cannot call .indexOf of undefined"
    var query = req.uri.query || '';

    assert.notEqual(query.indexOf('myParam=123'), -1, 'Default param not found in query');
  });

  it('should allow default params to be overriden per-request', function() {
    var store = googleapis.datastore({ version: 'v1beta2', params: { myParam: '123' } });
    // Override the default datasetId param for this particular API call
    var req = store.datasets.lookup({ datasetId: '123', myParam: '456' }, noop);
    // If the default param handling is broken, query might be undefined, thus concealing the
    // assertion message with some generic "cannot call .indexOf of undefined"
    var query = req.uri.query || '';

    assert.notEqual(query.indexOf('myParam=456'), -1, 'Default param not found in query');
  });

  it('should include default params when only callback is provided to API call', function() {
    var store = googleapis.datastore({
      version: 'v1beta2',
      params: {
        datasetId: '123', // We must set this here - it is a required param
        myParam: '123'
      }
    });

    // No params given - only callback
    var req = store.datasets.lookup(noop);
    // If the default param handling is broken, req or query might be undefined, thus concealing the
    // assertion message with some generic "cannot call .indexOf of undefined"
    var query = (req && req.uri.query) || '';

    assert.notEqual(query.indexOf('myParam=123'), -1, 'Default param not found in query');
  });
});
