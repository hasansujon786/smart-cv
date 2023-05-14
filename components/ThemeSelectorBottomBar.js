import React, { useState } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Stack, XStack } from 'tamagui'

const ThemeSelectorBottomBar = ({ onSelect, themes, onShowPicker, isLoading }) => {
  const [selectedTheme, setSelectedTheme] = useState(0)

  const handlePress = (idx) => {
    if (isLoading || selectedTheme == idx) return
    onSelect(idx)
    setSelectedTheme(idx)
  }

  return (
    <XStack bg='$layer1' py='$2' px='$4' justifyContent='space-between'>
      {themes.map((theme, idx) => (
        <TouchableOpacity
          key={theme}
          onPress={() => handlePress(idx)}
          disabled={isLoading}
          style={[styles.btn, { backgroundColor: theme }]}
        >
          {selectedTheme == idx && <Stack opacity={0.5} bg='black' width={15} height={15} borderRadius={20} />}
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={onShowPicker} disabled={isLoading} style={[styles.btn, { borderWidth: 0 }]}>
        <Image
          source={require('../assets/paint.png')}
          alt='theme picker icon'
          style={{ width: '100%', height: '100%' }}
        />
      </TouchableOpacity>

      {isLoading && <Stack position='absolute' bg='$layer1' top={0} bottom={0} right={0} left={0} opacity={0.8} />}
    </XStack>
  )
}

export default ThemeSelectorBottomBar

const styles = StyleSheet.create({
  btn: {
    borderRadius: 22,
    height: 32,
    width: 32,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
