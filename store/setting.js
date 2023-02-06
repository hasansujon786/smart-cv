import {create} from 'zustand'
import { storeData, getData } from '../util'
import { defaultImageQuality, pageSizes } from '../constant'

const PAGE_SIZE = '@page-size'
const IMAGE_QUALITY = '@image-quality'

export const useSettingStore = create((set) => ({
  pageSize: {},
  imageQuality: '',
  restore: async () => {
    // get previous saved data
    const pageSize = (await getData(PAGE_SIZE)) || pageSizes[0]
    const imageQuality = (await getData(IMAGE_QUALITY)) || defaultImageQuality
    set({ pageSize, imageQuality })
  },
  updatePageSize: async (pageName) => {
    const newPageSize = pageSizes.find((ps) => ps.name == pageName)
    set({ pageSize: newPageSize })
    await storeData(PAGE_SIZE, newPageSize)
  },
  updateImageQuality: async (newImgQuality) => {
    set({ imageQuality: newImgQuality })
    await storeData(IMAGE_QUALITY, newImgQuality)
  },
}))
