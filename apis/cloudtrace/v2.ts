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

/* jshint maxlen: false */

import createAPIRequest from '../../lib/apirequest';

/**
 * Stackdriver Trace API
 *
 * Send and retrieve trace data from Stackdriver Trace. Data is generated and available by default for all App Engine applications. Data from other applications can be written to Stackdriver Trace for display, reporting, and analysis.

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
function Cloudtrace(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.projects = {
    traces: {

      /**
       * cloudtrace.projects.traces.batchWrite
       *
       * @desc Sends new spans to Stackdriver Trace or updates existing traces. If the name of a trace that you send matches that of an existing trace, new spans are added to the existing trace. Attempt to update existing spans results undefined behavior. If the name does not match, a new trace is created with given set of spans.
       *
       * @alias cloudtrace.projects.traces.batchWrite
       * @memberOf! cloudtrace(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Required. Name of the project where the spans belong. The format is `projects/PROJECT_ID`.
       * @param {cloudtrace(v2).BatchWriteSpansRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      batchWrite: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const rootUrl = options.rootUrl || 'https://cloudtrace.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2/{name}/traces:batchWrite').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },
      spans: {

        /**
         * cloudtrace.projects.traces.spans.create
         *
         * @desc Creates a new Span.
         *
         * @alias cloudtrace.projects.traces.spans.create
         * @memberOf! cloudtrace(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name of the span in the following format:      projects/[PROJECT_ID]traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project. [SPAN_ID] is a unique identifier for a span within a trace, assigned when the span is created.
         * @param {cloudtrace(v2).Span} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://cloudtrace.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

/**
 * @typedef Annotation
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {cloudtrace(v2).Attributes} attributes A set of attributes on the annotation. There is a limit of 4 attributes
per Annotation.
* @property {cloudtrace(v2).TruncatableString} description A user-supplied message describing the event. The maximum length for
the description is 256 bytes.
*/

/**
 * @typedef AttributeValue
 * @memberOf! cloudtrace(v2)
 * @type object
 * @property {boolean} boolValue A Boolean value represented by `true` or `false`.
 * @property {string} intValue A 64-bit signed integer.
 * @property {cloudtrace(v2).TruncatableString} stringValue A string up to 256 bytes long.
 */

/**
 * @typedef Attributes
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {object} attributeMap The set of attributes. Each attribute&#39;s key can be up to 128 bytes
long. The value can be a string up to 256 bytes, an integer, or the
Boolean values `true` and `false`. For example:

    &quot;/instance_id&quot;: &quot;my-instance&quot;
    &quot;/http/user_agent&quot;: &quot;&quot;
    &quot;/http/request_bytes&quot;: 300
    &quot;abc.com/myattribute&quot;: true
* @property {integer} droppedAttributesCount The number of attributes that were discarded. Attributes can be discarded
because their keys are too long or because there are too many attributes.
If this value is 0 then all attributes are valid.
*/

/**
 * @typedef BatchWriteSpansRequest
 * @memberOf! cloudtrace(v2)
 * @type object
 * @property {cloudtrace(v2).Span[]} spans A collection of spans.
 */

/**
 * @typedef Empty
 * @memberOf! cloudtrace(v2)
 * @type object
 */

/**
 * @typedef Link
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {cloudtrace(v2).Attributes} attributes A set of attributes on the link. There is a limit of 32 attributes per
link.
* @property {string} spanId `SPAN_ID` identifies a span within a trace.
* @property {string} traceId `TRACE_ID` identifies a trace within a project.
* @property {string} type The relationship of the current span relative to the linked span.
*/

/**
 * @typedef Links
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {integer} droppedLinksCount The number of dropped links after the maximum size was enforced. If
this value is 0, then no links were dropped.
* @property {cloudtrace(v2).Link[]} link A collection of links.
*/

/**
 * @typedef Module
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {cloudtrace(v2).TruncatableString} buildId A unique identifier for the module, usually a hash of its
contents (up to 128 bytes).
* @property {cloudtrace(v2).TruncatableString} module For example: main binary, kernel modules, and dynamic libraries
such as libc.so, sharedlib.so (up to 256 bytes).
*/

/**
 * @typedef NetworkEvent
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {string} compressedMessageSize The number of compressed bytes sent or received.
* @property {string} messageId An identifier for the message, which must be unique in this span.
* @property {string} time For sent messages, this is the time at which the first bit was sent.
For received messages, this is the time at which the last bit was
received.
* @property {string} type Type of NetworkEvent. Indicates whether the RPC message was sent or
received.
* @property {string} uncompressedMessageSize The number of uncompressed bytes sent or received.
*/

/**
 * @typedef Span
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {cloudtrace(v2).Attributes} attributes A set of attributes on the span. There is a limit of 32 attributes per
span.
* @property {integer} childSpanCount An optional number of child spans that were generated while this span
was active. If set, allows implementation to detect missing child spans.
* @property {cloudtrace(v2).TruncatableString} displayName A description of the span&#39;s operation (up to 128 bytes).
Stackdriver Trace displays the description in the
{% dynamic print site_values.console_name %}.
For example, the display name can be a qualified method name or a file name
and a line number where the operation is called. A best practice is to use
the same display name within an application and at the same call point.
This makes it easier to correlate spans in different traces.
* @property {string} endTime The end time of the span. On the client side, this is the time kept by
the local machine where the span execution ends. On the server side, this
is the time when the server application handler stops running.
* @property {cloudtrace(v2).Links} links A maximum of 128 links are allowed per Span.
* @property {string} name The resource name of the span in the following format:

    projects/[PROJECT_ID]traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project.
[SPAN_ID] is a unique identifier for a span within a trace,
assigned when the span is created.
* @property {string} parentSpanId The [SPAN_ID] of this span&#39;s parent span. If this is a root span,
then this field must be empty.
* @property {boolean} sameProcessAsParentSpan A highly recommended but not required flag that identifies when a trace
crosses a process boundary. True when the parent_span belongs to the
same process as the current span.
* @property {string} spanId The [SPAN_ID] portion of the span&#39;s resource name.
* @property {cloudtrace(v2).StackTrace} stackTrace Stack trace captured at the start of the span.
* @property {string} startTime The start time of the span. On the client side, this is the time kept by
the local machine where the span execution starts. On the server side, this
is the time when the server&#39;s application handler starts running.
* @property {cloudtrace(v2).Status} status An optional final status for this span.
* @property {cloudtrace(v2).TimeEvents} timeEvents The included time events. There can be up to 32 annotations and 128 network
events per span.
*/

/**
 * @typedef StackFrame
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {string} columnNumber The column number where the function call appears, if available.
This is important in JavaScript because of its anonymous functions.
* @property {cloudtrace(v2).TruncatableString} fileName The name of the source file where the function call appears (up to 256
bytes).
* @property {cloudtrace(v2).TruncatableString} functionName The fully-qualified name that uniquely identifies the function or
method that is active in this frame (up to 1024 bytes).
* @property {string} lineNumber The line number in `file_name` where the function call appears.
* @property {cloudtrace(v2).Module} loadModule The binary module from where the code was loaded.
* @property {cloudtrace(v2).TruncatableString} originalFunctionName An un-mangled function name, if `function_name` is
[mangled](http://www.avabodh.com/cxxin/namemangling.html). The name can
be fully-qualified (up to 1024 bytes).
* @property {cloudtrace(v2).TruncatableString} sourceVersion The version of the deployed source code (up to 128 bytes).
*/

/**
 * @typedef StackFrames
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {integer} droppedFramesCount The number of stack frames that were dropped because there
were too many stack frames.
If this value is 0, then no stack frames were dropped.
* @property {cloudtrace(v2).StackFrame[]} frame Stack frames in this call stack.
*/

/**
 * @typedef StackTrace
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {cloudtrace(v2).StackFrames} stackFrames Stack frames in this stack trace. A maximum of 128 frames are allowed.
* @property {string} stackTraceHashId The hash ID is used to conserve network bandwidth for duplicate
stack traces within a single trace.

Often multiple spans will have identical stack traces.
The first occurrence of a stack trace should contain both the
`stackFrame` content and a value in `stackTraceHashId`.

Subsequent spans within the same request can refer
to that stack trace by only setting `stackTraceHashId`.
*/

/**
 * @typedef Status
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {object[]} details A list of messages that carry the error details.  There is a common set of
message types for APIs to use.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
*/

/**
 * @typedef TimeEvent
 * @memberOf! cloudtrace(v2)
 * @type object
 * @property {cloudtrace(v2).Annotation} annotation Text annotation with a set of attributes.
 * @property {cloudtrace(v2).NetworkEvent} networkEvent An event describing an RPC message sent/received on the network.
 * @property {string} time The timestamp indicating the time the event occurred.
 */

/**
 * @typedef TimeEvents
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {integer} droppedAnnotationsCount The number of dropped annotations in all the included time events.
If the value is 0, then no annotations were dropped.
* @property {integer} droppedNetworkEventsCount The number of dropped network events in all the included time events.
If the value is 0, then no network events were dropped.
* @property {cloudtrace(v2).TimeEvent[]} timeEvent A collection of `TimeEvent`s.
*/

/**
 * @typedef TruncatableString
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {integer} truncatedByteCount The number of bytes removed from the original string. If this
value is 0, then the string was not shortened.
* @property {string} value The shortened string. For example, if the original string was 500
bytes long and the limit of the string was 128 bytes, then this
value contains the first 128 bytes of the 500-byte string. Note that
truncation always happens on the character boundary, to ensure that
truncated string is still valid UTF8. In case of multi-byte characters,
size of truncated string can be less than truncation limit.
*/
export = Cloudtrace;
