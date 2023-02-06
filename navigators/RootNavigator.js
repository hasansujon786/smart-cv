import { createStackNavigator } from '@react-navigation/stack'
import { Box, Text } from 'native-base'
import GradientHeader from '../components/GradientHeader'

function Home() {
  return (
    <Box bg='rose.50'>
      <Text>home</Text>
    </Box>
  )
}

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
