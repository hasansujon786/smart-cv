import React from 'react'
import { IconButton } from 'native-base'
import Icon from './Icon'

const HeaderBackBtn = ({ navigation, headerTintColor, backAction }) => {
  return (
    <IconButton
      onLongPress={() => navigation.goBack()}
      colorScheme='light'
      onPress={backAction}
      icon={<Icon color={headerTintColor} name='arrow-back' size={6} />}
    />
  )
}

export default HeaderBackBtn
