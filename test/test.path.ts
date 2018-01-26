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

import * as assert from 'assert';
import * as nock from 'nock';
import * as url from 'url';

import {GoogleApis} from '../src';

import {Utils} from './utils';

describe('Path params', () => {
  let localDrive, remoteDrive;

  before(async () => {
    nock.cleanAll();
    const google = new GoogleApis();
    nock.enableNetConnect();
    remoteDrive = await Utils.loadApi(google, 'drive', 'v2');
    nock.disableNetConnect();
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    const google = new GoogleApis();
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

  it('should be put in URL of path', (done) => {
    const p = '/drive/v2/files/abc123';
    nock(Utils.baseUrl).get(p).reply(200);
    localDrive.files.get({fileId: 'abc123'}, (err, res) => {
      if (err) {
        return done(err);
      }
      assert.equal(res.config.url, Utils.baseUrl + p);
      nock(Utils.baseUrl).get(p).reply(200);
      remoteDrive.files.get({fileId: 'abc123'}, (err2, res2) => {
        if (err2) {
          return done(err2);
        }
        assert.equal(res2.config.url, Utils.baseUrl + p);
        done();
      });
    });
  });

  it('should be put in URL of pathname', (done) => {
    const p = '/drive/v2/files/123abc';
    nock(Utils.baseUrl).get(p).reply(200);
    localDrive.files.get({fileId: '123abc'}, (err, res) => {
      if (err) {
        return done(err);
      }
      assert.equal(url.parse(res.config.url).path, p);
      nock(Utils.baseUrl).get(p).reply(200);
      remoteDrive.files.get({fileId: '123abc'}, (err2, res2) => {
        if (err2) {
          return done(err2);
        }
        assert.equal(url.parse(res.config.url).path, p);
        done();
      });
    });
  });

  it('should not be urlencoded', (done) => {
    const p = '/drive/v2/files/p@ram';
    nock(Utils.baseUrl).get(p).reply(200);
    localDrive.files.get({fileId: 'p@ram'}, (err, res) => {
      if (err) {
        return done(err);
      }
      const parm = url.parse(res.config.url).path!.split('/').pop();
      assert.equal(parm, 'p@ram');
      nock(Utils.baseUrl).get(p).reply(200);
      remoteDrive.files.get({fileId: 'p@ram'}, (err2, res2) => {
        if (err2) {
          return done(err2);
        }
        const parm = url.parse(res.config.url).path!.split('/').pop();
        assert.equal(parm, 'p@ram');
        done();
      });
    });
  });

  it('should keep query params null if only path params', (done) => {
    const p = '/drive/v2/files/123abc';
    nock(Utils.baseUrl).get(p).reply(200);
    localDrive.files.get({fileId: '123abc'}, (err, res) => {
      if (err) {
        return done(err);
      }
      assert.equal(Utils.getQs(res), null);
      nock(Utils.baseUrl).get(p).reply(200);
      remoteDrive.files.get({fileId: '123abc'}, (err2, res2) => {
        if (err2) {
          return done(err2);
        }
        assert.equal(Utils.getQs(res2), null);
        done();
      });
    });
  });

  it('should keep query params as is', (done) => {
    const p = '/drive/v2/files/123abc?hello=world';
    nock(Utils.baseUrl).get(p).reply(200);
    localDrive.files.get({fileId: '123abc', hello: 'world'}, (err, res) => {
      if (err) {
        return done(err);
      }
      assert.equal(Utils.getQs(res), 'hello=world');
      nock(Utils.baseUrl).get(p).reply(200);
      remoteDrive.files.get(
          {fileId: '123abc', hello: 'world'}, (err2, res2) => {
            if (err2) {
              return done(err2);
            }
            assert.equal(Utils.getQs(res), 'hello=world');
            done();
          });
    });
  });

  after(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});
