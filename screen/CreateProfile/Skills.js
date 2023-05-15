import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Stack } from 'tamagui'
import CreateProfileControl from '../../components/CreateProfileControl'
import FormInput from '../../components/FormInput'
import InputBoxWrapper from '../../components/InputBoxWrapper'
import LevelSlider from '../../components/LevelSlider'
import { LazyScreenLoader, useInput, useLazyScreenLoader, useLevelInput } from '../../composables'

const SECTION_KEY = 'skills'

const Skills = ({ route, navigation }) => {
  const { profileId, skills, editMode } = route.params
  const [inputData, setInputData] = useState(editMode ? skills : [])

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
    // INFO: Effectupdate mainData on every input change
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
    <InputBoxWrapper title='Skill' setMainData={setMainData} id={itemData.id} index={index}>
      <FormInput label='Skill name' {...name} />
      <LevelSlider level={skillLevel} />
    </InputBoxWrapper>
  )
}

export default Skills
