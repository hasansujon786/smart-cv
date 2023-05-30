import React, { useCallback } from 'react'
import { YStack } from 'tamagui'
import OptionsModal from '../components/OptionsModal'
import { imageQualityOptions, pageSizes } from '../constant'
import { useSettingStore } from '../store/setting'

const Settings = () => {
  const [curImageQuality, updateImageQuality, curPageSize, updatePageSize] = useSettingStore(
    useCallback((s) => [s.imageQuality, s.updateImageQuality, s.pageSize, s.updatePageSize])
  )

  return (
    <YStack flex={1} bg='$background'>
      <OptionsModal
        label='Paper Size'
        heading='Select Paper Size'
        options={pageSizes}
        value={curPageSize.value}
        onValueChange={updatePageSize}
      />

      <OptionsModal
        label='Image Quality'
        heading='Select Image Quality'
        options={imageQualityOptions}
        value={curImageQuality}
        onValueChange={updateImageQuality}
      />
    </YStack>
  )
}

export default Settings
