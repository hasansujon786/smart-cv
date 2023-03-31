import { Button } from 'native-base'
import React, { useCallback } from 'react'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { useProfileStore } from '../store/profiles'
import { getNewId } from '../util'
import Icon from './Icon'

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
    <Animated.View key='new-section-controll' entering={FadeInUp} >
      <Button.Group mb={20} mt={8} space={3} justifyContent='center' size='lg'>
        <Button
          onPressIn={onAddPress}
          variant='secondary'
          flex={1}
          startIcon={<Icon color='deep-purple' name='add-outline' />}
        >
          Add
        </Button>
        <Button onPress={saveProfile} variant='primary' flex={1}>
          Save
        </Button>
      </Button.Group>
    </Animated.View>
  )
}

export default CreateProfileControl
