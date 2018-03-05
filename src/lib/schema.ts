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

/**
 * These are a collection of interfaces that represent the GoogleApis
 * Discovery json formats.
 */

export interface Schemas {
  discoveryVersion: string;
  kind: string;
  items: Schema[];
}

export interface Schema {
  auth: {oauth2: {scopes: {[index: string]: {description: string;}}}};
  basePath: string;
  baseUrl: string;
  batchPath: string;
  description: string;
  discoveryVersion: string;
  discoveryRestUrl: string;
  documentationLink: string;
  etag: string;
  icons: {x16: string, x32: string};
  id: string;
  kind: string;
  methods: SchemaMethods;
  name: string;
  ownerDomain: string;
  ownerName: string;
  parameters: SchemaParameters;
  protocol: string;
  resources: SchemaResources;
  revision: string;
  rootUrl: string;
  schemas: SchemaItems;
  servicePath: string;
  title: string;
  version: string;
}

export interface SchemaResources { [index: string]: SchemaResource; }

export interface SchemaResource {
  methods?: SchemaMethods;
  resources?: SchemaResources;
}

export interface SchemaItems { [index: string]: SchemaItem; }

export interface SchemaItem {
  description?: string;
  default?: string;
  id?: string;
  properties?: {[index: string]: SchemaItem};
  items?: {[index: string]: SchemaItem};
  type?: SchemaType;
  format?: ParameterFormat;
  $ref?: string;
}

export interface SchemaParameters { [index: string]: SchemaParameter; }

export interface SchemaParameter {
  default: string;
  description: string;
  location: string;
  enum: string[];
  enumDescription: string[];
  type: SchemaType;
  format: ParameterFormat;
  required: boolean;
}

export interface SchemaMethods { [index: string]: SchemaMethod; }

export interface SchemaMethod {
  description: string;
  httpMethod: HttpMethod;
  id: string;
  parameterOrder?: string[];
  parameters?: {[index: string]: SchemaParameter};
  path: string;
  request: {$ref: string;};
  response: {$ref: string;};
  sampleUrl: string;
  scopes: string[];
  fragment: string;
  mediaUpload: {protocols: {simple: {path: string;};};};
}

export interface FragmentResponse {
  codeFragment: {[index: string]: {fragment: string;}};
}

export type ParameterFormat = 'int32';
export type HttpMethod = 'GET'|'PATCH'|'PUT';
export type SchemaType = 'object'|'integer'|'string'|'array'|'boolean';
