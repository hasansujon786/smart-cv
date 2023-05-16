import React from 'react'
import { Heading, Stack, XStack } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'

import { linearGradient } from '../constant/globalStyles'
import Icon from './Icon'
import { Center, GroustIconButton } from './atom'

const HEADER_HEIGHT = 80
const MARGIN_TOP = 20

// TODO: <11.02.23> add save button on header
const GradientHeader = (props) => {
  const { options, navigation, route, headerLeft: HeaderLeft } = props
  const showBack = navigation.canGoBack()
  const headerTintColor = options.headerTintColor || 'white'

  return (
    <Stack height={HEADER_HEIGHT} elevationAndroid={2} backgroundColor='white'>
      <LinearGradient {...linearGradient} height={HEADER_HEIGHT}>
        <XStack position='relative' mt={MARGIN_TOP} px='$2' flex={1} style={[options.headerStyle]}>
          <Center position='absolute' zIndex={-1} left={0} right={0} bottom={0} top={0}>
            <Heading size='$6' numberOfLines={1} color={headerTintColor}>
              {options.title || route.name}
            </Heading>
          </Center>

          <Center>
            {showBack && !HeaderLeft && (
              <HeaderBackBtn headerTintColor={headerTintColor} backAction={navigation.goBack} />
            )}
            {HeaderLeft && <HeaderLeft headerTintColor={headerTintColor} {...props} />}
          </Center>
        </XStack>
      </LinearGradient>
    </Stack>
  )
}

export default GradientHeader

export const HeaderBackBtn = ({ headerTintColor, backAction }) => {
  return <GroustIconButton onPress={backAction} icon={<Icon color={headerTintColor} name='arrow-back' size='md' />} />
}
