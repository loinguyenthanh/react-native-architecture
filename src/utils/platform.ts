import { Platform as NativePlatform } from 'react-native'

const PLATFORM = NativePlatform.OS
const isAndroid = PLATFORM === 'android'
const isIos = PLATFORM === 'ios'

export default { PLATFORM, isAndroid, isIos }
