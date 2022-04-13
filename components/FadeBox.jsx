import React, { useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'
import { getStartValue, isDirectionVertical } from '../utils'

const FadeBox = ({
  children,
  duration = 400,
  delay = 0,
  direction = 'bottom'
}) => {
  const anim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      duration,
      delay,
      easing: Easing.circle,
      useNativeDriver: false
    }).start()
  }, [])

  const translationValue = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [getStartValue(direction), 0]
  })

  return (
    <Animated.View
      style={{
        opacity: anim,
        transform: [
          { translateX: isDirectionVertical(direction) ? 0 : translationValue },
          { translateY: !isDirectionVertical(direction) ? 0 : translationValue }
        ]
      }}
    >
      {children}
    </Animated.View>
  )
}

export default FadeBox
