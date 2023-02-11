import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AdBannerBottom from './components/AdBannerBottom'
import { NetINfoProvider } from './features'
import { InterstitialAdProvider } from './services'

import RootNavigation from './navigators/RootNavigator'
import { colorModeManager, config, theme } from './theme'

export default function App() {
  return (
    <SafeAreaProvider>
      <NetINfoProvider>
        <InterstitialAdProvider>
          <NativeBaseProvider theme={theme} config={config} colorModeManager={colorModeManager}>
            <NavigationContainer>
              <RootNavigation />
              <StatusBar style='light' />
              <AdBannerBottom />
            </NavigationContainer>
          </NativeBaseProvider>
        </InterstitialAdProvider>
      </NetINfoProvider>
    </SafeAreaProvider>
  )
}
