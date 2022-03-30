import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { primary } from '../constants/colors'
import HoroscopeImage from './HoroscopeImage'

const WIDTH = Dimensions.get('window').width
const ITEM_SIZE = (WIDTH - 48) / 2

export default function HoroscopeListItem({ name, slug }) {
  const { navigate } = useNavigation()
  return (
    <TouchableOpacity
      style={{
        width: ITEM_SIZE,
        height: ITEM_SIZE,
        backgroundColor: '#F4EEFF',
        marginBottom: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e4d5ff'
      }}
      onPress={() => navigate('HoroscopeScreen', { name, slug })}
    >
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <HoroscopeImage slug={slug} />

        <Text
          style={{
            color: primary(),
            fontSize: 20,
            marginTop: 8,
            fontFamily: 'sans-medium'
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
