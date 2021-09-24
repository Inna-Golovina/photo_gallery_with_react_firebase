import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSNt3AUAtGKoiY6wWd6TrLBSFrDHzUGro",
  authDomain: "photo-e54ed.firebaseapp.com",
  projectId: "photo-e54ed",
  storageBucket: "photo-e54ed.appspot.com",
  messagingSenderId: "923639342760",
  appId: "1:923639342760:web:171fb26ed63f497cbe449d",
  measurementId: "G-01TY9E6XWF"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };