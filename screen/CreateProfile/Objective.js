import React, { useCallback } from 'react'
import { ScrollView } from 'react-native'
import { YStack } from 'tamagui'
import FormInput from '../../components/FormInput'
import { Center, PrimaryButton } from '../../components/atom'
import { LazyScreenLoader, useInput, useLazyScreenLoader } from '../../composables'
import { globalStyles } from '../../constant'
import { useProfileStore } from '../../store/profiles'

const SECTION_KEY = 'objective'

const Objective = ({ route, navigation }) => {
  const { profileId, objective, editMode } = route.params
  const createProfile = useProfileStore(useCallback((state) => state.create))

  const objectiveData = useInput(editMode ? objective : '')

  const saveProfile = async () => {
    await createProfile(profileId, SECTION_KEY, objectiveData.value)
    navigation.goBack()
  }

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <YStack flex={1} bg='$background'>
      <ScrollView contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 12 }}>
        <FormInput renderTextArea label='Objective' {...objectiveData} />

        <Center mt='$6'>
          <PrimaryButton onPress={saveProfile} size='$5' width={200} borderRadius={globalStyles.borderRadius}>
            Save
          </PrimaryButton>
        </Center>
      </ScrollView>
    </YStack>
  )
}

export default Objective
