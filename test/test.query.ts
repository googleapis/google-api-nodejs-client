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
import utils from './utils';
let googleapis = require('../');

describe('Query params', () => {
  let localDrive, remoteDrive;
  let localGmail, remoteGmail;

  before((done) => {
    nock.cleanAll();
    const google = new googleapis.GoogleApis();
    nock.enableNetConnect();
    async.parallel([
      (cb) => {
        utils.loadApi(google, 'drive', 'v2', {}, cb);
      },
      (cb) => {
        utils.loadApi(google, 'gmail', 'v1', {}, cb);
      }
    ], (err, apis) => {
      if (err) {
        return done(err);
      }
      remoteDrive = apis[0];
      remoteGmail = apis[1];
      nock.disableNetConnect();
      done();
    });
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    const google = new googleapis.GoogleApis();
    localDrive = google.drive('v2');
    localGmail = google.gmail('v1');
  });

  it('should not append ? with no query parameters', () => {
    let uri = localDrive.files.get({ fileId: 'ID' }, utils.noop).uri;
    assert.equal(-1, uri.href.indexOf('?'));
    uri = remoteDrive.files.get({ fileId: 'ID' }, utils.noop).uri;
    assert.equal(-1, uri.href.indexOf('?'));
  });

  it('should be null if no object passed', () => {
    let req = localDrive.files.list(utils.noop);
    assert.equal(req.uri.query, null);
    req = remoteDrive.files.list(utils.noop);
    assert.equal(req.uri.query, null);
  });

  it('should be null if params passed are in path', () => {
    let req = localDrive.files.get({ fileId: '123' }, utils.noop);
    assert.equal(req.uri.query, null);
    req = remoteDrive.files.get({ fileId: '123' }, utils.noop);
    assert.equal(req.uri.query, null);
  });

  it('should be set if params passed are optional query params', () => {
    let req = localDrive.files.get({ fileId: '123', updateViewedDate: true }, utils.noop);
    assert.equal(req.uri.query, 'updateViewedDate=true');
    req = remoteDrive.files.get({ fileId: '123', updateViewedDate: true }, utils.noop);
    assert.equal(req.uri.query, 'updateViewedDate=true');
  });

  it('should be set if params passed are unknown params', () => {
    let req = localDrive.files.get({ fileId: '123', madeThisUp: 'hello' }, utils.noop);
    assert.equal(req.uri.query, 'madeThisUp=hello');
    req = remoteDrive.files.get({ fileId: '123', madeThisUp: 'hello' }, utils.noop);
    assert.equal(req.uri.query, 'madeThisUp=hello');
  });

  it('should be set if params passed are aliased names', () => {
    let req = localDrive.files.get({ fileId: '123', resource_: 'hello' }, utils.noop);
    assert.equal(req.uri.query, 'resource=hello');
    req = remoteDrive.files.get({ fileId: '123', resource_: 'hello' }, utils.noop);
    assert.equal(req.uri.query, 'resource=hello');
  });

  it('should chain together with & in order', () => {
    let req = localDrive.files.get({
      fileId: '123',
      madeThisUp: 'hello',
      thisToo: 'world'
    }, utils.noop);
    assert.equal(req.uri.query, 'madeThisUp=hello&thisToo=world');
    req = remoteDrive.files.get({
      fileId: '123',
      madeThisUp: 'hello',
      thisToo: 'world'
    }, utils.noop);
    assert.equal(req.uri.query, 'madeThisUp=hello&thisToo=world');
  });

  it('should not include auth if auth is an OAuth2Client object', () => {
    const oauth2client = new googleapis.auth.OAuth2(
      'CLIENT_ID',
      'CLIENT_SECRET',
      'REDIRECT_URI'
    );
    oauth2client.setCredentials({ access_token: 'abc123' });
    let req = localDrive.files.get({
      fileId: '123',
      auth: oauth2client
    }, utils.noop);
    assert.equal(req.uri.query, null);
    req = remoteDrive.files.get({
      fileId: '123',
      auth: oauth2client
    }, utils.noop);
    assert.equal(req.uri.query, null);
  });

  it('should handle multi-value query params properly', () => {
    let req = localGmail.users.messages.get({
      userId: 'me',
      id: 'abc123',
      metadataHeaders: ['To', 'Date']
    }, utils.noop);
    assert.equal(req.uri.query, 'metadataHeaders=To&metadataHeaders=Date');
    req = remoteGmail.users.messages.get({
      userId: 'me',
      id: 'abc123',
      metadataHeaders: ['To', 'Date']
    }, utils.noop);
    assert.equal(req.uri.query, 'metadataHeaders=To&metadataHeaders=Date');
  });

  after(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});
