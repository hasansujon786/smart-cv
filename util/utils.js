export const devlog = (...args) => {
  __DEV__ && console.log(...args)
}
