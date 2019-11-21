 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 
 var firebaseConfig = {
  apiKey: "AIzaSyCdry8NA3Cv39sX8kKbF0zcZMBsdR7RPrY",
  authDomain: "fast-tensor-697.firebaseapp.com",
  databaseURL: "https://fast-tensor-697.firebaseio.com",
  projectId: "fast-tensor-697",
  storageBucket: "fast-tensor-697.appspot.com",
  messagingSenderId: "300761388332",
  appId: "1:300761388332:web:37251d5dfbef099434c889"
};
  // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()