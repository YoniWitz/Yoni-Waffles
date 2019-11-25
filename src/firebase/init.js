 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 
 var firebaseConfig = {
  apiKey: "AIzaSyBtCTuZH25isuRsMN0HxpBWErscsFfALao",
  authDomain: "yonis-waffles.firebaseapp.com",
  databaseURL: "https://yonis-waffles.firebaseio.com",
  projectId: "yonis-waffles",
  storageBucket: "yonis-waffles.appspot.com",
  messagingSenderId: "495772541801",
  appId: "1:495772541801:web:5653bc7e748da9995213f8"
};
  // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()