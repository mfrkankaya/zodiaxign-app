import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const TabbarIcon = ({ icon, text, color, size }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Ionicons name={icon} color={color} size={size} />
      <Text
        style={{
          fontFamily: 'sans-regular',
          color,
          fontSize: 12,
          lineHeight: 12,
          marginTop: 4
        }}
      >
        {text}
      </Text>
    </View>
  )
}

export default TabbarIcon
