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

import {GoogleApis} from '../index';
import {buildurl} from '../scripts/generator_utils';

import {APIRequestParams, createAPIRequest} from './apirequest';
import {Discovery} from './discovery';

export class Endpoint {
  private _options: {};
  google: GoogleApis|Discovery;

  constructor(options: {}) {
    this._options = options || {};
  }

  /**
   * Given a schema, add methods and resources to a target.
   *
   * @param {object} target The target to which to apply the schema.
   * @param {object} rootSchema The top-level schema, so we don't lose track of it
   * during recursion.
   * @param {object} schema The current schema from which to extract methods and
   * resources.
   * @param {object} context The context to add to each method.
   */
  applySchema(target, rootSchema, schema, context) {
    this.applyMethodsFromSchema(target, rootSchema, schema, context);
    if (schema.resources) {
      for (const resourceName in schema.resources) {
        if (schema.resources.hasOwnProperty(resourceName)) {
          const resource = schema.resources[resourceName];
          if (!target[resourceName]) {
            target[resourceName] = {};
          }
          this.applySchema(target[resourceName], rootSchema, resource, context);
        }
      }
    }
  }

  /**
   * Given a schema, add methods to a target.
   *
   * @param {object} target The target to which to apply the methods.
   * @param {object} rootSchema The top-level schema, so we don't lose track of it
   * during recursion.
   * @param {object} schema The current schema from which to extract methods.
   * @param {object} context The context to add to each method.
   */
  private applyMethodsFromSchema(target, rootSchema, schema, context) {
    if (schema.methods) {
      for (const name in schema.methods) {
        if (schema.methods.hasOwnProperty(name)) {
          const method = schema.methods[name];
          target[name] = this.makeMethod(rootSchema, method, context);
        }
      }
    }
  }

  /**
   * Given a method schema, add a method to a target.
   *
   * @param {object} target The target to which to add the method.
   * @param {object} schema The top-level schema that contains the rootUrl, etc.
   * @param {object} method The method schema from which to generate the method.
   * @param {object} context The context to add to the method.
   */
  private makeMethod(schema, method, context) {
    return (params, callback) => {
      const schemaUrl =
          buildurl(schema.rootUrl + schema.servicePath + method.path);

      const parameters = {
        options: {
          url: schemaUrl.substring(1, schemaUrl.length - 1),
          method: method.httpMethod
        },
        params,
        requiredParams: method.parameterOrder || [],
        pathParams: this.getPathParams(method.parameters),
        context,
        mediaUrl: null
      } as APIRequestParams;

      if (method.mediaUpload && method.mediaUpload.protocols &&
          method.mediaUpload.protocols.simple &&
          method.mediaUpload.protocols.simple.path) {
        const mediaUrl =
            buildurl(schema.rootUrl + method.mediaUpload.protocols.simple.path);
        parameters.mediaUrl = mediaUrl.substring(1, mediaUrl.length - 1);
      }

      return createAPIRequest(parameters, callback);
    };
  }

  private getPathParams(params) {
    const pathParams = new Array<string>();
    if (typeof params !== 'object') {
      params = {};
    }
    Object.keys(params).forEach(key => {
      if (params[key].location === 'path') {
        pathParams.push(key);
      }
    });
    return pathParams;
  }
}