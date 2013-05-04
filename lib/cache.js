/**
 * Copyright 2013 Google Inc. All Rights Reserved.
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

var fs = require('fs');

/**
 * @const
 * @private
 * Path to the temporary directory.
 * @type {String}
 */
Cache.TMP_DIR_ = process.cwd() + '/.cache';

/**
 * @const
 * @private
 * Default encoding for cached files.
 * @type {String}
 */
Cache.ENCODING_ = 'utf-8';

/**
 * @const
 * @private
 * Default expires time in micro seconds.
 * @type {Number}
 */
Cache.EXPIRES_IN_ = 5 * 60 * 1000;

/**
 * @constructor
 * Cache constructor.
 * @param  {String} opt_opts  Optional options.
 */
function Cache(opt_opts) {
  this.opts = opt_opts || {};
  if (!fs.existsSync(Cache.TMP_DIR_)) {
    fs.mkdirSync(Cache.TMP_DIR_, '700');
  }
}

/**
 * Loads discovery data from cache
 * @param  {object} api
 * @return {object?} Returns the cached discovery data if exists
 *                   or not expired.
 */
Cache.prototype.load = function(api) {
  var path = this.getPath(api);
  // check if file exists and not expired
  if (!fs.existsSync(path)) {
    return null;
  }

  if (this.isExpired(path)) {
    // delete the expired cache file
    fs.unlinkSync(path);
    return null;
  }

  var data = fs.readFileSync(this.getPath(api), Cache.ENCODING_);
  return data && JSON.parse(data);
};

/**
 * Writes api discovery data to the cache.
 * @param  {object} api
 * @param  {object} data
 */
Cache.prototype.write = function(api, data) {
  data && fs.writeFileSync(
      this.getPath(api), JSON.stringify(data), Cache.ENCODING_);
};

/**
 * Checks whether the file at path is expired or not
 * @param  {[type]}  path The path of the file to check.
 * @return {Boolean}      Returns true or false depending on the expiration.
 */
Cache.prototype.isExpired = function(path) {
  var expiresIn = this.opts.expiresIn || Cache.EXPIRES_IN_;
  return new Date(fs.statSync(path).mtime).getTime() - expiresIn < 0;
};

/**
 * Gets the path where the api data is stored at.
 * @param  {[type]} api
 * @return {string} Path to the data file.
 */
Cache.prototype.getPath = function(api) {
  return Cache.TMP_DIR_ + '/' + api.name + api.version;
};

/**
 * Exports Cache.
 * @type {Cache}
 */
module.exports = Cache;
