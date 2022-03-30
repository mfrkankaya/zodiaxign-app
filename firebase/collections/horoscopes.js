import { doc, getDoc } from 'firebase/firestore'
import { firestore } from '..'

export const getHoroscope = (slug) => {
  return new Promise((resolve, reject) => {
    const docRef = doc(firestore, 'horoscopes', slug)
    getDoc(docRef)
      .then((docSnap) => resolve(docSnap.data()))
      .catch((error) => reject(error))
  })
}
