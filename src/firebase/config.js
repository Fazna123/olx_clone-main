import firebase from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCIR11njpQ_RX6IPtWfQpRFdjobC8Q0LQ8",
    authDomain: "olx-clone-3799d.firebaseapp.com",
    projectId: "olx-clone-3799d",
    storageBucket: "olx-clone-3799d.appspot.com",
    messagingSenderId: "94578768137",
    appId: "1:94578768137:web:36c6747d9c102a6dd7fbd8"
  };

// const app = initializeApp(firebaseConfig);

export default firebase.initializeApp(firebaseConfig)