import React from 'react'
import { useColorModeValue } from 'native-base'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SelectTemplate from '../screen/SelectTemplate'
import { globalColors, themeColors } from '../constant/globalStyles'
const Tab = createMaterialTopTabNavigator()

import { templateList } from '../constant/templateData'

const SelectTemplateNavigator = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
          color: useColorModeValue('#444', '#ddd'),
        },
        backBehavior: 'none',
        tabBarStyle: {
          backgroundColor: useColorModeValue(themeColors.light.bg, themeColors.dark.bg),
        },
        tabBarIndicatorStyle: { backgroundColor: globalColors.primary },
      }}
    >
      <Tab.Screen name='All'>
        {(props) => (
          <SelectTemplate list={templateList.all} profile={route?.params?.profile} {...props} />
        )}
      </Tab.Screen>
      <Tab.Screen name='Professional'>
        {(props) => (
          <SelectTemplate
            list={templateList.professional}
            profile={route?.params?.profile}
            {...props}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name='Modern'>
        {(props) => (
          <SelectTemplate list={templateList.modern} profile={route?.params?.profile} {...props} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default SelectTemplateNavigator
