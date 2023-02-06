import { Ionicons } from '@expo/vector-icons'
import { Icon } from 'native-base'
import React from 'react'

export default function ({ name = 'heart', color='muted.500', size = 'md', ...props }) {
  return <Icon color={color} size={size} {...props} as={<Ionicons name={name} {...props} />} />
}

