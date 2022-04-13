import { FlatList } from 'react-native'
import React from 'react'
import { usePhotopostsList } from '../contexts'
import PhotopostListItem from './PhotopostListItem'

const PhotopostsList = () => {
  const { photoposts, isLoadAvailable, loadPhotoposts } = usePhotopostsList()

  const handleOnReachEnd = () => {
    isLoadAvailable &&
      loadPhotoposts(photoposts[photoposts.length - 1].createdAt - 1)
  }

  return (
    <FlatList
      data={photoposts}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => <PhotopostListItem {...item} />}
      onEndReached={handleOnReachEnd}
      onEndReachedThreshold={1.5}
    />
  )
}

export default PhotopostsList
