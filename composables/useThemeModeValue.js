import { useColorScheme } from 'react-native'

export function useThemeModeValue(lightValue, darkValue) {
  const colorScheme = useColorScheme()
  return colorScheme === 'light' ? lightValue : darkValue
}
