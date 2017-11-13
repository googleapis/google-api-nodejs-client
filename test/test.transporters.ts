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
import * as nock from 'nock';
import {Utils} from './utils';
const googleapis = require('../');

function testHeaders (drive) {
  const req = drive.comments.insert({
    fileId: 'a',
    headers: {
      'If-None-Match': '12345'
    }
  }, Utils.noop);
  assert.equal(req.headers['If-None-Match'], '12345');
}

function testContentType (drive) {
  const req = drive.comments.insert({
    fileId: 'a'
  }, Utils.noop);
  assert.equal(req.headers['content-type'], 'application/json');
}

function testBody (drive) {
  const req = drive.files.list(Utils.noop);
  assert.equal(req.headers['content-type'], null);
  assert.equal(req.body, null);
}

function testBodyDelete (drive) {
  const req = drive.files.delete({
    fileId: 'test'
  }, Utils.noop);
  assert.equal(req.headers['content-type'], null);
  assert.equal(req.body, null);
}

function testResponseError (drive, cb) {
  drive.files.list({ q: 'hello' }, (err) => {
    assert(err instanceof Error);
    assert.equal(err.message, 'Error!');
    assert.equal(err.code, 400);
    cb();
  });
}

function testNotObjectError (oauth2, cb) {
  oauth2.tokeninfo({ access_token: 'hello' }, (err) => {
    assert(err instanceof Error);
    assert.equal(err.message, 'invalid_grant');
    assert.equal(err.code, 400);
    cb();
  });
}

function testBackendError (urlshortener, cb) {
  const obj = { longUrl: 'http://google.com/' };
  urlshortener.url.insert({ resource: obj }, (err, result) => {
    assert(err instanceof Error);
    assert.equal(err.code, 500);
    assert.equal(err.message, 'There was an error!');
    assert.equal(result, null);
    cb();
  });
}

describe('Transporters', () => {
  let localDrive, remoteDrive;
  let localOauth2, remoteOauth2;
  let localUrlshortener, remoteUrlshortener;

  before((done) => {
    nock.cleanAll();
    const google = new googleapis.GoogleApis();
    nock.enableNetConnect();
    async.parallel([
      (cb) => {
        Utils.loadApi(google, 'drive', 'v2', {}, cb);
      },
      (cb) => {
        Utils.loadApi(google, 'oauth2', 'v2', {}, cb);
      },
      (cb) => {
        Utils.loadApi(google, 'urlshortener', 'v1', {}, cb);
      }
    ], (err, apis) => {
      if (err) {
        return done(err);
      }
      remoteDrive = apis[0];
      remoteOauth2 = apis[1];
      remoteUrlshortener = apis[2];
      nock.disableNetConnect();
      done();
    });
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    const google = new googleapis.GoogleApis();
    localDrive = google.drive('v2');
    localOauth2 = google.oauth2('v2');
    localUrlshortener = google.urlshortener('v1');
  });

  it('should add headers to the request from params', () => {
    testHeaders(localDrive);
    testHeaders(remoteDrive);
  });

  it('should automatically add content-type for POST requests', () => {
    testContentType(localDrive);
    testContentType(remoteDrive);
  });

  it('should not add body for GET requests', () => {
    testBody(localDrive);
    testBody(remoteDrive);
  });

  it('should not add body for DELETE requests', () => {
    testBodyDelete(localDrive);
    testBodyDelete(remoteDrive);
  });

  it('should return errors within response body as instances of Error', (done) => {
    const scope = nock('https://www.googleapis.com')
      .get('/drive/v2/files?q=hello')
      .times(2)
      // Simulate an error returned via response body from Google's API endpoint
      .reply(400, { error: { code: 400, message: 'Error!' } });

    testResponseError(localDrive, () => {
      testResponseError(remoteDrive, () => {
        scope.done();
        done();
      });
    });
  });

  it('should return error message correctly when error is not an object', (done) => {
    const scope = nock('https://www.googleapis.com')
      .post('/oauth2/v2/tokeninfo?access_token=hello')
      .times(2)
      // Simulate an error returned via response body from Google's tokeninfo endpoint
      .reply(400, { error: 'invalid_grant', error_description: 'Code was already redeemed.' });

    testNotObjectError(localOauth2, () => {
      testNotObjectError(remoteOauth2, () => {
        scope.done();
        done();
      });
    });
  });

  it('should return 5xx responses as errors', (done) => {
    const scope = nock('https://www.googleapis.com')
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

  it('should handle 5xx responses that include errors', (done) => {
    const scope = nock('https://www.googleapis.com')
      .post('/urlshortener/v1/url')
      .times(2)
      .reply(500, { error: { message: 'There was an error!' } });

    testBackendError(localUrlshortener, () => {
      testBackendError(remoteUrlshortener, () => {
        scope.done();
        done();
      });
    });
  });

  it('should handle a Backend Error', (done) => {
    const scope = nock('https://www.googleapis.com')
      .post('/urlshortener/v1/url')
      .times(2)
      .reply(500, {
        error: {
          errors: [
            {
              domain: 'global',
              reason: 'backendError',
              message: 'There was an error!'
            }
          ],
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
