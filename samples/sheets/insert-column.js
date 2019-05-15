'use strict';

const {google} = require('googleapis');
const sampleClient = require('../sampleclient');

const sheets = google.sheets({
  version: 'v4',
  auth: sampleClient.oAuth2Client,
});

async function runSample(spreadsheetId, sheetId, startIndex, endIndex) {
  const res = await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    resource: {
      requests: [
        {
          insertDimension: {
            range: {
              sheetId,
              dimension: "COLUMNS",
              startIndex,
              endIndex
            },
            inheritFromBefore: false,
          }
        }
      ]
    }
  });
}

const scopes = [
  'https://www.googleapis.com/auth/spreadsheets'
];

if (module === require.main) {
  const [spreadsheetId, sheetId, startIndex, endIndex] = process.argv.slice(2);
  sampleClient
    .authenticate(scopes)
    .then(() => runSample(spreadsheetId, sheetId, startIndex, endIndex))
    .catch(console.error);
}

module.exports = {
  runSample,
  client: sampleClient.oAuth2Client,
};
