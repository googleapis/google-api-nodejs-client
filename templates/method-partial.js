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
{{ mname }}: function(query, body, callback) {
  query = query || {};
  var url = {{ ("'" + baseUrl + m.path + "'")|buildurl }};
  if(self.apiKey) query.key = self.apiKey;
  var options = {
    url: url, // from built url above
    qs: query,
    method: '{{ m.httpMethod }}',
    json: body || true // only for POST PUT PATCH requests. Body is JSON.
  };
  transporter.request(options, callback);
}{%- if not loop.last %},
{% endif %}
