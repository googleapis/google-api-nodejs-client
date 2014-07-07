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
  if(typeof(params) === 'function') {
    callback = params;
    params = {};
  }
  else {
    params = params || {};
  }

  var options = {
    url: {{ m.mediaUpload.protocols.simple.path|default(basePath + m.path)|buildurl }},
    method: '{{ m.httpMethod }}'
  };

  if(self.apiKey) {
    params.key = self.apiKey; // set key as param if present
  }

  {% if m.supportsMediaUpload %}
  var media = params.media;
  delete params.media;

  params.uploadType = 'multipart';

  if(media) {
    var multipart = [{
      'Content-Type': 'application/json',
      body: JSON.stringify(media.metadata || {})
    }, {
      'Content-Type': media.mimeType || 'application/octet-stream',
      body: media.data || ''
    }];

    options.multipart = multipart;
  }
  {% else %}
  options.json = params.resource || true;
  delete params.resource;
  {% endif %}

  options.qs = params;

  if(self.authClient && self.authClient.credentials) {
    return self.authClient.request(options, callback);
  }
  else {
    return self.google.transporter.request(options, callback); // returns the request
  }
}{%- if not loop.last %},
{% endif %}
