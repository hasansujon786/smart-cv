import React, { useState, useEffect } from 'react'
import { ScrollView, Box } from 'native-base'
import FormInput from '../../components/FormInput'
import InputBoxWrapper from '../../components/InputBoxWrapper'
import CreateProfileControl from '../../components/CreateProfileControl'
import { themeColors } from '../../constant/globalStyles'
import { useInput, useLazyScreenLoader, LazyScreenLoader } from '../../composables'

const SECTION_KEY = 'projects'

const Projects = ({ route, navigation }) => {
  const { profileId, projects, editMode } = route.params
  const [inputData, setInputData] = useState(editMode ? projects : [])

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Box flex={1} _light={{ bg: themeColors.light.bgDark }} _dark={{ bg: themeColors.dark.bgDark }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 12 }}>
        {inputData.map((project, idx) => (
          <InputBox
            setMainData={setInputData}
            editMode={editMode}
            itemData={project}
            index={idx}
            id={project.id}
            key={project.id}
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
  const title = useInput(editMode ? itemData?.title : '')
  const details = useInput(editMode ? itemData?.details : '')

  useEffect(() => {
    // update mainData on every input change
    const updatedData = {
      ...itemData,
      title: title.value,
      details: details.value,
    }
    setMainData((prevArr) => {
      prevArr[index] = updatedData
      return prevArr
    })
  }, [title.value, details.value])

  return (
    <InputBoxWrapper title='Project' setMainData={setMainData} id={itemData.id} index={index}>
      <FormInput label='Title' {...title} />
      <FormInput label='Details' {...details} />
    </InputBoxWrapper>
  )
}

export default Projects
