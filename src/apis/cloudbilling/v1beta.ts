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

export namespace cloudbilling_v1beta {
  export interface Options extends GlobalOptions {
    version: 'v1beta';
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
   * Cloud Billing API
   *
   * Allows developers to manage billing for their Google Cloud Platform projects programmatically.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const cloudbilling = google.cloudbilling('v1beta');
   * ```
   */
  export class Cloudbilling {
    context: APIRequestContext;
    billingAccounts: Resource$Billingaccounts;
    skuGroups: Resource$Skugroups;
    skus: Resource$Skus;
    v1beta: Resource$V1beta;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.billingAccounts = new Resource$Billingaccounts(this.context);
      this.skuGroups = new Resource$Skugroups(this.context);
      this.skus = new Resource$Skus(this.context);
      this.v1beta = new Resource$V1beta(this.context);
    }
  }

  /**
   * A local representation of the query used to fetch the data. This is used instead of the raw QueryBillingDataRequest to avoid pulling in Cloud Policy Enforcement (CPE) resource_type annotations into the response payload, which causes ESF validation failures.
   */
  export interface Schema$AgenticQueryInfo {
    /**
     * The columns queried.
     */
    columns?: string | null;
    /**
     * The filter applied to the query.
     */
    filter?: string | null;
    /**
     * The group-by clause applied to the query.
     */
    groupBy?: string | null;
    /**
     * The row limit applied to the query.
     */
    limit?: number | null;
    /**
     * The order-by clause applied to the query.
     */
    orderBy?: string | null;
    /**
     * The parents (e.g. projects, billing accounts) queried.
     */
    parents?: string[] | null;
    /**
     * The view queried.
     */
    view?: string | null;
  }
  /**
   * An ordered collection of elements of arbitrary count.
   */
  export interface Schema$Array {
    /**
     * The elements of the array.
     */
    element?: Schema$ValueProto[];
  }
  /**
   * Encapsulates billing data.
   */
  export interface Schema$BillingData {
    /**
     * Information about columns.
     */
    columnInfo?: Schema$ColumnInfo[];
    /**
     * Rows.
     */
    rows?: Schema$Row[];
  }
  /**
   * Specifies a Billing data resource that can be used for authorization to access billing data.
   */
  export interface Schema$BillingDataResource {
    /**
     * Optional. If not provided the billing account currently associated with the resource will be used.
     */
    billingAccount?: string | null;
    /**
     * Required. Resource name for an entitity that can be used for authorization to access billing data such as `projects/{project\}` or `billingAccounts/{billing_account\}`
     */
    resource?: string | null;
  }
  /**
   * Represents a column header.
   */
  export interface Schema$ColumnInfo {
    /**
     * Name of the column.
     */
    column?: string | null;
  }
  /**
   * A dataset used to support an insight, suitable for UI rendering (tables/charts).
   */
  export interface Schema$DataSet {
    /**
     * Output only. Actual billing data returned from the Data Mart. Uses the formal message from the Billing Data Service.
     */
    billingData?: Schema$BillingData;
    /**
     * Output only. The query used to fetch this data.
     */
    queryInfo?: Schema$AgenticQueryInfo;
    /**
     * Output only. A suggested chart for the data set, used for UI rendering.
     */
    suggestedChart?: Schema$SuggestedChart;
  }
  /**
   * A datetime value.
   */
  export interface Schema$Datetime {
    /**
     * Represents bit field encoding of year/month/day/hour/minute/second. See class DatetimeValue in civil_time.h for details of encoding.
     */
    bitFieldDatetimeSeconds?: string | null;
    /**
     * Non-negative fractions of a second at nanosecond resolution.
     */
    nanos?: number | null;
  }
  /**
   * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html) or Python's [decimal.Decimal](https://docs.python.org/3/library/decimal.html).
   */
  export interface Schema$Decimal {
    /**
     * The decimal value, as a string. The string representation consists of an optional sign, `+` (`U+002B`) or `-` (`U+002D`), followed by a sequence of zero or more decimal digits ("the integer"), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as `0`. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided `+` sign (`+2.5` -\> `2.5`). - Replacing a zero-length integer value with `0` (`.5` -\> `0.5`). - Coercing the exponent character to upper-case, with explicit sign (`2.5e8` -\> `2.5E+8`). - Removing an explicitly-provided zero exponent (`2.5E0` -\> `2.5`). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: `2.5E-1` <-\> `0.25`). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the `.` character is supported to divide the integer and the fraction; `,` **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString = '' | [Sign] Significand [Exponent]; Sign = '+' | '-'; Significand = Digits '.' | [Digits] '.' Digits; Exponent = ('e' | 'E') [Sign] Digits; Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' \}; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if precision would be lost. Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if the service receives a value outside of the supported range.
     */
    value?: string | null;
  }
  /**
   * Encapsulates all structured data and the completed summary.
   */
  export interface Schema$FinalResult {
    /**
     * Output only. Data sets used to support the insights, suitable for UI rendering (tables/charts).
     */
    dataSets?: Schema$DataSet[];
    /**
     * Output only. Contains the full natural language analysis, including thoughts, reasoning, and references.
     */
    fullAnalysis?: string | null;
    /**
     * Output only. A list of discrete insights gleaned from the data.
     */
    insights?: Schema$Insight[];
    /**
     * Output only. Links to interoperable tools (e.g., pre-filtered Cost Reports or BQE queries).
     */
    interopLinks?: Schema$InteropLink[];
    /**
     * Output only. A list of suggested follow-up queries for the user.
     */
    suggestedQueries?: Schema$SuggestedQuery[];
    /**
     * Output only. The full natural language summary (re-sent for consistency).
     */
    summary?: string | null;
  }
  /**
   * Request for GenerateInsights.
   */
  export interface Schema$GenerateInsightsRequest {
    /**
     * Optional. Filters cost data by service id. Follows https://google.aip.dev/160 for the filter syntax. eg. filter: "service = 'C7E2-9256-1C43'"
     */
    filter?: string | null;
    /**
     * Optional. Overrides the maximum iterations for any selected strategy.
     */
    overriddenMaxIterationCounts?: number | null;
    /**
     * Optional. The billing account or projects to analyze.
     */
    parents?: Schema$BillingDataResource[];
    /**
     * Required. The natural language prompt from the user.
     */
    prompt?: string | null;
    /**
     * Optional. Additional context for personalization (e.g., user persona, role).
     */
    userContext?: Schema$UserContext;
  }
  /**
   * Response for GenerateInsights.
   */
  export interface Schema$GenerateInsightsResponse {
    /**
     * Output only. The final structured results and metadata. Usually sent as the final message in the stream.
     */
    finalResult?: Schema$FinalResult;
    /**
     * Output only. The request was rejected (e.g. out of scope).
     */
    rejection?: Schema$Rejection;
    /**
     * Output only. A chunk of the natural language summary (customer-facing). The UI can append these chunks to provide a real-time "typing" effect.
     */
    summaryChunk?: string | null;
    /**
     * Output only. A chunk of the agent's internal reasoning process. The UI can use this to render a "Thinking..." log or status.
     */
    thoughtChunk?: string | null;
  }
  /**
   * Encapsulates the aggregation information such as aggregation level and interval for a billing account price.
   */
  export interface Schema$GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo {
    /**
     * Interval at which usage is aggregated to compute cost. Example: "MONTHLY" interval indicates that usage is aggregated every month.
     */
    interval?: string | null;
    /**
     * Level at which usage is aggregated to compute cost. Example: "ACCOUNT" level indicates that usage is aggregated across all projects in a single account.
     */
    level?: string | null;
  }
  /**
   * Encapsulates the latest price for a billing account SKU.
   */
  export interface Schema$GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice {
    /**
     * ISO-4217 currency code for the price.
     */
    currencyCode?: string | null;
    /**
     * Resource name for the latest billing account price.
     */
    name?: string | null;
    /**
     * Background information on the origin of the price.
     */
    priceReason?: Schema$GoogleCloudBillingBillingaccountpricesV1betaPriceReason;
    /**
     * Rate price metadata. Billing account SKUs with `Rate` price are offered by pricing tiers. The price can have 1 or more rate pricing tiers.
     */
    rate?: Schema$GoogleCloudBillingBillingaccountpricesV1betaRate;
    /**
     * Type of the price. The possible values are: ["unspecified", "rate"].
     */
    valueType?: string | null;
  }
  /**
   * Encapsulates a default price which is the current list price.
   */
  export interface Schema$GoogleCloudBillingBillingaccountpricesV1betaDefaultPrice {}
  /**
   * Encapsulates a discount off the list price, anchored to the list price as of a fixed time.
   */
  export interface Schema$GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount {
    /**
     * Percentage of the fixed discount.
     */
    discountPercent?: Schema$Decimal;
    /**
     * Type of the fixed discount scope which indicates the source of the discount. It can have values such as 'unspecified' and 'sku-group'.
     */
    discountScopeType?: string | null;
    /**
     * Time that the fixed discount is anchored to.
     */
    fixTime?: string | null;
    /**
     * SKU group where the fixed discount comes from.
     */
    skuGroup?: string | null;
  }
  /**
   * Encapsulates a set fixed price applicable during the terms of a contract agreement.
   */
  export interface Schema$GoogleCloudBillingBillingaccountpricesV1betaFixedPrice {}
  /**
   * Encapsulates a discount off the current list price, not anchored to any list price as of a fixed time.
   */
  export interface Schema$GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount {
    /**
     * Percentage of the floating discount.
     */
    discountPercent?: Schema$Decimal;
    /**
     * Type of the floating discount scope which indicates the source of the discount. It can have values such as 'unspecified' and 'sku-group'.
     */
    discountScopeType?: string | null;
    /**
     * SKU group where the floating discount comes from.
     */
    skuGroup?: string | null;
  }
  /**
   * Response message for ListBillingAccountPrices.
   */
  export interface Schema$GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse {
    /**
     * The returned billing account prices.
     */
    billingAccountPrices?: Schema$GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice[];
    /**
     * Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Encapsulates a contract feature that the list price (DefaultPrice) will be used for the price if the current list price drops lower than the custom fixed price. Available to new contracts after March 21, 2022. Applies to all fixed price SKUs in the contract, including FixedPrice, FixedDiscount, MigratedPrice, and MergedPrice.
   */
  export interface Schema$GoogleCloudBillingBillingaccountpricesV1betaListPriceAsCeiling {}
  /**
   * Encapsulates a price after merging from multiple sources. With merged tiers, each individual tier can be from a different source with different discount types.
   */
  export interface Schema$GoogleCloudBillingBillingaccountpricesV1betaMergedPrice {}
  /**
   * Encapsulates a price migrated from other SKUs.
   */
  export interface Schema$GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice {
    /**
     * Source SKU where the discount is migrated from. Format: billingAccounts/{billing_account\}/skus/{sku\}
     */
    sourceSku?: string | null;
  }
  /**
   * Encapsulates a price reason which contains background information about the origin of the price.
   */
  export interface Schema$GoogleCloudBillingBillingaccountpricesV1betaPriceReason {
    /**
     * Default price which is the current list price.
     */
    defaultPrice?: Schema$GoogleCloudBillingBillingaccountpricesV1betaDefaultPrice;
    /**
     * Discount off the list price, anchored to the list price as of a fixed time.
     */
    fixedDiscount?: Schema$GoogleCloudBillingBillingaccountpricesV1betaFixedDiscount;
    /**
     * Fixed price applicable during the terms of a contract agreement.
     */
    fixedPrice?: Schema$GoogleCloudBillingBillingaccountpricesV1betaFixedPrice;
    /**
     * Discount off the current list price, not anchored to any list price as of a fixed time.
     */
    floatingDiscount?: Schema$GoogleCloudBillingBillingaccountpricesV1betaFloatingDiscount;
    /**
     * Contract feature that the list price (DefaultPrice) will be used for the price if the current list price drops lower than the custom fixed price. Available to new contracts after March 21, 2022. Applies to all fixed price SKUs in the contract, including FixedPrice, FixedDiscount, MigratedPrice, and MergedPrice.
     */
    listPriceAsCeiling?: Schema$GoogleCloudBillingBillingaccountpricesV1betaListPriceAsCeiling;
    /**
     * Price after merging from multiple sources.
     */
    mergedPrice?: Schema$GoogleCloudBillingBillingaccountpricesV1betaMergedPrice;
    /**
     * Price migrated from other SKUs.
     */
    migratedPrice?: Schema$GoogleCloudBillingBillingaccountpricesV1betaMigratedPrice;
    /**
     * Type of the price reason. It can have values such as 'unspecified', 'default-price', 'fixed-price', 'fixed-discount', 'floating-discount', 'migrated-price', 'merged-price', 'list-price-as-ceiling'.
     */
    type?: string | null;
  }
  /**
   * Encapsulates a `Rate` price. Billing account SKUs with `Rate` price are offered by pricing tiers. The price have 1 or more rate pricing tiers.
   */
  export interface Schema$GoogleCloudBillingBillingaccountpricesV1betaRate {
    /**
     * Aggregation info for tiers such as aggregation level and interval.
     */
    aggregationInfo?: Schema$GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo;
    /**
     * All tiers associated with the `Rate` price.
     */
    tiers?: Schema$GoogleCloudBillingBillingaccountpricesV1betaRateTier[];
    /**
     * Unit info such as name and quantity.
     */
    unitInfo?: Schema$GoogleCloudBillingBillingaccountpricesV1betaUnitInfo;
  }
  /**
   * Encapsulates a rate price tier.
   */
  export interface Schema$GoogleCloudBillingBillingaccountpricesV1betaRateTier {
    /**
     * Negotiated contract price specific for a billing account.
     */
    contractPrice?: Schema$Money;
    /**
     * Percentage of effective discount calculated using the current list price per pricing tier. Formula used: effective_discount_percent = (list_price - contract_price) / list_price × 100 If list_price and contract_price are zero, this field is the same as `discount_percent` of FixedDiscount and FloatingDiscount. If your contract does NOT have the feature LIST_PRICE_AS_CEILING enabled, the effective_discount_percent can be negative if the SKU has a FixedDiscount and the current list price is lower than the list price on the date of the contract agreement. See the `FixedDiscount.fix_time` on when the discount was set. If you have questions regarding pricing per SKU, contact your Account team for more details.
     */
    effectiveDiscountPercent?: Schema$Decimal;
    /**
     * List price of one tier.
     */
    listPrice?: Schema$Money;
    /**
     * Lower bound amount for a tier. Tiers 0-100, 100-200 will be represented with two tiers with `start_amount` 0 and 100.
     */
    startAmount?: Schema$Decimal;
  }
  /**
   * Encapsulates the unit information for a Rate
   */
  export interface Schema$GoogleCloudBillingBillingaccountpricesV1betaUnitInfo {
    /**
     * Shorthand for the unit. Example: GiBy.mo.
     */
    unit?: string | null;
    /**
     * Human-readable description of the unit. Example: gibibyte month.
     */
    unitDescription?: string | null;
    /**
     * Unit quantity for the tier. Example: if the RateTier price is $1 per 1000000 Bytes, then `unit_quantity` is set to 1000000.
     */
    unitQuantity?: Schema$Decimal;
  }
  /**
   * Encapsulates a Google Cloud service visible to a billing account.
   */
  export interface Schema$GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService {
    /**
     * Description of the BillingAccountService. Example: "BigQuery", "Compute Engine".
     */
    displayName?: string | null;
    /**
     * Resource name for the BillingAccountService. Example: "billingAccounts/012345-567890-ABCDEF/services/DA34-426B-A397".
     */
    name?: string | null;
    /**
     * Identifier for the service. It is the string after the collection identifier "services/". Example: "DA34-426B-A397".
     */
    serviceId?: string | null;
  }
  /**
   * Response message for ListBillingAccountServices.
   */
  export interface Schema$GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse {
    /**
     * The returned billing account services.
     */
    billingAccountServices?: Schema$GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService[];
    /**
     * Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Encapsulates a SKU that is part of a billing account SKU group.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku {
    /**
     * BillingAccountService that the BillingAccountSkuGroupSku belongs to.
     */
    billingAccountService?: string | null;
    /**
     * Description of the BillingAccountSkuGroupSku. Example: "A2 Instance Core running in Hong Kong".
     */
    displayName?: string | null;
    /**
     * Geographic metadata that applies to the BillingAccountSkuGroupSku.
     */
    geoTaxonomy?: Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy;
    /**
     * Resource name for the BillingAccountSkuGroupSku. Example: "billingAccounts/012345-567890-ABCDEF/skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301/skus/AA95-CD31-42FE".
     */
    name?: string | null;
    /**
     * List of product categories that apply to the BillingAccountSkuGroupSku.
     */
    productTaxonomy?: Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaProductTaxonomy;
    /**
     * Unique identifier for the SKU. It is the string after the collection identifier "skus/" Example: "AA95-CD31-42FE".
     */
    skuId?: string | null;
  }
  /**
   * Encapsulates geographic metadata, such as regions and multi-regions like `us-east4` or `European Union`.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomy {
    /**
     * Global geographic metadata with no regions.
     */
    globalMetadata?: Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyGlobal;
    /**
     * Multi-regional geographic metadata with 2 or more regions.
     */
    multiRegionalMetadata?: Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyMultiRegional;
    /**
     * Regional geographic metadata with 1 region.
     */
    regionalMetadata?: Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegional;
    /**
     * Type of geographic taxonomy associated with the billing account SKU group SKU.
     */
    type?: string | null;
  }
  /**
   * Encapsulates a global geographic taxonomy.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyGlobal {}
  /**
   * Encapsulates a multi-regional geographic taxonomy.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyMultiRegional {
    /**
     * Google Cloud regions associated with the multi-regional geographic taxonomy.
     */
    regions?: Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegion[];
  }
  /**
   * Encapsulates a Google Cloud region.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegion {
    /**
     * Description of a Google Cloud region. Example: "us-west2".
     */
    region?: string | null;
  }
  /**
   * Encapsulates a regional geographic taxonomy.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegional {
    /**
     * Google Cloud region associated with the regional geographic taxonomy.
     */
    region?: Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaGeoTaxonomyRegion;
  }
  /**
   * Response message for ListBillingAccountSkuGroupSkus.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse {
    /**
     * The returned billing account SKU group SKUs.
     */
    billingAccountSkuGroupSkus?: Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku[];
    /**
     * Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Encapsulates product categories, such as `Serverless`, `Cloud Run`, `TaskQueue`, and others.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaProductTaxonomy {
    /**
     * All product categories that the billing account SKU group SKU belong to.
     */
    taxonomyCategories?: Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaTaxonomyCategory[];
  }
  /**
   * Encapsulates a product category.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaTaxonomyCategory {
    /**
     * Name of the product category.
     */
    category?: string | null;
  }
  /**
   * Encapsulates a stock keeping (SKU) group visible to a billing account. A SKU group represents a collection of SKUs that are related to each other. For example, the `AI Platform APIs` SKU group includes SKUs from the Cloud Dialogflow API, the Cloud Text-to-Speech API, and additional related APIs.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup {
    /**
     * Description of the BillingAccountSkuGroup. Example: "A2 VMs (1 Year CUD)".
     */
    displayName?: string | null;
    /**
     * Resource name for the BillingAccountSkuGroup. Example: "billingAccounts/012345-567890-ABCDEF/skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301".
     */
    name?: string | null;
  }
  /**
   * Response message for ListBillingAccountSkuGroups.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse {
    /**
     * The returned publicly listed billing account SKU groups.
     */
    billingAccountSkuGroups?: Schema$GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup[];
    /**
     * Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Encapsulates a stock keeping unit (SKU) visible to a billing account. A SKU distinctly identifies a resource that you can purchase. For a list of available SKUs, see [SKUs](https://cloud.google.com/skus).
   */
  export interface Schema$GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku {
    /**
     * BillingAccountService that the BillingAccountSku belongs to.
     */
    billingAccountService?: string | null;
    /**
     * Description of the BillingAccountSku. Example: "A2 Instance Core running in Hong Kong".
     */
    displayName?: string | null;
    /**
     * Geographic metadata that applies to the BillingAccountSku.
     */
    geoTaxonomy?: Schema$GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomy;
    /**
     * Resource name for the BillingAccountSku. Example: "billingAccounts/012345-567890-ABCDEF/skus/AA95-CD31-42FE".
     */
    name?: string | null;
    /**
     * List of product categories that apply to the BillingAccountSku.
     */
    productTaxonomy?: Schema$GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy;
    /**
     * Unique identifier for the SKU. It is the string after the collection identifier "skus/" Example: "AA95-CD31-42FE".
     */
    skuId?: string | null;
  }
  /**
   * Encapsulates geographic metadata, such as regions and multi-regions like `us-east4` or `European Union`.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomy {
    /**
     * Global geographic metadata with no regions.
     */
    globalMetadata?: Schema$GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyGlobal;
    /**
     * Multi-regional geographic metadata with 2 or more regions.
     */
    multiRegionalMetadata?: Schema$GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyMultiRegional;
    /**
     * Regional geographic metadata with 1 region.
     */
    regionalMetadata?: Schema$GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegional;
    /**
     * Type of geographic taxonomy associated with the billing account SKU.
     */
    type?: string | null;
  }
  /**
   * Encapsulates a global geographic taxonomy.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyGlobal {}
  /**
   * Encapsulates a multi-regional geographic taxonomy.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyMultiRegional {
    /**
     * Google Cloud regions associated with the multi-regional geographic taxonomy.
     */
    regions?: Schema$GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegion[];
  }
  /**
   * Encapsulates a Google Cloud region.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegion {
    /**
     * Description of a Google Cloud region. Example: "us-west2".
     */
    region?: string | null;
  }
  /**
   * Encapsulates a regional geographic taxonomy.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegional {
    /**
     * Google Cloud region associated with the regional geographic taxonomy.
     */
    region?: Schema$GoogleCloudBillingBillingaccountskusV1betaGeoTaxonomyRegion;
  }
  /**
   * Response message for ListBillingAccountSkus.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse {
    /**
     * The returned billing account SKUs.
     */
    billingAccountSkus?: Schema$GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku[];
    /**
     * Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
  }
  /**
   * Encapsulates product categories, such as `Serverless`, `Cloud Run`, `TaskQueue`, and others.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskusV1betaProductTaxonomy {
    /**
     * All product categories that the billing account SKU belong to.
     */
    taxonomyCategories?: Schema$GoogleCloudBillingBillingaccountskusV1betaTaxonomyCategory[];
  }
  /**
   * Encapsulates a product category.
   */
  export interface Schema$GoogleCloudBillingBillingaccountskusV1betaTaxonomyCategory {
    /**
     * Name of the product category.
     */
    category?: string | null;
  }
  /**
   * Encapsulates the aggregation information such as aggregation level and interval for a price.
   */
  export interface Schema$GoogleCloudBillingPricesV1betaAggregationInfo {
    /**
     * Interval at which usage is aggregated to compute cost. Example: "MONTHLY" interval indicates that usage is aggregated every month.
     */
    interval?: string | null;
    /**
     * Level at which usage is aggregated to compute cost. Example: "ACCOUNT" level indicates that usage is aggregated across all projects in a single account.
     */
    level?: string | null;
  }
  /**
   * Response message for ListPrices.
   */
  export interface Schema$GoogleCloudBillingPricesV1betaListPricesResponse {
    /**
     * Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The returned publicly listed prices.
     */
    prices?: Schema$GoogleCloudBillingPricesV1betaPrice[];
  }
  /**
   * Encapsulates the latest price for a SKU.
   */
  export interface Schema$GoogleCloudBillingPricesV1betaPrice {
    /**
     * ISO-4217 currency code for the price.
     */
    currencyCode?: string | null;
    /**
     * Resource name for the latest price.
     */
    name?: string | null;
    /**
     * Rate price metadata. SKUs with `Rate` price are offered by pricing tiers. The price can have 1 or more rate pricing tiers.
     */
    rate?: Schema$GoogleCloudBillingPricesV1betaRate;
    /**
     * Type of the price. It can have values: ["unspecified", "rate"].
     */
    valueType?: string | null;
  }
  /**
   * Encapsulates a `Rate` price. SKUs with `Rate` price are offered by pricing tiers. The price have 1 or more rate pricing tiers.
   */
  export interface Schema$GoogleCloudBillingPricesV1betaRate {
    /**
     * Aggregation info for tiers such as aggregation level and interval.
     */
    aggregationInfo?: Schema$GoogleCloudBillingPricesV1betaAggregationInfo;
    /**
     * All tiers associated with the `Rate` price.
     */
    tiers?: Schema$GoogleCloudBillingPricesV1betaRateTier[];
    /**
     * Unit info such as name and quantity.
     */
    unitInfo?: Schema$GoogleCloudBillingPricesV1betaUnitInfo;
  }
  /**
   * Encapsulates a rate price tier.
   */
  export interface Schema$GoogleCloudBillingPricesV1betaRateTier {
    /**
     * List price of one tier.
     */
    listPrice?: Schema$Money;
    /**
     * Lower bound amount for a tier. Tiers 0-100, 100-200 will be represented with two tiers with `start_amount` 0 and 100.
     */
    startAmount?: Schema$Decimal;
  }
  /**
   * Encapsulates the unit information for a Rate
   */
  export interface Schema$GoogleCloudBillingPricesV1betaUnitInfo {
    /**
     * Shorthand for the unit. Example: GiBy.mo.
     */
    unit?: string | null;
    /**
     * Human-readable description of the unit. Example: gibibyte month.
     */
    unitDescription?: string | null;
    /**
     * Unit quantity for the tier. Example: if the RateTier price is $1 per 1000000 Bytes, then `unit_quantity` is set to 1000000.
     */
    unitQuantity?: Schema$Decimal;
  }
  /**
   * Encapsulates geographic metadata, such as regions and multi-regions like `us-east4` or `European Union`.
   */
  export interface Schema$GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy {
    /**
     * Global geographic metadata with no regions.
     */
    globalMetadata?: Schema$GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyGlobal;
    /**
     * Multi-regional geographic metadata with 2 or more regions.
     */
    multiRegionalMetadata?: Schema$GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyMultiRegional;
    /**
     * Regional geographic metadata with 1 region.
     */
    regionalMetadata?: Schema$GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegional;
    /**
     * Type of geographic taxonomy associated with the SKU group SKU.
     */
    type?: string | null;
  }
  /**
   * Encapsulates a global geographic taxonomy.
   */
  export interface Schema$GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyGlobal {}
  /**
   * Encapsulates a multi-regional geographic taxonomy.
   */
  export interface Schema$GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyMultiRegional {
    /**
     * Google Cloud regions associated with the multi-regional geographic taxonomy.
     */
    regions?: Schema$GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegion[];
  }
  /**
   * Encapsulates a Google Cloud region.
   */
  export interface Schema$GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegion {
    /**
     * Description of a Google Cloud region. Example: "us-west2".
     */
    region?: string | null;
  }
  /**
   * Encapsulates a regional geographic taxonomy.
   */
  export interface Schema$GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegional {
    /**
     * Google Cloud region associated with the regional geographic taxonomy.
     */
    region?: Schema$GoogleCloudBillingSkugroupskusV1betaGeoTaxonomyRegion;
  }
  /**
   * Response message for ListSkuGroupSkus.
   */
  export interface Schema$GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse {
    /**
     * Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The returned SKU group SKUs.
     */
    skuGroupSkus?: Schema$GoogleCloudBillingSkugroupskusV1betaSkuGroupSku[];
  }
  /**
   * Encapsulates product categories, such as `Serverless`, `Cloud Run`, `TaskQueue`, and others.
   */
  export interface Schema$GoogleCloudBillingSkugroupskusV1betaProductTaxonomy {
    /**
     * All product categories that the SKU group SKU belongs to.
     */
    taxonomyCategories?: Schema$GoogleCloudBillingSkugroupskusV1betaTaxonomyCategory[];
  }
  /**
   * Encapsulates a publicly listed stock keeping unit (SKU) that is part of a publicly listed SKU group. A SKU group represents a collection of SKUs that are related to each other. For example, the `AI Platform APIs` SKU group includes SKUs from the Cloud Dialogflow API, the Cloud Text-to-Speech API, and additional related APIs.
   */
  export interface Schema$GoogleCloudBillingSkugroupskusV1betaSkuGroupSku {
    /**
     * Description of the SkuGroupSku. Example: "A2 Instance Core running in Hong Kong".
     */
    displayName?: string | null;
    /**
     * Geographic metadata that applies to the SkuGroupSku.
     */
    geoTaxonomy?: Schema$GoogleCloudBillingSkugroupskusV1betaGeoTaxonomy;
    /**
     * Resource name for the SkuGroupSku. Example: "skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301/skus/AA95-CD31-42FE".
     */
    name?: string | null;
    /**
     * List of product categories that apply to the SkuGroupSku.
     */
    productTaxonomy?: Schema$GoogleCloudBillingSkugroupskusV1betaProductTaxonomy;
    /**
     * Service that the SkuGroupSku belongs to.
     */
    service?: string | null;
    /**
     * Unique identifier for the SKU. It is the string after the collection identifier "skus/" Example: "AA95-CD31-42FE".
     */
    skuId?: string | null;
  }
  /**
   * Encapsulates a product category.
   */
  export interface Schema$GoogleCloudBillingSkugroupskusV1betaTaxonomyCategory {
    /**
     * Name of the product category.
     */
    category?: string | null;
  }
  /**
   * Response message for ListSkuGroups.
   */
  export interface Schema$GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse {
    /**
     * Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The returned publicly listed SKU groups.
     */
    skuGroups?: Schema$GoogleCloudBillingSkugroupsV1betaSkuGroup[];
  }
  /**
   * Encapsulates a publicly listed stock keeping unit (SKU) group. A SKU group represents a collection of SKUs that are related to each other. For example, the `AI Platform APIs` SKU group includes SKUs from the Cloud Dialogflow API, the Cloud Text-to-Speech API, and additional related APIs.
   */
  export interface Schema$GoogleCloudBillingSkugroupsV1betaSkuGroup {
    /**
     * Description of the SKU group. Example: "A2 VMs (1 Year CUD)".
     */
    displayName?: string | null;
    /**
     * Resource name for the SKU group. Example: "skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301".
     */
    name?: string | null;
  }
  /**
   * e.g. insight: title: "Cost Increase (The Explanation)" description: "Your cost increase was driven by Vertex AI Online Prediction in us-central1..." severity: INFO
   */
  export interface Schema$Insight {
    /**
     * Output only. The description of the insight.
     */
    description?: string | null;
    /**
     * Output only. The severity of the insight, used for UI rendering (e.g., color-coding).
     */
    severity?: string | null;
    /**
     * Output only. The title of the insight.
     */
    title?: string | null;
  }
  /**
   * A link to interoperable tools (e.g., pre-filtered Cost Reports, BQE queries).
   */
  export interface Schema$InteropLink {
    /**
     * Output only. The label of the link, suitable for UI rendering.
     */
    label?: string | null;
    /**
     * Output only. The type of the interop link, e.g., "COST_REPORT", "BQE_QUERY", etc.
     */
    linkType?: string | null;
    /**
     * Output only. The URL of the link.
     */
    url?: string | null;
  }
  /**
   * An unordered mapping from key to value, represented as a collection of map entries.
   */
  export interface Schema$Map {
    /**
     * Represents the map entries in the map.
     */
    entry?: Schema$MapEntry[];
  }
  /**
   * A single entry in a Map, representing the mapping between `key` and `value`.
   */
  export interface Schema$MapEntry {
    /**
     * Represents the serialized map key for the entry.
     */
    key?: Schema$ValueProto;
    /**
     * Represents the serialized map value of the entry.
     */
    value?: Schema$ValueProto;
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$Money {
    /**
     * The three-letter currency code defined in ISO 4217.
     */
    currencyCode?: string | null;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number | null;
    /**
     * The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     */
    units?: string | null;
  }
  /**
   * A range of values, bounded by the values 'start' (inclusive) and 'end' (exclusive). A range has an element type, and values must be of this element type. A range is contiguous, ie it contains all values of the given element type starting at 'start' and ending before 'end'. A "null" value on start or end represents an unbounded start or end value respectively. Start and end values must always be present.
   */
  export interface Schema$Range {
    /**
     * Represents the end of the range.
     */
    end?: Schema$ValueProto;
    /**
     * Represents the start of the range.
     */
    start?: Schema$ValueProto;
  }
  /**
   * Encapsulates details about why a request was rejected.
   */
  export interface Schema$Rejection {
    /**
     * Output only. A user-facing message explaining the rejection.
     */
    displayMessage?: string | null;
    /**
     * Output only. The reason for the rejection.
     */
    reason?: string | null;
  }
  /**
   * Represents a row in the query result.
   */
  export interface Schema$Row {
    /**
     * Values for a row in the column order.
     */
    values?: Schema$ValueProto[];
  }
  /**
   * A collection of fields. The count, order, and type of the fields is determined by the type associated with this value.
   */
  export interface Schema$Struct {
    /**
     * The fields in the struct
     */
    field?: Schema$ValueProto[];
  }
  /**
   * A suggested chart for the data set, used for UI rendering.
   */
  export interface Schema$SuggestedChart {
    /**
     * The title of the chart.
     */
    chartTitle?: string | null;
    /**
     * The type of the chart.
     */
    chartType?: string | null;
    /**
     * The field used for the series (e.g., color-coding). Optional, but recommended for time-series data.
     */
    seriesField?: string | null;
    /**
     * The field used for the x-axis.
     */
    xAxisField?: string | null;
    /**
     * The label of the x-axis.
     */
    xAxisLabel?: string | null;
    /**
     * The field used for the y-axis.
     */
    yAxisField?: string | null;
    /**
     * The label of the y-axis.
     */
    yAxisLabel?: string | null;
  }
  /**
   * A suggested follow-up query for the user.
   */
  export interface Schema$SuggestedQuery {
    /**
     * The natural language query.
     */
    query?: string | null;
  }
  /**
   * Additional context for personalization (e.g., user persona, role).
   */
  export interface Schema$UserContext {
    /**
     * Optional. The user's persona (e.g., FinOps Manager, Developer).
     */
    persona?: string | null;
    /**
     * Optional. The user's role (e.g., Billing Admin, Project Owner, etc.).
     */
    role?: string | null;
  }
  /**
   * This is a copy of storage/googlesql/public/value.proto. ValueProto represents the serialized form of the googlesql::Value. The intention is to support multiple languages including Java and C++, so we must be sensitive to the distinction between Java Strings and byte arrays or ByteStrings. We also want to support use-cases which do not want to serialize a copy of the GoogleSQL type for every instance (which might be very repetitive). Therefore, unlike googlesql::Value, ValueProto does not carry full type information with every instance, and can only be fully interpreted with an associated TypeProto.
   */
  export interface Schema$ValueProto {
    /**
     * An array of value
     */
    arrayValue?: Schema$Array;
    /**
     * Encoded bignumeric value. For the encoding format see documentation for BigNumericValue::SerializeAsProtoBytes().
     */
    bignumericValue?: string | null;
    /**
     * Primitive for bool.
     */
    boolValue?: boolean | null;
    /**
     * Primitive for bytes.
     */
    bytesValue?: string | null;
    /**
     * primitive for datetime
     */
    datetimeValue?: Schema$Datetime;
    /**
     * Primitive for date.
     */
    dateValue?: number | null;
    /**
     * Primitive for double.
     */
    doubleValue?: number | null;
    /**
     * Tag 11 was used for specifying micros timestamps as int64, now obsolete.
     */
    enumValue?: number | null;
    /**
     * Primitive for float.
     */
    floatValue?: number | null;
    /**
     * Geography encoded using ::stlib::STGeographyEncoder
     */
    geographyValue?: string | null;
    /**
     * Primitive value for int32.
     */
    int32Value?: number | null;
    /**
     * Primitive for int64.
     */
    int64Value?: string | null;
    /**
     * Encoded interval value. For the encoding format see documentation for IntervalValue::SerializeAsBytes().
     */
    intervalValue?: string | null;
    /**
     * Tag 22 was used for json value as bytes, now obsolete. Json value represented as a string document.
     */
    jsonValue?: string | null;
    /**
     * Encoded map value. See go/googlesql_map.
     */
    mapValue?: Schema$Map;
    /**
     * Encoded numeric value. For the encoding format see documentation for NumericValue::SerializeAsProtoBytes().
     */
    numericValue?: string | null;
    /**
     * Stores a serialized protocol message.
     */
    protoValue?: string | null;
    /**
     * Encoded range value. See go/googlesql_range.
     */
    rangeValue?: Schema$Range;
    /**
     * Primitive for string.
     */
    stringValue?: string | null;
    /**
     * A struct of values
     */
    structValue?: Schema$Struct;
    /**
     * Encoded timestamp_pico value. For the encoding format see documentation for googlesql::TimestampPico::SerializeAsBytes().
     */
    timestampPicoValue?: string | null;
    /**
     * primitive for timestamp
     */
    timestampValue?: string | null;
    /**
     * Bit field encoding of hour/minute/second/nanos. See TimeValue class for details.
     */
    timeValue?: string | null;
    /**
     * Encoded tokenlist value. copybara:strip_begin(internal-comment) See //search/tokens:token_list. copybara:strip_end
     */
    tokenlistValue?: string | null;
    /**
     * Primitive for uint32.
     */
    uint32Value?: number | null;
    /**
     * Primitive for uint64.
     */
    uint64Value?: string | null;
    /**
     * Encoded uuid value. For the encoding format see documentation for UuidValue::SerializeAsBytes().
     */
    uuidValue?: string | null;
    /**
     * User code that switches on this oneoff enum must have a default case so builds won't break when new fields are added.
     */
    ValueProtoSwitchMustHaveADefault?: boolean | null;
  }

  export class Resource$Billingaccounts {
    context: APIRequestContext;
    services: Resource$Billingaccounts$Services;
    skuGroups: Resource$Billingaccounts$Skugroups;
    skus: Resource$Billingaccounts$Skus;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.services = new Resource$Billingaccounts$Services(this.context);
      this.skuGroups = new Resource$Billingaccounts$Skugroups(this.context);
      this.skus = new Resource$Billingaccounts$Skus(this.context);
    }
  }

  export class Resource$Billingaccounts$Services {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a Google Cloud service visible to a billing account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.billingAccounts.services.get({
     *     // Required. The name of the billing account service to retrieve. Format: billingAccounts/{billing_account\}/services/{service\}
     *     name: 'billingAccounts/my-billingAccount/services/my-service',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "serviceId": "my_serviceId"
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
    get(
      params: Params$Resource$Billingaccounts$Services$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Billingaccounts$Services$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService>
    >;
    get(
      params: Params$Resource$Billingaccounts$Services$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Services$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Services$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Services$Get
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Services$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Services$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService>(
          parameters
        );
      }
    }

    /**
     * Lists services visible to a billing account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.billingAccounts.services.list({
     *     // Maximum number of billing account service to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     *     pageSize: 'placeholder-value',
     *     // Page token received from a previous ListBillingAccountServices call to retrieve the next page of results. If this field is empty, the first page is returned.
     *     pageToken: 'placeholder-value',
     *     // Required. The billing account to list billing account service from. Format: billingAccounts/{billing_account\}
     *     parent: 'billingAccounts/my-billingAccount',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "billingAccountServices": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Billingaccounts$Services$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Billingaccounts$Services$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse>
    >;
    list(
      params: Params$Resource$Billingaccounts$Services$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Services$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Services$List,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Services$List
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Services$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Services$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/services').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Services$Get extends StandardParameters {
    /**
     * Required. The name of the billing account service to retrieve. Format: billingAccounts/{billing_account\}/services/{service\}
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Services$List extends StandardParameters {
    /**
     * Maximum number of billing account service to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     */
    pageSize?: number;
    /**
     * Page token received from a previous ListBillingAccountServices call to retrieve the next page of results. If this field is empty, the first page is returned.
     */
    pageToken?: string;
    /**
     * Required. The billing account to list billing account service from. Format: billingAccounts/{billing_account\}
     */
    parent?: string;
  }

  export class Resource$Billingaccounts$Skugroups {
    context: APIRequestContext;
    skus: Resource$Billingaccounts$Skugroups$Skus;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.skus = new Resource$Billingaccounts$Skugroups$Skus(this.context);
    }

    /**
     * Gets a SKU group visible to a billing account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.billingAccounts.skuGroups.get({
     *     // Required. The name of the BillingAccountSkuGroup to retrieve. Format: billingAccounts/{billing_account\}/skuGroups/{sku_group\}
     *     name: 'billingAccounts/my-billingAccount/skuGroups/my-skuGroup',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name"
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
    get(
      params: Params$Resource$Billingaccounts$Skugroups$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Billingaccounts$Skugroups$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup>
    >;
    get(
      params: Params$Resource$Billingaccounts$Skugroups$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Skugroups$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Skugroups$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Skugroups$Get
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Skugroups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Skugroups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup>(
          parameters
        );
      }
    }

    /**
     * Lists SKU groups visible to a billing account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.billingAccounts.skuGroups.list({
     *     // Maximum number of billing account SKU groups to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     *     pageSize: 'placeholder-value',
     *     // Page token received from a previous ListBillingAccountSkuGroups call to retrieve the next page of results. If this field is empty, the first page is returned.
     *     pageToken: 'placeholder-value',
     *     // Required. The billing account to list billing account SKU groups from. Format: billingAccounts/{billing_account\}
     *     parent: 'billingAccounts/my-billingAccount',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "billingAccountSkuGroups": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Billingaccounts$Skugroups$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Billingaccounts$Skugroups$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse>
    >;
    list(
      params: Params$Resource$Billingaccounts$Skugroups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Skugroups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Skugroups$List,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Skugroups$List
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Skugroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Skugroups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/skuGroups').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Skugroups$Get extends StandardParameters {
    /**
     * Required. The name of the BillingAccountSkuGroup to retrieve. Format: billingAccounts/{billing_account\}/skuGroups/{sku_group\}
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Skugroups$List extends StandardParameters {
    /**
     * Maximum number of billing account SKU groups to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     */
    pageSize?: number;
    /**
     * Page token received from a previous ListBillingAccountSkuGroups call to retrieve the next page of results. If this field is empty, the first page is returned.
     */
    pageToken?: string;
    /**
     * Required. The billing account to list billing account SKU groups from. Format: billingAccounts/{billing_account\}
     */
    parent?: string;
  }

  export class Resource$Billingaccounts$Skugroups$Skus {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a SKU that is part of a billing account SKU group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.billingAccounts.skuGroups.skus.get({
     *     // Required. The name of the billing account SKU group SKU to retrieve. Format: billingAccounts/{billing_account\}/skuGroups/{sku_group\}/skus/{sku\}
     *     name: 'billingAccounts/my-billingAccount/skuGroups/my-skuGroup/skus/my-sku',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "billingAccountService": "my_billingAccountService",
     *   //   "displayName": "my_displayName",
     *   //   "geoTaxonomy": {},
     *   //   "name": "my_name",
     *   //   "productTaxonomy": {},
     *   //   "skuId": "my_skuId"
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
    get(
      params: Params$Resource$Billingaccounts$Skugroups$Skus$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Billingaccounts$Skugroups$Skus$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku>
    >;
    get(
      params: Params$Resource$Billingaccounts$Skugroups$Skus$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Skugroups$Skus$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Skugroups$Skus$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Skugroups$Skus$Get
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Skugroups$Skus$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Skugroups$Skus$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku>(
          parameters
        );
      }
    }

    /**
     * Lists SKUs that is part of billing account SKU groups.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.billingAccounts.skuGroups.skus.list({
     *     // Maximum number of billing account SKU group SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     *     pageSize: 'placeholder-value',
     *     // Page token received from a previous ListBillingAccountSkuGroupSkus call to retrieve the next page of results. If this field is empty, the first page is returned.
     *     pageToken: 'placeholder-value',
     *     // Required. The billing account SKU group to list billing account SKU group SKUs from. Format: billingAccounts/{billing_account\}/skuGroups/{sku_group\}
     *     parent: 'billingAccounts/my-billingAccount/skuGroups/my-skuGroup',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "billingAccountSkuGroupSkus": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Billingaccounts$Skugroups$Skus$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Billingaccounts$Skugroups$Skus$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse>
    >;
    list(
      params: Params$Resource$Billingaccounts$Skugroups$Skus$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Skugroups$Skus$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Skugroups$Skus$List,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Skugroups$Skus$List
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Skugroups$Skus$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Skugroups$Skus$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/skus').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Skugroups$Skus$Get extends StandardParameters {
    /**
     * Required. The name of the billing account SKU group SKU to retrieve. Format: billingAccounts/{billing_account\}/skuGroups/{sku_group\}/skus/{sku\}
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Skugroups$Skus$List extends StandardParameters {
    /**
     * Maximum number of billing account SKU group SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     */
    pageSize?: number;
    /**
     * Page token received from a previous ListBillingAccountSkuGroupSkus call to retrieve the next page of results. If this field is empty, the first page is returned.
     */
    pageToken?: string;
    /**
     * Required. The billing account SKU group to list billing account SKU group SKUs from. Format: billingAccounts/{billing_account\}/skuGroups/{sku_group\}
     */
    parent?: string;
  }

  export class Resource$Billingaccounts$Skus {
    context: APIRequestContext;
    price: Resource$Billingaccounts$Skus$Price;
    prices: Resource$Billingaccounts$Skus$Prices;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.price = new Resource$Billingaccounts$Skus$Price(this.context);
      this.prices = new Resource$Billingaccounts$Skus$Prices(this.context);
    }

    /**
     * Gets a SKU visible to a billing account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.billingAccounts.skus.get({
     *     // Required. The name of the billing account SKU to retrieve. Format: billingAccounts/{billing_account\}/skus/{sku\}
     *     name: 'billingAccounts/my-billingAccount/skus/my-sku',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "billingAccountService": "my_billingAccountService",
     *   //   "displayName": "my_displayName",
     *   //   "geoTaxonomy": {},
     *   //   "name": "my_name",
     *   //   "productTaxonomy": {},
     *   //   "skuId": "my_skuId"
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
    get(
      params: Params$Resource$Billingaccounts$Skus$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Billingaccounts$Skus$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku>
    >;
    get(
      params: Params$Resource$Billingaccounts$Skus$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Skus$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Skus$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Skus$Get
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Skus$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Skus$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku>(
          parameters
        );
      }
    }

    /**
     * Lists SKUs visible to a billing account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.billingAccounts.skus.list({
     *     // Options for how to filter the billing account SKUs. Currently, only filter on `billing_account_service` is supported. Only !=, = operators are supported. Examples: - billing_account_service = "billingAccounts/012345-567890-ABCDEF/services/DA34-426B-A397"
     *     filter: 'placeholder-value',
     *     // Maximum number of billing account SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     *     pageSize: 'placeholder-value',
     *     // Page token received from a previous ListBillingAccountSkus call to retrieve the next page of results. If this field is empty, the first page is returned.
     *     pageToken: 'placeholder-value',
     *     // Required. The billing account to list billing account SKU from. Format: billingAccounts/{billing_account\}
     *     parent: 'billingAccounts/my-billingAccount',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "billingAccountSkus": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Billingaccounts$Skus$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Billingaccounts$Skus$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse>
    >;
    list(
      params: Params$Resource$Billingaccounts$Skus$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Skus$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Skus$List,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Skus$List
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Skus$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Skus$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/skus').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Skus$Get extends StandardParameters {
    /**
     * Required. The name of the billing account SKU to retrieve. Format: billingAccounts/{billing_account\}/skus/{sku\}
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Skus$List extends StandardParameters {
    /**
     * Options for how to filter the billing account SKUs. Currently, only filter on `billing_account_service` is supported. Only !=, = operators are supported. Examples: - billing_account_service = "billingAccounts/012345-567890-ABCDEF/services/DA34-426B-A397"
     */
    filter?: string;
    /**
     * Maximum number of billing account SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     */
    pageSize?: number;
    /**
     * Page token received from a previous ListBillingAccountSkus call to retrieve the next page of results. If this field is empty, the first page is returned.
     */
    pageToken?: string;
    /**
     * Required. The billing account to list billing account SKU from. Format: billingAccounts/{billing_account\}
     */
    parent?: string;
  }

  export class Resource$Billingaccounts$Skus$Price {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest price for SKUs available to your Cloud Billing account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.billingAccounts.skus.price.get({
     *     // Optional. ISO-4217 currency code for the price. If not specified, the currency of the billing account is used.
     *     currencyCode: 'placeholder-value',
     *     // Required. Name of the billing account price to retrieve. Format: billingAccounts/{billing_account\}/skus/{sku\}/price
     *     name: 'billingAccounts/my-billingAccount/skus/my-sku/price',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "currencyCode": "my_currencyCode",
     *   //   "name": "my_name",
     *   //   "priceReason": {},
     *   //   "rate": {},
     *   //   "valueType": "my_valueType"
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
    get(
      params: Params$Resource$Billingaccounts$Skus$Price$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Billingaccounts$Skus$Price$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice>
    >;
    get(
      params: Params$Resource$Billingaccounts$Skus$Price$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Skus$Price$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Skus$Price$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Skus$Price$Get
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Skus$Price$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Skus$Price$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Skus$Price$Get extends StandardParameters {
    /**
     * Optional. ISO-4217 currency code for the price. If not specified, the currency of the billing account is used.
     */
    currencyCode?: string;
    /**
     * Required. Name of the billing account price to retrieve. Format: billingAccounts/{billing_account\}/skus/{sku\}/price
     */
    name?: string;
  }

  export class Resource$Billingaccounts$Skus$Prices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the latest prices for SKUs available to your Cloud Billing account.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.billingAccounts.skus.prices.list({
     *     // Optional. ISO-4217 currency code for the price. If not specified, currency of billing account will be used.
     *     currencyCode: 'placeholder-value',
     *     // Optional. Maximum number of billing account price to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token received from a previous ListBillingAccountPrices call to retrieve the next page of results. If this field is empty, the first page is returned.
     *     pageToken: 'placeholder-value',
     *     // Required. To list all Billing Account SKUs, use `-` as the SKU ID. Format: `billingAccounts/{billing_account\}/skus/-` Note: Specifying an actual SKU resource id will return a collection of one Billing Account Price.
     *     parent: 'billingAccounts/my-billingAccount/skus/my-sku',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "billingAccountPrices": [],
     *   //   "nextPageToken": "my_nextPageToken"
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
    list(
      params: Params$Resource$Billingaccounts$Skus$Prices$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Billingaccounts$Skus$Prices$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse>
    >;
    list(
      params: Params$Resource$Billingaccounts$Skus$Prices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Skus$Prices$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Skus$Prices$List,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Skus$Prices$List
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Skus$Prices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Skus$Prices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/prices').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Skus$Prices$List extends StandardParameters {
    /**
     * Optional. ISO-4217 currency code for the price. If not specified, currency of billing account will be used.
     */
    currencyCode?: string;
    /**
     * Optional. Maximum number of billing account price to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListBillingAccountPrices call to retrieve the next page of results. If this field is empty, the first page is returned.
     */
    pageToken?: string;
    /**
     * Required. To list all Billing Account SKUs, use `-` as the SKU ID. Format: `billingAccounts/{billing_account\}/skus/-` Note: Specifying an actual SKU resource id will return a collection of one Billing Account Price.
     */
    parent?: string;
  }

  export class Resource$Skugroups {
    context: APIRequestContext;
    skus: Resource$Skugroups$Skus;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.skus = new Resource$Skugroups$Skus(this.context);
    }

    /**
     * Gets a publicly listed SKU group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.skuGroups.get({
     *     // Required. The name of the SKU group to retrieve. Format: skuGroups/{sku_group\}
     *     name: 'skuGroups/my-skuGroup',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name"
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
    get(
      params: Params$Resource$Skugroups$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Skugroups$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingSkugroupsV1betaSkuGroup>
    >;
    get(
      params: Params$Resource$Skugroups$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Skugroups$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingSkugroupsV1betaSkuGroup>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingSkugroupsV1betaSkuGroup>
    ): void;
    get(
      params: Params$Resource$Skugroups$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingSkugroupsV1betaSkuGroup>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingSkugroupsV1betaSkuGroup>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Skugroups$Get
        | BodyResponseCallback<Schema$GoogleCloudBillingSkugroupsV1betaSkuGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingSkugroupsV1betaSkuGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingSkugroupsV1betaSkuGroup>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingSkugroupsV1betaSkuGroup>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Skugroups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Skugroups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBillingSkugroupsV1betaSkuGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingSkugroupsV1betaSkuGroup>(
          parameters
        );
      }
    }

    /**
     * Lists all publicly listed SKU groups.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.skuGroups.list({
     *     // Maximum number of SKU groups to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     *     pageSize: 'placeholder-value',
     *     // Page token received from a previous ListSkuGroups call to retrieve the next page of results. If this field is empty, the first page is returned.
     *     pageToken: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "skuGroups": []
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
    list(
      params: Params$Resource$Skugroups$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Skugroups$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse>
    >;
    list(
      params: Params$Resource$Skugroups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Skugroups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Skugroups$List,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Skugroups$List
        | BodyResponseCallback<Schema$GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Skugroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Skugroups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/skuGroups').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Skugroups$Get extends StandardParameters {
    /**
     * Required. The name of the SKU group to retrieve. Format: skuGroups/{sku_group\}
     */
    name?: string;
  }
  export interface Params$Resource$Skugroups$List extends StandardParameters {
    /**
     * Maximum number of SKU groups to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     */
    pageSize?: number;
    /**
     * Page token received from a previous ListSkuGroups call to retrieve the next page of results. If this field is empty, the first page is returned.
     */
    pageToken?: string;
  }

  export class Resource$Skugroups$Skus {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a publicly listed SKU that is part of a publicly listed SKU group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.skuGroups.skus.get({
     *     // Required. The name of the SKU group SKU to retrieve. Format: skuGroups/{sku_group\}/skus/{sku\}
     *     name: 'skuGroups/my-skuGroup/skus/my-sku',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "displayName": "my_displayName",
     *   //   "geoTaxonomy": {},
     *   //   "name": "my_name",
     *   //   "productTaxonomy": {},
     *   //   "service": "my_service",
     *   //   "skuId": "my_skuId"
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
    get(
      params: Params$Resource$Skugroups$Skus$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Skugroups$Skus$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingSkugroupskusV1betaSkuGroupSku>
    >;
    get(
      params: Params$Resource$Skugroups$Skus$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Skugroups$Skus$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingSkugroupskusV1betaSkuGroupSku>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingSkugroupskusV1betaSkuGroupSku>
    ): void;
    get(
      params: Params$Resource$Skugroups$Skus$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingSkugroupskusV1betaSkuGroupSku>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingSkugroupskusV1betaSkuGroupSku>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Skugroups$Skus$Get
        | BodyResponseCallback<Schema$GoogleCloudBillingSkugroupskusV1betaSkuGroupSku>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingSkugroupskusV1betaSkuGroupSku>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingSkugroupskusV1betaSkuGroupSku>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingSkugroupskusV1betaSkuGroupSku>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Skugroups$Skus$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Skugroups$Skus$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBillingSkugroupskusV1betaSkuGroupSku>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingSkugroupskusV1betaSkuGroupSku>(
          parameters
        );
      }
    }

    /**
     * Lists all publicly listed SKUs contained by a publicly listed SKU group.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.skuGroups.skus.list({
     *     // Maximum number of SKU group SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     *     pageSize: 'placeholder-value',
     *     // Page token received from a previous ListSkuGroupSkus call to retrieve the next page of results. If this field is empty, the first page is returned.
     *     pageToken: 'placeholder-value',
     *     // Required. The SkuGroup to list SkuGroupSku from. Format: skuGroups/{sku_group\}
     *     parent: 'skuGroups/my-skuGroup',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "skuGroupSkus": []
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
    list(
      params: Params$Resource$Skugroups$Skus$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Skugroups$Skus$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse>
    >;
    list(
      params: Params$Resource$Skugroups$Skus$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Skugroups$Skus$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse>
    ): void;
    list(
      params: Params$Resource$Skugroups$Skus$List,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Skugroups$Skus$List
        | BodyResponseCallback<Schema$GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Skugroups$Skus$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Skugroups$Skus$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/skus').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Skugroups$Skus$Get extends StandardParameters {
    /**
     * Required. The name of the SKU group SKU to retrieve. Format: skuGroups/{sku_group\}/skus/{sku\}
     */
    name?: string;
  }
  export interface Params$Resource$Skugroups$Skus$List extends StandardParameters {
    /**
     * Maximum number of SKU group SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     */
    pageSize?: number;
    /**
     * Page token received from a previous ListSkuGroupSkus call to retrieve the next page of results. If this field is empty, the first page is returned.
     */
    pageToken?: string;
    /**
     * Required. The SkuGroup to list SkuGroupSku from. Format: skuGroups/{sku_group\}
     */
    parent?: string;
  }

  export class Resource$Skus {
    context: APIRequestContext;
    price: Resource$Skus$Price;
    prices: Resource$Skus$Prices;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.price = new Resource$Skus$Price(this.context);
      this.prices = new Resource$Skus$Prices(this.context);
    }
  }

  export class Resource$Skus$Price {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets the latest price for the given SKU.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.skus.price.get({
     *     // Optional. ISO-4217 currency code for the price. If not specified, USD will be used.
     *     currencyCode: 'placeholder-value',
     *     // Required. Name of the latest price to retrieve. Format: skus/{sku\}/price
     *     name: 'skus/my-sku/price',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "currencyCode": "my_currencyCode",
     *   //   "name": "my_name",
     *   //   "rate": {},
     *   //   "valueType": "my_valueType"
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
    get(
      params: Params$Resource$Skus$Price$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Skus$Price$Get,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingPricesV1betaPrice>
    >;
    get(
      params: Params$Resource$Skus$Price$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Skus$Price$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingPricesV1betaPrice>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingPricesV1betaPrice>
    ): void;
    get(
      params: Params$Resource$Skus$Price$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingPricesV1betaPrice>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingPricesV1betaPrice>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Skus$Price$Get
        | BodyResponseCallback<Schema$GoogleCloudBillingPricesV1betaPrice>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingPricesV1betaPrice>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingPricesV1betaPrice>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingPricesV1betaPrice>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Skus$Price$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Skus$Price$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBillingPricesV1betaPrice>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingPricesV1betaPrice>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Skus$Price$Get extends StandardParameters {
    /**
     * Optional. ISO-4217 currency code for the price. If not specified, USD will be used.
     */
    currencyCode?: string;
    /**
     * Required. Name of the latest price to retrieve. Format: skus/{sku\}/price
     */
    name?: string;
  }

  export class Resource$Skus$Prices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Lists the latest prices for all SKUs.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.skus.prices.list({
     *     // Optional. ISO-4217 currency code for the price. If not specified, USD will be used.
     *     currencyCode: 'placeholder-value',
     *     // Optional. Maximum number of prices to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token received from a previous ListPrices call to retrieve the next page of results. If this field is empty, the first page is returned.
     *     pageToken: 'placeholder-value',
     *     // Required. To list the prices for all SKUs, use `-` as the SKU ID. Format: `skus/-` Specifying a specific SKU ID returns a collection with one Price object for the SKU.
     *     parent: 'skus/my-sku',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "prices": []
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
    list(
      params: Params$Resource$Skus$Prices$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Skus$Prices$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingPricesV1betaListPricesResponse>
    >;
    list(
      params: Params$Resource$Skus$Prices$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Skus$Prices$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingPricesV1betaListPricesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingPricesV1betaListPricesResponse>
    ): void;
    list(
      params: Params$Resource$Skus$Prices$List,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingPricesV1betaListPricesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingPricesV1betaListPricesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Skus$Prices$List
        | BodyResponseCallback<Schema$GoogleCloudBillingPricesV1betaListPricesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingPricesV1betaListPricesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingPricesV1betaListPricesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$GoogleCloudBillingPricesV1betaListPricesResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback || {}) as Params$Resource$Skus$Prices$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Skus$Prices$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/prices').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
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
        createAPIRequest<Schema$GoogleCloudBillingPricesV1betaListPricesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingPricesV1betaListPricesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Skus$Prices$List extends StandardParameters {
    /**
     * Optional. ISO-4217 currency code for the price. If not specified, USD will be used.
     */
    currencyCode?: string;
    /**
     * Optional. Maximum number of prices to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListPrices call to retrieve the next page of results. If this field is empty, the first page is returned.
     */
    pageToken?: string;
    /**
     * Required. To list the prices for all SKUs, use `-` as the SKU ID. Format: `skus/-` Specifying a specific SKU ID returns a collection with one Price object for the SKU.
     */
    parent?: string;
  }

  export class Resource$V1beta {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Analyzes cost data for a billing account and/or specific projects. Returns a natural language summary and supporting datasets.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
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
     * const cloudbilling = google.cloudbilling('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/cloud-billing',
     *       'https://www.googleapis.com/auth/cloud-billing.readonly',
     *       'https://www.googleapis.com/auth/cloud-platform',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await cloudbilling.generateInsights({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "filter": "my_filter",
     *       //   "overriddenMaxIterationCounts": 0,
     *       //   "parents": [],
     *       //   "prompt": "my_prompt",
     *       //   "userContext": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "finalResult": {},
     *   //   "rejection": {},
     *   //   "summaryChunk": "my_summaryChunk",
     *   //   "thoughtChunk": "my_thoughtChunk"
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
    generateInsights(
      params: Params$Resource$V1beta$Generateinsights,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    generateInsights(
      params?: Params$Resource$V1beta$Generateinsights,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$GenerateInsightsResponse>>;
    generateInsights(
      params: Params$Resource$V1beta$Generateinsights,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateInsights(
      params: Params$Resource$V1beta$Generateinsights,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateInsightsResponse>,
      callback: BodyResponseCallback<Schema$GenerateInsightsResponse>
    ): void;
    generateInsights(
      params: Params$Resource$V1beta$Generateinsights,
      callback: BodyResponseCallback<Schema$GenerateInsightsResponse>
    ): void;
    generateInsights(
      callback: BodyResponseCallback<Schema$GenerateInsightsResponse>
    ): void;
    generateInsights(
      paramsOrCallback?:
        | Params$Resource$V1beta$Generateinsights
        | BodyResponseCallback<Schema$GenerateInsightsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateInsightsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateInsightsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GenerateInsightsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1beta$Generateinsights;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1beta$Generateinsights;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://cloudbilling.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta:generateInsights').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GenerateInsightsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateInsightsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$V1beta$Generateinsights extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$GenerateInsightsRequest;
  }
}
