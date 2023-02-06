import { useState, useCallback } from 'react'
import { printToFileAsync } from 'expo-print'
import { startActivityAsync } from 'expo-intent-launcher'
import { getContentUriAsync } from 'expo-file-system'
import { Alert, PermissionsAndroid } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'

import { getNewId, getHtml, devlog } from '../util'
import { htmlStyles } from '../constant/styles'
import { useSettingStore } from '../store'

const DEFALUT_THEME = 0
const getDefaultStyles = (defaultOptions) => {
  if (!defaultOptions) return ''
  return `
      <style>
        @page {margin: ${defaultOptions?.margin}!important;}
      </style>
      `
}

export const usePdf = ({ profile, selectedTemplateId, appIsMounted, defaultOptions }) => {
  const pageSize = useSettingStore(useCallback((state) => state.pageSize))

  const [isPdfLoading, setIsPdfLoadig] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [savedPdfUri, setSavedPdfUri] = useState('')
  const [previewPdfUri, setPreviewPdfUri] = useState('')
  const [optionStyles, setOptionStyles] = useState(getDefaultStyles(defaultOptions))

  const [rawHtml, setRawHtml] = useState(null)
  const getRawHtmlAndRenderPdf = async () => {
    setIsPdfLoadig(true)
    let rHtml = await getHtml(selectedTemplateId, profile)
    renderPdf(rHtml, DEFALUT_THEME, optionStyles, customThemeStyles)
    setRawHtml(rHtml)
  }

  const renderPdf = async (rHtml, curntTheme, updatedOptionStyles, customThemeStyles) => {
    let html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
      </head>
        ${htmlStyles}
        ${updatedOptionStyles}
        ${customThemeStyles}
      <body id="theme-${curntTheme}">
        ${rHtml}
      </body>
      </html>
    `
    if (!appIsMounted.current) return

    setIsPdfLoadig(true)
    setPreviewPdfUri('')
    const printOptions = { html, width: pageSize.ppi72.width, height: pageSize.ppi72.height }
    const pdf = await printToFileAsync(printOptions)

    if (!appIsMounted.current) return
    setPreviewPdfUri(pdf.uri)
    // setIsPdfLoadig(false)
  }

  const [isDownloading, setIsDownloading] = useState(false)
  const downloadPdf = async () => {
    if (isPdfLoading) return

    setIsDownloading(true)
    let html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
      </head>
        ${htmlStyles}
        ${optionStyles}
        ${customThemeStyles}
      <body id="theme-${currentTheme}">
        ${rawHtml}
      </body>
      </html>
    `
    const printOptions = { html, width: pageSize.ppi72.width, height: pageSize.ppi72.height }
    const { uri } = await printToFileAsync(printOptions)

    saveFile(uri, (error) => {
      setIsDownloading(false)
      if (error) {
        return Alert.alert('', error.message)
      }
      setSavedPdfUri(uri)
      setIsModalVisible((v) => !v)
    })

    // createPdfAndSavetoFile(printOptions, OS, (uri) => {
    //   setIsDownloading(false)
    //   setIsModalVisible((v) => !v)
    //   setSavedPdfUri(uri)
    // })
  }

  const [currentTheme, setCurrentTheme] = useState(DEFALUT_THEME)
  const onThemeChange = (selectedTheme) => {
    renderPdf(rawHtml, selectedTheme, optionStyles, customThemeStyles)
    setCurrentTheme(selectedTheme)
    setCustomThemeStyles('')
  }
  // custom theme implementation
  const [customThemeStyles, setCustomThemeStyles] = useState('')
  const onPickCustomTheme = (customColor) => {
    const newCustomColorStyles = `
      <style>
        body {
          --theme-bg: ${customColor};
          --custom-color: ${customColor};
        }
      </style>
    `
    renderPdf(rawHtml, 'custom', optionStyles, newCustomColorStyles)
    setCurrentTheme('custom')
    setCustomThemeStyles(newCustomColorStyles)
  }

  const updateOptions = (options) => {
    // TODO: fix base body font size
    const newOptionStyles = `
      <style>
        @page {margin: ${options.margin}!important;}
        body {font-size: ${options.fontSize} !important;}
        .name {font-size: ${options.nameSize} !important}
        .heading {font-size: ${options.headingSize} !important}
      </style>
    `
    renderPdf(rawHtml, currentTheme, newOptionStyles, customThemeStyles)
    setOptionStyles(newOptionStyles)
  }

  return {
    downloadPdf,
    onThemeChange,
    onPickCustomTheme,
    updateOptions,
    getRawHtmlAndRenderPdf,

    savedPdfUri,
    previewPdfUri,
    isModalVisible,
    setIsModalVisible,
    isPdfLoading,
    isDownloading,
    setIsPdfLoadig,
  }
}

/* utils
 *************************************/

const saveFile = async (uri, callBack) => {
  await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
  await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
  // const asset = await MediaLibrary.createAssetAsync(uri)
  // await MediaLibrary.createAlbumAsync('smart-cv', asset, false) // false to cut
  // callBack ? callBack(uri) : null

  const fileName = 'smart-cv-' + getNewId() + '.pdf'
  RNFetchBlob.fs
    .cp(uri.replace('file://', ''), RNFetchBlob.fs.dirs.DownloadDir + '/' + fileName)
    .then(() => {
      callBack(null)
    })
    .catch((error) => {
      callBack(error)
    })
}

export const promptToViewDownloadedPdf = async (uri) => {
  try {
    const cUri = await getContentUriAsync(uri)
    await startActivityAsync('android.intent.action.VIEW', {
      data: cUri,
      flags: 1,
      type: 'application/pdf',
    })
  } catch (error) {
    devlog('promptToViewPdf', error)
  }
}
