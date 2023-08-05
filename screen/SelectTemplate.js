import React from 'react'
import { FlatList } from 'react-native'
import { BannerAdSize } from 'react-native-google-mobile-ads'
import { Stack, XStack } from 'tamagui'
import AdBannerBottom from '../components/AdBannerBottom'
import TemplateThumbnail from '../components/TemplateThumbnail'
import { Center } from '../components/atom'
import { LazyScreenLoader, useLazyScreenLoader } from '../composables'
import { templateList } from '../constant'

const SelectTemplate = ({ route }) => {
  const _renderItem = ({ item, index }) => <ListItem item={item} index={index} />

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Stack flex={1} bc='$background'>
      <FlatList
        initialNumToRender={8}
        contentContainerStyle={{ paddingBottom: 30, paddingHorizontal: 12, marginTop: 6 }}
        data={templateList[route?.name]}
        renderItem={_renderItem}
      />
    </Stack>
  )
}

export default SelectTemplate

const ListItem = React.memo(({ item, index }) => {
  if (item.type == 'ad') {
    return (
      <Center mt='$5' mb='$2'>
        <AdBannerBottom size={BannerAdSize.MEDIUM_RECTANGLE}></AdBannerBottom>
      </Center>
    )
  }

  return (
    <XStack justifyContent='space-between'>
      {item.row?.map((template, curIdx) => (
        <TemplateThumbnail {...template} key={template.id} index={index + curIdx} />
      ))}
    </XStack>
  )
})
