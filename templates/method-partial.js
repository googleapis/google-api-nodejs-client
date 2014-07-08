{% set lb = "{" %}
{% set rb = "}" %}
/**
 * {{ m.id }}
 *
 * {{ m.description|safe }}
 *
 {% for pname, p in m.parameters -%}
 * @param {{ lb }}{{ p.type }}{% if ! p.required %}={% endif %}{{ rb }} params.{{ pname }} {{ p.description|safe }}
 {% endfor -%}
{% if m.supportsMediaUpload -%}
 * @param {object} params.media Media object to upload
{% else -%}
 * @param {object} params.resource Body of request
{% endif -%}
 */
{{ mname }}: function(params, callback) {
  var options = {
    url: {{ m.mediaUpload.protocols.simple.path|default(basePath + m.path)|buildurl }},
    method: '{{ m.httpMethod }}'
  };

  var isMedia = {% if m.supportsMediaUpload %}true{% else %}false{% endif %};

  return createAPIRequest(self, params, options, isMedia, callback);
}{%- if not loop.last %},
{% endif %}
