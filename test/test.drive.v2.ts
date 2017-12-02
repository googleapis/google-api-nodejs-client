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

const googleapis = require('../src/lib/googleapis');

describe('drive:v2', () => {
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

  it('should exist', (done) => {
    assert.notEqual(typeof googleapis.drive, null);
    done();
  });

  it('should be a function', (done) => {
    assert.equal(typeof googleapis.drive, 'function');
    done();
  });

  it('should create a drive object', (done) => {
    assert.notEqual(typeof localDrive, 'undefined');
    assert.notEqual(typeof remoteDrive, 'undefined');
    done();
  });

  it('should be frozen (immutable)', (done) => {
    assert.equal(Object.isFrozen(localDrive), true);
    assert.equal(Object.isFrozen(remoteDrive), true);
    done();
  });

  describe('.files', () => {
    it('should exist', (done) => {
      assert.notEqual(typeof localDrive.files, 'undefined');
      assert.notEqual(typeof remoteDrive.files, 'undefined');
      done();
    });

    it('should be an object', (done) => {
      assert.equal(typeof localDrive.files, 'object');
      assert.equal(typeof remoteDrive.files, 'object');
      done();
    });

    describe('.insert', () => {
      it('should exist', (done) => {
        assert.notEqual(typeof localDrive.files.insert, 'undefined');
        assert.notEqual(typeof remoteDrive.files.insert, 'undefined');
        done();
      });

      it('should be a function', (done) => {
        assert.equal(typeof localDrive.files.insert, 'function');
        assert.equal(typeof remoteDrive.files.insert, 'function');
        done();
      });

      it('should return a Request object', (done) => {
        let req = localDrive.files.insert({}, Utils.noop);
        assert.equal(req.constructor.name, 'Request');
        req = remoteDrive.files.insert({}, Utils.noop);
        assert.equal(req.constructor.name, 'Request');
        done();
      });
    });

    describe('.get', () => {
      it('should exist', () => {
        assert.notEqual(typeof localDrive.files.get, 'undefined');
        assert.notEqual(typeof remoteDrive.files.get, 'undefined');
      });

      it('should be a function', () => {
        assert.equal(typeof localDrive.files.get, 'function');
        assert.equal(typeof remoteDrive.files.get, 'function');
      });

      it('should return a Request object', () => {
        let req = localDrive.files.get({fileId: '123'}, Utils.noop);
        assert.equal(req.constructor.name, 'Request');
        req = remoteDrive.files.get({fileId: '123'}, Utils.noop);
        assert.equal(req.constructor.name, 'Request');
      });

      it('should use logError callback if no callback specified', (done) => {
        const scope = nock('https://www.googleapis.com')
                          .get('/drive/v2/files?q=hello')
                          .times(2)
                          .reply(501, {error: 'not a real error'});

        // logError internally uses console.error - let's monkey-patch the
        // function to intercept calls to it, then restore the original function
        // once we are done testing
        const origFn = console.error;
        let count = 0;
        console.error = (err) => {
          count++;
          assert.equal(err.code, 501);
          if (count === 2) {
            console.error = origFn;
            scope.done();
            done();
          }
        };

        assert.doesNotThrow(() => {
          localDrive.files.list({q: 'hello'});
          remoteDrive.files.list({q: 'hello'});
        });
      });
    });
  });

  describe('._options', () => {
    it('should exist', () => {
      assert.notEqual(typeof localDrive._options, 'undefined');
      assert.notEqual(typeof remoteDrive._options, 'undefined');
    });

    it('should be an object', () => {
      assert.equal(typeof localDrive._options, 'object');
      assert.equal(typeof remoteDrive._options, 'object');
    });
  });

  describe('.files.list()', () => {
    it('should not return missing param error', (done) => {
      const scope = nock('https://www.googleapis.com')
                        .get('/drive/v2/files?q=hello')
                        .times(2)
                        .reply(200);
      localDrive.files.list({q: 'hello'}, (err) => {
        assert.equal(err, null);
        remoteDrive.files.list({q: 'hello'}, err2 => {
          assert.equal(err2, null);
          scope.done();
          done();
        });
      });
    });
  });

  after(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});
