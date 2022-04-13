import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeIndexScreen from '../screens/HomeStack/HomeIndexScreen'
import HoroscopeScreen from '../screens/HomeStack/HoroscopeScreen'
import { screenOptions } from './options'

const Stack = createNativeStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeIndexScreen}
        options={{ title: 'Burçlar' }}
      />
      <Stack.Screen
        name="HoroscopeScreen"
        component={HoroscopeScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  )
}
