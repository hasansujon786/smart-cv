export const pageSizes = [
  // https://www.papersizes.org/a-sizes-in-pixels.htm
  { ppi72: { height: 842, width: 595 }, name: 'A4', value: 'a4' },
  { ppi72: { height: 792, width: 612 }, name: 'US Letter', value: 'us letter' },
]

export const defaultImageQuality = 'low'
export const imageQualitys = {
  highest: 0.9,
  high: 0.7,
  medium: 0.5,
  low: 0.4,
  lowest: 0.2,
}
export const imageQualityOptions = [
  { name: 'Highest', value: 'highest' },
  { name: 'High', value: 'high' },
  { name: 'Medium', value: 'medium' },
  { name: 'Low', value: 'low' },
  { name: 'Lowest', value: 'lowest' },
]
