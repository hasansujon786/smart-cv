import { useState } from 'react'

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (text) => {
    setValue(text)
  }

  return {
    value,
    onChangeText: handleChange,
  }
}

export default useInput

export const useLevelInput = (initialValue, editMode, defaultVallue = 5) => {
  return useInput(editMode && typeof initialValue === 'number' ? initialValue : defaultVallue)
}
