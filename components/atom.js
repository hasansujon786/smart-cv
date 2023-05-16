import { Button as RawButton, styled, YStack } from 'tamagui'
import { globalStyles } from '../constant'

export const Button = styled(RawButton, {
  borderRadius: globalStyles.borderRadius,
  color: '$primary',
  style: { elevation: 2 },
  backgroundColor: '$btnBg',
  pressStyle: { backgroundColor: '$btnBg_pressed', elevation: 0 },
  variants: {
    isDisabled: {
      true: {
        opacity: 0.7,
      },
    },
  },
})

export const PrimaryButton = styled(RawButton, {
  borderRadius: globalStyles.borderRadius,
  color: 'white',
  backgroundColor: '$primary',
  style: { elevation: 2 },
  pressStyle: { backgroundColor: '$primaryDark', elevation: 0 },
  variants: {
    isDisabled: {
      true: {
        opacity: 0.7,
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
