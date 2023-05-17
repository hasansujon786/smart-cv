import React, { useCallback } from 'react'
import { YStack } from 'tamagui'
import { OptionsSelect } from '../components/OptionsSelect'
import { useLazyScreenLoader } from '../composables/useLazyScreenLoader'
import { imageQualityOptions, pageSizes } from '../constant'
import { useSettingStore } from '../store/setting'

const Settings = () => {
  const curPageSize = useSettingStore(useCallback((state) => state.pageSize))
  const updatePageSize = useSettingStore(useCallback((state) => state.updatePageSize))
  const curImageQuality = useSettingStore(useCallback((state) => state.imageQuality))
  const updateImageQuality = useSettingStore(useCallback((state) => state.updateImageQuality))

  const { isPageReady } = useLazyScreenLoader()

  return (
    <YStack flex={1} bg='$background'>
      <OptionsSelect
        label='Paper Size'
        heading='Chose a options'
        options={pageSizes}
        value={curPageSize.value}
        onValueChange={updatePageSize}
        lazy={isPageReady}
      />

      <OptionsSelect
        label='Image Quality'
        heading='Chose a options'
        options={imageQualityOptions}
        value={curImageQuality}
        onValueChange={updateImageQuality}
        lazy={isPageReady}
      />
    </YStack>
  )
}

export default Settings
