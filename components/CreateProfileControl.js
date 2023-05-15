import React, { useCallback } from 'react'
import { StyleSheet } from 'react-native'
import Animated, { FadeInUp } from 'react-native-reanimated'

import { globalColors, globalStyles } from '../constant'
import { useProfileStore } from '../store/profiles'
import { getNewId } from '../util'
import Icon from './Icon'
import { Button, PrimaryButton } from './atom'

const CreateProfileControl = ({ setMainData, profileId, sectionKey, mainData, navigation }) => {
  const createProfile = useProfileStore(useCallback((state) => state.create))

  const saveProfile = async () => {
    await createProfile(profileId, sectionKey, mainData)
    navigation.goBack()
  }

  const onAddPress = () => {
    setMainData((prevArr) => [...prevArr, { id: getNewId() }])
  }

  return (
    <Animated.View key='new-section-controll' entering={FadeInUp} style={styles.wrapper}>
      <Button
        size='$5'
        flex={1}
        borderRadius={globalStyles.borderRadius}
        icon={<Icon size='md' color={globalColors.primary} name='add-outline' />}
        onPressIn={onAddPress}
      >
        Add
      </Button>
      <PrimaryButton size='$5' flex={1} borderRadius={globalStyles.borderRadius} onPress={saveProfile}>
        Save
      </PrimaryButton>
    </Animated.View>
  )
}

export default CreateProfileControl

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    columnGap: 8,
    marginTop: 24,
  },
})
