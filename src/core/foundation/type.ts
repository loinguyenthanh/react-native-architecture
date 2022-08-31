import { COLORS, TYPOGRAPHY } from './style'

// return type bg of color
type Prefix = 'bg-'
export type ColorsType = keyof typeof COLORS
export type BgColors = `${Prefix}${ColorsType}`
export type BgProps = { [Key in BgColors]?: boolean }
export type ColorProps = { [Key in ColorsType]?: boolean }

// TYPOGRAPHY
export type TypographyType = keyof typeof TYPOGRAPHY
export type TypographyProps = { [Key in TypographyType]?: boolean }
