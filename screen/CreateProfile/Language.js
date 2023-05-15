import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Stack } from 'tamagui'
import CreateProfileControl from '../../components/CreateProfileControl'
import FormInput from '../../components/FormInput'
import InputBoxWrapper from '../../components/InputBoxWrapper'
import LevelSlider from '../../components/LevelSlider'
import { LazyScreenLoader, useInput, useLazyScreenLoader, useLevelInput } from '../../composables'

const SECTION_KEY = 'languages'

const Language = ({ route, navigation }) => {
  const { profileId, editMode } = route.params
  const [inputData, setInputData] = useState(editMode ? route.params[SECTION_KEY] : [])

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Stack flex={1} bg='$background'>
      <ScrollView contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 12 }}>
        {inputData.map((skill, idx) => (
          <InputBox
            setMainData={setInputData}
            editMode={editMode}
            itemData={skill}
            index={idx}
            id={skill.id}
            key={skill.id}
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
  const name = useInput(editMode ? itemData?.name : '')
  const skillLevel = useLevelInput(itemData?.level, editMode)

  useEffect(() => {
    // update mainData on every input change
    const updatedData = {
      ...itemData,
      name: name.value,
      level: skillLevel.value,
    }
    setMainData((prevArr) => {
      prevArr[index] = updatedData
      return prevArr
    })
  }, [name.value, skillLevel.value])

  return (
    <InputBoxWrapper title='Language' setMainData={setMainData} id={itemData.id} index={index}>
      <FormInput label='Language name' {...name} />
      <LevelSlider level={skillLevel} />
    </InputBoxWrapper>
  )
}

export default Language
