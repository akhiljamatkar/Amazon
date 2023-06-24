import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkUoAW9btNcqLAkumLhQ-s8ZiVw4rsaUQ",
  authDomain: "clone-b3549.firebaseapp.com",
  projectId: "clone-b3549",
  storageBucket: "clone-b3549.appspot.com",
  messagingSenderId: "350760929988",
  appId: "1:350760929988:web:9c8dae42c7bf26fa135791",
  measurementId: "G-EG0Q77HKC3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export {db,auth};