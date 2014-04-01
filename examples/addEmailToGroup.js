/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 *  # Creating a Service Account using the Google Developers Console
 *
 *  1. From the [Google Developers Console](https://cloud.google.com/console), select your project or create a new one.
 *
 *  2. Under "APIs & auth", click "Credentials".
 *
 *  3. Under "OAuth", click the "Create new client ID" button.
 *
 *  4. Select "Service account" as the application type and click "Create Client ID".
 *
 *  5. The key for your new service account should prompt for download automatically. Note that your key is protected with a password.
 *  IMPORTANT: keep a secure copy of the key, as Google keeps only the public key.
 *
 *  6. Convert the downloaded key to PEM, so we can use it from the Node [crypto](http://nodejs.org/api/crypto.html) module.
 *
 *  To do this, run the following in Terminal:
 *  ```bash
 *  openssl pkcs12 -in downloaded-key-file.p12 -out your-key-file.pem -nodes
 *  ```
 *
 *  You will be asked for the password you received during step 5.
 *
 *  That's it! You now have a service account with an email address and a key that you can use from your Node application.
 *
 *  [Source. Thanks!](https://github.com/extrabacon/google-oauth-jwt)
 *
 *  # Setting authentication data
 *  Create a file named `authData.json` containing:
 *  {
 *      "email":    "215406603088-l......rf19misb7rvrmu@developer.gserviceaccount.com"
 *    , "keyFile":  "./keyFile.pem"
 *    , "key":      "f5938a7....734e68bf1a6d5ad02"
 *    , "scopes":   [
 *          "https://www.googleapis.com/auth/admin.directory.group"
 *        , "https://www.googleapis.com/auth/admin.directory.group.member"
 *      ]
 *  }
 *
 *  Provide credentials of your Google Application in `email` and `key` fields.
 *
 * */

// dependencies
var Assert = require('assert')
  , GoogleApis = require('googleapis')
  , authData = require("./authData")
  ;

// output
console.log("Auth data is: ", authData);

// set jwt data
var jwt = new GoogleApis.auth.JWT(
    authData.email
  , authData.keyFile
  , authData.key
  , authData.scopes
  , "admin@example.com"
);

// authorize
jwt.authorize(function (err, data) {

    // output error
    if (err) {
        console.log("Error: ", err);
        return;
    }

    // output
    console.log("You have been successfully authenticated: ", data);

    // get client
    GoogleApis
        .discover('admin', 'directory_v1')
        .withAuthClient(jwt)
        .execute(function (err, client) {

            // handle error
            if (err) {
                return callback(err);
            }

            // create the group insert request
            var request = client.admin.members.delete({
                groupKey: "some_group@example.com"
            }, {
                email: "me@example.com"
            });

            // and execute it
            request.execute(function (err, data) {
                console.log(err, data);
            });
        });
});
