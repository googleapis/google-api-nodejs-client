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
/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
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

export namespace youtube_v3 {
  export interface Options extends GlobalOptions {
    version: 'v3';
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
   * YouTube Data API v3
   *
   * The YouTube Data API v3 is an API that provides access to YouTube data, such as videos, playlists, and channels.
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
    youtube: Resource$Youtube;

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
      this.youtube = new Resource$Youtube(this.context);
    }
  }

  /**
   * Rights management policy for YouTube resources.
   */
  export interface Schema$AccessPolicy {
    /**
     * The value of &lt;code&gt;allowed&lt;/code&gt; indicates whether the access to the policy is allowed or denied by default.
     */
    allowed?: boolean | null;
    /**
     * A list of region codes that identify countries where the default policy do not apply.
     */
    exception?: string[] | null;
  }
  /**
   * An &lt;code&gt;&lt;strong&gt;activity&lt;/strong&gt;&lt;/code&gt; resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each &lt;code&gt;activity&lt;/code&gt; resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded.
   */
  export interface Schema$Activity {
    /**
     * The &lt;code&gt;contentDetails&lt;/code&gt; object contains information about the content associated with the activity. For example, if the &lt;code&gt;snippet.type&lt;/code&gt; value is &lt;code&gt;videoRated&lt;/code&gt;, then the &lt;code&gt;contentDetails&lt;/code&gt; object&#39;s content identifies the rated video.
     */
    contentDetails?: Schema$ActivityContentDetails;
    /**
     * Etag of this resource
     */
    etag?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the activity.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#activity&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the activity, including the activity&#39;s type and group ID.
     */
    snippet?: Schema$ActivitySnippet;
  }
  /**
   * Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.
   */
  export interface Schema$ActivityContentDetails {
    /**
     * The &lt;code&gt;bulletin&lt;/code&gt; object contains details about a channel bulletin post. This object is only present if the &lt;code&gt;snippet.type&lt;/code&gt; is &lt;code&gt;bulletin&lt;/code&gt;.
     */
    bulletin?: Schema$ActivityContentDetailsBulletin;
    /**
     * The &lt;code&gt;channelItem&lt;/code&gt; object contains details about a resource which was added to a channel. This property is only present if the &lt;code&gt;snippet.type&lt;/code&gt; is &lt;code&gt;channelItem&lt;/code&gt;.
     */
    channelItem?: Schema$ActivityContentDetailsChannelItem;
    /**
     * The &lt;code&gt;comment&lt;/code&gt; object contains information about a resource that received a comment. This property is only present if the &lt;code&gt;snippet.type&lt;/code&gt; is &lt;code&gt;comment&lt;/code&gt;.
     */
    comment?: Schema$ActivityContentDetailsComment;
    /**
     * The &lt;code&gt;favorite&lt;/code&gt; object contains information about a video that was marked as a favorite video. This property is only present if the &lt;code&gt;snippet.type&lt;/code&gt; is &lt;code&gt;favorite&lt;/code&gt;.
     */
    favorite?: Schema$ActivityContentDetailsFavorite;
    /**
     * The &lt;code&gt;like&lt;/code&gt; object contains information about a resource that received a positive (like) rating. This property is only present if the &lt;code&gt;snippet.type&lt;/code&gt; is &lt;code&gt;like&lt;/code&gt;.
     */
    like?: Schema$ActivityContentDetailsLike;
    /**
     * The &lt;code&gt;playlistItem&lt;/code&gt; object contains information about a new playlist item. This property is only present if the &lt;code&gt;snippet.type&lt;/code&gt; is &lt;code&gt;playlistItem&lt;/code&gt;.
     */
    playlistItem?: Schema$ActivityContentDetailsPlaylistItem;
    /**
     * The &lt;code&gt;promotedItem&lt;/code&gt; object contains details about a resource which is being promoted. This property is only present if the &lt;code&gt;snippet.type&lt;/code&gt; is &lt;code&gt;promotedItem&lt;/code&gt;.
     */
    promotedItem?: Schema$ActivityContentDetailsPromotedItem;
    /**
     * The &lt;code&gt;recommendation&lt;/code&gt; object contains information about a recommended resource. This property is only present if the &lt;code&gt;snippet.type&lt;/code&gt; is &lt;code&gt;recommendation&lt;/code&gt;.
     */
    recommendation?: Schema$ActivityContentDetailsRecommendation;
    /**
     * The &lt;code&gt;social&lt;/code&gt; object contains details about a social network post. This property is only present if the &lt;code&gt;snippet.type&lt;/code&gt; is &lt;code&gt;social&lt;/code&gt;.
     */
    social?: Schema$ActivityContentDetailsSocial;
    /**
     * The &lt;code&gt;subscription&lt;/code&gt; object contains information about a channel that a user subscribed to. This property is only present if the &lt;code&gt;snippet.type&lt;/code&gt; is &lt;code&gt;subscription&lt;/code&gt;.
     */
    subscription?: Schema$ActivityContentDetailsSubscription;
    /**
     * The &lt;code&gt;upload&lt;/code&gt; object contains information about the uploaded video. This property is only present if the &lt;code&gt;snippet.type&lt;/code&gt; is &lt;code&gt;upload&lt;/code&gt;.
     */
    upload?: Schema$ActivityContentDetailsUpload;
  }
  /**
   * Details about a channel bulletin post.
   */
  export interface Schema$ActivityContentDetailsBulletin {
    /**
     * The &lt;code&gt;resourceId&lt;/code&gt; object contains information that identifies the resource associated with a bulletin post. @mutable youtube.activities.insert
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Details about a resource which was added to a channel.
   */
  export interface Schema$ActivityContentDetailsChannelItem {
    /**
     * The &lt;code&gt;resourceId&lt;/code&gt; object contains information that identifies the resource that was added to the channel.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Information about a resource that received a comment.
   */
  export interface Schema$ActivityContentDetailsComment {
    /**
     * The &lt;code&gt;resourceId&lt;/code&gt; object contains information that identifies the resource associated with the comment.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Information about a video that was marked as a favorite video.
   */
  export interface Schema$ActivityContentDetailsFavorite {
    /**
     * The &lt;code&gt;resourceId&lt;/code&gt; object contains information that identifies the resource that was marked as a favorite.
     */
    resourceId?: Schema$ResourceId;
  }
  /**
   * Information about a resource that received a positive (like) rating.
   */
  export interface Schema$ActivityContentDetailsLike {
    /**
     * The &lt;code&gt;resourceId&lt;/code&gt; object contains information that identifies the rated resource.
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
     * The &lt;code&gt;resourceId&lt;/code&gt; object contains information about the resource that was added to the playlist.
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
     * The &lt;code&gt;resourceId&lt;/code&gt; object contains information that identifies the recommended resource.
     */
    resourceId?: Schema$ResourceId;
    /**
     * The &lt;code&gt;seedResourceId&lt;/code&gt; object contains information about the resource that caused the recommendation.
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
     * The &lt;code&gt;resourceId&lt;/code&gt; object encapsulates information that identifies the resource associated with a social network post.
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
     * The &lt;code&gt;resourceId&lt;/code&gt; object contains information that identifies the resource that the user subscribed to.
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
    items?: Schema$Activity[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#activityListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about an activity, including title, description, thumbnails, activity type and group. Next ID: 12
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
     * The description of the resource primarily associated with the activity. @mutable youtube.activities.insert
     */
    description?: string | null;
    /**
     * The group ID associated with the activity. A group ID identifies user events that are associated with the same user and resource. For example, if a user rates a video and marks the same video as a favorite, the entries for those events would have the same group ID in the user&#39;s activity feed. In your user interface, you can avoid repetition by grouping events with the same &lt;code&gt;groupId&lt;/code&gt; value.
     */
    groupId?: string | null;
    /**
     * The date and time that the video was uploaded. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
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
   * A &lt;code&gt;&lt;strong&gt;caption&lt;/strong&gt;&lt;/code&gt; resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#caption&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the caption.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#captionListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
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
     * The reason that YouTube failed to process the caption track. This property is only present if the &lt;code&gt;&lt;a href=&quot;#state&quot;&gt;state&lt;/a&gt;&lt;/code&gt; property&#39;s value is &lt;code&gt;failed&lt;/code&gt;.
     */
    failureReason?: string | null;
    /**
     * Indicates whether YouTube synchronized the caption track to the audio track in the video. The value will be &lt;code&gt;true&lt;/code&gt; if a sync was explicitly requested when the caption track was uploaded. For example, when calling the &lt;code&gt;captions.insert&lt;/code&gt; or &lt;code&gt;captions.update&lt;/code&gt; methods, you can set the &lt;code&gt;sync&lt;/code&gt; parameter to &lt;code&gt;true&lt;/code&gt; to instruct YouTube to sync the uploaded track to the video. If the value is &lt;code&gt;false&lt;/code&gt;, YouTube uses the time codes in the uploaded caption track to determine when to display captions.
     */
    isAutoSynced?: boolean | null;
    /**
     * Indicates whether the track contains closed captions for the deaf and hard of hearing. The default value is &lt;code&gt;false&lt;/code&gt;.
     */
    isCC?: boolean | null;
    /**
     * Indicates whether the caption track is a draft. If the value is &lt;code&gt;true&lt;/code&gt;, then the track is not publicly visible. The default value is &lt;code&gt;false&lt;/code&gt;. @mutable youtube.captions.insert youtube.captions.update
     */
    isDraft?: boolean | null;
    /**
     * Indicates whether caption track is formatted for &quot;easy reader,&quot; meaning it is at a third-grade level for language learners. The default value is &lt;code&gt;false&lt;/code&gt;.
     */
    isEasyReader?: boolean | null;
    /**
     * Indicates whether the caption track uses large text for the vision-impaired. The default value is &lt;code&gt;false&lt;/code&gt;.
     */
    isLarge?: boolean | null;
    /**
     * The language of the caption track. The property value is a &lt;a href=&quot;http://www.rfc-editor.org/rfc/bcp/bcp47.txt&quot;&gt;BCP-47&lt;/a&gt;  language tag.
     */
    language?: string | null;
    /**
     * The date and time when the caption track was last updated. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
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
     * The ID that YouTube uses to uniquely identify the video associated with the caption track. @mutable youtube.captions.insert
     */
    videoId?: string | null;
  }
  /**
   * Brief description of the live stream cdn settings.
   */
  export interface Schema$CdnSettings {
    /**
     * The format of the video stream that you are sending to Youtube. &lt;br&gt;&lt;br&gt;
     */
    format?: string | null;
    /**
     * The frame rate of the inbound video data.
     */
    frameRate?: string | null;
    /**
     * The &lt;code&gt;ingestionInfo&lt;/code&gt; object contains information that YouTube provides that you need to transmit your RTMP or HTTP stream to YouTube.
     */
    ingestionInfo?: Schema$IngestionInfo;
    /**
     *  The method or protocol used to transmit the video stream.
     */
    ingestionType?: string | null;
    /**
     * The resolution of the inbound video data.
     */
    resolution?: string | null;
  }
  /**
   * A &lt;code&gt;&lt;strong&gt;channel&lt;/strong&gt;&lt;/code&gt; resource contains information about a YouTube channel.
   */
  export interface Schema$Channel {
    /**
     * The &lt;code&gt;auditionDetails&lt;/code&gt; object encapsulates channel data that is relevant for YouTube Partners during the audition process.
     */
    auditDetails?: Schema$ChannelAuditDetails;
    /**
     * The &lt;code&gt;brandingSettings&lt;/code&gt; object encapsulates information about the branding of the channel.
     */
    brandingSettings?: Schema$ChannelBrandingSettings;
    /**
     * The &lt;code&gt;contentDetails&lt;/code&gt; object encapsulates information about the channel&#39;s content.
     */
    contentDetails?: Schema$ChannelContentDetails;
    /**
     * The &lt;code&gt;contentOwnerDetails&lt;/code&gt; object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
     */
    contentOwnerDetails?: Schema$ChannelContentOwnerDetails;
    /**
     * The &lt;code&gt;conversionPings&lt;/code&gt; object encapsulates information about conversion pings that need to be respected by the channel.
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
     * The &lt;code&gt;invideoPromotion&lt;/code&gt; object encapsulates information about promotion campaign associated with the channel.
     */
    invideoPromotion?: Schema$InvideoPromotion;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#channel&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * Localizations for different languages
     */
    localizations?: {[key: string]: Schema$ChannelLocalization} | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the channel, such as its title, description, and thumbnail images.
     */
    snippet?: Schema$ChannelSnippet;
    /**
     * The &lt;code&gt;statistics&lt;/code&gt; object encapsulates statistics for the channel.
     */
    statistics?: Schema$ChannelStatistics;
    /**
     * The &lt;code&gt;status&lt;/code&gt; object encapsulates information about the privacy status of the channel.
     */
    status?: Schema$ChannelStatus;
    /**
     * The &lt;code&gt;topicDetails&lt;/code&gt; object encapsulates information about &lt;a href=&quot;http://www.freebase.com&quot;&gt;Freebase&lt;/a&gt; topics associated with the channel.
     */
    topicDetails?: Schema$ChannelTopicDetails;
  }
  /**
   * The &lt;code&gt;auditDetails&lt;/code&gt; object encapsulates channel data that is relevant for YouTube Partners during the audit process.
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
    etag?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#channelBannerResource&quot;&lt;/code&gt;.
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
   * The &lt;code&gt;contentOwnerDetails&lt;/code&gt; object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
   */
  export interface Schema$ChannelContentOwnerDetails {
    /**
     * The ID of the content owner linked to the channel.
     */
    contentOwner?: string | null;
    /**
     * The date and time of when the channel was linked to the content owner. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
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
   * The &lt;code&gt;conversionPings&lt;/code&gt; object encapsulates information about conversion pings that need to be respected by the channel.
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
    items?: Schema$Channel[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#channelListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
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
     * The &lt;code&gt;contentDetails&lt;/code&gt; object contains details about the channel section content, such as a list of playlists or channels featured in the section.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#channelSection&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * Localizations for different languages
     */
    localizations?: {[key: string]: Schema$ChannelSectionLocalization} | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the channel section, such as its type, style and title.
     */
    snippet?: Schema$ChannelSectionSnippet;
    /**
     * The &lt;code&gt;targeting&lt;/code&gt; object contains basic targeting settings about the channel section.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#channelSectionListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
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
     * The date and time that the channel was created. The value is specified in &lt; a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
     */
    publishedAt?: string | null;
    /**
     * A map of thumbnail images associated with the channel. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.&lt;br&gt;&lt;br&gt; When displaying thumbnails in your application, make sure that your code uses the image URLs exactly as they are returned in API responses. For example, your application should not use the &lt;code&gt;http&lt;/code&gt; domain instead of the &lt;code&gt;https&lt;/code&gt; domain in a URL returned in an API response.&lt;br&gt;&lt;br&gt; Beginning in July 2018, channel thumbnail URLs will only be available in the &lt;code&gt;https&lt;/code&gt; domain, which is how the URLs appear in API responses. After that time, you might see broken images in your application if it tries to load YouTube images from the &lt;code&gt;http&lt;/code&gt; domain.
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
     * The long uploads status of this channel. See https://support.google.com/youtube/answer/71673 for more information.
     */
    longUploadsStatus?: string | null;
    madeForKids?: boolean | null;
    /**
     * Privacy status of the channel.
     */
    privacyStatus?: string | null;
    selfDeclaredMadeForKids?: boolean | null;
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
     * A list of Freebase topic IDs associated with the channel. You can retrieve information about each topic using the &lt;a href=&quot;http://wiki.freebase.com/wiki/Topic_API&quot;&gt;Freebase Topic API&lt;/a&gt;.
     */
    topicIds?: string[] | null;
  }
  /**
   * A &lt;code&gt;&lt;strong&gt;comment&lt;/strong&gt;&lt;/code&gt; represents a single YouTube comment.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#comment&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the comment.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#commentListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about a comment, such as its author and text.
   */
  export interface Schema$CommentSnippet {
    authorChannelId?: Schema$CommentSnippetAuthorChannelId;
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
     * The date and time when the comment was orignally published. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
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
     * The date and time when was last updated . The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
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
   * The id of the author&#39;s YouTube channel, if any.
   */
  export interface Schema$CommentSnippetAuthorChannelId {
    value?: string | null;
  }
  /**
   * A &lt;code&gt;&lt;strong&gt;comment thread&lt;/strong&gt;&lt;/code&gt; represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#commentThread&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;replies&lt;/code&gt; object contains a limited number of replies (if any) to the top level comment found in the snippet.
     */
    replies?: Schema$CommentThreadReplies;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the comment thread and also the top level comment.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#commentThreadListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
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
   * Ratings schemes. The country-specific ratings are mostly for movies and shows. LINT.IfChange
   */
  export interface Schema$ContentRating {
    /**
     * The video&#39;s Australian Classification Board (ACB) or Australian Communications and Media Authority (ACMA) rating. ACMA ratings are used to classify children&#39;s television programming.
     */
    acbRating?: string | null;
    /**
     * The video&#39;s rating from Italy&#39;s Autorit&amp;agrave; per le Garanzie nelle Comunicazioni (AGCOM).
     */
    agcomRating?: string | null;
    /**
     * The video&#39;s Anatel (Asociaci&amp;oacute;n Nacional de Televisi&amp;oacute;n) rating for Chilean television.
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
     * The video&#39;s rating from the Austrian Board of Media Classification (Bundesministerium f&amp;uuml;r Unterricht, Kunst und Kultur).
     */
    bmukkRating?: string | null;
    /**
     * The video&#39;s rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian French-language broadcasts. For more information, see the &lt;a href=&quot;http://www.cbsc.ca/english/agvot/frenchsystem.php&quot;&gt;Canadian Broadcast Standards Council&lt;/a&gt; website.
     */
    catvfrRating?: string | null;
    /**
     * Rating system for Canadian TV - Canadian TV Classification System The video&#39;s rating from the Canadian Radio-Television and Telecommunications Commission (CRTC) for Canadian English-language broadcasts. For more information, see the &lt;a href=&quot;http://www.cbsc.ca/english/agvot/englishsystem.php&quot;&gt;Canadian Broadcast Standards Council&lt;/a&gt; website.
     */
    catvRating?: string | null;
    /**
     * The video&#39;s Central Board of Film Certification (CBFC - India) rating.
     */
    cbfcRating?: string | null;
    /**
     * The video&#39;s Consejo de Calificaci&amp;oacute;n Cinematogr&amp;aacute;fica (Chile) rating.
     */
    cccRating?: string | null;
    /**
     * The video&#39;s rating from Portugal&#39;s Comiss&amp;atilde;o de Classifica&amp;ccedil;&amp;atilde;o de Espect&amp;acute;culos.
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
     * The video&#39;s rating from the Commission de Contr&amp;ocirc;le des Films (Belgium).
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
     * The video&#39;s rating from France&#39;s Conseil sup&amp;eacute;rieur de l’audiovisuel, which rates broadcast content.
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
     * The video&#39;s Departamento de Justi&amp;ccedil;a, Classifica&amp;ccedil;&amp;atilde;o, Qualifica&amp;ccedil;&amp;atilde;o e T&amp;iacute;tulos (DJCQT - Brazil) rating.
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
     * The video&#39;s Eirin (&amp;#26144;&amp;#20523;) rating. Eirin is the Japanese rating system.
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
     * &lt;span class=&quot;deprecated&quot;&gt;This property has been deprecated. Use the &lt;code&gt;&lt;a href=&quot;#contentDetails.contentRating.cncRating&quot;&gt;contentDetails.contentRating.cncRating&lt;/a&gt;&lt;/code&gt; instead.&lt;/span&gt;
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
     * The video&#39;s Instituto de la Cinematograf&amp;iacute;a y de las Artes Audiovisuales (ICAA - Spain) rating.
     */
    icaaRating?: string | null;
    /**
     * The video&#39;s Irish Film Classification Office (IFCO - Ireland) rating. See the &lt;a href=&quot;http://www.ifco.ie/website/ifco/ifcoweb.nsf/web/classcatintro&quot;&gt;IFCO&lt;/a&gt; website for more information.
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
     * The video&#39;s NICAM/Kijkwijzer rating from the Nederlands Instituut voor de Classificatie van Audiovisuele Media (Netherlands).
     */
    kijkwijzerRating?: string | null;
    /**
     * The video&#39;s Korea Media Rating Board (&amp;#50689;&amp;#49345;&amp;#47932;&amp;#46321;&amp;#44553;&amp;#50948;&amp;#50896;&amp;#54924;) rating. The KMRB rates videos in South Korea.
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
     * The rating system for MENA countries, a clone of MPAA. It is needed to prevent titles go live w/o additional QC check, since some of them can be inappropriate for the countries at all. See b/33408548 for more details.
     */
    menaMpaaRating?: string | null;
    /**
     * The video&#39;s rating from the Ministero dei Beni e delle Attivit&amp;agrave; Culturali e del Turismo (Italy).
     */
    mibacRating?: string | null;
    /**
     * The video&#39;s Ministerio de Cultura (Colombia) rating.
     */
    mocRating?: string | null;
    /**
     * The video&#39;s rating from Taiwan&#39;s Ministry of Culture (&amp;#25991;&amp;#21270;&amp;#37096;).
     */
    moctwRating?: string | null;
    /**
     * The video&#39;s Motion Picture Association of America (MPAA) rating.
     */
    mpaaRating?: string | null;
    /**
     * The rating system for trailer, DVD, and Ad in the US.  See http://movielabs.com/md/ratings/v2.3/html/US_MPAAT_Ratings.html.
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
     * The video&#39;s rating from the &lt;a href=&quot;http://www.nfc.bg/&quot;&gt;Bulgarian National Film Center&lt;/a&gt;.
     */
    nfrcRating?: string | null;
    /**
     * The video&#39;s rating from Nigeria&#39;s National Film and Video Censors Board.
     */
    nfvcbRating?: string | null;
    /**
     * The video&#39;s rating from the Nacion&amp;atilde;lais Kino centrs (National Film Centre of Latvia).
     */
    nkclvRating?: string | null;
    /**
     * The National Media Council ratings system for United Arab Emirates.
     */
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
     * The video&#39;s rating from Ireland&#39;s Raidi&amp;oacute; Teilif&amp;iacute;s &amp;Eacute;ireann.
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
     * The video&#39;s rating from Statens medier&amp;aring;d (Sweden&#39;s National Media Council).
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
   * A &lt;code&gt;&lt;strong&gt;guideCategory&lt;/strong&gt;&lt;/code&gt; resource identifies a category that YouTube algorithmically assigns based on a channel&#39;s content or other indicators, such as the channel&#39;s popularity. The list is similar to &lt;a href=\&quot;/youtube/v3/docs/videocategory.html\&quot;&gt;video categories&lt;/a&gt;, with the difference being that a video&#39;s uploader can assign a video category but only YouTube can assign a channel category.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#guideCategory&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the category, such as its title.
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
     * A list of categories that can be associated with YouTube channels. In this map, the category ID is the map key, and its value is the corresponding &lt;code&gt;guideCategory&lt;/code&gt; resource.
     */
    items?: Schema$GuideCategory[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#guideCategoryListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
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
   * An &lt;code&gt;&lt;strong&gt;i18nLanguage&lt;/strong&gt;&lt;/code&gt; resource identifies a UI language currently supported by YouTube.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#i18nLanguage&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the i18n language, such as language code and human-readable name.
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
     * A list of supported i18n languages. In this map, the i18n language ID is the map key, and its value is the corresponding &lt;code&gt;i18nLanguage&lt;/code&gt; resource.
     */
    items?: Schema$I18nLanguage[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#i18nLanguageListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
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
   * A &lt;code&gt;&lt;strong&gt;i18nRegion&lt;/strong&gt;&lt;/code&gt; resource identifies a region where YouTube is available.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#i18nRegion&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the i18n region, such as region code and human-readable name.
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
     * A list of regions where YouTube is available. In this map, the i18n region ID is the map key, and its value is the corresponding &lt;code&gt;i18nRegion&lt;/code&gt; resource.
     */
    items?: Schema$I18nRegion[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#i18nRegionListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
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
     * The URL for the 640px by 70px banner image that appears below the video player in the default view of the video watch page. The URL for the image that appears above the top-left corner of the video player. This is a 25-pixel-high image with a flexible width that cannot exceed 170 pixels.
     */
    smallBrandedBannerImageUrl?: Schema$LocalizedProperty;
    /**
     * The URL for a 1px by 1px tracking pixel that can be used to collect statistics for views of the channel or video pages.
     */
    trackingImageUrl?: string | null;
    watchIconImageUrl?: string | null;
  }
  /**
   * Describes information necessary for ingesting an RTMP or an HTTP stream.
   */
  export interface Schema$IngestionInfo {
    /**
     * The backup ingestion URL that you should use to stream video to YouTube. You have the option of simultaneously streaming the content that you are sending to the &lt;code&gt;ingestionAddress&lt;/code&gt; to this URL.
     */
    backupIngestionAddress?: string | null;
    /**
     * The primary ingestion URL that you should use to stream video to YouTube. You must stream video to this URL.&lt;br&gt;&lt;br&gt; Depending on which application or tool you use to encode your video stream, you may need to enter the stream URL and stream name separately or you may need to concatenate them in the following format:&lt;br&gt;&lt;pre&gt;&lt;strong&gt;STREAM_URL/STREAM_NAME&lt;/strong&gt;&lt;/pre&gt;
     */
    ingestionAddress?: string | null;
    /**
     * This ingestion url may be used instead of &lt;code&gt;backupIngestionAddress&lt;/code&gt; in order to stream via RTMPS. Not applicable to non-RTMP streams.
     */
    rtmpsBackupIngestionAddress?: string | null;
    /**
     * This ingestion url may be used instead of &lt;code&gt;ingestionAddress&lt;/code&gt; in order to stream via RTMPS. Not applicable to non-RTMP streams.
     */
    rtmpsIngestionAddress?: string | null;
    /**
     * The HTTP or RTMP stream name that YouTube assigns to the video stream.
     */
    streamName?: string | null;
  }
  /**
   * LINT.IfChange Describes an invideo branding.
   */
  export interface Schema$InvideoBranding {
    /**
     * The bytes the uploaded image. Only used in api to youtube communication.
     */
    imageBytes?: string | null;
    /**
     * The url of the uploaded image. Only used in apiary to api communication.
     */
    imageUrl?: string | null;
    /**
     * The spatial position within the video where the branding watermark will be displayed.
     */
    position?: Schema$InvideoPosition;
    /**
     * The channel to which this branding links. If not present it defaults to the current channel.
     */
    targetChannelId?: string | null;
    /**
     * The temporal position within the video where watermark will be displayed.
     */
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
     * The default temporal position within the video where the promoted item will be displayed. Can be overridden by more specific timing in the item.
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
     * Defines the time at which the promotion will appear. Depending on the value of &lt;code&gt;type&lt;/code&gt; the value of the &lt;code&gt;offsetMs&lt;/code&gt; field will represent a time offset from the start or from the end of the video, expressed in milliseconds.
     */
    offsetMs?: string | null;
    /**
     * Describes a timing type. If the value is &lt;code&gt;offsetFromStart&lt;/code&gt;, then the &lt;code&gt;offsetMs&lt;/code&gt; field represents an offset from the start of the video. If the value is &lt;code&gt;offsetFromEnd&lt;/code&gt;, then the &lt;code&gt;offsetMs&lt;/code&gt; field represents an offset from the end of the video.
     */
    type?: string | null;
  }
  export interface Schema$LanguageTag {
    value?: string | null;
  }
  export interface Schema$LevelDetails {
    /**
     * The name that should be used when referring to this level.
     */
    displayName?: string | null;
  }
  /**
   * A &lt;code&gt;&lt;strong&gt;liveBroadcast&lt;/strong&gt;&lt;/code&gt; resource represents an event that will be streamed, via live video, on YouTube.
   */
  export interface Schema$LiveBroadcast {
    /**
     * The &lt;code&gt;contentDetails&lt;/code&gt; object contains information about the event&#39;s video content, such as whether the content can be shown in an embedded video player or if it will be archived and therefore available for viewing after the event has concluded.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#liveBroadcast&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the event, including its title, description, start time, and end time.
     */
    snippet?: Schema$LiveBroadcastSnippet;
    /**
     * The &lt;code&gt;statistics&lt;/code&gt; object contains info about the event&#39;s current stats. These include concurrent viewers and total chat count. Statistics can change (in either direction) during the lifetime of an event. Statistics are only returned while the event is live.
     */
    statistics?: Schema$LiveBroadcastStatistics;
    /**
     * The &lt;code&gt;status&lt;/code&gt; object contains information about the event&#39;s status.
     */
    status?: Schema$LiveBroadcastStatus;
  }
  /**
   * Detailed settings of a broadcast.
   */
  export interface Schema$LiveBroadcastContentDetails {
    /**
     * This value uniquely identifies the &lt;code&gt;&lt;a href=&quot;/youtube/v3/live/docs/liveStreams&quot;&gt;live stream&lt;/a&gt;&lt;/code&gt; bound to the broadcast.
     */
    boundStreamId?: string | null;
    /**
     * The date and time that the live stream referenced by &lt;code&gt;boundStreamId&lt;/code&gt; was last updated.
     */
    boundStreamLastUpdateTimeMs?: string | null;
    closedCaptionsType?: string | null;
    /**
     * This setting indicates whether auto start is enabled for this broadcast.  The default value for this property is &lt;code&gt;false&lt;/code&gt;.&lt;br&gt;&lt;br&gt;  This setting can only be used by Events.
     */
    enableAutoStart?: boolean | null;
    /**
     * This setting indicates whether auto stop is enabled for this broadcast. The default value for this property is &lt;code&gt;false&lt;/code&gt;.&lt;br&gt;&lt;br&gt; This setting can only be used by Events.
     */
    enableAutoStop?: boolean | null;
    /**
     * This setting indicates whether HTTP POST closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through the liveStreams API.  This is mutually exclusive with using the &lt;code&gt;closed_captions_type&lt;/code&gt; property, and is equivalent to setting &lt;code&gt;closed_captions_type&lt;/code&gt; to CLOSED_CAPTIONS_HTTP_POST.
     */
    enableClosedCaptions?: boolean | null;
    /**
     * This setting indicates whether YouTube should enable content encryption for the broadcast.
     */
    enableContentEncryption?: boolean | null;
    /**
     * This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback experience by pausing, rewinding, or fast forwarding content. The default value for this property is &lt;code&gt;true&lt;/code&gt;.&lt;br&gt;&lt;br&gt;  &lt;strong&gt;Important:&lt;/strong&gt; You must set the value to &lt;code&gt;true&lt;/code&gt; and also set the &lt;code&gt;enableArchive&lt;/code&gt; property&#39;s value to &lt;code&gt;true&lt;/code&gt; if you want to make playback available immediately after the broadcast ends.
     */
    enableDvr?: boolean | null;
    /**
     * This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the &lt;code&gt;enableArchive&lt;/code&gt; property), this setting will also apply to the archived video.
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
    /**
     * The mesh for projecting the video if &lt;code&gt;projection&lt;/code&gt; is &lt;code&gt;mesh&lt;/code&gt;. The mesh value must be a UTF-8 string containing the base-64 encoding of 3D mesh data that follows the &lt;a href=&quot;https://github.com/google/spatial-media/blob/master/docs/spherical-video-v2-rfc.md&quot;&gt; Spherical Video V2 RFC specification&lt;/a&gt; for an mshp box, excluding the box size and type but including the following four reserved zero bytes for the version and flags.
     */
    mesh?: string | null;
    /**
     * The &lt;code&gt;monitorStream&lt;/code&gt; object contains information about the monitor stream, which the broadcaster can use to review the event content before the broadcast stream is shown publicly.
     */
    monitorStream?: Schema$MonitorStreamInfo;
    /**
     * The projection format of this broadcast. This defaults to &lt;code&gt;rectangular&lt;/code&gt;.
     */
    projection?: string | null;
    /**
     * Automatically start recording after the event goes live. The default value for this property is &lt;code&gt;true&lt;/code&gt;.&lt;br&gt;&lt;br&gt;  &lt;strong&gt;Important:&lt;/strong&gt; You must also set the &lt;code&gt;enableDvr&lt;/code&gt; property&#39;s value to &lt;code&gt;true&lt;/code&gt; if you want the playback to be available immediately after the broadcast ends. If you set this property&#39;s value to &lt;code&gt;true&lt;/code&gt; but do not also set the &lt;code&gt;enableDvr&lt;/code&gt; property to &lt;code&gt;true&lt;/code&gt;, there may be a delay of around one day before the archived video will be available for playback.
     */
    recordFromStart?: boolean | null;
    /**
     * This setting indicates whether the broadcast should automatically begin with an &lt;a href=&quot;/youtube/v3/live/getting-started#Displaying_Slates&quot;&gt;in-stream slate&lt;/a&gt; when you update the broadcast&#39;s status to &lt;code&gt;live&lt;/code&gt;. After updating the status, you then need to send a &lt;code&gt;&lt;a href=&quot;/youtube/v3/live/docs/liveCuepoints/insert&quot;&gt;liveCuepoints.insert&lt;/a&gt;&lt;/code&gt; request that sets the cuepoint&#39;s &lt;code&gt;eventState&lt;/code&gt; to &lt;code&gt;end&lt;/code&gt; to remove the in-stream slate and make your broadcast stream visible to viewers.
     */
    startWithSlate?: boolean | null;
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#liveBroadcastListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic broadcast information.
   */
  export interface Schema$LiveBroadcastSnippet {
    /**
     * The date and time that the broadcast actually ended. This information is only available once the broadcast&#39;s state is &lt;code&gt;complete&lt;/code&gt;. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
     */
    actualEndTime?: string | null;
    /**
     * The date and time that the broadcast actually started. This information is only available once the broadcast&#39;s state is &lt;code&gt;live&lt;/code&gt;. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
     */
    actualStartTime?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast.
     */
    channelId?: string | null;
    /**
     * The broadcast&#39;s description. As with the &lt;code&gt;title&lt;/code&gt;, you can set this field by modifying the broadcast resource or by setting the &lt;code&gt;&lt;a href=&quot;/youtube/v3/docs/videos#snippet.description&quot;&gt;description&lt;/a&gt;&lt;/code&gt; field of the corresponding video resource.
     */
    description?: string | null;
    /**
     * Indicates whether this broadcast is the default broadcast. Internal only.
     */
    isDefaultBroadcast?: boolean | null;
    /**
     * The id of the live chat for this broadcast.
     */
    liveChatId?: string | null;
    /**
     * The date and time that the broadcast was added to YouTube&#39;s live broadcast schedule. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
     */
    publishedAt?: string | null;
    /**
     * The date and time that the broadcast is scheduled to end. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
     */
    scheduledEndTime?: string | null;
    /**
     * The date and time that the broadcast is scheduled to start. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
     */
    scheduledStartTime?: string | null;
    /**
     * A map of thumbnail images associated with the broadcast. For each nested object in this object, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails?: Schema$ThumbnailDetails;
    /**
     * The broadcast&#39;s title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the &lt;code&gt;&lt;a href=&quot;/youtube/v3/docs/videos#snippet.title&quot;&gt;title&lt;/a&gt;&lt;/code&gt; field of the corresponding video resource.
     */
    title?: string | null;
  }
  /**
   * Statistics about the live broadcast. These represent a snapshot of the values at the time of the request. Statistics are only returned for live broadcasts.
   */
  export interface Schema$LiveBroadcastStatistics {
    /**
     * The total number of live chat messages currently on the broadcast. The property and its value will be present if the broadcast is public, has the live chat feature enabled, and has at least one message. Note that this field will not be filled after the broadcast ends. So this property would not identify the number of chat messages for an archived video of a completed live broadcast.
     */
    totalChatCount?: string | null;
  }
  /**
   * Live broadcast state.
   */
  export interface Schema$LiveBroadcastStatus {
    /**
     * The broadcast&#39;s status. The status can be updated using the API&#39;s &lt;code&gt;&lt;a href=&quot;/youtube/v3/live/docs/liveBroadcasts/transition&quot; &gt;liveBroadcasts.transition&lt;/a&gt;&lt;/code&gt; method.
     */
    lifeCycleStatus?: string | null;
    /**
     * Priority of the live broadcast event (internal state).
     */
    liveBroadcastPriority?: string | null;
    /**
     * Whether the broadcast is made for kids or not, decided by YouTube instead of the creator. This field is read only.
     */
    madeForKids?: boolean | null;
    /**
     * The broadcast&#39;s privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the &lt;code&gt;&lt;a href=&quot;/youtube/v3/docs/videos#status.privacyStatus&quot; &gt;privacyStatus&lt;/a&gt;&lt;/code&gt; field of the corresponding video resource.
     */
    privacyStatus?: string | null;
    /**
     * The broadcast&#39;s recording status.
     */
    recordingStatus?: string | null;
    /**
     * This field will be set to True if the creator declares the broadcast to be kids only: go/live-cw-work.
     */
    selfDeclaredMadeForKids?: boolean | null;
  }
  /**
   * A `__liveChatBan__` resource represents a ban for a YouTube live chat.
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
     * Identifies what kind of resource this is. Value: the fixed string `&quot;youtube#liveChatBan&quot;`.
     */
    kind?: string | null;
    /**
     * The `snippet` object contains basic details about the ban.
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
   * A &lt;code&gt;&lt;strong&gt;liveChatMessage&lt;/strong&gt;&lt;/code&gt; resource represents a chat message in a YouTube Live Chat.
   */
  export interface Schema$LiveChatMessage {
    /**
     * The &lt;code&gt;authorDetails&lt;/code&gt; object contains basic details about the user that posted this message.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#liveChatMessage&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the message.
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
    items?: Schema$LiveChatMessage[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#liveChatMessageListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    nextPageToken?: string | null;
    /**
     * The date and time when the underlying stream went offline. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
     */
    offlineAt?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The amount of time the client should wait before polling again.
     */
    pollingIntervalMillis?: number | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
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
    /**
     * The date and time when the message was orignally published. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
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
   * A &lt;code&gt;&lt;strong&gt;liveChatModerator&lt;/strong&gt;&lt;/code&gt; resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#liveChatModerator&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the moderator.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#liveChatModeratorListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
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
     * The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is &lt;code&gt;1&lt;/code&gt;.
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
     * The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is &lt;code&gt;1&lt;/code&gt;.
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
     * The duration of the ban. This property is only present if the &lt;code&gt;banType&lt;/code&gt; is &lt;code&gt;temporary&lt;/code&gt;.
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
     * The &lt;code&gt;cdn&lt;/code&gt; object defines the live stream&#39;s content delivery network (CDN) settings. These settings provide details about the manner in which you stream your content to YouTube.
     */
    cdn?: Schema$CdnSettings;
    /**
     * The &lt;code&gt;content_details&lt;/code&gt; object contains information about the stream, including the closed captions ingestion URL.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#liveStream&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the stream, including its channel, title, and description.
     */
    snippet?: Schema$LiveStreamSnippet;
    /**
     * The &lt;code&gt;status&lt;/code&gt; object contains information about live stream&#39;s status.
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
     * Indicates whether the stream is reusable, which means that it can be bound to multiple broadcasts. It is common for broadcasters to reuse the same stream for many different broadcasts if those broadcasts occur at different times.&lt;br&gt;&lt;br&gt; If you set this value to &lt;code&gt;false&lt;/code&gt;, then the stream will not be reusable, which means that it can only be bound to one broadcast. Non-reusable streams differ from reusable streams in the following ways: &lt;ul&gt;   &lt;li&gt;A non-reusable stream can only be bound to one broadcast.&lt;/li&gt;   &lt;li&gt;A non-reusable stream might be deleted by an automated process     after the broadcast ends.&lt;/li&gt;   &lt;li&gt;The &lt;code&gt;&lt;a href=&quot;/youtube/v3/live/docs/liveStreams/list&quot;&gt;     liveStreams.list&lt;/a&gt;&lt;/code&gt; method does not list non-reusable streams     if you call the method and set the &lt;code&gt;mine&lt;/code&gt; parameter to     &lt;code&gt;true&lt;/code&gt;. The only way to use that method to retrieve the     resource for a non-reusable stream is to use the &lt;code&gt;id&lt;/code&gt;     parameter to identify the stream.&lt;/li&gt; &lt;/ul&gt;
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#liveStreamListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
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
     * The date and time that the stream was created. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
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
   * A &lt;code&gt;&lt;strong&gt;member&lt;/strong&gt;&lt;/code&gt; resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits.
   */
  export interface Schema$Member {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#member&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the member.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#memberListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$MembershipsDetails {
    /**
     * Ids of all levels that the user has access to. This includes the currently active level and all other levels that are included because of a higher purchase.
     */
    accessibleLevels?: string[] | null;
    /**
     * Id of the highest level that the user has access to at the moment.
     */
    highestAccessibleLevel?: string | null;
    /**
     * Display name for the highest level that the user has access to at the moment.
     */
    highestAccessibleLevelDisplayName?: string | null;
    /**
     * Data about memberships duration without taking into consideration pricing levels.
     */
    membershipsDuration?: Schema$MembershipsDuration;
    /**
     * Data about memberships duration on particular pricing levels.
     */
    membershipsDurationAtLevels?: Schema$MembershipsDurationAtLevel[];
  }
  export interface Schema$MembershipsDuration {
    /**
     * The date and time when the user became a continuous member across all levels.
     */
    memberSince?: string | null;
    /**
     * The cumulative time the user has been a member across all levels in complete months (the time is rounded down to the nearest integer).
     */
    memberTotalDurationMonths?: number | null;
  }
  export interface Schema$MembershipsDurationAtLevel {
    /**
     * Pricing level ID.
     */
    level?: string | null;
    /**
     * The date and time when the user became a continuous member for the given level.
     */
    memberSince?: string | null;
    /**
     * The cumulative time the user has been a member for the given level in complete months (the time is rounded down to the nearest integer).
     */
    memberTotalDurationMonths?: number | null;
  }
  /**
   * A &lt;code&gt;&lt;strong&gt;membershipsLevel&lt;/strong&gt;&lt;/code&gt; resource represents an offer made by YouTube creators for their fans. Users can become members of the channel by joining one of the available levels. They will provide recurring monetary support and receives special benefits.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#membershipsLevelListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the level.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#membershipsLevelListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$MembershipsLevelSnippet {
    /**
     * The id of the channel that&#39;s offering channel memberships.
     */
    creatorChannelId?: string | null;
    /**
     * Details about the pricing level.
     */
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
     * If you have set the &lt;code&gt;&lt;a href=&quot;#enableMonitorStream&quot;&gt;enableMonitorStream&lt;/a&gt;&lt;/code&gt; property to &lt;code&gt;true&lt;/code&gt;, then this property determines the length of the live broadcast delay.
     */
    broadcastStreamDelayMs?: number | null;
    /**
     * HTML code that embeds a player that plays the monitor stream.
     */
    embedHtml?: string | null;
    /**
     * This value determines whether the monitor stream is enabled for the broadcast. If the monitor stream is enabled, then YouTube will broadcast the event content on a special stream intended only for the broadcaster&#39;s consumption. The broadcaster can use the stream to review the event content and also to identify the optimal times to insert cuepoints.&lt;br&gt;&lt;br&gt; You need to set this value to &lt;code&gt;true&lt;/code&gt; if you intend to have a broadcast delay for your event.&lt;br&gt;&lt;br&gt; &lt;strong&gt;Note:&lt;/strong&gt; This property cannot be updated once the broadcast is in the &lt;code&gt;testing&lt;/code&gt; or &lt;code&gt;live&lt;/code&gt; state.
     */
    enableMonitorStream?: boolean | null;
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
   * A &lt;code&gt;&lt;strong&gt;playlist&lt;/strong&gt;&lt;/code&gt; resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private.  &lt;br/&gt;&lt;br/&gt; YouTube also uses playlists to identify special collections of videos for a channel, such as:   &lt;ul&gt;     &lt;li&gt;uploaded videos&lt;/li&gt;     &lt;li&gt;favorite videos&lt;/li&gt;     &lt;li&gt;positively rated (liked) videos&lt;/li&gt;     &lt;li&gt;watch history&lt;/li&gt;     &lt;li&gt;watch later&lt;/li&gt;   &lt;/ul&gt; To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company&#39;s videos, playlists, and other YouTube information.  You can retrieve the playlist IDs for each of these lists from the &lt;code&gt;&lt;a href=\&quot;/youtube/v3/docs/channels\&quot;&gt; channel resource&lt;/a&gt;&lt;/code&gt; for a given channel.&lt;br/&gt;&lt;br/&gt; You can then use the &lt;code&gt; &lt;a href=\&quot;/youtube/v3/docs/playlistItems/list\&quot;&gt; playlistItems.list&lt;/a&gt;&lt;/code&gt; method to retrieve any of those lists. You can also add or remove items from those lists by calling the &lt;code&gt; &lt;a href=\&quot;/youtube/v3/docs/playlistItems/insert\&quot;&gt; playlistItems.insert&lt;/a&gt;&lt;/code&gt; and &lt;code&gt; &lt;a href=\&quot;/youtube/v3/docs/playlistItems/delete\&quot;&gt; playlistItems.delete&lt;/a&gt;&lt;/code&gt; methods.
   */
  export interface Schema$Playlist {
    /**
     * The &lt;code&gt;contentDetails&lt;/code&gt; object contains information like video count.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#playlist&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * Localizations for different languages
     */
    localizations?: {[key: string]: Schema$PlaylistLocalization} | null;
    /**
     * The &lt;code&gt;player&lt;/code&gt; object contains information that you would use to play the playlist in an embedded player.
     */
    player?: Schema$PlaylistPlayer;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the playlist, such as its title and description.
     */
    snippet?: Schema$PlaylistSnippet;
    /**
     * The &lt;code&gt;status&lt;/code&gt; object contains status information for the playlist.
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
   * A &lt;code&gt;&lt;strong&gt;playlistItem&lt;/strong&gt;&lt;/code&gt; resource identifies another resource, such as a video, that is included in a playlist. In addition, the &lt;code&gt;playlistItem &lt;/code&gt; resource contains details about the included resource that pertain specifically to how that resource is used in that playlist.&lt;br/&gt;&lt;br/&gt; YouTube uses playlists to identify special collections of videos for a channel, such as:   &lt;ul&gt;     &lt;li&gt;uploaded videos&lt;/li&gt;     &lt;li&gt;favorite videos&lt;/li&gt;     &lt;li&gt;positively rated (liked) videos&lt;/li&gt;     &lt;li&gt;watch history&lt;/li&gt;     &lt;li&gt;watch later&lt;/li&gt;   &lt;/ul&gt;  To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company&#39;s videos, playlists, and other YouTube information. &lt;br/&gt;&lt;br/&gt;  You can retrieve the playlist IDs for each of these lists from the &lt;code&gt; &lt;a href=\&quot;/youtube/v3/docs/channels\&quot;&gt;channel resource&lt;/a&gt; &lt;/code&gt; for a given channel. You can then use the &lt;code&gt; &lt;a href=\&quot;/youtube/v3/docs/playlistItems/list\&quot;&gt; playlistItems.list&lt;/a&gt;&lt;/code&gt; method to retrieve any of those lists. You can also add or remove items from those lists by calling the &lt;code&gt; &lt;a href=\&quot;/youtube/v3/docs/playlistItems/insert\&quot;&gt; playlistItems.insert&lt;/a&gt;&lt;/code&gt; and &lt;code&gt; &lt;a href=\&quot;/youtube/v3/docs/playlistItems/delete\&quot;&gt; playlistItems.delete&lt;/a&gt;&lt;/code&gt; methods. For example, if a user gives a positive rating to a video, you would insert that video into the liked videos playlist for that user&#39;s channel.
   */
  export interface Schema$PlaylistItem {
    /**
     * The &lt;code&gt;contentDetails&lt;/code&gt; object is included in the resource if the included item is a YouTube video. The object contains additional information about the video.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#playlistItem&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the playlist item, such as its title and position in the playlist.
     */
    snippet?: Schema$PlaylistItemSnippet;
    /**
     * The &lt;code&gt;status&lt;/code&gt; object contains information about the playlist item&#39;s privacy status.
     */
    status?: Schema$PlaylistItemStatus;
  }
  export interface Schema$PlaylistItemContentDetails {
    /**
     * The time, measured in seconds from the start of the video, when the video should stop playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) By default, assume that the &lt;code&gt;video.endTime&lt;/code&gt; is the end of the video.
     */
    endAt?: string | null;
    /**
     * A user-generated note for this item.
     */
    note?: string | null;
    /**
     * The time, measured in seconds from the start of the video, when the video should start playing. (The playlist owner can specify the times when the video should start and stop playing when the video is played in the context of the playlist.) The default value is &lt;code&gt;0&lt;/code&gt;.
     */
    startAt?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify a video. To &lt;a href=&quot;/youtube/v3/docs/video/list.html&quot;&gt;retrieve the &lt;code&gt;video&lt;/code&gt; resource&lt;/a&gt;, set the &lt;code&gt;id&lt;/code&gt; query parameter to this value in your API request.
     */
    videoId?: string | null;
    /**
     * The date and time that the video was published to YouTube. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
     */
    videoPublishedAt?: string | null;
  }
  export interface Schema$PlaylistItemListResponse {
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#playlistItemListResponse&quot;&lt;/code&gt;. Etag of this resource.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Basic details about a playlist, including title, description and thumbnails. Basic details of a YouTube Playlist item provided by the author. Next ID: 13
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
     * The ID that YouTube uses to uniquely identify thGe playlist that the playlist item is in.
     */
    playlistId?: string | null;
    /**
     * The order in which the item appears in the playlist. The value uses a zero-based index, so the first item has a position of &lt;code&gt;0&lt;/code&gt;, the second item has a position of &lt;code&gt;1&lt;/code&gt;, and so forth.
     */
    position?: number | null;
    /**
     * The date and time that the item was added to the playlist. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
     */
    publishedAt?: string | null;
    /**
     * The &lt;code&gt;id&lt;/code&gt; object contains information that can be used to uniquely identify the resource that is included in the playlist as the playlist item.
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
     * A list of playlists that match the request criteria
     */
    items?: Schema$Playlist[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#playlistListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
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
     * An &lt;code&gt;&amp;lt;iframe&amp;gt;&lt;/code&gt; tag that embeds a player that will play the playlist.
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
     * The date and time that the playlist was created. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
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
     * If the promoted item represents a video, this field represents the unique YouTube ID identifying it. This field will be present only if &lt;code&gt;type&lt;/code&gt; has the value &lt;code&gt;video&lt;/code&gt;.
     */
    videoId?: string | null;
    /**
     * If the promoted item represents a website, this field represents the url pointing to the website. This field will be present only if &lt;code&gt;type&lt;/code&gt; has the value &lt;code&gt;website&lt;/code&gt;.
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
     * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the &lt;code&gt;resourceId.kind&lt;/code&gt; value is &lt;code&gt;youtube#channel&lt;/code&gt;.
     */
    channelId?: string | null;
    /**
     * The type of the API resource.
     */
    kind?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the &lt;code&gt;resourceId.kind&lt;/code&gt; value is &lt;code&gt;youtube#playlist&lt;/code&gt;.
     */
    playlistId?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the &lt;code&gt;resourceId.kind&lt;/code&gt; value is &lt;code&gt;youtube#video&lt;/code&gt;.
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
     * Pagination information for token pagination.
     */
    items?: Schema$SearchResult[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#searchListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    regionCode?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
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
     * The &lt;code&gt;id&lt;/code&gt; object contains information that can be used to uniquely identify the resource that matches the search request.
     */
    id?: Schema$ResourceId;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#searchResult&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about a search result, such as its title or description. For example, if the search result is a video, then the title will be the video&#39;s title and the description will be the video&#39;s description.
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
     * The creation date and time of the resource that the search result identifies. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
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
   * A `__sponsor__` resource represents a sponsor for a YouTube channel.  A sponsor provides recurring monetary support to a creator and receives special benefits.
   */
  export interface Schema$Sponsor {
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `&quot;youtube#sponsor&quot;`.
     */
    kind?: string | null;
    /**
     * The `snippet` object contains basic details about the sponsor.
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
     * Identifies what kind of resource this is. Value: the fixed string `&quot;youtube#sponsorListResponse&quot;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the `pageToken` parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The `visitorId` identifies the visitor.
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
     * The date and time when the user became a sponsor. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; (`YYYY-MM-DDThh:mm:ss.sZ`) format.
     */
    sponsorSince?: string | null;
  }
  /**
   * A &lt;code&gt;&lt;strong&gt;subscription&lt;/strong&gt;&lt;/code&gt; resource contains information about a YouTube user subscription.  A subscription notifies a user when new videos are added to a channel or when another user takes one of several actions on YouTube, such as uploading a video, rating a video, or commenting on a video.
   */
  export interface Schema$Subscription {
    /**
     * The &lt;code&gt;contentDetails&lt;/code&gt; object contains basic statistics about the subscription.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#subscription&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the subscription, including its title and the channel that the user subscribed to.
     */
    snippet?: Schema$SubscriptionSnippet;
    /**
     * The &lt;code&gt;subscriberSnippet&lt;/code&gt; object contains basic details about the subscriber.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#subscriptionListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
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
     * The date and time that the subscription was created. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
     */
    publishedAt?: string | null;
    /**
     * The &lt;code&gt;id&lt;/code&gt; object contains information about the channel that the user subscribed to.
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
   * A `__superChatEvent__` resource represents a Super Chat purchase on a YouTube channel.
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
     * Identifies what kind of resource this is. Value: the fixed string `&quot;youtube#superChatEvent&quot;`.
     */
    kind?: string | null;
    /**
     * The `snippet` object contains basic details about the Super Chat event.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#superChatEventListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    pageInfo?: Schema$PageInfo;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
     */
    visitorId?: string | null;
  }
  export interface Schema$SuperChatEventSnippet {
    /**
     * The purchase amount, in micros of the purchase currency.  e.g., 1 is represented as 1000000.
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
     * The date and time when the event occurred. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
     */
    createdAt?: string | null;
    /**
     * The currency in which the purchase was made.  ISO 4217.
     */
    currency?: string | null;
    /**
     * A rendered string that displays the purchase amount and currency (e.g., &quot;$1.00&quot;).  The string is rendered for the given language.
     */
    displayString?: string | null;
    /**
     * True if this event is a Super Sticker event.
     */
    isSuperStickerEvent?: boolean | null;
    /**
     * The tier for the paid message, which is based on the amount of money spent to purchase the message.
     */
    messageType?: number | null;
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
  export interface Schema$TestItem {
    id?: string | null;
    snippet?: Schema$TestItemTestItemSnippet;
  }
  export interface Schema$TestItemTestItemSnippet {}
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#thumbnailSetResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
     */
    visitorId?: string | null;
  }
  /**
   * Stub token pagination template to suppress results.
   */
  export interface Schema$TokenPagination {}
  /**
   * A &lt;code&gt;&lt;strong&gt;video&lt;/strong&gt;&lt;/code&gt; resource represents a YouTube video.
   */
  export interface Schema$Video {
    /**
     * Age restriction details related to a video. This data can only be retrieved by the video owner.
     */
    ageGating?: Schema$VideoAgeGating;
    /**
     * The &lt;code&gt;contentDetails&lt;/code&gt; object contains information about the video content, including the length of the video and its aspect ratio.
     */
    contentDetails?: Schema$VideoContentDetails;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The &lt;code&gt;fileDetails&lt;/code&gt; object encapsulates information about the video file that was uploaded to YouTube, including the file&#39;s resolution, duration, audio and video codecs, stream bitrates, and more. This data can only be retrieved by the video owner.
     */
    fileDetails?: Schema$VideoFileDetails;
    /**
     * The ID that YouTube uses to uniquely identify the video.
     */
    id?: string | null;
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#video&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;liveStreamingDetails&lt;/code&gt; object contains metadata about a live video broadcast. The object will only be present in a &lt;code&gt;video&lt;/code&gt; resource if the video is an upcoming, live, or completed live broadcast.
     */
    liveStreamingDetails?: Schema$VideoLiveStreamingDetails;
    /**
     * The &lt;code&gt;localizations&lt;/code&gt; object contains localized versions of the basic details about the video, such as its title and description.
     */
    localizations?: {[key: string]: Schema$VideoLocalization} | null;
    /**
     * The &lt;code&gt;monetizationDetails&lt;/code&gt; object encapsulates information about the monetization status of the video.
     */
    monetizationDetails?: Schema$VideoMonetizationDetails;
    /**
     * The &lt;code&gt;player&lt;/code&gt; object contains information that you would use to play the video in an embedded player.
     */
    player?: Schema$VideoPlayer;
    /**
     * The &lt;code&gt;processingDetails&lt;/code&gt; object encapsulates information about YouTube&#39;s progress in processing the uploaded video file. The properties in the object identify the current processing status and an estimate of the time remaining until YouTube finishes processing the video. This part also indicates whether different types of data or content, such as file details or thumbnail images, are available for the video.&lt;br&gt;&lt;br&gt; The &lt;code&gt;processingProgress&lt;/code&gt; object is designed to be polled so that the video uploaded can track the progress that YouTube has made in processing the uploaded video file. This data can only be retrieved by the video owner.
     */
    processingDetails?: Schema$VideoProcessingDetails;
    /**
     * The &lt;code&gt;projectDetails&lt;/code&gt; object contains information about the project specific video metadata.
     */
    projectDetails?: Schema$VideoProjectDetails;
    /**
     * The &lt;code&gt;recordingDetails&lt;/code&gt; object encapsulates information about the location, date and address where the video was recorded.
     */
    recordingDetails?: Schema$VideoRecordingDetails;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the video, such as its title, description, and category.
     */
    snippet?: Schema$VideoSnippet;
    /**
     * The &lt;code&gt;statistics&lt;/code&gt; object contains statistics about the video.
     */
    statistics?: Schema$VideoStatistics;
    /**
     * The &lt;code&gt;status&lt;/code&gt; object contains information about the video&#39;s uploading, processing, and privacy statuses.
     */
    status?: Schema$VideoStatus;
    /**
     * The &lt;code&gt;suggestions&lt;/code&gt; object encapsulates suggestions that identify opportunities to improve the video quality or the metadata for the uploaded video. This data can only be retrieved by the video owner.
     */
    suggestions?: Schema$VideoSuggestions;
    /**
     * The &lt;code&gt;topicDetails&lt;/code&gt; object encapsulates information about &lt;a href=&quot;http://www.freebase.com&quot;&gt;Freebase&lt;/a&gt; topics associated with the video.
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
   * A `__videoAbuseReportReason__` resource identifies a reason that a video could be reported as abusive. Video abuse report reasons are used with `video.ReportAbuse`.
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
     * Identifies what kind of resource this is. Value: the fixed string `&quot;youtube#videoAbuseReportReason&quot;`.
     */
    kind?: string | null;
    /**
     * The `snippet` object contains basic details about the abuse report reason.
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
     * A list of valid abuse reasons that are used with `video.ReportAbuse`.
     */
    items?: Schema$VideoAbuseReportReason[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string `&quot;youtube#videoAbuseReportReasonListResponse&quot;`.
     */
    kind?: string | null;
    /**
     * The `visitorId` identifies the visitor.
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
     * Age-restricted trailers. For redband trailers and adult-rated video-games. Only users aged 18+ can view the content. The the field is &lt;code&gt;true&lt;/code&gt; the content is restricted to viewers aged 18+. Otherwise The field won&#39;t be present.
     */
    restricted?: boolean | null;
    /**
     * Video game rating, if any.
     */
    videoGameRating?: string | null;
  }
  /**
   * A &lt;code&gt;&lt;strong&gt;videoCategory&lt;/strong&gt;&lt;/code&gt; resource identifies a category that has been or could be associated with uploaded videos.
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#videoCategory&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about the video category, including its title.
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
     * A list of video categories that can be associated with YouTube videos. In this map, the video category ID is the map key, and its value is the corresponding &lt;code&gt;videoCategory&lt;/code&gt; resource.
     */
    items?: Schema$VideoCategory[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#videoCategoryListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
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
     * The value of &lt;code&gt;captions&lt;/code&gt; indicates whether the video has captions or not.
     */
    caption?: string | null;
    /**
     * Specifies the ratings that the video received under various rating schemes.
     */
    contentRating?: Schema$ContentRating;
    /**
     * The &lt;code&gt;countryRestriction&lt;/code&gt; object contains information about the countries where a video is (or is not) viewable.
     */
    countryRestriction?: Schema$AccessPolicy;
    /**
     * The value of &lt;code&gt;definition&lt;/code&gt; indicates whether the video is available in high definition or only in standard definition.
     */
    definition?: string | null;
    /**
     * The value of &lt;code&gt;dimension&lt;/code&gt; indicates whether the video is available in 3D or in 2D.
     */
    dimension?: string | null;
    /**
     * The length of the video. The tag value is an &lt;a href=&quot;//en.wikipedia.org/wiki/ISO_8601#Durations&quot;&gt;ISO 8601&lt;/a&gt; duration in the format &lt;code&gt;PT#M#S&lt;/code&gt;, in which the letters &lt;code&gt;PT&lt;/code&gt; indicate that the value specifies a period of time, and the letters &lt;code&gt;M&lt;/code&gt; and &lt;code&gt;S&lt;/code&gt; refer to length in minutes and seconds, respectively. The &lt;code&gt;#&lt;/code&gt; characters preceding the &lt;code&gt;M&lt;/code&gt; and &lt;code&gt;S&lt;/code&gt; letters are both integers that specify the number of minutes (or seconds) of the video. For example, a value of &lt;code&gt;PT15M51S&lt;/code&gt; indicates that the video is 15 minutes and 51 seconds long.
     */
    duration?: string | null;
    /**
     * Indicates whether the video uploader has provided a custom thumbnail image for the video. This property is only visible to the video uploader.
     */
    hasCustomThumbnail?: boolean | null;
    /**
     * The value of &lt;code&gt;is_license_content&lt;/code&gt; indicates whether the video is licensed content.
     */
    licensedContent?: boolean | null;
    /**
     * Specifies the projection format of the video.
     */
    projection?: string | null;
    /**
     * The &lt;code&gt;regionRestriction&lt;/code&gt; object contains information about the countries where a video is (or is not) viewable. The object will contain either the &lt;code&gt;contentDetails.regionRestriction.allowed&lt;/code&gt; property or the &lt;code&gt;contentDetails.regionRestriction.blocked&lt;/code&gt; property.
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
     * The date and time when the uploaded video file was created. The value is specified in &lt;a href=&quot;http://www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format. Currently, the following ISO 8601 formats are supported: &lt;ul&gt; &lt;li&gt;Date only: &lt;code&gt;YYYY-MM-DD&lt;/code&gt;&lt;/li&gt; &lt;li&gt;Naive time: &lt;code&gt;YYYY-MM-DDTHH:MM:SS&lt;/code&gt;&lt;/li&gt; &lt;li&gt;Time with timezone: &lt;code&gt;YYYY-MM-DDTHH:MM:SS+HH:MM&lt;/code&gt;&lt;/li&gt; &lt;/ul&gt;
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
     * The encoded video content&#39;s width in pixels. You can calculate the video&#39;s encoding aspect ratio as &lt;code&gt;width_pixels&lt;/code&gt;&amp;nbsp;/&amp;nbsp;&lt;code&gt;height_pixels&lt;/code&gt;.
     */
    widthPixels?: number | null;
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
    items?: Schema$Video[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#videoListResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
    nextPageToken?: string | null;
    /**
     * General pagination information.
     */
    pageInfo?: Schema$PageInfo;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the previous page in the result set.
     */
    prevPageToken?: string | null;
    tokenPagination?: Schema$TokenPagination;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
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
     * The time that the broadcast actually ended. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format. This value will not be available until the broadcast is over.
     */
    actualEndTime?: string | null;
    /**
     * The time that the broadcast actually started. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format. This value will not be available until the broadcast begins.
     */
    actualStartTime?: string | null;
    /**
     * The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.
     */
    concurrentViewers?: string | null;
    /**
     * The time that the broadcast is scheduled to end. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format. If the value is empty or the property is not present, then the broadcast is scheduled to continue indefinitely.
     */
    scheduledEndTime?: string | null;
    /**
     * The time that the broadcast is scheduled to begin. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
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
     * The value of &lt;code&gt;access&lt;/code&gt; indicates whether the video can be monetized or not.
     */
    access?: Schema$AccessPolicy;
  }
  /**
   * Player to be used for a video playback.
   */
  export interface Schema$VideoPlayer {
    embedHeight?: string | null;
    /**
     * An &lt;code&gt;&amp;lt;iframe&amp;gt;&lt;/code&gt; tag that embeds a player that will play the video.
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
     * This value indicates whether video editing suggestions, which might improve video quality or the playback experience, are available for the video. You can retrieve these suggestions by requesting the &lt;code&gt;suggestions&lt;/code&gt; part in your &lt;code&gt;videos.list()&lt;/code&gt; request.
     */
    editorSuggestionsAvailability?: string | null;
    /**
     * This value indicates whether file details are available for the uploaded video. You can retrieve a video&#39;s file details by requesting the &lt;code&gt;fileDetails&lt;/code&gt; part in your &lt;code&gt;videos.list()&lt;/code&gt; request.
     */
    fileDetailsAvailability?: string | null;
    /**
     * The reason that YouTube failed to process the video. This property will only have a value if the &lt;code&gt;processingStatus&lt;/code&gt; property&#39;s value is &lt;code&gt;failed&lt;/code&gt;.
     */
    processingFailureReason?: string | null;
    /**
     * This value indicates whether the video processing engine has generated suggestions that might improve YouTube&#39;s ability to process the the video, warnings that explain video processing problems, or errors that cause video processing problems. You can retrieve these suggestions by requesting the &lt;code&gt;suggestions&lt;/code&gt; part in your &lt;code&gt;videos.list()&lt;/code&gt; request.
     */
    processingIssuesAvailability?: string | null;
    /**
     * The &lt;code&gt;processingProgress&lt;/code&gt; object contains information about the progress YouTube has made in processing the video. The values are really only relevant if the video&#39;s processing status is &lt;code&gt;processing&lt;/code&gt;.
     */
    processingProgress?: Schema$VideoProcessingDetailsProcessingProgress;
    /**
     * The video&#39;s processing status. This value indicates whether YouTube was able to process the video or if the video is still being processed.
     */
    processingStatus?: string | null;
    /**
     * This value indicates whether keyword (tag) suggestions are available for the video. Tags can be added to a video&#39;s metadata to make it easier for other users to find the video. You can retrieve these suggestions by requesting the &lt;code&gt;suggestions&lt;/code&gt; part in your &lt;code&gt;videos.list()&lt;/code&gt; request.
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
     * The number of parts of the video that YouTube has already processed. You can estimate the percentage of the video that YouTube has already processed by calculating:&lt;br&gt; &lt;code&gt;100 * parts_processed / parts_total&lt;/code&gt;&lt;br&gt;&lt;br&gt; Note that since the estimated number of parts could increase without a corresponding increase in the number of parts that have already been processed, it is possible that the calculated progress could periodically decrease while YouTube processes a video.
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
  /**
   * Basic details about rating of a video.
   */
  export interface Schema$VideoRating {
    /**
     * Rating of a video.
     */
    rating?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the video.
     */
    videoId?: string | null;
  }
  export interface Schema$VideoRatingListResponse {
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
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#videoGetRatingResponse&quot;&lt;/code&gt;.
     */
    kind?: string | null;
    /**
     * The &lt;code&gt;visitorId&lt;/code&gt; identifies the visitor.
     */
    visitorId?: string | null;
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
     * The date and time when the video was recorded. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; (&lt;code&gt;YYYY-MM-DDThh:mm:ss.sssZ&lt;/code&gt;) format.
     */
    recordingDate?: string | null;
  }
  /**
   * Basic details about a video, including title, description, uploader, thumbnails and category.
   */
  export interface Schema$VideoSnippet {
    /**
     * The YouTube &lt;a href=&quot;/youtube/v3/docs/videoCategories/list&quot;&gt;video category&lt;/a&gt; associated with the video.
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
     * The &lt;code&gt;default_audio_language&lt;/code&gt; property specifies the language spoken in the video&#39;s default audio track.
     */
    defaultAudioLanguage?: string | null;
    /**
     * The language of the videos&#39;s default snippet.
     */
    defaultLanguage?: string | null;
    /**
     * The video&#39;s description. @mutable youtube.videos.insert youtube.videos.update
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
     * The date and time that the video was uploaded. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
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
     * The video&#39;s title. @mutable youtube.videos.insert youtube.videos.update
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
   * Basic details about a video category, such as its localized title. Next Id: 16
   */
  export interface Schema$VideoStatus {
    /**
     * This value indicates if the video can be embedded on another website. @mutable youtube.videos.insert youtube.videos.update
     */
    embeddable?: boolean | null;
    /**
     * This value explains why a video failed to upload. This property is only present if the &lt;code&gt;uploadStatus&lt;/code&gt; property indicates that the upload failed.
     */
    failureReason?: string | null;
    /**
     * The video&#39;s license. @mutable youtube.videos.insert youtube.videos.update
     */
    license?: string | null;
    madeForKids?: boolean | null;
    /**
     * The video&#39;s privacy status.
     */
    privacyStatus?: string | null;
    /**
     * This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled. @mutable youtube.videos.insert youtube.videos.update
     */
    publicStatsViewable?: boolean | null;
    /**
     * The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
     */
    publishAt?: string | null;
    /**
     * This value explains why YouTube rejected an uploaded video. This property is only present if the &lt;code&gt;uploadStatus&lt;/code&gt; property indicates that the upload was rejected.
     */
    rejectionReason?: string | null;
    selfDeclaredMadeForKids?: boolean | null;
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
     * A list of errors that will prevent YouTube from successfully processing the uploaded video video. These errors indicate that, regardless of the video&#39;s current &lt;a href=&quot;#processingProgress.processingStatus&quot;&gt;processing status&lt;/a&gt;, eventually, that status will almost certainly be &lt;code&gt;failed&lt;/code&gt;.
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
     * Similar to topic_id, except that these topics are merely relevant to the video. These are topics that may be mentioned in, or appear in the video. You can retrieve information about each topic using &lt;a href=&quot;http://wiki.freebase.com/wiki/Topic_API&quot;&gt;Freebase Topic API&lt;/a&gt;.
     */
    relevantTopicIds?: string[] | null;
    /**
     * A list of Wikipedia URLs that provide a high-level description of the video&#39;s content.
     */
    topicCategories?: string[] | null;
    /**
     * A list of Freebase topic IDs that are centrally associated with the video. These are topics that are centrally featured in the video, and it can be said that the video is mainly about each of these. You can retrieve information about each topic using the &lt; a href=&quot;http://wiki.freebase.com/wiki/Topic_API&quot;&gt;Freebase Topic API&lt;/a&gt;.
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
     * youtube.activities.list
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.activities.list({
     *     channelId: 'placeholder-value',
     *
     *     home: 'placeholder-value',
     *     // The <code><strong>maxResults</strong></code> parameter specifies the
     *     // maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *
     *     mine: 'placeholder-value',
     *     // The <code><strong>pageToken</strong></code> parameter identifies a specific
     *     // page in the result set that should be returned. In an API response, the
     *     // <code>nextPageToken</code> and <code>prevPageToken</code> properties
     *     // identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>activity</code> resource
     *     // properties that the API response will include.<br><br>If the parameter
     *     // identifies a property that contains child properties, the child properties
     *     // will be included in the response. For example, in an <code>activity</code>
     *     // resource, the <code>snippet</code> property contains other properties that
     *     // identify the type of activity, a display title for the activity, and so
     *     // forth. If you set <code><strong>part=snippet</strong></code>, the API
     *     // response will also contain all of those nested properties.
     *     part: 'placeholder-value',
     *
     *     publishedAfter: 'placeholder-value',
     *
     *     publishedBefore: 'placeholder-value',
     *
     *     regionCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.activities.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.channelId
     * @param {boolean=} params.home
     * @param {integer=} params.maxResults The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean=} params.mine
     * @param {string=} params.pageToken The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>activity</code> resource properties that the API response will include.<br><br>If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an <code>activity</code> resource, the <code>snippet</code> property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set <code><strong>part=snippet</strong></code>, the API response will also contain all of those nested properties.
     * @param {string=} params.publishedAfter
     * @param {string=} params.publishedBefore
     * @param {string=} params.regionCode
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Activities$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Activities$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ActivityListResponse>;
    list(
      params: Params$Resource$Activities$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ActivityListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ActivityListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ActivityListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ActivityListResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$ActivityListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ActivityListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Activities$List extends StandardParameters {
    /**
     *
     */
    channelId?: string;
    /**
     *
     */
    home?: boolean;
    /**
     * The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     *
     */
    mine?: boolean;
    /**
     * The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>activity</code> resource properties that the API response will include.<br><br>If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an <code>activity</code> resource, the <code>snippet</code> property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set <code><strong>part=snippet</strong></code>, the API response will also contain all of those nested properties.
     */
    part?: string[];
    /**
     *
     */
    publishedAfter?: string;
    /**
     *
     */
    publishedBefore?: string;
    /**
     *
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
     * @desc Deletes a resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.captions.delete({
     *     id: 'placeholder-value',
     *     // ID of the Google+ Page for the channel that the request is be on behalf of
     *     onBehalfOf: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the request's authorization credentials identify a YouTube CMS user
     *     // who is acting on behalf of the content owner specified in the parameter
     *     // value. This parameter is intended for YouTube content partners that own and
     *     // manage many different YouTube channels. It allows content owners to
     *     // authenticate once and get access to all their video and channel data,
     *     // without having to provide authentication credentials for each individual
     *     // channel. The actual CMS account that the user authenticates with must be
     *     // linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.captions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id
     * @param {string=} params.onBehalfOf ID of the Google+ Page for the channel that the request is be on behalf of
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Captions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Captions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Captions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.captions.download
     * @desc Downloads a caption track.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.captions.download({
     *     // The ID of the caption track to download, required for One Platform.
     *     id: 'placeholder-value',
     *     // ID of the Google+ Page for the channel that the request is be on behalf of
     *     onBehalfOf: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the request's authorization credentials identify a YouTube CMS user
     *     // who is acting on behalf of the content owner specified in the parameter
     *     // value. This parameter is intended for YouTube content partners that own and
     *     // manage many different YouTube channels. It allows content owners to
     *     // authenticate once and get access to all their video and channel data,
     *     // without having to provide authentication credentials for each individual
     *     // channel. The actual CMS account that the user authenticates with must be
     *     // linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // Convert the captions into this format. Supported options are
     *     // sbv, srt, and vtt.
     *     tfmt: 'placeholder-value',
     *     // tlang is the language code; machine translate the captions into
     *     // this language.
     *     tlang: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.captions.download
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id The ID of the caption track to download, required for One Platform.
     * @param {string=} params.onBehalfOf ID of the Google+ Page for the channel that the request is be on behalf of
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.tfmt Convert the captions into this format. Supported options are sbv, srt, and vtt.
     * @param {string=} params.tlang tlang is the language code; machine translate the captions into this language.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    download(
      params: Params$Resource$Captions$Download,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    download(
      params?: Params$Resource$Captions$Download,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    download(
      params: Params$Resource$Captions$Download,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.captions.insert
     * @desc Inserts a new resource into this collection.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.captions.insert({
     *     // ID of the Google+ Page for the channel that the request is be on behalf of
     *     onBehalfOf: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the request's authorization credentials identify a YouTube CMS user
     *     // who is acting on behalf of the content owner specified in the parameter
     *     // value. This parameter is intended for YouTube content partners that own and
     *     // manage many different YouTube channels. It allows content owners to
     *     // authenticate once and get access to all their video and channel data,
     *     // without having to provide authentication credentials for each individual
     *     // channel. The actual CMS account that the user authenticates with must be
     *     // linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies the
     *     // <code>caption</code> resource parts that the API response will include. Set
     *     // the parameter value to <code>snippet</code>.
     *     part: 'placeholder-value',
     *     // Extra parameter to allow automatically syncing the uploaded
     *     // caption/transcript with the audio.
     *     sync: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {}
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.captions.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOf ID of the Google+ Page for the channel that the request is be on behalf of
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies the <code>caption</code> resource parts that the API response will include. Set the parameter value to <code>snippet</code>.
     * @param {boolean=} params.sync Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.
     * @param  {object} params.requestBody Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Captions$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Captions$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Caption>;
    insert(
      params: Params$Resource$Captions$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Caption>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Caption>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Caption>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Caption> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$Caption>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Caption>(parameters);
      }
    }

    /**
     * youtube.captions.list
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.captions.list({
     *     // Returns the captions with the given IDs for Stubby or Apiary.
     *     id: 'placeholder-value',
     *     // ID of the Google+ Page for the channel that the request is on behalf of.
     *     onBehalfOf: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the request's authorization credentials identify a YouTube CMS user
     *     // who is acting on behalf of the content owner specified in the parameter
     *     // value. This parameter is intended for YouTube content partners that own and
     *     // manage many different YouTube channels. It allows content owners to
     *     // authenticate once and get access to all their video and channel data,
     *     // without having to provide authentication credentials for each individual
     *     // channel. The actual CMS account that the user authenticates with must be
     *     // linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>caption</code> resource parts
     *     // that the API response will include. The <code>part</code> names that you
     *     // can include in the parameter value are <code>id</code> and
     *     // <code>snippet</code>.
     *     part: 'placeholder-value',
     *     // Returns the captions for the specified video.
     *     videoId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.captions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.id Returns the captions with the given IDs for Stubby or Apiary.
     * @param {string=} params.onBehalfOf ID of the Google+ Page for the channel that the request is on behalf of.
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>caption</code> resource parts that the API response will include. The <code>part</code> names that you can include in the parameter value are <code>id</code> and <code>snippet</code>.
     * @param {string} params.videoId Returns the captions for the specified video.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Captions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Captions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CaptionListResponse>;
    list(
      params: Params$Resource$Captions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$CaptionListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CaptionListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CaptionListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CaptionListResponse>
      | GaxiosPromise<Readable> {
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
        requiredParams: ['videoId', 'part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$CaptionListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$CaptionListResponse>(parameters);
      }
    }

    /**
     * youtube.captions.update
     * @desc Updates an existing resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.captions.update({
     *     // ID of the Google+ Page for the channel that the request is on behalf of.
     *     onBehalfOf: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the request's authorization credentials identify a YouTube CMS user
     *     // who is acting on behalf of the content owner specified in the parameter
     *     // value. This parameter is intended for YouTube content partners that own and
     *     // manage many different YouTube channels. It allows content owners to
     *     // authenticate once and get access to all their video and channel data,
     *     // without having to provide authentication credentials for each individual
     *     // channel. The actual CMS account that the user authenticates with must be
     *     // linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>caption</code> resource parts
     *     // that the API response will include. The <code>part</code> names that you
     *     // can include in the parameter value are <code>id</code> and
     *     // <code>snippet</code>.
     *     part: 'placeholder-value',
     *     // Extra parameter to allow automatically syncing the uploaded
     *     // caption/transcript with the audio.
     *     sync: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {}
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.captions.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOf ID of the Google+ Page for the channel that the request is on behalf of.
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>caption</code> resource parts that the API response will include. The <code>part</code> names that you can include in the parameter value are <code>id</code> and <code>snippet</code>.
     * @param {boolean=} params.sync Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.
     * @param  {object} params.requestBody Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Captions$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Captions$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Caption>;
    update(
      params: Params$Resource$Captions$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Caption>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Caption>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Caption>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Caption> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$Caption>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Caption>(parameters);
      }
    }
  }

  export interface Params$Resource$Captions$Delete extends StandardParameters {
    /**
     *
     */
    id?: string;
    /**
     * ID of the Google+ Page for the channel that the request is be on behalf of
     */
    onBehalfOf?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Captions$Download
    extends StandardParameters {
    /**
     * The ID of the caption track to download, required for One Platform.
     */
    id?: string;
    /**
     * ID of the Google+ Page for the channel that the request is be on behalf of
     */
    onBehalfOf?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * Convert the captions into this format. Supported options are sbv, srt, and vtt.
     */
    tfmt?: string;
    /**
     * tlang is the language code; machine translate the captions into this language.
     */
    tlang?: string;
  }
  export interface Params$Resource$Captions$Insert extends StandardParameters {
    /**
     * ID of the Google+ Page for the channel that the request is be on behalf of
     */
    onBehalfOf?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies the <code>caption</code> resource parts that the API response will include. Set the parameter value to <code>snippet</code>.
     */
    part?: string[];
    /**
     * Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.
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
     * Returns the captions with the given IDs for Stubby or Apiary.
     */
    id?: string[];
    /**
     * ID of the Google+ Page for the channel that the request is on behalf of.
     */
    onBehalfOf?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>caption</code> resource parts that the API response will include. The <code>part</code> names that you can include in the parameter value are <code>id</code> and <code>snippet</code>.
     */
    part?: string[];
    /**
     * Returns the captions for the specified video.
     */
    videoId?: string;
  }
  export interface Params$Resource$Captions$Update extends StandardParameters {
    /**
     * ID of the Google+ Page for the channel that the request is on behalf of.
     */
    onBehalfOf?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>caption</code> resource parts that the API response will include. The <code>part</code> names that you can include in the parameter value are <code>id</code> and <code>snippet</code>.
     */
    part?: string[];
    /**
     * Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.
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
     * @desc Inserts a new resource into this collection.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.upload',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.channelBanners.insert({
     *     // Unused, channel_id is currently derived from the security context of the
     *     // requestor.
     *     channelId: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the request's authorization credentials identify a YouTube CMS user
     *     // who is acting on behalf of the content owner specified in the parameter
     *     // value. This parameter is intended for YouTube content partners that own and
     *     // manage many different YouTube channels. It allows content owners to
     *     // authenticate once and get access to all their video and channel data,
     *     // without having to provide authentication credentials for each individual
     *     // channel. The actual CMS account that the user authenticates with must be
     *     // linked to the specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "kind": "my_kind",
     *       //   "url": "my_url"
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "kind": "my_kind",
     *   //   "url": "my_url"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.channelBanners.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.channelId Unused, channel_id is currently derived from the security context of the requestor.
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param  {object} params.requestBody Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Channelbanners$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Channelbanners$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChannelBannerResource>;
    insert(
      params: Params$Resource$Channelbanners$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ChannelBannerResource>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChannelBannerResource>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChannelBannerResource>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ChannelBannerResource>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$ChannelBannerResource>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ChannelBannerResource>(parameters);
      }
    }
  }

  export interface Params$Resource$Channelbanners$Insert
    extends StandardParameters {
    /**
     * Unused, channel_id is currently derived from the security context of the requestor.
     */
    channelId?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;

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
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *       'https://www.googleapis.com/auth/youtubepartner-channel-audit',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.channels.list({
     *     // Return the channels within the specified guide category ID.
     *     categoryId: 'placeholder-value',
     *     // Return the channel associated with a YouTube username.
     *     forUsername: 'placeholder-value',
     *     // Stands for "host language". Specifies the localization language of the
     *     // metadata to be filled into snippet.localized. The field is filled with the
     *     // default metadata if there is no localization in the specified language.
     *     // The parameter value must be a language code included in the list returned
     *     // by the i18nLanguages.list method (e.g. en_US, es_MX).
     *     hl: 'placeholder-value',
     *     // Return the channels with the specified IDs.
     *     id: 'placeholder-value',
     *     // Return the channels managed by the authenticated user.
     *     managedByMe: 'placeholder-value',
     *     // The <code><strong>maxResults</strong></code> parameter specifies the
     *     // maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // Return the ids of channels owned by the authenticated user.
     *     mine: 'placeholder-value',
     *     // Return the channels subscribed to the authenticated user
     *     mySubscribers: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The <code><strong>pageToken</strong></code> parameter identifies a specific
     *     // page in the result set that should be returned. In an API response, the
     *     // <code>nextPageToken</code> and <code>prevPageToken</code> properties
     *     // identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>channel</code> resource
     *     // properties that the API response will include.<br><br>If the parameter
     *     // identifies a property that contains child properties, the child properties
     *     // will be included in the response. For example, in a <code>channel</code>
     *     // resource, the <code>contentDetails</code> property contains other
     *     // properties, such as the <code>uploads</code> properties. As such, if you
     *     // set <code><strong>part=contentDetails</strong></code>, the API response
     *     // will also contain all of those nested properties.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.channels.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.categoryId Return the channels within the specified guide category ID.
     * @param {string=} params.forUsername Return the channel associated with a YouTube username.
     * @param {string=} params.hl Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).
     * @param {string=} params.id Return the channels with the specified IDs.
     * @param {boolean=} params.managedByMe Return the channels managed by the authenticated user.
     * @param {integer=} params.maxResults The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean=} params.mine Return the ids of channels owned by the authenticated user.
     * @param {boolean=} params.mySubscribers Return the channels subscribed to the authenticated user
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.pageToken The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>channel</code> resource properties that the API response will include.<br><br>If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a <code>channel</code> resource, the <code>contentDetails</code> property contains other properties, such as the <code>uploads</code> properties. As such, if you set <code><strong>part=contentDetails</strong></code>, the API response will also contain all of those nested properties.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Channels$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Channels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChannelListResponse>;
    list(
      params: Params$Resource$Channels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ChannelListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChannelListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChannelListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ChannelListResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$ChannelListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ChannelListResponse>(parameters);
      }
    }

    /**
     * youtube.channels.update
     * @desc Updates an existing resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.channels.update({
     *     // The <code><strong>onBehalfOfContentOwner</strong></code> parameter
     *     // indicates that the authenticated user is acting on behalf of the content
     *     // owner specified in the parameter value. This parameter is intended for
     *     // YouTube content partners that own and manage many different YouTube
     *     // channels. It allows content owners to authenticate once and get access to
     *     // all their video and channel data, without having to provide authentication
     *     // credentials for each individual channel. The actual CMS account that the
     *     // user authenticates with needs to be linked to the specified YouTube content
     *     // owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter serves two purposes in
     *     // this operation. It identifies the properties that the write operation will
     *     // set as well as the properties that the API response will
     *     // include.<br/><br/>The API currently only allows the parameter value to be
     *     // set to either <code>brandingSettings</code> or
     *     // <code>invideoPromotion</code>. (You cannot update both of those parts with
     *     // a single request.)<br/><br/>Note that this method overrides the existing
     *     // values for all of the mutable properties that are contained in any parts
     *     // that the parameter value specifies.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "auditDetails": {},
     *       //   "brandingSettings": {},
     *       //   "contentDetails": {},
     *       //   "contentOwnerDetails": {},
     *       //   "conversionPings": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "invideoPromotion": {},
     *       //   "kind": "my_kind",
     *       //   "localizations": {},
     *       //   "snippet": {},
     *       //   "statistics": {},
     *       //   "status": {},
     *       //   "topicDetails": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditDetails": {},
     *   //   "brandingSettings": {},
     *   //   "contentDetails": {},
     *   //   "contentOwnerDetails": {},
     *   //   "conversionPings": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "invideoPromotion": {},
     *   //   "kind": "my_kind",
     *   //   "localizations": {},
     *   //   "snippet": {},
     *   //   "statistics": {},
     *   //   "status": {},
     *   //   "topicDetails": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.channels.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br/><br/>The API currently only allows the parameter value to be set to either <code>brandingSettings</code> or <code>invideoPromotion</code>. (You cannot update both of those parts with a single request.)<br/><br/>Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.
     * @param {().Channel} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Channels$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Channels$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Channel>;
    update(
      params: Params$Resource$Channels$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Channel>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Channel> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$Channel>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Channel>(parameters);
      }
    }
  }

  export interface Params$Resource$Channels$List extends StandardParameters {
    /**
     * Return the channels within the specified guide category ID.
     */
    categoryId?: string;
    /**
     * Return the channel associated with a YouTube username.
     */
    forUsername?: string;
    /**
     * Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).
     */
    hl?: string;
    /**
     * Return the channels with the specified IDs.
     */
    id?: string[];
    /**
     * Return the channels managed by the authenticated user.
     */
    managedByMe?: boolean;
    /**
     * The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Return the ids of channels owned by the authenticated user.
     */
    mine?: boolean;
    /**
     * Return the channels subscribed to the authenticated user
     */
    mySubscribers?: boolean;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>channel</code> resource properties that the API response will include.<br><br>If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a <code>channel</code> resource, the <code>contentDetails</code> property contains other properties, such as the <code>uploads</code> properties. As such, if you set <code><strong>part=contentDetails</strong></code>, the API response will also contain all of those nested properties.
     */
    part?: string[];
  }
  export interface Params$Resource$Channels$Update extends StandardParameters {
    /**
     * The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br/><br/>The API currently only allows the parameter value to be set to either <code>brandingSettings</code> or <code>invideoPromotion</code>. (You cannot update both of those parts with a single request.)<br/><br/>Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.
     */
    part?: string[];

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
     * @desc Deletes a resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.channelSections.delete({
     *     id: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.channelSections.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Channelsections$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Channelsections$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Channelsections$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.channelSections.insert
     * @desc Inserts a new resource into this collection.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.channelSections.insert({
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter serves two purposes in
     *     // this operation. It identifies the properties that the write operation will
     *     // set as well as the properties that the API response will
     *     // include.<br/><br/>The <code>part</code> names that you can include in the
     *     // parameter value are <code>snippet</code> and <code>contentDetails</code>.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "localizations": {},
     *       //   "snippet": {},
     *       //   "targeting": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "localizations": {},
     *   //   "snippet": {},
     *   //   "targeting": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.channelSections.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br/><br/>The <code>part</code> names that you can include in the parameter value are <code>snippet</code> and <code>contentDetails</code>.
     * @param {().ChannelSection} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Channelsections$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Channelsections$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChannelSection>;
    insert(
      params: Params$Resource$Channelsections$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ChannelSection>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChannelSection>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChannelSection>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ChannelSection> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$ChannelSection>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ChannelSection>(parameters);
      }
    }

    /**
     * youtube.channelSections.list
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.channelSections.list({
     *     // Return the ChannelSections owned by the specified channel ID.
     *     channelId: 'placeholder-value',
     *     // Return content in specified language
     *     hl: 'placeholder-value',
     *     // Return the ChannelSections with the given IDs for Stubby or Apiary.
     *     id: 'placeholder-value',
     *     // Return the ChannelSections owned by the authenticated user.
     *     mine: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>channelSection</code> resource
     *     // properties that the API response will include. The <code>part</code> names
     *     // that you can include in the parameter value are <code>id</code>,
     *     // <code>snippet</code>, and <code>contentDetails</code>.<br><br>If the
     *     // parameter identifies a property that contains child properties, the child
     *     // properties will be included in the response. For example, in a
     *     // <code>channelSection</code> resource, the <code>snippet</code> property
     *     // contains other properties, such as a display title for the channelSection.
     *     // If you set <code><strong>part=snippet</strong></code>, the API response
     *     // will also contain all of those nested properties.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.channelSections.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.channelId Return the ChannelSections owned by the specified channel ID.
     * @param {string=} params.hl Return content in specified language
     * @param {string=} params.id Return the ChannelSections with the given IDs for Stubby or Apiary.
     * @param {boolean=} params.mine Return the ChannelSections owned by the authenticated user.
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>channelSection</code> resource properties that the API response will include. The <code>part</code> names that you can include in the parameter value are <code>id</code>, <code>snippet</code>, and <code>contentDetails</code>.<br><br>If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a <code>channelSection</code> resource, the <code>snippet</code> property contains other properties, such as a display title for the channelSection. If you set <code><strong>part=snippet</strong></code>, the API response will also contain all of those nested properties.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Channelsections$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Channelsections$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChannelSectionListResponse>;
    list(
      params: Params$Resource$Channelsections$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ChannelSectionListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChannelSectionListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChannelSectionListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ChannelSectionListResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ChannelSectionListResponse>(parameters);
      }
    }

    /**
     * youtube.channelSections.update
     * @desc Updates an existing resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.channelSections.update({
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter serves two purposes in
     *     // this operation. It identifies the properties that the write operation will
     *     // set as well as the properties that the API response will
     *     // include.<br/><br/>The <code>part</code> names that you can include in the
     *     // parameter value are <code>snippet</code> and <code>contentDetails</code>.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "localizations": {},
     *       //   "snippet": {},
     *       //   "targeting": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "localizations": {},
     *   //   "snippet": {},
     *   //   "targeting": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.channelSections.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br/><br/>The <code>part</code> names that you can include in the parameter value are <code>snippet</code> and <code>contentDetails</code>.
     * @param {().ChannelSection} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Channelsections$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Channelsections$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ChannelSection>;
    update(
      params: Params$Resource$Channelsections$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ChannelSection>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ChannelSection>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ChannelSection>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$ChannelSection> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$ChannelSection>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ChannelSection>(parameters);
      }
    }
  }

  export interface Params$Resource$Channelsections$Delete
    extends StandardParameters {
    /**
     *
     */
    id?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Channelsections$Insert
    extends StandardParameters {
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br/><br/>The <code>part</code> names that you can include in the parameter value are <code>snippet</code> and <code>contentDetails</code>.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$ChannelSection;
  }
  export interface Params$Resource$Channelsections$List
    extends StandardParameters {
    /**
     * Return the ChannelSections owned by the specified channel ID.
     */
    channelId?: string;
    /**
     * Return content in specified language
     */
    hl?: string;
    /**
     * Return the ChannelSections with the given IDs for Stubby or Apiary.
     */
    id?: string[];
    /**
     * Return the ChannelSections owned by the authenticated user.
     */
    mine?: boolean;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>channelSection</code> resource properties that the API response will include. The <code>part</code> names that you can include in the parameter value are <code>id</code>, <code>snippet</code>, and <code>contentDetails</code>.<br><br>If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a <code>channelSection</code> resource, the <code>snippet</code> property contains other properties, such as a display title for the channelSection. If you set <code><strong>part=snippet</strong></code>, the API response will also contain all of those nested properties.
     */
    part?: string[];
  }
  export interface Params$Resource$Channelsections$Update
    extends StandardParameters {
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br/><br/>The <code>part</code> names that you can include in the parameter value are <code>snippet</code> and <code>contentDetails</code>.
     */
    part?: string[];

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
     * @desc Deletes a resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.comments.delete({
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.comments.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Comments$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Comments$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Comments$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.comments.insert
     * @desc Inserts a new resource into this collection.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.comments.insert({
     *     // The <code><strong>part</strong></code> parameter identifies the properties
     *     // that the API response will include. Set the parameter value to
     *     // <code>snippet</code>. The <code>snippet</code> part has a quota cost of 2
     *     // units.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.comments.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The <code><strong>part</strong></code> parameter identifies the properties that the API response will include. Set the parameter value to <code>snippet</code>. The <code>snippet</code> part has a quota cost of 2 units.
     * @param {().Comment} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Comments$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Comments$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Comment>;
    insert(
      params: Params$Resource$Comments$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Comment> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$Comment>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }

    /**
     * youtube.comments.list
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.comments.list({
     *     // Returns the comments with the given IDs for One Platform.
     *     id: 'placeholder-value',
     *     // The <code><strong>maxResults</strong></code> parameter specifies the
     *     // maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // The <code><strong>pageToken</strong></code> parameter identifies a specific
     *     // page in the result set that should be returned. In an API response, the
     *     // <code>nextPageToken</code> and <code>prevPageToken</code> properties
     *     // identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // Returns replies to the specified comment.
     *     // Note, currently YouTube features only one level of replies (ie replies
     *     // to top level comments). However replies to replies may be supported in
     *     // the future.
     *     parentId: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>comment</code> resource
     *     // properties that the API response will include.
     *     part: 'placeholder-value',
     *     // The requested text format for the returned comments.
     *     textFormat: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.comments.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.id Returns the comments with the given IDs for One Platform.
     * @param {integer=} params.maxResults The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string=} params.pageToken The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     * @param {string=} params.parentId Returns replies to the specified comment. Note, currently YouTube features only one level of replies (ie replies to top level comments). However replies to replies may be supported in the future.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>comment</code> resource properties that the API response will include.
     * @param {string=} params.textFormat The requested text format for the returned comments.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Comments$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Comments$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CommentListResponse>;
    list(
      params: Params$Resource$Comments$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$CommentListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommentListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommentListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CommentListResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$CommentListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$CommentListResponse>(parameters);
      }
    }

    /**
     * youtube.comments.markAsSpam
     * @desc Expresses the caller's opinion that one or more comments should be flagged as spam.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.comments.markAsSpam({
     *     // Flags the comments with the given IDs as spam in the caller's opinion.
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.comments.markAsSpam
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Flags the comments with the given IDs as spam in the caller's opinion.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    markAsSpam(
      params: Params$Resource$Comments$Markasspam,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    markAsSpam(
      params?: Params$Resource$Comments$Markasspam,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    markAsSpam(
      params: Params$Resource$Comments$Markasspam,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.comments.setModerationStatus
     * @desc Sets the moderation status of one or more comments.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.comments.setModerationStatus({
     *     // If set to true the author of the comment gets added to the ban list.
     *     // This means all future comments of the author will autmomatically be
     *     // rejected.
     *     // Only valid in combination with STATUS_REJECTED.
     *     banAuthor: 'placeholder-value',
     *     // Modifies the moderation status of the comments with the given IDs
     *     id: 'placeholder-value',
     *     // Specifies the requested moderation status. Note, comments can be in
     *     // statuses, which are not available through this call. For example, this
     *     // call does not allow to mark a comment as 'likely spam'.
     *     // Valid values: MODERATION_STATUS_PUBLISHED,
     *     // MODERATION_STATUS_HELD_FOR_REVIEW, MODERATION_STATUS_REJECTED.
     *     moderationStatus: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.comments.setModerationStatus
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.banAuthor If set to true the author of the comment gets added to the ban list. This means all future comments of the author will autmomatically be rejected. Only valid in combination with STATUS_REJECTED.
     * @param {string} params.id Modifies the moderation status of the comments with the given IDs
     * @param {string} params.moderationStatus Specifies the requested moderation status. Note, comments can be in statuses, which are not available through this call. For example, this call does not allow to mark a comment as 'likely spam'. Valid values: MODERATION_STATUS_PUBLISHED, MODERATION_STATUS_HELD_FOR_REVIEW, MODERATION_STATUS_REJECTED.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setModerationStatus(
      params: Params$Resource$Comments$Setmoderationstatus,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setModerationStatus(
      params?: Params$Resource$Comments$Setmoderationstatus,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    setModerationStatus(
      params: Params$Resource$Comments$Setmoderationstatus,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.comments.update
     * @desc Updates an existing resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.comments.update({
     *     // The <code><strong>part</strong></code> parameter identifies the properties
     *     // that the API response will include. You must at least include the
     *     // <code>snippet</code> part in the parameter value since that part contains
     *     // all of the properties that the API request can update.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.comments.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The <code><strong>part</strong></code> parameter identifies the properties that the API response will include. You must at least include the <code>snippet</code> part in the parameter value since that part contains all of the properties that the API request can update.
     * @param {().Comment} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Comments$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Comments$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Comment>;
    update(
      params: Params$Resource$Comments$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Comment>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Comment> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$Comment>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Comment>(parameters);
      }
    }
  }

  export interface Params$Resource$Comments$Delete extends StandardParameters {
    /**
     *
     */
    id?: string;
  }
  export interface Params$Resource$Comments$Insert extends StandardParameters {
    /**
     * The <code><strong>part</strong></code> parameter identifies the properties that the API response will include. Set the parameter value to <code>snippet</code>. The <code>snippet</code> part has a quota cost of 2 units.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$Comment;
  }
  export interface Params$Resource$Comments$List extends StandardParameters {
    /**
     * Returns the comments with the given IDs for One Platform.
     */
    id?: string[];
    /**
     * The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * Returns replies to the specified comment. Note, currently YouTube features only one level of replies (ie replies to top level comments). However replies to replies may be supported in the future.
     */
    parentId?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>comment</code> resource properties that the API response will include.
     */
    part?: string[];
    /**
     * The requested text format for the returned comments.
     */
    textFormat?: string;
  }
  export interface Params$Resource$Comments$Markasspam
    extends StandardParameters {
    /**
     * Flags the comments with the given IDs as spam in the caller's opinion.
     */
    id?: string[];
  }
  export interface Params$Resource$Comments$Setmoderationstatus
    extends StandardParameters {
    /**
     * If set to true the author of the comment gets added to the ban list. This means all future comments of the author will autmomatically be rejected. Only valid in combination with STATUS_REJECTED.
     */
    banAuthor?: boolean;
    /**
     * Modifies the moderation status of the comments with the given IDs
     */
    id?: string[];
    /**
     * Specifies the requested moderation status. Note, comments can be in statuses, which are not available through this call. For example, this call does not allow to mark a comment as 'likely spam'. Valid values: MODERATION_STATUS_PUBLISHED, MODERATION_STATUS_HELD_FOR_REVIEW, MODERATION_STATUS_REJECTED.
     */
    moderationStatus?: string;
  }
  export interface Params$Resource$Comments$Update extends StandardParameters {
    /**
     * The <code><strong>part</strong></code> parameter identifies the properties that the API response will include. You must at least include the <code>snippet</code> part in the parameter value since that part contains all of the properties that the API request can update.
     */
    part?: string[];

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
     * @desc Inserts a new resource into this collection.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.commentThreads.insert({
     *     // The <code><strong>part</strong></code> parameter identifies the properties
     *     // that the API response will include. Set the parameter value to
     *     // <code>snippet</code>. The <code>snippet</code> part has a quota cost of 2
     *     // units.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "replies": {},
     *       //   "snippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "replies": {},
     *   //   "snippet": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.commentThreads.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The <code><strong>part</strong></code> parameter identifies the properties that the API response will include. Set the parameter value to <code>snippet</code>. The <code>snippet</code> part has a quota cost of 2 units.
     * @param {().CommentThread} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Commentthreads$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Commentthreads$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CommentThread>;
    insert(
      params: Params$Resource$Commentthreads$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$CommentThread>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommentThread>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommentThread>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CommentThread> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$CommentThread>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$CommentThread>(parameters);
      }
    }

    /**
     * youtube.commentThreads.list
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.commentThreads.list({
     *     // Returns the comment threads of all videos of the channel and the
     *     // channel comments as well.
     *     allThreadsRelatedToChannelId: 'placeholder-value',
     *     // Returns the comment threads for all the channel comments (ie does not
     *     // include comments left on videos).
     *     channelId: 'placeholder-value',
     *     // Returns the comment threads with the given IDs for Stubby or Apiary.
     *     id: 'placeholder-value',
     *     // The <code><strong>maxResults</strong></code> parameter specifies the
     *     // maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // Limits the returned comment threads to those with the specified
     *     // moderation status. Not compatible with the 'id' filter.
     *     // Valid values: published, heldForReview, likelySpam.
     *     moderationStatus: 'placeholder-value',
     *
     *     order: 'placeholder-value',
     *     // The <code><strong>pageToken</strong></code> parameter identifies a specific
     *     // page in the result set that should be returned. In an API response, the
     *     // <code>nextPageToken</code> and <code>prevPageToken</code> properties
     *     // identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>commentThread</code> resource
     *     // properties that the API response will include.
     *     part: 'placeholder-value',
     *     // Limits the returned comment threads to those matching the specified
     *     // key words. Not compatible with the 'id' filter.
     *     searchTerms: 'placeholder-value',
     *     // The requested text format for the returned comments.
     *     textFormat: 'placeholder-value',
     *     // Returns the comment threads of the specified video.
     *     videoId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.commentThreads.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.allThreadsRelatedToChannelId Returns the comment threads of all videos of the channel and the channel comments as well.
     * @param {string=} params.channelId Returns the comment threads for all the channel comments (ie does not include comments left on videos).
     * @param {string=} params.id Returns the comment threads with the given IDs for Stubby or Apiary.
     * @param {integer=} params.maxResults The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string=} params.moderationStatus Limits the returned comment threads to those with the specified moderation status. Not compatible with the 'id' filter. Valid values: published, heldForReview, likelySpam.
     * @param {string=} params.order
     * @param {string=} params.pageToken The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>commentThread</code> resource properties that the API response will include.
     * @param {string=} params.searchTerms Limits the returned comment threads to those matching the specified key words. Not compatible with the 'id' filter.
     * @param {string=} params.textFormat The requested text format for the returned comments.
     * @param {string=} params.videoId Returns the comment threads of the specified video.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Commentthreads$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Commentthreads$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CommentThreadListResponse>;
    list(
      params: Params$Resource$Commentthreads$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$CommentThreadListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommentThreadListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommentThreadListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$CommentThreadListResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$CommentThreadListResponse>(parameters);
      }
    }

    /**
     * youtube.commentThreads.update
     * @desc Updates an existing resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: ['https://www.googleapis.com/auth/youtube.force-ssl'],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.commentThreads.update({
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of <code>commentThread</code> resource properties that
     *     // the API response will include. You must at least include the
     *     // <code>snippet</code> part in the parameter value since that part contains
     *     // all of the properties that the API request can update.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "replies": {},
     *       //   "snippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "replies": {},
     *   //   "snippet": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.commentThreads.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of <code>commentThread</code> resource properties that the API response will include. You must at least include the <code>snippet</code> part in the parameter value since that part contains all of the properties that the API request can update.
     * @param {().CommentThread} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Commentthreads$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Commentthreads$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$CommentThread>;
    update(
      params: Params$Resource$Commentthreads$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$CommentThread>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CommentThread>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CommentThread>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$CommentThread> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$CommentThread>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$CommentThread>(parameters);
      }
    }
  }

  export interface Params$Resource$Commentthreads$Insert
    extends StandardParameters {
    /**
     * The <code><strong>part</strong></code> parameter identifies the properties that the API response will include. Set the parameter value to <code>snippet</code>. The <code>snippet</code> part has a quota cost of 2 units.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$CommentThread;
  }
  export interface Params$Resource$Commentthreads$List
    extends StandardParameters {
    /**
     * Returns the comment threads of all videos of the channel and the channel comments as well.
     */
    allThreadsRelatedToChannelId?: string;
    /**
     * Returns the comment threads for all the channel comments (ie does not include comments left on videos).
     */
    channelId?: string;
    /**
     * Returns the comment threads with the given IDs for Stubby or Apiary.
     */
    id?: string[];
    /**
     * The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Limits the returned comment threads to those with the specified moderation status. Not compatible with the 'id' filter. Valid values: published, heldForReview, likelySpam.
     */
    moderationStatus?: string;
    /**
     *
     */
    order?: string;
    /**
     * The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>commentThread</code> resource properties that the API response will include.
     */
    part?: string[];
    /**
     * Limits the returned comment threads to those matching the specified key words. Not compatible with the 'id' filter.
     */
    searchTerms?: string;
    /**
     * The requested text format for the returned comments.
     */
    textFormat?: string;
    /**
     * Returns the comment threads of the specified video.
     */
    videoId?: string;
  }
  export interface Params$Resource$Commentthreads$Update
    extends StandardParameters {
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of <code>commentThread</code> resource properties that the API response will include. You must at least include the <code>snippet</code> part in the parameter value since that part contains all of the properties that the API request can update.
     */
    part?: string[];

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
     * @desc Retrieves a list of guide categories.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.guideCategories.list({
     *     hl: 'placeholder-value',
     *     // Return the guide categories with the given IDs.
     *     id: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies the
     *     // <code>guideCategory</code> resource properties that the API response will
     *     // include. Set the parameter value to <code>snippet</code>.
     *     part: 'placeholder-value',
     *     // Return all categories in the given region code.
     *     regionCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.guideCategories.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hl
     * @param {string=} params.id Return the guide categories with the given IDs.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies the <code>guideCategory</code> resource properties that the API response will include. Set the parameter value to <code>snippet</code>.
     * @param {string=} params.regionCode Return all categories in the given region code.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Guidecategories$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Guidecategories$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GuideCategoryListResponse>;
    list(
      params: Params$Resource$Guidecategories$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$GuideCategoryListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GuideCategoryListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GuideCategoryListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GuideCategoryListResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$GuideCategoryListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Guidecategories$List
    extends StandardParameters {
    /**
     *
     */
    hl?: string;
    /**
     * Return the guide categories with the given IDs.
     */
    id?: string[];
    /**
     * The <code><strong>part</strong></code> parameter specifies the <code>guideCategory</code> resource properties that the API response will include. Set the parameter value to <code>snippet</code>.
     */
    part?: string[];
    /**
     * Return all categories in the given region code.
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
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.i18nLanguages.list({
     *     hl: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies the
     *     // <code>i18nLanguage</code> resource properties that the API response will
     *     // include. Set the parameter value to <code>snippet</code>.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.i18nLanguages.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hl
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies the <code>i18nLanguage</code> resource properties that the API response will include. Set the parameter value to <code>snippet</code>.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$I18nlanguages$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$I18nlanguages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$I18nLanguageListResponse>;
    list(
      params: Params$Resource$I18nlanguages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$I18nLanguageListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$I18nLanguageListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$I18nLanguageListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$I18nLanguageListResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$I18nLanguageListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$I18nLanguageListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$I18nlanguages$List
    extends StandardParameters {
    /**
     *
     */
    hl?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies the <code>i18nLanguage</code> resource properties that the API response will include. Set the parameter value to <code>snippet</code>.
     */
    part?: string[];
  }

  export class Resource$I18nregions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.i18nRegions.list
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.i18nRegions.list({
     *     hl: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies the
     *     // <code>i18nRegion</code> resource properties that the API response will
     *     // include. Set the parameter value to <code>snippet</code>.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.i18nRegions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hl
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies the <code>i18nRegion</code> resource properties that the API response will include. Set the parameter value to <code>snippet</code>.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$I18nregions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$I18nregions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$I18nRegionListResponse>;
    list(
      params: Params$Resource$I18nregions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$I18nRegionListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$I18nRegionListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$I18nRegionListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$I18nRegionListResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$I18nRegionListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$I18nRegionListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$I18nregions$List extends StandardParameters {
    /**
     *
     */
    hl?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies the <code>i18nRegion</code> resource properties that the API response will include. Set the parameter value to <code>snippet</code>.
     */
    part?: string[];
  }

  export class Resource$Livebroadcasts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.liveBroadcasts.bind
     * @desc Bind a broadcast to a stream.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveBroadcasts.bind({
     *     // Broadcast to bind to the stream
     *     id: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>liveBroadcast</code> resource
     *     // properties that the API response will include. The <code>part</code> names
     *     // that you can include in the parameter value are <code>id</code>,
     *     // <code>snippet</code>, <code>contentDetails</code>, and <code>status</code>.
     *     part: 'placeholder-value',
     *     // Stream to bind, if not set unbind the current one.
     *     streamId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {},
     *   //   "statistics": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveBroadcasts.bind
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id Broadcast to bind to the stream
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>liveBroadcast</code> resource properties that the API response will include. The <code>part</code> names that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>contentDetails</code>, and <code>status</code>.
     * @param {string=} params.streamId Stream to bind, if not set unbind the current one.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    bind(
      params: Params$Resource$Livebroadcasts$Bind,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    bind(
      params?: Params$Resource$Livebroadcasts$Bind,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveBroadcast>;
    bind(
      params: Params$Resource$Livebroadcasts$Bind,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LiveBroadcast> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$LiveBroadcast>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiveBroadcast>(parameters);
      }
    }

    /**
     * youtube.liveBroadcasts.control
     * @desc Slate and recording control of the live broadcast. Support actions: slate on/off, recording start/stop/pause/resume. Design doc: goto/yt-api-liveBroadcast-control
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveBroadcasts.control({
     *     // Whether display or hide slate.
     *     displaySlate: 'placeholder-value',
     *     // Broadcast to operate.
     *     id: 'placeholder-value',
     *     // The exact time when the actions (e.g. slate on) are executed.
     *     // It is an offset from the first frame of the monitor stream.
     *     // If not set, it means "now" or ASAP.
     *     // This field should not be set if the monitor stream is disabled,
     *     // otherwise an error will be returned.
     *     offsetTimeMs: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>liveBroadcast</code> resource
     *     // properties that the API response will include. The <code>part</code> names
     *     // that you can include in the parameter value are <code>id</code>,
     *     // <code>snippet</code>, <code>contentDetails</code>, and <code>status</code>.
     *     part: 'placeholder-value',
     *     // The wall clock time at which the action should be executed.
     *     // Only one of offset_time_ms and walltime may be set at a time.
     *     walltime: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {},
     *   //   "statistics": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveBroadcasts.control
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.displaySlate Whether display or hide slate.
     * @param {string} params.id Broadcast to operate.
     * @param {string=} params.offsetTimeMs The exact time when the actions (e.g. slate on) are executed. It is an offset from the first frame of the monitor stream. If not set, it means "now" or ASAP. This field should not be set if the monitor stream is disabled, otherwise an error will be returned.
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>liveBroadcast</code> resource properties that the API response will include. The <code>part</code> names that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>contentDetails</code>, and <code>status</code>.
     * @param {string=} params.walltime The wall clock time at which the action should be executed. Only one of offset_time_ms and walltime may be set at a time.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    control(
      params: Params$Resource$Livebroadcasts$Control,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    control(
      params?: Params$Resource$Livebroadcasts$Control,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveBroadcast>;
    control(
      params: Params$Resource$Livebroadcasts$Control,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LiveBroadcast> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$LiveBroadcast>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiveBroadcast>(parameters);
      }
    }

    /**
     * youtube.liveBroadcasts.delete
     * @desc Delete a given broadcast.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveBroadcasts.delete({
     *     id: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveBroadcasts.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Livebroadcasts$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Livebroadcasts$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Livebroadcasts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.liveBroadcasts.insert
     * @desc Inserts a new stream for the authenticated user.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveBroadcasts.insert({
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter serves two purposes in
     *     // this operation. It identifies the properties that the write operation will
     *     // set as well as the properties that the API response will
     *     // include.<br><br>The <code>part</code> properties that you can include in
     *     // the parameter value are <code>id</code>, <code>snippet</code>,
     *     // <code>contentDetails</code>, and <code>status</code>.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {},
     *       //   "statistics": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {},
     *   //   "statistics": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveBroadcasts.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br><br>The <code>part</code> properties that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>contentDetails</code>, and <code>status</code>.
     * @param {().LiveBroadcast} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Livebroadcasts$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Livebroadcasts$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveBroadcast>;
    insert(
      params: Params$Resource$Livebroadcasts$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LiveBroadcast> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$LiveBroadcast>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiveBroadcast>(parameters);
      }
    }

    /**
     * youtube.liveBroadcasts.list
     * @desc Retrieve the list of broadcasts associated with the given channel.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveBroadcasts.list({
     *     // Return broadcasts with a certain status, e.g. active broadcasts.
     *     broadcastStatus: 'placeholder-value',
     *     // Return only broadcasts with the selected type.
     *     broadcastType: 'placeholder-value',
     *     // Return broadcasts with the given ids from Stubby or Apiary.
     *     id: 'placeholder-value',
     *     // The <code><strong>maxResults</strong></code> parameter specifies the
     *     // maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *
     *     mine: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The <code><strong>pageToken</strong></code> parameter identifies a specific
     *     // page in the result set that should be returned. In an API response, the
     *     // <code>nextPageToken</code> and <code>prevPageToken</code> properties
     *     // identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>liveBroadcast</code> resource
     *     // properties that the API response will include. The <code>part</code> names
     *     // that you can include in the parameter value are <code>id</code>,
     *     // <code>snippet</code>, <code>contentDetails</code>, and <code>status</code>.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveBroadcasts.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.broadcastStatus Return broadcasts with a certain status, e.g. active broadcasts.
     * @param {string=} params.broadcastType Return only broadcasts with the selected type.
     * @param {string=} params.id Return broadcasts with the given ids from Stubby or Apiary.
     * @param {integer=} params.maxResults The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean=} params.mine
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string=} params.pageToken The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>liveBroadcast</code> resource properties that the API response will include. The <code>part</code> names that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>contentDetails</code>, and <code>status</code>.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Livebroadcasts$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Livebroadcasts$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveBroadcastListResponse>;
    list(
      params: Params$Resource$Livebroadcasts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$LiveBroadcastListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveBroadcastListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveBroadcastListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiveBroadcastListResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiveBroadcastListResponse>(parameters);
      }
    }

    /**
     * youtube.liveBroadcasts.transition
     * @desc Transition a broadcast to a given status.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveBroadcasts.transition({
     *     // The status to which the broadcast is going to transition.
     *     broadcastStatus: 'placeholder-value',
     *     // Broadcast to transition.
     *     id: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>liveBroadcast</code> resource
     *     // properties that the API response will include. The <code>part</code> names
     *     // that you can include in the parameter value are <code>id</code>,
     *     // <code>snippet</code>, <code>contentDetails</code>, and <code>status</code>.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {},
     *   //   "statistics": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveBroadcasts.transition
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.broadcastStatus The status to which the broadcast is going to transition.
     * @param {string} params.id Broadcast to transition.
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>liveBroadcast</code> resource properties that the API response will include. The <code>part</code> names that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>contentDetails</code>, and <code>status</code>.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    transition(
      params: Params$Resource$Livebroadcasts$Transition,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    transition(
      params?: Params$Resource$Livebroadcasts$Transition,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveBroadcast>;
    transition(
      params: Params$Resource$Livebroadcasts$Transition,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LiveBroadcast> | GaxiosPromise<Readable> {
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
        requiredParams: ['id', 'broadcastStatus', 'part'],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$LiveBroadcast>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiveBroadcast>(parameters);
      }
    }

    /**
     * youtube.liveBroadcasts.update
     * @desc Updates an existing broadcast for the authenticated user.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveBroadcasts.update({
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter serves two purposes in
     *     // this operation. It identifies the properties that the write operation will
     *     // set as well as the properties that the API response will
     *     // include.<br><br>The <code>part</code> properties that you can include in
     *     // the parameter value are <code>id</code>, <code>snippet</code>,
     *     // <code>contentDetails</code>, and <code>status</code>.<br><br>Note that this
     *     // method will override the existing values for all of the mutable properties
     *     // that are contained in any parts that the parameter value specifies. For
     *     // example, a
     *     // broadcast's privacy status is defined in the <code>status</code> part. As
     *     // such, if your request is updating a private or unlisted broadcast, and the
     *     // request's <code>part</code> parameter value includes the
     *     // <code>status</code> part, the broadcast's privacy setting will be updated
     *     // to whatever value the request body specifies. If the request body does not
     *     // specify a value, the existing privacy setting will be removed and the
     *     // broadcast will revert to the default privacy setting.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {},
     *       //   "statistics": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {},
     *   //   "statistics": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveBroadcasts.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br><br>The <code>part</code> properties that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>contentDetails</code>, and <code>status</code>.<br><br>Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the <code>status</code> part. As such, if your request is updating a private or unlisted broadcast, and the request's <code>part</code> parameter value includes the <code>status</code> part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.
     * @param {().LiveBroadcast} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Livebroadcasts$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Livebroadcasts$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveBroadcast>;
    update(
      params: Params$Resource$Livebroadcasts$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveBroadcast>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LiveBroadcast> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$LiveBroadcast>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiveBroadcast>(parameters);
      }
    }
  }

  export interface Params$Resource$Livebroadcasts$Bind
    extends StandardParameters {
    /**
     * Broadcast to bind to the stream
     */
    id?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>liveBroadcast</code> resource properties that the API response will include. The <code>part</code> names that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>contentDetails</code>, and <code>status</code>.
     */
    part?: string[];
    /**
     * Stream to bind, if not set unbind the current one.
     */
    streamId?: string;
  }
  export interface Params$Resource$Livebroadcasts$Control
    extends StandardParameters {
    /**
     * Whether display or hide slate.
     */
    displaySlate?: boolean;
    /**
     * Broadcast to operate.
     */
    id?: string;
    /**
     * The exact time when the actions (e.g. slate on) are executed. It is an offset from the first frame of the monitor stream. If not set, it means "now" or ASAP. This field should not be set if the monitor stream is disabled, otherwise an error will be returned.
     */
    offsetTimeMs?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>liveBroadcast</code> resource properties that the API response will include. The <code>part</code> names that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>contentDetails</code>, and <code>status</code>.
     */
    part?: string[];
    /**
     * The wall clock time at which the action should be executed. Only one of offset_time_ms and walltime may be set at a time.
     */
    walltime?: string;
  }
  export interface Params$Resource$Livebroadcasts$Delete
    extends StandardParameters {
    /**
     *
     */
    id?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
  }
  export interface Params$Resource$Livebroadcasts$Insert
    extends StandardParameters {
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br><br>The <code>part</code> properties that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>contentDetails</code>, and <code>status</code>.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveBroadcast;
  }
  export interface Params$Resource$Livebroadcasts$List
    extends StandardParameters {
    /**
     * Return broadcasts with a certain status, e.g. active broadcasts.
     */
    broadcastStatus?: string;
    /**
     * Return only broadcasts with the selected type.
     */
    broadcastType?: string;
    /**
     * Return broadcasts with the given ids from Stubby or Apiary.
     */
    id?: string[];
    /**
     * The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     *
     */
    mine?: boolean;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>liveBroadcast</code> resource properties that the API response will include. The <code>part</code> names that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>contentDetails</code>, and <code>status</code>.
     */
    part?: string[];
  }
  export interface Params$Resource$Livebroadcasts$Transition
    extends StandardParameters {
    /**
     * The status to which the broadcast is going to transition.
     */
    broadcastStatus?: string;
    /**
     * Broadcast to transition.
     */
    id?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>liveBroadcast</code> resource properties that the API response will include. The <code>part</code> names that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>contentDetails</code>, and <code>status</code>.
     */
    part?: string[];
  }
  export interface Params$Resource$Livebroadcasts$Update
    extends StandardParameters {
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br><br>The <code>part</code> properties that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>contentDetails</code>, and <code>status</code>.<br><br>Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the <code>status</code> part. As such, if your request is updating a private or unlisted broadcast, and the request's <code>part</code> parameter value includes the <code>status</code> part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.
     */
    part?: string[];

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
     * @desc Deletes a chat ban.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatBans.delete({
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveChatBans.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Livechatbans$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Livechatbans$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Livechatbans$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.liveChatBans.insert
     * @desc Inserts a new resource into this collection.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatBans.insert({
     *     // The <code><strong>part</strong></code> parameter serves two purposes in
     *     // this operation. It identifies the properties that the write operation will
     *     // set as well as the properties that the API response returns. Set the
     *     // parameter value to <code>snippet</code>.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveChatBans.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to <code>snippet</code>.
     * @param {().LiveChatBan} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Livechatbans$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Livechatbans$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveChatBan>;
    insert(
      params: Params$Resource$Livechatbans$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$LiveChatBan>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveChatBan>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveChatBan>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LiveChatBan> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$LiveChatBan>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiveChatBan>(parameters);
      }
    }
  }

  export interface Params$Resource$Livechatbans$Delete
    extends StandardParameters {
    /**
     *
     */
    id?: string;
  }
  export interface Params$Resource$Livechatbans$Insert
    extends StandardParameters {
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to <code>snippet</code>.
     */
    part?: string[];

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
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatMessages.delete({
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveChatMessages.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Livechatmessages$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Livechatmessages$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Livechatmessages$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.liveChatMessages.insert
     * @desc Inserts a new resource into this collection.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatMessages.insert({
     *     // The <code><strong>part</strong></code> parameter serves two purposes. It
     *     // identifies the properties that the write operation will set as well as the
     *     // properties that the API response will include. Set the parameter value to
     *     // <code>snippet</code>.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "authorDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "authorDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveChatMessages.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to <code>snippet</code>.
     * @param {().LiveChatMessage} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Livechatmessages$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Livechatmessages$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveChatMessage>;
    insert(
      params: Params$Resource$Livechatmessages$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$LiveChatMessage>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveChatMessage>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveChatMessage>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LiveChatMessage> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$LiveChatMessage>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiveChatMessage>(parameters);
      }
    }

    /**
     * youtube.liveChatMessages.list
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatMessages.list({
     *     // Specifies the localization language in which the system messages
     *     // should be returned.
     *     hl: 'placeholder-value',
     *     // The id of the live chat for which comments should be returned.
     *     liveChatId: 'placeholder-value',
     *     // The <code><strong>maxResults</strong></code> parameter specifies the
     *     // maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // The <code><strong>pageToken</strong></code> parameter identifies a specific
     *     // page in the result set that should be returned. In an API response, the
     *     // <code>nextPageToken</code> property identify other pages that could be
     *     // retrieved.
     *     pageToken: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies the
     *     // <code>liveChatComment</code> resource parts that the API response will
     *     // include. Supported values are <code>id</code> and <code>snippet</code>.
     *     part: 'placeholder-value',
     *     // Specifies the size of the profile image that should be
     *     // returned for each user.
     *     profileImageSize: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "offlineAt": "my_offlineAt",
     *   //   "pageInfo": {},
     *   //   "pollingIntervalMillis": 0,
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveChatMessages.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hl Specifies the localization language in which the system messages should be returned.
     * @param {string} params.liveChatId The id of the live chat for which comments should be returned.
     * @param {integer=} params.maxResults The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string=} params.pageToken The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> property identify other pages that could be retrieved.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies the <code>liveChatComment</code> resource parts that the API response will include. Supported values are <code>id</code> and <code>snippet</code>.
     * @param {integer=} params.profileImageSize Specifies the size of the profile image that should be returned for each user.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Livechatmessages$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Livechatmessages$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveChatMessageListResponse>;
    list(
      params: Params$Resource$Livechatmessages$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$LiveChatMessageListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveChatMessageListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveChatMessageListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiveChatMessageListResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiveChatMessageListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Livechatmessages$Delete
    extends StandardParameters {
    /**
     *
     */
    id?: string;
  }
  export interface Params$Resource$Livechatmessages$Insert
    extends StandardParameters {
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to <code>snippet</code>.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveChatMessage;
  }
  export interface Params$Resource$Livechatmessages$List
    extends StandardParameters {
    /**
     * Specifies the localization language in which the system messages should be returned.
     */
    hl?: string;
    /**
     * The id of the live chat for which comments should be returned.
     */
    liveChatId?: string;
    /**
     * The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> property identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies the <code>liveChatComment</code> resource parts that the API response will include. Supported values are <code>id</code> and <code>snippet</code>.
     */
    part?: string[];
    /**
     * Specifies the size of the profile image that should be returned for each user.
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
     * @desc Deletes a chat moderator.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatModerators.delete({
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveChatModerators.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Livechatmoderators$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Livechatmoderators$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Livechatmoderators$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.liveChatModerators.insert
     * @desc Inserts a new resource into this collection.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatModerators.insert({
     *     // The <code><strong>part</strong></code> parameter serves two purposes in
     *     // this operation. It identifies the properties that the write operation will
     *     // set as well as the properties that the API response returns. Set the
     *     // parameter value to <code>snippet</code>.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveChatModerators.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to <code>snippet</code>.
     * @param {().LiveChatModerator} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Livechatmoderators$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Livechatmoderators$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveChatModerator>;
    insert(
      params: Params$Resource$Livechatmoderators$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$LiveChatModerator>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveChatModerator>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveChatModerator>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiveChatModerator>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$LiveChatModerator>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiveChatModerator>(parameters);
      }
    }

    /**
     * youtube.liveChatModerators.list
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveChatModerators.list({
     *     // The id of the live chat for which moderators should be returned.
     *     liveChatId: 'placeholder-value',
     *     // The <code><strong>maxResults</strong></code> parameter specifies the
     *     // maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // The <code><strong>pageToken</strong></code> parameter identifies a specific
     *     // page in the result set that should be returned. In an API response, the
     *     // <code>nextPageToken</code> and <code>prevPageToken</code> properties
     *     // identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies the
     *     // <code>liveChatModerator</code> resource parts that the API response will
     *     // include. Supported values are <code>id</code> and <code>snippet</code>.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveChatModerators.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.liveChatId The id of the live chat for which moderators should be returned.
     * @param {integer=} params.maxResults The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string=} params.pageToken The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies the <code>liveChatModerator</code> resource parts that the API response will include. Supported values are <code>id</code> and <code>snippet</code>.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Livechatmoderators$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Livechatmoderators$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveChatModeratorListResponse>;
    list(
      params: Params$Resource$Livechatmoderators$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$LiveChatModeratorListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveChatModeratorListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveChatModeratorListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiveChatModeratorListResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
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
     *
     */
    id?: string;
  }
  export interface Params$Resource$Livechatmoderators$Insert
    extends StandardParameters {
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to <code>snippet</code>.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveChatModerator;
  }
  export interface Params$Resource$Livechatmoderators$List
    extends StandardParameters {
    /**
     * The id of the live chat for which moderators should be returned.
     */
    liveChatId?: string;
    /**
     * The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies the <code>liveChatModerator</code> resource parts that the API response will include. Supported values are <code>id</code> and <code>snippet</code>.
     */
    part?: string[];
  }

  export class Resource$Livestreams {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.liveStreams.delete
     * @desc Deletes an existing stream for the authenticated user.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveStreams.delete({
     *     id: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveStreams.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Livestreams$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Livestreams$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Livestreams$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.liveStreams.insert
     * @desc Inserts a new stream for the authenticated user.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveStreams.insert({
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter serves two purposes in
     *     // this operation. It identifies the properties that the write operation will
     *     // set as well as the properties that the API response will
     *     // include.<br><br>The <code>part</code> properties that you can include in
     *     // the parameter value are <code>id</code>, <code>snippet</code>,
     *     // <code>cdn</code>, and <code>status</code>.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cdn": {},
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cdn": {},
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveStreams.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br><br>The <code>part</code> properties that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>cdn</code>, and <code>status</code>.
     * @param {().LiveStream} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Livestreams$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Livestreams$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveStream>;
    insert(
      params: Params$Resource$Livestreams$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$LiveStream>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveStream>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveStream>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LiveStream> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$LiveStream>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiveStream>(parameters);
      }
    }

    /**
     * youtube.liveStreams.list
     * @desc Retrieve the list of streams associated with the given channel. --
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveStreams.list({
     *     // Return LiveStreams with the given ids from Stubby or Apiary.
     *     id: 'placeholder-value',
     *     // The <code><strong>maxResults</strong></code> parameter specifies the
     *     // maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *
     *     mine: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The <code><strong>pageToken</strong></code> parameter identifies a specific
     *     // page in the result set that should be returned. In an API response, the
     *     // <code>nextPageToken</code> and <code>prevPageToken</code> properties
     *     // identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>liveStream</code> resource
     *     // properties that the API response will include. The <code>part</code> names
     *     // that you can include in the parameter value are <code>id</code>,
     *     // <code>snippet</code>, <code>cdn</code>, and <code>status</code>.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveStreams.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.id Return LiveStreams with the given ids from Stubby or Apiary.
     * @param {integer=} params.maxResults The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean=} params.mine
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string=} params.pageToken The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>liveStream</code> resource properties that the API response will include. The <code>part</code> names that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>cdn</code>, and <code>status</code>.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Livestreams$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Livestreams$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveStreamListResponse>;
    list(
      params: Params$Resource$Livestreams$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$LiveStreamListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveStreamListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveStreamListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$LiveStreamListResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$LiveStreamListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiveStreamListResponse>(parameters);
      }
    }

    /**
     * youtube.liveStreams.update
     * @desc Updates an existing stream for the authenticated user.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.liveStreams.update({
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter serves two purposes in
     *     // this operation. It identifies the properties that the write operation will
     *     // set as well as the properties that the API response will
     *     // include.<br><br>The <code>part</code> properties that you can include in
     *     // the parameter value are <code>id</code>, <code>snippet</code>,
     *     // <code>cdn</code>, and <code>status</code>.<br><br>Note that this method
     *     // will override the existing values for all of the mutable properties that
     *     // are contained in any parts that the parameter value specifies. If the
     *     // request body does not specify a value for a mutable property, the existing
     *     // value for that property will be removed.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "cdn": {},
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "cdn": {},
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.liveStreams.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br><br>The <code>part</code> properties that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>cdn</code>, and <code>status</code>.<br><br>Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.
     * @param {().LiveStream} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Livestreams$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Livestreams$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$LiveStream>;
    update(
      params: Params$Resource$Livestreams$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$LiveStream>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$LiveStream>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$LiveStream>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$LiveStream> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$LiveStream>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$LiveStream>(parameters);
      }
    }
  }

  export interface Params$Resource$Livestreams$Delete
    extends StandardParameters {
    /**
     *
     */
    id?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
  }
  export interface Params$Resource$Livestreams$Insert
    extends StandardParameters {
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br><br>The <code>part</code> properties that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>cdn</code>, and <code>status</code>.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$LiveStream;
  }
  export interface Params$Resource$Livestreams$List extends StandardParameters {
    /**
     * Return LiveStreams with the given ids from Stubby or Apiary.
     */
    id?: string[];
    /**
     * The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     *
     */
    mine?: boolean;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>liveStream</code> resource properties that the API response will include. The <code>part</code> names that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>cdn</code>, and <code>status</code>.
     */
    part?: string[];
  }
  export interface Params$Resource$Livestreams$Update
    extends StandardParameters {
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br><br>The <code>part</code> properties that you can include in the parameter value are <code>id</code>, <code>snippet</code>, <code>cdn</code>, and <code>status</code>.<br><br>Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.
     */
    part?: string[];

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
     * @desc Retrieves a list of members that match the request criteria for a channel.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.channel-memberships.creator',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.members.list({
     *     // Comma separated list of channel IDs. Only data about members that are part
     *     // of this list will be included in the response.
     *     filterByMemberChannelId: 'placeholder-value',
     *     // Filter members in the results set to the ones that have access to a level.
     *     hasAccessToLevel: 'placeholder-value',
     *     // The <code><strong>maxResults</strong></code> parameter specifies the
     *     // maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // Parameter that specifies which channel members to return.
     *     mode: 'placeholder-value',
     *     // The <code><strong>pageToken</strong></code> parameter identifies a specific
     *     // page in the result set that should be returned. In an API response, the
     *     // <code>nextPageToken</code> and <code>prevPageToken</code> properties
     *     // identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies the
     *     // <code>member</code> resource parts that the API response will include. Set
     *     // the parameter value to <code>snippet</code>.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.members.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filterByMemberChannelId Comma separated list of channel IDs. Only data about members that are part of this list will be included in the response.
     * @param {string=} params.hasAccessToLevel Filter members in the results set to the ones that have access to a level.
     * @param {integer=} params.maxResults The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string=} params.mode Parameter that specifies which channel members to return.
     * @param {string=} params.pageToken The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies the <code>member</code> resource parts that the API response will include. Set the parameter value to <code>snippet</code>.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Members$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Members$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MemberListResponse>;
    list(
      params: Params$Resource$Members$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$MemberListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MemberListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MemberListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$MemberListResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$MemberListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$MemberListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Members$List extends StandardParameters {
    /**
     * Comma separated list of channel IDs. Only data about members that are part of this list will be included in the response.
     */
    filterByMemberChannelId?: string;
    /**
     * Filter members in the results set to the ones that have access to a level.
     */
    hasAccessToLevel?: string;
    /**
     * The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Parameter that specifies which channel members to return.
     */
    mode?: string;
    /**
     * The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies the <code>member</code> resource parts that the API response will include. Set the parameter value to <code>snippet</code>.
     */
    part?: string[];
  }

  export class Resource$Membershipslevels {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.membershipsLevels.list
     * @desc Retrieves a list of all pricing levels offered by a creator to the fans.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.channel-memberships.creator',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.membershipsLevels.list({
     *     // The <code><strong>part</strong></code> parameter specifies the
     *     // <code>membershipsLevel</code> resource parts that the API response will
     *     // include. Supported values are <code>id</code> and <code>snippet</code>.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.membershipsLevels.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies the <code>membershipsLevel</code> resource parts that the API response will include. Supported values are <code>id</code> and <code>snippet</code>.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Membershipslevels$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Membershipslevels$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MembershipsLevelListResponse>;
    list(
      params: Params$Resource$Membershipslevels$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$MembershipsLevelListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MembershipsLevelListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MembershipsLevelListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$MembershipsLevelListResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
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
     * The <code><strong>part</strong></code> parameter specifies the <code>membershipsLevel</code> resource parts that the API response will include. Supported values are <code>id</code> and <code>snippet</code>.
     */
    part?: string[];
  }

  export class Resource$Playlistitems {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.playlistItems.delete
     * @desc Deletes a resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlistItems.delete({
     *     id: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.playlistItems.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Playlistitems$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Playlistitems$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Playlistitems$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.playlistItems.insert
     * @desc Inserts a new resource into this collection.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlistItems.insert({
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter serves two purposes in
     *     // this operation. It identifies the properties that the write operation will
     *     // set as well as the properties that the API response will include.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.playlistItems.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     * @param {().PlaylistItem} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Playlistitems$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Playlistitems$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlaylistItem>;
    insert(
      params: Params$Resource$Playlistitems$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$PlaylistItem>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlaylistItem>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlaylistItem>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PlaylistItem> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$PlaylistItem>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PlaylistItem>(parameters);
      }
    }

    /**
     * youtube.playlistItems.list
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlistItems.list({
     *     id: 'placeholder-value',
     *     // The <code><strong>maxResults</strong></code> parameter specifies the
     *     // maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The <code><strong>pageToken</strong></code> parameter identifies a specific
     *     // page in the result set that should be returned. In an API response, the
     *     // <code>nextPageToken</code> and <code>prevPageToken</code> properties
     *     // identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>playlistItem</code> resource
     *     // properties that the API response will include.<br><br>If the parameter
     *     // identifies a property that contains child properties, the child properties
     *     // will be included in the response. For example, in a
     *     // <code>playlistItem</code> resource, the <code>snippet</code> property
     *     // contains numerous fields, including the <code>title</code>,
     *     // <code>description</code>, <code>position</code>, and
     *     // <code>resourceId</code> properties. As such, if you set
     *     // <code><strong>part=snippet</strong></code>, the API response will contain
     *     // all of those properties.
     *     part: 'placeholder-value',
     *     // Return the playlist items within the given playlist.
     *     playlistId: 'placeholder-value',
     *     // Return the playlist items associated with the given video ID.
     *     videoId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.playlistItems.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.id
     * @param {integer=} params.maxResults The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.pageToken The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>playlistItem</code> resource properties that the API response will include.<br><br>If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a <code>playlistItem</code> resource, the <code>snippet</code> property contains numerous fields, including the <code>title</code>, <code>description</code>, <code>position</code>, and <code>resourceId</code> properties. As such, if you set <code><strong>part=snippet</strong></code>, the API response will contain all of those properties.
     * @param {string=} params.playlistId Return the playlist items within the given playlist.
     * @param {string=} params.videoId Return the playlist items associated with the given video ID.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Playlistitems$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Playlistitems$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlaylistItemListResponse>;
    list(
      params: Params$Resource$Playlistitems$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$PlaylistItemListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlaylistItemListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlaylistItemListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PlaylistItemListResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$PlaylistItemListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PlaylistItemListResponse>(parameters);
      }
    }

    /**
     * youtube.playlistItems.update
     * @desc Updates an existing resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlistItems.update({
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter serves two purposes in
     *     // this operation. It identifies the properties that the write operation will
     *     // set as well as the properties that the API response will
     *     // include.<br/><br/>Note that this method will override the existing values
     *     // for all of the mutable properties that are contained in any parts that the
     *     // parameter value specifies. For example, a playlist item can specify a start
     *     // time and end time, which identify the times portion of the video that
     *     // should play when users watch the video in the playlist. If your request is
     *     // updating a playlist item that sets these values, and the
     *     // request's <code>part</code> parameter value includes the
     *     // <code>contentDetails</code> part, the playlist item's start and end times
     *     // will be updated to whatever value the request body specifies. If the
     *     // request body does not specify values, the existing start and end times will
     *     // be removed and replaced with the default settings.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.playlistItems.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br/><br/>Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's <code>part</code> parameter value includes the <code>contentDetails</code> part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.
     * @param {().PlaylistItem} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Playlistitems$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Playlistitems$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlaylistItem>;
    update(
      params: Params$Resource$Playlistitems$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$PlaylistItem>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlaylistItem>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlaylistItem>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$PlaylistItem> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$PlaylistItem>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PlaylistItem>(parameters);
      }
    }
  }

  export interface Params$Resource$Playlistitems$Delete
    extends StandardParameters {
    /**
     *
     */
    id?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Playlistitems$Insert
    extends StandardParameters {
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$PlaylistItem;
  }
  export interface Params$Resource$Playlistitems$List
    extends StandardParameters {
    /**
     *
     */
    id?: string[];
    /**
     * The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>playlistItem</code> resource properties that the API response will include.<br><br>If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a <code>playlistItem</code> resource, the <code>snippet</code> property contains numerous fields, including the <code>title</code>, <code>description</code>, <code>position</code>, and <code>resourceId</code> properties. As such, if you set <code><strong>part=snippet</strong></code>, the API response will contain all of those properties.
     */
    part?: string[];
    /**
     * Return the playlist items within the given playlist.
     */
    playlistId?: string;
    /**
     * Return the playlist items associated with the given video ID.
     */
    videoId?: string;
  }
  export interface Params$Resource$Playlistitems$Update
    extends StandardParameters {
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br/><br/>Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's <code>part</code> parameter value includes the <code>contentDetails</code> part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.
     */
    part?: string[];

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
     * @desc Deletes a resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlists.delete({
     *     id: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.playlists.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Playlists$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Playlists$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Playlists$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.playlists.insert
     * @desc Inserts a new resource into this collection.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlists.insert({
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter serves two purposes in
     *     // this operation. It identifies the properties that the write operation will
     *     // set as well as the properties that the API response will include.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "localizations": {},
     *       //   "player": {},
     *       //   "snippet": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "localizations": {},
     *   //   "player": {},
     *   //   "snippet": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.playlists.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     * @param {().Playlist} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Playlists$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Playlists$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Playlist>;
    insert(
      params: Params$Resource$Playlists$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Playlist>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Playlist>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Playlist>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Playlist> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$Playlist>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Playlist>(parameters);
      }
    }

    /**
     * youtube.playlists.list
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlists.list({
     *     // Return the playlists owned by the specified channel ID.
     *     channelId: 'placeholder-value',
     *     // Returen content in specified language
     *     hl: 'placeholder-value',
     *     // Return the playlists with the given IDs for Stubby or Apiary.
     *     id: 'placeholder-value',
     *     // The <code><strong>maxResults</strong></code> parameter specifies the
     *     // maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // Return the playlists owned by the authenticated user.
     *     mine: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The <code><strong>pageToken</strong></code> parameter identifies a specific
     *     // page in the result set that should be returned. In an API response, the
     *     // <code>nextPageToken</code> and <code>prevPageToken</code> properties
     *     // identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>playlist</code> resource
     *     // properties that the API response will include.<br><br>If the parameter
     *     // identifies a property that contains child properties, the child properties
     *     // will be included in the response. For example, in a <code>playlist</code>
     *     // resource, the <code>snippet</code> property contains properties like
     *     // <code>author</code>, <code>title</code>, <code>description</code>,
     *     // <code>tags</code>, and <code>timeCreated</code>. As such, if you set
     *     // <code><strong>part=snippet</strong></code>, the API response will contain
     *     // all of those properties.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.playlists.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.channelId Return the playlists owned by the specified channel ID.
     * @param {string=} params.hl Returen content in specified language
     * @param {string=} params.id Return the playlists with the given IDs for Stubby or Apiary.
     * @param {integer=} params.maxResults The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean=} params.mine Return the playlists owned by the authenticated user.
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string=} params.pageToken The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>playlist</code> resource properties that the API response will include.<br><br>If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a <code>playlist</code> resource, the <code>snippet</code> property contains properties like <code>author</code>, <code>title</code>, <code>description</code>, <code>tags</code>, and <code>timeCreated</code>. As such, if you set <code><strong>part=snippet</strong></code>, the API response will contain all of those properties.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Playlists$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Playlists$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PlaylistListResponse>;
    list(
      params: Params$Resource$Playlists$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$PlaylistListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PlaylistListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PlaylistListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$PlaylistListResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$PlaylistListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$PlaylistListResponse>(parameters);
      }
    }

    /**
     * youtube.playlists.update
     * @desc Updates an existing resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.playlists.update({
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter serves two purposes in
     *     // this operation. It identifies the properties that the write operation will
     *     // set as well as the properties that the API response will
     *     // include.<br/><br/>Note that this method will override the existing values
     *     // for mutable properties that are contained in any parts that the request
     *     // body specifies. For example, a
     *     // playlist's description is contained in the <code>snippet</code> part, which
     *     // must be included in the request body. If the request does not specify a
     *     // value for the <code>snippet.description</code> property, the playlist's
     *     // existing description will be deleted.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "localizations": {},
     *       //   "player": {},
     *       //   "snippet": {},
     *       //   "status": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "localizations": {},
     *   //   "player": {},
     *   //   "snippet": {},
     *   //   "status": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.playlists.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br/><br/>Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the <code>snippet</code> part, which must be included in the request body. If the request does not specify a value for the <code>snippet.description</code> property, the playlist's existing description will be deleted.
     * @param {().Playlist} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Playlists$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Playlists$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Playlist>;
    update(
      params: Params$Resource$Playlists$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Playlist>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Playlist>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Playlist>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Playlist> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$Playlist>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Playlist>(parameters);
      }
    }
  }

  export interface Params$Resource$Playlists$Delete extends StandardParameters {
    /**
     *
     */
    id?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Playlists$Insert extends StandardParameters {
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$Playlist;
  }
  export interface Params$Resource$Playlists$List extends StandardParameters {
    /**
     * Return the playlists owned by the specified channel ID.
     */
    channelId?: string;
    /**
     * Returen content in specified language
     */
    hl?: string;
    /**
     * Return the playlists with the given IDs for Stubby or Apiary.
     */
    id?: string[];
    /**
     * The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Return the playlists owned by the authenticated user.
     */
    mine?: boolean;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>playlist</code> resource properties that the API response will include.<br><br>If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a <code>playlist</code> resource, the <code>snippet</code> property contains properties like <code>author</code>, <code>title</code>, <code>description</code>, <code>tags</code>, and <code>timeCreated</code>. As such, if you set <code><strong>part=snippet</strong></code>, the API response will contain all of those properties.
     */
    part?: string[];
  }
  export interface Params$Resource$Playlists$Update extends StandardParameters {
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br/><br/>Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the <code>snippet</code> part, which must be included in the request body. If the request does not specify a value for the <code>snippet.description</code> property, the playlist's existing description will be deleted.
     */
    part?: string[];

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
     * @desc Retrieves a list of search resources
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.search.list({
     *     // Filter on resources belonging to this channelId.
     *     channelId: 'placeholder-value',
     *     // Add a filter on the channel search.
     *     channelType: 'placeholder-value',
     *     // Filter on the livestream status of the videos.
     *     eventType: 'placeholder-value',
     *     // Search owned by a content owner.
     *     forContentOwner: 'placeholder-value',
     *     // Restrict the search to only retrieve videos uploaded using the project id
     *     // of the authenticated user.
     *     forDeveloper: 'placeholder-value',
     *     // Search for the private videos of the authenticated user.
     *     forMine: 'placeholder-value',
     *     // Filter on location of the video
     *     location: 'placeholder-value',
     *     // Filter on distance from the location (specified above).
     *     locationRadius: 'placeholder-value',
     *     // The <code><strong>maxResults</strong></code> parameter specifies the
     *     // maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // Sort order of the results.
     *     order: 'placeholder-value',
     *     // The <code><strong>pageToken</strong></code> parameter identifies a specific
     *     // page in the result set that should be returned. In an API response, the
     *     // <code>nextPageToken</code> and <code>prevPageToken</code> properties
     *     // identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>search</code> resource properties
     *     // that the API response will include. Set the parameter value to
     *     // <code>snippet</code>.
     *     part: 'placeholder-value',
     *     // Filter on resources published after this date.
     *     publishedAfter: 'placeholder-value',
     *     // Filter on resources published before this date.
     *     publishedBefore: 'placeholder-value',
     *     // Textual search terms to match.
     *     q: 'placeholder-value',
     *     // Display the content as seen by viewers in this country.
     *     regionCode: 'placeholder-value',
     *     // Search related to a resource.
     *     relatedToVideoId: 'placeholder-value',
     *     // Return results relevant to this language.
     *     relevanceLanguage: 'placeholder-value',
     *     // Indicates whether the search results should include restricted content as
     *     // well as standard content.
     *     safeSearch: 'placeholder-value',
     *     // Restrict results to a particular topic.
     *     topicId: 'placeholder-value',
     *     // Restrict results to a particular set of resource types from One Platform.
     *     type: 'placeholder-value',
     *     // Filter on the presence of captions on the videos.
     *     videoCaption: 'placeholder-value',
     *     // Filter on videos in a specific category.
     *     videoCategoryId: 'placeholder-value',
     *     // Filter on the definition of the videos.
     *     videoDefinition: 'placeholder-value',
     *     // Filter on 3d videos.
     *     videoDimension: 'placeholder-value',
     *     // Filter on the duration of the videos.
     *     videoDuration: 'placeholder-value',
     *     // Filter on embeddable videos.
     *     videoEmbeddable: 'placeholder-value',
     *     // Filter on the license of the videos.
     *     videoLicense: 'placeholder-value',
     *     // Filter on syndicated videos.
     *     videoSyndicated: 'placeholder-value',
     *     // Filter on videos of a specific type.
     *     videoType: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "regionCode": "my_regionCode",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.search.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.channelId Filter on resources belonging to this channelId.
     * @param {string=} params.channelType Add a filter on the channel search.
     * @param {string=} params.eventType Filter on the livestream status of the videos.
     * @param {boolean=} params.forContentOwner Search owned by a content owner.
     * @param {boolean=} params.forDeveloper Restrict the search to only retrieve videos uploaded using the project id of the authenticated user.
     * @param {boolean=} params.forMine Search for the private videos of the authenticated user.
     * @param {string=} params.location Filter on location of the video
     * @param {string=} params.locationRadius Filter on distance from the location (specified above).
     * @param {integer=} params.maxResults The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.order Sort order of the results.
     * @param {string=} params.pageToken The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>search</code> resource properties that the API response will include. Set the parameter value to <code>snippet</code>.
     * @param {string=} params.publishedAfter Filter on resources published after this date.
     * @param {string=} params.publishedBefore Filter on resources published before this date.
     * @param {string=} params.q Textual search terms to match.
     * @param {string=} params.regionCode Display the content as seen by viewers in this country.
     * @param {string=} params.relatedToVideoId Search related to a resource.
     * @param {string=} params.relevanceLanguage Return results relevant to this language.
     * @param {string=} params.safeSearch Indicates whether the search results should include restricted content as well as standard content.
     * @param {string=} params.topicId Restrict results to a particular topic.
     * @param {string=} params.type Restrict results to a particular set of resource types from One Platform.
     * @param {string=} params.videoCaption Filter on the presence of captions on the videos.
     * @param {string=} params.videoCategoryId Filter on videos in a specific category.
     * @param {string=} params.videoDefinition Filter on the definition of the videos.
     * @param {string=} params.videoDimension Filter on 3d videos.
     * @param {string=} params.videoDuration Filter on the duration of the videos.
     * @param {string=} params.videoEmbeddable Filter on embeddable videos.
     * @param {string=} params.videoLicense Filter on the license of the videos.
     * @param {string=} params.videoSyndicated Filter on syndicated videos.
     * @param {string=} params.videoType Filter on videos of a specific type.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Search$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Search$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SearchListResponse>;
    list(
      params: Params$Resource$Search$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SearchListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SearchListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SearchListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SearchListResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SearchListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$SearchListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Search$List extends StandardParameters {
    /**
     * Filter on resources belonging to this channelId.
     */
    channelId?: string;
    /**
     * Add a filter on the channel search.
     */
    channelType?: string;
    /**
     * Filter on the livestream status of the videos.
     */
    eventType?: string;
    /**
     * Search owned by a content owner.
     */
    forContentOwner?: boolean;
    /**
     * Restrict the search to only retrieve videos uploaded using the project id of the authenticated user.
     */
    forDeveloper?: boolean;
    /**
     * Search for the private videos of the authenticated user.
     */
    forMine?: boolean;
    /**
     * Filter on location of the video
     */
    location?: string;
    /**
     * Filter on distance from the location (specified above).
     */
    locationRadius?: string;
    /**
     * The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * Sort order of the results.
     */
    order?: string;
    /**
     * The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>search</code> resource properties that the API response will include. Set the parameter value to <code>snippet</code>.
     */
    part?: string[];
    /**
     * Filter on resources published after this date.
     */
    publishedAfter?: string;
    /**
     * Filter on resources published before this date.
     */
    publishedBefore?: string;
    /**
     * Textual search terms to match.
     */
    q?: string;
    /**
     * Display the content as seen by viewers in this country.
     */
    regionCode?: string;
    /**
     * Search related to a resource.
     */
    relatedToVideoId?: string;
    /**
     * Return results relevant to this language.
     */
    relevanceLanguage?: string;
    /**
     * Indicates whether the search results should include restricted content as well as standard content.
     */
    safeSearch?: string;
    /**
     * Restrict results to a particular topic.
     */
    topicId?: string;
    /**
     * Restrict results to a particular set of resource types from One Platform.
     */
    type?: string[];
    /**
     * Filter on the presence of captions on the videos.
     */
    videoCaption?: string;
    /**
     * Filter on videos in a specific category.
     */
    videoCategoryId?: string;
    /**
     * Filter on the definition of the videos.
     */
    videoDefinition?: string;
    /**
     * Filter on 3d videos.
     */
    videoDimension?: string;
    /**
     * Filter on the duration of the videos.
     */
    videoDuration?: string;
    /**
     * Filter on embeddable videos.
     */
    videoEmbeddable?: string;
    /**
     * Filter on the license of the videos.
     */
    videoLicense?: string;
    /**
     * Filter on syndicated videos.
     */
    videoSyndicated?: string;
    /**
     * Filter on videos of a specific type.
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
     * @desc Retrieves a list of sponsors that match the request criteria for a channel.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.sponsors.list({
     *     // Parameter that specifies which channel sponsors to return.
     *     filter: 'placeholder-value',
     *     // The <code><strong>maxResults</strong></code> parameter specifies the
     *     // maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // The <code><strong>pageToken</strong></code> parameter identifies a specific
     *     // page in the result set that should be returned. In an API response, the
     *     // <code>nextPageToken</code> and <code>prevPageToken</code> properties
     *     // identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies the
     *     // <code>sponsor</code> resource parts that the API response will include.
     *     // Supported values are <code>id</code> and <code>snippet</code>.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.sponsors.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Parameter that specifies which channel sponsors to return.
     * @param {integer=} params.maxResults The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string=} params.pageToken The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies the <code>sponsor</code> resource parts that the API response will include. Supported values are <code>id</code> and <code>snippet</code>.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Sponsors$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Sponsors$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SponsorListResponse>;
    list(
      params: Params$Resource$Sponsors$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SponsorListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SponsorListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SponsorListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SponsorListResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SponsorListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$SponsorListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sponsors$List extends StandardParameters {
    /**
     * Parameter that specifies which channel sponsors to return.
     */
    filter?: string;
    /**
     * The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies the <code>sponsor</code> resource parts that the API response will include. Supported values are <code>id</code> and <code>snippet</code>.
     */
    part?: string[];
  }

  export class Resource$Subscriptions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.subscriptions.delete
     * @desc Deletes a resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.subscriptions.delete({
     *     id: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.subscriptions.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Subscriptions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Subscriptions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Subscriptions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.subscriptions.insert
     * @desc Inserts a new resource into this collection.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.subscriptions.insert({
     *     // The <code><strong>part</strong></code> parameter serves two purposes in
     *     // this operation. It identifies the properties that the write operation will
     *     // set as well as the properties that the API response will include.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "snippet": {},
     *       //   "subscriberSnippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "snippet": {},
     *   //   "subscriberSnippet": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.subscriptions.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     * @param {().Subscription} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Subscriptions$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Subscriptions$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Subscription>;
    insert(
      params: Params$Resource$Subscriptions$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Subscription>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Subscription> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$Subscription>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Subscription>(parameters);
      }
    }

    /**
     * youtube.subscriptions.list
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.subscriptions.list({
     *     // Return the subscriptions of the given channel owner.
     *     channelId: 'placeholder-value',
     *     // Return the subscriptions to the subset of these channels that the
     *     // authenticated user is subscribed to.
     *     forChannelId: 'placeholder-value',
     *     // Return the subscriptions with the given IDs for Stubby or Apiary.
     *     id: 'placeholder-value',
     *     // The <code><strong>maxResults</strong></code> parameter specifies the
     *     // maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // Flag for returning the subscriptions of the authenticated user.
     *     mine: 'placeholder-value',
     *
     *     myRecentSubscribers: 'placeholder-value',
     *     // Return the subscribers of the given channel owner.
     *     mySubscribers: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The order of the returned subscriptions
     *     order: 'placeholder-value',
     *     // The <code><strong>pageToken</strong></code> parameter identifies a specific
     *     // page in the result set that should be returned. In an API response, the
     *     // <code>nextPageToken</code> and <code>prevPageToken</code> properties
     *     // identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>subscription</code> resource
     *     // properties that the API response will include.<br><br>If the parameter
     *     // identifies a property that contains child properties, the child properties
     *     // will be included in the response. For example, in a
     *     // <code>subscription</code> resource, the <code>snippet</code> property
     *     // contains other properties, such as a display title for the subscription. If
     *     // you set <code><strong>part=snippet</strong></code>, the API response will
     *     // also contain all of those nested properties.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.subscriptions.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.channelId Return the subscriptions of the given channel owner.
     * @param {string=} params.forChannelId Return the subscriptions to the subset of these channels that the authenticated user is subscribed to.
     * @param {string=} params.id Return the subscriptions with the given IDs for Stubby or Apiary.
     * @param {integer=} params.maxResults The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean=} params.mine Flag for returning the subscriptions of the authenticated user.
     * @param {boolean=} params.myRecentSubscribers
     * @param {boolean=} params.mySubscribers Return the subscribers of the given channel owner.
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string=} params.order The order of the returned subscriptions
     * @param {string=} params.pageToken The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>subscription</code> resource properties that the API response will include.<br><br>If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a <code>subscription</code> resource, the <code>snippet</code> property contains other properties, such as a display title for the subscription. If you set <code><strong>part=snippet</strong></code>, the API response will also contain all of those nested properties.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Subscriptions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Subscriptions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SubscriptionListResponse>;
    list(
      params: Params$Resource$Subscriptions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SubscriptionListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SubscriptionListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SubscriptionListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SubscriptionListResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$SubscriptionListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$SubscriptionListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Subscriptions$Delete
    extends StandardParameters {
    /**
     *
     */
    id?: string;
  }
  export interface Params$Resource$Subscriptions$Insert
    extends StandardParameters {
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$Subscription;
  }
  export interface Params$Resource$Subscriptions$List
    extends StandardParameters {
    /**
     * Return the subscriptions of the given channel owner.
     */
    channelId?: string;
    /**
     * Return the subscriptions to the subset of these channels that the authenticated user is subscribed to.
     */
    forChannelId?: string;
    /**
     * Return the subscriptions with the given IDs for Stubby or Apiary.
     */
    id?: string[];
    /**
     * The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * Flag for returning the subscriptions of the authenticated user.
     */
    mine?: boolean;
    /**
     *
     */
    myRecentSubscribers?: boolean;
    /**
     * Return the subscribers of the given channel owner.
     */
    mySubscribers?: boolean;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The order of the returned subscriptions
     */
    order?: string;
    /**
     * The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>subscription</code> resource properties that the API response will include.<br><br>If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a <code>subscription</code> resource, the <code>snippet</code> property contains other properties, such as a display title for the subscription. If you set <code><strong>part=snippet</strong></code>, the API response will also contain all of those nested properties.
     */
    part?: string[];
  }

  export class Resource$Superchatevents {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.superChatEvents.list
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.superChatEvents.list({
     *     // Return rendered funding amounts in specified language.
     *     hl: 'placeholder-value',
     *     // The <code><strong>maxResults</strong></code> parameter specifies the
     *     // maximum number of items that should be returned in the result set.
     *     maxResults: 'placeholder-value',
     *     // The <code><strong>pageToken</strong></code> parameter identifies a specific
     *     // page in the result set that should be returned. In an API response, the
     *     // <code>nextPageToken</code> and <code>prevPageToken</code> properties
     *     // identify other pages that could be retrieved.
     *     pageToken: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies the
     *     // <code>superChatEvent</code> resource parts that the API response will
     *     // include. Supported values are <code>id</code> and <code>snippet</code>.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.superChatEvents.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hl Return rendered funding amounts in specified language.
     * @param {integer=} params.maxResults The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string=} params.pageToken The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies the <code>superChatEvent</code> resource parts that the API response will include. Supported values are <code>id</code> and <code>snippet</code>.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Superchatevents$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Superchatevents$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$SuperChatEventListResponse>;
    list(
      params: Params$Resource$Superchatevents$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$SuperChatEventListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SuperChatEventListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SuperChatEventListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$SuperChatEventListResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$SuperChatEventListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Superchatevents$List
    extends StandardParameters {
    /**
     * Return rendered funding amounts in specified language.
     */
    hl?: string;
    /**
     * The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies the <code>superChatEvent</code> resource parts that the API response will include. Supported values are <code>id</code> and <code>snippet</code>.
     */
    part?: string[];
  }

  export class Resource$Thumbnails {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.thumbnails.set
     * @desc As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.upload',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.thumbnails.set({
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The actual
     *     // CMS account that the user authenticates with must be linked to the
     *     // specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // Returns the Thumbnail with the given video IDs for Stubby or Apiary.
     *     videoId: 'placeholder-value',
     *
     *     requestBody: {
     *       // request body parameters
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.thumbnails.set
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.videoId Returns the Thumbnail with the given video IDs for Stubby or Apiary.
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    set(
      params: Params$Resource$Thumbnails$Set,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    set(
      params?: Params$Resource$Thumbnails$Set,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ThumbnailSetResponse>;
    set(
      params: Params$Resource$Thumbnails$Set,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$ThumbnailSetResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ThumbnailSetResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ThumbnailSetResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ThumbnailSetResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$ThumbnailSetResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$ThumbnailSetResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Thumbnails$Set extends StandardParameters {
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * Returns the Thumbnail with the given video IDs for Stubby or Apiary.
     */
    videoId?: string;

    /**
     * Request body metadata
     */
    requestBody?: {};

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
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videoAbuseReportReasons.list({
     *     hl: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies the
     *     // <code>videoCategory</code> resource parts that the API response will
     *     // include. Supported values are <code>id</code> and <code>snippet</code>.
     *     part: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.videoAbuseReportReasons.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hl
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies the <code>videoCategory</code> resource parts that the API response will include. Supported values are <code>id</code> and <code>snippet</code>.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Videoabusereportreasons$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Videoabusereportreasons$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VideoAbuseReportReasonListResponse>;
    list(
      params: Params$Resource$Videoabusereportreasons$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VideoAbuseReportReasonListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VideoAbuseReportReasonListResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
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
     *
     */
    hl?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies the <code>videoCategory</code> resource parts that the API response will include. Supported values are <code>id</code> and <code>snippet</code>.
     */
    part?: string[];
  }

  export class Resource$Videocategories {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.videoCategories.list
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videoCategories.list({
     *     hl: 'placeholder-value',
     *     // Returns the video categories with the given IDs for Stubby or Apiary.
     *     id: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies the
     *     // <code>videoCategory</code> resource properties that the API response will
     *     // include. Set the parameter value to <code>snippet</code>.
     *     part: 'placeholder-value',
     *
     *     regionCode: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.videoCategories.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.hl
     * @param {string=} params.id Returns the video categories with the given IDs for Stubby or Apiary.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies the <code>videoCategory</code> resource properties that the API response will include. Set the parameter value to <code>snippet</code>.
     * @param {string=} params.regionCode
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Videocategories$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Videocategories$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VideoCategoryListResponse>;
    list(
      params: Params$Resource$Videocategories$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$VideoCategoryListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VideoCategoryListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VideoCategoryListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VideoCategoryListResponse>
      | GaxiosPromise<Readable> {
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
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$VideoCategoryListResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Videocategories$List
    extends StandardParameters {
    /**
     *
     */
    hl?: string;
    /**
     * Returns the video categories with the given IDs for Stubby or Apiary.
     */
    id?: string[];
    /**
     * The <code><strong>part</strong></code> parameter specifies the <code>videoCategory</code> resource properties that the API response will include. Set the parameter value to <code>snippet</code>.
     */
    part?: string[];
    /**
     *
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
     * @desc Deletes a resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videos.delete({
     *     id: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The actual
     *     // CMS account that the user authenticates with must be linked to the
     *     // specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.videos.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params: Params$Resource$Videos$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Videos$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Videos$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.videos.getRating
     * @desc Retrieves the ratings that the authorized user gave to a list of specified videos.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videos.getRating({
     *     id: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.videos.getRating
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getRating(
      params: Params$Resource$Videos$Getrating,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getRating(
      params?: Params$Resource$Videos$Getrating,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VideoRatingListResponse>;
    getRating(
      params: Params$Resource$Videos$Getrating,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getRating(
      params: Params$Resource$Videos$Getrating,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$VideoRatingListResponse>,
      callback: BodyResponseCallback<Schema$VideoRatingListResponse>
    ): void;
    getRating(
      params: Params$Resource$Videos$Getrating,
      callback: BodyResponseCallback<Schema$VideoRatingListResponse>
    ): void;
    getRating(
      callback: BodyResponseCallback<Schema$VideoRatingListResponse>
    ): void;
    getRating(
      paramsOrCallback?:
        | Params$Resource$Videos$Getrating
        | BodyResponseCallback<Schema$VideoRatingListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VideoRatingListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VideoRatingListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VideoRatingListResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$VideoRatingListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$VideoRatingListResponse>(parameters);
      }
    }

    /**
     * youtube.videos.insert
     * @desc Inserts a new resource into this collection.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.upload',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videos.insert({
     *     // Should auto-levels be applied to the upload.
     *     autoLevels: 'placeholder-value',
     *     // Notify the channel subscribers about the new video. As default, the
     *     // notification is enabled.
     *     notifySubscribers: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // This parameter can only be used in a properly <a
     *     // href="/youtube/v3/guides/authentication">authorized request</a>.
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter
     *     // specifies the YouTube channel ID of the channel to which a video is being
     *     // added. This parameter is required when a request specifies a value for the
     *     // <code>onBehalfOfContentOwner</code> parameter, and it can only be used in
     *     // conjunction with that parameter. In addition, the request must be
     *     // authorized using a CMS account that is linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the
     *     // channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value
     *     // specifies must be linked to the content owner that the
     *     // <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This
     *     // parameter is intended for YouTube content partners that own and manage many
     *     // different YouTube channels. It allows content owners to authenticate once
     *     // and perform actions on behalf of the channel specified in the parameter
     *     // value, without having to provide authentication credentials for each
     *     // separate channel.
     *     onBehalfOfContentOwnerChannel: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter serves two purposes in
     *     // this operation. It identifies the properties that the write operation will
     *     // set as well as the properties that the API response will
     *     // include.<br/><br/>Note that not all parts contain properties that can be
     *     // set when inserting or updating a video. For example, the
     *     // <code>statistics</code> object encapsulates statistics that YouTube
     *     // calculates for a video and does not contain values that you can set or
     *     // modify. If the parameter value specifies a <code>part</code> that does not
     *     // contain mutable values, that <code>part</code> will still be included in
     *     // the API response.
     *     part: 'placeholder-value',
     *     // Should stabilize be applied to the upload.
     *     stabilize: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "ageGating": {},
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "fileDetails": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "liveStreamingDetails": {},
     *       //   "localizations": {},
     *       //   "monetizationDetails": {},
     *       //   "player": {},
     *       //   "processingDetails": {},
     *       //   "projectDetails": {},
     *       //   "recordingDetails": {},
     *       //   "snippet": {},
     *       //   "statistics": {},
     *       //   "status": {},
     *       //   "suggestions": {},
     *       //   "topicDetails": {}
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "ageGating": {},
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "fileDetails": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "liveStreamingDetails": {},
     *   //   "localizations": {},
     *   //   "monetizationDetails": {},
     *   //   "player": {},
     *   //   "processingDetails": {},
     *   //   "projectDetails": {},
     *   //   "recordingDetails": {},
     *   //   "snippet": {},
     *   //   "statistics": {},
     *   //   "status": {},
     *   //   "suggestions": {},
     *   //   "topicDetails": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.videos.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.autoLevels Should auto-levels be applied to the upload.
     * @param {boolean=} params.notifySubscribers Notify the channel subscribers about the new video. As default, the notification is enabled.
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.onBehalfOfContentOwnerChannel This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br/><br/>Note that not all parts contain properties that can be set when inserting or updating a video. For example, the <code>statistics</code> object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a <code>part</code> that does not contain mutable values, that <code>part</code> will still be included in the API response.
     * @param {boolean=} params.stabilize Should stabilize be applied to the upload.
     * @param  {object} params.requestBody Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params: Params$Resource$Videos$Insert,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    insert(
      params?: Params$Resource$Videos$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Video>;
    insert(
      params: Params$Resource$Videos$Insert,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Video>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Video>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Video>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Video> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$Video>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Video>(parameters);
      }
    }

    /**
     * youtube.videos.list
     * @desc Retrieves a list of resources, possibly filtered.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.readonly',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videos.list({
     *     // Return the videos that are in the specified chart.
     *     chart: 'placeholder-value',
     *     // Stands for "host language". Specifies the localization language of the
     *     // metadata to be filled into snippet.localized. The field is filled with the
     *     // default metadata if there is no localization in the specified language.
     *     // The parameter value must be a language code included in the list returned
     *     // by the i18nLanguages.list method (e.g. en_US, es_MX).
     *     hl: 'placeholder-value',
     *     // Return videos with the given ids.
     *     id: 'placeholder-value',
     *
     *     locale: 'placeholder-value',
     *
     *     maxHeight: 'placeholder-value',
     *     // The <code><strong>maxResults</strong></code> parameter specifies the
     *     // maximum number of items that should be returned in the result
     *     // set.<br><br><strong>Note:</strong> This parameter is supported for use in
     *     // conjunction with the <code><a href="#myRating">myRating</a></code> and
     *     // <code><a href="#chart">chart</a></code> parameters, but it is not supported
     *     // for use in conjunction with the <code><a href="#id">id</a></code>
     *     // parameter.
     *     maxResults: 'placeholder-value',
     *     // Return the player with maximum height specified in
     *     maxWidth: 'placeholder-value',
     *     // Return videos liked/disliked by the authenticated user.
     *     // Does not support RateType.RATED_TYPE_NONE.
     *     myRating: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The <code><strong>pageToken</strong></code> parameter identifies a specific
     *     // page in the result set that should be returned. In an API response, the
     *     // <code>nextPageToken</code> and <code>prevPageToken</code> properties
     *     // identify other pages that could be retrieved.<br><br><strong>Note:</strong>
     *     // This parameter is supported for use in conjunction with the <code><a
     *     // href="#myRating">myRating</a></code> and <code><a
     *     // href="#chart">chart</a></code> parameters, but it is not supported for use
     *     // in conjunction with the <code><a href="#id">id</a></code> parameter.
     *     pageToken: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter specifies a
     *     // comma-separated list of one or more <code>video</code> resource properties
     *     // that the API response will include.<br><br>If the parameter identifies a
     *     // property that contains child properties, the child properties will be
     *     // included in the response. For example, in a <code>video</code> resource,
     *     // the <code>snippet</code> property contains the <code>channelId</code>,
     *     // <code>title</code>, <code>description</code>, <code>tags</code>, and
     *     // <code>categoryId</code> properties. As such, if you set
     *     // <code><strong>part=snippet</strong></code>, the API response will contain
     *     // all of those properties.
     *     part: 'placeholder-value',
     *     // Use a chart that is specific to the specified region
     *     regionCode: 'placeholder-value',
     *     // Use chart that is specific to the specified video category
     *     videoCategoryId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "etag": "my_etag",
     *   //   "eventId": "my_eventId",
     *   //   "items": [],
     *   //   "kind": "my_kind",
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "pageInfo": {},
     *   //   "prevPageToken": "my_prevPageToken",
     *   //   "tokenPagination": {},
     *   //   "visitorId": "my_visitorId"
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.videos.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.chart Return the videos that are in the specified chart.
     * @param {string=} params.hl Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).
     * @param {string=} params.id Return videos with the given ids.
     * @param {string=} params.locale
     * @param {integer=} params.maxHeight
     * @param {integer=} params.maxResults The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.<br><br><strong>Note:</strong> This parameter is supported for use in conjunction with the <code><a href="#myRating">myRating</a></code> and <code><a href="#chart">chart</a></code> parameters, but it is not supported for use in conjunction with the <code><a href="#id">id</a></code> parameter.
     * @param {integer=} params.maxWidth Return the player with maximum height specified in
     * @param {string=} params.myRating Return videos liked/disliked by the authenticated user. Does not support RateType.RATED_TYPE_NONE.
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string=} params.pageToken The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.<br><br><strong>Note:</strong> This parameter is supported for use in conjunction with the <code><a href="#myRating">myRating</a></code> and <code><a href="#chart">chart</a></code> parameters, but it is not supported for use in conjunction with the <code><a href="#id">id</a></code> parameter.
     * @param {string} params.part The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>video</code> resource properties that the API response will include.<br><br>If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a <code>video</code> resource, the <code>snippet</code> property contains the <code>channelId</code>, <code>title</code>, <code>description</code>, <code>tags</code>, and <code>categoryId</code> properties. As such, if you set <code><strong>part=snippet</strong></code>, the API response will contain all of those properties.
     * @param {string=} params.regionCode Use a chart that is specific to the specified region
     * @param {string=} params.videoCategoryId Use chart that is specific to the specified video category
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params: Params$Resource$Videos$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Videos$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$VideoListResponse>;
    list(
      params: Params$Resource$Videos$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$VideoListResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$VideoListResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$VideoListResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$VideoListResponse>
      | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$VideoListResponse>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$VideoListResponse>(parameters);
      }
    }

    /**
     * youtube.videos.rate
     * @desc Adds a like or dislike rating to a video or removes a rating from a video.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videos.rate({
     *     id: 'placeholder-value',
     *
     *     rating: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.videos.rate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.id
     * @param {string} params.rating
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    rate(
      params: Params$Resource$Videos$Rate,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    rate(
      params?: Params$Resource$Videos$Rate,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    rate(
      params: Params$Resource$Videos$Rate,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.videos.reportAbuse
     * @desc Report abuse for a video.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videos.reportAbuse({
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "comments": "my_comments",
     *       //   "language": "my_language",
     *       //   "reasonId": "my_reasonId",
     *       //   "secondaryReasonId": "my_secondaryReasonId",
     *       //   "videoId": "my_videoId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.videos.reportAbuse
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {().VideoAbuseReport} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    reportAbuse(
      params: Params$Resource$Videos$Reportabuse,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reportAbuse(
      params?: Params$Resource$Videos$Reportabuse,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    reportAbuse(
      params: Params$Resource$Videos$Reportabuse,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.videos.update
     * @desc Updates an existing resource.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.videos.update({
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The actual
     *     // CMS account that the user authenticates with must be linked to the
     *     // specified YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *     // The <code><strong>part</strong></code> parameter serves two purposes in
     *     // this operation. It identifies the properties that the write operation will
     *     // set as well as the properties that the API response will
     *     // include.<br/><br/>Note that this method will override the existing values
     *     // for all of the mutable properties that are contained in any parts that the
     *     // parameter value specifies. For example, a
     *     // video's privacy setting is contained in the <code>status</code> part. As
     *     // such, if your request is updating a private video, and the request's
     *     // <code>part</code> parameter value includes the <code>status</code> part,
     *     // the
     *     // video's privacy setting will be updated to whatever value the request body
     *     // specifies. If the request body does not specify a value, the existing
     *     // privacy setting will be removed and the video will revert to the default
     *     // privacy setting.<br/><br/>In addition, not all parts contain properties
     *     // that can be set when inserting or updating a video. For example, the
     *     // <code>statistics</code> object encapsulates statistics that YouTube
     *     // calculates for a video and does not contain values that you can set or
     *     // modify. If the parameter value specifies a <code>part</code> that does not
     *     // contain mutable values, that <code>part</code> will still be included in
     *     // the API response.
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "ageGating": {},
     *       //   "contentDetails": {},
     *       //   "etag": "my_etag",
     *       //   "fileDetails": {},
     *       //   "id": "my_id",
     *       //   "kind": "my_kind",
     *       //   "liveStreamingDetails": {},
     *       //   "localizations": {},
     *       //   "monetizationDetails": {},
     *       //   "player": {},
     *       //   "processingDetails": {},
     *       //   "projectDetails": {},
     *       //   "recordingDetails": {},
     *       //   "snippet": {},
     *       //   "statistics": {},
     *       //   "status": {},
     *       //   "suggestions": {},
     *       //   "topicDetails": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "ageGating": {},
     *   //   "contentDetails": {},
     *   //   "etag": "my_etag",
     *   //   "fileDetails": {},
     *   //   "id": "my_id",
     *   //   "kind": "my_kind",
     *   //   "liveStreamingDetails": {},
     *   //   "localizations": {},
     *   //   "monetizationDetails": {},
     *   //   "player": {},
     *   //   "processingDetails": {},
     *   //   "projectDetails": {},
     *   //   "recordingDetails": {},
     *   //   "snippet": {},
     *   //   "statistics": {},
     *   //   "status": {},
     *   //   "suggestions": {},
     *   //   "topicDetails": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.videos.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br/><br/>Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the <code>status</code> part. As such, if your request is updating a private video, and the request's <code>part</code> parameter value includes the <code>status</code> part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting.<br/><br/>In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the <code>statistics</code> object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a <code>part</code> that does not contain mutable values, that <code>part</code> will still be included in the API response.
     * @param {().Video} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params: Params$Resource$Videos$Update,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    update(
      params?: Params$Resource$Videos$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Video>;
    update(
      params: Params$Resource$Videos$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<Schema$Video>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Video>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Video>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Video> | GaxiosPromise<Readable> {
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
        createAPIRequest<Schema$Video>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$Video>(parameters);
      }
    }
  }

  export interface Params$Resource$Videos$Delete extends StandardParameters {
    /**
     *
     */
    id?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Videos$Getrating extends StandardParameters {
    /**
     *
     */
    id?: string[];
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }
  export interface Params$Resource$Videos$Insert extends StandardParameters {
    /**
     * Should auto-levels be applied to the upload.
     */
    autoLevels?: boolean;
    /**
     * Notify the channel subscribers about the new video. As default, the notification is enabled.
     */
    notifySubscribers?: boolean;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * This parameter can only be used in a properly <a href="/youtube/v3/guides/authentication">authorized request</a>. <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwnerChannel</strong></code> parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the <code>onBehalfOfContentOwner</code> parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies. Finally, the channel that the <code>onBehalfOfContentOwnerChannel</code> parameter value specifies must be linked to the content owner that the <code>onBehalfOfContentOwner</code> parameter specifies.<br><br>This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     */
    onBehalfOfContentOwnerChannel?: string;
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br/><br/>Note that not all parts contain properties that can be set when inserting or updating a video. For example, the <code>statistics</code> object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a <code>part</code> that does not contain mutable values, that <code>part</code> will still be included in the API response.
     */
    part?: string[];
    /**
     * Should stabilize be applied to the upload.
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
     * Return the videos that are in the specified chart.
     */
    chart?: string;
    /**
     * Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).
     */
    hl?: string;
    /**
     * Return videos with the given ids.
     */
    id?: string[];
    /**
     *
     */
    locale?: string;
    /**
     *
     */
    maxHeight?: number;
    /**
     * The <code><strong>maxResults</strong></code> parameter specifies the maximum number of items that should be returned in the result set.<br><br><strong>Note:</strong> This parameter is supported for use in conjunction with the <code><a href="#myRating">myRating</a></code> and <code><a href="#chart">chart</a></code> parameters, but it is not supported for use in conjunction with the <code><a href="#id">id</a></code> parameter.
     */
    maxResults?: number;
    /**
     * Return the player with maximum height specified in
     */
    maxWidth?: number;
    /**
     * Return videos liked/disliked by the authenticated user. Does not support RateType.RATED_TYPE_NONE.
     */
    myRating?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The <code><strong>pageToken</strong></code> parameter identifies a specific page in the result set that should be returned. In an API response, the <code>nextPageToken</code> and <code>prevPageToken</code> properties identify other pages that could be retrieved.<br><br><strong>Note:</strong> This parameter is supported for use in conjunction with the <code><a href="#myRating">myRating</a></code> and <code><a href="#chart">chart</a></code> parameters, but it is not supported for use in conjunction with the <code><a href="#id">id</a></code> parameter.
     */
    pageToken?: string;
    /**
     * The <code><strong>part</strong></code> parameter specifies a comma-separated list of one or more <code>video</code> resource properties that the API response will include.<br><br>If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a <code>video</code> resource, the <code>snippet</code> property contains the <code>channelId</code>, <code>title</code>, <code>description</code>, <code>tags</code>, and <code>categoryId</code> properties. As such, if you set <code><strong>part=snippet</strong></code>, the API response will contain all of those properties.
     */
    part?: string[];
    /**
     * Use a chart that is specific to the specified region
     */
    regionCode?: string;
    /**
     * Use chart that is specific to the specified video category
     */
    videoCategoryId?: string;
  }
  export interface Params$Resource$Videos$Rate extends StandardParameters {
    /**
     *
     */
    id?: string;
    /**
     *
     */
    rating?: string;
  }
  export interface Params$Resource$Videos$Reportabuse
    extends StandardParameters {
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$VideoAbuseReport;
  }
  export interface Params$Resource$Videos$Update extends StandardParameters {
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
    /**
     * The <code><strong>part</strong></code> parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.<br/><br/>Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the <code>status</code> part. As such, if your request is updating a private video, and the request's <code>part</code> parameter value includes the <code>status</code> part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting.<br/><br/>In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the <code>statistics</code> object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a <code>part</code> that does not contain mutable values, that <code>part</code> will still be included in the API response.
     */
    part?: string[];

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
     * @desc Allows upload of watermark image and setting it for a channel.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtube.upload',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.watermarks.set({
     *     channelId: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "imageBytes": "my_imageBytes",
     *       //   "imageUrl": "my_imageUrl",
     *       //   "position": {},
     *       //   "targetChannelId": "my_targetChannelId",
     *       //   "timing": {}
     *       // }
     *     },
     *     media: {
     *       mimeType: 'placeholder-value',
     *       body: 'placeholder-value',
     *     },
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.watermarks.set
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.channelId
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param  {object} params.requestBody Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    set(
      params: Params$Resource$Watermarks$Set,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    set(
      params?: Params$Resource$Watermarks$Set,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    set(
      params: Params$Resource$Watermarks$Set,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * youtube.watermarks.unset
     * @desc Allows removal of channel watermark.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [
     *       'https://www.googleapis.com/auth/youtube',
     *       'https://www.googleapis.com/auth/youtube.force-ssl',
     *       'https://www.googleapis.com/auth/youtubepartner',
     *     ],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.watermarks.unset({
     *     channelId: 'placeholder-value',
     *     // <strong>Note:</strong> This parameter is intended exclusively for YouTube
     *     // content partners.<br><br>The
     *     // <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates
     *     // that the
     *     // request's authorization credentials identify a YouTube CMS user who is
     *     // acting on behalf of the content owner specified in the parameter value.
     *     // This parameter is intended for YouTube content partners that own and manage
     *     // many different YouTube channels. It allows content owners to authenticate
     *     // once and get access to all their video and channel data, without having to
     *     // provide authentication credentials for each individual channel. The CMS
     *     // account that the user authenticates with must be linked to the specified
     *     // YouTube content owner.
     *     onBehalfOfContentOwner: 'placeholder-value',
     *   });
     *   console.log(res.data);
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.watermarks.unset
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.channelId
     * @param {string=} params.onBehalfOfContentOwner <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    unset(
      params: Params$Resource$Watermarks$Unset,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    unset(
      params?: Params$Resource$Watermarks$Unset,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    unset(
      params: Params$Resource$Watermarks$Unset,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
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
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<void>
        | BodyResponseCallback<Readable>,
      callback?: BodyResponseCallback<void> | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<void> | GaxiosPromise<Readable> {
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
        createAPIRequest<void>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Watermarks$Set extends StandardParameters {
    /**
     *
     */
    channelId?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
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
     *
     */
    channelId?: string;
    /**
     * <strong>Note:</strong> This parameter is intended exclusively for YouTube content partners.<br><br>The <code><strong>onBehalfOfContentOwner</strong></code> parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     */
    onBehalfOfContentOwner?: string;
  }

  export class Resource$Youtube {
    context: APIRequestContext;
    v3: Resource$Youtube$V3;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.v3 = new Resource$Youtube$V3(this.context);
    }
  }

  export class Resource$Youtube$V3 {
    context: APIRequestContext;
    tests: Resource$Youtube$V3$Tests;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.tests = new Resource$Youtube$V3$Tests(this.context);
    }
  }

  export class Resource$Youtube$V3$Tests {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * youtube.youtube.v3.tests.create
     * @desc POST method.
     * @example
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/youtube.googleapis.com
     * // - Login into gcloud by running:
     * //   `$ gcloud auth application-default login`
     * // - Install the npm module by running:
     * //   `$ npm install googleapis`
     *
     * const {google} = require('googleapis');
     * const youtube = google.youtube('v3');
     *
     * async function main() {
     *   const auth = new google.auth.GoogleAuth({
     *     // Scopes can be specified either as an array or as a single, space-delimited string.
     *     scopes: [],
     *   });
     *
     *   // Acquire an auth client, and bind it to all future calls
     *   const authClient = await auth.getClient();
     *   google.options({auth: authClient});
     *
     *   // Do the magic
     *   const res = await youtube.youtube.v3.tests.create({
     *     part: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "id": "my_id",
     *       //   "snippet": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": "my_id",
     *   //   "snippet": {}
     *   // }
     * }
     *
     * main().catch(e => {
     *   console.error(e);
     *   throw e;
     * });
     *
     * @alias youtube.youtube.v3.tests.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.part
     * @param {().TestItem} params.requestBody Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params: Params$Resource$Youtube$V3$Tests$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Youtube$V3$Tests$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestItem>;
    create(
      params: Params$Resource$Youtube$V3$Tests$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Youtube$V3$Tests$Create,
      options: MethodOptions | BodyResponseCallback<Schema$TestItem>,
      callback: BodyResponseCallback<Schema$TestItem>
    ): void;
    create(
      params: Params$Resource$Youtube$V3$Tests$Create,
      callback: BodyResponseCallback<Schema$TestItem>
    ): void;
    create(callback: BodyResponseCallback<Schema$TestItem>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Youtube$V3$Tests$Create
        | BodyResponseCallback<Schema$TestItem>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestItem>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestItem>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$TestItem> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Youtube$V3$Tests$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Youtube$V3$Tests$Create;
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
            url: (rootUrl + '/youtube/v3/tests').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$TestItem>(
          parameters,
          callback as BodyResponseCallback<{} | void>
        );
      } else {
        return createAPIRequest<Schema$TestItem>(parameters);
      }
    }
  }

  export interface Params$Resource$Youtube$V3$Tests$Create
    extends StandardParameters {
    /**
     *
     */
    part?: string[];

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestItem;
  }
}
