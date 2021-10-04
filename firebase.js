import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB0vfM8B9qcfZNIj1AG2Jw8W3t0T9m3yiI",
    authDomain: "react-native-netflix-clone.firebaseapp.com",
    projectId: "react-native-netflix-clone",
    storageBucket: "react-native-netflix-clone.appspot.com",
    messagingSenderId: "894195129956",
    appId: "1:894195129956:web:1ef98bc57f0c43be980971"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;