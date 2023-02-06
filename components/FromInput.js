import React from 'react'
import { Input, TextArea, FormControl } from 'native-base'

const FromInput = ({ label, renderTextArea, placeholder, input, ...props }) => {
  return (
    <FormControl {...props}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      {!renderTextArea && (
        <Input
          {...input}
          rounded={12}
          placeholder={placeholder}
          _focus={{ borderColor: 'purple.400' }}
        />
      )}
      {renderTextArea && (
        <TextArea
          {...input}
          rounded={12}
          totalLines={6}
          _focus={{ borderColor: 'purple.400' }}
        />
      )}
      {/* <FormControl.HelperText borderLeftWidth={1} mt={1} px={1} pl={2} borderColor='muted.400'> */}
      {/*   We'll keep this between us. */}
      {/* </FormControl.HelperText> */}
      {/* <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage> */}
    </FormControl>
  )
}

export default FromInput
