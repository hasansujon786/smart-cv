import React, { useContext } from 'react'
import { Linking } from 'react-native'
import { Text, XStack, YStack } from 'tamagui'
import { promptToViewDownloadedPdf } from '../composables'
import { PLAY_STORE_APP_LINK } from '../constant'
import { globalColors } from '../constant/globalStyles'
import { InterstitialAdContext } from '../services'
import SimpleModal from './SimpleModal'
import { PrimaryButton } from './atom'

const DownloadPopUp = ({ pdfUri, isOpen, onClose }) => {
  const interstitialAd = useContext(InterstitialAdContext)

  const viewDownloadPdf = () => {
    const adHasShowed = interstitialAd.showAdIfLoaded()
    if (adHasShowed) return
    promptToViewDownloadedPdf(pdfUri)
  }

  const openRateUs = () => {
    Linking.openURL(PLAY_STORE_APP_LINK)
  }

  return (
    <SimpleModal
      heading='Download Completed'
      visible={isOpen}
      onRequestClose={onClose}
      actions={
        <XStack justifyContent='flex-end' flex={1} gap='$2' m='$2' mt='$3'>
          <PrimaryButton onPress={viewDownloadPdf}>View Download</PrimaryButton>
          <PrimaryButton
            onPress={openRateUs}
            bg={globalColors.blue}
            pressStyle={{ backgroundColor: 'royalblue', elevationAndroid: 0 }}
          >
            Rate Us
          </PrimaryButton>
        </XStack>
      }
    >
      <YStack mx='$3' minHeight='$6'>
        <Text>Your Resume has been saved to your gallery.</Text>
      </YStack>
    </SimpleModal>
  )
}

export default DownloadPopUp
