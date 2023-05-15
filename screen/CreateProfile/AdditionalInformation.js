import React, { useCallback } from 'react'
import { ScrollView } from 'react-native'
import { Stack } from 'tamagui'
import FormInput from '../../components/FormInput'
import { Center, PrimaryButton } from '../../components/atom'
import { LazyScreenLoader, useInput, useLazyScreenLoader } from '../../composables'
import { globalStyles } from '../../constant'
import { useProfileStore } from '../../store/profiles'

const SECTION_KEY = 'additionalInformation'

const AdditionalInformation = ({ route, navigation }) => {
  const { profileId, editMode } = route.params
  const createProfile = useProfileStore(useCallback((state) => state.create))

  const inputData = useInput(editMode ? route.params[SECTION_KEY] : '')

  const saveProfile = async () => {
    await createProfile(profileId, SECTION_KEY, inputData.value)
    navigation.goBack()
  }

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Stack flex={1} bg='$background'>
      <ScrollView contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 12 }}>
        <FormInput renderTextArea label='Additional Info' {...inputData} />

        <Center mt='$6'>
          <PrimaryButton onPress={saveProfile} size='$5' width={200} borderRadius={globalStyles.borderRadius}>
            Save
          </PrimaryButton>
        </Center>
      </ScrollView>
    </Stack>
  )
}

export default AdditionalInformation
