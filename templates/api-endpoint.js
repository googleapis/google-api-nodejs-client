/**
 * <%= title %>
 *
 * <%= description %>
 *
 * @author <%= ownerName %>
 */

function {{ name|capitalize }}() {}

Object.defineProperties({{ name|capitalize }}.prototype, {
{% for r in resources %}
  {{ loop.key }}: {
    value: {},
    enumerable: true
  }{% if not loop.last -%},{% endif -%}
{% endfor %}
});

{% for rname, r in resources %}
Object.defineProperties({{ name|capitalize }}.prototype.{{ rname }}, {
{% for mname, m in r.methods %}
  {{ mname }}: {
    value: function() {
      // TODO
    },
    enumerable: true
  }{% if not loop.last -%},{% endif -%}
{% endfor %}
});
{% endfor %}

module.exports = {{ name|capitalize }};
