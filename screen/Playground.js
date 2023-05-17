import React, { useState } from 'react'
import { Text, YStack } from 'tamagui'

const items = [{ name: 'Apple' }, { name: 'Pear' }, { name: 'Starfruit' }, { name: 'Blueberry' }]

export default function Playground() {
  const [val, setVal] = useState(items[1].name.toLowerCase())

  return (
    <YStack py='$4' px='$0' flex={1} backgroundColor='$layer1'>
      <Text>hello</Text>


      {/* <OptionsSelect label='Image Quality' heading='Chose a fruit' options={items} value={val} onValueChange={setVal} /> */}
      {/* <Popup></Popup> */}
    </YStack>
  )
}
