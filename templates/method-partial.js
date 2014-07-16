{% set lb = "{" %}
{% set rb = "}" %}
/**
 * {{ m.id }}
 *
 * {{ m.description|safe }}
 *
 {% for pname, p in m.parameters -%}
 * @param  {{ lb }}{{ p.type }}{% if ! p.required %}={% endif %}{{ rb }} params.{{ pname }} {{ p.description|safe }}
 {% endfor -%}
{% if m.supportsMediaUpload -%}
 * @param  {object}        params.resource     Media resource metadata
 * @param  {string|object} params.media        Media body data to upload
{% else -%}
 * @param  {object} params.resource Request body data
{% endif -%}
{% if m.parameterOrder.length -%}
 * @throws {Error}  If a required parameter is missing.
{% endif -%}
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
