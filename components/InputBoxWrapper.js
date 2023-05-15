import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { FadeInUp, Layout, ZoomOut } from 'react-native-reanimated'
import { Button, YStack } from 'tamagui'
import { globalColors, globalStyles } from '../constant'
import Icon from './Icon'

const InputBoxWrapper = ({ children, title, id, index, setMainData }) => {
  const deleteItem = () => setMainData((prevArr) => prevArr.filter((item) => item.id != id))

  return (
    <Animated.View entering={FadeInUp} exiting={ZoomOut} layout={Layout.delay(100)} style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {title} {index + 1}
        </Text>
        <Button
          circular
          onPress={deleteItem}
          backgroundColor='transparent'
          pressStyle={{ backgroundColor: '$red9' }}
          icon={<Icon size='md' color='white' name='trash-outline' />}
        />
      </View>

      <YStack rowGap='$2' bg='$layer1' style={styles.container}>
        {children}
      </YStack>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    borderRadius: globalStyles.borderRadius,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: globalColors.primary,
    paddingLeft: 12,
    paddingRight: 4,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
  },
  container: {
    paddingHorizontal: 14,
    paddingBottom: 22,
  },
})

export default InputBoxWrapper
