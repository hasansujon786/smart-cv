import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Stack } from 'tamagui'
import CreateProfileControl from '../../components/CreateProfileControl'
import FormInput from '../../components/FormInput'
import InputBoxWrapper from '../../components/InputBoxWrapper'
import { LazyScreenLoader, useInput, useLazyScreenLoader } from '../../composables'

const SECTION_KEY = 'achievements'

const Achievements = ({ route, navigation }) => {
  const { profileId, achievements, editMode } = route.params
  const [inputData, setInputData] = useState(editMode ? achievements : [])

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Stack flex={1} bg='$background'>
      <ScrollView contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 12 }}>
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
    </Stack>
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
      <FormInput label='Achievement name' {...name} />
    </InputBoxWrapper>
  )
}

export default Achievements
