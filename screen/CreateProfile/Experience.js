import React, { useState, useEffect } from 'react'
import { ScrollView, Box } from 'native-base'
import FromInput from '../../components/FromInput'
import InputBoxWrapper from '../../components/InputBoxWrapper'
import CreateProfileControl from '../../components/CreateProfileControl'
import { themeColors } from '../../constant'
import { useInput, useLazyScreenLoader, LazyScreenLoader } from '../../composables'

const SECTION_KEY = 'experiences'

const Experience = ({ route, navigation }) => {
  const { profileId, experiences, editMode } = route.params
  const [inputData, setInputData] = useState(editMode ? experiences : [])

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Box flex={1} _light={{ bg: themeColors.light.bgDark }} _dark={{ bg: themeColors.dark.bgDark }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {inputData.map((experience, idx) => (
          <InputBox
            setMainData={setInputData}
            editMode={editMode}
            itemData={experience}
            index={idx}
            id={experience.id}
            key={experience.id}
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
  const startDate = useInput(editMode ? itemData?.startDate : '')
  const endDate = useInput(editMode ? itemData?.endDate : '')
  const details = useInput(editMode ? itemData?.details : '')

  useEffect(() => {
    // update mainData on every input change
    const updatedData = {
      ...itemData,
      companyName: companyName.value,
      jobTitle: jobTitle.value,
      startDate: startDate.value,
      endDate: endDate.value,
      details: details.value,
    }
    setMainData((prevArr) => {
      prevArr[index] = updatedData
      return prevArr
    })
  }, [companyName.value, jobTitle.value, startDate.value, endDate.value, details.value])

  return (
    <InputBoxWrapper title='Experience' setMainData={setMainData} id={itemData.id} index={index}>
      <FromInput label='Company Name' input={companyName} />
      <FromInput label='Job Title' input={jobTitle} />
      <FromInput label='Start Date' input={startDate} />
      <FromInput label='End Date' input={endDate} />
      <FromInput label='Details' input={details} />
    </InputBoxWrapper>
  )
}

export default Experience
