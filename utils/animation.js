const TRANSLATE_DISTANCE = 30

export const isDirectionVertical = (direction) => {
  return direction === 'up' || direction === 'bottom'
}

export const getStartValue = (direction) => {
  if (direction === 'up' || direction === 'left') return -TRANSLATE_DISTANCE
  return TRANSLATE_DISTANCE
}

export const randomDirection = () => {
  const random = Math.floor(Math.random() * 100)

  if (random < 75) return 'up'
  if (random < 50) return 'right'
  if (random < 25) return 'bottom'
  return 'left'
}
