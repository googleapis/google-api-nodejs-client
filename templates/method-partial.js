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
  var body = params.body || {};
  var media = params.media || {}; // XXX TODO: Implement media uploads
  var headers = params.headers || {}; // custom headers if we need
  var url = {{ m.mediaUpload.protocols.simple.path|default(basePath + m.path)|buildurl }};
  var method = '{{ m.httpMethod }}';

  /**
   * Very unmodular code ahead! We can separate a lot of this into the
   * Request object or equivalent when we decide on a good implementation.
   */

  if(self.apiKey) query.key = self.apiKey; // set key as query param if present
  if(self.authClient && self.authClient.credentials) {
    headers['Authorization'] = 'Bearer ' + self.authClient.credentials.access_token;
  }

  if(params.media) query.uploadType = 'media';

  /**
   * TODO: Implement media upload stuff here...
   */

  var options = {
    url: url, // from built url above
    qs: query,
    method: method,
    headers: headers,
    json: body || true // only for POST PUT PATCH requests. Body is JSON.
  };

  return transporter.request(options, callback); // returns the request obj too
}{%- if not loop.last %},
{% endif %}
