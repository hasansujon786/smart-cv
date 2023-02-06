import React from 'react'
import { Box, Image, Text, Center } from 'native-base'
import { TouchableOpacity } from 'react-native'

const TemplateThumbnail = ({ idx, templateId, width, img, onPress, themes, defaultOptions }) => (
  <Box mt={3} style={{ paddingHorizontal: 6 }}>
    <TouchableOpacity
      style={{ flex: 1, borderRadius: 2, overflow: 'hidden' }}
      onPress={() => onPress(templateId, themes, defaultOptions)}
    >
      <Box bg='white' width={width} aspectRatio={5 / 7}>
        <Image resizeMode='cover' flex={1} source={img} alt='template preview' />
        {/* index counter */}
        <Box bottom={0} right={0} position='absolute'>
          <Center minWidth={6} height={6} bg='gray.700' rounded='sm'>
            <Text fontSize='xs' fontWeight='bold' color='white'>
              {__DEV__ && templateId}
              {idx + 1}
            </Text>
          </Center>
        </Box>
      </Box>
    </TouchableOpacity>
  </Box>
)

export default TemplateThumbnail
