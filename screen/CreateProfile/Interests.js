import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Stack } from 'tamagui'
import CreateProfileControl from '../../components/CreateProfileControl'
import FormInput from '../../components/FormInput'
import InputBoxWrapper from '../../components/InputBoxWrapper'
import { LazyScreenLoader, useInput, useLazyScreenLoader } from '../../composables'

const SECTION_KEY = 'interests'

const Interests = ({ route, navigation }) => {
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

  useEffect(() => {
    // update mainData on every input change
    const updatedData = {
      ...itemData,
      name: name.value,
    }
    setMainData((prevArr) => {
      prevArr[index] = updatedData
      return prevArr
    })
  }, [name.value])

  return (
    <InputBoxWrapper title='Interest' setMainData={setMainData} id={itemData.id} index={index}>
      <FormInput label='Interest name' {...name} />
    </InputBoxWrapper>
  )
}

export default Interests
