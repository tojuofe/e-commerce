import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDz-x-YR6H5nsv-gi7P6HrOlEXYiAm66uM',
  authDomain: 'my-project-1531915599157.firebaseapp.com',
  databaseURL: 'https://my-project-1531915599157.firebaseio.com',
  projectId: 'my-project-1531915599157',
  storageBucket: 'my-project-1531915599157.appspot.com',
  messagingSenderId: '386566091183',
  appId: '1:386566091183:web:5c2c5d176efd6daa527f5a',
  measurementId: 'G-VQQLMP1QR3',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('Error Creating User', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
