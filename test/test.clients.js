// Copyright 2013-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var assert = require('assert');
var async = require('async');
var fs = require('fs');
var googleapis = require('../');
var nock = require('nock');
var path = require('path');
var utils = require('./utils');

describe('Clients', function () {
  var localPlus, remotePlus;
  var localOauth2, remoteOauth2;
  var localFreebase, remoteFreebase;

  before(function (done) {
    nock.cleanAll();
    var google = new googleapis.GoogleApis();
    nock.enableNetConnect();
    async.parallel([
      function (cb) {
        utils.loadApi(google, 'plus', 'v1', cb);
      },
      function (cb) {
        utils.loadApi(google, 'oauth2', 'v2', cb);
      },
      function (cb) {
        utils.loadApi(google, 'freebase', 'v1', cb);
      }
    ], function (err, apis) {
      if (err) {
        return done(err);
      }
      remotePlus = apis[0];
      remoteOauth2 = apis[1];
      remoteFreebase = apis[2];
      nock.disableNetConnect();
      done();
    });
  });

  beforeEach(function () {
    nock.cleanAll();
    nock.disableNetConnect();
    var google = new googleapis.GoogleApis();
    localPlus = google.plus('v1');
    localOauth2 = google.oauth2('v2');
    localFreebase = google.freebase('v1');
  });

  it('should create request helpers according to resource on discovery API response', function () {
    var plus = localPlus;
    assert.equal(typeof plus.people.get, 'function');
    assert.equal(typeof plus.activities.search, 'function');
    assert.equal(typeof plus.comments.list, 'function');
    plus = remotePlus;
    assert.equal(typeof plus.people.get, 'function');
    assert.equal(typeof plus.activities.search, 'function');
    assert.equal(typeof plus.comments.list, 'function');
  });

  it('should be able to gen top level methods', function () {
    assert.equal(typeof localOauth2.tokeninfo, 'function');
    assert.equal(typeof remoteOauth2.tokeninfo, 'function');
    assert.equal(typeof localFreebase.reconcile, 'function');
    assert.equal(typeof remoteFreebase.reconcile, 'function');
  });

  it('should be able to gen top level methods and resources', function () {
    var oauth2 = localOauth2;
    assert.equal(typeof oauth2.tokeninfo, 'function');
    assert.equal(typeof oauth2.userinfo, 'object');
    oauth2 = remoteOauth2;
    assert.equal(typeof oauth2.tokeninfo, 'function');
    assert.equal(typeof oauth2.userinfo, 'object');
  });

  it('should be able to gen nested resources and methods', function () {
    var oauth2 = localOauth2;
    assert.equal(typeof oauth2.userinfo, 'object');
    assert.equal(typeof oauth2.userinfo.v2, 'object');
    assert.equal(typeof oauth2.userinfo.v2.me, 'object');
    assert.equal(typeof oauth2.userinfo.v2.me.get, 'function');
    oauth2 = remoteOauth2;
    assert.equal(typeof oauth2.userinfo, 'object');
    assert.equal(typeof oauth2.userinfo.v2, 'object');
    assert.equal(typeof oauth2.userinfo.v2.me, 'object');
    assert.equal(typeof oauth2.userinfo.v2.me.get, 'function');
  });

  it('should be able to require all api files without error', function () {
    function getFiles (dir, files_) {
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

    var apiFiles = getFiles(path.join(__dirname, '/../apis'));

    assert.doesNotThrow(function () {
      for (var i in apiFiles) {
        require(apiFiles[i]);
      }
    });
  });

  it('should support default params', function (done) {
    var google = new googleapis.GoogleApis();
    var datastore = google.datastore({
      version: 'v1beta2',
      params: { myParam: '123' }
    });
    var req = datastore.datasets.lookup({ datasetId: '123' }, utils.noop);
    // If the default param handling is broken, query might be undefined, thus
    // concealing the assertion message with some generic "cannot call .indexOf
    // of undefined"
    var query = req.uri.query || '';

    assert.notEqual(
      query.indexOf('myParam=123'),
      -1,
      'Default param in query'
    );
    nock.enableNetConnect();
    utils.loadApi(google, 'datastore', 'v1beta2', {
      params: { myParam: '123' }
    }, function (err, datastore) {
      nock.disableNetConnect();
      if (err) {
        return done(err);
      }
      var req = datastore.datasets.lookup({ datasetId: '123' }, utils.noop);
      var query = req.uri.query || '';

      assert.notEqual(
        query.indexOf('myParam=123'),
        -1,
        'Default param in query'
      );
      done();
    });
  });

  it('should allow default params to be overriden per-request', function (done) {
    var google = new googleapis.GoogleApis();
    var datastore = google.datastore({
      version: 'v1beta2',
      params: { myParam: '123' }
    });
    // Override the default datasetId param for this particular API call
    var req = datastore.datasets.lookup({
      datasetId: '123', myParam: '456'
    }, utils.noop);
    // If the default param handling is broken, query might be undefined, thus
    // concealing the assertion message with some generic "cannot call .indexOf
    // of undefined"
    var query = req.uri.query || '';

    assert.notEqual(
      query.indexOf('myParam=456'),
      -1,
      'Default param not found in query'
    );

    nock.enableNetConnect();
    utils.loadApi(google, 'datastore', 'v1beta2', {
      params: { myParam: '123' }
    }, function (err, datastore) {
      nock.disableNetConnect();
      if (err) {
        return done(err);
      }
      // Override the default datasetId param for this particular API call
      var req = datastore.datasets.lookup({
        datasetId: '123', myParam: '456'
      }, utils.noop);
      // If the default param handling is broken, query might be undefined, thus
      // concealing the assertion message with some generic "cannot call .indexOf
      // of undefined"
      var query = req.uri.query || '';

      assert.notEqual(
        query.indexOf('myParam=456'),
        -1,
        'Default param not found in query'
      );
      done();
    });
  });

  it('should include default params when only callback is provided to API call', function (done) {
    var google = new googleapis.GoogleApis();
    var datastore = google.datastore({
      version: 'v1beta2',
      params: {
        datasetId: '123', // We must set this here - it is a required param
        myParam: '123'
      }
    });
    // No params given - only callback
    var req = datastore.datasets.lookup(utils.noop);
    // If the default param handling is broken, req or query might be undefined, thus concealing the
    // assertion message with some generic "cannot call .indexOf of undefined"
    var query = (req && req.uri.query) || '';

    assert.notEqual(query.indexOf('myParam=123'), -1, 'Default param not found in query');

    nock.enableNetConnect();
    utils.loadApi(google, 'datastore', 'v1beta2', {
      params: {
        datasetId: '123', // We must set this here - it is a required param
        myParam: '123'
      }
    }, function (err, datastore) {
      nock.disableNetConnect();
      if (err) {
        return done(err);
      }
      // No params given - only callback
      var req = datastore.datasets.lookup(utils.noop);
      // If the default param handling is broken, req or query might be
      // undefined, thus concealing the assertion message with some generic
      // "cannot call .indexOf of undefined"
      var query = (req && req.uri.query) || '';

      assert.notEqual(query.indexOf('myParam=123'), -1, 'Default param not found in query');
      done();
    });
  });

  after(function () {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});
