import React, { useCallback, useContext } from 'react'
import { FlatList } from 'react-native'
import { Stack, XStack } from 'tamagui'
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

  const renderItem = useCallback(({ item, index }) => {
    if (item.type == 'ad') {
      return <Stack mt='$3' bg='white' h='$12'></Stack>
    }

    return (
      <XStack justifyContent='space-between'>
        {item.row?.map((template, curIdx) => (
          <TemplateThumbnail {...template} key={template.id} index={index + curIdx} onPress={onViewCv} />
        ))}
      </XStack>
    )
  }, [])

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Stack flex={1} bc='$background'>
      <FlatList
        contentContainerStyle={{ paddingBottom: 30, paddingHorizontal: 12, marginTop: 6 }}
        data={templateList[route?.name]}
        renderItem={renderItem}
      />
    </Stack>
  )
}

export default SelectTemplate
