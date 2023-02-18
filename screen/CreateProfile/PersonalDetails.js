import React, { useCallback, useState, useRef } from 'react'
import { ScrollView, Center, Box, Stack, Text, Button } from 'native-base'
import FromInput from '../../components/FromInput'
import AvaterWithControl from '../../components/AvaterWithControl'
import { themeColors } from '../../constant'
import { useInput, useLazyScreenLoader, LazyScreenLoader, useImagePicker } from '../../composables'
import { useProfileStore } from '../../store/profiles'
import { encodeImg } from '../../util'

const SECTION_KEY = 'personalDetails'

const PersonalDetails = ({ route, navigation }) => {
  const { profileId, personalDetails, editMode } = route.params
  const createProfile = useProfileStore(useCallback((state) => state.create))

  const [profileImage, setProfileImage] = useState(editMode ? personalDetails?.profileImage : null)
  const profileImageBase64 = useRef(null)
  const name = useInput(editMode ? personalDetails?.name : '')
  const address = useInput(editMode ? personalDetails?.address : '')
  const email = useInput(editMode ? personalDetails?.email : '')
  const phone = useInput(editMode ? personalDetails?.phone : '')
  const subTitle = useInput(editMode ? personalDetails?.subTitle : '')

  const pickImage = useImagePicker(
    (result) => {
      const { uri } = result?.assets[0]
      if (uri !== null) {
        setProfileImage(uri)
        encondProfileImg(uri)
      }
    },
    { aspect: [1, 1] }
  )

  const encondProfileImg = async (imgUri) => {
    let base64 = await encodeImg(imgUri)
    profileImageBase64.current = base64
  }

  const saveProfile = async () => {
    const updatedData = {
      name: name.value,
      address: address.value,
      email: email.value,
      phone: phone.value,
      subTitle: subTitle.value,
      profileImage: profileImage,
      profileImageBase64: profileImageBase64.current,
    }
    await createProfile(profileId, SECTION_KEY, updatedData)
    navigation.goBack()
  }

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Box flex={1} _light={{ bg: themeColors.light.bg }} _dark={{ bg: themeColors.dark.bgDark }}>
      <ScrollView px={4}>
        <Stack space={4} mt={4}>
          {/* <Text bold underline>Default:</Text> */}
          <FromInput label='Name' input={name} />
          <FromInput label='Email' input={email} />
          <FromInput label='Phone No.' input={phone} />
          <FromInput label='Address' input={address} />
          <FromInput label='Job Position/Title (Ex: Teacher)' input={subTitle} />
        </Stack>

        <Stack>
          <Text mt={6}>Photo (Optional)</Text>
          <Center flex={1} space={2} mt={2}>
            <AvaterWithControl uri={profileImage} onPick={pickImage} onRemove={() => setProfileImage(null)} />
          </Center>
        </Stack>

        <Button.Group my={8} px={4} space={3} justifyContent='center' size='lg'>
          <Button width={200} onPress={saveProfile} variant='primary'>
            Save
          </Button>
        </Button.Group>
      </ScrollView>
    </Box>
  )
}

export default PersonalDetails
