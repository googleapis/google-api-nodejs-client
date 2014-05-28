{% set Name = name|capitalize -%}
/**
 * {{ title }}
 *
 * {{ description }}
 *
 * @author {{ ownerName }}
 * @this {{ Name }}
 */

function {{ Name }}() {
{% for rname, r in resources %}
  this.{{ rname }} = {
    {% for mname, m in r.methods -%}
    {{ mname }}: function() {
      // STUB
    }{%- if not loop.last %},
    {%- endif -%}
    {%- endfor %}
  };
{% endfor -%}
}

/**
 * Export {{ Name }} object
 * @type {{ Name }}
 */
module.exports = {{ Name }};
