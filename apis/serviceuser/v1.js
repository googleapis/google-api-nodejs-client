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
 * Google Service User API
 *
 * Enables services that service consumers want to use on Google Cloud Platform, lists the available or enabled services, or disables services that service consumers no longer use.
 *
 * @example
 * var google = require('googleapis');
 * var serviceuser = google.serviceuser('v1');
 *
 * @namespace serviceuser
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Serviceuser
 */
function Serviceuser(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.projects = {

    services: {

      /**
       * serviceuser.projects.services.disable
       *
       * @desc Disable a service so it can no longer be used with a project. This prevents unintended usage that may cause unexpected billing charges or security leaks.  Operation<response: google.protobuf.Empty>
       *
       * @alias serviceuser.projects.services.disable
       * @memberOf! serviceuser(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Name of the consumer and the service to disable for that consumer.  The Service User implementation accepts the following forms for consumer: - "project:<project_id>"  A valid path would be: - /v1/projects/my-project/services/servicemanagement.googleapis.com:disable
       * @param {serviceuser(v1).DisableServiceRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      disable: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://serviceuser.googleapis.com/v1/{name}:disable',
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
       * serviceuser.projects.services.enable
       *
       * @desc Enable a service so it can be used with a project. See [Cloud Auth Guide](https://cloud.google.com/docs/authentication) for more information.  Operation<response: google.protobuf.Empty>
       *
       * @alias serviceuser.projects.services.enable
       * @memberOf! serviceuser(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Name of the consumer and the service to enable for that consumer.  A valid path would be: - /v1/projects/my-project/services/servicemanagement.googleapis.com:enable
       * @param {serviceuser(v1).EnableServiceRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      enable: function (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options || (options = {});

        var parameters = {
          options: utils.extend({
            url: 'https://serviceuser.googleapis.com/v1/{name}:enable',
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
       * serviceuser.projects.services.list
       *
       * @desc List enabled services for the specified consumer.
       *
       * @alias serviceuser.projects.services.list
       * @memberOf! serviceuser(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent List enabled services for the specified parent.  An example valid parent would be: - projects/my-project
       * @param {string=} params.pageToken Token identifying which result to start with; returned by a previous list call.
       * @param {integer=} params.pageSize Requested size of the next page of data.
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
            url: 'https://serviceuser.googleapis.com/v1/{parent}/services',
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };

  self.services = {

    /**
     * serviceuser.services.search
     *
     * @desc Search available services.  When no filter is specified, returns all accessible services. For authenticated users, also returns all services the calling user has "servicemanagement.services.bind" permission for.
     *
     * @alias serviceuser.services.search
     * @memberOf! serviceuser(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.pageToken Token identifying which result to start with; returned by a previous list call.
     * @param {integer=} params.pageSize Requested size of the next page of data.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      var parameters = {
        options: utils.extend({
          url: 'https://serviceuser.googleapis.com/v1/services:search',
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef Option
 * @memberOf! serviceuser(v1)
 * @type object
* @property {object} value The option&#39;s value packed in an Any message. If the value is a primitive,
the corresponding wrapper type defined in google/protobuf/wrappers.proto
should be used. If the value is an enum, it should be stored as an int32
value using the google.protobuf.Int32Value type.
* @property {string} name The option&#39;s name. For protobuf built-in options (options defined in
descriptor.proto), this is the short name. For example, `&quot;map_entry&quot;`.
For custom options, it should be the fully-qualified name. For example,
`&quot;google.api.http&quot;`.
*/
/**
 * @typedef Logging
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).LoggingDestination[]} consumerDestinations Logging configurations for sending logs to the consumer project.
There can be multiple consumer destinations, each one must have a
different monitored resource type. A log can be used in at most
one consumer destination.
* @property {serviceuser(v1).LoggingDestination[]} producerDestinations Logging configurations for sending logs to the producer project.
There can be multiple producer destinations, each one must have a
different monitored resource type. A log can be used in at most
one producer destination.
*/
/**
 * @typedef QuotaLimit
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} defaultLimit Default number of tokens that can be consumed during the specified
duration. This is the number of tokens assigned when a client
application developer activates the service for his/her project.

Specifying a value of 0 will block all requests. This can be used if you
are provisioning quota to selected consumers and blocking others.
Similarly, a value of -1 will indicate an unlimited quota. No other
negative values are allowed.

Used by group-based quotas only.
* @property {string} displayName User-visible display name for this limit.
Optional. If not set, the UI will provide a default display name based on
the quota configuration. This field can be used to override the default
display name generated from the configuration.
* @property {string} description Optional. User-visible, extended description for this quota limit.
Should be used only when more context is needed to understand this limit
than provided by the limit&#39;s display name (see: `display_name`).
* @property {string} metric The name of the metric this quota limit applies to. The quota limits with
the same metric will be checked together during runtime. The metric must be
defined within the service config.

Used by metric-based quotas only.
* @property {object} values Tiered limit values. Also allows for regional or zone overrides for these
values if &quot;/{region}&quot; or &quot;/{zone}&quot; is specified in the unit field.

Currently supported tiers from low to high:
VERY_LOW, LOW, STANDARD, HIGH, VERY_HIGH

To apply different limit values for users according to their tiers, specify
the values for the tiers you want to differentiate. For example:
{LOW:100, STANDARD:500, HIGH:1000, VERY_HIGH:5000}

The limit value for each tier is optional except for the tier STANDARD.
The limit value for an unspecified tier falls to the value of its next
tier towards tier STANDARD. For the above example, the limit value for tier
STANDARD is 500.

To apply the same limit value for all users, just specify limit value for
tier STANDARD. For example: {STANDARD:500}.

To apply a regional overide for a tier, add a map entry with key
&quot;&lt;TIER&gt;/&lt;region&gt;&quot;, where &lt;region&gt; is a region name. Similarly, for a zone
override, add a map entry with key &quot;&lt;TIER&gt;/{zone}&quot;.
Further, a wildcard can be used at the end of a zone name in order to
specify zone level overrides. For example:
LOW: 10, STANDARD: 50, HIGH: 100,
LOW/us-central1: 20, STANDARD/us-central1: 60, HIGH/us-central1: 200,
LOW/us-central1-*: 10, STANDARD/us-central1-*: 20, HIGH/us-central1-*: 80

The regional overrides tier set for each region must be the same as
the tier set for default limit values. Same rule applies for zone overrides
tier as well.

Used by metric-based quotas only.
* @property {string} unit Specify the unit of the quota limit. It uses the same syntax as
Metric.unit. The supported unit kinds are determined by the quota
backend system.

The [Google Service Control](https://cloud.google.com/service-control)
supports the following unit components:
* One of the time intevals:
  * &quot;/min&quot;  for quota every minute.
  * &quot;/d&quot;  for quota every 24 hours, starting 00:00 US Pacific Time.
  * Otherwise the quota won&#39;t be reset by time, such as storage limit.
* One and only one of the granted containers:
  * &quot;/{organization}&quot; quota for an organization.
  * &quot;/{project}&quot; quota for a project.
  * &quot;/{folder}&quot; quota for a folder.
  * &quot;/{resource}&quot; quota for a universal resource.
* Zero or more quota segmentation dimension. Not all combos are valid.
  * &quot;/{user}&quot; quota for every user GAIA ID or client ip address.
    User GAIA ID has precedence over client ip address.
  * &quot;/{region}&quot; quota for every region. Not to be used with time intervals.
  * Otherwise the resources granted on the target is not segmented.
  * &quot;/{zone}&quot; quota for every zone. Not to be used with time intervals.
  * Otherwise the resources granted on the target is not segmented.
  * &quot;/{resource}&quot; quota for a resource associated with a project or org.

Here are some examples:
* &quot;1/min/{project}&quot; for quota per minute per project.
* &quot;1/min/{user}&quot; for quota per minute per user.
* &quot;1/min/{organization}&quot; for quota per minute per organization.

Note: the order of unit components is insignificant.
The &quot;1&quot; at the beginning is required to follow the metric unit syntax.

Used by metric-based quotas only.
* @property {string} maxLimit Maximum number of tokens that can be consumed during the specified
duration. Client application developers can override the default limit up
to this maximum. If specified, this value cannot be set to a value less
than the default limit. If not specified, it is set to the default limit.

To allow clients to apply overrides with no upper bound, set this to -1,
indicating unlimited maximum quota.

Used by group-based quotas only.
* @property {string} name Name of the quota limit. The name is used to refer to the limit when
overriding the default limit on per-consumer basis.

For group-based quota limits, the name must be unique within the quota
group. If a name is not provided, it will be generated from the limit_by
and duration fields.

For metric-based quota limits, the name must be provided, and it must be
unique within the service. The name can only include alphanumeric
characters as well as &#39;-&#39;.

The maximum length of the limit name is 64 characters.

The name of a limit is used as a unique identifier for this limit.
Therefore, once a limit has been put into use, its name should be
immutable. You can use the display_name field to provide a user-friendly
name for the limit. The display name can be evolved over time without
affecting the identity of the limit.
* @property {string} duration Duration of this limit in textual notation. Example: &quot;100s&quot;, &quot;24h&quot;, &quot;1d&quot;.
For duration longer than a day, only multiple of days is supported. We
support only &quot;100s&quot; and &quot;1d&quot; for now. Additional support will be added in
the future. &quot;0&quot; indicates indefinite duration.

Used by group-based quotas only.
* @property {string} freeTier Free tier value displayed in the Developers Console for this limit.
The free tier is the number of tokens that will be subtracted from the
billed amount when billing is enabled.
This field can only be set on a limit with duration &quot;1d&quot;, in a billable
group; it is invalid on any other limit. If this field is not set, it
defaults to 0, indicating that there is no free tier for this service.

Used by group-based quotas only.
*/
/**
 * @typedef Method
 * @memberOf! serviceuser(v1)
 * @type object
 * @property {boolean} responseStreaming If true, the response is streamed.
 * @property {string} name The simple name of this method.
 * @property {string} requestTypeUrl A URL of the input message type.
 * @property {boolean} requestStreaming If true, the request is streamed.
 * @property {string} syntax The source syntax of this method.
 * @property {string} responseTypeUrl The URL of the output message type.
 * @property {serviceuser(v1).Option[]} options Any metadata attached to the method.
 */
/**
 * @typedef Mixin
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} root If non-empty specifies a path under which inherited HTTP paths
are rooted.
* @property {string} name The fully qualified name of the API which is included.
*/
/**
 * @typedef CustomError
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).CustomErrorRule[]} rules The list of custom error rules that apply to individual API messages.

**NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
* @property {string[]} types The list of custom error detail types, e.g. &#39;google.foo.v1.CustomError&#39;.
*/
/**
 * @typedef Http
 * @memberOf! serviceuser(v1)
 * @type object
* @property {boolean} fullyDecodeReservedExpansion When set to true, URL path parmeters will be fully URI-decoded except in
cases of single segment matches in reserved expansion, where &quot;%2F&quot; will be
left encoded.

The default behavior is to not decode RFC 6570 reserved characters in multi
segment matches.
* @property {serviceuser(v1).HttpRule[]} rules A list of HTTP configuration rules that apply to individual API methods.

**NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
*/
/**
 * @typedef SourceInfo
 * @memberOf! serviceuser(v1)
 * @type object
 * @property {object[]} sourceFiles All files used during config generation.
 */
/**
 * @typedef Control
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} environment The service control environment to use. If empty, no control plane
feature (like quota and billing) will be enabled.
*/
/**
 * @typedef SystemParameter
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} name Define the name of the parameter, such as &quot;api_key&quot; . It is case sensitive.
* @property {string} urlQueryParameter Define the URL query parameter name to use for the parameter. It is case
sensitive.
* @property {string} httpHeader Define the HTTP header name to use for the parameter. It is case
insensitive.
*/
/**
 * @typedef Monitoring
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).MonitoringDestination[]} consumerDestinations Monitoring configurations for sending metrics to the consumer project.
There can be multiple consumer destinations, each one must have a
different monitored resource type. A metric can be used in at most
one consumer destination.
* @property {serviceuser(v1).MonitoringDestination[]} producerDestinations Monitoring configurations for sending metrics to the producer project.
There can be multiple producer destinations, each one must have a
different monitored resource type. A metric can be used in at most
one producer destination.
*/
/**
 * @typedef Field
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} typeUrl The field type URL, without the scheme, for message or enumeration
types. Example: `&quot;type.googleapis.com/google.protobuf.Timestamp&quot;`.
* @property {integer} number The field number.
* @property {string} kind The field type.
* @property {string} jsonName The field JSON name.
* @property {serviceuser(v1).Option[]} options The protocol buffer options.
* @property {integer} oneofIndex The index of the field type in `Type.oneofs`, for message or enumeration
types. The first type has index 1; zero means the type is not in the list.
* @property {boolean} packed Whether to use alternative packed wire representation.
* @property {string} cardinality The field cardinality.
* @property {string} defaultValue The string value of the default value of this field. Proto2 syntax only.
* @property {string} name The field name.
*/
/**
 * @typedef Enum
 * @memberOf! serviceuser(v1)
 * @type object
 * @property {string} name Enum type name.
 * @property {serviceuser(v1).EnumValue[]} enumvalue Enum value definitions.
 * @property {serviceuser(v1).Option[]} options Protocol buffer options.
 * @property {serviceuser(v1).SourceContext} sourceContext The source context.
 * @property {string} syntax The source syntax.
 */
/**
 * @typedef EnableServiceRequest
 * @memberOf! serviceuser(v1)
 * @type object
 */
/**
 * @typedef LabelDescriptor
 * @memberOf! serviceuser(v1)
 * @type object
 * @property {string} key The label key.
 * @property {string} description A human-readable description for the label.
 * @property {string} valueType The type of data that can be assigned to the label.
 */
/**
 * @typedef Type
 * @memberOf! serviceuser(v1)
 * @type object
 * @property {string} syntax The source syntax.
 * @property {serviceuser(v1).SourceContext} sourceContext The source context.
 * @property {serviceuser(v1).Option[]} options The protocol buffer options.
 * @property {serviceuser(v1).Field[]} fields The list of fields.
 * @property {string} name The fully qualified message name.
 * @property {string[]} oneofs The list of types appearing in `oneof` definitions in this type.
 */
/**
 * @typedef Experimental
 * @memberOf! serviceuser(v1)
 * @type object
 * @property {serviceuser(v1).AuthorizationConfig} authorization Authorization configuration.
 */
/**
 * @typedef Backend
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).BackendRule[]} rules A list of API backend rules that apply to individual API methods.

**NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
*/
/**
 * @typedef AuthorizationConfig
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} provider The name of the authorization provider, such as
firebaserules.googleapis.com.
*/
/**
 * @typedef DocumentationRule
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} deprecationDescription Deprecation description of the selected element(s). It can be provided if an
element is marked as `deprecated`.
* @property {string} selector The selector is a comma-separated list of patterns. Each pattern is a
qualified name of the element which may end in &quot;*&quot;, indicating a wildcard.
Wildcards are only allowed at the end and for a whole component of the
qualified name, i.e. &quot;foo.*&quot; is ok, but not &quot;foo.b*&quot; or &quot;foo.*.bar&quot;. To
specify a default for all applicable elements, the whole pattern &quot;*&quot;
is used.
* @property {string} description Description of the selected API(s).
*/
/**
 * @typedef ContextRule
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} selector Selects the methods to which this rule applies.

Refer to selector for syntax details.
* @property {string[]} provided A list of full type names of provided contexts.
* @property {string[]} requested A list of full type names of requested contexts.
*/
/**
 * @typedef MetricDescriptor
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} metricKind Whether the metric records instantaneous values, changes to a value, etc.
Some combinations of `metric_kind` and `value_type` might not be supported.
* @property {string} description A detailed description of the metric, which can be used in documentation.
* @property {string} displayName A concise name for the metric, which can be displayed in user interfaces.
Use sentence case without an ending period, for example &quot;Request count&quot;.
* @property {string} unit The unit in which the metric value is reported. It is only applicable
if the `value_type` is `INT64`, `DOUBLE`, or `DISTRIBUTION`. The
supported units are a subset of [The Unified Code for Units of
Measure](http://unitsofmeasure.org/ucum.html) standard:

**Basic units (UNIT)**

* `bit`   bit
* `By`    byte
* `s`     second
* `min`   minute
* `h`     hour
* `d`     day

**Prefixes (PREFIX)**

* `k`     kilo    (10**3)
* `M`     mega    (10**6)
* `G`     giga    (10**9)
* `T`     tera    (10**12)
* `P`     peta    (10**15)
* `E`     exa     (10**18)
* `Z`     zetta   (10**21)
* `Y`     yotta   (10**24)
* `m`     milli   (10**-3)
* `u`     micro   (10**-6)
* `n`     nano    (10**-9)
* `p`     pico    (10**-12)
* `f`     femto   (10**-15)
* `a`     atto    (10**-18)
* `z`     zepto   (10**-21)
* `y`     yocto   (10**-24)
* `Ki`    kibi    (2**10)
* `Mi`    mebi    (2**20)
* `Gi`    gibi    (2**30)
* `Ti`    tebi    (2**40)

**Grammar**

The grammar includes the dimensionless unit `1`, such as `1/s`.

The grammar also includes these connectors:

* `/`    division (as an infix operator, e.g. `1/s`).
* `.`    multiplication (as an infix operator, e.g. `GBy.d`)

The grammar for a unit is as follows:

    Expression = Component { &quot;.&quot; Component } { &quot;/&quot; Component } ;

    Component = [ PREFIX ] UNIT [ Annotation ]
              | Annotation
              | &quot;1&quot;
              ;

    Annotation = &quot;{&quot; NAME &quot;}&quot; ;

Notes:

* `Annotation` is just a comment if it follows a `UNIT` and is
   equivalent to `1` if it is used alone. For examples,
   `{requests}/s == 1/s`, `By{transmitted}/s == By/s`.
* `NAME` is a sequence of non-blank printable ASCII characters not
   containing &#39;{&#39; or &#39;}&#39;.
* @property {serviceuser(v1).LabelDescriptor[]} labels The set of labels that can be used to describe a specific
instance of this metric type. For example, the
`appengine.googleapis.com/http/server/response_latencies` metric
type has a label for the HTTP response code, `response_code`, so
you can look at latencies for successful responses or just
for responses that failed.
* @property {string} name The resource name of the metric descriptor. Depending on the
implementation, the name typically includes: (1) the parent resource name
that defines the scope of the metric type or of its data; and (2) the
metric&#39;s URL-encoded type, which also appears in the `type` field of this
descriptor. For example, following is the resource name of a custom
metric within the GCP project `my-project-id`:

    &quot;projects/my-project-id/metricDescriptors/custom.googleapis.com%2Finvoice%2Fpaid%2Famount&quot;
* @property {string} type The metric type, including its DNS name prefix. The type is not
URL-encoded.  All user-defined custom metric types have the DNS name
`custom.googleapis.com`.  Metric types should use a natural hierarchical
grouping. For example:

    &quot;custom.googleapis.com/invoice/paid/amount&quot;
    &quot;appengine.googleapis.com/http/server/response_latencies&quot;
* @property {string} valueType Whether the measurement is an integer, a floating-point number, etc.
Some combinations of `metric_kind` and `value_type` might not be supported.
*/
/**
 * @typedef SourceContext
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} fileName The path-qualified name of the .proto file that contained the associated
protobuf element.  For example: `&quot;google/protobuf/source_context.proto&quot;`.
*/
/**
 * @typedef Endpoint
 * @memberOf! serviceuser(v1)
 * @type object
* @property {boolean} allowCors Allowing
[CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka
cross-domain traffic, would allow the backends served from this endpoint to
receive and respond to HTTP OPTIONS requests. The response will be used by
the browser to determine whether the subsequent cross-origin request is
allowed to proceed.
* @property {string[]} aliases DEPRECATED: This field is no longer supported. Instead of using aliases,
please specify multiple google.api.Endpoint for each of the intented
alias.

Additional names that this endpoint will be hosted on.
* @property {string} target The specification of an Internet routable address of API frontend that will
handle requests to this [API Endpoint](https://cloud.google.com/apis/design/glossary).
It should be either a valid IPv4 address or a fully-qualified domain name.
For example, &quot;8.8.8.8&quot; or &quot;myservice.appspot.com&quot;.
* @property {string} name The canonical name of this endpoint.
* @property {string[]} features The list of features enabled on this endpoint.
* @property {string[]} apis The list of APIs served by this endpoint.
*/
/**
 * @typedef ListEnabledServicesResponse
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).PublishedService[]} services Services enabled for the specified parent.
* @property {string} nextPageToken Token that can be passed to `ListEnabledServices` to resume a paginated
query.
*/
/**
 * @typedef OAuthRequirements
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} canonicalScopes The list of publicly documented OAuth scopes that are allowed access. An
OAuth token containing any of these scopes will be accepted.

Example:

     canonical_scopes: https://www.googleapis.com/auth/calendar,
                       https://www.googleapis.com/auth/calendar.read
*/
/**
 * @typedef Usage
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).UsageRule[]} rules A list of usage rules that apply to individual API methods.

**NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
* @property {string[]} requirements Requirements that must be satisfied before a consumer project can use the
service. Each requirement is of the form &lt;service.name&gt;/&lt;requirement-id&gt;;
for example &#39;serviceusage.googleapis.com/billing-enabled&#39;.
* @property {string} producerNotificationChannel The full resource name of a channel used for sending notifications to the
service producer.

Google Service Management currently only supports
[Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification
channel. To use Google Cloud Pub/Sub as the channel, this must be the name
of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format
documented in https://cloud.google.com/pubsub/docs/overview.
*/
/**
 * @typedef Context
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).ContextRule[]} rules A list of RPC context rules that apply to individual API methods.

**NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
*/
/**
 * @typedef LogDescriptor
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} description A human-readable description of this log. This information appears in
the documentation and can contain details.
* @property {string} displayName The human-readable name for this log. This information appears on
the user interface and should be concise.
* @property {serviceuser(v1).LabelDescriptor[]} labels The set of labels that are available to describe a specific log entry.
Runtime requests that contain labels not specified here are
considered invalid.
* @property {string} name The name of the log. It must be less than 512 characters long and can
include the following characters: upper- and lower-case alphanumeric
characters [A-Za-z0-9], and punctuation characters including
slash, underscore, hyphen, period [/_-.].
*/
/**
 * @typedef MonitoredResourceDescriptor
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} name Optional. The resource name of the monitored resource descriptor:
`&quot;projects/{project_id}/monitoredResourceDescriptors/{type}&quot;` where
{type} is the value of the `type` field in this object and
{project_id} is a project ID that provides API-specific context for
accessing the type.  APIs that do not use project information can use the
resource name format `&quot;monitoredResourceDescriptors/{type}&quot;`.
* @property {string} displayName Optional. A concise name for the monitored resource type that might be
displayed in user interfaces. It should be a Title Cased Noun Phrase,
without any article or other determiners. For example,
`&quot;Google Cloud SQL Database&quot;`.
* @property {string} description Optional. A detailed description of the monitored resource type that might
be used in documentation.
* @property {string} type Required. The monitored resource type. For example, the type
`&quot;cloudsql_database&quot;` represents databases in Google Cloud SQL.
The maximum length of this value is 256 characters.
* @property {serviceuser(v1).LabelDescriptor[]} labels Required. A set of labels used to describe instances of this monitored
resource type. For example, an individual Google Cloud SQL database is
identified by values for the labels `&quot;database_id&quot;` and `&quot;zone&quot;`.
*/
/**
 * @typedef CustomErrorRule
 * @memberOf! serviceuser(v1)
 * @type object
* @property {boolean} isErrorType Mark this message as possible payload in error response.  Otherwise,
objects of this type will be filtered when they appear in error payload.
* @property {string} selector Selects messages to which this rule applies.

Refer to selector for syntax details.
*/
/**
 * @typedef MediaDownload
 * @memberOf! serviceuser(v1)
 * @type object
* @property {boolean} enabled Whether download is enabled.
* @property {string} downloadService DO NOT USE THIS FIELD UNTIL THIS WARNING IS REMOVED.

Specify name of the download service if one is used for download.
*/
/**
 * @typedef DisableServiceRequest
 * @memberOf! serviceuser(v1)
 * @type object
 */
/**
 * @typedef SearchServicesResponse
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).PublishedService[]} services Services available publicly or available to the authenticated caller.
* @property {string} nextPageToken Token that can be passed to `ListAvailableServices` to resume a paginated
query.
*/
/**
 * @typedef MediaUpload
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} uploadService DO NOT USE THIS FIELD UNTIL THIS WARNING IS REMOVED.

Specify name of the upload service if one is used for upload.
* @property {boolean} enabled Whether upload is enabled.
*/
/**
 * @typedef UsageRule
 * @memberOf! serviceuser(v1)
 * @type object
* @property {boolean} allowUnregisteredCalls True, if the method allows unregistered calls; false otherwise.
* @property {string} selector Selects the methods to which this rule applies. Use &#39;*&#39; to indicate all
methods in all APIs.

Refer to selector for syntax details.
*/
/**
 * @typedef AuthRequirement
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} audiences NOTE: This will be deprecated soon, once AuthProvider.audiences is
implemented and accepted in all the runtime components.

The list of JWT
[audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
that are allowed to access. A JWT containing any of these audiences will
be accepted. When this setting is absent, only JWTs with audience
&quot;https://Service_name/API_name&quot;
will be accepted. For example, if no audiences are in the setting,
LibraryService API will only accept JWTs with the following audience
&quot;https://library-example.googleapis.com/google.example.library.v1.LibraryService&quot;.

Example:

    audiences: bookstore_android.apps.googleusercontent.com,
               bookstore_web.apps.googleusercontent.com
* @property {string} providerId id from authentication provider.

Example:

    provider_id: bookstore_auth
*/
/**
 * @typedef Documentation
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} summary A short summary of what the service does. Can only be provided by
plain text.
* @property {string} documentationRootUrl The URL to the root of documentation.
* @property {serviceuser(v1).DocumentationRule[]} rules A list of documentation rules that apply to individual API elements.

**NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
* @property {string} overview Declares a single overview page. For example:
&lt;pre&gt;&lt;code&gt;documentation:
  summary: ...
  overview: &amp;#40;== include overview.md ==&amp;#41;
&lt;/code&gt;&lt;/pre&gt;
This is a shortcut for the following declaration (using pages style):
&lt;pre&gt;&lt;code&gt;documentation:
  summary: ...
  pages:
  - name: Overview
    content: &amp;#40;== include overview.md ==&amp;#41;
&lt;/code&gt;&lt;/pre&gt;
Note: you cannot specify both `overview` field and `pages` field.
* @property {serviceuser(v1).Page[]} pages The top level pages for the documentation set.
*/
/**
 * @typedef BackendRule
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} address The address of the API backend.
* @property {string} selector Selects the methods to which this rule applies.

Refer to selector for syntax details.
* @property {number} deadline The number of seconds to wait for a response from a request.  The
default depends on the deployment context.
*/
/**
 * @typedef AuthenticationRule
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).OAuthRequirements} oauth The requirements for OAuth credentials.
* @property {serviceuser(v1).AuthRequirement[]} requirements Requirements for additional authentication providers.
* @property {string} selector Selects the methods to which this rule applies.

Refer to selector for syntax details.
* @property {boolean} allowWithoutCredential Whether to allow requests without a credential. The credential can be
an OAuth token, Google cookies (first-party auth) or EndUserCreds.

For requests without credentials, if the service control environment is
specified, each incoming request **must** be associated with a service
consumer. This can be done by passing an API key that belongs to a consumer
project.
*/
/**
 * @typedef Api
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).Option[]} options Any metadata attached to the API.
* @property {serviceuser(v1).Method[]} methods The methods of this api, in unspecified order.
* @property {string} name The fully qualified name of this api, including package name
followed by the api&#39;s simple name.
* @property {serviceuser(v1).SourceContext} sourceContext Source context for the protocol buffer service represented by this
message.
* @property {string} syntax The source syntax of the service.
* @property {string} version A version string for this api. If specified, must have the form
`major-version.minor-version`, as in `1.10`. If the minor version
is omitted, it defaults to zero. If the entire version field is
empty, the major version is derived from the package name, as
outlined below. If the field is not empty, the version in the
package name will be verified to be consistent with what is
provided here.

The versioning schema uses [semantic
versioning](http://semver.org) where the major version number
indicates a breaking change and the minor version an additive,
non-breaking change. Both version numbers are signals to users
what to expect from different versions, and should be carefully
chosen based on the product plan.

The major version is also reflected in the package name of the
API, which must end in `v&lt;major-version&gt;`, as in
`google.feature.v1`. For major versions 0 and 1, the suffix can
be omitted. Zero major versions must only be used for
experimental, none-GA apis.

* @property {serviceuser(v1).Mixin[]} mixins Included APIs. See Mixin.
*/
/**
 * @typedef MetricRule
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} selector Selects the methods to which this rule applies.

Refer to selector for syntax details.
* @property {object} metricCosts Metrics to update when the selected methods are called, and the associated
cost applied to each metric.

The key of the map is the metric name, and the values are the amount
increased for the metric against which the quota limits are defined.
The value must not be negative.
*/
/**
 * @typedef Authentication
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).AuthProvider[]} providers Defines a set of authentication providers that a service supports.
* @property {serviceuser(v1).AuthenticationRule[]} rules A list of authentication rules that apply to individual API methods.

**NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
*/
/**
 * @typedef Operation
 * @memberOf! serviceuser(v1)
 * @type object
* @property {boolean} done If the value is `false`, it means the operation is still in progress.
If true, the operation is completed, and either `error` or `response` is
available.
* @property {object} response The normal response of the operation in case of success.  If the original
method returns no data on success, such as `Delete`, the response is
`google.protobuf.Empty`.  If the original method is standard
`Get`/`Create`/`Update`, the response should be the resource.  For other
methods, the response should have the type `XxxResponse`, where `Xxx`
is the original method name.  For example, if the original method name
is `TakeSnapshot()`, the inferred response type is
`TakeSnapshotResponse`.
* @property {string} name The server-assigned name, which is only unique within the same service that
originally returns it. If you use the default HTTP mapping, the
`name` should have the format of `operations/some/unique/name`.
* @property {serviceuser(v1).Status} error The error result of the operation in case of failure or cancellation.
* @property {object} metadata Service-specific metadata associated with the operation.  It typically
contains progress information and common metadata such as create time.
Some services might not provide such metadata.  Any method that returns a
long-running operation should document the metadata type, if any.
*/
/**
 * @typedef Page
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).Page[]} subpages Subpages of this page. The order of subpages specified here will be
honored in the generated docset.
* @property {string} name The name of the page. It will be used as an identity of the page to
generate URI of the page, text of the link to this page in navigation,
etc. The full page name (start from the root page name to this page
concatenated with `.`) can be used as reference to the page in your
documentation. For example:
&lt;pre&gt;&lt;code&gt;pages:
- name: Tutorial
  content: &amp;#40;== include tutorial.md ==&amp;#41;
  subpages:
  - name: Java
    content: &amp;#40;== include tutorial_java.md ==&amp;#41;
&lt;/code&gt;&lt;/pre&gt;
You can reference `Java` page using Markdown reference link syntax:
`Java`.
* @property {string} content The Markdown content of the page. You can use &lt;code&gt;&amp;#40;== include {path} ==&amp;#41;&lt;/code&gt;
to include content from a Markdown file.
*/
/**
 * @typedef Status
 * @memberOf! serviceuser(v1)
 * @type object
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
* @property {object[]} details A list of messages that carry the error details.  There will be a
common set of message types for APIs to use.
*/
/**
 * @typedef AuthProvider
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} jwksUri URL of the provider&#39;s public key set to validate signature of the JWT. See
[OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
Optional if the key set document:
 - can be retrieved from
   [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html
   of the issuer.
 - can be inferred from the email domain of the issuer (e.g. a Google service account).

Example: https://www.googleapis.com/oauth2/v1/certs
* @property {string} audiences The list of JWT
[audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
that are allowed to access. A JWT containing any of these audiences will
be accepted. When this setting is absent, only JWTs with audience
&quot;https://Service_name/API_name&quot;
will be accepted. For example, if no audiences are in the setting,
LibraryService API will only accept JWTs with the following audience
&quot;https://library-example.googleapis.com/google.example.library.v1.LibraryService&quot;.

Example:

    audiences: bookstore_android.apps.googleusercontent.com,
               bookstore_web.apps.googleusercontent.com
* @property {string} id The unique identifier of the auth provider. It will be referred to by
`AuthRequirement.provider_id`.

Example: &quot;bookstore_auth&quot;.
* @property {string} issuer Identifies the principal that issued the JWT. See
https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1
Usually a URL or an email address.

Example: https://securetoken.google.com
Example: 1234567-compute@developer.gserviceaccount.com
*/
/**
 * @typedef EnumValue
 * @memberOf! serviceuser(v1)
 * @type object
 * @property {string} name Enum value name.
 * @property {serviceuser(v1).Option[]} options Protocol buffer options.
 * @property {integer} number Enum value number.
 */
/**
 * @typedef Service
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).CustomError} customError Custom error configuration.
* @property {string} title The product title associated with this service.
* @property {serviceuser(v1).Endpoint[]} endpoints Configuration for network endpoints.  If this is empty, then an endpoint
with the same name as the service is automatically generated to service all
defined APIs.
* @property {serviceuser(v1).LogDescriptor[]} logs Defines the logs used by this service.
* @property {serviceuser(v1).Api[]} apis A list of API interfaces exported by this service. Only the `name` field
of the google.protobuf.Api needs to be provided by the configuration
author, as the remaining fields will be derived from the IDL during the
normalization process. It is an error to specify an API interface here
which cannot be resolved against the associated IDL files.
* @property {serviceuser(v1).Type[]} types A list of all proto message types included in this API service.
Types referenced directly or indirectly by the `apis` are
automatically included.  Messages which are not referenced but
shall be included, such as types used by the `google.protobuf.Any` type,
should be listed here by name. Example:

    types:
    - name: google.protobuf.Int32
* @property {serviceuser(v1).SourceInfo} sourceInfo Output only. The source information for this configuration if available.
* @property {serviceuser(v1).Http} http HTTP configuration.
* @property {serviceuser(v1).Backend} backend API backend configuration.
* @property {serviceuser(v1).SystemParameters} systemParameters System parameter configuration.
* @property {serviceuser(v1).Documentation} documentation Additional API documentation.
* @property {serviceuser(v1).Logging} logging Logging configuration.
* @property {serviceuser(v1).MonitoredResourceDescriptor[]} monitoredResources Defines the monitored resources used by this service. This is required
by the Service.monitoring and Service.logging configurations.
* @property {serviceuser(v1).Enum[]} enums A list of all enum types included in this API service.  Enums
referenced directly or indirectly by the `apis` are automatically
included.  Enums which are not referenced but shall be included
should be listed here by name. Example:

    enums:
    - name: google.someapi.v1.SomeEnum
* @property {serviceuser(v1).Context} context Context configuration.
* @property {string} id A unique ID for a specific instance of this message, typically assigned
by the client for tracking purpose. If empty, the server may choose to
generate one instead.
* @property {serviceuser(v1).Usage} usage Configuration controlling usage of this service.
* @property {serviceuser(v1).MetricDescriptor[]} metrics Defines the metrics used by this service.
* @property {serviceuser(v1).Authentication} authentication Auth configuration.
* @property {serviceuser(v1).Experimental} experimental Experimental configuration.
* @property {serviceuser(v1).Control} control Configuration for the service control plane.
* @property {integer} configVersion The version of the service configuration. The config version may
influence interpretation of the configuration, for example, to
determine defaults. This is documented together with applicable
options. The current default for the config version itself is `3`.
* @property {serviceuser(v1).Monitoring} monitoring Monitoring configuration.
* @property {string} producerProjectId The id of the Google developer project that owns the service.
Members of this project can manage the service configuration,
manage consumption of the service, etc.
* @property {serviceuser(v1).Type[]} systemTypes A list of all proto message types included in this API service.
It serves similar purpose as [google.api.Service.types], except that
these types are not needed by user-defined APIs. Therefore, they will not
show up in the generated discovery doc. This field should only be used
to define system APIs in ESF.
* @property {serviceuser(v1).Visibility} visibility API visibility configuration.
* @property {serviceuser(v1).Quota} quota Quota configuration.
* @property {string} name The DNS address at which this service is available,
e.g. `calendar.googleapis.com`.
*/
/**
 * @typedef CustomHttpPattern
 * @memberOf! serviceuser(v1)
 * @type object
 * @property {string} path The path matched by this custom verb.
 * @property {string} kind The name of this custom HTTP verb.
 */
/**
 * @typedef OperationMetadata
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string[]} resourceNames The full name of the resources that this operation is directly
associated with.
* @property {serviceuser(v1).Step[]} steps Detailed status information for each step. The order is undetermined.
* @property {integer} progressPercentage Percentage of completion of this operation, ranging from 0 to 100.
* @property {string} startTime The start time of the operation.
*/
/**
 * @typedef SystemParameterRule
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} selector Selects the methods to which this rule applies. Use &#39;*&#39; to indicate all
methods in all APIs.

Refer to selector for syntax details.
* @property {serviceuser(v1).SystemParameter[]} parameters Define parameters. Multiple names may be defined for a parameter.
For a given method call, only one of them should be used. If multiple
names are used the behavior is implementation-dependent.
If none of the specified names are present the behavior is
parameter-dependent.
*/
/**
 * @typedef PublishedService
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).Service} service The service&#39;s published configuration.
* @property {string} name The resource name of the service.

A valid name would be:
- services/serviceuser.googleapis.com
*/
/**
 * @typedef HttpRule
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).CustomHttpPattern} custom Custom pattern is used for defining custom verbs.
* @property {string} patch Used for updating a resource.
* @property {string} get Used for listing and getting information about resources.
* @property {string} put Used for updating a resource.
* @property {string} delete Used for deleting a resource.
* @property {string} body The name of the request field whose value is mapped to the HTTP body, or
`*` for mapping all fields not captured by the path pattern to the HTTP
body. NOTE: the referred field must not be a repeated field and must be
present at the top-level of request message type.
* @property {serviceuser(v1).MediaDownload} mediaDownload Use this only for Scotty Requests. Do not use this for bytestream methods.
For media support, add instead [][google.bytestream.RestByteStream] as an
API to your configuration.
* @property {string} post Used for creating a resource.
* @property {serviceuser(v1).HttpRule[]} additionalBindings Additional HTTP bindings for the selector. Nested bindings must
not contain an `additional_bindings` field themselves (that is,
the nesting may only be one level deep).
* @property {string} responseBody The name of the response field whose value is mapped to the HTTP body of
response. Other response fields are ignored. This field is optional. When
not set, the response message will be used as HTTP body of response.
NOTE: the referred field must be not a repeated field and must be present
at the top-level of response message type.
* @property {serviceuser(v1).MediaUpload} mediaUpload Use this only for Scotty Requests. Do not use this for media support using
Bytestream, add instead
[][google.bytestream.RestByteStream] as an API to your
configuration for Bytestream methods.
* @property {string} selector Selects methods to which this rule applies.

Refer to selector for syntax details.
*/
/**
 * @typedef VisibilityRule
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} restriction A comma-separated list of visibility labels that apply to the `selector`.
Any of the listed labels can be used to grant the visibility.

If a rule has multiple labels, removing one of the labels but not all of
them can break clients.

Example:

    visibility:
      rules:
      - selector: google.calendar.Calendar.EnhancedSearch
        restriction: GOOGLE_INTERNAL, TRUSTED_TESTER

Removing GOOGLE_INTERNAL from this restriction will break clients that
rely on this method and only had access to it through GOOGLE_INTERNAL.
* @property {string} selector Selects methods, messages, fields, enums, etc. to which this rule applies.

Refer to selector for syntax details.
*/
/**
 * @typedef MonitoringDestination
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} monitoredResource The monitored resource type. The type must be defined in
Service.monitored_resources section.
* @property {string[]} metrics Names of the metrics to report to this monitoring destination.
Each name must be defined in Service.metrics section.
*/
/**
 * @typedef Visibility
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).VisibilityRule[]} rules A list of visibility rules that apply to individual API elements.

**NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
*/
/**
 * @typedef SystemParameters
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).SystemParameterRule[]} rules Define system parameters.

The parameters defined here will override the default parameters
implemented by the system. If this field is missing from the service
config, default system parameters will be used. Default system parameters
and names is implementation-dependent.

Example: define api key for all methods

    system_parameters
      rules:
        - selector: &quot;*&quot;
          parameters:
            - name: api_key
              url_query_parameter: api_key


Example: define 2 api key names for a specific method.

    system_parameters
      rules:
        - selector: &quot;/ListShelves&quot;
          parameters:
            - name: api_key
              http_header: Api-Key1
            - name: api_key
              http_header: Api-Key2

**NOTE:** All service configuration rules follow &quot;last one wins&quot; order.
*/
/**
 * @typedef Quota
 * @memberOf! serviceuser(v1)
 * @type object
* @property {serviceuser(v1).QuotaLimit[]} limits List of `QuotaLimit` definitions for the service.

Used by metric-based quotas only.
* @property {serviceuser(v1).MetricRule[]} metricRules List of `MetricRule` definitions, each one mapping a selected method to one
or more metrics.

Used by metric-based quotas only.
*/
/**
 * @typedef Step
 * @memberOf! serviceuser(v1)
 * @type object
 * @property {string} status The status code.
 * @property {string} description The short description of the step.
 */
/**
 * @typedef LoggingDestination
 * @memberOf! serviceuser(v1)
 * @type object
* @property {string} monitoredResource The monitored resource type. The type must be defined in the
Service.monitored_resources section.
* @property {string[]} logs Names of the logs to be sent to this destination. Each name must
be defined in the Service.logs section. If the log name is
not a domain scoped name, it will be automatically prefixed with
the service name followed by &quot;/&quot;.
*/
module.exports = Serviceuser;
