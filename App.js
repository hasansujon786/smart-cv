import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { useColorScheme } from 'react-native'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TamaguiProvider, Theme } from 'tamagui'
import './global'

import AdBannerBottom from './components/AdBannerBottom'
import { NetINfoProvider } from './features'
import RootNavigation from './navigators/RootNavigator'
import { InterstitialAdProvider } from './services'
import { colorModeManager, config as nativeBaseConfig, theme as nativeBaseTheme } from './theme'

import config from './tamagui.config'
export default function App() {
  const colorScheme = useColorScheme()

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  if (!loaded) {
    return null
  }
  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config}>
        {/* <Theme name='dark'> */}
        <Theme name={colorScheme}>
          <NativeBaseProvider theme={nativeBaseTheme} config={nativeBaseConfig} colorModeManager={colorModeManager}>
            <NetINfoProvider>
              <InterstitialAdProvider>
                <NavigationContainer>
                  <StatusBar style='auto' />
                  <RootNavigation />
                  <AdBannerBottom />
                </NavigationContainer>
              </InterstitialAdProvider>
            </NetINfoProvider>
          </NativeBaseProvider>
        </Theme>
      </TamaguiProvider>
    </SafeAreaProvider>
  )
}
