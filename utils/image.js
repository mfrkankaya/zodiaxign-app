import { Dimensions, Image } from 'react-native'

const { width: WINDOW_WIDTH } = Dimensions.get('window')
export const PHOTOPOST_WIDTH = WINDOW_WIDTH - 2 * 16 - 2 * 24

export const getBase64FromUrl = async (url) => {
  const data = await fetch(url)
  const blob = await data.blob()

  return new Promise((resolve) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(blob)
    reader.onloadend = () => {
      const base64data = reader.result
      resolve(base64data)
    }
  })
}

export const getImageSize = (uri) => {
  return new Promise((resolve) => {
    Image.getSize(uri, (width, height) => {
      resolve({
        width: PHOTOPOST_WIDTH,
        height: PHOTOPOST_WIDTH * (height / width)
      })
    })
  })
}
