import AsyncStorage from '@react-native-async-storage/async-storage'
import { devlog } from './utils'

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    devlog('storeData', e)
  }
}

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    devlog('getData', e)
  }
}

export const logData = async (key) => {
  let data = await getData(key)
  devlog(data)
}
