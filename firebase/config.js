import firebase from "firebase";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyATgJ_2nURbtNLrqzFfxpT0hAUJ7LZbjK0",
    authDomain: "ubereatschallengeapp.firebaseapp.com",
    projectId: "ubereatschallengeapp",
    storageBucket: "ubereatschallengeapp.appspot.com",
    messagingSenderId: "925705132368",
    appId: "1:925705132368:web:fe8504f7cf8e79df70f455",
    measurementId: "G-00FNRRWSXH",
};

export const provider = new firebase.auth.GoogleAuthProvider();

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;