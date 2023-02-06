import React from 'react'
import { Box, Heading, Center, Spinner, HStack } from 'native-base'
import { globalColors } from '../constant/globalStyles'

const TemplateLoader = ({ height = '100%', width = '100%', ...props }) => {
  return (
    <Box position='absolute' top={0} bottom={0} left={0} right={0} flex={1} alignItems='center' {...props}>
      <Box width={width} height={height} bg='white'>
        <Center flex={1}>
          <HStack space={2} alignItems="center">
            <Spinner color={globalColors.primary} accessibilityLabel='Loading CV' />
            <Heading color={globalColors.primary} fontSize='md'>Loading</Heading>
          </HStack>
        </Center>
      </Box>
    </Box>
  )
}

export default TemplateLoader

