import { useContext, useEffect, useState } from 'react'
import { AdMobInterstitial } from 'expo-ads-admob'
import { UNIT_IDS } from '../constant'
import { NetINfoContext } from '../features'
import { devlog } from '../util'

const APP_ALLOWED_TO_SHOW_ADD = !__DEV__

const useInterstitialAd = (intervel = 1000 * 60) => {
  const netinfo = useContext(NetINfoContext)
  const [shouldShowAdd, setShouldShowAdd] = useState(true)

  // initEvents
  useEffect(() => {
    devlog('----------- setupInterstitalAdEvents')

    AdMobInterstitial.addEventListener('interstitialDidClose', () => {
      devlog('interstitialDidClose')
      setShouldShowAdd(false)
      setTimeout(() => {
        devlog('-------- Add can show now')
        setShouldShowAdd(true)
      }, intervel)
    })

    // AdMobInterstitial.addEventListener('rewardedVideoDidPresent', () => devlog('rewardedVideoDidPresent'))
    AdMobInterstitial.addEventListener('interstitialDidLoad', () => devlog('interstitialDidLoad'))
    return () => AdMobInterstitial.removeAllListeners()
  }, [])

  useEffect(() => {
    downloadAd()
  }, [netinfo.isOnline, shouldShowAdd])

  const downloadAd = async () => {
    const ready = await AdMobInterstitial.getIsReadyAsync()
    try {
      if (!ready) {
        devlog('----------- downloading interstitial')
        await AdMobInterstitial.setAdUnitID(UNIT_IDS.interstitial)
        await AdMobInterstitial.requestAdAsync()
      } else {
        devlog('----------- already interstitial downloaded')
      }
    } catch (error) {
      devlog('error on interstitial loadAd', error)
    }
  }

  const showAdIfLoaded = async () => {
    const ready = await AdMobInterstitial.getIsReadyAsync()
    if (ready) {
      await AdMobInterstitial.showAdAsync()
      return true
    }
    return false
  }

  const isAdReady = async () => {
    if (!APP_ALLOWED_TO_SHOW_ADD) return false
    const ready = await AdMobInterstitial.getIsReadyAsync()
    if (!ready) downloadAd()
    return ready
  }
  const isReadyToShow = () => shouldShowAdd

  return { showAdIfLoaded, isAdReady, isReadyToShow, downloadAd, AdMobInterstitial }
}

export default useInterstitialAd
