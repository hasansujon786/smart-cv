import React, { useState } from 'react'
import { TouchableNativeFeedback } from 'react-native'
import { Radio, Modal, Text, Stack } from 'native-base'

const SettingRadioOptions = ({ title, description, options, defaultOption, onOptionSelect }) => {
  const [isRadioPopupOpen, setIsRadioPopupOpen] = useState(false)

  return (
    <TouchableNativeFeedback onPress={() => setIsRadioPopupOpen(true)}>
      <Stack px={4} py={3}>
        <Text>{title}</Text>
        <Text fonSize='sm' color='muted.400' textTransform='capitalize'>
          {description}
        </Text>

        <Modal isOpen={isRadioPopupOpen} onClose={() => setIsRadioPopupOpen(false)}>
          <Modal.Content px={0}>
            <Modal.CloseButton colorScheme='blue' />
            <Modal.Header px={6} _text={{ color: 'purple.500' }}>
              {title}
            </Modal.Header>
            <Modal.Body px={6} pb={6}>
              <Radio.Group
                name={title}
                accessibilityLabel={title}
                defaultValue={defaultOption}
                onChange={(nextValue) => {
                  onOptionSelect(nextValue)
                  setIsRadioPopupOpen(false)
                }}
              >
                {options.map((option) => (
                  <Radio
                    width='100%'
                    colorScheme='purple'
                    key={option}
                    value={option}
                    style={{ paddingVertical: 5 }}
                    display='flex'
                    _text={{ textTransform: 'capitalize' }}
                  >
                    {option}
                  </Radio>
                ))}
              </Radio.Group>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </Stack>
    </TouchableNativeFeedback>
  )
}

export default SettingRadioOptions
