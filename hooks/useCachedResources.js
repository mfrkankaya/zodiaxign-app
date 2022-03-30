import { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()
        await Font.loadAsync({
          ...Ionicons.font,
          'sans-regular': require('../assets/fonts/sans-regular.ttf'),
          'sans-medium': require('../assets/fonts/sans-medium.ttf'),
          'sans-bold': require('../assets/fonts/sans-bold.ttf')
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
