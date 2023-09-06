# Using the Generator
The clients in this repository are all automatically generated.  They are generated using the [Google Discovery Service](https://developers.google.com/discovery).  Most users of this library will not need to directly use the generator.  This documentation is intended for users that need to maintain the repository, or build custom clients.

## Running the generator locally
To run the generator locally:
1. Clone the repository, and cd into the directory
2. Run `npm install`
3. Run `npm run generate`

This command will download all discovery files available via the [discovery index](https://www.googleapis.com/discovery/v1/apis/), and run the code generator against those files.

### Generatoring from the cache
There are some situations where you don't want to re-download the discovery files before running the generator.  This is particularly useful in situations where you're working on the generator itself, and want to isolate the change.  To prevent the generator from re-downloading the discovery files, run:
```sh
npm run generate -- --use-cache
```

### Downloading discovery files
As part of the `npm run generate` command, discovery docs are downloaded.  To only download discovery file updates, and not re-run the generator, run:
```sh
npm run download
```

## Submitting generator PRs
This repository uses [synthtool](https://github.com/googleapis/synthtool/) to re-generate the API on a nightly basis.  The command `npm run submit-prs` will perform a variety of steps:
1. Download all discovery files (`npm run download`)
2. Run the generator (`npm run generate`)
3. Iterate over each directory in `src/apis`, and create a commit with only those changes
4. Submit a single PR with multiple commits, including a changelog

## Generating individual APIs
You can generate a single API based on a discovery URL. Replace the url and API name below to match the API you'd like to generate:
```
npm run build-tools
node build/cjs/src/generator/generator.js 'https://apigee.googleapis.com/$discovery/rest?version=v1' \
  --include-private false \
  --use-cache false
```

Assuming that command completes successfully, you can access the output and test it out by navigating to the API subdirectory:
```
cd src/apis/apigee
npm install
```



If you want to distribute this package, which is common for APIs not listed in the discovery index, you can pack it to generate a tarball:
```
npm pack
```

## Questions
Feel free to submit an issue!
