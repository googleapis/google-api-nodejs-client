// Copyright 2016 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {google} = require('googleapis');

// Import necessary modules for the Express server and Firebase functions
const express = require('express');
const functions = require('firebase-functions');

// Create an instance of Express
const app = express();

// Configure the Google Home Graph client
const homegraphClient = google.homegraph({
    version: 'v1',
    auth: new google.auth.GoogleAuth({
    // Path to the authentication credentials JSON file
    keyFile: './google_example_key.json',
    // Required Google scopes for accessing Home Graph
    scopes: 'https://www.googleapis.com/auth/homegraph'
    })
});

// Define the function that will be executed when a HTTPS request is received at the URL of this function
exports.requestsync = functions.https.onRequest(async (request, response) => {
    // Get the ID of the user making the request
    const idUser = request.body.agentUserId;

    // Allow access to this function from any origin (CORS)
    response.set('Access-Control-Allow-Origin', '*');

    // Log information to Firebase logs
    functions.logger.info(`Request SYNC for user ${idUser}`);

    try {
        // Make a request to Home Graph to sync the user's devices
        const res = await homegraphClient.devices.requestSync({
        requestBody: {
            agentUserId: idUser, // Use the user ID obtained earlier
            async: request.body.async
        }
        });

        // Send the Home Graph response to the client that made the request
        response.json(res.data);
        functions.logger.log('Request sync completed');
    } catch (err) {
        // If there is an error, log it and send an error response to the client
        functions.logger.error(err);
        response.status(500).send(`Error requesting sync: ${err}`);
    }
});

// Define another function that will be executed when a HTTPS request is received at the URL of this function
exports.reportstate = functions.https.onRequest(async (request, response) => {
    // Get the ID of the user making the request
    const idUser = request.body.agentUserId;
    
    // Allow access to this function from any origin (CORS)
    response.set('Access-Control-Allow-Origin', '*');
    
    // Log information to Firebase logs
    functions.logger.info(`Report state for user ${idUser}`);
    
    try {
        // Make a request to Home Graph to report the state and notifications of the user's devices
        const res = await homegraphClient.devices.reportStateAndNotification({
            requestBody: request.body
        });
        // Send the Home Graph response to the client that made the request
        response.json(res.data);
        functions.logger.log('Report state completed');
    } catch (err) {
    // If there is an error, log it and send an error response to the client
    functions.logger.error(err);
    response.status(500).send(`Error reporting state: ${err}`);
    }
    });

// Export the instance of Express so it can be used by Firebase
exports.app = functions.https.onRequest(app);