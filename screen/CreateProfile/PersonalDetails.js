import React, { useCallback, useRef, useState } from 'react'
import { ScrollView } from 'react-native'
import { Paragraph, Text, YStack } from 'tamagui'
import AvaterWithControl from '../../components/AvaterWithControl'
import FormInput from '../../components/FormInput'
import { Center, PrimaryButton } from '../../components/atom'
import { LazyScreenLoader, useImagePicker, useInput, useLazyScreenLoader } from '../../composables'
import { globalStyles } from '../../constant'
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
    <YStack flex={1} bg='$layer1'>
      <ScrollView style={{ paddingHorizontal: 16 }}>
        <YStack space='$3' mt='$2'>
          <FormInput label='Name' {...name} />
          <FormInput label='Email' {...email} />
          <FormInput label='Phone No.' {...phone} />
          <FormInput label='Address' {...address} />
          <FormInput label='Job Position/Title (Ex: Teacher)' {...subTitle} />

          <Paragraph size='sm' mt='$2'>
            Photo (Optional)
          </Paragraph>
          <Center>
            <AvaterWithControl uri={profileImage} onPick={pickImage} onRemove={() => setProfileImage(null)} />
          </Center>
        </YStack>

        <Center my='$6'>
          <PrimaryButton onPress={saveProfile} size='$5' width={200} borderRadius={globalStyles.borderRadiusMd}>
            Save
          </PrimaryButton>
        </Center>
      </ScrollView>
    </YStack>
  )
}

export default PersonalDetails
