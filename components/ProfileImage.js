import React from 'react'
import { Avatar } from 'native-base'

const DEFAUT_USER_IMAGE = require('../assets/default-user.png')

const ProfileImage = ({ source: { uri }, ...props }) => {
  const source = uri ? { uri: uri } : DEFAUT_USER_IMAGE
  return <Avatar source={source} {...props} />
}

export default ProfileImage
