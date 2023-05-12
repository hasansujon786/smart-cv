import { Button as RawButton, styled, YStack } from 'tamagui'

export const Button = styled(RawButton, {
  borderRadius: 16,
  color: '$primary',
  style: { elevation: 2 },
  pressStyle: { backgroundColor: '$color7', elevation: 0 },
  variants: {
    isDisabled: {
      true: {
        opacity: 0.7,
      },
    },
  },
})

export const PrimaryButton = styled(RawButton, {
  borderRadius: 16,
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
