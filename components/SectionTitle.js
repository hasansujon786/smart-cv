import React from 'react'
import { Paragraph, Stack } from 'tamagui'

const SectionTitle = ({ children, ...props }) => {
  return (
    <Stack mt='$4' mx='$2' {...props}>
      <Paragraph color='$muted1'>{children}</Paragraph>
    </Stack>
  )
}

export default SectionTitle
