import { IconButton } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { FadeInUp, FadeOutDown } from 'react-native-reanimated'
import { globalColors, globalStyles } from '../constant'
import Icon from './Icon'

const InputBoxWrapper = ({ children, title, id, index, setMainData }) => {
  const deleteItem = () => setMainData((prevArr) => prevArr.filter((item) => item.id != id))

  return (
    <Animated.View entering={FadeInUp} exiting={FadeOutDown} style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {title} {index + 1}
        </Text>
        <IconButton
          onPress={deleteItem}
          size='md'
          colorScheme='red'
          icon={<Icon color='white' size={5} name='trash-outline' />}
        />
      </View>

      <View style={styles.container}>{children}</View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
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
    paddingVertical: 16,
  },
  input: {
    borderWidth: 1,
    height: 52,
    borderRadius: 8,
    borderColor: '#aaa',
    paddingHorizontal: 10,
  },
})

export default InputBoxWrapper
