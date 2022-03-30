import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AnalysisIndexScreen from '../screens/AnalysisStack/AnalysisIndexScreen'

const Stack = createNativeStackNavigator()

export default function AnalysisStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AnalysisScreen" component={AnalysisIndexScreen} />
    </Stack.Navigator>
  )
}
