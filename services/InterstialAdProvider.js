import React, { createContext } from 'react'
import { useInterstitialAd } from '../composables'

export const InterstitialAdContext = createContext()

function InterstitialAdProvider(props) {
  const interstitialAd = useInterstitialAd()

  return <InterstitialAdContext.Provider value={interstitialAd}>{props.children}</InterstitialAdContext.Provider>
}

export default InterstitialAdProvider
