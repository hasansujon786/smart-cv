import { createStackNavigator } from '@react-navigation/stack'
import GradientHeader from '../components/GradientHeader'

import HomeNavigator from './HomeNavigator'
import Profiles from '../screen/Profiles'

const Stack = createStackNavigator()

function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <GradientHeader {...props} />,
      }}
    >
      <Stack.Screen name='Home' component={HomeNavigator} options={{ title: 'Smart CV', headerShown: false }} />
      <Stack.Screen name='Profiles' component={Profiles} options={{ title: 'Choose Profile' }} />
    </Stack.Navigator>
  )
}

export default RootNavigation
