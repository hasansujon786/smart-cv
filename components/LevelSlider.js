import { Box, HStack, Slider, Text } from 'native-base'
import React from 'react'

const LevelSlider = ({ level }) => {
  return (
    <HStack justifyContent='space-between' marginTop={3}>
      <Text>Level {level.value}</Text>
      <Box flex={1} mx={4}>
        <Slider
          defaultValue={level.value}
          minValue={1}
          maxValue={5}
          accessibilityLabel='level slider'
          size='md'
          step={1}
          onChange={(v) => level.onChangeText(Math.floor(v))}
          // onChangeEnd={(v) =>  v && setOnChangeEndValue(Math.floor(v)) }
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </Box>
    </HStack>
  )
}

export default LevelSlider
