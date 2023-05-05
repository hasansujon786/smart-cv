import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import GradientHeader from '../components/GradientHeader'

import HomeNavigator from './HomeNavigator'
import SelectTemplateNavigator from './SelectTemplateNavigator'

import Achievements from '../screen/CreateProfile/Achievements'
import AdditionalInformation from '../screen/CreateProfile/AdditionalInformation'
import CreateProfile from '../screen/CreateProfile/CreateProfile'
import Education from '../screen/CreateProfile/Education'
import Experience from '../screen/CreateProfile/Experience'
import Interests from '../screen/CreateProfile/Interests'
import Language from '../screen/CreateProfile/Language'
import Objective from '../screen/CreateProfile/Objective'
import PersonalDetails from '../screen/CreateProfile/PersonalDetails'
import Projects from '../screen/CreateProfile/Projects'
import References from '../screen/CreateProfile/References'
import Skills from '../screen/CreateProfile/Skills'
import Playground from '../screen/Playground'
import Profiles from '../screen/Profiles'
import Template from '../screen/Template'
import ZoomView from '../screen/ZoomView'
// import LogScreen from '../screen/LogScreen'

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <GradientHeader {...props} />
      }}
    >
      <Stack.Screen name='Home' component={HomeNavigator} options={{ title: 'Smart CV', headerShown: false }} />
      <Stack.Screen name='Play' component={Playground} options={{ title: 'Playground' }} />
      {/* <Stack.Screen name='Logs' component={LogScreen}  /> */}

      <Stack.Screen name='Profiles' component={Profiles} options={{ title: 'Choose Profile' }} />
      <Stack.Screen name='CreateProfile' component={CreateProfile} options={({ route }) => ({ title: route.params.title || 'Create Profile' })} />
      <Stack.Screen name='PersonalDetails' component={PersonalDetails} options={{ title: 'Personal Details', }} />
      <Stack.Screen name='Education' component={Education} />
      <Stack.Screen name='Experience' component={Experience} />
      <Stack.Screen name='Objective' component={Objective} />
      <Stack.Screen name='Skills' component={Skills} />
      <Stack.Screen name='Interests' component={Interests} />
      <Stack.Screen name='Achievements' component={Achievements} />
      <Stack.Screen name='Language' component={Language} />
      <Stack.Screen name='AdditionalInformation' component={AdditionalInformation} options={{ title: 'Additional Info' }} />
      <Stack.Screen name='References' component={References} />
      <Stack.Screen name='Projects' component={Projects} />

      <Stack.Screen name='SelectTemplate' component={SelectTemplateNavigator} options={{ title: 'Select Template' }} />
      <Stack.Screen name='Template' component={Template} />
      <Stack.Screen name='ZoomView' component={ZoomView}
        options={{
          title: 'Smart CV',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#49494a' },
          headerTintColor: '#aaa',
        }}
      />
    </Stack.Navigator>
  )
}

export default RootNavigator
