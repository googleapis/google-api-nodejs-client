// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as assert from 'assert';
import {describe, it, after, before, beforeEach} from 'mocha';
import {APIEndpoint} from 'googleapis-common';
import * as nock from 'nock';
import {AuthPlus} from '../src/googleapis';
import {GoogleApis} from '../src';
import {Utils} from './utils';

async function testHeaders(drive: APIEndpoint) {
  const req = nock(Utils.baseUrl)
    .post('/drive/v2/files/a/comments')
    .reply(200, function () {
      const headers = this.req.headers;
      // ensure that the x-goog-user-project is loaded from default credentials:
      assert.strictEqual(headers['x-goog-user-project'][0], 'my-quota-project');

      // ensure that the x-goog-api-client header is populated by
      // googleapis-common:
      assert.ok(
        /gdcl\/[0-9]+\.[\w-.]+ gl-node\/[0-9]+\.[\w-.]+/.test(
          headers['x-goog-api-client'][0]
        )
      );
    });
  const auth = getAuthClientMock();
  const res = await drive.comments.insert({
    fileId: 'a',
    headers: {'If-None-Match': '12345'},
    auth: await auth.getClient(),
  });
  req.done();
  auth.done();
  assert.strictEqual(res.config.headers['If-None-Match'], '12345');
}

// Returns an auth client that fakes loading application default credentials
// from a fixtures directory:
function getAuthClientMock() {
  // mock environment variables such that default credentials are loaded.
  const projectOriginal = process.env.GCLOUD_PROJECT;
  process.env.GCLOUD_PROJECT = 'my-fake-project';
  const homeOriginal = process.env.HOME;
  process.env.HOME = './test/fixtures/';
  const appdataOriginal = process.env.APPDATA;
  process.env.APPDATA = './test/fixtures/.config';

  // an attempt will be made to fetch access token on first request.
  const req = nock('https://oauth2.googleapis.com')
    .post('/token')
    .reply(200, {});

  // An "AuthPlus" client with an added "done" method for resetting mocks.
  class AuthMock extends AuthPlus {
    done() {
      process.env.GCLOUD_PROJECT = projectOriginal;
      process.env.HOME = homeOriginal;
      process.env.APPDATA = appdataOriginal;
      req.done();
    }
  }
  const auth = new AuthMock({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: 'https://www.googleapis.com/auth/drive',
  });
  return auth;
}

async function testContentType(drive: APIEndpoint) {
  nock(Utils.baseUrl).post('/drive/v2/files/a/comments').reply(200);
  const res = await drive.comments.insert({
    fileId: 'a',
    resource: {content: 'hello '},
  });
  assert(res.config.headers['Content-Type'].indexOf('application/json') === 0);
}

async function testGzip(drive: APIEndpoint) {
  nock(Utils.baseUrl)
    .get('/drive/v2/files', undefined, {
      reqheaders: {'Accept-Encoding': 'gzip'},
    })
    .reply(200, {});
  const res = await drive.files.list();
  assert.deepStrictEqual(res.data, {});
  // note: axios strips the `content-encoding` header from the response,
  // so that cannot be checked here.
}

async function testBody(drive: APIEndpoint) {
  const scope = nock(Utils.baseUrl).get('/drive/v2/files').reply(200);
  const res = await drive.files.list();
  scope.done();
  assert.strictEqual(res.config.headers['content-type'], undefined);
  assert.strictEqual(res.config.body, undefined);
}

async function testBodyDelete(drive: APIEndpoint) {
  const scope = nock(Utils.baseUrl).delete('/drive/v2/files/test').reply(200);
  const res = await drive.files.delete({fileId: 'test'});
  scope.done();
  assert.strictEqual(res.config.headers['content-type'], undefined);
  assert.strictEqual(res.config.body, undefined);
}

async function testResponseError(drive: APIEndpoint) {
  await assert.rejects(
    drive.files.list({q: 'hello'}),
    (err: NodeJS.ErrnoException) => {
      assert(err instanceof Error);
      assert.strictEqual(err.message, 'Error!');
      assert.strictEqual(err.code, 400);
      return true;
    }
  );
}

async function testNotObjectError(oauth2: APIEndpoint) {
  await assert.rejects(
    oauth2.tokeninfo({access_token: 'hello'}),
    (err: NodeJS.ErrnoException) => {
      assert(err instanceof Error);
      assert.strictEqual(err.message, 'invalid_grant');
      assert.strictEqual(err.code, '400');
      return true;
    }
  );
}

async function testBackendError(blogger: APIEndpoint) {
  const obj = {longUrl: 'http://google.com/'};
  await assert.rejects(
    blogger.posts.publish({
      resource: obj,
      blogId: 'abc123',
      postId: 'abc123',
    }),
    (err: NodeJS.ErrnoException) => {
      assert(err instanceof Error);
      console.log(err);
      assert.strictEqual(Number(err.code), 500);
      assert.strictEqual(err.message, 'There was an error!');
      return true;
    }
  );
}

describe('Transporters', () => {
  let localDrive: APIEndpoint;
  let remoteDrive: APIEndpoint;
  let localOauth2: APIEndpoint;
  let remoteOauth2: APIEndpoint;
  let localBlogger: APIEndpoint;
  let remoteBlogger: APIEndpoint;
  before(async () => {
    nock.cleanAll();
    const google = new GoogleApis();
    [remoteDrive, remoteOauth2, remoteBlogger] = await Promise.all([
      Utils.loadApi(google, 'drive', 'v2'),
      Utils.loadApi(google, 'oauth2', 'v2'),
      Utils.loadApi(google, 'blogger', 'v3'),
    ]);
    nock.disableNetConnect();
  });

  after(() => {
    nock.cleanAll();
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    const google = new GoogleApis();
    localDrive = google.drive('v2');
    localOauth2 = google.oauth2('v2');
    localBlogger = google.blogger('v3');
  });

  it('should add headers to the request from params', async () => {
    await testHeaders(localDrive);
    await testHeaders(remoteDrive);
  });

  it('should automatically add content-type for POST requests', async () => {
    await testContentType(localDrive);
    await testContentType(remoteDrive);
  });

  it('should add the proper gzip headers', async () => {
    await testGzip(localDrive);
    await testGzip(remoteDrive);
  });

  it('should not add body for GET requests', async () => {
    await testBody(localDrive);
    await testBody(remoteDrive);
  });

  it('should not add body for DELETE requests', async () => {
    await testBodyDelete(localDrive);
    await testBodyDelete(remoteDrive);
  });

  it('should return errors within response body as instances of Error', async () => {
    const scope = nock(Utils.baseUrl)
      .get('/drive/v2/files?q=hello')
      .times(2)
      // Simulate an error returned via response body from
      // Google's API endpoint
      .reply(400, {error: {code: 400, message: 'Error!'}});
    await testResponseError(localDrive);
    await testResponseError(remoteDrive);
    scope.done();
  });

  it('should return error message correctly when error is not an object', async () => {
    const scope = nock(Utils.baseUrl)
      .post('/oauth2/v2/tokeninfo?access_token=hello')
      .times(2)
      // Simulate an error returned via response body from
      // Google's tokeninfo endpoint
      .reply(400, {
        error: 'invalid_grant',
        error_description: 'Code was already redeemed.',
      });
    await testNotObjectError(localOauth2);
    await testNotObjectError(remoteOauth2);
    scope.done();
  });

  it('should return 5xx responses as errors', async () => {
    const scope = nock('https://blogger.googleapis.com')
      .post('/v3/blogs/abc123/posts/abc123/publish')
      .times(2)
      .reply(500, 'There was an error!');
    await testBackendError(localBlogger);
    await testBackendError(remoteBlogger);
    scope.done();
  });

  it('should return 304 responses as success', async () => {
    const scope = nock(Utils.baseUrl).get('/drive/v2/files').reply(304);
    const res = await localDrive.files.list();
    assert.strictEqual(res.status, 304);
    scope.done();
  });

  it('should handle 5xx responses that include errors', async () => {
    const scope = nock('https://blogger.googleapis.com')
      .post('/v3/blogs/abc123/posts/abc123/publish')
      .times(2)
      .reply(500, {
        error: {message: 'There was an error!'},
      });
    await testBackendError(localBlogger);
    await testBackendError(remoteBlogger);
    scope.done();
  });

  it('should handle a Backend Error', async () => {
    const scope = nock('https://blogger.googleapis.com')
      .post('/v3/blogs/abc123/posts/abc123/publish')
      .times(2)
      .reply(500, {
        error: {
          errors: [
            {
              domain: 'global',
              reason: 'backendError',
              message: 'There was an error!',
            },
          ],
          code: 500,
          message: 'There was an error!',
        },
      });
    await testBackendError(localBlogger);
    await testBackendError(remoteBlogger);
    scope.done();
  });
});
