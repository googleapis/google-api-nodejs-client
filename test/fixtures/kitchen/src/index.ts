import {google, GoogleApis} from 'googleapis';
// uncomment the line below during development
//import {google, GoogleApis} from '../../../../src';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const drive = google.drive('v3');
const googleapis = new GoogleApis();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const oauth2 = new googleapis.auth.OAuth2();
google.auth.getClient().then(client => {
  if (client instanceof google.auth.JWT) {
    client.scopes = [];
  }
});
