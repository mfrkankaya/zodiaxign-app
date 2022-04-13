import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AnalysisIndexScreen from '../screens/AnalysisStack/AnalysisIndexScreen'
import AnalysisResultScreen from '../screens/AnalysisStack/AnalysisResultScreen'
import { screenOptions } from './options'

const Stack = createNativeStackNavigator()

export default function AnalysisStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="AnalysisScreen"
        component={AnalysisIndexScreen}
        options={{ title: 'Doğum Analizi' }}
      />
      <Stack.Screen
        name="AnalysisResultScreen"
        component={AnalysisResultScreen}
        options={{ title: 'Analiz Sonucu' }}
      />
    </Stack.Navigator>
  )
}
