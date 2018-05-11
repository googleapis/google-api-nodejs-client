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
import {OAuth2Client} from 'google-auth-library';
import nock from 'nock';
import {GoogleApis} from '../src';
import {APIEndpoint} from '../src/lib/api';
import {Utils} from './utils';

const googleapis = new GoogleApis();

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
    const jwt = new googleapis.auth.JWT(
        'someone@somewhere.com', 'file1', 'key1', undefined, 'subject1');
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

async function testNoTokens(
    urlshortener: APIEndpoint, oauth2client: OAuth2Client) {
  try {
    await urlshortener.url.get({shortUrl: '123', auth: oauth2client});
    assert.fail('expected to throw');
  } catch (e) {
    assert.equal(e.message, 'No access, refresh token or API key is set.');
  }
}

async function testNoBearer(
    urlshortener: APIEndpoint, oauth2client: OAuth2Client) {
  await urlshortener.url.list({auth: oauth2client});
  assert.equal(oauth2client.credentials.token_type, 'Bearer');
}

async function testExpired(
    drive: APIEndpoint, oauth2client: OAuth2Client, now: number) {
  nock(Utils.baseUrl).get('/drive/v2/files/wat').reply(200);
  await drive.files.get({fileId: 'wat', auth: oauth2client});
  const expiryDate = oauth2client.credentials.expiry_date;
  assert.notEqual(expiryDate, undefined);
  if (!expiryDate) return;
  assert(expiryDate > now);
  assert(expiryDate < now + 5000);
  assert.equal(oauth2client.credentials.refresh_token, 'abc');
  assert.equal(oauth2client.credentials.access_token, 'abc123');
}

async function testNoAccessToken(
    drive: APIEndpoint, oauth2client: OAuth2Client, now: number) {
  nock(Utils.baseUrl).get('/drive/v2/files/wat').reply(200);
  await drive.files.get({fileId: 'wat', auth: oauth2client});
  const expiryDate = oauth2client.credentials.expiry_date;
  assert.notEqual(expiryDate, undefined);
  assert(expiryDate! > now);
  assert(expiryDate! < now + 4000);
  assert.equal(oauth2client.credentials.refresh_token, 'abc');
  assert.equal(oauth2client.credentials.access_token, 'abc123');
}

describe('OAuth2 client', () => {
  let localDrive: APIEndpoint, remoteDrive: APIEndpoint;
  let localUrlshortener: APIEndpoint, remoteUrlshortener: APIEndpoint;

  before(async () => {
    nock.cleanAll();
    const google = new GoogleApis();
    nock.enableNetConnect();
    [remoteDrive, remoteUrlshortener] = await Promise.all([
      Utils.loadApi(google, 'drive', 'v2'),
      Utils.loadApi(google, 'urlshortener', 'v1')
    ]);
    nock.disableNetConnect();
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    const google = new GoogleApis();
    localDrive = google.drive('v2');
    localUrlshortener = google.urlshortener('v1');
  });

  const CLIENT_ID = 'CLIENT_ID';
  const CLIENT_SECRET = 'CLIENT_SECRET';
  const REDIRECT_URI = 'REDIRECT';

  it('should return err if no access or refresh token is set', async () => {
    const oauth2client =
        new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    await testNoTokens(localUrlshortener, oauth2client);
    await testNoTokens(remoteUrlshortener, oauth2client);
  });

  it('should not error if only refresh token is set', () => {
    const oauth2client =
        new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2client.credentials = {refresh_token: 'refresh_token'};
    assert.doesNotThrow(() => {
      const options = {auth: oauth2client, shortUrl: '...'};
      localUrlshortener.url.get(options, Utils.noop);
      remoteUrlshortener.url.get(options, Utils.noop);
    });
  });

  it('should set access token type to Bearer if none is set', async () => {
    const oauth2client =
        new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2client.credentials = {access_token: 'foo', refresh_token: ''};
    const scope = nock(Utils.baseUrl)
                      .get('/urlshortener/v1/url/history')
                      .times(2)
                      .reply(200);

    await testNoBearer(localUrlshortener, oauth2client);
    await testNoBearer(remoteUrlshortener, oauth2client);
  });

  it('should refresh if access token is expired', async () => {
    const scope = nock('https://www.googleapis.com')
                      .post('/oauth2/v4/token')
                      .times(2)
                      .reply(200, {access_token: 'abc123', expires_in: 1});
    let oauth2client =
        new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    let now = new Date().getTime();
    let twoSecondsAgo = now - 2000;
    oauth2client.credentials = {
      refresh_token: 'abc',
      expiry_date: twoSecondsAgo
    };
    await testExpired(localDrive, oauth2client, now);
    oauth2client =
        new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    now = new Date().getTime();
    twoSecondsAgo = now - 2000;
    oauth2client.credentials = {
      refresh_token: 'abc',
      expiry_date: twoSecondsAgo
    };
    await testExpired(remoteDrive, oauth2client, now);
  });

  it('should make request if access token not expired', async () => {
    const scope = nock('https://www.googleapis.com')
                      .post('/oauth2/v4/token')
                      .times(2)
                      .reply(200, {access_token: 'abc123', expires_in: 10000});
    let oauth2client =
        new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    let now = (new Date()).getTime();
    let tenMinutesFromNow = now + 1000 * 60 * 10;
    oauth2client.credentials = {
      access_token: 'abc123',
      refresh_token: 'abc',
      expiry_date: tenMinutesFromNow
    };

    nock(Utils.baseUrl).get('/drive/v2/files/wat').reply(200);
    await localDrive.files.get({fileId: 'wat', auth: oauth2client});
    assert.equal(JSON.stringify(oauth2client.credentials), JSON.stringify({
      access_token: 'abc123',
      refresh_token: 'abc',
      expiry_date: tenMinutesFromNow,
      token_type: 'Bearer'
    }));

    assert.throws(() => {
      scope.done();
    }, 'AssertionError');
    oauth2client =
        new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    now = (new Date()).getTime();
    tenMinutesFromNow = now + 1000 * 60 * 10;
    oauth2client.credentials = {
      access_token: 'abc123',
      refresh_token: 'abc',
      expiry_date: tenMinutesFromNow
    };

    nock(Utils.baseUrl).get('/drive/v2/files/wat').reply(200);
    await remoteDrive.files.get({fileId: 'wat', auth: oauth2client});
    assert.equal(JSON.stringify(oauth2client.credentials), JSON.stringify({
      access_token: 'abc123',
      refresh_token: 'abc',
      expiry_date: tenMinutesFromNow,
      token_type: 'Bearer'
    }));

    assert.throws(() => {
      scope.done();
    }, 'AssertionError');
  });

  it('should refresh if have refresh token but no access token', async () => {
    const scope = nock('https://www.googleapis.com')
                      .post('/oauth2/v4/token')
                      .times(2)
                      .reply(200, {access_token: 'abc123', expires_in: 1});
    const oauth2client =
        new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    let now = (new Date()).getTime();
    oauth2client.credentials = {refresh_token: 'abc'};
    await testNoAccessToken(localDrive, oauth2client, now);
    now = (new Date()).getTime();
    oauth2client.credentials = {refresh_token: 'abc'};
    await testNoAccessToken(remoteDrive, oauth2client, now);
  });

  describe('revokeCredentials()', () => {
    it('should revoke credentials if access token present', async () => {
      const scope = nock('https://accounts.google.com')
                        .get('/o/oauth2/revoke?token=abc')
                        .reply(200, {success: true});
      const oauth2client =
          new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
      oauth2client.credentials = {access_token: 'abc', refresh_token: 'abc'};
      const res = await oauth2client.revokeCredentials();
      assert.equal(res.data.success, true);
      assert.equal(JSON.stringify(oauth2client.credentials), '{}');
    });

    it('should clear credentials and return error if no access token to revoke',
       async () => {
         const oauth2client =
             new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
         oauth2client.credentials = {refresh_token: 'abc'};
         try {
           const res = await oauth2client.revokeCredentials();
           assert.fail('Expected to throw');
         } catch (e) {
           assert.equal(e, 'Error: No access token to revoke.');
         }
         assert.equal(JSON.stringify(oauth2client.credentials), '{}');
       });
  });

  describe('getToken()', () => {
    it('should return expiry_date', async () => {
      const now = (new Date()).getTime();
      const scope =
          nock('https://www.googleapis.com')
              .post('/oauth2/v4/token')
              .reply(
                  200,
                  {access_token: 'abc', refresh_token: '123', expires_in: 10});
      const oauth2client =
          new googleapis.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
      const res = await oauth2client.getToken('code here');
      assert(res.tokens.expiry_date! >= now + (10 * 1000));
      assert(res.tokens.expiry_date! <= now + (15 * 1000));
    });
  });

  after(() => {
    nock.cleanAll();
    nock.enableNetConnect();
  });
});
