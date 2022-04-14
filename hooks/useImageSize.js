import { useState, useEffect } from 'react'
import { getImageSize, PHOTOPOST_WIDTH } from '../utils'

export default function useImageSize(uri) {
  const [size, setSize] = useState({
    width: PHOTOPOST_WIDTH,
    height: PHOTOPOST_WIDTH
  })

  useEffect(() => {
    getImageSize(uri).then(setSize)
  }, [uri])

  return size
}
