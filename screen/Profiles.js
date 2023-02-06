import React, { useCallback, useEffect } from 'react'
import { Box, Center, IconButton, ScrollView } from 'native-base'
import ProfileCard from '../components/ProfileCard'
import Icon from '../components/Icon'
import { useProfileStore } from '../store/profiles'
import { getNewId } from '../util'
import { globalColors, themeColors } from '../constant'
import { useLazyScreenLoader, LazyScreenLoader } from '../composables'

const Profiles = ({ navigation }) => {
  const profiles = useProfileStore(useCallback((state) => state.profiles))
  const deleteProfile = useProfileStore(useCallback((state) => state.deleteById))
  const restoreProfiels = useProfileStore(useCallback((state) => state.restore))
  const createDummyProfile = useProfileStore(useCallback((state) => state.createDummyProfile))
  useEffect(() => {
    restoreProfiels()
  }, [])

  const onCreate = () => {
    navigation.navigate('CreateProfile', { profileId: getNewId() })
  }

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Box flex={1} _light={{ bg: themeColors.light.bgDark }} _dark={{ bg: themeColors.dark.bgDark }}>
      <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
        {profiles.map((item, index) => (
          <ProfileCard
            key={item.id}
            index={index}
            profile={item}
            deleteById={deleteProfile}
            onView={() => navigation.navigate('SelectTemplate', { profile: item })}
            onEdit={() =>
              navigation.navigate('CreateProfile', {
                profileId: item.id,
                title: 'Update Profile',
              })
            }
            mt={4}
          />
        ))}
        <Box pb={100} />
      </ScrollView>
      <Center position='absolute' bottom={5} right={5}>
        <IconButton
          onLongPress={createDummyProfile} // todo: comment this line in production
          bg={globalColors.primary}
          colorScheme='purple'
          onPress={onCreate}
          icon={<Icon color='white' name='add' />}
          shadow={3}
          size='lg'
          rounded='full'
          variant='solid'
        />
      </Center>
    </Box>
  )
}

export default Profiles
