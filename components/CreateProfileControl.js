import { Button } from 'native-base'
import React, { useCallback } from 'react'
import { useProfileStore } from '../store/profiles'
import { getNewId } from '../util'
import Icon from './Icon'

const CreateProfileControl = ({ setMainData, profileId, sectionKey, mainData, navigation }) => {
  const createProfile = useProfileStore(useCallback((state) => state.create))

  const saveProfile = async () => {
    await createProfile(profileId, sectionKey, mainData)
    navigation.goBack()
  }

  return (
    <Button.Group mt={8} px={4} space={3} justifyContent='center' size='lg'>
      <Button
        onPress={() => setMainData((prevArr) => [...prevArr, { id: getNewId() }])}
        variant='secondary'
        flex={1}
        startIcon={<Icon size='sm' name='add-outline' />}
      >
        Add
      </Button>
      <Button onPress={saveProfile} variant='primary' flex={1}>
        Save
      </Button>
    </Button.Group>
  )
}

export default CreateProfileControl
