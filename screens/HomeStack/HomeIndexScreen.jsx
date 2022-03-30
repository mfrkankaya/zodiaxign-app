import { ScrollView } from 'react-native'
import React from 'react'
import HoroscopeList from '../../components/HoroscopeList'

export default function HomeIndexScreen() {
  return (
    <ScrollView>
      <HoroscopeList />
    </ScrollView>
  )
}
