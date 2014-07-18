{% if methods %}
{% for mname, m in methods -%}
  {% include "./method-partial.js" with m %}
{%- endfor %}
{% elif resources %}
{% for rname, r in resources -%}
  /**
   * @public
   * @namespace {{ Name }}.{{ rname }}
   */
  {{ rname }}: {
    {% include "./resource-partial.js" with r %}
  }{%- if not loop.last %},{%- endif -%}
{%- endfor %}
{% endif %}
