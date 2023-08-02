import React from 'react'
import { StyleSheet } from 'react-native'
import RnModal from 'react-native-modal'
import { Heading, XStack, YStack, useTheme } from 'tamagui'
import { globalColors } from '../constant'
import Icon from './Icon'
import { Button } from './atom'

const SimpleModal = ({ heading = '', children, visible = false, onRequestClose, actions }) => {
  const theme = useTheme()
  const layer1 = theme.layer1.val

  return (
    <RnModal
      useNativeDriver
      useNativeDriverForBackdrop
      backdropTransitionOutTiming={50}
      onBackButtonPress={onRequestClose}
      onBackdropPress={onRequestClose}
      isVisible={visible}
      animationIn='fadeInUp'
    >
      <YStack backgroundColor={layer1} style={styles.modalView}>
        <XStack justifyContent='space-between' alignItems='center' pl='$3'>
          <Heading color='$primary' fontWeight='700' size='$6'>
            {heading}
          </Heading>

          <Button
            size='$4'
            circular
            elevationAndroid={0}
            backgroundColor='transparent'
            pressStyle={{ backgroundColor: '$red5' }}
            icon={<Icon size='md' color={globalColors.grya1} name='close-outline' />}
            onPress={onRequestClose}
          />
        </XStack>

        {children}

        <XStack justifyContent='flex-end'>{actions}</XStack>
      </YStack>
    </RnModal>
  )
}

const styles = StyleSheet.create({
  modalView: {
    marginHorizontal: 4,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 12,
    elevation: 5,
  },
})

export default SimpleModal
