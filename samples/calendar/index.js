

const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) { 
    console.error('Error loading client secret file:', err);
    return;
  }
  // Authorize a client with credentials, then call the Google Calendar API.
  console.log(`Reading the file credentials.json`)
  // authorize(JSON.parse(content), listEvents);
  authorize(JSON.parse(content), listCalendars);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials - The authorization client credentials.
 * @param {function} callback - The callback to call with the authorized client.
 */

function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]
  );

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) {
      // If no TOKEN_PATH, create one.
      getAccessToken(oAuth2Client, callback);
      return;
    } 
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  })
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param { google.auth.OAuth2 } oAuth2Client - The OAuth2 client to get token for.
 * @param { getEventsCallback } callback - The callback for the authorized client.
 */

function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log(`Authorize this app by visiting this url: `, authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(`Enter the code from that page here: `, (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        console.error(`Error retrieving access token --> `, err);
        return;
      }
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) {
          console.error(`There was an error with writing the token --> `, err);
          return;
        }
        console.log(`Token stored to: `, TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the next 10 events on the user's primary calendar.
 * @param { google.auth.OAuth2 } auth - An authorized OAuth2 client.
 * More info: https://developers.google.com/calendar/v3/reference/calendars
 */

function listEvents(auth, calendarId, summary) {
  const calendar = google.calendar({ version: 'v3', auth });
  calendar.events.list({
    calendarId: calendarId,
    timeMin: (new Date()).toISOString(), // right now
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (err, res) => {
    if (err) {
      console.error(`The listEvents API returned an error --> `, err);
      return;
    }
    const events = res.data.items;
    if (events.length) {
      console.log(`The upcoming 10 events for ${summary} are --> `);
      events.map((event, i) => {
        const start = event.start.dateTime || event.start.date;
        console.log(`${start} - ${event.summary}`)
      });
    } else {
      console.log(`No upcoming events found.`);
    }
  })
}

/**
 * List all of a user's calendars.
 * @param { google.auth.OAuth2 } auth - An authorized OAuth2 client.
 * More info: https://developers.google.com/calendar/v3/reference/calendarList
 */
function listCalendars(auth) {
  const calendar = google.calendar({ version: 'v3', auth });
  calendar.calendarList.list({
    minAccessRole: 'reader'
  },(err, res) => {
    if (err) {
      console.error(`There was an error with the api --> `, err);
      return;
    }
    const calendarList = res.data.items
    console.log(calendarList[3])
    calendarList.forEach(calendar => {
        const calendarId = calendar.id;
        const summary = calendar.summaryOverride || calendar.summary;
      listEvents(auth, calendarId, summary);
    })
  });
}