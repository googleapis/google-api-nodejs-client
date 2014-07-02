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
     * @param {string} params.projection Additional information to return.
     * @param {string} params.shortUrl The short URL, including the protocol.
     * @param {Object} params.resource Body of request
     */
    get: function(params, callback) {
      params = params || {};
      var resource = params.resource || true;
      var media = params.media || {}; // XXX TODO: Implement media uploads
      var headers = params.headers || {}; // custom headers if we need
      var url = 'https://www.googleapis.com/urlshortener/v1/url';

      /**
       * Very unmodular code ahead! We can separate a lot of this into the
       * Request object or equivalent when we decide on a good implementation.
       * And when it all works as expected and iron out the bugs.
       */

      if (self.apiKey) {
        query.key = self.apiKey; // set key as query param if present
      }

      var options = {
        url: url, // from built url above
        qs: query,
        method: 'GET',
        json: resource,
        headers: headers
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
     * @param {Object} params.resource Body of request
     */
    insert: function(params, callback) {
      params = params || {};
      var resource = params.resource || true;
      var media = params.media || {}; // XXX TODO: Implement media uploads
      var headers = params.headers || {}; // custom headers if we need
      var url = 'https://www.googleapis.com/urlshortener/v1/url';

      /**
       * Very unmodular code ahead! We can separate a lot of this into the
       * Request object or equivalent when we decide on a good implementation.
       * And when it all works as expected and iron out the bugs.
       */

      if (self.apiKey) {
        query.key = self.apiKey; // set key as query param if present
      }

      var options = {
        url: url, // from built url above
        qs: query,
        method: 'POST',
        json: resource,
        headers: headers
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
     * @param {string} params.projection Additional information to return.
     * @param {string} params.start-token Token for requesting successive pages of results.
     * @param {Object} params.resource Body of request
     */
    list: function(params, callback) {
      params = params || {};
      var resource = params.resource || true;
      var media = params.media || {}; // XXX TODO: Implement media uploads
      var headers = params.headers || {}; // custom headers if we need
      var url = 'https://www.googleapis.com/urlshortener/v1/url/history';

      /**
       * Very unmodular code ahead! We can separate a lot of this into the
       * Request object or equivalent when we decide on a good implementation.
       * And when it all works as expected and iron out the bugs.
       */

      if (self.apiKey) {
        query.key = self.apiKey; // set key as query param if present
      }

      var options = {
        url: url, // from built url above
        qs: query,
        method: 'GET',
        json: resource,
        headers: headers
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