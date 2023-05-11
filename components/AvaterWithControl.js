import React from 'react'
import { Circle, XStack, YStack } from 'tamagui'
import Icon from './Icon'
import ProfileImage from './ProfileImage'
import { Button } from './atom'

const IconBtn = ({ iconName }) => {
  return (
    <Circle bg='$layer1' p={3}>
      <Button circular icon={<Icon color='red' name={iconName} size='md' />} style={{}} />
    </Circle>
  )
}

const AvaterWithControl = ({ uri, onPick, onRemove }) => {
  return (
    <YStack position='relative'>
      <ProfileImage source={{ uri: uri }} size='$12' />
      <XStack justifyContent='space-between' position='absolute' bottom={0} left={-10} right={-10}>
        <IconBtn onPress={onRemove} iconName='trash-outline' />
        <IconBtn onPress={onPick} iconName='camera-outline' />
      </XStack>
    </YStack>
  )
}

export default AvaterWithControl
