import path from 'path'
import postcss from 'postcss'
import tailwind, { Config } from 'tailwindcss'
import invRad from '../src'

export let css = String.raw
export let html = String.raw
export let javascript = String.raw

export function run(input: string, config: Config, plugin = tailwind) {
  let { currentTestName } = expect.getState()

  config.plugins ??= []
  if (!config.plugins.includes(invRad)) {
    config.plugins.push(invRad)
  }

  return postcss(plugin(config)).process(input, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  })
}
