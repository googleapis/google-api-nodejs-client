{% set lb = "{" %}
{% set rb = "}" %}
{%- set pathParams = m.parameters|getPathParams -%}
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
 * @param  {callback} callback - The callback that handles the response.
 * @return {object} Request object
 */
{% if globalmethods %}this.{{ mname }} ={% else %}{{ mname }}:{% endif %} function(params, callback) {
  var parameters = {
    options: {
      url: {{ m.mediaUpload.protocols.simple.path|default(basePath + m.path)|buildurl }},
      method: '{{ m.httpMethod }}'
    },
    params: params,
    {%- if m.parameterOrder.length -%}requiredParams: ['{{ m.parameterOrder|join("', '")|safe }}'],{%- endif -%}
    {%- if pathParams.length -%}pathParams: ['{{ pathParams|join("', '")|safe }}'],{%- endif -%}
    {%- if m.supportsMediaUpload -%}isMedia: true,{%- endif -%}
    context: self
  };

  return createAPIRequest(parameters, callback);
}{%- if globalmethods -%};{%- elif not loop.last -%},
{%- endif -%}
