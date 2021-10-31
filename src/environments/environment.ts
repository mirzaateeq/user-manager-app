// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: "AIzaSyA5DXW_lFtuIRVuZMjAa3x7agUIPnABoFU",
    authDomain: "user-manager-firebase.firebaseapp.com",
    projectId: "user-manager-firebase",
    storageBucket: "user-manager-firebase.appspot.com",
    messagingSenderId: "152328158077",
    appId: "1:152328158077:web:6436f984e3b406fdf12a14",
    databaseURL: '<your-database-URL>',
    measurementId: '<your-measurement-id>'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
