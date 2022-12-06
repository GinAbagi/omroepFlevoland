import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbWP_CYel4u2aBMUpQk144CeA6uDCGGnY",
  authDomain: "vervangingomroepflevo.firebaseapp.com",
  projectId: "vervangingomroepflevo",
  storageBucket: "vervangingomroepflevo.appspot.com",
  messagingSenderId: "855685091178",
  appId: "1:855685091178:web:013b5ee05dee5108cbdf13"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const db = firebaseApp.firestore();
db.settings({ timestampsInSnapshots: true })

export {timestamp};
export default db;