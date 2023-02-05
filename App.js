import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import 'react-native-gesture-handler'

import RootNavigation from './navigators/RootNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
      <StatusBar style='light' />
    </NavigationContainer>
  )
}
