import { useState, useRef, useEffect } from 'react'
import { getAnalysis } from '../firebase/collections/analyzes'

const useAnalysis = () => {
  const [isTimeoutPassed, setIsTimeoutPassed] = useState(false)
  const [loading, setLoading] = useState(true)
  const [analysis, setAnalysis] = useState(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsTimeoutPassed(true)
    }, 3000)

    getAnalysis().then((data) => {
      setAnalysis(data)
      setLoading(false)
    })

    return () => clearTimeout(timeoutRef.current)
  }, [])

  return { loading: !isTimeoutPassed || loading, analysis }
}

export default useAnalysis
