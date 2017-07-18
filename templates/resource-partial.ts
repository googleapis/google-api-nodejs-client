{% if r.methods %}
{% for mname in methods|sort -%}
{% set m = methods[mname] %}
  {% include "./method-partial.ts" with m %}
{%- endfor -%}
{%- endif -%}{%- if r.methods && r.resources -%},{%- endif -%}

{% if r.resources %}
{%- for rname in resources|sort -%}
{%- set r = resources[rname] -%}

  {{ rname }}: {
    {%- include "./resource-partial.ts" with r -%}
  }{%- if not loop.last -%},{%- endif -%}
{%- endfor -%}
{%- endif -%}
