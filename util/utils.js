import { useCallback } from 'react'
import { useLogStore } from '../store/log'

export const devlog = (...args) => {
  __DEV__ && console.log(...args)
}

export const useDevLog = () => {
  const updateLog = useLogStore(useCallback((state) => state.updateLog))

  const devlog = (...args) => {
    updateLog(args.join(' '))
    __DEV__ && console.log(...args)
  }

  return { devlog }
}
