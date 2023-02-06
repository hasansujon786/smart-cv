import React, { useCallback } from 'react'
import { Box } from 'native-base'
import SettingRadioOptions from '../components/SettingRadioOptions'
import { themeColors, imageQualitys } from '../constant'
import { useSettingStore } from '../store/setting'

const settings = {
  pageSizeOptions: ['A4', 'US Letter'],
  imageQualityOptions: Object.keys(imageQualitys),
}

const Settings = () => {
  const pageSize = useSettingStore(useCallback((state) => state.pageSize))
  const imageQuality = useSettingStore(useCallback((state) => state.imageQuality))
  const updatePageSize = useSettingStore(useCallback((state) => state.updatePageSize))
  const updateImageQuality = useSettingStore(useCallback((state) => state.updateImageQuality))

  return (
    <Box _light={{ bg: themeColors.light.bg }} _dark={{ bg: themeColors.dark.bgDark }} flex={1}>
      <SettingRadioOptions
        title='Paper Size'
        description={pageSize?.name || ''}
        defaultOption={pageSize?.name || ''}
        options={settings.pageSizeOptions}
        onOptionSelect={updatePageSize}
      />

      <SettingRadioOptions
        title='Image Quality'
        description={imageQuality || ''}
        defaultOption={imageQuality || ''}
        options={settings.imageQualityOptions}
        onOptionSelect={updateImageQuality}
      />
    </Box>
  )
}

export default Settings
