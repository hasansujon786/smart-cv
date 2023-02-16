import React, { useState } from 'react'
import { Center, Modal, Button } from 'native-base'
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker'
import { globalColors } from '../constant/globalStyles'

const PickerPopUp = ({ children, isOpen, onApply, onClose, ...props }) => {
  const [color, setColor] = useState('#ff0000')
  return (
    <Modal isOpen={isOpen} onClose={() => onClose(false)} {...props}>
      <Modal.Content>
        <Modal.CloseButton colorScheme='red' />
        <Modal.Header _text={{ color: globalColors.primary }}>Pick Theme Color</Modal.Header>
        <Modal.Body>
          <Center flex={1}>
            <TriangleColorPicker
              defaultColor='#ff0000'
              onColorChange={(cv) => setColor(cv)}
              // hideSliders={true}
              // hideControls={true}
              onColorSelected={(cv) => setColor(cv)}
              style={{ width: 300, height: 300 }}
            />
          </Center>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group mb={3} variant='secondary' space={1} justifyContent='center' flex={1}>
            <Button onPress={() => onApply(fromHsv(color))} _dark={{ bg: 'gray.600' }} width={160}>
              Apply
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

export default PickerPopUp
