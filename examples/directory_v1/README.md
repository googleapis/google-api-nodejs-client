Directory v_1 Examples
======================

This directory contains some examples how to interact with `directory v_1` API.
Authentication is done via JWT.

### Creating a Service Account using the Google Developers Console

1. From the [Google Developers Console](https://cloud.google.com/console), select your project or create a new one.

2. Under "APIs & auth", click "Credentials".

3. Under "OAuth", click the "Create new client ID" button.

4. Select "Service account" as the application type and click "Create Client ID".

5. The key for your new service account should prompt for download automatically. Note that your key is protected with a password.
   IMPORTANT: keep a secure copy of the key, as Google keeps only the public key.

6. Convert the downloaded key to PEM, so we can use it from the Node [crypto](http://nodejs.org/api/crypto.html) module.

   To do this, run the following in Terminal:
   ```bash
   openssl pkcs12 -in downloaded-key-file.p12 -out your-key-file.pem -nodes
   ```

   You will be asked for the password you received during step 5.

That's it! You now have a service account with an email address and a key that you can use from your Node application.

[<sub>Source. Thanks!</sub>](https://github.com/extrabacon/google-oauth-jwt)

### Testing

Replace the `keyFile.pem` file with the generated file generated in the previous step. Set your data in `authData.json`.

Then you can run examples.

```sh
$ node <example-you-want-to-run>.js
```
