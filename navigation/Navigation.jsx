import React from 'react'
import { View } from 'react-native'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeStack from './HomeStack'
import AnalysisStack from './AnalysisStack'
import PhotopostsStack from './PhotopostsStack'
import { primary } from '../constants/colors'
import TabbarIcon from '../components/TabbarIcon'

const Tabs = createBottomTabNavigator()

const Navigation = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: '#fff' }
      }}
    >
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: primary(),
          tabBarInactiveTintColor: primary(10),
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'home'
            let text = 'Burçlar'

            if (route.name === 'HomeStack') {
              iconName = 'home'
              text = 'Burçlar'
            } else if (route.name === 'AnalysisStack') {
              iconName = 'star'
              text = 'Doğum Analizi'
            } else {
              iconName = 'image'
              text = 'Fotopost'
            }

            if (!focused) iconName = `${iconName}-outline`

            return (
              <TabbarIcon
                icon={iconName}
                color={color}
                size={size}
                text={text}
              />
            )
          }
        })}
      >
        <Tabs.Screen name="HomeStack" component={HomeStack} />
        <Tabs.Screen name="AnalysisStack" component={AnalysisStack} />
        {/* <Tabs.Screen name="PhotopostsStack" component={PhotopostsStack} /> */}
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
