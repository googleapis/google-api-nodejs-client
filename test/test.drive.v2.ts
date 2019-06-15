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
import {APIEndpoint} from 'googleapis-common';
import * as nock from 'nock';
import {drive_v2, GoogleApis} from '../src';
import {Utils} from './utils';

const googleapis = new GoogleApis();

describe('drive:v2', () => {
  let localDrive: drive_v2.Drive, remoteDrive: APIEndpoint;

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

  it('should exist', done => {
    assert.notStrictEqual(typeof googleapis.drive, null);
    done();
  });

  it('should be a function', done => {
    assert.strictEqual(typeof googleapis.drive, 'function');
    done();
  });

  it('should create a drive object', done => {
    assert.notStrictEqual(typeof localDrive, 'undefined');
    assert.notStrictEqual(typeof remoteDrive, 'undefined');
    done();
  });

  it('should be frozen (immutable)', done => {
    assert.strictEqual(Object.isFrozen(localDrive), true);
    assert.strictEqual(Object.isFrozen(remoteDrive), true);
    done();
  });

  describe('.files', () => {
    it('should exist', done => {
      assert.notStrictEqual(typeof localDrive.files, 'undefined');
      assert.notStrictEqual(typeof remoteDrive.files, 'undefined');
      done();
    });

    it('should be an object', done => {
      assert.strictEqual(typeof localDrive.files, 'object');
      assert.strictEqual(typeof remoteDrive.files, 'object');
      done();
    });

    describe('.insert', () => {
      it('should exist', done => {
        assert.notStrictEqual(typeof localDrive.files.insert, 'undefined');
        assert.notStrictEqual(typeof remoteDrive.files.insert, 'undefined');
        done();
      });

      it('should be a function', done => {
        assert.strictEqual(typeof localDrive.files.insert, 'function');
        assert.strictEqual(typeof remoteDrive.files.insert, 'function');
        done();
      });

      it('should not return a Request object', done => {
        let req = localDrive.files.insert(Utils.noop);
        assert.strictEqual(req, undefined);
        req = remoteDrive.files.insert(Utils.noop);
        assert.strictEqual(req, undefined);
        done();
      });
    });

    describe('.get', () => {
      it('should exist', () => {
        assert.notStrictEqual(typeof localDrive.files.get, 'undefined');
        assert.notStrictEqual(typeof remoteDrive.files.get, 'undefined');
      });

      it('should be a function', () => {
        assert.strictEqual(typeof localDrive.files.get, 'function');
        assert.strictEqual(typeof remoteDrive.files.get, 'function');
      });

      it('should not return a Request object', () => {
        let req = localDrive.files.get({fileId: '123'}, Utils.noop);
        assert.strictEqual(req, undefined);
        req = remoteDrive.files.get({fileId: '123'}, Utils.noop);
        assert.strictEqual(req, undefined);
      });
    });
  });

  describe('.files.list()', () => {
    it('should not return missing param error', async () => {
      nock(Utils.baseUrl)
        .get('/drive/v2/files?q=hello')
        .times(2)
        .reply(200);
      await localDrive.files.list({q: 'hello'});
      await remoteDrive.files.list({q: 'hello'});
    });
  });

  after(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});
