import { StatusBar } from 'expo-status-bar'
import React, { Fragment } from 'react'
import Navigation from './navigation/Navigation'
import useCachedResources from './hooks/useCachedResources'
import { LogBox } from 'react-native'

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

export default function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) return null

  return (
    <Fragment>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      <Navigation />
    </Fragment>
  )
}
