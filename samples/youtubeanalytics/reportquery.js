// Author: Alan Chao in Hong Kong (chaotaklon@gmail.com)

'use strict';

const {google} = require('googleapis');
const sampleClient = require('../sampleclient');

const youtubeAnalytics = google.youtubeAnalytics({
  version: 'v2',
  auth: sampleClient.oAuth2Client
});

async function runSample () {
  const res = await youtubeAnalytics.reports.query({
    dimensions: "day",
    endDate: "2018-12-31",
    ids: "channel==MINE",  // youtube -> setting -> advanced setting -> channel ID
    metrics: "views,estimatedMinutesWatched,averageViewDuration,averageViewPercentage,subscribersGained",
    sort: "day",
    startDate: "2018-01-01"
  });
  console.log(res.data);
  return res.data;
}

const scopes = [
  'https://www.googleapis.com/auth/youtube',
  'https://www.googleapis.com/auth/yt-analytics.readonly'
];

sampleClient.authenticate(scopes)
  .then(() => runSample())
.catch(console.error);
