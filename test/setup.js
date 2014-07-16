var fs = require('fs');
var nock = require('nock');
// nock.disableNetConnect();
var GOOGLEAPIS = 'https://www.googleapis.com';

// Handle OAuth certificate request
var oauthcerts = fs.readFileSync(__dirname + '/data/oauthcerts.json');
nock(GOOGLEAPIS).get('/oauth2/v1/certs').reply(200, oauthcerts);

nock(GOOGLEAPIS).get('/urlshortener/v1/url/history').reply(200, 'Hello from Google!');
nock(GOOGLEAPIS).post('/urlshortener/v1/url').reply(200, {
  kind: 'urlshortener#url',
  id: 'http://goo.gl/mR2d',
  longUrl: 'http://google.com/'
});
