import React from 'react'
import { Box, Stack, IconButton, HStack, Heading } from 'native-base'
import { globalStyles, globalColors, themeColors } from '../constant/globalStyles'
import Icon from './Icon'

const InputBoxWrapper = ({ children, title, id, index, setMainData }) => {
  return (
    <Box
      mx={2} mt={4} pb={8} overflow='hidden'
      shadow={globalStyles.shadow}
      rounded={globalStyles.borderRadius}
      _light={{ bg: themeColors.light.bg }}
      _dark={{ bg: themeColors.dark.bg }}
    >
      <HStack py={2} px={2} alignItems='center' justifyContent='space-between' bg={globalColors.primary} borderBottomWidth={1} borderColor='purple.600'>
        <Heading ml={1} color='white' size='md' fontWeight='normal' >{title} {index + 1}</Heading>
        <IconButton
          onPress={() => setMainData(prevArr => prevArr.filter(item => item.id != id))}
          size='md'
          colorScheme='red'
          icon={<Icon color='white' size={5} name='trash-outline' />}
        />
      </HStack>
      <Stack space={4} mx={4} mt={3}>
        {children}
      </Stack>
    </Box>
  )
}

export default InputBoxWrapper
