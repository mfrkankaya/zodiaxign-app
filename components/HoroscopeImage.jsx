import { Image } from 'react-native'
import React from 'react'

const STYLE = { width: '70%', height: '70%' }

export default function HoroscopeImage({ slug, style = {} }) {
  if (slug === 'aquarius')
    return (
      <Image
        source={require('../assets/images/horoscopes/aquarius.png')}
        style={{ ...STYLE, ...style }}
      />
    )

  if (slug === 'aries')
    return (
      <Image
        source={require('../assets/images/horoscopes/aries.png')}
        style={{ ...STYLE, ...style }}
      />
    )

  if (slug === 'cancer')
    return (
      <Image
        source={require('../assets/images/horoscopes/cancer.png')}
        style={{ ...STYLE, ...style }}
      />
    )

  if (slug === 'capricorn')
    return (
      <Image
        source={require('../assets/images/horoscopes/capricorn.png')}
        style={{ ...STYLE, ...style }}
      />
    )

  if (slug === 'gemini')
    return (
      <Image
        source={require('../assets/images/horoscopes/gemini.png')}
        style={{ ...STYLE, ...style }}
      />
    )

  if (slug === 'leo')
    return (
      <Image
        source={require('../assets/images/horoscopes/leo.png')}
        style={{ ...STYLE, ...style }}
      />
    )

  if (slug === 'libra')
    return (
      <Image
        source={require('../assets/images/horoscopes/libra.png')}
        style={{ ...STYLE, ...style }}
      />
    )

  if (slug === 'pisces')
    return (
      <Image
        source={require('../assets/images/horoscopes/pisces.png')}
        style={{ ...STYLE, ...style }}
      />
    )

  if (slug === 'sagittarius')
    return (
      <Image
        source={require('../assets/images/horoscopes/sagittarius.png')}
        style={{ ...STYLE, ...style }}
      />
    )

  if (slug === 'scorpio')
    return (
      <Image
        source={require('../assets/images/horoscopes/scorpio.png')}
        style={{ ...STYLE, ...style }}
      />
    )

  if (slug === 'taurus')
    return (
      <Image
        source={require('../assets/images/horoscopes/taurus.png')}
        style={{ ...STYLE, ...style }}
      />
    )

  return (
    <Image
      source={require('../assets/images/horoscopes/virgo.png')}
      style={{ ...STYLE, ...style }}
    />
  )
}
