import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Stack } from 'tamagui'
import CreateProfileControl from '../../components/CreateProfileControl'
import FormInput from '../../components/FormInput'
import InputBoxWrapper from '../../components/InputBoxWrapper'
import { LazyScreenLoader, useInput, useLazyScreenLoader } from '../../composables'

const SECTION_KEY = 'references'

const References = ({ route, navigation }) => {
  const { profileId, references, editMode } = route.params
  const [inputData, setInputData] = useState(editMode ? references : [])

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Stack flex={1} bg='$background'>
      <ScrollView contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 12 }}>
        {inputData.map((reference, idx) => (
          <InputBox
            setMainData={setInputData}
            editMode={editMode}
            itemData={reference}
            index={idx}
            id={reference.id}
            key={reference.id}
          />
        ))}

        <CreateProfileControl
          navigation={navigation}
          sectionKey={SECTION_KEY}
          profileId={profileId}
          setMainData={setInputData}
          mainData={inputData}
        />
      </ScrollView>
    </Stack>
  )
}

const InputBox = ({ editMode, itemData, index, setMainData }) => {
  const companyName = useInput(editMode ? itemData?.companyName : '')
  const jobTitle = useInput(editMode ? itemData?.jobTitle : '')
  const phone = useInput(editMode ? itemData?.phone : '')
  const email = useInput(editMode ? itemData?.email : '')

  useEffect(() => {
    // update mainData on every input change
    const updatedData = {
      ...itemData,
      companyName: companyName.value,
      jobTitle: jobTitle.value,
      phone: phone.value,
      email: email.value,
    }
    setMainData((prevArr) => {
      prevArr[index] = updatedData
      return prevArr
    })
  }, [companyName.value, jobTitle.value, phone.value, email.value])

  return (
    <InputBoxWrapper title='References' setMainData={setMainData} id={itemData.id} index={index}>
      <FormInput label='Company Name' {...companyName} />
      <FormInput label='Job Title' {...jobTitle} />
      <FormInput label='Phone' {...phone} />
      <FormInput label='Email' {...email} />
    </InputBoxWrapper>
  )
}

export default References
