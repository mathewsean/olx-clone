import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDF7_ffDFOhx5vQ2JZDYZ21vLeB1cYAQx8",
  authDomain: "olx-clone-c49e2.firebaseapp.com",
  projectId: "olx-clone-c49e2",
  storageBucket: "olx-clone-c49e2.appspot.com",
  messagingSenderId: "499951413791",
  appId: "1:499951413791:web:b5b1498b9402c169c5032a",
  measurementId: "G-TW6TJL8VSJ"
};

export default firebase.initializeApp(firebaseConfig)