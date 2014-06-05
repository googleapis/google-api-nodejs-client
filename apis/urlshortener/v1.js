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
     * @param {string} query.projection Additional information to return.
     * @param {string} query.shortUrl The short URL, including the protocol.
     */
    get: function(params, callback) {
      params = params || {};
      var query = params.query || {};
      var body = params.body || true;
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
        json: body,
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
     */
    insert: function(params, callback) {
      params = params || {};
      var query = params.query || {};
      var body = params.body || true;
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
        json: body,
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
     * @param {string} query.projection Additional information to return.
     * @param {string} query.start-token Token for requesting successive pages of results.
     */
    list: function(params, callback) {
      params = params || {};
      var query = params.query || {};
      var body = params.body || true;
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
        json: body,
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