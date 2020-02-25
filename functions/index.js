const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


exports.pushConfig = functions.remoteConfig.onUpdate(versionMetadata => {
    // Create FCM payload to send data message to PUSH_RC topic.
    const payload = {
      topic: "PUSH_RC",
      data: {
        "CONFIG_STATE": "STALE"
      }
    };
    // Use the Admin SDK to send the ping via FCM.
    return admin.messaging().send(payload).then(resp => {
      console.log(resp);
      return null;
    });
  });
