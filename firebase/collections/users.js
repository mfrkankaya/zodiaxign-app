import { getDoc, setDoc, updateDoc, doc } from 'firebase/firestore'
import { firestore } from '../'

export const getUser = async (userId) => {
  const docSnap = await getDoc(doc(firestore, 'users', userId))
  if (docSnap.exists) return docSnap.data()
  return false
}

export const addUser = async (userId) => {
  await setDoc(doc(firestore, 'users', userId), { id: userId })
}

export const updateUser = async (userId, data = {}) => {
  await updateDoc(doc(firestore, 'users', userId), data)
}
