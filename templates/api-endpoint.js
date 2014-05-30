var DefaultTransporter = require('../../lib/transporters.js');
var transporter = new DefaultTransporter();
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

  var self = this;

  this.auth = function(authObject) {

    if (!authObject || typeof authObject !== 'object') {
      return self;
    }
    else {
      {% set newObj = "new" + Name -%}
      var {{ newObj }} = new {{ Name }}();
      if (authObject.authClient) {
          {{ newObj }}.authClient = authObject.authClient;
      }
      if (authObject.apiKey) {
          {{ newObj }}.apiKey = authObject.apiKey;
      }
      return Object.freeze({{ newObj }});
    }
  };

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
