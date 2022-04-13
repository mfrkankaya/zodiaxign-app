import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { primary } from '../constants/colors'

const FullPageLoader = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color={primary()} />
    </View>
  )
}

export default FullPageLoader
