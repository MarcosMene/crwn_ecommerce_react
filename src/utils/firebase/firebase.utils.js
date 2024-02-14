import { initializeApp } from 'firebase/app'

//setup authentication
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC0JnxiX1uPAHlHSsyUtG3zW6XVgei1EfI',
  authDomain: 'store-cloth-db.firebaseapp.com',
  projectId: 'store-cloth-db',
  storageBucket: 'store-cloth-db.appspot.com',
  messagingSenderId: '807970042168',
  appId: '1:807970042168:web:32b19a4f5e6e2821d6d1cd',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

//user authentication
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  // console.log(userSnapshot)
  // console.log(userSnapshot.exists())

  //if user data doesnt exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch (error) {
      console.log('error crateing the user', error.message)
    }
  }

  //if user data exists
  return userDocRef
}
