import { useColorModeValue } from 'native-base'
import React from 'react'
import PDFReader from '@bildau/rn-pdf-reader'
// import PDFReader from 'rn-pdf-reader-js'
import { themeColors } from '../constant/globalStyles'
const IconSize = 48

const PdfView = ({ bg, uri, onLoadEnd, ...props }) => {
  let iconBg = useColorModeValue(themeColors.light.iconBg, themeColors.dark.iconBg)
  const readerContainerNumbersContent = useColorModeValue(
    { backgroundColor: themeColors.light.bg, color: '#3f3f46' },
    { backgroundColor: themeColors.dark.bg, color: '#ddd' },
  )
  return (
    <PDFReader
      webviewStyle={{ backgroundColor: bg }}
      source={{ uri: uri }}
      customStyle={{
        readerContainerDocument: {
          backgroundColor: bg, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
        },
        readerContainerNumbers: { backgroundColor: bg },
        readerContainerNumbersContent: readerContainerNumbersContent,
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
