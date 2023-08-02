import { Button, Modal } from 'native-base'
import React, { useContext } from 'react'
import { Linking } from 'react-native'
import { promptToViewDownloadedPdf } from '../composables'
import { PLAY_STORE_APP_LINK } from '../constant'
import { globalColors, globalStyles } from '../constant/globalStyles'
import { InterstitialAdContext } from '../services'

const DownloadPopUp = ({ onDownloadCompleted, children, pdfUri, isOpen, onClose, ...props }) => {
  const interstitialAd = useContext(InterstitialAdContext)

  const onViewDownload = () => {
    const adHasShowed = interstitialAd.showAdIfLoaded()
    if (adHasShowed) return
    promptToViewDownloadedPdf(pdfUri)
  }

  const openRateUs = () => {
    onClose()
    Linking.openURL(PLAY_STORE_APP_LINK)
  }

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
            <Button variant='solid' colorScheme='blue' onPress={openRateUs} rounded={globalStyles.borderRadius}>
              Rate Us
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

export default DownloadPopUp
