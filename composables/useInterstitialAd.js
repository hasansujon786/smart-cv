import { useContext, useEffect, useState } from 'react'
import { AdEventType, InterstitialAd, TestIds } from 'react-native-google-mobile-ads'
import { UNIT_IDS } from '../constant'
import { NetINfoContext } from '../features'
import { useDevLog } from '../util'

const APP_ALLOWED_TO_SHOW_ADD = !__DEV__

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : UNIT_IDS.interstitial
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
})

const useInterstitialAd = (adIntervel = 1000 * 60 * 3) => {
  const { devlog } = useDevLog()
  const netinfo = useContext(NetINfoContext)
  // TODO: <14.02.23> may timestamp should be a good way
  const [allowedToShowAd, setAllowedToShowAd] = useState(true)

  // initEvents
  useEffect(() => {
    const eventClosed = interstitial.addAdEventListener(AdEventType.CLOSED, () => {
      devlog('interstitial CLOSED ')
      setTimeout(() => {
        devlog('========= App is now allowed to show ad =========')
        setAllowedToShowAd(true)
        downloadAd('from adIntervel')
      }, adIntervel)
    })

    // load interstitial straight away
    downloadAd('from init')

    // only run this on dev
    const eventLoaded = __DEV__
      ? interstitial.addAdEventListener(AdEventType.LOADED, () => devlog('interstitial LOADED ' + isAllowedToShow()))
      : null
    return () => {
      // Unsubscribe from events on unmount
      eventClosed()
      eventLoaded && eventLoaded()
    }
  }, [])

  useEffect(() => {
    downloadAd('from netinfo')
  }, [netinfo.isOnline])

  const downloadAd = (logMsg) => {
    devlog('downloadAd ran ' + logMsg)
    try {
      if (!isAdReady()) {
        devlog('Downloading interstitial')
        interstitial.load()
      } else {
        devlog('Already interstitial downloaded')
      }
    } catch (error) {
      devlog('ERROR on interstitial downloadAd')
    }
  }

  const showAdIfLoaded = () => {
    if (!interstitial.loaded) {
      downloadAd('from showAdIfLoaded')
      return false
    }

    if (!isAllowedToShow()) {
      devlog('You have to wail little longer to see next ad')
      return false
    }

    interstitial.show()
    setAllowedToShowAd(false)
    return true
  }

  const isAdReady = () => interstitial.loaded
  const isAllowedToShow = () => allowedToShowAd && APP_ALLOWED_TO_SHOW_ADD

  return { showAdIfLoaded, isAdReady, downloadAd, isAllowedToShow }
}

export default useInterstitialAd
