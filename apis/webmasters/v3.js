/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Webmaster Tools API
 *
 * @classdesc Lets you view Google Webmaster Tools data for your verified sites.
 * @namespace webmasters
 * @version  v3
 * @variation v3
 * @this Webmasters
 * @param {object=} options Options for Webmasters
 */
function Webmasters(options) {

  var self = this;
  this._options = options || {};

  this.searchanalytics = {

    /**
     * webmasters.searchanalytics.query
     *
     * @desc Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.  When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.
     *
     * @alias webmasters.searchanalytics.query
     * @memberOf! webmasters(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.siteUrl - The site's URL, including protocol. For example: http://www.example.com/
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    query: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/webmasters/v3/sites/{siteUrl}/searchAnalytics/query',
          method: 'POST'
        },
        params: params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.sitemaps = {

    /**
     * webmasters.sitemaps.delete
     *
     * @desc Deletes a sitemap from this site.
     *
     * @alias webmasters.sitemaps.delete
     * @memberOf! webmasters(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.feedpath - The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
     * @param  {string} params.siteUrl - The site's URL, including protocol. For example: http://www.example.com/
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['siteUrl', 'feedpath'],
        pathParams: ['feedpath', 'siteUrl'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * webmasters.sitemaps.get
     *
     * @desc Retrieves information about a specific sitemap.
     *
     * @alias webmasters.sitemaps.get
     * @memberOf! webmasters(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.feedpath - The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
     * @param  {string} params.siteUrl - The site's URL, including protocol. For example: http://www.example.com/
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['siteUrl', 'feedpath'],
        pathParams: ['feedpath', 'siteUrl'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * webmasters.sitemaps.list
     *
     * @desc Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).
     *
     * @alias webmasters.sitemaps.list
     * @memberOf! webmasters(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.siteUrl - The site's URL, including protocol. For example: http://www.example.com/
     * @param  {string=} params.sitemapIndex - A URL of a site's sitemap index. For example: http://www.example.com/sitemapindex.xml
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/webmasters/v3/sites/{siteUrl}/sitemaps',
          method: 'GET'
        },
        params: params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * webmasters.sitemaps.submit
     *
     * @desc Submits a sitemap for a site.
     *
     * @alias webmasters.sitemaps.submit
     * @memberOf! webmasters(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.feedpath - The URL of the sitemap to add. For example: http://www.example.com/sitemap.xml
     * @param  {string} params.siteUrl - The site's URL, including protocol. For example: http://www.example.com/
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    submit: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['siteUrl', 'feedpath'],
        pathParams: ['feedpath', 'siteUrl'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.sites = {

    /**
     * webmasters.sites.add
     *
     * @desc Adds a site to the set of the user's sites in Search Console.
     *
     * @alias webmasters.sites.add
     * @memberOf! webmasters(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.siteUrl - The URL of the site to add.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    add: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/webmasters/v3/sites/{siteUrl}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * webmasters.sites.delete
     *
     * @desc Removes a site from the set of the user's Search Console sites.
     *
     * @alias webmasters.sites.delete
     * @memberOf! webmasters(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.siteUrl - The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/webmasters/v3/sites/{siteUrl}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * webmasters.sites.get
     *
     * @desc Retrieves information about specific site.
     *
     * @alias webmasters.sites.get
     * @memberOf! webmasters(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.siteUrl - The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/webmasters/v3/sites/{siteUrl}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * webmasters.sites.list
     *
     * @desc Lists the user's Search Console sites.
     *
     * @alias webmasters.sites.list
     * @memberOf! webmasters(v3)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/webmasters/v3/sites',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.urlcrawlerrorscounts = {

    /**
     * webmasters.urlcrawlerrorscounts.query
     *
     * @desc Retrieves a time series of the number of URL crawl errors per error category and platform.
     *
     * @alias webmasters.urlcrawlerrorscounts.query
     * @memberOf! webmasters(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.category - The crawl error category. For example: serverError. If not specified, returns results for all categories.
     * @param  {boolean=} params.latestCountsOnly - If true, returns only the latest crawl error counts.
     * @param  {string=} params.platform - The user agent type (platform) that made the request. For example: web. If not specified, returns results for all platforms.
     * @param  {string} params.siteUrl - The site's URL, including protocol. For example: http://www.example.com/
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    query: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/webmasters/v3/sites/{siteUrl}/urlCrawlErrorsCounts/query',
          method: 'GET'
        },
        params: params,
        requiredParams: ['siteUrl'],
        pathParams: ['siteUrl'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.urlcrawlerrorssamples = {

    /**
     * webmasters.urlcrawlerrorssamples.get
     *
     * @desc Retrieves details about crawl errors for a site's sample URL.
     *
     * @alias webmasters.urlcrawlerrorssamples.get
     * @memberOf! webmasters(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.category - The crawl error category. For example: authPermissions
     * @param  {string} params.platform - The user agent type (platform) that made the request. For example: web
     * @param  {string} params.siteUrl - The site's URL, including protocol. For example: http://www.example.com/
     * @param  {string} params.url - The relative path (without the site) of the sample URL. It must be one of the URLs returned by list(). For example, for the URL https://www.example.com/pagename on the site https://www.example.com/, the url value is pagename
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/webmasters/v3/sites/{siteUrl}/urlCrawlErrorsSamples/{url}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['siteUrl', 'url', 'category', 'platform'],
        pathParams: ['siteUrl', 'url'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * webmasters.urlcrawlerrorssamples.list
     *
     * @desc Lists a site's sample URLs for the specified crawl error category and platform.
     *
     * @alias webmasters.urlcrawlerrorssamples.list
     * @memberOf! webmasters(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.category - The crawl error category. For example: authPermissions
     * @param  {string} params.platform - The user agent type (platform) that made the request. For example: web
     * @param  {string} params.siteUrl - The site's URL, including protocol. For example: http://www.example.com/
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/webmasters/v3/sites/{siteUrl}/urlCrawlErrorsSamples',
          method: 'GET'
        },
        params: params,
        requiredParams: ['siteUrl', 'category', 'platform'],
        pathParams: ['siteUrl'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * webmasters.urlcrawlerrorssamples.markAsFixed
     *
     * @desc Marks the provided site's sample URL as fixed, and removes it from the samples list.
     *
     * @alias webmasters.urlcrawlerrorssamples.markAsFixed
     * @memberOf! webmasters(v3)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.category - The crawl error category. For example: authPermissions
     * @param  {string} params.platform - The user agent type (platform) that made the request. For example: web
     * @param  {string} params.siteUrl - The site's URL, including protocol. For example: http://www.example.com/
     * @param  {string} params.url - The relative path (without the site) of the sample URL. It must be one of the URLs returned by list(). For example, for the URL https://www.example.com/pagename on the site https://www.example.com/, the url value is pagename
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    markAsFixed: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/webmasters/v3/sites/{siteUrl}/urlCrawlErrorsSamples/{url}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['siteUrl', 'url', 'category', 'platform'],
        pathParams: ['siteUrl', 'url'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Webmasters object
 * @type Webmasters
 */
module.exports = Webmasters;