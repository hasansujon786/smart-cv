import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { useTheme } from 'tamagui'
import GradientHeader from '../components/GradientHeader'
import Icon from '../components/Icon'
import Sidebar from '../components/Sidebar'
import { GroustIconButton } from '../components/atom'
import { APP_NAME } from '../constant'
import { globalColors } from '../constant/globalStyles'
import Home from '../screen/Home'
import Settings from '../screen/Settings'

const MenuIcon = ({ navigation, headerTintColor }) => {
  return (
    <GroustIconButton
      size='$5'
      circular
      onPress={navigation.openDrawer}
      icon={<Icon color={headerTintColor} name='menu-outline' size='lg' />}
    />
  )
}

const Drawer = createDrawerNavigator()
const HomeNavigator = () => {
  const theme = useTheme()
  const drawerInactiveTintColor = theme.muted2.val

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
          title: APP_NAME,
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
