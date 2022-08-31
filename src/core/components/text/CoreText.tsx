import React from 'react'
import { Text, TextProps } from 'react-native-ui-lib'

import { BgProps, ColorProps, TypographyProps } from 'core/foundation'

type Props = TextProps & BgProps & TypographyProps & ColorProps

const CoreText: React.FC<Props> = props => {
  return <Text {...props} />
}

export default CoreText
