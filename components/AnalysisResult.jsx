import { Text, View } from 'react-native'
import React from 'react'
import { paragraph } from '../styles'

const AnalysisResult = ({ text }) => {
  return (
    <View style={{ paddingTop: 16, paddingBottom: 64, paddingHorizontal: 16 }}>
      <Text style={paragraph}>{text}</Text>
    </View>
  )
}

export default AnalysisResult
