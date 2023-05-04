import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

export const useLazyScreenLoader = () => {
  const [isPageReady, setIsPageReady] = useState(false)

  // INFO: <07.02.23> try to get someting better than this hack
  useEffect(() => {
    setTimeout(() => {
      setIsPageReady(true)
    }, 0)
  }, [])

  return { isPageReady }
}

export const LazyScreenLoader = () => <View />
