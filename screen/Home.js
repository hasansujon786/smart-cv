import React, { useCallback, useContext, useLayoutEffect } from 'react'
import { Dimensions } from 'react-native'
import { Image, Stack, YStack } from 'tamagui'
import Icon from '../components/Icon'
import { Button, Center, PrimaryButton } from '../components/atom'
import { globalColors } from '../constant/globalStyles'
import { InterstitialAdContext } from '../services'
import { useProfileStore } from '../store'
import { useSettingStore } from '../store/setting'
import { getNewId } from '../util'

const { width } = Dimensions.get('screen')
const CIRCLE_WIDTH = width * 0.6

const Home = ({ navigation }) => {
  const restoreSetting = useSettingStore(useCallback((state) => state.restore))
  const restoreProfiels = useProfileStore(useCallback((s) => s.restore))

  useLayoutEffect(() => {
    restoreProfiels()
    restoreSetting()
  }, [])

  const interstitialAd = useContext(InterstitialAdContext)
  const onCreateCv = () => {
    navigation.navigate('CreateProfile', { profileId: getNewId() })
  }

  const gotoProfile = () => {
    interstitialAd.showAdIfLoaded()
    navigation.navigate('Profiles')
  }

  return (
    <YStack flex={1} bg='$layer1' py='$4'>
      <Center flex={2}>
        <Stack
          overflow='hidden'
          borderColor='$background'
          borderRadius={CIRCLE_WIDTH}
          borderWidth={6}
          width={CIRCLE_WIDTH}
          height={CIRCLE_WIDTH}
          elevationAndroid={2}
        >
          <Image
            source={require('../assets/icon-circle.png')}
            alt='app icon image'
            style={{ width: '100%', height: '100%' }}
          />
        </Stack>
      </Center>

      <Center flex={1}>
        <YStack rowGap='$3' width={260}>
          <PrimaryButton
            size='$6'
            borderRadius={26}
            onPress={onCreateCv}
            icon={<Icon size='md' color='white' name='create-outline' />}
            style={{ height: 60, elevation: 2 }}
          >
            Create CV
          </PrimaryButton>

          <Button
            size='$6'
            borderRadius={26}
            onPress={gotoProfile}
            icon={<Icon size='md' color={globalColors.primary} name='person-outline' />}
            style={{ height: 60, elevation: 2 }}
          >
            Saved Profiles
          </Button>
        </YStack>
      </Center>
    </YStack>
  )
}

export default Home
