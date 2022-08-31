import { Dimensions, PixelRatio } from 'react-native'
import Platform from './platform'

const { width, height } = Dimensions.get('window')

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width]
const STANDARD_WINDOW = { width: 375, height: 667 }

export const perWidth = (size: number): number =>
  PixelRatio.roundToNearestPixel((shortDimension * size) / 100)
export const perHeight = (size: number): number =>
  PixelRatio.roundToNearestPixel((longDimension * size) / 100)
export const resWidth = (size: number): number =>
  PixelRatio.roundToNearestPixel(
    (shortDimension / STANDARD_WINDOW.width) * size,
  )
export const resHeight = (size: number): number =>
  PixelRatio.roundToNearestPixel(
    (longDimension / STANDARD_WINDOW.height) * size,
  )
// export const scaleFont = (size, factor = 0.5) => size + (scaleWidth(size) - size) * factor;
export function resFont(size: number): number {
  const newSize = (size * shortDimension) / STANDARD_WINDOW.width
  if (Platform.isIos) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1
}

export default {
  width,
  height,
}
