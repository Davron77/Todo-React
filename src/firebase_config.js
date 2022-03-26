import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2tO9UWxP362qTaCAg-IWTKBGxMomFCc8",
  authDomain: "twitter-clone-693c9.firebaseapp.com",
  projectId: "twitter-clone-693c9",
  storageBucket: "twitter-clone-693c9.appspot.com",
  messagingSenderId: "549956646985",
  appId: "1:549956646985:web:d1e0471ca82e6eed0ba798",
  measurementId: "G-HZ9761XQX2",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
