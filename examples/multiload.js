var googleapis = require('../lib/googleapis.js');

/**
 * Adds capability to load multiple client libraries at once into one
 * object.
 *
 * @param  array    library     Array of objects. Each object has an 'n' for name,
 *                              and 'v' for version. They correspond to the .load
 *                              parameters.
 * @param  function cb          The callback function to be fired as soon as all
 *                              parameters finished loading.
 * @return function cb          Calls the cb function at the end. Takes one parameter,
 *                              the client object that will have all the client
 *                              libraries as object members
 *
 */
var batchLoad = function(library, cb){
  if( cb == undefined) {
    console.log('no callback specified');
    return;
  }
  var semaphore = library.length,
      clientso = {}, // this is going to be populated with the client libraries
      i = semaphore-1,
      errors = []; // errors go here
  for(i; i >= 0; i-- ) {
    googleapis.load(library[i].n, library[i].v, function(err, client){
      semaphore--;
      if(err || client.apiMeta.error) {
        if(err){
          errors.push(err);
        } else if( client.apiMeta.error) {
          errors.push(client.apiMeta.error);
        }
      } else {
        clientso[library[semaphore].n] = client;
      }
      if(semaphore == 0 ) {
        clientso.errors = errors;
        cb(clientso);
      }
    }); // end of googleapis.load
  } // end of for loop
}; // end of batchload definition

/**
 * An example callback function. This is passed as the second
 * parameter to the batchLoad function, and will be called as
 * soon as everyone's finished loading with the assembled
 * clients object as the parameter.
 *
 * @param  object   clientso    This object holds every client library that was
 *                              requested.
 * @return any                  Do as you please with it.
 */
var callback = function( clientso ) {
  console.log( 'Callback called, and these are the clients:\n', clientso);
};

// Let's setup an example library
var library = [
  {
    n:'calendar',
    v:'v3'
  },
  {
    n:'drive',
    v:'v2'
  },
  {
    n:'oauth2',
    v:'v2'
  },
  { // This one will be populated into the clientso.errors member
    n:'four',
    v:'v2'
  }
];

/**
 * Fire away. Receive libraries as requested.
 */
batchLoad(library, callback);