import PDFReader from '@bildau/rn-pdf-reader'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { YStack } from 'tamagui'

const ZoomView = ({ route }) => {
  const { pdfUri } = route.params

  return (
    <YStack flex={1} bg='#53565b' pt='$2'>
      <PDFReader
        source={{ uri: pdfUri }}
        customStyle={{
          readerContainerNavigate: { backgroundColor: '#49494a' },
          readerContainerZoomContainer: { backgroundColor: 'transparent' },
          readerContainerZoomContainerButton: {
            backgroundColor: '#6f6f71',
            borderRadius: 48,
            width: 48,
            height: 48,
            marginTop: 8,
          },
        }}
      />
      <StatusBar style='light' />
    </YStack>
  )
}

export default ZoomView
