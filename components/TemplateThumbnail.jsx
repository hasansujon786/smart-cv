import { Dimensions, TouchableOpacity } from 'react-native'
import { Image, Stack, Text } from 'tamagui'

const { width } = Dimensions.get('screen')
const THUMBNAIL_WIDTH = (width - 36) / 2

const TemplateThumbnail = React.memo(({ index, item, onPress }) => {
  const img = getImage(item.id)
  const count = __DEV__ ? item.id : index + 1
  return (
    <Stack mt='$3' style={{ paddingHorizontal: 6 }}>
      <TouchableOpacity
        style={{ flex: 1, borderRadius: 4, overflow: 'hidden', aspectRatio: 0.71429, width: THUMBNAIL_WIDTH }}
        onPress={() => onPress(item.id, item.themes, item.defaultOptions)}
      >
        <Image resizeMode='cover' source={img} style={{ width: '100%', height: '100%' }} />
        <Stack
          w='$1'
          h='$1'
          br='$1'
          zIndex={1}
          position='absolute'
          bg='$primary'
          ai='center'
          jc='center'
          bottom={0}
          right={0}
        >
          <Text color='white'>{count}</Text>
        </Stack>
      </TouchableOpacity>
    </Stack>
  )
})

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
    case 'V':
      return require('../assets/thumbnail/V.jpg')
    case 'W':
      return require('../assets/thumbnail/W.jpg')
    case 'X':
      return require('../assets/thumbnail/X.jpg')
    case 'Y':
      return require('../assets/thumbnail/Y.jpg')
    default:
      return require('../assets/icon-circle.png')
  }
}

export default TemplateThumbnail
