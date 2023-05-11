import { Button as Btn, styled, YStack } from 'tamagui'

export const Button = styled(Btn, {
  borderRadius: 16,
  color: '$primary',
  style: { elevation: 2 },
  pressStyle: { backgroundColor: '$color7', elevation: 0 },
})

export const PrimaryButton = styled(Btn, {
  borderRadius: 16,
  color: 'white',
  backgroundColor: '$primary',
  style: { elevation: 2 },
  pressStyle: { backgroundColor: '$primaryDark', elevation: 0 },
})

export const Center = styled(YStack, {
  justifyContent: 'center',
  alignItems: 'center',
})
