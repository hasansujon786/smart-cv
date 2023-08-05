import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { useTheme } from 'tamagui'
import { globalColors } from '../constant'
import SelectTemplate from '../screen/SelectTemplate'
const Tab = createMaterialTopTabNavigator()

const SelectTemplateNavigator = ({ route }) => {
  const theme = useTheme()
  const bg = theme.layer1.val
  const color = theme.muted2.val

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, color: color },
        backBehavior: 'none',
        tabBarStyle: { backgroundColor: bg },
        tabBarIndicatorStyle: { backgroundColor: globalColors.primary },
      }}
    >
      <Tab.Screen name='all' component={SelectTemplate} initialParams={{ profile: route?.params?.profile }} />
      <Tab.Screen name='professional' component={SelectTemplate} initialParams={{ profile: route?.params?.profile }} />
      <Tab.Screen name='modern' component={SelectTemplate} initialParams={{ profile: route?.params?.profile }} />
    </Tab.Navigator>
  )
}

export default SelectTemplateNavigator
