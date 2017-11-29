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

import * as nock from 'nock';
import * as assert from 'power-assert';

import {Utils} from './utils';

const googleapis = require('../');

describe('Path params', () => {
  let localDrive, remoteDrive;

  before((done) => {
    nock.cleanAll();
    const google = new googleapis.GoogleApis();
    nock.enableNetConnect();
    Utils.loadApi(google, 'drive', 'v2', {}, (err, drive) => {
      nock.disableNetConnect();
      if (err) {
        return done(err);
      }
      remoteDrive = drive;
      done();
    });
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    const google = new googleapis.GoogleApis();
    localDrive = google.drive('v2');
  });

  it('should not throw error if not included and required', (done) => {
    assert.doesNotThrow(() => {
      localDrive.files.get({}, Utils.noop);
      remoteDrive.files.get({}, Utils.noop);
      done();
    });
  });

  it('should return an err object if not included and required', (done) => {
    localDrive.files.get({}, (err) => {
      assert.notEqual(err, null);
      remoteDrive.files.get({}, e => {
        assert.notEqual(e, null);
        done();
      });
    });
  });

  it('should be mentioned in err.message when missing', (done) => {
    localDrive.files.get({}, (err) => {
      assert.notEqual(
          err.message.indexOf('fileId'), -1,
          'Missing param not mentioned in error');
      remoteDrive.files.get({}, e => {
        assert.notEqual(
            e.message.indexOf('fileId'), -1,
            'Missing param not mentioned in error');
        done();
      });
    });
  });

  it('should return null response object if not included and required',
     (done) => {
       localDrive.files.get({}, (err, resp) => {
         assert(err);
         assert.equal(resp, null);
         remoteDrive.files.get({}, (e, resp2) => {
           assert(e);
           assert.equal(resp2, null);
           done();
         });
       });
     });

  it('should return null request object if not included and required', () => {
    let req = localDrive.files.get({}, Utils.noop);
    assert.equal(req, null);
    req = remoteDrive.files.get({}, Utils.noop);
    assert.equal(req, null);
  });

  it('should return null request object if not included and required and no callback',
     () => {
       let req = localDrive.files.get({}, Utils.noop);
       assert.equal(req, null);
       req = remoteDrive.files.get({}, Utils.noop);
       assert.equal(req, null);
     });

  it('should not be modifiable directly', () => {
    const options = {fileId: '123'};
    assert.doesNotThrow(() => {
      // should not modify options object
      localDrive.files.get(options, Utils.noop);
      localDrive.files.get(options, Utils.noop);
      remoteDrive.files.get(options, Utils.noop);
      remoteDrive.files.get(options, Utils.noop);
    });
  });

  it('should be put in URL of path', () => {
    let req = localDrive.files.get({fileId: 'abc123'}, Utils.noop);
    assert.equal(req.uri.path, '/drive/v2/files/abc123');
    req = remoteDrive.files.get({fileId: 'abc123'}, Utils.noop);
    assert.equal(req.uri.path, '/drive/v2/files/abc123');
  });

  it('should be put in URL of pathname', () => {
    let req = localDrive.files.get({fileId: '123abc'}, Utils.noop);
    assert.equal(req.uri.pathname, '/drive/v2/files/123abc');
    req = remoteDrive.files.get({fileId: '123abc'}, Utils.noop);
    assert.equal(req.uri.pathname, '/drive/v2/files/123abc');
  });

  it('should not be urlencoded', () => {
    let req = localDrive.files.get({fileId: 'p@ram'}, Utils.noop);
    assert.equal(req.uri.path.split('/').pop(), 'p@ram');
    req = remoteDrive.files.get({fileId: 'p@ram'}, Utils.noop);
    assert.equal(req.uri.path.split('/').pop(), 'p@ram');
  });

  it('should keep query params null if only path params', () => {
    let req = localDrive.files.get({fileId: '123abc'}, Utils.noop);
    assert.equal(req.uri.query, null);
    req = remoteDrive.files.get({fileId: '123abc'}, Utils.noop);
    assert.equal(req.uri.query, null);
  });

  it('should keep query params as is', () => {
    let req =
        localDrive.files.get({fileId: '123abc', hello: 'world'}, Utils.noop);
    assert.equal(req.uri.query, 'hello=world');
    req = remoteDrive.files.get({fileId: '123abc', hello: 'world'}, Utils.noop);
    assert.equal(req.uri.query, 'hello=world');
  });

  after(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});
