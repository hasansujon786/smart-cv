import { Adapt, Select, Sheet, Text, YStack, useTheme } from 'tamagui'
import Icon from './Icon'

const SHEET_BG = '$layer1'
const PRESS_HL = 'hsla(0, 0%, 0%, 0.08)'

export function OptionsSelect({
  label = '',
  heading = 'Chose a options',
  options,
  value,
  onValueChange,
  lazy = true,
  ...props
}) {
  const theme = useTheme()
  const muted1 = theme.muted1.val

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
        pressStyle={{ backgroundColor: PRESS_HL }}
        px={16}
        iconAfter={<Icon color={muted1} name='chevron-down-outline' size={32} />}
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
          <Sheet native modal={false} dismissOnSnapToBottom>
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
        // zIndex={200000}
        <Select.Content>
          <Select.Viewport>
            <Select.Group space='$0'>
              <Select.Label fontSize={14} color='$muted1' fontWeight='400' backgroundColor='transparent'>
                {heading}
              </Select.Label>
              {options.map((item, i) => (
                <Select.Item
                  backgroundColor='transparent'
                  pressStyle={{ backgroundColor: PRESS_HL }}
                  index={i}
                  key={item.name}
                  value={item.value}
                >
                  <Select.ItemText>{item.name}</Select.ItemText>
                  <Select.ItemIndicator marginLeft='auto'>
                    <Icon size='md' name='checkmark' />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      )}
    </Select>
  )
}

// <OptionsSelect
//   label='Paper Size'
//   heading='Select Paper Size'
//   options={pageSizes}
//   value={curPageSize.value}
//   onValueChange={updatePageSize}
//   lazy={isPageReady}
// />
