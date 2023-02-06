import { readAsStringAsync, EncodingType } from 'expo-file-system'
import { devlog } from './utils'

export const encodeImg = async (uri) => {
  try {
    const encodedImg = await readAsStringAsync(uri, {
      encoding: EncodingType.Base64,
    })
    return 'data:image/png;base64,' + encodedImg
  } catch (error) {
    devlog('encodeImg', error)
  }
}
