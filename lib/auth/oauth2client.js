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

'use strict';

var querystring = require('querystring');
var AuthClient = require('./authclient.js');
var util = require('util');
var PemVerifier = require('./../pemverifier.js');
var LoginTicket = require('./loginticket.js');

var certificateCache = null;
var certificateExpiry = null;

function OAuth2Client(clientId, clientSecret, redirectUri, opt_opts) {
  OAuth2Client.super_.call(this);

  this.clientId_ = clientId;
  this.clientSecret_ = clientSecret;
  this.redirectUri_ = redirectUri;
  this.opts = opt_opts || {};
  this.credentials = null;
}

/**
 * Inherit from AuthClient.
 */
util.inherits(OAuth2Client, AuthClient);

/**
 * The base URL for auth endpoints.
 * @const
 * @private
 */
OAuth2Client.GOOGLE_OAUTH2_AUTH_BASE_URL_ =
  'https://accounts.google.com/o/oauth2/auth';

/**
 * The base endpoint for token retrieval.
 * @const
 * @private
 */
OAuth2Client.GOOGLE_OAUTH2_TOKEN_URL_ =
  'https://accounts.google.com/o/oauth2/token';

/**
 * The base endpoint to revoke tokens.
 * @const
 * @private
 */
OAuth2Client.GOOGLE_OAUTH2_REVOKE_URL_ =
  'https://accounts.google.com/o/oauth2/revoke';

/**
 * Google Sign on certificates.
 * @const
 * @private
 */
OAuth2Client.GOOGLE_OAUTH2_FEDERATED_SIGNON_CERTS_URL_ =
  'https://www.googleapis.com/oauth2/v1/certs';

/**
 * Clock skew - five minutes in seconds
 * @const
 * @private
 */
OAuth2Client.CLOCK_SKEW_SECS_ = 300;

/**
 * Max Token Lifetime is one day in seconds
 * @const
 * @private
 */
OAuth2Client.MAX_TOKEN_LIFETIME_SECS_ = 86400;

/**
 * Max Token Lifetime is one day in seconds
 * @const
 * @private
 */
OAuth2Client.ISSUER_ = 'accounts.google.com';

/**
 * Generates URL for consent page landing.
 * @param {object=} opt_opts Options.
 * @return {string} URL to consent page.
 */
OAuth2Client.prototype.generateAuthUrl = function(opt_opts) {
  var opts = opt_opts || {};
  opts.response_type = opts.response_type || 'code';
  opts.client_id = opts.client_id || this.clientId_;
  opts.redirect_uri = opts.redirect_uri || this.redirectUri_;

  // Allow scopes to be passed either as array or a string
  if (opts.scope instanceof Array) {
    opts.scope = opts.scope.join(' ');
  }

  var rootUrl = this.opts.authBaseUrl ||
    OAuth2Client.GOOGLE_OAUTH2_AUTH_BASE_URL_;

  return rootUrl + '?' + querystring.stringify(opts);
};

/**
 * Gets the access token for given code.
 * @param {string} code The authorization code.
 * @param {function=} opt_callback Optional callback fn.
 */
OAuth2Client.prototype.getToken = function(code, opt_callback) {
  var uri = this.opts.tokenUrl || OAuth2Client.GOOGLE_OAUTH2_TOKEN_URL_;
  var values = {
    code: code,
    client_id: this.clientId_,
    client_secret: this.clientSecret_,
    redirect_uri: this.redirectUri_,
    grant_type: 'authorization_code'
  };

  this.transporter.request({
    method: 'POST',
    uri: uri,
    form: values,
    json: true
  }, opt_callback);
};

/**
 * Refreshes the access token.
 * @param {string} refresh_token Existing refresh token.
 * @param {function=} opt_callback Optional callback.
 * @private
 */
OAuth2Client.prototype.refreshToken_ = function(refresh_token, opt_callback) {
  var uri = this.opts.tokenUrl || OAuth2Client.GOOGLE_OAUTH2_TOKEN_URL_;
  var values = {
    refresh_token: refresh_token,
    client_id: this.clientId_,
    client_secret: this.clientSecret_,
    grant_type: 'refresh_token'
  };

  // request for new token
  this.transporter.request({
    method: 'POST',
    uri: uri,
    form: values,
    json: true
  }, opt_callback);
};

/**
 * Retrieves access token using refresh token
 * @param {function=} callback callback
 */
OAuth2Client.prototype.refreshAccessToken = function(callback) {
  var that = this;

  if (! this.credentials.refresh_token) {
    throw new Error('No refresh token is set');
  }

  this.refreshToken_(this.credentials.refresh_token, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      var tokens = result;
      tokens.refresh_token = that.credentials.refresh_token;
      that.credentials = tokens;
      callback(null, that.credentials);
    }
  });
};

/**
 * Revokes the access given to token.
 * @param {string} token The existing token to be revoked.
 * @param {function=} opt_callback Optional callback fn.
 */
OAuth2Client.prototype.revokeToken = function(token, opt_callback) {
  this.transporter.request({
    uri: OAuth2Client.GOOGLE_OAUTH2_REVOKE_URL_ +
      '?' + querystring.stringify({ token: token }),
    json: true
  }, opt_callback);
};

/**
 * Provides a request implementation with OAuth 2.0 flow.
 * If credentials have a refresh_token, in cases of HTTP
 * 401 and 403 responses, it automatically asks for a new
 * access token and replays the unsuccessful request.
 * @param {object} opts Request options.
 * @param {function=} opt_callback Optional callback.
 * @param {boolean=} opt_dontForceRefresh If set, don't ask for a new token
 *   with refresh_token.
 * @return {Request} Request object
 */
OAuth2Client.prototype.request = function(opts, opt_callback, opt_dontForceRefresh) {

  var that = this;
  var credentials = this.credentials;

  if (!credentials.access_token && !credentials.refresh_token) {
    throw new Error('No access or refresh token is set.');
  }

  credentials.token_type = credentials.token_type || 'Bearer';
  opts.headers = opts.headers || {};
  opts.headers['Authorization'] = credentials.token_type + ' ' + credentials.access_token;

  return this.transporter.request(opts, function(err, body, res) {
    // TODO: Check if it's not userRateLimitExceeded
    var hasAuthError = res && (res.statusCode === 401 || res.statusCode === 403);
    // if there is an auth error, refresh the token
    // and make the request again
    if (!opt_dontForceRefresh && hasAuthError && credentials.refresh_token) {
      // refresh access token and re-request
      that.refreshAccessToken(function(err, result) {
        if (err || (result && !result.access_token)) {
          opt_callback && opt_callback(err, result, res);
        } else {
          var tokens = result;
          tokens.refresh_token = credentials.refresh_token;
          that.credentials = tokens;
          that.request(opts, opt_callback, true);
        }
      });
    } else {
      opt_callback && opt_callback(err, body, res);
    }
  });
};

/**
 * Verify id token is token by checking the certs and audience
 * @param {string} idToken ID Token.
 * @param {string} audience The audience to verify against the ID Token
 * @param {function=} callback Callback supplying GoogleLogin if successful
 */
OAuth2Client.prototype.verifyIdToken = function(idToken, audience, callback) {
  if (!idToken || !callback) {
    throw new Error('The verifyIdToken method requires both ' +
        'an ID Token and a callback method');
  }

  this.getFederatedSignonCerts(function(err, certs) {
    if (err) {
      callback(err, null);
    }
    var login = this.verifySignedJwtWithCerts(idToken, certs, audience,
        OAuth2Client.ISSUER_);
    if (!login) {
      callback('Unable to verify the ID Token', null);
    }
    callback(null, login);
  }.bind(this));
};

/**
 * Gets federated sign-on certificates to use for verifying identity tokens.
 * Returns certs as array structure, where keys are key ids, and values
 * are PEM encoded certificates.
 * @param {function=} callback Callback supplying the certificates
 */
OAuth2Client.prototype.getFederatedSignonCerts = function(callback) {
  var nowTime = (new Date()).getTime();
  if (certificateExpiry && (nowTime < certificateExpiry.getTime())) {
    callback(null, certificateCache);
    return;
  }

  var req = this.transporter.request({
    method: 'GET',
    uri: OAuth2Client.GOOGLE_OAUTH2_FEDERATED_SIGNON_CERTS_URL_,
    json: true
  }, function(err, body, res) {
    if (err) {
      callback('Failed to retrieve verification certificates: ' + err, null);
      return;
    }

    var cacheControl = res.headers['cache-control'];
    var cacheAge = -1;
    if (cacheControl) {
      var pattern = new RegExp('max-age=([0-9]*)');
      var regexResult = pattern.exec(cacheControl);
      if (regexResult.length === 2) {
        // Cache results with max-age (in seconds)
        cacheAge = regexResult[1] * 1000; // milliseconds
      }
    }

    var now = new Date();
    certificateExpiry = cacheAge === -1 ? null : new Date(now.getTime() + cacheAge);
    certificateCache = body;
    callback(null, body);
  });
};

/**
 * Verify the id token is signed with the correct certificate
 * and is from the correct audience.
 * @param {string} jwt The jwt to verify (The ID Token in this case).
 * @param {array} certs The array of certs to test the jwt against.
 * @param {string} requiredAudience The audience to test the jwt against.
 * @param {string} issuer The issuer of the jwt (Optional).
 * @param {string} maxExpiry The max expiry the certificate can be (Optional).
 * @return {LoginTicket} Returns a LoginTicket on verification.
 */
OAuth2Client.prototype.verifySignedJwtWithCerts =
  function(jwt, certs, requiredAudience, issuer, maxExpiry) {

  if (!maxExpiry) {
    maxExpiry = OAuth2Client.MAX_TOKEN_LIFETIME_SECS_;
  }

  var segments = jwt.split('.');
  if (segments.length !== 3) {
    throw new Error('Wrong number of segments in token: ' + jwt);
  }
  var signed = segments[0] + '.' + segments[1];

  var signature = segments[2];

  var envelope, payload;
  try {
    envelope = JSON.parse(this.decodeBase64(segments[0]));
  } catch (err) { }

  if (!envelope) {
    throw new Error('Can\'t parse token envelope: ' + segments[0]);
  }

  try {
    payload = JSON.parse(this.decodeBase64(segments[1]));
  } catch (err) { }
  if (!payload) {
    throw new Error('Can\'t parse token payload: ' + segments[1]);
  }

  var pem = certs[envelope.kid];
  var pemVerifier = new PemVerifier();
  var verified = pemVerifier.verify(pem, signed, signature, 'base64');

  if (!verified) {
    throw new Error('Invalid token signature: ' + jwt);
  }

  if (!payload.iat) {
    throw new Error('No issue time in token: ' + JSON.stringify(payload));
  }

  if (!payload.exp) {
    throw new Error('No expiration time in token: ' + JSON.stringify(payload));
  }

  var iat = parseInt(payload.iat, 10);
  var exp = parseInt(payload.exp, 10);
  var now = new Date().getTime() / 1000;

  if (exp >= now + maxExpiry) {
    throw new Error('Expiration time too far in future: ' +
      JSON.stringify(payload));
  }

  var earliest = iat - OAuth2Client.CLOCK_SKEW_SECS_;
  var latest = exp + OAuth2Client.CLOCK_SKEW_SECS_;

  if (now < earliest) {
    throw new Error('Token used too early, ' + now + ' < ' + earliest + ': ' +
      JSON.stringify(payload));
  }

  if (now > latest) {
    throw new Error('Token used too late, ' + now + ' > ' + latest + ': ' +
      JSON.stringify(payload));
  }

  if (issuer && issuer !== payload.iss) {
    throw new Error('Invalid issuer, ' + issuer + ' != ' + payload.iss);
  }

  // Check the audience matches if we have one
  if (typeof requiredAudience !== 'undefined' && requiredAudience !== null) {
    var aud = payload.aud;
    if (aud !== requiredAudience) {
      throw new Error('Wrong recipient, payload audience != requiredAudience');
    }
  }

  return new LoginTicket(envelope, payload);
};

/**
 * This is a utils method to decode a base64 string
 * @param {string} b64String The string to base64 decode
 * @return {string} The decoded string
 */
OAuth2Client.prototype.decodeBase64 = function(b64String) {
  var buffer = new Buffer(b64String, 'base64');
  return buffer.toString('utf-8');
};

/**
 * Export OAuth2Client.
 */
module.exports = OAuth2Client;
