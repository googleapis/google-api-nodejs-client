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
  GaxiosPromise,
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
    projects: Resource$Projects;
    skuGroups: Resource$Skugroups;
    skus: Resource$Skus;
    v1beta: Resource$V1beta;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.billingAccounts = new Resource$Billingaccounts(this.context);
      this.projects = new Resource$Projects(this.context);
      this.skuGroups = new Resource$Skugroups(this.context);
      this.skus = new Resource$Skus(this.context);
      this.v1beta = new Resource$V1beta(this.context);
    }
  }

  /**
   * Specifies the regions for Cache Fill.
   */
  export interface Schema$CacheFillRegions {
    /**
     * The destination region for cache fill.
     */
    destinationRegion?: string | null;
    /**
     * The source region for cache fill.
     */
    sourceRegion?: string | null;
  }
  /**
   * Specifies usage for Cloud CDN Data Transfer.
   */
  export interface Schema$CloudCdnEgressWorkload {
    /**
     * The destination for the cache data transfer.
     */
    cacheEgressDestination?: string | null;
    /**
     * Cache data transfer usage. The rate of data cache transferred to the destination. Use units such as GiBy/s or TiBy/mo, based on [The Unified Code for Units of Measure](https://ucum.org/ucum.html) standard.
     */
    cacheEgressRate?: Schema$Usage;
  }
  /**
   * Specifies usage for Cloud CDN resources.
   */
  export interface Schema$CloudCdnWorkload {
    /**
     * The source service for the cache fill.
     */
    cacheFillOriginService?: string | null;
    /**
     * Cache fill usage. The rate of data transferred between cache fill regions. For example: units such as "GiBy/s" or "TBy/mo".
     */
    cacheFillRate?: Schema$Usage;
    /**
     * The regions where data is transferred from Google data locations into Google global cache servers. The SKU prices for cache fill across services are the same.
     */
    cacheFillRegions?: Schema$CacheFillRegions;
    /**
     * Cache look up requests. This is specified to indicate the number of requests. For example: units such as "1/s".
     */
    cacheLookUpRate?: Schema$Usage;
  }
  /**
   * Includes the estimate for Interconnect Data Transfer only. To specify usage for data transfer between VMs and internet end-points, use the Standard Tier Internet Data Transfer interface.
   */
  export interface Schema$CloudInterconnectEgressWorkload {
    /**
     * Outbound data transfer usage. This usage applies when you move or copy data from one Google Cloud service to another service. The units are GiBy/s, By/s, and so on, based on [The Unified Code for Units of Measure](https://ucum.org/ucum.html) standard.
     */
    egressRate?: Schema$Usage;
    /**
     * Locations in the [Interconnect connection location table](https://cloud.google.com/vpc/network-pricing#interconnect-pricing). These are the Interconnect Data Transfer charges.
     */
    interconnectConnectionLocation?: string | null;
  }
  /**
   * Specifies usage for Cloud Interconnect resources.
   */
  export interface Schema$CloudInterconnectWorkload {
    /**
     * VLAN attachment used for interconnect.
     */
    interconnectAttachments?: Schema$VlanAttachment[];
    /**
     * VLAN attachment type
     */
    interconnectType?: string | null;
    /**
     * Interconnect circuit link type.
     */
    linkType?: string | null;
    /**
     * Interconnect usage. This is specified as a unitless quantity which indicates the number of circuit provisioned in interconnect.
     */
    provisionedLinkCount?: Schema$Usage;
  }
  /**
   * Specification of a network type. Network data transfer within Google Cloud applies when you move or copy data from one Cloud Storage bucket to another or when another Google Cloud service accesses data in your Cloud Storage bucket.This includes the network data transfer within Google Cloud and the general network usage.
   */
  export interface Schema$CloudStorageEgressWorkload {
    /**
     * Where the data is sent to.
     */
    destinationContinent?: string | null;
    /**
     * Data transfer usage rate. This usage applies when you move or copy data from one Cloud Storage bucket to another or when another Google Cloud service accesses data in your Cloud Storage bucket. The expected units are GiBy/s, By/s, and so on, based on [The Unified Code for Units of Measure](https://ucum.org/ucum.html) standard.
     */
    egressRate?: Schema$Usage;
    /**
     * Where the data comes from.
     */
    sourceContinent?: string | null;
  }
  /**
   * Specifies usage of Cloud Storage resources.
   */
  export interface Schema$CloudStorageWorkload {
    /**
     * Data retrieval usage. A retrieval cost applies when data or metadata is read, copied, or rewritten . For example: units such as "GiB/s" or "B/s".
     */
    dataRetrieval?: Schema$Usage;
    /**
     * Data storage usage. The amount of data stored in buckets. For example: units such as GiBy/s or TiBy/mo, based on [The Unified Code for Units of Measure](https://ucum.org/ucum.html) standard.
     */
    dataStored?: Schema$Usage;
    /**
     * Specify dual regions.
     */
    dualRegion?: Schema$DualRegional;
    /**
     * Specify multi regions.
     */
    multiRegion?: Schema$MultiRegional;
    /**
     * Class A operation usage in Cloud Storage, such as listing the objects in buckets. See the [operations pricing](https://cloud.google.com/storage/pricing#operations-pricing) tables for a list of which operations fall into each class. For example: units such as "1/s".
     */
    operationA?: Schema$Usage;
    /**
     * Class B operation usage in Cloud Storage, such as `getIamPolicy`. See the [operations pricing](https://cloud.google.com/storage/pricing#operations-pricing) tables for a list of which operations fall into each class. For example: units such as "1/s".
     */
    operationB?: Schema$Usage;
    /**
     * Specify a single region.
     */
    region?: Schema$Regional;
    /**
     * The [storage class](https://cloud.google.com/storage/docs/storage-classes#classes) of the data and operation. For example: "standard" and "nearline".
     */
    storageClass?: string | null;
  }
  /**
   * Commitments give you the ability to pay a recurring fee in exchange for a benefit, such as a discount for your use. For example, this object might contain details of a [spend-based committed use discount (CUD)](https://cloud.google.com/docs/cuds#spend_based_commitments). Within a CostScenario, adding a commitment includes the cost of the commitment and any discounts.
   */
  export interface Schema$Commitment {
    /**
     * Required. A name for this commitment. All commitments in a CostScenario must have unique names. Each name may be at most 128 characters long.
     */
    name?: string | null;
    /**
     * A resource-based committed use discount (CUD).
     */
    vmResourceBasedCud?: Schema$VmResourceBasedCud;
  }
  /**
   * Estimated cost for a commitment.
   */
  export interface Schema$CommitmentCostEstimate {
    /**
     * Total estimated costs for the commitment.
     */
    commitmentTotalCostEstimate?: Schema$CostEstimate;
    /**
     * The name of the commitment, as specified in the `CostScenario`.
     */
    name?: string | null;
    /**
     * Estimated costs for each SKU in the commitment.
     */
    skuCostEstimates?: Schema$SkuCostEstimate[];
  }
  /**
   * Specificies usage of a set of identical compute VM instances.
   */
  export interface Schema$ComputeVmWorkload {
    /**
     * Defines whether each instance has confidential compute enabled.
     */
    enableConfidentialCompute?: boolean | null;
    /**
     * Guest accelerators attached to each machine.
     */
    guestAccelerator?: Schema$GuestAccelerator;
    /**
     * VM usage. This is specified as a unitless quantity which indicates the number of instances running.
     */
    instancesRunning?: Schema$Usage;
    /**
     * Premium image licenses used by each instance.
     */
    licenses?: string[] | null;
    /**
     * The machine type.
     */
    machineType?: Schema$MachineType;
    /**
     * Persistent disks attached to each instance. Must include a boot disk.
     */
    persistentDisks?: Schema$PersistentDisk[];
    /**
     * Defines whether each instance is preemptible.
     */
    preemptible?: boolean | null;
    /**
     * The [region](https://cloud.google.com/compute/docs/regions-zones) where the VMs run. For example: "us-central1".
     */
    region?: string | null;
  }
  /**
   * An estimated cost.
   */
  export interface Schema$CostEstimate {
    /**
     * The estimated credits applied.
     */
    creditEstimates?: Schema$CreditEstimate[];
    /**
     * The estimated net cost after applying credits.
     */
    netCostEstimate?: Schema$Money;
    /**
     * The estimated cost prior to applying credits.
     */
    preCreditCostEstimate?: Schema$Money;
  }
  /**
   * The result of a estimating the costs of a `CostScenario`.
   */
  export interface Schema$CostEstimationResult {
    /**
     * Required. The ISO 4217 currency code for the cost estimate.
     */
    currencyCode?: string | null;
    /**
     * Required. Estimated costs for each idealized month of a `CostScenario`.
     */
    segmentCostEstimates?: Schema$SegmentCostEstimate[];
    /**
     * Required. Information about SKUs used in the estimate.
     */
    skus?: Schema$Sku[];
  }
  /**
   * Encapsulates all the information needed to perform a cost estimate. It includes a specification of the Google Cloud usage whose costs are estimated, and configuration options.
   */
  export interface Schema$CostScenario {
    /**
     * New commitments to estimate the costs for. The cost of the commitments will be included in the estimate result and discounts the commitment entitles will be included in the workload cost estimates. A maximum of 100 workloads can be provided.
     */
    commitments?: Schema$Commitment[];
    /**
     * Configuration for the scenario.
     */
    scenarioConfig?: Schema$ScenarioConfig;
    /**
     * The Google Cloud usage whose costs are estimated. A maximum of 100 workloads can be provided.
     */
    workloads?: Schema$Workload[];
  }
  /**
   * An estimated credit applied to the costs on a SKU.
   */
  export interface Schema$CreditEstimate {
    /**
     * The estimated credit amount.
     */
    creditAmount?: Schema$Money;
    /**
     * The credit description.
     */
    creditDescription?: string | null;
    /**
     * The credit type.
     */
    creditType?: string | null;
  }
  /**
   * Specification of a custom machine type.
   */
  export interface Schema$CustomMachineType {
    /**
     * Required. The machine series. Only certain [machine series](https://cloud.google.com/compute/docs/general-purpose-machines#custom_machine_types) support custom configurations. For example: "n1".
     */
    machineSeries?: string | null;
    /**
     * Required. Memory size of the VM in GB (2^30 bytes). Must be an increment of 0.25 (256 MB). Each [machine series](https://cloud.google.com/compute/docs/machine-types#machine_type_comparison) has limitations on allowed values for the ratio of memory-to-vCPU count.
     */
    memorySizeGb?: number | null;
    /**
     * Required. The number of vCPUs. The allowed values depend on the [machine series](https://cloud.google.com/compute/docs/machine-types#machine_type_comparison).
     */
    virtualCpuCount?: string | null;
  }
  /**
   * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
   */
  export interface Schema$Decimal {
    /**
     * The decimal value, as a string. The string representation consists of an optional sign, `+` (`U+002B`) or `-` (`U+002D`), followed by a sequence of zero or more decimal digits ("the integer"), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as `0`. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided `+` sign (`+2.5` -\> `2.5`). - Replacing a zero-length integer value with `0` (`.5` -\> `0.5`). - Coercing the exponent character to upper-case, with explicit sign (`2.5e8` -\> `2.5E+8`). - Removing an explicitly-provided zero exponent (`2.5E0` -\> `2.5`). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: `2.5E-1` <-\> `0.25`). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the `.` character is supported to divide the integer and the fraction; `,` **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString = '' | [Sign] Significand [Exponent]; Sign = '+' | '-'; Significand = Digits '.' | [Digits] '.' Digits; Exponent = ('e' | 'E') [Sign] Digits; Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' \}; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if precision would be lost. Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if the service receives a value outside of the supported range.
     */
    value?: string | null;
  }
  /**
   * Area contains dual locations.
   */
  export interface Schema$DualRegional {
    /**
     * The [location name](https://cloud.google.com/storage/docs/locations#available-locations) where the data is stored. For example: "asia1" for dual region.
     */
    name?: string | null;
  }
  /**
   * Request for EstimateCostScenarioForBillingAccount.
   */
  export interface Schema$EstimateCostScenarioForBillingAccountRequest {
    /**
     * The scenario to estimate costs for.
     */
    costScenario?: Schema$CostScenario;
  }
  /**
   * Response for EstimateCostScenarioForBillingAccount
   */
  export interface Schema$EstimateCostScenarioForBillingAccountResponse {
    /**
     * The result of the cost estimation.
     */
    costEstimationResult?: Schema$CostEstimationResult;
  }
  /**
   * Request for EstimateCostScenarioWithListPrice.
   */
  export interface Schema$EstimateCostScenarioWithListPriceRequest {
    /**
     * The scenario to estimate costs for.
     */
    costScenario?: Schema$CostScenario;
  }
  /**
   * Response for EstimateCostScenarioWithListPrice
   */
  export interface Schema$EstimateCostScenarioWithListPriceResponse {
    /**
     * The result of the cost estimation.
     */
    costEstimationResult?: Schema$CostEstimationResult;
  }
  /**
   * Represents a point in time.
   */
  export interface Schema$EstimationTimePoint {
    /**
     * The point in time, relative to the start of the time frame covered by the cost estimate.
     */
    estimationTimeFrameOffset?: string | null;
  }
  /**
   * Encapsulates an anomaly.
   */
  export interface Schema$GoogleCloudBillingAnomaliesV1betaAnomaly {
    /**
     * Time that the anomaly was detected. Will be set to 00:00 google time of the detected date.
     */
    detectionTime?: string | null;
    /**
     * Deviation information of the anomaly.
     */
    deviation?: Schema$GoogleCloudBillingAnomaliesV1betaAnomalyDeviation;
    /**
     * Identifier. Resource name for the anomaly.
     */
    name?: string | null;
    /**
     * The display name of the resource that the anomaly occurred in/belongs to.
     */
    resourceDisplayName?: string | null;
    /**
     * A list of causes which contribute to the anomaly.
     */
    rootCauses?: Schema$GoogleCloudBillingAnomaliesV1betaCause[];
    /**
     * Indicate the scope of the anomaly.
     */
    scope?: string | null;
    /**
     * Severity of the anomaly. Unspecified if severity is not met/assigned.
     */
    severity?: string | null;
    /**
     * Output only. The most recent anomaly's last updated time.
     */
    updateTime?: string | null;
  }
  /**
   * Encapsulates the deviation information.
   */
  export interface Schema$GoogleCloudBillingAnomaliesV1betaAnomalyDeviation {
    /**
     * The actual spend for the anomaly.
     */
    actualSpend?: Schema$Money;
    /**
     * The difference between the actual spend and expected spend's upper bound. Calculation formula: deviation_amount = actual_spend - expected_spend.
     */
    deviationAmount?: Schema$Money;
    /**
     * The percentage of devition amount from expected spend's upper bound. Calculation formula: deviation_percentage = divation_amount / expected_spend * 100.
     */
    deviationPercentage?: number | null;
    /**
     * The expected spend for the anomaly.
     */
    expectedSpend?: Schema$Money;
  }
  /**
   * Encapsulates the information of the reason which caused the anomaly.
   */
  export interface Schema$GoogleCloudBillingAnomaliesV1betaCause {
    /**
     * The cause type.
     */
    causeType?: string | null;
    /**
     * The deviation information for the cause.
     */
    deviation?: Schema$GoogleCloudBillingAnomaliesV1betaAnomalyDeviation;
    /**
     * The display name of the cause.
     */
    displayName?: string | null;
    /**
     * The resource name of the cause. project: projects/{project\}. service: services/{service\}. sku: services/{service\}/skus/{sku\}. location: locations/{location\}.
     */
    resource?: string | null;
    /**
     * The sub causes.
     */
    subCauses?: Schema$GoogleCloudBillingAnomaliesV1betaCause[];
  }
  /**
   * Response message for ListAnomalies.
   */
  export interface Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse {
    /**
     * The returned anomalies.
     */
    anomalies?: Schema$GoogleCloudBillingAnomaliesV1betaAnomaly[];
    /**
     * Token that can be sent as `page_token` in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string | null;
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
   * Encapsulates a stock keeping unit (SKU) visible to a billing account. A SKU distinctly identifies a resource that you can purchase, such as `Nvidia Tesla K80 GPU attached to Spot Preemptible VMs running in Warsaw`.
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
   * Specification of a set of guest accelerators attached to a machine.
   */
  export interface Schema$GuestAccelerator {
    /**
     * The number of the guest accelerator cards exposed to each instance.
     */
    acceleratorCount?: string | null;
    /**
     * The type of the guest accelerator cards. For example: "nvidia-tesla-t4".
     */
    acceleratorType?: string | null;
  }
  /**
   * Data transfer between two regions.
   */
  export interface Schema$InterRegionEgress {
    /**
     * Which [region](https://cloud.google.com/compute/docs/regions-zones) the data is transferred to.
     */
    destinationRegion?: string | null;
    /**
     * VM to VM data transfer usage. The expected units such are GiBy/s, By/s, and so on.
     */
    egressRate?: Schema$Usage;
    /**
     * Which [region](https://cloud.google.com/compute/docs/regions-zones) the data is transferred from.
     */
    sourceRegion?: string | null;
  }
  /**
   * Data transfer within the same region. When the source region and destination region are in the same zone, using internal IP addresses, there isn't any charge for data transfer.
   */
  export interface Schema$IntraRegionEgress {
    /**
     * VM to VM data transfer usage. The expected are GiBy/s, By/s, and so on.
     */
    egressRate?: Schema$Usage;
  }
  /**
   * Specification of machine series, memory, and number of vCPUs.
   */
  export interface Schema$MachineType {
    customMachineType?: Schema$CustomMachineType;
    predefinedMachineType?: Schema$PredefinedMachineType;
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
   * Area contains multiple locations.
   */
  export interface Schema$MultiRegional {
    /**
     * The [location name](https://cloud.google.com/storage/docs/locations#available-locations) where the data is stored. For example: "us" for multi-region.
     */
    name?: string | null;
  }
  /**
   * Specification of a persistent disk attached to a VM.
   */
  export interface Schema$PersistentDisk {
    /**
     * Specifies the size of disk. Must be at least 10 GB.
     */
    diskSize?: Schema$Usage;
    /**
     * The [disk type](https://cloud.google.com/compute/docs/disks#disk-types). For example: "pd-standard".
     */
    diskType?: string | null;
    /**
     * Indicates how many IOPS to provision for the disk for extreme persistent disks. This sets the number of I/O operations per second that the disk can handle. Values must be between 10,000 and 120,000.
     */
    provisionedIops?: Schema$Usage;
    /**
     * The geographic scope of the disk. Defaults to `SCOPE_ZONAL` if not specified.
     */
    scope?: string | null;
  }
  /**
   * Specification of a predefined machine type.
   */
  export interface Schema$PredefinedMachineType {
    /**
     * The [machine type](https://cloud.google.com/compute/docs/machine-types). For example: "n1-standard1".
     */
    machineType?: string | null;
  }
  /**
   * Specify a Premium Tier Internet Data Transfer networking workload.
   */
  export interface Schema$PremiumTierEgressWorkload {
    /**
     * Where the data is sent to.
     */
    destinationContinent?: string | null;
    /**
     * Premium Tier Data Transfer usage. The expected units are GiBy/s, By/s, and so on, based on [The Unified Code for Units of Measure](https://ucum.org/ucum.html) standard.
     */
    egressRate?: Schema$Usage;
    /**
     * Which [region](https://cloud.google.com/compute/docs/regions-zones) the data comes from.
     */
    sourceRegion?: string | null;
  }
  /**
   * The price of a SKU at a point int time.
   */
  export interface Schema$Price {
    /**
     * The timestamp within the estimation time frame when the price was set.
     */
    effectiveTime?: Schema$EstimationTimePoint;
    /**
     * The type of price. Possible values: "RATE"
     */
    priceType?: string | null;
    /**
     * A set of tiered rates.
     */
    rate?: Schema$Rate;
  }
  /**
   * A SKU price consisting of tiered rates.
   */
  export interface Schema$Rate {
    /**
     * The service tiers.
     */
    tiers?: Schema$RateTier[];
    /**
     * The SKU's pricing unit. For example, if the tier price is $1 per 1000000 Bytes, then this field will show 'By'. The `start_amount` field in each tier will be in this unit.
     */
    unit?: string | null;
    /**
     * The SKU's count for the pricing unit. For example, if the tier price is $1 per 1000000 Bytes, then this column will show 1000000.
     */
    unitCount?: number | null;
  }
  /**
   * Pricing details for a service tier.
   */
  export interface Schema$RateTier {
    /**
     * The price for this tier.
     */
    price?: Schema$Money;
    /**
     * The magnitude of usage in which the tier interval begins. Example: "From 100 GiBi the price is $1 per byte" implies `start_amount` = 100
     */
    startAmount?: number | null;
  }
  /**
   * Area contains only one location.
   */
  export interface Schema$Regional {
    /**
     * The [location name](https://cloud.google.com/storage/docs/locations#available-locations). For example: "us-central1" for region.
     */
    name?: string | null;
  }
  /**
   * Configuration for a CostScenario. Specifies how costs are calculated.
   */
  export interface Schema$ScenarioConfig {
    /**
     * Time frame for the estimate. Workloads must specify usage for this duration. Duration must be at least 1 hour (3,600 seconds) and at most 10 years (315,360,000 seconds). The calculations for years and months are based on a 730-hour (2,628,000-second) month. For durations longer than one month (2,628,000 seconds), the duration is rounded up to the next month, so the estimate shows you the costs for full months. For example, a duration of 3,232,800 seconds (roughly 5 weeks) is rounded up to 2 months.
     */
    estimateDuration?: string | null;
  }
  /**
   * Workload cost estimates for a single time segment.
   */
  export interface Schema$SegmentCostEstimate {
    /**
     * Estimated costs for each commitment.
     */
    commitmentCostEstimates?: Schema$CommitmentCostEstimate[];
    /**
     * Timestamp for the start of the segment.
     */
    segmentStartTime?: Schema$EstimationTimePoint;
    /**
     * Total estimated costs for the time segment.
     */
    segmentTotalCostEstimate?: Schema$CostEstimate;
    /**
     * Estimated costs for each workload.
     */
    workloadCostEstimates?: Schema$WorkloadCostEstimate[];
  }
  /**
   * Information about SKUs appearing in the cost estimate.
   */
  export interface Schema$Sku {
    /**
     * The display name for the SKU. Example: A2 Instance Core running in Americas
     */
    displayName?: string | null;
    /**
     * A timeline of prices for a SKU in chronological order. Note: The API currently only supports using a constant price for the entire estimation time frame so this list will contain a single value.
     */
    prices?: Schema$Price[];
    /**
     * The resource name for the SKU. Example: "services/DA34-426B-A397/skus/AA95-CD31-42FE"
     */
    sku?: string | null;
  }
  /**
   * Estimated cost for usage on a SKU.
   */
  export interface Schema$SkuCostEstimate {
    /**
     * The estimated cost for the usage on this SKU.
     */
    costEstimate?: Schema$CostEstimate;
    /**
     * The resource name for the SKU. Example: "services/DA34-426B-A397/skus/AA95-CD31-42FE" More information about the SKU can be found in the `skus` field of the `CostEstimationResult`.
     */
    sku?: string | null;
    /**
     * The amount of usage on this SKU.
     */
    usageAmount?: number | null;
    /**
     * The unit for the usage on this SKU.
     */
    usageUnit?: string | null;
  }
  /**
   * Specify Standard Tier Internet Data Transfer.
   */
  export interface Schema$StandardTierEgressWorkload {
    /**
     * Standard Tier Data Transfer usage. The expected units are GiBy/s, By/s, and so on, based on the [The Unified Code for Units of Measure](https://ucum.org/ucum.html) standard.
     */
    egressRate?: Schema$Usage;
    /**
     * Which [region](https://cloud.google.com/compute/docs/regions-zones) the data is transferred from.
     */
    sourceRegion?: string | null;
  }
  /**
   * An amount of usage over a time frame.
   */
  export interface Schema$Usage {
    /**
     * A timeline of usage rates over the estimate interval.
     */
    usageRateTimeline?: Schema$UsageRateTimeline;
  }
  /**
   * A timeline of usage rates. Consists of a series of entries, each of which specifies a constant rate of usage during a time interval. Each entry contains an effective time. The usage rate is in effect from that time until the effective time of the subsequent entry, or, for the last entry, for the remaining portion of estimation time frame. Effective times are specified as an offset into the estimation time frame. Usage is considered to be zero until the `effective_time` of the first entry. All subsequent entries must have an effective time greater than the previous entry and less than the estimate time frame. The effective time on all entries must be an integer number of hours.
   */
  export interface Schema$UsageRateTimeline {
    /**
     * The unit for the usage rate in each timeline entry. If you provide an incorrect unit for an instance, the correct unit is provided in the error message. The supported units are a subset of [The Unified Code for Units of Measure](https://ucum.org/ucum.html) standard: * **Time units (TIME-UNIT)** * `s` second * `min` minute * `h` hour * `d` day * `wk` week * `mo` month * `yr` year * `ms` millisecond * `us` microsecond * `ns` nanosecond * **Basic storage units (BASIC-STORAGE-UNIT)** * `bit` bit * `By` byte * **Count units (COUNT-UNIT)** * `count` count * **Prefixes (PREFIX)** * `k` kilo (10^3) * `M` mega (10^6) * `G` giga (10^9) * `T` tera (10^12) * `P` peta (10^15) * `Ki` kibi (2^10) * `Mi` mebi (2^20) * `Gi` gibi (2^30) * `Ti` tebi (2^40) * `Pi` pebi (2^50) **Grammar** The grammar also includes these connectors: * `/` division or ratio (as an infix operator). For example: `kBy/{email\}` or `MiBy/10ms`. * `.` multiplication or composition (as an infix operator). For example: `GBy.d` or `k{watt\}.h`. The grammar for a unit is as follows: ``` Expression = Component { "." Component \} { "/" Component \} ; Component = ( [ PREFIX ] UNIT | "%" ) [ Annotation ] | Annotation | "1" ; UNIT = TIME-UNIT | STORAGE-UNIT | DATA-UNIT | COUNT-UNIT Annotation = "{" NAME "\}" ; ``` Examples: * Request per second: `1/s` or `{requests\}/s` * GibiBytes: `GiBy` * GibiBytes * seconds: `GiBy.s`
     */
    unit?: string | null;
    /**
     * The timeline entries. Each entry has a start time and usage rate. The start time specifies the effective time of the usage rate. The entries must be sorted by start time in an increasing order.
     */
    usageRateTimelineEntries?: Schema$UsageRateTimelineEntry[];
  }
  /**
   * A usage rate timeline entry. Each entry specifies a constant usage rate during a time interval.
   */
  export interface Schema$UsageRateTimelineEntry {
    /**
     * The effective time for this entry. The usage rate is in effect starting at this time until the effective time of the subsequent entry in the timeline. The last entry defines the usage rate until the end of the `Usage` time frame. Must correspond to an integer number of hours.
     */
    effectiveTime?: Schema$EstimationTimePoint;
    /**
     * The usage rate.
     */
    usageRate?: number | null;
  }
  /**
   * VLAN attachment for Cloud Interconnect.
   */
  export interface Schema$VlanAttachment {
    /**
     * Capacities in the [pricing table](https://cloud.google.com/vpc/network-pricing#interconnect-pricing) Examples of capacity are: 50/100/200/300/400/500-Mbps, 1/2/5/10/20/50-Gbps.
     */
    bandwidth?: string | null;
    /**
     * VLAN usage. This is specified as a unitless quantity which indicates the number of VLAN attachment used in interconnect.
     */
    vlanCount?: Schema$Usage;
  }
  /**
   * Specifies a resource-based committed use discount (CUD).
   */
  export interface Schema$VmResourceBasedCud {
    /**
     * Guest accelerator, known as GPU.
     */
    guestAccelerator?: Schema$GuestAccelerator;
    /**
     * The machine series for CUD. For example: "n1" for general purpose N1 machine type commitments. "n2" for general purpose N2 machine type commitments. "e2" for general purpose E2 machine type commitments. "n2d" for general purpose N2D machine type commitments. "t2d" for general purpose T2D machine type commitments. "c2"/"c2d" for compute-optimized commitments. "m1"/"m2" for the memory-optimized commitments. "a2' for the accelerator-optimized commitments.
     */
    machineSeries?: string | null;
    /**
     * Memory size of the VM in GB (2^30 bytes). Must be an increment of 0.25 (256 MB).
     */
    memorySizeGb?: number | null;
    /**
     * Commitment usage plan.
     */
    plan?: string | null;
    /**
     * The region where the VM runs. For example: "us-central1"
     */
    region?: string | null;
    /**
     * The number of vCPUs. The number of vCPUs must be an integer of 0 or more and can be even or odd.
     */
    virtualCpuCount?: string | null;
  }
  /**
   * Specify VM to VM data transfer.
   */
  export interface Schema$VmToVmEgressWorkload {
    interRegionEgress?: Schema$InterRegionEgress;
    intraRegionEgress?: Schema$IntraRegionEgress;
  }
  /**
   * Specifies usage on a single Google Cloud product over a time frame. Each Google Cloud product has its own message, containing specific product configuration parameters of the product usage amounts along each dimension in which the product is billed.
   */
  export interface Schema$Workload {
    /**
     * Usage on Google Cloud CDN Data Transfer.
     */
    cloudCdnEgressWorkload?: Schema$CloudCdnEgressWorkload;
    /**
     * Usage on Google Cloud CDN.
     */
    cloudCdnWorkload?: Schema$CloudCdnWorkload;
    /**
     * Usage on Google Cloud Interconnect Data Transfer.
     */
    cloudInterconnectEgressWorkload?: Schema$CloudInterconnectEgressWorkload;
    /**
     * Usage on Google Cloud Interconnect.
     */
    cloudInterconnectWorkload?: Schema$CloudInterconnectWorkload;
    /**
     * Usage on Cloud Storage Data Transfer.
     */
    cloudStorageEgressWorkload?: Schema$CloudStorageEgressWorkload;
    /**
     * Usage on Google Cloud Storage.
     */
    cloudStorageWorkload?: Schema$CloudStorageWorkload;
    /**
     * Usage of a Google Compute Engine Virtual Machine.
     */
    computeVmWorkload?: Schema$ComputeVmWorkload;
    /**
     * Required. A name for this workload. All workloads in a `CostScenario` must have a unique `name`. Each `name` may be at most 128 characters long.
     */
    name?: string | null;
    /**
     * Usage on Premium Tier Internet Data Transfer.
     */
    premiumTierEgressWorkload?: Schema$PremiumTierEgressWorkload;
    /**
     * Usage on Standard Tier Internet Data Transfer.
     */
    standardTierEgressWorkload?: Schema$StandardTierEgressWorkload;
    /**
     * Usage on VM to VM Data Transfer.
     */
    vmToVmEgressWorkload?: Schema$VmToVmEgressWorkload;
  }
  /**
   * Estimated cost for a workload.
   */
  export interface Schema$WorkloadCostEstimate {
    /**
     * The name of the workload, as specified in the `CostScenario`.
     */
    name?: string | null;
    /**
     * Estimated costs for each SKU in the workload.
     */
    skuCostEstimates?: Schema$SkuCostEstimate[];
    /**
     * Total estimated costs for the workload.
     */
    workloadTotalCostEstimate?: Schema$CostEstimate;
  }

  export class Resource$Billingaccounts {
    context: APIRequestContext;
    anomalies: Resource$Billingaccounts$Anomalies;
    services: Resource$Billingaccounts$Services;
    skuGroups: Resource$Billingaccounts$Skugroups;
    skus: Resource$Billingaccounts$Skus;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.anomalies = new Resource$Billingaccounts$Anomalies(this.context);
      this.services = new Resource$Billingaccounts$Services(this.context);
      this.skuGroups = new Resource$Billingaccounts$Skugroups(this.context);
      this.skus = new Resource$Billingaccounts$Skus(this.context);
    }

    /**
     * Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    estimateCostScenario(
      params: Params$Resource$Billingaccounts$Estimatecostscenario,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    estimateCostScenario(
      params?: Params$Resource$Billingaccounts$Estimatecostscenario,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EstimateCostScenarioForBillingAccountResponse>;
    estimateCostScenario(
      params: Params$Resource$Billingaccounts$Estimatecostscenario,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    estimateCostScenario(
      params: Params$Resource$Billingaccounts$Estimatecostscenario,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EstimateCostScenarioForBillingAccountResponse>,
      callback: BodyResponseCallback<Schema$EstimateCostScenarioForBillingAccountResponse>
    ): void;
    estimateCostScenario(
      params: Params$Resource$Billingaccounts$Estimatecostscenario,
      callback: BodyResponseCallback<Schema$EstimateCostScenarioForBillingAccountResponse>
    ): void;
    estimateCostScenario(
      callback: BodyResponseCallback<Schema$EstimateCostScenarioForBillingAccountResponse>
    ): void;
    estimateCostScenario(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Estimatecostscenario
        | BodyResponseCallback<Schema$EstimateCostScenarioForBillingAccountResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EstimateCostScenarioForBillingAccountResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EstimateCostScenarioForBillingAccountResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EstimateCostScenarioForBillingAccountResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Estimatecostscenario;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Estimatecostscenario;
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
            url: (
              rootUrl + '/v1beta/{+billingAccount}:estimateCostScenario'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['billingAccount'],
        pathParams: ['billingAccount'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EstimateCostScenarioForBillingAccountResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EstimateCostScenarioForBillingAccountResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Estimatecostscenario
    extends StandardParameters {
    /**
     * Resource name of the billing account for the cost estimate. The resource name has the form `billingAccounts/{billing_account_id\}`. For example, `billingAccounts/012345-567890-ABCDEF` is the resource name for billing account `012345-567890-ABCDEF`. Must be specified.
     */
    billingAccount?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EstimateCostScenarioForBillingAccountRequest;
  }

  export class Resource$Billingaccounts$Anomalies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets an anomaly for a billing account or a project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Billingaccounts$Anomalies$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Billingaccounts$Anomalies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>;
    get(
      params: Params$Resource$Billingaccounts$Anomalies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Anomalies$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>
    ): void;
    get(
      params: Params$Resource$Billingaccounts$Anomalies$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Anomalies$Get
        | BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Anomalies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Anomalies$Get;
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
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>(
          parameters
        );
      }
    }

    /**
     * Lists anomalies for a billing account or a project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Billingaccounts$Anomalies$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Billingaccounts$Anomalies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>;
    list(
      params: Params$Resource$Billingaccounts$Anomalies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Anomalies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>
    ): void;
    list(
      params: Params$Resource$Billingaccounts$Anomalies$List,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Billingaccounts$Anomalies$List
        | BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Billingaccounts$Anomalies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Billingaccounts$Anomalies$List;
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
            url: (rootUrl + '/v1beta/{+parent}/anomalies').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Billingaccounts$Anomalies$Get
    extends StandardParameters {
    /**
     * Required. Format for project: projects/{project\}/anomalies/{anomalies\}. Format for billing account: billingAccounts/{billing_account\}/anomalies/{anomalies\}.
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Anomalies$List
    extends StandardParameters {
    /**
     * Optional. Options for how to filter the anomalies. Currently, only filter on `start_time` and `end_time` is supported. Only =, AND operators are supported. If start_time and/or end_time empty, we only retrieve the most recent 30 days' anomalies. Examples: - start_time = "20231201" AND end_time = "20240120" .
     */
    filter?: string;
    /**
     * Optional. Maximum number of anomalies to return. Results may return fewer than this value. Default value is 50 and maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListAnomalies call to retrieve the next page of results. If this field is empty, the first page is returned.
     */
    pageToken?: string;
    /**
     * Required. The project to list Anomaly for the project. Format for project: projects/{project\}. Format for billing account: billingAccounts/{billing_account\}.
     */
    parent?: string;
  }

  export class Resource$Billingaccounts$Services {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a Google Cloud service visible to a billing account.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Billingaccounts$Services$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Billingaccounts$Services$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService>;
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
      | GaxiosPromise<Schema$GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService>
      | GaxiosPromise<Readable> {
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Billingaccounts$Services$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Billingaccounts$Services$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse>;
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
      | GaxiosPromise<Schema$GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Billingaccounts$Services$Get
    extends StandardParameters {
    /**
     * Required. The name of the billing account service to retrieve. Format: billingAccounts/{billing_account\}/services/{service\}
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Services$List
    extends StandardParameters {
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Billingaccounts$Skugroups$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Billingaccounts$Skugroups$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup>;
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
      | GaxiosPromise<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup>
      | GaxiosPromise<Readable> {
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Billingaccounts$Skugroups$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Billingaccounts$Skugroups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse>;
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
      | GaxiosPromise<Schema$GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Billingaccounts$Skugroups$Get
    extends StandardParameters {
    /**
     * Required. The name of the BillingAccountSkuGroup to retrieve. Format: billingAccounts/{billing_account\}/skuGroups/{sku_group\}
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Skugroups$List
    extends StandardParameters {
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Billingaccounts$Skugroups$Skus$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Billingaccounts$Skugroups$Skus$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku>;
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
      | GaxiosPromise<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku>
      | GaxiosPromise<Readable> {
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Billingaccounts$Skugroups$Skus$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Billingaccounts$Skugroups$Skus$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse>;
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
      | GaxiosPromise<Schema$GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Billingaccounts$Skugroups$Skus$Get
    extends StandardParameters {
    /**
     * Required. The name of the billing account SKU group SKU to retrieve. Format: billingAccounts/{billing_account\}/skuGroups/{sku_group\}/skus/{sku\}
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Skugroups$Skus$List
    extends StandardParameters {
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Billingaccounts$Skus$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Billingaccounts$Skus$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku>;
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
      | GaxiosPromise<Schema$GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku>
      | GaxiosPromise<Readable> {
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Billingaccounts$Skus$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Billingaccounts$Skus$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse>;
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
      | GaxiosPromise<Schema$GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Billingaccounts$Skus$Get
    extends StandardParameters {
    /**
     * Required. The name of the billing account SKU to retrieve. Format: billingAccounts/{billing_account\}/skus/{sku\}
     */
    name?: string;
  }
  export interface Params$Resource$Billingaccounts$Skus$List
    extends StandardParameters {
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Billingaccounts$Skus$Price$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Billingaccounts$Skus$Price$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice>;
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
      | GaxiosPromise<Schema$GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Billingaccounts$Skus$Price$Get
    extends StandardParameters {
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Billingaccounts$Skus$Prices$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Billingaccounts$Skus$Prices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse>;
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
      | GaxiosPromise<Schema$GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Billingaccounts$Skus$Prices$List
    extends StandardParameters {
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

  export class Resource$Projects {
    context: APIRequestContext;
    anomalies: Resource$Projects$Anomalies;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.anomalies = new Resource$Projects$Anomalies(this.context);
    }
  }

  export class Resource$Projects$Anomalies {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets an anomaly for a billing account or a project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Anomalies$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Anomalies$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>;
    get(
      params: Params$Resource$Projects$Anomalies$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Anomalies$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>
    ): void;
    get(
      params: Params$Resource$Projects$Anomalies$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Anomalies$Get
        | BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Anomalies$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Anomalies$Get;
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
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingAnomaliesV1betaAnomaly>(
          parameters
        );
      }
    }

    /**
     * Lists anomalies for a billing account or a project.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Anomalies$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Anomalies$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>;
    list(
      params: Params$Resource$Projects$Anomalies$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Anomalies$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Anomalies$List,
      callback: BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Anomalies$List
        | BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Anomalies$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Anomalies$List;
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
            url: (rootUrl + '/v1beta/{+parent}/anomalies').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBillingAnomaliesV1betaListAnomaliesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Anomalies$Get
    extends StandardParameters {
    /**
     * Required. Format for project: projects/{project\}/anomalies/{anomalies\}. Format for billing account: billingAccounts/{billing_account\}/anomalies/{anomalies\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Anomalies$List
    extends StandardParameters {
    /**
     * Optional. Options for how to filter the anomalies. Currently, only filter on `start_time` and `end_time` is supported. Only =, AND operators are supported. If start_time and/or end_time empty, we only retrieve the most recent 30 days' anomalies. Examples: - start_time = "20231201" AND end_time = "20240120" .
     */
    filter?: string;
    /**
     * Optional. Maximum number of anomalies to return. Results may return fewer than this value. Default value is 50 and maximum value is 1000.
     */
    pageSize?: number;
    /**
     * Optional. Page token received from a previous ListAnomalies call to retrieve the next page of results. If this field is empty, the first page is returned.
     */
    pageToken?: string;
    /**
     * Required. The project to list Anomaly for the project. Format for project: projects/{project\}. Format for billing account: billingAccounts/{billing_account\}.
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Skugroups$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Skugroups$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingSkugroupsV1betaSkuGroup>;
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
      | GaxiosPromise<Schema$GoogleCloudBillingSkugroupsV1betaSkuGroup>
      | GaxiosPromise<Readable> {
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Skugroups$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Skugroups$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse>;
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
      | GaxiosPromise<Schema$GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse>
      | GaxiosPromise<Readable> {
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Skugroups$Skus$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Skugroups$Skus$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingSkugroupskusV1betaSkuGroupSku>;
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
      | GaxiosPromise<Schema$GoogleCloudBillingSkugroupskusV1betaSkuGroupSku>
      | GaxiosPromise<Readable> {
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Skugroups$Skus$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Skugroups$Skus$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse>;
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
      | GaxiosPromise<Schema$GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse>
      | GaxiosPromise<Readable> {
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

  export interface Params$Resource$Skugroups$Skus$Get
    extends StandardParameters {
    /**
     * Required. The name of the SKU group SKU to retrieve. Format: skuGroups/{sku_group\}/skus/{sku\}
     */
    name?: string;
  }
  export interface Params$Resource$Skugroups$Skus$List
    extends StandardParameters {
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Skus$Price$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Skus$Price$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingPricesV1betaPrice>;
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
      | GaxiosPromise<Schema$GoogleCloudBillingPricesV1betaPrice>
      | GaxiosPromise<Readable> {
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Skus$Prices$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Skus$Prices$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBillingPricesV1betaListPricesResponse>;
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
      | GaxiosPromise<Schema$GoogleCloudBillingPricesV1betaListPricesResponse>
      | GaxiosPromise<Readable> {
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
     * Estimate list prices using a `CostScenario` without a defined `billingAccount`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    estimateCostScenario(
      params: Params$Resource$V1beta$Estimatecostscenario,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    estimateCostScenario(
      params?: Params$Resource$V1beta$Estimatecostscenario,
      options?: MethodOptions
    ): GaxiosPromise<Schema$EstimateCostScenarioWithListPriceResponse>;
    estimateCostScenario(
      params: Params$Resource$V1beta$Estimatecostscenario,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    estimateCostScenario(
      params: Params$Resource$V1beta$Estimatecostscenario,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EstimateCostScenarioWithListPriceResponse>,
      callback: BodyResponseCallback<Schema$EstimateCostScenarioWithListPriceResponse>
    ): void;
    estimateCostScenario(
      params: Params$Resource$V1beta$Estimatecostscenario,
      callback: BodyResponseCallback<Schema$EstimateCostScenarioWithListPriceResponse>
    ): void;
    estimateCostScenario(
      callback: BodyResponseCallback<Schema$EstimateCostScenarioWithListPriceResponse>
    ): void;
    estimateCostScenario(
      paramsOrCallback?:
        | Params$Resource$V1beta$Estimatecostscenario
        | BodyResponseCallback<Schema$EstimateCostScenarioWithListPriceResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EstimateCostScenarioWithListPriceResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EstimateCostScenarioWithListPriceResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$EstimateCostScenarioWithListPriceResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$V1beta$Estimatecostscenario;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1beta$Estimatecostscenario;
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
            url: (rootUrl + '/v1beta:estimateCostScenario').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$EstimateCostScenarioWithListPriceResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EstimateCostScenarioWithListPriceResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$V1beta$Estimatecostscenario
    extends StandardParameters {
    /**
     * Request body metadata
     */
    requestBody?: Schema$EstimateCostScenarioWithListPriceRequest;
  }
}
