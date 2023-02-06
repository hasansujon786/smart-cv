import React, { createContext, useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'

export const NetINfoContext = createContext()
function NetINfoProvider(props) {
  const [isOnline, setOnlineStatus] = useState(0)
  useEffect(() => {
    NetInfo.addEventListener((networkState) => {
      setOnlineStatus(networkState.isConnected && networkState.isInternetReachable)
    })
  }, [])

  return <NetINfoContext.Provider value={{ isOnline }}>{props.children}</NetINfoContext.Provider>
}

export default NetINfoProvider
