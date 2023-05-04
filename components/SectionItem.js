import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Paragraph, XStack } from 'tamagui'
import { globalColors, globalStyles } from '../constant/globalStyles'
import Icon from './Icon'

const SectionItem = ({ onSelect, text, icon }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={{ marginTop: 12 }}>
      <XStack
        alignItems='center'
        borderRadius={globalStyles.borderRadius}
        bc='$layer1'
        style={{ paddingHorizontal: 16, paddingVertical: 20 }}
      >
        <Icon color={globalColors.primary} size='md' name={icon} />
        <Paragraph pl='$3' mr='auto'>
          {text}
        </Paragraph>
        <Icon size='sm' name='chevron-forward' />
      </XStack>
    </TouchableOpacity>
  )
}

export default SectionItem
