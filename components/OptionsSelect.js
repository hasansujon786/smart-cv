import { Adapt, Select, Sheet, Text, YStack } from 'tamagui'
import Icon from './Icon'

const SHEET_BG = '$layer1'
const PRESS_BG = 'hsla(0, 0%, 0%, 0.08)'

export function OptionsSelect({
  label = '',
  heading = 'Chose a options',
  options,
  value,
  onValueChange,
  lazy = true,
  ...props
}) {
  return (
    <Select size='$6' id='food' value={value} onValueChange={onValueChange} {...props}>
      {/* <XStack justifyContent='space-between' alignItems='center'> */}
      {/*   <Heading>{label}</Heading> */}
      {/*   <Select.Trigger borderWidth={1} width={180} iconAfter={<Icon name='chevron-down-outline' size={32} />}> */}
      {/*     <Select.Value placeholder='Something' /> */}
      {/*   </Select.Trigger> */}
      {/* </XStack> */}
      <Select.Trigger
        borderWidth={0}
        borderRadius={0}
        pressStyle={{ backgroundColor: PRESS_BG }}
        px={16}
        iconAfter={<Icon name='chevron-down-outline' size={32} />}
      >
        <YStack>
          <Text fontSize={16} color='$color'>
            {label}
          </Text>
          <Text fontSize={14} textTransform='capitalize' color='$muted1'>
            {value}
          </Text>
        </YStack>
      </Select.Trigger>

      {lazy && (
        <Adapt when='sm' platform='touch'>
          <Sheet native modal={true} dismissOnSnapToBottom>
            <Sheet.Frame backgroundColor={SHEET_BG}>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay />
          </Sheet>
        </Adapt>
      )}

      {lazy && (
        <Select.Content zIndex={200000}>
          <Select.Viewport>
            <Select.Group space='$0'>
              <Select.Label backgroundColor='transparent'>{heading}</Select.Label>
              {options.map((item, i) => {
                return (
                  <Select.Item
                    backgroundColor='transparent'
                    pressStyle={{ backgroundColor: PRESS_BG }}
                    index={i}
                    key={item.name}
                    value={item.value}
                  >
                    <Select.ItemText>{item.name}</Select.ItemText>
                    <Select.ItemIndicator marginLeft='auto'>
                      <Icon size='md' name='checkmark' />
                    </Select.ItemIndicator>
                  </Select.Item>
                )
              })}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      )}
    </Select>
  )
}
