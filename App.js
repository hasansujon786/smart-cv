import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import 'react-native-gesture-handler'
import { NetINfoProvider } from './features'

import RootNavigation from './navigators/RootNavigator'
import { colorModeManager, config, theme } from './theme'

export default function App() {
  return (
    <SafeAreaProvider>
      <NetINfoProvider>
        <NativeBaseProvider theme={theme} config={config} colorModeManager={colorModeManager}>
          <NavigationContainer>
            <RootNavigation />
            <StatusBar style='light' />
          </NavigationContainer>
        </NativeBaseProvider>
      </NetINfoProvider>
    </SafeAreaProvider>
  )
}
