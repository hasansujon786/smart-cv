import React, { useContext } from 'react'
import { Dimensions } from 'react-native'
import { Box, FlatList } from 'native-base'
import TemplateThumbnail from '../components/TemplateThumbnail'
import { useLazyScreenLoader, LazyScreenLoader } from '../composables'
import { InterstitialAdContext } from '../services'
import { themeColors } from '../constant'

export const getImage = (profileId) => {
  switch (profileId) {
    case 'A':
      return require('../assets/thumbnail/A.jpg')
    case 'B':
      return require('../assets/thumbnail/B.png')
    case 'C':
      return require('../assets/thumbnail/C.png')
    case 'D':
      return require('../assets/thumbnail/D.png')
    case 'E':
      return require('../assets/thumbnail/E.png')
    case 'F':
      return require('../assets/thumbnail/F.jpg')
    case 'G':
      return require('../assets/thumbnail/G.jpg')
    case 'H':
      return require('../assets/thumbnail/H.jpg')
    case 'I':
      return require('../assets/thumbnail/I.jpg')
    case 'J':
      return require('../assets/thumbnail/J.jpg')
    case 'M':
      return require('../assets/thumbnail/M.jpg')
    case 'N':
      return require('../assets/thumbnail/N.jpg')
    case 'O':
      return require('../assets/thumbnail/O.jpg')
    case 'P':
      return require('../assets/thumbnail/P.jpg')
    case 'Q':
      return require('../assets/thumbnail/Q.jpg')
    case 'R':
      return require('../assets/thumbnail/R.jpg')
    case 'S':
      return require('../assets/thumbnail/S.jpg')
    case 'T':
      return require('../assets/thumbnail/T.jpg')
    case 'U':
      return require('../assets/thumbnail/U.jpg')
    default:
      return null
  }
}
const { width } = Dimensions.get('screen')
const THUMBNAIL_WIDTH = (width - 36) / 2

const SelectTemplate = ({ navigation, profile, list }) => {
  const interstitialAd = useContext(InterstitialAdContext)

  const onViewCv = (selectedTemplateId, themes, defaultOptions) => {
    let adHasShowed = false
    adHasShowed = interstitialAd.showAdIfLoaded()
    if (adHasShowed) return

    navigation.navigate('Template', { profile, selectedTemplateId, themes, defaultOptions })
  }

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Box flex={1} _light={{ bg: themeColors.light.bgDark }} _dark={{ bg: themeColors.dark.bgDark }}>
      <FlatList
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 30, paddingHorizontal: 6, marginTop: 6 }}
        data={list}
        renderItem={(data) => (
          <TemplateThumbnail
            idx={data.index}
            width={THUMBNAIL_WIDTH}
            img={getImage(data.item.id)}
            templateId={data.item.id}
            defaultOptions={data.item.defaultOptions}
            themes={data.item.themes}
            onPress={onViewCv}
          />
        )}
      />
    </Box>
  )
}

export default SelectTemplate
