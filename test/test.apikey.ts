// Copyright 2014-2016, Google, Inc.
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
const googleapis = require('../lib/googleapis');

function testGet (drive) {
  const req = drive.files.get({
    fileId: '123',
    auth: 'APIKEY'
  }, Utils.noop);
  assert.equal(req.uri.query, 'key=APIKEY');
}

function testParams2 (drive) {
  const req = drive.files.get({
    fileId: '123',
    auth: 'API KEY'
  }, Utils.noop);
  assert.equal(req.uri.query, 'key=API%20KEY');
}

function testKeyParam (drive) {
  const req = drive.files.get({
    fileId: '123',
    auth: 'API KEY',
    key: 'abc123'
  }, Utils.noop);
  assert.equal(req.uri.query, 'key=abc123');
}

function testAuthKey (urlshortener) {
  const req = urlshortener.url.list({
    auth: 'YOUR API KEY'
  }, Utils.noop);
  assert.equal(req.uri.href.indexOf('key=YOUR%20API%20KEY') > 0, true);
}

describe('API key', () => {
  let localDrive, remoteDrive;
  let localUrlshortener, remoteUrlshortener;
  let authClient;

  before((done) => {
    nock.cleanAll();
    const google = new googleapis.GoogleApis();
    nock.enableNetConnect();
    async.parallel([
      (cb) => {
        Utils.loadApi(google, 'drive', 'v2', {}, cb);
      },
      (cb) => {
        Utils.loadApi(google, 'urlshortener', 'v1', {}, cb);
      }
    ], (err, apis) => {
      if (err) {
        return done(err);
      }
      remoteDrive = apis[0];
      remoteUrlshortener = apis[1];
      nock.disableNetConnect();
      done();
    });
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    const google = new googleapis.GoogleApis();
    const OAuth2 = google.auth.OAuth2;
    authClient = new OAuth2('CLIENT_ID', 'CLIENT_SECRET', 'REDIRECT_URL');
    authClient.credentials = { access_token: 'abc123' };
    localDrive = google.drive('v2');
    localUrlshortener = google.urlshortener('v1');
  });

  it('should include auth APIKEY as key=<APIKEY>', () => {
    testGet(localDrive);
    testGet(remoteDrive);
  });

  it('should properly escape params E.g. API KEY to API%20KEY', () => {
    testParams2(localDrive);
    testParams2(remoteDrive);
  });

  it('should use key param over auth apikey param if both provided', () => {
    testKeyParam(localDrive);
    testKeyParam(remoteDrive);
  });

  it('should set API key parameter if it is present', () => {
    testAuthKey(localUrlshortener);
    testAuthKey(remoteUrlshortener);
  });

  after(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});
