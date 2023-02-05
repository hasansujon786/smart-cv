export const BANNERS_ADS_TYPES = {
  banner: 'banner',
  largeBanner: 'largeBanner',
  fullBanner: 'fullBanner',
  leaderboard: 'leaderboard',
  mediumRectangle: 'mediumRectangle',
  smartBannerPortrait: 'smartBannerPortrait',
  smartBannerLandscape: 'smartBannerLandscape',
}
const testUnitIds = {
  banner: 'ca-app-pub-3940256099942544/6300978111',
  rewarded: 'ca-app-pub-3940256099942544/5224354917',
  interstitial: 'ca-app-pub-3940256099942544/1033173712',
}
// app id: ca-app-pub-6087352659408292~6631001734
export const UNIT_IDS = __DEV__
  ? testUnitIds
  : {
      banner: 'ca-app-pub-6087352659408292/5481566393',
      rewarded: 'ca-app-pub-6087352659408292/5804962031',
      interstitial: 'ca-app-pub-6087352659408292/3757421189',

      // old
      // banner: 'ca-app-pub-6087352659408292/3139830358',
      // rewarded: 'ca-app-pub-6087352659408292/5574422007',
      // interstitial : 'ca-app-pub-6087352659408292/1443605309',
    }
