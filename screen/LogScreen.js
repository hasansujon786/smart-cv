import { Box, Button, HStack, Text } from 'native-base'
import React, { useCallback, useContext } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { InterstitialAdContext } from '../services'
import { useLogStore } from '../store/log'

const LogScreen = () => {
  const logs = useLogStore(useCallback((state) => state.logs))
  const interstitialAd = useContext(InterstitialAdContext)

  return (
    <ScrollView contentContainerStyle={{ minHeight: '100%', padding: 12 }}>
      <Button
        onPress={() => {
          interstitialAd.showAdIfLoaded()
        }}
      >Show Ad</Button>
      <Box pt={8}>
        {logs.map((log, i) => (
          <HStack key={i} style={{ alignItems: 'flex-start' }}>
            <Text width={8} textAlign='right'>
              {logs.length - i} -{' '}
            </Text>
            <Text flex={1} fontSize='md'>
              {log}
            </Text>
          </HStack>
        ))}
      </Box>
    </ScrollView>
  )
}

export default LogScreen
