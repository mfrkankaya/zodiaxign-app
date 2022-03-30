import { useReducer, useEffect } from 'react'
import { getHoroscope } from '../firebase/collections/horoscopes'

const INITIAL_STATE = {
  data: {},
  loading: true,
  error: false
}

const FULFILLED = 'HOROSCOPE/FULFILLED'
const REJECTED = 'HOROSCOPE/REJECTED'

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === FULFILLED)
    return { ...state, loading: false, error: false, data: action.payload }

  if (action.type === REJECTED)
    return { ...state, loading: false, error: action.error, data: {} }

  return { ...state }
}

const useHoroscope = (slug) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  useEffect(() => {
    getHoroscope(slug)
      .then((data) => dispatch({ type: FULFILLED, payload: data }))
      .catch((error) => dispatch({ type: REJECTED, error }))
  }, [slug])

  return { ...state }
}

export default useHoroscope
