import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD4EHS-llEqkdnV58u9ptfm57oqamxEYsA",
    authDomain: "firegram-c9c05.firebaseapp.com",
    projectId: "firegram-c9c05",
    storageBucket: "firegram-c9c05.appspot.com",
    messagingSenderId: "1027754921334",
    appId: "1:1027754921334:web:ec80105592e538e1ef3e57"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
const projStorage = firebase.storage();
const projFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projStorage, projFirestore,timestamp };