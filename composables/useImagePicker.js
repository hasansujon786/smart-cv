import { useCallback } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { useSettingStore } from '../store/setting'
import { imageQualitys } from '../constant'

const useImagePicker = (callback, config = {}) => {
  const imgQuaOpt = useSettingStore(useCallback((state) => state.imageQuality))
  const imageQuality = imageQualitys[imgQuaOpt]

  const [mediaPermission, requestPermission] = ImagePicker.useMediaLibraryPermissions()

  const pickImage = async () => {
    if (!mediaPermission.granted) {
      await requestPermission()
    } else if (mediaPermission.granted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: imageQuality,
        ...config,
      })

      if (!result.canceled && callback) {
        callback(result)
      }
    } else {
      alert('Sorry, we need camera roll permissions to make this work!')
    }
  }

  return pickImage
}

export default useImagePicker
