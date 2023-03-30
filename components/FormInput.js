import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { globalColors } from '../constant'

const FormInput = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleBlur = () => setIsFocused(false)
  const handleFocus = () => setIsFocused(true)

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...props}
        style={[styles.input, props.style, isFocused && { borderColor: globalColors.primary }]}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    marginTop: 10,
  },
  input: {
    marginTop: 6,
    borderWidth: 1,
    height: 52,
    borderRadius: 8,
    borderColor: '#aaa',
    paddingHorizontal: 10,
  },
})

export default FormInput
