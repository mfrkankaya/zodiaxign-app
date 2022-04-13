import {
  collection,
  getDocs,
  query,
  orderBy,
  startAt,
  limit,
  where
} from 'firebase/firestore'
import { firestore } from '../'

const photopostsCollection = collection(firestore, 'photoposts')
export const PHOTOPOSTS_PER_PAGE = 10

export const getPhotoposts = async (slug, start = new Date().getTime()) => {
  if (!slug) return []

  const snaps = await getDocs(
    query(
      photopostsCollection,
      where('slug', '==', slug),
      orderBy('createdAt', 'desc'),
      startAt(start),
      limit(PHOTOPOSTS_PER_PAGE)
    )
  )

  return snaps.docs.map((doc) => ({ ...doc.data() }))
}
