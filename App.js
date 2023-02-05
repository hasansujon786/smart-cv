import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import 'react-native-gesture-handler'

import RootNavigation from './navigators/RootNavigator'
import { colorModeManager, config, theme } from './theme'

export default function App() {
  return (
    <NativeBaseProvider theme={theme} config={config} colorModeManager={colorModeManager}>
      <NavigationContainer>
        <RootNavigation />
        <StatusBar style='light' />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
