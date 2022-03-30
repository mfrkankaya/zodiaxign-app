import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { primary } from '../constants/colors'

function TabButton({ isActive, onPress, text }) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: isActive ? primary() : 'transparent'
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.text,
          color: isActive ? 'white' : primary(),
          fontFamily: 'sans-medium'
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default function HoroscopeTabs({ activeTab, setActiveTab }) {
  return (
    <View style={{ width: '100%', flexDirection: 'row' }}>
      <TabButton
        text="Günlük"
        isActive={activeTab === 'daily'}
        onPress={() => setActiveTab('daily')}
      />
      <TabButton
        text="Haftalık"
        isActive={activeTab === 'weekly'}
        onPress={() => setActiveTab('weekly')}
      />
      <TabButton
        text="Aylık"
        isActive={activeTab === 'monthly'}
        onPress={() => setActiveTab('monthly')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 999
  },
  text: {
    textAlign: 'center',
    fontSize: 18
  }
})
