import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { HStack, Center, Image, useColorModeValue, Box } from 'native-base'
import { themeColors } from '../constant/globalStyles'

const Loaderbar = () => {
  return (
    <HStack
      px={8}
      justifyContent='space-between'
      position='absolute'
      bg='white'
      top={0}
      bottom={0}
      right={0}
      left={0}
      opacity={0.8}
    />
  )
}

const ThemeSelectorBottomBar = ({ onSelect, themes, onShowPicker, isLoading }) => {
  const [selectedTheme, setSelectedTheme] = useState(0)
  const notSelectedBorderColor = useColorModeValue('gray.300', 'gray.600')

  return (
    <Box position='relative'>
      <HStack
        space={2}
        py={2}
        px={8}
        justifyContent='space-between'
        _light={{ bg: themeColors.light.bg }}
        _dark={{ bg: themeColors.dark.bg }}
      >
        {themes.map((theme, idx) => (
          <TouchableOpacity
            key={theme}
            onPress={() => {
              if (isLoading || selectedTheme == idx) return
              onSelect(idx)
              setSelectedTheme(idx)
            }}
          >
            <Center
              p={2}
              width={8}
              height={8}
              bg={theme}
              borderRadius={20}
              borderWidth={1}
              borderColor={notSelectedBorderColor}
            >
              {selectedTheme == idx && <Box opacity={0.5} bg='gray.100' width='100%' height='100%' borderRadius={20} />}
            </Center>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={() => {
            if (isLoading) return
            onShowPicker()
          }}
        >
          <Center width={8} height={8}>
            <Image width='100%' height='100%' source={require('../assets/paint.png')} alt='theme picker icon' />
          </Center>
        </TouchableOpacity>
      </HStack>
      {isLoading && <Loaderbar />}
    </Box>
  )
}

export default ThemeSelectorBottomBar
