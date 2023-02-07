import React, { useEffect, useState } from 'react'
import { Box } from 'native-base'
import { themeColors } from '../constant/globalStyles'

export const useLazyScreenLoader = () => {
  const [isPageReady, setIsPageReady] = useState(false)

  // TODO: <07.02.23> try to get someting better than this hack
  useEffect(() => {
    setTimeout(() => {
      setIsPageReady(true)
    }, 0)
  }, [])

  return { isPageReady }
}

export const LazyScreenLoader = () => {
  return <Box flex={1} _light={{ bg: themeColors.light.bgDark }} _dark={{ bg: themeColors.dark.bgDark }} />
}
