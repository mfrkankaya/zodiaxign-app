import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screenOptions } from './options'

import PhotopostsIndexScreen from '../screens/PhotopostsStack/PhotopostsIndexScreen'
import PhotopostHoroscopeScreen from '../screens/PhotopostsStack/PhotopostHoroscopeScreen'

const Stack = createNativeStackNavigator()

export default function PhotopostsStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="PhotopostsIndexScreen"
        component={PhotopostsIndexScreen}
        options={{ title: 'Fotopost' }}
      />
      <Stack.Screen
        name="HoroscopeScreen"
        component={PhotopostHoroscopeScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  )
}
