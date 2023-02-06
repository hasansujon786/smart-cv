import React from 'react'
import { Box, IconButton } from 'native-base'
import ProfileImage from './ProfileImage'
import Icon from './Icon'

const IconB = (props) => {
  return (
    <IconButton
      variant='solid'
      borderWidth={2}
      borderColor='white'
      colorScheme='dark'
      _pressed={{ backgroundColor: 'gray.400' }}
      _dark={{ borderColor: 'gray.700' }}
      bg='gray.200'
      position='absolute'
      size='md'
      {...props}
    />
  )
}

const AvaterWithControl = ({ uri, onPick, onRemove }) => {
  return (
    <Box>
      <ProfileImage
        source={{ uri: uri }}
        width={150}
        height={150}
        borderWidth={2}
        borderColor='gray.200'
        _dark={{ borderColor: 'gray.500' }}
      />
      <IconB
        bottom={0}
        left={0}
        onPress={onRemove}
        icon={<Icon color='gray.500' name='trash-outline' size='sm' />}
      />
      <IconB
        bottom={0}
        right={0}
        onPress={onPick}
        icon={<Icon color='gray.500' name='camera-outline' size='sm' />}
      />
    </Box>
  )
}

export default AvaterWithControl
