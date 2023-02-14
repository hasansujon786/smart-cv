import React, { useCallback, useLayoutEffect, useContext } from 'react'
import { Box, Button, Center, Image } from 'native-base'
import { Dimensions } from 'react-native'
import { getNewId } from '../util'
import Icon from '../components/Icon'
import { globalColors, themeColors } from '../constant/globalStyles'
import { useSettingStore } from '../store/setting'
import { InterstitialAdContext } from '../services'

const { width } = Dimensions.get('screen')
const CIRCLE_WIDTH = width * 0.6

const Home = ({ navigation }) => {
  const restoreSetting = useSettingStore(useCallback((state) => state.restore))
  useLayoutEffect(() => {
    restoreSetting()
  }, [])

  const interstitialAd = useContext(InterstitialAdContext)
  const onCreateCv = () => {
    interstitialAd.showAdIfLoaded()
    navigation.navigate('CreateProfile', { profileId: getNewId() })
  }

  const gotoProfile = () => {
    interstitialAd.showAdIfLoaded()
    navigation.navigate('Profiles')
  }

  return (
    <Box flex={1} _light={{ bg: themeColors.light.bg }} _dark={{ bg: themeColors.dark.bgDark }}>
      <Center flex={1} mt={8}>
        <Box
          overflow='hidden'
          borderWidth={6}
          borderColor='gray.200'
          width={CIRCLE_WIDTH}
          height={CIRCLE_WIDTH}
          rounded={CIRCLE_WIDTH}
          _dark={{ borderColor: 'gray.600' }}
        >
          <Image width='100%' height='100%' source={require('../assets/icon-circle.png')} alt='app icon image' />
        </Box>
      </Center>
      <Center pb={10}>
        <Button.Group space={3} direction='column' width={260} size='lg'>
          <Button startIcon={<Icon color='white' name='create-outline' />} variant='primary' onPress={onCreateCv}>
            Create CV
          </Button>
          <Button
            startIcon={<Icon color={globalColors.primary} name='person-outline' />}
            variant='secondary'
            onPress={gotoProfile}
          >
            Saved Profiles
          </Button>
        </Button.Group>
      </Center>
    </Box>
  )
}

export default Home
