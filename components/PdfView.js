import PDFReader from '@bildau/rn-pdf-reader'
import React from 'react'
// import PDFReader from 'rn-pdf-reader-js'
import { useTheme } from 'tamagui'
const IconSize = 50

const PdfView = ({ uri, onLoadEnd, ...props }) => {
  const theme = useTheme()
  const screenBg = theme.background.val
  const iconBg = theme.iconBg.val

  return (
    <PDFReader
      webviewStyle={{ backgroundColor: screenBg }}
      source={{ uri: uri }}
      noLoader
      customStyle={{
        readerContainerDocument: {
          backgroundColor: screenBg,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
        readerContainerNumbers: { backgroundColor: screenBg },
        readerContainerNumbersContent: { backgroundColor: iconBg },
        readerContainerNavigate: { backgroundColor: 'transparent', width: 120, marginBottom: 1 },
        readerContainerNavigateArrow: { backgroundColor: iconBg, borderRadius: 30, width: IconSize, height: IconSize },
        readerContainerZoomContainer: { display: 'none' },
      }}
      onLoadEnd={onLoadEnd}
      {...props}
    />
  )
}

export default PdfView
