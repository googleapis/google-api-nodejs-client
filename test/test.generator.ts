// Copyright 2020 Google LLC
//
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
import * as sinon from 'sinon';
import * as proxyquire from 'proxyquire';
import {describe, it, afterEach} from 'mocha';
import * as nock from 'nock';
import * as gen from '../src/generator/generator';

describe(__filename, () => {
  nock.disableNetConnect();
  const sandbox = sinon.createSandbox();

  afterEach(() => sandbox.restore());

  it('should read from cache if flag is passed', async () => {
    // This test relies on the disabled network being enabled
    const generator = new gen.Generator();
    const genStub = sandbox.stub(generator, 'generateAPI').resolves();
    const idxStub = sandbox.stub(generator, 'generateIndex').resolves();
    await generator.generateAllAPIs('', true);
    assert.ok(genStub.called);
    assert.ok(idxStub.calledOnce);
  });

  it('should read from disco if flag is passed', async () => {
    let downloadCalled = false;
    const {Generator} = proxyquire('../src/generator/generator', {
      './download': {
        downloadDiscoveryDocs: async () => {
          downloadCalled = true;
        },
      },
    });
    const generator = new Generator();
    const genStub = sandbox.stub(generator, 'generateAPI').resolves();
    const idxStub = sandbox.stub(generator, 'generateIndex').resolves();
    const discoUrl = 'https://www.googleapis.com/discovery/v1/apis/';
    await generator.generateAllAPIs(discoUrl, false);
    assert.ok(genStub.called);
    assert.ok(idxStub.calledOnce);
    assert.ok(downloadCalled);
  });

  it('loads existing version from package.json', async () => {
    const generator = new gen.Generator();
    const [pkgPath, pkgData] = await generator.getPkgPathAndData(
      'src/apis/',
      'bigquery',
      'look I am bigquery',
      '1.2.3',
    );
    assert.ok(pkgPath.endsWith('package.json'));
    assert.strictEqual(pkgData.name, 'bigquery');
    assert.strictEqual(pkgData.desc, 'look I am bigquery');
  });

  it('uses default version if no package.json found', async () => {
    const generator = new gen.Generator();
    const [pkgPath, pkgData] = await generator.getPkgPathAndData(
      'src/apis/',
      'fake-api',
      'look I am fake',
    );
    assert.ok(pkgPath.endsWith('package.json'));
    assert.strictEqual(pkgData.version, '0.1.0');
    assert.strictEqual(pkgData.name, 'fake-api');
    assert.strictEqual(pkgData.desc, 'look I am fake');
  });

  it('should handle method request with and without $ref in resource and top-level methods', async () => {
    let writtenContent = '';
    const baseSchema = require('../../test/fixtures/discovery/webfonts-v1.json');
    const customSchema = {
      ...baseSchema,
      methods: {
        topWithRef: {
          id: 'webfonts.topWithRef',
          path: 'topWithRef',
          httpMethod: 'POST',
          request: {$ref: 'Webfont'},
          response: {$ref: 'WebfontList'},
        },
        topWithInlineObject: {
          id: 'webfonts.topWithInlineObject',
          path: 'topWithInlineObject',
          httpMethod: 'POST',
          request: {
            type: 'object',
            additionalProperties: {
              description: 'Properties of the object.',
              type: 'any',
            },
          },
          response: {$ref: 'WebfontList'},
        },
        topWithInlineProperties: {
          id: 'webfonts.topWithInlineProperties',
          path: 'topWithInlineProperties',
          httpMethod: 'POST',
          request: {
            type: 'object',
            properties: {
              title: {type: 'string'},
              count: {type: 'integer'},
            },
          },
          response: {$ref: 'WebfontList'},
        },
        topWithEmptyRequest: {
          id: 'webfonts.topWithEmptyRequest',
          path: 'topWithEmptyRequest',
          httpMethod: 'POST',
          request: {},
        },
        topWithMultipartOnly: {
          id: 'webfonts.topWithMultipartOnly',
          path: 'topWithMultipartOnly',
          httpMethod: 'POST',
          supportsMediaUpload: true,
          mediaUpload: {
            protocols: {
              simple: {
                multipart: true,
                path: '/upload/webfonts/v1/multipart',
              },
            },
          },
        },
      },
      resources: {
        ...baseSchema.resources,
        integrations: {
          methods: {
            execute: {
              id: 'webfonts.integrations.execute',
              path: 'v2/{+parent}:execute',
              httpMethod: 'POST',
              request: {
                type: 'object',
                additionalProperties: {
                  description: 'Properties of the object.',
                  type: 'any',
                },
              },
              response: {$ref: 'WebfontList'},
            },
            inlineProps: {
              id: 'webfonts.integrations.inlineProps',
              path: 'v2/{+parent}:inlineProps',
              httpMethod: 'POST',
              request: {
                type: 'object',
                properties: {
                  title: {type: 'string'},
                  count: {type: 'integer'},
                },
              },
              response: {$ref: 'WebfontList'},
            },
            emptyReq: {
              id: 'webfonts.integrations.emptyReq',
              path: 'v2/{+parent}:emptyReq',
              httpMethod: 'POST',
              request: {},
            },
            multipartOnly: {
              id: 'webfonts.integrations.multipartOnly',
              path: 'v2/{+parent}:multipartOnly',
              httpMethod: 'POST',
              supportsMediaUpload: true,
              mediaUpload: {
                protocols: {
                  simple: {
                    multipart: true,
                    path: '/upload/webfonts/v1/multipart',
                  },
                },
              },
            },
          },
        },
      },
    };

    const {Generator} = proxyquire('../src/generator/generator', {
      fs: {
        readFile: (
          _path: string,
          _enc: string,
          cb: (err: Error | null, data: string) => void,
        ) => {
          cb(null, JSON.stringify(customSchema));
        },
        writeFile: (
          _path: string,
          data: string,
          _opts: unknown,
          cb: (err: Error | null) => void,
        ) => {
          writtenContent = data;
          cb(null);
        },
        promises: {
          mkdir: async () => {},
        },
      },
    });

    const generator = new Generator();
    await generator.generateAPI('/fake/webfonts-v1.json');

    assert.ok(!writtenContent.includes('Schema$;'));
    assert.ok(writtenContent.includes('requestBody?: Schema$Webfont;'));
    assert.strictEqual(
      writtenContent.split('requestBody?: {[key: string]: any};').length - 1,
      2,
    );
    assert.strictEqual(
      writtenContent.split('requestBody?: {title?: string; count?: number};')
        .length - 1,
      2,
    );
    assert.strictEqual(writtenContent.split('requestBody?: {};').length - 1, 4);
  });

  it('should render tsconfig.json.njk with a single trailing newline', async () => {
    let renderedTsconfig = '';
    const {Generator} = proxyquire('../src/generator/generator', {
      fs: {
        writeFile: (
          filePath: string,
          data: string,
          _opts: unknown,
          cb: (err: Error | null) => void,
        ) => {
          if (filePath.endsWith('tsconfig.json')) {
            renderedTsconfig = data;
          }
          cb(null);
        },
      },
    });
    const generator = new Generator();
    await (
      generator as unknown as {
        render: (t: string, d: {}, o: string) => Promise<void>;
      }
    ).render('tsconfig.json.njk', {name: 'bigquery'}, 'tsconfig.json');
    const normalizedTsconfig = renderedTsconfig.replace(/\r\n/g, '\n');
    assert.ok(normalizedTsconfig.endsWith('}\n'));
    assert.ok(!normalizedTsconfig.endsWith('}\n\n'));
  });
});
