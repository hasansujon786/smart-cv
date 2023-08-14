import React, { useCallback, useContext } from 'react'
import { Alert, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import { Stack, Text, YStack } from 'tamagui'
import Icon from '../components/Icon'
import ProfileCard from '../components/ProfileCard'
import { useLazyScreenLoader } from '../composables'
import { globalColors } from '../constant'
import { InterstitialAdContext } from '../services'
import { useProfileStore } from '../store/profiles'
import { getNewId } from '../util'
import { Center } from '../components/atom'

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
  const isProfileEmpty = profiles && profiles.length === 0

  return (
    <YStack flex={1} bc='$background'>
      <YStack>
        {isPageReady && (
          <FlatList
            initialNumToRender={4}
            contentContainerStyle={{ paddingBottom: isProfileEmpty ? 0 : 100 }}
            data={profiles}
            renderItem={profileCardItem}
          />
        )}
      </YStack>

      {isProfileEmpty && (
        <Center flex={1} marginTop={-120}>
          <Text color='$gray10' fontSize='$5' maxWidth={300} lineHeight='$4' textAlign='center'>
            Tip: Press the plus '+' button to create a new profile or long press to create a dummy profile.
          </Text>
        </Center>
      )}

      <Stack elevationAndroid={8} bg='$primaryDark' borderRadius={40} position='absolute' bottom='$4' right='$4'>
        <TouchableOpacity style={styles.createBtn} onPress={onCreate} onLongPress={createDummyProfile}>
          <Icon color='white' name='add' size='lg' />
        </TouchableOpacity>
      </Stack>
    </YStack>
  )
}

const styles = StyleSheet.create({
  createBtn: {
    backgroundColor: globalColors.primary,
    padding: 18,
    borderRadius: 40,
  },
})

export default Profiles
