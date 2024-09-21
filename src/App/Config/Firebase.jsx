// import { getAuth } from "f/irebase/auth/cordova";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDkx9dPiUmtsuwbLW9tW17sBdm4yNWxQOM",
  authDomain: "mini-hackathon-62488.firebaseapp.com",
  projectId: "mini-hackathon-62488",
  storageBucket: "mini-hackathon-62488.appspot.com",
  messagingSenderId: "636306545498",
  appId: "1:636306545498:web:35986150f6ee96435db163"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
export {auth,database}