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
import utils from './utils';
const googleapis = require('../');


describe('JWT client', () => {
  it('should expose the default auth module', () => {
    assert(googleapis.auth.getApplicationDefault);
  });
  it('should create a jwt through googleapis', () => {
    const jwt = new googleapis.auth.JWT(
      'someone@somewhere.com', 'file1', 'key1', 'scope1', 'subject1');
    assert.equal(jwt.email, 'someone@somewhere.com');
    assert.equal(jwt.keyFile, 'file1');
    assert.equal(jwt.key, 'key1');
    assert.equal(jwt.scopes, 'scope1');
    assert.equal(jwt.subject, 'subject1');
  });
  it('should create scoped JWT', () => {
    const jwt = new googleapis.auth.JWT('someone@somewhere.com', 'file1', 'key1', null, 'subject1');
    assert.equal(jwt.scopes, null);
    assert.equal(jwt.createScopedRequired(), true);

    // Create a scoped version of the token now.
    const jwt2 = jwt.createScoped('scope1');

    // The original token should be unchanged.
    assert.equal(jwt.scopes, null);
    assert.equal(jwt.createScopedRequired(), true);

    // The new token should have scopes.
    assert.equal(jwt2.scopes, 'scope1');
    assert.equal(jwt2.createScopedRequired(), false);
  });
});

describe('Compute client', () => {

  it('should create a computeclient', () => {
    const compute = new googleapis.auth.Compute();
    assert.equal(compute.createScopedRequired(), false);
  });
});

function testNoTokens (urlshortener, oauth2client, cb) {
  urlshortener.url.get({
    shortUrl: '123',
    auth: oauth2client
  }, (err, result) => {
    assert.equal(err.message, 'No access, refresh token or API key is set.');
    assert.equal(result, null);
    cb();
  });
}

function testNoBearer (urlshortener, oauth2client, cb) {
  urlshortener.url.list({
    auth: oauth2client
  }, (err) => {
    assert.equal(oauth2client.credentials.token_type, 'Bearer');
    cb(err);
  });
}

function testExpired (drive, oauth2client, now, cb) {
  drive.files.get({
    fileId: 'wat',
    auth: oauth2client
  }, () => {
    const expiryDate = oauth2client.credentials.expiry_date;
    assert.notEqual(expiryDate, undefined);
    assert(expiryDate > now);
    assert(expiryDate < now + 5000);
    assert.equal(oauth2client.credentials.refresh_token, 'abc');
    assert.equal(oauth2client.credentials.access_token, 'abc123');
    cb();
  });
}

function testNoAccessToken (drive, oauth2client, now, cb) {
  drive.files.get({
    fileId: 'wat',
    auth: oauth2client
  }, () => {
    const expiryDate = oauth2client.credentials.expiry_date;
    assert.notEqual(expiryDate, undefined);
    assert(expiryDate > now);
    assert(expiryDate < now + 4000);
    assert.equal(oauth2client.credentials.refresh_token, 'abc');
    assert.equal(oauth2client.credentials.access_token, 'abc123');
    cb();
  });
}

describe('OAuth2 client', () => {
  let localDrive, remoteDrive;
  let localUrlshortener, remoteUrlshortener;

  before((done) => {
    nock.cleanAll();
    const google = new googleapis.GoogleApis();
    nock.enableNetConnect();
    async.parallel([
      (cb) => {
        utils.loadApi(google, 'drive', 'v2', {}, cb);
      },
      (cb) => {
        utils.loadApi(google, 'urlshortener', 'v1', {}, cb);
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
    localDrive = google.drive('v2');
    localUrlshortener = google.urlshortener('v1');
  });

  const CLIENT_ID = 'CLIENT_ID';
  const CLIENT_SECRET = 'CLIENT_SECRET';
  const REDIRECT_URI = 'REDIRECT';

  it('should return err if no access or refresh token is set', (done) => {
    const oauth2client = new googleapis.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
    );
    testNoTokens(localUrlshortener, oauth2client, () => {
      testNoTokens(remoteUrlshortener, oauth2client, done);
    });
  });

  it('should not error if only refresh token is set', () => {
    const oauth2client = new googleapis.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
    );
    oauth2client.credentials = { refresh_token: 'refresh_token' };
    assert.doesNotThrow(() => {
      const options = { auth: oauth2client, shortUrl: '...' };
      localUrlshortener.url.get(options, utils.noop);
      remoteUrlshortener.url.get(options, utils.noop);
    });
  });

  it('should set access token type to Bearer if none is set', (done) => {
    const oauth2client = new googleapis.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
    );
    oauth2client.credentials = { access_token: 'foo', refresh_token: '' };
    const scope = nock('https://www.googleapis.com')
      .get('/urlshortener/v1/url/history')
      .times(2)
      .reply(200);

    testNoBearer(localUrlshortener, oauth2client, (err) => {
      if (err) {
        return done(err);
      }
      testNoBearer(remoteUrlshortener, oauth2client, (err) => {
        if (err) {
          return done(err);
        }
        scope.done();
        done();
      });
    });
  });

  it('should refresh if access token is expired', (done) => {
    const scope = nock('https://accounts.google.com')
        .post('/o/oauth2/token')
        .times(2)
        .reply(200, { access_token: 'abc123', expires_in: 1 });
    let oauth2client = new googleapis.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
    );
    let now = new Date().getTime();
    let twoSecondsAgo = now - 2000;
    oauth2client.credentials = { refresh_token: 'abc', expiry_date: twoSecondsAgo };
    testExpired(localDrive, oauth2client, now, () => {
      oauth2client = new googleapis.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
      );
      now = new Date().getTime();
      twoSecondsAgo = now - 2000;
      oauth2client.credentials = {
        refresh_token: 'abc',
        expiry_date: twoSecondsAgo
      };
      testExpired(remoteDrive, oauth2client, now, () => {
        scope.done();
        done();
      });
    });
  });

  it('should make request if access token not expired', (done) => {
    const scope = nock('https://accounts.google.com')
        .post('/o/oauth2/token')
        .times(2)
        .reply(200, { access_token: 'abc123', expires_in: 10000 });
    let oauth2client = new googleapis.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
    );
    let now = (new Date()).getTime();
    let tenSecondsFromNow = now + 10000;
    oauth2client.credentials = {
      access_token: 'abc123',
      refresh_token: 'abc',
      expiry_date: tenSecondsFromNow
    };
    localDrive.files.get({ fileId: 'wat', auth: oauth2client }, () => {
      assert.equal(JSON.stringify(oauth2client.credentials), JSON.stringify({
        access_token: 'abc123',
        refresh_token: 'abc',
        expiry_date: tenSecondsFromNow,
        token_type: 'Bearer'
      }));

      assert.throws(() => {
        scope.done();
      }, 'AssertionError');
      oauth2client = new googleapis.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
      );
      now = (new Date()).getTime();
      tenSecondsFromNow = now + 10000;
      oauth2client.credentials = {
        access_token: 'abc123',
        refresh_token: 'abc',
        expiry_date: tenSecondsFromNow
      };

      remoteDrive.files.get({ fileId: 'wat', auth: oauth2client }, () => {
        assert.equal(JSON.stringify(oauth2client.credentials), JSON.stringify({
          access_token: 'abc123',
          refresh_token: 'abc',
          expiry_date: tenSecondsFromNow,
          token_type: 'Bearer'
        }));

        assert.throws(() => {
          scope.done();
        }, 'AssertionError');
        nock.cleanAll();
        done();
      });
    });
  });

  it('should refresh if have refresh token but no access token', (done) => {
    const scope = nock('https://accounts.google.com')
        .post('/o/oauth2/token')
        .times(2)
        .reply(200, { access_token: 'abc123', expires_in: 1 });
    let oauth2client = new googleapis.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI
    );
    let now = (new Date()).getTime();
    oauth2client.credentials = { refresh_token: 'abc' };
    testNoAccessToken(localDrive, oauth2client, now, () => {
      now = (new Date()).getTime();
      oauth2client.credentials = { refresh_token: 'abc' };
      testNoAccessToken(remoteDrive, oauth2client, now, () => {
        scope.done();
        done();
      });
    });
  });

  describe('revokeCredentials()', () => {
    it('should revoke credentials if access token present', (done) => {
      const scope = nock('https://accounts.google.com')
          .get('/o/oauth2/revoke?token=abc')
          .reply(200, { success: true });
      const oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
      oauth2client.credentials = { access_token: 'abc', refresh_token: 'abc' };
      oauth2client.revokeCredentials((err, result) => {
        assert.equal(err, null);
        assert.equal(result.success, true);
        assert.equal(JSON.stringify(oauth2client.credentials), '{}');
        scope.done();
        done();
      });
    });

    it('should clear credentials and return error if no access token to revoke', (done) => {
      const oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
      oauth2client.credentials = { refresh_token: 'abc' };
      oauth2client.revokeCredentials((err, result) => {
        assert.equal(err.message, 'No access token to revoke.');
        assert.equal(result, null);
        assert.equal(JSON.stringify(oauth2client.credentials), '{}');
        done();
      });
    });
  });

  describe('getToken()', () => {
    it('should return expiry_date', (done) => {
      const now = (new Date()).getTime();
      const scope = nock('https://accounts.google.com')
          .post('/o/oauth2/token')
          .reply(200, { access_token: 'abc', refresh_token: '123', expires_in: 10 });
      const oauth2client = new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
      oauth2client.getToken('code here', (err, tokens) => {
        if (err) {
          return done(err);
        }
        assert(tokens.expiry_date >= now + (10 * 1000));
        assert(tokens.expiry_date <= now + (15 * 1000));
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
