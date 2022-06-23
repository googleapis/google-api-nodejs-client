// Copyright 2013 Google LLC
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
import {describe, it, afterEach, beforeEach, before} from 'mocha';
import {OAuth2Client} from 'google-auth-library';
import {APIEndpoint} from 'googleapis-common';
import * as nock from 'nock';

import {GoogleApis} from '../src';
import {Utils} from './utils';

const googleapis = new GoogleApis();

describe(__filename, () => {
  before(() => {
    nock.disableNetConnect();
  });

  afterEach(() => {
    nock.cleanAll();
  });

  describe('JWT client', () => {
    it('should expose the default auth module', () => {
      assert(googleapis.auth.getApplicationDefault);
    });

    it('should create a jwt through googleapis', () => {
      const jwt = new googleapis.auth.JWT(
        'someone@somewhere.com',
        'file1',
        'key1',
        'scope1',
        'subject1'
      );
      assert.strictEqual(jwt.email, 'someone@somewhere.com');
      assert.strictEqual(jwt.keyFile, 'file1');
      assert.strictEqual(jwt.key, 'key1');
      assert.strictEqual(jwt.scopes, 'scope1');
      assert.strictEqual(jwt.subject, 'subject1');
    });
  });

  describe('Compute client', () => {
    it('should create a computeclient', () => {
      new googleapis.auth.Compute();
    });
  });

  describe('ExternalAccount client', () => {
    it('should create a BaseExternalAccountClient through googleapis', () => {
      const config = {
        type: 'external_account',
        audience:
          '//iam.googleapis.com/projects/123//locations/global/' +
          'workloadIdentityPools/456',
        subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
        token_url: 'https://sts.googleapis.com/v1/token',
        credential_source: {
          file: 'external-subject-token.txt',
        },
      };
      new googleapis.auth.IdentityPoolClient(config);
    });
  });

  async function testNoTokens(blogger: APIEndpoint, client: OAuth2Client) {
    await assert.rejects(
      blogger.pages.get({blogId: '123', pageId: '123', auth: client}),
      /No access, refresh token/
    );
  }

  async function testNoBearer(
    blogger: APIEndpoint,
    oauth2client: OAuth2Client
  ) {
    await blogger.pages.list({blogId: 'abc123', auth: oauth2client});
    assert.strictEqual(oauth2client.credentials.token_type, 'Bearer');
  }

  async function testExpired(
    drive: APIEndpoint,
    oauth2client: OAuth2Client,
    now: number
  ) {
    nock(Utils.baseUrl).get('/drive/v2/files/wat').reply(200);
    await drive.files.get({fileId: 'wat', auth: oauth2client});
    const expiryDate = oauth2client.credentials.expiry_date;
    assert.notStrictEqual(expiryDate, undefined);
    if (!expiryDate) return;
    assert(expiryDate > now);
    assert(expiryDate < now + 5000);
    assert.strictEqual(oauth2client.credentials.refresh_token, 'abc');
    assert.strictEqual(oauth2client.credentials.access_token, 'abc123');
  }

  async function testNoAccessToken(
    drive: APIEndpoint,
    oauth2client: OAuth2Client,
    now: number
  ) {
    nock(Utils.baseUrl).get('/drive/v2/files/wat').reply(200);
    await drive.files.get({fileId: 'wat', auth: oauth2client});
    const expiryDate = oauth2client.credentials.expiry_date;
    assert.notStrictEqual(expiryDate, undefined);
    assert(expiryDate! > now);
    assert(expiryDate! < now + 4000);
    assert.strictEqual(oauth2client.credentials.refresh_token, 'abc');
    assert.strictEqual(oauth2client.credentials.access_token, 'abc123');
  }

  describe('OAuth2 client', () => {
    let localDrive: APIEndpoint, remoteDrive: APIEndpoint;
    let localBlogger: APIEndpoint, remoteBlogger: APIEndpoint;

    before(async () => {
      const google = new GoogleApis();
      nock(Utils.baseUrl)
        .get('/discovery/v1/apis/drive/v2/rest')
        .reply(200, Utils.getDiscoveryFixture('drive'));
      nock(Utils.baseUrl)
        .get('/discovery/v1/apis/blogger/v3/rest')
        .reply(200, Utils.getDiscoveryFixture('blogger'));
      [remoteDrive, remoteBlogger] = await Promise.all([
        Utils.loadApi(google, 'drive', 'v2'),
        Utils.loadApi(google, 'blogger', 'v3'),
      ]);
    });

    beforeEach(() => {
      const google = new GoogleApis();
      localDrive = google.drive('v2');
      localBlogger = google.blogger('v3');
    });

    const CLIENT_ID = 'CLIENT_ID';
    const CLIENT_SECRET = 'CLIENT_SECRET';
    const REDIRECT_URI = 'REDIRECT';

    it('should return err if no access or refresh token is set', async () => {
      const oauth2client = new googleapis.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
      );
      await testNoTokens(localBlogger, oauth2client as unknown as OAuth2Client);
      await testNoTokens(
        remoteBlogger,
        oauth2client as unknown as OAuth2Client
      );
    });

    it('should not error if only refresh token is set', () => {
      const oauth2client = new googleapis.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
      );
      oauth2client.credentials = {refresh_token: 'refresh_token'};
      assert.doesNotThrow(() => {
        const options = {auth: oauth2client, blogId: '...'};
        localBlogger.pages.get(options, Utils.noop);
        remoteBlogger.pages.get(options, Utils.noop);
      });
    });

    it('should set access token type to Bearer if none is set', async () => {
      const oauth2client = new googleapis.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
      );
      oauth2client.credentials = {access_token: 'foo', refresh_token: ''};
      const scope = nock('https://blogger.googleapis.com')
        .get('/v3/blogs/abc123/pages')
        .times(2)
        .reply(200);
      await testNoBearer(localBlogger, oauth2client as unknown as OAuth2Client);
      await testNoBearer(
        remoteBlogger,
        oauth2client as unknown as OAuth2Client
      );
      scope.done();
    });

    it('should refresh if access token is expired', async () => {
      const scope = nock('https://oauth2.googleapis.com')
        .post('/token')
        .times(2)
        .reply(200, {access_token: 'abc123', expires_in: 1});
      let oauth2client = new googleapis.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
      );
      let now = new Date().getTime();
      let twoSecondsAgo = now - 2000;
      oauth2client.credentials = {
        refresh_token: 'abc',
        expiry_date: twoSecondsAgo,
      };
      await testExpired(
        localDrive,
        oauth2client as unknown as OAuth2Client,
        now
      );
      oauth2client = new googleapis.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
      );
      now = new Date().getTime();
      twoSecondsAgo = now - 2000;
      oauth2client.credentials = {
        refresh_token: 'abc',
        expiry_date: twoSecondsAgo,
      };
      await testExpired(
        remoteDrive,
        oauth2client as unknown as OAuth2Client,
        now
      );
      scope.done();
    });

    it('should make request if access token not expired', async () => {
      const scope = nock('https://www.googleapis.com')
        .post('/oauth2/v4/token')
        .times(2)
        .reply(200, {access_token: 'abc123', expires_in: 10000});
      let oauth2client = new googleapis.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
      );
      let now = new Date().getTime();
      let tenMinutesFromNow = now + 1000 * 60 * 10;
      oauth2client.credentials = {
        access_token: 'abc123',
        refresh_token: 'abc',
        expiry_date: tenMinutesFromNow,
      };

      nock(Utils.baseUrl).get('/drive/v2/files/wat').reply(200);
      await localDrive.files.get({fileId: 'wat', auth: oauth2client});
      assert.strictEqual(
        JSON.stringify(oauth2client.credentials),
        JSON.stringify({
          access_token: 'abc123',
          refresh_token: 'abc',
          expiry_date: tenMinutesFromNow,
          token_type: 'Bearer',
        })
      );

      assert.throws(() => {
        scope.done();
      }, 'AssertionError');
      oauth2client = new googleapis.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
      );
      now = new Date().getTime();
      tenMinutesFromNow = now + 1000 * 60 * 10;
      oauth2client.credentials = {
        access_token: 'abc123',
        refresh_token: 'abc',
        expiry_date: tenMinutesFromNow,
      };

      nock(Utils.baseUrl).get('/drive/v2/files/wat').reply(200);
      await remoteDrive.files.get({fileId: 'wat', auth: oauth2client});
      assert.strictEqual(
        JSON.stringify(oauth2client.credentials),
        JSON.stringify({
          access_token: 'abc123',
          refresh_token: 'abc',
          expiry_date: tenMinutesFromNow,
          token_type: 'Bearer',
        })
      );

      assert.throws(() => {
        scope.done();
      }, 'AssertionError');
    });

    it('should refresh if have refresh token but no access token', async () => {
      const scope = nock('https://oauth2.googleapis.com')
        .post('/token')
        .times(2)
        .reply(200, {access_token: 'abc123', expires_in: 1});
      const oauth2client = new googleapis.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
      );
      let now = new Date().getTime();
      oauth2client.credentials = {refresh_token: 'abc'};
      await testNoAccessToken(
        localDrive,
        oauth2client as unknown as OAuth2Client,
        now
      );
      now = new Date().getTime();
      oauth2client.credentials = {refresh_token: 'abc'};
      await testNoAccessToken(
        remoteDrive,
        oauth2client as unknown as OAuth2Client,
        now
      );
      scope.done();
    });

    describe('revokeCredentials()', () => {
      it('should revoke credentials if access token present', async () => {
        const scope = nock('https://oauth2.googleapis.com')
          .post('/revoke?token=abc')
          .reply(200, {success: true});
        const oauth2client = new googleapis.auth.OAuth2(
          CLIENT_ID,
          CLIENT_SECRET,
          REDIRECT_URI
        );
        oauth2client.credentials = {access_token: 'abc', refresh_token: 'abc'};
        const res = await oauth2client.revokeCredentials();
        scope.done();
        assert.strictEqual(res.data.success, true);
        assert.deepStrictEqual(oauth2client.credentials, {});
      });

      it('should clear credentials and return error if no access token to revoke', async () => {
        const oauth2client = new googleapis.auth.OAuth2(
          CLIENT_ID,
          CLIENT_SECRET,
          REDIRECT_URI
        );
        oauth2client.credentials = {refresh_token: 'abc'};
        await assert.rejects(
          oauth2client.revokeCredentials(),
          /Error: No access token to revoke./
        );
        assert.deepStrictEqual(oauth2client.credentials, {});
      });
    });

    describe('getToken()', () => {
      it('should return expiry_date', async () => {
        const now = new Date().getTime();
        const scope = nock('https://oauth2.googleapis.com')
          .post('/token')
          .reply(200, {
            access_token: 'abc',
            refresh_token: '123',
            expires_in: 10,
          });
        const oauth2client = new googleapis.auth.OAuth2(
          CLIENT_ID,
          CLIENT_SECRET,
          REDIRECT_URI
        );
        const res = await oauth2client.getToken('code here');
        assert(res.tokens.expiry_date! >= now + 10 * 1000);
        assert(res.tokens.expiry_date! <= now + 15 * 1000);
        scope.done();
      });
    });
  });
});
