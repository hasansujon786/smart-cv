import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Dimensions, TouchableOpacity, Linking, Alert, BackHandler } from 'react-native'
import { Box, Button, HStack, useColorModeValue } from 'native-base'

import GradientHeader, { HeaderBackBtn } from '../components/GradientHeader'
import TemplateLoader from '../components/TemplateLoader'
import Icon from '../components/Icon'
import IconButton from '../components/IconButton'
import PdfView from '../components/PdfView'
import ThemeSelectorBottomBar from '../components/ThemeSelectorBottomBar'
import DownloadPopUp from '../components/DownloadPopUp'
import ToolBoxPopUp from '../components/ToolBoxPopUp'
import PickerPopUp from '../components/PickerPopUp'
import { PLAY_STORE_APP_LINK, themeColors } from '../constant'
import { useSettingStore } from '../store/setting'
import { usePdf, promptToViewDownloadedPdf, useLazyScreenLoader, LazyScreenLoader } from '../composables'
import { InterstitialAdContext } from '../services'

const { width, height } = Dimensions.get('screen')
const PDF_VIEW_WIDHT = height > 640 ? width * 0.9 : width * 0.7

// FIXME: <14.02.23> Model overlay is not getting closed
const Template = ({ route, navigation }) => {
  const appIsMounted = useRef(true)
  const pageSize = useSettingStore(useCallback((state) => state.pageSize))
  const LOADER_HEIGHT = (PDF_VIEW_WIDHT - 24) * (pageSize.name == 'A4' ? 1.41 : 1.29)
  const PDF_VIEW_BG = useColorModeValue(themeColors.light.bgDark, themeColors.dark.bgDark)
  const { profile, selectedTemplateId, themes, defaultOptions } = route.params
  const {
    /* States */
    savedPdfUri,
    previewPdfUri,
    isModalVisible,
    setIsModalVisible,
    isDownloading,
    isPdfLoading,
    setIsPdfLoadig,

    /* Controlls */
    downloadPdf,
    onThemeChange,
    onPickCustomTheme,
    updateOptions,
    getRawHtmlAndRenderPdf,
  } = usePdf({ profile, selectedTemplateId, appIsMounted, defaultOptions })

  useEffect(() => {
    getRawHtmlAndRenderPdf()
    return () => (appIsMounted.current = false)
  }, [])

  let [isToolBoxVisible, setIsToolBoxVisible] = useState(false)
  const onOptionsApply = (updatedOptions) => {
    updateOptions(updatedOptions)
    setIsToolBoxVisible((v) => !v)
  }

  let [isColorPickerVisible, setIsColorPickerVisible] = useState(false)
  const onSelectCustomColor = (color) => {
    setIsColorPickerVisible((v) => !v)
    onPickCustomTheme(color)
  }

  const interstitialAd = useContext(InterstitialAdContext)
  const onViewDownload = () => {
    let adHasShowed = false
    adHasShowed = interstitialAd.showAdIfLoaded()
    if (adHasShowed) return

    promptToViewDownloadedPdf(savedPdfUri)
  }

  const { isPageReady } = useLazyScreenLoader()
  // it's a hot fix for crush issue.
  // TODO: get a better way to do this.
  React.useEffect(() => {
    const backAction = () => {
      if (isPdfLoading) {
        Alert.alert(isPdfLoading ? 'Resume is loading' : 'Resume is downloading', 'Are you sure you want to go back?', [
          { text: 'Cancel', onPress: () => null, style: 'cancel' },
          { text: 'YES', onPress: () => navigation.goBack() },
        ])
        return true
      }
      navigation.goBack()
      return true // stop default backbtn behavior
    }

    if (isPageReady) {
      navigation.setOptions({
        header: (props) => (
          <GradientHeader {...props} headerLeft={(props) => <HeaderBackBtn backAction={backAction} {...props} />} />
        ),
      })
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backHandler.remove()
  }, [isPageReady, navigation, isPdfLoading])

  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Box flex={1} bg={PDF_VIEW_BG}>
      <Box alignSelf='center' mt={1} flex={1} style={{ width: PDF_VIEW_WIDHT }}>
        {previewPdfUri != '' && (
          <>
            <PdfView
              bg={PDF_VIEW_BG}
              uri={previewPdfUri}
              onLoadEnd={() => setTimeout(() => appIsMounted.current && setIsPdfLoadig(false), 300)}
              onError={() => {
                setIsPdfLoadig(false)
                alert('An error occurred during PDF render.')
              }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('ZoomView', { pdfUri: previewPdfUri })}
              style={{
                marginTop: 40,
                flex: 1,
                height: LOADER_HEIGHT,
                width: '100%',
                position: 'absolute',
              }}
            />
          </>
        )}
        {isPdfLoading && <TemplateLoader top={10} mx={3} height={LOADER_HEIGHT} />}
        <HStack space={2} position='absolute' style={{ bottom: 0, right: 0 }}>
          <IconButton
            onPress={() => setIsToolBoxVisible((v) => !v)}
            size='lg'
            icon={<Icon color='white' name='options-outline' />}
          />
        </HStack>
      </Box>

      <HStack my={4} justifyContent='space-around'>
        <Button
          isLoading={isDownloading}
          isLoadingText='Downloading'
          isDisabled={isDownloading}
          startIcon={<Icon color='white' name='download-outline' />}
          onPress={downloadPdf}
          width={260}
          size='lg'
          variant='primary'
        >
          Download
        </Button>
      </HStack>
      <ThemeSelectorBottomBar
        isLoading={isPdfLoading || isDownloading}
        themes={themes}
        onSelect={onThemeChange}
        onShowPicker={() => setIsColorPickerVisible((v) => !v)}
      />

      <DownloadPopUp
        isOpen={isModalVisible}
        onClose={setIsModalVisible}
        onViewDownload={onViewDownload}
        onRateUs={() => {
          setIsModalVisible((v) => !v)
          Linking.openURL(PLAY_STORE_APP_LINK)
        }}
      />
      <PickerPopUp isOpen={isColorPickerVisible} onClose={setIsColorPickerVisible} onApply={onSelectCustomColor} />
      <ToolBoxPopUp
        isOpen={isToolBoxVisible}
        onClose={setIsToolBoxVisible}
        onApply={onOptionsApply}
        defaultOptions={defaultOptions}
      />
    </Box>
  )
}

export default Template
