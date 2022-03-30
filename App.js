import { StatusBar } from 'expo-status-bar'
import React, { Fragment } from 'react'
import Navigation from './navigation/Navigation'
import useCachedResources from './hooks/useCachedResources'

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
