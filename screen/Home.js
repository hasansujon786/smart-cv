import React, { useCallback, useContext, useLayoutEffect } from 'react'
import { Dimensions } from 'react-native'
import { BannerAdSize } from 'react-native-google-mobile-ads'
import { Image, Stack, YStack } from 'tamagui'
import AdBannerBottom from '../components/AdBannerBottom'
import Icon from '../components/Icon'
import { Button, Center, PrimaryButton } from '../components/atom'
import { globalColors, globalStyles } from '../constant/globalStyles'
import { InterstitialAdContext } from '../services'
import { useProfileStore } from '../store'
import { useSettingStore } from '../store/setting'
import { getNewId } from '../util'

const { width, height } = Dimensions.get('screen')
const hasLargeScreen = height > 640
const CIRCLE_WIDTH = width * (hasLargeScreen ? 0.6 : 0.55)

const Home = ({ navigation }) => {
  const restoreSetting = useSettingStore(useCallback((state) => state.restore))
  const restoreProfiels = useProfileStore(useCallback((s) => s.restore))
  const interstitialAd = useContext(InterstitialAdContext)

  useLayoutEffect(() => {
    restoreProfiels()
    restoreSetting()
  }, [])

  const onCreateCv = () => {
    interstitialAd.showAdIfLoaded()
    navigation.navigate('CreateProfile', { profileId: getNewId() })
  }
  const gotoProfile = () => {
    interstitialAd.showAdIfLoaded()
    navigation.navigate('Profiles')
  }

  return (
    <YStack flex={1} bg='$layer1' pt='$4' paddingBottom={hasLargeScreen ? 16 : 0}>
      <Center flex={2}>
        <AdBannerBottom size={BannerAdSize.LARGE_BANNER}></AdBannerBottom>
        <Stack
          marginTop={hasLargeScreen ? 24 : 12}
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
        <YStack rowGap='$3' width='100%' maxWidth={260}>
          <PrimaryButton
            size='$6'
            borderRadius={globalStyles.borderRadiusMd}
            onPress={onCreateCv}
            icon={<Icon size='md' color='white' name='create-outline' />}
          >
            Create CV
          </PrimaryButton>

          <Button
            size='$6'
            borderRadius={globalStyles.borderRadiusMd}
            onPress={gotoProfile}
            icon={<Icon size='md' color={globalColors.primary} name='person-outline' />}
          >
            Saved Profiles
          </Button>
        </YStack>
      </Center>
    </YStack>
  )
}

export default Home
