import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider, useColorMode } from 'native-base'
import React from 'react'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TamaguiProvider, Theme } from 'tamagui'
import AdBannerBottom from './components/AdBannerBottom'
import { NetINfoProvider } from './features'
import './global'
import { InterstitialAdProvider } from './services'

import RootNavigation from './navigators/RootNavigator'
import { colorModeManager, config as nativeBaseConfig, theme } from './theme'

import config from './tamagui.config'
export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  if (!loaded) {
    return null
  }
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme} config={nativeBaseConfig} colorModeManager={colorModeManager}>
        <ThemeConfig />
      </NativeBaseProvider>
    </SafeAreaProvider>
  )
}

const ThemeConfig = () => {
  const themeMode = useColorMode()
  // const colorScheme = useColorScheme()

  return (
    <TamaguiProvider config={config}>
      <Theme name={themeMode.colorMode}>
        {/* <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}> */}
        <NetINfoProvider>
          <InterstitialAdProvider>
            <NavigationContainer>
              <StatusBar style='auto' />
              <RootNavigation />
              <AdBannerBottom />
            </NavigationContainer>
          </InterstitialAdProvider>
        </NetINfoProvider>
      </Theme>
    </TamaguiProvider>
  )
}
