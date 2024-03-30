import plugin from 'tailwindcss/plugin'
import { spacing } from 'tailwindcss/defaultTheme'

const rootClassName = 'inv-rad'

const baseStyles = {
  [`--${rootClassName}-tl-size`]: 0,
  [`--${rootClassName}-tr-size`]: 0,
  [`--${rootClassName}-bl-size`]: 0,
  [`--${rootClassName}-br-size`]: 0,
  'mask-image': [
    `radial-gradient(var(--${rootClassName}-tl-size, 0) at left top, rgba(0, 0, 0, 0) 98%, rgb(0, 0, 0))`,
    `radial-gradient(var(--${rootClassName}-tr-size, 0) at right top, rgba(0, 0, 0, 0) 98%, rgb(0, 0, 0))`,
    `radial-gradient(var(--${rootClassName}-bl-size, 0) at left bottom, rgba(0, 0, 0, 0) 98%, rgb(0, 0, 0))`,
    `radial-gradient(var(--${rootClassName}-br-size, 0) at right bottom, rgba(0, 0, 0, 0) 98%, rgb(0, 0, 0))`,
  ].join(',\n'),
  'mask-position': 'left top, right top, left bottom, right bottom',
  'mask-mode': 'match-source, match-source, match-source, match-source',
  'mask-origin': 'border-box, border-box, border-box, border-box',
  'mask-clip': 'border-box, border-box, border-box, border-box',
  'mask-composite': 'add, add, add, add',
  'mask-repeat': 'no-repeat',
  'mask-size': '51% 51%',
}

const invRad = plugin(
  function ({ addComponents, theme, e }) {
    const spacing: Record<string, string> = theme('invRad') ?? {}

    const generateStyles = ({ prefix, properties }: { prefix?: string; properties: string[] }) => {
      return Object.entries(spacing).map(([key, value]) => {
        const styles: Record<string, string> = properties.reduce(
          (acc: Record<string, string>, prop: string) => {
            acc[`--${rootClassName}-${prop}-size`] = value
            return acc
          },
          {}
        )
        return {
          [`.${e(`${rootClassName}${prefix ? `-${prefix}` : ''}-${key}`)}`]: styles,
        }
      })
    }

    addComponents([
      // @ts-ignore TS2322
      {
        [`.${e(rootClassName)}`]: baseStyles,
      },
      ...generateStyles({ properties: ['tl', 'tr', 'bl', 'br'] }),
      ...generateStyles({ prefix: 't', properties: ['tl', 'tr'] }),
      ...generateStyles({ prefix: 't-l', properties: ['tl'] }),
      ...generateStyles({ prefix: 't-r', properties: ['tr'] }),
      ...generateStyles({ prefix: 'b', properties: ['bl', 'br'] }),
      ...generateStyles({ prefix: 'b-l', properties: ['bl'] }),
      ...generateStyles({ prefix: 'b-r', properties: ['br'] }),
      ...generateStyles({ prefix: 'l', properties: ['tl', 'bl'] }),
      ...generateStyles({ prefix: 'r', properties: ['tr', 'br'] }),
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

export default invRad
