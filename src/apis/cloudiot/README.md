<img src="https://avatars0.githubusercontent.com/u/1342004?v=3&s=96" alt="Google Inc. logo" title="Google" align="right" height="96" width="96"/>

# cloudiot

> Registers and manages IoT (Internet of Things) devices that connect to the Google Cloud Platform.

*NOTE*: There are multiple npm modules available for this service. This module
provides a low level HTTP client which exposes the inner workings of the API.
The [@google-cloud/iot](https://www.npmjs.com/package/@google-cloud/iot)
npm module provides a [grpc](https://grpc.io/) based client that is faster, easier to use, and better maintained.

To learn more, see [Client Libraries Explained](https://cloud.google.com/apis/docs/client-libraries-explained).

## Installation

```sh
$ npm install googleapis
```

## Usage
All documentation and usage information can be found on [GitHub](https://github.com/googleapis/google-api-nodejs-client).

## Building a browser bundle

This library can be used in a browser. To prepare a single file bundle, clone the
[repository](https://github.com/googleapis/google-api-nodejs-client) and run

```sh
$ cd src/apis/cloudiot
$ npm install
$ npm run webpack
```

The generated bundle will be written to `dist/cloudiot.min.js`. Use it from your HTML file:

```html
<script src="/path/to/cloudiot.min.js"></script>
<script>
const { cloudiot, auth } = Cloudiot;
</script>
```

## License
This library is licensed under Apache 2.0. Full license text is available in [LICENSE](https://github.com/googleapis/google-api-nodejs-client/blob/master/LICENSE).

## Contributing
We love contributions! Before submitting a Pull Request, it's always good to start with a new issue first. To learn more, see [CONTRIBUTING](https://github.com/google/google-api-nodejs-client/blob/master/.github/CONTRIBUTING.md).

## Questions/problems?
* Ask your development related questions on [StackOverflow](http://stackoverflow.com/questions/tagged/google-api-nodejs-client).
* If you've found an bug/issue, please [file it on GitHub](https://github.com/googleapis/google-api-nodejs-client/issues).


*Crafted with ❤️ by the Google Node.js team*
