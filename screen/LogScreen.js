import React, { useCallback } from 'react'
import { ScrollView } from 'react-native'
import { Stack, Text, XStack, YStack } from 'tamagui'
import { Button } from '../components/atom'
import { useLogStore } from '../store/log'

const LogScreen = () => {
  const logs = useLogStore(useCallback((state) => state.logs))

  const test = () => {}

  return (
    <ScrollView contentContainerStyle={{ minHeight: '100%', padding: 12 }}>
      <Stack backgroundColor='$background'>
        <Button onPress={test}>Test</Button>
        <YStack mt='$3'>
          {logs.map((log, i) => (
            <XStack key={i} columnGap='$3'>
              <Text textAlign='right' w='$4'>
                {logs.length - i} -
              </Text>
              <Text flex={1}>{log}</Text>
            </XStack>
          ))}
        </YStack>
      </Stack>
    </ScrollView>
  )
}

export default LogScreen
