{% set lb = "{" %}
{% set rb = "}" %}
/**
 * {{ m.id }}
 *
 * {% if m.description %}@desc {{ m.description|oneLine|safe }}{% endif %}
 *
 * @alias {{ m.id }}
 * @memberOf! {{ name }}({{ version }})
 *
 * @param  {object{% if !m.parameterOrder && !m.request %}={% endif %}} params - Parameters for request
 {% for pname, p in m.parameters -%}
 * @param  {{ lb }}{{ p.type }}{% if ! p.required %}={% endif %}{{ rb }} params.{{ pname }} - {{ p.description|oneLine|safe }}
 {% endfor -%}
{% if m.supportsMediaUpload -%}
 * @param  {object}        params.resource - Media resource metadata
 * @param  {string|object} params.media - Media body data to upload
{% elif m.request -%}
 * @param  {object} params.resource - Request body data
{% endif -%}
{% if m.parameterOrder.length -%}
 * @throws {Error} If a required parameter is missing.
{% endif -%}
 * @param  {callback=} callback - The callback that handles the response.
 * @return {object} Request object
 */
{{ mname }}: function(params, callback) {
  var params = extend({}, params); // shallow copy
  {% if m.parameterOrder.length -%}
  checkRequired(params, ['{{ m.parameterOrder|join("', '")|safe }}']);
  {%- endif -%}
  var isMedia = {% if m.supportsMediaUpload %}true{% else %}false{% endif %};
  var options = {
    url: {{ m.mediaUpload.protocols.simple.path|default(basePath + m.path)|buildurl }},
    method: '{{ m.httpMethod }}'
  };

  {% for pname, p in m.parameters -%}
  {% if p.location === 'path' %}delete params.{{pname}};{% endif %}
  {% endfor %}

  return createAPIRequest(self, params, options, isMedia, callback);
}{%- if not loop.last %},
{% endif %}
