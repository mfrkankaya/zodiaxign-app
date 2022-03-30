import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const app = initializeApp({
  apiKey: 'AIzaSyAgVmcFhv_IyEyUs8ENLMZFtw8MEaOcxZ4',
  authDomain: 'zodiaxign.firebaseapp.com',
  databaseURL:
    'https://zodiaxign-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'zodiaxign',
  storageBucket: 'zodiaxign.appspot.com',
  messagingSenderId: '1075063860603',
  appId: '1:1075063860603:web:c0d3efec6cd990b418e1de'
})

export const firestore = getFirestore(app)
