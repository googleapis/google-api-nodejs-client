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
