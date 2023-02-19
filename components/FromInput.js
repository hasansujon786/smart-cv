import { FormControl, Input, TextArea } from 'native-base'
import React from 'react'

// TODO: <11.02.23> add next button
const FromInput = ({ label, renderTextArea, placeholder, input, ...props }) => {
  const InputComp = renderTextArea ? TextArea : Input
  return (
    <FormControl minHeight={renderTextArea ? 300 : 20} {...props}>
      {label && <FormControl.Label>{label}</FormControl.Label>}

      <InputComp {...input} rounded={12} placeholder={placeholder} flex={1} py={3} lineHeight='md' fontSize='sm' />
      {/* <FormControl.HelperText borderLeftWidth={1} mt={1} px={1} pl={2} borderColor='muted.400'> */}
      {/*   We'll keep this between us. */}
      {/* </FormControl.HelperText> */}
      {/* <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage> */}
    </FormControl>
  )
}

export default FromInput
