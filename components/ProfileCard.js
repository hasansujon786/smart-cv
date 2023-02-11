import React from 'react'
import { Box, Heading, Center, Button, HStack, Text, Stack, IconButton, Menu } from 'native-base'
import Icon from './Icon'
import ProfileImage from './ProfileImage'
import { globalStyles, themeColors } from '../constant/globalStyles'

const ProfileCard = ({ index, profile, deleteById, onView, onEdit, onDemoView, ...props }) => {
  return (
    <Box
      shadow={globalStyles.shadow}
      pb={3}
      mx={3}
      pt={1}
      rounded={globalStyles.borderRadius}
      _light={{ bg: themeColors.light.bg }}
      _dark={{ bg: themeColors.dark.bg }}
      {...props}
    >
      <HStack justifyContent='space-between'>
        <Center ml={2} mt={1} rounded='full' width={9} height={9} bg='gray.100' _dark={{ bg: themeColors.dark.bgDark }}>
          <Text fontSize='xs' fontWeight='bold' color='gray.400'>
            {index + 1}
          </Text>
        </Center>
        <Box mr={2} mt={1}>
          <Menu
            placement='left'
            trigger={(triggerProps) => (
              <IconButton
                size='sm'
                colorScheme='light'
                {...triggerProps}
                icon={<Icon size='md' color='gray.400' name='ellipsis-vertical-outline' />}
              />
            )}
          >
            <Menu.Item onPress={() => deleteById(profile.id)}>Delete</Menu.Item>
          </Menu>
        </Box>
      </HStack>

      <Stack pb={4} alignItems='center'>
        <ProfileImage source={{ uri: profile?.personalDetails?.profileImage }} size='lg' />
        <Heading size='xs' mt={5}>
          {profile?.personalDetails?.name}
        </Heading>
        <Heading size='xs' fontWeight='normal'>
          {profile?.personalDetails?.email}
        </Heading>
      </Stack>

      <Button.Group px={4} colorScheme='purple'>
        <Button
          onPress={onEdit}
          variant='secondary'
          flex={1}
          startIcon={<Icon size='sm' color='deep-purple' name='create-outline' />}
        >
          Edit
        </Button>
        <Button
          onPress={onView}
          variant='secondary'
          flex={1}
          startIcon={<Icon size='sm' color='deep-purple' name='eye-outline' />}
        >
          View CV
        </Button>
      </Button.Group>
    </Box>
  )
}

export default ProfileCard
