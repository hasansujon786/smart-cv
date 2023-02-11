import AsyncStorage from '@react-native-async-storage/async-storage'
import { extendTheme } from 'native-base'
import { globalColors, globalStyles } from './constant/globalStyles'
// import { devlog } from './util'

export const theme = extendTheme({
  useSystemColorMode: false,
  initialColorMode: 'light',
  colors: {
    unset: undefined,
    'deep-purple': globalColors.primary,
  },
  components: {
    Input: {
      baseStyle: {
        _focus: {
          borderColor: 'deep-purple',
          _android: {
            bg: 'purple.500:alpha.5',
            selectionColor: 'unset',
          },
        },
      },
    },
    Button: {
      baseStyle: {
        rounded: 'full',
      },
      variants: {
        primary: () => {
          return {
            bg: globalColors.primary,
            rounded: globalStyles.borderRadius,
            shadow: 1,
            _text: { color: 'white' },
            _pressed: {
              bg: globalColors.primaryDark,
              shadow: 0,
            },
          }
        },
        secondary: () => {
          return {
            bg: 'gray.100',
            shadow: 1,
            rounded: globalStyles.borderRadius,
            _text: { color: globalColors.primary },
            _pressed: {
              bg: 'gray.200',
              shadow: 0,
            },
            _dark: {
              bg: 'gray.700',
              _pressed: { bg: 'gray.800' },
            },
          }
        },
      },
    },
  },
})

export const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
}

export const colorModeManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem('@color-mode')
      return val === 'dark' ? 'dark' : 'light'
    } catch (e) {
      return 'light'
    }
  },
  set: async (value) => {
    try {
      await AsyncStorage.setItem('@color-mode', value)
    } catch (e) {
      // devlog(e)
    }
  },
}
