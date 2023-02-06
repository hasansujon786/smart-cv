import React from 'react'
import { Modal, Button } from 'native-base'
import { globalColors, globalStyles } from '../constant/globalStyles'

const DownloadPopUp = ({ children, isOpen, onClose, onViewDownload, onRateUs, ...props }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...props}>
      <Modal.Content>
        <Modal.CloseButton colorScheme='red' />
        <Modal.Header _text={{ color: globalColors.primary }}>Download Completed</Modal.Header>
        <Modal.Body>Your Resume has been saved to you Gallery.</Modal.Body>
        <Modal.Footer>
          <Button.Group variant='solid' space={3} mb={3} mr={2} justifyContent='center'>
            <Button variant='primary' shadow='none' onPress={onViewDownload}>
              View Download
            </Button>
            <Button
              variant='solid'
              colorScheme='blue'
              onPress={onRateUs}
              rounded={globalStyles.borderRadius}
            >
              Rate Us
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

export default DownloadPopUp
