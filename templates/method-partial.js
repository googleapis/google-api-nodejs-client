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
  var url = {{ ('"' + baseUrl + m.path + '"')|buildurl }};
  /* STUB */
}{%- if not loop.last %},
{% endif %}
