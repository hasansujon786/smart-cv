import React, { useState } from 'react'
import { Modal, StyleSheet, TouchableHighlight, View } from 'react-native'
import { Heading, Text, XStack, YStack, useTheme } from 'tamagui'
import RadioWithLabel from './RadioWithLabel'
import { Button } from './atom'

const PRESS_HL = 'hsla(0, 0%, 0%, 0.08)'

const OptionsModal = ({
  label = 'Setting item',
  heading = 'Chose a options',
  options = [],
  value = '',
  onValueChange,
}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const openModal = () => setModalVisible(true)
  const closeModal = () => setModalVisible(false)

  const onRadioSelect = (value) => {
    closeModal()
    onValueChange(value)
  }

  const theme = useTheme()
  const layer1 = theme.layer1.val

  return (
    <View>
      <TouchableHighlight underlayColor={PRESS_HL} onPress={openModal}>
        <View style={[styles.button]}>
          <Text fontSize={16} color='$color'>
            {label}
          </Text>
          <Text fontSize={14} textTransform='capitalize' color='$muted1'>
            {value}
          </Text>
        </View>
      </TouchableHighlight>

      <Modal animationType='fade' transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.centeredView}>
          <YStack backgroundColor={layer1} style={styles.modalView}>
            <Heading mb='$3' size='$6' marginLeft='$3'>
              {heading}
            </Heading>

            {options.map((op) => (
              <RadioWithLabel
                key={op.value}
                value={op.value}
                label={op.name}
                currentValue={value}
                onValueChange={onRadioSelect}
              />
            ))}

            <XStack justifyContent='flex-end'>
              <Button ghoust onPress={closeModal}>
                Cancel
              </Button>
            </XStack>
          </YStack>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -100,
  },
  modalView: {
    margin: 20,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 12,
    elevation: 5,
  },
  button: {
    paddingVertical: 18,
    paddingHorizontal: 12,
  },
})

export default OptionsModal
