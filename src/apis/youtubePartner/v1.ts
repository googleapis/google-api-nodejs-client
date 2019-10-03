/**
 * Copyright 2019 Google LLC
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

import { 
  OAuth2Client, 
  JWT, 
  Compute, 
  UserRefreshClient 
} from 'google-auth-library';
import { 
  GoogleConfigurable, 
  createAPIRequest, 
  MethodOptions, 
  GlobalOptions, 
  BodyResponseCallback, 
  APIRequestContext 
} from 'googleapis-common';
import { GaxiosPromise } from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace youtubePartner_v1 {


export interface Options extends GlobalOptions {
  version: 'v1';
}

interface StandardParameters {
    /**
    * Data format for the response.
    */
  alt?: string;
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
    * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
    */
  quotaUser?: string;
    /**
    * Deprecated. Please use quotaUser instead.
    */
  userIp?: string;
  }

/**
 * YouTube Content ID API
 *
 * API for YouTube partners. To use this API a YouTube CMS account is required.
 *
 * @example
 * const {google} = require('googleapis');
 * const youtubePartner = google.youtubePartner('v1');
 *
 * @namespace youtubePartner
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Youtubepartner
 */
export class Youtubepartner {
  context: APIRequestContext;
            assetLabels: Resource$Assetlabels;
          assetMatchPolicy: Resource$Assetmatchpolicy;
          assetRelationships: Resource$Assetrelationships;
          assets: Resource$Assets;
          assetSearch: Resource$Assetsearch;
          assetShares: Resource$Assetshares;
          campaigns: Resource$Campaigns;
          claimHistory: Resource$Claimhistory;
          claims: Resource$Claims;
          claimSearch: Resource$Claimsearch;
          contentOwnerAdvertisingOptions: Resource$Contentowneradvertisingoptions;
          contentOwners: Resource$Contentowners;
          liveCuepoints: Resource$Livecuepoints;
          metadataHistory: Resource$Metadatahistory;
          orders: Resource$Orders;
          ownership: Resource$Ownership;
          ownershipHistory: Resource$Ownershiphistory;
          package: Resource$Package;
          policies: Resource$Policies;
          referenceConflicts: Resource$Referenceconflicts;
          references: Resource$References;
          spreadsheetTemplate: Resource$Spreadsheettemplate;
          uploader: Resource$Uploader;
          validator: Resource$Validator;
          videoAdvertisingOptions: Resource$Videoadvertisingoptions;
          whitelists: Resource$Whitelists;
      
  constructor(options: GlobalOptions, google?: GoogleConfigurable) {
    this.context = {
      _options: options || {},
      google,
    };

                  this.assetLabels = new Resource$Assetlabels(this.context);
              this.assetMatchPolicy = new Resource$Assetmatchpolicy(this.context);
              this.assetRelationships = new Resource$Assetrelationships(this.context);
              this.assets = new Resource$Assets(this.context);
              this.assetSearch = new Resource$Assetsearch(this.context);
              this.assetShares = new Resource$Assetshares(this.context);
              this.campaigns = new Resource$Campaigns(this.context);
              this.claimHistory = new Resource$Claimhistory(this.context);
              this.claims = new Resource$Claims(this.context);
              this.claimSearch = new Resource$Claimsearch(this.context);
              this.contentOwnerAdvertisingOptions = new Resource$Contentowneradvertisingoptions(this.context);
              this.contentOwners = new Resource$Contentowners(this.context);
              this.liveCuepoints = new Resource$Livecuepoints(this.context);
              this.metadataHistory = new Resource$Metadatahistory(this.context);
              this.orders = new Resource$Orders(this.context);
              this.ownership = new Resource$Ownership(this.context);
              this.ownershipHistory = new Resource$Ownershiphistory(this.context);
              this.package = new Resource$Package(this.context);
              this.policies = new Resource$Policies(this.context);
              this.referenceConflicts = new Resource$Referenceconflicts(this.context);
              this.references = new Resource$References(this.context);
              this.spreadsheetTemplate = new Resource$Spreadsheettemplate(this.context);
              this.uploader = new Resource$Uploader(this.context);
              this.validator = new Resource$Validator(this.context);
              this.videoAdvertisingOptions = new Resource$Videoadvertisingoptions(this.context);
              this.whitelists = new Resource$Whitelists(this.context);
            }


}

export interface Schema$AdBreak {
      /**
     * The time of the ad break specified as the number of seconds after the start of the video when the break occurs.
     */
        midrollSeconds?: number|null;
        /**
     * The point at which the break occurs during the video playback.
     */
        position?: string|null;
  }
export interface Schema$AllowedAdvertisingOptions {
      /**
     * This setting indicates whether the partner can display ads when videos run in an embedded player.
     */
        adsOnEmbeds?: boolean|null;
        /**
     * This property identifies the resource type. Its value is youtubePartner#allowedAdvertisingOptions.
     */
        kind?: string|null;
        /**
     * A list of ad formats that the partner is allowed to use for its uploaded videos.
     */
        licAdFormats?: string[]|null;
        /**
     * A list of ad formats that the partner is allowed to use for claimed, user-uploaded content.
     */
        ugcAdFormats?: string[]|null;
  }
export interface Schema$Asset {
      /**
     * A list of asset IDs that can be used to refer to the asset. The list contains values if the asset represents multiple constituent assets that have been merged. In that case, any of the asset IDs originally assigned to the constituent assets could be used to update the master, or synthesized, asset.
     */
        aliasId?: string[]|null;
        /**
     * An ID that YouTube assigns and uses to uniquely identify the asset.
     */
        id?: string|null;
        /**
     * The type of the API resource. For asset resources, the value is youtubePartner#asset.
     */
        kind?: string|null;
        /**
     * A list of asset labels on the asset.
     */
        label?: string[]|null;
        /**
     * The matchPolicy object contains information about the asset&#39;s match policy, which YouTube applies to user-uploaded videos that match the asset.
     */
        matchPolicy?: Schema$AssetMatchPolicy;
          matchPolicyEffective?: Schema$AssetMatchPolicy;
          matchPolicyMine?: Schema$AssetMatchPolicy;
        /**
     * The metadata object contains information that identifies and describes the asset. This information could be used to search for the asset or to eliminate duplication within YouTube&#39;s database.
     */
        metadata?: Schema$Metadata;
          metadataEffective?: Schema$Metadata;
          metadataMine?: Schema$Metadata;
        /**
     * The ownership object identifies an asset&#39;s owners and provides additional details about their ownership, such as the territories where they own the asset.
     */
        ownership?: Schema$RightsOwnership;
        /**
     * The ownershipConflicts object contains information about the asset&#39;s ownership conflicts.
     */
        ownershipConflicts?: Schema$OwnershipConflicts;
          ownershipEffective?: Schema$RightsOwnership;
          ownershipMine?: Schema$RightsOwnership;
        /**
     * The asset&#39;s status.
     */
        status?: string|null;
        /**
     * The date and time the asset was created. The value is specified in RFC 3339 (YYYY-MM-DDThh:mm:ss.000Z) format.
     */
        timeCreated?: string|null;
        /**
     * The asset&#39;s type. This value determines the metadata fields that you can set for the asset. In addition, certain API functions may only be supported for specific types of assets. For example, composition assets may have more complex ownership data than other types of assets.
     */
        type?: string|null;
  }
export interface Schema$AssetLabel {
      /**
     * The type of the API resource. For assetLabel resources, this value is youtubePartner#assetLabel.
     */
        kind?: string|null;
        /**
     * Name of the asset label.
     */
        labelName?: string|null;
  }
export interface Schema$AssetLabelListResponse {
      /**
     * A list of assetLabel resources that match the request criteria.
     */
        items?: Schema$AssetLabel[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#assetLabelList.
     */
        kind?: string|null;
  }
export interface Schema$AssetListResponse {
      /**
     * A list of asset resources that match the request criteria.
     */
        items?: Schema$Asset[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#assetList.
     */
        kind?: string|null;
  }
export interface Schema$AssetMatchPolicy {
      /**
     * The type of the API resource. Value: youtubePartner#assetMatchPolicy.
     */
        kind?: string|null;
        /**
     * A value that uniquely identifies the Policy resource that YouTube applies to user-uploaded videos that match the asset.
     */
        policyId?: string|null;
        /**
     * A list of rules that collectively define the policy that the content owner wants to apply to user-uploaded videos that match the asset. Each rule specifies the action that YouTube should take and may optionally specify the conditions under which that action is enforced.
     */
        rules?: Schema$PolicyRule[];
  }
export interface Schema$AssetRelationship {
      /**
     * The ID of the child (contained) asset.
     */
        childAssetId?: string|null;
        /**
     * A value that YouTube assigns and uses to uniquely identify the asset relationship.
     */
        id?: string|null;
        /**
     * The type of the API resource. For this resource, the value is youtubePartner#assetRelationship.
     */
        kind?: string|null;
        /**
     * The ID of the parent (containing) asset.
     */
        parentAssetId?: string|null;
  }
export interface Schema$AssetRelationshipListResponse {
      /**
     * A list of assetRelationship resources that match the request criteria.
     */
        items?: Schema$AssetRelationship[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#assetRelationshipList.
     */
        kind?: string|null;
        /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page of results.
     */
        nextPageToken?: string|null;
        /**
     * The pageInfo object encapsulates paging information for the result set.
     */
        pageInfo?: Schema$PageInfo;
  }
export interface Schema$AssetSearchResponse {
      /**
     * A list of asset resources that match the request criteria.
     */
        items?: Schema$AssetSnippet[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#assetSnippetList.
     */
        kind?: string|null;
        /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page of results.
     */
        nextPageToken?: string|null;
        /**
     * The pageInfo object encapsulates paging information for the result set.
     */
        pageInfo?: Schema$PageInfo;
  }
export interface Schema$AssetShare {
      /**
     * The type of the API resource. For this resource, the value is youtubePartner#assetShare.
     */
        kind?: string|null;
        /**
     * A value that YouTube assigns and uses to uniquely identify the asset share.
     */
        shareId?: string|null;
        /**
     * A value that YouTube assigns and uses to uniquely identify the asset view.
     */
        viewId?: string|null;
  }
export interface Schema$AssetShareListResponse {
      /**
     * An assetShare resource that matches the request criteria.
     */
        items?: Schema$AssetShare[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#assetShareList.
     */
        kind?: string|null;
        /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page of results.
     */
        nextPageToken?: string|null;
        /**
     * The pageInfo object encapsulates paging information for the result set.
     */
        pageInfo?: Schema$PageInfo;
  }
export interface Schema$AssetSnippet {
      /**
     * Custom ID assigned by the content owner to this asset.
     */
        customId?: string|null;
        /**
     * An ID that YouTube assigns and uses to uniquely identify the asset.
     */
        id?: string|null;
        /**
     * The ISRC (International Standard Recording Code) for this asset.
     */
        isrc?: string|null;
        /**
     * The ISWC (International Standard Musical Work Code) for this asset.
     */
        iswc?: string|null;
        /**
     * The type of the API resource. For this operation, the value is youtubePartner#assetSnippet.
     */
        kind?: string|null;
        /**
     * The date and time the asset was created. The value is specified in RFC 3339 (YYYY-MM-DDThh:mm:ss.000Z) format.
     */
        timeCreated?: string|null;
        /**
     * Title of this asset.
     */
        title?: string|null;
        /**
     * The asset&#39;s type. This value determines which metadata fields might be included in the metadata object.
     */
        type?: string|null;
  }
export interface Schema$Campaign {
      /**
     * The campaignData object contains details like the campaign&#39;s start and end dates, target and source.
     */
        campaignData?: Schema$CampaignData;
        /**
     * The unique ID that YouTube uses to identify the campaign.
     */
        id?: string|null;
        /**
     * The type of the API resource. For campaign resources, this value is youtubePartner#campaign.
     */
        kind?: string|null;
        /**
     * The status of the campaign.
     */
        status?: string|null;
        /**
     * The time the campaign was created.
     */
        timeCreated?: string|null;
        /**
     * The time the campaign was last modified.
     */
        timeLastModified?: string|null;
  }
export interface Schema$CampaignData {
      /**
     * The campaignSource object contains information about the assets for which the campaign will generate links.
     */
        campaignSource?: Schema$CampaignSource;
        /**
     * The time at which the campaign should expire. Do not specify a value if the campaign has no expiration time.
     */
        expireTime?: string|null;
        /**
     * The user-given name of the campaign.
     */
        name?: string|null;
        /**
     * A list of videos or channels that will be linked to from claimed videos that are included in the campaign.
     */
        promotedContent?: Schema$PromotedContent[];
        /**
     * The time at which the campaign should start. Do not specify a value if the campaign should start immediately.
     */
        startTime?: string|null;
  }
export interface Schema$CampaignList {
      /**
     * A list of campaigns.
     */
        items?: Schema$Campaign[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#campaignList.
     */
        kind?: string|null;
  }
export interface Schema$CampaignSource {
      /**
     * The type of the campaign source.
     */
        sourceType?: string|null;
        /**
     * A list of values of the campaign source.
     */
        sourceValue?: string[]|null;
  }
export interface Schema$CampaignTargetLink {
      /**
     * The channel ID or video ID of the link target.
     */
        targetId?: string|null;
        /**
     * Indicates whether the link target is a channel or video.
     */
        targetType?: string|null;
  }
export interface Schema$Claim {
      /**
     * The applied policy for the viewing owner on the claim. This might not be the same as the final claim policy on the video as it does not consider other partners&#39; policy of the same claim.
     */
        appliedPolicy?: Schema$Policy;
        /**
     * The unique YouTube asset ID that identifies the asset associated with the claim.
     */
        assetId?: string|null;
        /**
     * Indicates whether or not the claimed video should be blocked anywhere it is not explicitly owned.
     */
        blockOutsideOwnership?: boolean|null;
        /**
     * This value indicates whether the claim covers the audio, video, or audiovisual portion of the claimed content.
     */
        contentType?: string|null;
        /**
     * The ID that YouTube assigns and uses to uniquely identify the claim.
     */
        id?: string|null;
        /**
     * Indicates whether or not the claim is a partner uploaded claim.
     */
        isPartnerUploaded?: boolean|null;
        /**
     * The type of the API resource. For claim resources, this value is youtubePartner#claim.
     */
        kind?: string|null;
        /**
     * If this claim was auto-generated based on a provided reference, this section will provide details of the match that generated the claim.
     */
        matchInfo?: { longestMatch?: { durationSecs?: string; referenceOffset?: string; userVideoOffset?: string; }; matchSegments?: Schema$MatchSegment[]; referenceId?: string; totalMatch?: { referenceDurationSecs?: string; userVideoDurationSecs?: string; }; }|null;
          origin?: { source?: string; }|null;
        /**
     * The policy provided by the viewing owner on the claim.
     */
        policy?: Schema$Policy;
        /**
     * The claim&#39;s status. When updating a claim, you can update its status from active to inactive to effectively release the claim, but the API does not support other updates to a claim&#39;s status.
     */
        status?: string|null;
        /**
     * The time the claim was created.
     */
        timeCreated?: string|null;
        /**
     * The unique YouTube video ID that identifies the video associated with the claim.
     */
        videoId?: string|null;
  }
export interface Schema$ClaimedVideoDefaults {
      /**
     * Set this property to true to enable automatically generated breaks for a newly claimed video longer than 10 minutes. The first partner that claims the video sets its default advertising options to that video. claimedVideoOptions.auto_generated_breaks_default
     */
        autoGeneratedBreaks?: boolean|null;
        /**
     * Set this property to true to indicate that the channel&#39;s claimedVideoOptions can override the content owner&#39;s claimedVideoOptions.
     */
        channelOverride?: boolean|null;
        /**
     * Identifies this resource as default options for newly claimed video. Value: &quot;youtubePartner#claimedVideoDefaults&quot;.
     */
        kind?: string|null;
        /**
     * A list of ad formats that could be used as the default settings for a newly claimed video. The first partner that claims the video sets its default advertising options to that video.
     */
        newVideoDefaults?: string[]|null;
  }
export interface Schema$ClaimEvent {
      /**
     * The type of the API resource. For claimEvent resources, this value is youtubePartner#claimEvent.
     */
        kind?: string|null;
        /**
     * Reason of the event.
     */
        reason?: string|null;
        /**
     * Data related to source of the event.
     */
        source?: { contentOwnerId?: string; type?: string; userEmail?: string; }|null;
        /**
     * The time when the event occurred.
     */
        time?: string|null;
        /**
     * Type of the event.
     */
        type?: string|null;
        /**
     * Details of event&#39;s type.
     */
        typeDetails?: { appealExplanation?: string; disputeNotes?: string; disputeReason?: string; updateStatus?: string; }|null;
  }
export interface Schema$ClaimHistory {
      /**
     * A list of claim history events.
     */
        event?: Schema$ClaimEvent[];
        /**
     * The ID that YouTube assigns and uses to uniquely identify the claim.
     */
        id?: string|null;
        /**
     * The type of the API resource. For claimHistory resources, this value is youtubePartner#claimHistory.
     */
        kind?: string|null;
        /**
     * The external channel id of claimed video&#39;s uploader.
     */
        uploaderChannelId?: string|null;
  }
export interface Schema$ClaimListResponse {
      /**
     * A list of claims that match the request criteria.
     */
        items?: Schema$Claim[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#claimList.
     */
        kind?: string|null;
        /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
        nextPageToken?: string|null;
        /**
     * The pageInfo object encapsulates paging information for the result set.
     */
        pageInfo?: Schema$PageInfo;
        /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
        previousPageToken?: string|null;
  }
export interface Schema$ClaimSearchResponse {
      /**
     * A list of claims that match the request criteria.
     */
        items?: Schema$ClaimSnippet[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#claimSnippetList.
     */
        kind?: string|null;
        /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
        nextPageToken?: string|null;
        /**
     * The pageInfo object encapsulates paging information for the result set.
     */
        pageInfo?: Schema$PageInfo;
        /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
        previousPageToken?: string|null;
  }
export interface Schema$ClaimSnippet {
      /**
     * The unique YouTube asset ID that identifies the asset associated with the claim.
     */
        assetId?: string|null;
        /**
     * This value indicates whether the claim covers the audio, video, or audiovisual portion of the claimed content.
     */
        contentType?: string|null;
        /**
     * The ID that YouTube assigns and uses to uniquely identify the claim.
     */
        id?: string|null;
        /**
     * Indicates whether or not the claim is a partner uploaded claim.
     */
        isPartnerUploaded?: boolean|null;
        /**
     * The type of the API resource. For this operation, the value is youtubePartner#claimSnippet.
     */
        kind?: string|null;
          origin?: { source?: string; }|null;
        /**
     * The claim&#39;s status.
     */
        status?: string|null;
        /**
     * Indicates that this is a third party claim.
     */
        thirdPartyClaim?: boolean|null;
        /**
     * The time the claim was created.
     */
        timeCreated?: string|null;
        /**
     * The time the claim status and/or status detail was last modified.
     */
        timeStatusLastModified?: string|null;
        /**
     * The unique YouTube video ID that identifies the video associated with the claim.
     */
        videoId?: string|null;
        /**
     * The title of the claimed video.
     */
        videoTitle?: string|null;
        /**
     * Number of views for the claimed video.
     */
        videoViews?: string|null;
  }
export interface Schema$Conditions {
      /**
     * This match condition specifies whether the user- or partner-uploaded content needs to match the audio, video or audiovisual content of a reference file for the rule to apply.
     */
        contentMatchType?: string[]|null;
        /**
     * This match condition specifies an amount of time that the user- or partner- uploaded content needs to match a reference file for the rule to apply.
     */
        matchDuration?: Schema$IntervalCondition[];
        /**
     * This match condition specifies a percentage of the user- or partner-uploaded content that needs to match a reference file for the rule to apply.
     */
        matchPercent?: Schema$IntervalCondition[];
        /**
     * This match condition indicates that the reference must be a certain duration for the rule to apply.
     */
        referenceDuration?: Schema$IntervalCondition[];
        /**
     * This match condition indicates that the specified percentage of a reference file must match the user- or partner-uploaded content for the rule to apply.
     */
        referencePercent?: Schema$IntervalCondition[];
        /**
     * This watch condition specifies where users are (or or not) allowed to watch (or listen to) an asset. YouTube determines whether the condition is satisfied based on the user&#39;s location.
     */
        requiredTerritories?: Schema$TerritoryCondition;
  }
export interface Schema$ConflictingOwnership {
      /**
     * The ID of the conflicting asset&#39;s owner.
     */
        owner?: string|null;
        /**
     * The percentage of the asset that the owner controls or administers.
     */
        ratio?: number|null;
  }
export interface Schema$ContentOwner {
      /**
     * The email address visible to other partners for use in managing asset ownership conflicts.
     */
        conflictNotificationEmail?: string|null;
        /**
     * The content owner&#39;s display name.
     */
        displayName?: string|null;
        /**
     * The email address(es) to which YouTube sends claim dispute notifications and possible claim notifications.
     */
        disputeNotificationEmails?: string[]|null;
        /**
     * The email address(es) to which YouTube sends fingerprint reports.
     */
        fingerprintReportNotificationEmails?: string[]|null;
        /**
     * A unique ID that YouTube uses to identify the content owner.
     */
        id?: string|null;
        /**
     * The type of the API resource. For content owner resources, the value is youtubePartner#contentOwner.
     */
        kind?: string|null;
        /**
     * The email address(es) to which YouTube sends CMS account details and report notifications.
     */
        primaryNotificationEmails?: string[]|null;
  }
export interface Schema$ContentOwnerAdvertisingOption {
      /**
     * This object identifies the ad formats that the content owner is allowed to use.
     */
        allowedOptions?: Schema$AllowedAdvertisingOptions;
        /**
     * This object identifies the advertising options used by default for the content owner&#39;s newly claimed videos.
     */
        claimedVideoOptions?: Schema$ClaimedVideoDefaults;
        /**
     * The value that YouTube uses to uniquely identify the content owner.
     */
        id?: string|null;
        /**
     * The type of the API resource. For this resource, the value is youtubePartner#contentOwnerAdvertisingOption.
     */
        kind?: string|null;
  }
export interface Schema$ContentOwnerListResponse {
      /**
     * A list of content owners that match the request criteria.
     */
        items?: Schema$ContentOwner[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#contentOwnerList.
     */
        kind?: string|null;
  }
export interface Schema$CountriesRestriction {
      /**
     * A list of ad formats that can be used in the specified countries.
     */
        adFormats?: string[]|null;
        /**
     * A list of ISO 3166-1 alpha-2 country codes that identify the countries where ads are enabled.
     */
        territories?: string[]|null;
  }
export interface Schema$CuepointSettings {
      /**
     * The cuepoint&#39;s type. See the Getting started guide for an explanation of the different types of cuepoints. Also see the Life of a broadcast document for best practices about inserting cuepoints during your broadcast.
     */
        cueType?: string|null;
        /**
     * The cuepoint&#39;s duration, in seconds. This value must be specified if the cueType is ad and is ignored otherwise.
     */
        durationSecs?: number|null;
        /**
     * This value specifies a point in time in the video when viewers should see an ad or in-stream slate. The property value identifies a time offset, in milliseconds, from the beginning of the monitor stream. Though measured in milliseconds, the value is actually an approximation, and YouTube will insert the cuepoint as closely as possible to that time. You should not specify a value for this parameter if your broadcast does not have a monitor stream.  This property&#39;s default value is 0, which indicates that the cuepoint should be inserted as soon as possible. If your broadcast stream is not delayed, then 0 is also the only valid value. However, if your broadcast stream is delayed, then the property value can specify the time when the cuepoint should be inserted. See the Getting started guide for more details.  Note: If your broadcast had a testing phase, the offset is measured from the time that the testing phase began.
     */
        offsetTimeMs?: string|null;
        /**
     * This value specifies the wall clock time at which the cuepoint should be inserted. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.
     */
        walltime?: string|null;
  }
export interface Schema$Date {
      /**
     * The date&#39;s day. The value should be an integer between 1 and 31. Note that some day-month combinations are not valid.
     */
        day?: number|null;
        /**
     * The date&#39;s month. The value should be an integer between 1 and 12.
     */
        month?: number|null;
        /**
     * The date&#39;s year in the Gregorian Calendar. Assumed to be A.D.
     */
        year?: number|null;
  }
export interface Schema$DateRange {
      /**
     * The end date (inclusive) for the date range. This value is required for video-on-demand (VOD) orders and optional for electronic sell-through (EST) orders.
     */
        end?: Schema$Date;
        /**
     * Identifies this resource as order date range. Value: &quot;youtubePartner#dateRange&quot;.
     */
        kind?: string|null;
        /**
     * The start date for the date range. This value is required for all date ranges.
     */
        start?: Schema$Date;
  }
export interface Schema$ExcludedInterval {
      /**
     * The end (inclusive) time in seconds of the time window. The value can be any value greater than low. If high is greater than the length of the reference, the interval between low and the end of the reference will be excluded. Every interval must specify a value for this field.
     */
        high?: number|null;
        /**
     * The start (inclusive) time in seconds of the time window. The value can be any value between 0 and high. Every interval must specify a value for this field.
     */
        low?: number|null;
        /**
     * The source of the request to exclude the interval from Content ID matching.
     */
        origin?: string|null;
        /**
     * The date and time that the exclusion was created. The value is specified in RFC 3339 (YYYY-MM-DDThh:mm:ss.000Z) format.
     */
        timeCreated?: string|null;
  }
export interface Schema$IntervalCondition {
      /**
     * The maximum (inclusive) allowed value for the condition to be satisfied. The default value is ∞.
     */
        high?: number|null;
        /**
     * The minimum (inclusive) allowed value for the condition to be satisfied. The default value is -∞.
     */
        low?: number|null;
  }
export interface Schema$LiveCuepoint {
      /**
     * The ID that YouTube assigns to uniquely identify the broadcast into which the cuepoint is being inserted.
     */
        broadcastId?: string|null;
        /**
     * A value that YouTube assigns to uniquely identify the cuepoint.
     */
        id?: string|null;
        /**
     * The type of the API resource. For liveCuepoint resources, the value is youtubePartner#liveCuepoint.
     */
        kind?: string|null;
        /**
     * The settings object defines the cuepoint&#39;s settings.
     */
        settings?: Schema$CuepointSettings;
  }
export interface Schema$MatchSegment {
      /**
     * Identifies the manner in which the claimed video matches the reference video.
     */
        channel?: string|null;
        /**
     * On insert operation of manual claims, the manual_segment object contains information about the specific portion of the video that is claimed to be matching.
     */
        manual_segment?: Schema$Segment;
        /**
     * The reference_segment object contains information about the matched portion of the reference content.
     */
        reference_segment?: Schema$Segment;
        /**
     * The video_segment object contains information about the matched portion of the claimed video.
     */
        video_segment?: Schema$Segment;
  }
export interface Schema$Metadata {
      /**
     * A list that identifies actors associated with the asset. You can specify up to 50 actors for an asset.
     */
        actor?: string[]|null;
        /**
     * The album on which a sound recording asset is included. This field is only valid for sound recording assets and has a maximum length of 255 bytes.
     */
        album?: string|null;
        /**
     * The artist associated with a music video or sound recording asset. This field is only valid for music video and sound recording assets. It is required for sound recordings included in the AudioSwap program.
     */
        artist?: string[]|null;
        /**
     * Identifies the network or channel that originally broadcast a show or a season of a show. This field should only be included for an asset if the broadcaster associated with the asset is different from the partner uploading the asset to YouTube. Note that a show may have multiple broadcasters; for example, a show may switch networks between seasons.
     */
        broadcaster?: string[]|null;
        /**
     * Category of this asset.
     */
        category?: string|null;
        /**
     * The type of video content that the asset represents. This field is only valid for movie and episode assets, and is required for the following types of those assets:   - Episode assets that are linked to a show  - Movie assets that appear in YouTube&#39;s Movies category
     */
        contentType?: string|null;
        /**
     * The date copyright for this asset was established. *
     */
        copyrightDate?: Schema$Date;
        /**
     * A unique value that you, the metadata provider, use to identify an asset. The value could be a unique ID that you created for the asset or a standard identifier, such as an ISRC. The value has a maximum length of 64 bytes and may contain alphanumeric characters, hyphens (-), underscores (_), periods (.), &quot;at&quot; symbols (@), or forward slashes (/).
     */
        customId?: string|null;
        /**
     * A description of the asset. The description may be displayed on YouTube or in CMS. This field has a maximum length of 5,000 bytes.
     */
        description?: string|null;
        /**
     * A list that identifies directors associated with the asset. You can specify up to 50 directors for an asset.
     */
        director?: string[]|null;
        /**
     * The Entertainment Identifier Registry (EIDR) assigned to an asset. This value is only used for episode and movie assets and is optional in both cases. The value contains a standard prefix for EIDR registry, followed by a forward slash, a 20-character hexadecimal string, and an alphanumeric (0-9A-Z) check character.
     */
        eidr?: string|null;
        /**
     * The last year that a television show aired. This value is only used for show assets, for which it is optional. Do not specify a value if new show episodes are still being created.
     */
        endYear?: number|null;
        /**
     * The episode number associated with an episode asset. This field is required for and only used for episode assets that are linked to show assets. It has a maximum length of 5 bytes.
     */
        episodeNumber?: string|null;
        /**
     * This value indicates that the episodes associated with a particular show asset or a particular season asset are untitled. An untitled show (or season) has episodes which are identified by their episode number or date. If this field is set to true, then YouTube will optimize the title displayed for associated episodes.
     */
        episodesAreUntitled?: boolean|null;
        /**
     * This field specifies a genre that can be used to categorize an asset. Assets may be categorized in more than one genre, and YouTube uses different sets of genres to categorize different types of assets. For example, Soaps might be a valid genre for a show but not for a movie or sound recording.   - Show assets  - Movie assets that appear in YouTube&#39;s Movies category  - Sound recordings included in the AudioSwap program
     */
        genre?: string[]|null;
        /**
     * The GRID (Global Release Identifier) of a music video or sound recording. This field&#39;s value must contain exactly 18 alphanumeric characters.
     */
        grid?: string|null;
        /**
     * The six-character Harry Fox Agency (HFA) song code issued to uniquely identify a composition. This value is only valid for composition assets.
     */
        hfa?: string|null;
        /**
     * An official URL associated with the asset. This field has a maximum length of 1536 bytes. Please do not submit a 1537-byte URL. Your efforts would be futile.
     */
        infoUrl?: string|null;
        /**
     * The ISAN (International Standard Audiovisual Number) for the asset. This value is only used for episode and movie assets and is optional in both cases. The value contains 26 characters, which includes the 24 hexadecimal characters of the ISAN as well as two check characters, in the following format:   - The first 16 characters in the tag value contain hexadecimal characters specifying the &#39;root&#39; and &#39;episode&#39; components of the ISAN.  - The seventeenth character is a check character (a letter from A-Z).  - Characters 18 to 25 are the remaining eight characters of the ISAN, which specify the &#39;version&#39; component of the ISAN.  - The twenty-sixth character is another check character (A-Z).
     */
        isan?: string|null;
        /**
     * The ISRC (International Standard Recording Code) of a music video or sound recording asset. This field&#39;s value must contain exactly 12 alphanumeric characters.
     */
        isrc?: string|null;
        /**
     * The ISWC (International Standard Musical Work Code) for a composition asset. The field&#39;s value must contain exactly 11 characters in the format of a letter (T) followed by 10 digits.
     */
        iswc?: string|null;
        /**
     * A list of up to 100 keywords associated with a show asset. This field is required for and also only used for show assets.
     */
        keyword?: string[]|null;
        /**
     * The record label that released a sound recording asset. This field is only valid for sound recording assets and has a maximum length of 255 bytes.
     */
        label?: string|null;
        /**
     * Additional information that does not map directly to one of the other metadata fields. This field has a maximum length of 255 bytes.
     */
        notes?: string|null;
        /**
     * The method by which people first had the opportunity to see a video asset. This value is only used for episode and movie assets. It is required for the assets listed below and otherwise optional:   - Episode assets that are linked to a show  - Movie assets that appear in YouTube&#39;s Movies category
     */
        originalReleaseMedium?: string|null;
        /**
     * A list that identifies producers of the asset. You can specify up to 50 producers for an asset.
     */
        producer?: string[]|null;
        /**
     * A list of ratings that an asset received. The rating must be valid under the specified rating system.
     */
        ratings?: Schema$Rating[];
        /**
     * The date that an asset was publicly released. For season assets, this value specifies the first date that the season aired. Dates prior to the year 1902 are not supported. This value is valid for episode, season, movie, music video, and sound recording assets. It is required for the assets listed below and otherwise optional:   - Episode assets that are linked to a show  - Movie assets that appear in YouTube&#39;s Movies category
     */
        releaseDate?: Schema$Date;
        /**
     * The season number that identifies a season asset, or the season number that is associated with an episode asset. This field has a maximum length of 5 bytes.
     */
        seasonNumber?: string|null;
        /**
     * The customId of the show asset that a season or episode asset is associated with. It is required for season and episode assets that appear in the Shows category on YouTube, and it is not valid for other types of assets. This field has a maximum length of 64 bytes and may contain alphanumeric characters, hyphens (-), underscores (_), periods (.), &quot;at&quot; symbols (@), or forward slashes (/).
     */
        showCustomId?: string|null;
        /**
     * The name of the show that an episode asset is associated with. Note: This tag is only used for and valid for episodes that are not associated with show assets and enables those assets to still display a show title in the asset metadata section of CMS. This field has a maximum length of 120 bytes.
     */
        showTitle?: string|null;
        /**
     * The video&#39;s primary spoken language. The value can be any ISO 639-1 two-letter language code. This value is only used for episode and movie assets and is not valid for other types of assets.
     */
        spokenLanguage?: string|null;
        /**
     * The first year that a television show aired. This value is required for and also only used for show assets.
     */
        startYear?: number|null;
        /**
     * A list of languages for which the video has either a separate caption track or burnt-in captions that are part of the video. Each value in the list should be an ISO 639-1 two-letter language code. This value is only used for episode and movie assets and is not valid for other types of assets.
     */
        subtitledLanguage?: string[]|null;
        /**
     * The asset&#39;s title or name. The value has a maximum length of 255 bytes. This value is required for the assets listed below and optional for all other assets:   - Show assets  - Episode assets that are linked to a show  - Movie assets that appear in YouTube&#39;s Movies category  - Sound recordings included in the AudioSwap program
     */
        title?: string|null;
        /**
     * TMS (Tribune Media Systems) ID for the asset.
     */
        tmsId?: string|null;
        /**
     * Specifies the total number of full-length episodes in the season. This value is used only for season assets.
     */
        totalEpisodesExpected?: number|null;
        /**
     * The UPC (Universal Product Code) associated with the asset.
     */
        upc?: string|null;
        /**
     * A list that identifies writers associated with the asset. You can specify up to 50 writers for an asset.
     */
        writer?: string[]|null;
  }
export interface Schema$MetadataHistory {
      /**
     * The type of the API resource. For metadata history resources, the value is youtubePartner#metadataHistory.
     */
        kind?: string|null;
        /**
     * The metadata object contains the metadata provided by the specified source (origination) at the specified time (timeProvided).
     */
        metadata?: Schema$Metadata;
        /**
     * The origination object contains information that describes the metadata source.
     */
        origination?: Schema$Origination;
        /**
     * The time the metadata was provided.
     */
        timeProvided?: string|null;
  }
export interface Schema$MetadataHistoryListResponse {
      /**
     * A list of metadata history (youtubePartner#metadataHistory) resources that match the request criteria.
     */
        items?: Schema$MetadataHistory[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#metadataHistoryList.
     */
        kind?: string|null;
  }
export interface Schema$Order {
      /**
     * Links an order to the avails associated with it.
     */
        availGroupId?: string|null;
        /**
     * Channel ID - identifies the channel this order and video are associated with
     */
        channelId?: string|null;
        /**
     * Type of content possible values are  - MOVIE - SHOW
     */
        contentType?: string|null;
        /**
     * Two letter country code for the order only countries where YouTube does transactional business are allowed.
     */
        country?: string|null;
        /**
     * Secondary id to be used to identify content in other systems like partner database
     */
        customId?: string|null;
        /**
     * Date when this content was first made available on DVD
     */
        dvdReleaseDate?: Schema$Date;
        /**
     * Range of time content is to be available for rental.
     */
        estDates?: Schema$DateRange;
        /**
     * History log of events for this order
     */
        events?: Schema$StateCompleted[];
        /**
     * Order Id unique identifier for an order.
     */
        id?: string|null;
        /**
     * Identifies this resource as order. Value: &quot;youtubePartner#order&quot;.
     */
        kind?: string|null;
        /**
     * Title if the order is type movie.
     */
        movie?: string|null;
        /**
     * Date when this content was first made available to the public
     */
        originalReleaseDate?: Schema$Date;
        /**
     * The priority for the order in the QC review queue once the content is ready for QC.
     */
        priority?: string|null;
        /**
     * Post production house that is to process this order
     */
        productionHouse?: string|null;
        /**
     * Youtube purchase order reference for the post production house.
     */
        purchaseOrder?: string|null;
        /**
     * Minumim set of requirements for this order to be complete such as is a trailer required.
     */
        requirements?: Schema$Requirements;
        /**
     * Details of a show, show name, season number, episode etc.
     */
        show?: Schema$ShowDetails;
        /**
     * The order&#39;s status.
     */
        status?: string|null;
        /**
     * Video ID the video that this order is associated with if any.
     */
        videoId?: string|null;
        /**
     * Range of time content is to be available for purchase.
     */
        vodDates?: Schema$DateRange;
  }
export interface Schema$OrderListResponse {
      /**
     * A list of orders that match the request criteria.
     */
        items?: Schema$Order[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#orderList.
     */
        kind?: string|null;
        /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
        nextPageToken?: string|null;
        /**
     * The pageInfo object encapsulates paging information for the result set.
     */
        pageInfo?: Schema$PageInfo;
        /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
        previousPageToken?: string|null;
  }
export interface Schema$Origination {
      /**
     * The content owner who provided the metadata or ownership information.
     */
        owner?: string|null;
        /**
     * The mechanism by which the piece of metadata, ownership or relationship information was provided.
     */
        source?: string|null;
  }
export interface Schema$OwnershipConflicts {
      /**
     * A list that identifies ownership conflicts of an asset and the territories where conflicting ownership is inserted.
     */
        general?: Schema$TerritoryConflicts[];
        /**
     * The type of the API resource. For ownershipConflicts resources, the value is youtubePartner#ownershipConflicts.
     */
        kind?: string|null;
        /**
     * A list that identifies ownership conflicts of the mechanical rights for a composition asset and the territories where conflicting ownership is inserted.
     */
        mechanical?: Schema$TerritoryConflicts[];
        /**
     * A list that identifies ownership conflicts of the performance rights for a composition asset and the territories where conflicting ownership is inserted.
     */
        performance?: Schema$TerritoryConflicts[];
        /**
     * A list that identifies ownership conflicts of the synchronization rights for a composition asset and the territories where conflicting ownership is inserted.
     */
        synchronization?: Schema$TerritoryConflicts[];
  }
export interface Schema$OwnershipHistoryListResponse {
      /**
     * A list of ownership history (youtubePartner#ownershipHistory) resources that match the request criteria.
     */
        items?: Schema$RightsOwnershipHistory[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#ownershipHistoryList.
     */
        kind?: string|null;
  }
export interface Schema$Package {
      /**
     * The package&#39;s metadata file contents.
     */
        content?: string|null;
        /**
     * The list of customer IDs.
     */
        customIds?: string[]|null;
        /**
     * An ID that YouTube assigns and uses to uniquely identify the package.
     */
        id?: string|null;
        /**
     * The type of the API resource. For package resources, this value is youtubePartner#package.
     */
        kind?: string|null;
        /**
     * The desired locale of the error messages as defined in BCP 47 (http://tools.ietf.org/html/bcp47). For example, &quot;en-US&quot; or &quot;de&quot;. If not specified we will return the error messages in English (&quot;en&quot;).
     */
        locale?: string|null;
        /**
     * The package name.
     */
        name?: string|null;
        /**
     * The package status.
     */
        status?: string|null;
        /**
     * The package status reports.
     */
        statusReports?: Schema$StatusReport[];
        /**
     * The package creation time. The value is specified in RFC 3339 (YYYY-MM-DDThh:mm:ss.000Z) format.
     */
        timeCreated?: string|null;
        /**
     * The package type.
     */
        type?: string|null;
        /**
     * The uploader name.
     */
        uploaderName?: string|null;
  }
export interface Schema$PackageInsertResponse {
      /**
     * The list of errors and/or warnings.
     */
        errors?: Schema$ValidateError[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#packageInsert.
     */
        kind?: string|null;
        /**
     * The package resource.
     */
        resource?: Schema$Package;
        /**
     * The package insert status. Indicates whether the insert operation completed successfully or identifies the general cause of failure. For most cases where the insert operation failed, the errors are described in the API response&#39;s errors object. However, if the operation failed because the package contained non-metadata files, the errors object is not included in the response.
     */
        status?: string|null;
  }
export interface Schema$PageInfo {
      /**
     * The number of results included in the API response.
     */
        resultsPerPage?: number|null;
        /**
     * The index of the first item in the API response.
     */
        startIndex?: number|null;
        /**
     * The total number of results in the result set.
     */
        totalResults?: number|null;
  }
export interface Schema$Policy {
      /**
     * The policy&#39;s description.
     */
        description?: string|null;
        /**
     * A value that YouTube assigns and uses to uniquely identify the policy.
     */
        id?: string|null;
        /**
     * Identifies this as a policy. Value: &quot;youtubePartner#policy&quot;
     */
        kind?: string|null;
        /**
     * The policy&#39;s name.
     */
        name?: string|null;
        /**
     * A list of rules that specify the action that YouTube should take and may optionally specify the conditions under which that action is enforced.
     */
        rules?: Schema$PolicyRule[];
        /**
     * The time the policy was updated.
     */
        timeUpdated?: string|null;
  }
export interface Schema$PolicyList {
      /**
     * A list of saved policies.
     */
        items?: Schema$Policy[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#policyList.
     */
        kind?: string|null;
  }
export interface Schema$PolicyRule {
      /**
     * The policy that YouTube should enforce if the rule&#39;s conditions are all valid for an asset or for an attempt to view that asset on YouTube.
     */
        action?: string|null;
        /**
     * A set of conditions that must be met for the rule&#39;s action (and subactions) to be enforced. For a rule to be valid, all of its conditions must be met.
     */
        conditions?: Schema$Conditions;
        /**
     * A list of additional actions that YouTube should take if the conditions in the rule are met.
     */
        subaction?: string[]|null;
  }
export interface Schema$PromotedContent {
      /**
     * A list of link targets that will be used to generate the annotation link that appears on videos included in the  campaign. If more than one link is specified, the link that is displayed to viewers will be randomly selected from the list.
     */
        link?: Schema$CampaignTargetLink[];
  }
export interface Schema$Rating {
      /**
     * The rating that the asset received.
     */
        rating?: string|null;
        /**
     * The rating system associated with the rating.
     */
        ratingSystem?: string|null;
  }
export interface Schema$Reference {
      /**
     * The ID that uniquely identifies the asset that the reference is associated with.
     */
        assetId?: string|null;
        /**
     * Set this field&#39;s value to true to indicate that the reference content should be included in YouTube&#39;s AudioSwap program.
     */
        audioswapEnabled?: boolean|null;
        /**
     * This field is present if the reference was created by associating an asset with an existing YouTube video that was uploaded to a YouTube channel linked to your CMS account. In that case, this field contains the ID of the claim representing the resulting association between the asset and the video.
     */
        claimId?: string|null;
        /**
     * The type of content that the reference represents.
     */
        contentType?: string|null;
        /**
     * The ID that uniquely identifies the reference that this reference duplicates. This field is only present if the reference&#39;s status is inactive with reason REASON_DUPLICATE_FOR_OWNERS.
     */
        duplicateLeader?: string|null;
        /**
     * The list of time intervals from this reference that will be ignored during the match process.
     */
        excludedIntervals?: Schema$ExcludedInterval[];
        /**
     * When uploading a reference, set this value to true to indicate that the reference is a pre-generated fingerprint.
     */
        fpDirect?: boolean|null;
        /**
     * The MD5 hashcode of the reference content. Deprecated! This is no longer populated.
     */
        hashCode?: string|null;
        /**
     * A value that YouTube assigns and uses to uniquely identify a reference.
     */
        id?: string|null;
        /**
     * Set this value to true to indicate that the reference should not be used to generate claims. This field is only used on AudioSwap references.
     */
        ignoreFpMatch?: boolean|null;
        /**
     * The type of the API resource. For reference resources, the value is youtubePartner#reference.
     */
        kind?: string|null;
        /**
     * The length of the reference in seconds.
     */
        length?: number|null;
        /**
     * The origination object contains information that describes the reference source.
     */
        origination?: Schema$Origination;
        /**
     * The reference&#39;s status.
     */
        status?: string|null;
        /**
     * An explanation of how a reference entered its current state. This value is only present if the reference&#39;s status is either inactive or deleted.
     */
        statusReason?: string|null;
        /**
     * Set this value to true to indicate that YouTube should prioritize Content ID processing for a video file. YouTube processes urgent video files before other files that are not marked as urgent. This setting is primarily used for videos of live events or other videos that require time-sensitive processing. The sooner YouTube completes Content ID processing for a video, the sooner YouTube can match user-uploaded videos to that video.  Note that marking all of your files as urgent could delay processing for those files.
     */
        urgent?: boolean|null;
        /**
     * This field is present if the reference was created by associating an asset with an existing YouTube video that was uploaded to a YouTube channel linked to your CMS account. In that case, this field contains the ID of the source video.
     */
        videoId?: string|null;
  }
export interface Schema$ReferenceConflict {
      /**
     * An id of a conflicting reference.
     */
        conflictingReferenceId?: string|null;
        /**
     * Conflict review expiry time.
     */
        expiryTime?: string|null;
        /**
     * A value that YouTube assigns and uses to uniquely identify a reference conflict.
     */
        id?: string|null;
        /**
     * The type of the API resource. For referenceConflict resources, the value is youtubePartner#referenceConflict.
     */
        kind?: string|null;
        /**
     * The list of matches between conflicting and original references at the time of conflict creation.
     */
        matches?: Schema$ReferenceConflictMatch[];
        /**
     * An id of an original reference.
     */
        originalReferenceId?: string|null;
        /**
     * The referenceConflict&#39;s status.
     */
        status?: string|null;
  }
export interface Schema$ReferenceConflictListResponse {
      /**
     * A list of reference conflicts that match the request criteria.
     */
        items?: Schema$ReferenceConflict[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#referenceConflictList.
     */
        kind?: string|null;
        /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
        nextPageToken?: string|null;
        /**
     * The pageInfo object encapsulates paging information for the result set.
     */
        pageInfo?: Schema$PageInfo;
  }
export interface Schema$ReferenceConflictMatch {
      /**
     * Conflicting reference offset in milliseconds.
     */
        conflicting_reference_offset_ms?: string|null;
        /**
     * Match length in milliseconds.
     */
        length_ms?: string|null;
        /**
     * Original reference offset in milliseconds.
     */
        original_reference_offset_ms?: string|null;
        /**
     * The referenceConflictMatch&#39;s type.
     */
        type?: string|null;
  }
export interface Schema$ReferenceListResponse {
      /**
     * A list of references that match the request criteria.
     */
        items?: Schema$Reference[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#referenceList.
     */
        kind?: string|null;
        /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
        nextPageToken?: string|null;
        /**
     * The pageInfo object encapsulates paging information for the result set.
     */
        pageInfo?: Schema$PageInfo;
  }
export interface Schema$Requirements {
      /**
     * This value indicates whether the order requires closed captions.
     */
        caption?: boolean|null;
        /**
     * This value indicates whether the order requires HD-quality video.
     */
        hdTranscode?: boolean|null;
        /**
     * This value indicates whether the order requires poster artwork.
     */
        posterArt?: boolean|null;
        /**
     * This value indicates whether the order requires spotlight artwork.
     */
        spotlightArt?: boolean|null;
        /**
     * This value indicates whether the spotlight artwork for the order needs to be reviewed.
     */
        spotlightReview?: boolean|null;
        /**
     * This value indicates whether the order requires a trailer.
     */
        trailer?: boolean|null;
  }
export interface Schema$RightsOwnership {
      /**
     * A list that identifies the owners of an asset and the territories where each owner has ownership. General asset ownership is used for all types of assets and is the only type of ownership data that can be provided for assets that are not compositions.  Note: You cannot specify general ownership rights and also specify either mechanical, performance, or synchronization rights.
     */
        general?: Schema$TerritoryOwners[];
        /**
     * The type of the API resource. For rightsOwnership resources, the value is youtubePartner#rightsOwnership.
     */
        kind?: string|null;
        /**
     * A list that identifies owners of the mechanical rights for a composition asset.
     */
        mechanical?: Schema$TerritoryOwners[];
        /**
     * A list that identifies owners of the performance rights for a composition asset.
     */
        performance?: Schema$TerritoryOwners[];
        /**
     * A list that identifies owners of the synchronization rights for a composition asset.
     */
        synchronization?: Schema$TerritoryOwners[];
  }
export interface Schema$RightsOwnershipHistory {
      /**
     * The type of the API resource. For ownership history resources, the value is youtubePartner#rightsOwnershipHistory.
     */
        kind?: string|null;
        /**
     * The origination object contains information that describes the metadata source.
     */
        origination?: Schema$Origination;
        /**
     * The ownership object contains the ownership data provided by the specified source (origination) at the specified time (timeProvided).
     */
        ownership?: Schema$RightsOwnership;
        /**
     * The time that the ownership data was provided.
     */
        timeProvided?: string|null;
  }
export interface Schema$Segment {
      /**
     * The duration of the segment in milliseconds.
     */
        duration?: string|null;
        /**
     * The finish time of the segment, measured in milliseconds from the beginning.
     */
        finish?: string|null;
        /**
     * The type of the API resource. For segment resources, the value is youtubePartner#segment.
     */
        kind?: string|null;
        /**
     * The start time of the segment, measured in milliseconds from the beginning.
     */
        start?: string|null;
  }
export interface Schema$ShowDetails {
      /**
     * The episode number associated with the episode.
     */
        episodeNumber?: string|null;
        /**
     * The episode&#39;s title.
     */
        episodeTitle?: string|null;
        /**
     * The season number associated with the episode.
     */
        seasonNumber?: string|null;
        /**
     * The show&#39;s title
     */
        title?: string|null;
  }
export interface Schema$SpreadsheetTemplate {
      /**
     * The type of the API resource. For spreadsheet template resources, the value is youtubePartner#spreadsheetTemplate.
     */
        kind?: string|null;
        /**
     * The template status.
     */
        status?: string|null;
        /**
     * The template content.
     */
        templateContent?: string|null;
        /**
     * The template name.
     */
        templateName?: string|null;
        /**
     * The template type.
     */
        templateType?: string|null;
  }
export interface Schema$SpreadsheetTemplateListResponse {
      /**
     * A list of spreadsheet templates (youtubePartner#spreadsheetTemplate) resources that match the request criteria.
     */
        items?: Schema$SpreadsheetTemplate[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#spreadsheetTemplateList.
     */
        kind?: string|null;
        /**
     * The status of the API response.
     */
        status?: string|null;
  }
export interface Schema$StateCompleted {
      /**
     * The state that the order entered.
     */
        state?: string|null;
        /**
     * The time that the state transition occurred.
     */
        timeCompleted?: string|null;
  }
export interface Schema$StatusReport {
      /**
     * The content of the report message. Used only in Hybrid.
     */
        statusContent?: string|null;
        /**
     * Status file name. Used only in Hybrid.
     */
        statusFileName?: string|null;
  }
export interface Schema$TerritoryCondition {
      /**
     * A list of territories. Each territory is an ISO 3166 two-letter country code..
     */
        territories?: string[]|null;
        /**
     * This field indicates whether the associated policy rule is or is not valid in the specified territories.
     */
        type?: string|null;
  }
export interface Schema$TerritoryConflicts {
      /**
     * A list of conflicting ownerships.
     */
        conflictingOwnership?: Schema$ConflictingOwnership[];
        /**
     * A territories where the ownership conflict is present. Territory is an ISO 3166 two-letter country code..
     */
        territory?: string|null;
  }
export interface Schema$TerritoryOwners {
      /**
     * The name of the asset&#39;s owner or rights administrator.
     */
        owner?: string|null;
        /**
     * The name of the asset&#39;s publisher. This field is only used for composition assets, and it is used when the asset owner is not known to have a formal relationship established with YouTube.
     */
        publisher?: string|null;
        /**
     * The percentage of the asset that the owner controls or administers. For composition assets, the value can be any value between 0 and 100 inclusive. For all other assets, the only valid values are 100, which indicates that the owner completely owns the asset in the specified territories, and 0, which indicates that you are removing ownership of the asset in the specified territories.
     */
        ratio?: number|null;
        /**
     * A list of territories where the owner owns (or does not own) the asset. Each territory is an ISO 3166 two-letter country code..
     */
        territories?: string[]|null;
        /**
     * This field indicates whether the ownership data applies or does not apply in the specified territories.
     */
        type?: string|null;
  }
export interface Schema$Uploader {
      /**
     * The type of the API resource. For uploader resources, the value is youtubePartner#uploader.
     */
        kind?: string|null;
        /**
     * The uploader name.
     */
        uploaderName?: string|null;
  }
export interface Schema$UploaderListResponse {
      /**
     * A list of uploader (youtubePartner#uploader) resources that match the request criteria.
     */
        items?: Schema$Uploader[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#uploaderList.
     */
        kind?: string|null;
  }
export interface Schema$ValidateAsyncRequest {
      /**
     * The metadata file contents.
     */
        content?: string|null;
        /**
     * The type of the API resource. For this operation, the value is youtubePartner#validateAsyncRequest.
     */
        kind?: string|null;
        /**
     * The uploader name.
     */
        uploaderName?: string|null;
  }
export interface Schema$ValidateAsyncResponse {
      /**
     * The type of the API resource. For this operation, the value is youtubePartner#validateAsyncResponse.
     */
        kind?: string|null;
        /**
     * The validation status.
     */
        status?: string|null;
        /**
     * The validation ID.
     */
        validationId?: string|null;
  }
export interface Schema$ValidateError {
      /**
     * The column name where the error occurred.
     */
        columnName?: string|null;
        /**
     * The column number where the error occurred (1-based).
     */
        columnNumber?: number|null;
        /**
     * The line number where the error occurred (1-based).
     */
        lineNumber?: number|null;
        /**
     * The error message.
     */
        message?: string|null;
        /**
     * The code for the error message (if one exists).
     */
        messageCode?: number|null;
        /**
     * The error severity.
     */
        severity?: string|null;
  }
export interface Schema$ValidateRequest {
      /**
     * The metadata file contents.
     */
        content?: string|null;
        /**
     * The type of the API resource. For this operation, the value is youtubePartner#validateRequest.
     */
        kind?: string|null;
        /**
     * The desired locale of the error messages as defined in BCP 47 (http://tools.ietf.org/html/bcp47). For example, &quot;en-US&quot; or &quot;de&quot;. If not specified we will return the error messages in English (&quot;en&quot;).
     */
        locale?: string|null;
        /**
     * The uploader name.
     */
        uploaderName?: string|null;
  }
export interface Schema$ValidateResponse {
      /**
     * The list of errors and/or warnings.
     */
        errors?: Schema$ValidateError[];
        /**
     * The type of the API resource. For this operation, the value is youtubePartner#validateResponse.
     */
        kind?: string|null;
        /**
     * The validation status.
     */
        status?: string|null;
  }
export interface Schema$ValidateStatusRequest {
      /**
     * The type of the API resource. For this operation, the value is youtubePartner#validateStatusRequest.
     */
        kind?: string|null;
        /**
     * The desired locale of the error messages as defined in BCP 47 (http://tools.ietf.org/html/bcp47). For example, &quot;en-US&quot; or &quot;de&quot;. If not specified we will return the error messages in English (&quot;en&quot;).
     */
        locale?: string|null;
        /**
     * The validation ID.
     */
        validationId?: string|null;
  }
export interface Schema$ValidateStatusResponse {
      /**
     * The list of errors and/or warnings.
     */
        errors?: Schema$ValidateError[];
        /**
     * If this is a metadata-only package.
     */
        isMetadataOnly?: boolean|null;
        /**
     * The type of the API resource. For this operation, the value is youtubePartner#validateStatusResponse.
     */
        kind?: string|null;
        /**
     * The validation status.
     */
        status?: string|null;
  }
export interface Schema$VideoAdvertisingOption {
      /**
     * A list of times when YouTube can show an in-stream advertisement during playback of the video.
     */
        adBreaks?: Schema$AdBreak[];
        /**
     * A list of ad formats that the video is allowed to show.
     */
        adFormats?: string[]|null;
        /**
     * Enables this video for automatically generated midroll breaks.
     */
        autoGeneratedBreaks?: boolean|null;
        /**
     * The point at which the break occurs during the video playback.
     */
        breakPosition?: string[]|null;
        /**
     * The ID that YouTube uses to uniquely identify the video associated with the advertising settings.
     */
        id?: string|null;
        /**
     * The type of the API resource. For this resource, the value is youtubePartner#videoAdvertisingOption.
     */
        kind?: string|null;
        /**
     * A value that uniquely identifies the video to the third-party ad server.
     */
        tpAdServerVideoId?: string|null;
        /**
     * The base URL for a third-party ad server from which YouTube can retrieve in-stream ads for the video.
     */
        tpTargetingUrl?: string|null;
        /**
     * A parameter string to append to the end of the request to the third-party ad server.
     */
        tpUrlParameters?: string|null;
  }
export interface Schema$VideoAdvertisingOptionGetEnabledAdsResponse {
      /**
     * A list of ad breaks that occur in a claimed YouTube video.
     */
        adBreaks?: Schema$AdBreak[];
        /**
     * This field indicates whether YouTube can show ads when the video is played in an embedded player.
     */
        adsOnEmbeds?: boolean|null;
        /**
     * A list that identifies the countries where ads can run and the types of ads allowed in those countries.
     */
        countriesRestriction?: Schema$CountriesRestriction[];
        /**
     * The ID that YouTube uses to uniquely identify the claimed video.
     */
        id?: string|null;
        /**
     * The type of the API resource. For this resource, the value is youtubePartner#videoAdvertisingOptionGetEnabledAds.
     */
        kind?: string|null;
  }
export interface Schema$Whitelist {
      /**
     * The YouTube channel ID that uniquely identifies the whitelisted channel.
     */
        id?: string|null;
        /**
     * The type of the API resource. For whitelist resources, this value is youtubePartner#whitelist.
     */
        kind?: string|null;
        /**
     * Title of the whitelisted YouTube channel.
     */
        title?: string|null;
  }
export interface Schema$WhitelistListResponse {
      /**
     * A list of whitelist resources that match the request criteria.
     */
        items?: Schema$Whitelist[];
        /**
     * The type of the API response. For this operation, the value is youtubePartner#whitelistList.
     */
        kind?: string|null;
        /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page of results.
     */
        nextPageToken?: string|null;
        /**
     * The pageInfo object encapsulates paging information for the result set.
     */
        pageInfo?: Schema$PageInfo;
  }


          export class Resource$Assetlabels {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.assetLabels.insert
 * @desc Insert an asset label for an owner.
 * @alias youtubePartner.assetLabels.insert
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().AssetLabel} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
insert(params?: Params$Resource$Assetlabels$Insert, options?: MethodOptions): GaxiosPromise<Schema$AssetLabel>;
insert(params: Params$Resource$Assetlabels$Insert, options: MethodOptions|BodyResponseCallback<Schema$AssetLabel>, callback: BodyResponseCallback<Schema$AssetLabel>): void;
insert(params: Params$Resource$Assetlabels$Insert, callback: BodyResponseCallback<Schema$AssetLabel>): void;
insert(callback: BodyResponseCallback<Schema$AssetLabel>): void;
insert(paramsOrCallback?: Params$Resource$Assetlabels$Insert|BodyResponseCallback<Schema$AssetLabel>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AssetLabel>, callback?: BodyResponseCallback<Schema$AssetLabel>): void|GaxiosPromise<Schema$AssetLabel> {
  let params = (paramsOrCallback || {}) as Params$Resource$Assetlabels$Insert;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Assetlabels$Insert;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assetLabels').replace(/([^:]\/)\/+/g, '$1'),
      method: 'POST'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$AssetLabel>(parameters, callback);
  } else {
    return createAPIRequest<Schema$AssetLabel>(parameters);
  }
}

                  
/**
 * youtubePartner.assetLabels.list
 * @desc Retrieves a list of all asset labels for an owner.
 * @alias youtubePartner.assetLabels.list
 * @memberOf! ()
 *
 * @param {object=} params Parameters for request
 * @param {string=} params.labelPrefix The labelPrefix parameter identifies the prefix of asset labels to retrieve.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string=} params.q The q parameter specifies the query string to use to filter search results. YouTube searches for the query string in the labelName field of asset labels.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Assetlabels$List, options?: MethodOptions): GaxiosPromise<Schema$AssetLabelListResponse>;
list(params: Params$Resource$Assetlabels$List, options: MethodOptions|BodyResponseCallback<Schema$AssetLabelListResponse>, callback: BodyResponseCallback<Schema$AssetLabelListResponse>): void;
list(params: Params$Resource$Assetlabels$List, callback: BodyResponseCallback<Schema$AssetLabelListResponse>): void;
list(callback: BodyResponseCallback<Schema$AssetLabelListResponse>): void;
list(paramsOrCallback?: Params$Resource$Assetlabels$List|BodyResponseCallback<Schema$AssetLabelListResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AssetLabelListResponse>, callback?: BodyResponseCallback<Schema$AssetLabelListResponse>): void|GaxiosPromise<Schema$AssetLabelListResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Assetlabels$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Assetlabels$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assetLabels').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$AssetLabelListResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$AssetLabelListResponse>(parameters);
  }
}

                  }

                  export interface Params$Resource$Assetlabels$Insert extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$AssetLabel;
          
                  }
              export interface Params$Resource$Assetlabels$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The labelPrefix parameter identifies the prefix of asset labels to retrieve.
               */
              labelPrefix?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The q parameter specifies the query string to use to filter search results. YouTube searches for the query string in the labelName field of asset labels.
               */
              q?: string;
                      
           
                  }
          
    
          export class Resource$Assetmatchpolicy {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.assetMatchPolicy.get
 * @desc Retrieves the match policy assigned to the specified asset by the content owner associated with the authenticated user. This information is only accessible to an owner of the asset.
 * @alias youtubePartner.assetMatchPolicy.get
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving the match policy.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
get(params?: Params$Resource$Assetmatchpolicy$Get, options?: MethodOptions): GaxiosPromise<Schema$AssetMatchPolicy>;
get(params: Params$Resource$Assetmatchpolicy$Get, options: MethodOptions|BodyResponseCallback<Schema$AssetMatchPolicy>, callback: BodyResponseCallback<Schema$AssetMatchPolicy>): void;
get(params: Params$Resource$Assetmatchpolicy$Get, callback: BodyResponseCallback<Schema$AssetMatchPolicy>): void;
get(callback: BodyResponseCallback<Schema$AssetMatchPolicy>): void;
get(paramsOrCallback?: Params$Resource$Assetmatchpolicy$Get|BodyResponseCallback<Schema$AssetMatchPolicy>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AssetMatchPolicy>, callback?: BodyResponseCallback<Schema$AssetMatchPolicy>): void|GaxiosPromise<Schema$AssetMatchPolicy> {
  let params = (paramsOrCallback || {}) as Params$Resource$Assetmatchpolicy$Get;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Assetmatchpolicy$Get;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assets/{assetId}/matchPolicy').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['assetId'],
    pathParams: ['assetId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$AssetMatchPolicy>(parameters, callback);
  } else {
    return createAPIRequest<Schema$AssetMatchPolicy>(parameters);
  }
}

                  
/**
 * youtubePartner.assetMatchPolicy.patch
 * @desc Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each owner owns the asset. This method supports patch semantics.
 * @alias youtubePartner.assetMatchPolicy.patch
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving the match policy.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().AssetMatchPolicy} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
patch(params?: Params$Resource$Assetmatchpolicy$Patch, options?: MethodOptions): GaxiosPromise<Schema$AssetMatchPolicy>;
patch(params: Params$Resource$Assetmatchpolicy$Patch, options: MethodOptions|BodyResponseCallback<Schema$AssetMatchPolicy>, callback: BodyResponseCallback<Schema$AssetMatchPolicy>): void;
patch(params: Params$Resource$Assetmatchpolicy$Patch, callback: BodyResponseCallback<Schema$AssetMatchPolicy>): void;
patch(callback: BodyResponseCallback<Schema$AssetMatchPolicy>): void;
patch(paramsOrCallback?: Params$Resource$Assetmatchpolicy$Patch|BodyResponseCallback<Schema$AssetMatchPolicy>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AssetMatchPolicy>, callback?: BodyResponseCallback<Schema$AssetMatchPolicy>): void|GaxiosPromise<Schema$AssetMatchPolicy> {
  let params = (paramsOrCallback || {}) as Params$Resource$Assetmatchpolicy$Patch;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Assetmatchpolicy$Patch;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assets/{assetId}/matchPolicy').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PATCH'
    }, options),
    params,
        requiredParams: ['assetId'],
    pathParams: ['assetId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$AssetMatchPolicy>(parameters, callback);
  } else {
    return createAPIRequest<Schema$AssetMatchPolicy>(parameters);
  }
}

                  
/**
 * youtubePartner.assetMatchPolicy.update
 * @desc Updates the asset's match policy. If an asset has multiple owners, each owner may set its own match policy for the asset. YouTube then computes the match policy that is actually applied for the asset based on the territories where each owner owns the asset.
 * @alias youtubePartner.assetMatchPolicy.update
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving the match policy.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().AssetMatchPolicy} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
update(params?: Params$Resource$Assetmatchpolicy$Update, options?: MethodOptions): GaxiosPromise<Schema$AssetMatchPolicy>;
update(params: Params$Resource$Assetmatchpolicy$Update, options: MethodOptions|BodyResponseCallback<Schema$AssetMatchPolicy>, callback: BodyResponseCallback<Schema$AssetMatchPolicy>): void;
update(params: Params$Resource$Assetmatchpolicy$Update, callback: BodyResponseCallback<Schema$AssetMatchPolicy>): void;
update(callback: BodyResponseCallback<Schema$AssetMatchPolicy>): void;
update(paramsOrCallback?: Params$Resource$Assetmatchpolicy$Update|BodyResponseCallback<Schema$AssetMatchPolicy>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AssetMatchPolicy>, callback?: BodyResponseCallback<Schema$AssetMatchPolicy>): void|GaxiosPromise<Schema$AssetMatchPolicy> {
  let params = (paramsOrCallback || {}) as Params$Resource$Assetmatchpolicy$Update;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Assetmatchpolicy$Update;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assets/{assetId}/matchPolicy').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PUT'
    }, options),
    params,
        requiredParams: ['assetId'],
    pathParams: ['assetId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$AssetMatchPolicy>(parameters, callback);
  } else {
    return createAPIRequest<Schema$AssetMatchPolicy>(parameters);
  }
}

                  }

                  export interface Params$Resource$Assetmatchpolicy$Get extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving the match policy.
               */
              assetId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
              export interface Params$Resource$Assetmatchpolicy$Patch extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving the match policy.
               */
              assetId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$AssetMatchPolicy;
          
                  }
              export interface Params$Resource$Assetmatchpolicy$Update extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving the match policy.
               */
              assetId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$AssetMatchPolicy;
          
                  }
          
    
          export class Resource$Assetrelationships {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.assetRelationships.delete
 * @desc Deletes a relationship between two assets.
 * @alias youtubePartner.assetRelationships.delete
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.assetRelationshipId The assetRelationshipId parameter specifies a value that uniquely identifies the relationship you are deleting.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
delete(params?: Params$Resource$Assetrelationships$Delete, options?: MethodOptions): GaxiosPromise<void>;
delete(params: Params$Resource$Assetrelationships$Delete, options: MethodOptions|BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
delete(params: Params$Resource$Assetrelationships$Delete, callback: BodyResponseCallback<void>): void;
delete(callback: BodyResponseCallback<void>): void;
delete(paramsOrCallback?: Params$Resource$Assetrelationships$Delete|BodyResponseCallback<void>, optionsOrCallback?: MethodOptions|BodyResponseCallback<void>, callback?: BodyResponseCallback<void>): void|GaxiosPromise<void> {
  let params = (paramsOrCallback || {}) as Params$Resource$Assetrelationships$Delete;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Assetrelationships$Delete;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assetRelationships/{assetRelationshipId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'DELETE'
    }, options),
    params,
        requiredParams: ['assetRelationshipId'],
    pathParams: ['assetRelationshipId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<void>(parameters, callback);
  } else {
    return createAPIRequest<void>(parameters);
  }
}

                  
/**
 * youtubePartner.assetRelationships.insert
 * @desc Creates a relationship that links two assets.
 * @alias youtubePartner.assetRelationships.insert
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().AssetRelationship} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
insert(params?: Params$Resource$Assetrelationships$Insert, options?: MethodOptions): GaxiosPromise<Schema$AssetRelationship>;
insert(params: Params$Resource$Assetrelationships$Insert, options: MethodOptions|BodyResponseCallback<Schema$AssetRelationship>, callback: BodyResponseCallback<Schema$AssetRelationship>): void;
insert(params: Params$Resource$Assetrelationships$Insert, callback: BodyResponseCallback<Schema$AssetRelationship>): void;
insert(callback: BodyResponseCallback<Schema$AssetRelationship>): void;
insert(paramsOrCallback?: Params$Resource$Assetrelationships$Insert|BodyResponseCallback<Schema$AssetRelationship>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AssetRelationship>, callback?: BodyResponseCallback<Schema$AssetRelationship>): void|GaxiosPromise<Schema$AssetRelationship> {
  let params = (paramsOrCallback || {}) as Params$Resource$Assetrelationships$Insert;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Assetrelationships$Insert;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assetRelationships').replace(/([^:]\/)\/+/g, '$1'),
      method: 'POST'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$AssetRelationship>(parameters, callback);
  } else {
    return createAPIRequest<Schema$AssetRelationship>(parameters);
  }
}

                  
/**
 * youtubePartner.assetRelationships.list
 * @desc Retrieves a list of relationships for a given asset. The list contains relationships where the specified asset is either the parent (embedding) or child (embedded) asset in the relationship.
 * @alias youtubePartner.assetRelationships.list
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.assetId The assetId parameter specifies the asset ID of the asset for which you are retrieving relationships.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Assetrelationships$List, options?: MethodOptions): GaxiosPromise<Schema$AssetRelationshipListResponse>;
list(params: Params$Resource$Assetrelationships$List, options: MethodOptions|BodyResponseCallback<Schema$AssetRelationshipListResponse>, callback: BodyResponseCallback<Schema$AssetRelationshipListResponse>): void;
list(params: Params$Resource$Assetrelationships$List, callback: BodyResponseCallback<Schema$AssetRelationshipListResponse>): void;
list(callback: BodyResponseCallback<Schema$AssetRelationshipListResponse>): void;
list(paramsOrCallback?: Params$Resource$Assetrelationships$List|BodyResponseCallback<Schema$AssetRelationshipListResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AssetRelationshipListResponse>, callback?: BodyResponseCallback<Schema$AssetRelationshipListResponse>): void|GaxiosPromise<Schema$AssetRelationshipListResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Assetrelationships$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Assetrelationships$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assetRelationships').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['assetId'],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$AssetRelationshipListResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$AssetRelationshipListResponse>(parameters);
  }
}

                  }

                  export interface Params$Resource$Assetrelationships$Delete extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The assetRelationshipId parameter specifies a value that uniquely identifies the relationship you are deleting.
               */
              assetRelationshipId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
              export interface Params$Resource$Assetrelationships$Insert extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$AssetRelationship;
          
                  }
              export interface Params$Resource$Assetrelationships$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The assetId parameter specifies the asset ID of the asset for which you are retrieving relationships.
               */
              assetId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
               */
              pageToken?: string;
                      
           
                  }
          
    
          export class Resource$Assets {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.assets.get
 * @desc Retrieves the metadata for the specified asset. Note that if the request identifies an asset that has been merged with another asset, meaning that YouTube identified the requested asset as a duplicate, then the request retrieves the merged, or synthesized, asset.
 * @alias youtubePartner.assets.get
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset being retrieved.
 * @param {string=} params.fetchMatchPolicy The fetchMatchPolicy parameter specifies the version of the asset's match policy that should be returned in the API response.
 * @param {string=} params.fetchMetadata The fetchMetadata parameter specifies the version of the asset's metadata that should be returned in the API response. In some cases, YouTube receives metadata for an asset from multiple sources, such as when different partners own the asset in different territories.
 * @param {string=} params.fetchOwnership The fetchOwnership parameter specifies the version of the asset's ownership data that should be returned in the API response. As with asset metadata, YouTube can receive asset ownership data from multiple sources.
 * @param {boolean=} params.fetchOwnershipConflicts The fetchOwnershipConflicts parameter allows you to retrieve information about ownership conflicts.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
get(params?: Params$Resource$Assets$Get, options?: MethodOptions): GaxiosPromise<Schema$Asset>;
get(params: Params$Resource$Assets$Get, options: MethodOptions|BodyResponseCallback<Schema$Asset>, callback: BodyResponseCallback<Schema$Asset>): void;
get(params: Params$Resource$Assets$Get, callback: BodyResponseCallback<Schema$Asset>): void;
get(callback: BodyResponseCallback<Schema$Asset>): void;
get(paramsOrCallback?: Params$Resource$Assets$Get|BodyResponseCallback<Schema$Asset>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Asset>, callback?: BodyResponseCallback<Schema$Asset>): void|GaxiosPromise<Schema$Asset> {
  let params = (paramsOrCallback || {}) as Params$Resource$Assets$Get;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Assets$Get;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assets/{assetId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['assetId'],
    pathParams: ['assetId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Asset>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Asset>(parameters);
  }
}

                  
/**
 * youtubePartner.assets.insert
 * @desc Inserts an asset with the specified metadata. After inserting an asset, you can set its ownership data and match policy.
 * @alias youtubePartner.assets.insert
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().Asset} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
insert(params?: Params$Resource$Assets$Insert, options?: MethodOptions): GaxiosPromise<Schema$Asset>;
insert(params: Params$Resource$Assets$Insert, options: MethodOptions|BodyResponseCallback<Schema$Asset>, callback: BodyResponseCallback<Schema$Asset>): void;
insert(params: Params$Resource$Assets$Insert, callback: BodyResponseCallback<Schema$Asset>): void;
insert(callback: BodyResponseCallback<Schema$Asset>): void;
insert(paramsOrCallback?: Params$Resource$Assets$Insert|BodyResponseCallback<Schema$Asset>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Asset>, callback?: BodyResponseCallback<Schema$Asset>): void|GaxiosPromise<Schema$Asset> {
  let params = (paramsOrCallback || {}) as Params$Resource$Assets$Insert;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Assets$Insert;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assets').replace(/([^:]\/)\/+/g, '$1'),
      method: 'POST'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Asset>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Asset>(parameters);
  }
}

                  
/**
 * youtubePartner.assets.list
 * @desc Retrieves a list of assets based on asset metadata. The method can retrieve all assets or only assets owned by the content owner.  Note that in cases where duplicate assets have been merged, the API response only contains the synthesized asset. (It does not contain the constituent assets that were merged into the synthesized asset.)
 * @alias youtubePartner.assets.list
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.fetchMatchPolicy The fetchMatchPolicy parameter specifies the version of the asset's match policy that should be returned in the API response.
 * @param {string=} params.fetchMetadata The fetchMetadata parameter specifies the version of the asset's metadata that should be returned in the API response. In some cases, YouTube receives metadata for an asset from multiple sources, such as when different partners own the asset in different territories.
 * @param {string=} params.fetchOwnership The fetchOwnership parameter specifies the version of the asset's ownership data that should be returned in the API response. As with asset metadata, YouTube can receive asset ownership data from multiple sources.
 * @param {boolean=} params.fetchOwnershipConflicts The fetchOwnershipConflicts parameter allows you to retrieve information about ownership conflicts.
 * @param {string} params.id The id parameter specifies a comma-separated list of YouTube Asset IDs that identify the assets you want to retrieve. As noted in the method description, if you try to retrieve an asset that YouTube identified as a duplicate and merged with another asset, the API response only returns the synthesized asset. In that case, the aliasId property in the asset resource specifies a list of other asset IDs that can be used to identify that asset.  Also note that the API response does not contain duplicates. As such, if your request identifies three asset IDs, and all of those have been merged into a single asset, then the API response identifies one matching asset.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Assets$List, options?: MethodOptions): GaxiosPromise<Schema$AssetListResponse>;
list(params: Params$Resource$Assets$List, options: MethodOptions|BodyResponseCallback<Schema$AssetListResponse>, callback: BodyResponseCallback<Schema$AssetListResponse>): void;
list(params: Params$Resource$Assets$List, callback: BodyResponseCallback<Schema$AssetListResponse>): void;
list(callback: BodyResponseCallback<Schema$AssetListResponse>): void;
list(paramsOrCallback?: Params$Resource$Assets$List|BodyResponseCallback<Schema$AssetListResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AssetListResponse>, callback?: BodyResponseCallback<Schema$AssetListResponse>): void|GaxiosPromise<Schema$AssetListResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Assets$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Assets$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assets').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['id'],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$AssetListResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$AssetListResponse>(parameters);
  }
}

                  
/**
 * youtubePartner.assets.patch
 * @desc Patches the metadata for the specified asset.
 * @alias youtubePartner.assets.patch
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset being patched.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().Asset} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
patch(params?: Params$Resource$Assets$Patch, options?: MethodOptions): GaxiosPromise<Schema$Asset>;
patch(params: Params$Resource$Assets$Patch, options: MethodOptions|BodyResponseCallback<Schema$Asset>, callback: BodyResponseCallback<Schema$Asset>): void;
patch(params: Params$Resource$Assets$Patch, callback: BodyResponseCallback<Schema$Asset>): void;
patch(callback: BodyResponseCallback<Schema$Asset>): void;
patch(paramsOrCallback?: Params$Resource$Assets$Patch|BodyResponseCallback<Schema$Asset>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Asset>, callback?: BodyResponseCallback<Schema$Asset>): void|GaxiosPromise<Schema$Asset> {
  let params = (paramsOrCallback || {}) as Params$Resource$Assets$Patch;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Assets$Patch;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assets/{assetId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PATCH'
    }, options),
    params,
        requiredParams: ['assetId'],
    pathParams: ['assetId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Asset>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Asset>(parameters);
  }
}

                  
/**
 * youtubePartner.assets.update
 * @desc Updates the metadata for the specified asset.
 * @alias youtubePartner.assets.update
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset being updated.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().Asset} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
update(params?: Params$Resource$Assets$Update, options?: MethodOptions): GaxiosPromise<Schema$Asset>;
update(params: Params$Resource$Assets$Update, options: MethodOptions|BodyResponseCallback<Schema$Asset>, callback: BodyResponseCallback<Schema$Asset>): void;
update(params: Params$Resource$Assets$Update, callback: BodyResponseCallback<Schema$Asset>): void;
update(callback: BodyResponseCallback<Schema$Asset>): void;
update(paramsOrCallback?: Params$Resource$Assets$Update|BodyResponseCallback<Schema$Asset>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Asset>, callback?: BodyResponseCallback<Schema$Asset>): void|GaxiosPromise<Schema$Asset> {
  let params = (paramsOrCallback || {}) as Params$Resource$Assets$Update;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Assets$Update;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assets/{assetId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PUT'
    }, options),
    params,
        requiredParams: ['assetId'],
    pathParams: ['assetId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Asset>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Asset>(parameters);
  }
}

                  }

                  export interface Params$Resource$Assets$Get extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The assetId parameter specifies the YouTube asset ID of the asset being retrieved.
               */
              assetId?: string;
                          /**
               * The fetchMatchPolicy parameter specifies the version of the asset's match policy that should be returned in the API response.
               */
              fetchMatchPolicy?: string;
                          /**
               * The fetchMetadata parameter specifies the version of the asset's metadata that should be returned in the API response. In some cases, YouTube receives metadata for an asset from multiple sources, such as when different partners own the asset in different territories.
               */
              fetchMetadata?: string;
                          /**
               * The fetchOwnership parameter specifies the version of the asset's ownership data that should be returned in the API response. As with asset metadata, YouTube can receive asset ownership data from multiple sources.
               */
              fetchOwnership?: string;
                          /**
               * The fetchOwnershipConflicts parameter allows you to retrieve information about ownership conflicts.
               */
              fetchOwnershipConflicts?: boolean;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
              export interface Params$Resource$Assets$Insert extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Asset;
          
                  }
              export interface Params$Resource$Assets$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The fetchMatchPolicy parameter specifies the version of the asset's match policy that should be returned in the API response.
               */
              fetchMatchPolicy?: string;
                          /**
               * The fetchMetadata parameter specifies the version of the asset's metadata that should be returned in the API response. In some cases, YouTube receives metadata for an asset from multiple sources, such as when different partners own the asset in different territories.
               */
              fetchMetadata?: string;
                          /**
               * The fetchOwnership parameter specifies the version of the asset's ownership data that should be returned in the API response. As with asset metadata, YouTube can receive asset ownership data from multiple sources.
               */
              fetchOwnership?: string;
                          /**
               * The fetchOwnershipConflicts parameter allows you to retrieve information about ownership conflicts.
               */
              fetchOwnershipConflicts?: boolean;
                          /**
               * The id parameter specifies a comma-separated list of YouTube Asset IDs that identify the assets you want to retrieve. As noted in the method description, if you try to retrieve an asset that YouTube identified as a duplicate and merged with another asset, the API response only returns the synthesized asset. In that case, the aliasId property in the asset resource specifies a list of other asset IDs that can be used to identify that asset.  Also note that the API response does not contain duplicates. As such, if your request identifies three asset IDs, and all of those have been merged into a single asset, then the API response identifies one matching asset.
               */
              id?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
              export interface Params$Resource$Assets$Patch extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The assetId parameter specifies the YouTube asset ID of the asset being patched.
               */
              assetId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Asset;
          
                  }
              export interface Params$Resource$Assets$Update extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The assetId parameter specifies the YouTube asset ID of the asset being updated.
               */
              assetId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Asset;
          
                  }
          
    
          export class Resource$Assetsearch {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.assetSearch.list
 * @desc Searches for assets based on asset metadata. The method can retrieve all assets or only assets owned by the content owner. This method mimics the functionality of the advanced search feature on the Assets page in CMS.
 * @alias youtubePartner.assetSearch.list
 * @memberOf! ()
 *
 * @param {object=} params Parameters for request
 * @param {string=} params.createdAfter The createdAfter parameter restricts the set of returned assets to ones originally created on or after the specified datetime. For example: 2015-01-29T23:00:00Z
 * @param {string=} params.createdBefore The createdBefore parameter restricts the set of returned assets to ones originally created on or before the specified datetime. For example: 2015-01-29T23:00:00Z
 * @param {boolean=} params.hasConflicts The hasConflicts parameter enables you to only retrieve assets that have ownership conflicts. The only valid value is true. Setting the parameter value to false does not affect the results.
 * @param {boolean=} params.includeAnyProvidedlabel If includeAnyProvidedlabel parameter is set to true, will search for assets that contain any of the provided labels; else will search for assets that contain all the provided labels.
 * @param {string=} params.isrcs A comma-separated list of up to 50 ISRCs. If you specify a value for this parameter, the API server ignores any values set for the following parameters: q, includeAnyProvidedLabel, hasConflicts, labels, metadataSearchFields, sort, and type.
 * @param {string=} params.labels The labels parameter specifies the assets with certain asset labels that you want to retrieve. The parameter value is a comma-separated list of asset labels.
 * @param {string=} params.metadataSearchFields The metadataSearchField parameter specifies which metadata fields to search by. It is a comma-separated list of metadata field and value pairs connected by colon(:). For example: customId:my_custom_id,artist:Dandexx
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string=} params.ownershipRestriction The ownershipRestriction parameter specifies the ownership filtering option for the search. By default the search is performed in the assets owned by currently authenticated user only.
 * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
 * @param {string=} params.q YouTube searches within the id, type, and customId fields for all assets as well as in numerous other metadata fields – such as actor, album, director, isrc, and tmsId – that vary for different types of assets (movies, music videos, etc.).
 * @param {string=} params.sort The sort parameter specifies how the search results should be sorted. Note that results are always sorted in descending order.
 * @param {string=} params.type The type parameter specifies the types of assets that you want to retrieve. The parameter value is a comma-separated list of asset types.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Assetsearch$List, options?: MethodOptions): GaxiosPromise<Schema$AssetSearchResponse>;
list(params: Params$Resource$Assetsearch$List, options: MethodOptions|BodyResponseCallback<Schema$AssetSearchResponse>, callback: BodyResponseCallback<Schema$AssetSearchResponse>): void;
list(params: Params$Resource$Assetsearch$List, callback: BodyResponseCallback<Schema$AssetSearchResponse>): void;
list(callback: BodyResponseCallback<Schema$AssetSearchResponse>): void;
list(paramsOrCallback?: Params$Resource$Assetsearch$List|BodyResponseCallback<Schema$AssetSearchResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AssetSearchResponse>, callback?: BodyResponseCallback<Schema$AssetSearchResponse>): void|GaxiosPromise<Schema$AssetSearchResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Assetsearch$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Assetsearch$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assetSearch').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$AssetSearchResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$AssetSearchResponse>(parameters);
  }
}

                  }

                  export interface Params$Resource$Assetsearch$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The createdAfter parameter restricts the set of returned assets to ones originally created on or after the specified datetime. For example: 2015-01-29T23:00:00Z
               */
              createdAfter?: string;
                          /**
               * The createdBefore parameter restricts the set of returned assets to ones originally created on or before the specified datetime. For example: 2015-01-29T23:00:00Z
               */
              createdBefore?: string;
                          /**
               * The hasConflicts parameter enables you to only retrieve assets that have ownership conflicts. The only valid value is true. Setting the parameter value to false does not affect the results.
               */
              hasConflicts?: boolean;
                          /**
               * If includeAnyProvidedlabel parameter is set to true, will search for assets that contain any of the provided labels; else will search for assets that contain all the provided labels.
               */
              includeAnyProvidedlabel?: boolean;
                          /**
               * A comma-separated list of up to 50 ISRCs. If you specify a value for this parameter, the API server ignores any values set for the following parameters: q, includeAnyProvidedLabel, hasConflicts, labels, metadataSearchFields, sort, and type.
               */
              isrcs?: string;
                          /**
               * The labels parameter specifies the assets with certain asset labels that you want to retrieve. The parameter value is a comma-separated list of asset labels.
               */
              labels?: string;
                          /**
               * The metadataSearchField parameter specifies which metadata fields to search by. It is a comma-separated list of metadata field and value pairs connected by colon(:). For example: customId:my_custom_id,artist:Dandexx
               */
              metadataSearchFields?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The ownershipRestriction parameter specifies the ownership filtering option for the search. By default the search is performed in the assets owned by currently authenticated user only.
               */
              ownershipRestriction?: string;
                          /**
               * The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
               */
              pageToken?: string;
                          /**
               * YouTube searches within the id, type, and customId fields for all assets as well as in numerous other metadata fields – such as actor, album, director, isrc, and tmsId – that vary for different types of assets (movies, music videos, etc.).
               */
              q?: string;
                          /**
               * The sort parameter specifies how the search results should be sorted. Note that results are always sorted in descending order.
               */
              sort?: string;
                          /**
               * The type parameter specifies the types of assets that you want to retrieve. The parameter value is a comma-separated list of asset types.
               */
              type?: string;
                      
           
                  }
          
    
          export class Resource$Assetshares {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.assetShares.list
 * @desc This method either retrieves a list of asset shares the partner owns and that map to a specified asset view ID or it retrieves a list of asset views associated with a specified asset share ID owned by the partner.
 * @alias youtubePartner.assetShares.list
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.assetId The assetId parameter specifies the asset ID for which you are retrieving data. The parameter can be an asset view ID or an asset share ID.  - If the value is an asset view ID, the API response identifies any asset share ids mapped to the asset view. - If the value is an asset share ID, the API response identifies any asset view ids that maps to that asset share.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Assetshares$List, options?: MethodOptions): GaxiosPromise<Schema$AssetShareListResponse>;
list(params: Params$Resource$Assetshares$List, options: MethodOptions|BodyResponseCallback<Schema$AssetShareListResponse>, callback: BodyResponseCallback<Schema$AssetShareListResponse>): void;
list(params: Params$Resource$Assetshares$List, callback: BodyResponseCallback<Schema$AssetShareListResponse>): void;
list(callback: BodyResponseCallback<Schema$AssetShareListResponse>): void;
list(paramsOrCallback?: Params$Resource$Assetshares$List|BodyResponseCallback<Schema$AssetShareListResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$AssetShareListResponse>, callback?: BodyResponseCallback<Schema$AssetShareListResponse>): void|GaxiosPromise<Schema$AssetShareListResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Assetshares$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Assetshares$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assetShares').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['assetId'],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$AssetShareListResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$AssetShareListResponse>(parameters);
  }
}

                  }

                  export interface Params$Resource$Assetshares$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The assetId parameter specifies the asset ID for which you are retrieving data. The parameter can be an asset view ID or an asset share ID.  - If the value is an asset view ID, the API response identifies any asset share ids mapped to the asset view. - If the value is an asset share ID, the API response identifies any asset view ids that maps to that asset share.
               */
              assetId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
               */
              pageToken?: string;
                      
           
                  }
          
    
          export class Resource$Campaigns {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.campaigns.delete
 * @desc Deletes a specified campaign for an owner.
 * @alias youtubePartner.campaigns.delete
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.campaignId The campaignId parameter specifies the YouTube campaign ID of the campaign being deleted.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
delete(params?: Params$Resource$Campaigns$Delete, options?: MethodOptions): GaxiosPromise<void>;
delete(params: Params$Resource$Campaigns$Delete, options: MethodOptions|BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
delete(params: Params$Resource$Campaigns$Delete, callback: BodyResponseCallback<void>): void;
delete(callback: BodyResponseCallback<void>): void;
delete(paramsOrCallback?: Params$Resource$Campaigns$Delete|BodyResponseCallback<void>, optionsOrCallback?: MethodOptions|BodyResponseCallback<void>, callback?: BodyResponseCallback<void>): void|GaxiosPromise<void> {
  let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$Delete;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Campaigns$Delete;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/campaigns/{campaignId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'DELETE'
    }, options),
    params,
        requiredParams: ['campaignId'],
    pathParams: ['campaignId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<void>(parameters, callback);
  } else {
    return createAPIRequest<void>(parameters);
  }
}

                  
/**
 * youtubePartner.campaigns.get
 * @desc Retrieves a particular campaign for an owner.
 * @alias youtubePartner.campaigns.get
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.campaignId The campaignId parameter specifies the YouTube campaign ID of the campaign being retrieved.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
get(params?: Params$Resource$Campaigns$Get, options?: MethodOptions): GaxiosPromise<Schema$Campaign>;
get(params: Params$Resource$Campaigns$Get, options: MethodOptions|BodyResponseCallback<Schema$Campaign>, callback: BodyResponseCallback<Schema$Campaign>): void;
get(params: Params$Resource$Campaigns$Get, callback: BodyResponseCallback<Schema$Campaign>): void;
get(callback: BodyResponseCallback<Schema$Campaign>): void;
get(paramsOrCallback?: Params$Resource$Campaigns$Get|BodyResponseCallback<Schema$Campaign>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Campaign>, callback?: BodyResponseCallback<Schema$Campaign>): void|GaxiosPromise<Schema$Campaign> {
  let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$Get;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Campaigns$Get;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/campaigns/{campaignId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['campaignId'],
    pathParams: ['campaignId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Campaign>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Campaign>(parameters);
  }
}

                  
/**
 * youtubePartner.campaigns.insert
 * @desc Insert a new campaign for an owner using the specified campaign data.
 * @alias youtubePartner.campaigns.insert
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().Campaign} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
insert(params?: Params$Resource$Campaigns$Insert, options?: MethodOptions): GaxiosPromise<Schema$Campaign>;
insert(params: Params$Resource$Campaigns$Insert, options: MethodOptions|BodyResponseCallback<Schema$Campaign>, callback: BodyResponseCallback<Schema$Campaign>): void;
insert(params: Params$Resource$Campaigns$Insert, callback: BodyResponseCallback<Schema$Campaign>): void;
insert(callback: BodyResponseCallback<Schema$Campaign>): void;
insert(paramsOrCallback?: Params$Resource$Campaigns$Insert|BodyResponseCallback<Schema$Campaign>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Campaign>, callback?: BodyResponseCallback<Schema$Campaign>): void|GaxiosPromise<Schema$Campaign> {
  let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$Insert;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Campaigns$Insert;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/campaigns').replace(/([^:]\/)\/+/g, '$1'),
      method: 'POST'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Campaign>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Campaign>(parameters);
  }
}

                  
/**
 * youtubePartner.campaigns.list
 * @desc Retrieves a list of campaigns for an owner.
 * @alias youtubePartner.campaigns.list
 * @memberOf! ()
 *
 * @param {object=} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. For example, set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Campaigns$List, options?: MethodOptions): GaxiosPromise<Schema$CampaignList>;
list(params: Params$Resource$Campaigns$List, options: MethodOptions|BodyResponseCallback<Schema$CampaignList>, callback: BodyResponseCallback<Schema$CampaignList>): void;
list(params: Params$Resource$Campaigns$List, callback: BodyResponseCallback<Schema$CampaignList>): void;
list(callback: BodyResponseCallback<Schema$CampaignList>): void;
list(paramsOrCallback?: Params$Resource$Campaigns$List|BodyResponseCallback<Schema$CampaignList>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$CampaignList>, callback?: BodyResponseCallback<Schema$CampaignList>): void|GaxiosPromise<Schema$CampaignList> {
  let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Campaigns$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/campaigns').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$CampaignList>(parameters, callback);
  } else {
    return createAPIRequest<Schema$CampaignList>(parameters);
  }
}

                  
/**
 * youtubePartner.campaigns.patch
 * @desc Update the data for a specific campaign. This method supports patch semantics.
 * @alias youtubePartner.campaigns.patch
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.campaignId The campaignId parameter specifies the YouTube campaign ID of the campaign being retrieved.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().Campaign} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
patch(params?: Params$Resource$Campaigns$Patch, options?: MethodOptions): GaxiosPromise<Schema$Campaign>;
patch(params: Params$Resource$Campaigns$Patch, options: MethodOptions|BodyResponseCallback<Schema$Campaign>, callback: BodyResponseCallback<Schema$Campaign>): void;
patch(params: Params$Resource$Campaigns$Patch, callback: BodyResponseCallback<Schema$Campaign>): void;
patch(callback: BodyResponseCallback<Schema$Campaign>): void;
patch(paramsOrCallback?: Params$Resource$Campaigns$Patch|BodyResponseCallback<Schema$Campaign>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Campaign>, callback?: BodyResponseCallback<Schema$Campaign>): void|GaxiosPromise<Schema$Campaign> {
  let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$Patch;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Campaigns$Patch;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/campaigns/{campaignId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PATCH'
    }, options),
    params,
        requiredParams: ['campaignId'],
    pathParams: ['campaignId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Campaign>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Campaign>(parameters);
  }
}

                  
/**
 * youtubePartner.campaigns.update
 * @desc Update the data for a specific campaign.
 * @alias youtubePartner.campaigns.update
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.campaignId The campaignId parameter specifies the YouTube campaign ID of the campaign being retrieved.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().Campaign} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
update(params?: Params$Resource$Campaigns$Update, options?: MethodOptions): GaxiosPromise<Schema$Campaign>;
update(params: Params$Resource$Campaigns$Update, options: MethodOptions|BodyResponseCallback<Schema$Campaign>, callback: BodyResponseCallback<Schema$Campaign>): void;
update(params: Params$Resource$Campaigns$Update, callback: BodyResponseCallback<Schema$Campaign>): void;
update(callback: BodyResponseCallback<Schema$Campaign>): void;
update(paramsOrCallback?: Params$Resource$Campaigns$Update|BodyResponseCallback<Schema$Campaign>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Campaign>, callback?: BodyResponseCallback<Schema$Campaign>): void|GaxiosPromise<Schema$Campaign> {
  let params = (paramsOrCallback || {}) as Params$Resource$Campaigns$Update;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Campaigns$Update;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/campaigns/{campaignId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PUT'
    }, options),
    params,
        requiredParams: ['campaignId'],
    pathParams: ['campaignId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Campaign>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Campaign>(parameters);
  }
}

                  }

                  export interface Params$Resource$Campaigns$Delete extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The campaignId parameter specifies the YouTube campaign ID of the campaign being deleted.
               */
              campaignId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
              export interface Params$Resource$Campaigns$Get extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The campaignId parameter specifies the YouTube campaign ID of the campaign being retrieved.
               */
              campaignId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
              export interface Params$Resource$Campaigns$Insert extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Campaign;
          
                  }
              export interface Params$Resource$Campaigns$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The pageToken parameter specifies a token that identifies a particular page of results to return. For example, set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
               */
              pageToken?: string;
                      
           
                  }
              export interface Params$Resource$Campaigns$Patch extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The campaignId parameter specifies the YouTube campaign ID of the campaign being retrieved.
               */
              campaignId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Campaign;
          
                  }
              export interface Params$Resource$Campaigns$Update extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The campaignId parameter specifies the YouTube campaign ID of the campaign being retrieved.
               */
              campaignId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Campaign;
          
                  }
          
    
          export class Resource$Claimhistory {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.claimHistory.get
 * @desc Retrieves the claim history for a specified claim.
 * @alias youtubePartner.claimHistory.get
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.claimId The claimId parameter specifies the YouTube claim ID of the claim for which you are retrieving the claim history.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
get(params?: Params$Resource$Claimhistory$Get, options?: MethodOptions): GaxiosPromise<Schema$ClaimHistory>;
get(params: Params$Resource$Claimhistory$Get, options: MethodOptions|BodyResponseCallback<Schema$ClaimHistory>, callback: BodyResponseCallback<Schema$ClaimHistory>): void;
get(params: Params$Resource$Claimhistory$Get, callback: BodyResponseCallback<Schema$ClaimHistory>): void;
get(callback: BodyResponseCallback<Schema$ClaimHistory>): void;
get(paramsOrCallback?: Params$Resource$Claimhistory$Get|BodyResponseCallback<Schema$ClaimHistory>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$ClaimHistory>, callback?: BodyResponseCallback<Schema$ClaimHistory>): void|GaxiosPromise<Schema$ClaimHistory> {
  let params = (paramsOrCallback || {}) as Params$Resource$Claimhistory$Get;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Claimhistory$Get;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/claimHistory/{claimId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['claimId'],
    pathParams: ['claimId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$ClaimHistory>(parameters, callback);
  } else {
    return createAPIRequest<Schema$ClaimHistory>(parameters);
  }
}

                  }

                  export interface Params$Resource$Claimhistory$Get extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The claimId parameter specifies the YouTube claim ID of the claim for which you are retrieving the claim history.
               */
              claimId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
          
    
          export class Resource$Claims {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.claims.get
 * @desc Retrieves a specific claim by ID.
 * @alias youtubePartner.claims.get
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.claimId The claimId parameter specifies the claim ID of the claim being retrieved.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
get(params?: Params$Resource$Claims$Get, options?: MethodOptions): GaxiosPromise<Schema$Claim>;
get(params: Params$Resource$Claims$Get, options: MethodOptions|BodyResponseCallback<Schema$Claim>, callback: BodyResponseCallback<Schema$Claim>): void;
get(params: Params$Resource$Claims$Get, callback: BodyResponseCallback<Schema$Claim>): void;
get(callback: BodyResponseCallback<Schema$Claim>): void;
get(paramsOrCallback?: Params$Resource$Claims$Get|BodyResponseCallback<Schema$Claim>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Claim>, callback?: BodyResponseCallback<Schema$Claim>): void|GaxiosPromise<Schema$Claim> {
  let params = (paramsOrCallback || {}) as Params$Resource$Claims$Get;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Claims$Get;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/claims/{claimId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['claimId'],
    pathParams: ['claimId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Claim>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Claim>(parameters);
  }
}

                  
/**
 * youtubePartner.claims.insert
 * @desc Creates a claim. The video being claimed must have been uploaded to a channel associated with the same content owner as the API user sending the request. You can set the claim's policy in any of the following ways: - Use the claim resource's policy property to identify a saved policy by its unique ID. - Use the claim resource's policy property to specify a custom set of rules.
 * @alias youtubePartner.claims.insert
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {boolean=} params.isManualClaim restricted
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().Claim} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
insert(params?: Params$Resource$Claims$Insert, options?: MethodOptions): GaxiosPromise<Schema$Claim>;
insert(params: Params$Resource$Claims$Insert, options: MethodOptions|BodyResponseCallback<Schema$Claim>, callback: BodyResponseCallback<Schema$Claim>): void;
insert(params: Params$Resource$Claims$Insert, callback: BodyResponseCallback<Schema$Claim>): void;
insert(callback: BodyResponseCallback<Schema$Claim>): void;
insert(paramsOrCallback?: Params$Resource$Claims$Insert|BodyResponseCallback<Schema$Claim>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Claim>, callback?: BodyResponseCallback<Schema$Claim>): void|GaxiosPromise<Schema$Claim> {
  let params = (paramsOrCallback || {}) as Params$Resource$Claims$Insert;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Claims$Insert;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/claims').replace(/([^:]\/)\/+/g, '$1'),
      method: 'POST'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Claim>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Claim>(parameters);
  }
}

                  
/**
 * youtubePartner.claims.list
 * @desc Retrieves a list of claims administered by the content owner associated with the currently authenticated user. Results are sorted in descending order of creation time.
 * @alias youtubePartner.claims.list
 * @memberOf! ()
 *
 * @param {object=} params Parameters for request
 * @param {string=} params.assetId Use the claimSearch.list method's assetId parameter to search for claim snippets by asset ID. You can then retrieve the claim resources for those claims by using this method's id parameter to specify a comma-separated list of claim IDs.
 * @param {string=} params.id The id parameter specifies a list of comma-separated YouTube claim IDs to retrieve.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. For example, set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
 * @param {string=} params.q Use the claimSearch.list method's q parameter to search for claim snippets that match a particular query string. You can then retrieve the claim resources for those claims by using this method's id parameter to specify a comma-separated list of claim IDs.
 * @param {string=} params.videoId Use the claimSearch.list method's videoId parameter to search for claim snippets by video ID. You can then retrieve the claim resources for those claims by using this method's id parameter to specify a comma-separated list of claim IDs.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Claims$List, options?: MethodOptions): GaxiosPromise<Schema$ClaimListResponse>;
list(params: Params$Resource$Claims$List, options: MethodOptions|BodyResponseCallback<Schema$ClaimListResponse>, callback: BodyResponseCallback<Schema$ClaimListResponse>): void;
list(params: Params$Resource$Claims$List, callback: BodyResponseCallback<Schema$ClaimListResponse>): void;
list(callback: BodyResponseCallback<Schema$ClaimListResponse>): void;
list(paramsOrCallback?: Params$Resource$Claims$List|BodyResponseCallback<Schema$ClaimListResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$ClaimListResponse>, callback?: BodyResponseCallback<Schema$ClaimListResponse>): void|GaxiosPromise<Schema$ClaimListResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Claims$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Claims$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/claims').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$ClaimListResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$ClaimListResponse>(parameters);
  }
}

                  
/**
 * youtubePartner.claims.patch
 * @desc Updates an existing claim by either changing its policy or its status. You can update a claim's status from active to inactive to effectively release the claim. This method supports patch semantics.
 * @alias youtubePartner.claims.patch
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.claimId The claimId parameter specifies the claim ID of the claim being updated.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().Claim} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
patch(params?: Params$Resource$Claims$Patch, options?: MethodOptions): GaxiosPromise<Schema$Claim>;
patch(params: Params$Resource$Claims$Patch, options: MethodOptions|BodyResponseCallback<Schema$Claim>, callback: BodyResponseCallback<Schema$Claim>): void;
patch(params: Params$Resource$Claims$Patch, callback: BodyResponseCallback<Schema$Claim>): void;
patch(callback: BodyResponseCallback<Schema$Claim>): void;
patch(paramsOrCallback?: Params$Resource$Claims$Patch|BodyResponseCallback<Schema$Claim>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Claim>, callback?: BodyResponseCallback<Schema$Claim>): void|GaxiosPromise<Schema$Claim> {
  let params = (paramsOrCallback || {}) as Params$Resource$Claims$Patch;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Claims$Patch;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/claims/{claimId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PATCH'
    }, options),
    params,
        requiredParams: ['claimId'],
    pathParams: ['claimId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Claim>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Claim>(parameters);
  }
}

                  
/**
 * youtubePartner.claims.update
 * @desc Updates an existing claim by either changing its policy or its status. You can update a claim's status from active to inactive to effectively release the claim.
 * @alias youtubePartner.claims.update
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.claimId The claimId parameter specifies the claim ID of the claim being updated.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().Claim} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
update(params?: Params$Resource$Claims$Update, options?: MethodOptions): GaxiosPromise<Schema$Claim>;
update(params: Params$Resource$Claims$Update, options: MethodOptions|BodyResponseCallback<Schema$Claim>, callback: BodyResponseCallback<Schema$Claim>): void;
update(params: Params$Resource$Claims$Update, callback: BodyResponseCallback<Schema$Claim>): void;
update(callback: BodyResponseCallback<Schema$Claim>): void;
update(paramsOrCallback?: Params$Resource$Claims$Update|BodyResponseCallback<Schema$Claim>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Claim>, callback?: BodyResponseCallback<Schema$Claim>): void|GaxiosPromise<Schema$Claim> {
  let params = (paramsOrCallback || {}) as Params$Resource$Claims$Update;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Claims$Update;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/claims/{claimId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PUT'
    }, options),
    params,
        requiredParams: ['claimId'],
    pathParams: ['claimId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Claim>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Claim>(parameters);
  }
}

                  }

                  export interface Params$Resource$Claims$Get extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The claimId parameter specifies the claim ID of the claim being retrieved.
               */
              claimId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
              export interface Params$Resource$Claims$Insert extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * restricted
               */
              isManualClaim?: boolean;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Claim;
          
                  }
              export interface Params$Resource$Claims$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * Use the claimSearch.list method's assetId parameter to search for claim snippets by asset ID. You can then retrieve the claim resources for those claims by using this method's id parameter to specify a comma-separated list of claim IDs.
               */
              assetId?: string;
                          /**
               * The id parameter specifies a list of comma-separated YouTube claim IDs to retrieve.
               */
              id?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The pageToken parameter specifies a token that identifies a particular page of results to return. For example, set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
               */
              pageToken?: string;
                          /**
               * Use the claimSearch.list method's q parameter to search for claim snippets that match a particular query string. You can then retrieve the claim resources for those claims by using this method's id parameter to specify a comma-separated list of claim IDs.
               */
              q?: string;
                          /**
               * Use the claimSearch.list method's videoId parameter to search for claim snippets by video ID. You can then retrieve the claim resources for those claims by using this method's id parameter to specify a comma-separated list of claim IDs.
               */
              videoId?: string;
                      
           
                  }
              export interface Params$Resource$Claims$Patch extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The claimId parameter specifies the claim ID of the claim being updated.
               */
              claimId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Claim;
          
                  }
              export interface Params$Resource$Claims$Update extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The claimId parameter specifies the claim ID of the claim being updated.
               */
              claimId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Claim;
          
                  }
          
    
          export class Resource$Claimsearch {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.claimSearch.list
 * @desc Retrieves a list of claims that match the search criteria. You can search for claims that are associated with a specific asset or video or that match a specified query string.
 * @alias youtubePartner.claimSearch.list
 * @memberOf! ()
 *
 * @param {object=} params Parameters for request
 * @param {string=} params.assetId The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving claims.
 * @param {string=} params.contentType The contentType parameter specifies the content type of claims that you want to retrieve.
 * @param {string=} params.createdAfter The createdAfter parameter allows you to restrict the set of returned claims to ones created on or after the specified date (inclusive).
 * @param {string=} params.createdBefore The createdBefore parameter allows you to restrict the set of returned claims to ones created before the specified date (exclusive).
 * @param {string=} params.inactiveReasons The inactiveReasons parameter allows you to specify what kind of inactive claims you want to find based on the reasons why the claims became inactive.
 * @param {boolean=} params.includeThirdPartyClaims Used along with the videoId parameter this parameter determines whether or not to include third party claims in the search results.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string=} params.origin The origin parameter specifies the origins you want to find claims for. It is a comma-separated list of origin values.
 * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. For example, set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
 * @param {boolean=} params.partnerUploaded The partnerUploaded parameter specifies whether you want to filter your search results to only partner uploaded or non partner uploaded claims.
 * @param {string=} params.q The q parameter specifies the query string to use to filter search results. YouTube searches for the query string in the following claim fields: video_title, video_keywords, user_name, isrc, iswc, grid, custom_id, and in the content owner's email address.
 * @param {string=} params.referenceId The referenceId parameter specifies the YouTube reference ID of the reference for which you are retrieving claims.
 * @param {string=} params.sort The sort parameter specifies the method that will be used to order resources in the API response. The default value is date. However, if the status parameter value is either appealed, disputed, pending, potential, or routedForReview, then results will be sorted by the time that the claim review period expires.
 * @param {string=} params.status The status parameter restricts your results to only claims in the specified status.
 * @param {string=} params.statusModifiedAfter The statusModifiedAfter parameter allows you to restrict the result set to only include claims that have had their status modified on or after the specified date (inclusive). The date specified must be on or after June 30, 2016 (2016-06-30). The parameter value's format is YYYY-MM-DD.
 * @param {string=} params.statusModifiedBefore The statusModifiedBefore parameter allows you to restrict the result set to only include claims that have had their status modified before the specified date (exclusive). The date specified must be on or after July 1, 2016 (2016-07-01). The parameter value's format is YYYY-MM-DD.
 * @param {string=} params.videoId The videoId parameter specifies comma-separated list of YouTube video IDs for which you are retrieving claims.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Claimsearch$List, options?: MethodOptions): GaxiosPromise<Schema$ClaimSearchResponse>;
list(params: Params$Resource$Claimsearch$List, options: MethodOptions|BodyResponseCallback<Schema$ClaimSearchResponse>, callback: BodyResponseCallback<Schema$ClaimSearchResponse>): void;
list(params: Params$Resource$Claimsearch$List, callback: BodyResponseCallback<Schema$ClaimSearchResponse>): void;
list(callback: BodyResponseCallback<Schema$ClaimSearchResponse>): void;
list(paramsOrCallback?: Params$Resource$Claimsearch$List|BodyResponseCallback<Schema$ClaimSearchResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$ClaimSearchResponse>, callback?: BodyResponseCallback<Schema$ClaimSearchResponse>): void|GaxiosPromise<Schema$ClaimSearchResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Claimsearch$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Claimsearch$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/claimSearch').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$ClaimSearchResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$ClaimSearchResponse>(parameters);
  }
}

                  }

                  export interface Params$Resource$Claimsearch$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving claims.
               */
              assetId?: string;
                          /**
               * The contentType parameter specifies the content type of claims that you want to retrieve.
               */
              contentType?: string;
                          /**
               * The createdAfter parameter allows you to restrict the set of returned claims to ones created on or after the specified date (inclusive).
               */
              createdAfter?: string;
                          /**
               * The createdBefore parameter allows you to restrict the set of returned claims to ones created before the specified date (exclusive).
               */
              createdBefore?: string;
                          /**
               * The inactiveReasons parameter allows you to specify what kind of inactive claims you want to find based on the reasons why the claims became inactive.
               */
              inactiveReasons?: string;
                          /**
               * Used along with the videoId parameter this parameter determines whether or not to include third party claims in the search results.
               */
              includeThirdPartyClaims?: boolean;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The origin parameter specifies the origins you want to find claims for. It is a comma-separated list of origin values.
               */
              origin?: string;
                          /**
               * The pageToken parameter specifies a token that identifies a particular page of results to return. For example, set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
               */
              pageToken?: string;
                          /**
               * The partnerUploaded parameter specifies whether you want to filter your search results to only partner uploaded or non partner uploaded claims.
               */
              partnerUploaded?: boolean;
                          /**
               * The q parameter specifies the query string to use to filter search results. YouTube searches for the query string in the following claim fields: video_title, video_keywords, user_name, isrc, iswc, grid, custom_id, and in the content owner's email address.
               */
              q?: string;
                          /**
               * The referenceId parameter specifies the YouTube reference ID of the reference for which you are retrieving claims.
               */
              referenceId?: string;
                          /**
               * The sort parameter specifies the method that will be used to order resources in the API response. The default value is date. However, if the status parameter value is either appealed, disputed, pending, potential, or routedForReview, then results will be sorted by the time that the claim review period expires.
               */
              sort?: string;
                          /**
               * The status parameter restricts your results to only claims in the specified status.
               */
              status?: string;
                          /**
               * The statusModifiedAfter parameter allows you to restrict the result set to only include claims that have had their status modified on or after the specified date (inclusive). The date specified must be on or after June 30, 2016 (2016-06-30). The parameter value's format is YYYY-MM-DD.
               */
              statusModifiedAfter?: string;
                          /**
               * The statusModifiedBefore parameter allows you to restrict the result set to only include claims that have had their status modified before the specified date (exclusive). The date specified must be on or after July 1, 2016 (2016-07-01). The parameter value's format is YYYY-MM-DD.
               */
              statusModifiedBefore?: string;
                          /**
               * The videoId parameter specifies comma-separated list of YouTube video IDs for which you are retrieving claims.
               */
              videoId?: string;
                      
           
                  }
          
    
          export class Resource$Contentowneradvertisingoptions {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.contentOwnerAdvertisingOptions.get
 * @desc Retrieves advertising options for the content owner associated with the authenticated user.
 * @alias youtubePartner.contentOwnerAdvertisingOptions.get
 * @memberOf! ()
 *
 * @param {object=} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
get(params?: Params$Resource$Contentowneradvertisingoptions$Get, options?: MethodOptions): GaxiosPromise<Schema$ContentOwnerAdvertisingOption>;
get(params: Params$Resource$Contentowneradvertisingoptions$Get, options: MethodOptions|BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>, callback: BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>): void;
get(params: Params$Resource$Contentowneradvertisingoptions$Get, callback: BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>): void;
get(callback: BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>): void;
get(paramsOrCallback?: Params$Resource$Contentowneradvertisingoptions$Get|BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>, callback?: BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>): void|GaxiosPromise<Schema$ContentOwnerAdvertisingOption> {
  let params = (paramsOrCallback || {}) as Params$Resource$Contentowneradvertisingoptions$Get;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Contentowneradvertisingoptions$Get;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/contentOwnerAdvertisingOptions').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$ContentOwnerAdvertisingOption>(parameters, callback);
  } else {
    return createAPIRequest<Schema$ContentOwnerAdvertisingOption>(parameters);
  }
}

                  
/**
 * youtubePartner.contentOwnerAdvertisingOptions.patch
 * @desc Updates advertising options for the content owner associated with the authenticated API user. This method supports patch semantics.
 * @alias youtubePartner.contentOwnerAdvertisingOptions.patch
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().ContentOwnerAdvertisingOption} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
patch(params?: Params$Resource$Contentowneradvertisingoptions$Patch, options?: MethodOptions): GaxiosPromise<Schema$ContentOwnerAdvertisingOption>;
patch(params: Params$Resource$Contentowneradvertisingoptions$Patch, options: MethodOptions|BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>, callback: BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>): void;
patch(params: Params$Resource$Contentowneradvertisingoptions$Patch, callback: BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>): void;
patch(callback: BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>): void;
patch(paramsOrCallback?: Params$Resource$Contentowneradvertisingoptions$Patch|BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>, callback?: BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>): void|GaxiosPromise<Schema$ContentOwnerAdvertisingOption> {
  let params = (paramsOrCallback || {}) as Params$Resource$Contentowneradvertisingoptions$Patch;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Contentowneradvertisingoptions$Patch;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/contentOwnerAdvertisingOptions').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PATCH'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$ContentOwnerAdvertisingOption>(parameters, callback);
  } else {
    return createAPIRequest<Schema$ContentOwnerAdvertisingOption>(parameters);
  }
}

                  
/**
 * youtubePartner.contentOwnerAdvertisingOptions.update
 * @desc Updates advertising options for the content owner associated with the authenticated API user.
 * @alias youtubePartner.contentOwnerAdvertisingOptions.update
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().ContentOwnerAdvertisingOption} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
update(params?: Params$Resource$Contentowneradvertisingoptions$Update, options?: MethodOptions): GaxiosPromise<Schema$ContentOwnerAdvertisingOption>;
update(params: Params$Resource$Contentowneradvertisingoptions$Update, options: MethodOptions|BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>, callback: BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>): void;
update(params: Params$Resource$Contentowneradvertisingoptions$Update, callback: BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>): void;
update(callback: BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>): void;
update(paramsOrCallback?: Params$Resource$Contentowneradvertisingoptions$Update|BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>, callback?: BodyResponseCallback<Schema$ContentOwnerAdvertisingOption>): void|GaxiosPromise<Schema$ContentOwnerAdvertisingOption> {
  let params = (paramsOrCallback || {}) as Params$Resource$Contentowneradvertisingoptions$Update;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Contentowneradvertisingoptions$Update;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/contentOwnerAdvertisingOptions').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PUT'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$ContentOwnerAdvertisingOption>(parameters, callback);
  } else {
    return createAPIRequest<Schema$ContentOwnerAdvertisingOption>(parameters);
  }
}

                  }

                  export interface Params$Resource$Contentowneradvertisingoptions$Get extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
              export interface Params$Resource$Contentowneradvertisingoptions$Patch extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$ContentOwnerAdvertisingOption;
          
                  }
              export interface Params$Resource$Contentowneradvertisingoptions$Update extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$ContentOwnerAdvertisingOption;
          
                  }
          
    
          export class Resource$Contentowners {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.contentOwners.get
 * @desc Retrieves information about the specified content owner.
 * @alias youtubePartner.contentOwners.get
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.contentOwnerId The contentOwnerId parameter specifies a value that uniquely identifies the content owner.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
get(params?: Params$Resource$Contentowners$Get, options?: MethodOptions): GaxiosPromise<Schema$ContentOwner>;
get(params: Params$Resource$Contentowners$Get, options: MethodOptions|BodyResponseCallback<Schema$ContentOwner>, callback: BodyResponseCallback<Schema$ContentOwner>): void;
get(params: Params$Resource$Contentowners$Get, callback: BodyResponseCallback<Schema$ContentOwner>): void;
get(callback: BodyResponseCallback<Schema$ContentOwner>): void;
get(paramsOrCallback?: Params$Resource$Contentowners$Get|BodyResponseCallback<Schema$ContentOwner>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$ContentOwner>, callback?: BodyResponseCallback<Schema$ContentOwner>): void|GaxiosPromise<Schema$ContentOwner> {
  let params = (paramsOrCallback || {}) as Params$Resource$Contentowners$Get;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Contentowners$Get;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/contentOwners/{contentOwnerId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['contentOwnerId'],
    pathParams: ['contentOwnerId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$ContentOwner>(parameters, callback);
  } else {
    return createAPIRequest<Schema$ContentOwner>(parameters);
  }
}

                  
/**
 * youtubePartner.contentOwners.list
 * @desc Retrieves a list of content owners that match the request criteria.
 * @alias youtubePartner.contentOwners.list
 * @memberOf! ()
 *
 * @param {object=} params Parameters for request
 * @param {boolean=} params.fetchMine The fetchMine parameter restricts the result set to content owners associated with the currently authenticated API user.
 * @param {string=} params.id The id parameter specifies a comma-separated list of YouTube content owner IDs to retrieve.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Contentowners$List, options?: MethodOptions): GaxiosPromise<Schema$ContentOwnerListResponse>;
list(params: Params$Resource$Contentowners$List, options: MethodOptions|BodyResponseCallback<Schema$ContentOwnerListResponse>, callback: BodyResponseCallback<Schema$ContentOwnerListResponse>): void;
list(params: Params$Resource$Contentowners$List, callback: BodyResponseCallback<Schema$ContentOwnerListResponse>): void;
list(callback: BodyResponseCallback<Schema$ContentOwnerListResponse>): void;
list(paramsOrCallback?: Params$Resource$Contentowners$List|BodyResponseCallback<Schema$ContentOwnerListResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$ContentOwnerListResponse>, callback?: BodyResponseCallback<Schema$ContentOwnerListResponse>): void|GaxiosPromise<Schema$ContentOwnerListResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Contentowners$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Contentowners$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/contentOwners').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$ContentOwnerListResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$ContentOwnerListResponse>(parameters);
  }
}

                  }

                  export interface Params$Resource$Contentowners$Get extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The contentOwnerId parameter specifies a value that uniquely identifies the content owner.
               */
              contentOwnerId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
              export interface Params$Resource$Contentowners$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The fetchMine parameter restricts the result set to content owners associated with the currently authenticated API user.
               */
              fetchMine?: boolean;
                          /**
               * The id parameter specifies a comma-separated list of YouTube content owner IDs to retrieve.
               */
              id?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
          
    
          export class Resource$Livecuepoints {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.liveCuepoints.insert
 * @desc Inserts a cuepoint into a live broadcast.
 * @alias youtubePartner.liveCuepoints.insert
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.channelId The channelId parameter identifies the channel that owns the broadcast into which the cuepoint is being inserted.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners. You can obtain the content owner ID that will serve as the parameter value by calling the YouTube Content ID API's contentOwners.list method.
      * @param {().LiveCuepoint} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
insert(params?: Params$Resource$Livecuepoints$Insert, options?: MethodOptions): GaxiosPromise<Schema$LiveCuepoint>;
insert(params: Params$Resource$Livecuepoints$Insert, options: MethodOptions|BodyResponseCallback<Schema$LiveCuepoint>, callback: BodyResponseCallback<Schema$LiveCuepoint>): void;
insert(params: Params$Resource$Livecuepoints$Insert, callback: BodyResponseCallback<Schema$LiveCuepoint>): void;
insert(callback: BodyResponseCallback<Schema$LiveCuepoint>): void;
insert(paramsOrCallback?: Params$Resource$Livecuepoints$Insert|BodyResponseCallback<Schema$LiveCuepoint>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$LiveCuepoint>, callback?: BodyResponseCallback<Schema$LiveCuepoint>): void|GaxiosPromise<Schema$LiveCuepoint> {
  let params = (paramsOrCallback || {}) as Params$Resource$Livecuepoints$Insert;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Livecuepoints$Insert;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/liveCuepoints').replace(/([^:]\/)\/+/g, '$1'),
      method: 'POST'
    }, options),
    params,
        requiredParams: ['channelId'],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$LiveCuepoint>(parameters, callback);
  } else {
    return createAPIRequest<Schema$LiveCuepoint>(parameters);
  }
}

                  }

                  export interface Params$Resource$Livecuepoints$Insert extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The channelId parameter identifies the channel that owns the broadcast into which the cuepoint is being inserted.
               */
              channelId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners. You can obtain the content owner ID that will serve as the parameter value by calling the YouTube Content ID API's contentOwners.list method.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$LiveCuepoint;
          
                  }
          
    
          export class Resource$Metadatahistory {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.metadataHistory.list
 * @desc Retrieves a list of all metadata provided for an asset, regardless of which content owner provided the data.
 * @alias youtubePartner.metadataHistory.list
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving a metadata history.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Metadatahistory$List, options?: MethodOptions): GaxiosPromise<Schema$MetadataHistoryListResponse>;
list(params: Params$Resource$Metadatahistory$List, options: MethodOptions|BodyResponseCallback<Schema$MetadataHistoryListResponse>, callback: BodyResponseCallback<Schema$MetadataHistoryListResponse>): void;
list(params: Params$Resource$Metadatahistory$List, callback: BodyResponseCallback<Schema$MetadataHistoryListResponse>): void;
list(callback: BodyResponseCallback<Schema$MetadataHistoryListResponse>): void;
list(paramsOrCallback?: Params$Resource$Metadatahistory$List|BodyResponseCallback<Schema$MetadataHistoryListResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$MetadataHistoryListResponse>, callback?: BodyResponseCallback<Schema$MetadataHistoryListResponse>): void|GaxiosPromise<Schema$MetadataHistoryListResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Metadatahistory$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Metadatahistory$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/metadataHistory').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['assetId'],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$MetadataHistoryListResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$MetadataHistoryListResponse>(parameters);
  }
}

                  }

                  export interface Params$Resource$Metadatahistory$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving a metadata history.
               */
              assetId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
          
    
          export class Resource$Orders {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.orders.delete
 * @desc Delete an order, which moves orders to inactive state and removes any associated video.
 * @alias youtubePartner.orders.delete
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner ContentOwnerId that super admin acts in behalf of.
 * @param {string} params.orderId Id of the order to delete.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
delete(params?: Params$Resource$Orders$Delete, options?: MethodOptions): GaxiosPromise<void>;
delete(params: Params$Resource$Orders$Delete, options: MethodOptions|BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
delete(params: Params$Resource$Orders$Delete, callback: BodyResponseCallback<void>): void;
delete(callback: BodyResponseCallback<void>): void;
delete(paramsOrCallback?: Params$Resource$Orders$Delete|BodyResponseCallback<void>, optionsOrCallback?: MethodOptions|BodyResponseCallback<void>, callback?: BodyResponseCallback<void>): void|GaxiosPromise<void> {
  let params = (paramsOrCallback || {}) as Params$Resource$Orders$Delete;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Orders$Delete;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/orders/{orderId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'DELETE'
    }, options),
    params,
        requiredParams: ['orderId'],
    pathParams: ['orderId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<void>(parameters, callback);
  } else {
    return createAPIRequest<void>(parameters);
  }
}

                  
/**
 * youtubePartner.orders.get
 * @desc Retrieve the details of an existing order.
 * @alias youtubePartner.orders.get
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner ContentOnwerId that super admin acts in behalf of.
 * @param {string} params.orderId The id of the order.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
get(params?: Params$Resource$Orders$Get, options?: MethodOptions): GaxiosPromise<Schema$Order>;
get(params: Params$Resource$Orders$Get, options: MethodOptions|BodyResponseCallback<Schema$Order>, callback: BodyResponseCallback<Schema$Order>): void;
get(params: Params$Resource$Orders$Get, callback: BodyResponseCallback<Schema$Order>): void;
get(callback: BodyResponseCallback<Schema$Order>): void;
get(paramsOrCallback?: Params$Resource$Orders$Get|BodyResponseCallback<Schema$Order>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Order>, callback?: BodyResponseCallback<Schema$Order>): void|GaxiosPromise<Schema$Order> {
  let params = (paramsOrCallback || {}) as Params$Resource$Orders$Get;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Orders$Get;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/orders/{orderId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['orderId'],
    pathParams: ['orderId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Order>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Order>(parameters);
  }
}

                  
/**
 * youtubePartner.orders.insert
 * @desc Creates a new basic order entry in the YouTube premium asset order management system. You must supply at least a country and channel in the new order.
 * @alias youtubePartner.orders.insert
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner ContentOnwerId that super admin acts in behalf of.
      * @param {().Order} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
insert(params?: Params$Resource$Orders$Insert, options?: MethodOptions): GaxiosPromise<Schema$Order>;
insert(params: Params$Resource$Orders$Insert, options: MethodOptions|BodyResponseCallback<Schema$Order>, callback: BodyResponseCallback<Schema$Order>): void;
insert(params: Params$Resource$Orders$Insert, callback: BodyResponseCallback<Schema$Order>): void;
insert(callback: BodyResponseCallback<Schema$Order>): void;
insert(paramsOrCallback?: Params$Resource$Orders$Insert|BodyResponseCallback<Schema$Order>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Order>, callback?: BodyResponseCallback<Schema$Order>): void|GaxiosPromise<Schema$Order> {
  let params = (paramsOrCallback || {}) as Params$Resource$Orders$Insert;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Orders$Insert;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/orders').replace(/([^:]\/)\/+/g, '$1'),
      method: 'POST'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Order>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Order>(parameters);
  }
}

                  
/**
 * youtubePartner.orders.list
 * @desc Return a list of orders, filtered by the parameters below, may return more than a single page of results.
 * @alias youtubePartner.orders.list
 * @memberOf! ()
 *
 * @param {object=} params Parameters for request
 * @param {string=} params.channelId Filter results to only a specific channel ( use encrypted ID).
 * @param {string=} params.contentType Filter the results by type, possible values are SHOW or MOVIE.
 * @param {string=} params.country Filter results by country, two letter ISO country codes are used.
 * @param {string=} params.customId Filter result by orders that have this custom ID.
 * @param {string=} params.onBehalfOfContentOwner ContentOnwerId that super admin acts in behalf of.
 * @param {string=} params.pageToken The continuation token is an optional value that is only used to page through large result sets.  - To retrieve the next page of results for a request, set this parameter to the value of the nextPageToken value from the previous response. - To get the previous page of results, set this parameter to the value of the previousPageToken value from the previous response.
 * @param {string=} params.priority Filter results by priority. P0, P1, P2, P3 and P4 are the acceptable options.
 * @param {string=} params.productionHouse Filter results by a particular production house. Specified by the name of the production house.
 * @param {string=} params.q Filter results to only orders that contain this string in the title.
 * @param {string=} params.status Filter results to have this status, available options are STATUS_AVAILED, STATUS_ORDERED, STATUS_RECEIVED, STATUS_READY_FOR_QC, STATUS_MOC_FIX, STATUS_PARTNER_FIX, STATUS_YOUTUBE_FIX, STATUS_QC_APPROVED, STATUS_INACTIVE, STATUS_INGESTION_COMPLETE, STATUS_REORDERED
 * @param {string=} params.videoId Filter results to orders that are associated with this YouTube external video id.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Orders$List, options?: MethodOptions): GaxiosPromise<Schema$OrderListResponse>;
list(params: Params$Resource$Orders$List, options: MethodOptions|BodyResponseCallback<Schema$OrderListResponse>, callback: BodyResponseCallback<Schema$OrderListResponse>): void;
list(params: Params$Resource$Orders$List, callback: BodyResponseCallback<Schema$OrderListResponse>): void;
list(callback: BodyResponseCallback<Schema$OrderListResponse>): void;
list(paramsOrCallback?: Params$Resource$Orders$List|BodyResponseCallback<Schema$OrderListResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$OrderListResponse>, callback?: BodyResponseCallback<Schema$OrderListResponse>): void|GaxiosPromise<Schema$OrderListResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Orders$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Orders$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/orders').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$OrderListResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$OrderListResponse>(parameters);
  }
}

                  
/**
 * youtubePartner.orders.patch
 * @desc Update the values in an existing order. This method supports patch semantics.
 * @alias youtubePartner.orders.patch
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner ContentOwnerId that super admin acts in behalf of.
 * @param {string} params.orderId The id of the order.
      * @param {().Order} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
patch(params?: Params$Resource$Orders$Patch, options?: MethodOptions): GaxiosPromise<Schema$Order>;
patch(params: Params$Resource$Orders$Patch, options: MethodOptions|BodyResponseCallback<Schema$Order>, callback: BodyResponseCallback<Schema$Order>): void;
patch(params: Params$Resource$Orders$Patch, callback: BodyResponseCallback<Schema$Order>): void;
patch(callback: BodyResponseCallback<Schema$Order>): void;
patch(paramsOrCallback?: Params$Resource$Orders$Patch|BodyResponseCallback<Schema$Order>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Order>, callback?: BodyResponseCallback<Schema$Order>): void|GaxiosPromise<Schema$Order> {
  let params = (paramsOrCallback || {}) as Params$Resource$Orders$Patch;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Orders$Patch;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/orders/{orderId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PATCH'
    }, options),
    params,
        requiredParams: ['orderId'],
    pathParams: ['orderId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Order>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Order>(parameters);
  }
}

                  
/**
 * youtubePartner.orders.update
 * @desc Update the values in an existing order.
 * @alias youtubePartner.orders.update
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner ContentOwnerId that super admin acts in behalf of.
 * @param {string} params.orderId The id of the order.
      * @param {().Order} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
update(params?: Params$Resource$Orders$Update, options?: MethodOptions): GaxiosPromise<Schema$Order>;
update(params: Params$Resource$Orders$Update, options: MethodOptions|BodyResponseCallback<Schema$Order>, callback: BodyResponseCallback<Schema$Order>): void;
update(params: Params$Resource$Orders$Update, callback: BodyResponseCallback<Schema$Order>): void;
update(callback: BodyResponseCallback<Schema$Order>): void;
update(paramsOrCallback?: Params$Resource$Orders$Update|BodyResponseCallback<Schema$Order>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Order>, callback?: BodyResponseCallback<Schema$Order>): void|GaxiosPromise<Schema$Order> {
  let params = (paramsOrCallback || {}) as Params$Resource$Orders$Update;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Orders$Update;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/orders/{orderId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PUT'
    }, options),
    params,
        requiredParams: ['orderId'],
    pathParams: ['orderId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Order>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Order>(parameters);
  }
}

                  }

                  export interface Params$Resource$Orders$Delete extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * ContentOwnerId that super admin acts in behalf of.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * Id of the order to delete.
               */
              orderId?: string;
                      
           
                  }
              export interface Params$Resource$Orders$Get extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * ContentOnwerId that super admin acts in behalf of.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The id of the order.
               */
              orderId?: string;
                      
           
                  }
              export interface Params$Resource$Orders$Insert extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * ContentOnwerId that super admin acts in behalf of.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Order;
          
                  }
              export interface Params$Resource$Orders$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * Filter results to only a specific channel ( use encrypted ID).
               */
              channelId?: string;
                          /**
               * Filter the results by type, possible values are SHOW or MOVIE.
               */
              contentType?: string;
                          /**
               * Filter results by country, two letter ISO country codes are used.
               */
              country?: string;
                          /**
               * Filter result by orders that have this custom ID.
               */
              customId?: string;
                          /**
               * ContentOnwerId that super admin acts in behalf of.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The continuation token is an optional value that is only used to page through large result sets.  - To retrieve the next page of results for a request, set this parameter to the value of the nextPageToken value from the previous response. - To get the previous page of results, set this parameter to the value of the previousPageToken value from the previous response.
               */
              pageToken?: string;
                          /**
               * Filter results by priority. P0, P1, P2, P3 and P4 are the acceptable options.
               */
              priority?: string;
                          /**
               * Filter results by a particular production house. Specified by the name of the production house.
               */
              productionHouse?: string;
                          /**
               * Filter results to only orders that contain this string in the title.
               */
              q?: string;
                          /**
               * Filter results to have this status, available options are STATUS_AVAILED, STATUS_ORDERED, STATUS_RECEIVED, STATUS_READY_FOR_QC, STATUS_MOC_FIX, STATUS_PARTNER_FIX, STATUS_YOUTUBE_FIX, STATUS_QC_APPROVED, STATUS_INACTIVE, STATUS_INGESTION_COMPLETE, STATUS_REORDERED
               */
              status?: string;
                          /**
               * Filter results to orders that are associated with this YouTube external video id.
               */
              videoId?: string;
                      
           
                  }
              export interface Params$Resource$Orders$Patch extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * ContentOwnerId that super admin acts in behalf of.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The id of the order.
               */
              orderId?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Order;
          
                  }
              export interface Params$Resource$Orders$Update extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * ContentOwnerId that super admin acts in behalf of.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The id of the order.
               */
              orderId?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Order;
          
                  }
          
    
          export class Resource$Ownership {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.ownership.get
 * @desc Retrieves the ownership data provided for the specified asset by the content owner associated with the authenticated user.
 * @alias youtubePartner.ownership.get
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID for which you are retrieving ownership data.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
get(params?: Params$Resource$Ownership$Get, options?: MethodOptions): GaxiosPromise<Schema$RightsOwnership>;
get(params: Params$Resource$Ownership$Get, options: MethodOptions|BodyResponseCallback<Schema$RightsOwnership>, callback: BodyResponseCallback<Schema$RightsOwnership>): void;
get(params: Params$Resource$Ownership$Get, callback: BodyResponseCallback<Schema$RightsOwnership>): void;
get(callback: BodyResponseCallback<Schema$RightsOwnership>): void;
get(paramsOrCallback?: Params$Resource$Ownership$Get|BodyResponseCallback<Schema$RightsOwnership>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$RightsOwnership>, callback?: BodyResponseCallback<Schema$RightsOwnership>): void|GaxiosPromise<Schema$RightsOwnership> {
  let params = (paramsOrCallback || {}) as Params$Resource$Ownership$Get;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Ownership$Get;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assets/{assetId}/ownership').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['assetId'],
    pathParams: ['assetId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$RightsOwnership>(parameters, callback);
  } else {
    return createAPIRequest<Schema$RightsOwnership>(parameters);
  }
}

                  
/**
 * youtubePartner.ownership.patch
 * @desc Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset. YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership. This method supports patch semantics.
 * @alias youtubePartner.ownership.patch
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset being updated.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().RightsOwnership} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
patch(params?: Params$Resource$Ownership$Patch, options?: MethodOptions): GaxiosPromise<Schema$RightsOwnership>;
patch(params: Params$Resource$Ownership$Patch, options: MethodOptions|BodyResponseCallback<Schema$RightsOwnership>, callback: BodyResponseCallback<Schema$RightsOwnership>): void;
patch(params: Params$Resource$Ownership$Patch, callback: BodyResponseCallback<Schema$RightsOwnership>): void;
patch(callback: BodyResponseCallback<Schema$RightsOwnership>): void;
patch(paramsOrCallback?: Params$Resource$Ownership$Patch|BodyResponseCallback<Schema$RightsOwnership>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$RightsOwnership>, callback?: BodyResponseCallback<Schema$RightsOwnership>): void|GaxiosPromise<Schema$RightsOwnership> {
  let params = (paramsOrCallback || {}) as Params$Resource$Ownership$Patch;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Ownership$Patch;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assets/{assetId}/ownership').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PATCH'
    }, options),
    params,
        requiredParams: ['assetId'],
    pathParams: ['assetId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$RightsOwnership>(parameters, callback);
  } else {
    return createAPIRequest<Schema$RightsOwnership>(parameters);
  }
}

                  
/**
 * youtubePartner.ownership.update
 * @desc Provides new ownership information for the specified asset. Note that YouTube may receive ownership information from multiple sources. For example, if an asset has multiple owners, each owner might send ownership data for the asset. YouTube algorithmically combines the ownership data received from all of those sources to generate the asset's canonical ownership data, which should provide the most comprehensive and accurate representation of the asset's ownership.
 * @alias youtubePartner.ownership.update
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset being updated.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().RightsOwnership} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
update(params?: Params$Resource$Ownership$Update, options?: MethodOptions): GaxiosPromise<Schema$RightsOwnership>;
update(params: Params$Resource$Ownership$Update, options: MethodOptions|BodyResponseCallback<Schema$RightsOwnership>, callback: BodyResponseCallback<Schema$RightsOwnership>): void;
update(params: Params$Resource$Ownership$Update, callback: BodyResponseCallback<Schema$RightsOwnership>): void;
update(callback: BodyResponseCallback<Schema$RightsOwnership>): void;
update(paramsOrCallback?: Params$Resource$Ownership$Update|BodyResponseCallback<Schema$RightsOwnership>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$RightsOwnership>, callback?: BodyResponseCallback<Schema$RightsOwnership>): void|GaxiosPromise<Schema$RightsOwnership> {
  let params = (paramsOrCallback || {}) as Params$Resource$Ownership$Update;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Ownership$Update;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/assets/{assetId}/ownership').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PUT'
    }, options),
    params,
        requiredParams: ['assetId'],
    pathParams: ['assetId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$RightsOwnership>(parameters, callback);
  } else {
    return createAPIRequest<Schema$RightsOwnership>(parameters);
  }
}

                  }

                  export interface Params$Resource$Ownership$Get extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The assetId parameter specifies the YouTube asset ID for which you are retrieving ownership data.
               */
              assetId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
              export interface Params$Resource$Ownership$Patch extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The assetId parameter specifies the YouTube asset ID of the asset being updated.
               */
              assetId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$RightsOwnership;
          
                  }
              export interface Params$Resource$Ownership$Update extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The assetId parameter specifies the YouTube asset ID of the asset being updated.
               */
              assetId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$RightsOwnership;
          
                  }
          
    
          export class Resource$Ownershiphistory {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.ownershipHistory.list
 * @desc Retrieves a list of the ownership data for an asset, regardless of which content owner provided the data. The list only includes the most recent ownership data for each content owner. However, if the content owner has submitted ownership data through multiple data sources (API, content feeds, etc.), the list will contain the most recent data for each content owner and data source.
 * @alias youtubePartner.ownershipHistory.list
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.assetId The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving an ownership data history.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Ownershiphistory$List, options?: MethodOptions): GaxiosPromise<Schema$OwnershipHistoryListResponse>;
list(params: Params$Resource$Ownershiphistory$List, options: MethodOptions|BodyResponseCallback<Schema$OwnershipHistoryListResponse>, callback: BodyResponseCallback<Schema$OwnershipHistoryListResponse>): void;
list(params: Params$Resource$Ownershiphistory$List, callback: BodyResponseCallback<Schema$OwnershipHistoryListResponse>): void;
list(callback: BodyResponseCallback<Schema$OwnershipHistoryListResponse>): void;
list(paramsOrCallback?: Params$Resource$Ownershiphistory$List|BodyResponseCallback<Schema$OwnershipHistoryListResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$OwnershipHistoryListResponse>, callback?: BodyResponseCallback<Schema$OwnershipHistoryListResponse>): void|GaxiosPromise<Schema$OwnershipHistoryListResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Ownershiphistory$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Ownershiphistory$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/ownershipHistory').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['assetId'],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$OwnershipHistoryListResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$OwnershipHistoryListResponse>(parameters);
  }
}

                  }

                  export interface Params$Resource$Ownershiphistory$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving an ownership data history.
               */
              assetId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
          
    
          export class Resource$Package {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.package.get
 * @desc Retrieves information for the specified package.
 * @alias youtubePartner.package.get
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string} params.packageId The packageId parameter specifies the Content Delivery package ID of the package being retrieved.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
get(params?: Params$Resource$Package$Get, options?: MethodOptions): GaxiosPromise<Schema$Package>;
get(params: Params$Resource$Package$Get, options: MethodOptions|BodyResponseCallback<Schema$Package>, callback: BodyResponseCallback<Schema$Package>): void;
get(params: Params$Resource$Package$Get, callback: BodyResponseCallback<Schema$Package>): void;
get(callback: BodyResponseCallback<Schema$Package>): void;
get(paramsOrCallback?: Params$Resource$Package$Get|BodyResponseCallback<Schema$Package>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Package>, callback?: BodyResponseCallback<Schema$Package>): void|GaxiosPromise<Schema$Package> {
  let params = (paramsOrCallback || {}) as Params$Resource$Package$Get;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Package$Get;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/package/{packageId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['packageId'],
    pathParams: ['packageId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Package>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Package>(parameters);
  }
}

                  
/**
 * youtubePartner.package.insert
 * @desc Inserts a metadata-only package.
 * @alias youtubePartner.package.insert
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().Package} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
insert(params?: Params$Resource$Package$Insert, options?: MethodOptions): GaxiosPromise<Schema$PackageInsertResponse>;
insert(params: Params$Resource$Package$Insert, options: MethodOptions|BodyResponseCallback<Schema$PackageInsertResponse>, callback: BodyResponseCallback<Schema$PackageInsertResponse>): void;
insert(params: Params$Resource$Package$Insert, callback: BodyResponseCallback<Schema$PackageInsertResponse>): void;
insert(callback: BodyResponseCallback<Schema$PackageInsertResponse>): void;
insert(paramsOrCallback?: Params$Resource$Package$Insert|BodyResponseCallback<Schema$PackageInsertResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$PackageInsertResponse>, callback?: BodyResponseCallback<Schema$PackageInsertResponse>): void|GaxiosPromise<Schema$PackageInsertResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Package$Insert;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Package$Insert;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/package').replace(/([^:]\/)\/+/g, '$1'),
      method: 'POST'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$PackageInsertResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$PackageInsertResponse>(parameters);
  }
}

                  }

                  export interface Params$Resource$Package$Get extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The packageId parameter specifies the Content Delivery package ID of the package being retrieved.
               */
              packageId?: string;
                      
           
                  }
              export interface Params$Resource$Package$Insert extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Package;
          
                  }
          
    
          export class Resource$Policies {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.policies.get
 * @desc Retrieves the specified saved policy.
 * @alias youtubePartner.policies.get
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string} params.policyId The policyId parameter specifies a value that uniquely identifies the policy being retrieved.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
get(params?: Params$Resource$Policies$Get, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
get(params: Params$Resource$Policies$Get, options: MethodOptions|BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
get(params: Params$Resource$Policies$Get, callback: BodyResponseCallback<Schema$Policy>): void;
get(callback: BodyResponseCallback<Schema$Policy>): void;
get(paramsOrCallback?: Params$Resource$Policies$Get|BodyResponseCallback<Schema$Policy>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>, callback?: BodyResponseCallback<Schema$Policy>): void|GaxiosPromise<Schema$Policy> {
  let params = (paramsOrCallback || {}) as Params$Resource$Policies$Get;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Policies$Get;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/policies/{policyId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['policyId'],
    pathParams: ['policyId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Policy>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Policy>(parameters);
  }
}

                  
/**
 * youtubePartner.policies.insert
 * @desc Creates a saved policy.
 * @alias youtubePartner.policies.insert
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().Policy} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
insert(params?: Params$Resource$Policies$Insert, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
insert(params: Params$Resource$Policies$Insert, options: MethodOptions|BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
insert(params: Params$Resource$Policies$Insert, callback: BodyResponseCallback<Schema$Policy>): void;
insert(callback: BodyResponseCallback<Schema$Policy>): void;
insert(paramsOrCallback?: Params$Resource$Policies$Insert|BodyResponseCallback<Schema$Policy>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>, callback?: BodyResponseCallback<Schema$Policy>): void|GaxiosPromise<Schema$Policy> {
  let params = (paramsOrCallback || {}) as Params$Resource$Policies$Insert;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Policies$Insert;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/policies').replace(/([^:]\/)\/+/g, '$1'),
      method: 'POST'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Policy>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Policy>(parameters);
  }
}

                  
/**
 * youtubePartner.policies.list
 * @desc Retrieves a list of the content owner's saved policies.
 * @alias youtubePartner.policies.list
 * @memberOf! ()
 *
 * @param {object=} params Parameters for request
 * @param {string=} params.id The id parameter specifies a comma-separated list of saved policy IDs to retrieve. Only policies belonging to the currently authenticated content owner will be available.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string=} params.sort The sort parameter specifies how the search results should be sorted.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Policies$List, options?: MethodOptions): GaxiosPromise<Schema$PolicyList>;
list(params: Params$Resource$Policies$List, options: MethodOptions|BodyResponseCallback<Schema$PolicyList>, callback: BodyResponseCallback<Schema$PolicyList>): void;
list(params: Params$Resource$Policies$List, callback: BodyResponseCallback<Schema$PolicyList>): void;
list(callback: BodyResponseCallback<Schema$PolicyList>): void;
list(paramsOrCallback?: Params$Resource$Policies$List|BodyResponseCallback<Schema$PolicyList>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$PolicyList>, callback?: BodyResponseCallback<Schema$PolicyList>): void|GaxiosPromise<Schema$PolicyList> {
  let params = (paramsOrCallback || {}) as Params$Resource$Policies$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Policies$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/policies').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$PolicyList>(parameters, callback);
  } else {
    return createAPIRequest<Schema$PolicyList>(parameters);
  }
}

                  
/**
 * youtubePartner.policies.patch
 * @desc Updates the specified saved policy. This method supports patch semantics.
 * @alias youtubePartner.policies.patch
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string} params.policyId The policyId parameter specifies a value that uniquely identifies the policy being updated.
      * @param {().Policy} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
patch(params?: Params$Resource$Policies$Patch, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
patch(params: Params$Resource$Policies$Patch, options: MethodOptions|BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
patch(params: Params$Resource$Policies$Patch, callback: BodyResponseCallback<Schema$Policy>): void;
patch(callback: BodyResponseCallback<Schema$Policy>): void;
patch(paramsOrCallback?: Params$Resource$Policies$Patch|BodyResponseCallback<Schema$Policy>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>, callback?: BodyResponseCallback<Schema$Policy>): void|GaxiosPromise<Schema$Policy> {
  let params = (paramsOrCallback || {}) as Params$Resource$Policies$Patch;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Policies$Patch;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/policies/{policyId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PATCH'
    }, options),
    params,
        requiredParams: ['policyId'],
    pathParams: ['policyId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Policy>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Policy>(parameters);
  }
}

                  
/**
 * youtubePartner.policies.update
 * @desc Updates the specified saved policy.
 * @alias youtubePartner.policies.update
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string} params.policyId The policyId parameter specifies a value that uniquely identifies the policy being updated.
      * @param {().Policy} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
update(params?: Params$Resource$Policies$Update, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
update(params: Params$Resource$Policies$Update, options: MethodOptions|BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
update(params: Params$Resource$Policies$Update, callback: BodyResponseCallback<Schema$Policy>): void;
update(callback: BodyResponseCallback<Schema$Policy>): void;
update(paramsOrCallback?: Params$Resource$Policies$Update|BodyResponseCallback<Schema$Policy>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>, callback?: BodyResponseCallback<Schema$Policy>): void|GaxiosPromise<Schema$Policy> {
  let params = (paramsOrCallback || {}) as Params$Resource$Policies$Update;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Policies$Update;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/policies/{policyId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PUT'
    }, options),
    params,
        requiredParams: ['policyId'],
    pathParams: ['policyId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Policy>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Policy>(parameters);
  }
}

                  }

                  export interface Params$Resource$Policies$Get extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The policyId parameter specifies a value that uniquely identifies the policy being retrieved.
               */
              policyId?: string;
                      
           
                  }
              export interface Params$Resource$Policies$Insert extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Policy;
          
                  }
              export interface Params$Resource$Policies$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The id parameter specifies a comma-separated list of saved policy IDs to retrieve. Only policies belonging to the currently authenticated content owner will be available.
               */
              id?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The sort parameter specifies how the search results should be sorted.
               */
              sort?: string;
                      
           
                  }
              export interface Params$Resource$Policies$Patch extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The policyId parameter specifies a value that uniquely identifies the policy being updated.
               */
              policyId?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Policy;
          
                  }
              export interface Params$Resource$Policies$Update extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The policyId parameter specifies a value that uniquely identifies the policy being updated.
               */
              policyId?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Policy;
          
                  }
          
    
          export class Resource$Referenceconflicts {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.referenceConflicts.get
 * @desc Retrieves information about the specified reference conflict.
 * @alias youtubePartner.referenceConflicts.get
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string} params.referenceConflictId The referenceConflictId parameter specifies the YouTube reference conflict ID of the reference conflict being retrieved.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
get(params?: Params$Resource$Referenceconflicts$Get, options?: MethodOptions): GaxiosPromise<Schema$ReferenceConflict>;
get(params: Params$Resource$Referenceconflicts$Get, options: MethodOptions|BodyResponseCallback<Schema$ReferenceConflict>, callback: BodyResponseCallback<Schema$ReferenceConflict>): void;
get(params: Params$Resource$Referenceconflicts$Get, callback: BodyResponseCallback<Schema$ReferenceConflict>): void;
get(callback: BodyResponseCallback<Schema$ReferenceConflict>): void;
get(paramsOrCallback?: Params$Resource$Referenceconflicts$Get|BodyResponseCallback<Schema$ReferenceConflict>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$ReferenceConflict>, callback?: BodyResponseCallback<Schema$ReferenceConflict>): void|GaxiosPromise<Schema$ReferenceConflict> {
  let params = (paramsOrCallback || {}) as Params$Resource$Referenceconflicts$Get;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Referenceconflicts$Get;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/referenceConflicts/{referenceConflictId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['referenceConflictId'],
    pathParams: ['referenceConflictId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$ReferenceConflict>(parameters, callback);
  } else {
    return createAPIRequest<Schema$ReferenceConflict>(parameters);
  }
}

                  
/**
 * youtubePartner.referenceConflicts.list
 * @desc Retrieves a list of unresolved reference conflicts.
 * @alias youtubePartner.referenceConflicts.list
 * @memberOf! ()
 *
 * @param {object=} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Referenceconflicts$List, options?: MethodOptions): GaxiosPromise<Schema$ReferenceConflictListResponse>;
list(params: Params$Resource$Referenceconflicts$List, options: MethodOptions|BodyResponseCallback<Schema$ReferenceConflictListResponse>, callback: BodyResponseCallback<Schema$ReferenceConflictListResponse>): void;
list(params: Params$Resource$Referenceconflicts$List, callback: BodyResponseCallback<Schema$ReferenceConflictListResponse>): void;
list(callback: BodyResponseCallback<Schema$ReferenceConflictListResponse>): void;
list(paramsOrCallback?: Params$Resource$Referenceconflicts$List|BodyResponseCallback<Schema$ReferenceConflictListResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$ReferenceConflictListResponse>, callback?: BodyResponseCallback<Schema$ReferenceConflictListResponse>): void|GaxiosPromise<Schema$ReferenceConflictListResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Referenceconflicts$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Referenceconflicts$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/referenceConflicts').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$ReferenceConflictListResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$ReferenceConflictListResponse>(parameters);
  }
}

                  }

                  export interface Params$Resource$Referenceconflicts$Get extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The referenceConflictId parameter specifies the YouTube reference conflict ID of the reference conflict being retrieved.
               */
              referenceConflictId?: string;
                      
           
                  }
              export interface Params$Resource$Referenceconflicts$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
               */
              pageToken?: string;
                      
           
                  }
          
    
          export class Resource$References {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.references.get
 * @desc Retrieves information about the specified reference.
 * @alias youtubePartner.references.get
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string} params.referenceId The referenceId parameter specifies the YouTube reference ID of the reference being retrieved.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
get(params?: Params$Resource$References$Get, options?: MethodOptions): GaxiosPromise<Schema$Reference>;
get(params: Params$Resource$References$Get, options: MethodOptions|BodyResponseCallback<Schema$Reference>, callback: BodyResponseCallback<Schema$Reference>): void;
get(params: Params$Resource$References$Get, callback: BodyResponseCallback<Schema$Reference>): void;
get(callback: BodyResponseCallback<Schema$Reference>): void;
get(paramsOrCallback?: Params$Resource$References$Get|BodyResponseCallback<Schema$Reference>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Reference>, callback?: BodyResponseCallback<Schema$Reference>): void|GaxiosPromise<Schema$Reference> {
  let params = (paramsOrCallback || {}) as Params$Resource$References$Get;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$References$Get;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/references/{referenceId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['referenceId'],
    pathParams: ['referenceId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Reference>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Reference>(parameters);
  }
}

                  
/**
 * youtubePartner.references.insert
 * @desc Creates a reference in one of the following ways: - If your request is uploading a reference file, YouTube creates the reference from the provided content. You can provide either a video/audio file or a pre-generated fingerprint. If you are providing a pre-generated fingerprint, set the reference resource's fpDirect property to true in the request body. In this flow, you can use either the multipart or resumable upload flows to provide the reference content. - If you want to create a reference using a claimed video as the reference content, use the claimId parameter to identify the claim.
 * @alias youtubePartner.references.insert
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.claimId The claimId parameter specifies the YouTube claim ID of an existing claim from which a reference should be created. (The claimed video is used as the reference content.)
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param  {object} params.resource Media resource metadata
    * @param {object} params.media Media object
  * @param {string} params.media.mimeType Media mime-type
  * @param {string|object} params.media.body Media body contents
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
insert(params?: Params$Resource$References$Insert, options?: MethodOptions): GaxiosPromise<Schema$Reference>;
insert(params: Params$Resource$References$Insert, options: MethodOptions|BodyResponseCallback<Schema$Reference>, callback: BodyResponseCallback<Schema$Reference>): void;
insert(params: Params$Resource$References$Insert, callback: BodyResponseCallback<Schema$Reference>): void;
insert(callback: BodyResponseCallback<Schema$Reference>): void;
insert(paramsOrCallback?: Params$Resource$References$Insert|BodyResponseCallback<Schema$Reference>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Reference>, callback?: BodyResponseCallback<Schema$Reference>): void|GaxiosPromise<Schema$Reference> {
  let params = (paramsOrCallback || {}) as Params$Resource$References$Insert;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$References$Insert;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/references').replace(/([^:]\/)\/+/g, '$1'),
      method: 'POST'
    }, options),
    params,
    mediaUrl: (rootUrl + '/upload/youtube/partner/v1/references').replace(/([^:]\/)\/+/g, '$1'),    requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Reference>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Reference>(parameters);
  }
}

                  
/**
 * youtubePartner.references.list
 * @desc Retrieves a list of references by ID or the list of references for the specified asset.
 * @alias youtubePartner.references.list
 * @memberOf! ()
 *
 * @param {object=} params Parameters for request
 * @param {string=} params.assetId The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving references.
 * @param {string=} params.id The id parameter specifies a comma-separated list of YouTube reference IDs to retrieve.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$References$List, options?: MethodOptions): GaxiosPromise<Schema$ReferenceListResponse>;
list(params: Params$Resource$References$List, options: MethodOptions|BodyResponseCallback<Schema$ReferenceListResponse>, callback: BodyResponseCallback<Schema$ReferenceListResponse>): void;
list(params: Params$Resource$References$List, callback: BodyResponseCallback<Schema$ReferenceListResponse>): void;
list(callback: BodyResponseCallback<Schema$ReferenceListResponse>): void;
list(paramsOrCallback?: Params$Resource$References$List|BodyResponseCallback<Schema$ReferenceListResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$ReferenceListResponse>, callback?: BodyResponseCallback<Schema$ReferenceListResponse>): void|GaxiosPromise<Schema$ReferenceListResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$References$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$References$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/references').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$ReferenceListResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$ReferenceListResponse>(parameters);
  }
}

                  
/**
 * youtubePartner.references.patch
 * @desc Updates a reference. This method supports patch semantics.
 * @alias youtubePartner.references.patch
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string} params.referenceId The referenceId parameter specifies the YouTube reference ID of the reference being updated.
 * @param {boolean=} params.releaseClaims The releaseClaims parameter indicates that you want to release all match claims associated with this reference. This parameter only works when the claim's status is being updated to 'inactive' - you can then set the parameter's value to true to release all match claims produced by this reference.
      * @param {().Reference} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
patch(params?: Params$Resource$References$Patch, options?: MethodOptions): GaxiosPromise<Schema$Reference>;
patch(params: Params$Resource$References$Patch, options: MethodOptions|BodyResponseCallback<Schema$Reference>, callback: BodyResponseCallback<Schema$Reference>): void;
patch(params: Params$Resource$References$Patch, callback: BodyResponseCallback<Schema$Reference>): void;
patch(callback: BodyResponseCallback<Schema$Reference>): void;
patch(paramsOrCallback?: Params$Resource$References$Patch|BodyResponseCallback<Schema$Reference>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Reference>, callback?: BodyResponseCallback<Schema$Reference>): void|GaxiosPromise<Schema$Reference> {
  let params = (paramsOrCallback || {}) as Params$Resource$References$Patch;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$References$Patch;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/references/{referenceId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PATCH'
    }, options),
    params,
        requiredParams: ['referenceId'],
    pathParams: ['referenceId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Reference>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Reference>(parameters);
  }
}

                  
/**
 * youtubePartner.references.update
 * @desc Updates a reference.
 * @alias youtubePartner.references.update
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string} params.referenceId The referenceId parameter specifies the YouTube reference ID of the reference being updated.
 * @param {boolean=} params.releaseClaims The releaseClaims parameter indicates that you want to release all match claims associated with this reference. This parameter only works when the claim's status is being updated to 'inactive' - you can then set the parameter's value to true to release all match claims produced by this reference.
      * @param {().Reference} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
update(params?: Params$Resource$References$Update, options?: MethodOptions): GaxiosPromise<Schema$Reference>;
update(params: Params$Resource$References$Update, options: MethodOptions|BodyResponseCallback<Schema$Reference>, callback: BodyResponseCallback<Schema$Reference>): void;
update(params: Params$Resource$References$Update, callback: BodyResponseCallback<Schema$Reference>): void;
update(callback: BodyResponseCallback<Schema$Reference>): void;
update(paramsOrCallback?: Params$Resource$References$Update|BodyResponseCallback<Schema$Reference>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Reference>, callback?: BodyResponseCallback<Schema$Reference>): void|GaxiosPromise<Schema$Reference> {
  let params = (paramsOrCallback || {}) as Params$Resource$References$Update;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$References$Update;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/references/{referenceId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PUT'
    }, options),
    params,
        requiredParams: ['referenceId'],
    pathParams: ['referenceId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Reference>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Reference>(parameters);
  }
}

                  }

                  export interface Params$Resource$References$Get extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The referenceId parameter specifies the YouTube reference ID of the reference being retrieved.
               */
              referenceId?: string;
                      
           
                  }
              export interface Params$Resource$References$Insert extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The claimId parameter specifies the YouTube claim ID of an existing claim from which a reference should be created. (The claimed video is used as the reference content.)
               */
              claimId?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Reference;
          
                      /**
              * Media metadata
              */
            media?: {
              /**
                * Media mime-type
                */
              mimeType?: string;

              /**
                * Media body contents
                */
              body?: any;
            };
                  }
              export interface Params$Resource$References$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The assetId parameter specifies the YouTube asset ID of the asset for which you are retrieving references.
               */
              assetId?: string;
                          /**
               * The id parameter specifies a comma-separated list of YouTube reference IDs to retrieve.
               */
              id?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of search results.
               */
              pageToken?: string;
                      
           
                  }
              export interface Params$Resource$References$Patch extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The referenceId parameter specifies the YouTube reference ID of the reference being updated.
               */
              referenceId?: string;
                          /**
               * The releaseClaims parameter indicates that you want to release all match claims associated with this reference. This parameter only works when the claim's status is being updated to 'inactive' - you can then set the parameter's value to true to release all match claims produced by this reference.
               */
              releaseClaims?: boolean;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Reference;
          
                  }
              export interface Params$Resource$References$Update extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The referenceId parameter specifies the YouTube reference ID of the reference being updated.
               */
              referenceId?: string;
                          /**
               * The releaseClaims parameter indicates that you want to release all match claims associated with this reference. This parameter only works when the claim's status is being updated to 'inactive' - you can then set the parameter's value to true to release all match claims produced by this reference.
               */
              releaseClaims?: boolean;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Reference;
          
                  }
          
    
          export class Resource$Spreadsheettemplate {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.spreadsheetTemplate.list
 * @desc Retrieves a list of spreadsheet templates for a content owner.
 * @alias youtubePartner.spreadsheetTemplate.list
 * @memberOf! ()
 *
 * @param {object=} params Parameters for request
 * @param {string=} params.locale The locale parameter identifies the desired language for templates in the API response. The value is a string that contains a BCP-47 language code. The default value is en.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Spreadsheettemplate$List, options?: MethodOptions): GaxiosPromise<Schema$SpreadsheetTemplateListResponse>;
list(params: Params$Resource$Spreadsheettemplate$List, options: MethodOptions|BodyResponseCallback<Schema$SpreadsheetTemplateListResponse>, callback: BodyResponseCallback<Schema$SpreadsheetTemplateListResponse>): void;
list(params: Params$Resource$Spreadsheettemplate$List, callback: BodyResponseCallback<Schema$SpreadsheetTemplateListResponse>): void;
list(callback: BodyResponseCallback<Schema$SpreadsheetTemplateListResponse>): void;
list(paramsOrCallback?: Params$Resource$Spreadsheettemplate$List|BodyResponseCallback<Schema$SpreadsheetTemplateListResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$SpreadsheetTemplateListResponse>, callback?: BodyResponseCallback<Schema$SpreadsheetTemplateListResponse>): void|GaxiosPromise<Schema$SpreadsheetTemplateListResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Spreadsheettemplate$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Spreadsheettemplate$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/spreadsheetTemplate').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$SpreadsheetTemplateListResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$SpreadsheetTemplateListResponse>(parameters);
  }
}

                  }

                  export interface Params$Resource$Spreadsheettemplate$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The locale parameter identifies the desired language for templates in the API response. The value is a string that contains a BCP-47 language code. The default value is en.
               */
              locale?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
          
    
          export class Resource$Uploader {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.uploader.list
 * @desc Retrieves a list of uploaders for a content owner.
 * @alias youtubePartner.uploader.list
 * @memberOf! ()
 *
 * @param {object=} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Uploader$List, options?: MethodOptions): GaxiosPromise<Schema$UploaderListResponse>;
list(params: Params$Resource$Uploader$List, options: MethodOptions|BodyResponseCallback<Schema$UploaderListResponse>, callback: BodyResponseCallback<Schema$UploaderListResponse>): void;
list(params: Params$Resource$Uploader$List, callback: BodyResponseCallback<Schema$UploaderListResponse>): void;
list(callback: BodyResponseCallback<Schema$UploaderListResponse>): void;
list(paramsOrCallback?: Params$Resource$Uploader$List|BodyResponseCallback<Schema$UploaderListResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$UploaderListResponse>, callback?: BodyResponseCallback<Schema$UploaderListResponse>): void|GaxiosPromise<Schema$UploaderListResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Uploader$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Uploader$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/uploader').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$UploaderListResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$UploaderListResponse>(parameters);
  }
}

                  }

                  export interface Params$Resource$Uploader$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
          
    
          export class Resource$Validator {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.validator.validate
 * @desc Validate a metadata file.
 * @alias youtubePartner.validator.validate
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().ValidateRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
validate(params?: Params$Resource$Validator$Validate, options?: MethodOptions): GaxiosPromise<Schema$ValidateResponse>;
validate(params: Params$Resource$Validator$Validate, options: MethodOptions|BodyResponseCallback<Schema$ValidateResponse>, callback: BodyResponseCallback<Schema$ValidateResponse>): void;
validate(params: Params$Resource$Validator$Validate, callback: BodyResponseCallback<Schema$ValidateResponse>): void;
validate(callback: BodyResponseCallback<Schema$ValidateResponse>): void;
validate(paramsOrCallback?: Params$Resource$Validator$Validate|BodyResponseCallback<Schema$ValidateResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$ValidateResponse>, callback?: BodyResponseCallback<Schema$ValidateResponse>): void|GaxiosPromise<Schema$ValidateResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Validator$Validate;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Validator$Validate;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/validator').replace(/([^:]\/)\/+/g, '$1'),
      method: 'POST'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$ValidateResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$ValidateResponse>(parameters);
  }
}

                  
/**
 * youtubePartner.validator.validateAsync
 * @desc Validate a metadata file asynchronously.
 * @alias youtubePartner.validator.validateAsync
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().ValidateAsyncRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
validateAsync(params?: Params$Resource$Validator$Validateasync, options?: MethodOptions): GaxiosPromise<Schema$ValidateAsyncResponse>;
validateAsync(params: Params$Resource$Validator$Validateasync, options: MethodOptions|BodyResponseCallback<Schema$ValidateAsyncResponse>, callback: BodyResponseCallback<Schema$ValidateAsyncResponse>): void;
validateAsync(params: Params$Resource$Validator$Validateasync, callback: BodyResponseCallback<Schema$ValidateAsyncResponse>): void;
validateAsync(callback: BodyResponseCallback<Schema$ValidateAsyncResponse>): void;
validateAsync(paramsOrCallback?: Params$Resource$Validator$Validateasync|BodyResponseCallback<Schema$ValidateAsyncResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$ValidateAsyncResponse>, callback?: BodyResponseCallback<Schema$ValidateAsyncResponse>): void|GaxiosPromise<Schema$ValidateAsyncResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Validator$Validateasync;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Validator$Validateasync;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/validatorAsync').replace(/([^:]\/)\/+/g, '$1'),
      method: 'POST'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$ValidateAsyncResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$ValidateAsyncResponse>(parameters);
  }
}

                  
/**
 * youtubePartner.validator.validateAsyncStatus
 * @desc Get the asynchronous validation status.
 * @alias youtubePartner.validator.validateAsyncStatus
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().ValidateStatusRequest} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
validateAsyncStatus(params?: Params$Resource$Validator$Validateasyncstatus, options?: MethodOptions): GaxiosPromise<Schema$ValidateStatusResponse>;
validateAsyncStatus(params: Params$Resource$Validator$Validateasyncstatus, options: MethodOptions|BodyResponseCallback<Schema$ValidateStatusResponse>, callback: BodyResponseCallback<Schema$ValidateStatusResponse>): void;
validateAsyncStatus(params: Params$Resource$Validator$Validateasyncstatus, callback: BodyResponseCallback<Schema$ValidateStatusResponse>): void;
validateAsyncStatus(callback: BodyResponseCallback<Schema$ValidateStatusResponse>): void;
validateAsyncStatus(paramsOrCallback?: Params$Resource$Validator$Validateasyncstatus|BodyResponseCallback<Schema$ValidateStatusResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$ValidateStatusResponse>, callback?: BodyResponseCallback<Schema$ValidateStatusResponse>): void|GaxiosPromise<Schema$ValidateStatusResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Validator$Validateasyncstatus;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Validator$Validateasyncstatus;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/validatorAsyncStatus').replace(/([^:]\/)\/+/g, '$1'),
      method: 'POST'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$ValidateStatusResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$ValidateStatusResponse>(parameters);
  }
}

                  }

                  export interface Params$Resource$Validator$Validate extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$ValidateRequest;
          
                  }
              export interface Params$Resource$Validator$Validateasync extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$ValidateAsyncRequest;
          
                  }
              export interface Params$Resource$Validator$Validateasyncstatus extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$ValidateStatusRequest;
          
                  }
          
    
          export class Resource$Videoadvertisingoptions {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.videoAdvertisingOptions.get
 * @desc Retrieves advertising settings for the specified video.
 * @alias youtubePartner.videoAdvertisingOptions.get
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string} params.videoId The videoId parameter specifies the YouTube video ID of the video for which you are retrieving advertising settings.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
get(params?: Params$Resource$Videoadvertisingoptions$Get, options?: MethodOptions): GaxiosPromise<Schema$VideoAdvertisingOption>;
get(params: Params$Resource$Videoadvertisingoptions$Get, options: MethodOptions|BodyResponseCallback<Schema$VideoAdvertisingOption>, callback: BodyResponseCallback<Schema$VideoAdvertisingOption>): void;
get(params: Params$Resource$Videoadvertisingoptions$Get, callback: BodyResponseCallback<Schema$VideoAdvertisingOption>): void;
get(callback: BodyResponseCallback<Schema$VideoAdvertisingOption>): void;
get(paramsOrCallback?: Params$Resource$Videoadvertisingoptions$Get|BodyResponseCallback<Schema$VideoAdvertisingOption>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$VideoAdvertisingOption>, callback?: BodyResponseCallback<Schema$VideoAdvertisingOption>): void|GaxiosPromise<Schema$VideoAdvertisingOption> {
  let params = (paramsOrCallback || {}) as Params$Resource$Videoadvertisingoptions$Get;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Videoadvertisingoptions$Get;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/videoAdvertisingOptions/{videoId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['videoId'],
    pathParams: ['videoId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$VideoAdvertisingOption>(parameters, callback);
  } else {
    return createAPIRequest<Schema$VideoAdvertisingOption>(parameters);
  }
}

                  
/**
 * youtubePartner.videoAdvertisingOptions.getEnabledAds
 * @desc Retrieves details about the types of allowed ads for a specified partner- or user-uploaded video.
 * @alias youtubePartner.videoAdvertisingOptions.getEnabledAds
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string} params.videoId The videoId parameter specifies the YouTube video ID of the video for which you are retrieving advertising options.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
getEnabledAds(params?: Params$Resource$Videoadvertisingoptions$Getenabledads, options?: MethodOptions): GaxiosPromise<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>;
getEnabledAds(params: Params$Resource$Videoadvertisingoptions$Getenabledads, options: MethodOptions|BodyResponseCallback<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>, callback: BodyResponseCallback<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>): void;
getEnabledAds(params: Params$Resource$Videoadvertisingoptions$Getenabledads, callback: BodyResponseCallback<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>): void;
getEnabledAds(callback: BodyResponseCallback<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>): void;
getEnabledAds(paramsOrCallback?: Params$Resource$Videoadvertisingoptions$Getenabledads|BodyResponseCallback<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>, callback?: BodyResponseCallback<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>): void|GaxiosPromise<Schema$VideoAdvertisingOptionGetEnabledAdsResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Videoadvertisingoptions$Getenabledads;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Videoadvertisingoptions$Getenabledads;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/videoAdvertisingOptions/{videoId}/getEnabledAds').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['videoId'],
    pathParams: ['videoId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$VideoAdvertisingOptionGetEnabledAdsResponse>(parameters);
  }
}

                  
/**
 * youtubePartner.videoAdvertisingOptions.patch
 * @desc Updates the advertising settings for the specified video. This method supports patch semantics.
 * @alias youtubePartner.videoAdvertisingOptions.patch
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string} params.videoId The videoId parameter specifies the YouTube video ID of the video for which you are updating advertising settings.
      * @param {().VideoAdvertisingOption} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
patch(params?: Params$Resource$Videoadvertisingoptions$Patch, options?: MethodOptions): GaxiosPromise<Schema$VideoAdvertisingOption>;
patch(params: Params$Resource$Videoadvertisingoptions$Patch, options: MethodOptions|BodyResponseCallback<Schema$VideoAdvertisingOption>, callback: BodyResponseCallback<Schema$VideoAdvertisingOption>): void;
patch(params: Params$Resource$Videoadvertisingoptions$Patch, callback: BodyResponseCallback<Schema$VideoAdvertisingOption>): void;
patch(callback: BodyResponseCallback<Schema$VideoAdvertisingOption>): void;
patch(paramsOrCallback?: Params$Resource$Videoadvertisingoptions$Patch|BodyResponseCallback<Schema$VideoAdvertisingOption>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$VideoAdvertisingOption>, callback?: BodyResponseCallback<Schema$VideoAdvertisingOption>): void|GaxiosPromise<Schema$VideoAdvertisingOption> {
  let params = (paramsOrCallback || {}) as Params$Resource$Videoadvertisingoptions$Patch;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Videoadvertisingoptions$Patch;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/videoAdvertisingOptions/{videoId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PATCH'
    }, options),
    params,
        requiredParams: ['videoId'],
    pathParams: ['videoId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$VideoAdvertisingOption>(parameters, callback);
  } else {
    return createAPIRequest<Schema$VideoAdvertisingOption>(parameters);
  }
}

                  
/**
 * youtubePartner.videoAdvertisingOptions.update
 * @desc Updates the advertising settings for the specified video.
 * @alias youtubePartner.videoAdvertisingOptions.update
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string} params.videoId The videoId parameter specifies the YouTube video ID of the video for which you are updating advertising settings.
      * @param {().VideoAdvertisingOption} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
update(params?: Params$Resource$Videoadvertisingoptions$Update, options?: MethodOptions): GaxiosPromise<Schema$VideoAdvertisingOption>;
update(params: Params$Resource$Videoadvertisingoptions$Update, options: MethodOptions|BodyResponseCallback<Schema$VideoAdvertisingOption>, callback: BodyResponseCallback<Schema$VideoAdvertisingOption>): void;
update(params: Params$Resource$Videoadvertisingoptions$Update, callback: BodyResponseCallback<Schema$VideoAdvertisingOption>): void;
update(callback: BodyResponseCallback<Schema$VideoAdvertisingOption>): void;
update(paramsOrCallback?: Params$Resource$Videoadvertisingoptions$Update|BodyResponseCallback<Schema$VideoAdvertisingOption>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$VideoAdvertisingOption>, callback?: BodyResponseCallback<Schema$VideoAdvertisingOption>): void|GaxiosPromise<Schema$VideoAdvertisingOption> {
  let params = (paramsOrCallback || {}) as Params$Resource$Videoadvertisingoptions$Update;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Videoadvertisingoptions$Update;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/videoAdvertisingOptions/{videoId}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'PUT'
    }, options),
    params,
        requiredParams: ['videoId'],
    pathParams: ['videoId'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$VideoAdvertisingOption>(parameters, callback);
  } else {
    return createAPIRequest<Schema$VideoAdvertisingOption>(parameters);
  }
}

                  }

                  export interface Params$Resource$Videoadvertisingoptions$Get extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The videoId parameter specifies the YouTube video ID of the video for which you are retrieving advertising settings.
               */
              videoId?: string;
                      
           
                  }
              export interface Params$Resource$Videoadvertisingoptions$Getenabledads extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The videoId parameter specifies the YouTube video ID of the video for which you are retrieving advertising options.
               */
              videoId?: string;
                      
           
                  }
              export interface Params$Resource$Videoadvertisingoptions$Patch extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The videoId parameter specifies the YouTube video ID of the video for which you are updating advertising settings.
               */
              videoId?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$VideoAdvertisingOption;
          
                  }
              export interface Params$Resource$Videoadvertisingoptions$Update extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The videoId parameter specifies the YouTube video ID of the video for which you are updating advertising settings.
               */
              videoId?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$VideoAdvertisingOption;
          
                  }
          
    
          export class Resource$Whitelists {
      context: APIRequestContext;
            constructor(context: APIRequestContext) {
        this.context = context;
              }

                        
/**
 * youtubePartner.whitelists.delete
 * @desc Removes a whitelisted channel for a content owner.
 * @alias youtubePartner.whitelists.delete
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.id The id parameter specifies the YouTube channel ID of the channel being removed from whitelist.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
delete(params?: Params$Resource$Whitelists$Delete, options?: MethodOptions): GaxiosPromise<void>;
delete(params: Params$Resource$Whitelists$Delete, options: MethodOptions|BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
delete(params: Params$Resource$Whitelists$Delete, callback: BodyResponseCallback<void>): void;
delete(callback: BodyResponseCallback<void>): void;
delete(paramsOrCallback?: Params$Resource$Whitelists$Delete|BodyResponseCallback<void>, optionsOrCallback?: MethodOptions|BodyResponseCallback<void>, callback?: BodyResponseCallback<void>): void|GaxiosPromise<void> {
  let params = (paramsOrCallback || {}) as Params$Resource$Whitelists$Delete;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Whitelists$Delete;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/whitelists/{id}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'DELETE'
    }, options),
    params,
        requiredParams: ['id'],
    pathParams: ['id'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<void>(parameters, callback);
  } else {
    return createAPIRequest<void>(parameters);
  }
}

                  
/**
 * youtubePartner.whitelists.get
 * @desc Retrieves a specific whitelisted channel by ID.
 * @alias youtubePartner.whitelists.get
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string} params.id The id parameter specifies the YouTube channel ID of the whitelisted channel being retrieved.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
get(params?: Params$Resource$Whitelists$Get, options?: MethodOptions): GaxiosPromise<Schema$Whitelist>;
get(params: Params$Resource$Whitelists$Get, options: MethodOptions|BodyResponseCallback<Schema$Whitelist>, callback: BodyResponseCallback<Schema$Whitelist>): void;
get(params: Params$Resource$Whitelists$Get, callback: BodyResponseCallback<Schema$Whitelist>): void;
get(callback: BodyResponseCallback<Schema$Whitelist>): void;
get(paramsOrCallback?: Params$Resource$Whitelists$Get|BodyResponseCallback<Schema$Whitelist>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Whitelist>, callback?: BodyResponseCallback<Schema$Whitelist>): void|GaxiosPromise<Schema$Whitelist> {
  let params = (paramsOrCallback || {}) as Params$Resource$Whitelists$Get;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Whitelists$Get;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/whitelists/{id}').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: ['id'],
    pathParams: ['id'],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Whitelist>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Whitelist>(parameters);
  }
}

                  
/**
 * youtubePartner.whitelists.insert
 * @desc Whitelist a YouTube channel for your content owner. Whitelisted channels are channels that are not owned or managed by you, but you would like to whitelist so that no claims from your assets are placed on videos uploaded to these channels.
 * @alias youtubePartner.whitelists.insert
 * @memberOf! ()
 *
 * @param {object} params Parameters for request
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
      * @param {().Whitelist} params.resource Request body data
   * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
insert(params?: Params$Resource$Whitelists$Insert, options?: MethodOptions): GaxiosPromise<Schema$Whitelist>;
insert(params: Params$Resource$Whitelists$Insert, options: MethodOptions|BodyResponseCallback<Schema$Whitelist>, callback: BodyResponseCallback<Schema$Whitelist>): void;
insert(params: Params$Resource$Whitelists$Insert, callback: BodyResponseCallback<Schema$Whitelist>): void;
insert(callback: BodyResponseCallback<Schema$Whitelist>): void;
insert(paramsOrCallback?: Params$Resource$Whitelists$Insert|BodyResponseCallback<Schema$Whitelist>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Whitelist>, callback?: BodyResponseCallback<Schema$Whitelist>): void|GaxiosPromise<Schema$Whitelist> {
  let params = (paramsOrCallback || {}) as Params$Resource$Whitelists$Insert;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Whitelists$Insert;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/whitelists').replace(/([^:]\/)\/+/g, '$1'),
      method: 'POST'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$Whitelist>(parameters, callback);
  } else {
    return createAPIRequest<Schema$Whitelist>(parameters);
  }
}

                  
/**
 * youtubePartner.whitelists.list
 * @desc Retrieves a list of whitelisted channels for a content owner.
 * @alias youtubePartner.whitelists.list
 * @memberOf! ()
 *
 * @param {object=} params Parameters for request
 * @param {string=} params.id The id parameter specifies a comma-separated list of YouTube channel IDs that identify the whitelisted channels you want to retrieve.
 * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
 * @param {string=} params.pageToken The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of results.
 * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
 * @param {callback} callback The callback that handles the response.
 * @return {object} Request object
 */
list(params?: Params$Resource$Whitelists$List, options?: MethodOptions): GaxiosPromise<Schema$WhitelistListResponse>;
list(params: Params$Resource$Whitelists$List, options: MethodOptions|BodyResponseCallback<Schema$WhitelistListResponse>, callback: BodyResponseCallback<Schema$WhitelistListResponse>): void;
list(params: Params$Resource$Whitelists$List, callback: BodyResponseCallback<Schema$WhitelistListResponse>): void;
list(callback: BodyResponseCallback<Schema$WhitelistListResponse>): void;
list(paramsOrCallback?: Params$Resource$Whitelists$List|BodyResponseCallback<Schema$WhitelistListResponse>, optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$WhitelistListResponse>, callback?: BodyResponseCallback<Schema$WhitelistListResponse>): void|GaxiosPromise<Schema$WhitelistListResponse> {
  let params = (paramsOrCallback || {}) as Params$Resource$Whitelists$List;
  let options = (optionsOrCallback || {}) as MethodOptions;

  if (typeof paramsOrCallback === 'function') {
    callback = paramsOrCallback;
    params = {} as Params$Resource$Whitelists$List;
    options = {};
  }

  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
    options = {};
  }

  const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
  const parameters = {
    options: Object.assign({
      url: (rootUrl + '/youtube/partner/v1/whitelists').replace(/([^:]\/)\/+/g, '$1'),
      method: 'GET'
    }, options),
    params,
        requiredParams: [],
    pathParams: [],
    context: this.context,
  };
    if (callback) {
    createAPIRequest<Schema$WhitelistListResponse>(parameters, callback);
  } else {
    return createAPIRequest<Schema$WhitelistListResponse>(parameters);
  }
}

                  }

                  export interface Params$Resource$Whitelists$Delete extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The id parameter specifies the YouTube channel ID of the channel being removed from whitelist.
               */
              id?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
              export interface Params$Resource$Whitelists$Get extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The id parameter specifies the YouTube channel ID of the whitelisted channel being retrieved.
               */
              id?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
           
                  }
              export interface Params$Resource$Whitelists$Insert extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                      
                       /**
              * Request body metadata
              */
            requestBody?: Schema$Whitelist;
          
                  }
              export interface Params$Resource$Whitelists$List extends StandardParameters {
          /**
           * Auth client or API Key for the request
           */
          auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

                                    /**
               * The id parameter specifies a comma-separated list of YouTube channel IDs that identify the whitelisted channels you want to retrieve.
               */
              id?: string;
                          /**
               * The onBehalfOfContentOwner parameter identifies the content owner that the user is acting on behalf of. This parameter supports users whose accounts are associated with multiple content owners.
               */
              onBehalfOfContentOwner?: string;
                          /**
               * The pageToken parameter specifies a token that identifies a particular page of results to return. Set this parameter to the value of the nextPageToken value from the previous API response to retrieve the next page of results.
               */
              pageToken?: string;
                      
           
                  }
          
    
  

}
