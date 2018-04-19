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
 * Cloud OS Login API
 *
 * Manages OS login configuration for Google account users.
 *
 * @example
 * const google = require('googleapis');
 * const oslogin = google.oslogin('v1');
 *
 * @namespace oslogin
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Oslogin
 */
export class Oslogin {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  users: Resource$Users;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.users = new Resource$Users(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request or
 * the response type of an API method. For instance:      service Foo { rpc
 * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
 * representation for `Empty` is empty JSON object `{}`.
 */
export interface Schema$Empty {}
/**
 * A response message for importing an SSH public key.
 */
export interface Schema$ImportSshPublicKeyResponse {
  /**
   * The login profile information for the user.
   */
  loginProfile: Schema$LoginProfile;
}
/**
 * The user profile information used for logging in to a virtual machine on
 * Google Compute Engine.
 */
export interface Schema$LoginProfile {
  /**
   * A unique user ID.
   */
  name: string;
  /**
   * The list of POSIX accounts associated with the user.
   */
  posixAccounts: Schema$PosixAccount[];
  /**
   * A map from SSH public key fingerprint to the associated key object.
   */
  sshPublicKeys: any;
}
/**
 * The POSIX account information associated with a Google account.
 */
export interface Schema$PosixAccount {
  /**
   * Output only. A POSIX account identifier.
   */
  accountId: string;
  /**
   * The GECOS (user information) entry for this account.
   */
  gecos: string;
  /**
   * The default group ID.
   */
  gid: string;
  /**
   * The path to the home directory for this account.
   */
  homeDirectory: string;
  /**
   * Only one POSIX account can be marked as primary.
   */
  primary: boolean;
  /**
   * The path to the logic shell for this account.
   */
  shell: string;
  /**
   * System identifier for which account the username or uid applies to. By
   * default, the empty value is used.
   */
  systemId: string;
  /**
   * The user ID.
   */
  uid: string;
  /**
   * The username of the POSIX account.
   */
  username: string;
}
/**
 * The SSH public key information associated with a Google account.
 */
export interface Schema$SshPublicKey {
  /**
   * An expiration time in microseconds since epoch.
   */
  expirationTimeUsec: string;
  /**
   * Output only. The SHA-256 fingerprint of the SSH public key.
   */
  fingerprint: string;
  /**
   * Public key text in SSH format, defined by &lt;a
   * href=&quot;https://www.ietf.org/rfc/rfc4253.txt&quot;
   * target=&quot;_blank&quot;&gt;RFC4253&lt;/a&gt; section 6.6.
   */
  key: string;
}

export class Resource$Users {
  root: Oslogin;
  projects: Resource$Users$Projects;
  sshPublicKeys: Resource$Users$Sshpublickeys;
  constructor(root: Oslogin) {
    this.root = root;
    this.getRoot.bind(this);
    this.projects = new Resource$Users$Projects(root);
    this.sshPublicKeys = new Resource$Users$Sshpublickeys(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * oslogin.users.getLoginProfile
   * @desc Retrieves the profile information used for logging in to a virtual
   * machine on Google Compute Engine.
   * @alias oslogin.users.getLoginProfile
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The unique ID for the user in format `users/{user}`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getLoginProfile(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$LoginProfile>;
  getLoginProfile(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LoginProfile>,
      callback?: BodyResponseCallback<Schema$LoginProfile>): void;
  getLoginProfile(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$LoginProfile>,
      callback?: BodyResponseCallback<Schema$LoginProfile>):
      void|AxiosPromise<Schema$LoginProfile> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/loginProfile')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$LoginProfile>(parameters, callback);
    } else {
      return createAPIRequest<Schema$LoginProfile>(parameters);
    }
  }


  /**
   * oslogin.users.importSshPublicKey
   * @desc Adds an SSH public key and returns the profile information. Default
   * POSIX account information is set when no username and UID exist as part of
   * the login profile.
   * @alias oslogin.users.importSshPublicKey
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.parent The unique ID for the user in format `users/{user}`.
   * @param {string=} params.projectId The project ID of the Google Cloud Platform project.
   * @param {().SshPublicKey} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  importSshPublicKey(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ImportSshPublicKeyResponse>;
  importSshPublicKey(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ImportSshPublicKeyResponse>,
      callback?: BodyResponseCallback<Schema$ImportSshPublicKeyResponse>): void;
  importSshPublicKey(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$ImportSshPublicKeyResponse>,
      callback?: BodyResponseCallback<Schema$ImportSshPublicKeyResponse>):
      void|AxiosPromise<Schema$ImportSshPublicKeyResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}:importSshPublicKey')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['parent'],
      pathParams: ['parent'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$ImportSshPublicKeyResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ImportSshPublicKeyResponse>(parameters);
    }
  }
}
export class Resource$Users$Projects {
  root: Oslogin;
  constructor(root: Oslogin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * oslogin.users.projects.delete
   * @desc Deletes a POSIX account.
   * @alias oslogin.users.projects.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name A reference to the POSIX account to update. POSIX accounts are identified by the project ID they are associated with. A reference to the POSIX account is in format `users/{user}/projects/{project}`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }
}

export class Resource$Users$Sshpublickeys {
  root: Oslogin;
  constructor(root: Oslogin) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * oslogin.users.sshPublicKeys.delete
   * @desc Deletes an SSH public key.
   * @alias oslogin.users.sshPublicKeys.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  delete(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  delete(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>):
      void|AxiosPromise<Schema$Empty> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }


  /**
   * oslogin.users.sshPublicKeys.get
   * @desc Retrieves an SSH public key.
   * @alias oslogin.users.sshPublicKeys.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$SshPublicKey>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SshPublicKey>,
      callback?: BodyResponseCallback<Schema$SshPublicKey>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SshPublicKey>,
      callback?: BodyResponseCallback<Schema$SshPublicKey>):
      void|AxiosPromise<Schema$SshPublicKey> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SshPublicKey>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SshPublicKey>(parameters);
    }
  }


  /**
   * oslogin.users.sshPublicKeys.patch
   * @desc Updates an SSH public key and returns the profile information. This
   * method supports patch semantics.
   * @alias oslogin.users.sshPublicKeys.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
   * @param {string=} params.updateMask Mask to control which fields get updated. Updates all if not present.
   * @param {().SshPublicKey} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$SshPublicKey>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SshPublicKey>,
      callback?: BodyResponseCallback<Schema$SshPublicKey>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$SshPublicKey>,
      callback?: BodyResponseCallback<Schema$SshPublicKey>):
      void|AxiosPromise<Schema$SshPublicKey> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$SshPublicKey>(parameters, callback);
    } else {
      return createAPIRequest<Schema$SshPublicKey>(parameters);
    }
  }
}
