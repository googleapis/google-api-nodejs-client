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

import assert from 'assert';
import nock from 'nock';
import {GoogleApis} from '../src';
import {APIEndpoint} from '../src/lib/api';

import {Utils} from './utils';

async function testHeaders(drive: APIEndpoint) {
  nock(Utils.baseUrl).post('/drive/v2/files/a/comments').reply(200);
  const res = await drive.comments.insert(
      {fileId: 'a', headers: {'If-None-Match': '12345'}});
  assert.equal(res.config.headers['If-None-Match'], '12345');
}

async function testContentType(drive: APIEndpoint) {
  nock(Utils.baseUrl).post('/drive/v2/files/a/comments').reply(200);
  const res =
      await drive.comments.insert({fileId: 'a', resource: {content: 'hello '}});
  assert(res.request.headers['content-type'].indexOf('application/json') === 0);
}

async function testGzip(drive: APIEndpoint) {
  nock(Utils.baseUrl)
      .get(
          '/drive/v2/files', undefined,
          {reqheaders: {'Accept-Encoding': 'gzip'}})
      .reply(200, {});
  const res = await drive.files.list();
  assert.deepEqual(res.data, {});
  // note: axios strips the `content-encoding` header from the response,
  // so that cannot be checked here.
}

async function testBody(drive: APIEndpoint) {
  nock(Utils.baseUrl).get('/drive/v2/files').reply(200);
  const res = await drive.files.list();
  assert.equal(res.config.headers['content-type'], null);
  assert.equal(res.request.body, null);
}

async function testBodyDelete(drive: APIEndpoint) {
  nock(Utils.baseUrl).delete('/drive/v2/files/test').reply(200);
  const res = await drive.files.delete({fileId: 'test'});
  assert.equal(res.config.headers['content-type'], null);
  assert.equal(res.request.body, null);
}

function testResponseError(drive: APIEndpoint, cb: (err?: Error) => void) {
  drive.files.list({q: 'hello'}, (err: NodeJS.ErrnoException) => {
    assert(err instanceof Error);
    assert.equal(err.message, 'Error!');
    assert.equal(err.code, 400);
    cb();
  });
}

function testNotObjectError(oauth2: APIEndpoint, cb: (err?: Error) => void) {
  oauth2.tokeninfo({access_token: 'hello'}, (err: NodeJS.ErrnoException) => {
    assert(err instanceof Error);
    assert.equal(err.message, 'invalid_grant');
    assert.equal(err.code, 400);
    cb();
  });
}

function testBackendError(
    urlshortener: APIEndpoint, cb: (err?: Error) => void) {
  const obj = {longUrl: 'http://google.com/'};
  urlshortener.url.insert(
      {resource: obj}, (err: NodeJS.ErrnoException, result: {}) => {
        assert(err instanceof Error);
        assert.equal(err.code, 500);
        assert.equal(err.message, 'There was an error!');
        assert.equal(result, null);
        cb();
      });
}

describe('Transporters', () => {
  let localDrive: APIEndpoint;
  let remoteDrive: APIEndpoint;
  let localOauth2: APIEndpoint;
  let remoteOauth2: APIEndpoint;
  let localUrlshortener: APIEndpoint;
  let remoteUrlshortener: APIEndpoint;
  before(async () => {
    nock.cleanAll();
    const google = new GoogleApis();
    nock.enableNetConnect();
    [remoteDrive, remoteOauth2, remoteUrlshortener] = await Promise.all([
      Utils.loadApi(google, 'drive', 'v2'),
      Utils.loadApi(google, 'oauth2', 'v2'),
      Utils.loadApi(google, 'urlshortener', 'v1')
    ]);
    nock.disableNetConnect();
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    const google = new GoogleApis();
    localDrive = google.drive('v2');
    localOauth2 = google.oauth2('v2');
    localUrlshortener = google.urlshortener('v1');
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

  it('should return errors within response body as instances of Error',
     (done) => {
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

  it('should return error message correctly when error is not an object',
     (done) => {
       const scope = nock(Utils.baseUrl)
                         .post('/oauth2/v2/tokeninfo?access_token=hello')
                         .times(2)
                         // Simulate an error returned via response body from
                         // Google's tokeninfo endpoint
                         .reply(400, {
                           error: 'invalid_grant',
                           error_description: 'Code was already redeemed.'
                         });

       testNotObjectError(localOauth2, () => {
         testNotObjectError(remoteOauth2, () => {
           scope.done();
           done();
         });
       });
     });

  it('should return 5xx responses as errors', (done) => {
    const scope = nock(Utils.baseUrl)
                      .post('/urlshortener/v1/url')
                      .times(2)
                      .reply(500, 'There was an error!');

    testBackendError(localUrlshortener, () => {
      testBackendError(remoteUrlshortener, () => {
        scope.done();
        done();
      });
    });
  });

  it('should return 304 responses as success', async () => {
    const scope = nock(Utils.baseUrl).get('/drive/v2/files').reply(304);
    const res = await localDrive.files.list();
    assert.equal(res.status, 304);
  });

  it('should handle 5xx responses that include errors', (done) => {
    const scope =
        nock(Utils.baseUrl).post('/urlshortener/v1/url').times(2).reply(500, {
          error: {message: 'There was an error!'}
        });

    testBackendError(localUrlshortener, () => {
      testBackendError(remoteUrlshortener, () => {
        scope.done();
        done();
      });
    });
  });

  it('should handle a Backend Error', (done) => {
    const scope =
        nock(Utils.baseUrl).post('/urlshortener/v1/url').times(2).reply(500, {
          error: {
            errors: [{
              domain: 'global',
              reason: 'backendError',
              message: 'There was an error!'
            }],
            code: 500,
            message: 'There was an error!'
          }
        });

    testBackendError(localUrlshortener, () => {
      testBackendError(remoteUrlshortener, () => {
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
