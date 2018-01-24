// Copyright 2012-2016, Google, Inc.
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

import {Compute, GoogleAuth, JWT, OAuth2Client} from 'google-auth-library';
import * as apis from '../apis';
import {Discovery} from './discovery';

export class AuthPlus extends GoogleAuth {
  // tslint:disable-next-line: variable-name
  JWT = JWT;
  // tslint:disable-next-line: variable-name
  Compute = Compute;
  // tslint:disable-next-line: variable-name
  OAuth2 = OAuth2Client;
}

export class GoogleApis extends apis.GeneratedAPIs {
  private _discovery = new Discovery({debug: false, includePrivate: false});
  auth = new AuthPlus();
  // tslint:disable-next-line: no-any
  _options: any;

  /**
   * GoogleApis constructor.
   *
   * @example
   * const GoogleApis = require('googleapis').GoogleApis;
   * const google = new GoogleApis();
   *
   * @class GoogleApis
   * @param {Object} [options] Configuration options.
   */
  constructor(options?) {
    super();
    this.options(options);
    this.addAPIs(apis);
  }

  /**
   * Set options.
   *
   * @param  {Object} [options] Configuration options.
   */
  options(options) {
    this._options = options || {};
  }

  /**
   * Add APIs endpoints to googleapis object
   * E.g. googleapis.drive and googleapis.datastore
   *
   * @name GoogleApis#addAPIs
   * @method
   * @param {Object} apis Apis to be added to this GoogleApis instance.
   * @private
   */
  private addAPIs(apisToAdd) {
    for (const apiName in apisToAdd) {
      if (apisToAdd.hasOwnProperty(apiName)) {
        this[apiName] = apisToAdd[apiName].bind(this);
      }
    }
  }

  /**
   * Dynamically generate an apis object that can provide Endpoint objects for
   * the discovered APIs.
   *
   * @example
   * const google = require('googleapis');
   * const discoveryUrl =
   * 'https://myapp.appspot.com/_ah/api/discovery/v1/apis/';
   * google.discover(discoveryUrl, function (err) {
   *   const someapi = google.someapi('v1');
   * });
   *
   * @name GoogleApis#discover
   * @method
   * @param {string} url Url to the discovery service for a set of APIs. e.g.,
   * https://www.googleapis.com/discovery/v1/apis
   * @param {Function} callback Callback function.
   */
  discover(url, callback) {
    const self = this;

    this._discovery.discoverAllAPIs(url, (err, allApis) => {
      if (err) {
        return callback(err);
      }
      self.addAPIs(allApis);
      callback();
    });
  }

  /**
   * Dynamically generate an Endpoint object from a discovery doc.
   *
   * @example
   * const google = require('google');
   * const discoveryDocUrl =
   * 'https://myapp.appspot.com/_ah/api/discovery/v1/apis/someapi/v1/rest';
   * google.discoverApi(discoveryDocUrl, function (err, someapi) {
   *   // use someapi
   * });
   *
   * @name GoogleApis#discoverAPI
   * @method
   * @param {string} path Url or file path to discover doc for a single API.
   * @param {object} [options] Options to configure the Endpoint object generated
   * from the discovery doc.
   * @param {Function} callback Callback function.
   */
  discoverAPI(apiPath, options, callback) {
    const self = this;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!options) {
      options = {};
    }
    // Creating an object, so Pascal case is appropriate.
    // tslint:disable-next-line
    this._discovery.discoverAPI(apiPath, (err, Endpoint) => {
      if (err) {
        return callback(err);
      }
      const ep = new Endpoint(options);
      ep.google = self;                          // for drive.google.transporter
      return callback(null, Object.freeze(ep));  // create new & freeze
    });
  }
}
