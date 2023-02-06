import React from 'react'
import { Box, Heading } from 'native-base';

const SectionTitle = ({ children, ...props }) => {
  return (
    <Box mx={5} mt={4} mb={2} {...props}>
      <Heading fontWeight='normal' color='muted.400' size='sm'>{children}</Heading>
    </Box>
  )
}

export default SectionTitle
