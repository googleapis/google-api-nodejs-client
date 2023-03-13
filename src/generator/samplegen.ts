// Copyright 2020 Google LLC
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

import * as path from 'path';
import * as prettier from 'prettier';
import {
  Schema,
  SchemaMethod,
  SchemaMethods,
  SchemaResources,
  SchemaItem,
  SchemaItems,
} from 'googleapis-common';
import * as nunjucks from 'nunjucks';
import * as filters from './filters';
import * as fs from 'fs';
import * as util from 'util';

const writeFile = util.promisify(fs.writeFile);
const srcPath = path.join(__dirname, '../../../src');
const TEMPLATES_DIR = path.join(srcPath, 'generator/templates');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierConfig: prettier.Options = require('../../../node_modules/gts/.prettierrc.json');
prettierConfig.parser = 'babel';

const env = new nunjucks.Environment(
  new nunjucks.FileSystemLoader(TEMPLATES_DIR),
  {trimBlocks: true}
);
env.addFilter('unRegex', filters.unRegex);
env.addFilter('cleanPropertyName', filters.cleanPropertyName);
env.addFilter('cleanComments', filters.cleanComments);

interface SampleData {
  api: Schema;
  method: SchemaMethod;
  responseExample?: {};
  requestExample?: {};
  standalone?: boolean;
}

/**
 * Given a top level Schema, collect every method on all resource objects.
 * Generate a sample, format it, and attach to the `method.fragment` field.
 * @param schema Top level schema for the API.
 */
export async function addFragments(schema: Schema) {
  const methods = getAllMethods(schema);
  for (const method of methods) {
    const sampleData = getSample(schema, method);
    sampleData.standalone = false;
    let sample = env.render('sample.njk', sampleData);
    sample = prettier.format(sample, prettierConfig);
    method.fragment = sample;
  }
}

/**
 * Generate all samples, and write them into the samples folder on disk.
 * @param apiPath Location on disk where the API lives.
 * @param schema The top level Schema containing API information.
 */
export async function generateSamples(apiPath: string, schema: Schema) {
  const samplesPath = path.join(apiPath, 'samples', schema.version);
  await mkdirp(samplesPath);
  const methods = getAllMethods(schema);
  for (const method of methods) {
    const sampleData = getSample(schema, method);
    sampleData.standalone = true;
    const samplePath = path.join(samplesPath, `${method.id}.js`);
    let sample = env.render('sample.njk', sampleData);
    sample = prettier.format(sample, prettierConfig);
    await writeFile(samplePath, sample, {encoding: 'utf8'});
  }
}

function getSample(schema: Schema, method: SchemaMethod) {
  let responseExample: undefined | {};
  if (method.response) {
    const item = schema.schemas[method.response.$ref!];
    responseExample = flattenSchema(item, schema.schemas);
  }
  let requestExample: {} | undefined;
  if (method.request) {
    const item = schema.schemas[method.request.$ref!];
    requestExample = flattenSchema(item, schema.schemas);
  }
  const sampleData: SampleData = {
    api: schema,
    method,
    responseExample,
    requestExample,
  };
  return sampleData;
}

interface MethodBag {
  methods?: SchemaMethods;
  resources?: SchemaResources;
}

/**
 * Iterate over items in the schema recursively, and return a flattened
 * list of all methods.
 * @param bag
 * @param methods
 */
export function getAllMethods(bag: MethodBag, methods?: SchemaMethod[]) {
  if (!methods) {
    methods = new Array<SchemaMethod>();
  }
  if (bag.methods) {
    for (const m of Object.keys(bag.methods)) {
      methods.push(bag.methods[m]);
    }
  }
  if (bag.resources) {
    for (const r of Object.keys(bag.resources)) {
      getAllMethods(bag.resources[r], methods);
    }
  }
  return methods;
}

/**
 * Provide a flattened representation of what the structure for a
 * given request or response could look like.
 */
function flattenSchema(item: SchemaItem, schemas: SchemaItems) {
  // tslint:disable-next-line no-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = {};
  if (item.properties) {
    for (const [name, details] of Object.entries(item.properties)) {
      result[name] = getExamplePropertyValue(name, details, schemas);
    }
  }
  return result;
}

function getExamplePropertyValue(
  name: string,
  details: SchemaItem,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  schemas: SchemaItems
): {} {
  switch (details.type) {
    case 'string':
      return `my_${name}`;
    case 'boolean':
      return false;
    case 'object':
      return {};
    case 'integer':
      return 0;
    case 'array':
      return [];
    default:
      return {};
  }
}
