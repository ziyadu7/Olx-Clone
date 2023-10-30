import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBf_udtNjNT6ZDO4q8l7Si5JED4Gbz9gYg",
    authDomain: "fir-2092e.firebaseapp.com",
    projectId: "fir-2092e",
    storageBucket: "fir-2092e.appspot.com",
    messagingSenderId: "761309781602",
    appId: "1:761309781602:web:547726b49c5305e51a3b3b",
    measurementId: "G-101XYR1H6E"
  };

export default firebase.initializeApp(firebaseConfig);