import plugin from 'tailwindcss/plugin'
import { spacing } from 'tailwindcss/defaultTheme'

type Position = 't' | 't-l' | 't-r' | 'b' | 'b-l' | 'b-r' | 'l' | 'r'

const rootClassName = 'inv-rad'

const baseStyles = {
  [`--${rootClassName}-tl-size`]: 0,
  [`--${rootClassName}-tr-size`]: 0,
  [`--${rootClassName}-bl-size`]: 0,
  [`--${rootClassName}-br-size`]: 0,
  'mask-position': 'left top, right top, left bottom, right bottom',
  'mask-mode': 'match-source, match-source, match-source, match-source',
  'mask-origin': 'border-box, border-box, border-box, border-box',
  'mask-clip': 'border-box, border-box, border-box, border-box',
  'mask-composite': 'add, add, add, add',
  'mask-repeat': 'no-repeat',
  'mask-size': '51% 51%',
}

const generateMaskImage = (position?: Position) => {
  const gradients = [
    { key: 'tl', pos: 'left top', matches: ['t', 't-l', 'l'] },
    { key: 'tr', pos: 'right top', matches: ['t', 't-r', 'r'] },
    { key: 'bl', pos: 'left bottom', matches: ['b', 'b-l', 'l'] },
    { key: 'br', pos: 'right bottom', matches: ['b', 'b-r', 'r'] },
  ]

  return gradients
    .map(
      ({ key, pos, matches }) =>
        `radial-gradient(var(--${rootClassName}-${key}-size, 0) at ${pos}, rgba(0, 0, 0, 0) ${
          !position || matches.includes(position) ? '98%' : '0'
        }, rgb(0, 0, 0))`
    )
    .join(',\n')
}

export = plugin(
  function invRad({ addComponents, theme, e }) {
    const values: Record<string, string> = theme('invRad') ?? {}

    const generateStyles = ({
      position,
      properties,
    }: {
      position?: Position
      properties: string[]
    }) => {
      return Object.entries(values).map(([key, value]) => {
        const styles: Record<string, string> = properties.reduce(
          (acc: Record<string, string>, prop: string) => {
            acc[`--${rootClassName}-${prop}-size`] = value
            return acc
          },
          {}
        )
        styles['mask-image'] = generateMaskImage(position)

        return {
          [`.${e(`${rootClassName}${position ? `-${position}` : ''}-${key}`)}`]: styles,
        }
      })
    }

    addComponents([
      // @ts-ignore TS2322
      {
        [`.${e(rootClassName)}`]: baseStyles,
      },
      ...generateStyles({ properties: ['tl', 'tr', 'bl', 'br'] }),
      ...generateStyles({ position: 't', properties: ['tl', 'tr'] }),
      ...generateStyles({ position: 't-l', properties: ['tl'] }),
      ...generateStyles({ position: 't-r', properties: ['tr'] }),
      ...generateStyles({ position: 'b', properties: ['bl', 'br'] }),
      ...generateStyles({ position: 'b-l', properties: ['bl'] }),
      ...generateStyles({ position: 'b-r', properties: ['br'] }),
      ...generateStyles({ position: 'l', properties: ['tl', 'bl'] }),
      ...generateStyles({ position: 'r', properties: ['tr', 'br'] }),
    ])
  },
  {
    theme: {
      invRad: {
        ...spacing,
      },
    },
    variants: {
      invRad: ['responsive'],
    },
  }
)
