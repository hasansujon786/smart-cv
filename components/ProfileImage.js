import React from 'react'
import { Avatar } from 'tamagui'

const DEFAUT_USER_IMAGE = require('../assets/default-user.png')

const ProfileImage = ({ source: { uri }, size = '$7', ...props }) => {
  const source = uri ? { uri: uri } : DEFAUT_USER_IMAGE
  return (
    <Avatar circular size={size} {...props}>
      <Avatar.Image accessibilityLabel='Profile Image' source={source} />
      <Avatar.Fallback backgroundColor='$background' />
    </Avatar>
  )
}

export default ProfileImage
