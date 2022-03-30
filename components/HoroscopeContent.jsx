import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import { primary } from '../constants/colors'

const HoroscopeContent = ({ daily, weekly, monthly, activeTab, loading }) => {
  if (loading)
    return (
      <View
        style={{
          flex: 1,
          marginTop: 48,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ActivityIndicator size="large" color={primary()} />
      </View>
    )

  const content = { daily, weekly, monthly }

  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 24,
          fontFamily: 'sans-regular',
          color: '#363436'
        }}
      >
        {content[activeTab]}
      </Text>
    </View>
  )
}

export default HoroscopeContent
