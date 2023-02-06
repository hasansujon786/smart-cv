import React from 'react'
import { HStack, Center, Heading, IconButton, Box } from 'native-base'
import Icon from './Icon'
import { linearGradient } from '../constant/globalStyles'

const HEADER_HEIGHT = 80
const MARGIN_TOP = 20

const GradientHeader = (props) => {
  const { options, navigation, route, headerLeft: HeaderLeft } = props
  const showBack = navigation.canGoBack()
  const headerTintColor = options.headerTintColor || 'white'
  return (
    <Box bg='white' shadow={2} >
      <HStack bg={{ linearGradient }} >
        <Box style={{ height: HEADER_HEIGHT, ...options.headerStyle }} px={2} flex={1}>
          <HStack alignItems='center' flex={1} justifyContent='center' px={12} style={{ marginTop: MARGIN_TOP }}>
            <Center position='absolute' top={0} bottom={0} left={0}>
              <HStack justifyContent='flex-start'>
                {showBack && !HeaderLeft && (
                  <IconButton
                    colorScheme='light'
                    onPress={() => navigation.goBack()}
                    icon={<Icon color={headerTintColor} name='arrow-back-outline' size='sm' />}
                  />
                )}
                {HeaderLeft && <HeaderLeft headerTintColor={headerTintColor} {...props} />}
              </HStack>
            </Center>
            <Heading size='md' numberOfLines={1} color={headerTintColor}>{options.title || route.name}</Heading>
            {/* right side content */}
            {/* <Center position='absolute' top={0} bottom={0} right={0}></Center> */}
          </HStack>
        </Box>
      </HStack>
    </Box>
  )
}

export default GradientHeader
