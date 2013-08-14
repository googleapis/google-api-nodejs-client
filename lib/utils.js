/**
 * Copyright 2012 Google Inc. All Rights Reserved.
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

module.exports = {
  /**
   * Copy key/values from source object `b` into destination object `a`.
   *
   * @param {object} a the destination object.
   * @param {object} b the source object.
   *
   * @return {object} the destination object.
   */
  extend: function(a, b) {
    Object.keys(b).forEach(function(k) {a[k] = b[k];});
    return a;
  }
};
