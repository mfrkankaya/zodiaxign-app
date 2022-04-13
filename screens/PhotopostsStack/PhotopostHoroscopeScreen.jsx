import { useRoute } from '@react-navigation/native'
import React from 'react'
import PhotopostsList from '../../components/PhotopostsList'
import { PhotopostsListProvider } from '../../contexts'

const PhotopostHoroscopeScreen = () => {
  const { params } = useRoute()

  return (
    <PhotopostsListProvider slug={params.slug}>
      <PhotopostsList />
    </PhotopostsListProvider>
  )
}

export default PhotopostHoroscopeScreen
