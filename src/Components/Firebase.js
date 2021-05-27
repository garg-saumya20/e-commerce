import firebase from "firebase";
const firebaseConfig = {};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.fireStore();
const auth = firebase.auth();
export { db, auth };
