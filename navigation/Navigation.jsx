import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './HomeStack'
import AnalysisStack from './AnalysisStack'
import PhotopostsStack from './PhotopostsStack'

const Tabs = createBottomTabNavigator()

const Navigation = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: '#fff' }
      }}
    >
      <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="HomeStack" component={HomeStack} />
        <Tabs.Screen name="AnalysisStack" component={AnalysisStack} />
        <Tabs.Screen name="PhotopostsStack" component={PhotopostsStack} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
