{% set lb = "{" %}
{% set rb = "}" %}
/**
 * {{ m.id }}
 *
 * {{ m.description }}
 *
 {% for pname, p in m.parameters -%}
 * @param {{ lb }}{{ p.type }}{% if ! p.required %}={% endif %}{{ rb }} params.{{ pname }} {{ p.description|safe }}
 {% endfor -%}
 * @param {object} params.resource Body of request
{% if m.supportsMediaUpload -%}
 * @param {object} params.media Media object
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
  var resource = params.resource || true;
  var media = params.media || {};
  var url = {{ m.mediaUpload.protocols.simple.path|default(basePath + m.path)|buildurl }};

  if(self.apiKey) {
    params.key = self.apiKey; // set key as param if present
  }

  {% if m.supportsMediaUpload %}
  params.uploadType = 'multipart';
  var multipart = [{
    'Content-Type': 'application/json',
    body: JSON.stringify(media.metadata || {})
  }, {
    'Content-Type': media.mimeType || 'application/octet-stream',
    body: media.data || ''
  }];{% endif %}

  delete params.resource;
  delete params.media;

  var options = {
    url: url, // from built url above
    qs: params,
    method: '{{ m.httpMethod }}',
    {%- if m.supportsMediaUpload -%}
    multipart: multipart
    {%- else -%}
    json: resource
    {%- endif -%}
  };

  if(self.authClient && self.authClient.credentials) {
    self.authClient.request(options, callback);
  }
  else {
    return transporter.request(options, callback); // returns the request obj too
  }
}{%- if not loop.last %},
{% endif %}
