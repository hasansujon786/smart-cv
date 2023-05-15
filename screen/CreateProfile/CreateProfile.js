import React, { useCallback, useContext } from 'react'
import { FlatList, TouchableHighlight } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import { Stack, Text } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'
import Icon from '../../components/Icon'
import SectionItem from '../../components/SectionItem'
import SectionTitle from '../../components/SectionTitle'
import { Center } from '../../components/atom'
import { LazyScreenLoader, useLazyScreenLoader } from '../../composables'
import { linearGradient } from '../../constant'
import { InterstitialAdContext } from '../../services'
import { useProfileStore } from '../../store/profiles'

export const defaultSectionList = [
  {
    renderSeparator: 'Sections',
    key: 'sepa-sections',
  },
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
  {
    renderSeparator: 'More',
    key: 'sepa-more',
  },
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

  const interstitialAd = useContext(InterstitialAdContext)
  const onViewCv = () => {
    interstitialAd.showAdIfLoaded()
    navigation.navigate('SelectTemplate', { profile })
  }
  const navToSeledForm = (route, key) => {
    navigation.navigate(route, {
      editMode,
      profileId: profileId,
      [key]: profile && profile[key] && profile[key],
    })
  }

  const { isPageReady } = useLazyScreenLoader()
  if (!isPageReady) return <LazyScreenLoader />

  return (
    <Stack flex={1} bc='$background'>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 16 }}
        data={defaultSectionList}
        initialNumToRender={1}
        renderItem={({ item, index }) => (
          <Animated.View key={item.key} entering={FadeIn.delay(50 * index)}>
            {item.renderSeparator ? (
              <SectionTitle>{item.renderSeparator}</SectionTitle>
            ) : (
              <SectionItem icon={item.icon} text={item.name} onSelect={() => navToSeledForm(item.route, item.key)} />
            )}
          </Animated.View>
        )}
      />

      {profile && (
        <TouchableHighlight onPress={onViewCv}>
          <LinearGradient height='$6' {...linearGradient}>
            <Center flex={1} flexDirection='row'>
              <Icon color='white' name='eye-outline' />
              <Text fontSize={16} ml='$2' color='white'>
                View CV
              </Text>
            </Center>
          </LinearGradient>
        </TouchableHighlight>
      )}
    </Stack>
  )
}

export default CreateProfile
