import { FlatList, View, Text } from 'react-native'
import React from 'react'
import { usePhotopostsList } from '../contexts'
import PhotopostListItem from './PhotopostListItem'
import { primary } from '../constants/colors'
import Loader from '../components/FullPageLoader'

const NoContent = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontFamily: 'sans-medium', color: primary(), fontSize: 24 }}>
      Üzgünüz...
    </Text>
    <Text
      style={{
        fontFamily: 'sans-regular',
        marginTop: 12,
        color: '#343434'
      }}
    >
      Bu burç için henüz fotoğraf bulunmuyor.
    </Text>
  </View>
)

const PhotopostsList = () => {
  const { photoposts, isLoadAvailable, loadPhotoposts, loading } =
    usePhotopostsList()

  const handleOnReachEnd = () => {
    isLoadAvailable &&
      loadPhotoposts(photoposts[photoposts.length - 1].createdAt - 1)
  }

  if (loading && !photoposts.length) return <Loader />
  if (!loading && !photoposts.length) return <NoContent />

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
