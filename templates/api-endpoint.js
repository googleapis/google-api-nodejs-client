/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

{% set Name = name|capitalize %}
{% set Version = version|replace('\.', '_')|capitalize %}
{% set Namespace = [Name, Version]|join('') %}
/**
 * {{ title }}
 *
 * @classdesc {{ description }}
 * @namespace {{ name }}
 * @version  {{ version }}
 * @variation {{ version }}
 * @this {{ Name }}
 * @param {object=} options Options for {{ Name }}
 */
function {{ Name }}(options) {

  var self = this;
  this._options = options || {};

{% if methods %}
  {% set globalmethods = true %}
  {% for mname, m in methods %}
    {% include "./method-partial.js" with m %}
  {% endfor -%}
{%- endif -%}

{% if resources %}
{% set globalmethods = false %}
{% for rname, r in resources %}
{% set ResourceNamespace = [Name, rname]|join('.') %}
  this.{{ rname }} = {
    {% include "./resource-partial.js" with r %}
  };
{%- endfor -%}
{%- endif -%}
}

/**
 * Exports {{ Name }} object
 * @type {{ Name }}
 */
module.exports = {{ Name }};
