import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Box } from 'native-base'
import PDFReader from '@bildau/rn-pdf-reader'

const ZoomView = ({ route }) => {
  const { pdfUri } = route.params
  const [opacity, setOpacity] = useState(0)

  return (
    <Box flex={1} bg='#53565b'>
      <Box mt={2} flex={1} opacity={opacity}>
        <PDFReader
          source={{ uri: pdfUri }}
          onLoadEnd={() => setTimeout(() => setOpacity(1), 700)}
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
      </Box>
      <StatusBar style='light' />
    </Box>
  )
}

export default ZoomView
