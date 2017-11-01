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
import * as nock from 'nock';
import utils from './utils';
const googleapis = require('../lib/googleapis');

describe('Options', () => {
  let authClient;

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
  });

  it('should be a function', () => {
    const google = new googleapis.GoogleApis();
    assert.equal(typeof google.options, 'function');
  });

  it('should expose _options', () => {
    const google = new googleapis.GoogleApis();
    google.options({ hello: 'world' });
    assert.equal(JSON.stringify(google._options), JSON.stringify({ hello: 'world' }));
  });

  it('should expose _options values', () => {
    const google = new googleapis.GoogleApis();
    google.options({ hello: 'world' });
    assert.equal(google._options.hello, 'world');
  });

  it('should promote endpoint options over global options', () => {
    const google = new googleapis.GoogleApis();
    google.options({ hello: 'world' });
    const drive = google.drive({ version: 'v2', hello: 'changed' });
    const req = drive.files.get({ fileId: '123' }, utils.noop);
    assert.equal(req.hello, 'changed');
  });

  it('should support global request params', (done) => {
    const google = new googleapis.GoogleApis();
    google.options({ params: { myParam: '123' } });
    const drive = google.drive('v2');
    let req = drive.files.get({ fileId: '123' }, utils.noop);
    // If the default param handling is broken, query might be undefined, thus concealing the
    // assertion message with some generic "cannot call .indexOf of undefined"
    let query = req.uri.query || '';
    assert.notEqual(query.indexOf('myParam=123'), -1, 'Default param not found in query');
    nock.enableNetConnect();
    utils.loadApi(google, 'drive', 'v2', {}, (err, drive) => {
      nock.disableNetConnect();
      if (err) {
        return done(err);
      }
      req = drive.files.get({ fileId: '123' }, utils.noop);
      // If the default param handling is broken, query might be undefined, thus concealing the
      // assertion message with some generic "cannot call .indexOf of undefined"
      query = req.uri.query || '';
      assert.notEqual(query.indexOf('myParam=123'), -1, 'Default param not found in query');
      done();
    });
  });

  it('should promote auth apikey options on request basis', () => {
    const google = new googleapis.GoogleApis();
    google.options({ auth: 'apikey1' });
    const drive = google.drive({ version: 'v2', auth: 'apikey2' });
    const req = drive.files.get({ auth: 'apikey3', fileId: 'woot' }, utils.noop);
    assert.equal(req.uri.query, 'key=apikey3');
  });

  it('should apply google options to request object like proxy', () => {
    const google = new googleapis.GoogleApis();
    google.options({ proxy: 'http://proxy.example.com' });
    const drive = google.drive({ version: 'v2', auth: 'apikey2' });
    const req = drive.files.get({ auth: 'apikey3', fileId: 'woot' }, utils.noop);
    assert.equal(req.proxy.host, 'proxy.example.com');
    assert.equal(req.proxy.protocol, 'http:');
  });

  it('should apply endpoint options to request object like proxy', () => {
    const google = new googleapis.GoogleApis();
    const drive = google.drive({ version: 'v2', auth: 'apikey2', proxy: 'http://proxy.example.com' });
    const req = drive.files.get({ auth: 'apikey3', fileId: 'woot' }, utils.noop);
    assert.equal(req.proxy.host, 'proxy.example.com');
    assert.equal(req.proxy.protocol, 'http:');
    assert.equal(req.uri.query, 'key=apikey3');
  });

  it('should allow overriding endpoint options', () => {
    const google = new googleapis.GoogleApis();
    const drive = google.drive('v3');
    const req = drive.files.get({ fileId: 'woot' }, { url: 'https://myproxy.com/drive/v3/files/{fileId}', encoding: null }, utils.noop);
    assert.equal(req.url, 'https://myproxy.com/drive/v3/files/woot', 'Request used overridden url.');
    assert.equal(req.encoding, null, 'Request used overridden encoding.');
  });

  it('should apply endpoint options like proxy to oauth transporter', () => {
    const google = new googleapis.GoogleApis();
    const OAuth2 = google.auth.OAuth2;
    authClient = new OAuth2('CLIENTID', 'CLIENTSECRET', 'REDIRECTURI');
    authClient.credentials = { access_token: 'abc' };
    const drive = google.drive({ version: 'v2', auth: 'apikey2', proxy: 'http://proxy.example.com' });
    const req = drive.files.get({ auth: authClient, fileId: 'woot' }, utils.noop);
    assert.equal(req.proxy.host, 'proxy.example.com');
    assert.equal(req.proxy.protocol, 'http:');
    assert.equal(req.headers.Authorization, 'Bearer abc');
  });

  it('should allow overriding rootUrl via options', () => {
    const google = new googleapis.GoogleApis();
    const drive = google.drive('v3');
    const reqWithSlash = drive.files.get({ fileId: 'woot' }, { rootUrl: 'https://myrooturl.com/' }, utils.noop);
    assert.equal(reqWithSlash.url, 'https://myrooturl.com/drive/v3/files/woot', 'Request used overridden rootUrl with trailing slash.');
    const reqWithoutSlash = drive.files.get({ fileId: 'woot' }, { rootUrl: 'https://myrooturl.com' }, utils.noop);
    assert.equal(reqWithoutSlash.url, 'https://myrooturl.com/drive/v3/files/woot', 'Request used overridden rootUrl.');
  });

  after(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});
