import React, { useCallback } from 'react'
import { ScrollView, Box, Button, Stack } from 'native-base'
import FormInput from '../../components/FormInput'
import { useProfileStore } from '../../store/profiles'
import { useInput, useLazyScreenLoader, LazyScreenLoader } from '../../composables'
import { themeColors } from '../../constant'

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
    <Box flex={1} _light={{ bg: themeColors.light.bg }} _dark={{ bg: themeColors.dark.bgDark }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 12 }}>
        <Box px={4} mt={4}>
          <FormInput renderTextArea label='Additional Info' {...inputData} />
        </Box>

        <Button.Group mt={8} px={4} space={3} justifyContent='center' size='lg'>
          <Button width={200} onPress={saveProfile} variant='primary'>
            Save
          </Button>
        </Button.Group>
      </ScrollView>
    </Box>
  )
}

export default AdditionalInformation
