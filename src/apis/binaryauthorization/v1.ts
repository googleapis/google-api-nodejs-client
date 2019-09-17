/**
 * Copyright 2019 Google LLC
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

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace binaryauthorization_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  interface StandardParameters {
    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Binary Authorization API
   *
   * The management interface for Binary Authorization, a system providing policy control for images deployed to Kubernetes Engine clusters.
   *
   * @example
   * const {google} = require('googleapis');
   * const binaryauthorization = google.binaryauthorization('v1');
   *
   * @namespace binaryauthorization
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Binaryauthorization
   */
  export class Binaryauthorization {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * An admission rule specifies either that all container images used in a pod creation request must be attested to by one or more attestors, that all pod creations will be allowed, or that all pod creations will be denied.  Images matching an admission whitelist pattern are exempted from admission rules and will never block a pod creation.
   */
  export interface Schema$AdmissionRule {
    /**
     * Required. The action when a pod creation is denied by the admission rule.
     */
    enforcementMode?: string | null;
    /**
     * Required. How this admission rule will be evaluated.
     */
    evaluationMode?: string | null;
    /**
     * Optional. The resource names of the attestors that must attest to a container image, in the format `projects/x/attestors/x. Each attestor must exist before a policy can reference it.  To add an attestor to a policy the principal issuing the policy change request must be able to read the attestor resource.  Note: this field must be non-empty when the evaluation_mode field specifies REQUIRE_ATTESTATION, otherwise it must be empty.
     */
    requireAttestationsBy?: string[] | null;
  }
  /**
   * An admission whitelist pattern exempts images from checks by admission rules.
   */
  export interface Schema$AdmissionWhitelistPattern {
    /**
     * An image name pattern to whitelist, in the form `registry/path/to/image`. This supports a trailing `*` as a wildcard, but this is allowed only in text after the `registry/` part.
     */
    namePattern?: string | null;
  }
  /**
   * An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
   */
  export interface Schema$Attestor {
    /**
     * Optional. A descriptive comment.  This field may be updated. The field may be displayed in chooser dialogs.
     */
    description?: string | null;
    /**
     * Required. The resource name, in the format: `projects/x/attestors/x. This field may not be updated.
     */
    name?: string | null;
    /**
     * Output only. Time when the attestor was last updated.
     */
    updateTime?: string | null;
    /**
     * A Grafeas Attestation.Authority Note, created by the user.
     */
    userOwnedGrafeasNote?: Schema$UserOwnedGrafeasNote;
  }
  /**
   * An attestor public key that will be used to verify attestations signed by this attestor.
   */
  export interface Schema$AttestorPublicKey {
    /**
     * ASCII-armored representation of a PGP public key, as the entire output by the command `gpg --export --armor foo@example.com` (either LF or CRLF line endings). When using this field, `id` should be left blank.  The BinAuthz API handlers will calculate the ID and fill it in automatically.  BinAuthz computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex.  If `id` is provided by the caller, it will be overwritten by the API-calculated ID.
     */
    asciiArmoredPgpPublicKey?: string | null;
    /**
     * Optional. A descriptive comment. This field may be updated.
     */
    comment?: string | null;
    /**
     * The ID of this public key. Signatures verified by BinAuthz must include the ID of the public key that can be used to verify them, and that ID must match the contents of this field exactly. Additional restrictions on this field can be imposed based on which public key type is encapsulated. See the documentation on `public_key` cases below for details.
     */
    id?: string | null;
    /**
     * A raw PKIX SubjectPublicKeyInfo format public key.  NOTE: `id` may be explicitly provided by the caller when using this type of public key, but it MUST be a valid RFC3986 URI. If `id` is left blank, a default one will be computed based on the digest of the DER encoding of the public key.
     */
    pkixPublicKey?: Schema$PkixPublicKey;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Response message for BinauthzManagementService.ListAttestors.
   */
  export interface Schema$ListAttestorsResponse {
    /**
     * The list of attestors.
     */
    attestors?: Schema$Attestor[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListAttestorsRequest.page_token field in the subsequent call to the `ListAttestors` method to retrieve the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * A public key in the PkixPublicKey format (see https://tools.ietf.org/html/rfc5280#section-4.1.2.7 for details). Public keys of this type are typically textually encoded using the PEM format.
   */
  export interface Schema$PkixPublicKey {
    /**
     * A PEM-encoded public key, as described in https://tools.ietf.org/html/rfc7468#section-13
     */
    publicKeyPem?: string | null;
    /**
     * The signature algorithm used to verify a message against a signature using this key. These signature algorithm must match the structure and any object identifiers encoded in `public_key_pem` (i.e. this algorithm must match that of the public key).
     */
    signatureAlgorithm?: string | null;
  }
  /**
   * A policy for container image binary authorization.
   */
  export interface Schema$Policy {
    /**
     * Optional. Admission policy whitelisting. A matching admission request will always be permitted. This feature is typically used to exclude Google or third-party infrastructure images from Binary Authorization policies.
     */
    admissionWhitelistPatterns?: Schema$AdmissionWhitelistPattern[];
    /**
     * Optional. Per-cluster admission rules. Cluster spec format: `location.clusterId`. There can be at most one admission rule per cluster spec. A `location` is either a compute zone (e.g. us-central1-a) or a region (e.g. us-central1). For `clusterId` syntax restrictions see https://cloud.google.com/container-engine/reference/rest/v1/projects.zones.clusters.
     */
    clusterAdmissionRules?: {[key: string]: Schema$AdmissionRule} | null;
    /**
     * Required. Default admission rule for a cluster without a per-cluster, per- kubernetes-service-account, or per-istio-service-identity admission rule.
     */
    defaultAdmissionRule?: Schema$AdmissionRule;
    /**
     * Optional. A descriptive comment.
     */
    description?: string | null;
    /**
     * Optional. Controls the evaluation of a Google-maintained global admission policy for common system-level images. Images not covered by the global policy will be subject to the project admission policy. This setting has no effect when specified inside a global admission policy.
     */
    globalPolicyEvaluationMode?: string | null;
    /**
     * Output only. The resource name, in the format `projects/x/policy`. There is at most one policy per project.
     */
    name?: string | null;
    /**
     * Output only. Time when the policy was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * An user owned Grafeas note references a Grafeas Attestation.Authority Note created by the user.
   */
  export interface Schema$UserOwnedGrafeasNote {
    /**
     * Output only. This field will contain the service account email address that this Attestor will use as the principal when querying Container Analysis. Attestor administrators must grant this service account the IAM role needed to read attestations from the note_reference in Container Analysis (`containeranalysis.notes.occurrences.viewer`).  This email address is fixed for the lifetime of the Attestor, but callers should not make any other assumptions about the service account email; future versions may use an email based on a different naming pattern.
     */
    delegationServiceAccountEmail?: string | null;
    /**
     * Required. The Grafeas resource name of a Attestation.Authority Note, created by the user, in the format: `projects/x/notes/x. This field may not be updated.  An attestation by this attestor is stored as a Grafeas Attestation.Authority Occurrence that names a container image and that links to this Note. Grafeas is an external dependency.
     */
    noteReference?: string | null;
    /**
     * Optional. Public keys that verify attestations signed by this attestor.  This field may be updated.  If this field is non-empty, one of the specified public keys must verify that an attestation was signed by this attestor for the image specified in the admission request.  If this field is empty, this attestor always returns that no valid attestations exist.
     */
    publicKeys?: Schema$AttestorPublicKey[];
  }

  export class Resource$Projects {
    context: APIRequestContext;
    attestors: Resource$Projects$Attestors;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.attestors = new Resource$Projects$Attestors(this.context);
    }

    /**
     * binaryauthorization.projects.getPolicy
     * @desc A policy specifies the attestors that must attest to a container image, before the project is allowed to deploy that image. There is at most one policy per project. All image admission requests are permitted if a project has no policy.  Gets the policy for this project. Returns a default policy if the project does not have one.
     * @alias binaryauthorization.projects.getPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name of the policy to retrieve, in the format `projects/x/policy`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getPolicy(
      params?: Params$Resource$Projects$Getpolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getPolicy(
      params: Params$Resource$Projects$Getpolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getPolicy(
      params: Params$Resource$Projects$Getpolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Getpolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getpolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getpolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * binaryauthorization.projects.updatePolicy
     * @desc Creates or updates a project's policy, and returns a copy of the new policy. A policy is always updated as a whole, to avoid race conditions with concurrent policy enforcement (or management!) requests. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed.
     * @alias binaryauthorization.projects.updatePolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. The resource name, in the format `projects/x/policy`. There is at most one policy per project.
     * @param {().Policy} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updatePolicy(
      params?: Params$Resource$Projects$Updatepolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    updatePolicy(
      params: Params$Resource$Projects$Updatepolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    updatePolicy(
      params: Params$Resource$Projects$Updatepolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    updatePolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    updatePolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Updatepolicy
        | BodyResponseCallback<Schema$Policy>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback?: BodyResponseCallback<Schema$Policy>
    ): void | GaxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Updatepolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Updatepolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Getpolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name of the policy to retrieve, in the format `projects/x/policy`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Updatepolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. The resource name, in the format `projects/x/policy`. There is at most one policy per project.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Policy;
  }

  export class Resource$Projects$Attestors {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * binaryauthorization.projects.attestors.create
     * @desc Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.
     * @alias binaryauthorization.projects.attestors.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.attestorId Required. The attestors ID.
     * @param {string} params.parent Required. The parent of this attestor.
     * @param {().Attestor} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Attestors$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Attestor>;
    create(
      params: Params$Resource$Projects$Attestors$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Attestor>,
      callback: BodyResponseCallback<Schema$Attestor>
    ): void;
    create(
      params: Params$Resource$Projects$Attestors$Create,
      callback: BodyResponseCallback<Schema$Attestor>
    ): void;
    create(callback: BodyResponseCallback<Schema$Attestor>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$Create
        | BodyResponseCallback<Schema$Attestor>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Attestor>,
      callback?: BodyResponseCallback<Schema$Attestor>
    ): void | GaxiosPromise<Schema$Attestor> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Attestors$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Attestors$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/attestors').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Attestor>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Attestor>(parameters);
      }
    }

    /**
     * binaryauthorization.projects.attestors.delete
     * @desc Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.
     * @alias binaryauthorization.projects.attestors.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the attestors to delete, in the format `projects/x/attestors/x`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Attestors$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Projects$Attestors$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Attestors$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$Delete
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Attestors$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Attestors$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * binaryauthorization.projects.attestors.get
     * @desc Gets an attestor. Returns NOT_FOUND if the attestor does not exist.
     * @alias binaryauthorization.projects.attestors.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The name of the attestor to retrieve, in the format `projects/x/attestors/x`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Attestors$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Attestor>;
    get(
      params: Params$Resource$Projects$Attestors$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Attestor>,
      callback: BodyResponseCallback<Schema$Attestor>
    ): void;
    get(
      params: Params$Resource$Projects$Attestors$Get,
      callback: BodyResponseCallback<Schema$Attestor>
    ): void;
    get(callback: BodyResponseCallback<Schema$Attestor>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$Get
        | BodyResponseCallback<Schema$Attestor>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Attestor>,
      callback?: BodyResponseCallback<Schema$Attestor>
    ): void | GaxiosPromise<Schema$Attestor> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Attestors$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Attestors$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Attestor>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Attestor>(parameters);
      }
    }

    /**
     * binaryauthorization.projects.attestors.list
     * @desc Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.
     * @alias binaryauthorization.projects.attestors.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListAttestorsResponse.next_page_token returned from the previous call to the `ListAttestors` method.
     * @param {string} params.parent Required. The resource name of the project associated with the attestors, in the format `projects/x`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Attestors$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAttestorsResponse>;
    list(
      params: Params$Resource$Projects$Attestors$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAttestorsResponse>,
      callback: BodyResponseCallback<Schema$ListAttestorsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Attestors$List,
      callback: BodyResponseCallback<Schema$ListAttestorsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAttestorsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$List
        | BodyResponseCallback<Schema$ListAttestorsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAttestorsResponse>,
      callback?: BodyResponseCallback<Schema$ListAttestorsResponse>
    ): void | GaxiosPromise<Schema$ListAttestorsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Attestors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Attestors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/attestors').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListAttestorsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListAttestorsResponse>(parameters);
      }
    }

    /**
     * binaryauthorization.projects.attestors.update
     * @desc Updates an attestor. Returns NOT_FOUND if the attestor does not exist.
     * @alias binaryauthorization.projects.attestors.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The resource name, in the format: `projects/x/attestors/x`. This field may not be updated.
     * @param {().Attestor} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Projects$Attestors$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Attestor>;
    update(
      params: Params$Resource$Projects$Attestors$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Attestor>,
      callback: BodyResponseCallback<Schema$Attestor>
    ): void;
    update(
      params: Params$Resource$Projects$Attestors$Update,
      callback: BodyResponseCallback<Schema$Attestor>
    ): void;
    update(callback: BodyResponseCallback<Schema$Attestor>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$Update
        | BodyResponseCallback<Schema$Attestor>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Attestor>,
      callback?: BodyResponseCallback<Schema$Attestor>
    ): void | GaxiosPromise<Schema$Attestor> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Attestors$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Attestors$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://binaryauthorization.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Attestor>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Attestor>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Attestors$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The attestors ID.
     */
    attestorId?: string;
    /**
     * Required. The parent of this attestor.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Attestor;
  }
  export interface Params$Resource$Projects$Attestors$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the attestors to delete, in the format `projects/x/attestors/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Attestors$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The name of the attestor to retrieve, in the format `projects/x/attestors/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Attestors$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of ListAttestorsResponse.next_page_token returned from the previous call to the `ListAttestors` method.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the project associated with the attestors, in the format `projects/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Attestors$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. The resource name, in the format: `projects/x/attestors/x`. This field may not be updated.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Attestor;
  }
}
