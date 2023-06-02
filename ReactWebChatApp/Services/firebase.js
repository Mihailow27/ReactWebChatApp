import React from 'react';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAL4k-swvfCBies_ZzzmPu6W4KFmgKR7WA",
    authDomain: "webapp-6c182.firebaseapp.com",
    databaseURL: "https://webapp-6c182.firebaseio.com",
    projectId: "webapp-6c182",
    storageBucket: "webapp-6c182.appspot.com",
    messagingSenderId: "564552601807",
    appId: "1:564552601807:web:f8403d6cb1c89ba35727ba"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;


