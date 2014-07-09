# Google APIs NodeJS Client [![Build Status](https://travis-ci.org/google/google-api-nodejs-client.png)][travis]

`google-api-nodejs-client` is Google's officially supported
[node.js][node] client library for accessing Google APIs, it
also supports authorization and authentication with OAuth 2.0.

### Questions/problems?

* Ask your development related questions on [![Ask a question on Stackoverflow](https://googledrive.com/host/0ByfSjdPVs9MZbkhjeUhMYzRTeEE/stackoveflow-tag.png)][stackoverflow]
* If you found a bug, please [file a bug][bugs].

## Installation

The library is distributed on `npm`. In order to add it as a dependency,
run the following command:

~~~~ sh
$ npm install googleapis
~~~~

## Usage

### Making requests

``` js
var google = require('googleapis');

var urlshortener = google.urlshortener('v1');
var plus = google.plus('v1');

var params = { shortUrl: 'http://goo.gl/DdUKX' };

urlshortener.url.get(params, function (err, response) {
  console.log('Long url is', response.longUrl);
});

plus.people.get({ userId: '+burcudogan' }, function(err, user) {
  console.log('User id is: ' + user.id);
});
```

Supported APIs are listed on
[Google APIs Explorer][apiexplorer].

### Authorization and Authentication

This client comes with an OAuth2 client that allows you to retrieve an access token and
refreshes the token and re-try the request seamlessly if token is expired. The
basics of Google's OAuth 2.0 implementation is explained on
[Google Authorization and Authentication
documentation](https://developers.google.com/accounts/docs/OAuth2Login).

A complete sample application that authorizes and authenticates with OAuth2.0
client is available at `examples/oauth2.js`.

#### Consent Page Url

To ask for permissions from a user to retrieve an access token, you
redirect them to a consent page. To create a consent page URL:

``` js
var google = require('googleapis'),
    OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

// generates a url that allows offline access and asks permissions
// for Google+ scope.
var scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/calendar'
];

var url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes.join(' ') // space delimited string of scopes
});
```

#### Retrieving Tokens

Once a user has given permissions on the consent page, Google will redirect
the page to the redirect URL you have provided with a code query parameter.

    GET /oauthcallback?code={authorizationCode}

With the code returned, you can ask for an access token as shown below:

``` js
oauth2Client.getToken(code, function(err, tokens) {
  // contains an access_token and optionally a refresh_token.
  // save them permanently.
});
```

### API Client

API Client endpoints are available for many APIs. Below is an
example of loading a client for [URL Shortener API][urlshort].

``` js
var urlshortener = google.urlshortener('v1'); // load version 'v1' of urlshortener
```

### Requests

The following sample loads a client for URL Shortener and retrieves the long url
of the given short url:

``` js
var urlshortener = google.urlshortener('v1');

urlshortener.url.get({ shortUrl: 'http://goo.gl/DdUKX' }, function(err, result) {
  console.log(result.longUrl); // print the long url
});
```

Alternatively, you may need to send an API key with the
request you are going to make. The following creates and executes a request
from the Google+ API service to retrieve a person profile given a userId:

``` js
var plus = google.plus('v1');

plus.people.get({ key: API_KEY, userId: '+burcudogan' }, function(err, user) {
  console.log('Result: ' + (err ? err.message : user.displayName));
});
```

To learn more about API keys, please see the [documentation][usingkeys].

#### Making Authenticated Requests

And you can start using oauth2Client to authorize and authenticate your
requests to Google APIs with the retrieved tokens. If you provide a
refresh_token, the access_token is automatically refreshed and the request is replayed in
case the access_token has expired.

Following sample retrieves Google+ profile of the authenticated user.

``` js
var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

// Retrieve tokens via token exchange explained above or set them:
oauth2Client.credentials = {
  access_token: 'ACCESS TOKEN HERE',
  refresh_token: 'REFRESH TOKEN HERE'
};

var plus = google.plus({ auth: oauth2Client });

plus.people.get({ userId: 'me' }, callback);
```

<!-- ### Batch requests (experimental)

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
 -->

### Media Uploads

Client supports basic and multipart media uploads. For creation and modification requests
with media attachments, take a look at the `examples/mediaupload.js` sample.

``` js
var drive = google.drive({ version: 'v2', auth: oauth2Client });

drive.files.insert({
  resource: {
    title: 'Test',
    mimeType: 'text/plain'
  },
  media: 'Hello World'
}, callback);
```

## License

`google-api-nodejs-client` is licensed with Apache 2.0. Full license text is
available in [COPYING][copying].

## Contributing

See [CONTRIBUTING][contributing].

[bugs]: https://github.com/google/google-api-nodejs-client/issues
[node]: http://nodejs.org/
[travis]: https://travis-ci.org/google/google-api-nodejs-client
[stackoverflow]: http://stackoverflow.com/questions/tagged/google-api-nodejs-client
[apiexplorer]: https://developers.google.com/apis-explorer
[urlshort]: https://developers.google.com/url-shortener/
[usingkeys]: https://developers.google.com/console/help/#UsingKeys
[contributing]: https://github.com/google/google-api-nodejs-client/tree/master/CONTRIBUTING.md
[copying]: https://github.com/google/google-api-nodejs-client/tree/master/COPYING
