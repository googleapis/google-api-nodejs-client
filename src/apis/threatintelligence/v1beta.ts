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

export namespace threatintelligence_v1beta {
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
   * Threat Intelligence API
   *
   * threatintelligence.googleapis.com API.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const threatintelligence = google.threatintelligence('v1beta');
   * ```
   */
  export class Threatintelligence {
    context: APIRequestContext;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * The software that is affected by the vulnerability.
   */
  export interface Schema$AffectedSoftware {
    /**
     * Optional. The product of the software.
     */
    product?: string | null;
    /**
     * Optional. The vendor of the software.
     */
    vendor?: string | null;
  }
  /**
   * Stateful object representing a group of Findings. Key feature to an Alert is that it expresses the user's intent towards the findings of that group, even those that haven't occurred yet.
   */
  export interface Schema$Alert {
    /**
     * Optional. AI summary of the finding.
     */
    aiSummary?: string | null;
    /**
     * Output only. Assets that are impacted by this alert.
     */
    assets?: string[] | null;
    /**
     * Output only. Audit information for the alert.
     */
    audit?: Schema$Audit;
    /**
     * Output only. The resource names of the Configurations bound to this alert. Format: projects/{project\}/configurations/{configuration\}
     */
    configurations?: string[] | null;
    /**
     * Output only. Details object for the alert, not all alerts will have a details object.
     */
    detail?: Schema$AlertDetail;
    /**
     * Output only. A short title for the alert.
     */
    displayName?: string | null;
    /**
     * Output only. alert names of the alerts that are duplicates of this alert. Format: projects/{project\}/alerts/{alert\}
     */
    duplicatedBy?: string[] | null;
    /**
     * Output only. alert name of the alert this alert is a duplicate of. Format: projects/{project\}/alerts/{alert\}
     */
    duplicateOf?: string | null;
    /**
     * Optional. If included when updating an alert, this should be set to the current etag of the alert. If the etags do not match, the update will be rejected and an ABORTED error will be returned.
     */
    etag?: string | null;
    /**
     * Output only. External ID for the alert. This is used internally to provide protection against out of order updates.
     */
    externalId?: string | null;
    /**
     * Output only. Findings that are covered by this alert.
     */
    findings?: string[] | null;
    /**
     * Identifier. Server generated name for the alert. format is projects/{project\}/alerts/{alert\}
     */
    name?: string | null;
    /**
     * Output only. High-Precision Priority Analysis for the alert.
     */
    priorityAnalysis?: Schema$PriorityAnalysis;
    /**
     * Output only. High-Precision Relevance Analysis verdict for the alert.
     */
    relevanceAnalysis?: Schema$RelevanceAnalysis;
    /**
     * Output only. High-Precision Severity Analysis for the alert.
     */
    severityAnalysis?: Schema$SeverityAnalysis;
    /**
     * Output only. State of the alert.
     */
    state?: string | null;
  }
  /**
   * Container for different types of alert details.
   */
  export interface Schema$AlertDetail {
    /**
     * Data Leak alert detail type.
     */
    dataLeak?: Schema$DataLeakAlertDetail;
    /**
     * Output only. Name of the detail type. Will be set by the server during creation to the name of the field that is set in the detail union.
     */
    detailType?: string | null;
    /**
     * Initial Access Broker alert detail type.
     */
    initialAccessBroker?: Schema$InitialAccessBrokerAlertDetail;
    /**
     * Insider Threat alert detail type.
     */
    insiderThreat?: Schema$InsiderThreatAlertDetail;
    /**
     * Domain Monitoring alert detail type.
     */
    suspiciousDomain?: Schema$SuspiciousDomainAlertDetail;
    /**
     * Technology Watchlist alert detail type.
     */
    targetTechnology?: Schema$TargetTechnologyAlertDetail;
  }
  /**
   * A document that is associated with an alert.
   */
  export interface Schema$AlertDocument {
    /**
     * Output only. AI summary of the finding.
     */
    aiSummary?: string | null;
    /**
     * Output only. The author of the document.
     */
    author?: string | null;
    /**
     * Output only. Time when the origin source collected the intel.
     */
    collectionTime?: string | null;
    /**
     * Output only. The content of the document.
     */
    content?: string | null;
    /**
     * Output only. The time the document was created.
     */
    createTime?: string | null;
    /**
     * Output only. Time when GTI received the intel.
     */
    ingestTime?: string | null;
    /**
     * Output only. The language code of the document.
     */
    languageCode?: string | null;
    /**
     * Identifier. Server generated name for the alert document. format is projects/{project\}/alerts/{alert\}/documents/{document\}
     */
    name?: string | null;
    /**
     * Output only. Source of the intel item, e.g. DarkMarket.
     */
    source?: string | null;
    /**
     * Output only. Time when the intel was last updated by the source.
     */
    sourceUpdateTime?: string | null;
    /**
     * Output only. URI of the intel item from the source.
     */
    sourceUri?: string | null;
    /**
     * Output only. The title of the document, if available.
     */
    title?: string | null;
    /**
     * Output only. The translation of the document, if available.
     */
    translation?: Schema$AlertDocumentTranslation;
  }
  /**
   * The translation of an alert document.
   */
  export interface Schema$AlertDocumentTranslation {
    /**
     * Output only. The translated content of the document.
     */
    translatedContent?: string | null;
    /**
     * Output only. The translated title of the document.
     */
    translatedTitle?: string | null;
  }
  /**
   * Customer defined Configuration for asset discovery.
   */
  export interface Schema$AssetDiscoveryConfig {
    /**
     * Output only. Timestamp of the last scan completed. This field is set by the system and cannot be modified by the user.
     */
    lastScanCompleteTime?: string | null;
    /**
     * Output only. Timestamp of the last scan started - used for scheduling the next scan. This field is set by the system and cannot be modified by the user.
     */
    lastScanStartTime?: string | null;
    /**
     * Required. Frequency at which the scheduled discovery scan should be run. If not specified, the default frequency is DAILY.
     */
    scanFrequency?: string | null;
    /**
     * Optional. Seed assets that are out of scope for the scheduled discovery scan.
     */
    scopeExclusionAssets?: Schema$AssetDiscoverySeed[];
    /**
     * Required. Seed assets for the scheduled discovery scan. At least one seed asset is required.
     */
    seedAssets?: Schema$AssetDiscoverySeed[];
    /**
     * Required. Workflow to be used for the scheduled discovery scan. If not specified, the default workflow is EXTERNAL_DISCOVERY.
     */
    workflow?: string | null;
  }
  /**
   * Seed assets for asset discovery.
   */
  export interface Schema$AssetDiscoverySeed {
    /**
     * Required. Type of the seed asset.
     */
    seedType?: string | null;
    /**
     * Required. Value for the seed asset. Could be an IP address, network service, email addresses, etc.
     */
    seedValue?: string | null;
  }
  /**
   * Represents an association with a vulnerability.
   */
  export interface Schema$Association {
    /**
     * Required. The ID of the association.
     */
    id?: string | null;
    /**
     * Required. The type of the association.
     */
    type?: string | null;
  }
  /**
   * Tracks basic CRUD facts.
   */
  export interface Schema$Audit {
    /**
     * Output only. Time of creation.
     */
    createTime?: string | null;
    /**
     * Output only. Agent that created or updated the record, could be a UserId or a JobId.
     */
    creator?: string | null;
    /**
     * Output only. Agent that last updated the record, could be a UserId or a JobId.
     */
    updater?: string | null;
    /**
     * Output only. Time of creation or last update.
     */
    updateTime?: string | null;
  }
  /**
   * Sample compromised credential detail.
   */
  export interface Schema$CompromisedCredentialsFindingDetail {
    /**
     * Optional. Reference to the author this detail was extracted from. This is deprecated and will be removed.
     */
    author?: string | null;
    /**
     * Optional. Claimed site the credential is intended for.
     */
    credentialService?: string | null;
    /**
     * Optional. Reference to the dark web document. This is deprecated and will be removed.
     */
    darkWebDoc?: string | null;
    /**
     * Optional. This will contain a link to the external reference for this credential. If set, this is a link back to the DTM product to allow customers to get additional context about this finding.
     */
    externalReferenceUri?: string | null;
    /**
     * Optional. If the source of the credential was from a file dump this will contain the name of the file the credential was found in. This can be used by customers for context on where the credential was found and to try to find other references to the file in the wild.
     */
    fileDump?: string | null;
    /**
     * Optional. A list of hashes of the file dump. These will be prefixed with the algorithm. Example: "sha256:"
     */
    fileDumpHashes?: string[] | null;
    /**
     * Optional. If file_dump is set this will contain the size of the dump file in bytes. File dumps can be very large.
     */
    fileDumpSizeBytes?: string | null;
    /**
     * Optional. Reference to the forum this detail was extracted from. This is deprecated and will be removed.
     */
    forum?: string | null;
    /**
     * Optional. This will indicate the malware family that leaked this credential, if known.
     */
    malwareFamily?: string | null;
    /**
     * Optional. This indicates our best guess as to when the credential was leaked to the particular venue that triggered this finding. This is not necessarily the time the credential was actually leaked and it may not always be be accurate.
     */
    postedTime?: string | null;
    /**
     * Optional. If the source of a credential is publicly addressable this will contain a uri to the where the credential was found.
     */
    sourceUri?: string | null;
    /**
     * Required. This field will always be set and will be used to identify the user named in the credential leak. In cases where customers are authorized to see the actual user key this will be set to the actual user key. In cases where the customer is not authorized to see the actual user key this will be set to a hash of the user key. The hashed value is an intentionally opaque value that is not intended to be used for any other purpose than to uniquely identify the user in the context of this specific customer, service domain, and user name. Example: "user@example.com" or "redacted:".
     */
    userKey?: string | null;
    /**
     * Optional. Claimed evidence of the password/secret. This will always be hashed. In the event where the plaintext password is known it will be set to "redacted:" where the same hash will be presented when the same password is found for the same organization for the same service. Redaction is done by hashing the password with a salt that is unique to the customer organization and service. In the event where the plaintext password is not known it will be set to ":" where the algorithm is the hash algorithm used and the hash is the hash of the password using that algorithm. In the event we don't know the exact algorithm used we will set it to "hashed:".
     */
    userSecretEvidence?: string | null;
  }
  /**
   * A configuration represents a behavior an engine should follow when producing new findings.
   */
  export interface Schema$Configuration {
    /**
     * Output only. Audit information for the configuration.
     */
    audit?: Schema$Audit;
    /**
     * Optional. A description of the configuration.
     */
    description?: string | null;
    /**
     * Required. Domain specific details for the configuration.
     */
    detail?: Schema$ConfigurationDetail;
    /**
     * Output only. Human readable name for the configuration.
     */
    displayName?: string | null;
    /**
     * Identifier. Server generated name for the configuration. format is vaults/{vault\}/configurations/{configuration\}
     */
    name?: string | null;
    /**
     * Required. Name of the service that provides the configuration.
     */
    provider?: string | null;
    /**
     * Optional. State of the configuration.
     */
    state?: string | null;
    /**
     * Optional. A user-manipulatable version. Does not adhere to a specific format
     */
    version?: string | null;
  }
  /**
   * Wrapper class that contains the union struct for all the various configuration detail specific classes.
   */
  export interface Schema$ConfigurationDetail {
    /**
     * Asset Discovery detail config.
     */
    assetDiscovery?: Schema$AssetDiscoveryConfig;
    /**
     * Customer Profile detail config.
     */
    customerProfile?: Schema$CustomerProfileConfig;
    /**
     * Output only. Name of the detail type. Will be set by the server during creation to the name of the field that is set in the detail union.
     */
    detailType?: string | null;
    /**
     * Domain Monitoring detail config.
     */
    domainMonitoring?: Schema$DomainMonitoringConfig;
    /**
     * Initial Access Broker (IAB) detail config.
     */
    initialAccessBroker?: Schema$InitialAccessBrokerConfig;
    /**
     * Technology Watchlist detail config.
     */
    technologyWatchlist?: Schema$TechnologyWatchListConfig;
  }
  /**
   * A ConfigurationRevision is a snapshot of a Configuration at a point in time. It is immutable.
   */
  export interface Schema$ConfigurationRevision {
    /**
     * Output only. The time the Revision was created
     */
    createTime?: string | null;
    /**
     * Identifier. The name of the ConfigurationRevision Format: vaults//configurations//revisions/ OR projects//configurations//revisions/
     */
    name?: string | null;
    /**
     * The snapshot of the configuration
     */
    snapshot?: Schema$Configuration;
  }
  /**
   * Citation information for the customer profile.
   */
  export interface Schema$CustomerProfileCitation {
    /**
     * Required. The citation id for the citation. Should be unique within the profile.
     */
    citationId?: string | null;
    /**
     * Required. The name of the document the citation is from.
     */
    document?: string | null;
    /**
     * The time the citation was retrieved.
     */
    retrievalTime?: string | null;
    /**
     * Required. The source of the citation.
     */
    source?: string | null;
    /**
     * Optional. The url of the citation.
     */
    uri?: string | null;
  }
  /**
   * A string with citation ids.
   */
  export interface Schema$CustomerProfileCitedString {
    /**
     * Optional. The citation ids for the string.
     */
    citationIds?: string[] | null;
    /**
     * Required. The value of the string.
     */
    value?: string | null;
  }
  /**
   * Company information for the customer profile.
   */
  export interface Schema$CustomerProfileCompany {
    /**
     * Optional. The citation ids for the company.
     */
    citationIds?: string[] | null;
    /**
     * Required. The name of the company.
     */
    company?: string | null;
  }
  /**
   * CustomerProfileConfig is the configuration for the customer profile.
   */
  export interface Schema$CustomerProfileConfig {
    /**
     * Optional. Citations for the organization profile.
     */
    citations?: Schema$CustomerProfileCitation[];
    /**
     * Optional. Contact information for the organization.
     */
    contactInfo?: Schema$CustomerProfileContactInfo[];
    /**
     * Optional. Executives of the organization.
     */
    executives?: Schema$CustomerProfilePerson[];
    /**
     * Optional. The industries the organization is involved in.
     */
    industries?: Schema$CustomerProfileIndustry[];
    /**
     * Optional. Locations the organization is present or conducts business in.
     */
    locations?: Schema$CustomerProfileLocation[];
    /**
     * Required. The name of the organization.
     */
    org?: string | null;
    /**
     * Optional. A summary of the organization.
     */
    orgSummary?: string | null;
    /**
     * Optional. The parent companies of the organization.
     */
    parentCompanies?: Schema$CustomerProfileCompany[];
    /**
     * Optional. Product information for the organization.
     */
    products?: Schema$CustomerProfileProduct[];
    /**
     * Optional. Security considerations for the organization.
     */
    securityConsiderations?: Schema$CustomerProfileSecurityConsiderations;
    /**
     * Optional. A summarized version of the customer profile.
     */
    summary?: Schema$CustomerProfileSummary;
    /**
     * Optional. Technology presence of the organization.
     */
    technologyPresence?: string | null;
    /**
     * Optional. Web presence of the organization.
     */
    webPresences?: Schema$CustomerProfileWebPresence[];
  }
  /**
   * Contact information for the customer profile.
   */
  export interface Schema$CustomerProfileContactInfo {
    /**
     * The address of the contact.
     */
    address?: string | null;
    /**
     * Optional. The citation ids for the contact information.
     */
    citationIds?: string[] | null;
    /**
     * The email address of the contact.
     */
    email?: string | null;
    /**
     * Optional. The name of the contact.
     */
    label?: string | null;
    /**
     * The other contact information.
     */
    other?: string | null;
    /**
     * The phone number of the contact.
     */
    phone?: string | null;
  }
  /**
   * Industry information for the customer profile.
   */
  export interface Schema$CustomerProfileIndustry {
    /**
     * Optional. The citation ids for the industry.
     */
    citationIds?: string[] | null;
    /**
     * Required. The name of the industry.
     */
    industry?: string | null;
  }
  /**
   * Location information for the customer profile.
   */
  export interface Schema$CustomerProfileLocation {
    /**
     * Required. The address of the location.
     */
    address?: string | null;
    /**
     * Required. The brand of the location.
     */
    brand?: string | null;
    /**
     * Optional. The citation ids for the location.
     */
    citationIds?: string[] | null;
    /**
     * Optional. The type of location.
     */
    facilityType?: string | null;
  }
  /**
   * Person information for the customer profile.
   */
  export interface Schema$CustomerProfilePerson {
    /**
     * Optional. The citation ids for the person.
     */
    citationIds?: string[] | null;
    /**
     * Required. The name of the person.
     */
    name?: string | null;
    /**
     * Optional. The title of the person.
     */
    title?: string | null;
  }
  /**
   * Product information for the customer profile.
   */
  export interface Schema$CustomerProfileProduct {
    /**
     * Required. The brand of the product.
     */
    brand?: string | null;
    /**
     * Optional. The citation ids for the product.
     */
    citationIds?: string[] | null;
    /**
     * Required. The name of the product.
     */
    product?: string | null;
  }
  /**
   * Security considerations for the customer profile.
   */
  export interface Schema$CustomerProfileSecurityConsiderations {
    /**
     * Optional. A series of considerations for the security of the organization, such as "high risk of compromise" or "vulnerable to cyberbullying".
     */
    considerations?: string[] | null;
    /**
     * Optional. A note about the security considerations.
     */
    note?: string | null;
  }
  /**
   * A summarized version of the customer profile. Generated by the backend.
   */
  export interface Schema$CustomerProfileSummary {
    /**
     * Optional. The area the customer serves.
     */
    areaServed?: Schema$CustomerProfileCitedString;
    /**
     * Optional. A narrative summary of brands.
     */
    brands?: Schema$CustomerProfileCitedString;
    /**
     * Optional. The entity type of the customer.
     */
    entityType?: Schema$CustomerProfileCitedString;
    /**
     * Optional. The date the customer was founded.
     */
    founded?: Schema$CustomerProfileCitedString;
    /**
     * Optional. The headquarters of the customer.
     */
    headquarters?: Schema$CustomerProfileCitedString;
    /**
     * Optional. The industry the customer is in.
     */
    industry?: Schema$CustomerProfileCitedString;
    /**
     * Optional. A narrative summary of key people.
     */
    keyPeopleSummary?: Schema$CustomerProfileCitedString;
    /**
     * Optional. The parent company of the customer.
     */
    parentCompany?: Schema$CustomerProfileCitedString;
    /**
     * Optional. The primary website of the customer.
     */
    primaryWebsite?: Schema$CustomerProfileCitedString;
    /**
     * Optional. A narrative summary of products.
     */
    productsSummary?: Schema$CustomerProfileCitedString;
    /**
     * Optional. A narrative summary of services.
     */
    servicesSummary?: Schema$CustomerProfileCitedString;
    /**
     * Optional. The official name of the customer.
     */
    title?: Schema$CustomerProfileCitedString;
  }
  /**
   * Web presence information for the customer profile.
   */
  export interface Schema$CustomerProfileWebPresence {
    /**
     * Optional. The citation ids for the web presence.
     */
    citationIds?: string[] | null;
    /**
     * Required. The domain name of the web presence.
     */
    domain?: string | null;
  }
  /**
   * Captures the specific details of Data Leak alert.
   */
  export interface Schema$DataLeakAlertDetail {
    /**
     * Required. Array of ids to accommodate multiple discovery documents
     */
    discoveryDocumentIds?: string[] | null;
    /**
     * Required. Data Leak specific severity This will be the string representation of the DataLeakFindingDetail.Severityenum. (e.g., "LOW", "MEDIUM", "HIGH", "CRITICAL")
     */
    severity?: string | null;
  }
  /**
   * A detail object for a Data Leak finding.
   */
  export interface Schema$DataLeakFindingDetail {
    /**
     * Required. The unique identifier of the document that triggered the Data Leak finding. This ID can be used to retrieve the content of the document for further analysis.
     */
    documentId?: string | null;
    /**
     * Required. Reference to the match score of the Data Leak finding. This is a float value greater than 0 and less than or equal to 1 calculated by the matching engine based on the similarity of the document and the user provided configurations.
     */
    matchScore?: number | null;
    /**
     * Required. The severity of the Data Leak finding. This indicates the potential impact of the threat.
     */
    severity?: string | null;
  }
  /**
   * Any account-level configuration options will go here.
   */
  export interface Schema$DomainMonitoringConfig {
    /**
     * The domains to use as "seeds" for Suspicious Domain Monitoring.
     */
    domains?: Schema$DomainMonitoringDomain[];
  }
  /**
   * A Domain Monitoring "domain"
   */
  export interface Schema$DomainMonitoringDomain {
    /**
     * The domain name to match against.
     */
    domain?: string | null;
  }
  /**
   * EntityProfile represents the structured profile of a customer entity, containing key identifiers and descriptive attributes optimized for contextual matching against threat intelligence, particularly Initial Access Broker (IAB) offerings.
   */
  export interface Schema$EntityProfile {
    /**
     * Optional. List of specific countries of operation. Purpose: Essential for matching geographically targeted threats (e.g., actor specifies victims in 'DE'). Use ISO 3166-1 alpha-2 codes (e.g., "US", "GB", "JP", "DE").
     */
    countries?: string[] | null;
    /**
     * Required. List of primary internet domain names associated with the entity. Purpose: Crucial for explicit matching against domains mentioned in threat intel and can inform semantic matching. Must contain at least one domain. Example: ["acme.com", "acme.co.uk"]
     */
    domains?: string[] | null;
    /**
     * Optional. List of primary industry sectors the entity operates within. Purpose: Crucial for matching industry-specific threats and understanding attacker motivation. Use standardized GTI Industry Classification values. Example: ["Technology", "Financial Services", "Healthcare"]
     */
    industries?: string[] | null;
    /**
     * Required. Canonical name of the entity (e.g., the legal company name). Purpose: Primary identifier for the customer.
     */
    name?: string | null;
    /**
     * Optional. Specific geographic areas of *significant* operational concentration or strategic importance below the country level, if clearly identifiable and relevant. Purpose: Useful for highly localized threats, less commonly populated than `countries`. Example: ["Silicon Valley", "Frankfurt am Main Metropolitan Region"]
     */
    operationalAreas?: string[] | null;
    /**
     * Required. A concise, machine-generated (e.g., LLM) or human-curated summary of the entity. Purpose: Captures the semantic essence for embedding generation and similarity matching. Should synthesize key aspects like core business, scale, and market. Example: "Acme Corporation is a large, US-based multinational conglomerate operating..."
     */
    profileSummary?: string | null;
    /**
     * Optional. List of primary geopolitical regions where the entity has significant operations. Purpose: Filters geographically relevant threats. Use standardized names or codes where possible (e.g., "North America", "EMEA", "APAC", UN M49 codes).
     */
    regions?: string[] | null;
    /**
     * Optional. List of more granular sub-industries, if applicable and known. Purpose: Provides finer-grained context for more specific threat matching. Should align with GTI classifications if possible. Example: ["Semiconductors", "Cloud Computing Services", "Investment Banking"]
     */
    subIndustries?: string[] | null;
  }
  /**
   * Response message for EnumerateAlertFacets.
   */
  export interface Schema$EnumerateAlertFacetsResponse {
    /**
     * List of facets and the counts.
     */
    facets?: Schema$Facet[];
  }
  /**
   * Details the evidence used to determine the relevance verdict.
   */
  export interface Schema$Evidence {
    /**
     * A list of semantic themes or concepts found to be common, related, or aligned between the sources, supporting the verdict.
     */
    commonThemes?: string[] | null;
    /**
     * A list of semantic themes or descriptions unique to one source or semantically distant.
     */
    distinctThemes?: string[] | null;
  }
  /**
   * Facet represents a sub element of a resource for filtering. The results from this method are used to populate the filterable facets in the UI.
   */
  export interface Schema$Facet {
    /**
     * Name of the facet. This is also the string that needs to be used in the filtering expression.
     */
    facet?: string | null;
    /**
     * List of counts for the facet (if categorical).
     */
    facetCounts?: Schema$FacetCount[];
    /**
     * The type of the facet. Options include "string", "int", "float", "bool", "enum", "timestamp", "user" and are useful to show the right sort of UI controls when building a AIP-160 style filtering string.
     */
    facetType?: string | null;
    /**
     * Max value of the facet stringified based on type. Will be populated and formatted the same as min_value.
     */
    maxValue?: string | null;
    /**
     * Min value of the facet stringified based on type. This is only populated for facets that have a clear ordering, for types like enum it will be left empty. Timestamps will be formatted using RFC3339.
     */
    minValue?: string | null;
    /**
     * Total number of records that contain this facet with ANY value.
     */
    totalCount?: string | null;
  }
  /**
   * FacetCount represents a count of records with each facet value.
   */
  export interface Schema$FacetCount {
    /**
     * Count of records with the value.
     */
    count?: number | null;
    /**
     * Value of the facet stringified. Timestamps will be formatted using RFC3339.
     */
    value?: string | null;
  }
  /**
   * A ‘stateless’ and a point in time event that a check produced a result of interest.
   */
  export interface Schema$Finding {
    /**
     * Optional. AI summary of the finding.
     */
    aiSummary?: string | null;
    /**
     * Optional. Name of the alert that this finding is bound to.
     */
    alert?: string | null;
    /**
     * Optional. Optional - asset name if known. Format: vaults/{vault\}/assets/{asset\}
     */
    asset?: string | null;
    /**
     * Output only. Audit data about the finding.
     */
    audit?: Schema$Audit;
    /**
     * Optional. Configuration names that are bound to this finding.
     */
    configurations?: string[] | null;
    /**
     * Required. Holder of the domain specific details of the finding.
     */
    detail?: Schema$FindingDetail;
    /**
     * Required. A short descriptive title for the finding <= 250 chars. EX: "Actor 'baddy' offering $1000 for credentials of 'goodguy'".
     */
    displayName?: string | null;
    /**
     * Optional. Optional - name of the issue that this finding is bound to. Format: vaults/{vault\}/issues/{issue\}
     */
    issue?: string | null;
    /**
     * Identifier. Server generated name for the finding (leave clear during creation). Format: vaults/{vault\}/findings/{finding\}
     */
    name?: string | null;
    /**
     * Required. Logical source of this finding (name of the sub-engine).
     */
    provider?: string | null;
    /**
     * Output only. High-Precision Relevance Analysis verdict for the finding.
     */
    relevanceAnalysis?: Schema$RelevanceAnalysis;
    /**
     * Output only. When identical finding (same labels and same details) has re-occurred.
     */
    reoccurrenceTimes?: string[] | null;
    /**
     * Optional. Deprecated: Use the `severity_analysis` field instead. Base severity score from the finding source.
     */
    severity?: number | null;
    /**
     * Output only. High-Precision Severity Analysis verdict for the finding.
     */
    severityAnalysis?: Schema$SeverityAnalysis;
  }
  /**
   * Wrapper class that contains the union struct for all the various findings detail specific classes.
   */
  export interface Schema$FindingDetail {
    /**
     * Compromised Credentials detail type.
     */
    compromisedCredentials?: Schema$CompromisedCredentialsFindingDetail;
    /**
     * Data Leak finding detail type.
     */
    dataLeak?: Schema$DataLeakFindingDetail;
    /**
     * Output only. Name of the detail type. Will be set by the server during creation to the name of the field that is set in the detail union.
     */
    detailType?: string | null;
    /**
     * Inband vulnerability detail type.
     */
    inbandVulnerability?: Schema$InbandVulnerabilityFindingDetail;
    /**
     * Initial Access Broker finding detail type.
     */
    initialAccessBroker?: Schema$InitialAccessBrokerFindingDetail;
    /**
     * Insider Threat finding detail type.
     */
    insiderThreat?: Schema$InsiderThreatFindingDetail;
    /**
     * Misconfiguration finding detail type.
     */
    misconfiguration?: Schema$MisconfigurationFindingDetail;
    /**
     * Domain Monitoring finding detail type.
     */
    suspiciousDomain?: Schema$SuspiciousDomainFindingDetail;
    /**
     * Technology Watchlist finding detail type.
     */
    targetTechnology?: Schema$TargetTechnologyFindingDetail;
  }
  /**
   * Fleshed out vulnerability object that includes enough details to fill out a vulnerability specific view for an issue.
   */
  export interface Schema$InbandVulnerability {
    /**
     * Optional. The software that is affected by the vulnerability.
     */
    affectedSoftware?: Schema$AffectedSoftware[];
    /**
     * Optional. The authors of the vulnerability detection.
     */
    authors?: string[] | null;
    /**
     * Required. The CVE ID of the vulnerability.
     */
    cveId?: string | null;
    /**
     * Required. The CVSS V3.1 score (Base score)for the vulnerability. ( )
     */
    cvssV31Score?: number | null;
    /**
     * Optional. Temporal CVSS V3.1 score for the vulnerability.
     */
    cvssV31ScoreTemporal?: number | null;
    /**
     * Optional. The human readable description. This can be basic HTML formatted text.
     */
    description?: string | null;
    /**
     * Optional. The date the vulnerability was first disclosed.
     */
    disclosureTime?: string | null;
    /**
     * Optional. Exploitation state of the vulnerability, for example "Available".
     */
    exploitationState?: string | null;
    /**
     * Required. The external ID of the vulnerability.
     */
    externalVulnerabilityId?: string | null;
    /**
     * Optional. Whether this is exploited in the wild.
     */
    isExploitedWild?: boolean | null;
    /**
     * Optional. Reference URLs to the vulnerability.
     */
    referenceUrls?: string[] | null;
    /**
     * Optional. The human readable remediation recommendation. This can be basic HTML formatted text.
     */
    remediation?: string | null;
    /**
     * Optional. Risk rating for the vulnerability, for example "High".
     */
    riskRating?: string | null;
    /**
     * Optional. Human readable name for the vulnerability.
     */
    title?: string | null;
  }
  /**
   * This is a temporary detail type that will be used to support vulnerabilities until the engines start using the full vulnerability objects. The "Inband" refers to the fact that all vulnerability details are included with every finding.
   */
  export interface Schema$InbandVulnerabilityFindingDetail {
    /**
     * Optional. A short description of the proof of the vulnerability.
     */
    formattedProofDetails?: string | null;
    /**
     * Optional. The URI that lead to this detection, if appropriate.
     */
    requestUri?: string | null;
    /**
     * Required. Vulnerability metadata.
     */
    vulnerability?: Schema$InbandVulnerability;
  }
  /**
   * Captures the specific details of InitialAccessBroker (IAB) alert.
   */
  export interface Schema$InitialAccessBrokerAlertDetail {
    /**
     * Required. Array of ids to accommodate multiple discovery documents
     */
    discoveryDocumentIds?: string[] | null;
    /**
     * Required. IAB specific severity
     */
    severity?: string | null;
  }
  /**
   * InitialAccessBrokerConfig is specific to Initial Access Broker (IAB) matching scenarios.
   */
  export interface Schema$InitialAccessBrokerConfig {
    /**
     * Represents the comprehensive profile of the customer entity used for matching.
     */
    entityProfile?: Schema$EntityProfile;
  }
  /**
   * A detail object for an Initial Access Broker (IAB) finding.
   */
  export interface Schema$InitialAccessBrokerFindingDetail {
    /**
     * Required. The unique identifier of the document that triggered the IAB finding. This ID can be used to retrieve the content of the document for further analysis.
     */
    documentId?: string | null;
    /**
     * Required. Reference to the match score of the IAB finding. This is a float value between 0 and 1 calculated by the matching engine based on the similarity of the document and the user provided configurations.
     */
    matchScore?: number | null;
    /**
     * Required. The severity of the IAB finding. This indicates the potential impact of the threat.
     */
    severity?: string | null;
  }
  /**
   * Captures the specific details of InsiderThreat alert.
   */
  export interface Schema$InsiderThreatAlertDetail {
    /**
     * Required. Array of ids to accommodate multiple discovery documents
     */
    discoveryDocumentIds?: string[] | null;
    /**
     * Required. InsiderThreat specific severity This will be the string representation of the InsiderThreatFindingDetail.Severityenum. (e.g., "LOW", "MEDIUM", "HIGH", "CRITICAL")
     */
    severity?: string | null;
  }
  /**
   * A detail object for a InsiderThreat finding.
   */
  export interface Schema$InsiderThreatFindingDetail {
    /**
     * Required. The unique identifier of the document that triggered the InsiderThreat finding. This ID can be used to retrieve the content of the document for further analysis.
     */
    documentId?: string | null;
    /**
     * Required. Reference to the match score of the InsiderThreat finding. This is a float value greater than 0 and less than or equal to 1 calculated by the matching engine based on the similarity of the document and the user provided configurations.
     */
    matchScore?: number | null;
    /**
     * Required. The severity of the InsiderThreat finding. This indicates the potential impact of the threat.
     */
    severity?: string | null;
  }
  /**
   * Response message for ListAlerts.
   */
  export interface Schema$ListAlertsResponse {
    /**
     * List of alerts.
     */
    alerts?: Schema$Alert[];
    /**
     * Page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListConfigurationRevisions.
   */
  export interface Schema$ListConfigurationRevisionsResponse {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | null;
    /**
     * The Configuration Revisions associated with the specified Configuration
     */
    revisions?: Schema$ConfigurationRevision[];
  }
  /**
   * Response message for ListConfigurations.
   */
  export interface Schema$ListConfigurationsResponse {
    /**
     * List of configurations.
     */
    configurations?: Schema$Configuration[];
    /**
     * Page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response message for ListFindings.
   */
  export interface Schema$ListFindingsResponse {
    /**
     * List of findings.
     */
    findings?: Schema$Finding[];
    /**
     * Page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * Request message for MarkAlertAsBenign.
   */
  export interface Schema$MarkAlertAsBenignRequest {}
  /**
   * Request message for MarkAlertAsDuplicate.
   */
  export interface Schema$MarkAlertAsDuplicateRequest {
    /**
     * Optional. Name of the alert to mark as a duplicate of. Format: projects/{project\}/alerts/{alert\}
     */
    duplicateOf?: string | null;
  }
  /**
   * Request message for MarkAlertAsEscalated.
   */
  export interface Schema$MarkAlertAsEscalatedRequest {}
  /**
   * Request message for MarkAlertAsFalsePositive.
   */
  export interface Schema$MarkAlertAsFalsePositiveRequest {}
  /**
   * Request message for MarkAlertAsNotActionable.
   */
  export interface Schema$MarkAlertAsNotActionableRequest {}
  /**
   * Request message for MarkAlertAsRead.
   */
  export interface Schema$MarkAlertAsReadRequest {}
  /**
   * Request message for MarkAlertAsResolved.
   */
  export interface Schema$MarkAlertAsResolvedRequest {}
  /**
   * Request message for MarkAlertAsTrackedExternally.
   */
  export interface Schema$MarkAlertAsTrackedExternallyRequest {}
  /**
   * Request message for MarkAlertAsTriaged.
   */
  export interface Schema$MarkAlertAsTriagedRequest {}
  /**
   * Misconfiguration finding detail.
   */
  export interface Schema$MisconfigurationFindingDetail {
    /**
     * Required. The misconfiguration metadata.
     */
    misconfigurationMetadata?: Schema$MisconfigurationMetadata;
  }
  /**
   * Misconfiguration metadata.
   */
  export interface Schema$MisconfigurationMetadata {
    /**
     * Optional. Description of the misconfiguration.
     */
    description?: string | null;
    /**
     * Optional. A user-friendly name for the misconfiguration.
     */
    displayName?: string | null;
    /**
     * Required. The identifier for the misconfiguration. This is an internal name generated by the finding provider.
     */
    misconfigurationId?: string | null;
    /**
     * Optional. References to external resources that provide more information about the misconfiguration.
     */
    references?: Schema$MisconfigurationReference[];
    /**
     * Optional. Recommended remediation steps for the misconfiguration.
     */
    remediation?: string | null;
    /**
     * Optional. The endpoint which was found to have the vulnerability.
     */
    vulnerableUri?: string | null;
  }
  /**
   * A reference to an external resource that provides more information about a misconfiguration.
   */
  export interface Schema$MisconfigurationReference {
    /**
     * Required. The type of the reference (e.g., "description", "remediation").
     */
    type?: string | null;
    /**
     * Required. The URI of the reference.
     */
    uri?: string | null;
  }
  /**
   * Structured priority analysis for a threat.
   */
  export interface Schema$PriorityAnalysis {
    /**
     * The level of confidence in the given verdict.
     */
    confidence?: string | null;
    /**
     * The level of Priority.
     */
    priorityLevel?: string | null;
    /**
     * Human-readable explanation from the model, detailing why a particular result is considered to have a certain priority.
     */
    reasoning?: string | null;
  }
  /**
   * Request message for FetchAlertUriStatus.
   */
  export interface Schema$RefreshAlertUriStatusRequest {}
  /**
   * Response message for FetchAlertUriStatus.
   */
  export interface Schema$RefreshAlertUriStatusResponse {
    /**
     * Output only. Status of the alert in WebRisk.
     */
    state?: string | null;
  }
  /**
   * Structured relevance analysis for a threat.
   */
  export interface Schema$RelevanceAnalysis {
    /**
     * The level of confidence in the given verdict.
     */
    confidence?: string | null;
    /**
     * Evidence supporting the verdict, including matched and unmatched items.
     */
    evidence?: Schema$Evidence;
    /**
     * Human-readable explanation from the matcher, detailing why a particular result is considered relevant or not relevant.
     */
    reasoning?: string | null;
    /**
     * The level of relevance.
     */
    relevanceLevel?: string | null;
    /**
     * Indicates whether the threat is considered relevant.
     */
    relevant?: boolean | null;
  }
  /**
   * Request message for ReportAlertUri.
   */
  export interface Schema$ReportAlertUriRequest {}
  /**
   * Response message for ReportAlertUri.
   */
  export interface Schema$ReportAlertUriResponse {
    /**
     * Output only. Status of the alert in WebRisk.
     */
    state?: string | null;
  }
  /**
   * Response message for SearchFindings.
   */
  export interface Schema$SearchFindingsResponse {
    /**
     * List of findings.
     */
    findings?: Schema$Finding[];
    /**
     * Page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * Structured severity analysis for a threat.
   */
  export interface Schema$SeverityAnalysis {
    /**
     * The level of confidence in the given verdict.
     */
    confidence?: string | null;
    /**
     * Human-readable explanation from the model, detailing why a particular result is considered to have a certain severity.
     */
    reasoning?: string | null;
    /**
     * The level of severity.
     */
    severityLevel?: string | null;
  }
  /**
   * The alert detail for a suspicious domain finding.
   */
  export interface Schema$SuspiciousDomainAlertDetail {
    /**
     * The DNS details of the suspicious domain.
     */
    dns?: Schema$SuspiciousDomainDnsDetails;
    /**
     * Required. The suspicious domain name.
     */
    domain?: string | null;
    /**
     * The GTI details of the suspicious domain.
     */
    gtiDetails?: Schema$SuspiciousDomainGtiDetails;
    /**
     * Output only. Name of Web Risk submission operation.
     */
    webRiskOperation?: string | null;
    /**
     * Output only. Status of the Web Risk submission.
     */
    webRiskState?: string | null;
    /**
     * The whois details of the suspicious domain.
     */
    whois?: Schema$SuspiciousDomainWhoIsDetails;
  }
  /**
   * The DNS details of the suspicious domain.
   */
  export interface Schema$SuspiciousDomainDnsDetails {
    /**
     * The DNS records of the suspicious domain.
     */
    dnsRecords?: Schema$SuspiciousDomainDnsRecord[];
    /**
     * The time the DNS details were retrieved.
     */
    retrievalTime?: string | null;
  }
  /**
   * The DNS record of the suspicious domain.
   */
  export interface Schema$SuspiciousDomainDnsRecord {
    /**
     * The name of the DNS record.
     */
    record?: string | null;
    /**
     * The TTL of the DNS record.
     */
    ttl?: number | null;
    /**
     * The type of the DNS record.
     */
    type?: string | null;
    /**
     * The value of the DNS record.
     */
    value?: string | null;
  }
  /**
   * A detailed object for a suspicious Domain finding.
   */
  export interface Schema$SuspiciousDomainFindingDetail {
    /**
     * The DNS details of the suspicious domain.
     */
    dns?: Schema$SuspiciousDomainDnsDetails;
    /**
     * Required. The suspicious domain name.
     */
    domain?: string | null;
    /**
     * The GTI details of the suspicious domain.
     */
    gtiDetails?: Schema$SuspiciousDomainGtiDetails;
    /**
     * Required. Reference to the match score of the finding. This is a float value between 0 and 1 calculated by the matching engine.
     */
    matchScore?: number | null;
    /**
     * Required. The severity of the finding. This indicates the potential impact of the threat.
     */
    severity?: string | null;
    /**
     * The whois details of the suspicious domain.
     */
    whois?: Schema$SuspiciousDomainWhoIsDetails;
  }
  /**
   * The GTI details of the suspicious domain.
   */
  export interface Schema$SuspiciousDomainGtiDetails {
    /**
     * The threat score of the suspicious domain. The threat score is a number between 0 and 100.
     */
    threatScore?: number | null;
    /**
     * Output only. The verdict of the suspicious domain.
     */
    verdict?: string | null;
    /**
     * VirusTotal link for the domain
     */
    virustotalUri?: string | null;
  }
  /**
   * The whois details of the suspicious domain.
   */
  export interface Schema$SuspiciousDomainWhoIsDetails {
    /**
     * The time the whois details were retrieved.
     */
    retrievalTime?: string | null;
    /**
     * The whois details of the suspicious domain.
     */
    whois?: string | null;
  }
  /**
   * Contains details for a technology watchlist alert.
   */
  export interface Schema$TargetTechnologyAlertDetail {
    /**
     * Optional. The vulnerability match details.
     */
    vulnerabilityMatch?: Schema$VulnerabilityMatch;
  }
  /**
   * Contains details for a technology watchlist finding.
   */
  export interface Schema$TargetTechnologyFindingDetail {
    /**
     * Optional. The vulnerability match details.
     */
    vulnerabilityMatch?: Schema$VulnerabilityMatch;
  }
  /**
   * TechnologyWatchListAlertThreshold contains the thresholds for alerting.
   */
  export interface Schema$TechnologyWatchListAlertThreshold {
    /**
     * Optional. The minimum cvss V3 score for the alert. Ex: 7.0. Valid range is [0.0, 10.0].
     */
    cvssScoreMinimum?: number | null;
    /**
     * Optional. The minimum epss score for the alert. Ex: 0.8. Valid range is [0.0, 1.0].
     */
    epssScoreMinimum?: number | null;
    /**
     * Optional. The exploitation states of the alert.
     */
    exploitationStates?: string[] | null;
    /**
     * Optional. The minimum priority for the alert.
     */
    priorityMinimum?: string | null;
  }
  /**
   * TechnologyWatchListConfig is the configuration for the technology watchlist.
   */
  export interface Schema$TechnologyWatchListConfig {
    /**
     * Optional. Alert thresholds to effectively reduce noise.
     */
    alertThreshold?: Schema$TechnologyWatchListAlertThreshold;
    /**
     * Optional. List of vendor, technology or cpe fingerprint. example: Microsoft office 360 Apache Server 3.5 cpe:2.3:a:microsoft:outlook:*:*:*:*:*:*:*:*
     */
    technologies?: string[] | null;
  }
  /**
   * Response message for UpsertConfiguration.
   */
  export interface Schema$UpsertConfigurationResponse {
    /**
     * Output only. Created configuration ID with server assigned id.
     */
    configuration?: string | null;
  }
  /**
   * Contains details about a vulnerability match.
   */
  export interface Schema$VulnerabilityMatch {
    /**
     * Optional. Associated threat actors, malware, etc. This is embedded as a snapshot because the details of the association at the time of the vulnerability match are important for context and reporting.
     */
    associations?: Schema$Association[];
    /**
     * Required. The collection ID of the vulnerability. Ex: "vulnerability--cve-2025-9876".
     */
    collectionId?: string | null;
    /**
     * Required. The CVE ID of the vulnerability. Ex: "CVE-2025-9876". See https://www.cve.org/ for more information.
     */
    cveId?: string | null;
    /**
     * Required. The CVSS v3 score of the vulnerability. Example: 6.4.
     */
    cvss3Score?: number | null;
    /**
     * Required. A description of the vulnerability.
     */
    description?: string | null;
    /**
     * Required. The exploitation state of the vulnerability.
     */
    exploitationState?: string | null;
    /**
     * Required. The risk rating of the vulnerability.
     */
    riskRating?: string | null;
    /**
     * Required. The affected technologies. Ex: "Apache Struts".
     */
    technologies?: string[] | null;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    alerts: Resource$Projects$Alerts;
    configurations: Resource$Projects$Configurations;
    findings: Resource$Projects$Findings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.alerts = new Resource$Projects$Alerts(this.context);
      this.configurations = new Resource$Projects$Configurations(this.context);
      this.findings = new Resource$Projects$Findings(this.context);
    }
  }

  export class Resource$Projects$Alerts {
    context: APIRequestContext;
    documents: Resource$Projects$Alerts$Documents;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.documents = new Resource$Projects$Alerts$Documents(this.context);
    }

    /**
     * Marks an alert as benign - BENIGN.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.alerts.benign({
     *     // Required. Name of the alert to mark as a benign. Format: projects/{project\}/alerts/{alert\}
     *     name: 'projects/my-project/alerts/my-alert',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiSummary": "my_aiSummary",
     *   //   "assets": [],
     *   //   "audit": {},
     *   //   "configurations": [],
     *   //   "detail": {},
     *   //   "displayName": "my_displayName",
     *   //   "duplicateOf": "my_duplicateOf",
     *   //   "duplicatedBy": [],
     *   //   "etag": "my_etag",
     *   //   "externalId": "my_externalId",
     *   //   "findings": [],
     *   //   "name": "my_name",
     *   //   "priorityAnalysis": {},
     *   //   "relevanceAnalysis": {},
     *   //   "severityAnalysis": {},
     *   //   "state": "my_state"
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
    benign(
      params: Params$Resource$Projects$Alerts$Benign,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    benign(
      params?: Params$Resource$Projects$Alerts$Benign,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Alert>>;
    benign(
      params: Params$Resource$Projects$Alerts$Benign,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    benign(
      params: Params$Resource$Projects$Alerts$Benign,
      options: MethodOptions | BodyResponseCallback<Schema$Alert>,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    benign(
      params: Params$Resource$Projects$Alerts$Benign,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    benign(callback: BodyResponseCallback<Schema$Alert>): void;
    benign(
      paramsOrCallback?:
        | Params$Resource$Projects$Alerts$Benign
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Alert>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Alerts$Benign;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alerts$Benign;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:benign').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$Alert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Alert>(parameters);
      }
    }

    /**
     * Marks an alert as a duplicate of another alert. - DUPLICATE.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.alerts.duplicate({
     *     // Required. Name of the alert to mark as a duplicate. Format: projects/{project\}/alerts/{alert\}
     *     name: 'projects/my-project/alerts/my-alert',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "duplicateOf": "my_duplicateOf"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiSummary": "my_aiSummary",
     *   //   "assets": [],
     *   //   "audit": {},
     *   //   "configurations": [],
     *   //   "detail": {},
     *   //   "displayName": "my_displayName",
     *   //   "duplicateOf": "my_duplicateOf",
     *   //   "duplicatedBy": [],
     *   //   "etag": "my_etag",
     *   //   "externalId": "my_externalId",
     *   //   "findings": [],
     *   //   "name": "my_name",
     *   //   "priorityAnalysis": {},
     *   //   "relevanceAnalysis": {},
     *   //   "severityAnalysis": {},
     *   //   "state": "my_state"
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
    duplicate(
      params: Params$Resource$Projects$Alerts$Duplicate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    duplicate(
      params?: Params$Resource$Projects$Alerts$Duplicate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Alert>>;
    duplicate(
      params: Params$Resource$Projects$Alerts$Duplicate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    duplicate(
      params: Params$Resource$Projects$Alerts$Duplicate,
      options: MethodOptions | BodyResponseCallback<Schema$Alert>,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    duplicate(
      params: Params$Resource$Projects$Alerts$Duplicate,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    duplicate(callback: BodyResponseCallback<Schema$Alert>): void;
    duplicate(
      paramsOrCallback?:
        | Params$Resource$Projects$Alerts$Duplicate
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Alert>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Alerts$Duplicate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alerts$Duplicate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:duplicate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$Alert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Alert>(parameters);
      }
    }

    /**
     * EnumerateAlertFacets returns the facets and the number of alerts that meet the filter criteria and have that value for each facet.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.alerts.enumerateFacets({
     *     // Optional. Filter on what alerts will be enumerated.
     *     filter: 'placeholder-value',
     *     // Required. Parent of the alerts.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "facets": []
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
    enumerateFacets(
      params: Params$Resource$Projects$Alerts$Enumeratefacets,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    enumerateFacets(
      params?: Params$Resource$Projects$Alerts$Enumeratefacets,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$EnumerateAlertFacetsResponse>>;
    enumerateFacets(
      params: Params$Resource$Projects$Alerts$Enumeratefacets,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    enumerateFacets(
      params: Params$Resource$Projects$Alerts$Enumeratefacets,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$EnumerateAlertFacetsResponse>,
      callback: BodyResponseCallback<Schema$EnumerateAlertFacetsResponse>
    ): void;
    enumerateFacets(
      params: Params$Resource$Projects$Alerts$Enumeratefacets,
      callback: BodyResponseCallback<Schema$EnumerateAlertFacetsResponse>
    ): void;
    enumerateFacets(
      callback: BodyResponseCallback<Schema$EnumerateAlertFacetsResponse>
    ): void;
    enumerateFacets(
      paramsOrCallback?:
        | Params$Resource$Projects$Alerts$Enumeratefacets
        | BodyResponseCallback<Schema$EnumerateAlertFacetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$EnumerateAlertFacetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$EnumerateAlertFacetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$EnumerateAlertFacetsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Alerts$Enumeratefacets;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alerts$Enumeratefacets;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/alerts:enumerateFacets').replace(
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
        createAPIRequest<Schema$EnumerateAlertFacetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$EnumerateAlertFacetsResponse>(
          parameters
        );
      }
    }

    /**
     * Marks an alert as escalated - ESCALATED.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.alerts.escalate({
     *     // Required. Name of the alert to mark as escalated. Format: projects/{project\}/alerts/{alert\}
     *     name: 'projects/my-project/alerts/my-alert',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiSummary": "my_aiSummary",
     *   //   "assets": [],
     *   //   "audit": {},
     *   //   "configurations": [],
     *   //   "detail": {},
     *   //   "displayName": "my_displayName",
     *   //   "duplicateOf": "my_duplicateOf",
     *   //   "duplicatedBy": [],
     *   //   "etag": "my_etag",
     *   //   "externalId": "my_externalId",
     *   //   "findings": [],
     *   //   "name": "my_name",
     *   //   "priorityAnalysis": {},
     *   //   "relevanceAnalysis": {},
     *   //   "severityAnalysis": {},
     *   //   "state": "my_state"
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
    escalate(
      params: Params$Resource$Projects$Alerts$Escalate,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    escalate(
      params?: Params$Resource$Projects$Alerts$Escalate,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Alert>>;
    escalate(
      params: Params$Resource$Projects$Alerts$Escalate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    escalate(
      params: Params$Resource$Projects$Alerts$Escalate,
      options: MethodOptions | BodyResponseCallback<Schema$Alert>,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    escalate(
      params: Params$Resource$Projects$Alerts$Escalate,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    escalate(callback: BodyResponseCallback<Schema$Alert>): void;
    escalate(
      paramsOrCallback?:
        | Params$Resource$Projects$Alerts$Escalate
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Alert>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Alerts$Escalate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alerts$Escalate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:escalate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$Alert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Alert>(parameters);
      }
    }

    /**
     * Marks an alert as a false positive - FALSE_POSITIVE.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.alerts.falsePositive({
     *     // Required. Name of the alert to mark as a false positive. Format: projects/{project\}/alerts/{alert\}
     *     name: 'projects/my-project/alerts/my-alert',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiSummary": "my_aiSummary",
     *   //   "assets": [],
     *   //   "audit": {},
     *   //   "configurations": [],
     *   //   "detail": {},
     *   //   "displayName": "my_displayName",
     *   //   "duplicateOf": "my_duplicateOf",
     *   //   "duplicatedBy": [],
     *   //   "etag": "my_etag",
     *   //   "externalId": "my_externalId",
     *   //   "findings": [],
     *   //   "name": "my_name",
     *   //   "priorityAnalysis": {},
     *   //   "relevanceAnalysis": {},
     *   //   "severityAnalysis": {},
     *   //   "state": "my_state"
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
    falsePositive(
      params: Params$Resource$Projects$Alerts$Falsepositive,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    falsePositive(
      params?: Params$Resource$Projects$Alerts$Falsepositive,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Alert>>;
    falsePositive(
      params: Params$Resource$Projects$Alerts$Falsepositive,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    falsePositive(
      params: Params$Resource$Projects$Alerts$Falsepositive,
      options: MethodOptions | BodyResponseCallback<Schema$Alert>,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    falsePositive(
      params: Params$Resource$Projects$Alerts$Falsepositive,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    falsePositive(callback: BodyResponseCallback<Schema$Alert>): void;
    falsePositive(
      paramsOrCallback?:
        | Params$Resource$Projects$Alerts$Falsepositive
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Alert>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Alerts$Falsepositive;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alerts$Falsepositive;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:falsePositive').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$Alert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Alert>(parameters);
      }
    }

    /**
     * Get an alert by name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.alerts.get({
     *     // Required. Name of the alert to get. Format: projects/{project\}/alerts/{alert\}
     *     name: 'projects/my-project/alerts/my-alert',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiSummary": "my_aiSummary",
     *   //   "assets": [],
     *   //   "audit": {},
     *   //   "configurations": [],
     *   //   "detail": {},
     *   //   "displayName": "my_displayName",
     *   //   "duplicateOf": "my_duplicateOf",
     *   //   "duplicatedBy": [],
     *   //   "etag": "my_etag",
     *   //   "externalId": "my_externalId",
     *   //   "findings": [],
     *   //   "name": "my_name",
     *   //   "priorityAnalysis": {},
     *   //   "relevanceAnalysis": {},
     *   //   "severityAnalysis": {},
     *   //   "state": "my_state"
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
      params: Params$Resource$Projects$Alerts$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Alerts$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Alert>>;
    get(
      params: Params$Resource$Projects$Alerts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Alerts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Alert>,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    get(
      params: Params$Resource$Projects$Alerts$Get,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    get(callback: BodyResponseCallback<Schema$Alert>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Alerts$Get
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Alert>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Alerts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alerts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
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
        createAPIRequest<Schema$Alert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Alert>(parameters);
      }
    }

    /**
     * Get a list of alerts that meet the filter criteria.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.alerts.list({
     *     // Optional. Filter criteria.
     *     filter: 'placeholder-value',
     *     // Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2".
     *     orderBy: 'placeholder-value',
     *     // Optional. Page size.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent of the alerts. Format: projects/{project\}
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alerts": [],
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
      params: Params$Resource$Projects$Alerts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Alerts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAlertsResponse>>;
    list(
      params: Params$Resource$Projects$Alerts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Alerts$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAlertsResponse>,
      callback: BodyResponseCallback<Schema$ListAlertsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Alerts$List,
      callback: BodyResponseCallback<Schema$ListAlertsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAlertsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Alerts$List
        | BodyResponseCallback<Schema$ListAlertsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAlertsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAlertsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAlertsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Alerts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alerts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/alerts').replace(
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
        createAPIRequest<Schema$ListAlertsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAlertsResponse>(parameters);
      }
    }

    /**
     * Marks an alert as not actionable - NOT_ACTIONABLE.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.alerts.notActionable({
     *     // Required. Name of the alert to mark as a not actionable. Format: projects/{project\}/alerts/{alert\}
     *     name: 'projects/my-project/alerts/my-alert',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiSummary": "my_aiSummary",
     *   //   "assets": [],
     *   //   "audit": {},
     *   //   "configurations": [],
     *   //   "detail": {},
     *   //   "displayName": "my_displayName",
     *   //   "duplicateOf": "my_duplicateOf",
     *   //   "duplicatedBy": [],
     *   //   "etag": "my_etag",
     *   //   "externalId": "my_externalId",
     *   //   "findings": [],
     *   //   "name": "my_name",
     *   //   "priorityAnalysis": {},
     *   //   "relevanceAnalysis": {},
     *   //   "severityAnalysis": {},
     *   //   "state": "my_state"
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
    notActionable(
      params: Params$Resource$Projects$Alerts$Notactionable,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    notActionable(
      params?: Params$Resource$Projects$Alerts$Notactionable,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Alert>>;
    notActionable(
      params: Params$Resource$Projects$Alerts$Notactionable,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    notActionable(
      params: Params$Resource$Projects$Alerts$Notactionable,
      options: MethodOptions | BodyResponseCallback<Schema$Alert>,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    notActionable(
      params: Params$Resource$Projects$Alerts$Notactionable,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    notActionable(callback: BodyResponseCallback<Schema$Alert>): void;
    notActionable(
      paramsOrCallback?:
        | Params$Resource$Projects$Alerts$Notactionable
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Alert>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Alerts$Notactionable;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alerts$Notactionable;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:notActionable').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$Alert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Alert>(parameters);
      }
    }

    /**
     * Marks an alert as read - READ.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.alerts.read({
     *     // Required. Name of the alert to mark as read. Format: projects/{project\}/alerts/{alert\}
     *     name: 'projects/my-project/alerts/my-alert',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiSummary": "my_aiSummary",
     *   //   "assets": [],
     *   //   "audit": {},
     *   //   "configurations": [],
     *   //   "detail": {},
     *   //   "displayName": "my_displayName",
     *   //   "duplicateOf": "my_duplicateOf",
     *   //   "duplicatedBy": [],
     *   //   "etag": "my_etag",
     *   //   "externalId": "my_externalId",
     *   //   "findings": [],
     *   //   "name": "my_name",
     *   //   "priorityAnalysis": {},
     *   //   "relevanceAnalysis": {},
     *   //   "severityAnalysis": {},
     *   //   "state": "my_state"
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
    read(
      params: Params$Resource$Projects$Alerts$Read,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    read(
      params?: Params$Resource$Projects$Alerts$Read,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Alert>>;
    read(
      params: Params$Resource$Projects$Alerts$Read,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    read(
      params: Params$Resource$Projects$Alerts$Read,
      options: MethodOptions | BodyResponseCallback<Schema$Alert>,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    read(
      params: Params$Resource$Projects$Alerts$Read,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    read(callback: BodyResponseCallback<Schema$Alert>): void;
    read(
      paramsOrCallback?:
        | Params$Resource$Projects$Alerts$Read
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Alert>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Alerts$Read;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alerts$Read;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:read').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$Alert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Alert>(parameters);
      }
    }

    /**
     * Return the status of a URI submitted to Google WebRisk.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.alerts.refreshUriStatus({
     *     // Required. Name of alert to refresh status from WebRisk
     *     name: 'projects/my-project/alerts/my-alert',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "state": "my_state"
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
    refreshUriStatus(
      params: Params$Resource$Projects$Alerts$Refreshuristatus,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    refreshUriStatus(
      params?: Params$Resource$Projects$Alerts$Refreshuristatus,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RefreshAlertUriStatusResponse>>;
    refreshUriStatus(
      params: Params$Resource$Projects$Alerts$Refreshuristatus,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    refreshUriStatus(
      params: Params$Resource$Projects$Alerts$Refreshuristatus,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RefreshAlertUriStatusResponse>,
      callback: BodyResponseCallback<Schema$RefreshAlertUriStatusResponse>
    ): void;
    refreshUriStatus(
      params: Params$Resource$Projects$Alerts$Refreshuristatus,
      callback: BodyResponseCallback<Schema$RefreshAlertUriStatusResponse>
    ): void;
    refreshUriStatus(
      callback: BodyResponseCallback<Schema$RefreshAlertUriStatusResponse>
    ): void;
    refreshUriStatus(
      paramsOrCallback?:
        | Params$Resource$Projects$Alerts$Refreshuristatus
        | BodyResponseCallback<Schema$RefreshAlertUriStatusResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RefreshAlertUriStatusResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RefreshAlertUriStatusResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RefreshAlertUriStatusResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Alerts$Refreshuristatus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alerts$Refreshuristatus;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:refreshUriStatus').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$RefreshAlertUriStatusResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RefreshAlertUriStatusResponse>(
          parameters
        );
      }
    }

    /**
     * Report the URI associated with an alert to Google WebRisk.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.alerts.reportAlertUri({
     *     // Required. Name of alert to submit to WebRisk.
     *     name: 'projects/my-project/alerts/my-alert',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "state": "my_state"
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
    reportAlertUri(
      params: Params$Resource$Projects$Alerts$Reportalerturi,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    reportAlertUri(
      params?: Params$Resource$Projects$Alerts$Reportalerturi,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ReportAlertUriResponse>>;
    reportAlertUri(
      params: Params$Resource$Projects$Alerts$Reportalerturi,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reportAlertUri(
      params: Params$Resource$Projects$Alerts$Reportalerturi,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReportAlertUriResponse>,
      callback: BodyResponseCallback<Schema$ReportAlertUriResponse>
    ): void;
    reportAlertUri(
      params: Params$Resource$Projects$Alerts$Reportalerturi,
      callback: BodyResponseCallback<Schema$ReportAlertUriResponse>
    ): void;
    reportAlertUri(
      callback: BodyResponseCallback<Schema$ReportAlertUriResponse>
    ): void;
    reportAlertUri(
      paramsOrCallback?:
        | Params$Resource$Projects$Alerts$Reportalerturi
        | BodyResponseCallback<Schema$ReportAlertUriResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ReportAlertUriResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ReportAlertUriResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ReportAlertUriResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Alerts$Reportalerturi;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alerts$Reportalerturi;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:reportAlertUri').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$ReportAlertUriResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ReportAlertUriResponse>(parameters);
      }
    }

    /**
     * Marks an alert to closed state - RESOLVED.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.alerts.resolve({
     *     // Required. Name of the alert to mark as resolved. Format: projects/{project\}/alerts/{alert\}
     *     name: 'projects/my-project/alerts/my-alert',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiSummary": "my_aiSummary",
     *   //   "assets": [],
     *   //   "audit": {},
     *   //   "configurations": [],
     *   //   "detail": {},
     *   //   "displayName": "my_displayName",
     *   //   "duplicateOf": "my_duplicateOf",
     *   //   "duplicatedBy": [],
     *   //   "etag": "my_etag",
     *   //   "externalId": "my_externalId",
     *   //   "findings": [],
     *   //   "name": "my_name",
     *   //   "priorityAnalysis": {},
     *   //   "relevanceAnalysis": {},
     *   //   "severityAnalysis": {},
     *   //   "state": "my_state"
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
    resolve(
      params: Params$Resource$Projects$Alerts$Resolve,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    resolve(
      params?: Params$Resource$Projects$Alerts$Resolve,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Alert>>;
    resolve(
      params: Params$Resource$Projects$Alerts$Resolve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resolve(
      params: Params$Resource$Projects$Alerts$Resolve,
      options: MethodOptions | BodyResponseCallback<Schema$Alert>,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    resolve(
      params: Params$Resource$Projects$Alerts$Resolve,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    resolve(callback: BodyResponseCallback<Schema$Alert>): void;
    resolve(
      paramsOrCallback?:
        | Params$Resource$Projects$Alerts$Resolve
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Alert>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Alerts$Resolve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alerts$Resolve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:resolve').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$Alert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Alert>(parameters);
      }
    }

    /**
     * Marks an alert as tracked externally - TRACKED_EXTERNALLY.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.alerts.trackExternally({
     *     // Required. Name of the alert to mark as tracked externally. Format: projects/{project\}/alerts/{alert\}
     *     name: 'projects/my-project/alerts/my-alert',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiSummary": "my_aiSummary",
     *   //   "assets": [],
     *   //   "audit": {},
     *   //   "configurations": [],
     *   //   "detail": {},
     *   //   "displayName": "my_displayName",
     *   //   "duplicateOf": "my_duplicateOf",
     *   //   "duplicatedBy": [],
     *   //   "etag": "my_etag",
     *   //   "externalId": "my_externalId",
     *   //   "findings": [],
     *   //   "name": "my_name",
     *   //   "priorityAnalysis": {},
     *   //   "relevanceAnalysis": {},
     *   //   "severityAnalysis": {},
     *   //   "state": "my_state"
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
    trackExternally(
      params: Params$Resource$Projects$Alerts$Trackexternally,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    trackExternally(
      params?: Params$Resource$Projects$Alerts$Trackexternally,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Alert>>;
    trackExternally(
      params: Params$Resource$Projects$Alerts$Trackexternally,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    trackExternally(
      params: Params$Resource$Projects$Alerts$Trackexternally,
      options: MethodOptions | BodyResponseCallback<Schema$Alert>,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    trackExternally(
      params: Params$Resource$Projects$Alerts$Trackexternally,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    trackExternally(callback: BodyResponseCallback<Schema$Alert>): void;
    trackExternally(
      paramsOrCallback?:
        | Params$Resource$Projects$Alerts$Trackexternally
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Alert>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Alerts$Trackexternally;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alerts$Trackexternally;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:trackExternally').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$Alert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Alert>(parameters);
      }
    }

    /**
     * Marks an alert as triaged - TRIAGED.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.alerts.triage({
     *     // Required. Name of the alert to mark as a triaged. Format: projects/{project\}/alerts/{alert\}
     *     name: 'projects/my-project/alerts/my-alert',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {}
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiSummary": "my_aiSummary",
     *   //   "assets": [],
     *   //   "audit": {},
     *   //   "configurations": [],
     *   //   "detail": {},
     *   //   "displayName": "my_displayName",
     *   //   "duplicateOf": "my_duplicateOf",
     *   //   "duplicatedBy": [],
     *   //   "etag": "my_etag",
     *   //   "externalId": "my_externalId",
     *   //   "findings": [],
     *   //   "name": "my_name",
     *   //   "priorityAnalysis": {},
     *   //   "relevanceAnalysis": {},
     *   //   "severityAnalysis": {},
     *   //   "state": "my_state"
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
    triage(
      params: Params$Resource$Projects$Alerts$Triage,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    triage(
      params?: Params$Resource$Projects$Alerts$Triage,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Alert>>;
    triage(
      params: Params$Resource$Projects$Alerts$Triage,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    triage(
      params: Params$Resource$Projects$Alerts$Triage,
      options: MethodOptions | BodyResponseCallback<Schema$Alert>,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    triage(
      params: Params$Resource$Projects$Alerts$Triage,
      callback: BodyResponseCallback<Schema$Alert>
    ): void;
    triage(callback: BodyResponseCallback<Schema$Alert>): void;
    triage(
      paramsOrCallback?:
        | Params$Resource$Projects$Alerts$Triage
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Alert>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Alert>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Alerts$Triage;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alerts$Triage;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:triage').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$Alert>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Alert>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Alerts$Benign extends StandardParameters {
    /**
     * Required. Name of the alert to mark as a benign. Format: projects/{project\}/alerts/{alert\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MarkAlertAsBenignRequest;
  }
  export interface Params$Resource$Projects$Alerts$Duplicate extends StandardParameters {
    /**
     * Required. Name of the alert to mark as a duplicate. Format: projects/{project\}/alerts/{alert\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MarkAlertAsDuplicateRequest;
  }
  export interface Params$Resource$Projects$Alerts$Enumeratefacets extends StandardParameters {
    /**
     * Optional. Filter on what alerts will be enumerated.
     */
    filter?: string;
    /**
     * Required. Parent of the alerts.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Alerts$Escalate extends StandardParameters {
    /**
     * Required. Name of the alert to mark as escalated. Format: projects/{project\}/alerts/{alert\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MarkAlertAsEscalatedRequest;
  }
  export interface Params$Resource$Projects$Alerts$Falsepositive extends StandardParameters {
    /**
     * Required. Name of the alert to mark as a false positive. Format: projects/{project\}/alerts/{alert\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MarkAlertAsFalsePositiveRequest;
  }
  export interface Params$Resource$Projects$Alerts$Get extends StandardParameters {
    /**
     * Required. Name of the alert to get. Format: projects/{project\}/alerts/{alert\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Alerts$List extends StandardParameters {
    /**
     * Optional. Filter criteria.
     */
    filter?: string;
    /**
     * Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2".
     */
    orderBy?: string;
    /**
     * Optional. Page size.
     */
    pageSize?: number;
    /**
     * Optional. Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent of the alerts. Format: projects/{project\}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Alerts$Notactionable extends StandardParameters {
    /**
     * Required. Name of the alert to mark as a not actionable. Format: projects/{project\}/alerts/{alert\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MarkAlertAsNotActionableRequest;
  }
  export interface Params$Resource$Projects$Alerts$Read extends StandardParameters {
    /**
     * Required. Name of the alert to mark as read. Format: projects/{project\}/alerts/{alert\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MarkAlertAsReadRequest;
  }
  export interface Params$Resource$Projects$Alerts$Refreshuristatus extends StandardParameters {
    /**
     * Required. Name of alert to refresh status from WebRisk
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RefreshAlertUriStatusRequest;
  }
  export interface Params$Resource$Projects$Alerts$Reportalerturi extends StandardParameters {
    /**
     * Required. Name of alert to submit to WebRisk.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReportAlertUriRequest;
  }
  export interface Params$Resource$Projects$Alerts$Resolve extends StandardParameters {
    /**
     * Required. Name of the alert to mark as resolved. Format: projects/{project\}/alerts/{alert\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MarkAlertAsResolvedRequest;
  }
  export interface Params$Resource$Projects$Alerts$Trackexternally extends StandardParameters {
    /**
     * Required. Name of the alert to mark as tracked externally. Format: projects/{project\}/alerts/{alert\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MarkAlertAsTrackedExternallyRequest;
  }
  export interface Params$Resource$Projects$Alerts$Triage extends StandardParameters {
    /**
     * Required. Name of the alert to mark as a triaged. Format: projects/{project\}/alerts/{alert\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MarkAlertAsTriagedRequest;
  }

  export class Resource$Projects$Alerts$Documents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Gets a specific document associated with an alert.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.alerts.documents.get({
     *     // Required. Name of the alert document to get. Format: projects/{project\}/alerts/{alert\}/documents/{document\}
     *     name: 'projects/my-project/alerts/my-alert/documents/my-document',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiSummary": "my_aiSummary",
     *   //   "author": "my_author",
     *   //   "collectionTime": "my_collectionTime",
     *   //   "content": "my_content",
     *   //   "createTime": "my_createTime",
     *   //   "ingestTime": "my_ingestTime",
     *   //   "languageCode": "my_languageCode",
     *   //   "name": "my_name",
     *   //   "source": "my_source",
     *   //   "sourceUpdateTime": "my_sourceUpdateTime",
     *   //   "sourceUri": "my_sourceUri",
     *   //   "title": "my_title",
     *   //   "translation": {}
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
      params: Params$Resource$Projects$Alerts$Documents$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Alerts$Documents$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AlertDocument>>;
    get(
      params: Params$Resource$Projects$Alerts$Documents$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Alerts$Documents$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AlertDocument>,
      callback: BodyResponseCallback<Schema$AlertDocument>
    ): void;
    get(
      params: Params$Resource$Projects$Alerts$Documents$Get,
      callback: BodyResponseCallback<Schema$AlertDocument>
    ): void;
    get(callback: BodyResponseCallback<Schema$AlertDocument>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Alerts$Documents$Get
        | BodyResponseCallback<Schema$AlertDocument>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AlertDocument>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AlertDocument>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AlertDocument>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Alerts$Documents$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Alerts$Documents$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
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
        createAPIRequest<Schema$AlertDocument>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AlertDocument>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Alerts$Documents$Get extends StandardParameters {
    /**
     * Required. Name of the alert document to get. Format: projects/{project\}/alerts/{alert\}/documents/{document\}
     */
    name?: string;
  }

  export class Resource$Projects$Configurations {
    context: APIRequestContext;
    revisions: Resource$Projects$Configurations$Revisions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.revisions = new Resource$Projects$Configurations$Revisions(
        this.context
      );
    }

    /**
     * Get a configuration by name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.configurations.get({
     *     // Required. Name of the configuration to get. Format: vaults/{vault\}/configurations/{configuration\}
     *     name: 'projects/my-project/configurations/my-configuration',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "audit": {},
     *   //   "description": "my_description",
     *   //   "detail": {},
     *   //   "displayName": "my_displayName",
     *   //   "name": "my_name",
     *   //   "provider": "my_provider",
     *   //   "state": "my_state",
     *   //   "version": "my_version"
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
      params: Params$Resource$Projects$Configurations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Configurations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Configuration>>;
    get(
      params: Params$Resource$Projects$Configurations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Configurations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Configuration>,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    get(
      params: Params$Resource$Projects$Configurations$Get,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    get(callback: BodyResponseCallback<Schema$Configuration>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Configurations$Get
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Configuration>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Configurations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configurations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
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
        createAPIRequest<Schema$Configuration>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Configuration>(parameters);
      }
    }

    /**
     * Get a list of configurations that meet the filter criteria.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.configurations.list({
     *     // Optional. Filter criteria.
     *     filter: 'placeholder-value',
     *     // Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2".
     *     orderBy: 'placeholder-value',
     *     // Optional. Page size.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent of the configuration. Format: vaults/{vault\}
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configurations": [],
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
      params: Params$Resource$Projects$Configurations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Configurations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListConfigurationsResponse>>;
    list(
      params: Params$Resource$Projects$Configurations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Configurations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConfigurationsResponse>,
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Configurations$List,
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Configurations$List
        | BodyResponseCallback<Schema$ListConfigurationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConfigurationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConfigurationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListConfigurationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Configurations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configurations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/configurations').replace(
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
        createAPIRequest<Schema$ListConfigurationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConfigurationsResponse>(parameters);
      }
    }

    /**
     * Creates or updates a configuration.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.configurations.upsert({
     *     // Required. Parent of the configuration.
     *     parent: 'projects/my-project',
     *     // Optional. Time that the configuration should be considered to have been published. This is an advanced feature used when onboarding and bulk loading data from other systems. Do not set this field without consulting with the API team.
     *     publishTime: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "audit": {},
     *       //   "description": "my_description",
     *       //   "detail": {},
     *       //   "displayName": "my_displayName",
     *       //   "name": "my_name",
     *       //   "provider": "my_provider",
     *       //   "state": "my_state",
     *       //   "version": "my_version"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configuration": "my_configuration"
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
    upsert(
      params: Params$Resource$Projects$Configurations$Upsert,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    upsert(
      params?: Params$Resource$Projects$Configurations$Upsert,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UpsertConfigurationResponse>>;
    upsert(
      params: Params$Resource$Projects$Configurations$Upsert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    upsert(
      params: Params$Resource$Projects$Configurations$Upsert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$UpsertConfigurationResponse>,
      callback: BodyResponseCallback<Schema$UpsertConfigurationResponse>
    ): void;
    upsert(
      params: Params$Resource$Projects$Configurations$Upsert,
      callback: BodyResponseCallback<Schema$UpsertConfigurationResponse>
    ): void;
    upsert(
      callback: BodyResponseCallback<Schema$UpsertConfigurationResponse>
    ): void;
    upsert(
      paramsOrCallback?:
        | Params$Resource$Projects$Configurations$Upsert
        | BodyResponseCallback<Schema$UpsertConfigurationResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UpsertConfigurationResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UpsertConfigurationResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UpsertConfigurationResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Configurations$Upsert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configurations$Upsert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/configurations:upsert').replace(
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
        createAPIRequest<Schema$UpsertConfigurationResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UpsertConfigurationResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Configurations$Get extends StandardParameters {
    /**
     * Required. Name of the configuration to get. Format: vaults/{vault\}/configurations/{configuration\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Configurations$List extends StandardParameters {
    /**
     * Optional. Filter criteria.
     */
    filter?: string;
    /**
     * Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2".
     */
    orderBy?: string;
    /**
     * Optional. Page size.
     */
    pageSize?: number;
    /**
     * Optional. Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent of the configuration. Format: vaults/{vault\}
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Configurations$Upsert extends StandardParameters {
    /**
     * Required. Parent of the configuration.
     */
    parent?: string;
    /**
     * Optional. Time that the configuration should be considered to have been published. This is an advanced feature used when onboarding and bulk loading data from other systems. Do not set this field without consulting with the API team.
     */
    publishTime?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Configuration;
  }

  export class Resource$Projects$Configurations$Revisions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List configuration revisions that meet the filter criteria.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.configurations.revisions.list({
     *     // Optional. An AIP-160 filter string
     *     filter: 'placeholder-value',
     *     // Optional. Specify ordering of response
     *     orderBy: 'placeholder-value',
     *     // Optional. Page Size
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token provided by the API
     *     pageToken: 'placeholder-value',
     *     // Required. The name of the Configuration to retrieve Revisions for
     *     parent: 'projects/my-project/configurations/my-configuration',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "revisions": []
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
      params: Params$Resource$Projects$Configurations$Revisions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Configurations$Revisions$List,
      options?: MethodOptions
    ): Promise<
      GaxiosResponseWithHTTP2<Schema$ListConfigurationRevisionsResponse>
    >;
    list(
      params: Params$Resource$Projects$Configurations$Revisions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Configurations$Revisions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConfigurationRevisionsResponse>,
      callback: BodyResponseCallback<Schema$ListConfigurationRevisionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Configurations$Revisions$List,
      callback: BodyResponseCallback<Schema$ListConfigurationRevisionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConfigurationRevisionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Configurations$Revisions$List
        | BodyResponseCallback<Schema$ListConfigurationRevisionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConfigurationRevisionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConfigurationRevisionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<
          GaxiosResponseWithHTTP2<Schema$ListConfigurationRevisionsResponse>
        >
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Configurations$Revisions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Configurations$Revisions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/revisions').replace(
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
        createAPIRequest<Schema$ListConfigurationRevisionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConfigurationRevisionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Configurations$Revisions$List extends StandardParameters {
    /**
     * Optional. An AIP-160 filter string
     */
    filter?: string;
    /**
     * Optional. Specify ordering of response
     */
    orderBy?: string;
    /**
     * Optional. Page Size
     */
    pageSize?: number;
    /**
     * Optional. A page token provided by the API
     */
    pageToken?: string;
    /**
     * Required. The name of the Configuration to retrieve Revisions for
     */
    parent?: string;
  }

  export class Resource$Projects$Findings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a finding by name.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.findings.get({
     *     // Required. Name of the finding to get.
     *     name: 'projects/my-project/findings/my-finding',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aiSummary": "my_aiSummary",
     *   //   "alert": "my_alert",
     *   //   "asset": "my_asset",
     *   //   "audit": {},
     *   //   "configurations": [],
     *   //   "detail": {},
     *   //   "displayName": "my_displayName",
     *   //   "issue": "my_issue",
     *   //   "name": "my_name",
     *   //   "provider": "my_provider",
     *   //   "relevanceAnalysis": {},
     *   //   "reoccurrenceTimes": [],
     *   //   "severity": {},
     *   //   "severityAnalysis": {}
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
      params: Params$Resource$Projects$Findings$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Findings$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Finding>>;
    get(
      params: Params$Resource$Projects$Findings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Findings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Finding>,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    get(
      params: Params$Resource$Projects$Findings$Get,
      callback: BodyResponseCallback<Schema$Finding>
    ): void;
    get(callback: BodyResponseCallback<Schema$Finding>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Findings$Get
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Finding>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Finding>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Findings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Findings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
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
        createAPIRequest<Schema$Finding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Finding>(parameters);
      }
    }

    /**
     * Get a list of findings that meet the filter criteria.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.findings.list({
     *     // Optional. Filter criteria.
     *     filter: 'placeholder-value',
     *     // Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2".
     *     orderBy: 'placeholder-value',
     *     // Optional. Page size.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent of the findings.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "findings": [],
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
      params: Params$Resource$Projects$Findings$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Findings$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListFindingsResponse>>;
    list(
      params: Params$Resource$Projects$Findings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Findings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFindingsResponse>,
      callback: BodyResponseCallback<Schema$ListFindingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Findings$List,
      callback: BodyResponseCallback<Schema$ListFindingsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListFindingsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Findings$List
        | BodyResponseCallback<Schema$ListFindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListFindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListFindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListFindingsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Findings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Findings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/findings').replace(
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
        createAPIRequest<Schema$ListFindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListFindingsResponse>(parameters);
      }
    }

    /**
     * SearchFindings is a more powerful version of ListFindings that supports complex queries like "findings for issues" using functions such as `has_issue` and `has_asset` in the query string. Example to search for findings for a specific issue: `has_issue("name=\"vaults/vault-12345/issues/issue-12345\"")`)
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/threatintelligence.googleapis.com
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
     * const threatintelligence = google.threatintelligence('v1beta');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await threatintelligence.projects.findings.search({
     *     // Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2".
     *     orderBy: 'placeholder-value',
     *     // Optional. Page size.
     *     pageSize: 'placeholder-value',
     *     // Optional. Page token.
     *     pageToken: 'placeholder-value',
     *     // Required. Parent of the findings. Format: vaults/{vault\}
     *     parent: 'projects/my-project',
     *     // Optional. Query on what findings will be returned. This supports the same filter criteria as FindingService.ListFindings as well as the following relationship queries `has_issue` and `has_asset`. Examples: - has_issue("name=\"vaults/vault-12345/issues/issue-12345\"") - has_asset("name=\"vaults/vault-12345/assets/asset-12345\"")
     *     query: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "findings": [],
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
    search(
      params: Params$Resource$Projects$Findings$Search,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    search(
      params?: Params$Resource$Projects$Findings$Search,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SearchFindingsResponse>>;
    search(
      params: Params$Resource$Projects$Findings$Search,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    search(
      params: Params$Resource$Projects$Findings$Search,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchFindingsResponse>,
      callback: BodyResponseCallback<Schema$SearchFindingsResponse>
    ): void;
    search(
      params: Params$Resource$Projects$Findings$Search,
      callback: BodyResponseCallback<Schema$SearchFindingsResponse>
    ): void;
    search(callback: BodyResponseCallback<Schema$SearchFindingsResponse>): void;
    search(
      paramsOrCallback?:
        | Params$Resource$Projects$Findings$Search
        | BodyResponseCallback<Schema$SearchFindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchFindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchFindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SearchFindingsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Findings$Search;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Findings$Search;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://threatintelligence.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/findings:search').replace(
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
        createAPIRequest<Schema$SearchFindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SearchFindingsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Findings$Get extends StandardParameters {
    /**
     * Required. Name of the finding to get.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Findings$List extends StandardParameters {
    /**
     * Optional. Filter criteria.
     */
    filter?: string;
    /**
     * Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2".
     */
    orderBy?: string;
    /**
     * Optional. Page size.
     */
    pageSize?: number;
    /**
     * Optional. Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent of the findings.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Findings$Search extends StandardParameters {
    /**
     * Optional. Order by criteria in the csv format: "field1,field2 desc" or "field1,field2" or "field1 asc, field2".
     */
    orderBy?: string;
    /**
     * Optional. Page size.
     */
    pageSize?: number;
    /**
     * Optional. Page token.
     */
    pageToken?: string;
    /**
     * Required. Parent of the findings. Format: vaults/{vault\}
     */
    parent?: string;
    /**
     * Optional. Query on what findings will be returned. This supports the same filter criteria as FindingService.ListFindings as well as the following relationship queries `has_issue` and `has_asset`. Examples: - has_issue("name=\"vaults/vault-12345/issues/issue-12345\"") - has_asset("name=\"vaults/vault-12345/assets/asset-12345\"")
     */
    query?: string;
  }
}
