{% set lb = "{" %}
{% set rb = "}" %}
/**
 * {{ m.id }}
 *
 * {{ m.description }}
 *
 {%- for pname, p in m.parameters -%}
 * @param {{ lb }}{{ p.type }}{{ rb }} query.{{ pname }} {{ p.description }}
 {%- endfor -%}
 */
{{ mname }}: function(query, body, callback) {
  /* STUB */
}{%- if not loop.last %},
{% endif %}
