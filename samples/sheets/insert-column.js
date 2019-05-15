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
              dimension: 'COLUMNS',
              startIndex,
              endIndex,
            },
            inheritFromBefore: false,
          },
        },
      ],
    },
  });
  console.info(res);
}

if (module === require.main) {
  if (process.argv.length !== 6) {
    const cliParams = 'spreadsheetId sheetId startIndex endIndex';
    throw new Error(`Usage: node samples/sheets/insert-column.js ${cliParams}`);
  }

  const [spreadsheetId, sheetId, startIndex, endIndex] = process.argv.slice(2);
  const scopes = ['https://www.googleapis.com/auth/spreadsheets'];

  sampleClient
    .authenticate(scopes)
    .then(() => runSample(spreadsheetId, sheetId, startIndex, endIndex))
    .catch(console.error);
}

module.exports = {
  runSample,
  client: sampleClient.oAuth2Client,
};
