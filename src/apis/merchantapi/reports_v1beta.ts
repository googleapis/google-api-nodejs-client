// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
  BaseExternalAccountClient,
  GaxiosResponseWithHTTP2,
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  StreamMethodOptions,
  GlobalOptions,
  GoogleAuth,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {Readable} from 'stream';

export namespace merchantapi_reports_v1beta {
  export interface Options extends GlobalOptions {
    version: 'reports_v1beta';
  }

  interface StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?:
      | string
      | OAuth2Client
      | JWT
      | Compute
      | UserRefreshClient
      | BaseExternalAccountClient
      | GoogleAuth;

    /**
     * V1 error format.
     */
    '$.xgafv'?: string;
    /**
     * OAuth access token.
     */
    access_token?: string;
    /**
     * Data format for response.
     */
    alt?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    upload_protocol?: string;
  }

  /**
   * Merchant API
   *
   * Programmatically manage your Merchant Center Accounts.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const merchantapi = google.merchantapi('reports_v1beta');
   * ```
   */
  export class Merchantapi {
    context: APIRequestContext;
    accounts: Resource$Accounts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.accounts = new Resource$Accounts(this.context);
    }
  }

  /**
   * Fields available for query in `best_sellers_brand_view` table. [Best sellers](https://support.google.com/merchants/answer/9488679) report with top brands. Values are only set for fields requested explicitly in the request's search query.
   */
  export interface Schema$BestSellersBrandView {
    /**
     * Name of the brand.
     */
    brand?: string | null;
    /**
     * Popularity rank in the previous week or month.
     */
    previousRank?: string | null;
    /**
     * Estimated demand in relation to the brand with the highest popularity rank in the same category and country in the previous week or month.
     */
    previousRelativeDemand?: string | null;
    /**
     * Popularity of the brand on Ads and organic surfaces, in the selected category and country, based on the estimated number of units sold.
     */
    rank?: string | null;
    /**
     * Estimated demand in relation to the brand with the highest popularity rank in the same category and country.
     */
    relativeDemand?: string | null;
    /**
     * Change in the estimated demand. Whether it rose, sank or remained flat.
     */
    relativeDemandChange?: string | null;
    /**
     * Google product category ID to calculate the ranking for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). Required in the `SELECT` clause. If a `WHERE` condition on `report_category_id` is not specified in the query, rankings for all top-level categories are returned.
     */
    reportCategoryId?: string | null;
    /**
     * Country where the ranking is calculated. Represented in the ISO 3166 format. Required in the `SELECT` clause. Condition on `report_country_code` is required in the `WHERE` clause.
     */
    reportCountryCode?: string | null;
    /**
     * Report date. The value of this field can only be one of the following: * The first day of the week (Monday) for weekly reports, * The first day of the month for monthly reports. Required in the `SELECT` clause. If a `WHERE` condition on `report_date` is not specified in the query, the latest available weekly or monthly report is returned.
     */
    reportDate?: Schema$Date;
    /**
     * Granularity of the report. The ranking can be done over a week or a month timeframe. Required in the `SELECT` clause. Condition on `report_granularity` is required in the `WHERE` clause.
     */
    reportGranularity?: string | null;
  }
  /**
   * Fields available for query in `best_sellers_product_cluster_view` table. [Best sellers](https://support.google.com/merchants/answer/9488679) report with top product clusters. A product cluster is a grouping for different offers and variants that represent the same product, for example, Google Pixel 7. Values are only set for fields requested explicitly in the request's search query.
   */
  export interface Schema$BestSellersProductClusterView {
    /**
     * Brand of the product cluster.
     */
    brand?: string | null;
    /**
     * Whether there is at least one product of the brand currently `IN_STOCK` in your product data source in at least one of the countries, all products are `OUT_OF_STOCK` in your product data source in all countries, or `NOT_IN_INVENTORY`. The field doesn't take the Best sellers report country filter into account.
     */
    brandInventoryStatus?: string | null;
    /**
     * Product category (1st level) of the product cluster, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL1?: string | null;
    /**
     * Product category (2nd level) of the product cluster, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL2?: string | null;
    /**
     * Product category (3rd level) of the product cluster, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL3?: string | null;
    /**
     * Product category (4th level) of the product cluster, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL4?: string | null;
    /**
     * Product category (5th level) of the product cluster, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL5?: string | null;
    /**
     * Whether the product cluster is `IN_STOCK` in your product data source in at least one of the countries, `OUT_OF_STOCK` in your product data source in all countries, or `NOT_IN_INVENTORY` at all. The field doesn't take the Best sellers report country filter into account.
     */
    inventoryStatus?: string | null;
    /**
     * Popularity rank in the previous week or month.
     */
    previousRank?: string | null;
    /**
     * Estimated demand in relation to the product cluster with the highest popularity rank in the same category and country in the previous week or month.
     */
    previousRelativeDemand?: string | null;
    /**
     * Popularity of the product cluster on Ads and organic surfaces, in the selected category and country, based on the estimated number of units sold.
     */
    rank?: string | null;
    /**
     * Estimated demand in relation to the product cluster with the highest popularity rank in the same category and country.
     */
    relativeDemand?: string | null;
    /**
     * Change in the estimated demand. Whether it rose, sank or remained flat.
     */
    relativeDemandChange?: string | null;
    /**
     * Google product category ID to calculate the ranking for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). Required in the `SELECT` clause. If a `WHERE` condition on `report_category_id` is not specified in the query, rankings for all top-level categories are returned.
     */
    reportCategoryId?: string | null;
    /**
     * Country where the ranking is calculated. Represented in the ISO 3166 format. Required in the `SELECT` clause. Condition on `report_country_code` is required in the `WHERE` clause.
     */
    reportCountryCode?: string | null;
    /**
     * Report date. The value of this field can only be one of the following: * The first day of the week (Monday) for weekly reports, * The first day of the month for monthly reports. Required in the `SELECT` clause. If a `WHERE` condition on `report_date` is not specified in the query, the latest available weekly or monthly report is returned.
     */
    reportDate?: Schema$Date;
    /**
     * Granularity of the report. The ranking can be done over a week or a month timeframe. Required in the `SELECT` clause. Condition on `report_granularity` is required in the `WHERE` clause.
     */
    reportGranularity?: string | null;
    /**
     * Title of the product cluster.
     */
    title?: string | null;
    /**
     * GTINs of example variants of the product cluster.
     */
    variantGtins?: string[] | null;
  }
  /**
   * Fields available for query in `competitive_visibility_benchmark_view` table. [Competitive visibility](https://support.google.com/merchants/answer/11366442) report with the category benchmark. Values are only set for fields requested explicitly in the request's search query.
   */
  export interface Schema$CompetitiveVisibilityBenchmarkView {
    /**
     * Change in visibility based on impressions with respect to the start of the selected time range (or first day with non-zero impressions) for a combined set of merchants with highest visibility approximating the market. Cannot be filtered on in the 'WHERE' clause.
     */
    categoryBenchmarkVisibilityTrend?: number | null;
    /**
     * Date of this row. Required in the `SELECT` clause. A condition on `date` is required in the `WHERE` clause.
     */
    date?: Schema$Date;
    /**
     * Google product category ID to calculate the report for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). Required in the `SELECT` clause. A condition on `report_category_id` is required in the `WHERE` clause.
     */
    reportCategoryId?: string | null;
    /**
     * Country where impressions appeared. Required in the `SELECT` clause. A condition on `report_country_code` is required in the `WHERE` clause.
     */
    reportCountryCode?: string | null;
    /**
     * Traffic source of impressions. Required in the `SELECT` clause.
     */
    trafficSource?: string | null;
    /**
     * Change in visibility based on impressions for your domain with respect to the start of the selected time range (or first day with non-zero impressions). Cannot be filtered on in the 'WHERE' clause.
     */
    yourDomainVisibilityTrend?: number | null;
  }
  /**
   * Fields available for query in `competitive_visibility_competitor_view` table. [Competitive visibility](https://support.google.com/merchants/answer/11366442) report with businesses with similar visibility. Values are only set for fields requested explicitly in the request's search query.
   */
  export interface Schema$CompetitiveVisibilityCompetitorView {
    /**
     * [Ads / organic ratio] (https://support.google.com/merchants/answer/11366442#zippy=%2Cads-free-ratio) shows how often the domain receives impressions from Shopping ads compared to organic traffic. The number is rounded and bucketed. Cannot be filtered on in the 'WHERE' clause.
     */
    adsOrganicRatio?: number | null;
    /**
     * Date of this row. A condition on `date` is required in the `WHERE` clause.
     */
    date?: Schema$Date;
    /**
     * Domain of your competitor or your domain, if 'is_your_domain' is true. Required in the `SELECT` clause. Cannot be filtered on in the 'WHERE' clause.
     */
    domain?: string | null;
    /**
     * [Higher position rate] (https://support.google.com/merchants/answer/11366442#zippy=%2Chigher-position-rate) shows how often a competitor’s offer got placed in a higher position on the page than your offer. Cannot be filtered on in the 'WHERE' clause.
     */
    higherPositionRate?: number | null;
    /**
     * True if this row contains data for your domain. Cannot be filtered on in the 'WHERE' clause.
     */
    isYourDomain?: boolean | null;
    /**
     * [Page overlap rate] (https://support.google.com/merchants/answer/11366442#zippy=%2Cpage-overlap-rate) shows how frequently competing retailers’ offers are shown together with your offers on the same page. Cannot be filtered on in the 'WHERE' clause.
     */
    pageOverlapRate?: number | null;
    /**
     * Position of the domain in the similar businesses ranking for the selected keys (`date`, `report_category_id`, `report_country_code`, `traffic_source`) based on impressions. 1 is the highest. Cannot be filtered on in the 'WHERE' clause.
     */
    rank?: string | null;
    /**
     * [Relative visibility] (https://support.google.com/merchants/answer/11366442#zippy=%2Crelative-visibility) shows how often your competitors’ offers are shown compared to your offers. In other words, this is the number of displayed impressions of a competitor retailer divided by the number of your displayed impressions during a selected time range for a selected product category and country. Cannot be filtered on in the 'WHERE' clause.
     */
    relativeVisibility?: number | null;
    /**
     * Google product category ID to calculate the report for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). Required in the `SELECT` clause. A condition on `report_category_id` is required in the `WHERE` clause.
     */
    reportCategoryId?: string | null;
    /**
     * Country where impressions appeared. Required in the `SELECT` clause. A condition on `report_country_code` is required in the `WHERE` clause.
     */
    reportCountryCode?: string | null;
    /**
     * Traffic source of impressions. Required in the `SELECT` clause.
     */
    trafficSource?: string | null;
  }
  /**
   * Fields available for query in `competitive_visibility_top_merchant_view` table. [Competitive visibility](https://support.google.com/merchants/answer/11366442) report with business with highest visibility. Values are only set for fields requested explicitly in the request's search query.
   */
  export interface Schema$CompetitiveVisibilityTopMerchantView {
    /**
     * [Ads / organic ratio] (https://support.google.com/merchants/answer/11366442#zippy=%2Cads-free-ratio) shows how often the domain receives impressions from Shopping ads compared to organic traffic. The number is rounded and bucketed. Cannot be filtered on in the 'WHERE' clause.
     */
    adsOrganicRatio?: number | null;
    /**
     * Date of this row. Cannot be selected in the `SELECT` clause. A condition on `date` is required in the `WHERE` clause.
     */
    date?: Schema$Date;
    /**
     * Domain of your competitor or your domain, if 'is_your_domain' is true. Required in the `SELECT` clause. Cannot be filtered on in the 'WHERE' clause.
     */
    domain?: string | null;
    /**
     * [Higher position rate] (https://support.google.com/merchants/answer/11366442#zippy=%2Chigher-position-rate) shows how often a competitor’s offer got placed in a higher position on the page than your offer. Cannot be filtered on in the 'WHERE' clause.
     */
    higherPositionRate?: number | null;
    /**
     * True if this row contains data for your domain. Cannot be filtered on in the 'WHERE' clause.
     */
    isYourDomain?: boolean | null;
    /**
     * [Page overlap rate] (https://support.google.com/merchants/answer/11366442#zippy=%2Cpage-overlap-rate) shows how frequently competing retailers’ offers are shown together with your offers on the same page. Cannot be filtered on in the 'WHERE' clause.
     */
    pageOverlapRate?: number | null;
    /**
     * Position of the domain in the top merchants ranking for the selected keys (`date`, `report_category_id`, `report_country_code`, `traffic_source`) based on impressions. 1 is the highest. Cannot be filtered on in the 'WHERE' clause.
     */
    rank?: string | null;
    /**
     * Google product category ID to calculate the report for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). Required in the `SELECT` clause. A condition on `report_category_id` is required in the `WHERE` clause.
     */
    reportCategoryId?: string | null;
    /**
     * Country where impressions appeared. Required in the `SELECT` clause. A condition on `report_country_code` is required in the `WHERE` clause.
     */
    reportCountryCode?: string | null;
    /**
     * Traffic source of impressions. Required in the `SELECT` clause.
     */
    trafficSource?: string | null;
  }
  /**
   * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
   */
  export interface Schema$Date {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | null;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | null;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | null;
  }
  /**
   * Issue severity per reporting context.
   */
  export interface Schema$IssueSeverityPerReportingContext {
    /**
     * List of demoted countries in the reporting context, represented in ISO 3166 format.
     */
    demotedCountries?: string[] | null;
    /**
     * List of disapproved countries in the reporting context, represented in ISO 3166 format.
     */
    disapprovedCountries?: string[] | null;
    /**
     * Reporting context the issue applies to.
     */
    reportingContext?: string | null;
  }
  /**
   * Item issue associated with the product.
   */
  export interface Schema$ItemIssue {
    /**
     * Item issue resolution.
     */
    resolution?: string | null;
    /**
     * Item issue severity.
     */
    severity?: Schema$ItemIssueSeverity;
    /**
     * Item issue type.
     */
    type?: Schema$ItemIssueType;
  }
  /**
   * How the issue affects the serving of the product.
   */
  export interface Schema$ItemIssueSeverity {
    /**
     * Aggregated severity of the issue for all reporting contexts it affects. **This field can be used for filtering the results.**
     */
    aggregatedSeverity?: string | null;
    /**
     * Issue severity per reporting context.
     */
    severityPerReportingContext?: Schema$IssueSeverityPerReportingContext[];
  }
  /**
   * Issue type.
   */
  export interface Schema$ItemIssueType {
    /**
     * Canonical attribute name for attribute-specific issues.
     */
    canonicalAttribute?: string | null;
    /**
     * Error code of the issue, equivalent to the `code` of [Product issues](https://developers.google.com/shopping-content/guides/product-issues).
     */
    code?: string | null;
  }
  /**
   * Fields available for query in `non_product_performance_view` table. Performance data on images and online store links leading to your non-product pages. This includes performance metrics (for example, `clicks`) and dimensions according to which performance metrics are segmented (for example, `date`). Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for fields requested explicitly in the request's search query.
   */
  export interface Schema$NonProductPerformanceView {
    /**
     * Number of clicks on images and online store links leading to your non-product pages. Metric.
     */
    clicks?: string | null;
    /**
     * Click-through rate - the number of clicks (`clicks`) divided by the number of impressions (`impressions`) of images and online store links leading to your non-product pages. Metric.
     */
    clickThroughRate?: number | null;
    /**
     * Date in the merchant timezone to which metrics apply. Segment. Condition on `date` is required in the `WHERE` clause.
     */
    date?: Schema$Date;
    /**
     * Number of times images and online store links leading to your non-product pages were shown. Metric.
     */
    impressions?: string | null;
    /**
     * First day of the week (Monday) of the metrics date in the merchant timezone. Segment.
     */
    week?: Schema$Date;
  }
  /**
   * The price represented as a number and currency.
   */
  export interface Schema$Price {
    /**
     * The price represented as a number in micros (1 million micros is an equivalent to one's currency standard unit, for example, 1 USD = 1000000 micros).
     */
    amountMicros?: string | null;
    /**
     * The currency of the price using three-letter acronyms according to [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217).
     */
    currencyCode?: string | null;
  }
  /**
   * Fields available for query in `price_competitiveness_product_view` table. [Price competitiveness](https://support.google.com/merchants/answer/9626903) report. Values are only set for fields requested explicitly in the request's search query.
   */
  export interface Schema$PriceCompetitivenessProductView {
    /**
     * Latest available price benchmark for the product's catalog in the benchmark country.
     */
    benchmarkPrice?: Schema$Price;
    /**
     * Brand of the product.
     */
    brand?: string | null;
    /**
     * Product category (1st level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL1?: string | null;
    /**
     * Product category (2nd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL2?: string | null;
    /**
     * Product category (3rd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL3?: string | null;
    /**
     * Product category (4th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL4?: string | null;
    /**
     * Product category (5th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL5?: string | null;
    /**
     * REST ID of the product, in the form of `channel~languageCode~feedLabel~offerId`. Can be used to join data with the `product_view` table. Required in the `SELECT` clause.
     */
    id?: string | null;
    /**
     * Merchant-provided id of the product.
     */
    offerId?: string | null;
    /**
     * Current price of the product.
     */
    price?: Schema$Price;
    /**
     * Product type (1st level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).
     */
    productTypeL1?: string | null;
    /**
     * Product type (2nd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).
     */
    productTypeL2?: string | null;
    /**
     * Product type (3rd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).
     */
    productTypeL3?: string | null;
    /**
     * Product type (4th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).
     */
    productTypeL4?: string | null;
    /**
     * Product type (5th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).
     */
    productTypeL5?: string | null;
    /**
     * Country of the price benchmark. Represented in the ISO 3166 format. Required in the `SELECT` clause.
     */
    reportCountryCode?: string | null;
    /**
     * Title of the product.
     */
    title?: string | null;
  }
  /**
   * Fields available for query in `price_insights_product_view` table. [Price insights](https://support.google.com/merchants/answer/11916926) report. Values are only set for fields requested explicitly in the request's search query.
   */
  export interface Schema$PriceInsightsProductView {
    /**
     * Brand of the product.
     */
    brand?: string | null;
    /**
     * Product category (1st level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL1?: string | null;
    /**
     * Product category (2nd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL2?: string | null;
    /**
     * Product category (3rd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL3?: string | null;
    /**
     * Product category (4th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL4?: string | null;
    /**
     * Product category (5th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL5?: string | null;
    /**
     * The predicted effectiveness of applying the price suggestion, bucketed.
     */
    effectiveness?: string | null;
    /**
     * REST ID of the product, in the form of `channel~languageCode~feedLabel~offerId`. Can be used to join data with the `product_view` table. Required in the `SELECT` clause.
     */
    id?: string | null;
    /**
     * Merchant-provided id of the product.
     */
    offerId?: string | null;
    /**
     * Predicted change in clicks as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in clicks.
     */
    predictedClicksChangeFraction?: number | null;
    /**
     * Predicted change in conversions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in conversions).
     */
    predictedConversionsChangeFraction?: number | null;
    /**
     * Predicted change in impressions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in impressions.
     */
    predictedImpressionsChangeFraction?: number | null;
    /**
     * Current price of the product.
     */
    price?: Schema$Price;
    /**
     * Product type (1st level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).
     */
    productTypeL1?: string | null;
    /**
     * Product type (2nd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).
     */
    productTypeL2?: string | null;
    /**
     * Product type (3rd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).
     */
    productTypeL3?: string | null;
    /**
     * Product type (4th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).
     */
    productTypeL4?: string | null;
    /**
     * Product type (5th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).
     */
    productTypeL5?: string | null;
    /**
     * Latest suggested price for the product.
     */
    suggestedPrice?: Schema$Price;
    /**
     * Title of the product.
     */
    title?: string | null;
  }
  /**
   * The change that happened to the product including old value, new value, country code as the region code and reporting context.
   */
  export interface Schema$ProductChange {
    /**
     * The new value of the changed resource or attribute. If empty, it means that the product was deleted. Will have one of these values : (`approved`, `pending`, `disapproved`, ``)
     */
    newValue?: string | null;
    /**
     * The old value of the changed resource or attribute. If empty, it means that the product was created. Will have one of these values : (`approved`, `pending`, `disapproved`, ``)
     */
    oldValue?: string | null;
    /**
     * Countries that have the change (if applicable). Represented in the ISO 3166 format.
     */
    regionCode?: string | null;
    /**
     * Reporting contexts that have the change (if applicable). Currently this field supports only (`SHOPPING_ADS`, `LOCAL_INVENTORY_ADS`, `YOUTUBE_SHOPPING`, `YOUTUBE_CHECKOUT`, `YOUTUBE_AFFILIATE`) from the enum value [ReportingContextEnum](/merchant/api/reference/rest/Shared.Types/ReportingContextEnum)
     */
    reportingContext?: string | null;
  }
  /**
   * Fields available for query in `product_performance_view` table. Product performance data for your account, including performance metrics (for example, `clicks`) and dimensions according to which performance metrics are segmented (for example, `offer_id`). Values of product dimensions, such as `offer_id`, reflect the state of a product at the time of the impression. Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for fields requested explicitly in the request's search query.
   */
  export interface Schema$ProductPerformanceView {
    /**
     * Brand of the product. Segment.
     */
    brand?: string | null;
    /**
     * [Product category (1st level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. Segment.
     */
    categoryL1?: string | null;
    /**
     * [Product category (2nd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. Segment.
     */
    categoryL2?: string | null;
    /**
     * [Product category (3rd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. Segment.
     */
    categoryL3?: string | null;
    /**
     * [Product category (4th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. Segment.
     */
    categoryL4?: string | null;
    /**
     * [Product category (5th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy. Segment.
     */
    categoryL5?: string | null;
    /**
     * Number of clicks. Metric.
     */
    clicks?: string | null;
    /**
     * Click-through rate - the number of clicks merchant's products receive (clicks) divided by the number of times the products are shown (impressions). Metric.
     */
    clickThroughRate?: number | null;
    /**
     * Number of conversions divided by the number of clicks, reported on the impression date. Metric. Available only for the `FREE` traffic source.
     */
    conversionRate?: number | null;
    /**
     * Number of conversions attributed to the product, reported on the conversion date. Depending on the attribution model, a conversion might be distributed across multiple clicks, where each click gets its own credit assigned. This metric is a sum of all such credits. Metric. Available only for the `FREE` traffic source.
     */
    conversions?: number | null;
    /**
     * Value of conversions attributed to the product, reported on the conversion date. Metric. Available only for the `FREE` traffic source.
     */
    conversionValue?: Schema$Price;
    /**
     * Code of the country where the customer is located at the time of the event. Represented in the ISO 3166 format. Segment. If the customer country cannot be determined, a special 'ZZ' code is returned.
     */
    customerCountryCode?: string | null;
    /**
     * Custom label 0 for custom grouping of products. Segment.
     */
    customLabel0?: string | null;
    /**
     * Custom label 1 for custom grouping of products. Segment.
     */
    customLabel1?: string | null;
    /**
     * Custom label 2 for custom grouping of products. Segment.
     */
    customLabel2?: string | null;
    /**
     * Custom label 3 for custom grouping of products. Segment.
     */
    customLabel3?: string | null;
    /**
     * Custom label 4 for custom grouping of products. Segment.
     */
    customLabel4?: string | null;
    /**
     * Date in the merchant timezone to which metrics apply. Segment. Condition on `date` is required in the `WHERE` clause.
     */
    date?: Schema$Date;
    /**
     * Number of times merchant's products are shown. Metric.
     */
    impressions?: string | null;
    /**
     * Marketing method to which metrics apply. Segment.
     */
    marketingMethod?: string | null;
    /**
     * Merchant-provided id of the product. Segment.
     */
    offerId?: string | null;
    /**
     * [Product type (1st level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. Segment.
     */
    productTypeL1?: string | null;
    /**
     * [Product type (2nd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. Segment.
     */
    productTypeL2?: string | null;
    /**
     * [Product type (3rd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. Segment.
     */
    productTypeL3?: string | null;
    /**
     * [Product type (4th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. Segment.
     */
    productTypeL4?: string | null;
    /**
     * [Product type (5th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy. Segment.
     */
    productTypeL5?: string | null;
    /**
     * Title of the product. Segment.
     */
    title?: string | null;
    /**
     * First day of the week (Monday) of the metrics date in the merchant timezone. Segment.
     */
    week?: Schema$Date;
  }
  /**
   * The message that the merchant will receive to notify about product status change event
   */
  export interface Schema$ProductStatusChangeMessage {
    /**
     * The target account that owns the entity that changed. Format : `accounts/{merchant_id\}`
     */
    account?: string | null;
    /**
     * The attribute in the resource that changed, in this case it will be always `Status`.
     */
    attribute?: string | null;
    /**
     * A message to describe the change that happened to the product
     */
    changes?: Schema$ProductChange[];
    /**
     * The time at which the event was generated. If you want to order the notification messages you receive you should rely on this field not on the order of receiving the notifications.
     */
    eventTime?: string | null;
    /**
     * Optional. The product expiration time. This field will not be set if the notification is sent for a product deletion event.
     */
    expirationTime?: string | null;
    /**
     * The account that manages the merchant's account. can be the same as merchant id if it is standalone account. Format : `accounts/{service_provider_id\}`
     */
    managingAccount?: string | null;
    /**
     * The product name. Format: `accounts/{account\}/products/{product\}`
     */
    resource?: string | null;
    /**
     * The product id.
     */
    resourceId?: string | null;
    /**
     * The resource that changed, in this case it will always be `Product`.
     */
    resourceType?: string | null;
  }
  /**
   * Fields available for query in `product_view` table. Products in the current inventory. Products in this table are the same as in Products sub-API but not all product attributes from Products sub-API are available for query in this table. In contrast to Products sub-API, this table allows to filter the returned list of products by product attributes. To retrieve a single product by `id` or list all products, Products sub-API should be used. Values are only set for fields requested explicitly in the request's search query.
   */
  export interface Schema$ProductView {
    /**
     * Aggregated status.
     */
    aggregatedReportingContextStatus?: string | null;
    /**
     * [Availability](https://support.google.com/merchants/answer/6324448) of the product.
     */
    availability?: string | null;
    /**
     * Brand of the product.
     */
    brand?: string | null;
    /**
     * Product category (1st level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL1?: string | null;
    /**
     * Product category (2nd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL2?: string | null;
    /**
     * Product category (3rd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL3?: string | null;
    /**
     * Product category (4th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL4?: string | null;
    /**
     * Product category (5th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL5?: string | null;
    /**
     * Channel of the product. Can be `ONLINE` or `LOCAL`.
     */
    channel?: string | null;
    /**
     * Estimated performance potential compared to highest performing products of the merchant.
     */
    clickPotential?: string | null;
    /**
     * Rank of the product based on its click potential. A product with `click_potential_rank` 1 has the highest click potential among the merchant's products that fulfill the search query conditions.
     */
    clickPotentialRank?: string | null;
    /**
     * [Condition](https://support.google.com/merchants/answer/6324469) of the product.
     */
    condition?: string | null;
    /**
     * The time the merchant created the product in timestamp seconds.
     */
    creationTime?: string | null;
    /**
     * Expiration date for the product, specified on insertion.
     */
    expirationDate?: Schema$Date;
    /**
     * Feed label of the product.
     */
    feedLabel?: string | null;
    /**
     * List of Global Trade Item Numbers (GTINs) of the product.
     */
    gtin?: string[] | null;
    /**
     * REST ID of the product, in the form of `channel~languageCode~feedLabel~offerId`. Merchant API methods that operate on products take this as their `name` parameter. Required in the `SELECT` clause.
     */
    id?: string | null;
    /**
     * Item group id provided by the merchant for grouping variants together.
     */
    itemGroupId?: string | null;
    /**
     * List of item issues for the product. **This field cannot be used for sorting the results.** **Only selected attributes of this field (for example, `item_issues.severity.aggregated_severity`) can be used for filtering the results.**
     */
    itemIssues?: Schema$ItemIssue[];
    /**
     * Language code of the product in BCP 47 format.
     */
    languageCode?: string | null;
    /**
     * Merchant-provided id of the product.
     */
    offerId?: string | null;
    /**
     * Product price. Absent if the information about the price of the product is not available.
     */
    price?: Schema$Price;
    /**
     * Product type (1st level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).
     */
    productTypeL1?: string | null;
    /**
     * Product type (2nd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).
     */
    productTypeL2?: string | null;
    /**
     * Product type (3rd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).
     */
    productTypeL3?: string | null;
    /**
     * Product type (4th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).
     */
    productTypeL4?: string | null;
    /**
     * Product type (5th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).
     */
    productTypeL5?: string | null;
    /**
     * Normalized [shipping label](https://support.google.com/merchants/answer/6324504) specified in the data source.
     */
    shippingLabel?: string | null;
    /**
     * Link to the processed image of the product, hosted on the Google infrastructure.
     */
    thumbnailLink?: string | null;
    /**
     * Title of the product.
     */
    title?: string | null;
  }
  /**
   * Result row returned from the search query. Only the message corresponding to the queried table is populated in the response. Within the populated message, only the fields requested explicitly in the query are populated.
   */
  export interface Schema$ReportRow {
    /**
     * Fields available for query in `best_sellers_brand_view` table.
     */
    bestSellersBrandView?: Schema$BestSellersBrandView;
    /**
     * Fields available for query in `best_sellers_product_cluster_view` table.
     */
    bestSellersProductClusterView?: Schema$BestSellersProductClusterView;
    /**
     * Fields available for query in `competitive_visibility_benchmark_view` table.
     */
    competitiveVisibilityBenchmarkView?: Schema$CompetitiveVisibilityBenchmarkView;
    /**
     * Fields available for query in `competitive_visibility_competitor_view` table.
     */
    competitiveVisibilityCompetitorView?: Schema$CompetitiveVisibilityCompetitorView;
    /**
     * Fields available for query in `competitive_visibility_top_merchant_view` table.
     */
    competitiveVisibilityTopMerchantView?: Schema$CompetitiveVisibilityTopMerchantView;
    /**
     * Fields available for query in `non_product_performance_view` table.
     */
    nonProductPerformanceView?: Schema$NonProductPerformanceView;
    /**
     * Fields available for query in `price_competitiveness_product_view` table.
     */
    priceCompetitivenessProductView?: Schema$PriceCompetitivenessProductView;
    /**
     * Fields available for query in `price_insights_product_view` table.
     */
    priceInsightsProductView?: Schema$PriceInsightsProductView;
    /**
     * Fields available for query in `product_performance_view` table.
     */
    productPerformanceView?: Schema$ProductPerformanceView;
    /**
     * Fields available for query in `product_view` table.
     */
    productView?: Schema$ProductView;
  }
  /**
   * Request message for the `ReportService.Search` method.
   */
  export interface Schema$SearchRequest {
    /**
     * Optional. Number of `ReportRows` to retrieve in a single page. Defaults to 1000. Values above 5000 are coerced to 5000.
     */
    pageSize?: number | null;
    /**
     * Optional. Token of the page to retrieve. If not specified, the first page of results is returned. In order to request the next page of results, the value obtained from `next_page_token` in the previous response should be used.
     */
    pageToken?: string | null;
    /**
     * Required. Query that defines a report to be retrieved. For details on how to construct your query, see the [Query Language guide](/merchant/api/guides/reports/query-language). For the full list of available tables and fields, see the [Available fields](/merchant/api/reference/rest/reports_v1beta/accounts.reports).
     */
    query?: string | null;
  }
  /**
   * Response message for the `ReportService.Search` method.
   */
  export interface Schema$SearchResponse {
    /**
     * Token which can be sent as `page_token` to retrieve the next page. If omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * Rows that matched the search query.
     */
    results?: Schema$ReportRow[];
  }

  export class Resource$Accounts {
    context: APIRequestContext;
    reports: Resource$Accounts$Reports;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.reports = new Resource$Accounts$Reports(this.context);
    }
  }

  export class Resource$Accounts$Reports {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Retrieves a report defined by a search query. The response might contain fewer rows than specified by `page_size`. Rely on `next_page_token` to determine if there are more rows to be requested.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/merchantapi.googleapis.com
     * // - Login into gcloud by running:
     * //   ```sh
     * //   $ gcloud auth application-default login
     * //   ```
     * // - Install the npm module by running:
     * //   ```sh
     * //   $ npm install googleapis
     * //   ```
     *
     * const {google} = require('googleapis');
     * const merchantapi = google.merchantapi('reports_v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/content'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await merchantapi.accounts.reports.search({
     *     // Required. Id of the account making the call. Must be a standalone account or an MCA subaccount. Format: accounts/{account\}
     *     parent: 'accounts/my-account',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "pageSize": 0,
     *       //   "pageToken": "my_pageToken",
     *       //   "query": "my_query"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "results": []
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * ```
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    search(
      params: Params$Resource$Accounts$Reports$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Accounts$Reports$Search,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SearchResponse>>;
    search(
      params: Params$Resource$Accounts$Reports$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Accounts$Reports$Search,
      options: MethodOptions | BodyResponseCallback<Schema$SearchResponse>,
      callback: BodyResponseCallback<Schema$SearchResponse>
    ): void;
    search(
      params: Params$Resource$Accounts$Reports$Search,
      callback: BodyResponseCallback<Schema$SearchResponse>
    ): void;
    search(callback: BodyResponseCallback<Schema$SearchResponse>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Accounts$Reports$Search
        | BodyResponseCallback<Schema$SearchResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SearchResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Accounts$Reports$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Reports$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://merchantapi.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/reports/v1beta/{+parent}/reports:search').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SearchResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Reports$Search
    extends StandardParameters {
    /**
     * Required. Id of the account making the call. Must be a standalone account or an MCA subaccount. Format: accounts/{account\}
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SearchRequest;
  }
}
