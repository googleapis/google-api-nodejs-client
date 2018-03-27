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

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Google OAuth2 API
 *
 * Obtains end-user authorization grants for use with other Google APIs.
 *
 * @example
 * const google = require('googleapis');
 * const oauth2 = google.oauth2('v1');
 *
 * @namespace oauth2
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Oauth2
 */
export class Oauth2 {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  userinfo: Resource$Userinfo;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;

    this.userinfo = new Resource$Userinfo(this);
  }


  /**
   * oauth2.getCertForOpenIdConnect
   * @alias oauth2.getCertForOpenIdConnect
   * @memberOf! oauth2(v1)
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getCertForOpenIdConnect =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$X509>,
       callback?: BodyResponseCallback<Schema$X509>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/oauth2/v1/certs')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$X509>(parameters, callback!);
      };


  /**
   * oauth2.getCertForOpenIdConnectRaw
   * @alias oauth2.getCertForOpenIdConnectRaw
   * @memberOf! oauth2(v1)
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getCertForOpenIdConnectRaw =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Raw>,
       callback?: BodyResponseCallback<Schema$Raw>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/oauth2/v1/raw_public_keys')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Raw>(parameters, callback!);
      };


  /**
   * oauth2.getRobotJwk
   * @alias oauth2.getRobotJwk
   * @memberOf! oauth2(v1)
   *
   * @param {object} params Parameters for request
   * @param {string} params.robotEmail The email of robot account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getRobotJwk =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Jwk>,
       callback?: BodyResponseCallback<Schema$Jwk>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/service_accounts/v1/jwk/{robotEmail}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['robotEmail'],
          pathParams: ['robotEmail'],
          context: this.root
        };
        createAPIRequest<Schema$Jwk>(parameters, callback!);
      };


  /**
   * oauth2.getRobotMetadataRaw
   * @alias oauth2.getRobotMetadataRaw
   * @memberOf! oauth2(v1)
   *
   * @param {object} params Parameters for request
   * @param {string} params.robotEmail The email of robot account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getRobotMetadataRaw =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$Raw>,
       callback?: BodyResponseCallback<Schema$Raw>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/service_accounts/v1/metadata/raw/{robotEmail}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['robotEmail'],
          pathParams: ['robotEmail'],
          context: this.root
        };
        createAPIRequest<Schema$Raw>(parameters, callback!);
      };


  /**
   * oauth2.getRobotMetadataX509
   * @alias oauth2.getRobotMetadataX509
   * @memberOf! oauth2(v1)
   *
   * @param {object} params Parameters for request
   * @param {string} params.robotEmail The email of robot account.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getRobotMetadataX509 =
      (params: any, options: MethodOptions|BodyResponseCallback<Schema$X509>,
       callback?: BodyResponseCallback<Schema$X509>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl +
                      '/service_accounts/v1/metadata/x509/{robotEmail}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['robotEmail'],
          pathParams: ['robotEmail'],
          context: this.root
        };
        createAPIRequest<Schema$X509>(parameters, callback!);
      };


  /**
   * oauth2.tokeninfo
   * @desc Get token info
   * @alias oauth2.tokeninfo
   * @memberOf! oauth2(v1)
   *
   * @param {object=} params Parameters for request
   * @param {string=} params.access_token The oauth2 access token
   * @param {string=} params.id_token The ID token
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  tokeninfo =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Tokeninfo>,
       callback?: BodyResponseCallback<Schema$Tokeninfo>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/oauth2/v1/tokeninfo')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Tokeninfo>(parameters, callback!);
      };
}

export interface Schema$Jwk { keys: any[]; }
export interface Schema$Raw { keyvalues: any[]; }
export interface Schema$Tokeninfo {
  /**
   * The access type granted with this token. It can be offline or online.
   */
  access_type: string;
  /**
   * Who is the intended audience for this token. In general the same as
   * issued_to.
   */
  audience: string;
  /**
   * The email address of the user. Present only if the email scope is present
   * in the request.
   */
  email: string;
  /**
   * Boolean flag which is true if the email address is verified. Present only
   * if the email scope is present in the request.
   */
  email_verified: boolean;
  /**
   * The expiry time of the token, as number of seconds left until expiry.
   */
  expires_in: number;
  /**
   * The issue time of the token, as number of seconds.
   */
  issued_at: number;
  /**
   * To whom was the token issued to. In general the same as audience.
   */
  issued_to: string;
  /**
   * Who issued the token.
   */
  issuer: string;
  /**
   * Nonce of the id token.
   */
  nonce: string;
  /**
   * The space separated list of scopes granted to this token.
   */
  scope: string;
  /**
   * The obfuscated user id.
   */
  user_id: string;
  /**
   * Boolean flag which is true if the email address is verified. Present only
   * if the email scope is present in the request.
   */
  verified_email: boolean;
}
export interface Schema$Userinfoplus {
  /**
   * The user&#39;s email address.
   */
  email: string;
  /**
   * The user&#39;s last name.
   */
  family_name: string;
  /**
   * The user&#39;s gender.
   */
  gender: string;
  /**
   * The user&#39;s first name.
   */
  given_name: string;
  /**
   * The hosted domain e.g. example.com if the user is Google apps user.
   */
  hd: string;
  /**
   * The obfuscated ID of the user.
   */
  id: string;
  /**
   * URL of the profile page.
   */
  link: string;
  /**
   * The user&#39;s preferred locale.
   */
  locale: string;
  /**
   * The user&#39;s full name.
   */
  name: string;
  /**
   * URL of the user&#39;s picture image.
   */
  picture: string;
  /**
   * Boolean flag which is true if the email address is verified. Always
   * verified because we only return the user&#39;s primary email address.
   */
  verified_email: boolean;
}
export interface Schema$X509 {}

export class Resource$Userinfo {
  root: Oauth2;
  v2: Resource$Userinfo$V2;
  constructor(root: Oauth2) {
    this.root = root;
    this.v2 = new Resource$Userinfo$V2(root);
  }

  /**
   * oauth2.userinfo.get
   * @desc Get user info
   * @alias oauth2.userinfo.get
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Userinfoplus>,
       callback?: BodyResponseCallback<Schema$Userinfoplus>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/oauth2/v1/userinfo')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Userinfoplus>(parameters, callback!);
      };
}
export class Resource$Userinfo$V2 {
  root: Oauth2;
  me: Resource$Userinfo$V2$Me;
  constructor(root: Oauth2) {
    this.root = root;
    this.me = new Resource$Userinfo$V2$Me(root);
  }
}
export class Resource$Userinfo$V2$Me {
  root: Oauth2;
  constructor(root: Oauth2) {
    this.root = root;
  }

  /**
   * oauth2.userinfo.v2.me.get
   * @desc Get user info
   * @alias oauth2.userinfo.v2.me.get
   * @memberOf! ()
   *
   * @param {object=} params Parameters for request
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get =
      (params: any,
       options: MethodOptions|BodyResponseCallback<Schema$Userinfoplus>,
       callback?: BodyResponseCallback<Schema$Userinfoplus>) => {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url:
                    (rootUrl + '/userinfo/v2/me').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: [],
          pathParams: [],
          context: this.root
        };
        createAPIRequest<Schema$Userinfoplus>(parameters, callback!);
      };
}
