import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PhotopostsIndexScreen from '../screens/PhotopostsStack/PhotopostsIndexScreen'

const Stack = createNativeStackNavigator()

export default function PhotopostsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PhotopostsScreen" component={PhotopostsIndexScreen} />
    </Stack.Navigator>
  )
}
