// Copyright 2018, Google, LLC.
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
import * as fs from 'fs';
import * as nock from 'nock';
import * as os from 'os';
import * as path from 'path';

import {Utils} from './../utils';

nock.disableNetConnect();

// tslint:disable: no-any
const samples: any = {
  download: require('../../../samples/drive/download'),
  export: require('../../../samples/drive/export'),
  list: require('../../../samples/drive/list')
};

for (const p in samples) {
  if (samples[p]) {
    samples[p].client.credentials = {access_token: 'not-a-token'};
  }
}

const someFile = path.resolve('test/fixtures/public.pem');

describe('Drive samples', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should download the file', done => {
    const fileId = '0B7l5uajXUzaFa0x6cjJfZEkzZVE';
    const scope = nock(Utils.baseUrl)
                      .get(`/drive/v3/files/${fileId}?alt=media`)
                      .replyWithFile(200, someFile);
    samples.download.downloadDoc(() => {
      assert(fs.existsSync(`${os.tmpdir()}/photo.jpg`));
      scope.done();
      done();
    });
  });

  it('should download the doc', done => {
    const fileId = '1ZdR3L3qP4Bkq8noWLJHSr_iBau0DNT4Kli4SxNc2YEo';
    const scope =
        nock(Utils.baseUrl)
            .get(`/drive/v3/files/${fileId}/export?mimeType=application%2Fpdf`)
            .replyWithFile(200, someFile);
    samples.export.exportDoc(() => {
      assert(fs.existsSync(`${os.tmpdir()}/resume.pdf`));
      scope.done();
      done();
    });
  });

  it('should list all the docs', done => {
    const scope =
        nock(Utils.baseUrl).get(`/drive/v3/files?pageSize=3`).reply(200, {});
    samples.list.listDocs(undefined, (data: {}) => {
      assert(data);
      scope.done();
      done();
    });
  });
});
