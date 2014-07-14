var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;
var checkRequired = apirequest.checkRequired;

/**
 * URL Shortener API
 *
 * Lets you create, inspect, and manage goo.gl short URLs
 *
 * @author Google
 * @this Urlshortener
 * @param {object=} options Options for Urlshortener
 */
function Urlshortener(options) {

  var self = this;
  this._options = options || {};

  this.url = {

    /**
     * urlshortener.url.get
     *
     * Expands a short URL or gets creation time and analytics.
     *
     * @param {string=} params.projection Additional information to return.
     * @param {string} params.shortUrl The short URL, including the protocol.
     * @param {object} params.resource Body of request
     * @throws {Error} If a required parameter is missing.
     * @return {object} Request object
     */
    get: function(params, callback) {
      checkRequired(params, ['shortUrl']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/urlshortener/v1/url',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * urlshortener.url.insert
     *
     * Creates a new short URL.
     *
     * @param {object} params.resource Body of request
     * @return {object} Request object
     */
    insert: function(params, callback) {
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/urlshortener/v1/url',
        method: 'POST'
      };

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
     * @return {object} Request object
     */
    list: function(params, callback) {
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/urlshortener/v1/url/history',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Export Urlshortener object
 * @type Urlshortener
 */
module.exports = Urlshortener;