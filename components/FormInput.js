import { Input, Label, TextArea, YStack } from 'tamagui'

const FormInput = ({ label, renderTextArea = false, ...props }) => {
  return (
    <YStack>
      <Label>{label}</Label>
      {!renderTextArea ? (
        <Input
          height={52}
          borderColor='$inputBorder'
          borderWidth={2}
          bg='transparent'
          focusStyle={{ borderColor: '$primary' }}
          {...props}
        />
      ) : (
        <TextArea
          // height={52}
          borderColor='$inputBorder'
          borderWidth={2}
          bg='transparent'
          focusStyle={{ borderColor: '$primary' }}
          numberOfLines={8}
          {...props}
        />
      )}
    </YStack>
  )
}

export default FormInput
