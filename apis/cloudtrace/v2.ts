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

import {
  createAPIRequest
} from '../../lib/apirequest';

/**
 * Stackdriver Trace API
 *
 * Sends application trace data to Stackdriver Trace for viewing. Trace data is collected for all App Engine applications by default. Trace data from other applications can be provided using this API.

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
       * @desc Sends new spans to new or existing traces. You cannot update existing spans.
       *
       * @alias cloudtrace.projects.traces.batchWrite
       * @memberOf! cloudtrace(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Required. The name of the project where the spans belong. The format is `projects/[PROJECT_ID]`.
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
         * @desc Creates a new span.
         *
         * @alias cloudtrace.projects.traces.spans.create
         * @memberOf! cloudtrace(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name of the span in the following format:      projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array.  [SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array.
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
              url: (rootUrl + '/v2/{name}/spans').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
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
* @property {cloudtrace(v2).Attributes} attributes A set of attributes on the annotation. You can have up to 4 attributes
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
* @property {cloudtrace(v2).Span[]} spans A list of new spans. The span names must not match existing
spans, or the results are undefined.
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
* @property {cloudtrace(v2).Attributes} attributes A set of attributes on the link. You have have up to  32 attributes per
link.
* @property {string} spanId The [SPAN_ID] for a span within a trace.
* @property {string} traceId The [TRACE_ID] for a trace within a project.
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
 * @typedef MessageEvent
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {string} compressedSizeBytes The number of compressed bytes sent or received. If missing assumed to
be the same size as uncompressed.
* @property {string} id An identifier for the MessageEvent&#39;s message that can be used to match
SENT and RECEIVED MessageEvents. It is recommended to be unique within
a Span.
* @property {string} type Type of MessageEvent. Indicates whether the message was sent or
received.
* @property {string} uncompressedSizeBytes The number of uncompressed bytes sent or received.
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
 * @typedef Span
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {cloudtrace(v2).Attributes} attributes A set of attributes on the span. You can have up to 32 attributes per
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
* @property {cloudtrace(v2).Links} links Links associated with the span. You can have up to 128 links per Span.
* @property {string} name The resource name of the span in the following format:

    projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project;
it is a 32-character hexadecimal encoding of a 16-byte array.

[SPAN_ID] is a unique identifier for a span within a trace; it
is a 16-character hexadecimal encoding of an 8-byte array.
* @property {string} parentSpanId The [SPAN_ID] of this span&#39;s parent span. If this is a root span,
then this field must be empty.
* @property {boolean} sameProcessAsParentSpan (Optional) Set this parameter to indicate whether this span is in
the same process as its parent. If you do not set this parameter,
Stackdriver Trace is unable to take advantage of this helpful
information.
* @property {string} spanId The [SPAN_ID] portion of the span&#39;s resource name.
* @property {cloudtrace(v2).StackTrace} stackTrace Stack trace captured at the start of the span.
* @property {string} startTime The start time of the span. On the client side, this is the time kept by
the local machine where the span execution starts. On the server side, this
is the time when the server&#39;s application handler starts running.
* @property {cloudtrace(v2).Status} status An optional final status for this span.
* @property {cloudtrace(v2).TimeEvents} timeEvents A set of time events. You can have up to 32 annotations and 128 message
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
 * @property {cloudtrace(v2).MessageEvent} messageEvent An event describing a message sent/received between Spans.
 * @property {string} time The timestamp indicating the time the event occurred.
 */

/**
 * @typedef TimeEvents
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {integer} droppedAnnotationsCount The number of dropped annotations in all the included time events.
If the value is 0, then no annotations were dropped.
* @property {integer} droppedMessageEventsCount The number of dropped message events in all the included time events.
If the value is 0, then no message events were dropped.
* @property {cloudtrace(v2).TimeEvent[]} timeEvent A collection of `TimeEvent`s.
*/

/**
 * @typedef TruncatableString
 * @memberOf! cloudtrace(v2)
 * @type object
* @property {integer} truncatedByteCount The number of bytes removed from the original string. If this
value is 0, then the string was not shortened.
* @property {string} value The shortened string. For example, if the original string is 500
bytes long and the limit of the string is 128 bytes, then
`value` contains the first 128 bytes of the 500-byte string.

Truncation always happens on a UTF8 character boundary. If there
are multi-byte characters in the string, then the length of the
shortened string might be less than the size limit.
*/
export = Cloudtrace;
