import React, { useCallback, useContext } from 'react'
import { Alert, FlatList } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import { YStack } from 'tamagui'
import Icon from '../components/Icon'
import ProfileCard from '../components/ProfileCard'
import { Center, PrimaryButton } from '../components/atom'
import { useLazyScreenLoader } from '../composables'
import { InterstitialAdContext } from '../services'
import { useProfileStore } from '../store/profiles'
import { getNewId } from '../util'

const Profiles = ({ navigation }) => {
  const interstitialAd = useContext(InterstitialAdContext)

  const [profiles, createDummyProfile, deleteById] = useProfileStore(
    useCallback((s) => [s.profiles, s.createDummyProfile, s.deleteById])
  )

  const onCreate = () => {
    interstitialAd.showAdIfLoaded()
    navigation.navigate('CreateProfile', { profileId: getNewId() })
  }

  const confirmDelete = (id) =>
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this profile?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => deleteById(id) },
      ],
      { cancelable: true }
    )

  const profileCardItem = useCallback(({ item, index }) => {
    return (
      <Animated.View key={item.id} entering={FadeIn.delay(100 * index)}>
        <ProfileCard index={index} profile={item} onDelete={confirmDelete} />
      </Animated.View>
    )
  }, [])

  const { isPageReady } = useLazyScreenLoader()
  return (
    <YStack flex={1} bc='$background'>
      {isPageReady && (
        <FlatList
          initialNumToRender={4}
          contentContainerStyle={{ paddingBottom: 100 }}
          data={profiles}
          renderItem={profileCardItem}
        />
      )}

      <Center position='absolute' bottom='$4' right='$4'>
        <PrimaryButton
          // onPress={createDummyProfile} // TODO: comment this line in production
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
