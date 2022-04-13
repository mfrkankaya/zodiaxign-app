import { ScrollView } from 'react-native'
import React from 'react'
import AnalysisForm from '../../components/AnalysisForm'

export default function AnalysisIndexScreen() {
  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
      <AnalysisForm />
    </ScrollView>
  )
}
