import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const PhotopostListItem = ({ url }) => {
  return (
    <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
      <Image
        source={{ uri: url }}
        style={{ width: '100%', height: 200 }}
        resizeMode="contain"
        resizeMethod="auto"
      />
    </View>
  )
}

export default PhotopostListItem

const styles = StyleSheet.create({})
