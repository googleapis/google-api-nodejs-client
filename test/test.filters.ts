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
import {describe, it} from 'mocha';
import * as filters from '../src/generator/filters';
import {SchemaMethod, SchemaParameters, SchemaItem} from 'googleapis-common';

describe(__filename, () => {
  it('should convert a dashed word to camelcase', () => {
    const param = 'well-known';
    const expected = 'wellKnown';
    const result = filters.camelify(param);
    assert.strictEqual(result, expected);
  });

  it('should strip /* comments from disco', () => {
    const param = 'This would /* cause problems */ for sure';
    const expected = 'This would /x cause problems x/ for sure';
    const result = filters.cleanComments(param);
    assert.strictEqual(result, expected);
  });

  it('should strip reserved characters property names', () => {
    const param = 'property-name';
    const expected = "'property-name'";
    const result = filters.cleanPropertyName(param);
    assert.strictEqual(result, expected);
  });

  it('should check for simple types', () => {
    assert.strictEqual(filters.isSimpleType('{}'), false);
    assert.strictEqual(filters.isSimpleType('1'), true);
  });

  it('should convert regex paths to examples', () => {
    const path = '^projects/[^/]+$';
    const expected = 'projects/my-project';
    const result = filters.unRegex(path);
    assert.strictEqual(result, expected);
    assert.strictEqual(filters.unRegex(1 as {} as string), '');
  });

  it('should remove double slashes from urls', () => {
    const original = 'https://github.com//googleapis//google-cloud-node';
    const expected = "'https://github.com/googleapis/google-cloud-node'";
    assert.strictEqual(filters.buildurl(original), expected);
  });

  it('should find resource params', () => {
    const withResource = {
      parameters: {
        resource: {},
      },
    } as {} as SchemaMethod;
    assert.strictEqual(filters.hasResourceParam(withResource), true);
    const withoutResource1 = {} as SchemaMethod;
    assert.strictEqual(filters.hasResourceParam(withoutResource1), false);
    const withoutResource2 = {
      parameters: {},
    } as SchemaMethod;
    assert.strictEqual(filters.hasResourceParam(withoutResource2), false);
  });

  it('should get safe param name', () => {
    const original = 'resource';
    const expected = 'resource_';
    assert.strictEqual(filters.getSafeParamName(original), expected);
    assert.strictEqual(filters.getSafeParamName('ok'), 'ok');
  });

  it('should get path parameters', () => {
    let emptyParams: SchemaParameters;
    assert.deepStrictEqual(filters.getPathParams(emptyParams!), []);

    const params = {
      1: {
        location: 'path',
      },
      2: {},
    } as {} as SchemaParameters;
    const expected = ['1'];
    assert.deepStrictEqual(filters.getPathParams(params), expected);
  });

  it('should get a ref type', () => {
    const item1 = {
      $ref: 'Food',
    };
    const expected1 = 'Schema$Food';
    assert.strictEqual(filters.getType(item1), expected1);
  });

  it('should get an integer type', () => {
    const item2 = {
      type: 'integer',
    } as SchemaItem;
    const expected2 = 'number';
    assert.strictEqual(filters.getType(item2), expected2);
  });

  it('should get a boolean type', () => {
    const item3 = {
      type: 'boolean',
    } as SchemaItem;
    const expected3 = 'boolean';
    assert.strictEqual(filters.getType(item3), expected3);
  });

  it('should get object type for any', () => {
    assert.strictEqual(filters.getObjectType({}), 'any');
  });

  it('should get object type for item.properties', () => {
    const item = {
      properties: {
        count: {
          type: 'integer',
        },
      },
    } as SchemaItem;
    assert.strictEqual(filters.getObjectType(item), '{ count?: number; }');
  });

  it('should get object type for item.additionalProperties', () => {
    const item = {
      additionalProperties: {
        type: 'any',
      },
    } as SchemaItem;
    const expected = '{ [key: string]: any; }';
    assert.strictEqual(filters.getObjectType(item), expected);
  });
});
