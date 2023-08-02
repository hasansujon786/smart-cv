import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Alert, BackHandler, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { Button, Spinner, Stack, YStack } from 'tamagui'
import DownloadPopUp from '../components/DownloadPopUp'
import GradientHeader, { HeaderBackBtn } from '../components/GradientHeader'
import Icon from '../components/Icon'
import PdfView from '../components/PdfView'
import ThemeSelectorBottomBar from '../components/ThemeSelectorBottomBar'
import ToolBoxPopUp from '../components/ToolBoxPopUp'
import { Center, PrimaryButton } from '../components/atom'
import { LazyScreenLoader, useLazyScreenLoader, usePdf } from '../composables'
import { globalStyles } from '../constant'
import { useSettingStore } from '../store/setting'

const { width, height } = Dimensions.get('screen')
const PDF_VIEW_WIDHT = width * (height > 640 ? 0.9 : 0.7)

const Template = ({ route, navigation }) => {
  const appIsMounted = useRef(true)
  const pageSize = useSettingStore(useCallback((state) => state.pageSize))
  const LOADER_HEIGHT = (PDF_VIEW_WIDHT - 24) * (pageSize.name == 'A4' ? 1.41 : 1.29)
  const { profile, selectedTemplateId, themes, defaultOptions } = route.params

  // download popup
  const [isModalVisible, setIsModalVisible] = useState(false)
  const toggleDownloadModal = () => setIsModalVisible((v) => !v)

  const {
    /* States */
    savedPdfUri,
    previewPdfUri,
    isDownloading,
    isPdfLoading,
    setIsPdfLoadig,

    /* Controlls */
    downloadPdf,
    onThemeChange,
    onPickCustomTheme,
    updateOptions,
    getRawHtmlAndRenderPdf,
  } = usePdf({ profile, selectedTemplateId, appIsMounted, defaultOptions, onDownloadCompleted: toggleDownloadModal })

  useEffect(() => {
    getRawHtmlAndRenderPdf()
    return () => (appIsMounted.current = false)
  }, [])

  const [isToolBoxVisible, setIsToolBoxVisible] = useState(false)
  const onOptionsApply = (updatedOptions) => {
    updateOptions(updatedOptions)
    setIsToolBoxVisible((v) => !v)
  }

  const { isPageReady } = useLazyScreenLoader()
  // Prompt user before exit screen. It's a hot fix for crush issue.
  // INFO: get a better way to do this.
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

  // local functions
  const onPdfLoadEnd = () => setTimeout(() => appIsMounted.current && setIsPdfLoadig(false), 10)
  const onPdfLoadError = () => {
    setIsPdfLoadig(false)
    alert('An error occurred during PDF render.')
  }
  const toggleToolBox = () => setIsToolBoxVisible((v) => !v)
  const openZoomView = () => navigation.navigate('ZoomView', { pdfUri: previewPdfUri })

  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Stack flex={1} bg='$background'>
      <YStack flex={1} alignSelf='center' style={{ width: PDF_VIEW_WIDHT }}>
        {previewPdfUri != '' && (
          <>
            <PdfView uri={previewPdfUri} onLoadEnd={onPdfLoadEnd} onError={onPdfLoadError} />
            <TouchableOpacity onPress={openZoomView} style={[styles.touchable, { height: LOADER_HEIGHT }]} />
          </>
        )}
        {!isPdfLoading && (
          <Stack position='absolute' style={{ bottom: 0, right: 5 }}>
            <Button
              size='$5'
              circular
              bg='$iconBg'
              onPress={toggleToolBox}
              icon={<Icon size='md' color='white' name='options-outline' />}
            />
          </Stack>
        )}
        {isPdfLoading && <TemplateLoader top={10} mx={3} height={LOADER_HEIGHT} />}
      </YStack>

      <Center flex={0} mb='$4' mt='$3' justifyContent='space-around'>
        <PrimaryButton
          disabled={isPdfLoading || isDownloading}
          isDisabled={isPdfLoading || isDownloading}
          maxWidth={260}
          width='100%'
          size='$5'
          borderRadius={globalStyles.borderRadiusMd}
          onPress={downloadPdf}
          icon={isDownloading ? Spinner : <Icon size='md' color='white' name='download-outline' />}
        >
          {isDownloading ? 'Downloading' : 'Download'}
        </PrimaryButton>
      </Center>

      <ThemeSelectorBottomBar
        isLoading={isPdfLoading || isDownloading}
        themes={themes}
        onSelect={onThemeChange}
        onPickCustomColor={onPickCustomTheme}
      />
      <DownloadPopUp isOpen={isModalVisible} onClose={toggleDownloadModal} pdfUri={savedPdfUri} />
      <ToolBoxPopUp
        isOpen={isToolBoxVisible}
        onClose={setIsToolBoxVisible}
        onApply={onOptionsApply}
        defaultOptions={defaultOptions}
      />
    </Stack>
  )
}

const TemplateLoader = ({ height }) => {
  return (
    <YStack style={[styles.touchable, styles.loader, { height: height }]}>
      <Spinner size='large' color='$primary' />
    </YStack>
  )
}

const styles = StyleSheet.create({
  touchable: {
    marginTop: 40,
    marginHorizontal: 12,
    flex: 1,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  loader: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 3,
  },
})

export default Template
