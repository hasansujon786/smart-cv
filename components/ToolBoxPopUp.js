import React from 'react'
import { Select, VStack, Text, CheckIcon, Modal, Box, Button, HStack } from 'native-base'
import { marginOptios, fontSizeOptions, heagingSizeOptions, nameSizeOptions } from '../constant/styles'
import { globalColors } from '../constant/globalStyles'

const getDefaultMargin = (defaultOptions) => {
  if (typeof defaultOptions?.margin == 'undefined') {
    return marginOptios
  }
  const updateMarginOptions = [...marginOptios]
  updateMarginOptions[0].value = defaultOptions?.margin
  return updateMarginOptions
}

const ToolBoxPopUp = ({ isOpen, onClose, onApply, defaultOptions }) => {
  const defaultMargins = getDefaultMargin(defaultOptions)
  let margin = React.useState(defaultMargins[0].value)
  let fontSize = React.useState(fontSizeOptions[0].value)
  let headingSize = React.useState(heagingSizeOptions[7].value)
  let nameSize = React.useState(nameSizeOptions[13].value)

  const applyConfigs = () => {
    onApply({
      margin: margin[0],
      fontSize: fontSize[0],
      nameSize: nameSize[0],
      headingSize: headingSize[0],
    })
  }
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={() => onClose(false)}>
        <Modal.Content>
          <Modal.CloseButton colorScheme='red' />
          <Modal.Header _text={{ color: globalColors.primary }}>Settings</Modal.Header>
          <Modal.Body>
            <VStack space={4}>
              <Option title='Font Size' state={fontSize} items={fontSizeOptions} placeholder='Choose Font Size' />
              <Option
                title='Heading Size'
                state={headingSize}
                items={heagingSizeOptions}
                placeholder='Choose Heading Size'
              />
              <Option title='Name Size' state={nameSize} items={nameSizeOptions} placeholder='Choose Name Size' />

              <Option title='Margin' state={margin} items={defaultMargins} placeholder='Choose Margin' />
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group mb={3} variant='secondary' space={1} justifyContent='center' flex={1}>
              <Button onPress={applyConfigs} _dark={{ bg: 'gray.600' }} width={160}>
                Apply
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  )
}

export default ToolBoxPopUp

const Option = ({ title, items, state, placeholder }) => {
  return (
    <HStack alignItems='center' justifyContent='space-between' space={6} flex={1}>
      <Text>{title}</Text>
      <Select
        minWidth={130}
        py={1}
        selectedValue={state[0]}
        accessibilityLabel={placeholder}
        placeholder={placeholder}
        _selectedItem={{
          bg: 'purple.500',
          _text: { color: 'white' },
          endIcon: <CheckIcon size='5' />,
        }}
        onValueChange={(itemValue) => state[1](itemValue)}
      >
        {items.map((item) => (
          <Select.Item mb={1} key={item.id} label={item.label} value={item.value} />
        ))}
      </Select>
    </HStack>
  )
}
