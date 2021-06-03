import firebase from "firebase/app";
// Required for side-effects
import "firebase/firestore";
import {
  firestore_apiKey,
  firestore_authDomain,
  firestore_projectId,
  firestore_storageBucket,
  firestore_messagingSenderId,
  firestore_appId,
  firestore_measurementId,
} from "./variables.js";

firebase.initializeApp({
  apiKey: firestore_apiKey,
  authDomain: firestore_authDomain,
  projectId: firestore_projectId,
  storageBucket: firestore_storageBucket,
  messagingSenderId: firestore_messagingSenderId,
  appId: firestore_appId,
  measurementId: firestore_measurementId,
});

export const db = firebase.firestore();
