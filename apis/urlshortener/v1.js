/**
 * URL Shortener API
 *
 * Lets you create, inspect, and manage goo.gl short URLs
 *
 * @author Google
 * @this Urlshortener
 */

function Urlshortener(options) {

  var self = this;
  this.options = options;

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

      var options = {
        url: 'https://www.googleapis.com/urlshortener/v1/url',
        method: 'GET'
      };

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      options.json = params.resource || true;
      delete params.resource;

      options.qs = params;

      if (self.authClient && self.authClient.credentials) {
        return self.authClient.request(options, callback);
      } else {
        return self.google.transporter.request(options, callback); // returns the request
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

      var options = {
        url: 'https://www.googleapis.com/urlshortener/v1/url',
        method: 'POST'
      };

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      options.json = params.resource || true;
      delete params.resource;

      options.qs = params;

      if (self.authClient && self.authClient.credentials) {
        return self.authClient.request(options, callback);
      } else {
        return self.google.transporter.request(options, callback); // returns the request
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

      var options = {
        url: 'https://www.googleapis.com/urlshortener/v1/url/history',
        method: 'GET'
      };

      if (self.apiKey) {
        params.key = self.apiKey; // set key as param if present
      }

      options.json = params.resource || true;
      delete params.resource;

      options.qs = params;

      if (self.authClient && self.authClient.credentials) {
        return self.authClient.request(options, callback);
      } else {
        return self.google.transporter.request(options, callback); // returns the request
      }
    }

  };
}

/**
 * Export Urlshortener object
 * @type Urlshortener
 */
module.exports = Urlshortener;