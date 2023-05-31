import React from 'react'
import { Circle, Heading, Label, Stack, XStack } from 'tamagui'
import { globalColors } from '../constant'

const RADIO_SIZE = 22
function RadioWithLabel({ size = '$4', label, onValueChange, value, currentValue }) {
  const handlePress = () => onValueChange(value)
  const isSelected = currentValue === value
  const color = isSelected ? globalColors.blue : globalColors.grya1

  return (
    <XStack onPress={handlePress} width='100%' alignItems='center' space='$4' px='$4' py='$2'>
      <Stack borderWidth={3} borderColor={color} w={RADIO_SIZE} h={RADIO_SIZE} p={3} borderRadius={RADIO_SIZE}>
        {isSelected && <Circle backgroundColor={color} w='100%' h='100%' />}
      </Stack>
      <Heading size={size}>{label}</Heading>
    </XStack>
  )
}

export default RadioWithLabel
