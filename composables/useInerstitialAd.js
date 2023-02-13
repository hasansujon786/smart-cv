import { useContext, useEffect, useState } from 'react'
import { AdEventType, InterstitialAd, TestIds } from 'react-native-google-mobile-ads'
import { UNIT_IDS } from '../constant'
import { NetINfoContext } from '../features'
import { devlog } from '../util'

// const APP_ALLOWED_TO_SHOW_ADD = !__DEV__

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : UNIT_IDS.interstitial
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
})

const useInterstitialAd = (intervel = 1000 * 60) => {
  const netinfo = useContext(NetINfoContext)
  const [shouldShowAdd, setShouldShowAdd] = useState(true)

  // initEvents
  useEffect(() => {
    const eventOpened = interstitial.addAdEventListener(AdEventType.OPENED, () => {
      console.log('OPENED')
      setTimeout(() => downloadAd('from open'), 3000)
    })

    downloadAd('from init') // load interstitial straight away

    // only run this on dev
    const eventLoaded = __DEV__
      ? interstitial.addAdEventListener(AdEventType.LOADED, () => console.log('LOADED'))
      : null
    return () => {
      // Unsubscribe from events on unmount
      eventOpened()
      eventLoaded && eventLoaded()
    }
  }, [])

  useEffect(() => {
    console.log('netinfo.isOnline changed', netinfo.isOnline)
    downloadAd('from netinfo')
  }, [netinfo.isOnline, shouldShowAdd])

  const downloadAd = (logMsg) => {
    devlog(logMsg)
    try {
      if (!isAdReady()) {
        devlog('Downloading interstitial')
        interstitial.load()
      } else {
        devlog('Already interstitial downloaded')
      }
    } catch (error) {
      devlog('ERROR on interstitial downloadAd', error)
    }
  }

  const showAdIfLoaded = () => {
    let adLoaded = interstitial.loaded
    if (!adLoaded) {
      downloadAd('showAdIfLoaded')
      return false
    }
    interstitial.show()
    return true
  }

  const isAdReady = () => interstitial.loaded
  const isReadyToShow = () => shouldShowAdd

  return { showAdIfLoaded, isAdReady, isReadyToShow, downloadAd }
}

export default useInterstitialAd
