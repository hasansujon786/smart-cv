import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Circle, Heading, Text, XStack, YStack } from 'tamagui'
import { globalColors, globalStyles } from '../constant/globalStyles'
import Icon from './Icon'
import ProfileImage from './ProfileImage'
import { Button } from './atom'

const ProfileCard = ({ index, profile, onDelete }) => {
  const navigation = useNavigation()

  const handleOnView = () => navigation.navigate('SelectTemplate', { profile })
  const handleOnEdit = () => navigation.navigate('CreateProfile', { profileId: profile.id, title: 'Update Profile' })
  const deleteProfile = () => onDelete(profile.id)

  return (
    <YStack
      mt='$3'
      mx='$3'
      pb='$3'
      pt='$1'
      bc='$layer1'
      borderRadius={globalStyles.borderRadius}
      style={{ elevation: 1 }}
      alignItems='center'
    >
      <XStack pt='$1.5' px='$2' justifyContent='space-between' width='100%'>
        <Circle size='$3' backgroundColor='$background'>
          <Text color='$muted1' fontWeight='bold'>
            {index + 1}
          </Text>
        </Circle>

        <Button
          size='$4'
          circular
          elevationAndroid={0}
          backgroundColor='transparent'
          pressStyle={{ backgroundColor: '$red5' }}
          icon={<Icon size='md' color={globalColors.grya1} name='close-outline' />}
          onPress={deleteProfile}
        />
      </XStack>

      <ProfileImage source={{ uri: profile?.personalDetails?.profileImage }} />
      <Heading size='xs' mt='$3' fontWeight='bold'>
        {profile?.personalDetails?.name}
      </Heading>
      <Heading color='$muted2' size='xs'>
        {profile?.personalDetails?.email}
      </Heading>

      <XStack mt='$4' space='$2' px='$4' justifyContent='center'>
        <Button
          onPress={handleOnEdit}
          icon={<Icon size='sm' color={globalColors.primary} name='create-outline' />}
          flex={1}
        >
          Edit
        </Button>
        <Button
          onPress={handleOnView}
          icon={<Icon size='sm' color={globalColors.primary} name='eye-outline' />}
          flex={1}
        >
          View CV
        </Button>
      </XStack>
    </YStack>
  )
}

export default ProfileCard

// {/* // TODO: add menu */}
// {/* <Box mr={2} mt={1}> */}
// {/*   <Menu */}
// {/*     placement='left' */}
// {/*     trigger={(triggerProps) => ( */}
// {/*       <IconButton */}
// {/*         size={10} */}
// {/*         colorScheme='light' */}
// {/*         {...triggerProps} */}
// {/*         icon={<Icon color='#A0A0A0' name='ellipsis-vertical-outline' />} */}
// {/*       /> */}
// {/*     )} */}
// {/*   > */}
// {/*     <Menu.Item onPress={() => deleteById(profile.id)}>Delete</Menu.Item> */}
// {/*   </Menu> */}
// {/* </Box> */}
