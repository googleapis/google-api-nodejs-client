{% set lb = "{" %}
{% set rb = "}" %}
{%- set pathParams = m.parameters|getPathParams -%}
/**
 * {{ m.id }}
 *
 * {% if m.description %}@desc {{ m.description|oneLine|cleanComments|safe }}{% endif %}
 *
{% if m.fragment -%}
 * @example
 {{ m.fragment|safe }}
 *
{% endif -%}
 * @alias {{ m.id }}
 * @memberOf! {{ name }}({{ version }})
 *
 * @param {object{% if !m.parameterOrder && !m.request %}={% endif %}} params Parameters for request
 {% for pname, p in m.parameters -%}
 * @param {{ lb }}{{ p.type }}{% if ! p.required %}={% endif %}{{ rb }} params.{{ pname|getSafeParamName }} {{ p.description|oneLine|cleanComments|safe }}
 {% endfor -%}
{% if m.supportsMediaUpload -%}
{% if m.request -%}
 * @param  {object} params.resource Media resource metadata
{% endif -%}
 * @param {object} params.media Media object
 * @param {string} params.media.mimeType Media mime-type
 * @param {string|object} params.media.body Media body contents
{% elif m.request -%}
 * @param {object} params.resource Request body data
{% endif -%}
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
{% if globalmethods %}this.{{ mname }} ={% else %}{{ mname }}:{% endif %} function (params, callback) {
  var parameters = {
    options: {
      url: {{ (rootUrl + servicePath + m.path)|buildurl }},
      method: '{{ m.httpMethod }}'
    },
    params: params,
    {%- if m.mediaUpload.protocols.simple.path -%}mediaUrl: {{ [rootUrl, m.mediaUpload.protocols.simple.path]|join('')|buildurl }},{%- endif -%}
    requiredParams: [{%- if m.parameterOrder.length -%}'{{ m.parameterOrder|join("', '")|safe }}'{%- endif -%}],
    pathParams: [{%- if pathParams.length -%}'{{ pathParams|join("', '")|safe }}'{%- endif -%}],
    context: self
  };

  return createAPIRequest(parameters, callback);
}{%- if globalmethods -%};{%- elif not loop.last -%},
{%- endif -%}
