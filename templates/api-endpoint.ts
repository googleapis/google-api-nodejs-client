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

import createAPIRequest from '../../lib/apirequest';

{% set Name = name|capitalize %}
{% set Version = version|replace('\.', '_')|capitalize %}
{% set Namespace = [Name, Version]|join('') %}

/**
 * {{ title }}
 *
 * {{ description }}
 *
 * @example
 * const google = require('googleapis');
 * const {{ name }} = google.{{ name }}('{{ version }}');
 *
 * @namespace {{ name }}
 * @type {Function}
 * @version {{ version }}
 * @variation {{ version }}
 * @param {object=} options Options for {{ Name }}
 */
function {{ Name }} (options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

{% if methods %}
  {% set globalmethods = true %}
  {% for mname in methods|sort %}
  {% set m = methods[mname] %}
    {% include "./method-partial.ts" with m %}
  {% endfor -%}
{%- endif -%}

{% if resources %}
{% set globalmethods = false %}
{% for rname in resources|sort %}
{% set r = resources[rname] %}
{% set ResourceNamespace = [Name, rname]|join('.') %}
  self.{{ rname }} = {
    {% include "./resource-partial.ts" with r %}
  };
{%- endfor -%}
{%- endif -%}
}

{% set lb = "{" %}
{% set rb = "}" %}

{% for schemaName in schemas|sort %}
{% set schema = schemas[schemaName] %}
/**
 * @typedef {{ schema.id }}
 * @memberOf! {{ name }}({{ version }})
 * @type {{ schema.type }}
{% if schema.properties -%}
{%- for pname in schema.properties|sort -%}
{%- set p = schema.properties[pname] -%}
{%- if p.$ref -%}
 * @property {{ lb }}{{ name }}({{ version }}).{{ p.$ref }}{{ rb }} {{ pname }} {{ p.description | cleanPaths }}
{%- elif p.items and p.items.type -%}
 * @property {{ lb }}{{ p.items.type }}[]{{ rb }} {{ pname }} {{ p.description | cleanPaths }}
{%- elif p.items and p.items.$ref -%}
 * @property {{ lb }}{{ name }}({{ version }}).{{ p.items.$ref }}[]{{ rb }} {{ pname }} {{ p.description | cleanPaths }}
{%- else -%}
 * @property {{ lb }}{{ p.type }}{{ rb }} {{ pname }} {{ p.description | cleanPaths }}
{%- endif -%}
{%- endfor -%}
{%- endif -%}
 */

{%- endfor -%}

export = {{ Name }};
