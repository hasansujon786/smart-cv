import React, { useEffect, useState } from 'react'
import { ScrollView, Box } from 'native-base'
import FormInput from '../../components/FormInput'
import InputBoxWrapper from '../../components/InputBoxWrapper'
import CreateProfileControl from '../../components/CreateProfileControl'
import { themeColors } from '../../constant'
import { useInput, useLazyScreenLoader, LazyScreenLoader } from '../../composables'

const SECTION_KEY = 'educations'

const Education = ({ route, navigation }) => {
  const { profileId, educations, editMode } = route.params
  const [inputData, setInputData] = useState(editMode ? educations : [])

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Box flex={1} _light={{ bg: themeColors.light.bgDark }} _dark={{ bg: themeColors.dark.bgDark }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 12 }}>
        {inputData.map((edu, idx) => (
          <InputBox
            setMainData={setInputData}
            editMode={editMode}
            itemData={edu}
            index={idx}
            id={edu.id}
            key={edu.id}
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

export default Education

const InputBox = ({ editMode, itemData, index, setMainData }) => {
  const courseName = useInput(editMode ? itemData?.courseOrDegree : '')
  const schoolName = useInput(editMode ? itemData?.schoolOrUniversity : '')
  const grade = useInput(editMode ? itemData?.grade : '')
  const year = useInput(editMode ? itemData?.year : '')

  useEffect(() => {
    // update mainData on every input change
    const updatedData = {
      ...itemData,
      courseOrDegree: courseName.value,
      schoolOrUniversity: schoolName.value,
      grade: grade.value,
      year: year.value,
    }
    setMainData((prevArr) => {
      prevArr[index] = updatedData
      return prevArr
    })
  }, [courseName.value, schoolName.value, grade.value, year.value])

  return (
    <InputBoxWrapper title='Education' setMainData={setMainData} id={itemData.id} index={index}>
      <FormInput label='Course / Degree' {...courseName} />
      <FormInput label='School / University' {...grade} />
      <FormInput label='Grade / Score' {...year} />
      <FormInput label='Year' {...schoolName} />
    </InputBoxWrapper>
  )
}
