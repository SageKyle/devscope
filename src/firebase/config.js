import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBzbM0Px6yCsCmaTB-BUfTqdau2jaGWkXU',
  authDomain: 'devscope-synergy.firebaseapp.com',
  projectId: 'devscope-synergy',
  storageBucket: 'devscope-synergy.appspot.com',
  messagingSenderId: '552915933115',
  appId: '1:552915933115:web:f344ca3b73dcb8ca7b569e',
};

//   init app
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
