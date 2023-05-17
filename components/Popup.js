import React from 'react'
import { AlertDialog, Button, XStack, YStack } from 'tamagui'

import Icon from './Icon'
import { GroustIconButton, PrimaryButton } from './atom'

const DEFAULT_TRIGGER = <Button>open popup</Button>

const Popup = ({ trigger = DEFAULT_TRIGGER, children, onApply, onOpenChange }) => {
  return (
    <AlertDialog native={false} onOpenChange={onOpenChange}>
      <AlertDialog.Trigger asChild>{trigger}</AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key='overlay'
          animation='quick'
          backgroundColor='black'
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <AlertDialog.Content
          bordered
          elevate
          backgroundColor='$layer1'
          key='content'
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <YStack minWidth={280} space>
            <XStack justifyContent='space-between' alignItems='center'>
              <AlertDialog.Title size='$7'>Accept</AlertDialog.Title>
              <AlertDialog.Cancel asChild>
                <GroustIconButton icon={<Icon name='close' size='lg' />} />
              </AlertDialog.Cancel>
            </XStack>

            {children}
            {/* <AlertDialog.Description>By pressing yes, you accept our terms and conditions.</AlertDialog.Description> */}
            <AlertDialog.Action onPress={onApply} asChild mt='$3'>
              <PrimaryButton>Save</PrimaryButton>
            </AlertDialog.Action>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  )
}

export default Popup
