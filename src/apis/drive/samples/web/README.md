# Drive v3 API Samples

These samples allow you to list files on Google Drive using this library in the browser.

## Running the samples

### **Note: Node.js version 8 or greater is requared to run samples.**
Set the following values in `oauth2.keys.json` (up one directory):

* `client_id`
* `project_id`
* `client_secret`

__Generate the webpacked bundle of the library__

Execute the following command from the main directory (the one that contains `package.json`):

```
npm run webpack
```

__Run the webserver__

This sample will list the files in the user's Google Drive.

You'll need to do the following before you can run this sample:

* Enable the [Google Drive API](https://console.developers.google.com/apis/api/drive.googleapis.com/overview).
* Set the redirect API in the Google Cloud Console application registration to `http://localhost:3000/oauth2callback`.

```
node webserver.js
```

The script will run a webserver on port 3000 and will open a browser that will authenticate the user and show
the first ten files from the user's Google Drive.
