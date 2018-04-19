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
 * Firebase Rules API
 *
 * Creates and manages rules that determine when a Firebase Rules-enabled
 * service should permit a request.
 *
 * @example
 * const google = require('googleapis');
 * const firebaserules = google.firebaserules('v1');
 *
 * @namespace firebaserules
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Firebaserules
 */
export class Firebaserules {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  projects: Resource$Projects;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.projects = new Resource$Projects(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * Arg matchers for the mock function.
 */
export interface Schema$Arg {
  /**
   * Argument matches any value provided.
   */
  anyValue: Schema$Empty;
  /**
   * Argument exactly matches value provided.
   */
  exactValue: any;
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
 * `File` containing source content.
 */
export interface Schema$File {
  /**
   * Textual Content.
   */
  content: string;
  /**
   * Fingerprint (e.g. github sha) associated with the `File`.
   */
  fingerprint: string;
  /**
   * File name.
   */
  name: string;
}
/**
 * Represents a service-defined function call that was invoked during test
 * execution.
 */
export interface Schema$FunctionCall {
  /**
   * The arguments that were provided to the function.
   */
  args: any[];
  /**
   * Name of the function invoked.
   */
  function: string;
}
/**
 * Mock function definition.  Mocks must refer to a function declared by the
 * target service. The type of the function args and result will be inferred at
 * test time. If either the arg or result values are not compatible with
 * function type declaration, the request will be considered invalid.  More than
 * one `FunctionMock` may be provided for a given function name so long as the
 * `Arg` matchers are distinct. There may be only one function for a given
 * overload where all `Arg` values are `Arg.any_value`.
 */
export interface Schema$FunctionMock {
  /**
   * The list of `Arg` values to match. The order in which the arguments are
   * provided is the order in which they must appear in the function invocation.
   */
  args: Schema$Arg[];
  /**
   * The name of the function.  The function name must match one provided by a
   * service declaration.
   */
  function: string;
  /**
   * The mock result of the function call.
   */
  result: Schema$Result;
}
/**
 * The response for FirebaseRulesService.GetReleaseExecutable
 */
export interface Schema$GetReleaseExecutableResponse {
  /**
   * Executable view of the `Ruleset` referenced by the `Release`.
   */
  executable: string;
  /**
   * The Rules runtime version of the executable.
   */
  executableVersion: string;
  /**
   * `Language` used to generate the executable bytes.
   */
  language: string;
  /**
   * `Ruleset` name associated with the `Release` executable.
   */
  rulesetName: string;
  /**
   * Timestamp for the most recent `Release.update_time`.
   */
  updateTime: string;
}
/**
 * Issues include warnings, errors, and deprecation notices.
 */
export interface Schema$Issue {
  /**
   * Short error description.
   */
  description: string;
  /**
   * The severity of the issue.
   */
  severity: string;
  /**
   * Position of the issue in the `Source`.
   */
  sourcePosition: Schema$SourcePosition;
}
/**
 * The response for FirebaseRulesService.ListReleases.
 */
export interface Schema$ListReleasesResponse {
  /**
   * The pagination token to retrieve the next page of results. If the value is
   * empty, no further results remain.
   */
  nextPageToken: string;
  /**
   * List of `Release` instances.
   */
  releases: Schema$Release[];
}
/**
 * The response for FirebaseRulesService.ListRulesets.
 */
export interface Schema$ListRulesetsResponse {
  /**
   * The pagination token to retrieve the next page of results. If the value is
   * empty, no further results remain.
   */
  nextPageToken: string;
  /**
   * List of `Ruleset` instances.
   */
  rulesets: Schema$Ruleset[];
}
/**
 * `Release` is a named reference to a `Ruleset`. Once a `Release` refers to a
 * `Ruleset`, rules-enabled services will be able to enforce the `Ruleset`.
 */
export interface Schema$Release {
  /**
   * Time the release was created. Output only.
   */
  createTime: string;
  /**
   * Resource name for the `Release`.  `Release` names may be structured
   * `app1/prod/v2` or flat `app1_prod_v2` which affords developers a great deal
   * of flexibility in mapping the name to the style that best fits their
   * existing development practices. For example, a name could refer to an
   * environment, an app, a version, or some combination of three.  In the table
   * below, for the project name `projects/foo`, the following relative release
   * paths show how flat and structured names might be chosen to match a desired
   * development / deployment strategy.  Use Case     | Flat Name           |
   * Structured Name -------------|---------------------|----------------
   * Environments | releases/qa         | releases/qa Apps         |
   * releases/app1_qa    | releases/app1/qa Versions     | releases/app1_v2_qa |
   * releases/app1/v2/qa  The delimiter between the release name path elements
   * can be almost anything and it should work equally well with the release
   * name list filter, but in many ways the structured paths provide a clearer
   * picture of the relationship between `Release` instances.  Format:
   * `projects/{project_id}/releases/{release_id}`
   */
  name: string;
  /**
   * Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must
   * exist the `Release` to be created.
   */
  rulesetName: string;
  /**
   * Time the release was updated. Output only.
   */
  updateTime: string;
}
/**
 * Possible result values from the function mock invocation.
 */
export interface Schema$Result {
  /**
   * The result is undefined, meaning the result could not be computed.
   */
  undefined: Schema$Empty;
  /**
   * The result is an actual value. The type of the value must match that of the
   * type declared by the service.
   */
  value: any;
}
/**
 * `Ruleset` is an immutable copy of `Source` with a globally unique identifier
 * and a creation time.
 */
export interface Schema$Ruleset {
  /**
   * Time the `Ruleset` was created. Output only.
   */
  createTime: string;
  /**
   * Name of the `Ruleset`. The ruleset_id is auto generated by the service.
   * Format: `projects/{project_id}/rulesets/{ruleset_id}` Output only.
   */
  name: string;
  /**
   * `Source` for the `Ruleset`.
   */
  source: Schema$Source;
}
/**
 * `Source` is one or more `File` messages comprising a logical set of rules.
 */
export interface Schema$Source {
  /**
   * `File` set constituting the `Source` bundle.
   */
  files: Schema$File[];
}
/**
 * Position in the `Source` content including its line, column number, and an
 * index of the `File` in the `Source` message. Used for debug purposes.
 */
export interface Schema$SourcePosition {
  /**
   * First column on the source line associated with the source fragment.
   */
  column: number;
  /**
   * Name of the `File`.
   */
  fileName: string;
  /**
   * Line number of the source fragment. 1-based.
   */
  line: number;
}
/**
 * `TestCase` messages provide the request context and an expectation as to
 * whether the given context will be allowed or denied. Test cases may specify
 * the `request`, `resource`, and `function_mocks` to mock a function call to a
 * service-provided function.  The `request` object represents context present
 * at request-time.  The `resource` is the value of the target resource as it
 * appears in persistent storage before the request is executed.
 */
export interface Schema$TestCase {
  /**
   * Test expectation.
   */
  expectation: string;
  /**
   * Optional function mocks for service-defined functions. If not set, any
   * service defined function is expected to return an error, which may or may
   * not influence the test outcome.
   */
  functionMocks: Schema$FunctionMock[];
  /**
   * Request context.  The exact format of the request context is
   * service-dependent. See the appropriate service documentation for
   * information about the supported fields and types on the request. Minimally,
   * all services support the following fields and types:  Request field  | Type
   * ---------------|----------------- auth.uid       | `string` auth.token |
   * `map&lt;string, string&gt;` headers        | `map&lt;string, string&gt;`
   * method         | `string` params         | `map&lt;string, string&gt;` path
   * | `string` time           | `google.protobuf.Timestamp`  If the request
   * value is not well-formed for the service, the request will be rejected as
   * an invalid argument.
   */
  request: any;
  /**
   * Optional resource value as it appears in persistent storage before the
   * request is fulfilled.  The resource type depends on the `request.path`
   * value.
   */
  resource: any;
}
/**
 * Test result message containing the state of the test as well as a description
 * and source position for test failures.
 */
export interface Schema$TestResult {
  /**
   * Debug messages related to test execution issues encountered during
   * evaluation.  Debug messages may be related to too many or too few
   * invocations of function mocks or to runtime errors that occur during
   * evaluation.  For example: ```Unable to read variable [name:
   * &quot;resource&quot;]```
   */
  debugMessages: string[];
  /**
   * Position in the `Source` or `Ruleset` where the principle runtime error
   * occurs.  Evaluation of an expression may result in an error. Rules are deny
   * by default, so a `DENY` expectation when an error is generated is valid.
   * When there is a `DENY` with an error, the `SourcePosition` is returned.
   * E.g. `error_position { line: 19 column: 37 }`
   */
  errorPosition: Schema$SourcePosition;
  /**
   * The set of function calls made to service-defined methods.  Function calls
   * are included in the order in which they are encountered during evaluation,
   * are provided for both mocked and unmocked functions, and included on the
   * response regardless of the test `state`.
   */
  functionCalls: Schema$FunctionCall[];
  /**
   * State of the test.
   */
  state: string;
}
/**
 * The request for FirebaseRulesService.TestRuleset.
 */
export interface Schema$TestRulesetRequest {
  /**
   * Optional `Source` to be checked for correctness.  This field must not be
   * set when the resource name refers to a `Ruleset`.
   */
  source: Schema$Source;
  /**
   * Inline `TestSuite` to run.
   */
  testSuite: Schema$TestSuite;
}
/**
 * The response for FirebaseRulesService.TestRuleset.
 */
export interface Schema$TestRulesetResponse {
  /**
   * Syntactic and semantic `Source` issues of varying severity. Issues of
   * `ERROR` severity will prevent tests from executing.
   */
  issues: Schema$Issue[];
  /**
   * The set of test results given the test cases in the `TestSuite`. The
   * results will appear in the same order as the test cases appear in the
   * `TestSuite`.
   */
  testResults: Schema$TestResult[];
}
/**
 * `TestSuite` is a collection of `TestCase` instances that validate the logical
 * correctness of a `Ruleset`. The `TestSuite` may be referenced in-line within
 * a `TestRuleset` invocation or as part of a `Release` object as a pre-release
 * check.
 */
export interface Schema$TestSuite {
  /**
   * Collection of test cases associated with the `TestSuite`.
   */
  testCases: Schema$TestCase[];
}
/**
 * The request for FirebaseRulesService.UpdateReleasePatch.
 */
export interface Schema$UpdateReleaseRequest {
  /**
   * `Release` to update.
   */
  release: Schema$Release;
  /**
   * Specifies which fields to update.
   */
  updateMask: string;
}

export class Resource$Projects {
  root: Firebaserules;
  releases: Resource$Projects$Releases;
  rulesets: Resource$Projects$Rulesets;
  constructor(root: Firebaserules) {
    this.root = root;
    this.getRoot.bind(this);
    this.releases = new Resource$Projects$Releases(root);
    this.rulesets = new Resource$Projects$Rulesets(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * firebaserules.projects.test
   * @desc Test `Source` for syntactic and semantic correctness. Issues present,
   * if any, will be returned to the caller with a description, severity, and
   * source location.  The test method may be executed with `Source` or a
   * `Ruleset` name. Passing `Source` is useful for unit testing new rules.
   * Passing a `Ruleset` name is useful for regression testing an existing rule.
   * The following is an example of `Source` that permits users to upload images
   * to a bucket bearing their user id and matching the correct metadata:
   * _*Example*_      // Users are allowed to subscribe and unsubscribe to the
   * blog.     service firebase.storage {       match
   * /users/{userId}/images/{imageName} {           allow write: if userId ==
   * request.auth.uid               && (imageName.matches('*.png$') ||
   * imageName.matches('*.jpg$'))               &&
   * resource.mimeType.matches('^image/')       }     }
   * @alias firebaserules.projects.test
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Tests may either provide `source` or a `Ruleset` resource name.  For tests against `source`, the resource name must refer to the project: Format: `projects/{project_id}`  For tests against a `Ruleset`, this must be the `Ruleset` resource name: Format: `projects/{project_id}/rulesets/{ruleset_id}`
   * @param {().TestRulesetRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  test(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$TestRulesetResponse>;
  test(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TestRulesetResponse>,
      callback?: BodyResponseCallback<Schema$TestRulesetResponse>): void;
  test(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$TestRulesetResponse>,
      callback?: BodyResponseCallback<Schema$TestRulesetResponse>):
      void|AxiosPromise<Schema$TestRulesetResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:test').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$TestRulesetResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$TestRulesetResponse>(parameters);
    }
  }
}
export class Resource$Projects$Releases {
  root: Firebaserules;
  constructor(root: Firebaserules) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * firebaserules.projects.releases.create
   * @desc Create a `Release`.  Release names should reflect the developer's
   * deployment practices. For example, the release name may include the
   * environment name, application name, application version, or any other name
   * meaningful to the developer. Once a `Release` refers to a `Ruleset`, the
   * rules can be enforced by Firebase Rules-enabled services.  More than one
   * `Release` may be 'live' concurrently. Consider the following three
   * `Release` names for `projects/foo` and the `Ruleset` to which they refer.
   * Release Name                    | Ruleset Name
   * --------------------------------|------------- projects/foo/releases/prod
   * | projects/foo/rulesets/uuid123 projects/foo/releases/prod/beta |
   * projects/foo/rulesets/uuid123 projects/foo/releases/prod/v23  |
   * projects/foo/rulesets/uuid456  The table reflects the `Ruleset` rollout in
   * progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`.
   * However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for
   * a `Release` may be updated using the UpdateRelease method.
   * @alias firebaserules.projects.releases.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name for the project which owns this `Release`.  Format: `projects/{project_id}`
   * @param {().Release} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Release>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Release>,
      callback?: BodyResponseCallback<Schema$Release>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Release>,
      callback?: BodyResponseCallback<Schema$Release>):
      void|AxiosPromise<Schema$Release> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/releases')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Release>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Release>(parameters);
    }
  }


  /**
   * firebaserules.projects.releases.delete
   * @desc Delete a `Release` by resource name.
   * @alias firebaserules.projects.releases.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name for the `Release` to delete.  Format: `projects/{project_id}/releases/{release_id}`
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
    const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
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
   * firebaserules.projects.releases.get
   * @desc Get a `Release` by name.
   * @alias firebaserules.projects.releases.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name of the `Release`.  Format: `projects/{project_id}/releases/{release_id}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Release>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Release>,
      callback?: BodyResponseCallback<Schema$Release>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Release>,
      callback?: BodyResponseCallback<Schema$Release>):
      void|AxiosPromise<Schema$Release> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
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
      createAPIRequest<Schema$Release>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Release>(parameters);
    }
  }


  /**
   * firebaserules.projects.releases.getExecutable
   * @desc Get the `Release` executable to use when enforcing rules.
   * @alias firebaserules.projects.releases.getExecutable
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.executableVersion The requested runtime executable version. Defaults to FIREBASE_RULES_EXECUTABLE_V1
   * @param {string} params.name Resource name of the `Release`.  Format: `projects/{project_id}/releases/{release_id}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  getExecutable(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$GetReleaseExecutableResponse>;
  getExecutable(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GetReleaseExecutableResponse>,
      callback?: BodyResponseCallback<Schema$GetReleaseExecutableResponse>):
      void;
  getExecutable(
      params?: any,
      options?: MethodOptions|
      BodyResponseCallback<Schema$GetReleaseExecutableResponse>,
      callback?: BodyResponseCallback<Schema$GetReleaseExecutableResponse>):
      void|AxiosPromise<Schema$GetReleaseExecutableResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:getExecutable')
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
      createAPIRequest<Schema$GetReleaseExecutableResponse>(
          parameters, callback);
    } else {
      return createAPIRequest<Schema$GetReleaseExecutableResponse>(parameters);
    }
  }


  /**
   * firebaserules.projects.releases.list
   * @desc List the `Release` values for a project. This list may optionally be
   * filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any
   * combination thereof.
   * @alias firebaserules.projects.releases.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter `Release` filter. The list method supports filters with restrictions on the `Release.name`, `Release.ruleset_name`, and `Release.test_suite_name`.  Example 1: A filter of 'name=prod*' might return `Release`s with names within 'projects/foo' prefixed with 'prod':  Name                          | Ruleset Name ------------------------------|------------- projects/foo/releases/prod    | projects/foo/rulesets/uuid1234 projects/foo/releases/prod/v1 | projects/foo/rulesets/uuid1234 projects/foo/releases/prod/v2 | projects/foo/rulesets/uuid8888  Example 2: A filter of `name=prod* ruleset_name=uuid1234` would return only `Release` instances for 'projects/foo' with names prefixed with 'prod' referring to the same `Ruleset` name of 'uuid1234':  Name                          | Ruleset Name ------------------------------|------------- projects/foo/releases/prod    | projects/foo/rulesets/1234 projects/foo/releases/prod/v1 | projects/foo/rulesets/1234  In the examples, the filter parameters refer to the search filters are relative to the project. Fully qualified prefixed may also be used. e.g. `test_suite_name=projects/foo/testsuites/uuid1`
   * @param {string} params.name Resource name for the project.  Format: `projects/{project_id}`
   * @param {integer=} params.pageSize Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load fewer than `page_size` results due to the size of the output. To traverse all of the releases, the caller should iterate until the `page_token` on the response is empty.
   * @param {string=} params.pageToken Next page token for the next batch of `Release` instances.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListReleasesResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListReleasesResponse>,
      callback?: BodyResponseCallback<Schema$ListReleasesResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListReleasesResponse>,
      callback?: BodyResponseCallback<Schema$ListReleasesResponse>):
      void|AxiosPromise<Schema$ListReleasesResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/releases')
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
      createAPIRequest<Schema$ListReleasesResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListReleasesResponse>(parameters);
    }
  }


  /**
   * firebaserules.projects.releases.patch
   * @desc Update a `Release` via PATCH.  Only updates to the `ruleset_name` and
   * `test_suite_name` fields will be honored. `Release` rename is not
   * supported. To create a `Release` use the CreateRelease method.
   * @alias firebaserules.projects.releases.patch
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name for the project which owns this `Release`.  Format: `projects/{project_id}`
   * @param {().UpdateReleaseRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  patch(params?: any, options?: MethodOptions): AxiosPromise<Schema$Release>;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Release>,
      callback?: BodyResponseCallback<Schema$Release>): void;
  patch(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Release>,
      callback?: BodyResponseCallback<Schema$Release>):
      void|AxiosPromise<Schema$Release> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
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
      createAPIRequest<Schema$Release>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Release>(parameters);
    }
  }
}

export class Resource$Projects$Rulesets {
  root: Firebaserules;
  constructor(root: Firebaserules) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * firebaserules.projects.rulesets.create
   * @desc Create a `Ruleset` from `Source`.  The `Ruleset` is given a unique
   * generated name which is returned to the caller. `Source` containing
   * syntactic or semantics errors will result in an error response indicating
   * the first error encountered. For a detailed view of `Source` issues, use
   * TestRuleset.
   * @alias firebaserules.projects.rulesets.create
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name for Project which owns this `Ruleset`.  Format: `projects/{project_id}`
   * @param {().Ruleset} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  create(params?: any, options?: MethodOptions): AxiosPromise<Schema$Ruleset>;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Ruleset>,
      callback?: BodyResponseCallback<Schema$Ruleset>): void;
  create(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Ruleset>,
      callback?: BodyResponseCallback<Schema$Ruleset>):
      void|AxiosPromise<Schema$Ruleset> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/rulesets')
                     .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Ruleset>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Ruleset>(parameters);
    }
  }


  /**
   * firebaserules.projects.rulesets.delete
   * @desc Delete a `Ruleset` by resource name.  If the `Ruleset` is referenced
   * by a `Release` the operation will fail.
   * @alias firebaserules.projects.rulesets.delete
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name for the ruleset to delete.  Format: `projects/{project_id}/rulesets/{ruleset_id}`
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
    const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
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
   * firebaserules.projects.rulesets.get
   * @desc Get a `Ruleset` by name including the full `Source` contents.
   * @alias firebaserules.projects.rulesets.get
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Resource name for the ruleset to get.  Format: `projects/{project_id}/rulesets/{ruleset_id}`
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  get(params?: any, options?: MethodOptions): AxiosPromise<Schema$Ruleset>;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Ruleset>,
      callback?: BodyResponseCallback<Schema$Ruleset>): void;
  get(params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$Ruleset>,
      callback?: BodyResponseCallback<Schema$Ruleset>):
      void|AxiosPromise<Schema$Ruleset> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
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
      createAPIRequest<Schema$Ruleset>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Ruleset>(parameters);
    }
  }


  /**
   * firebaserules.projects.rulesets.list
   * @desc List `Ruleset` metadata only and optionally filter the results by
   * `Ruleset` name.  The full `Source` contents of a `Ruleset` may be retrieved
   * with GetRuleset.
   * @alias firebaserules.projects.rulesets.list
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string=} params.filter `Ruleset` filter. The list method supports filters with restrictions on `Ruleset.name`.  Filters on `Ruleset.create_time` should use the `date` function which parses strings that conform to the RFC 3339 date/time specifications.  Example: `create_time > date("2017-01-01") AND name=UUID-*`
   * @param {string} params.name Resource name for the project.  Format: `projects/{project_id}`
   * @param {integer=} params.pageSize Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load less than `page_size` due to the size of the output. To traverse all of the releases, caller should iterate until the `page_token` is empty.
   * @param {string=} params.pageToken Next page token for loading the next batch of `Ruleset` instances.
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  list(params?: any, options?: MethodOptions):
      AxiosPromise<Schema$ListRulesetsResponse>;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListRulesetsResponse>,
      callback?: BodyResponseCallback<Schema$ListRulesetsResponse>): void;
  list(
      params?: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ListRulesetsResponse>,
      callback?: BodyResponseCallback<Schema$ListRulesetsResponse>):
      void|AxiosPromise<Schema$ListRulesetsResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://firebaserules.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/rulesets')
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
      createAPIRequest<Schema$ListRulesetsResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$ListRulesetsResponse>(parameters);
    }
  }
}
