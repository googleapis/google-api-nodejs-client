var createAPIRequest = require('../../lib/apirequest');
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
      var options = {
        url: 'https://www.googleapis.com/urlshortener/v1/url',
        method: 'GET'
      };

      var isMedia = false;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * urlshortener.url.insert
     *
     * Creates a new short URL.
     *
     * @param {object} params.resource Body of request
     */
    insert: function(params, callback) {
      var options = {
        url: 'https://www.googleapis.com/urlshortener/v1/url',
        method: 'POST'
      };

      var isMedia = false;

      return createAPIRequest(self, params, options, isMedia, callback);
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
      var options = {
        url: 'https://www.googleapis.com/urlshortener/v1/url/history',
        method: 'GET'
      };

      var isMedia = false;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Export Urlshortener object
 * @type Urlshortener
 */
module.exports = Urlshortener;