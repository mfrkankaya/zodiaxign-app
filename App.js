import { StatusBar } from 'expo-status-bar'
import React, { Fragment, useEffect } from 'react'
import Navigation from './navigation/Navigation'
import useCachedResources from './hooks/useCachedResources'
import { LogBox } from 'react-native'
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth'
import { auth } from './firebase'
import { addUser, getUser, updateUser } from './firebase/collections/users'
import { registerForPushNotificationsAsync } from './utils'

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

export default function App() {
  const isLoadingComplete = useCachedResources()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        signInAnonymously(auth)
        return
      }

      const fireUser = await getUser(user.uid)
      if (!fireUser) await addUser(user.uid)
      else if (!fireUser.expoPushToken) {
        const expoPushToken = await registerForPushNotificationsAsync()
        await updateUser(user.uid, { expoPushToken })
      }
    })
  }, [])

  if (!isLoadingComplete) return null

  return (
    <Fragment>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      <Navigation />
    </Fragment>
  )
}
