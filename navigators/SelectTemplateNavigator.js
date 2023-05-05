import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { useThemeModeValue } from '../composables'
import { globalColors, themeColors } from '../constant'
import SelectTemplate from '../screen/SelectTemplate'
const Tab = createMaterialTopTabNavigator()

const SelectTemplateNavigator = ({ route }) => {
  const c = useThemeModeValue({ color: '#444', bg: themeColors.light.bg }, { color: '#ddd', bg: themeColors.dark.bg })
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, color: c.color },
        backBehavior: 'none',
        tabBarStyle: { backgroundColor: c.bg },
        tabBarIndicatorStyle: { backgroundColor: globalColors.primary },
      }}
    >
      <Tab.Screen name='professional' component={SelectTemplate} initialParams={{ profile: route?.params?.profile }} />
      <Tab.Screen name='modern' component={SelectTemplate} initialParams={{ profile: route?.params?.profile }} />
      <Tab.Screen name='all' component={SelectTemplate} initialParams={{ profile: route?.params?.profile }} />
    </Tab.Navigator>
  )
}

export default SelectTemplateNavigator
