import { Box } from 'native-base'
import React, { useState } from 'react'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads'
import { UNIT_IDS } from '../constant'

const adUnitId = __DEV__ ? TestIds.BANNER : UNIT_IDS.banner

const AdBannerBottom = () => {
  const [height, setHeight] = useState(0)

  return (
    <Box height={height} backgroundColor='#fff'>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={() => setHeight(null)}
        onAdFailedToLoad={(_) => setHeight(0)}
      />
    </Box>
  )
}

export default AdBannerBottom
