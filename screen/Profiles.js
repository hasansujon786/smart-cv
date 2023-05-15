import React, { useCallback, useEffect } from 'react'
import { FlatList } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import { YStack } from 'tamagui'
import Icon from '../components/Icon'
import ProfileCard from '../components/ProfileCard'
import { Center, PrimaryButton } from '../components/atom'
import { LazyScreenLoader, useLazyScreenLoader } from '../composables'
import { useProfileStore } from '../store/profiles'
import { getNewId } from '../util'

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

  const handleOnView = (profile) => {
    navigation.navigate('SelectTemplate', { profile })
  }

  const handleOnEdit = (profile) => {
    navigation.navigate('CreateProfile', { profileId: profile.id, title: 'Update Profile' })
  }

  const profileCardItem = ({ item, index }) => {
    return (
      <Animated.View key={item.id} entering={FadeIn.delay(100 * index)}>
        <ProfileCard
          index={index}
          profile={item}
          deleteById={deleteProfile}
          onView={handleOnView}
          onEdit={handleOnEdit}
        />
      </Animated.View>
    )
  }

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <YStack flex={1} bc='$background'>
      <FlatList contentContainerStyle={{ paddingBottom: 100 }} data={profiles} renderItem={profileCardItem} />

      <Center position='absolute' bottom='$4' right='$4'>
        <PrimaryButton
          // onLongPress={createDummyProfile} // TODO: comment this line in production
          onPress={onCreate}
          icon={<Icon color='white' name='add' size='md' />}
          size='$6'
          circular
        />
      </Center>
    </YStack>
  )
}

export default Profiles
