import { Box, ScrollView } from 'native-base'
import React, { useEffect, useState } from 'react'
import CreateProfileControl from '../../components/CreateProfileControl'
import FromInput from '../../components/FromInput'
import InputBoxWrapper from '../../components/InputBoxWrapper'
import LevelSlider from '../../components/LevelSlider'
import { LazyScreenLoader, useInput, useLazyScreenLoader, useLevelInput } from '../../composables'
import { themeColors } from '../../constant/globalStyles'

const SECTION_KEY = 'skills'

const Skills = ({ route, navigation }) => {
  const { profileId, skills, editMode } = route.params
  const [inputData, setInputData] = useState(editMode ? skills : [])

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Box flex={1} _light={{ bg: themeColors.light.bgDark }} _dark={{ bg: themeColors.dark.bgDark }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
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
    </Box>
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
    <InputBoxWrapper title='Skill' setMainData={setMainData} id={itemData.id} index={index}>
      <FromInput label='Skill name' input={name} />
      <LevelSlider level={skillLevel} />
    </InputBoxWrapper>
  )
}

export default Skills
