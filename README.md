# google-api-nodejs-client [alpha]

[![Build Status](https://travis-ci.org/google/google-api-nodejs-client.png)](https://travis-ci.org/google/google-api-nodejs-client)

`google-api-nodejs-client` is Google's officially supported
[node.js](http://nodejs.org/) client
library for accessing Google APIs, it also supports authorization and
authentication with OAuth 2.0.

### Questions/problems?

* Ask your development related questions on [![Ask a question on Stackoverflow](https://googledrive.com/host/0ByfSjdPVs9MZbkhjeUhMYzRTeEE/stackoveflow-tag.png)](http://stackoverflow.com/questions/tagged/google-api-nodejs-client)
* If you found a bug, please [file a bug](https://github.com/google/google-api-nodejs-client/issues).

**Note**: This library is currently in *alpha* status, meaning that we can make
changes in the future that *may not be compatible* with the previous versions.

## Installation

The library is distributed on `npm`. In order to add it as a dependency,
run the following command:

~~~~ sh
$ npm install googleapis
~~~~

## Guide

### Discover APIs

Dynamically load Google APIs and start making requests:

~~~~ js
var googleapis = require('googleapis');

googleapis
    .discover('urlshortener', 'v1')
    .discover('plus', 'v1')
    .execute(function(err, client) {
  if (err) {
    console.log('Problem during the client discovery.', err);
    return;
  }
  var params = { shortUrl: 'http://goo.gl/DdUKX' };
  var getUrlReq = client.urlshortener.url.get(params);

  getUrlReq.execute(function (err, response) {
    console.log('Long url is', response.longUrl);
  });

  var getUserReq = client.plus.people.get({ userId: '+burcudogan' });

  getUserReq.execute(function(err, user) {
    console.log('User id is: ' + user.id);
  });
});
~~~~

Supported APIs are listed on
[Google APIs Explorer](https://developers.google.com/apis-explorer).

#### Discovery Document Caching

Discovery documents are being cached for 5 minutes locally.
You can configure the directory used to store cached discovery
files by using the `cache.path` option.

~~~~ js
googleapis
    .discover('plus', 'v3')
    .withOpts({ cache: { path: '<path>' }))
    .execute();
~~~~

### Authorization and Authentication

This client comes with an OAuth2 client that allows you to retrieve an access token and
refreshes the token and re-try the request seamlessly if token is expired. The
basics of Google's OAuth 2.0 implementation is explained on
[Google Authorization and Authentication
documentation](https://developers.google.com/accounts/docs/OAuth2Login).

A complete sample application that authorizes and authenticates with OAuth2.0
client is available at `examples/oauth2.js`.

#### Consent Page Url

In order to ask for permissions from a user to retrieve an access token, you
should redirect them to a consent page. In order to create a consent page
URL:

~~~~ js
var googleapis = require('googleapis'),
    OAuth2 = googleapis.auth.OAuth2;

var oauth2Client =
    new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

// generates a url that allows offline access and asks permissions
// for Google+ scope.
var scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/calendar'
];

var url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes.join(" ") // space delimited string of scopes
});
~~~~

#### Retrieving Tokens
Once a user has given permissions on the consent page, Google will redirect
the page to the redirect url you have provided with a code query parameter.

    GET /oauthcallback?code={authorizationCode}

With the code returned, you can ask for an access token as shown below:

~~~~ js
oauth2Client.getToken(code, function(err, tokens) {
  // contains an access_token and optionally a refresh_token.
  // save them permanently.
});
~~~~

### API Client

Client libraries are generated during runtime by metadata provided by Google
APIs Discovery Service. Metadata provided by Discovery Service is cached,
and won't be requested each time you load a client. Below, there is an
example of loading a client for
[URL Shortener API](https://developers.google.com/url-shortener/).

~~~~ js
googleapis
    .discover('urlshortener', 'v1')
    .execute(function(err, client) {
  // handle discovery errors
  // make requests
});
~~~~

### Requests

The following sample loads a client for URL Shortener and retrieves the long url
of the given short url:

~~~~ js
googleapis
    .discover('urlshortener', 'v1')
    .execute(function(err, client) {
  // handle discovery errors
  client.urlshortener.url.get({ shortUrl: 'http://goo.gl/DdUKX' })
      .execute(function(err, result) {
    // result.longUrl contains the long url.
  });
});
~~~~

Alternatively, you may need to send an API key with the
request you are going to make. The following creates and executes a request from the Google+ API service to retrieve a person profile given a userId:

~~~~ js
googleapis
    .discover('plus', 'v1')
    .execute(function(err, client) {
  // handle discovery errors
  var getUserAuthdReq = client.plus.people.get({ userId: '+burcudogan' })
      .withApiKey(API_KEY);

  getUserAuthdReq.execute(function(err, user) {
    console.log("Result: " + (err ? err.message : user.displayName));
  });
});
~~~~

To learn more about API keys, please see the [documentation](https://developers.google.com/console/help/#UsingKeys).

#### Making Authenticated Requests

And you can start using oauth2Client to authorize and authenticate your
requests to Google APIs with the retrieved tokens. If you provide a
refresh_token, the access_token is automatically refreshed and the request is replayed in
case the access_token has expired.

Following sample retrieves Google+ profile of the authenticated user.

~~~~ js
var oauth2Client =
    new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

// Retrieve tokens via token exchange explaind above.
// Or you can set them.
oauth2Client.credentials = {
  access_token: 'ACCESS TOKEN HERE',
  refresh_token: 'REFRESH TOKEN HERE'
};

client
    .plus.people.get({ userId: 'me' })
    .withAuthClient(oauth2Client)
    .execute(callback);
~~~~

### Batch requests (experimental)

You can combine multiple requests in a single one by using batch requests.

~~~~ js
var getUserReq =
    client.plus.people.get({ userId: '+BurcuDogan' });

var insertUrlReq =
    client.urlshortener.url.insert({ longUrl: 'http://google.com' });

client
    .newBatchRequest()
    .add(getUserReq)
    .add(insertUrlReq)
    .execute(function(err, results) {
  // handle results
});
~~~~

### Media Uploads

Client supports basic and multipart media uploads. For creation and modification requests
with media attachments, take a look at the `examples/mediaupload.js` sample.

~~~~ js
client
    .drive.files.insert({ title: 'Test', mimeType: 'text/plain' })
    .withMedia('text/plain', 'Hello World')
    .execute();
~~~~

## License

`google-api-nodejs-client` is licensed with Apache 2.0. Full license text is
available on COPYING file.

## Contributing

See [CONTRIBUTING](https://github.com/google/google-api-nodejs-client/tree/master/CONTRIBUTING.md).
