var DefaultTransporter = require('../../lib/transporters.js');
var transporter = new DefaultTransporter();
/**
 * URL Shortener API
 *
 * Lets you create, inspect, and manage goo.gl short URLs
 *
 * @author Google
 * @this Urlshortener
 */

function Urlshortener() {

  var self = this;

  this.auth = function(authObject) {

    if (!authObject || typeof authObject !== 'object') {
      return self;
    } else {
      var newUrlshortener = new Urlshortener();
      if (authObject.authClient) {
        newUrlshortener.authClient = authObject.authClient;
      }
      if (authObject.apiKey) {
        newUrlshortener.apiKey = authObject.apiKey;
      }
      return Object.freeze(newUrlshortener);
    }
  };

  this.url = {

    /**
     * urlshortener.url.get
     *
     * Expands a short URL or gets creation time and analytics.
     *
     * @param {string=} params.projection Additional information to return.
     * @param {string} params.shortUrl The short URL, including the protocol.
     * @param {object} params.resource Body of request
     */
    get: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/urlshortener/v1/url';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * urlshortener.url.insert
     *
     * Creates a new short URL.
     *
     * @param {object} params.resource Body of request
     */
    insert: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/urlshortener/v1/url';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'POST',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    },

    /**
     * urlshortener.url.list
     *
     * Retrieves a list of URLs shortened by a user.
     *
     * @param {string=} params.projection Additional information to return.
     * @param {string=} params.start-token Token for requesting successive pages of results.
     * @param {object} params.resource Body of request
     */
    list: function(params, callback) {
      if (typeof(params) === 'function') {
        callback = params;
        params = {};
      } else {
        params = params || {};
      }
      var resource = params.resource || true;
      var media = params.media || {};
      var url = 'https://www.googleapis.com/urlshortener/v1/url/history';

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      delete params.resource;
      delete params.media;

      var options = {
        url: url, // from built url above
        qs: params,
        method: 'GET',
        json: resource
      };

      if (self.authClient && self.authClient.credentials) {
        self.authClient.request(options, callback);
      } else {
        return transporter.request(options, callback); // returns the request obj too
      }
    }

  };
}

/**
 * Export Urlshortener object
 * @type Urlshortener
 */
module.exports = Urlshortener;