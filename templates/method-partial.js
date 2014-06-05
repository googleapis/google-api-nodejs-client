{% set lb = "{" %}
{% set rb = "}" %}
/**
 * {{ m.id }}
 *
 * {{ m.description }}
 *
 {% for pname, p in m.parameters -%}
 * @param {{ lb }}{{ p.type }}{{ rb }} query.{{ pname }} {{ p.description }}
 {% endfor -%}
 */
{{ mname }}: function(params, callback) {
  params = params || {};
  var query = params.query || {};
  var body = params.body || true;
  var media = params.media || {}; // XXX TODO: Implement media uploads
  var headers = params.headers || {}; // custom headers if we need
  var url = {{ m.mediaUpload.protocols.simple.path|default(basePath + m.path)|buildurl }};

  /**
   * Very unmodular code ahead! We can separate a lot of this into the
   * Request object or equivalent when we decide on a good implementation.
   * And when it all works as expected and iron out the bugs.
   */

  if(self.apiKey) {
    query.key = self.apiKey; // set key as query param if present
  }

  {% if m.supportsMediaUpload %}
  query.uploadType = 'multipart';
  var multipart = [{
    'Content-Type': 'application/json',
    body: JSON.stringify(media.metadata || {})
  }, {
    'Content-Type': media.mimeType || 'application/octet-stream',
    body: media.data || ''
  }];{% endif %}

  var options = {
    url: url, // from built url above
    qs: query,
    method: '{{ m.httpMethod }}',
    {%- if m.supportsMediaUpload -%}
    multipart: multipart,
    {%- else -%}
    json: body,
    {%- endif -%}
    headers: headers
  };

  if(self.authClient && self.authClient.credentials) {
    self.authClient.request(options, callback);
  }
  else {
    return transporter.request(options, callback); // returns the request obj too
  }
}{%- if not loop.last %},
{% endif %}
