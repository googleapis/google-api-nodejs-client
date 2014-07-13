{% if methods %}
{% for mname, m in methods -%}
  {% include "./method-partial.js" with m %}
{%- endfor %}
{% elif resources %}
{% for rname, r in resources -%}
  {{ rname }}: {
    {% include "./resource-partial.js" with r %}
  }{%- if not loop.last %},{%- endif -%}
{%- endfor %}
{% endif %}
