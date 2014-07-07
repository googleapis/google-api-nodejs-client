{% set Name = name|capitalize -%}

/**
 * {{ title }}
 *
 * {{ description }}
 *
 * @author {{ ownerName }}
 * @this {{ Name }}
 */

function {{ Name }}(options) {

  var self = this;
  this.options = options;

{% for rname, r in resources %}
  this.{{ rname }} = {
    {% include "./resource-partial.js" with r %}
  };
{% endfor -%}
}

/**
 * Export {{ Name }} object
 * @type {{ Name }}
 */
module.exports = {{ Name }};
