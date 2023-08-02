import React, { useRef } from 'react'
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker'
import { YStack } from 'tamagui'
import SimpleModal from './SimpleModal'
import { Button, Center } from './atom'

const ColorPickerPopUp = ({ children, isOpen, onApply, onClose, ...props }) => {
  const color = useRef('#ff0000')
  const setColor = (c) => (color.current = c)

  const handleApply = () => onApply(fromHsv(color.current))

  return (
    <SimpleModal
      heading='Pick Theme Color'
      visible={isOpen}
      onRequestClose={onClose}
      actions={
        <Center flex={1} mt='$3' mb='$2'>
          <Button width='100%' maxWidth={160} onPress={handleApply}>
            Apply
          </Button>
        </Center>
      }
    >
      <YStack>
        <TriangleColorPicker
          defaultColor={color.current}
          onColorChange={setColor}
          // hideSliders={true}
          // hideControls={true}
          onColorSelected={setColor}
          style={{ width: 300, height: 300 }}
        />
      </YStack>
    </SimpleModal>
  )
}

export default ColorPickerPopUp
