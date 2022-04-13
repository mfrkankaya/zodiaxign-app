import { createContext, useContext, useEffect, useState } from 'react'
import {
  getPhotoposts,
  PHOTOPOSTS_PER_PAGE
} from '../firebase/collections/photoposts'

export const PhotopostsListContext = createContext({
  loading: true,
  photoposts: [],
  isLoadAvailable: true,
  loadPhotoposts: (start = new Date().getTime()) => {}
})

export const PhotopostsListProvider = ({ children, slug }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [isLoadAvailable, setIsLoadAvailable] = useState(true)

  const loadPhotoposts = (start = new Date().getTime()) => {
    setLoading(true)
    getPhotoposts(slug, start)
      .then((newData) => {
        setData((data) => [...data, ...newData])
        setIsLoadAvailable(newData.length === PHOTOPOSTS_PER_PAGE)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    if (slug) loadPhotoposts()
  }, [slug])

  return (
    <PhotopostsListContext.Provider
      value={{
        photoposts: data,
        loading,
        loadPhotoposts,
        isLoadAvailable
      }}
    >
      {children}
    </PhotopostsListContext.Provider>
  )
}

export const usePhotopostsList = () => useContext(PhotopostsListContext)
