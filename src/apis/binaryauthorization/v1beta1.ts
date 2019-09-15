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

export namespace binaryauthorization_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * const binaryauthorization = google.binaryauthorization('v1beta1');
   *
   * @namespace binaryauthorization
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
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
     * A Drydock ATTESTATION_AUTHORITY Note, created by the user.
     */
    userOwnedDrydockNote?: Schema$UserOwnedDrydockNote;
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
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. NOTE: An unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently.
     */
    condition?: Schema$Expr;
    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@example.com` .   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.   * `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Represents an expression text. Example:      title: &quot;User account presence&quot;     description: &quot;Determines whether the request has a user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
   */
  export interface Schema$Expr {
    /**
     * An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.  The application context of the containing message determines which well-known feature set of CEL is supported.
     */
    expression?: string | null;
    /**
     * An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources.   A `Policy` consists of a list of `bindings`. A `binding` binds a list of `members` to a `role`, where the members can be user accounts, Google groups, Google domains, and service accounts. A `role` is a named list of permissions defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [         {           &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [             &quot;user:mike@example.com&quot;,             &quot;group:admins@example.com&quot;,             &quot;domain:google.com&quot;,             &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot;           ]         },         {           &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;: [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML Example**      bindings:     - members:       - user:mike@example.com       - group:admins@example.com       - domain:google.com       - serviceAccount:my-other-app@appspot.gserviceaccount.com       role: roles/owner     - members:       - user:sean@example.com       role: roles/viewer   For a description of IAM and its features, see the [IAM developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$IamPolicy {
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    version?: number | null;
  }
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
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
     */
    policy?: Schema$IamPolicy;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.
   */
  export interface Schema$UserOwnedDrydockNote {
    /**
     * Output only. This field will contain the service account email address that this Attestor will use as the principal when querying Container Analysis. Attestor administrators must grant this service account the IAM role needed to read attestations from the note_reference in Container Analysis (`containeranalysis.notes.occurrences.viewer`).  This email address is fixed for the lifetime of the Attestor, but callers should not make any other assumptions about the service account email; future versions may use an email based on a different naming pattern.
     */
    delegationServiceAccountEmail?: string | null;
    /**
     * Required. The Drydock resource name of a ATTESTATION_AUTHORITY Note, created by the user, in the format: `projects/x/notes/x (or the legacy `providers/x/notes/x). This field may not be updated.  An attestation by this attestor is stored as a Drydock ATTESTATION_AUTHORITY Occurrence that names a container image and that links to this Note. Drydock is an external dependency.
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
    policy: Resource$Projects$Policy;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.attestors = new Resource$Projects$Attestors(this.context);
      this.policy = new Resource$Projects$Policy(this.context);
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
            url: (rootUrl + '/v1beta1/{+parent}/attestors').replace(
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * binaryauthorization.projects.attestors.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias binaryauthorization.projects.attestors.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Attestors$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IamPolicy>;
    getIamPolicy(
      params: Params$Resource$Projects$Attestors$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$IamPolicy>,
      callback: BodyResponseCallback<Schema$IamPolicy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Attestors$Getiampolicy,
      callback: BodyResponseCallback<Schema$IamPolicy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$IamPolicy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$Getiampolicy
        | BodyResponseCallback<Schema$IamPolicy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$IamPolicy>,
      callback?: BodyResponseCallback<Schema$IamPolicy>
    ): void | GaxiosPromise<Schema$IamPolicy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Attestors$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Attestors$Getiampolicy;
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
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$IamPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$IamPolicy>(parameters);
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
            url: (rootUrl + '/v1beta1/{+parent}/attestors').replace(
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
     * binaryauthorization.projects.attestors.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @alias binaryauthorization.projects.attestors.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Attestors$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IamPolicy>;
    setIamPolicy(
      params: Params$Resource$Projects$Attestors$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$IamPolicy>,
      callback: BodyResponseCallback<Schema$IamPolicy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Attestors$Setiampolicy,
      callback: BodyResponseCallback<Schema$IamPolicy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$IamPolicy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$Setiampolicy
        | BodyResponseCallback<Schema$IamPolicy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$IamPolicy>,
      callback?: BodyResponseCallback<Schema$IamPolicy>
    ): void | GaxiosPromise<Schema$IamPolicy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Attestors$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Attestors$Setiampolicy;
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
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$IamPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$IamPolicy>(parameters);
      }
    }

    /**
     * binaryauthorization.projects.attestors.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @alias binaryauthorization.projects.attestors.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Attestors$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Attestors$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Attestors$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Attestors$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Attestors$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Attestors$Testiampermissions;
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
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
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
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
  export interface Params$Resource$Projects$Attestors$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
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
  export interface Params$Resource$Projects$Attestors$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Attestors$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
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

  export class Resource$Projects$Policy {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * binaryauthorization.projects.policy.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @alias binaryauthorization.projects.policy.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.options.requestedPolicyVersion Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
      params?: Params$Resource$Projects$Policy$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IamPolicy>;
    getIamPolicy(
      params: Params$Resource$Projects$Policy$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$IamPolicy>,
      callback: BodyResponseCallback<Schema$IamPolicy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Policy$Getiampolicy,
      callback: BodyResponseCallback<Schema$IamPolicy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$IamPolicy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Policy$Getiampolicy
        | BodyResponseCallback<Schema$IamPolicy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$IamPolicy>,
      callback?: BodyResponseCallback<Schema$IamPolicy>
    ): void | GaxiosPromise<Schema$IamPolicy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Policy$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Policy$Getiampolicy;
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
            url: (rootUrl + '/v1beta1/{+resource}:getIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$IamPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$IamPolicy>(parameters);
      }
    }

    /**
     * binaryauthorization.projects.policy.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     * @alias binaryauthorization.projects.policy.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
      params?: Params$Resource$Projects$Policy$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$IamPolicy>;
    setIamPolicy(
      params: Params$Resource$Projects$Policy$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$IamPolicy>,
      callback: BodyResponseCallback<Schema$IamPolicy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Policy$Setiampolicy,
      callback: BodyResponseCallback<Schema$IamPolicy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$IamPolicy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Policy$Setiampolicy
        | BodyResponseCallback<Schema$IamPolicy>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$IamPolicy>,
      callback?: BodyResponseCallback<Schema$IamPolicy>
    ): void | GaxiosPromise<Schema$IamPolicy> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Policy$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Policy$Setiampolicy;
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
            url: (rootUrl + '/v1beta1/{+resource}:setIamPolicy').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$IamPolicy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$IamPolicy>(parameters);
      }
    }

    /**
     * binaryauthorization.projects.policy.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @alias binaryauthorization.projects.policy.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
      params?: Params$Resource$Projects$Policy$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Policy$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Policy$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Policy$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void | GaxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Policy$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Policy$Testiampermissions;
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
            url: (rootUrl + '/v1beta1/{+resource}:testIamPermissions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Policy$Getiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset.
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Policy$Setiampolicy
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Policy$Testiampermissions
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
}
