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
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace youtube_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
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
   * YouTube Data API
   *
   * Supports core YouTube features, such as uploading videos, creating and managing playlists, searching for content, and much more.
   *
   * @example
   * const {google} = require('googleapis');
   * const youtube = google.youtube('v3');
   *
   * @namespace youtube
   * @type {Function}
   * @version v3
   * @variation v3
   * @param {object=} options Options for Youtube
   */
  export class Youtube {
    context: APIRequestContext;
    activities: Resource$Activities;
    captions: Resource$Captions;
    channelBanners: Resource$Channelbanners;
    channels: Resource$Channels;
    channelSections: Resource$Channelsections;
    comments: Resource$Comments;
    commentThreads: Resource$Commentthreads;
    guideCategories: Resource$Guidecategories;
    i18nLanguages: Resource$I18nlanguages;
    i18nRegions: Resource$I18nregions;
    liveBroadcasts: Resource$Livebroadcasts;
    liveChatBans: Resource$Livechatbans;
    liveChatMessages: Resource$Livechatmessages;
    liveChatModerators: Resource$Livechatmoderators;
    liveStreams: Resource$Livestreams;
    members: Resource$Members;
    membershipsLevels: Resource$Membershipslevels;
    playlistItems: Resource$Playlistitems;
    playlists: Resource$Playlists;
    search: Resource$Search;
    sponsors: Resource$Sponsors;
    subscriptions: Resource$Subscriptions;
    superChatEvents: Resource$Superchatevents;
    thumbnails: Resource$Thumbnails;
    videoAbuseReportReasons: Resource$Videoabusereportreasons;
    videoCategories: Resource$Videocategories;
    videos: Resource$Videos;
    watermarks: Resource$Watermarks;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.activities = new Resource$Activities(this.context);
      this.captions = new Resource$Captions(this.context);
      this.channelBanners = new Resource$Channelbanners(this.context);
      this.channels = new Resource$Channels(this.context);
      this.channelSections = new Resource$Channelsections(this.context);
      this.comments = new Resource$Comments(this.context);
      this.commentThreads = new Resource$Commentthreads(this.context);
      this.guideCategories = new Resource$Guidecategories(this.context);
      this.i18nLanguages = new Resource$I18nlanguages(this.context);
      this.i18nRegions = new Resource$I18nregions(this.context);
      this.liveBroadcasts = new Resource$Livebroadcasts(this.context);
      this.liveChatBans = new Resource$Livechatbans(this.context);
      this.liveChatMessages = new Resource$Livechatmessages(this.context);
      this.liveChatModerators = new Resource$Livechatmoderators(this.context);
      this.liveStreams = new Resource$Livestreams(this.context);
      this.members = new Resource$Members(this.context);
      this.membershipsLevels = new Resource$Membershipslevels(this.context);
      this.playlistItems = new Resource$Playlistitems(this.context);
      this.playlists = new Resource$Playlists(this.context);
      this.search = new Resource$Search(this.context);
      this.sponsors = new Resource$Sponsors(this.context);
      this.subscriptions = new Resource$Subscriptions(this.context);
      this.superChatEvents = new Resource$Superchatevents(this.context);
      this.thumbnails = new Resource$Thumbnails(this.context);
      this.videoAbuseReportReasons = new Resource$Videoabusereportreasons(
        this.context
      );
      this.videoCategories = new Resource$Videocategories(this.context);
      this.videos = new Resource$Videos(this.context);
      this.watermarks = new Resource$Watermarks(this.context);
    }
  }

  /**
   * Rights management policy for YouTube resources.
   */
  export interface Schema$AccessPolicy {
    /**
     * The value of allowed indicates whether the access to the policy is allowed or denied by default.
     */
    allowed?: boolean | null;
    /**
     * A list of region codes that identify countries where the default policy do not apply.
     */
    exception?: string[] | null;
  }
  /**
   * An activity resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded.
   */
  export interface Schema$Activity {
    /**
     * The contentDetails object contains information about the content associated with the activity. For example, if the snippet.type value is videoRated, then the contentDetails object&#39;s content identifies the rated video.
     */
    contentDetails?: Schema$ActivityContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the activity.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#activity&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the activity, including the activity&#39;s type and group ID.
     */
    snippet?: Schema$ActivitySnippet;
  }
  /**
   * Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.
   */
  export interface Schema$ActivityContentDetails {
    /**
     * The bulletin object contains details about a channel bulletin post. This object is only present if the snippet.type is bulletin.
     */
    bulletin?: Schema$ActivityContentDetailsBulletin;
    /**
     * The channelItem object contains details about a resource which was added to a channel. This property is only present if the snippet.type is channelItem.
     */
    channelItem?: Schema$ActivityContentDetailsChannelItem;
    /**
     * The comment object contains information about a resource that received a comment. This property is only present if the snippet.type is comment.
     */
    comment?: Schema$ActivityContentDetailsComment;
    /**
     * The favorite object contains information about a video that was marked as a favorite video. This property is only present if the snippet.type is favorite.
     */
    favorite?: Schema$ActivityContentDetailsFavorite;
    /**
     * The like object contains information about a resource that received a positive (like) rating. This property is only present if the snippet.type is like.
     */
    like?: Schema$ActivityContentDetailsLike;
    /**
     * The playlistItem object contains information about a new playlist item. This property is only present if the snippet.type is playlistItem.
     */
    playlistItem?: Schema$ActivityContentDetailsPlaylistItem;
    /**
     * The promotedItem object contains details about a resource which is being promoted. This property is only present if the snippet.type is promotedItem.
     */
    promotedItem?: Schema$ActivityContentDetailsPromotedItem;
    /**
     * The recommendation object contains information about a recommended resource. This property is only present if the snippet.type is recommendation.
     */
    recommendation?: Schema$ActivityContentDetailsRecommendation;
    /**
     * The social object contains details about a social network post. This property is only present if the snippet.type is social.
     */
    social?: Schema$ActivityContentDetailsSocial;
    /**
     * The subscription object contains information about a channel that a user subscribed to. This property is only present if the snippet.type is subscription.
     */
    subscription?: Schema$ActivityContentDetailsSubscription;
    /**
     * The upload object contains information about the uploaded video. This property is only present if the snippet.type is upload.
     */
    upload?: Schema$ActivityContentDetailsUpload;
  }
  /**
   * Details about a channel bulletin post.
   */
  export interface Schema$ActivityContentDetailsBulletin {
    /**
     * The resourceId object contains information that identifies the resource associated with a bulletin post.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Details about a resource which was added to a channel.
   */
  export interface Schema$ActivityContentDetailsChannelItem {
    /**
     * The resourceId object contains information that identifies the resource that was added to the channel.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Information about a resource that received a comment.
   */
  export interface Schema$ActivityContentDetailsComment {
    /**
     * The resourceId object contains information that identifies the resource associated with the comment.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Information about a video that was marked as a favorite video.
   */
  export interface Schema$ActivityContentDetailsFavorite {
    /**
     * The resourceId object contains information that identifies the resource that was marked as a favorite.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Information about a resource that received a positive (like) rating.
   */
  export interface Schema$ActivityContentDetailsLike {
    /**
     * The resourceId object contains information that identifies the rated resource.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Information about a new playlist item.
   */
  export interface Schema$ActivityContentDetailsPlaylistItem {
    /**
     * The value that YouTube uses to uniquely identify the playlist.
     */
    playlistId?: string | null;
    /**
     * ID of the item within the playlist.
     */
    playlistItemId?: string | null;
    /**
     * The resourceId object contains information about the resource that was added to the playlist.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Details about a resource which is being promoted.
   */
  export interface Schema$ActivityContentDetailsPromotedItem {
    /**
     * The URL the client should fetch to request a promoted item.
     */
    adTag?: string | null;
    /**
     * The URL the client should ping to indicate that the user clicked through on this promoted item.
     */
    clickTrackingUrl?: string | null;
    /**
     * The URL the client should ping to indicate that the user was shown this promoted item.
     */
    creativeViewUrl?: string | null;
    /**
     * The type of call-to-action, a message to the user indicating action that can be taken.
     */
    ctaType?: string | null;
    /**
     * The custom call-to-action button text. If specified, it will override the default button text for the cta_type.
     */
    customCtaButtonText?: string | null;
    /**
     * The text description to accompany the promoted item.
     */
    descriptionText?: string | null;
    /**
     * The URL the client should direct the user to, if the user chooses to visit the advertiser&#39;s website.
     */
    destinationUrl?: string | null;
    /**
     * The list of forecasting URLs. The client should ping all of these URLs when a promoted item is not available, to indicate that a promoted item could have been shown.
     */
    forecastingUrl?: string[] | null;
    /**
     * The list of impression URLs. The client should ping all of these URLs to indicate that the user was shown this promoted item.
     */
    impressionUrl?: string[] | null;
    /**
     * The ID that YouTube uses to uniquely identify the promoted video.
     */
    videoId?: string | null;
  }
  /**
   * Information that identifies the recommended resource.
   */
  export interface Schema$ActivityContentDetailsRecommendation {
    /**
     * The reason that the resource is recommended to the user.
     */
    reason?: string | null;
    /**
     * The resourceId object contains information that identifies the recommended resource.
     */
    resourceId?: Schema$ResourceId;
    /**
     * The seedResourceId object contains information about the resource that caused the recommendation.
     */
    seedResourceId?: Schema$ResourceId;
  }
  /**
   * Details about a social network post.
   */
  export interface Schema$ActivityContentDetailsSocial {
    /**
     * The author of the social network post.
     */
    author?: string | null;
    /**
     * An image of the post&#39;s author.
     */
    imageUrl?: string | null;
    /**
     * The URL of the social network post.
     */
    referenceUrl?: string | null;
    /**
     * The resourceId object encapsulates information that identifies the resource associated with a social network post.
     */
    resourceId?: Schema$ResourceId;
    /**
     * The name of the social network.
     */
    type?: string | null;
  }
  /**
   * Information about a channel that a user subscribed to.
   */
  export interface Schema$ActivityContentDetailsSubscription {
    /**
     * The resourceId object contains information that identifies the resource that the user subscribed to.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Information about the uploaded video.
   */
  export interface Schema$ActivityContentDetailsUpload {
    /**
     * The ID that YouTube uses to uniquely identify the uploaded video.
     */
    videoId?: string | null;
  }
  export interface Schema$ActivityListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of activities, or events, that match the request criteria.
     */
    items?: Schema$Activity[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#activityListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about an activity, including title, description, thumbnails, activity type and group.
   */
  export interface Schema$ActivitySnippet {
    /**
     * The ID that YouTube uses to uniquely identify the channel associated with the activity.
     */
    channelId?: string | null;
    /**
     * Channel title for the channel responsible for this activity
     */
    channelTitle?: string | null;
    /**
     * The description of the resource primarily associated with the activity.
     */
    description?: string | null;
    /**
     * The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user&#39;s activity feed. In your user interface, you can avoid repetition by grouping events with the same groupId value.
     */
    groupId?: string | null;
    /**
     * The date and time that the video was uploaded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAt?: string | null;
    /**
     * A map of thumbnail images associated with the resource that is primarily associated with the activity. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The title of the resource primarily associated with the activity.
     */
    title?: string | null;
    /**
     * The type of activity that the resource describes.
     */
    type?: string | null;
  }
  /**
   * A caption resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video.
   */
  export interface Schema$Caption {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the caption track.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#caption&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the caption.
     */
    snippet?: Schema$CaptionSnippet;
  }
  export interface Schema$CaptionListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of captions that match the request criteria.
     */
    items?: Schema$Caption[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#captionListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about a caption track, such as its language and name.
   */
  export interface Schema$CaptionSnippet {
    /**
     * The type of audio track associated with the caption track.
     */
    audioTrackType?: string | null;
    /**
     * The reason that YouTube failed to process the caption track. This property is only present if the state property&#39;s value is failed.
     */
    failureReason?: string | null;
    /**
     * Indicates whether YouTube synchronized the caption track to the audio track in the video. The value will be true if a sync was explicitly requested when the caption track was uploaded. For example, when calling the captions.insert or captions.update methods, you can set the sync parameter to true to instruct YouTube to sync the uploaded track to the video. If the value is false, YouTube uses the time codes in the uploaded caption track to determine when to display captions.
     */
    isAutoSynced?: boolean | null;
    /**
     * Indicates whether the track contains closed captions for the deaf and hard of hearing. The default value is false.
     */
    isCC?: boolean | null;
    /**
     * Indicates whether the caption track is a draft. If the value is true, then the track is not publicly visible. The default value is false.
     */
    isDraft?: boolean | null;
    /**
     * Indicates whether caption track is formatted for &quot;easy reader,&quot; meaning it is at a third-grade level for language learners. The default value is false.
     */
    isEasyReader?: boolean | null;
    /**
     * Indicates whether the caption track uses large text for the vision-impaired. The default value is false.
     */
    isLarge?: boolean | null;
    /**
     * The language of the caption track. The property value is a BCP-47 language tag.
     */
    language?: string | null;
    /**
     * The date and time when the caption track was last updated. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    lastUpdated?: string | null;
    /**
     * The name of the caption track. The name is intended to be visible to the user as an option during playback.
     */
    name?: string | null;
    /**
     * The caption track&#39;s status.
     */
    status?: string | null;
    /**
     * The caption track&#39;s type.
     */
    trackKind?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the video associated with the caption track.
     */
    videoId?: string | null;
  }
  /**
   * Brief description of the live stream cdn settings.
   */
  export interface Schema$CdnSettings {
    /**
     * The format of the video stream that you are sending to Youtube.
     */
    format?: string | null;
    /**
     * The frame rate of the inbound video data.
     */
    frameRate?: string | null;
    /**
     * The ingestionInfo object contains information that YouTube provides that you need to transmit your RTMP or HTTP stream to YouTube.
     */
    ingestionInfo?: Schema$IngestionInfo;
    /**
     * The method or protocol used to transmit the video stream.
     */
    ingestionType?: string | null;
    /**
     * The resolution of the inbound video data.
     */
    resolution?: string | null;
  }
  /**
   * A channel resource contains information about a YouTube channel.
   */
  export interface Schema$Channel {
    /**
     * The auditionDetails object encapsulates channel data that is relevant for YouTube Partners during the audition process.
     */
    auditDetails?: Schema$ChannelAuditDetails;
    /**
     * The brandingSettings object encapsulates information about the branding of the channel.
     */
    brandingSettings?: Schema$ChannelBrandingSettings;
    /**
     * The contentDetails object encapsulates information about the channel&#39;s content.
     */
    contentDetails?: Schema$ChannelContentDetails;
    /**
     * The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
     */
    contentOwnerDetails?: Schema$ChannelContentOwnerDetails;
    /**
     * The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
     */
    conversionPings?: Schema$ChannelConversionPings;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the channel.
     */
    id?: string | null;
    /**
     * The invideoPromotion object encapsulates information about promotion campaign associated with the channel.
     */
    invideoPromotion?: Schema$InvideoPromotion;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#channel&quot;.
     */
    kind?: string | null;
    /**
     * Localizations for different languages
     */
    localizations?: {[key: string]: Schema$ChannelLocalization} | null;
    /**
     * The snippet object contains basic details about the channel, such as its title, description, and thumbnail images.
     */
    snippet?: Schema$ChannelSnippet;
    /**
     * The statistics object encapsulates statistics for the channel.
     */
    statistics?: Schema$ChannelStatistics;
    /**
     * The status object encapsulates information about the privacy status of the channel.
     */
    status?: Schema$ChannelStatus;
    /**
     * The topicDetails object encapsulates information about Freebase topics associated with the channel.
     */
    topicDetails?: Schema$ChannelTopicDetails;
  }
  /**
   * The auditDetails object encapsulates channel data that is relevant for YouTube Partners during the audit process.
   */
  export interface Schema$ChannelAuditDetails {
    /**
     * Whether or not the channel respects the community guidelines.
     */
    communityGuidelinesGoodStanding?: boolean | null;
    /**
     * Whether or not the channel has any unresolved claims.
     */
    contentIdClaimsGoodStanding?: boolean | null;
    /**
     * Whether or not the channel has any copyright strikes.
     */
    copyrightStrikesGoodStanding?: boolean | null;
  }
  /**
   * A channel banner returned as the response to a channel_banner.insert call.
   */
  export interface Schema$ChannelBannerResource {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#channelBannerResource&quot;.
     */
    kind?: string | null;
    /**
     * The URL of this banner image.
     */
    url?: string | null;
  }
  /**
   * Branding properties of a YouTube channel.
   */
  export interface Schema$ChannelBrandingSettings {
    /**
     * Branding properties for the channel view.
     */
    channel?: Schema$ChannelSettings;
    /**
     * Additional experimental branding properties.
     */
    hints?: Schema$PropertyValue[];
    /**
     * Branding properties for branding images.
     */
    image?: Schema$ImageSettings;
    /**
     * Branding properties for the watch page.
     */
    watch?: Schema$WatchSettings;
  }
  /**
   * Details about the content of a channel.
   */
  export interface Schema$ChannelContentDetails {
    relatedPlaylists?: {
      favorites?: string;
      likes?: string;
      uploads?: string;
      watchHistory?: string;
      watchLater?: string;
    } | null;
  }
  /**
   * The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
   */
  export interface Schema$ChannelContentOwnerDetails {
    /**
     * The ID of the content owner linked to the channel.
     */
    contentOwner?: string | null;
    /**
     * The date and time of when the channel was linked to the content owner. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    timeLinked?: string | null;
  }
  /**
   * Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
   */
  export interface Schema$ChannelConversionPing {
    /**
     * Defines the context of the ping.
     */
    context?: string | null;
    /**
     * The url (without the schema) that the player shall send the ping to. It&#39;s at caller&#39;s descretion to decide which schema to use (http vs https) Example of a returned url: //googleads.g.doubleclick.net/pagead/ viewthroughconversion/962985656/?data=path%3DtHe_path%3Btype%3D cview%3Butuid%3DGISQtTNGYqaYl4sKxoVvKA&amp;labe=default The caller must append biscotti authentication (ms param in case of mobile, for example) to this ping.
     */
    conversionUrl?: string | null;
  }
  /**
   * The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
   */
  export interface Schema$ChannelConversionPings {
    /**
     * Pings that the app shall fire (authenticated by biscotti cookie). Each ping has a context, in which the app must fire the ping, and a url identifying the ping.
     */
    pings?: Schema$ChannelConversionPing[];
  }
  export interface Schema$ChannelListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of channels that match the request criteria.
     */
    items?: Schema$Channel[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#channelListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Channel localization setting
   */
  export interface Schema$ChannelLocalization {
    /**
     * The localized strings for channel&#39;s description.
     */
    description?: string | null;
    /**
     * The localized strings for channel&#39;s title.
     */
    title?: string | null;
  }
  export interface Schema$ChannelProfileDetails {
    /**
     * The YouTube channel ID.
     */
    channelId?: string | null;
    /**
     * The channel&#39;s URL.
     */
    channelUrl?: string | null;
    /**
     * The channel&#39;s display name.
     */
    displayName?: string | null;
    /**
     * The channels&#39;s avatar URL.
     */
    profileImageUrl?: string | null;
  }
  export interface Schema$ChannelSection {
    /**
     * The contentDetails object contains details about the channel section content, such as a list of playlists or channels featured in the section.
     */
    contentDetails?: Schema$ChannelSectionContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the channel section.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#channelSection&quot;.
     */
    kind?: string | null;
    /**
     * Localizations for different languages
     */
    localizations?: {[key: string]: Schema$ChannelSectionLocalization} | null;
    /**
     * The snippet object contains basic details about the channel section, such as its type, style and title.
     */
    snippet?: Schema$ChannelSectionSnippet;
    /**
     * The targeting object contains basic targeting settings about the channel section.
     */
    targeting?: Schema$ChannelSectionTargeting;
  }
  /**
   * Details about a channelsection, including playlists and channels.
   */
  export interface Schema$ChannelSectionContentDetails {
    /**
     * The channel ids for type multiple_channels.
     */
    channels?: string[] | null;
    /**
     * The playlist ids for type single_playlist and multiple_playlists. For singlePlaylist, only one playlistId is allowed.
     */
    playlists?: string[] | null;
  }
  export interface Schema$ChannelSectionListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of ChannelSections that match the request criteria.
     */
    items?: Schema$ChannelSection[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#channelSectionListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * ChannelSection localization setting
   */
  export interface Schema$ChannelSectionLocalization {
    /**
     * The localized strings for channel section&#39;s title.
     */
    title?: string | null;
  }
  /**
   * Basic details about a channel section, including title, style and position.
   */
  export interface Schema$ChannelSectionSnippet {
    /**
     * The ID that YouTube uses to uniquely identify the channel that published the channel section.
     */
    channelId?: string | null;
    /**
     * The language of the channel section&#39;s default title and description.
     */
    defaultLanguage?: string | null;
    /**
     * Localized title, read-only.
     */
    localized?: Schema$ChannelSectionLocalization;
    /**
     * The position of the channel section in the channel.
     */
    position?: number | null;
    /**
     * The style of the channel section.
     */
    style?: string | null;
    /**
     * The channel section&#39;s title for multiple_playlists and multiple_channels.
     */
    title?: string | null;
    /**
     * The type of the channel section.
     */
    type?: string | null;
  }
  /**
   * ChannelSection targeting setting.
   */
  export interface Schema$ChannelSectionTargeting {
    /**
     * The country the channel section is targeting.
     */
    countries?: string[] | null;
    /**
     * The language the channel section is targeting.
     */
    languages?: string[] | null;
    /**
     * The region the channel section is targeting.
     */
    regions?: string[] | null;
  }
  /**
   * Branding properties for the channel view.
   */
  export interface Schema$ChannelSettings {
    /**
     * The country of the channel.
     */
    country?: string | null;
    defaultLanguage?: string | null;
    /**
     * Which content tab users should see when viewing the channel.
     */
    defaultTab?: string | null;
    /**
     * Specifies the channel description.
     */
    description?: string | null;
    /**
     * Title for the featured channels tab.
     */
    featuredChannelsTitle?: string | null;
    /**
     * The list of featured channels.
     */
    featuredChannelsUrls?: string[] | null;
    /**
     * Lists keywords associated with the channel, comma-separated.
     */
    keywords?: string | null;
    /**
     * Whether user-submitted comments left on the channel page need to be approved by the channel owner to be publicly visible.
     */
    moderateComments?: boolean | null;
    /**
     * A prominent color that can be rendered on this channel page.
     */
    profileColor?: string | null;
    /**
     * Whether the tab to browse the videos should be displayed.
     */
    showBrowseView?: boolean | null;
    /**
     * Whether related channels should be proposed.
     */
    showRelatedChannels?: boolean | null;
    /**
     * Specifies the channel title.
     */
    title?: string | null;
    /**
     * The ID for a Google Analytics account to track and measure traffic to the channels.
     */
    trackingAnalyticsAccountId?: string | null;
    /**
     * The trailer of the channel, for users that are not subscribers.
     */
    unsubscribedTrailer?: string | null;
  }
  /**
   * Basic details about a channel, including title, description and thumbnails.
   */
  export interface Schema$ChannelSnippet {
    /**
     * The country of the channel.
     */
    country?: string | null;
    /**
     * The custom url of the channel.
     */
    customUrl?: string | null;
    /**
     * The language of the channel&#39;s default title and description.
     */
    defaultLanguage?: string | null;
    /**
     * The description of the channel.
     */
    description?: string | null;
    /**
     * Localized title and description, read-only.
     */
    localized?: Schema$ChannelLocalization;
    /**
     * The date and time that the channel was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAt?: string | null;
    /**
     * A map of thumbnail images associated with the channel. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.  When displaying thumbnails in your application, make sure that your code uses the image URLs exactly as they are returned in API responses. For example, your application should not use the http domain instead of the https domain in a URL returned in an API response.  Beginning in July 2018, channel thumbnail URLs will only be available in the https domain, which is how the URLs appear in API responses. After that time, you might see broken images in your application if it tries to load YouTube images from the http domain.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The channel&#39;s title.
     */
    title?: string | null;
  }
  /**
   * Statistics about a channel: number of subscribers, number of videos in the channel, etc.
   */
  export interface Schema$ChannelStatistics {
    /**
     * The number of comments for the channel.
     */
    commentCount?: string | null;
    /**
     * Whether or not the number of subscribers is shown for this user.
     */
    hiddenSubscriberCount?: boolean | null;
    /**
     * The number of subscribers that the channel has.
     */
    subscriberCount?: string | null;
    /**
     * The number of videos uploaded to the channel.
     */
    videoCount?: string | null;
    /**
     * The number of times the channel has been viewed.
     */
    viewCount?: string | null;
  }
  /**
   * JSON template for the status part of a channel.
   */
  export interface Schema$ChannelStatus {
    /**
     * If true, then the user is linked to either a YouTube username or G+ account. Otherwise, the user doesn&#39;t have a public YouTube identity.
     */
    isLinked?: boolean | null;
    /**
     * The long uploads status of this channel. See
     */
    longUploadsStatus?: string | null;
    /**
     * Privacy status of the channel.
     */
    privacyStatus?: string | null;
  }
  /**
   * Freebase topic information related to the channel.
   */
  export interface Schema$ChannelTopicDetails {
    /**
     * A list of Wikipedia URLs that describe the channel&#39;s content.
     */
    topicCategories?: string[] | null;
    /**
     * A list of Freebase topic IDs associated with the channel. You can retrieve information about each topic using the Freebase Topic API.
     */
    topicIds?: string[] | null;
  }
  /**
   * A comment represents a single YouTube comment.
   */
  export interface Schema$Comment {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the comment.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#comment&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the comment.
     */
    snippet?: Schema$CommentSnippet;
  }
  export interface Schema$CommentListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of comments that match the request criteria.
     */
    items?: Schema$Comment[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#commentListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about a comment, such as its author and text.
   */
  export interface Schema$CommentSnippet {
    /**
     * The id of the author&#39;s YouTube channel, if any.
     */
    authorChannelId?: any | null;
    /**
     * Link to the author&#39;s YouTube channel, if any.
     */
    authorChannelUrl?: string | null;
    /**
     * The name of the user who posted the comment.
     */
    authorDisplayName?: string | null;
    /**
     * The URL for the avatar of the user who posted the comment.
     */
    authorProfileImageUrl?: string | null;
    /**
     * Whether the current viewer can rate this comment.
     */
    canRate?: boolean | null;
    /**
     * The id of the corresponding YouTube channel. In case of a channel comment this is the channel the comment refers to. In case of a video comment it&#39;s the video&#39;s channel.
     */
    channelId?: string | null;
    /**
     * The total number of likes this comment has received.
     */
    likeCount?: number | null;
    /**
     * The comment&#39;s moderation status. Will not be set if the comments were requested through the id filter.
     */
    moderationStatus?: string | null;
    /**
     * The unique id of the parent comment, only set for replies.
     */
    parentId?: string | null;
    /**
     * The date and time when the comment was orignally published. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAt?: string | null;
    /**
     * The comment&#39;s text. The format is either plain text or HTML dependent on what has been requested. Even the plain text representation may differ from the text originally posted in that it may replace video links with video titles etc.
     */
    textDisplay?: string | null;
    /**
     * The comment&#39;s original raw text as initially posted or last updated. The original text will only be returned if it is accessible to the viewer, which is only guaranteed if the viewer is the comment&#39;s author.
     */
    textOriginal?: string | null;
    /**
     * The date and time when was last updated . The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    updatedAt?: string | null;
    /**
     * The ID of the video the comment refers to, if any.
     */
    videoId?: string | null;
    /**
     * The rating the viewer has given to this comment. For the time being this will never return RATE_TYPE_DISLIKE and instead return RATE_TYPE_NONE. This may change in the future.
     */
    viewerRating?: string | null;
  }
  /**
   * A comment thread represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.
   */
  export interface Schema$CommentThread {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the comment thread.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#commentThread&quot;.
     */
    kind?: string | null;
    /**
     * The replies object contains a limited number of replies (if any) to the top level comment found in the snippet.
     */
    replies?: Schema$CommentThreadReplies;
    /**
     * The snippet object contains basic details about the comment thread and also the top level comment.
     */
    snippet?: Schema$CommentThreadSnippet;
  }
  export interface Schema$CommentThreadListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of comment threads that match the request criteria.
     */
    items?: Schema$CommentThread[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#commentThreadListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Comments written in (direct or indirect) reply to the top level comment.
   */
  export interface Schema$CommentThreadReplies {
    /**
     * A limited number of replies. Unless the number of replies returned equals total_reply_count in the snippet the returned replies are only a subset of the total number of replies.
     */
    comments?: Schema$Comment[];
  }
  /**
   * Basic details about a comment thread.
   */
  export interface Schema$CommentThreadSnippet {
    /**
     * Whether the current viewer of the thread can reply to it. This is viewer specific - other viewers may see a different value for this field.
     */
    canReply?: boolean | null;
    /**
     * The YouTube channel the comments in the thread refer to or the channel with the video the comments refer to. If video_id isn&#39;t set the comments refer to the channel itself.
     */
    channelId?: string | null;
    /**
     * Whether the thread (and therefore all its comments) is visible to all YouTube users.
     */
    isPublic?: boolean | null;
    /**
     * The top level comment of this thread.
     */
    topLevelComment?: Schema$Comment;
    /**
     * The total number of replies (not including the top level comment).
     */
    totalReplyCount?: number | null;
    /**
     * The ID of the video the comments refer to, if any. No video_id implies a channel discussion comment.
     */
    videoId?: string | null;
  }
  /**
   * Ratings schemes. The country-specific ratings are mostly for movies and shows. NEXT_ID: 72
   */
  export interface Schema$ContentRating {
    /**
     * The video&#39;s Australian Classification Board (ACB) or Australian Communications and Media Authority (ACMA) rating. ACMA ratings are used to classify children&#39;s television programming.
     */
    acbRating?: string | null;
    /**
     * The video&#39;s rating from Italy&#39;s Autorità per le Garanzie nelle Comunicazioni (AGCOM).
     */
    agcomRating?: string | null;
    /**
     * The video&#39;s Anatel (Asociación Nacional de Televisión) rating for Chilean television.
     */
    anatelRating?: string | null;
    /**
     * The video&#39;s British Board of Film Classification (BBFC) rating.
     */
    bbfcRating?: string | null;
    /**
     * The video&#39;s rating from Thailand&#39;s Board of Film and Video Censors.
     */
    bfvcRating?: string | null;
    /**
     * The video&#39;s rating from the Austrian Board of Media Classification (Bundesministerium für Unterricht, Kunst und Kultur).
     */
    bmukkRating?: string | null;
    /**
     * The video&#39;s rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian French-language broadcasts. For more information, see the Canadian Broadcast Standards Council website.
     */
    catvfrRating?: string | null;
    /**
     * Rating system for Canadian TV - Canadian TV Classification System The video&#39;s rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian English-language broadcasts. For more information, see the Canadian Broadcast Standards Council website.
     */
    catvRating?: string | null;
    /**
     * The video&#39;s Central Board of Film Certification (CBFC - India) rating.
     */
    cbfcRating?: string | null;
    /**
     * The video&#39;s Consejo de Calificación Cinematográfica (Chile) rating.
     */
    cccRating?: string | null;
    /**
     * The video&#39;s rating from Portugal&#39;s Comissão de Classificação de Espect´culos.
     */
    cceRating?: string | null;
    /**
     * The video&#39;s rating in Switzerland.
     */
    chfilmRating?: string | null;
    /**
     * The video&#39;s Canadian Home Video Rating System (CHVRS) rating.
     */
    chvrsRating?: string | null;
    /**
     * The video&#39;s rating from the Commission de Contrôle des Films (Belgium).
     */
    cicfRating?: string | null;
    /**
     * The video&#39;s rating from Romania&#39;s CONSILIUL NATIONAL AL AUDIOVIZUALULUI (CNA).
     */
    cnaRating?: string | null;
    /**
     * Rating system in France - Commission de classification cinematographique
     */
    cncRating?: string | null;
    /**
     * The video&#39;s rating from France&#39;s Conseil supérieur de l?audiovisuel, which rates broadcast content.
     */
    csaRating?: string | null;
    /**
     * The video&#39;s rating from Luxembourg&#39;s Commission de surveillance de la classification des films (CSCF).
     */
    cscfRating?: string | null;
    /**
     * The video&#39;s rating in the Czech Republic.
     */
    czfilmRating?: string | null;
    /**
     * The video&#39;s Departamento de Justiça, Classificação, Qualificação e Títulos (DJCQT - Brazil) rating.
     */
    djctqRating?: string | null;
    /**
     * Reasons that explain why the video received its DJCQT (Brazil) rating.
     */
    djctqRatingReasons?: string[] | null;
    /**
     * Rating system in Turkey - Evaluation and Classification Board of the Ministry of Culture and Tourism
     */
    ecbmctRating?: string | null;
    /**
     * The video&#39;s rating in Estonia.
     */
    eefilmRating?: string | null;
    /**
     * The video&#39;s rating in Egypt.
     */
    egfilmRating?: string | null;
    /**
     * The video&#39;s Eirin (映倫) rating. Eirin is the Japanese rating system.
     */
    eirinRating?: string | null;
    /**
     * The video&#39;s rating from Malaysia&#39;s Film Censorship Board.
     */
    fcbmRating?: string | null;
    /**
     * The video&#39;s rating from Hong Kong&#39;s Office for Film, Newspaper and Article Administration.
     */
    fcoRating?: string | null;
    /**
     * This property has been deprecated. Use the contentDetails.contentRating.cncRating instead.
     */
    fmocRating?: string | null;
    /**
     * The video&#39;s rating from South Africa&#39;s Film and Publication Board.
     */
    fpbRating?: string | null;
    /**
     * Reasons that explain why the video received its FPB (South Africa) rating.
     */
    fpbRatingReasons?: string[] | null;
    /**
     * The video&#39;s Freiwillige Selbstkontrolle der Filmwirtschaft (FSK - Germany) rating.
     */
    fskRating?: string | null;
    /**
     * The video&#39;s rating in Greece.
     */
    grfilmRating?: string | null;
    /**
     * The video&#39;s Instituto de la Cinematografía y de las Artes Audiovisuales (ICAA - Spain) rating.
     */
    icaaRating?: string | null;
    /**
     * The video&#39;s Irish Film Classification Office (IFCO - Ireland) rating. See the IFCO website for more information.
     */
    ifcoRating?: string | null;
    /**
     * The video&#39;s rating in Israel.
     */
    ilfilmRating?: string | null;
    /**
     * The video&#39;s INCAA (Instituto Nacional de Cine y Artes Audiovisuales - Argentina) rating.
     */
    incaaRating?: string | null;
    /**
     * The video&#39;s rating from the Kenya Film Classification Board.
     */
    kfcbRating?: string | null;
    /**
     * voor de Classificatie van Audiovisuele Media (Netherlands).
     */
    kijkwijzerRating?: string | null;
    /**
     * The video&#39;s Korea Media Rating Board (영상물등급위원회) rating. The KMRB rates videos in South Korea.
     */
    kmrbRating?: string | null;
    /**
     * The video&#39;s rating from Indonesia&#39;s Lembaga Sensor Film.
     */
    lsfRating?: string | null;
    /**
     * The video&#39;s rating from Malta&#39;s Film Age-Classification Board.
     */
    mccaaRating?: string | null;
    /**
     * The video&#39;s rating from the Danish Film Institute&#39;s (Det Danske Filminstitut) Media Council for Children and Young People.
     */
    mccypRating?: string | null;
    /**
     * The video&#39;s rating system for Vietnam - MCST
     */
    mcstRating?: string | null;
    /**
     * The video&#39;s rating from Singapore&#39;s Media Development Authority (MDA) and, specifically, it&#39;s Board of Film Censors (BFC).
     */
    mdaRating?: string | null;
    /**
     * The video&#39;s rating from Medietilsynet, the Norwegian Media Authority.
     */
    medietilsynetRating?: string | null;
    /**
     * The video&#39;s rating from Finland&#39;s Kansallinen Audiovisuaalinen Instituutti (National Audiovisual Institute).
     */
    mekuRating?: string | null;
    /**
     * The rating system for MENA countries, a clone of MPAA. It is needed to
     */
    menaMpaaRating?: string | null;
    /**
     * The video&#39;s rating from the Ministero dei Beni e delle Attività Culturali e del Turismo (Italy).
     */
    mibacRating?: string | null;
    /**
     * The video&#39;s Ministerio de Cultura (Colombia) rating.
     */
    mocRating?: string | null;
    /**
     * The video&#39;s rating from Taiwan&#39;s Ministry of Culture (文化部).
     */
    moctwRating?: string | null;
    /**
     * The video&#39;s Motion Picture Association of America (MPAA) rating.
     */
    mpaaRating?: string | null;
    /**
     * The rating system for trailer, DVD, and Ad in the US. See http://movielabs.com/md/ratings/v2.3/html/US_MPAAT_Ratings.html.
     */
    mpaatRating?: string | null;
    /**
     * The video&#39;s rating from the Movie and Television Review and Classification Board (Philippines).
     */
    mtrcbRating?: string | null;
    /**
     * The video&#39;s rating in Poland.
     */
    nbcplRating?: string | null;
    /**
     * The video&#39;s rating from the Maldives National Bureau of Classification.
     */
    nbcRating?: string | null;
    /**
     * The video&#39;s rating from the Bulgarian National Film Center.
     */
    nfrcRating?: string | null;
    /**
     * The video&#39;s rating from Nigeria&#39;s National Film and Video Censors Board.
     */
    nfvcbRating?: string | null;
    /**
     * The video&#39;s rating from the Nacionãlais Kino centrs (National Film Centre of Latvia).
     */
    nkclvRating?: string | null;
    nmcRating?: string | null;
    /**
     * The video&#39;s Office of Film and Literature Classification (OFLC - New Zealand) rating.
     */
    oflcRating?: string | null;
    /**
     * The video&#39;s rating in Peru.
     */
    pefilmRating?: string | null;
    /**
     * The video&#39;s rating from the Hungarian Nemzeti Filmiroda, the Rating Committee of the National Office of Film.
     */
    rcnofRating?: string | null;
    /**
     * The video&#39;s rating in Venezuela.
     */
    resorteviolenciaRating?: string | null;
    /**
     * The video&#39;s General Directorate of Radio, Television and Cinematography (Mexico) rating.
     */
    rtcRating?: string | null;
    /**
     * The video&#39;s rating from Ireland&#39;s Raidió Teilifís Éireann.
     */
    rteRating?: string | null;
    /**
     * The video&#39;s National Film Registry of the Russian Federation (MKRF - Russia) rating.
     */
    russiaRating?: string | null;
    /**
     * The video&#39;s rating in Slovakia.
     */
    skfilmRating?: string | null;
    /**
     * The video&#39;s rating in Iceland.
     */
    smaisRating?: string | null;
    /**
     * The video&#39;s rating from Statens medieråd (Sweden&#39;s National Media Council).
     */
    smsaRating?: string | null;
    /**
     * The video&#39;s TV Parental Guidelines (TVPG) rating.
     */
    tvpgRating?: string | null;
    /**
     * A rating that YouTube uses to identify age-restricted content.
     */
    ytRating?: string | null;
  }
  /**
   * Geographical coordinates of a point, in WGS84.
   */
  export interface Schema$GeoPoint {
    /**
     * Altitude above the reference ellipsoid, in meters.
     */
    altitude?: number | null;
    /**
     * Latitude in degrees.
     */
    latitude?: number | null;
    /**
     * Longitude in degrees.
     */
    longitude?: number | null;
  }
  /**
   * A guideCategory resource identifies a category that YouTube algorithmically assigns based on a channel&#39;s content or other indicators, such as the channel&#39;s popularity. The list is similar to video categories, with the difference being that a video&#39;s uploader can assign a video category but only YouTube can assign a channel category.
   */
  export interface Schema$GuideCategory {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the guide category.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#guideCategory&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the category, such as its title.
     */
    snippet?: Schema$GuideCategorySnippet;
  }
  export interface Schema$GuideCategoryListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of categories that can be associated with YouTube channels. In this map, the category ID is the map key, and its value is the corresponding guideCategory resource.
     */
    items?: Schema$GuideCategory[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#guideCategoryListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about a guide category.
   */
  export interface Schema$GuideCategorySnippet {
    channelId?: string | null;
    /**
     * Description of the guide category.
     */
    title?: string | null;
  }
  /**
   * An i18nLanguage resource identifies a UI language currently supported by YouTube.
   */
  export interface Schema$I18nLanguage {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the i18n language.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#i18nLanguage&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the i18n language, such as language code and human-readable name.
     */
    snippet?: Schema$I18nLanguageSnippet;
  }
  export interface Schema$I18nLanguageListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of supported i18n languages. In this map, the i18n language ID is the map key, and its value is the corresponding i18nLanguage resource.
     */
    items?: Schema$I18nLanguage[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#i18nLanguageListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about an i18n language, such as language code and human-readable name.
   */
  export interface Schema$I18nLanguageSnippet {
    /**
     * A short BCP-47 code that uniquely identifies a language.
     */
    hl?: string | null;
    /**
     * The human-readable name of the language in the language itself.
     */
    name?: string | null;
  }
  /**
   * A i18nRegion resource identifies a region where YouTube is available.
   */
  export interface Schema$I18nRegion {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the i18n region.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#i18nRegion&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the i18n region, such as region code and human-readable name.
     */
    snippet?: Schema$I18nRegionSnippet;
  }
  export interface Schema$I18nRegionListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of regions where YouTube is available. In this map, the i18n region ID is the map key, and its value is the corresponding i18nRegion resource.
     */
    items?: Schema$I18nRegion[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#i18nRegionListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about an i18n region, such as region code and human-readable name.
   */
  export interface Schema$I18nRegionSnippet {
    /**
     * The region code as a 2-letter ISO country code.
     */
    gl?: string | null;
    /**
     * The human-readable name of the region.
     */
    name?: string | null;
  }
  /**
   * Branding properties for images associated with the channel.
   */
  export interface Schema$ImageSettings {
    /**
     * The URL for the background image shown on the video watch page. The image should be 1200px by 615px, with a maximum file size of 128k.
     */
    backgroundImageUrl?: Schema$LocalizedProperty;
    /**
     * This is used only in update requests; if it&#39;s set, we use this URL to generate all of the above banner URLs.
     */
    bannerExternalUrl?: string | null;
    /**
     * Banner image. Desktop size (1060x175).
     */
    bannerImageUrl?: string | null;
    /**
     * Banner image. Mobile size high resolution (1440x395).
     */
    bannerMobileExtraHdImageUrl?: string | null;
    /**
     * Banner image. Mobile size high resolution (1280x360).
     */
    bannerMobileHdImageUrl?: string | null;
    /**
     * Banner image. Mobile size (640x175).
     */
    bannerMobileImageUrl?: string | null;
    /**
     * Banner image. Mobile size low resolution (320x88).
     */
    bannerMobileLowImageUrl?: string | null;
    /**
     * Banner image. Mobile size medium/high resolution (960x263).
     */
    bannerMobileMediumHdImageUrl?: string | null;
    /**
     * Banner image. Tablet size extra high resolution (2560x424).
     */
    bannerTabletExtraHdImageUrl?: string | null;
    /**
     * Banner image. Tablet size high resolution (2276x377).
     */
    bannerTabletHdImageUrl?: string | null;
    /**
     * Banner image. Tablet size (1707x283).
     */
    bannerTabletImageUrl?: string | null;
    /**
     * Banner image. Tablet size low resolution (1138x188).
     */
    bannerTabletLowImageUrl?: string | null;
    /**
     * Banner image. TV size high resolution (1920x1080).
     */
    bannerTvHighImageUrl?: string | null;
    /**
     * Banner image. TV size extra high resolution (2120x1192).
     */
    bannerTvImageUrl?: string | null;
    /**
     * Banner image. TV size low resolution (854x480).
     */
    bannerTvLowImageUrl?: string | null;
    /**
     * Banner image. TV size medium resolution (1280x720).
     */
    bannerTvMediumImageUrl?: string | null;
    /**
     * The image map script for the large banner image.
     */
    largeBrandedBannerImageImapScript?: Schema$LocalizedProperty;
    /**
     * The URL for the 854px by 70px image that appears below the video player in the expanded video view of the video watch page.
     */
    largeBrandedBannerImageUrl?: Schema$LocalizedProperty;
    /**
     * The image map script for the small banner image.
     */
    smallBrandedBannerImageImapScript?: Schema$LocalizedProperty;
    /**
     * The URL for the 640px by 70px banner image that appears below the video player in the default view of the video watch page.
     */
    smallBrandedBannerImageUrl?: Schema$LocalizedProperty;
    /**
     * The URL for a 1px by 1px tracking pixel that can be used to collect statistics for views of the channel or video pages.
     */
    trackingImageUrl?: string | null;
    /**
     * The URL for the image that appears above the top-left corner of the video player. This is a 25-pixel-high image with a flexible width that cannot exceed 170 pixels.
     */
    watchIconImageUrl?: string | null;
  }
  /**
   * Describes information necessary for ingesting an RTMP or an HTTP stream.
   */
  export interface Schema$IngestionInfo {
    /**
     * The backup ingestion URL that you should use to stream video to YouTube. You have the option of simultaneously streaming the content that you are sending to the ingestionAddress to this URL.
     */
    backupIngestionAddress?: string | null;
    /**
     * The primary ingestion URL that you should use to stream video to YouTube. You must stream video to this URL.  Depending on which application or tool you use to encode your video stream, you may need to enter the stream URL and stream name separately or you may need to concatenate them in the following format:  STREAM_URL/STREAM_NAME
     */
    ingestionAddress?: string | null;
    /**
     * The HTTP or RTMP stream name that YouTube assigns to the video stream.
     */
    streamName?: string | null;
  }
  export interface Schema$InvideoBranding {
    imageBytes?: string | null;
    imageUrl?: string | null;
    position?: Schema$InvideoPosition;
    targetChannelId?: string | null;
    timing?: Schema$InvideoTiming;
  }
  /**
   * Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one.
   */
  export interface Schema$InvideoPosition {
    /**
     * Describes in which corner of the video the visual widget will appear.
     */
    cornerPosition?: string | null;
    /**
     * Defines the position type.
     */
    type?: string | null;
  }
  /**
   * Describes an invideo promotion campaign consisting of multiple promoted items. A campaign belongs to a single channel_id.
   */
  export interface Schema$InvideoPromotion {
    /**
     * The default temporal position within the video where the promoted item will be displayed. Can be overriden by more specific timing in the item.
     */
    defaultTiming?: Schema$InvideoTiming;
    /**
     * List of promoted items in decreasing priority.
     */
    items?: Schema$PromotedItem[];
    /**
     * The spatial position within the video where the promoted item will be displayed.
     */
    position?: Schema$InvideoPosition;
    /**
     * Indicates whether the channel&#39;s promotional campaign uses &quot;smart timing.&quot; This feature attempts to show promotions at a point in the video when they are more likely to be clicked and less likely to disrupt the viewing experience. This feature also picks up a single promotion to show on each video.
     */
    useSmartTiming?: boolean | null;
  }
  /**
   * Describes a temporal position of a visual widget inside a video.
   */
  export interface Schema$InvideoTiming {
    /**
     * Defines the duration in milliseconds for which the promotion should be displayed. If missing, the client should use the default.
     */
    durationMs?: string | null;
    /**
     * Defines the time at which the promotion will appear. Depending on the value of type the value of the offsetMs field will represent a time offset from the start or from the end of the video, expressed in milliseconds.
     */
    offsetMs?: string | null;
    /**
     * Describes a timing type. If the value is offsetFromStart, then the offsetMs field represents an offset from the start of the video. If the value is offsetFromEnd, then the offsetMs field represents an offset from the end of the video.
     */
    type?: string | null;
  }
  export interface Schema$LanguageTag {
    value?: string | null;
  }
  export interface Schema$LevelDetails {
    displayName?: string | null;
  }
  /**
   * A liveBroadcast resource represents an event that will be streamed, via live video, on YouTube.
   */
  export interface Schema$LiveBroadcast {
    /**
     * The contentDetails object contains information about the event&#39;s video content, such as whether the content can be shown in an embedded video player or if it will be archived and therefore available for viewing after the event has concluded.
     */
    contentDetails?: Schema$LiveBroadcastContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube assigns to uniquely identify the broadcast.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#liveBroadcast&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the event, including its title, description, start time, and end time.
     */
    snippet?: Schema$LiveBroadcastSnippet;
    /**
     * The statistics object contains info about the event&#39;s current stats. These include concurrent viewers and total chat count. Statistics can change (in either direction) during the lifetime of an event. Statistics are only returned while the event is live.
     */
    statistics?: Schema$LiveBroadcastStatistics;
    /**
     * The status object contains information about the event&#39;s status.
     */
    status?: Schema$LiveBroadcastStatus;
  }
  /**
   * Detailed settings of a broadcast.
   */
  export interface Schema$LiveBroadcastContentDetails {
    /**
     * This value uniquely identifies the live stream bound to the broadcast.
     */
    boundStreamId?: string | null;
    /**
     * The date and time that the live stream referenced by boundStreamId was last updated.
     */
    boundStreamLastUpdateTimeMs?: string | null;
    closedCaptionsType?: string | null;
    /**
     * This setting indicates whether auto start is enabled for this broadcast.
     */
    enableAutoStart?: boolean | null;
    /**
     * This setting indicates whether HTTP POST closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through the liveStreams API. This is mutually exclusive with using the closed_captions_type property, and is equivalent to setting closed_captions_type to CLOSED_CAPTIONS_HTTP_POST.
     */
    enableClosedCaptions?: boolean | null;
    /**
     * This setting indicates whether YouTube should enable content encryption for the broadcast.
     */
    enableContentEncryption?: boolean | null;
    /**
     * This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback experience by pausing, rewinding, or fast forwarding content. The default value for this property is true.    Important: You must set the value to true and also set the enableArchive property&#39;s value to true if you want to make playback available immediately after the broadcast ends.
     */
    enableDvr?: boolean | null;
    /**
     * This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the enableArchive property), this setting will also apply to the archived video.
     */
    enableEmbed?: boolean | null;
    /**
     * Indicates whether this broadcast has low latency enabled.
     */
    enableLowLatency?: boolean | null;
    /**
     * If both this and enable_low_latency are set, they must match. LATENCY_NORMAL should match enable_low_latency=false LATENCY_LOW should match enable_low_latency=true LATENCY_ULTRA_LOW should have enable_low_latency omitted.
     */
    latencyPreference?: string | null;
    mesh?: string | null;
    /**
     * The monitorStream object contains information about the monitor stream, which the broadcaster can use to review the event content before the broadcast stream is shown publicly.
     */
    monitorStream?: Schema$MonitorStreamInfo;
    /**
     * The projection format of this broadcast. This defaults to rectangular.
     */
    projection?: string | null;
    /**
     * Automatically start recording after the event goes live. The default value for this property is true.    Important: You must also set the enableDvr property&#39;s value to true if you want the playback to be available immediately after the broadcast ends. If you set this property&#39;s value to true but do not also set the enableDvr property to true, there may be a delay of around one day before the archived video will be available for playback.
     */
    recordFromStart?: boolean | null;
    /**
     * This setting indicates whether the broadcast should automatically begin with an in-stream slate when you update the broadcast&#39;s status to live. After updating the status, you then need to send a liveCuepoints.insert request that sets the cuepoint&#39;s eventState to end to remove the in-stream slate and make your broadcast stream visible to viewers.
     */
    startWithSlate?: boolean | null;
    stereoLayout?: string | null;
  }
  export interface Schema$LiveBroadcastListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of broadcasts that match the request criteria.
     */
    items?: Schema$LiveBroadcast[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#liveBroadcastListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$LiveBroadcastSnippet {
    /**
     * The date and time that the broadcast actually ended. This information is only available once the broadcast&#39;s state is complete. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    actualEndTime?: string | null;
    /**
     * The date and time that the broadcast actually started. This information is only available once the broadcast&#39;s state is live. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    actualStartTime?: string | null;
    broadcastType?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast.
     */
    channelId?: string | null;
    /**
     * The broadcast&#39;s description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the corresponding video resource.
     */
    description?: string | null;
    isDefaultBroadcast?: boolean | null;
    /**
     * The id of the live chat for this broadcast.
     */
    liveChatId?: string | null;
    /**
     * The date and time that the broadcast was added to YouTube&#39;s live broadcast schedule. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAt?: string | null;
    /**
     * The date and time that the broadcast is scheduled to end. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    scheduledEndTime?: string | null;
    /**
     * The date and time that the broadcast is scheduled to start. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    scheduledStartTime?: string | null;
    /**
     * A map of thumbnail images associated with the broadcast. For each nested object in this object, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The broadcast&#39;s title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the title field of the corresponding video resource.
     */
    title?: string | null;
  }
  /**
   * Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts.
   */
  export interface Schema$LiveBroadcastStatistics {
    /**
     * The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.
     */
    concurrentViewers?: string | null;
    /**
     * The total number of live chat messages currently on the broadcast. The property and its value will be present if the broadcast is public, has the live chat feature enabled, and has at least one message. Note that this field will not be filled after the broadcast ends. So this property would not identify the number of chat messages for an archived video of a completed live broadcast.
     */
    totalChatCount?: string | null;
  }
  export interface Schema$LiveBroadcastStatus {
    /**
     * The broadcast&#39;s status. The status can be updated using the API&#39;s liveBroadcasts.transition method.
     */
    lifeCycleStatus?: string | null;
    /**
     * Priority of the live broadcast event (internal state).
     */
    liveBroadcastPriority?: string | null;
    /**
     * The broadcast&#39;s privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource.
     */
    privacyStatus?: string | null;
    /**
     * The broadcast&#39;s recording status.
     */
    recordingStatus?: string | null;
  }
  /**
   * A liveChatBan resource represents a ban for a YouTube live chat.
   */
  export interface Schema$LiveChatBan {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube assigns to uniquely identify the ban.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#liveChatBan&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the ban.
     */
    snippet?: Schema$LiveChatBanSnippet;
  }
  export interface Schema$LiveChatBanSnippet {
    /**
     * The duration of a ban, only filled if the ban has type TEMPORARY.
     */
    banDurationSeconds?: string | null;
    bannedUserDetails?: Schema$ChannelProfileDetails;
    /**
     * The chat this ban is pertinent to.
     */
    liveChatId?: string | null;
    /**
     * The type of ban.
     */
    type?: string | null;
  }
  export interface Schema$LiveChatFanFundingEventDetails {
    /**
     * A rendered string that displays the fund amount and currency to the user.
     */
    amountDisplayString?: string | null;
    /**
     * The amount of the fund.
     */
    amountMicros?: string | null;
    /**
     * The currency in which the fund was made.
     */
    currency?: string | null;
    /**
     * The comment added by the user to this fan funding event.
     */
    userComment?: string | null;
  }
  /**
   * A liveChatMessage resource represents a chat message in a YouTube Live Chat.
   */
  export interface Schema$LiveChatMessage {
    /**
     * The authorDetails object contains basic details about the user that posted this message.
     */
    authorDetails?: Schema$LiveChatMessageAuthorDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube assigns to uniquely identify the message.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#liveChatMessage&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the message.
     */
    snippet?: Schema$LiveChatMessageSnippet;
  }
  export interface Schema$LiveChatMessageAuthorDetails {
    /**
     * The YouTube channel ID.
     */
    channelId?: string | null;
    /**
     * The channel&#39;s URL.
     */
    channelUrl?: string | null;
    /**
     * The channel&#39;s display name.
     */
    displayName?: string | null;
    /**
     * Whether the author is a moderator of the live chat.
     */
    isChatModerator?: boolean | null;
    /**
     * Whether the author is the owner of the live chat.
     */
    isChatOwner?: boolean | null;
    /**
     * Whether the author is a sponsor of the live chat.
     */
    isChatSponsor?: boolean | null;
    /**
     * Whether the author&#39;s identity has been verified by YouTube.
     */
    isVerified?: boolean | null;
    /**
     * The channels&#39;s avatar URL.
     */
    profileImageUrl?: string | null;
  }
  export interface Schema$LiveChatMessageDeletedDetails {
    deletedMessageId?: string | null;
  }
  export interface Schema$LiveChatMessageListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of live chat messages.
     */
    items?: Schema$LiveChatMessage[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#liveChatMessageListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * The date and time when the underlying stream went offline. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    offlineAt?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The amount of time the client should wait before polling again.
     */
    pollingIntervalMillis?: number | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$LiveChatMessageRetractedDetails {
    retractedMessageId?: string | null;
  }
  export interface Schema$LiveChatMessageSnippet {
    /**
     * The ID of the user that authored this message, this field is not always filled. textMessageEvent - the user that wrote the message fanFundingEvent - the user that funded the broadcast newSponsorEvent - the user that just became a sponsor messageDeletedEvent - the moderator that took the action messageRetractedEvent - the author that retracted their message userBannedEvent - the moderator that took the action superChatEvent - the user that made the purchase
     */
    authorChannelId?: string | null;
    /**
     * Contains a string that can be displayed to the user. If this field is not present the message is silent, at the moment only messages of type TOMBSTONE and CHAT_ENDED_EVENT are silent.
     */
    displayMessage?: string | null;
    /**
     * Details about the funding event, this is only set if the type is &#39;fanFundingEvent&#39;.
     */
    fanFundingEventDetails?: Schema$LiveChatFanFundingEventDetails;
    /**
     * Whether the message has display content that should be displayed to users.
     */
    hasDisplayContent?: boolean | null;
    liveChatId?: string | null;
    messageDeletedDetails?: Schema$LiveChatMessageDeletedDetails;
    messageRetractedDetails?: Schema$LiveChatMessageRetractedDetails;
    pollClosedDetails?: Schema$LiveChatPollClosedDetails;
    pollEditedDetails?: Schema$LiveChatPollEditedDetails;
    pollOpenedDetails?: Schema$LiveChatPollOpenedDetails;
    pollVotedDetails?: Schema$LiveChatPollVotedDetails;
    /**
     * The date and time when the message was orignally published. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAt?: string | null;
    /**
     * Details about the Super Chat event, this is only set if the type is &#39;superChatEvent&#39;.
     */
    superChatDetails?: Schema$LiveChatSuperChatDetails;
    /**
     * Details about the Super Sticker event, this is only set if the type is &#39;superStickerEvent&#39;.
     */
    superStickerDetails?: Schema$LiveChatSuperStickerDetails;
    /**
     * Details about the text message, this is only set if the type is &#39;textMessageEvent&#39;.
     */
    textMessageDetails?: Schema$LiveChatTextMessageDetails;
    /**
     * The type of message, this will always be present, it determines the contents of the message as well as which fields will be present.
     */
    type?: string | null;
    userBannedDetails?: Schema$LiveChatUserBannedMessageDetails;
  }
  /**
   * A liveChatModerator resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc.
   */
  export interface Schema$LiveChatModerator {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube assigns to uniquely identify the moderator.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#liveChatModerator&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the moderator.
     */
    snippet?: Schema$LiveChatModeratorSnippet;
  }
  export interface Schema$LiveChatModeratorListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of moderators that match the request criteria.
     */
    items?: Schema$LiveChatModerator[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#liveChatModeratorListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$LiveChatModeratorSnippet {
    /**
     * The ID of the live chat this moderator can act on.
     */
    liveChatId?: string | null;
    /**
     * Details about the moderator.
     */
    moderatorDetails?: Schema$ChannelProfileDetails;
  }
  export interface Schema$LiveChatPollClosedDetails {
    /**
     * The id of the poll that was closed.
     */
    pollId?: string | null;
  }
  export interface Schema$LiveChatPollEditedDetails {
    id?: string | null;
    items?: Schema$LiveChatPollItem[];
    prompt?: string | null;
  }
  export interface Schema$LiveChatPollItem {
    /**
     * Plain text description of the item.
     */
    description?: string | null;
    itemId?: string | null;
  }
  export interface Schema$LiveChatPollOpenedDetails {
    id?: string | null;
    items?: Schema$LiveChatPollItem[];
    prompt?: string | null;
  }
  export interface Schema$LiveChatPollVotedDetails {
    /**
     * The poll item the user chose.
     */
    itemId?: string | null;
    /**
     * The poll the user voted on.
     */
    pollId?: string | null;
  }
  export interface Schema$LiveChatSuperChatDetails {
    /**
     * A rendered string that displays the fund amount and currency to the user.
     */
    amountDisplayString?: string | null;
    /**
     * The amount purchased by the user, in micros (1,750,000 micros = 1.75).
     */
    amountMicros?: string | null;
    /**
     * The currency in which the purchase was made.
     */
    currency?: string | null;
    /**
     * The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.
     */
    tier?: number | null;
    /**
     * The comment added by the user to this Super Chat event.
     */
    userComment?: string | null;
  }
  export interface Schema$LiveChatSuperStickerDetails {
    /**
     * A rendered string that displays the fund amount and currency to the user.
     */
    amountDisplayString?: string | null;
    /**
     * The amount purchased by the user, in micros (1,750,000 micros = 1.75).
     */
    amountMicros?: string | null;
    /**
     * The currency in which the purchase was made.
     */
    currency?: string | null;
    /**
     * Information about the Super Sticker.
     */
    superStickerMetadata?: Schema$SuperStickerMetadata;
    /**
     * The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.
     */
    tier?: number | null;
  }
  export interface Schema$LiveChatTextMessageDetails {
    /**
     * The user&#39;s message.
     */
    messageText?: string | null;
  }
  export interface Schema$LiveChatUserBannedMessageDetails {
    /**
     * The duration of the ban. This property is only present if the banType is temporary.
     */
    banDurationSeconds?: string | null;
    /**
     * The details of the user that was banned.
     */
    bannedUserDetails?: Schema$ChannelProfileDetails;
    /**
     * The type of ban.
     */
    banType?: string | null;
  }
  /**
   * A live stream describes a live ingestion point.
   */
  export interface Schema$LiveStream {
    /**
     * The cdn object defines the live stream&#39;s content delivery network (CDN) settings. These settings provide details about the manner in which you stream your content to YouTube.
     */
    cdn?: Schema$CdnSettings;
    /**
     * The content_details object contains information about the stream, including the closed captions ingestion URL.
     */
    contentDetails?: Schema$LiveStreamContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube assigns to uniquely identify the stream.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#liveStream&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the stream, including its channel, title, and description.
     */
    snippet?: Schema$LiveStreamSnippet;
    /**
     * The status object contains information about live stream&#39;s status.
     */
    status?: Schema$LiveStreamStatus;
  }
  export interface Schema$LiveStreamConfigurationIssue {
    /**
     * The long-form description of the issue and how to resolve it.
     */
    description?: string | null;
    /**
     * The short-form reason for this issue.
     */
    reason?: string | null;
    /**
     * How severe this issue is to the stream.
     */
    severity?: string | null;
    /**
     * The kind of error happening.
     */
    type?: string | null;
  }
  /**
   * Detailed settings of a stream.
   */
  export interface Schema$LiveStreamContentDetails {
    /**
     * The ingestion URL where the closed captions of this stream are sent.
     */
    closedCaptionsIngestionUrl?: string | null;
    /**
     * Indicates whether the stream is reusable, which means that it can be bound to multiple broadcasts. It is common for broadcasters to reuse the same stream for many different broadcasts if those broadcasts occur at different times.  If you set this value to false, then the stream will not be reusable, which means that it can only be bound to one broadcast. Non-reusable streams differ from reusable streams in the following ways:   - A non-reusable stream can only be bound to one broadcast.  - A non-reusable stream might be deleted by an automated process after the broadcast ends.  - The  liveStreams.list method does not list non-reusable streams if you call the method and set the mine parameter to true. The only way to use that method to retrieve the resource for a non-reusable stream is to use the id parameter to identify the stream.
     */
    isReusable?: boolean | null;
  }
  export interface Schema$LiveStreamHealthStatus {
    /**
     * The configurations issues on this stream
     */
    configurationIssues?: Schema$LiveStreamConfigurationIssue[];
    /**
     * The last time this status was updated (in seconds)
     */
    lastUpdateTimeSeconds?: string | null;
    /**
     * The status code of this stream
     */
    status?: string | null;
  }
  export interface Schema$LiveStreamListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of live streams that match the request criteria.
     */
    items?: Schema$LiveStream[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#liveStreamListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$LiveStreamSnippet {
    /**
     * The ID that YouTube uses to uniquely identify the channel that is transmitting the stream.
     */
    channelId?: string | null;
    /**
     * The stream&#39;s description. The value cannot be longer than 10000 characters.
     */
    description?: string | null;
    isDefaultStream?: boolean | null;
    /**
     * The date and time that the stream was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAt?: string | null;
    /**
     * The stream&#39;s title. The value must be between 1 and 128 characters long.
     */
    title?: string | null;
  }
  /**
   * Brief description of the live stream status.
   */
  export interface Schema$LiveStreamStatus {
    /**
     * The health status of the stream.
     */
    healthStatus?: Schema$LiveStreamHealthStatus;
    streamStatus?: string | null;
  }
  export interface Schema$LocalizedProperty {
    default?: string | null;
    /**
     * The language of the default property.
     */
    defaultLanguage?: Schema$LanguageTag;
    localized?: Schema$LocalizedString[];
  }
  export interface Schema$LocalizedString {
    language?: string | null;
    value?: string | null;
  }
  /**
   * A member resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits.
   */
  export interface Schema$Member {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube assigns to uniquely identify the member.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#member&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the member.
     */
    snippet?: Schema$MemberSnippet;
  }
  export interface Schema$MemberListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of members that match the request criteria.
     */
    items?: Schema$Member[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#memberListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$MembershipsDetails {
    /**
     * All levels that the user has access to. This includes the purchased level and all other levels that are included because of a higher purchase.
     */
    accessibleLevels?: string[] | null;
    /**
     * The date and time when the user became a continuous member across all levels.
     */
    memberSince?: string | null;
    /**
     * The date and time when the user started to continuously have access to the currently highest level.
     */
    memberSinceCurrentLevel?: string | null;
    /**
     * The cumulative time the user has been a member across all levels in complete months (the time is rounded down to the nearest integer).
     */
    memberTotalDuration?: number | null;
    /**
     * The cumulative time the user has had access to the currently highest level in complete months (the time is rounded down to the nearest integer).
     */
    memberTotalDurationCurrentLevel?: number | null;
    /**
     * The highest level the user has access to at the moment.
     */
    purchasedLevel?: string | null;
  }
  /**
   * A membershipsLevel resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits.
   */
  export interface Schema$MembershipsLevel {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube assigns to uniquely identify the memberships level.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#membershipsLevel&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the level.
     */
    snippet?: Schema$MembershipsLevelSnippet;
  }
  export interface Schema$MembershipsLevelListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of pricing levels offered by a creator to the fans.
     */
    items?: Schema$MembershipsLevel[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#membershipsLevelListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$MembershipsLevelSnippet {
    /**
     * The id of the channel that&#39;s offering channel memberships.
     */
    creatorChannelId?: string | null;
    levelDetails?: Schema$LevelDetails;
  }
  export interface Schema$MemberSnippet {
    /**
     * The id of the channel that&#39;s offering memberships.
     */
    creatorChannelId?: string | null;
    /**
     * Details about the member.
     */
    memberDetails?: Schema$ChannelProfileDetails;
    /**
     * Details about the user&#39;s membership.
     */
    membershipsDetails?: Schema$MembershipsDetails;
  }
  /**
   * Settings and Info of the monitor stream
   */
  export interface Schema$MonitorStreamInfo {
    /**
     * If you have set the enableMonitorStream property to true, then this property determines the length of the live broadcast delay.
     */
    broadcastStreamDelayMs?: number | null;
    /**
     * HTML code that embeds a player that plays the monitor stream.
     */
    embedHtml?: string | null;
    /**
     * This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event content on a special stream intended only for the broadcaster&#39;s consumption. The broadcaster can use the stream to review the event content and also to identify the optimal times to insert cuepoints.  You need to set this value to true if you intend to have a broadcast delay for your event.  Note: This property cannot be updated once the broadcast is in the testing or live state.
     */
    enableMonitorStream?: boolean | null;
  }
  /**
   * Nonprofit information.
   */
  export interface Schema$Nonprofit {
    /**
     * Id of the nonprofit.
     */
    nonprofitId?: Schema$NonprofitId;
    /**
     * Legal name of the nonprofit.
     */
    nonprofitLegalName?: string | null;
  }
  export interface Schema$NonprofitId {
    value?: string | null;
  }
  /**
   * Paging details for lists of resources, including total number of items available and number of resources returned in a single page.
   */
  export interface Schema$PageInfo {
    /**
     * The number of results included in the API response.
     */
    resultsPerPage?: number | null;
    /**
     * The total number of results in the result set.
     */
    totalResults?: number | null;
  }
  /**
   * A playlist resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private.  YouTube also uses playlists to identify special collections of videos for a channel, such as:   - uploaded videos  - favorite videos  - positively rated (liked) videos  - watch history  - watch later  To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company&#39;s videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the  channel resource for a given channel.  You can then use the   playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the   playlistItems.insert and   playlistItems.delete methods.
   */
  export interface Schema$Playlist {
    /**
     * The contentDetails object contains information like video count.
     */
    contentDetails?: Schema$PlaylistContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the playlist.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#playlist&quot;.
     */
    kind?: string | null;
    /**
     * Localizations for different languages
     */
    localizations?: {[key: string]: Schema$PlaylistLocalization} | null;
    /**
     * The player object contains information that you would use to play the playlist in an embedded player.
     */
    player?: Schema$PlaylistPlayer;
    /**
     * The snippet object contains basic details about the playlist, such as its title and description.
     */
    snippet?: Schema$PlaylistSnippet;
    /**
     * The status object contains status information for the playlist.
     */
    status?: Schema$PlaylistStatus;
  }
  export interface Schema$PlaylistContentDetails {
    /**
     * The number of videos in the playlist.
     */
    itemCount?: number | null;
  }
  /**
   * A playlistItem resource identifies another resource, such as a video, that is included in a playlist. In addition, the playlistItem  resource contains details about the included resource that pertain specifically to how that resource is used in that playlist.  YouTube uses playlists to identify special collections of videos for a channel, such as:   - uploaded videos  - favorite videos  - positively rated (liked) videos  - watch history  - watch later  To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company&#39;s videos, playlists, and other YouTube information.  You can retrieve the playlist IDs for each of these lists from the  channel resource  for a given channel. You can then use the   playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the   playlistItems.insert and   playlistItems.delete methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user&#39;s channel.
   */
  export interface Schema$PlaylistItem {
    /**
     * The contentDetails object is included in the resource if the included item is a YouTube video. The object contains additional information about the video.
     */
    contentDetails?: Schema$PlaylistItemContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the playlist item.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#playlistItem&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the playlist item, such as its title and position in the playlist.
     */
    snippet?: Schema$PlaylistItemSnippet;
    /**
     * The status object contains information about the playlist item&#39;s privacy status.
     */
    status?: Schema$PlaylistItemStatus;
  }
  export interface Schema$PlaylistItemContentDetails {
    /**
     * The time, measured in seconds from the start of the video, when the video should stop playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) By default, assume that the video.endTime is the end of the video.
     */
    endAt?: string | null;
    /**
     * A user-generated note for this item.
     */
    note?: string | null;
    /**
     * The time, measured in seconds from the start of the video, when the video should start playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) The default value is 0.
     */
    startAt?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify a video. To retrieve the video resource, set the id query parameter to this value in your API request.
     */
    videoId?: string | null;
    /**
     * The date and time that the video was published to YouTube. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    videoPublishedAt?: string | null;
  }
  export interface Schema$PlaylistItemListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of playlist items that match the request criteria.
     */
    items?: Schema$PlaylistItem[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#playlistItemListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about a playlist, including title, description and thumbnails.
   */
  export interface Schema$PlaylistItemSnippet {
    /**
     * The ID that YouTube uses to uniquely identify the user that added the item to the playlist.
     */
    channelId?: string | null;
    /**
     * Channel title for the channel that the playlist item belongs to.
     */
    channelTitle?: string | null;
    /**
     * The item&#39;s description.
     */
    description?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the playlist that the playlist item is in.
     */
    playlistId?: string | null;
    /**
     * The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of 0, the second item has a position of 1, and so forth.
     */
    position?: number | null;
    /**
     * The date and time that the item was added to the playlist. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAt?: string | null;
    /**
     * The id object contains information that can be used to uniquely identify the resource that is included in the playlist as the playlist item.
     */
    resourceId?: Schema$ResourceId;
    /**
     * A map of thumbnail images associated with the playlist item. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The item&#39;s title.
     */
    title?: string | null;
  }
  /**
   * Information about the playlist item&#39;s privacy status.
   */
  export interface Schema$PlaylistItemStatus {
    /**
     * This resource&#39;s privacy status.
     */
    privacyStatus?: string | null;
  }
  export interface Schema$PlaylistListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of playlists that match the request criteria.
     */
    items?: Schema$Playlist[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#playlistListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Playlist localization setting
   */
  export interface Schema$PlaylistLocalization {
    /**
     * The localized strings for playlist&#39;s description.
     */
    description?: string | null;
    /**
     * The localized strings for playlist&#39;s title.
     */
    title?: string | null;
  }
  export interface Schema$PlaylistPlayer {
    /**
     * An &lt;iframe&gt; tag that embeds a player that will play the playlist.
     */
    embedHtml?: string | null;
  }
  /**
   * Basic details about a playlist, including title, description and thumbnails.
   */
  export interface Schema$PlaylistSnippet {
    /**
     * The ID that YouTube uses to uniquely identify the channel that published the playlist.
     */
    channelId?: string | null;
    /**
     * The channel title of the channel that the video belongs to.
     */
    channelTitle?: string | null;
    /**
     * The language of the playlist&#39;s default title and description.
     */
    defaultLanguage?: string | null;
    /**
     * The playlist&#39;s description.
     */
    description?: string | null;
    /**
     * Localized title and description, read-only.
     */
    localized?: Schema$PlaylistLocalization;
    /**
     * The date and time that the playlist was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAt?: string | null;
    /**
     * Keyword tags associated with the playlist.
     */
    tags?: string[] | null;
    /**
     * A map of thumbnail images associated with the playlist. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The playlist&#39;s title.
     */
    title?: string | null;
  }
  export interface Schema$PlaylistStatus {
    /**
     * The playlist&#39;s privacy status.
     */
    privacyStatus?: string | null;
  }
  /**
   * Describes a single promoted item.
   */
  export interface Schema$PromotedItem {
    /**
     * A custom message to display for this promotion. This field is currently ignored unless the promoted item is a website.
     */
    customMessage?: string | null;
    /**
     * Identifies the promoted item.
     */
    id?: Schema$PromotedItemId;
    /**
     * If true, the content owner&#39;s name will be used when displaying the promotion. This field can only be set when the update is made on behalf of the content owner.
     */
    promotedByContentOwner?: boolean | null;
    /**
     * The temporal position within the video where the promoted item will be displayed. If present, it overrides the default timing.
     */
    timing?: Schema$InvideoTiming;
  }
  /**
   * Describes a single promoted item id. It is a union of various possible types.
   */
  export interface Schema$PromotedItemId {
    /**
     * If type is recentUpload, this field identifies the channel from which to take the recent upload. If missing, the channel is assumed to be the same channel for which the invideoPromotion is set.
     */
    recentlyUploadedBy?: string | null;
    /**
     * Describes the type of the promoted item.
     */
    type?: string | null;
    /**
     * If the promoted item represents a video, this field represents the unique YouTube ID identifying it. This field will be present only if type has the value video.
     */
    videoId?: string | null;
    /**
     * If the promoted item represents a website, this field represents the url pointing to the website. This field will be present only if type has the value website.
     */
    websiteUrl?: string | null;
  }
  /**
   * A pair Property / Value.
   */
  export interface Schema$PropertyValue {
    /**
     * A property.
     */
    property?: string | null;
    /**
     * The property&#39;s value.
     */
    value?: string | null;
  }
  /**
   * A resource id is a generic reference that points to another YouTube resource.
   */
  export interface Schema$ResourceId {
    /**
     * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the resourceId.kind value is youtube#channel.
     */
    channelId?: string | null;
    /**
     * The type of the API resource.
     */
    kind?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the resourceId.kind value is youtube#playlist.
     */
    playlistId?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the resourceId.kind value is youtube#video.
     */
    videoId?: string | null;
  }
  export interface Schema$SearchListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of results that match the search criteria.
     */
    items?: Schema$SearchResult[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#searchListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    regionCode?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data.
   */
  export interface Schema$SearchResult {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The id object contains information that can be used to uniquely identify the resource that matches the search request.
     */
    id?: Schema$ResourceId;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#searchResult&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about a search result, such as its title or description. For example, if the search result is a video, then the title will be the video&#39;s title and the description will be the video&#39;s description.
     */
    snippet?: Schema$SearchResultSnippet;
  }
  /**
   * Basic details about a search result, including title, description and thumbnails of the item referenced by the search result.
   */
  export interface Schema$SearchResultSnippet {
    /**
     * The value that YouTube uses to uniquely identify the channel that published the resource that the search result identifies.
     */
    channelId?: string | null;
    /**
     * The title of the channel that published the resource that the search result identifies.
     */
    channelTitle?: string | null;
    /**
     * A description of the search result.
     */
    description?: string | null;
    /**
     * It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it&#39;s &quot;none&quot; if there is not any upcoming/active live broadcasts.
     */
    liveBroadcastContent?: string | null;
    /**
     * The creation date and time of the resource that the search result identifies. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAt?: string | null;
    /**
     * A map of thumbnail images associated with the search result. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The title of the search result.
     */
    title?: string | null;
  }
  /**
   * A sponsor resource represents a sponsor for a YouTube channel. A sponsor provides recurring monetary support to a creator and receives special benefits.
   */
  export interface Schema$Sponsor {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#sponsor&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the sponsor.
     */
    snippet?: Schema$SponsorSnippet;
  }
  export interface Schema$SponsorListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of sponsors that match the request criteria.
     */
    items?: Schema$Sponsor[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#sponsorListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$SponsorSnippet {
    /**
     * The id of the channel being sponsored.
     */
    channelId?: string | null;
    /**
     * The cumulative time a user has been a sponsor in months.
     */
    cumulativeDurationMonths?: number | null;
    /**
     * Details about the sponsor.
     */
    sponsorDetails?: Schema$ChannelProfileDetails;
    /**
     * The date and time when the user became a sponsor. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    sponsorSince?: string | null;
  }
  /**
   * A subscription resource contains information about a YouTube user subscription. A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.
   */
  export interface Schema$Subscription {
    /**
     * The contentDetails object contains basic statistics about the subscription.
     */
    contentDetails?: Schema$SubscriptionContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the subscription.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#subscription&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the subscription, including its title and the channel that the user subscribed to.
     */
    snippet?: Schema$SubscriptionSnippet;
    /**
     * The subscriberSnippet object contains basic details about the sbuscriber.
     */
    subscriberSnippet?: Schema$SubscriptionSubscriberSnippet;
  }
  /**
   * Details about the content to witch a subscription refers.
   */
  export interface Schema$SubscriptionContentDetails {
    /**
     * The type of activity this subscription is for (only uploads, everything).
     */
    activityType?: string | null;
    /**
     * The number of new items in the subscription since its content was last read.
     */
    newItemCount?: number | null;
    /**
     * The approximate number of items that the subscription points to.
     */
    totalItemCount?: number | null;
  }
  export interface Schema$SubscriptionListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of subscriptions that match the request criteria.
     */
    items?: Schema$Subscription[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#subscriptionListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about a subscription, including title, description and thumbnails of the subscribed item.
   */
  export interface Schema$SubscriptionSnippet {
    /**
     * The ID that YouTube uses to uniquely identify the subscriber&#39;s channel.
     */
    channelId?: string | null;
    /**
     * Channel title for the channel that the subscription belongs to.
     */
    channelTitle?: string | null;
    /**
     * The subscription&#39;s details.
     */
    description?: string | null;
    /**
     * The date and time that the subscription was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAt?: string | null;
    /**
     * The id object contains information about the channel that the user subscribed to.
     */
    resourceId?: Schema$ResourceId;
    /**
     * A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The subscription&#39;s title.
     */
    title?: string | null;
  }
  /**
   * Basic details about a subscription&#39;s subscriber including title, description, channel ID and thumbnails.
   */
  export interface Schema$SubscriptionSubscriberSnippet {
    /**
     * The channel ID of the subscriber.
     */
    channelId?: string | null;
    /**
     * The description of the subscriber.
     */
    description?: string | null;
    /**
     * Thumbnails for this subscriber.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The title of the subscriber.
     */
    title?: string | null;
  }
  /**
   * A superChatEvent resource represents a Super Chat purchase on a YouTube channel.
   */
  export interface Schema$SuperChatEvent {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube assigns to uniquely identify the Super Chat event.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#superChatEvent&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the Super Chat event.
     */
    snippet?: Schema$SuperChatEventSnippet;
  }
  export interface Schema$SuperChatEventListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of Super Chat purchases that match the request criteria.
     */
    items?: Schema$SuperChatEvent[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#superChatEventListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$SuperChatEventSnippet {
    /**
     * The purchase amount, in micros of the purchase currency. e.g., 1 is represented as 1000000.
     */
    amountMicros?: string | null;
    /**
     * Channel id where the event occurred.
     */
    channelId?: string | null;
    /**
     * The text contents of the comment left by the user.
     */
    commentText?: string | null;
    /**
     * The date and time when the event occurred. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    createdAt?: string | null;
    /**
     * The currency in which the purchase was made. ISO 4217.
     */
    currency?: string | null;
    /**
     * A rendered string that displays the purchase amount and currency (e.g., &quot;$1.00&quot;). The string is rendered for the given language.
     */
    displayString?: string | null;
    /**
     * True if this event is a Super Chat for Good purchase.
     */
    isSuperChatForGood?: boolean | null;
    /**
     * True if this event is a Super Sticker event.
     */
    isSuperStickerEvent?: boolean | null;
    /**
     * The tier for the paid message, which is based on the amount of money spent to purchase the message.
     */
    messageType?: number | null;
    /**
     * If this event is a Super Chat for Good purchase, this field will contain information about the charity the purchase is donated to.
     */
    nonprofit?: Schema$Nonprofit;
    /**
     * If this event is a Super Sticker event, this field will contain metadata about the Super Sticker.
     */
    superStickerMetadata?: Schema$SuperStickerMetadata;
    /**
     * Details about the supporter.
     */
    supporterDetails?: Schema$ChannelProfileDetails;
  }
  export interface Schema$SuperStickerMetadata {
    /**
     * Internationalized alt text that describes the sticker image and any animation associated with it.
     */
    altText?: string | null;
    /**
     * Specifies the localization language in which the alt text is returned.
     */
    altTextLanguage?: string | null;
    /**
     * Unique identifier of the Super Sticker. This is a shorter form of the alt_text that includes pack name and a recognizable characteristic of the sticker.
     */
    stickerId?: string | null;
  }
  /**
   * A thumbnail is an image representing a YouTube resource.
   */
  export interface Schema$Thumbnail {
    /**
     * (Optional) Height of the thumbnail image.
     */
    height?: number | null;
    /**
     * The thumbnail image&#39;s URL.
     */
    url?: string | null;
    /**
     * (Optional) Width of the thumbnail image.
     */
    width?: number | null;
  }
  /**
   * Internal representation of thumbnails for a YouTube resource.
   */
  export interface Schema$ThumbnailDetails {
    /**
     * The default image for this resource.
     */
    default?: Schema$Thumbnail;
    /**
     * The high quality image for this resource.
     */
    high?: Schema$Thumbnail;
    /**
     * The maximum resolution quality image for this resource.
     */
    maxres?: Schema$Thumbnail;
    /**
     * The medium quality image for this resource.
     */
    medium?: Schema$Thumbnail;
    /**
     * The standard quality image for this resource.
     */
    standard?: Schema$Thumbnail;
  }
  export interface Schema$ThumbnailSetResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of thumbnails.
     */
    items?: Schema$ThumbnailDetails[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#thumbnailSetResponse&quot;.
     */
    kind?: string | null;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Stub token pagination template to suppress results.
   */
  export interface Schema$TokenPagination {}
  /**
   * A video resource represents a YouTube video.
   */
  export interface Schema$Video {
    /**
     * Age restriction details related to a video. This data can only be retrieved by the video owner.
     */
    ageGating?: Schema$VideoAgeGating;
    /**
     * The contentDetails object contains information about the video content, including the length of the video and its aspect ratio.
     */
    contentDetails?: Schema$VideoContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The fileDetails object encapsulates information about the video file that was uploaded to YouTube, including the file&#39;s resolution, duration, audio and video codecs, stream bitrates, and more. This data can only be retrieved by the video owner.
     */
    fileDetails?: Schema$VideoFileDetails;
    /**
     * The ID that YouTube uses to uniquely identify the video.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#video&quot;.
     */
    kind?: string | null;
    /**
     * The liveStreamingDetails object contains metadata about a live video broadcast. The object will only be present in a video resource if the video is an upcoming, live, or completed live broadcast.
     */
    liveStreamingDetails?: Schema$VideoLiveStreamingDetails;
    /**
     * List with all localizations.
     */
    localizations?: {[key: string]: Schema$VideoLocalization} | null;
    /**
     * The monetizationDetails object encapsulates information about the monetization status of the video.
     */
    monetizationDetails?: Schema$VideoMonetizationDetails;
    /**
     * The player object contains information that you would use to play the video in an embedded player.
     */
    player?: Schema$VideoPlayer;
    /**
     * The processingDetails object encapsulates information about YouTube&#39;s progress in processing the uploaded video file. The properties in the object identify the current processing status and an estimate of the time remaining until YouTube finishes processing the video. This part also indicates whether different types of data or content, such as file details or thumbnail images, are available for the video.  The processingProgress object is designed to be polled so that the video uploaded can track the progress that YouTube has made in processing the uploaded video file. This data can only be retrieved by the video owner.
     */
    processingDetails?: Schema$VideoProcessingDetails;
    /**
     * The projectDetails object contains information about the project specific video metadata.
     */
    projectDetails?: Schema$VideoProjectDetails;
    /**
     * The recordingDetails object encapsulates information about the location, date and address where the video was recorded.
     */
    recordingDetails?: Schema$VideoRecordingDetails;
    /**
     * The snippet object contains basic details about the video, such as its title, description, and category.
     */
    snippet?: Schema$VideoSnippet;
    /**
     * The statistics object contains statistics about the video.
     */
    statistics?: Schema$VideoStatistics;
    /**
     * The status object contains information about the video&#39;s uploading, processing, and privacy statuses.
     */
    status?: Schema$VideoStatus;
    /**
     * The suggestions object encapsulates suggestions that identify opportunities to improve the video quality or the metadata for the uploaded video. This data can only be retrieved by the video owner.
     */
    suggestions?: Schema$VideoSuggestions;
    /**
     * The topicDetails object encapsulates information about Freebase topics associated with the video.
     */
    topicDetails?: Schema$VideoTopicDetails;
  }
  export interface Schema$VideoAbuseReport {
    /**
     * Additional comments regarding the abuse report.
     */
    comments?: string | null;
    /**
     * The language that the content was viewed in.
     */
    language?: string | null;
    /**
     * The high-level, or primary, reason that the content is abusive. The value is an abuse report reason ID.
     */
    reasonId?: string | null;
    /**
     * The specific, or secondary, reason that this content is abusive (if available). The value is an abuse report reason ID that is a valid secondary reason for the primary reason.
     */
    secondaryReasonId?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the video.
     */
    videoId?: string | null;
  }
  /**
   * A videoAbuseReportReason resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with video.ReportAbuse.
   */
  export interface Schema$VideoAbuseReportReason {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID of this abuse report reason.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#videoAbuseReportReason&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the abuse report reason.
     */
    snippet?: Schema$VideoAbuseReportReasonSnippet;
  }
  export interface Schema$VideoAbuseReportReasonListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of valid abuse reasons that are used with video.ReportAbuse.
     */
    items?: Schema$VideoAbuseReportReason[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#videoAbuseReportReasonListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about a video category, such as its localized title.
   */
  export interface Schema$VideoAbuseReportReasonSnippet {
    /**
     * The localized label belonging to this abuse report reason.
     */
    label?: string | null;
    /**
     * The secondary reasons associated with this reason, if any are available. (There might be 0 or more.)
     */
    secondaryReasons?: Schema$VideoAbuseReportSecondaryReason[];
  }
  export interface Schema$VideoAbuseReportSecondaryReason {
    /**
     * The ID of this abuse report secondary reason.
     */
    id?: string | null;
    /**
     * The localized label for this abuse report secondary reason.
     */
    label?: string | null;
  }
  export interface Schema$VideoAgeGating {
    /**
     * Indicates whether or not the video has alcoholic beverage content. Only users of legal purchasing age in a particular country, as identified by ICAP, can view the content.
     */
    alcoholContent?: boolean | null;
    /**
     * Age-restricted trailers. For redband trailers and adult-rated video-games. Only users aged 18+ can view the content. The the field is true the content is restricted to viewers aged 18+. Otherwise The field won&#39;t be present.
     */
    restricted?: boolean | null;
    /**
     * Video game rating, if any.
     */
    videoGameRating?: string | null;
  }
  /**
   * A videoCategory resource identifies a category that has been or could be associated with uploaded videos.
   */
  export interface Schema$VideoCategory {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the video category.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#videoCategory&quot;.
     */
    kind?: string | null;
    /**
     * The snippet object contains basic details about the video category, including its title.
     */
    snippet?: Schema$VideoCategorySnippet;
  }
  export interface Schema$VideoCategoryListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of video categories that can be associated with YouTube videos. In this map, the video category ID is the map key, and its value is the corresponding videoCategory resource.
     */
    items?: Schema$VideoCategory[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#videoCategoryListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about a video category, such as its localized title.
   */
  export interface Schema$VideoCategorySnippet {
    assignable?: boolean | null;
    /**
     * The YouTube channel that created the video category.
     */
    channelId?: string | null;
    /**
     * The video category&#39;s title.
     */
    title?: string | null;
  }
  /**
   * Details about the content of a YouTube Video.
   */
  export interface Schema$VideoContentDetails {
    /**
     * The value of captions indicates whether the video has captions or not.
     */
    caption?: string | null;
    /**
     * Specifies the ratings that the video received under various rating schemes.
     */
    contentRating?: Schema$ContentRating;
    /**
     * The countryRestriction object contains information about the countries where a video is (or is not) viewable.
     */
    countryRestriction?: Schema$AccessPolicy;
    /**
     * The value of definition indicates whether the video is available in high definition or only in standard definition.
     */
    definition?: string | null;
    /**
     * The value of dimension indicates whether the video is available in 3D or in 2D.
     */
    dimension?: string | null;
    /**
     * The length of the video. The tag value is an ISO 8601 duration in the format PT#M#S, in which the letters PT indicate that the value specifies a period of time, and the letters M and S refer to length in minutes and seconds, respectively. The # characters preceding the M and S letters are both integers that specify the number of minutes (or seconds) of the video. For example, a value of PT15M51S indicates that the video is 15 minutes and 51 seconds long.
     */
    duration?: string | null;
    /**
     * Indicates whether the video uploader has provided a custom thumbnail image for the video. This property is only visible to the video uploader.
     */
    hasCustomThumbnail?: boolean | null;
    /**
     * The value of is_license_content indicates whether the video is licensed content.
     */
    licensedContent?: boolean | null;
    /**
     * Specifies the projection format of the video.
     */
    projection?: string | null;
    /**
     * The regionRestriction object contains information about the countries where a video is (or is not) viewable. The object will contain either the contentDetails.regionRestriction.allowed property or the contentDetails.regionRestriction.blocked property.
     */
    regionRestriction?: Schema$VideoContentDetailsRegionRestriction;
  }
  /**
   * DEPRECATED Region restriction of the video.
   */
  export interface Schema$VideoContentDetailsRegionRestriction {
    /**
     * A list of region codes that identify countries where the video is viewable. If this property is present and a country is not listed in its value, then the video is blocked from appearing in that country. If this property is present and contains an empty list, the video is blocked in all countries.
     */
    allowed?: string[] | null;
    /**
     * A list of region codes that identify countries where the video is blocked. If this property is present and a country is not listed in its value, then the video is viewable in that country. If this property is present and contains an empty list, the video is viewable in all countries.
     */
    blocked?: string[] | null;
  }
  /**
   * Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information.
   */
  export interface Schema$VideoFileDetails {
    /**
     * A list of audio streams contained in the uploaded video file. Each item in the list contains detailed metadata about an audio stream.
     */
    audioStreams?: Schema$VideoFileDetailsAudioStream[];
    /**
     * The uploaded video file&#39;s combined (video and audio) bitrate in bits per second.
     */
    bitrateBps?: string | null;
    /**
     * The uploaded video file&#39;s container format.
     */
    container?: string | null;
    /**
     * The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported:   - Date only: YYYY-MM-DD  - Naive time: YYYY-MM-DDTHH:MM:SS  - Time with timezone: YYYY-MM-DDTHH:MM:SS+HH:MM
     */
    creationTime?: string | null;
    /**
     * The length of the uploaded video in milliseconds.
     */
    durationMs?: string | null;
    /**
     * The uploaded file&#39;s name. This field is present whether a video file or another type of file was uploaded.
     */
    fileName?: string | null;
    /**
     * The uploaded file&#39;s size in bytes. This field is present whether a video file or another type of file was uploaded.
     */
    fileSize?: string | null;
    /**
     * The uploaded file&#39;s type as detected by YouTube&#39;s video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded.
     */
    fileType?: string | null;
    /**
     * A list of video streams contained in the uploaded video file. Each item in the list contains detailed metadata about a video stream.
     */
    videoStreams?: Schema$VideoFileDetailsVideoStream[];
  }
  /**
   * Information about an audio stream.
   */
  export interface Schema$VideoFileDetailsAudioStream {
    /**
     * The audio stream&#39;s bitrate, in bits per second.
     */
    bitrateBps?: string | null;
    /**
     * The number of audio channels that the stream contains.
     */
    channelCount?: number | null;
    /**
     * The audio codec that the stream uses.
     */
    codec?: string | null;
    /**
     * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
     */
    vendor?: string | null;
  }
  /**
   * Information about a video stream.
   */
  export interface Schema$VideoFileDetailsVideoStream {
    /**
     * The video content&#39;s display aspect ratio, which specifies the aspect ratio in which the video should be displayed.
     */
    aspectRatio?: number | null;
    /**
     * The video stream&#39;s bitrate, in bits per second.
     */
    bitrateBps?: string | null;
    /**
     * The video codec that the stream uses.
     */
    codec?: string | null;
    /**
     * The video stream&#39;s frame rate, in frames per second.
     */
    frameRateFps?: number | null;
    /**
     * The encoded video content&#39;s height in pixels.
     */
    heightPixels?: number | null;
    /**
     * The amount that YouTube needs to rotate the original source content to properly display the video.
     */
    rotation?: string | null;
    /**
     * A value that uniquely identifies a video vendor. Typically, the value is a four-letter vendor code.
     */
    vendor?: string | null;
    /**
     * The encoded video content&#39;s width in pixels. You can calculate the video&#39;s encoding aspect ratio as width_pixels / height_pixels.
     */
    widthPixels?: number | null;
  }
  export interface Schema$VideoGetRatingResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of ratings that match the request criteria.
     */
    items?: Schema$VideoRating[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#videoGetRatingResponse&quot;.
     */
    kind?: string | null;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$VideoListResponse {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Serialized EventId of the request which produced this response.
     */
    eventId?: string | null;
    /**
     * A list of videos that match the request criteria.
     */
    items?: Schema$Video[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &quot;youtube#videoListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The visitorId identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Details about the live streaming metadata.
   */
  export interface Schema$VideoLiveStreamingDetails {
    /**
     * The ID of the currently active live chat attached to this video. This field is filled only if the video is a currently live broadcast that has live chat. Once the broadcast transitions to complete this field will be removed and the live chat closed down. For persistent broadcasts that live chat id will no longer be tied to this video but rather to the new video being displayed at the persistent page.
     */
    activeLiveChatId?: string | null;
    /**
     * The time that the broadcast actually ended. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. This value will not be available until the broadcast is over.
     */
    actualEndTime?: string | null;
    /**
     * The time that the broadcast actually started. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. This value will not be available until the broadcast begins.
     */
    actualStartTime?: string | null;
    /**
     * The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.
     */
    concurrentViewers?: string | null;
    /**
     * The time that the broadcast is scheduled to end. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. If the value is empty or the property is not present, then the broadcast is scheduled to continue indefinitely.
     */
    scheduledEndTime?: string | null;
    /**
     * The time that the broadcast is scheduled to begin. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    scheduledStartTime?: string | null;
  }
  /**
   * Localized versions of certain video properties (e.g. title).
   */
  export interface Schema$VideoLocalization {
    /**
     * Localized version of the video&#39;s description.
     */
    description?: string | null;
    /**
     * Localized version of the video&#39;s title.
     */
    title?: string | null;
  }
  /**
   * Details about monetization of a YouTube Video.
   */
  export interface Schema$VideoMonetizationDetails {
    /**
     * The value of access indicates whether the video can be monetized or not.
     */
    access?: Schema$AccessPolicy;
  }
  /**
   * Player to be used for a video playback.
   */
  export interface Schema$VideoPlayer {
    embedHeight?: string | null;
    /**
     * An &lt;iframe&gt; tag that embeds a player that will play the video.
     */
    embedHtml?: string | null;
    /**
     * The embed width
     */
    embedWidth?: string | null;
  }
  /**
   * Describes processing status and progress and availability of some other Video resource parts.
   */
  export interface Schema$VideoProcessingDetails {
    /**
     * This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
     */
    editorSuggestionsAvailability?: string | null;
    /**
     * This value indicates whether file details are available for the uploaded video. You can retrieve a video&#39;s file details by requesting the fileDetails part in your videos.list() request.
     */
    fileDetailsAvailability?: string | null;
    /**
     * The reason that YouTube failed to process the video. This property will only have a value if the processingStatus property&#39;s value is failed.
     */
    processingFailureReason?: string | null;
    /**
     * This value indicates whether the video processing engine has generated suggestions that might improve YouTube&#39;s ability to process the the video, warnings that explain video processing problems, or errors that cause video processing problems. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
     */
    processingIssuesAvailability?: string | null;
    /**
     * The processingProgress object contains information about the progress YouTube has made in processing the video. The values are really only relevant if the video&#39;s processing status is processing.
     */
    processingProgress?: Schema$VideoProcessingDetailsProcessingProgress;
    /**
     * The video&#39;s processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed.
     */
    processingStatus?: string | null;
    /**
     * This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a video&#39;s metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the suggestions part in your videos.list() request.
     */
    tagSuggestionsAvailability?: string | null;
    /**
     * This value indicates whether thumbnail images have been generated for the video.
     */
    thumbnailsAvailability?: string | null;
  }
  /**
   * Video processing progress and completion time estimate.
   */
  export interface Schema$VideoProcessingDetailsProcessingProgress {
    /**
     * The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by calculating: 100 * parts_processed / parts_total  Note that since the estimated number of parts could increase without a corresponding increase in the number of parts that have already been processed, it is possible that the calculated progress could periodically decrease while YouTube processes a video.
     */
    partsProcessed?: string | null;
    /**
     * An estimate of the total number of parts that need to be processed for the video. The number may be updated with more precise estimates while YouTube processes the video.
     */
    partsTotal?: string | null;
    /**
     * An estimate of the amount of time, in millseconds, that YouTube needs to finish processing the video.
     */
    timeLeftMs?: string | null;
  }
  /**
   * Project specific details about the content of a YouTube Video.
   */
  export interface Schema$VideoProjectDetails {
    /**
     * A list of project tags associated with the video during the upload.
     */
    tags?: string[] | null;
  }
  export interface Schema$VideoRating {
    rating?: string | null;
    videoId?: string | null;
  }
  /**
   * Recording information associated with the video.
   */
  export interface Schema$VideoRecordingDetails {
    /**
     * The geolocation information associated with the video.
     */
    location?: Schema$GeoPoint;
    /**
     * The text description of the location where the video was recorded.
     */
    locationDescription?: string | null;
    /**
     * The date and time when the video was recorded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.
     */
    recordingDate?: string | null;
  }
  /**
   * Basic details about a video, including title, description, uploader, thumbnails and category.
   */
  export interface Schema$VideoSnippet {
    /**
     * The YouTube video category associated with the video.
     */
    categoryId?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the channel that the video was uploaded to.
     */
    channelId?: string | null;
    /**
     * Channel title for the channel that the video belongs to.
     */
    channelTitle?: string | null;
    /**
     * The default_audio_language property specifies the language spoken in the video&#39;s default audio track.
     */
    defaultAudioLanguage?: string | null;
    /**
     * The language of the videos&#39;s default snippet.
     */
    defaultLanguage?: string | null;
    /**
     * The video&#39;s description.
     */
    description?: string | null;
    /**
     * Indicates if the video is an upcoming/active live broadcast. Or it&#39;s &quot;none&quot; if the video is not an upcoming/active live broadcast.
     */
    liveBroadcastContent?: string | null;
    /**
     * Localized snippet selected with the hl parameter. If no such localization exists, this field is populated with the default snippet. (Read-only)
     */
    localized?: Schema$VideoLocalization;
    /**
     * The date and time that the video was uploaded. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAt?: string | null;
    /**
     * A list of keyword tags associated with the video. Tags may contain spaces.
     */
    tags?: string[] | null;
    /**
     * A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The video&#39;s title.
     */
    title?: string | null;
  }
  /**
   * Statistics about the video, such as the number of times the video was viewed or liked.
   */
  export interface Schema$VideoStatistics {
    /**
     * The number of comments for the video.
     */
    commentCount?: string | null;
    /**
     * The number of users who have indicated that they disliked the video by giving it a negative rating.
     */
    dislikeCount?: string | null;
    /**
     * The number of users who currently have the video marked as a favorite video.
     */
    favoriteCount?: string | null;
    /**
     * The number of users who have indicated that they liked the video by giving it a positive rating.
     */
    likeCount?: string | null;
    /**
     * The number of times the video has been viewed.
     */
    viewCount?: string | null;
  }
  /**
   * Basic details about a video category, such as its localized title.
   */
  export interface Schema$VideoStatus {
    /**
     * This value indicates if the video can be embedded on another website.
     */
    embeddable?: boolean | null;
    /**
     * This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed.
     */
    failureReason?: string | null;
    /**
     * The video&#39;s license.
     */
    license?: string | null;
    /**
     * The video&#39;s privacy status.
     */
    privacyStatus?: string | null;
    /**
     * This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled.
     */
    publicStatsViewable?: boolean | null;
    /**
     * The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishAt?: string | null;
    /**
     * This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected.
     */
    rejectionReason?: string | null;
    /**
     * The status of the uploaded video.
     */
    uploadStatus?: string | null;
  }
  /**
   * Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.
   */
  export interface Schema$VideoSuggestions {
    /**
     * A list of video editing operations that might improve the video quality or playback experience of the uploaded video.
     */
    editorSuggestions?: string[] | null;
    /**
     * A list of errors that will prevent YouTube from successfully processing the uploaded video video. These errors indicate that, regardless of the video&#39;s current processing status, eventually, that status will almost certainly be failed.
     */
    processingErrors?: string[] | null;
    /**
     * A list of suggestions that may improve YouTube&#39;s ability to process the video.
     */
    processingHints?: string[] | null;
    /**
     * A list of reasons why YouTube may have difficulty transcoding the uploaded video or that might result in an erroneous transcoding. These warnings are generated before YouTube actually processes the uploaded video file. In addition, they identify issues that are unlikely to cause the video processing to fail but that might cause problems such as sync issues, video artifacts, or a missing audio track.
     */
    processingWarnings?: string[] | null;
    /**
     * A list of keyword tags that could be added to the video&#39;s metadata to increase the likelihood that users will locate your video when searching or browsing on YouTube.
     */
    tagSuggestions?: Schema$VideoSuggestionsTagSuggestion[];
  }
  /**
   * A single tag suggestion with it&#39;s relevance information.
   */
  export interface Schema$VideoSuggestionsTagSuggestion {
    /**
     * A set of video categories for which the tag is relevant. You can use this information to display appropriate tag suggestions based on the video category that the video uploader associates with the video. By default, tag suggestions are relevant for all categories if there are no restricts defined for the keyword.
     */
    categoryRestricts?: string[] | null;
    /**
     * The keyword tag suggested for the video.
     */
    tag?: string | null;
  }
  /**
   * Freebase topic information related to the video.
   */
  export interface Schema$VideoTopicDetails {
    /**
     * Similar to topic_id, except that these topics are merely relevant to the video. These are topics that may be mentioned in, or appear in the video. You can retrieve information about each topic using Freebase Topic API.
     */
    relevantTopicIds?: string[] | null;
    /**
     * A list of Wikipedia URLs that provide a high-level description of the video&#39;s content.
     */
    topicCategories?: string[] | null;
    /**
     * A list of Freebase topic IDs that are centrally associated with the video. These are topics that are centrally featured in the video, and it can be said that the video is mainly about each of these. You can retrieve information about each topic using the Freebase Topic API.
     */
    topicIds?: string[] | null;
  }
  /**
   * Branding properties for the watch. All deprecated.
   */
  export interface Schema$WatchSettings {
    /**
     * The text color for the video watch page&#39;s branded area.
     */
    backgroundColor?: string | null;
    /**
     * An ID that uniquely identifies a playlist that displays next to the video player.
     */
    featuredPlaylistId?: string | null;
    /**
     * The background color for the video watch page&#39;s branded area.
     */
    textColor?: string | null;
  }

  export class Resource$Activities {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.activities.insert
     * @desc Posts a bulletin for a specific channel. (The user submitting the request must be authorized to act on the channel's behalf.)  Note: Even though an activity resource can contain information about actions like a user rating a video or marking a video as a favorite, you need to use other API methods to generate those activity resources. For example, you would use the API's videos.rate() method to rate a video and the playlistItems.insert() method to mark a video as a favorite.
     * @alias youtube.activities.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     * @param {().Activity} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Activities$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Activity>;
    insert(
      params: Params$Resource$Activities$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Activity>,
      callback: BodyResponseCallback<Schema$Activity>
    ): void;
    insert(
      params: Params$Resource$Activities$Insert,
      callback: BodyResponseCallback<Schema$Activity>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Activity>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Activities$Insert
        | BodyResponseCallback<Schema$Activity>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Activity>,
      callback?: BodyResponseCallback<Schema$Activity>
    ): void | GaxiosPromise<Schema$Activity> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Activities$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Activities$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/activities').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Activity>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Activity>(parameters);
      }
    }

    /**
     * youtube.activities.list
     * @desc Returns a list of channel activity events that match the request criteria. For example, you can retrieve events associated with a particular channel, events associated with the user's subscriptions and Google+ friends, or the YouTube home page feed, which is customized for each user.
     * @alias youtube.activities.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.channelId The channelId parameter specifies a unique YouTube channel ID. The API will then return a list of that channel's activities.
     * @param {boolean=} params.home Set this parameter's value to true to retrieve the activity feed that displays on the YouTube home page for the currently authenticated user.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean=} params.mine Set this parameter's value to true to retrieve a feed of the authenticated user's activities.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set part=snippet, the API response will also contain all of those nested properties.
     * @param {string=} params.publishedAfter The publishedAfter parameter specifies the earliest date and time that an activity could have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be included in the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     * @param {string=} params.publishedBefore The publishedBefore parameter specifies the date and time before which an activity must have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be excluded from the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     * @param {string=} params.regionCode The regionCode parameter instructs the API to return results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code. YouTube uses this value when the authorized user's previous activity on YouTube does not provide enough information to generate the activity feed.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Activities$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ActivityListResponse>;
    list(
      params: Params$Resource$Activities$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ActivityListResponse>,
      callback: BodyResponseCallback<Schema$ActivityListResponse>
    ): void;
    list(
      params: Params$Resource$Activities$List,
      callback: BodyResponseCallback<Schema$ActivityListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ActivityListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Activities$List
        | BodyResponseCallback<Schema$ActivityListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ActivityListResponse>,
      callback?: BodyResponseCallback<Schema$ActivityListResponse>
    ): void | GaxiosPromise<Schema$ActivityListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Activities$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Activities$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/activities').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ActivityListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ActivityListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Activities$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Activity;
  }
  export interface Params$Resource$Activities$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The channelId parameter specifies a unique YouTube channel ID. The API will then return a list of that channel's activities.
     */
    channelId?: string;
    /**
     * Set this parameter's value to true to retrieve the activity feed that displays on the YouTube home page for the currently authenticated user.
     */
    home?: boolean;
    /**
     * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Set this parameter's value to true to retrieve a feed of the authenticated user's activities.
     */
    mine?: boolean;
    /**
     * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The part parameter specifies a comma-separated list of one or more activity resource properties that the API response will include.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set part=snippet, the API response will also contain all of those nested properties.
     */
    part?: string;
    /**
     * The publishedAfter parameter specifies the earliest date and time that an activity could have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be included in the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAfter?: string;
    /**
     * The publishedBefore parameter specifies the date and time before which an activity must have occurred for that activity to be included in the API response. If the parameter value specifies a day, but not a time, then any activities that occurred that day will be excluded from the result set. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedBefore?: string;
    /**
     * The regionCode parameter instructs the API to return results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code. YouTube uses this value when the authorized user's previous activity on YouTube does not provide enough information to generate the activity feed.
     */
    regionCode?: string;
  }

  export class Resource$Captions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.captions.delete
     * @desc Deletes a specified caption track.
     * @alias youtube.captions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter identifies the caption track that is being deleted. The value is a caption track ID as identified by the id property in a caption resource.
     * @param {string=} params.onBehalfOf ID of the Google+ Page for the channel that the request is be on behalf of
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Captions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Captions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Captions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Captions$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Captions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Captions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/captions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.captions.download
     * @desc Downloads a caption track. The caption track is returned in its original format unless the request specifies a value for the tfmt parameter and in its original language unless the request specifies a value for the tlang parameter.
     * @alias youtube.captions.download
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter identifies the caption track that is being retrieved. The value is a caption track ID as identified by the id property in a caption resource.
     * @param {string=} params.onBehalfOf ID of the Google+ Page for the channel that the request is be on behalf of
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.tfmt The tfmt parameter specifies that the caption track should be returned in a specific format. If the parameter is not included in the request, the track is returned in its original format.
     * @param {string=} params.tlang The tlang parameter specifies that the API response should return a translation of the specified caption track. The parameter value is an ISO 639-1 two-letter language code that identifies the desired caption language. The translation is generated by using machine translation, such as Google Translate.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    download(
      params?: Params$Resource$Captions$Download,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    download(
      params: Params$Resource$Captions$Download,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    download(
      params: Params$Resource$Captions$Download,
      callback: BodyResponseCallback<void>
    ): void;
    download(callback: BodyResponseCallback<void>): void;
    download(
      paramsOrCallback?:
        | Params$Resource$Captions$Download
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Captions$Download;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Captions$Download;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/captions/{id}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
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
     * youtube.captions.insert
     * @desc Uploads a caption track.
     * @alias youtube.captions.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOf ID of the Google+ Page for the channel that the request is be on behalf of
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The part parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet.
     * @param {boolean=} params.sync The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value to true, YouTube will disregard any time codes that are in the uploaded caption file and generate new time codes for the captions.  You should set the sync parameter to true if you are uploading a transcript, which has no time codes, or if you suspect the time codes in your file are incorrect and want YouTube to try to fix them.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Captions$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Caption>;
    insert(
      params: Params$Resource$Captions$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Caption>,
      callback: BodyResponseCallback<Schema$Caption>
    ): void;
    insert(
      params: Params$Resource$Captions$Insert,
      callback: BodyResponseCallback<Schema$Caption>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Caption>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Captions$Insert
        | BodyResponseCallback<Schema$Caption>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Caption>,
      callback?: BodyResponseCallback<Schema$Caption>
    ): void | GaxiosPromise<Schema$Caption> {
      let params = (paramsOrCallback || {}) as Params$Resource$Captions$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Captions$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/captions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/youtube/v3/captions').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Caption>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Caption>(parameters);
      }
    }

    /**
     * youtube.captions.list
     * @desc Returns a list of caption tracks that are associated with a specified video. Note that the API response does not contain the actual captions and that the captions.download method provides the ability to retrieve a caption track.
     * @alias youtube.captions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.id The id parameter specifies a comma-separated list of IDs that identify the caption resources that should be retrieved. Each ID must identify a caption track associated with the specified video.
     * @param {string=} params.onBehalfOf ID of the Google+ Page for the channel that the request is on behalf of.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The part parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
     * @param {string} params.videoId The videoId parameter specifies the YouTube video ID of the video for which the API should return caption tracks.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Captions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CaptionListResponse>;
    list(
      params: Params$Resource$Captions$List,
      options: MethodOptions | BodyResponseCallback<Schema$CaptionListResponse>,
      callback: BodyResponseCallback<Schema$CaptionListResponse>
    ): void;
    list(
      params: Params$Resource$Captions$List,
      callback: BodyResponseCallback<Schema$CaptionListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$CaptionListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Captions$List
        | BodyResponseCallback<Schema$CaptionListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CaptionListResponse>,
      callback?: BodyResponseCallback<Schema$CaptionListResponse>
    ): void | GaxiosPromise<Schema$CaptionListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Captions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Captions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/captions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part', 'videoId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CaptionListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CaptionListResponse>(parameters);
      }
    }

    /**
     * youtube.captions.update
     * @desc Updates a caption track. When updating a caption track, you can change the track's draft status, upload a new caption file for the track, or both.
     * @alias youtube.captions.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOf ID of the Google+ Page for the channel that the request is be on behalf of
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the property value to snippet if you are updating the track's draft status. Otherwise, set the property value to id.
     * @param {boolean=} params.sync Note: The API server only processes the parameter value if the request contains an updated caption file.  The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value to true, YouTube will automatically synchronize the caption track with the audio track.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Captions$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Caption>;
    update(
      params: Params$Resource$Captions$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Caption>,
      callback: BodyResponseCallback<Schema$Caption>
    ): void;
    update(
      params: Params$Resource$Captions$Update,
      callback: BodyResponseCallback<Schema$Caption>
    ): void;
    update(callback: BodyResponseCallback<Schema$Caption>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Captions$Update
        | BodyResponseCallback<Schema$Caption>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Caption>,
      callback?: BodyResponseCallback<Schema$Caption>
    ): void | GaxiosPromise<Schema$Caption> {
      let params = (paramsOrCallback || {}) as Params$Resource$Captions$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Captions$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/captions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/youtube/v3/captions').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Caption>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Caption>(parameters);
      }
    }
  }

  export interface Params$Resource$Captions$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter identifies the caption track that is being deleted. The value is a caption track ID as identified by the id property in a caption resource.
     */
    id?: string;
    /**
     * ID of the Google+ Page for the channel that the request is be on behalf of
     */
    onBehalfOf?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Captions$Download
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter identifies the caption track that is being retrieved. The value is a caption track ID as identified by the id property in a caption resource.
     */
    id?: string;
    /**
     * ID of the Google+ Page for the channel that the request is be on behalf of
     */
    onBehalfOf?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The tfmt parameter specifies that the caption track should be returned in a specific format. If the parameter is not included in the request, the track is returned in its original format.
     */
    tfmt?: string;
    /**
     * The tlang parameter specifies that the API response should return a translation of the specified caption track. The parameter value is an ISO 639-1 two-letter language code that identifies the desired caption language. The translation is generated by using machine translation, such as Google Translate.
     */
    tlang?: string;
  }
  export interface Params$Resource$Captions$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the Google+ Page for the channel that the request is be on behalf of
     */
    onBehalfOf?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The part parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet.
     */
    part?: string;
    /**
     * The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value to true, YouTube will disregard any time codes that are in the uploaded caption file and generate new time codes for the captions.  You should set the sync parameter to true if you are uploading a transcript, which has no time codes, or if you suspect the time codes in your file are incorrect and want YouTube to try to fix them.
     */
    sync?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Caption;

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
  export interface Params$Resource$Captions$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies a comma-separated list of IDs that identify the caption resources that should be retrieved. Each ID must identify a caption track associated with the specified video.
     */
    id?: string;
    /**
     * ID of the Google+ Page for the channel that the request is on behalf of.
     */
    onBehalfOf?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The part parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
     */
    part?: string;
    /**
     * The videoId parameter specifies the YouTube video ID of the video for which the API should return caption tracks.
     */
    videoId?: string;
  }
  export interface Params$Resource$Captions$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * ID of the Google+ Page for the channel that the request is be on behalf of
     */
    onBehalfOf?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the property value to snippet if you are updating the track's draft status. Otherwise, set the property value to id.
     */
    part?: string;
    /**
     * Note: The API server only processes the parameter value if the request contains an updated caption file.  The sync parameter indicates whether YouTube should automatically synchronize the caption file with the audio track of the video. If you set the value to true, YouTube will automatically synchronize the caption track with the audio track.
     */
    sync?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Caption;

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

  export class Resource$Channelbanners {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.channelBanners.insert
     * @desc Uploads a channel banner image to YouTube. This method represents the first two steps in a three-step process to update the banner image for a channel:  - Call the channelBanners.insert method to upload the binary image data to YouTube. The image must have a 16:9 aspect ratio and be at least 2120x1192 pixels. - Extract the url property's value from the response that the API returns for step 1. - Call the channels.update method to update the channel's branding settings. Set the brandingSettings.image.bannerExternalUrl property's value to the URL obtained in step 2.
     * @alias youtube.channelBanners.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.channelId The channelId parameter identifies the YouTube channel to which the banner is uploaded. The channelId parameter was introduced as a required parameter in May 2017. As this was a backward-incompatible change, channelBanners.insert requests that do not specify this parameter will not return an error until six months have passed from the time that the parameter was introduced. Please see the API Terms of Service for the official policy regarding backward incompatible changes and the API revision history for the exact date that the parameter was introduced.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Channelbanners$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChannelBannerResource>;
    insert(
      params: Params$Resource$Channelbanners$Insert,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ChannelBannerResource>,
      callback: BodyResponseCallback<Schema$ChannelBannerResource>
    ): void;
    insert(
      params: Params$Resource$Channelbanners$Insert,
      callback: BodyResponseCallback<Schema$ChannelBannerResource>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ChannelBannerResource>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Channelbanners$Insert
        | BodyResponseCallback<Schema$ChannelBannerResource>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ChannelBannerResource>,
      callback?: BodyResponseCallback<Schema$ChannelBannerResource>
    ): void | GaxiosPromise<Schema$ChannelBannerResource> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Channelbanners$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channelbanners$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/channelBanners/insert').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/youtube/v3/channelBanners/insert'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChannelBannerResource>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ChannelBannerResource>(parameters);
      }
    }
  }

  export interface Params$Resource$Channelbanners$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The channelId parameter identifies the YouTube channel to which the banner is uploaded. The channelId parameter was introduced as a required parameter in May 2017. As this was a backward-incompatible change, channelBanners.insert requests that do not specify this parameter will not return an error until six months have passed from the time that the parameter was introduced. Please see the API Terms of Service for the official policy regarding backward incompatible changes and the API revision history for the exact date that the parameter was introduced.
     */
    channelId?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ChannelBannerResource;

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

  export class Resource$Channels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.channels.list
     * @desc Returns a collection of zero or more channel resources that match the request criteria.
     * @alias youtube.channels.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.categoryId The categoryId parameter specifies a YouTube guide category, thereby requesting YouTube channels associated with that category.
     * @param {string=} params.forUsername The forUsername parameter specifies a YouTube username, thereby requesting the channel associated with that username.
     * @param {string=} params.hl The hl parameter should be used for filter out the properties that are not in the given language. Used for the brandingSettings part.
     * @param {string=} params.id The id parameter specifies a comma-separated list of the YouTube channel ID(s) for the resource(s) that are being retrieved. In a channel resource, the id property specifies the channel's YouTube channel ID.
     * @param {boolean=} params.managedByMe Note: This parameter is intended exclusively for YouTube content partners.  Set this parameter's value to true to instruct the API to only return channels managed by the content owner that the onBehalfOfContentOwner parameter specifies. The user must be authenticated as a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean=} params.mine Set this parameter's value to true to instruct the API to only return channels owned by the authenticated user.
     * @param {boolean=} params.mySubscribers Use the subscriptions.list method and its mySubscribers parameter to retrieve a list of subscribers to the authenticated user's channel.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part The part parameter specifies a comma-separated list of one or more channel resource properties that the API response will include.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set part=contentDetails, the API response will also contain all of those nested properties.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Channels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChannelListResponse>;
    list(
      params: Params$Resource$Channels$List,
      options: MethodOptions | BodyResponseCallback<Schema$ChannelListResponse>,
      callback: BodyResponseCallback<Schema$ChannelListResponse>
    ): void;
    list(
      params: Params$Resource$Channels$List,
      callback: BodyResponseCallback<Schema$ChannelListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ChannelListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Channels$List
        | BodyResponseCallback<Schema$ChannelListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ChannelListResponse>,
      callback?: BodyResponseCallback<Schema$ChannelListResponse>
    ): void | GaxiosPromise<Schema$ChannelListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Channels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/channels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChannelListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ChannelListResponse>(parameters);
      }
    }

    /**
     * youtube.channels.update
     * @desc Updates a channel's metadata. Note that this method currently only supports updates to the channel resource's brandingSettings and invideoPromotion objects and their child properties.
     * @alias youtube.channels.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The API currently only allows the parameter value to be set to either brandingSettings or invideoPromotion. (You cannot update both of those parts with a single request.)  Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.
     * @param {().Channel} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Channels$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Channel>;
    update(
      params: Params$Resource$Channels$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    update(
      params: Params$Resource$Channels$Update,
      callback: BodyResponseCallback<Schema$Channel>
    ): void;
    update(callback: BodyResponseCallback<Schema$Channel>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Channels$Update
        | BodyResponseCallback<Schema$Channel>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Channel>,
      callback?: BodyResponseCallback<Schema$Channel>
    ): void | GaxiosPromise<Schema$Channel> {
      let params = (paramsOrCallback || {}) as Params$Resource$Channels$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channels$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/channels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Channel>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }

  export interface Params$Resource$Channels$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The categoryId parameter specifies a YouTube guide category, thereby requesting YouTube channels associated with that category.
     */
    categoryId?: string;
    /**
     * The forUsername parameter specifies a YouTube username, thereby requesting the channel associated with that username.
     */
    forUsername?: string;
    /**
     * The hl parameter should be used for filter out the properties that are not in the given language. Used for the brandingSettings part.
     */
    hl?: string;
    /**
     * The id parameter specifies a comma-separated list of the YouTube channel ID(s) for the resource(s) that are being retrieved. In a channel resource, the id property specifies the channel's YouTube channel ID.
     */
    id?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  Set this parameter's value to true to instruct the API to only return channels managed by the content owner that the onBehalfOfContentOwner parameter specifies. The user must be authenticated as a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
     */
    managedByMe?: boolean;
    /**
     * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Set this parameter's value to true to instruct the API to only return channels owned by the authenticated user.
     */
    mine?: boolean;
    /**
     * Use the subscriptions.list method and its mySubscribers parameter to retrieve a list of subscribers to the authenticated user's channel.
     */
    mySubscribers?: boolean;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The part parameter specifies a comma-separated list of one or more channel resource properties that the API response will include.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set part=contentDetails, the API response will also contain all of those nested properties.
     */
    part?: string;
  }
  export interface Params$Resource$Channels$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The onBehalfOfContentOwner parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The API currently only allows the parameter value to be set to either brandingSettings or invideoPromotion. (You cannot update both of those parts with a single request.)  Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Channel;
  }

  export class Resource$Channelsections {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.channelSections.delete
     * @desc Deletes a channelSection.
     * @alias youtube.channelSections.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies the YouTube channelSection ID for the resource that is being deleted. In a channelSection resource, the id property specifies the YouTube channelSection ID.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Channelsections$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Channelsections$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Channelsections$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Channelsections$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Channelsections$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channelsections$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/channelSections').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.channelSections.insert
     * @desc Adds a channelSection for the authenticated user's channel.
     * @alias youtube.channelSections.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part names that you can include in the parameter value are snippet and contentDetails.
     * @param {().ChannelSection} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Channelsections$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChannelSection>;
    insert(
      params: Params$Resource$Channelsections$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$ChannelSection>,
      callback: BodyResponseCallback<Schema$ChannelSection>
    ): void;
    insert(
      params: Params$Resource$Channelsections$Insert,
      callback: BodyResponseCallback<Schema$ChannelSection>
    ): void;
    insert(callback: BodyResponseCallback<Schema$ChannelSection>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Channelsections$Insert
        | BodyResponseCallback<Schema$ChannelSection>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ChannelSection>,
      callback?: BodyResponseCallback<Schema$ChannelSection>
    ): void | GaxiosPromise<Schema$ChannelSection> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Channelsections$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channelsections$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/channelSections').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChannelSection>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ChannelSection>(parameters);
      }
    }

    /**
     * youtube.channelSections.list
     * @desc Returns channelSection resources that match the API request criteria.
     * @alias youtube.channelSections.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.channelId The channelId parameter specifies a YouTube channel ID. The API will only return that channel's channelSections.
     * @param {string=} params.hl The hl parameter indicates that the snippet.localized property values in the returned channelSection resources should be in the specified language if localized values for that language are available. For example, if the API request specifies hl=de, the snippet.localized properties in the API response will contain German titles if German titles are available. Channel owners can provide localized channel section titles using either the channelSections.insert or channelSections.update method.
     * @param {string=} params.id The id parameter specifies a comma-separated list of the YouTube channelSection ID(s) for the resource(s) that are being retrieved. In a channelSection resource, the id property specifies the YouTube channelSection ID.
     * @param {boolean=} params.mine Set this parameter's value to true to retrieve a feed of the authenticated user's channelSections.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The part parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set part=snippet, the API response will also contain all of those nested properties.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Channelsections$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChannelSectionListResponse>;
    list(
      params: Params$Resource$Channelsections$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ChannelSectionListResponse>,
      callback: BodyResponseCallback<Schema$ChannelSectionListResponse>
    ): void;
    list(
      params: Params$Resource$Channelsections$List,
      callback: BodyResponseCallback<Schema$ChannelSectionListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ChannelSectionListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Channelsections$List
        | BodyResponseCallback<Schema$ChannelSectionListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ChannelSectionListResponse>,
      callback?: BodyResponseCallback<Schema$ChannelSectionListResponse>
    ): void | GaxiosPromise<Schema$ChannelSectionListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Channelsections$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channelsections$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/channelSections').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChannelSectionListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$ChannelSectionListResponse>(parameters);
      }
    }

    /**
     * youtube.channelSections.update
     * @desc Update a channelSection.
     * @alias youtube.channelSections.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part names that you can include in the parameter value are snippet and contentDetails.
     * @param {().ChannelSection} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Channelsections$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChannelSection>;
    update(
      params: Params$Resource$Channelsections$Update,
      options: MethodOptions | BodyResponseCallback<Schema$ChannelSection>,
      callback: BodyResponseCallback<Schema$ChannelSection>
    ): void;
    update(
      params: Params$Resource$Channelsections$Update,
      callback: BodyResponseCallback<Schema$ChannelSection>
    ): void;
    update(callback: BodyResponseCallback<Schema$ChannelSection>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Channelsections$Update
        | BodyResponseCallback<Schema$ChannelSection>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ChannelSection>,
      callback?: BodyResponseCallback<Schema$ChannelSection>
    ): void | GaxiosPromise<Schema$ChannelSection> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Channelsections$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Channelsections$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/channelSections').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ChannelSection>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ChannelSection>(parameters);
      }
    }
  }

  export interface Params$Resource$Channelsections$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies the YouTube channelSection ID for the resource that is being deleted. In a channelSection resource, the id property specifies the YouTube channelSection ID.
     */
    id?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Channelsections$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part names that you can include in the parameter value are snippet and contentDetails.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ChannelSection;
  }
  export interface Params$Resource$Channelsections$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The channelId parameter specifies a YouTube channel ID. The API will only return that channel's channelSections.
     */
    channelId?: string;
    /**
     * The hl parameter indicates that the snippet.localized property values in the returned channelSection resources should be in the specified language if localized values for that language are available. For example, if the API request specifies hl=de, the snippet.localized properties in the API response will contain German titles if German titles are available. Channel owners can provide localized channel section titles using either the channelSections.insert or channelSections.update method.
     */
    hl?: string;
    /**
     * The id parameter specifies a comma-separated list of the YouTube channelSection ID(s) for the resource(s) that are being retrieved. In a channelSection resource, the id property specifies the YouTube channelSection ID.
     */
    id?: string;
    /**
     * Set this parameter's value to true to retrieve a feed of the authenticated user's channelSections.
     */
    mine?: boolean;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The part parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set part=snippet, the API response will also contain all of those nested properties.
     */
    part?: string;
  }
  export interface Params$Resource$Channelsections$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part names that you can include in the parameter value are snippet and contentDetails.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ChannelSection;
  }

  export class Resource$Comments {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.comments.delete
     * @desc Deletes a comment.
     * @alias youtube.comments.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies the comment ID for the resource that is being deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Comments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Comments$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Comments$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Comments$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/comments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.comments.insert
     * @desc Creates a reply to an existing comment. Note: To create a top-level comment, use the commentThreads.insert method.
     * @alias youtube.comments.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
     * @param {().Comment} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Comments$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Comment>;
    insert(
      params: Params$Resource$Comments$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    insert(
      params: Params$Resource$Comments$Insert,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Comment>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Comments$Insert
        | BodyResponseCallback<Schema$Comment>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>
    ): void | GaxiosPromise<Schema$Comment> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/comments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Comment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }

    /**
     * youtube.comments.list
     * @desc Returns a list of comments that match the API request parameters.
     * @alias youtube.comments.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.id The id parameter specifies a comma-separated list of comment IDs for the resources that are being retrieved. In a comment resource, the id property specifies the comment's ID.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.  Note: This parameter is not supported for use in conjunction with the id parameter.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.  Note: This parameter is not supported for use in conjunction with the id parameter.
     * @param {string=} params.parentId The parentId parameter specifies the ID of the comment for which replies should be retrieved.  Note: YouTube currently supports replies only for top-level comments. However, replies to replies may be supported in the future.
     * @param {string} params.part The part parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.
     * @param {string=} params.textFormat This parameter indicates whether the API should return comments formatted as HTML or as plain text.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Comments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CommentListResponse>;
    list(
      params: Params$Resource$Comments$List,
      options: MethodOptions | BodyResponseCallback<Schema$CommentListResponse>,
      callback: BodyResponseCallback<Schema$CommentListResponse>
    ): void;
    list(
      params: Params$Resource$Comments$List,
      callback: BodyResponseCallback<Schema$CommentListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$CommentListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Comments$List
        | BodyResponseCallback<Schema$CommentListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CommentListResponse>,
      callback?: BodyResponseCallback<Schema$CommentListResponse>
    ): void | GaxiosPromise<Schema$CommentListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/comments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommentListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CommentListResponse>(parameters);
      }
    }

    /**
     * youtube.comments.markAsSpam
     * @desc Expresses the caller's opinion that one or more comments should be flagged as spam.
     * @alias youtube.comments.markAsSpam
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies a comma-separated list of IDs of comments that the caller believes should be classified as spam.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    markAsSpam(
      params?: Params$Resource$Comments$Markasspam,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    markAsSpam(
      params: Params$Resource$Comments$Markasspam,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    markAsSpam(
      params: Params$Resource$Comments$Markasspam,
      callback: BodyResponseCallback<void>
    ): void;
    markAsSpam(callback: BodyResponseCallback<void>): void;
    markAsSpam(
      paramsOrCallback?:
        | Params$Resource$Comments$Markasspam
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Comments$Markasspam;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Markasspam;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/comments/markAsSpam').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.comments.setModerationStatus
     * @desc Sets the moderation status of one or more comments. The API request must be authorized by the owner of the channel or video associated with the comments.
     * @alias youtube.comments.setModerationStatus
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.banAuthor The banAuthor parameter lets you indicate that you want to automatically reject any additional comments written by the comment's author. Set the parameter value to true to ban the author.  Note: This parameter is only valid if the moderationStatus parameter is also set to rejected.
     * @param {string} params.id The id parameter specifies a comma-separated list of IDs that identify the comments for which you are updating the moderation status.
     * @param {string} params.moderationStatus Identifies the new moderation status of the specified comments.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setModerationStatus(
      params?: Params$Resource$Comments$Setmoderationstatus,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    setModerationStatus(
      params: Params$Resource$Comments$Setmoderationstatus,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    setModerationStatus(
      params: Params$Resource$Comments$Setmoderationstatus,
      callback: BodyResponseCallback<void>
    ): void;
    setModerationStatus(callback: BodyResponseCallback<void>): void;
    setModerationStatus(
      paramsOrCallback?:
        | Params$Resource$Comments$Setmoderationstatus
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Comments$Setmoderationstatus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Setmoderationstatus;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/comments/setModerationStatus').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['id', 'moderationStatus'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.comments.update
     * @desc Modifies a comment.
     * @alias youtube.comments.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The part parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
     * @param {().Comment} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Comments$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Comment>;
    update(
      params: Params$Resource$Comments$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    update(
      params: Params$Resource$Comments$Update,
      callback: BodyResponseCallback<Schema$Comment>
    ): void;
    update(callback: BodyResponseCallback<Schema$Comment>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Comments$Update
        | BodyResponseCallback<Schema$Comment>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Comment>,
      callback?: BodyResponseCallback<Schema$Comment>
    ): void | GaxiosPromise<Schema$Comment> {
      let params = (paramsOrCallback || {}) as Params$Resource$Comments$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Comments$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/comments').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Comment>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }
  }

  export interface Params$Resource$Comments$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies the comment ID for the resource that is being deleted.
     */
    id?: string;
  }
  export interface Params$Resource$Comments$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Comment;
  }
  export interface Params$Resource$Comments$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies a comma-separated list of comment IDs for the resources that are being retrieved. In a comment resource, the id property specifies the comment's ID.
     */
    id?: string;
    /**
     * The maxResults parameter specifies the maximum number of items that should be returned in the result set.  Note: This parameter is not supported for use in conjunction with the id parameter.
     */
    maxResults?: number;
    /**
     * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.  Note: This parameter is not supported for use in conjunction with the id parameter.
     */
    pageToken?: string;
    /**
     * The parentId parameter specifies the ID of the comment for which replies should be retrieved.  Note: YouTube currently supports replies only for top-level comments. However, replies to replies may be supported in the future.
     */
    parentId?: string;
    /**
     * The part parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.
     */
    part?: string;
    /**
     * This parameter indicates whether the API should return comments formatted as HTML or as plain text.
     */
    textFormat?: string;
  }
  export interface Params$Resource$Comments$Markasspam
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies a comma-separated list of IDs of comments that the caller believes should be classified as spam.
     */
    id?: string;
  }
  export interface Params$Resource$Comments$Setmoderationstatus
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The banAuthor parameter lets you indicate that you want to automatically reject any additional comments written by the comment's author. Set the parameter value to true to ban the author.  Note: This parameter is only valid if the moderationStatus parameter is also set to rejected.
     */
    banAuthor?: boolean;
    /**
     * The id parameter specifies a comma-separated list of IDs that identify the comments for which you are updating the moderation status.
     */
    id?: string;
    /**
     * Identifies the new moderation status of the specified comments.
     */
    moderationStatus?: string;
  }
  export interface Params$Resource$Comments$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The part parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Comment;
  }

  export class Resource$Commentthreads {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.commentThreads.insert
     * @desc Creates a new top-level comment. To add a reply to an existing comment, use the comments.insert method instead.
     * @alias youtube.commentThreads.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
     * @param {().CommentThread} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Commentthreads$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CommentThread>;
    insert(
      params: Params$Resource$Commentthreads$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$CommentThread>,
      callback: BodyResponseCallback<Schema$CommentThread>
    ): void;
    insert(
      params: Params$Resource$Commentthreads$Insert,
      callback: BodyResponseCallback<Schema$CommentThread>
    ): void;
    insert(callback: BodyResponseCallback<Schema$CommentThread>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Commentthreads$Insert
        | BodyResponseCallback<Schema$CommentThread>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CommentThread>,
      callback?: BodyResponseCallback<Schema$CommentThread>
    ): void | GaxiosPromise<Schema$CommentThread> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Commentthreads$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Commentthreads$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/commentThreads').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommentThread>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CommentThread>(parameters);
      }
    }

    /**
     * youtube.commentThreads.list
     * @desc Returns a list of comment threads that match the API request parameters.
     * @alias youtube.commentThreads.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.allThreadsRelatedToChannelId The allThreadsRelatedToChannelId parameter instructs the API to return all comment threads associated with the specified channel. The response can include comments about the channel or about the channel's videos.
     * @param {string=} params.channelId The channelId parameter instructs the API to return comment threads containing comments about the specified channel. (The response will not include comments left on videos that the channel uploaded.)
     * @param {string=} params.id The id parameter specifies a comma-separated list of comment thread IDs for the resources that should be retrieved.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.  Note: This parameter is not supported for use in conjunction with the id parameter.
     * @param {string=} params.moderationStatus Set this parameter to limit the returned comment threads to a particular moderation state.  Note: This parameter is not supported for use in conjunction with the id parameter.
     * @param {string=} params.order The order parameter specifies the order in which the API response should list comment threads. Valid values are:  - time - Comment threads are ordered by time. This is the default behavior. - relevance - Comment threads are ordered by relevance.Note: This parameter is not supported for use in conjunction with the id parameter.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.  Note: This parameter is not supported for use in conjunction with the id parameter.
     * @param {string} params.part The part parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.
     * @param {string=} params.searchTerms The searchTerms parameter instructs the API to limit the API response to only contain comments that contain the specified search terms.  Note: This parameter is not supported for use in conjunction with the id parameter.
     * @param {string=} params.textFormat Set this parameter's value to html or plainText to instruct the API to return the comments left by users in html formatted or in plain text.
     * @param {string=} params.videoId The videoId parameter instructs the API to return comment threads associated with the specified video ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Commentthreads$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CommentThreadListResponse>;
    list(
      params: Params$Resource$Commentthreads$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CommentThreadListResponse>,
      callback: BodyResponseCallback<Schema$CommentThreadListResponse>
    ): void;
    list(
      params: Params$Resource$Commentthreads$List,
      callback: BodyResponseCallback<Schema$CommentThreadListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$CommentThreadListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Commentthreads$List
        | BodyResponseCallback<Schema$CommentThreadListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CommentThreadListResponse>,
      callback?: BodyResponseCallback<Schema$CommentThreadListResponse>
    ): void | GaxiosPromise<Schema$CommentThreadListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Commentthreads$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Commentthreads$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/commentThreads').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommentThreadListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$CommentThreadListResponse>(parameters);
      }
    }

    /**
     * youtube.commentThreads.update
     * @desc Modifies the top-level comment in a comment thread.
     * @alias youtube.commentThreads.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The part parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
     * @param {().CommentThread} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Commentthreads$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CommentThread>;
    update(
      params: Params$Resource$Commentthreads$Update,
      options: MethodOptions | BodyResponseCallback<Schema$CommentThread>,
      callback: BodyResponseCallback<Schema$CommentThread>
    ): void;
    update(
      params: Params$Resource$Commentthreads$Update,
      callback: BodyResponseCallback<Schema$CommentThread>
    ): void;
    update(callback: BodyResponseCallback<Schema$CommentThread>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Commentthreads$Update
        | BodyResponseCallback<Schema$CommentThread>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$CommentThread>,
      callback?: BodyResponseCallback<Schema$CommentThread>
    ): void | GaxiosPromise<Schema$CommentThread> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Commentthreads$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Commentthreads$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/commentThreads').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CommentThread>(parameters, callback);
      } else {
        return createAPIRequest<Schema$CommentThread>(parameters);
      }
    }
  }

  export interface Params$Resource$Commentthreads$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The part parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommentThread;
  }
  export interface Params$Resource$Commentthreads$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The allThreadsRelatedToChannelId parameter instructs the API to return all comment threads associated with the specified channel. The response can include comments about the channel or about the channel's videos.
     */
    allThreadsRelatedToChannelId?: string;
    /**
     * The channelId parameter instructs the API to return comment threads containing comments about the specified channel. (The response will not include comments left on videos that the channel uploaded.)
     */
    channelId?: string;
    /**
     * The id parameter specifies a comma-separated list of comment thread IDs for the resources that should be retrieved.
     */
    id?: string;
    /**
     * The maxResults parameter specifies the maximum number of items that should be returned in the result set.  Note: This parameter is not supported for use in conjunction with the id parameter.
     */
    maxResults?: number;
    /**
     * Set this parameter to limit the returned comment threads to a particular moderation state.  Note: This parameter is not supported for use in conjunction with the id parameter.
     */
    moderationStatus?: string;
    /**
     * The order parameter specifies the order in which the API response should list comment threads. Valid values are:  - time - Comment threads are ordered by time. This is the default behavior. - relevance - Comment threads are ordered by relevance.Note: This parameter is not supported for use in conjunction with the id parameter.
     */
    order?: string;
    /**
     * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page of the result that can be retrieved.  Note: This parameter is not supported for use in conjunction with the id parameter.
     */
    pageToken?: string;
    /**
     * The part parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.
     */
    part?: string;
    /**
     * The searchTerms parameter instructs the API to limit the API response to only contain comments that contain the specified search terms.  Note: This parameter is not supported for use in conjunction with the id parameter.
     */
    searchTerms?: string;
    /**
     * Set this parameter's value to html or plainText to instruct the API to return the comments left by users in html formatted or in plain text.
     */
    textFormat?: string;
    /**
     * The videoId parameter instructs the API to return comment threads associated with the specified video ID.
     */
    videoId?: string;
  }
  export interface Params$Resource$Commentthreads$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The part parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommentThread;
  }

  export class Resource$Guidecategories {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.guideCategories.list
     * @desc Returns a list of categories that can be associated with YouTube channels.
     * @alias youtube.guideCategories.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hl The hl parameter specifies the language that will be used for text values in the API response.
     * @param {string=} params.id The id parameter specifies a comma-separated list of the YouTube channel category ID(s) for the resource(s) that are being retrieved. In a guideCategory resource, the id property specifies the YouTube channel category ID.
     * @param {string} params.part The part parameter specifies the guideCategory resource properties that the API response will include. Set the parameter value to snippet.
     * @param {string=} params.regionCode The regionCode parameter instructs the API to return the list of guide categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Guidecategories$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GuideCategoryListResponse>;
    list(
      params: Params$Resource$Guidecategories$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GuideCategoryListResponse>,
      callback: BodyResponseCallback<Schema$GuideCategoryListResponse>
    ): void;
    list(
      params: Params$Resource$Guidecategories$List,
      callback: BodyResponseCallback<Schema$GuideCategoryListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GuideCategoryListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Guidecategories$List
        | BodyResponseCallback<Schema$GuideCategoryListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GuideCategoryListResponse>,
      callback?: BodyResponseCallback<Schema$GuideCategoryListResponse>
    ): void | GaxiosPromise<Schema$GuideCategoryListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Guidecategories$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Guidecategories$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/guideCategories').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GuideCategoryListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GuideCategoryListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Guidecategories$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hl parameter specifies the language that will be used for text values in the API response.
     */
    hl?: string;
    /**
     * The id parameter specifies a comma-separated list of the YouTube channel category ID(s) for the resource(s) that are being retrieved. In a guideCategory resource, the id property specifies the YouTube channel category ID.
     */
    id?: string;
    /**
     * The part parameter specifies the guideCategory resource properties that the API response will include. Set the parameter value to snippet.
     */
    part?: string;
    /**
     * The regionCode parameter instructs the API to return the list of guide categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
     */
    regionCode?: string;
  }

  export class Resource$I18nlanguages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.i18nLanguages.list
     * @desc Returns a list of application languages that the YouTube website supports.
     * @alias youtube.i18nLanguages.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hl The hl parameter specifies the language that should be used for text values in the API response.
     * @param {string} params.part The part parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$I18nlanguages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$I18nLanguageListResponse>;
    list(
      params: Params$Resource$I18nlanguages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$I18nLanguageListResponse>,
      callback: BodyResponseCallback<Schema$I18nLanguageListResponse>
    ): void;
    list(
      params: Params$Resource$I18nlanguages$List,
      callback: BodyResponseCallback<Schema$I18nLanguageListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$I18nLanguageListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$I18nlanguages$List
        | BodyResponseCallback<Schema$I18nLanguageListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$I18nLanguageListResponse>,
      callback?: BodyResponseCallback<Schema$I18nLanguageListResponse>
    ): void | GaxiosPromise<Schema$I18nLanguageListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$I18nlanguages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$I18nlanguages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/i18nLanguages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$I18nLanguageListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$I18nLanguageListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$I18nlanguages$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hl parameter specifies the language that should be used for text values in the API response.
     */
    hl?: string;
    /**
     * The part parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.
     */
    part?: string;
  }

  export class Resource$I18nregions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.i18nRegions.list
     * @desc Returns a list of content regions that the YouTube website supports.
     * @alias youtube.i18nRegions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hl The hl parameter specifies the language that should be used for text values in the API response.
     * @param {string} params.part The part parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$I18nregions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$I18nRegionListResponse>;
    list(
      params: Params$Resource$I18nregions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$I18nRegionListResponse>,
      callback: BodyResponseCallback<Schema$I18nRegionListResponse>
    ): void;
    list(
      params: Params$Resource$I18nregions$List,
      callback: BodyResponseCallback<Schema$I18nRegionListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$I18nRegionListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$I18nregions$List
        | BodyResponseCallback<Schema$I18nRegionListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$I18nRegionListResponse>,
      callback?: BodyResponseCallback<Schema$I18nRegionListResponse>
    ): void | GaxiosPromise<Schema$I18nRegionListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$I18nregions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$I18nregions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/i18nRegions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$I18nRegionListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$I18nRegionListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$I18nregions$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hl parameter specifies the language that should be used for text values in the API response.
     */
    hl?: string;
    /**
     * The part parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet.
     */
    part?: string;
  }

  export class Resource$Livebroadcasts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.liveBroadcasts.bind
     * @desc Binds a YouTube broadcast to a stream or removes an existing binding between a broadcast and a stream. A broadcast can only be bound to one video stream, though a video stream may be bound to more than one broadcast.
     * @alias youtube.liveBroadcasts.bind
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies the unique ID of the broadcast that is being bound to a video stream.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param {string=} params.streamId The streamId parameter specifies the unique ID of the video stream that is being bound to a broadcast. If this parameter is omitted, the API will remove any existing binding between the broadcast and a video stream.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    bind(
      params?: Params$Resource$Livebroadcasts$Bind,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveBroadcast>;
    bind(
      params: Params$Resource$Livebroadcasts$Bind,
      options: MethodOptions | BodyResponseCallback<Schema$LiveBroadcast>,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    bind(
      params: Params$Resource$Livebroadcasts$Bind,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    bind(callback: BodyResponseCallback<Schema$LiveBroadcast>): void;
    bind(
      paramsOrCallback?:
        | Params$Resource$Livebroadcasts$Bind
        | BodyResponseCallback<Schema$LiveBroadcast>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveBroadcast>,
      callback?: BodyResponseCallback<Schema$LiveBroadcast>
    ): void | GaxiosPromise<Schema$LiveBroadcast> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livebroadcasts$Bind;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livebroadcasts$Bind;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveBroadcasts/bind').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['id', 'part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveBroadcast>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LiveBroadcast>(parameters);
      }
    }

    /**
     * youtube.liveBroadcasts.control
     * @desc Controls the settings for a slate that can be displayed in the broadcast stream.
     * @alias youtube.liveBroadcasts.control
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.displaySlate The displaySlate parameter specifies whether the slate is being enabled or disabled.
     * @param {string} params.id The id parameter specifies the YouTube live broadcast ID that uniquely identifies the broadcast in which the slate is being updated.
     * @param {string=} params.offsetTimeMs The offsetTimeMs parameter specifies a positive time offset when the specified slate change will occur. The value is measured in milliseconds from the beginning of the broadcast's monitor stream, which is the time that the testing phase for the broadcast began. Even though it is specified in milliseconds, the value is actually an approximation, and YouTube completes the requested action as closely as possible to that time.  If you do not specify a value for this parameter, then YouTube performs the action as soon as possible. See the Getting started guide for more details.  Important: You should only specify a value for this parameter if your broadcast stream is delayed.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param {string=} params.walltime The walltime parameter specifies the wall clock time at which the specified slate change will occur. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    control(
      params?: Params$Resource$Livebroadcasts$Control,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveBroadcast>;
    control(
      params: Params$Resource$Livebroadcasts$Control,
      options: MethodOptions | BodyResponseCallback<Schema$LiveBroadcast>,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    control(
      params: Params$Resource$Livebroadcasts$Control,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    control(callback: BodyResponseCallback<Schema$LiveBroadcast>): void;
    control(
      paramsOrCallback?:
        | Params$Resource$Livebroadcasts$Control
        | BodyResponseCallback<Schema$LiveBroadcast>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveBroadcast>,
      callback?: BodyResponseCallback<Schema$LiveBroadcast>
    ): void | GaxiosPromise<Schema$LiveBroadcast> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livebroadcasts$Control;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livebroadcasts$Control;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveBroadcasts/control').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['id', 'part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveBroadcast>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LiveBroadcast>(parameters);
      }
    }

    /**
     * youtube.liveBroadcasts.delete
     * @desc Deletes a broadcast.
     * @alias youtube.liveBroadcasts.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies the YouTube live broadcast ID for the resource that is being deleted.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Livebroadcasts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Livebroadcasts$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Livebroadcasts$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Livebroadcasts$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livebroadcasts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livebroadcasts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveBroadcasts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.liveBroadcasts.insert
     * @desc Creates a broadcast.
     * @alias youtube.liveBroadcasts.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param {().LiveBroadcast} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Livebroadcasts$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveBroadcast>;
    insert(
      params: Params$Resource$Livebroadcasts$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LiveBroadcast>,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    insert(
      params: Params$Resource$Livebroadcasts$Insert,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LiveBroadcast>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Livebroadcasts$Insert
        | BodyResponseCallback<Schema$LiveBroadcast>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveBroadcast>,
      callback?: BodyResponseCallback<Schema$LiveBroadcast>
    ): void | GaxiosPromise<Schema$LiveBroadcast> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livebroadcasts$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livebroadcasts$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveBroadcasts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveBroadcast>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LiveBroadcast>(parameters);
      }
    }

    /**
     * youtube.liveBroadcasts.list
     * @desc Returns a list of YouTube broadcasts that match the API request parameters.
     * @alias youtube.liveBroadcasts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.broadcastStatus The broadcastStatus parameter filters the API response to only include broadcasts with the specified status.
     * @param {string=} params.broadcastType The broadcastType parameter filters the API response to only include broadcasts with the specified type. This is only compatible with the mine filter for now.
     * @param {string=} params.id The id parameter specifies a comma-separated list of YouTube broadcast IDs that identify the broadcasts being retrieved. In a liveBroadcast resource, the id property specifies the broadcast's ID.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean=} params.mine The mine parameter can be used to instruct the API to only return broadcasts owned by the authenticated user. Set the parameter value to true to only retrieve your own broadcasts.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Livebroadcasts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveBroadcastListResponse>;
    list(
      params: Params$Resource$Livebroadcasts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveBroadcastListResponse>,
      callback: BodyResponseCallback<Schema$LiveBroadcastListResponse>
    ): void;
    list(
      params: Params$Resource$Livebroadcasts$List,
      callback: BodyResponseCallback<Schema$LiveBroadcastListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$LiveBroadcastListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Livebroadcasts$List
        | BodyResponseCallback<Schema$LiveBroadcastListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveBroadcastListResponse>,
      callback?: BodyResponseCallback<Schema$LiveBroadcastListResponse>
    ): void | GaxiosPromise<Schema$LiveBroadcastListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livebroadcasts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livebroadcasts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveBroadcasts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveBroadcastListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$LiveBroadcastListResponse>(parameters);
      }
    }

    /**
     * youtube.liveBroadcasts.transition
     * @desc Changes the status of a YouTube live broadcast and initiates any processes associated with the new status. For example, when you transition a broadcast's status to testing, YouTube starts to transmit video to that broadcast's monitor stream. Before calling this method, you should confirm that the value of the status.streamStatus property for the stream bound to your broadcast is active.
     * @alias youtube.liveBroadcasts.transition
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.broadcastStatus The broadcastStatus parameter identifies the state to which the broadcast is changing. Note that to transition a broadcast to either the testing or live state, the status.streamStatus must be active for the stream that the broadcast is bound to.
     * @param {string} params.id The id parameter specifies the unique ID of the broadcast that is transitioning to another status.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    transition(
      params?: Params$Resource$Livebroadcasts$Transition,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveBroadcast>;
    transition(
      params: Params$Resource$Livebroadcasts$Transition,
      options: MethodOptions | BodyResponseCallback<Schema$LiveBroadcast>,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    transition(
      params: Params$Resource$Livebroadcasts$Transition,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    transition(callback: BodyResponseCallback<Schema$LiveBroadcast>): void;
    transition(
      paramsOrCallback?:
        | Params$Resource$Livebroadcasts$Transition
        | BodyResponseCallback<Schema$LiveBroadcast>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveBroadcast>,
      callback?: BodyResponseCallback<Schema$LiveBroadcast>
    ): void | GaxiosPromise<Schema$LiveBroadcast> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livebroadcasts$Transition;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livebroadcasts$Transition;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveBroadcasts/transition').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['broadcastStatus', 'id', 'part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveBroadcast>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LiveBroadcast>(parameters);
      }
    }

    /**
     * youtube.liveBroadcasts.update
     * @desc Updates a broadcast. For example, you could modify the broadcast settings defined in the liveBroadcast resource's contentDetails object.
     * @alias youtube.liveBroadcasts.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.  Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.
     * @param {().LiveBroadcast} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Livebroadcasts$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveBroadcast>;
    update(
      params: Params$Resource$Livebroadcasts$Update,
      options: MethodOptions | BodyResponseCallback<Schema$LiveBroadcast>,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    update(
      params: Params$Resource$Livebroadcasts$Update,
      callback: BodyResponseCallback<Schema$LiveBroadcast>
    ): void;
    update(callback: BodyResponseCallback<Schema$LiveBroadcast>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Livebroadcasts$Update
        | BodyResponseCallback<Schema$LiveBroadcast>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveBroadcast>,
      callback?: BodyResponseCallback<Schema$LiveBroadcast>
    ): void | GaxiosPromise<Schema$LiveBroadcast> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livebroadcasts$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livebroadcasts$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveBroadcasts').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveBroadcast>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LiveBroadcast>(parameters);
      }
    }
  }

  export interface Params$Resource$Livebroadcasts$Bind
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies the unique ID of the broadcast that is being bound to a video stream.
     */
    id?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     */
    part?: string;
    /**
     * The streamId parameter specifies the unique ID of the video stream that is being bound to a broadcast. If this parameter is omitted, the API will remove any existing binding between the broadcast and a video stream.
     */
    streamId?: string;
  }
  export interface Params$Resource$Livebroadcasts$Control
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The displaySlate parameter specifies whether the slate is being enabled or disabled.
     */
    displaySlate?: boolean;
    /**
     * The id parameter specifies the YouTube live broadcast ID that uniquely identifies the broadcast in which the slate is being updated.
     */
    id?: string;
    /**
     * The offsetTimeMs parameter specifies a positive time offset when the specified slate change will occur. The value is measured in milliseconds from the beginning of the broadcast's monitor stream, which is the time that the testing phase for the broadcast began. Even though it is specified in milliseconds, the value is actually an approximation, and YouTube completes the requested action as closely as possible to that time.  If you do not specify a value for this parameter, then YouTube performs the action as soon as possible. See the Getting started guide for more details.  Important: You should only specify a value for this parameter if your broadcast stream is delayed.
     */
    offsetTimeMs?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     */
    part?: string;
    /**
     * The walltime parameter specifies the wall clock time at which the specified slate change will occur. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.
     */
    walltime?: string;
  }
  export interface Params$Resource$Livebroadcasts$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies the YouTube live broadcast ID for the resource that is being deleted.
     */
    id?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
  }
  export interface Params$Resource$Livebroadcasts$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveBroadcast;
  }
  export interface Params$Resource$Livebroadcasts$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The broadcastStatus parameter filters the API response to only include broadcasts with the specified status.
     */
    broadcastStatus?: string;
    /**
     * The broadcastType parameter filters the API response to only include broadcasts with the specified type. This is only compatible with the mine filter for now.
     */
    broadcastType?: string;
    /**
     * The id parameter specifies a comma-separated list of YouTube broadcast IDs that identify the broadcasts being retrieved. In a liveBroadcast resource, the id property specifies the broadcast's ID.
     */
    id?: string;
    /**
     * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * The mine parameter can be used to instruct the API to only return broadcasts owned by the authenticated user. Set the parameter value to true to only retrieve your own broadcasts.
     */
    mine?: boolean;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     */
    part?: string;
  }
  export interface Params$Resource$Livebroadcasts$Transition
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The broadcastStatus parameter identifies the state to which the broadcast is changing. Note that to transition a broadcast to either the testing or live state, the status.streamStatus must be active for the stream that the broadcast is bound to.
     */
    broadcastStatus?: string;
    /**
     * The id parameter specifies the unique ID of the broadcast that is transitioning to another status.
     */
    id?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The part parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     */
    part?: string;
  }
  export interface Params$Resource$Livebroadcasts$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.  Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveBroadcast;
  }

  export class Resource$Livechatbans {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.liveChatBans.delete
     * @desc Removes a chat ban.
     * @alias youtube.liveChatBans.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter identifies the chat ban to remove. The value uniquely identifies both the ban and the chat.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Livechatbans$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Livechatbans$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Livechatbans$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Livechatbans$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livechatbans$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatbans$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/bans').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.liveChatBans.insert
     * @desc Adds a new ban to the chat.
     * @alias youtube.liveChatBans.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
     * @param {().LiveChatBan} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Livechatbans$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveChatBan>;
    insert(
      params: Params$Resource$Livechatbans$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LiveChatBan>,
      callback: BodyResponseCallback<Schema$LiveChatBan>
    ): void;
    insert(
      params: Params$Resource$Livechatbans$Insert,
      callback: BodyResponseCallback<Schema$LiveChatBan>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LiveChatBan>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Livechatbans$Insert
        | BodyResponseCallback<Schema$LiveChatBan>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveChatBan>,
      callback?: BodyResponseCallback<Schema$LiveChatBan>
    ): void | GaxiosPromise<Schema$LiveChatBan> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livechatbans$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatbans$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/bans').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveChatBan>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LiveChatBan>(parameters);
      }
    }
  }

  export interface Params$Resource$Livechatbans$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter identifies the chat ban to remove. The value uniquely identifies both the ban and the chat.
     */
    id?: string;
  }
  export interface Params$Resource$Livechatbans$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveChatBan;
  }

  export class Resource$Livechatmessages {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.liveChatMessages.delete
     * @desc Deletes a chat message.
     * @alias youtube.liveChatMessages.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies the YouTube chat message ID of the resource that is being deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Livechatmessages$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Livechatmessages$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Livechatmessages$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Livechatmessages$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livechatmessages$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatmessages$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/messages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.liveChatMessages.insert
     * @desc Adds a message to a live chat.
     * @alias youtube.liveChatMessages.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The part parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet.
     * @param {().LiveChatMessage} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Livechatmessages$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveChatMessage>;
    insert(
      params: Params$Resource$Livechatmessages$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LiveChatMessage>,
      callback: BodyResponseCallback<Schema$LiveChatMessage>
    ): void;
    insert(
      params: Params$Resource$Livechatmessages$Insert,
      callback: BodyResponseCallback<Schema$LiveChatMessage>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LiveChatMessage>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Livechatmessages$Insert
        | BodyResponseCallback<Schema$LiveChatMessage>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveChatMessage>,
      callback?: BodyResponseCallback<Schema$LiveChatMessage>
    ): void | GaxiosPromise<Schema$LiveChatMessage> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livechatmessages$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatmessages$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/messages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveChatMessage>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LiveChatMessage>(parameters);
      }
    }

    /**
     * youtube.liveChatMessages.list
     * @desc Lists live chat messages for a specific chat.
     * @alias youtube.liveChatMessages.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hl The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.  If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
     * @param {string} params.liveChatId The liveChatId parameter specifies the ID of the chat whose messages will be returned.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of messages that should be returned in the result set.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
     * @param {string} params.part The part parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id and snippet.
     * @param {integer=} params.profileImageSize The profileImageSize parameter specifies the size of the user profile pictures that should be returned in the result set. Default: 88.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Livechatmessages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveChatMessageListResponse>;
    list(
      params: Params$Resource$Livechatmessages$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveChatMessageListResponse>,
      callback: BodyResponseCallback<Schema$LiveChatMessageListResponse>
    ): void;
    list(
      params: Params$Resource$Livechatmessages$List,
      callback: BodyResponseCallback<Schema$LiveChatMessageListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$LiveChatMessageListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Livechatmessages$List
        | BodyResponseCallback<Schema$LiveChatMessageListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveChatMessageListResponse>,
      callback?: BodyResponseCallback<Schema$LiveChatMessageListResponse>
    ): void | GaxiosPromise<Schema$LiveChatMessageListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livechatmessages$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatmessages$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/messages').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['liveChatId', 'part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveChatMessageListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$LiveChatMessageListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Livechatmessages$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies the YouTube chat message ID of the resource that is being deleted.
     */
    id?: string;
  }
  export interface Params$Resource$Livechatmessages$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The part parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveChatMessage;
  }
  export interface Params$Resource$Livechatmessages$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.  If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
     */
    hl?: string;
    /**
     * The liveChatId parameter specifies the ID of the chat whose messages will be returned.
     */
    liveChatId?: string;
    /**
     * The maxResults parameter specifies the maximum number of messages that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The part parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id and snippet.
     */
    part?: string;
    /**
     * The profileImageSize parameter specifies the size of the user profile pictures that should be returned in the result set. Default: 88.
     */
    profileImageSize?: number;
  }

  export class Resource$Livechatmoderators {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.liveChatModerators.delete
     * @desc Removes a chat moderator.
     * @alias youtube.liveChatModerators.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter identifies the chat moderator to remove. The value uniquely identifies both the moderator and the chat.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Livechatmoderators$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Livechatmoderators$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Livechatmoderators$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Livechatmoderators$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livechatmoderators$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatmoderators$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/moderators').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.liveChatModerators.insert
     * @desc Adds a new moderator for the chat.
     * @alias youtube.liveChatModerators.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
     * @param {().LiveChatModerator} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Livechatmoderators$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveChatModerator>;
    insert(
      params: Params$Resource$Livechatmoderators$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LiveChatModerator>,
      callback: BodyResponseCallback<Schema$LiveChatModerator>
    ): void;
    insert(
      params: Params$Resource$Livechatmoderators$Insert,
      callback: BodyResponseCallback<Schema$LiveChatModerator>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LiveChatModerator>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Livechatmoderators$Insert
        | BodyResponseCallback<Schema$LiveChatModerator>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveChatModerator>,
      callback?: BodyResponseCallback<Schema$LiveChatModerator>
    ): void | GaxiosPromise<Schema$LiveChatModerator> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livechatmoderators$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatmoderators$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/moderators').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveChatModerator>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LiveChatModerator>(parameters);
      }
    }

    /**
     * youtube.liveChatModerators.list
     * @desc Lists moderators for a live chat.
     * @alias youtube.liveChatModerators.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.liveChatId The liveChatId parameter specifies the YouTube live chat for which the API should return moderators.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part The part parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Livechatmoderators$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveChatModeratorListResponse>;
    list(
      params: Params$Resource$Livechatmoderators$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveChatModeratorListResponse>,
      callback: BodyResponseCallback<Schema$LiveChatModeratorListResponse>
    ): void;
    list(
      params: Params$Resource$Livechatmoderators$List,
      callback: BodyResponseCallback<Schema$LiveChatModeratorListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$LiveChatModeratorListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Livechatmoderators$List
        | BodyResponseCallback<Schema$LiveChatModeratorListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveChatModeratorListResponse>,
      callback?: BodyResponseCallback<Schema$LiveChatModeratorListResponse>
    ): void | GaxiosPromise<Schema$LiveChatModeratorListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livechatmoderators$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livechatmoderators$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveChat/moderators').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['liveChatId', 'part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveChatModeratorListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$LiveChatModeratorListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Livechatmoderators$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter identifies the chat moderator to remove. The value uniquely identifies both the moderator and the chat.
     */
    id?: string;
  }
  export interface Params$Resource$Livechatmoderators$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveChatModerator;
  }
  export interface Params$Resource$Livechatmoderators$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The liveChatId parameter specifies the YouTube live chat for which the API should return moderators.
     */
    liveChatId?: string;
    /**
     * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The part parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet.
     */
    part?: string;
  }

  export class Resource$Livestreams {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.liveStreams.delete
     * @desc Deletes a video stream.
     * @alias youtube.liveStreams.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies the YouTube live stream ID for the resource that is being deleted.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Livestreams$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Livestreams$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Livestreams$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Livestreams$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livestreams$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livestreams$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveStreams').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.liveStreams.insert
     * @desc Creates a video stream. The stream enables you to send your video to YouTube, which can then broadcast the video to your audience.
     * @alias youtube.liveStreams.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part properties that you can include in the parameter value are id, snippet, cdn, and status.
     * @param {().LiveStream} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Livestreams$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveStream>;
    insert(
      params: Params$Resource$Livestreams$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$LiveStream>,
      callback: BodyResponseCallback<Schema$LiveStream>
    ): void;
    insert(
      params: Params$Resource$Livestreams$Insert,
      callback: BodyResponseCallback<Schema$LiveStream>
    ): void;
    insert(callback: BodyResponseCallback<Schema$LiveStream>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Livestreams$Insert
        | BodyResponseCallback<Schema$LiveStream>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveStream>,
      callback?: BodyResponseCallback<Schema$LiveStream>
    ): void | GaxiosPromise<Schema$LiveStream> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livestreams$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livestreams$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveStreams').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveStream>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LiveStream>(parameters);
      }
    }

    /**
     * youtube.liveStreams.list
     * @desc Returns a list of video streams that match the API request parameters.
     * @alias youtube.liveStreams.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.id The id parameter specifies a comma-separated list of YouTube stream IDs that identify the streams being retrieved. In a liveStream resource, the id property specifies the stream's ID.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean=} params.mine The mine parameter can be used to instruct the API to only return streams owned by the authenticated user. Set the parameter value to true to only retrieve your own streams.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part The part parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Livestreams$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveStreamListResponse>;
    list(
      params: Params$Resource$Livestreams$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveStreamListResponse>,
      callback: BodyResponseCallback<Schema$LiveStreamListResponse>
    ): void;
    list(
      params: Params$Resource$Livestreams$List,
      callback: BodyResponseCallback<Schema$LiveStreamListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$LiveStreamListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Livestreams$List
        | BodyResponseCallback<Schema$LiveStreamListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveStreamListResponse>,
      callback?: BodyResponseCallback<Schema$LiveStreamListResponse>
    ): void | GaxiosPromise<Schema$LiveStreamListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Livestreams$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livestreams$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveStreams').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveStreamListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LiveStreamListResponse>(parameters);
      }
    }

    /**
     * youtube.liveStreams.update
     * @desc Updates a video stream. If the properties that you want to change cannot be updated, then you need to create a new stream with the proper settings.
     * @alias youtube.liveStreams.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part properties that you can include in the parameter value are id, snippet, cdn, and status.  Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.
     * @param {().LiveStream} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Livestreams$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveStream>;
    update(
      params: Params$Resource$Livestreams$Update,
      options: MethodOptions | BodyResponseCallback<Schema$LiveStream>,
      callback: BodyResponseCallback<Schema$LiveStream>
    ): void;
    update(
      params: Params$Resource$Livestreams$Update,
      callback: BodyResponseCallback<Schema$LiveStream>
    ): void;
    update(callback: BodyResponseCallback<Schema$LiveStream>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Livestreams$Update
        | BodyResponseCallback<Schema$LiveStream>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$LiveStream>,
      callback?: BodyResponseCallback<Schema$LiveStream>
    ): void | GaxiosPromise<Schema$LiveStream> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Livestreams$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Livestreams$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/liveStreams').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveStream>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LiveStream>(parameters);
      }
    }
  }

  export interface Params$Resource$Livestreams$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies the YouTube live stream ID for the resource that is being deleted.
     */
    id?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
  }
  export interface Params$Resource$Livestreams$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part properties that you can include in the parameter value are id, snippet, cdn, and status.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveStream;
  }
  export interface Params$Resource$Livestreams$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies a comma-separated list of YouTube stream IDs that identify the streams being retrieved. In a liveStream resource, the id property specifies the stream's ID.
     */
    id?: string;
    /**
     * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * The mine parameter can be used to instruct the API to only return streams owned by the authenticated user. Set the parameter value to true to only retrieve your own streams.
     */
    mine?: boolean;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The part parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.
     */
    part?: string;
  }
  export interface Params$Resource$Livestreams$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  The part properties that you can include in the parameter value are id, snippet, cdn, and status.  Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveStream;
  }

  export class Resource$Members {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.members.list
     * @desc Lists members for a channel.
     * @alias youtube.members.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hasAccessToLevel The hasAccessToLevel parameter specifies, when set, the ID of a pricing level that members from the results set should have access to. When not set, all members will be considered, regardless of their active pricing level.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string=} params.mode The mode parameter specifies which channel members to return.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part The part parameter specifies the member resource parts that the API response will include. Supported values are id and snippet.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Members$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MemberListResponse>;
    list(
      params: Params$Resource$Members$List,
      options: MethodOptions | BodyResponseCallback<Schema$MemberListResponse>,
      callback: BodyResponseCallback<Schema$MemberListResponse>
    ): void;
    list(
      params: Params$Resource$Members$List,
      callback: BodyResponseCallback<Schema$MemberListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$MemberListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Members$List
        | BodyResponseCallback<Schema$MemberListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$MemberListResponse>,
      callback?: BodyResponseCallback<Schema$MemberListResponse>
    ): void | GaxiosPromise<Schema$MemberListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Members$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Members$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/members').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MemberListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$MemberListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Members$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hasAccessToLevel parameter specifies, when set, the ID of a pricing level that members from the results set should have access to. When not set, all members will be considered, regardless of their active pricing level.
     */
    hasAccessToLevel?: string;
    /**
     * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * The mode parameter specifies which channel members to return.
     */
    mode?: string;
    /**
     * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The part parameter specifies the member resource parts that the API response will include. Supported values are id and snippet.
     */
    part?: string;
  }

  export class Resource$Membershipslevels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.membershipsLevels.list
     * @desc Lists pricing levels for a channel.
     * @alias youtube.membershipsLevels.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The part parameter specifies the membershipsLevel resource parts that the API response will include. Supported values are id and snippet.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Membershipslevels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MembershipsLevelListResponse>;
    list(
      params: Params$Resource$Membershipslevels$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$MembershipsLevelListResponse>,
      callback: BodyResponseCallback<Schema$MembershipsLevelListResponse>
    ): void;
    list(
      params: Params$Resource$Membershipslevels$List,
      callback: BodyResponseCallback<Schema$MembershipsLevelListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$MembershipsLevelListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Membershipslevels$List
        | BodyResponseCallback<Schema$MembershipsLevelListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$MembershipsLevelListResponse>,
      callback?: BodyResponseCallback<Schema$MembershipsLevelListResponse>
    ): void | GaxiosPromise<Schema$MembershipsLevelListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Membershipslevels$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Membershipslevels$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/membershipsLevels').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$MembershipsLevelListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$MembershipsLevelListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Membershipslevels$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The part parameter specifies the membershipsLevel resource parts that the API response will include. Supported values are id and snippet.
     */
    part?: string;
  }

  export class Resource$Playlistitems {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.playlistItems.delete
     * @desc Deletes a playlist item.
     * @alias youtube.playlistItems.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies the YouTube playlist item ID for the playlist item that is being deleted. In a playlistItem resource, the id property specifies the playlist item's ID.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Playlistitems$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Playlistitems$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Playlistitems$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Playlistitems$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Playlistitems$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlistitems$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlistItems').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.playlistItems.insert
     * @desc Adds a resource to a playlist.
     * @alias youtube.playlistItems.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     * @param {().PlaylistItem} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Playlistitems$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlaylistItem>;
    insert(
      params: Params$Resource$Playlistitems$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$PlaylistItem>,
      callback: BodyResponseCallback<Schema$PlaylistItem>
    ): void;
    insert(
      params: Params$Resource$Playlistitems$Insert,
      callback: BodyResponseCallback<Schema$PlaylistItem>
    ): void;
    insert(callback: BodyResponseCallback<Schema$PlaylistItem>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Playlistitems$Insert
        | BodyResponseCallback<Schema$PlaylistItem>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlaylistItem>,
      callback?: BodyResponseCallback<Schema$PlaylistItem>
    ): void | GaxiosPromise<Schema$PlaylistItem> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Playlistitems$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlistitems$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlistItems').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlaylistItem>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlaylistItem>(parameters);
      }
    }

    /**
     * youtube.playlistItems.list
     * @desc Returns a collection of playlist items that match the API request parameters. You can retrieve all of the playlist items in a specified playlist or retrieve one or more playlist items by their unique IDs.
     * @alias youtube.playlistItems.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.id The id parameter specifies a comma-separated list of one or more unique playlist item IDs.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part The part parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set part=snippet, the API response will contain all of those properties.
     * @param {string=} params.playlistId The playlistId parameter specifies the unique ID of the playlist for which you want to retrieve playlist items. Note that even though this is an optional parameter, every request to retrieve playlist items must specify a value for either the id parameter or the playlistId parameter.
     * @param {string=} params.videoId The videoId parameter specifies that the request should return only the playlist items that contain the specified video.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Playlistitems$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlaylistItemListResponse>;
    list(
      params: Params$Resource$Playlistitems$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PlaylistItemListResponse>,
      callback: BodyResponseCallback<Schema$PlaylistItemListResponse>
    ): void;
    list(
      params: Params$Resource$Playlistitems$List,
      callback: BodyResponseCallback<Schema$PlaylistItemListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$PlaylistItemListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Playlistitems$List
        | BodyResponseCallback<Schema$PlaylistItemListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlaylistItemListResponse>,
      callback?: BodyResponseCallback<Schema$PlaylistItemListResponse>
    ): void | GaxiosPromise<Schema$PlaylistItemListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Playlistitems$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlistitems$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlistItems').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlaylistItemListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlaylistItemListResponse>(parameters);
      }
    }

    /**
     * youtube.playlistItems.update
     * @desc Modifies a playlist item. For example, you could update the item's position in the playlist.
     * @alias youtube.playlistItems.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.
     * @param {().PlaylistItem} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Playlistitems$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlaylistItem>;
    update(
      params: Params$Resource$Playlistitems$Update,
      options: MethodOptions | BodyResponseCallback<Schema$PlaylistItem>,
      callback: BodyResponseCallback<Schema$PlaylistItem>
    ): void;
    update(
      params: Params$Resource$Playlistitems$Update,
      callback: BodyResponseCallback<Schema$PlaylistItem>
    ): void;
    update(callback: BodyResponseCallback<Schema$PlaylistItem>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Playlistitems$Update
        | BodyResponseCallback<Schema$PlaylistItem>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlaylistItem>,
      callback?: BodyResponseCallback<Schema$PlaylistItem>
    ): void | GaxiosPromise<Schema$PlaylistItem> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Playlistitems$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlistitems$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlistItems').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlaylistItem>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlaylistItem>(parameters);
      }
    }
  }

  export interface Params$Resource$Playlistitems$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies the YouTube playlist item ID for the playlist item that is being deleted. In a playlistItem resource, the id property specifies the playlist item's ID.
     */
    id?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Playlistitems$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlaylistItem;
  }
  export interface Params$Resource$Playlistitems$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies a comma-separated list of one or more unique playlist item IDs.
     */
    id?: string;
    /**
     * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The part parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set part=snippet, the API response will contain all of those properties.
     */
    part?: string;
    /**
     * The playlistId parameter specifies the unique ID of the playlist for which you want to retrieve playlist items. Note that even though this is an optional parameter, every request to retrieve playlist items must specify a value for either the id parameter or the playlistId parameter.
     */
    playlistId?: string;
    /**
     * The videoId parameter specifies that the request should return only the playlist items that contain the specified video.
     */
    videoId?: string;
  }
  export interface Params$Resource$Playlistitems$Update
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlaylistItem;
  }

  export class Resource$Playlists {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.playlists.delete
     * @desc Deletes a playlist.
     * @alias youtube.playlists.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies the YouTube playlist ID for the playlist that is being deleted. In a playlist resource, the id property specifies the playlist's ID.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Playlists$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Playlists$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Playlists$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Playlists$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Playlists$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlists$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlists').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.playlists.insert
     * @desc Creates a playlist.
     * @alias youtube.playlists.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     * @param {().Playlist} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Playlists$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Playlist>;
    insert(
      params: Params$Resource$Playlists$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Playlist>,
      callback: BodyResponseCallback<Schema$Playlist>
    ): void;
    insert(
      params: Params$Resource$Playlists$Insert,
      callback: BodyResponseCallback<Schema$Playlist>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Playlist>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Playlists$Insert
        | BodyResponseCallback<Schema$Playlist>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Playlist>,
      callback?: BodyResponseCallback<Schema$Playlist>
    ): void | GaxiosPromise<Schema$Playlist> {
      let params = (paramsOrCallback || {}) as Params$Resource$Playlists$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlists$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlists').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Playlist>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Playlist>(parameters);
      }
    }

    /**
     * youtube.playlists.list
     * @desc Returns a collection of playlists that match the API request parameters. For example, you can retrieve all playlists that the authenticated user owns, or you can retrieve one or more playlists by their unique IDs.
     * @alias youtube.playlists.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.channelId This value indicates that the API should only return the specified channel's playlists.
     * @param {string=} params.hl The hl parameter should be used for filter out the properties that are not in the given language. Used for the snippet part.
     * @param {string=} params.id The id parameter specifies a comma-separated list of the YouTube playlist ID(s) for the resource(s) that are being retrieved. In a playlist resource, the id property specifies the playlist's YouTube playlist ID.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean=} params.mine Set this parameter's value to true to instruct the API to only return playlists owned by the authenticated user.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part The part parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set part=snippet, the API response will contain all of those properties.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Playlists$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlaylistListResponse>;
    list(
      params: Params$Resource$Playlists$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PlaylistListResponse>,
      callback: BodyResponseCallback<Schema$PlaylistListResponse>
    ): void;
    list(
      params: Params$Resource$Playlists$List,
      callback: BodyResponseCallback<Schema$PlaylistListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$PlaylistListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Playlists$List
        | BodyResponseCallback<Schema$PlaylistListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PlaylistListResponse>,
      callback?: BodyResponseCallback<Schema$PlaylistListResponse>
    ): void | GaxiosPromise<Schema$PlaylistListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Playlists$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlists$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlists').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PlaylistListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PlaylistListResponse>(parameters);
      }
    }

    /**
     * youtube.playlists.update
     * @desc Modifies a playlist. For example, you could change a playlist's title, description, or privacy status.
     * @alias youtube.playlists.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the snippet part, which must be included in the request body. If the request does not specify a value for the snippet.description property, the playlist's existing description will be deleted.
     * @param {().Playlist} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Playlists$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Playlist>;
    update(
      params: Params$Resource$Playlists$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Playlist>,
      callback: BodyResponseCallback<Schema$Playlist>
    ): void;
    update(
      params: Params$Resource$Playlists$Update,
      callback: BodyResponseCallback<Schema$Playlist>
    ): void;
    update(callback: BodyResponseCallback<Schema$Playlist>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Playlists$Update
        | BodyResponseCallback<Schema$Playlist>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Playlist>,
      callback?: BodyResponseCallback<Schema$Playlist>
    ): void | GaxiosPromise<Schema$Playlist> {
      let params = (paramsOrCallback || {}) as Params$Resource$Playlists$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Playlists$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/playlists').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Playlist>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Playlist>(parameters);
      }
    }
  }

  export interface Params$Resource$Playlists$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies the YouTube playlist ID for the playlist that is being deleted. In a playlist resource, the id property specifies the playlist's ID.
     */
    id?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Playlists$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Playlist;
  }
  export interface Params$Resource$Playlists$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * This value indicates that the API should only return the specified channel's playlists.
     */
    channelId?: string;
    /**
     * The hl parameter should be used for filter out the properties that are not in the given language. Used for the snippet part.
     */
    hl?: string;
    /**
     * The id parameter specifies a comma-separated list of the YouTube playlist ID(s) for the resource(s) that are being retrieved. In a playlist resource, the id property specifies the playlist's YouTube playlist ID.
     */
    id?: string;
    /**
     * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Set this parameter's value to true to instruct the API to only return playlists owned by the authenticated user.
     */
    mine?: boolean;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The part parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set part=snippet, the API response will contain all of those properties.
     */
    part?: string;
  }
  export interface Params$Resource$Playlists$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the snippet part, which must be included in the request body. If the request does not specify a value for the snippet.description property, the playlist's existing description will be deleted.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Playlist;
  }

  export class Resource$Search {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.search.list
     * @desc Returns a collection of search results that match the query parameters specified in the API request. By default, a search result set identifies matching video, channel, and playlist resources, but you can also configure queries to only retrieve a specific type of resource.
     * @alias youtube.search.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.channelId The channelId parameter indicates that the API response should only contain resources created by the channel
     * @param {string=} params.channelType The channelType parameter lets you restrict a search to a particular type of channel.
     * @param {string=} params.eventType The eventType parameter restricts a search to broadcast events. If you specify a value for this parameter, you must also set the type parameter's value to video.
     * @param {boolean=} params.forContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The forContentOwner parameter restricts the search to only retrieve resources owned by the content owner specified by the onBehalfOfContentOwner parameter. The user must be authenticated using a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
     * @param {boolean=} params.forDeveloper The forDeveloper parameter restricts the search to only retrieve videos uploaded via the developer's application or website. The API server uses the request's authorization credentials to identify the developer. Therefore, a developer can restrict results to videos uploaded through the developer's own app or website but not to videos uploaded through other apps or sites.
     * @param {boolean=} params.forMine The forMine parameter restricts the search to only retrieve videos owned by the authenticated user. If you set this parameter to true, then the type parameter's value must also be set to video.
     * @param {string=} params.location The location parameter, in conjunction with the locationRadius parameter, defines a circular geographic area and also restricts a search to videos that specify, in their metadata, a geographic location that falls within that area. The parameter value is a string that specifies latitude/longitude coordinates e.g. (37.42307,-122.08427).   - The location parameter value identifies the point at the center of the area. - The locationRadius parameter specifies the maximum distance that the location associated with a video can be from that point for the video to still be included in the search results.The API returns an error if your request specifies a value for the location parameter but does not also specify a value for the locationRadius parameter.
     * @param {string=} params.locationRadius The locationRadius parameter, in conjunction with the location parameter, defines a circular geographic area.  The parameter value must be a floating point number followed by a measurement unit. Valid measurement units are m, km, ft, and mi. For example, valid parameter values include 1500m, 5km, 10000ft, and 0.75mi. The API does not support locationRadius parameter values larger than 1000 kilometers.  Note: See the definition of the location parameter for more information.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.order The order parameter specifies the method that will be used to order resources in the API response.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.
     * @param {string=} params.publishedAfter The publishedAfter parameter indicates that the API response should only contain resources created after the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
     * @param {string=} params.publishedBefore The publishedBefore parameter indicates that the API response should only contain resources created before the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
     * @param {string=} params.q The q parameter specifies the query term to search for.  Your request can also use the Boolean NOT (-) and OR (|) operators to exclude videos or to find videos that are associated with one of several search terms. For example, to search for videos matching either "boating" or "sailing", set the q parameter value to boating|sailing. Similarly, to search for videos matching either "boating" or "sailing" but not "fishing", set the q parameter value to boating|sailing -fishing. Note that the pipe character must be URL-escaped when it is sent in your API request. The URL-escaped value for the pipe character is %7C.
     * @param {string=} params.regionCode The regionCode parameter instructs the API to return search results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
     * @param {string=} params.relatedToVideoId The relatedToVideoId parameter retrieves a list of videos that are related to the video that the parameter value identifies. The parameter value must be set to a YouTube video ID and, if you are using this parameter, the type parameter must be set to video.
     * @param {string=} params.relevanceLanguage The relevanceLanguage parameter instructs the API to return search results that are most relevant to the specified language. The parameter value is typically an ISO 639-1 two-letter language code. However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese. Please note that results in other languages will still be returned if they are highly relevant to the search query term.
     * @param {string=} params.safeSearch The safeSearch parameter indicates whether the search results should include restricted content as well as standard content.
     * @param {string=} params.topicId The topicId parameter indicates that the API response should only contain resources associated with the specified topic. The value identifies a Freebase topic ID.
     * @param {string=} params.type The type parameter restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types.
     * @param {string=} params.videoCaption The videoCaption parameter indicates whether the API should filter video search results based on whether they have captions. If you specify a value for this parameter, you must also set the type parameter's value to video.
     * @param {string=} params.videoCategoryId The videoCategoryId parameter filters video search results based on their category. If you specify a value for this parameter, you must also set the type parameter's value to video.
     * @param {string=} params.videoDefinition The videoDefinition parameter lets you restrict a search to only include either high definition (HD) or standard definition (SD) videos. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available. If you specify a value for this parameter, you must also set the type parameter's value to video.
     * @param {string=} params.videoDimension The videoDimension parameter lets you restrict a search to only retrieve 2D or 3D videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
     * @param {string=} params.videoDuration The videoDuration parameter filters video search results based on their duration. If you specify a value for this parameter, you must also set the type parameter's value to video.
     * @param {string=} params.videoEmbeddable The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video.
     * @param {string=} params.videoLicense The videoLicense parameter filters search results to only include videos with a particular license. YouTube lets video uploaders choose to attach either the Creative Commons license or the standard YouTube license to each of their videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
     * @param {string=} params.videoSyndicated The videoSyndicated parameter lets you to restrict a search to only videos that can be played outside youtube.com. If you specify a value for this parameter, you must also set the type parameter's value to video.
     * @param {string=} params.videoType The videoType parameter lets you restrict a search to a particular type of videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Search$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchListResponse>;
    list(
      params: Params$Resource$Search$List,
      options: MethodOptions | BodyResponseCallback<Schema$SearchListResponse>,
      callback: BodyResponseCallback<Schema$SearchListResponse>
    ): void;
    list(
      params: Params$Resource$Search$List,
      callback: BodyResponseCallback<Schema$SearchListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$SearchListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Search$List
        | BodyResponseCallback<Schema$SearchListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SearchListResponse>,
      callback?: BodyResponseCallback<Schema$SearchListResponse>
    ): void | GaxiosPromise<Schema$SearchListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Search$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Search$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/search').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SearchListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SearchListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Search$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The channelId parameter indicates that the API response should only contain resources created by the channel
     */
    channelId?: string;
    /**
     * The channelType parameter lets you restrict a search to a particular type of channel.
     */
    channelType?: string;
    /**
     * The eventType parameter restricts a search to broadcast events. If you specify a value for this parameter, you must also set the type parameter's value to video.
     */
    eventType?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The forContentOwner parameter restricts the search to only retrieve resources owned by the content owner specified by the onBehalfOfContentOwner parameter. The user must be authenticated using a CMS account linked to the specified content owner and onBehalfOfContentOwner must be provided.
     */
    forContentOwner?: boolean;
    /**
     * The forDeveloper parameter restricts the search to only retrieve videos uploaded via the developer's application or website. The API server uses the request's authorization credentials to identify the developer. Therefore, a developer can restrict results to videos uploaded through the developer's own app or website but not to videos uploaded through other apps or sites.
     */
    forDeveloper?: boolean;
    /**
     * The forMine parameter restricts the search to only retrieve videos owned by the authenticated user. If you set this parameter to true, then the type parameter's value must also be set to video.
     */
    forMine?: boolean;
    /**
     * The location parameter, in conjunction with the locationRadius parameter, defines a circular geographic area and also restricts a search to videos that specify, in their metadata, a geographic location that falls within that area. The parameter value is a string that specifies latitude/longitude coordinates e.g. (37.42307,-122.08427).   - The location parameter value identifies the point at the center of the area. - The locationRadius parameter specifies the maximum distance that the location associated with a video can be from that point for the video to still be included in the search results.The API returns an error if your request specifies a value for the location parameter but does not also specify a value for the locationRadius parameter.
     */
    location?: string;
    /**
     * The locationRadius parameter, in conjunction with the location parameter, defines a circular geographic area.  The parameter value must be a floating point number followed by a measurement unit. Valid measurement units are m, km, ft, and mi. For example, valid parameter values include 1500m, 5km, 10000ft, and 0.75mi. The API does not support locationRadius parameter values larger than 1000 kilometers.  Note: See the definition of the location parameter for more information.
     */
    locationRadius?: string;
    /**
     * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The order parameter specifies the method that will be used to order resources in the API response.
     */
    order?: string;
    /**
     * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.
     */
    part?: string;
    /**
     * The publishedAfter parameter indicates that the API response should only contain resources created after the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
     */
    publishedAfter?: string;
    /**
     * The publishedBefore parameter indicates that the API response should only contain resources created before the specified time. The value is an RFC 3339 formatted date-time value (1970-01-01T00:00:00Z).
     */
    publishedBefore?: string;
    /**
     * The q parameter specifies the query term to search for.  Your request can also use the Boolean NOT (-) and OR (|) operators to exclude videos or to find videos that are associated with one of several search terms. For example, to search for videos matching either "boating" or "sailing", set the q parameter value to boating|sailing. Similarly, to search for videos matching either "boating" or "sailing" but not "fishing", set the q parameter value to boating|sailing -fishing. Note that the pipe character must be URL-escaped when it is sent in your API request. The URL-escaped value for the pipe character is %7C.
     */
    q?: string;
    /**
     * The regionCode parameter instructs the API to return search results for the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
     */
    regionCode?: string;
    /**
     * The relatedToVideoId parameter retrieves a list of videos that are related to the video that the parameter value identifies. The parameter value must be set to a YouTube video ID and, if you are using this parameter, the type parameter must be set to video.
     */
    relatedToVideoId?: string;
    /**
     * The relevanceLanguage parameter instructs the API to return search results that are most relevant to the specified language. The parameter value is typically an ISO 639-1 two-letter language code. However, you should use the values zh-Hans for simplified Chinese and zh-Hant for traditional Chinese. Please note that results in other languages will still be returned if they are highly relevant to the search query term.
     */
    relevanceLanguage?: string;
    /**
     * The safeSearch parameter indicates whether the search results should include restricted content as well as standard content.
     */
    safeSearch?: string;
    /**
     * The topicId parameter indicates that the API response should only contain resources associated with the specified topic. The value identifies a Freebase topic ID.
     */
    topicId?: string;
    /**
     * The type parameter restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types.
     */
    type?: string;
    /**
     * The videoCaption parameter indicates whether the API should filter video search results based on whether they have captions. If you specify a value for this parameter, you must also set the type parameter's value to video.
     */
    videoCaption?: string;
    /**
     * The videoCategoryId parameter filters video search results based on their category. If you specify a value for this parameter, you must also set the type parameter's value to video.
     */
    videoCategoryId?: string;
    /**
     * The videoDefinition parameter lets you restrict a search to only include either high definition (HD) or standard definition (SD) videos. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available. If you specify a value for this parameter, you must also set the type parameter's value to video.
     */
    videoDefinition?: string;
    /**
     * The videoDimension parameter lets you restrict a search to only retrieve 2D or 3D videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
     */
    videoDimension?: string;
    /**
     * The videoDuration parameter filters video search results based on their duration. If you specify a value for this parameter, you must also set the type parameter's value to video.
     */
    videoDuration?: string;
    /**
     * The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video.
     */
    videoEmbeddable?: string;
    /**
     * The videoLicense parameter filters search results to only include videos with a particular license. YouTube lets video uploaders choose to attach either the Creative Commons license or the standard YouTube license to each of their videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
     */
    videoLicense?: string;
    /**
     * The videoSyndicated parameter lets you to restrict a search to only videos that can be played outside youtube.com. If you specify a value for this parameter, you must also set the type parameter's value to video.
     */
    videoSyndicated?: string;
    /**
     * The videoType parameter lets you restrict a search to a particular type of videos. If you specify a value for this parameter, you must also set the type parameter's value to video.
     */
    videoType?: string;
  }

  export class Resource$Sponsors {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.sponsors.list
     * @desc Lists sponsors for a channel.
     * @alias youtube.sponsors.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The filter parameter specifies which channel sponsors to return.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part The part parameter specifies the sponsor resource parts that the API response will include. Supported values are id and snippet.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Sponsors$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SponsorListResponse>;
    list(
      params: Params$Resource$Sponsors$List,
      options: MethodOptions | BodyResponseCallback<Schema$SponsorListResponse>,
      callback: BodyResponseCallback<Schema$SponsorListResponse>
    ): void;
    list(
      params: Params$Resource$Sponsors$List,
      callback: BodyResponseCallback<Schema$SponsorListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$SponsorListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Sponsors$List
        | BodyResponseCallback<Schema$SponsorListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SponsorListResponse>,
      callback?: BodyResponseCallback<Schema$SponsorListResponse>
    ): void | GaxiosPromise<Schema$SponsorListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sponsors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sponsors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/sponsors').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SponsorListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SponsorListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sponsors$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The filter parameter specifies which channel sponsors to return.
     */
    filter?: string;
    /**
     * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The part parameter specifies the sponsor resource parts that the API response will include. Supported values are id and snippet.
     */
    part?: string;
  }

  export class Resource$Subscriptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.subscriptions.delete
     * @desc Deletes a subscription.
     * @alias youtube.subscriptions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies the YouTube subscription ID for the resource that is being deleted. In a subscription resource, the id property specifies the YouTube subscription ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Subscriptions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Subscriptions$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Subscriptions$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Subscriptions$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subscriptions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subscriptions$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/subscriptions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.subscriptions.insert
     * @desc Adds a subscription for the authenticated user's channel.
     * @alias youtube.subscriptions.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     * @param {().Subscription} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Subscriptions$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    insert(
      params: Params$Resource$Subscriptions$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Subscription>,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    insert(
      params: Params$Resource$Subscriptions$Insert,
      callback: BodyResponseCallback<Schema$Subscription>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Subscription>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Subscriptions$Insert
        | BodyResponseCallback<Schema$Subscription>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Subscription>,
      callback?: BodyResponseCallback<Schema$Subscription>
    ): void | GaxiosPromise<Schema$Subscription> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subscriptions$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subscriptions$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/subscriptions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Subscription>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * youtube.subscriptions.list
     * @desc Returns subscription resources that match the API request criteria.
     * @alias youtube.subscriptions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.channelId The channelId parameter specifies a YouTube channel ID. The API will only return that channel's subscriptions.
     * @param {string=} params.forChannelId The forChannelId parameter specifies a comma-separated list of channel IDs. The API response will then only contain subscriptions matching those channels.
     * @param {string=} params.id The id parameter specifies a comma-separated list of the YouTube subscription ID(s) for the resource(s) that are being retrieved. In a subscription resource, the id property specifies the YouTube subscription ID.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean=} params.mine Set this parameter's value to true to retrieve a feed of the authenticated user's subscriptions.
     * @param {boolean=} params.myRecentSubscribers Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in reverse chronological order (newest first).
     * @param {boolean=} params.mySubscribers Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in no particular order.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string=} params.order The order parameter specifies the method that will be used to sort resources in the API response.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part The part parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set part=snippet, the API response will also contain all of those nested properties.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Subscriptions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubscriptionListResponse>;
    list(
      params: Params$Resource$Subscriptions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SubscriptionListResponse>,
      callback: BodyResponseCallback<Schema$SubscriptionListResponse>
    ): void;
    list(
      params: Params$Resource$Subscriptions$List,
      callback: BodyResponseCallback<Schema$SubscriptionListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$SubscriptionListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Subscriptions$List
        | BodyResponseCallback<Schema$SubscriptionListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SubscriptionListResponse>,
      callback?: BodyResponseCallback<Schema$SubscriptionListResponse>
    ): void | GaxiosPromise<Schema$SubscriptionListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Subscriptions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Subscriptions$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/subscriptions').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SubscriptionListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$SubscriptionListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Subscriptions$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies the YouTube subscription ID for the resource that is being deleted. In a subscription resource, the id property specifies the YouTube subscription ID.
     */
    id?: string;
  }
  export interface Params$Resource$Subscriptions$Insert
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subscription;
  }
  export interface Params$Resource$Subscriptions$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The channelId parameter specifies a YouTube channel ID. The API will only return that channel's subscriptions.
     */
    channelId?: string;
    /**
     * The forChannelId parameter specifies a comma-separated list of channel IDs. The API response will then only contain subscriptions matching those channels.
     */
    forChannelId?: string;
    /**
     * The id parameter specifies a comma-separated list of the YouTube subscription ID(s) for the resource(s) that are being retrieved. In a subscription resource, the id property specifies the YouTube subscription ID.
     */
    id?: string;
    /**
     * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Set this parameter's value to true to retrieve a feed of the authenticated user's subscriptions.
     */
    mine?: boolean;
    /**
     * Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in reverse chronological order (newest first).
     */
    myRecentSubscribers?: boolean;
    /**
     * Set this parameter's value to true to retrieve a feed of the subscribers of the authenticated user in no particular order.
     */
    mySubscribers?: boolean;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The order parameter specifies the method that will be used to sort resources in the API response.
     */
    order?: string;
    /**
     * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The part parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set part=snippet, the API response will also contain all of those nested properties.
     */
    part?: string;
  }

  export class Resource$Superchatevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.superChatEvents.list
     * @desc Lists Super Chat events for a channel.
     * @alias youtube.superChatEvents.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hl The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.  If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part The part parameter specifies the superChatEvent resource parts that the API response will include. Supported values are id and snippet.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Superchatevents$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SuperChatEventListResponse>;
    list(
      params: Params$Resource$Superchatevents$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$SuperChatEventListResponse>,
      callback: BodyResponseCallback<Schema$SuperChatEventListResponse>
    ): void;
    list(
      params: Params$Resource$Superchatevents$List,
      callback: BodyResponseCallback<Schema$SuperChatEventListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$SuperChatEventListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Superchatevents$List
        | BodyResponseCallback<Schema$SuperChatEventListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$SuperChatEventListResponse>,
      callback?: BodyResponseCallback<Schema$SuperChatEventListResponse>
    ): void | GaxiosPromise<Schema$SuperChatEventListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Superchatevents$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Superchatevents$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/superChatEvents').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$SuperChatEventListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$SuperChatEventListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Superchatevents$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.  If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
     */
    hl?: string;
    /**
     * The maxResults parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The part parameter specifies the superChatEvent resource parts that the API response will include. Supported values are id and snippet.
     */
    part?: string;
  }

  export class Resource$Thumbnails {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.thumbnails.set
     * @desc Uploads a custom video thumbnail to YouTube and sets it for a video.
     * @alias youtube.thumbnails.set
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.videoId The videoId parameter specifies a YouTube video ID for which the custom video thumbnail is being provided.
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    set(
      params?: Params$Resource$Thumbnails$Set,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ThumbnailSetResponse>;
    set(
      params: Params$Resource$Thumbnails$Set,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ThumbnailSetResponse>,
      callback: BodyResponseCallback<Schema$ThumbnailSetResponse>
    ): void;
    set(
      params: Params$Resource$Thumbnails$Set,
      callback: BodyResponseCallback<Schema$ThumbnailSetResponse>
    ): void;
    set(callback: BodyResponseCallback<Schema$ThumbnailSetResponse>): void;
    set(
      paramsOrCallback?:
        | Params$Resource$Thumbnails$Set
        | BodyResponseCallback<Schema$ThumbnailSetResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ThumbnailSetResponse>,
      callback?: BodyResponseCallback<Schema$ThumbnailSetResponse>
    ): void | GaxiosPromise<Schema$ThumbnailSetResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Thumbnails$Set;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Thumbnails$Set;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/thumbnails/set').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/youtube/v3/thumbnails/set').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['videoId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ThumbnailSetResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ThumbnailSetResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Thumbnails$Set extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The videoId parameter specifies a YouTube video ID for which the custom video thumbnail is being provided.
     */
    videoId?: string;

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

  export class Resource$Videoabusereportreasons {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.videoAbuseReportReasons.list
     * @desc Returns a list of abuse reasons that can be used for reporting abusive videos.
     * @alias youtube.videoAbuseReportReasons.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hl The hl parameter specifies the language that should be used for text values in the API response.
     * @param {string} params.part The part parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Videoabusereportreasons$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VideoAbuseReportReasonListResponse>;
    list(
      params: Params$Resource$Videoabusereportreasons$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>,
      callback: BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>
    ): void;
    list(
      params: Params$Resource$Videoabusereportreasons$List,
      callback: BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Videoabusereportreasons$List
        | BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>,
      callback?: BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>
    ): void | GaxiosPromise<Schema$VideoAbuseReportReasonListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Videoabusereportreasons$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videoabusereportreasons$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videoAbuseReportReasons').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VideoAbuseReportReasonListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$VideoAbuseReportReasonListResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Videoabusereportreasons$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hl parameter specifies the language that should be used for text values in the API response.
     */
    hl?: string;
    /**
     * The part parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.
     */
    part?: string;
  }

  export class Resource$Videocategories {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.videoCategories.list
     * @desc Returns a list of categories that can be associated with YouTube videos.
     * @alias youtube.videoCategories.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hl The hl parameter specifies the language that should be used for text values in the API response.
     * @param {string=} params.id The id parameter specifies a comma-separated list of video category IDs for the resources that you are retrieving.
     * @param {string} params.part The part parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet.
     * @param {string=} params.regionCode The regionCode parameter instructs the API to return the list of video categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Videocategories$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VideoCategoryListResponse>;
    list(
      params: Params$Resource$Videocategories$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoCategoryListResponse>,
      callback: BodyResponseCallback<Schema$VideoCategoryListResponse>
    ): void;
    list(
      params: Params$Resource$Videocategories$List,
      callback: BodyResponseCallback<Schema$VideoCategoryListResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$VideoCategoryListResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Videocategories$List
        | BodyResponseCallback<Schema$VideoCategoryListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoCategoryListResponse>,
      callback?: BodyResponseCallback<Schema$VideoCategoryListResponse>
    ): void | GaxiosPromise<Schema$VideoCategoryListResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Videocategories$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videocategories$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videoCategories').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VideoCategoryListResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$VideoCategoryListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Videocategories$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The hl parameter specifies the language that should be used for text values in the API response.
     */
    hl?: string;
    /**
     * The id parameter specifies a comma-separated list of video category IDs for the resources that you are retrieving.
     */
    id?: string;
    /**
     * The part parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet.
     */
    part?: string;
    /**
     * The regionCode parameter instructs the API to return the list of video categories available in the specified country. The parameter value is an ISO 3166-1 alpha-2 country code.
     */
    regionCode?: string;
  }

  export class Resource$Videos {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.videos.delete
     * @desc Deletes a YouTube video.
     * @alias youtube.videos.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies the YouTube video ID for the resource that is being deleted. In a video resource, the id property specifies the video's ID.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Videos$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Videos$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Videos$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Videos$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Videos$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videos').replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.videos.getRating
     * @desc Retrieves the ratings that the authorized user gave to a list of specified videos.
     * @alias youtube.videos.getRating
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) for which you are retrieving rating data. In a video resource, the id property specifies the video's ID.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getRating(
      params?: Params$Resource$Videos$Getrating,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VideoGetRatingResponse>;
    getRating(
      params: Params$Resource$Videos$Getrating,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoGetRatingResponse>,
      callback: BodyResponseCallback<Schema$VideoGetRatingResponse>
    ): void;
    getRating(
      params: Params$Resource$Videos$Getrating,
      callback: BodyResponseCallback<Schema$VideoGetRatingResponse>
    ): void;
    getRating(
      callback: BodyResponseCallback<Schema$VideoGetRatingResponse>
    ): void;
    getRating(
      paramsOrCallback?:
        | Params$Resource$Videos$Getrating
        | BodyResponseCallback<Schema$VideoGetRatingResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoGetRatingResponse>,
      callback?: BodyResponseCallback<Schema$VideoGetRatingResponse>
    ): void | GaxiosPromise<Schema$VideoGetRatingResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Videos$Getrating;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$Getrating;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videos/getRating').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['id'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VideoGetRatingResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$VideoGetRatingResponse>(parameters);
      }
    }

    /**
     * youtube.videos.insert
     * @desc Uploads a video to YouTube and optionally sets the video's metadata.
     * @alias youtube.videos.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.autoLevels The autoLevels parameter indicates whether YouTube should automatically enhance the video's lighting and color.
     * @param {boolean=} params.notifySubscribers The notifySubscribers parameter indicates whether YouTube should send a notification about the new video to users who subscribe to the video's channel. A parameter value of True indicates that subscribers will be notified of newly uploaded videos. However, a channel owner who is uploading many videos might prefer to set the value to False to avoid sending a notification about each new video to the channel's subscribers.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
     * @param {boolean=} params.stabilize The stabilize parameter indicates whether YouTube should adjust the video to remove shaky camera motions.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Videos$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Video>;
    insert(
      params: Params$Resource$Videos$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Video>,
      callback: BodyResponseCallback<Schema$Video>
    ): void;
    insert(
      params: Params$Resource$Videos$Insert,
      callback: BodyResponseCallback<Schema$Video>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Video>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Videos$Insert
        | BodyResponseCallback<Schema$Video>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Video>,
      callback?: BodyResponseCallback<Schema$Video>
    ): void | GaxiosPromise<Schema$Video> {
      let params = (paramsOrCallback || {}) as Params$Resource$Videos$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videos').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/youtube/v3/videos').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Video>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Video>(parameters);
      }
    }

    /**
     * youtube.videos.list
     * @desc Returns a list of videos that match the API request parameters.
     * @alias youtube.videos.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.chart The chart parameter identifies the chart that you want to retrieve.
     * @param {string=} params.hl The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.  If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
     * @param {string=} params.id The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved. In a video resource, the id property specifies the video's ID.
     * @param {string=} params.locale DEPRECATED
     * @param {integer=} params.maxHeight The maxHeight parameter specifies a maximum height of the embedded player. If maxWidth is provided, maxHeight may not be reached in order to not violate the width request.
     * @param {integer=} params.maxResults The maxResults parameter specifies the maximum number of items that should be returned in the result set.  Note: This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
     * @param {integer=} params.maxWidth The maxWidth parameter specifies a maximum width of the embedded player. If maxHeight is provided, maxWidth may not be reached in order to not violate the height request.
     * @param {string=} params.myRating Set this parameter's value to like or dislike to instruct the API to only return videos liked or disliked by the authenticated user.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.pageToken The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.  Note: This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
     * @param {string} params.part The part parameter specifies a comma-separated list of one or more video resource properties that the API response will include.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set part=snippet, the API response will contain all of those properties.
     * @param {string=} params.regionCode The regionCode parameter instructs the API to select a video chart available in the specified region. This parameter can only be used in conjunction with the chart parameter. The parameter value is an ISO 3166-1 alpha-2 country code.
     * @param {string=} params.videoCategoryId The videoCategoryId parameter identifies the video category for which the chart should be retrieved. This parameter can only be used in conjunction with the chart parameter. By default, charts are not restricted to a particular category.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Videos$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VideoListResponse>;
    list(
      params: Params$Resource$Videos$List,
      options: MethodOptions | BodyResponseCallback<Schema$VideoListResponse>,
      callback: BodyResponseCallback<Schema$VideoListResponse>
    ): void;
    list(
      params: Params$Resource$Videos$List,
      callback: BodyResponseCallback<Schema$VideoListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$VideoListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Videos$List
        | BodyResponseCallback<Schema$VideoListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoListResponse>,
      callback?: BodyResponseCallback<Schema$VideoListResponse>
    ): void | GaxiosPromise<Schema$VideoListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Videos$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videos').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$VideoListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$VideoListResponse>(parameters);
      }
    }

    /**
     * youtube.videos.rate
     * @desc Add a like or dislike rating to a video or remove a rating from a video.
     * @alias youtube.videos.rate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The id parameter specifies the YouTube video ID of the video that is being rated or having its rating removed.
     * @param {string} params.rating Specifies the rating to record.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    rate(
      params?: Params$Resource$Videos$Rate,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    rate(
      params: Params$Resource$Videos$Rate,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    rate(
      params: Params$Resource$Videos$Rate,
      callback: BodyResponseCallback<void>
    ): void;
    rate(callback: BodyResponseCallback<void>): void;
    rate(
      paramsOrCallback?:
        | Params$Resource$Videos$Rate
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Videos$Rate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$Rate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videos/rate').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['id', 'rating'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.videos.reportAbuse
     * @desc Report abuse for a video.
     * @alias youtube.videos.reportAbuse
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {().VideoAbuseReport} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reportAbuse(
      params?: Params$Resource$Videos$Reportabuse,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    reportAbuse(
      params: Params$Resource$Videos$Reportabuse,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    reportAbuse(
      params: Params$Resource$Videos$Reportabuse,
      callback: BodyResponseCallback<void>
    ): void;
    reportAbuse(callback: BodyResponseCallback<void>): void;
    reportAbuse(
      paramsOrCallback?:
        | Params$Resource$Videos$Reportabuse
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Videos$Reportabuse;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$Reportabuse;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videos/reportAbuse').replace(
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
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.videos.update
     * @desc Updates a video's metadata.
     * @alias youtube.videos.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting.  In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
     * @param {().Video} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Videos$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Video>;
    update(
      params: Params$Resource$Videos$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Video>,
      callback: BodyResponseCallback<Schema$Video>
    ): void;
    update(
      params: Params$Resource$Videos$Update,
      callback: BodyResponseCallback<Schema$Video>
    ): void;
    update(callback: BodyResponseCallback<Schema$Video>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Videos$Update
        | BodyResponseCallback<Schema$Video>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Video>,
      callback?: BodyResponseCallback<Schema$Video>
    ): void | GaxiosPromise<Schema$Video> {
      let params = (paramsOrCallback || {}) as Params$Resource$Videos$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Videos$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/videos').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Video>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Video>(parameters);
      }
    }
  }

  export interface Params$Resource$Videos$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies the YouTube video ID for the resource that is being deleted. In a video resource, the id property specifies the video's ID.
     */
    id?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Videos$Getrating extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) for which you are retrieving rating data. In a video resource, the id property specifies the video's ID.
     */
    id?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Videos$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The autoLevels parameter indicates whether YouTube should automatically enhance the video's lighting and color.
     */
    autoLevels?: boolean;
    /**
     * The notifySubscribers parameter indicates whether YouTube should send a notification about the new video to users who subscribe to the video's channel. A parameter value of True indicates that subscribers will be notified of newly uploaded videos. However, a channel owner who is uploading many videos might prefer to set the value to False to avoid sending a notification about each new video to the channel's subscribers.
     */
    notifySubscribers?: boolean;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly authorized request. Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwnerChannel parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies.  This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
     */
    part?: string;
    /**
     * The stabilize parameter indicates whether YouTube should adjust the video to remove shaky camera motions.
     */
    stabilize?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Video;

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
  export interface Params$Resource$Videos$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The chart parameter identifies the chart that you want to retrieve.
     */
    chart?: string;
    /**
     * The hl parameter instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports. The parameter value must be a language code included in the list returned by the i18nLanguages.list method.  If localized resource details are available in that language, the resource's snippet.localized object will contain the localized values. However, if localized details are not available, the snippet.localized object will contain resource details in the resource's default language.
     */
    hl?: string;
    /**
     * The id parameter specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved. In a video resource, the id property specifies the video's ID.
     */
    id?: string;
    /**
     * DEPRECATED
     */
    locale?: string;
    /**
     * The maxHeight parameter specifies a maximum height of the embedded player. If maxWidth is provided, maxHeight may not be reached in order to not violate the width request.
     */
    maxHeight?: number;
    /**
     * The maxResults parameter specifies the maximum number of items that should be returned in the result set.  Note: This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
     */
    maxResults?: number;
    /**
     * The maxWidth parameter specifies a maximum width of the embedded player. If maxHeight is provided, maxWidth may not be reached in order to not violate the height request.
     */
    maxWidth?: number;
    /**
     * Set this parameter's value to like or dislike to instruct the API to only return videos liked or disliked by the authenticated user.
     */
    myRating?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.  Note: This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
     */
    pageToken?: string;
    /**
     * The part parameter specifies a comma-separated list of one or more video resource properties that the API response will include.  If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set part=snippet, the API response will contain all of those properties.
     */
    part?: string;
    /**
     * The regionCode parameter instructs the API to select a video chart available in the specified region. This parameter can only be used in conjunction with the chart parameter. The parameter value is an ISO 3166-1 alpha-2 country code.
     */
    regionCode?: string;
    /**
     * The videoCategoryId parameter identifies the video category for which the chart should be retrieved. This parameter can only be used in conjunction with the chart parameter. By default, charts are not restricted to a particular category.
     */
    videoCategoryId?: string;
  }
  export interface Params$Resource$Videos$Rate extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The id parameter specifies the YouTube video ID of the video that is being rated or having its rating removed.
     */
    id?: string;
    /**
     * Specifies the rating to record.
     */
    rating?: string;
  }
  export interface Params$Resource$Videos$Reportabuse
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VideoAbuseReport;
  }
  export interface Params$Resource$Videos$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The part parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.  Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting.  In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
     */
    part?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Video;
  }

  export class Resource$Watermarks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.watermarks.set
     * @desc Uploads a watermark image to YouTube and sets it for a channel.
     * @alias youtube.watermarks.set
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.channelId The channelId parameter specifies the YouTube channel ID for which the watermark is being provided.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    set(
      params?: Params$Resource$Watermarks$Set,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    set(
      params: Params$Resource$Watermarks$Set,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    set(
      params: Params$Resource$Watermarks$Set,
      callback: BodyResponseCallback<void>
    ): void;
    set(callback: BodyResponseCallback<void>): void;
    set(
      paramsOrCallback?:
        | Params$Resource$Watermarks$Set
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Watermarks$Set;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Watermarks$Set;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/watermarks/set').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (rootUrl + '/upload/youtube/v3/watermarks/set').replace(
          /([^:]\/)\/+/g,
          '$1'
        ),
        requiredParams: ['channelId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.watermarks.unset
     * @desc Deletes a channel's watermark image.
     * @alias youtube.watermarks.unset
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.channelId The channelId parameter specifies the YouTube channel ID for which the watermark is being unset.
     * @param {string=} params.onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    unset(
      params?: Params$Resource$Watermarks$Unset,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    unset(
      params: Params$Resource$Watermarks$Unset,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    unset(
      params: Params$Resource$Watermarks$Unset,
      callback: BodyResponseCallback<void>
    ): void;
    unset(callback: BodyResponseCallback<void>): void;
    unset(
      paramsOrCallback?:
        | Params$Resource$Watermarks$Unset
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Watermarks$Unset;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Watermarks$Unset;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/youtube/v3/watermarks/unset').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['channelId'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Watermarks$Set extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The channelId parameter specifies the YouTube channel ID for which the watermark is being provided.
     */
    channelId?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$InvideoBranding;

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
  export interface Params$Resource$Watermarks$Unset extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The channelId parameter specifies the YouTube channel ID for which the watermark is being unset.
     */
    channelId?: string;
    /**
     * Note: This parameter is intended exclusively for YouTube content partners.  The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
}
