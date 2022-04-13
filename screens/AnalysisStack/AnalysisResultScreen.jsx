import { useRoute } from '@react-navigation/native'
import React from 'react'
import { ScrollView } from 'react-native'

import AnalysisResult from '../../components/AnalysisResult'
import FullPageLoader from '../../components/FullPageLoader'
import useAnalysis from '../../hooks/useAnalysis'
import { replaceAnalysisFields } from '../../utils'

const AnalysisResultScreen = () => {
  const { params: user } = useRoute()
  const { loading, analysis } = useAnalysis()

  if (loading) return <FullPageLoader />
  return (
    <ScrollView style={{ flex: 1 }}>
      <AnalysisResult text={replaceAnalysisFields(analysis.text, user)} />
    </ScrollView>
  )
}

export default AnalysisResultScreen
