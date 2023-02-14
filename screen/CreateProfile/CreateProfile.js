import React, { useState, useCallback, useContext } from 'react'
import { Stack, Box, ScrollView, Center, Text } from 'native-base'
import { TouchableHighlight } from 'react-native'
import SectionItem from '../../components/SectionItem'
import SectionTitle from '../../components/SectionTitle'
import Icon from '../../components/Icon'
import { InterstitialAdContext } from '../../services'
import { useProfileStore } from '../../store/profiles'
import { linearGradient, themeColors } from '../../constant'
import { useLazyScreenLoader, LazyScreenLoader } from '../../composables'

const defaultSectionList = [
  {
    route: 'PersonalDetails',
    key: 'personalDetails',
    name: 'Personal Details',
    icon: 'person-outline',
  },
  {
    route: 'Education',
    key: 'educations',
    name: 'Education',
    icon: 'school-outline',
  },
  {
    route: 'Experience',
    key: 'experiences',
    name: 'Experience',
    icon: 'briefcase-outline',
  },
  {
    route: 'Objective',
    key: 'objective',
    name: 'Objective',
    icon: 'chatbubbles-outline',
  },
  {
    route: 'Skills',
    key: 'skills',
    name: 'Skills',
    icon: 'shield-checkmark-outline',
  },
]

const moreSectionList = [
  {
    route: 'References',
    key: 'references',
    name: 'References',
    icon: 'people-outline',
  },
  {
    route: 'Projects',
    key: 'projects',
    name: 'Projects',
    icon: 'rocket-outline',
  },
  {
    route: 'Interests',
    key: 'interests',
    name: 'Interests',
    icon: 'color-palette-outline',
  },
  {
    route: 'Achievements',
    key: 'achievements',
    name: 'Achievements',
    icon: 'ribbon-outline',
  },
  {
    route: 'Language',
    key: 'languages',
    name: 'Language',
    icon: 'flag-outline',
  },
  {
    route: 'AdditionalInformation',
    key: 'additionalInformation',
    name: 'Additional Information',
    icon: 'reader-outline',
  },
]

const CreateProfile = ({ navigation, route }) => {
  // get profile data
  const { profileId } = route.params
  const allProfiles = useProfileStore(useCallback((state) => state.profiles))
  const profile = allProfiles.find((p) => p.id == profileId)
  const editMode = profile ? true : false

  const [sectionList, setSectionList] = useState(defaultSectionList)

  const interstitialAd = useContext(InterstitialAdContext)
  const onViewCv = () => {
    interstitialAd.showAdIfLoaded()
    navigation.navigate('SelectTemplate', { profile })
  }

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />
  return (
    <Box flex={1} _light={{ bg: themeColors.light.bgDark }} _dark={{ bg: themeColors.dark.bgDark }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <SectionTitle>Sections</SectionTitle>
        <Stack space={3} flex={1} px={3}>
          {sectionList.map((secItem) => (
            <SectionItem
              icon={secItem.icon}
              key={secItem.route}
              text={secItem.name}
              onSelect={() =>
                navigation.navigate(secItem.route, {
                  editMode,
                  profileId: profileId,
                  [secItem.key]: profile && profile[secItem.key] && profile[secItem.key],
                })
              }
            />
          ))}
        </Stack>

        <SectionTitle>More</SectionTitle>
        <Stack space={3} flex={1} px={3}>
          {moreSectionList.map((secItem) => (
            <SectionItem
              icon={secItem.icon}
              key={secItem.route}
              text={secItem.name}
              onSelect={() =>
                navigation.navigate(secItem.route, {
                  editMode,
                  profileId: profileId,
                  [secItem.key]: profile && profile[secItem.key] && profile[secItem.key],
                })
              }
            />
          ))}
        </Stack>
      </ScrollView>

      {profile && (
        <TouchableHighlight onPress={onViewCv}>
          <Center flexDirection='row' py={3} bg={{ linearGradient }}>
            <Icon color='white' name='eye-outline' />
            <Text color='white' ml={2} fontSize='lg'>
              View CV
            </Text>
          </Center>
        </TouchableHighlight>
      )}
    </Box>
  )
}

export default CreateProfile
