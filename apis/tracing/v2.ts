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

const createAPIRequest = require('../../lib/apirequest');
const utils = require('../../lib/utils');

/**
 * Google Tracing API
 *
 * Send and retrieve trace data from Google Stackdriver Trace.

 *
 * @example
 * const google = require('googleapis');
 * const tracing = google.tracing('v2');
 *
 * @namespace tracing
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Tracing
 */
function Tracing(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.projects = {

    traces: {

      /**
       * tracing.projects.traces.list
       *
       * @desc Returns of a list of traces that match the specified filter conditions.
       *
       * @alias tracing.projects.traces.list
       * @memberOf! tracing(v2)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.filter An optional filter for the request. Example: `version_label_key:a some_label:some_label_key` returns traces from version `a` and has `some_label` with `some_label_key`.
       * @param {string=} params.endTime End of the time interval (inclusive) during which the trace data was collected from the application.
       * @param {string=} params.pageToken Token identifying the page of results to return. If provided, use the value of the `next_page_token` field from a previous request. Optional.
       * @param {string=} params.startTime Start of the time interval (inclusive) during which the trace data was collected from the application.
       * @param {integer=} params.pageSize Maximum number of traces to return. If not specified or <= 0, the implementation selects a reasonable value. The implementation may return fewer traces than the requested page size. Optional.
       * @param {string} params.parent ID of the Cloud project where the trace data is stored which is `projects/PROJECT_ID`.
       * @param {string=} params.orderBy Field used to sort the returned traces. Optional. Can be one of the following:  *   `trace_id` *   `name` (`name` field of root span in the trace) *   `duration` (difference between `end_time` and `start_time` fields of      the root span) *   `start` (`start_time` field of the root span)  Descending order can be specified by appending `desc` to the sort field (for example, `name desc`).  Only one sort field is permitted.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://tracing.googleapis.com/v2/{parent}/traces',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * tracing.projects.traces.batchWrite
       *
       * @desc Sends new spans to Stackdriver Trace or updates existing traces. If the name of a trace that you send matches that of an existing trace, new spans are added to the existing trace. Attempt to update existing spans results undefined behavior. If the name does not match, a new trace is created with given set of spans.
       *
       * @alias tracing.projects.traces.batchWrite
       * @memberOf! tracing(v2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Name of the project where the spans belong to. Format is `projects/PROJECT_ID`.
       * @param {tracing(v2).BatchWriteSpansRequest} params.resource Request body data
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

        const parameters = {
          options: utils.extend({
            url: 'https://tracing.googleapis.com/v2/{name}/traces:batchWrite',
            method: 'POST'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * tracing.projects.traces.listSpans
       *
       * @desc Returns a list of spans within a trace.
       *
       * @alias tracing.projects.traces.listSpans
       * @memberOf! tracing(v2)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.pageToken Token identifying the page of results to return. If provided, use the value of the `nextPageToken` field from a previous request. Optional.
       * @param {string} params.parent ID of the trace for which to list child spans. Format is `projects/PROJECT_ID/traces/TRACE_ID`.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      listSpans: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        const parameters = {
          options: utils.extend({
            url: 'https://tracing.googleapis.com/v2/{parent}:listSpans',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      spans: {

        /**
         * tracing.projects.traces.spans.create
         *
         * @desc Creates a new Span.
         *
         * @alias tracing.projects.traces.spans.create
         * @memberOf! tracing(v2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name of Span in the format `projects/PROJECT_ID/traces/TRACE_ID/spans/SPAN_ID`. `TRACE_ID` is a unique identifier for a trace within a project and is a base16-encoded, case-insensitive string and is required to be 32 char long. `SPAN_ID` is a unique identifier for a span within a trace. It is a base 16-encoded, case-insensitive string of a 8-bytes array and is required to be 16 char long.
         * @param {tracing(v2).Span} params.resource Request body data
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

          const parameters = {
            options: utils.extend({
              url: 'https://tracing.googleapis.com/v2/{name}',
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
 * @typedef Module
 * @memberOf! tracing(v2)
 * @type object
* @property {tracing(v2).TruncatableString} buildId Build_id is a unique identifier for the module, usually a hash of its
contents (up to 128 characters).
* @property {tracing(v2).TruncatableString} module E.g. main binary, kernel modules, and dynamic libraries
such as libc.so, sharedlib.so (up to 256 characters).
*/
/**
 * @typedef Status
 * @memberOf! tracing(v2)
 * @type object
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
* @property {object[]} details A list of messages that carry the error details.  There will be a
common set of message types for APIs to use.
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
*/
/**
 * @typedef BatchWriteSpansRequest
 * @memberOf! tracing(v2)
 * @type object
 * @property {tracing(v2).Span[]} spans A collection of spans.
 */
/**
 * @typedef Empty
 * @memberOf! tracing(v2)
 * @type object
 */
/**
 * @typedef ListTracesResponse
 * @memberOf! tracing(v2)
 * @type object
* @property {tracing(v2).Trace[]} traces List of trace records returned.
* @property {string} nextPageToken If defined, indicates that there are more traces that match the request
and that this value should be passed to the next request to continue
retrieving additional traces.
*/
/**
 * @typedef Span
 * @memberOf! tracing(v2)
 * @type object
* @property {tracing(v2).TimeEvents} timeEvents A maximum of 32 annotations and 128 network events are allowed per Span.
* @property {tracing(v2).Status} status An optional final status for this span.
* @property {string} name The resource name of Span in the format
`projects/PROJECT_ID/traces/TRACE_ID/spans/SPAN_ID`.
`TRACE_ID` is a unique identifier for a trace within a project and is a
base16-encoded, case-insensitive string and is required to be 32 char long.
`SPAN_ID` is a unique identifier for a span within a trace. It is a
base 16-encoded, case-insensitive string of a 8-bytes array and is required
to be 16 char long.
* @property {tracing(v2).StackTrace} stackTrace Stack trace captured at the start of the span.
* @property {tracing(v2).Links} links A maximum of 128 links are allowed per Span.
* @property {tracing(v2).Attributes} attributes A set of attributes on the span. A maximum of 32 attributes are allowed per
Span.
* @property {string} spanId Unique identifier for a span within a trace. It is a base 16-encoded,
case-insensitive string of a 8-bytes array and is required.
* @property {string} parentSpanId ID of parent span which is a base 16-encoded, case-insensitive string of
a 8-bytes array and is required to be 16 char long. If this is a root span,
the value must be empty.
* @property {string} endTime End time of the span.
On the client side, this is the local machine clock time at which the span
execution was ended; on the server
side, this is the time at which the server application handler stopped
running.
* @property {string} startTime Start time of the span.
On the client side, this is the local machine clock time at which the span
execution was started; on the server
side, this is the time at which the server application handler started
running.
* @property {tracing(v2).TruncatableString} displayName Description of the operation in the span. It is sanitized and displayed in
the Stackdriver Trace tool in the
{% dynamic print site_values.console_name %}.
The display_name may be a method name or some other per-call site
name. For the same executable and the same call point, a best practice is
to use a consistent operation name, which makes it easier to correlate
cross-trace spans.
The maximum length for the display_name is 128 bytes.
*/
/**
 * @typedef AttributeValue
 * @memberOf! tracing(v2)
 * @type object
 * @property {string} intValue An integer value.
 * @property {tracing(v2).TruncatableString} stringValue A string value (up to 256 bytes).
 * @property {boolean} boolValue A boolean value.
 */
/**
 * @typedef Attributes
 * @memberOf! tracing(v2)
 * @type object
* @property {object} attributeMap The maximum key length is 128 bytes (attributes are dropped if the
key size is larger than the maximum allowed). The value can be a string
(up to 256 bytes), integer, or boolean (true/false). Some common pair
examples:

    &quot;/instance_id&quot;: &quot;my-instance&quot;
    &quot;/zone&quot;: &quot;us-central1-a&quot;
    &quot;/grpc/peer_address&quot;: &quot;ip:port&quot; (dns, etc.)
    &quot;/grpc/deadline&quot;: &quot;Duration&quot;
    &quot;/http/user_agent&quot;
    &quot;/http/request_bytes&quot;: 300
    &quot;/http/response_bytes&quot;: 1200
    &quot;/http/url&quot;: google.com/apis
    &quot;abc.com/myattribute&quot;: true
* @property {integer} droppedAttributesCount The number of dropped attributes after the maximum size was enforced. If
0 then no attributes were dropped.
*/
/**
 * @typedef Links
 * @memberOf! tracing(v2)
 * @type object
* @property {tracing(v2).Link[]} link A collection of links.
* @property {integer} droppedLinksCount The number of dropped links after the maximum size was enforced. If
0 then no links were dropped.
*/
/**
 * @typedef TruncatableString
 * @memberOf! tracing(v2)
 * @type object
* @property {integer} truncatedCharacterCount The number of characters truncated from the original string value. If 0 it
means that the string value was not truncated.
* @property {string} value The truncated string value. E.g. for a string attribute this may have up to
256 bytes.
*/
/**
 * @typedef StackTrace
 * @memberOf! tracing(v2)
 * @type object
* @property {tracing(v2).StackFrames} stackFrames Stack frames in this stack trace. A maximum of 128 frames are allowed.
* @property {string} stackTraceHashId The hash ID is used to conserve network bandwidth for duplicate
stack traces within a single trace.

Often multiple spans will have identical stack traces.
The first occurance of a stack trace should contain both the
`stackFrame` content and a value in `stackTraceHashId`.

Subsequent spans within the same request can refer
to that stack trace by only setting `stackTraceHashId`.
*/
/**
 * @typedef TimeEvent
 * @memberOf! tracing(v2)
 * @type object
 * @property {string} time The timestamp indicating the time the event occurred.
 * @property {tracing(v2).NetworkEvent} networkEvent An event describing an RPC message sent/received on the network.
 * @property {tracing(v2).Annotation} annotation One or more key:value pairs.
 */
/**
 * @typedef ListSpansResponse
 * @memberOf! tracing(v2)
 * @type object
* @property {string} nextPageToken If defined, indicates that there are more spans that match the request.
Pass this as the value of `pageToken` in a subsequent request to retrieve
additional spans.
* @property {tracing(v2).Span[]} spans The requested spans if there are any in the specified trace.
*/
/**
 * @typedef NetworkEvent
 * @memberOf! tracing(v2)
 * @type object
* @property {string} time If available, this is the kernel time:

*  For sent messages, this is the time at which the first bit was sent.
*  For received messages, this is the time at which the last bit was
   received.
* @property {string} type Type of NetworkEvent. Indicates whether the RPC message was sent or
received.
* @property {string} messageId An identifier for the message, which must be unique in this span.
* @property {string} messageSize The number of bytes sent or received.
*/
/**
 * @typedef StackFrame
 * @memberOf! tracing(v2)
 * @type object
* @property {tracing(v2).TruncatableString} sourceVersion The version of the deployed source code (up to 128 characters).
* @property {tracing(v2).TruncatableString} originalFunctionName Used when the function name is
[mangled](http://www.avabodh.com/cxxin/namemangling.html). May be
fully-qualified (up to 1024 characters).
* @property {tracing(v2).TruncatableString} functionName The fully-qualified name that uniquely identifies this function or
method (up to 1024 characters).
* @property {string} lineNumber Line number of the frame.
* @property {tracing(v2).Module} loadModule Binary module the code is loaded from.
* @property {string} columnNumber Column number is important in JavaScript (anonymous functions).
May not be available in some languages.
* @property {tracing(v2).TruncatableString} fileName The filename of the file containing this frame (up to 256 characters).
*/
/**
 * @typedef Link
 * @memberOf! tracing(v2)
 * @type object
* @property {string} type The relationship of the current span relative to the linked span.
* @property {string} traceId `TRACE_ID` is a unique identifier for a trace within a project. It is
a base16-encoded, case-insensitive string of a 16-bytes array and is
required to be 32 char long.
* @property {string} spanId `SPAN_ID` is a unique identifier for a span within a trace. It is a
base16-encoded, case-insensitive string of a 8-bytes array and is
required to be 16 char long.
*/
/**
 * @typedef Annotation
 * @memberOf! tracing(v2)
 * @type object
* @property {tracing(v2).TruncatableString} description A user-supplied message describing the event. The maximum length for
the description is 256 bytes.
* @property {tracing(v2).Attributes} attributes A set of attributes on the annotation. A maximum of 4 attributes are
allowed per Annotation.
*/
/**
 * @typedef StackFrames
 * @memberOf! tracing(v2)
 * @type object
* @property {integer} droppedFramesCount The number of dropped stack frames after the maximum size was enforced.
If 0 then no frames were dropped.
* @property {tracing(v2).StackFrame[]} frame Stack frames in this stack trace.
*/
/**
 * @typedef Trace
 * @memberOf! tracing(v2)
 * @type object
* @property {string} name The resource name of Trace in the format
`projects/PROJECT_ID/traces/TRACE_ID`. `TRACE_ID` is a unique identifier
for a trace within a project and is a base16-encoded, case-insensitive
string and is required to be 32 char long.
*/
/**
 * @typedef TimeEvents
 * @memberOf! tracing(v2)
 * @type object
* @property {integer} droppedNetworkEventsCount The number of dropped network events after the maximum size was enforced.
If 0 then no annotations were dropped.
* @property {integer} droppedAnnotationsCount The number of dropped annotations after the maximum size was enforced. If
0 then no annotations were dropped.
* @property {tracing(v2).TimeEvent[]} timeEvent A collection of `TimeEvent`s.
*/
export = Tracing;
