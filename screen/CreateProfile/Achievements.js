import React, { useState, useEffect } from 'react'
import { ScrollView, Box } from 'native-base'
import FromInput from '../../components/FromInput'
import InputBoxWrapper from '../../components/InputBoxWrapper'
import CreateProfileControl from '../../components/CreateProfileControl'
import { useInput, useLazyScreenLoader, LazyScreenLoader } from '../../composables'
import { themeColors } from '../../constant'

const SECTION_KEY = 'achievements'

const Achievements = ({ route, navigation }) => {
  const { profileId, achievements, editMode } = route.params
  const [inputData, setInputData] = useState(editMode ? achievements : [])

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Box flex={1} _light={{ bg: themeColors.light.bgDark }} _dark={{ bg: themeColors.dark.bgDark }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {inputData.map((achievement, idx) => (
          <InputBox
            setMainData={setInputData}
            editMode={editMode}
            itemData={achievement}
            index={idx}
            id={achievement.id}
            key={achievement.id}
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

  useEffect(() => {
    // update mainData on every input change
    const updatedData = {
      ...itemData,
      name: name.value,
      lavel: 0,
    }
    setMainData((prevArr) => {
      prevArr[index] = updatedData
      return prevArr
    })
  }, [name.value])

  return (
    <InputBoxWrapper title='Achievement' setMainData={setMainData} id={itemData.id} index={index}>
      <FromInput label='Achievement name' input={name} />
    </InputBoxWrapper>
  )
}

export default Achievements
