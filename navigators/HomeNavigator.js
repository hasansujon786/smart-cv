import { createDrawerNavigator } from '@react-navigation/drawer'
import { IconButton, useColorModeValue } from 'native-base'
import React from 'react'
import GradientHeader from '../components/GradientHeader'
import Icon from '../components/Icon'
import Sidebar from '../components/Sidebar'
import { globalColors } from '../constant/globalStyles'
import Home from '../screen/Home'
import Settings from '../screen/Settings'

const MenuIcon = ({ navigation, headerTintColor }) => {
  return (
    <IconButton
      size={12}
      colorScheme='light'
      rounded='full'
      onPress={() => navigation.openDrawer()}
      icon={<Icon color={headerTintColor} name='menu-outline' size='lg' />}
    />
  )
}

const Drawer = createDrawerNavigator()
const HomeNavigator = () => {
  const drawerInactiveTintColor = useColorModeValue('#666', '#f3e8ff')

  return (
    <Drawer.Navigator
      drawerContent={(props) => <Sidebar {...props} drawerInactiveTintColor={drawerInactiveTintColor} />}
      initialRouteName='HomeScreen'
      screenOptions={{
        header: (props) => <GradientHeader {...props} headerLeft={(props) => <MenuIcon {...props} />} />,
        drawerActiveBackgroundColor: '#f3e8ff',
        drawerActiveTintColor: globalColors.primary,
        drawerInactiveTintColor: drawerInactiveTintColor,
      }}
    >
      <Drawer.Screen
        name='HomeScreen'
        component={Home}
        options={{
          title: 'Smart CV',
          drawerIcon: (props) => <Icon name='home-outline' {...props} size='md' />,
        }}
      />
      <Drawer.Screen
        name='Settings'
        component={Settings}
        options={{
          drawerIcon: (props) => <Icon name='settings-outline' {...props} size='md' />,
        }}
      />
    </Drawer.Navigator>
  )
}

export default HomeNavigator
