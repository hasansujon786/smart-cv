import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Alert, Linking, Share } from 'react-native'
import { YStack } from 'tamagui'

import Icon from '../components/Icon'
import { APP_NAME, APP_VERSION_NAME, PLAY_STORE_ALL_APPS, PLAY_STORE_APP_LINK } from '../constant'

const Sidebar = (props) => {
  const { drawerInactiveTintColor } = props

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
  const onRateApp = () => Linking.openURL(PLAY_STORE_APP_LINK)
  const onOpenMoreApps = () => Linking.openURL(PLAY_STORE_ALL_APPS)

  const showAboutPopup = () =>
    Alert.alert(APP_NAME, `Think nXt Media 2023 \nVersion: ${APP_VERSION_NAME}`, [
      {
        text: 'Close',
        style: 'cancel',
      },
    ])

  return (
    <YStack bg='$layer1' flex={1}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

        {/* Custom list */}
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
          onPress={onRateApp}
        />
        <DrawerItem
          inactiveTintColor={drawerInactiveTintColor}
          icon={(props) => <Icon {...props} name='information-circle-outline' size='md' />}
          label='About'
          onPress={showAboutPopup}
        />
        <DrawerItem
          inactiveTintColor={drawerInactiveTintColor}
          icon={(props) => <Icon {...props} name='apps-outline' size='md' />}
          label='More apps'
          onPress={onOpenMoreApps}
        />
      </DrawerContentScrollView>
    </YStack>
  )
}

export default Sidebar
