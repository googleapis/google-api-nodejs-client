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

'use strict';

var createAPIRequest = require('../../lib/apirequest');
var utils = require('../../lib/utils');

/**
 * Google Tracing API
 *
 * Send and retrieve trace data from Google Stackdriver Trace.

 *
 * @example
 * var google = require('googleapis');
 * var tracing = google.tracing('v1');
 *
 * @namespace tracing
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Tracing
 */
function Tracing(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.projects = {

    traces: {

      /**
       * tracing.projects.traces.batchUpdate
       *
       * @desc Sends new spans to Stackdriver Trace or updates existing spans. If the name of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the name does not match, a new trace is created with given set of spans.
       *
       * @alias tracing.projects.traces.batchUpdate
       * @memberOf! tracing(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent ID of the Cloud project where the trace data is stored.
       * @param {tracing(v1).BatchUpdateSpansRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      batchUpdate: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://tracing.googleapis.com/v1/{parent}/traces:batchUpdate',
            method: 'PATCH'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
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
       * @memberOf! tracing(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name ID of the span set where is "projects/<project_id>/traces/<trace_id>".
       * @param {string=} params.pageToken Token identifying the page of results to return. If provided, use the value of the `page_token` field from a previous request. Optional.
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

        var parameters = {
          options: utils.extend({
            url: 'https://tracing.googleapis.com/v1/{name}:listSpans',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * tracing.projects.traces.list
       *
       * @desc Returns of a list of traces that match the specified filter conditions.
       *
       * @alias tracing.projects.traces.list
       * @memberOf! tracing(v1)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.filter An optional filter for the request. Example: "version_label_key:a some_label:some_label_key" returns traces from version a and has some_label with some_label_key.
       * @param {string=} params.endTime End of the time interval (inclusive) during which the trace data was collected from the application.
       * @param {string=} params.startTime Start of the time interval (inclusive) during which the trace data was collected from the application.
       * @param {string=} params.pageToken Token identifying the page of results to return. If provided, use the value of the `next_page_token` field from a previous request. Optional.
       * @param {integer=} params.pageSize Maximum number of traces to return. If not specified or <= 0, the implementation selects a reasonable value.  The implementation may return fewer traces than the requested page size. Optional.
       * @param {string} params.parent ID of the Cloud project where the trace data is stored.
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

        var parameters = {
          options: utils.extend({
            url: 'https://tracing.googleapis.com/v1/{parent}/traces',
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
       * tracing.projects.traces.get
       *
       * @desc Returns a specific trace.
       *
       * @alias tracing.projects.traces.get
       * @memberOf! tracing(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name ID of the trace which is "projects/<project_id>/traces/<trace_id>".
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://tracing.googleapis.com/v1/{name}',
            method: 'GET'
          }, options),
          params: params,
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
 * @typedef BatchUpdateSpansRequest
 * @memberOf! tracing(v1)
 * @type object
 * @property {object} spanUpdates A map from trace name to spans to be stored or updated.
 */
/**
 * @typedef StackTrace
 * @memberOf! tracing(v1)
 * @type object
* @property {tracing(v1).StackFrame[]} stackFrame Stack frames of this stack trace.
* @property {string} stackTraceHashId User can choose to use their own hash function to hash large attributes to
save network bandwidth and storage.
Typical usage is to pass both stack_frame and stack_trace_hash_id initially
to inform the storage of the mapping. And in subsequent calls, pass in
stack_trace_hash_id only. User shall verify the hash value is
successfully stored.
*/
/**
 * @typedef TimeEvent
 * @memberOf! tracing(v1)
 * @type object
 * @property {tracing(v1).NetworkEvent} networkEvent Optional field that can be used only for network events.
 * @property {tracing(v1).Annotation} annotation Optional field for user supplied &lt;string, AttributeValue&gt; map
 * @property {string} localTime The local machine absolute timestamp when this event happened.
 */
/**
 * @typedef NetworkEvent
 * @memberOf! tracing(v1)
 * @type object
* @property {string} messageId Every message has an identifier, which must be different from all the
network messages in this span.
This is especially important when the request/response are streamed.
* @property {string} messageSize Number of bytes send/receive.
* @property {string} kernelTime If available, this is the kernel time:
For sent messages, this is the time at which the first bit was sent.
For received messages, this is the time at which the last bit was
received.
* @property {string} type 
*/
/**
 * @typedef ListSpansResponse
 * @memberOf! tracing(v1)
 * @type object
* @property {string} nextPageToken If defined, indicates that there are more spans that match the request
and that this value should be passed to the next request to continue
retrieving additional spans.
* @property {tracing(v1).Span[]} spans The requested spans if they are any in the specified trace.
*/
/**
 * @typedef SpanUpdates
 * @memberOf! tracing(v1)
 * @type object
 * @property {tracing(v1).Span[]} spans 
 */
/**
 * @typedef StackFrame
 * @memberOf! tracing(v1)
 * @type object
* @property {string} functionName Fully qualified names which uniquely identify function/method/etc.
* @property {string} lineNumber Line number of the frame.
* @property {tracing(v1).Module} loadModule Binary module the code is loaded from.
* @property {string} columnNumber Column number is important in JavaScript(anonymous functions),
Might not be available in some languages.
* @property {string} fileName File name of the frame.
* @property {string} sourceVersion source_version is deployment specific. It might be
better to be stored in deployment metadata.
* @property {string} originalFunctionName Used when function name is ‘mangled’. Not guaranteed to be fully
qualified but usually it is.
*/
/**
 * @typedef Link
 * @memberOf! tracing(v1)
 * @type object
 * @property {string} type The type of the link.
 * @property {string} traceId The trace identifier of the linked span.
 * @property {string} spanId The span identifier of the linked span.
 */
/**
 * @typedef Annotation
 * @memberOf! tracing(v1)
 * @type object
 * @property {object} attributes A set of attributes on the annotation.
 * @property {string} description A user-supplied message describing the event.
 */
/**
 * @typedef Trace
 * @memberOf! tracing(v1)
 * @type object
* @property {string} name ID of the trace which is &quot;projects/&lt;project_id&gt;/traces/&lt;trace_id&gt;&quot;.
trace_id is globally unique identifier for the trace. Common to all the
spans. It is conceptually a 128-bit hex-encoded value.
*/
/**
 * @typedef Module
 * @memberOf! tracing(v1)
 * @type object
* @property {string} module Binary module.
E.g. main binary, kernel modules, and dynamic libraries
such as libc.so, sharedlib.so
* @property {string} buildId Build_id is a unique identifier for the module,
usually a hash of its contents
*/
/**
 * @typedef Status
 * @memberOf! tracing(v1)
 * @type object
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
* @property {object[]} details A list of messages that carry the error details.  There will be a
common set of message types for APIs to use.
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
*/
/**
 * @typedef ListTracesResponse
 * @memberOf! tracing(v1)
 * @type object
* @property {tracing(v1).Trace[]} traces List of trace records returned.
* @property {string} nextPageToken If defined, indicates that there are more traces that match the request
and that this value should be passed to the next request to continue
retrieving additional traces.
*/
/**
 * @typedef Span
 * @memberOf! tracing(v1)
 * @type object
* @property {string} name Name of the span. The span name is sanitized and displayed in the
Stackdriver Trace tool in the {% dynamic print site_values.console_name %}.
The name may be a method name or some other per-call site name.
For the same executable and the same call point, a best practice is
to use a consistent name, which makes it easier to correlate
cross-trace spans.
* @property {tracing(v1).StackTrace} stackTrace Stack trace captured at the start of the span. This is optional.
* @property {tracing(v1).Link[]} links A collection of links.
* @property {object} attributes Properties of a span. Attributes at the span level.
E.g.
&quot;/instance_id&quot;: &quot;my-instance&quot;
&quot;/zone&quot;: &quot;us-central1-a&quot;
&quot;/grpc/peer_address&quot;: &quot;ip:port&quot; (dns, etc.)
&quot;/grpc/deadline&quot;: &quot;Duration&quot;
&quot;/http/user_agent&quot;
&quot;/http/request_bytes&quot;: 300
&quot;/http/response_bytes&quot;: 1200
&quot;/http/url&quot;: google.com/apis
&quot;/pid&quot;
&quot;abc.com/myattribute&quot;: &quot;my attribute value&quot;

Maximum length for attribute key is 128 characters, for string attribute
value is 2K characters.
* @property {string} id Identifier for the span. Must be a 64-bit integer other than 0 and
unique within a trace.
* @property {string} localStartTime Local machine clock time from the UNIX epoch,
at which span execution started.
On the server side these are the times when the server application
handler starts running.
* @property {boolean} hasRemoteParent True if this Span has a remote parent (is an RPC server Span).
* @property {tracing(v1).TimeEvent[]} timeEvents A collection of time-stamped events.
* @property {string} parentId ID of parent span. 0 or missing if this is a root span.
* @property {string} localEndTime Local machine clock time from the UNIX epoch,
at which span execution ended.
On the server side these are the times when the server application
handler finishes running.
* @property {tracing(v1).Status} status The final status of the Span. This is optional.
*/
/**
 * @typedef Empty
 * @memberOf! tracing(v1)
 * @type object
 */
/**
 * @typedef AttributeValue
 * @memberOf! tracing(v1)
 * @type object
 * @property {string} intValue An integer value.
 * @property {string} stringValue A string value.
 * @property {boolean} boolValue A boolean value.
 */
module.exports = Tracing;
