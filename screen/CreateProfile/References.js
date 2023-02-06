import React, { useState, useEffect } from 'react'
import { ScrollView, Box } from 'native-base'
import FromInput from '../../components/FromInput'
import InputBoxWrapper from '../../components/InputBoxWrapper'
import CreateProfileControl from '../../components/CreateProfileControl'
import { themeColors } from '../../constant/globalStyles'
import { useInput, useLazyScreenLoader, LazyScreenLoader } from '../../composables'

const SECTION_KEY = 'references'

const References = ({ route, navigation }) => {
  const { profileId, references, editMode } = route.params
  const [inputData, setInputData] = useState(editMode ? references : [])

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Box flex={1} _light={{ bg: themeColors.light.bgDark }} _dark={{ bg: themeColors.dark.bgDark }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
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
    </Box>
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
      <FromInput label='Company Name' input={companyName} />
      <FromInput label='Job Title' input={jobTitle} />
      <FromInput label='Phone' input={phone} />
      <FromInput label='Email' input={email} />
    </InputBoxWrapper>
  )
}

export default References
