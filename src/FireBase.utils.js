import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB0PaTOBT7vGFVEMlvv-PP5sLPoECE8M30",
    authDomain: "todo-app-cafb7.firebaseapp.com",
    projectId: "todo-app-cafb7",
    storageBucket: "todo-app-cafb7.appspot.com",
    messagingSenderId: "330208622036",
    appId: "1:330208622036:web:e41c77ded73f0f6710d241",
    measurementId: "G-91YPRBMK0E"
  };

const firebaseApp  = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;