import React, { useCallback, useContext } from 'react'
import { FlatList } from 'react-native'
import { Stack } from 'tamagui'
import TemplateThumbnail from '../components/TemplateThumbnail'
import { LazyScreenLoader, useLazyScreenLoader } from '../composables'
import { templateList } from '../constant'
import { InterstitialAdContext } from '../services'

const SelectTemplate = ({ route, navigation }) => {
  const interstitialAd = useContext(InterstitialAdContext)

  const onViewCv = (selectedTemplateId, themes, defaultOptions) => {
    let adHasShowed = false
    adHasShowed = interstitialAd.showAdIfLoaded()
    if (adHasShowed) return

    navigation.navigate('Template', { profile: route.params.profile, selectedTemplateId, themes, defaultOptions })
  }

  const renderItem = useCallback((data) => <TemplateThumbnail {...data} onPress={onViewCv} />, [])

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Stack flex={1} bc='$background'>
      <FlatList
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 30, paddingHorizontal: 6, marginTop: 6 }}
        data={templateList[route?.name]}
        keyExtractor={(data) => data.id}
        renderItem={renderItem}
      />
    </Stack>
  )
}

export default SelectTemplate
