import { create } from 'zustand'
import Profile from '../models/Profile'
import { getNewId, storeData, getData } from '../util'

const PROFILES = '@profiles'

export const useProfileStore = create((set, get) => ({
  profiles: [],
  restore: async () => {
    // get previous saved data
    const profiles = (await getData(PROFILES)) || []
    set({ profiles: profiles })
  },
  create: async (profileId, key, newProfileData) => {
    const profiles = get().profiles
    const foundIndex = profiles.findIndex((profile) => profile.id == profileId)
    if (foundIndex == -1) {
      // Create new profile
      const profile = new Profile(profileId)
      const updatedProfiles = [{ ...profile, [key]: newProfileData }, ...profiles]
      set({ profiles: updatedProfiles })
      await storeData(PROFILES, updatedProfiles)
    } else {
      // Update existing profile
      const updatedProfiles = [...profiles]
      updatedProfiles[foundIndex][key] = newProfileData
      set({ profiles: updatedProfiles })
      await storeData(PROFILES, updatedProfiles)
    }
  },
  deleteById: async (id) => {
    const oldProfiles = get().profiles
    const currentProfiles = oldProfiles.filter((profile) => profile.id != id)
    set({ profiles: currentProfiles })
    await storeData(PROFILES, currentProfiles)
  },
  reset: async () => {
    set({ profiles: [] })
    await storeData(PROFILES, [])
  },
  createDummyProfile: async () => {
    const dummyProfile = require('../pdf-templates/src/templates/dummy').dummyProfile
    const profiles = get().profiles
    const updatedProfiles = [{ ...dummyProfile, id: getNewId() }, ...profiles]
    set({ profiles: updatedProfiles })
    storeData(PROFILES, updatedProfiles)
  },
}))
