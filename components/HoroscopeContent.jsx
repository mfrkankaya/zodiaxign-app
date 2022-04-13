import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import { primary } from '../constants/colors'
import { paragraph } from '../styles'

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
      <Text style={paragraph}>{content[activeTab]}</Text>
    </View>
  )
}

export default HoroscopeContent
