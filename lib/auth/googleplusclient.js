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

var querystring = require('querystring'),
    OAuth2Client = require('./oauth2client.js'),
    util = require('util');

function GooglePlusSignInClient(clientId, clientSecret, redirectUri, opt_opts) {
  GooglePlusSignInClient.super_.call(
    this, clientId, clientSecret, redirectUri, opt_opts);
}

/**
 * Inherit from OAuth2Client.
 */
util.inherits(GooglePlusSignInClient, OAuth2Client);

/**
 * Required scopes for Google+ Sign-In auth page.
 */
GooglePlusSignInClient.REQUIRED_SCOPES = [
  'https://www.googleapis.com/auth/plus.login'
];

/**
 * Default request visible actions for Google+ Sign-In auth page.
 */
GooglePlusSignInClient.DEFAULT_VISIBLE_ACTIONS = [
  'http://schemas.google.com/CommentActivity',
  'http://schemas.google.com/ReviewActivity'
];

/**
 * Generates URL for consent page landing.
 * @param {object=} opt_opts Optional options.
 * @return {string} URL to consent page.
 */
GooglePlusSignInClient.prototype.generateAuthUrl = function(opt_opts) {

  var opts = opt_opts || {};
  opts.response_type = opts.response_type || 'code';
  opts.client_id = this.clientId_;
  opts.redirect_uri = this.redirectUri_;

  // add required scopes
  var scopes = GooglePlusSignInClient.REQUIRED_SCOPES;
  scopes.push(opts.scope);
  opts.scope = scopes.join(' ');

  // set default visible actions
  var actions = GooglePlusSignInClient.DEFAULT_VISIBLE_ACTIONS;
  actions.push(opts.request_visible_actions);
  opts.request_visible_actions = actions.join(' ');

  var rootUrl = this.opts.authBaseUrl ||
    OAuth2Client.GOOGLE_OAUTH2_AUTH_BASE_URL_;

  return rootUrl + '?' + querystring.stringify(opts);
};

/**
 * Export GooglePlusSignInClient.
 */
module.exports = GooglePlusSignInClient;
