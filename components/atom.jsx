import { Button as RawButton, styled, YStack } from 'tamagui'
import { globalStyles } from '../constant'

export const Button = styled(RawButton, {
  borderRadius: globalStyles.borderRadius,
  color: '$primary',
  backgroundColor: '$btnBg',
  borderWidth: 0,
  elevationAndroid: 2,
  maxHeight: 56,
  pressStyle: { backgroundColor: '$btnBg_pressed', elevationAndroid: 0 },
  variants: {
    isDisabled: {
      true: {
        opacity: 0.7,
      },
    },
    ghoust: {
      true: {
        backgroundColor: 'transparent',
        elevationAndroid: 0,
      },
    },
  },
})

export const PrimaryButton = styled(RawButton, {
  borderRadius: globalStyles.borderRadius,
  color: 'white',
  backgroundColor: '$primary',
  borderWidth: 0,
  elevationAndroid: 2,
  maxHeight: 56,
  pressStyle: { backgroundColor: '$primaryDark', elevationAndroid: 0 },
  variants: {
    isDisabled: {
      true: {
        backgroundColor: '$primaryLight',
      },
    },
  },
})

export const Center = styled(YStack, {
  justifyContent: 'center',
  alignItems: 'center',
})

export const GroustIconButton = styled(RawButton, {
  size: '$4',
  circular: true,
  backgroundColor: 'transparent',
  pressStyle: { backgroundColor: 'hsla(0, 0%, 0%, 0.15)' },
})
