import React, { createContext } from 'react'
import { useRewardedAd } from '../composables'

export const RewardedAdContext = createContext()

function RewardedAdProvider(props) {
  const rewartedAd = useRewardedAd()

  return <RewardedAdContext.Provider value={rewartedAd}>{props.children}</RewardedAdContext.Provider>
}

export default RewardedAdProvider
