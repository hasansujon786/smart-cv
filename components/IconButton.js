import React from 'react'
import { IconButton, useColorModeValue } from 'native-base'
import { themeColors } from '../constant/globalStyles'

const IconBtn = ({ size = 'md', variant = 'solid', colorScheme = 'dark', icon, ...props }) => {
  let bg = variant == 'solid' ? useColorModeValue(themeColors.light.iconBg, themeColors.dark.iconBg) : null
  return (
    <IconButton
      variant={variant}
      bg={bg}
      colorScheme={colorScheme}
      rounded='pill'
      size={size}
      icon={icon}
      {...props}
    />
  )
}

export default IconBtn
