import React, { useState } from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import { Text } from 'tamagui'
import RadioWithLabel from './RadioWithLabel'
import SimpleModal from './SimpleModal'
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

      <SimpleModal
        heading={heading}
        visible={modalVisible}
        onRequestClose={closeModal}
        actions={
          <Button ghoust onPress={closeModal}>
            Cancel
          </Button>
        }
      >
        {options.map((op) => (
          <RadioWithLabel
            key={op.value}
            value={op.value}
            label={op.name}
            currentValue={value}
            onValueChange={onRadioSelect}
          />
        ))}
      </SimpleModal>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    paddingHorizontal: 12,
  },
})

export default OptionsModal
