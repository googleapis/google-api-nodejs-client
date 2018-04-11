# Contributing
Before making any contributions, please sign one of the contributor license agreements below. Fork the repo, develop and test your code changes.

Install all dependencies including development requirements by running:

``` sh
$ npm install
```

Builds or tests require the installation of [`make`](https://www.gnu.org/software/make/), which is likely already installed if you develop on Linux or OSX.  To perform the first build, go ahead and run it!

``` sh
$ make
```

Next, go ahead and run the tests:

```sh
$ npm test
```

This looks for tests in the `test/` directory.  In addition to running the tests, this also checks code formatting.  Code formatting (and other issues) can be fixed automatically by running:

```sh
$ make fix
```

The repo owner reviews your request. They can approve and merge your change. If your change needs additional work, they follow up with comments.

## Generating APIs
If you're a developer interested in contributing to this library, the following section will be useful for you. Each of the files in `src/apis/` is generated from the discovery docs available online. You can generate these files by running the following command:

``` sh
$ make generate
```

You can pass in custom Discovery URLs or paths to discovery docs:

``` sh
$ node build/src/scripts/generate http://discoveryurl.example.com /path/to/discoverydoc.json
```

## Generating Documentation
You can generate the documentation for the APIs by running:

``` sh
make docs
```

Documentation will be generated in `docs/`.

## Preparing for release
Before releasing a new version, package maintainers should draft release notes, bump the version in `package.json`, and submit a Pull Request with **only** the version bump. After the PR is merged, create the release.  This will automatically create a new tag, resulting in an automated release.

## Contributor License Agreements
Before creating a pull request, please fill out either the individual or corporate Contributor License Agreement.

* If you are an individual writing original source code and you're sure you own the intellectual property, then you'll need to sign an [individual CLA][indv-cla].
* If you work for a company that wants to allow you to contribute your work to this client library, then you'll need to sign a [corporate CLA][corp-cla].

Follow either of the two links above to access the appropriate CLA and instructions for how to sign and return it. Once we receive it, we'll add you to the official list of contributors and be able to accept your patches.

[js-guide]: https://google.github.io/styleguide/jsguide.html
[c-linter]: https://code.google.com/p/closure-linter/
[indv-cla]: https://developers.google.com/open-source/cla/individual
[corp-cla]: https://developers.google.com/open-source/cla/corporate
