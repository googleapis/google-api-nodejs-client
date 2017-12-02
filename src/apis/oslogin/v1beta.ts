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

import {createAPIRequest} from '../../lib/apirequest';

/**
 * Google Cloud OS Login API
 *
 * Manages OS login configuration for Google account users.
 *
 * @example
 * const google = require('googleapis');
 * const oslogin = google.oslogin('v1beta');
 *
 * @namespace oslogin
 * @type {Function}
 * @version v1beta
 * @variation v1beta
 * @param {object=} options Options for Oslogin
 */
function Oslogin(options) {
  const self = this;
  self._options = options || {};
  self.users = {
    /**
     * oslogin.users.getLoginProfile
     * @desc Retrieves the profile information used for logging in to a virtual
     * machine on Google Compute Engine.
     * @alias oslogin.users.getLoginProfile
     * @memberOf! oslogin(v1beta)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The unique ID for the user in format `users/{user}`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getLoginProfile(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta/{name}/loginProfile')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * oslogin.users.importSshPublicKey
        * @desc Adds an SSH public key and returns the profile information.
        * Default POSIX account information is set when no username and UID
        * exist as part of the login profile.
        * @alias oslogin.users.importSshPublicKey
        * @memberOf! oslogin(v1beta)
        *
        * @param {object} params Parameters for request
        * @param {string} params.parent The unique ID for the user in format `users/{user}`.
        * @param {string=} params.projectId The project ID of the Google Cloud Platform project.
        * @param {oslogin(v1beta).SshPublicKey} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    importSshPublicKey(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1beta/{parent}:importSshPublicKey')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    },
    projects: {
      /**
       * oslogin.users.projects.delete
       * @desc Deletes a POSIX account.
       * @alias oslogin.users.projects.delete
       * @memberOf! oslogin(v1beta)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name A reference to the POSIX account to update. POSIX accounts are identified by the project ID they are associated with. A reference to the POSIX account is in format `users/{user}/projects/{project}`.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1beta/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    },
    sshPublicKeys: {
      /**
       * oslogin.users.sshPublicKeys.delete
       * @desc Deletes an SSH public key.
       * @alias oslogin.users.sshPublicKeys.delete
       * @memberOf! oslogin(v1beta)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1beta/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * oslogin.users.sshPublicKeys.get
          * @desc Retrieves an SSH public key.
          * @alias oslogin.users.sshPublicKeys.get
          * @memberOf! oslogin(v1beta)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      get(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1beta/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * oslogin.users.sshPublicKeys.patch
          * @desc Updates an SSH public key and returns the profile information.
          * This method supports patch semantics.
          * @alias oslogin.users.sshPublicKeys.patch
          * @memberOf! oslogin(v1beta)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
          * @param {string=} params.updateMask Mask to control which fields get updated. Updates all if not present.
          * @param {oslogin(v1beta).SshPublicKey} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      patch(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://oslogin.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1beta/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    }
  };
}
/**
 * @typedef Empty
 * @memberOf! oslogin(v1beta)
 * @type object
 */
/**
 * @typedef ImportSshPublicKeyResponse
 * @memberOf! oslogin(v1beta)
 * @type object
 * @property {oslogin(v1beta).LoginProfile} loginProfile The login profile information for the user.
 */
/**
 * @typedef LoginProfile
 * @memberOf! oslogin(v1beta)
 * @type object
 * @property {string} name The primary email address that uniquely identifies the user.
 * @property {oslogin(v1beta).PosixAccount[]} posixAccounts The list of POSIX accounts associated with the user.
 * @property {object} sshPublicKeys A map from SSH public key fingerprint to the associated key object.
 * @property {boolean} suspended Indicates if the user is suspended. A suspended user cannot log in but their profile information is retained.
 */
/**
 * @typedef PosixAccount
 * @memberOf! oslogin(v1beta)
 * @type object
 * @property {string} accountId Output only. A POSIX account identifier.
 * @property {string} gecos The GECOS (user information) entry for this account.
 * @property {string} gid The default group ID.
 * @property {string} homeDirectory The path to the home directory for this account.
 * @property {boolean} primary Only one POSIX account can be marked as primary.
 * @property {string} shell The path to the logic shell for this account.
 * @property {string} systemId System identifier for which account the username or uid applies to. By default, the empty value is used.
 * @property {string} uid The user ID.
 * @property {string} username The username of the POSIX account.
 */
/**
 * @typedef SshPublicKey
 * @memberOf! oslogin(v1beta)
 * @type object
 * @property {string} expirationTimeUsec An expiration time in microseconds since epoch.
 * @property {string} fingerprint Output only. The SHA-256 fingerprint of the SSH public key.
 * @property {string} key Public key text in SSH format, defined by &lt;a href=&quot;https://www.ietf.org/rfc/rfc4253.txt&quot; target=&quot;_blank&quot;&gt;RFC4253&lt;/a&gt; section 6.6.
 */

export = Oslogin;
