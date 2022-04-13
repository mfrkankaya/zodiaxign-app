import {
  query,
  orderBy,
  startAt,
  limit,
  getDocs,
  collection
} from 'firebase/firestore'
import { firestore } from '..'
import { random } from '../../utils'

const analyzesCollection = collection(firestore, 'analyzes')

export const getAnalysis = () => {
  return new Promise((resolve, reject) => {
    const fetchAnalysis = async () => {
      const snap = await getDocs(
        query(
          analyzesCollection,
          orderBy('random'),
          startAt(random()),
          limit(1)
        )
      )

      if (snap.docs.length) {
        resolve(snap.docs[0].data())
        return
      }

      setTimeout(fetchAnalysis, 50)
    }

    fetchAnalysis()
  })
}
