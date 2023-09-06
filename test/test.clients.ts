// Copyright 2013 Google LLC
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

import * as assert from 'assert';
import {describe, it, before, beforeEach, afterEach} from 'mocha';
import {execSync} from 'child_process';
import * as nock from 'nock';
import {GoogleApis, blogger_v3, oauth2_v2} from '../src';
import {Utils} from './utils';

function createNock(qs?: string) {
  const query = qs ? `?${qs}` : '';
  return nock('https://datastore.googleapis.com')
    .post(`/v1/projects/test-project-id:lookup${query}`)
    .reply(200, {
      'Content-Type': 'application/json',
    });
}

describe('Clients', () => {
  let localBlogger: blogger_v3.Blogger;
  let remoteBlogger: blogger_v3.Blogger;
  let localOauth2: oauth2_v2.Oauth2;
  let remoteOauth2: oauth2_v2.Oauth2;

  before(async () => {
    nock.disableNetConnect();
    const google = new GoogleApis();
    [remoteBlogger, remoteOauth2] = await Promise.all([
      Utils.loadApi<blogger_v3.Blogger>(google, 'blogger', 'v3'),
      Utils.loadApi<oauth2_v2.Oauth2>(google, 'oauth2', 'v2'),
    ]);
  });

  beforeEach(() => {
    const google = new GoogleApis();
    localBlogger = google.blogger('v3');
    localOauth2 = google.oauth2('v2');
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('should load API versions with a dot in the name', async () => {
    const google = new GoogleApis();
    const ads = google.adsense('v1.4');
    assert.ok(ads);
  });

  it('should create request helpers according to resource on discovery API response', () => {
    let blogger = localBlogger;
    assert.strictEqual(typeof blogger.pages.list, 'function');
    blogger = remoteBlogger;
    assert.strictEqual(typeof blogger.pages.list, 'function');
  });

  it('should be able to gen top level methods', () => {
    assert.strictEqual(typeof localOauth2.tokeninfo, 'function');
    assert.strictEqual(typeof remoteOauth2.tokeninfo, 'function');
  });

  it('should be able to gen top level methods and resources', () => {
    let oauth2 = localOauth2;
    assert.strictEqual(typeof oauth2.tokeninfo, 'function');
    assert.strictEqual(typeof oauth2.userinfo, 'object');
    oauth2 = remoteOauth2;
    assert.strictEqual(typeof oauth2.tokeninfo, 'function');
    assert.strictEqual(typeof oauth2.userinfo, 'object');
  });

  it('should be able to gen nested resources and methods', () => {
    let oauth2 = localOauth2;
    assert.strictEqual(typeof oauth2.userinfo, 'object');
    assert.strictEqual(typeof oauth2.userinfo.v2, 'object');
    assert.strictEqual(typeof oauth2.userinfo.v2.me, 'object');
    assert.strictEqual(typeof oauth2.userinfo.v2.me.get, 'function');
    oauth2 = remoteOauth2;
    assert.strictEqual(typeof oauth2.userinfo, 'object');
    assert.strictEqual(typeof oauth2.userinfo.v2, 'object');
    assert.strictEqual(typeof oauth2.userinfo.v2.me, 'object');
    assert.strictEqual(typeof oauth2.userinfo.v2.me.get, 'function');
  });

  it('should support default params', async () => {
    const google = new GoogleApis();
    const datastore = google.datastore({
      version: 'v1',
      params: {myParam: '123'},
    });
    createNock('myParam=123');
    const res = await datastore.projects.lookup({projectId: 'test-project-id'});
    // If the default param handling is broken, query might be undefined, thus
    // concealing the assertion message with some generic "cannot call .indexOf
    // of undefined"
    const query = Utils.getQs(res) || '';
    assert.notStrictEqual(
      query.indexOf('myParam=123'),
      -1,
      'Default param in query'
    );
    const datastore2 = await Utils.loadApi(google, 'datastore', 'v1', {
      params: {myParam: '123'},
    });
    nock.disableNetConnect();
    createNock('myParam=123');
    const res2 =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (datastore2 as any).projects.lookup({
        projectId: 'test-project-id',
      });
    const query2 = Utils.getQs(res2) || '';
    assert.notStrictEqual(
      query2.indexOf('myParam=123'),
      -1,
      'Default param in query'
    );
  });

  it('should allow default params to be overriden per-request', async () => {
    const google = new GoogleApis();
    const datastore = google.datastore({
      version: 'v1',
      params: {myParam: '123'},
    });
    // Override the default datasetId param for this particular API call
    createNock('myParam=456');
    const res = await datastore.projects.lookup(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {projectId: 'test-project-id', myParam: '456'} as any
    );
    // If the default param handling is broken, query might be undefined, thus
    // concealing the assertion message with some generic "cannot call .indexOf
    // of undefined"
    const query = Utils.getQs(res) || '';
    assert.notStrictEqual(
      query.indexOf('myParam=456'),
      -1,
      'Default param not found in query'
    );
    const datastore2 = await Utils.loadApi(google, 'datastore', 'v1', {
      params: {myParam: '123'},
    });
    nock.disableNetConnect();
    // Override the default datasetId param for this particular API call
    createNock('myParam=456');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res2 = await (datastore2 as any).projects.lookup({
      projectId: 'test-project-id',
      myParam: '456',
    });
    // If the default param handling is broken, query might be undefined,
    // thus concealing the assertion message with some generic "cannot
    // call .indexOf of undefined"
    const query2 = Utils.getQs(res2) || '';
    assert.notStrictEqual(
      query2.indexOf('myParam=456'),
      -1,
      'Default param not found in query'
    );
  });

  it('should include default params when only callback is provided to API call', async () => {
    const google = new GoogleApis();
    const datastore = google.datastore({
      version: 'v1',
      params: {
        // We must set this here - it is a required param
        projectId: 'test-project-id',
        myParam: '123',
      },
    });
    // No params given - only callback
    createNock('myParam=123');
    const res = await datastore.projects.lookup();
    // If the default param handling is broken, req or query might be
    // undefined, thus concealing the assertion message with some generic
    // "cannot call .indexOf of undefined"
    const query = Utils.getQs(res) || '';

    assert.notStrictEqual(
      query.indexOf('myParam=123'),
      -1,
      'Default param not found in query'
    );
    const datastore2 = await Utils.loadApi(google, 'datastore', 'v1', {
      params: {
        projectId: 'test-project-id', // We must set this here - it is a
        // required param
        myParam: '123',
      },
    });

    nock.disableNetConnect();

    // No params given - only callback
    createNock('myParam=123');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res3 = await (datastore2 as any).projects.lookup();
    // If the default param handling is broken, req or query might be
    // undefined, thus concealing the assertion message with some
    // generic "cannot call .indexOf of undefined"
    const query2 = Utils.getQs(res3) || '';
    assert.notStrictEqual(
      query2.indexOf('myParam=123'),
      -1,
      'Default param not found in query'
    );
  });

  it('should pass eslint for a given client', () => {
    execSync('npx eslint --no-ignore src/apis/youtube/*.ts');
  }).timeout(50000);
});
