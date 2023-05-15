import React from 'react'
import { Button, XStack, YStack } from 'tamagui'
import Icon from './Icon'
import ProfileImage from './ProfileImage'

const IconButton = ({ onPress, iconName }) => {
  return <Button size='$5' pressTheme onPress={onPress} circular icon={<Icon name={iconName} size='md' />} />
}

const AvaterWithControl = ({ uri, onPick, onRemove }) => {
  return (
    <YStack position='relative' borderColor='$background' borderWidth={4} borderRadius={100}>
      <ProfileImage source={{ uri: uri }} size='$12' />
      <XStack justifyContent='space-between' position='absolute' bottom={-10} left={-10} right={-10}>
        <IconButton onPress={onRemove} iconName='trash-outline' />
        <IconButton onPress={onPick} iconName='camera-outline' />
      </XStack>
    </YStack>
  )
}

export default AvaterWithControl
