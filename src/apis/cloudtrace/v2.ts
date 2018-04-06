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
 * Stackdriver Trace API
 *
 * Sends application trace data to Stackdriver Trace for viewing. Trace data is
 * collected for all App Engine applications by default. Trace data from other
 * applications can be provided using this API.
 *
 * @example
 * const google = require('googleapis');
 * const cloudtrace = google.cloudtrace('v2');
 *
 * @namespace cloudtrace
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Cloudtrace
 */
export class Cloudtrace {
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
 * Text annotation with a set of attributes.
 */
export interface Schema$Annotation {
  /**
   * A set of attributes on the annotation. You can have up to 4 attributes per
   * Annotation.
   */
  attributes: Schema$Attributes;
  /**
   * A user-supplied message describing the event. The maximum length for the
   * description is 256 bytes.
   */
  description: Schema$TruncatableString;
}
/**
 * A set of attributes, each in the format `[KEY]:[VALUE]`.
 */
export interface Schema$Attributes {
  /**
   * The set of attributes. Each attribute&#39;s key can be up to 128 bytes
   * long. The value can be a string up to 256 bytes, an integer, or the Boolean
   * values `true` and `false`. For example:      &quot;/instance_id&quot;:
   * &quot;my-instance&quot;     &quot;/http/user_agent&quot;: &quot;&quot;
   * &quot;/http/request_bytes&quot;: 300     &quot;abc.com/myattribute&quot;:
   * true
   */
  attributeMap: any;
  /**
   * The number of attributes that were discarded. Attributes can be discarded
   * because their keys are too long or because there are too many attributes.
   * If this value is 0 then all attributes are valid.
   */
  droppedAttributesCount: number;
}
/**
 * The allowed types for [VALUE] in a `[KEY]:[VALUE]` attribute.
 */
export interface Schema$AttributeValue {
  /**
   * A Boolean value represented by `true` or `false`.
   */
  boolValue: boolean;
  /**
   * A 64-bit signed integer.
   */
  intValue: string;
  /**
   * A string up to 256 bytes long.
   */
  stringValue: Schema$TruncatableString;
}
/**
 * The request message for the `BatchWriteSpans` method.
 */
export interface Schema$BatchWriteSpansRequest {
  /**
   * A list of new spans. The span names must not match existing spans, or the
   * results are undefined.
   */
  spans: Schema$Span[];
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
 * A pointer from the current span to another span in the same trace or in a
 * different trace. For example, this can be used in batching operations, where
 * a single batch handler processes multiple requests from different traces or
 * when the handler receives a request from a different project.
 */
export interface Schema$Link {
  /**
   * A set of attributes on the link. You have have up to  32 attributes per
   * link.
   */
  attributes: Schema$Attributes;
  /**
   * The [SPAN_ID] for a span within a trace.
   */
  spanId: string;
  /**
   * The [TRACE_ID] for a trace within a project.
   */
  traceId: string;
  /**
   * The relationship of the current span relative to the linked span.
   */
  type: string;
}
/**
 * A collection of links, which are references from this span to a span in the
 * same or different trace.
 */
export interface Schema$Links {
  /**
   * The number of dropped links after the maximum size was enforced. If this
   * value is 0, then no links were dropped.
   */
  droppedLinksCount: number;
  /**
   * A collection of links.
   */
  link: Schema$Link[];
}
/**
 * An event describing a message sent/received between Spans.
 */
export interface Schema$MessageEvent {
  /**
   * The number of compressed bytes sent or received. If missing assumed to be
   * the same size as uncompressed.
   */
  compressedSizeBytes: string;
  /**
   * An identifier for the MessageEvent&#39;s message that can be used to match
   * SENT and RECEIVED MessageEvents. It is recommended to be unique within a
   * Span.
   */
  id: string;
  /**
   * Type of MessageEvent. Indicates whether the message was sent or received.
   */
  type: string;
  /**
   * The number of uncompressed bytes sent or received.
   */
  uncompressedSizeBytes: string;
}
/**
 * Binary module.
 */
export interface Schema$Module {
  /**
   * A unique identifier for the module, usually a hash of its contents (up to
   * 128 bytes).
   */
  buildId: Schema$TruncatableString;
  /**
   * For example: main binary, kernel modules, and dynamic libraries such as
   * libc.so, sharedlib.so (up to 256 bytes).
   */
  module: Schema$TruncatableString;
}
/**
 * A span represents a single operation within a trace. Spans can be nested to
 * form a trace tree. Often, a trace contains a root span that describes the
 * end-to-end latency, and one or more subspans for its sub-operations. A trace
 * can also contain multiple root spans, or none at all. Spans do not need to be
 * contiguous&amp;mdash;there may be gaps or overlaps between spans in a trace.
 */
export interface Schema$Span {
  /**
   * A set of attributes on the span. You can have up to 32 attributes per span.
   */
  attributes: Schema$Attributes;
  /**
   * An optional number of child spans that were generated while this span was
   * active. If set, allows implementation to detect missing child spans.
   */
  childSpanCount: number;
  /**
   * A description of the span&#39;s operation (up to 128 bytes). Stackdriver
   * Trace displays the description in the {% dynamic print
   * site_values.console_name %}. For example, the display name can be a
   * qualified method name or a file name and a line number where the operation
   * is called. A best practice is to use the same display name within an
   * application and at the same call point. This makes it easier to correlate
   * spans in different traces.
   */
  displayName: Schema$TruncatableString;
  /**
   * The end time of the span. On the client side, this is the time kept by the
   * local machine where the span execution ends. On the server side, this is
   * the time when the server application handler stops running.
   */
  endTime: string;
  /**
   * Links associated with the span. You can have up to 128 links per Span.
   */
  links: Schema$Links;
  /**
   * The resource name of the span in the following format:
   * projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique
   * identifier for a trace within a project; it is a 32-character hexadecimal
   * encoding of a 16-byte array.  [SPAN_ID] is a unique identifier for a span
   * within a trace; it is a 16-character hexadecimal encoding of an 8-byte
   * array.
   */
  name: string;
  /**
   * The [SPAN_ID] of this span&#39;s parent span. If this is a root span, then
   * this field must be empty.
   */
  parentSpanId: string;
  /**
   * (Optional) Set this parameter to indicate whether this span is in the same
   * process as its parent. If you do not set this parameter, Stackdriver Trace
   * is unable to take advantage of this helpful information.
   */
  sameProcessAsParentSpan: boolean;
  /**
   * The [SPAN_ID] portion of the span&#39;s resource name.
   */
  spanId: string;
  /**
   * Stack trace captured at the start of the span.
   */
  stackTrace: Schema$StackTrace;
  /**
   * The start time of the span. On the client side, this is the time kept by
   * the local machine where the span execution starts. On the server side, this
   * is the time when the server&#39;s application handler starts running.
   */
  startTime: string;
  /**
   * An optional final status for this span.
   */
  status: Schema$Status;
  /**
   * A set of time events. You can have up to 32 annotations and 128 message
   * events per span.
   */
  timeEvents: Schema$TimeEvents;
}
/**
 * Represents a single stack frame in a stack trace.
 */
export interface Schema$StackFrame {
  /**
   * The column number where the function call appears, if available. This is
   * important in JavaScript because of its anonymous functions.
   */
  columnNumber: string;
  /**
   * The name of the source file where the function call appears (up to 256
   * bytes).
   */
  fileName: Schema$TruncatableString;
  /**
   * The fully-qualified name that uniquely identifies the function or method
   * that is active in this frame (up to 1024 bytes).
   */
  functionName: Schema$TruncatableString;
  /**
   * The line number in `file_name` where the function call appears.
   */
  lineNumber: string;
  /**
   * The binary module from where the code was loaded.
   */
  loadModule: Schema$Module;
  /**
   * An un-mangled function name, if `function_name` is
   * [mangled](http://www.avabodh.com/cxxin/namemangling.html). The name can be
   * fully-qualified (up to 1024 bytes).
   */
  originalFunctionName: Schema$TruncatableString;
  /**
   * The version of the deployed source code (up to 128 bytes).
   */
  sourceVersion: Schema$TruncatableString;
}
/**
 * A collection of stack frames, which can be truncated.
 */
export interface Schema$StackFrames {
  /**
   * The number of stack frames that were dropped because there were too many
   * stack frames. If this value is 0, then no stack frames were dropped.
   */
  droppedFramesCount: number;
  /**
   * Stack frames in this call stack.
   */
  frame: Schema$StackFrame[];
}
/**
 * A call stack appearing in a trace.
 */
export interface Schema$StackTrace {
  /**
   * Stack frames in this stack trace. A maximum of 128 frames are allowed.
   */
  stackFrames: Schema$StackFrames;
  /**
   * The hash ID is used to conserve network bandwidth for duplicate stack
   * traces within a single trace.  Often multiple spans will have identical
   * stack traces. The first occurrence of a stack trace should contain both the
   * `stackFrame` content and a value in `stackTraceHashId`.  Subsequent spans
   * within the same request can refer to that stack trace by only setting
   * `stackTraceHashId`.
   */
  stackTraceHashId: string;
}
/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). The error model is designed to be:
 * - Simple to use and understand for most users - Flexible enough to meet
 * unexpected needs  # Overview  The `Status` message contains three pieces of
 * data: error code, error message, and error details. The error code should be
 * an enum value of google.rpc.Code, but it may accept additional error codes if
 * needed.  The error message should be a developer-facing English message that
 * helps developers *understand* and *resolve* the error. If a localized
 * user-facing error message is needed, put the localized message in the error
 * details or localize it in the client. The optional error details may contain
 * arbitrary information about the error. There is a predefined set of error
 * detail types in the package `google.rpc` that can be used for common error
 * conditions.  # Language mapping  The `Status` message is the logical
 * representation of the error model, but it is not necessarily the actual wire
 * format. When the `Status` message is exposed in different client libraries
 * and different wire protocols, it can be mapped differently. For example, it
 * will likely be mapped to some exceptions in Java, but more likely mapped to
 * some error codes in C.  # Other uses  The error model and the `Status`
 * message can be used in a variety of environments, either with or without
 * APIs, to provide a consistent developer experience across different
 * environments.  Example uses of this error model include:  - Partial errors.
 * If a service needs to return partial errors to the client,     it may embed
 * the `Status` in the normal response to indicate the partial     errors.  -
 * Workflow errors. A typical workflow has multiple steps. Each step may have a
 * `Status` message for error reporting.  - Batch operations. If a client uses
 * batch request and batch response, the     `Status` message should be used
 * directly inside batch response, one for     each error sub-response.  -
 * Asynchronous operations. If an API call embeds asynchronous operation results
 * in its response, the status of those operations should be     represented
 * directly using the `Status` message.  - Logging. If some API errors are
 * stored in logs, the message `Status` could     be used directly after any
 * stripping needed for security/privacy reasons.
 */
export interface Schema$Status {
  /**
   * The status code, which should be an enum value of google.rpc.Code.
   */
  code: number;
  /**
   * A list of messages that carry the error details.  There is a common set of
   * message types for APIs to use.
   */
  details: any[];
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * google.rpc.Status.details field, or localized by the client.
   */
  message: string;
}
/**
 * A time-stamped annotation or message event in the Span.
 */
export interface Schema$TimeEvent {
  /**
   * Text annotation with a set of attributes.
   */
  annotation: Schema$Annotation;
  /**
   * An event describing a message sent/received between Spans.
   */
  messageEvent: Schema$MessageEvent;
  /**
   * The timestamp indicating the time the event occurred.
   */
  time: string;
}
/**
 * A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation on
 * the span, consisting of either user-supplied key:value pairs, or details of a
 * message sent/received between Spans.
 */
export interface Schema$TimeEvents {
  /**
   * The number of dropped annotations in all the included time events. If the
   * value is 0, then no annotations were dropped.
   */
  droppedAnnotationsCount: number;
  /**
   * The number of dropped message events in all the included time events. If
   * the value is 0, then no message events were dropped.
   */
  droppedMessageEventsCount: number;
  /**
   * A collection of `TimeEvent`s.
   */
  timeEvent: Schema$TimeEvent[];
}
/**
 * Represents a string that might be shortened to a specified length.
 */
export interface Schema$TruncatableString {
  /**
   * The number of bytes removed from the original string. If this value is 0,
   * then the string was not shortened.
   */
  truncatedByteCount: number;
  /**
   * The shortened string. For example, if the original string is 500 bytes long
   * and the limit of the string is 128 bytes, then `value` contains the first
   * 128 bytes of the 500-byte string.  Truncation always happens on a UTF8
   * character boundary. If there are multi-byte characters in the string, then
   * the length of the shortened string might be less than the size limit.
   */
  value: string;
}

export class Resource$Projects {
  root: Cloudtrace;
  traces: Resource$Projects$Traces;
  constructor(root: Cloudtrace) {
    this.root = root;
    this.getRoot.bind(this);
    this.traces = new Resource$Projects$Traces(root);
  }

  getRoot() {
    return this.root;
  }
}
export class Resource$Projects$Traces {
  root: Cloudtrace;
  spans: Resource$Projects$Traces$Spans;
  constructor(root: Cloudtrace) {
    this.root = root;
    this.getRoot.bind(this);
    this.spans = new Resource$Projects$Traces$Spans(root);
  }

  getRoot() {
    return this.root;
  }


  /**
   * cloudtrace.projects.traces.batchWrite
   * @desc Sends new spans to new or existing traces. You cannot update existing
   * spans.
   * @alias cloudtrace.projects.traces.batchWrite
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name Required. The name of the project where the spans belong. The format is `projects/[PROJECT_ID]`.
   * @param {().BatchWriteSpansRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  batchWrite(params?: any, options?: MethodOptions): AxiosPromise<Schema$Empty>;
  batchWrite(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>): void;
  batchWrite(
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
    const rootUrl = options.rootUrl || 'https://cloudtrace.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}/traces:batchWrite')
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
      createAPIRequest<Schema$Empty>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Empty>(parameters);
    }
  }
}
export class Resource$Projects$Traces$Spans {
  root: Cloudtrace;
  constructor(root: Cloudtrace) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
  }


  /**
   * cloudtrace.projects.traces.spans.createSpan
   * @desc Creates a new span.
   * @alias cloudtrace.projects.traces.spans.createSpan
   * @memberOf! ()
   *
   * @param {object} params Parameters for request
   * @param {string} params.name The resource name of the span in the following format:      projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array.  [SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array.
   * @param {().Span} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
   * @param {callback} callback The callback that handles the response.
   * @return {object} Request object
   */
  createSpan(params?: any, options?: MethodOptions): AxiosPromise<Schema$Span>;
  createSpan(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Span>,
      callback?: BodyResponseCallback<Schema$Span>): void;
  createSpan(
      params?: any, options?: MethodOptions|BodyResponseCallback<Schema$Span>,
      callback?: BodyResponseCallback<Schema$Span>):
      void|AxiosPromise<Schema$Span> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://cloudtrace.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url: (rootUrl + '/v2/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['name'],
      pathParams: ['name'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Span>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Span>(parameters);
    }
  }
}
