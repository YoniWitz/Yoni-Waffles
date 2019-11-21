 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBzf_6DcbS-vUf71r1elrVFf2ob5hjOUdg",
    authDomain: "yoni-waffles.firebaseapp.com",
    databaseURL: "https://yoni-waffles.firebaseio.com",
    projectId: "yoni-waffles",
    storageBucket: "yoni-waffles.appspot.com",
    messagingSenderId: "177086055955",
    appId: "1:177086055955:web:e8a3a784ec9f2832c4a1e6",
    measurementId: "G-XRN7SVMFB7"
  };
  // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);
 firebaseApp.firestore().settings({timestampsInSnapshots: true})
  firebase.analytics();

  export default firebaseApp.firestore()