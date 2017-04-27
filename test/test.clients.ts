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

import * as assert from 'power-assert';
import * as async from 'async';
import * as fs from 'fs';
import * as nock from 'nock';
import * as path from 'path';
import utils from './utils';
let googleapis = require('../');

describe('Clients', () => {
  let localPlus, remotePlus;
  let localOauth2, remoteOauth2;

  before((done) => {
    nock.cleanAll();
    const google = new googleapis.GoogleApis();
    nock.enableNetConnect();
    async.parallel([
      (cb) => {
        utils.loadApi(google, 'plus', 'v1', {}, cb);
      },
      (cb) => {
        utils.loadApi(google, 'oauth2', 'v2', {}, cb);
      }
    ], (err, apis) => {
      if (err) {
        return done(err);
      }
      remotePlus = apis[0];
      remoteOauth2 = apis[1];
      nock.disableNetConnect();
      done();
    });
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    const google = new googleapis.GoogleApis();
    localPlus = google.plus('v1');
    localOauth2 = google.oauth2('v2');
  });

  it('should create request helpers according to resource on discovery API response', () => {
    let plus = localPlus;
    assert.equal(typeof plus.people.get, 'function');
    assert.equal(typeof plus.activities.search, 'function');
    assert.equal(typeof plus.comments.list, 'function');
    plus = remotePlus;
    assert.equal(typeof plus.people.get, 'function');
    assert.equal(typeof plus.activities.search, 'function');
    assert.equal(typeof plus.comments.list, 'function');
  });

  it('should be able to gen top level methods', () => {
    assert.equal(typeof localOauth2.tokeninfo, 'function');
    assert.equal(typeof remoteOauth2.tokeninfo, 'function');
  });

  it('should be able to gen top level methods and resources', () => {
    let oauth2 = localOauth2;
    assert.equal(typeof oauth2.tokeninfo, 'function');
    assert.equal(typeof oauth2.userinfo, 'object');
    oauth2 = remoteOauth2;
    assert.equal(typeof oauth2.tokeninfo, 'function');
    assert.equal(typeof oauth2.userinfo, 'object');
  });

  it('should be able to gen nested resources and methods', () => {
    let oauth2 = localOauth2;
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

  it('should be able to require all api files without error', () => {
    function getFiles (dir, files_?) {
      files_ = files_ || [];
      if (typeof files_ === 'undefined') {
        files_ = [];
      }
      const files = fs.readdirSync(dir);
      for (const i in files) {
        if (!files.hasOwnProperty(i)) {
          continue;
        }
        const name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
          getFiles(name, files_);
        } else {
          if (path.extname(name) === ".js") {
            files_.push(name);
          }
        }
      }
      return files_;
    }

    const apiFiles = getFiles(path.join(__dirname, '/../apis'));

    assert.doesNotThrow(() => {
      for (const i in apiFiles) {
        try {
          require(apiFiles[i]);
        } catch (err) {
          console.error(err);
          throw err;
        }
      }
    });
  });

  it('should support default params', (done) => {
    const google = new googleapis.GoogleApis();
    const datastore = google.datastore({
      version: 'v1beta3',
      params: { myParam: '123' }
    });
    const req = datastore.projects.lookup({ projectId: 'test-project-id' }, utils.noop);
    // If the default param handling is broken, query might be undefined, thus
    // concealing the assertion message with some generic "cannot call .indexOf
    // of undefined"
    const query = req.uri.query || '';

    assert.notEqual(
      query.indexOf('myParam=123'),
      -1,
      'Default param in query'
    );
    nock.enableNetConnect();
    utils.loadApi(google, 'datastore', 'v1beta3', {
      params: { myParam: '123' }
    }, (err, datastore) => {
      nock.disableNetConnect();
      if (err) {
        return done(err);
      }
      const req = datastore.projects.lookup({ projectId: 'test-project-id' }, utils.noop);
      const query = req.uri.query || '';

      assert.notEqual(
        query.indexOf('myParam=123'),
        -1,
        'Default param in query'
      );
      done();
    });
  });

  it('should allow default params to be overriden per-request', (done) => {
    const google = new googleapis.GoogleApis();
    const datastore = google.datastore({
      version: 'v1beta3',
      params: { myParam: '123' }
    });
    // Override the default datasetId param for this particular API call
    const req = datastore.projects.lookup({
      projectId: 'test-project-id', myParam: '456'
    }, utils.noop);
    // If the default param handling is broken, query might be undefined, thus
    // concealing the assertion message with some generic "cannot call .indexOf
    // of undefined"
    const query = req.uri.query || '';

    assert.notEqual(
      query.indexOf('myParam=456'),
      -1,
      'Default param not found in query'
    );

    nock.enableNetConnect();
    utils.loadApi(google, 'datastore', 'v1beta3', {
      params: { myParam: '123' }
    }, (err, datastore) => {
      nock.disableNetConnect();
      if (err) {
        return done(err);
      }
      // Override the default datasetId param for this particular API call
      const req = datastore.projects.lookup({
        projectId: 'test-project-id', myParam: '456'
      }, utils.noop);
      // If the default param handling is broken, query might be undefined, thus
      // concealing the assertion message with some generic "cannot call .indexOf
      // of undefined"
      const query = req.uri.query || '';

      assert.notEqual(
        query.indexOf('myParam=456'),
        -1,
        'Default param not found in query'
      );
      done();
    });
  });

  it('should include default params when only callback is provided to API call', (done) => {
    const google = new googleapis.GoogleApis();
    const datastore = google.datastore({
      version: 'v1beta3',
      params: {
        projectId: 'test-project-id', // We must set this here - it is a required param
        myParam: '123'
      }
    });
    // No params given - only callback
    const req = datastore.projects.lookup(utils.noop);
    // If the default param handling is broken, req or query might be undefined, thus concealing the
    // assertion message with some generic "cannot call .indexOf of undefined"
    const query = (req && req.uri.query) || '';

    assert.notEqual(query.indexOf('myParam=123'), -1, 'Default param not found in query');

    nock.enableNetConnect();
    utils.loadApi(google, 'datastore', 'v1beta3', {
      params: {
        projectId: 'test-project-id', // We must set this here - it is a required param
        myParam: '123'
      }
    }, (err, datastore) => {
      nock.disableNetConnect();
      if (err) {
        return done(err);
      }
      // No params given - only callback
      const req = datastore.projects.lookup(utils.noop);
      // If the default param handling is broken, req or query might be
      // undefined, thus concealing the assertion message with some generic
      // "cannot call .indexOf of undefined"
      const query = (req && req.uri.query) || '';

      assert.notEqual(query.indexOf('myParam=123'), -1, 'Default param not found in query');
      done();
    });
  });

  after(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});
