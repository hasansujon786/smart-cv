import { createStackNavigator } from '@react-navigation/stack'
import GradientHeader from '../components/GradientHeader'

import Home from '../screens/Home'

const Stack = createStackNavigator()

function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <GradientHeader {...props} />,
      }}
    >
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default RootNavigation
