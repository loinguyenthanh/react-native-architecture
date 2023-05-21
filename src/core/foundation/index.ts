import { Typography, Colors } from 'react-native-ui-lib'
import { COLORS, TYPOGRAPHY } from './style'

export const initFoundationConfig = () => {
  Colors.loadColors(COLORS)
  Typography.loadTypographies(TYPOGRAPHY)
}

const foundation = { COLORS, TYPOGRAPHY }

export * from './type'
export default foundation
