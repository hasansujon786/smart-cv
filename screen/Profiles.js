import React, { useCallback, useEffect } from 'react'
import { FlatList } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import { YStack } from 'tamagui'
import Icon from '../components/Icon'
import ProfileCard from '../components/ProfileCard'
import { Center, PrimaryButton } from '../components/atom'
import { useLazyScreenLoader } from '../composables'
import { useProfileStore } from '../store/profiles'
import { getNewId } from '../util'

const Profiles = ({ navigation }) => {
  const [profiles, restoreProfiels, createDummyProfile] = useProfileStore(
    useCallback((s) => [s.profiles, s.restore, s.createDummyProfile])
  )

  useEffect(() => {
    restoreProfiels()
  }, [])

  const onCreate = () => {
    navigation.navigate('CreateProfile', { profileId: getNewId() })
  }

  const profileCardItem = useCallback(({ item, index }) => {
    return (
      <Animated.View key={item.id} entering={FadeIn.delay(100 * index)}>
        <ProfileCard index={index} profile={item} />
      </Animated.View>
    )
  }, [])

  const { isPageReady } = useLazyScreenLoader()
  return (
    <YStack flex={1} bc='$background'>
      {isPageReady && (
        <FlatList contentContainerStyle={{ paddingBottom: 100 }} data={profiles} renderItem={profileCardItem} />
      )}

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
