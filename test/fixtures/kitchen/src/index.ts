import {google, GoogleApis} from 'googleapis';
// uncomment the line below during development
//import {google, GoogleApis} from '../../../../src';
const drive = google.drive('v3');
const googleapis = new GoogleApis();
const oauth2 = new googleapis.auth.OAuth2();
google.auth.getClient().then(client => {
  if (client instanceof google.auth.JWT) {
    client.scopes = [];
  }
});
