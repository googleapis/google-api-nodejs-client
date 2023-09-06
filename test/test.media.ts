// Copyright 2014 Google LLC
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
import {describe, it, before, beforeEach, after} from 'mocha';
import * as fs from 'fs';
import * as nock from 'nock';
import * as path from 'path';
import {URL} from 'url';

import {drive_v2, gmail_v1, GoogleApis} from '../src';
import {Utils} from './utils';

const boundaryPrefix = 'multipart/related; boundary=';

async function testMultpart(drive: drive_v2.Drive) {
  const requestBody = {title: 'title', mimeType: 'text/plain'};
  const media = {body: 'hey'};
  let expectedResp = fs.readFileSync(
    path.join(__dirname, '../../../test/fixtures/media-response.txt'),
    {encoding: 'utf8'}
  );
  const res = await drive.files.insert({requestBody, media});
  assert.strictEqual(res.config.method!.toLowerCase(), 'post');
  const url = new URL(res.config.url!);
  assert.strictEqual(url.pathname, '/upload/drive/v2/files');
  assert.strictEqual(url.search, '?uploadType=multipart');
  assert.strictEqual(
    res.config.headers!['content-type'].indexOf('multipart/related;'),
    0
  );
  const boundary = res.config.headers!['content-type'].replace(
    boundaryPrefix,
    ''
  );
  expectedResp = expectedResp
    .replace(/\r?\n/g, '\r\n')
    .replace(/\$boundary/g, boundary)
    .replace('$media', media.body)
    .replace('$resource', JSON.stringify(requestBody))
    .replace('$mimeType', 'text/plain')
    .trim();
  assert.strictEqual(expectedResp, res.data);
}

async function testMediaBody(drive: drive_v2.Drive) {
  const requestBody = {title: 'title'};
  const media = {body: 'hey'};
  let expectedResp = fs.readFileSync(
    path.join(__dirname, '../../../test/fixtures/media-response.txt'),
    {encoding: 'utf8'}
  );
  const res = await drive.files.insert({requestBody, media});
  const url = new URL(res.config.url!);
  assert.strictEqual(res.config.method!.toLowerCase(), 'post');
  assert.strictEqual(url.pathname, '/upload/drive/v2/files');
  assert.strictEqual(url.search, '?uploadType=multipart');
  assert.strictEqual(
    res.config.headers!['content-type'].indexOf('multipart/related;'),
    0
  );
  const boundary = res.config.headers!['content-type'].replace(
    boundaryPrefix,
    ''
  );
  expectedResp = expectedResp
    .replace(/\r?\n/g, '\r\n')
    .replace(/\$boundary/g, boundary)
    .replace('$media', media.body)
    .replace('$resource', JSON.stringify(requestBody))
    .replace('$mimeType', 'text/plain')
    .trim();
  assert.strictEqual(expectedResp, res.data);
}

describe('Media', () => {
  let localDrive: drive_v2.Drive, remoteDrive: drive_v2.Drive;
  let localGmail: gmail_v1.Gmail, remoteGmail: gmail_v1.Gmail;

  before(async () => {
    nock.cleanAll();
    const google = new GoogleApis();
    [remoteDrive, remoteGmail] = await Promise.all([
      Utils.loadApi<drive_v2.Drive>(google, 'drive', 'v2'),
      Utils.loadApi<gmail_v1.Gmail>(google, 'gmail', 'v1'),
    ]);
    nock.disableNetConnect();
  });

  beforeEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    const google = new GoogleApis();
    localDrive = google.drive('v2');
    localGmail = google.gmail('v1');
  });

  it('should post progress for uploads', async () => {
    const scope = nock('https://youtube.googleapis.com')
      .post(
        '/upload/youtube/v3/videos?part=id&part=snippet&notifySubscribers=false&uploadType=multipart'
      )
      .reply(200);
    const fileName = path.join(
      __dirname,
      '../../../test/fixtures/mediabody.txt'
    );
    const fileSize = fs.statSync(fileName).size;
    const google = new GoogleApis();
    const youtube = google.youtube('v3');
    const progressEvents = new Array<number>();
    await youtube.videos.insert(
      {
        part: ['id', 'snippet'],
        notifySubscribers: false,
        requestBody: {
          snippet: {
            title: 'Node.js YouTube Upload Test',
            description:
              'Testing YouTube upload via Google APIs Node.js Client',
          },
        },
        media: {body: fs.createReadStream(fileName)},
      },
      {
        onUploadProgress: (evt: {bytesRead: number}) => {
          progressEvents.push(evt.bytesRead);
        },
      }
    );
    assert(progressEvents.length > 0);
    assert.strictEqual(progressEvents[0], fileSize);
    scope.done();
  });

  // See: https://github.com/googleapis/google-api-nodejs-client/issues/1820
  it('should post progress for uploads, for APIs with empty requestBody', async () => {
    const scope = nock('https://youtube.googleapis.com')
      .post(
        '/upload/youtube/v3/thumbnails/set?videoId=abc123&uploadType=multipart'
      )
      .reply(200);
    const fileName = path.join(
      __dirname,
      '../../../test/fixtures/mediabody.txt'
    );
    const fileSize = fs.statSync(fileName).size;
    const google = new GoogleApis();
    const youtube = google.youtube('v3');
    const progressEvents = new Array<number>();
    await youtube.thumbnails.set(
      {
        videoId: 'abc123',
        requestBody: {},
        media: {
          mimeType: 'image/jpeg',
          body: fs.createReadStream(fileName),
        },
      },
      {
        onUploadProgress: (evt: {bytesRead: number}) => {
          progressEvents.push(evt.bytesRead);
        },
      }
    );
    assert(progressEvents.length > 0);
    assert.strictEqual(progressEvents[0], fileSize);
    scope.done();
  });

  it('should post with uploadType=multipart if resource and media set', async () => {
    nock(Utils.baseUrl)
      .post('/upload/drive/v2/files?uploadType=multipart')
      .times(2)
      .reply(200, {fileId: 'abc123'});

    const res = await localDrive.files.insert({
      requestBody: {},
      media: {body: 'hello'},
    });
    assert.strictEqual(
      JSON.stringify(res.data),
      JSON.stringify({fileId: 'abc123'})
    );
    const res2 = await remoteDrive.files.insert({
      requestBody: {},
      media: {body: 'hello'},
    });
    assert.strictEqual(
      JSON.stringify(res2.data),
      JSON.stringify({fileId: 'abc123'})
    );
  });

  it('should post with uploadType=media media set but not resource', async () => {
    nock(Utils.baseUrl)
      .post('/upload/drive/v2/files?uploadType=media')
      .times(2)
      .reply(200, {fileId: 'abc123'});
    const res = await localDrive.files.insert({media: {body: 'hello'}});
    assert.strictEqual(
      JSON.stringify(res.data),
      JSON.stringify({fileId: 'abc123'})
    );
    const res2 = await remoteDrive.files.insert({media: {body: 'hello'}});
    assert.strictEqual(
      JSON.stringify(res2.data),
      JSON.stringify({fileId: 'abc123'})
    );
  });

  it('should generate a valid media upload if media is set, metadata is not set', async () => {
    nock(Utils.baseUrl)
      .post('/upload/drive/v2/files?uploadType=media')
      .times(2)
      .reply(201, (uri: string, reqBody: {}) => {
        return reqBody; // return request body as response
        // for testing purposes
      });
    const media = {body: 'hey'};
    const res = await localDrive.files.insert({media});
    assert.strictEqual(res.config.method!.toLowerCase(), 'post');
    const url = new URL(res.config.url!);
    assert.strictEqual(url.search, '?uploadType=media');
    assert.strictEqual(url.pathname, '/upload/drive/v2/files');
    assert.strictEqual(media.body, res.data);
    const res2 = await remoteDrive.files.insert({media});
    const url2 = new URL(res2.config.url!);
    assert.strictEqual(res2.config.method!.toLowerCase(), 'post');
    assert.strictEqual(url2.pathname, '/upload/drive/v2/files');
    assert.strictEqual(url2.search, '?uploadType=media');
    assert.strictEqual(media.body, res2.data);
  });

  it('should generate valid multipart upload if media and metadata are both set', async () => {
    nock(Utils.baseUrl)
      .post('/upload/drive/v2/files?uploadType=multipart')
      .times(2)
      .reply(201, (uri: string, reqBody: {}) => {
        return reqBody; // return request body as response
        // for testing purposes
      });
    await testMultpart(localDrive);
    await testMultpart(remoteDrive);
  });

  it('should not require parameters for insertion requests', async () => {
    nock(Utils.baseUrl)
      .post('/upload/drive/v2/files?visibility=someValue&uploadType=media')
      .twice()
      .reply(200);
    const res = await localDrive.files.insert({
      visibility: 'someValue',
      media: {body: 'wat'},
    });
    assert.strictEqual(
      Utils.getQs(res),
      'visibility=someValue&uploadType=media'
    );
    const res2 = await remoteDrive.files.insert({
      visibility: 'someValue',
      media: {body: 'wat'},
    });
    assert.strictEqual(
      Utils.getQs(res2),
      'visibility=someValue&uploadType=media'
    );
  });

  it('should not multipart upload if no media body given', async () => {
    nock(Utils.baseUrl)
      .post('/drive/v2/files?visibility=someValue')
      .twice()
      .reply(200);
    const res = await localDrive.files.insert({visibility: 'someValue'});
    assert.strictEqual(Utils.getQs(res), 'visibility=someValue');
    const res2 = await remoteDrive.files.insert({visibility: 'someValue'});
    assert.strictEqual(Utils.getQs(res2), 'visibility=someValue');
  });

  it('should set text/plain when passed a string as media body', async () => {
    nock(Utils.baseUrl)
      .post('/upload/drive/v2/files?uploadType=multipart')
      .times(2)
      .reply(201, (uri: string, reqBody: {}) => {
        return reqBody; // return request body as response for
        // testing purposes
      });

    await testMediaBody(localDrive);
    await testMediaBody(remoteDrive);
  });

  it('should handle metadata-only media requests properly', async () => {
    nock(Utils.gmailUrl)
      .post('/gmail/v1/users/me/drafts')
      .times(2)
      .reply(201, (uri: string, reqBody: {}) => {
        return reqBody; // return request body as response for
        // testing purposes
      });
    const requestBody = {
      message: {raw: Buffer.from('hello', 'binary').toString('base64')},
    };
    const res = await localGmail.users.drafts.create({
      userId: 'me',
      requestBody,
      media: {mimeType: 'message/rfc822'},
    } as gmail_v1.Params$Resource$Users$Drafts$Create);
    assert.strictEqual(
      res.config.headers!['Content-Type'].indexOf('application/json'),
      0
    );
    assert.strictEqual(JSON.stringify(res.data), JSON.stringify(requestBody));
    const res2 = await remoteGmail.users.drafts.create({
      userId: 'me',
      requestBody,
      media: {mimeType: 'message/rfc822'},
    } as gmail_v1.Params$Resource$Users$Drafts$Create);
    assert.strictEqual(
      res2.config.headers!['Content-Type'].indexOf('application/json'),
      0
    );
    assert.deepStrictEqual(res2.data, requestBody);
  });

  it('should accept readable stream as media body without metadata', async () => {
    nock(Utils.gmailUrl)
      .post('/upload/gmail/v1/users/me/drafts?uploadType=media')
      .times(2)
      .reply(201, (uri: string, reqBody: {}) => {
        return reqBody; // return request body as response for
        // testing purposes
      });
    let body = fs.createReadStream(
      path.join(__dirname, '../../../test/fixtures/mediabody.txt')
    );
    let expectedBody = fs.readFileSync(
      path.join(__dirname, '../../../test/fixtures/mediabody.txt'),
      'utf8'
    );
    const res = await localGmail.users.drafts.create({
      userId: 'me',
      media: {mimeType: 'message/rfc822', body},
    } as gmail_v1.Params$Resource$Users$Drafts$Create);
    assert.strictEqual(res.data, expectedBody);
    body = fs.createReadStream(
      path.join(__dirname, '../../../test/fixtures/mediabody.txt')
    );
    expectedBody = fs.readFileSync(
      path.join(__dirname, '../../../test/fixtures/mediabody.txt'),
      'utf8'
    );
    const res2 = await remoteGmail.users.drafts.create({
      userId: 'me',
      media: {mimeType: 'message/rfc822', body},
    } as gmail_v1.Params$Resource$Users$Drafts$Create);
    assert.strictEqual(res2.data, expectedBody);
  });

  it('should accept readable stream as media body with metadata', async () => {
    nock(Utils.gmailUrl)
      .post('/upload/gmail/v1/users/me/drafts?uploadType=multipart')
      .times(2)
      .reply(201, (uri: string, reqBody: {}) => {
        return reqBody; // return request body as response for testing
        // purposes
      });

    let requestBody = {
      message: {raw: Buffer.from('hello', 'binary').toString('base64')},
    };
    let body = fs.createReadStream(
      path.join(__dirname, '../../../test/fixtures/mediabody.txt')
    );
    let bodyString = fs.readFileSync(
      path.join(__dirname, '../../../test/fixtures/mediabody.txt'),
      {encoding: 'utf8'}
    );
    let media = {mimeType: 'message/rfc822', body};
    let expectedBody = fs.readFileSync(
      path.join(__dirname, '../../../test/fixtures/media-response.txt'),
      {encoding: 'utf8'}
    );
    const res = await localGmail.users.drafts.create({
      userId: 'me',
      requestBody,
      media,
    });
    const boundary = res.config.headers!['content-type'].replace(
      boundaryPrefix,
      ''
    );
    expectedBody = expectedBody
      .replace(/\r?\n/g, '\r\n')
      .replace(/\$boundary/g, boundary)
      .replace('$media', bodyString)
      .replace('$resource', JSON.stringify(requestBody))
      .replace('$mimeType', 'message/rfc822')
      .trim();
    assert.strictEqual(expectedBody, res.data);
    requestBody = {
      message: {raw: Buffer.from('hello', 'binary').toString('base64')},
    };
    body = fs.createReadStream(
      path.join(__dirname, '../../../test/fixtures/mediabody.txt')
    );
    bodyString = fs.readFileSync(
      path.join(__dirname, '../../../test/fixtures/mediabody.txt'),
      {encoding: 'utf8'}
    );
    media = {mimeType: 'message/rfc822', body};
    expectedBody = fs.readFileSync(
      path.join(__dirname, '../../../test/fixtures/media-response.txt'),
      {encoding: 'utf8'}
    );
    const res2 = await remoteGmail.users.drafts.create({
      userId: 'me',
      requestBody,
      media,
    });
    const boundary2 = res2.config.headers!['content-type'].replace(
      boundaryPrefix,
      ''
    );
    expectedBody = expectedBody
      .replace(/\r?\n/g, '\r\n')
      .replace(/\$boundary/g, boundary2)
      .replace('$media', bodyString)
      .replace('$resource', JSON.stringify(requestBody))
      .replace('$mimeType', 'message/rfc822')
      .trim();
    assert.strictEqual(expectedBody, res2.data);
  });

  it('should return err, {object}body, resp for streaming media requests', async () => {
    nock(Utils.gmailUrl)
      .post('/upload/gmail/v1/users/me/drafts?uploadType=multipart')
      .times(2)
      .reply(
        201,
        () => {
          return JSON.stringify({hello: 'world'});
        },
        {
          'Content-Type': 'application/json',
        }
      );

    let requestBody = {
      message: {raw: Buffer.from('hello', 'binary').toString('base64')},
    };
    const body = fs.createReadStream(
      path.join(__dirname, '../../../test/fixtures/mediabody.txt')
    );
    let media = {mimeType: 'message/rfc822', body};
    const res = await localGmail.users.drafts.create({
      userId: 'me',
      requestBody,
      media,
    });
    assert.strictEqual(typeof res.data, 'object');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    assert.strictEqual((res.data as any).hello, 'world');
    assert.strictEqual(typeof res, 'object');
    requestBody = {
      message: {raw: Buffer.from('hello', 'binary').toString('base64')},
    };
    const body2 = fs.createReadStream(
      path.join(__dirname, '../../../test/fixtures/mediabody.txt')
    );
    media = {mimeType: 'message/rfc822', body: body2};
    const res2 = await remoteGmail.users.drafts.create({
      userId: 'me',
      requestBody,
      media,
    });
    assert.strictEqual(typeof res2.data, 'object');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    assert.strictEqual((res2.data as any).hello, 'world');
    assert.strictEqual(typeof res2, 'object');
  });

  it('should provide unknown return types for media downloads', async () => {
    const google = new GoogleApis();
    const drive = google.drive('v3');
    const scope = nock(Utils.baseUrl)
      .get('/drive/v3/files/fileId/export?mimeType=mimeType')
      .reply(200, '👋');
    const res = await drive.files.export({
      fileId: 'fileId',
      mimeType: 'mimeType',
    });
    // this is just verifying that we can directly cast `res.data` from
    // `unknown` to a string without type gymnastics
    res.data as string;
    scope.done();
  });

  after(() => {
    nock.cleanAll();
  });
});
