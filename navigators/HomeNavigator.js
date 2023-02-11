import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import GradientHeader from '../components/GradientHeader'
import Icon from '../components/Icon'
import { IconButton, useColorModeValue } from 'native-base'
const Drawer = createDrawerNavigator();

import Sidebar from '../components/Sidebar'
import Home from '../screen/Home'
import Settings from '../screen/Settings'
import { globalColors } from '../constant/globalStyles';


const MenuIcon = ({ navigation, headerTintColor }) => {
  return (
    <IconButton
      colorScheme='light'
      rounded='full'
      size='lg'
      onPress={() => navigation.openDrawer()}
      icon={<Icon color={headerTintColor} name='menu-outline' size={7} />}
    />
  )
}

const HomeNavigator = () => {
  const drawerInactiveTintColor = useColorModeValue('#666', '#f3e8ff')

  return (
    <Drawer.Navigator
      drawerContent={(props) => <Sidebar {...props} drawerInactiveTintColor={drawerInactiveTintColor} />}
      initialRouteName='HomeScreen'
      screenOptions={{
        header: props => <GradientHeader {...props} headerLeft={(props) => <MenuIcon {...props} />} />,
        drawerActiveBackgroundColor: '#f3e8ff',
        drawerActiveTintColor: globalColors.primary,
        drawerInactiveTintColor: drawerInactiveTintColor,
      }}
    >
      <Drawer.Screen name='HomeScreen'
        component={Home}
        options={{
          title: 'Smart CV',
          drawerIcon: (props) => <Icon name='home-outline' {...props} size='sm' />
        }}
      />
      <Drawer.Screen
        name='Settings'
        component={Settings}
        options={{
          drawerIcon: (props) => <Icon name='settings-outline' {...props} size='sm' />
        }}
      />
    </Drawer.Navigator>
  )
}

export default HomeNavigator
