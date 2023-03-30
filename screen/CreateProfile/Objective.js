import React, { useCallback } from 'react'
import { ScrollView, Box, Button, Stack } from 'native-base'
import FormInput from '../../components/FormInput'
import { themeColors } from '../../constant'
import { useInput, useLazyScreenLoader, LazyScreenLoader } from '../../composables'
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
    <Box flex={1} _light={{ bg: themeColors.light.bg }} _dark={{ bg: themeColors.dark.bgDark }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 12 }}>
        <Stack space={4} mt={4} px={4}>
          <FormInput renderTextArea label='Objective' {...objectiveData} />
        </Stack>

        <Button.Group mt={8} px={4} space={3} justifyContent='center' size='lg'>
          <Button width={200} onPress={saveProfile} variant='primary'>
            Save
          </Button>
        </Button.Group>
      </ScrollView>
    </Box>
  )
}

export default Objective
