import { View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import HoroscopeImage from '../../components/HoroscopeImage'
import { useRoute } from '@react-navigation/native'
import HoroscopeTabs from '../../components/HoroscopeTabs'
import { getHoroscope } from '../../firebase/collections/horoscopes'
import useHoroscope from '../../hooks/useHoroscope'
import HoroscopeContent from '../../components/HoroscopeContent'

export default function HoroscopeScreen() {
  const [activeTab, setActiveTab] = useState('daily')
  const {
    params: { slug }
  } = useRoute()
  const { loading, data } = useHoroscope(slug)

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ width: '100%', alignItems: 'center', marginVertical: 24 }}>
        <HoroscopeImage
          slug={slug}
          style={{ width: '80%', height: 200, resizeMode: 'contain' }}
        />
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        <HoroscopeTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </View>

      <View style={{ paddingHorizontal: 16, paddingVertical: 24 }}>
        <HoroscopeContent {...data} loading={loading} activeTab={activeTab} />
      </View>
    </ScrollView>
  )
}
