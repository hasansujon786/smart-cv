import { Ionicons } from '@expo/vector-icons'
import React from 'react'

const _sizes = {
  sm: 16,
  md: 24,
  lg: 28,
}

function Icon({ name = 'heart', color = '#A0A0A0', size = 'md', ...props }) {
  return <Ionicons color={'#A0A0A0'} name={name} size={_sizes[size]} {...props} />
}
export default Icon
