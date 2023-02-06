import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Box, Heading, HStack } from 'native-base';
import Icon from './Icon'
import { globalColors, globalStyles, themeColors } from '../constant/globalStyles';

const SectionItem = ({ onSelect, text, icon }) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <Box
        px={4} py={5}
        rounded={globalStyles.borderRadius}
        _light={{ bg: themeColors.light.bg }}
        _dark={{ bg: themeColors.dark.bg }}
      >
        <HStack alignItems='center' justifyContent='space-between'>
          <Icon color={globalColors.primary} size='sm' name={icon} />
          <Heading ml={3} fontWeight='normal' size='sm'>{text}</Heading>
          <Box flex={1} />
          <Icon color='gray.200' size='sm' name='chevron-forward' _dark={{ color: 'gray.500' }} />
        </HStack>
      </Box>
    </TouchableOpacity>
  )
}

export default SectionItem
