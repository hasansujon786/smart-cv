import { createAnimations } from '@tamagui/animations-react-native'
import { createInterFont } from '@tamagui/font-inter'
import { createMedia } from '@tamagui/react-native-media-driver'
import { shorthands } from '@tamagui/shorthands'

import { themes, color, radius, size, space, zIndex } from '@tamagui/themes'
import { createTamagui, createTokens } from 'tamagui'

// gray1: '#161616',
// gray2: '#1C1C1C',
// gray3: '#232323',
// gray4: '#282828',
// gray5: '#2E2E2E',
// gray6: '#343434',
// gray7: '#3E3E3E',
// gray8: '#505050',
// gray9: '#707070',
// gray10: '#7E7E7E',
// gray11: '#A0A0A0',
// gray12: '#EDEDED',
export const appTheme = {
  light: {
    ...themes.light,
    background: 'rgb(242,242,242)', // => default navigator background
    layer1: '#ffffff',
    color: '#000',
    muted1: '#A0A0A0',
    muted2: '#737373',
    primary: '#9966FF',
    primaryDark: '#9333ea',

    iconBg: 'hsl(0, 0%, 70%)',
    btnBg: '#f4f4f5',
    btnBg_pressed: '#e4e4e7',
  },
  dark: {
    ...themes.dark,
    background: '#292524',
    layer1: '#333',
    color: '#fff',
    muted1: '#A0A0A0',
    muted2: '#a3a3a3',
    primary: '#9966FF',
    primaryDark: '#9333ea',

    iconBg: '#52525b', // => gray.600
    btnBg: '#3f3f46',
    btnBg_pressed: '#27272a',
  },
}

const tokens = createTokens({
  size,
  space,
  zIndex,
  color: {
    ...color,
    primary: '#ff0000',
    white: '#fff',
    black: '#000',
  },
  radius,
})

const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
})

const headingFont = createInterFont()
const bodyFont = createInterFont()

const config = createTamagui({
  animations,
  defaultTheme: 'dark',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,

  fonts: {
    heading: headingFont,
    body: bodyFont,
  },

  themes: appTheme,
  tokens,

  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})
// // export type AppConfig = typeof config;
// declare module "tamagui" {

//   // overrides TamaguiCustomConfig so your custom types

//   // work everywhere you import `tamagui`

//   interface TamaguiCustomConfig extends AppConfig {}

// }
export default config
