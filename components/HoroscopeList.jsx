import { View } from 'react-native'
import React from 'react'
import { HOROSCOPES } from '../constants'
import HoroscopeListItem from './HoroscopeListItem'

export default function HoroscopeList() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
        paddingVertical: 16
      }}
    >
      {HOROSCOPES.map((horoscope, index) => (
        <HoroscopeListItem key={horoscope.slug} {...horoscope} index={index} />
      ))}
    </View>
  )
}
