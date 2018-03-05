import {google, GoogleApis} from 'googleapis';
// uncomment the line below during development
// import {google, GoogleApis} from '../../../../src';
const drive = google.drive({});
const googleapis = new GoogleApis();
const oauth2 = new googleapis.auth.OAuth2();
