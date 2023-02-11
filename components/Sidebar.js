import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Box, HStack, Stack, Switch, Text, useColorMode, useColorModeValue } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Linking, Share, TouchableNativeFeedback } from 'react-native'
import Icon from '../components/Icon'
import AboutPopup from './AboutPopup'

import { PLAY_STORE_ALL_APPS, PLAY_STORE_APP_LINK, themeColors } from '../constant'

const Sidebar = (props) => {
  const [aboutModalVisible, setAboutModalVisible] = useState(false)
  const { drawerInactiveTintColor } = props
  const { toggleColorMode, colorMode } = useColorMode()
  const [isDarkMode, setIsDarkMode] = useState(colorMode == 'dark')
  const toggleDarkMode = () => {
    toggleColorMode()
    setIsDarkMode((v) => !v)
  }
  useEffect(() => setIsDarkMode(colorMode == 'dark'), [colorMode])

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message: `Create professional resume with Smart CV app for free. \n${PLAY_STORE_APP_LINK}`,
        url: PLAY_STORE_APP_LINK,
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Box bg='white' _dark={{ bg: themeColors.dark.bg }} flex={1}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          inactiveTintColor={drawerInactiveTintColor}
          icon={(props) => <Icon {...props} name='share-social-outline' size='md' />}
          label='Share the app'
          onPress={onShare}
        />
        <DrawerItem
          inactiveTintColor={drawerInactiveTintColor}
          icon={(props) => <Icon {...props} name='star-outline' size='md' />}
          label='Rate the app'
          onPress={() => Linking.openURL(PLAY_STORE_APP_LINK)}
        />
        <DrawerItem
          inactiveTintColor={drawerInactiveTintColor}
          icon={(props) => <Icon {...props} name='information-circle-outline' size='md' />}
          label='About'
          onPress={() => setAboutModalVisible(true)}
        />
        <DrawerItem
          inactiveTintColor={drawerInactiveTintColor}
          icon={(props) => <Icon {...props} name='apps-outline' size='md' />}
          label='More apps'
          onPress={() => Linking.openURL(PLAY_STORE_ALL_APPS)}
        />
      </DrawerContentScrollView>

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

      <AboutPopup isOpen={aboutModalVisible} onClose={() => setAboutModalVisible(false)} />
    </Box>
  )
}

export default Sidebar
