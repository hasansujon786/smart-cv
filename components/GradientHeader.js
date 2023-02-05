import { HStack, Text } from 'native-base'
import React from 'react'

const linearGradient = {
  colors: ['pink.500', 'violet.600'],
  start: [0, 0],
  end: [1, 0],
}

const GradientHeader = () => {
  return (
    <HStack bg={{ linearGradient }}>
      <Text>hello</Text>
    </HStack>
  )
}

export default GradientHeader
