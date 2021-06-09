import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

    const firebaseConfig = {
        apiKey: "AIzaSyAiICsK-Adz-TWWwJ4x37ragG_B4MNqWCA",
        authDomain: "build-one-project.firebaseapp.com",
        projectId: "build-one-project",
        storageBucket: "build-one-project.appspot.com",
        messagingSenderId: "271718822256",
        appId: "1:271718822256:web:9c2f3072e7c92509a49fb5",
        measurementId: "G-BMWQ43MX6B"
      };


      firebase.initializeApp(firebaseConfig);






      
export const auth = firebase.auth();
export const firestore = firebase.firestore();