import { HStack, Stack, Switch, Text, useColorMode, useColorModeValue } from 'native-base'
import React, { useState } from 'react'
import { TouchableNativeFeedback } from 'react-native'
import Icon from '../components/Icon'

function ThemeModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode()
  const [isDarkMode, setIsDarkMode] = useState(colorMode == 'dark')
  const toggleDarkMode = () => {
    toggleColorMode()
    setIsDarkMode((v) => !v)
  }

  useEffect(() => setIsDarkMode(colorMode == 'dark'), [colorMode])

  return (
    <Stack borderTopWidth={1} borderColor='gray.100' _dark={{ borderColor: 'gray.700' }}>
      <HStack pr={2}>
        <TouchableNativeFeedback onPress={toggleDarkMode}>
          <HStack space={6} flex={1} alignItems='center' pl={5} py={4} roundedRight='md'>
            <Icon name={useColorModeValue('moon-outline', 'moon')} size='md' color={drawerInactiveTintColor} />
            <Text fontSize='sm' color={drawerInactiveTintColor}>
              Dark Mode
            </Text>
          </HStack>
        </TouchableNativeFeedback>

        <Switch size='md' onToggle={toggleDarkMode} isChecked={isDarkMode} colorScheme='purple' />
      </HStack>
    </Stack>
  )
}

export default ThemeModeSwitch
