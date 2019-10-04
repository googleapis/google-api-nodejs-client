/**
 * Copyright 2019 Google LLC
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

import * as assert from 'assert';
import {APIEndpoint} from 'googleapis-common';
import * as nock from 'nock';
import {GoogleApis} from '../src';
import {Utils} from './utils';

async function testHeaders(drive: APIEndpoint) {
  const req = nock(Utils.baseUrl)
    .post('/drive/v2/files/a/comments')
    .reply(200, function() {
      // ensure that the x-goog-api-client header is populated by
      // googleapis-common:
      const headers = this.req.headers['x-goog-api-client'];
      assert.ok(
        /gdcl\/[0-9]+\.[\w-.]+ gl-node\/[0-9]+\.[\w-.]+ auth\/[0-9]+\.[\w-.]+/.test(
          headers
        )
      );
    });
  const res = await drive.comments.insert({
    fileId: 'a',
    headers: {'If-None-Match': '12345'},
  });
  req.done();
  assert.strictEqual(res.config.headers['If-None-Match'], '12345');
}

async function testContentType(drive: APIEndpoint) {
  nock(Utils.baseUrl)
    .post('/drive/v2/files/a/comments')
    .reply(200);
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
  const scope = nock(Utils.baseUrl)
    .get('/drive/v2/files')
    .reply(200);
  const res = await drive.files.list();
  scope.done();
  assert.strictEqual(res.config.headers['content-type'], undefined);
  assert.strictEqual(res.config.body, undefined);
}

async function testBodyDelete(drive: APIEndpoint) {
  const scope = nock(Utils.baseUrl)
    .delete('/drive/v2/files/test')
    .reply(200);
  const res = await drive.files.delete({fileId: 'test'});
  scope.done();
  assert.strictEqual(res.config.headers['content-type'], undefined);
  assert.strictEqual(res.config.body, undefined);
}

function testResponseError(drive: APIEndpoint, cb: (err?: Error) => void) {
  drive.files.list({q: 'hello'}, (err: NodeJS.ErrnoException) => {
    assert(err instanceof Error);
    assert.strictEqual(err.message, 'Error!');
    assert.strictEqual(err.code, 400);
    cb();
  });
}

function testNotObjectError(oauth2: APIEndpoint, cb: (err?: Error) => void) {
  oauth2.tokeninfo({access_token: 'hello'}, (err: NodeJS.ErrnoException) => {
    assert(err instanceof Error);
    assert.strictEqual(err.message, 'invalid_grant');
    assert.strictEqual(err.code, '400');
    cb();
  });
}

function testBackendError(blogger: APIEndpoint, cb: (err?: Error) => void) {
  const obj = {longUrl: 'http://google.com/'};
  blogger.posts.publish(
    {resource: obj, blogId: 'abc123', postId: 'abc123'},
    (err: NodeJS.ErrnoException, result: {}) => {
      assert(err instanceof Error);
      assert.strictEqual(Number(err.code), 500);
      assert.strictEqual(err.message, 'There was an error!');
      assert.strictEqual(result, undefined);
      cb();
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
    nock.enableNetConnect();
    [remoteDrive, remoteOauth2, remoteBlogger] = await Promise.all([
      Utils.loadApi(google, 'drive', 'v2'),
      Utils.loadApi(google, 'oauth2', 'v2'),
      Utils.loadApi(google, 'blogger', 'v3'),
    ]);
    nock.disableNetConnect();
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

  it('should return errors within response body as instances of Error', done => {
    const scope = nock(Utils.baseUrl)
      .get('/drive/v2/files?q=hello')
      .times(2)
      // Simulate an error returned via response body from
      // Google's API endpoint
      .reply(400, {error: {code: 400, message: 'Error!'}});

    testResponseError(localDrive, () => {
      testResponseError(remoteDrive, () => {
        scope.done();
        done();
      });
    });
  });

  it('should return error message correctly when error is not an object', done => {
    const scope = nock(Utils.baseUrl)
      .post('/oauth2/v2/tokeninfo?access_token=hello')
      .times(2)
      // Simulate an error returned via response body from
      // Google's tokeninfo endpoint
      .reply(400, {
        error: 'invalid_grant',
        error_description: 'Code was already redeemed.',
      });

    testNotObjectError(localOauth2, () => {
      testNotObjectError(remoteOauth2, () => {
        scope.done();
        done();
      });
    });
  });

  it('should return 5xx responses as errors', done => {
    const scope = nock(Utils.baseUrl)
      .post('/blogger/v3/blogs/abc123/posts/abc123/publish')
      .times(2)
      .reply(500, 'There was an error!');

    testBackendError(localBlogger, () => {
      testBackendError(remoteBlogger, () => {
        scope.done();
        done();
      });
    });
  });

  it('should return 304 responses as success', async () => {
    const scope = nock(Utils.baseUrl)
      .get('/drive/v2/files')
      .reply(304);
    const res = await localDrive.files.list();
    assert.strictEqual(res.status, 304);
  });

  it('should handle 5xx responses that include errors', done => {
    const scope = nock(Utils.baseUrl)
      .post('/blogger/v3/blogs/abc123/posts/abc123/publish')
      .times(2)
      .reply(500, {
        error: {message: 'There was an error!'},
      });

    testBackendError(localBlogger, () => {
      testBackendError(remoteBlogger, () => {
        scope.done();
        done();
      });
    });
  });

  it('should handle a Backend Error', done => {
    const scope = nock(Utils.baseUrl)
      .post('/blogger/v3/blogs/abc123/posts/abc123/publish')
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

    testBackendError(localBlogger, () => {
      testBackendError(remoteBlogger, () => {
        scope.done();
        done();
      });
    });
  });

  after(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});
