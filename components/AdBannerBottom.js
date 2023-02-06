import React, { useState } from 'react'
import { AdMobBanner } from 'expo-ads-admob'
import { Box } from 'native-base'
import { BANNERS_ADS_TYPES, UNIT_IDS } from '../constant'

const AdBannerBottom = () => {
  const [height, setHeight] = useState(0)

  return (
    <Box height={height} backgroundColor='#fff'>
      <AdMobBanner
        servePersonalizedAds
        bannerSize={BANNERS_ADS_TYPES.smartBannerPortrait}
        adUnitID={UNIT_IDS.banner}
        onAdViewDidReceiveAd={() => setHeight(null)}
        onDidFailToReceiveAdWithError={(_) => setHeight(0)}
      />
    </Box>
  )
}

export default AdBannerBottom
