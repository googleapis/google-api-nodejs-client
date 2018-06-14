/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace iamcredentials_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * IAM Service Account Credentials API
   *
   * IAM Service Account Credentials API
   *
   * @example
   * const {google} = require('googleapis');
   * const iamcredentials = google.iamcredentials('v1');
   *
   * @namespace iamcredentials
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Iamcredentials
   */
  export class Iamcredentials {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;


    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }
  }
}
