import React from 'react'
import { Label, Slider, XStack } from 'tamagui'

const LevelSlider = ({ level, children, ...props }) => {
  const handleValueChange = (v) => level.onChangeText(Math.floor(v))

  return (
    <XStack ai='center' space='$4'>
      <Label>Level {level.value}</Label>
      <Slider
        theme='purple'
        defaultValue={[level?.value]}
        min={1}
        max={5}
        step={1}
        f={1}
        onValueChange={handleValueChange}
        {...props}
      >
        <Slider.Track>
          <Slider.TrackActive />
        </Slider.Track>
        <Slider.Thumb index={0} bg='$primary' borderRadius={20} />
      </Slider>
    </XStack>
  )
}

export default LevelSlider
