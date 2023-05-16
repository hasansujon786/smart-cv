import React from 'react'
import { Modal, Text, Button } from 'native-base'
import { globalColors, APP_VERSION_NAME } from '../constant'

const AboutPopup = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content>
        <Modal.Header _text={{ color: globalColors.primary }}>Smart CV</Modal.Header>
        <Text>&copy; Think nXt Media 2021</Text>
        <Text mt={3}>
          Version: {APP_VERSION_NAME}
          {__DEV__ && ' Preview'}
        </Text>
        <Modal.Footer>
          <Button.Group space={3} mb={3} mr={2} justifyContent='center'>
            <Button variant='ghost' colorScheme='blueGray' rounded={15} onPress={onClose}>
              Close
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

export default AboutPopup
