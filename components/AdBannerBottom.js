import React, { useState } from 'react'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads'
import { Stack } from 'tamagui'
import { UNIT_IDS } from '../constant'

const adUnitId = __DEV__ ? TestIds.BANNER : UNIT_IDS.banner

// LARGE_BANNER
const AdBannerBottom = ({ size = BannerAdSize.ANCHORED_ADAPTIVE_BANNER }) => {
  const [height, setHeight] = useState(null)

  return (
    <Stack height={height} backgroundColor='#fff'>
      <BannerAd
        unitId={adUnitId}
        size={size}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => setHeight(null)}
        onAdFailedToLoad={(_) => setHeight(0)}
      />
    </Stack>
  )
}

export default AdBannerBottom
