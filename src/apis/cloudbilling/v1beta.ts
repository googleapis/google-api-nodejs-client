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
    v1beta: Resource$V1beta;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.billingAccounts = new Resource$Billingaccounts(this.context);
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
   * Specifies usage for Cloud CDN egress.
   */
  export interface Schema$CloudCdnEgressWorkload {
    /**
     * The destination for the cache egress charges.
     */
    cacheEgressDestination?: string | null;
    /**
     * Cache egress usage. The rate of data cache egressed in the destination. For example : units such as "GiBy/s" or "TBy/mo".
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
   * The interconnect egress only includes the Interconnect Egress. Please use the standard egress traffic interface to specify your standard egress usage.
   */
  export interface Schema$CloudInterconnectEgressWorkload {
    /**
     * Data egress usage. This usage applies when you move or copy data from one Google Cloud service to another service. Expected units such as "GiBy/s, By/s, etc."
     */
    egressRate?: Schema$Usage;
    /**
     * Locations in the [Interconnect connection location table](https://cloud.google.com/vpc/network-pricing#interconnect-pricing). This is the interconnect egress charges.
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
     * Vlan attachment type.
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
   * Specification of a network type. Network egress within Google Cloud applies when you move or copy data from one Cloud Storage bucket to another or when another Google Cloud service accesses data in your Cloud Storage bucket.This includes the network egress within Google Cloud and the general network usage.
   */
  export interface Schema$CloudStorageEgressWorkload {
    /**
     * Where the data is sent to.
     */
    destinationContinent?: string | null;
    /**
     * Egress usage rate. This usage applies when you move or copy data from one Cloud Storage bucket to another or when another Google Cloud service accesses data in your Cloud Storage bucket. Expected units such as "GiBy/s, By/s, ..."
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
     * Data retrieval usage. A retrieval cost applies when data or metadata is read, copied, or rewritten . For example: units such as "GiBy/s" or "By/s".
     */
    dataRetrieval?: Schema$Usage;
    /**
     * Data storage usage. The amount of data stored in buckets. For example: units such as "GiBy/s" or "TBy/mo".
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
     * The [storage class](https://cloud.google.com/storage/docs/storage-classes#classes) of the data and operation. For example: "standard" or "nearline".
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
   * Egress traffic between two regions.
   */
  export interface Schema$InterRegionEgress {
    /**
     * Which [region](https://cloud.google.com/compute/docs/regions-zones) the egress data goes to.
     */
    destinationRegion?: string | null;
    /**
     * VM to VM egress usage. Expected units such as "GiBy/s, By/s, etc."
     */
    egressRate?: Schema$Usage;
    /**
     * Which [region](https://cloud.google.com/compute/docs/regions-zones) the egress data comes from.
     */
    sourceRegion?: string | null;
  }
  /**
   * Egress traffic within the same region. When source region and destination region are in the same zone, using the internal IP addresses, there isn't any egress charge.
   */
  export interface Schema$IntraRegionEgress {
    /**
     * VM to VM egress usage. Expected units such as "GiBy/s, By/s, etc."
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
   * Specify Premium Tier Internet egress networking.
   */
  export interface Schema$PremiumTierEgressWorkload {
    /**
     * Where the data is sent to.
     */
    destinationContinent?: string | null;
    /**
     * Premium Tier egress usage. Expected units such as "GiBy/s, By/s, etc."
     */
    egressRate?: Schema$Usage;
    /**
     * Which [region](https://cloud.google.com/compute/docs/regions-zones) the egress data comes from.
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
   * Specify Standard Tier Internet egress networking.
   */
  export interface Schema$StandardTierEgressWorkload {
    /**
     * Standard tier egress usage. Expected units such as "GiBy/s, By/s, etc."
     */
    egressRate?: Schema$Usage;
    /**
     * Which [region](https://cloud.google.com/compute/docs/regions-zones) the egress data comes from.
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
   * VLAN attachment for cloud interconnect.
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
   * Specify VM to VM egress.
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
     * Usage on Google Cloud CDN Egress.
     */
    cloudCdnEgressWorkload?: Schema$CloudCdnEgressWorkload;
    /**
     * Usage on Google Cloud CDN.
     */
    cloudCdnWorkload?: Schema$CloudCdnWorkload;
    /**
     * Usage on Google Cloud Interconnect Egress.
     */
    cloudInterconnectEgressWorkload?: Schema$CloudInterconnectEgressWorkload;
    /**
     * Usage on Google Cloud Interconnect.
     */
    cloudInterconnectWorkload?: Schema$CloudInterconnectWorkload;
    /**
     * Usage on a cloud storage egress.
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
     * Usage on Premium Tier Internet Egress.
     */
    premiumTierEgressWorkload?: Schema$PremiumTierEgressWorkload;
    /**
     * Usage on Standard Tier Internet Egress.
     */
    standardTierEgressWorkload?: Schema$StandardTierEgressWorkload;
    /**
     * Usage on Vm to Vm Egress.
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
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *   const res = await cloudbilling.billingAccounts.estimateCostScenario({
     *     // Resource name of the billing account for the cost estimate. The resource name has the form `billingAccounts/{billing_acount_id\}`. For example, `billingAccounts/012345-567890-ABCDEF` is the resource name for billing account `012345-567890-ABCDEF`. Must be specified.
     *     billingAccount: 'billingAccounts/my-billingAccount',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "costScenario": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "costEstimationResult": {}
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
     * Resource name of the billing account for the cost estimate. The resource name has the form `billingAccounts/{billing_acount_id\}`. For example, `billingAccounts/012345-567890-ABCDEF` is the resource name for billing account `012345-567890-ABCDEF`. Must be specified.
     */
    billingAccount?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$EstimateCostScenarioForBillingAccountRequest;
  }

  export class Resource$V1beta {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Estimate list prices using a `CostScenario` without a defined `billingAccount`.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/cloudbilling.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
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
     *   const res = await cloudbilling.estimateCostScenario({
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "costScenario": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "costEstimationResult": {}
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
