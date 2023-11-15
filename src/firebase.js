import firebase from './firebase';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDCDdwZSI2rI_2e6AVUtyhKbMPs8ACCAKs",
    authDomain: "clone2-88f19.firebaseapp.com",
    projectId: "clone2-88f19",
    storageBucket: "clone2-88f19.appspot.com",
    messagingSenderId: "142809725737",
    appId: "1:142809725737:web:9ccf03b3c1962181091538",
    measurementId: "G-P14V018XWF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };